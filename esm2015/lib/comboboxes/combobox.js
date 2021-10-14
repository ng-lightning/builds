import { __decorate } from "tslib";
import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, ViewChildren, ContentChild, ViewChild, NgZone, ChangeDetectorRef, Optional, Inject } from '@angular/core';
import { ActiveDescendantKeyManager } from '@angular/cdk/a11y';
import { take } from 'rxjs/operators';
import { DEFAULT_DROPDOWN_POSITIONS } from '../util/overlay-position';
import { uniqueId, isOptionSelected, addOptionToSelection } from '../util/util';
import { InputBoolean, InputNumber } from '../util/convert';
import { NglComboboxOption } from './combobox-option';
import { NglComboboxInput } from './combobox-input';
import { NglComboboxService } from './combobox.service';
import { NglComboboxConfig, NGL_COMBOBOX_CONFIG } from './config';
export class NglCombobox {
    constructor(defaultConfig, ngZone, cd, service) {
        this.ngZone = ngZone;
        this.cd = cd;
        this.service = service;
        this.variant = 'base';
        this.uid = uniqueId('combobox');
        this.open = false;
        this.openChange = new EventEmitter();
        this.selectionChange = new EventEmitter();
        this.multiple = false;
        this.visibleLength = 5;
        this.closeOnSelection = true;
        this.overlayWidth = 0;
        this.overlayPositions = [...DEFAULT_DROPDOWN_POSITIONS['left']];
        this.selectionValueFn = (selection) => {
            if (selection.length > 0) {
                if (this.multiple && this.isLookup) {
                    return '';
                }
                return selection.length === 1 ? selection[0] : `${selection.length} options selected`;
            }
            return '';
        };
        const config = Object.assign(Object.assign({}, new NglComboboxConfig()), defaultConfig);
        this.loadingLabel = config.loadingLabel;
        this.noOptionsFound = config.noOptionsFound;
        this.removeSelectedLabel = config.removeSelectedLabel;
        this.service.combobox = this;
        // this.service.openChange = this.openChange;
    }
    set data(data) {
        this._data = (data || []).map((d) => {
            if (typeof d === 'string') {
                // Support array of strings as options, by mapping to NglComboboxOptionItem
                return { value: d, label: d };
            }
            else if (!d.label) {
                // Use `value` if missing `label`
                return Object.assign(Object.assign({}, d), { label: d.value });
            }
            return d;
        });
    }
    get data() {
        return this._data;
    }
    get activeOption() {
        return this.keyManager ? this.keyManager.activeItem : null;
    }
    get selectedOptions() {
        return this.data ? this.data.filter(d => this.isSelected(d.value)) : [];
    }
    get isLookup() {
        return this.variant === 'lookup';
    }
    get hasLookupSingleSelection() {
        return this.isLookup && !this.multiple && this.selectedOptions.length > 0;
    }
    ngOnChanges(changes) {
        if (changes.selection || (this.selection && changes.data)) {
            this.calculateDisplayValue();
        }
    }
    onAttach() {
        var _a, _b, _c, _d, _e;
        // Same width as the trigger element
        this.overlayWidth = (_a = this.overlayOrigin) === null || _a === void 0 ? void 0 : _a.elementRef.nativeElement.offsetWidth;
        this.cd.detectChanges();
        this.keyManager = this.options && new ActiveDescendantKeyManager(this.options).withWrap();
        // Activate selected item or first option
        const selectedOption = (_b = this.options) === null || _b === void 0 ? void 0 : _b.find(o => o.selected);
        if (selectedOption) {
            (_c = this.keyManager) === null || _c === void 0 ? void 0 : _c.setActiveItem(selectedOption);
        }
        else {
            (_d = this.keyManager) === null || _d === void 0 ? void 0 : _d.setFirstItemActive();
        }
        // Listen to button presses if picklist to activate matching option
        this.keyboardSubscribe(this.variant === 'base');
        // When it is open we listen for option changes in order to fix active option and handle scroll
        this.optionChangesSubscription = (_e = this.options) === null || _e === void 0 ? void 0 : _e.changes.subscribe(() => {
            var _a, _b;
            if (!this.activeOption || ((_a = this.options) === null || _a === void 0 ? void 0 : _a.toArray().indexOf(this.activeOption)) === -1) {
                // Activate first option if active one is destroyed
                (_b = this.keyManager) === null || _b === void 0 ? void 0 : _b.setFirstItemActive();
            }
            else {
                this.activeOption.scrollIntoView();
            }
            this.updateMenuHeight();
        });
        this.updateMenuHeight();
    }
    onDetach() {
        var _a;
        if (this.open) {
            this.close();
            return;
        }
        // Clear aria-activedescendant when menu is closed
        (_a = this.inputEl) === null || _a === void 0 ? void 0 : _a.setAriaActiveDescendant(null);
        this.detach();
    }
    trackByOption(_index, option) {
        return option.value;
    }
    dropdownClass() {
        return {
            [`slds-dropdown_length-${this.visibleLength}`]: this.visibleLength > 0,
        };
    }
    inputIconRight() {
        return this.isLookup ? 'utility:search' : 'utility:down';
    }
    hasNoMatches() {
        return this.isLookup && this.data.length === 0 && !this.loadingMore;
    }
    onOptionSelection(option = this.activeOption) {
        if (option) {
            const selection = addOptionToSelection(option.value, this.selection, this.multiple);
            this.selectionChange.emit(selection);
            if (this.closeOnSelection) {
                this.close();
            }
        }
    }
    // Trigger by clear button on Lookup
    onClearSelection() {
        this.selectionChange.emit(null);
        setTimeout(() => { var _a; return (_a = this.inputEl) === null || _a === void 0 ? void 0 : _a.focus(); }, 0);
    }
    /**
     * Check whether value is currently selected.
     *
     * @param value The value in test, whether is (part of) selection or not
     */
    isSelected(value) {
        return isOptionSelected(value, this.selection, this.multiple);
    }
    ngOnDestroy() {
        this.detach();
    }
    close() {
        this.openChange.emit(false);
    }
    detach() {
        this.keyboardSubscribe(false);
        this.keyManager = null;
        if (this.optionChangesSubscription) {
            this.optionChangesSubscription.unsubscribe();
            this.optionChangesSubscription = null;
        }
    }
    calculateDisplayValue() {
        var _a;
        const value = this.selectionValueFn(this.selectedOptions.map(option => option.label || ''));
        (_a = this.inputEl) === null || _a === void 0 ? void 0 : _a.setValue(value);
    }
    keyboardSubscribe(listen) {
        if (this.keyboardSubscription) {
            this.keyboardSubscription.unsubscribe();
            this.keyboardSubscription = null;
        }
        if (listen && this.inputEl) {
            this.keyboardSubscription = this.inputEl.keyboardBuffer$.subscribe((pattern) => {
                if (this.options && this.keyManager) {
                    pattern = pattern.toLocaleLowerCase();
                    const options = this.options.toArray();
                    const activeIndex = this.activeOption ? (this.keyManager.activeItemIndex || 0) + 1 : 0;
                    for (let i = 0, n = options.length; i < n; i++) {
                        const index = (activeIndex + i) % n;
                        const option = options[index];
                        if (!option.disabled && option.label.toLocaleLowerCase().substr(0, pattern.length) === pattern) {
                            this.keyManager.setActiveItem(option);
                            break;
                        }
                    }
                }
            });
        }
    }
    updateMenuHeight() {
        this.ngZone.onStable.asObservable().pipe(take(1)).subscribe(() => {
            if (this.cdkOverlay && this.dropdownElementRef) {
                const { overlayRef } = this.cdkOverlay;
                const height = this.dropdownElementRef.nativeElement.offsetHeight;
                overlayRef.updateSize({
                    minHeight: height + 4,
                });
                overlayRef.updatePosition();
            }
        });
    }
}
NglCombobox.decorators = [
    { type: Component, args: [{
                selector: 'ngl-combobox',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: "\n<label [nglFormLabel]=\"label\" [attr.for]=\"inputEl.id\"></label>\n<div class=\"slds-form-element__control\">\n  <div class=\"slds-combobox_container\" [class.slds-has-selection]=\"hasLookupSingleSelection\">\n    <div class=\"slds-combobox slds-dropdown-trigger slds-dropdown-trigger_click\" [attr.aria-expanded]=\"open\" aria-haspopup=\"listbox\" role=\"combobox\" [class.slds-is-open]=\"open\" [attr.aria-owns]=\"uid\">\n      <div class=\"slds-combobox__form-element slds-input-has-icon\" role=\"none\" cdkOverlayOrigin #overlayOrigin=\"cdkOverlayOrigin\" [class.slds-input-has-icon_group-right]=\"loading\" [class.slds-input-has-icon_right]=\"!loading\">\n        <ng-content select=\"input\"></ng-content>\n        <div class=\"slds-input__icon-group slds-input__icon-group_right\" *ngIf=\"loading; else iconRight\">\n          <div class=\"slds-spinner slds-spinner_brand slds-spinner_x-small slds-input__spinner\" role=\"status\"><span class=\"slds-assistive-text\">{{ loadingLabel }}</span>\n            <div class=\"slds-spinner__dot-a\"></div>\n            <div class=\"slds-spinner__dot-b\"></div>\n          </div>\n          <ng-template [ngTemplateOutlet]=\"iconRight\"></ng-template>\n        </div>\n        <ng-template #iconRight>\n          <button class=\"slds-button slds-button_icon slds-input__icon slds-input__icon_right\" *ngIf=\"hasLookupSingleSelection; else iconTpl\" type=\"button\" (click)=\"onClearSelection()\" [title]=\"removeSelectedLabel\">\n            <svg class=\"slds-button__icon\" nglIconName=\"utility:close\"></svg><span class=\"slds-assistive-text\">{{ removeSelectedLabel }}</span>\n          </button>\n        </ng-template>\n        <ng-template #iconTpl><span class=\"slds-icon_container slds-input__icon slds-input__icon_right\">\n            <svg class=\"slds-icon slds-icon_x-small slds-icon-text-default\" [nglIconName]=\"inputIconRight()\"></svg></span></ng-template>\n      </div>\n    </div>\n  </div>\n</div>\n<ng-template cdkConnectedOverlay #cdkOverlay=\"cdkConnectedOverlay\" [cdkConnectedOverlayPositions]=\"overlayPositions\" [cdkConnectedOverlayOrigin]=\"overlayOrigin\" [cdkConnectedOverlayMinWidth]=\"overlayWidth\" [cdkConnectedOverlayOpen]=\"open\" (nglOverlayScrolledOutsideView)=\"close()\" (attach)=\"onAttach()\" (detach)=\"onDetach()\">\n  <div class=\"slds-dropdown slds-dropdown_fluid\" #dropdown [attr.id]=\"uid\" role=\"listbox\" [ngClass]=\"dropdownClass()\" (mousedown)=\"$event.preventDefault()\">\n    <ul class=\"slds-listbox slds-listbox_vertical\" role=\"presentation\">\n      <li *ngFor=\"let d of data; trackBy: trackByOption\" nglComboboxOption [value]=\"d.value\" [label]=\"d.label\" [disabled]=\"d.disabled\" [selected]=\"isSelected(d.value)\"></li>\n      <li class=\"slds-listbox__item\" *ngIf=\"loadingMore\" role=\"presentation\">\n        <div class=\"slds-align_absolute-center slds-p-top_medium\">\n          <div class=\"slds-spinner slds-spinner_x-small slds-spinner_inline\" role=\"status\">\n            <div class=\"slds-assistive-text\">{{ loadingLabel }}</div>\n            <div class=\"slds-spinner__dot-a\"></div>\n            <div class=\"slds-spinner__dot-b\"></div>\n          </div>\n        </div>\n      </li>\n      <li class=\"slds-listbox__item\" *ngIf=\"hasNoMatches()\" role=\"presentation\" aria-live=\"polite\">\n        <div class=\"slds-align_absolute-center\"><span role=\"status\">{{ noOptionsFound }}</span></div>\n      </li>\n    </ul>\n  </div>\n</ng-template>",
                host: {
                    'class.slds-form-element': 'true',
                },
                providers: [NglComboboxService]
            },] }
];
NglCombobox.ctorParameters = () => [
    { type: NglComboboxConfig, decorators: [{ type: Optional }, { type: Inject, args: [NGL_COMBOBOX_CONFIG,] }] },
    { type: NgZone },
    { type: ChangeDetectorRef },
    { type: NglComboboxService }
];
NglCombobox.propDecorators = {
    variant: [{ type: Input }],
    label: [{ type: Input }],
    open: [{ type: Input }],
    openChange: [{ type: Output }],
    selection: [{ type: Input }],
    selectionChange: [{ type: Output }],
    multiple: [{ type: Input }],
    visibleLength: [{ type: Input }],
    inputEl: [{ type: ContentChild, args: [NglComboboxInput, { static: true },] }],
    loading: [{ type: Input }],
    loadingMore: [{ type: Input }],
    closeOnSelection: [{ type: Input }],
    loadingLabel: [{ type: Input }],
    noOptionsFound: [{ type: Input }],
    removeSelectedLabel: [{ type: Input }],
    options: [{ type: ViewChildren, args: [NglComboboxOption,] }],
    data: [{ type: Input, args: ['options',] }],
    overlayOrigin: [{ type: ViewChild, args: ['overlayOrigin', { static: true },] }],
    cdkOverlay: [{ type: ViewChild, args: ['cdkOverlay',] }],
    dropdownElementRef: [{ type: ViewChild, args: ['dropdown',] }],
    selectionValueFn: [{ type: Input }]
};
__decorate([
    InputBoolean()
], NglCombobox.prototype, "open", void 0);
__decorate([
    InputBoolean()
], NglCombobox.prototype, "multiple", void 0);
__decorate([
    InputNumber()
], NglCombobox.prototype, "visibleLength", void 0);
__decorate([
    InputBoolean()
], NglCombobox.prototype, "loading", void 0);
__decorate([
    InputBoolean()
], NglCombobox.prototype, "loadingMore", void 0);
__decorate([
    InputBoolean()
], NglCombobox.prototype, "closeOnSelection", void 0);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tYm9ib3guanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1saWdodG5pbmcvc3JjL2xpYi9jb21ib2JveGVzL2NvbWJvYm94LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLHVCQUF1QixFQUMvRCxZQUFZLEVBQTRCLFlBQVksRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFjLGlCQUFpQixFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekosT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFHL0QsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3RDLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3RFLE9BQU8sRUFBRSxRQUFRLEVBQUUsZ0JBQWdCLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDaEYsT0FBTyxFQUFFLFlBQVksRUFBRSxXQUFXLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNwRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFpQmxFLE1BQU0sT0FBTyxXQUFXO0lBMEd0QixZQUFxRCxhQUFnQyxFQUNqRSxNQUFjLEVBQ2QsRUFBcUIsRUFDckIsT0FBMkI7UUFGM0IsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLE9BQUUsR0FBRixFQUFFLENBQW1CO1FBQ3JCLFlBQU8sR0FBUCxPQUFPLENBQW9CO1FBM0d0QyxZQUFPLEdBQXNCLE1BQU0sQ0FBQztRQUlwQyxRQUFHLEdBQUcsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBRVgsU0FBSSxHQUFHLEtBQUssQ0FBQztRQUU1QixlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQUl6QyxvQkFBZSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFFdEIsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUVsQixrQkFBYSxHQUFlLENBQUMsQ0FBQztRQVE3QixxQkFBZ0IsR0FBRyxJQUFJLENBQUM7UUF5Q2pELGlCQUFZLEdBQUcsQ0FBQyxDQUFDO1FBRWpCLHFCQUFnQixHQUE2QixDQUFDLEdBQUcsMEJBQTBCLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQVc1RSxxQkFBZ0IsR0FBRyxDQUFDLFNBQW1CLEVBQVUsRUFBRTtZQUMxRCxJQUFJLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO2dCQUN4QixJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtvQkFDbEMsT0FBTyxFQUFFLENBQUM7aUJBQ1g7Z0JBQ0QsT0FBTyxTQUFTLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxNQUFNLG1CQUFtQixDQUFDO2FBQ3ZGO1lBQ0QsT0FBTyxFQUFFLENBQUM7UUFDWixDQUFDLENBQUE7UUFzQkMsTUFBTSxNQUFNLG1DQUFRLElBQUksaUJBQWlCLEVBQUUsR0FBSyxhQUFhLENBQUUsQ0FBQztRQUNoRSxJQUFJLENBQUMsWUFBWSxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUM7UUFDeEMsSUFBSSxDQUFDLGNBQWMsR0FBRyxNQUFNLENBQUMsY0FBYyxDQUFDO1FBQzVDLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxNQUFNLENBQUMsbUJBQW1CLENBQUM7UUFFdEQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQzdCLDZDQUE2QztJQUMvQyxDQUFDO0lBeEVELElBQXNCLElBQUksQ0FBQyxJQUFXO1FBQ3BDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUU7WUFDbEMsSUFBSSxPQUFPLENBQUMsS0FBSyxRQUFRLEVBQUU7Z0JBQ3pCLDJFQUEyRTtnQkFDM0UsT0FBTyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDO2FBQy9CO2lCQUFNLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFO2dCQUNuQixpQ0FBaUM7Z0JBQ2pDLHVDQUFZLENBQUMsS0FBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLEtBQUssSUFBRzthQUNqQztZQUNELE9BQU8sQ0FBQyxDQUFDO1FBQ1gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0QsSUFBSSxJQUFJO1FBQ04sT0FBTyxJQUFJLENBQUMsS0FBYyxDQUFDO0lBQzdCLENBQUM7SUErQkQsSUFBSSxZQUFZO1FBQ2QsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQzdELENBQUM7SUFFRCxJQUFJLGVBQWU7UUFDakIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUMxRSxDQUFDO0lBRUQsSUFBSSxRQUFRO1FBQ1YsT0FBTyxJQUFJLENBQUMsT0FBTyxLQUFLLFFBQVEsQ0FBQztJQUNuQyxDQUFDO0lBRUQsSUFBSSx3QkFBd0I7UUFDMUIsT0FBTyxJQUFJLENBQUMsUUFBUSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDNUUsQ0FBQztJQWVELFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxJQUFJLE9BQU8sQ0FBQyxTQUFTLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUN6RCxJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQztTQUM5QjtJQUNILENBQUM7SUFFRCxRQUFROztRQUNOLG9DQUFvQztRQUNwQyxJQUFJLENBQUMsWUFBWSxHQUFHLE1BQUEsSUFBSSxDQUFDLGFBQWEsMENBQUUsVUFBVSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUM7UUFDN0UsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUV4QixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSwwQkFBMEIsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7UUFFMUYseUNBQXlDO1FBQ3pDLE1BQU0sY0FBYyxHQUFHLE1BQUEsSUFBSSxDQUFDLE9BQU8sMENBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzNELElBQUksY0FBYyxFQUFFO1lBQ2xCLE1BQUEsSUFBSSxDQUFDLFVBQVUsMENBQUUsYUFBYSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1NBQ2hEO2FBQU07WUFDTCxNQUFBLElBQUksQ0FBQyxVQUFVLDBDQUFFLGtCQUFrQixFQUFFLENBQUM7U0FDdkM7UUFFRCxtRUFBbUU7UUFDbkUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxPQUFPLEtBQUssTUFBTSxDQUFDLENBQUM7UUFFaEQsK0ZBQStGO1FBQy9GLElBQUksQ0FBQyx5QkFBeUIsR0FBRyxNQUFBLElBQUksQ0FBQyxPQUFPLDBDQUFFLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFOztZQUNwRSxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksSUFBSSxDQUFBLE1BQUEsSUFBSSxDQUFDLE9BQU8sMENBQUUsT0FBTyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQUssQ0FBQyxDQUFDLEVBQUU7Z0JBQ25GLG1EQUFtRDtnQkFDbkQsTUFBQSxJQUFJLENBQUMsVUFBVSwwQ0FBRSxrQkFBa0IsRUFBRSxDQUFDO2FBQ3ZDO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxZQUFZLENBQUMsY0FBYyxFQUFFLENBQUM7YUFDcEM7WUFFRCxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUMxQixDQUFDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFRCxRQUFROztRQUNOLElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtZQUNiLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUNiLE9BQU87U0FDUjtRQUVELGtEQUFrRDtRQUNsRCxNQUFBLElBQUksQ0FBQyxPQUFPLDBDQUFFLHVCQUF1QixDQUFDLElBQUksQ0FBQyxDQUFDO1FBRTVDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNoQixDQUFDO0lBRUQsYUFBYSxDQUFDLE1BQWMsRUFBRSxNQUF5QjtRQUNyRCxPQUFPLE1BQU0sQ0FBQyxLQUFLLENBQUM7SUFDdEIsQ0FBQztJQUVELGFBQWE7UUFDWCxPQUFPO1lBQ0wsQ0FBQyx3QkFBd0IsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLGFBQWEsR0FBRyxDQUFDO1NBQ3ZFLENBQUM7SUFDSixDQUFDO0lBRUQsY0FBYztRQUNaLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQztJQUMzRCxDQUFDO0lBRUQsWUFBWTtRQUNWLE9BQU8sSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQ3RFLENBQUM7SUFFRCxpQkFBaUIsQ0FBQyxTQUFtQyxJQUFJLENBQUMsWUFBWTtRQUNwRSxJQUFJLE1BQU0sRUFBRTtZQUNWLE1BQU0sU0FBUyxHQUFHLG9CQUFvQixDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDcEYsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDckMsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7Z0JBQ3pCLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQzthQUNkO1NBQ0Y7SUFDSCxDQUFDO0lBRUQsb0NBQW9DO0lBQ3BDLGdCQUFnQjtRQUNkLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2hDLFVBQVUsQ0FBQyxHQUFHLEVBQUUsV0FBQyxPQUFBLE1BQUEsSUFBSSxDQUFDLE9BQU8sMENBQUUsS0FBSyxFQUFFLENBQUEsRUFBQSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsVUFBVSxDQUFDLEtBQVU7UUFDbkIsT0FBTyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDaEUsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDaEIsQ0FBQztJQUVELEtBQUs7UUFDSCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBRU8sTUFBTTtRQUNaLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM5QixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztRQUN2QixJQUFJLElBQUksQ0FBQyx5QkFBeUIsRUFBRTtZQUNsQyxJQUFJLENBQUMseUJBQXlCLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDN0MsSUFBSSxDQUFDLHlCQUF5QixHQUFHLElBQUksQ0FBQztTQUN2QztJQUNILENBQUM7SUFFTyxxQkFBcUI7O1FBQzNCLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxLQUFLLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztRQUM1RixNQUFBLElBQUksQ0FBQyxPQUFPLDBDQUFFLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRU8saUJBQWlCLENBQUMsTUFBZTtRQUN2QyxJQUFJLElBQUksQ0FBQyxvQkFBb0IsRUFBRTtZQUM3QixJQUFJLENBQUMsb0JBQW9CLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDeEMsSUFBSSxDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQztTQUNsQztRQUVELElBQUksTUFBTSxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDMUIsSUFBSSxDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFO2dCQUM3RSxJQUFJLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtvQkFFbkMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO29CQUV0QyxNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO29CQUV2QyxNQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsZUFBZSxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUN2RixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO3dCQUM5QyxNQUFNLEtBQUssR0FBRyxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7d0JBQ3BDLE1BQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQzt3QkFDOUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLElBQUksTUFBTSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLE9BQU8sRUFBRTs0QkFDOUYsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7NEJBQ3RDLE1BQU07eUJBQ1A7cUJBQ0Y7aUJBQ0Y7WUFDSCxDQUFDLENBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQztJQUVPLGdCQUFnQjtRQUN0QixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRTtZQUMvRCxJQUFJLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLGtCQUFrQixFQUFFO2dCQUM5QyxNQUFNLEVBQUUsVUFBVSxFQUFFLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztnQkFDdkMsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUM7Z0JBQ2xFLFVBQVUsQ0FBQyxVQUFVLENBQUM7b0JBQ3BCLFNBQVMsRUFBRSxNQUFNLEdBQUcsQ0FBQztpQkFDdEIsQ0FBQyxDQUFDO2dCQUNILFVBQVUsQ0FBQyxjQUFjLEVBQUUsQ0FBQzthQUM3QjtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7O1lBM1JGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsY0FBYztnQkFDeEIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLDg2R0FBOEI7Z0JBQzlCLElBQUksRUFBRTtvQkFDSix5QkFBeUIsRUFBRSxNQUFNO2lCQUNsQztnQkFDRCxTQUFTLEVBQUUsQ0FBRSxrQkFBa0IsQ0FBRTthQUNsQzs7O1lBaEJRLGlCQUFpQix1QkEySFgsUUFBUSxZQUFJLE1BQU0sU0FBQyxtQkFBbUI7WUF0SXFCLE1BQU07WUFBYyxpQkFBaUI7WUFVdEcsa0JBQWtCOzs7c0JBb0J4QixLQUFLO29CQUVMLEtBQUs7bUJBSUwsS0FBSzt5QkFFTCxNQUFNO3dCQUVOLEtBQUs7OEJBRUwsTUFBTTt1QkFFTixLQUFLOzRCQUVMLEtBQUs7c0JBRUwsWUFBWSxTQUFDLGdCQUFnQixFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTtzQkFFL0MsS0FBSzswQkFFTCxLQUFLOytCQUVMLEtBQUs7MkJBS0wsS0FBSzs2QkFLTCxLQUFLO2tDQUtMLEtBQUs7c0JBRUwsWUFBWSxTQUFDLGlCQUFpQjttQkFFOUIsS0FBSyxTQUFDLFNBQVM7NEJBZ0JmLFNBQVMsU0FBQyxlQUFlLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO3lCQUUzQyxTQUFTLFNBQUMsWUFBWTtpQ0FFdEIsU0FBUyxTQUFDLFVBQVU7K0JBZXBCLEtBQUs7O0FBeEVtQjtJQUFmLFlBQVksRUFBRTt5Q0FBYztBQVFiO0lBQWYsWUFBWSxFQUFFOzZDQUFrQjtBQUVsQjtJQUFkLFdBQVcsRUFBRTtrREFBK0I7QUFJN0I7SUFBZixZQUFZLEVBQUU7NENBQW1CO0FBRWxCO0lBQWYsWUFBWSxFQUFFO2dEQUF1QjtBQUV0QjtJQUFmLFlBQVksRUFBRTtxREFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIE9uQ2hhbmdlcywgVGVtcGxhdGVSZWYsIE9uRGVzdHJveSxcbiAgICAgICAgIFZpZXdDaGlsZHJlbiwgUXVlcnlMaXN0LCBTaW1wbGVDaGFuZ2VzLCBDb250ZW50Q2hpbGQsIFZpZXdDaGlsZCwgTmdab25lLCBFbGVtZW50UmVmLCBDaGFuZ2VEZXRlY3RvclJlZiwgT3B0aW9uYWwsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZlRGVzY2VuZGFudEtleU1hbmFnZXIgfSBmcm9tICdAYW5ndWxhci9jZGsvYTExeSc7XG5pbXBvcnQgeyBDb25uZWN0aW9uUG9zaXRpb25QYWlyLCBDZGtPdmVybGF5T3JpZ2luLCBDZGtDb25uZWN0ZWRPdmVybGF5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YWtlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgREVGQVVMVF9EUk9QRE9XTl9QT1NJVElPTlMgfSBmcm9tICcuLi91dGlsL292ZXJsYXktcG9zaXRpb24nO1xuaW1wb3J0IHsgdW5pcXVlSWQsIGlzT3B0aW9uU2VsZWN0ZWQsIGFkZE9wdGlvblRvU2VsZWN0aW9uIH0gZnJvbSAnLi4vdXRpbC91dGlsJztcbmltcG9ydCB7IElucHV0Qm9vbGVhbiwgSW5wdXROdW1iZXIgfSBmcm9tICcuLi91dGlsL2NvbnZlcnQnO1xuaW1wb3J0IHsgTmdsQ29tYm9ib3hPcHRpb24gfSBmcm9tICcuL2NvbWJvYm94LW9wdGlvbic7XG5pbXBvcnQgeyBOZ2xDb21ib2JveElucHV0IH0gZnJvbSAnLi9jb21ib2JveC1pbnB1dCc7XG5pbXBvcnQgeyBOZ2xDb21ib2JveFNlcnZpY2UgfSBmcm9tICcuL2NvbWJvYm94LnNlcnZpY2UnO1xuaW1wb3J0IHsgTmdsQ29tYm9ib3hDb25maWcsIE5HTF9DT01CT0JPWF9DT05GSUcgfSBmcm9tICcuL2NvbmZpZyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmdsQ29tYm9ib3hPcHRpb25JdGVtIHtcbiAgdmFsdWU6IG51bWJlciB8IHN0cmluZztcbiAgbGFiZWw/OiBzdHJpbmc7XG4gIGRpc2FibGVkPzogYm9vbGVhbjtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmdsLWNvbWJvYm94JyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHRlbXBsYXRlVXJsOiAnLi9jb21ib2JveC5odG1sJyxcbiAgaG9zdDoge1xuICAgICdjbGFzcy5zbGRzLWZvcm0tZWxlbWVudCc6ICd0cnVlJyxcbiAgfSxcbiAgcHJvdmlkZXJzOiBbIE5nbENvbWJvYm94U2VydmljZSBdLFxufSlcbmV4cG9ydCBjbGFzcyBOZ2xDb21ib2JveCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcblxuICBASW5wdXQoKSB2YXJpYW50OiAnYmFzZScgfCAnbG9va3VwJyA9ICdiYXNlJztcblxuICBASW5wdXQoKSBsYWJlbD86IHN0cmluZyB8IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgcmVhZG9ubHkgdWlkID0gdW5pcXVlSWQoJ2NvbWJvYm94Jyk7XG5cbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG9wZW4gPSBmYWxzZTtcblxuICBAT3V0cHV0KCkgb3BlbkNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcblxuICBASW5wdXQoKSBzZWxlY3Rpb246IGFueTtcblxuICBAT3V0cHV0KCkgc2VsZWN0aW9uQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBtdWx0aXBsZSA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIHZpc2libGVMZW5ndGg6IDUgfCA3IHwgMTAgPSA1O1xuXG4gIEBDb250ZW50Q2hpbGQoTmdsQ29tYm9ib3hJbnB1dCwgeyBzdGF0aWM6IHRydWUgfSkgaW5wdXRFbD86IE5nbENvbWJvYm94SW5wdXQ7XG5cbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGxvYWRpbmc/OiBib29sZWFuO1xuXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBsb2FkaW5nTW9yZT86IGJvb2xlYW47XG5cbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGNsb3NlT25TZWxlY3Rpb24gPSB0cnVlO1xuXG4gIC8qKlxuICAgKiBUZXh0IGFkZGVkIHRvIGxvYWRpbmcgc3Bpbm5lci5cbiAgICovXG4gIEBJbnB1dCgpIGxvYWRpbmdMYWJlbDogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUZXh0IG1lc3NhZ2UgdGhhdCByZW5kZXJzIHdoZW4gbm8gbWF0Y2hlcyBmb3VuZC5cbiAgICovXG4gIEBJbnB1dCgpIG5vT3B0aW9uc0ZvdW5kOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFRleHQgZm9yIHJlbW92aW5nIHNpbmdsZSBzZWxlY3RlZCBvcHRpb24uXG4gICAqL1xuICBASW5wdXQoKSByZW1vdmVTZWxlY3RlZExhYmVsOiBzdHJpbmc7XG5cbiAgQFZpZXdDaGlsZHJlbihOZ2xDb21ib2JveE9wdGlvbikgcmVhZG9ubHkgb3B0aW9ucz86IFF1ZXJ5TGlzdDxOZ2xDb21ib2JveE9wdGlvbj47XG5cbiAgQElucHV0KCdvcHRpb25zJykgc2V0IGRhdGEoZGF0YTogYW55W10pIHtcbiAgICB0aGlzLl9kYXRhID0gKGRhdGEgfHwgW10pLm1hcCgoZCkgPT4ge1xuICAgICAgaWYgKHR5cGVvZiBkID09PSAnc3RyaW5nJykge1xuICAgICAgICAvLyBTdXBwb3J0IGFycmF5IG9mIHN0cmluZ3MgYXMgb3B0aW9ucywgYnkgbWFwcGluZyB0byBOZ2xDb21ib2JveE9wdGlvbkl0ZW1cbiAgICAgICAgcmV0dXJuIHsgdmFsdWU6IGQsIGxhYmVsOiBkIH07XG4gICAgICB9IGVsc2UgaWYgKCFkLmxhYmVsKSB7XG4gICAgICAgIC8vIFVzZSBgdmFsdWVgIGlmIG1pc3NpbmcgYGxhYmVsYFxuICAgICAgICByZXR1cm4geyAuLi5kLCBsYWJlbDogZC52YWx1ZSB9O1xuICAgICAgfVxuICAgICAgcmV0dXJuIGQ7XG4gICAgfSk7XG4gIH1cbiAgZ2V0IGRhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RhdGEgYXMgYW55W107XG4gIH1cblxuICBAVmlld0NoaWxkKCdvdmVybGF5T3JpZ2luJywgeyBzdGF0aWM6IHRydWUgfSkgb3ZlcmxheU9yaWdpbj86IENka092ZXJsYXlPcmlnaW47XG5cbiAgQFZpZXdDaGlsZCgnY2RrT3ZlcmxheScpIGNka092ZXJsYXk/OiBDZGtDb25uZWN0ZWRPdmVybGF5O1xuXG4gIEBWaWV3Q2hpbGQoJ2Ryb3Bkb3duJykgZHJvcGRvd25FbGVtZW50UmVmPzogRWxlbWVudFJlZjtcblxuICBvdmVybGF5V2lkdGggPSAwO1xuXG4gIG92ZXJsYXlQb3NpdGlvbnM6IENvbm5lY3Rpb25Qb3NpdGlvblBhaXJbXSA9IFsuLi5ERUZBVUxUX0RST1BET1dOX1BPU0lUSU9OU1snbGVmdCddXTtcblxuICAvKiogTWFuYWdlcyBhY3RpdmUgaXRlbSBpbiBvcHRpb24gbGlzdCBiYXNlZCBvbiBrZXkgZXZlbnRzLiAqL1xuICBrZXlNYW5hZ2VyPzogQWN0aXZlRGVzY2VuZGFudEtleU1hbmFnZXI8TmdsQ29tYm9ib3hPcHRpb24+IHwgbnVsbDtcblxuICBwcml2YXRlIG9wdGlvbkNoYW5nZXNTdWJzY3JpcHRpb24/OiBTdWJzY3JpcHRpb24gfCBudWxsO1xuXG4gIHByaXZhdGUgX2RhdGE/OiBOZ2xDb21ib2JveE9wdGlvbkl0ZW1bXSB8IG51bGw7XG5cbiAgcHJpdmF0ZSBrZXlib2FyZFN1YnNjcmlwdGlvbj86IFN1YnNjcmlwdGlvbiB8IG51bGw7XG5cbiAgQElucHV0KCkgc2VsZWN0aW9uVmFsdWVGbiA9IChzZWxlY3Rpb246IHN0cmluZ1tdKTogc3RyaW5nID0+IHtcbiAgICBpZiAoc2VsZWN0aW9uLmxlbmd0aCA+IDApIHtcbiAgICAgIGlmICh0aGlzLm11bHRpcGxlICYmIHRoaXMuaXNMb29rdXApIHtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHNlbGVjdGlvbi5sZW5ndGggPT09IDEgPyBzZWxlY3Rpb25bMF0gOiBgJHtzZWxlY3Rpb24ubGVuZ3RofSBvcHRpb25zIHNlbGVjdGVkYDtcbiAgICB9XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgZ2V0IGFjdGl2ZU9wdGlvbigpOiBOZ2xDb21ib2JveE9wdGlvbiB8IG51bGwge1xuICAgIHJldHVybiB0aGlzLmtleU1hbmFnZXIgPyB0aGlzLmtleU1hbmFnZXIuYWN0aXZlSXRlbSA6IG51bGw7XG4gIH1cblxuICBnZXQgc2VsZWN0ZWRPcHRpb25zKCk6IE5nbENvbWJvYm94T3B0aW9uSXRlbVtdIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhID8gdGhpcy5kYXRhLmZpbHRlcihkID0+IHRoaXMuaXNTZWxlY3RlZChkLnZhbHVlKSkgOiBbXTtcbiAgfVxuXG4gIGdldCBpc0xvb2t1cCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy52YXJpYW50ID09PSAnbG9va3VwJztcbiAgfVxuXG4gIGdldCBoYXNMb29rdXBTaW5nbGVTZWxlY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNMb29rdXAgJiYgIXRoaXMubXVsdGlwbGUgJiYgdGhpcy5zZWxlY3RlZE9wdGlvbnMubGVuZ3RoID4gMDtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIEBJbmplY3QoTkdMX0NPTUJPQk9YX0NPTkZJRykgZGVmYXVsdENvbmZpZzogTmdsQ29tYm9ib3hDb25maWcsXG4gICAgICAgICAgICAgIHByaXZhdGUgbmdab25lOiBOZ1pvbmUsXG4gICAgICAgICAgICAgIHByaXZhdGUgY2Q6IENoYW5nZURldGVjdG9yUmVmLFxuICAgICAgICAgICAgICBwcml2YXRlIHNlcnZpY2U6IE5nbENvbWJvYm94U2VydmljZSkge1xuICAgIGNvbnN0IGNvbmZpZyA9IHsgLi4ubmV3IE5nbENvbWJvYm94Q29uZmlnKCksIC4uLmRlZmF1bHRDb25maWcgfTtcbiAgICB0aGlzLmxvYWRpbmdMYWJlbCA9IGNvbmZpZy5sb2FkaW5nTGFiZWw7XG4gICAgdGhpcy5ub09wdGlvbnNGb3VuZCA9IGNvbmZpZy5ub09wdGlvbnNGb3VuZDtcbiAgICB0aGlzLnJlbW92ZVNlbGVjdGVkTGFiZWwgPSBjb25maWcucmVtb3ZlU2VsZWN0ZWRMYWJlbDtcblxuICAgIHRoaXMuc2VydmljZS5jb21ib2JveCA9IHRoaXM7XG4gICAgLy8gdGhpcy5zZXJ2aWNlLm9wZW5DaGFuZ2UgPSB0aGlzLm9wZW5DaGFuZ2U7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgaWYgKGNoYW5nZXMuc2VsZWN0aW9uIHx8ICh0aGlzLnNlbGVjdGlvbiAmJiBjaGFuZ2VzLmRhdGEpKSB7XG4gICAgICB0aGlzLmNhbGN1bGF0ZURpc3BsYXlWYWx1ZSgpO1xuICAgIH1cbiAgfVxuXG4gIG9uQXR0YWNoKCkge1xuICAgIC8vIFNhbWUgd2lkdGggYXMgdGhlIHRyaWdnZXIgZWxlbWVudFxuICAgIHRoaXMub3ZlcmxheVdpZHRoID0gdGhpcy5vdmVybGF5T3JpZ2luPy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQub2Zmc2V0V2lkdGg7XG4gICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XG5cbiAgICB0aGlzLmtleU1hbmFnZXIgPSB0aGlzLm9wdGlvbnMgJiYgbmV3IEFjdGl2ZURlc2NlbmRhbnRLZXlNYW5hZ2VyKHRoaXMub3B0aW9ucykud2l0aFdyYXAoKTtcblxuICAgIC8vIEFjdGl2YXRlIHNlbGVjdGVkIGl0ZW0gb3IgZmlyc3Qgb3B0aW9uXG4gICAgY29uc3Qgc2VsZWN0ZWRPcHRpb24gPSB0aGlzLm9wdGlvbnM/LmZpbmQobyA9PiBvLnNlbGVjdGVkKTtcbiAgICBpZiAoc2VsZWN0ZWRPcHRpb24pIHtcbiAgICAgIHRoaXMua2V5TWFuYWdlcj8uc2V0QWN0aXZlSXRlbShzZWxlY3RlZE9wdGlvbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMua2V5TWFuYWdlcj8uc2V0Rmlyc3RJdGVtQWN0aXZlKCk7XG4gICAgfVxuXG4gICAgLy8gTGlzdGVuIHRvIGJ1dHRvbiBwcmVzc2VzIGlmIHBpY2tsaXN0IHRvIGFjdGl2YXRlIG1hdGNoaW5nIG9wdGlvblxuICAgIHRoaXMua2V5Ym9hcmRTdWJzY3JpYmUodGhpcy52YXJpYW50ID09PSAnYmFzZScpO1xuXG4gICAgLy8gV2hlbiBpdCBpcyBvcGVuIHdlIGxpc3RlbiBmb3Igb3B0aW9uIGNoYW5nZXMgaW4gb3JkZXIgdG8gZml4IGFjdGl2ZSBvcHRpb24gYW5kIGhhbmRsZSBzY3JvbGxcbiAgICB0aGlzLm9wdGlvbkNoYW5nZXNTdWJzY3JpcHRpb24gPSB0aGlzLm9wdGlvbnM/LmNoYW5nZXMuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIGlmICghdGhpcy5hY3RpdmVPcHRpb24gfHwgdGhpcy5vcHRpb25zPy50b0FycmF5KCkuaW5kZXhPZih0aGlzLmFjdGl2ZU9wdGlvbikgPT09IC0xKSB7XG4gICAgICAgIC8vIEFjdGl2YXRlIGZpcnN0IG9wdGlvbiBpZiBhY3RpdmUgb25lIGlzIGRlc3Ryb3llZFxuICAgICAgICB0aGlzLmtleU1hbmFnZXI/LnNldEZpcnN0SXRlbUFjdGl2ZSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5hY3RpdmVPcHRpb24uc2Nyb2xsSW50b1ZpZXcoKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy51cGRhdGVNZW51SGVpZ2h0KCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLnVwZGF0ZU1lbnVIZWlnaHQoKTtcbiAgfVxuXG4gIG9uRGV0YWNoKCkge1xuICAgIGlmICh0aGlzLm9wZW4pIHtcbiAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBDbGVhciBhcmlhLWFjdGl2ZWRlc2NlbmRhbnQgd2hlbiBtZW51IGlzIGNsb3NlZFxuICAgIHRoaXMuaW5wdXRFbD8uc2V0QXJpYUFjdGl2ZURlc2NlbmRhbnQobnVsbCk7XG5cbiAgICB0aGlzLmRldGFjaCgpO1xuICB9XG5cbiAgdHJhY2tCeU9wdGlvbihfaW5kZXg6IG51bWJlciwgb3B0aW9uOiBOZ2xDb21ib2JveE9wdGlvbikge1xuICAgIHJldHVybiBvcHRpb24udmFsdWU7XG4gIH1cblxuICBkcm9wZG93bkNsYXNzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBbYHNsZHMtZHJvcGRvd25fbGVuZ3RoLSR7dGhpcy52aXNpYmxlTGVuZ3RofWBdOiB0aGlzLnZpc2libGVMZW5ndGggPiAwLFxuICAgIH07XG4gIH1cblxuICBpbnB1dEljb25SaWdodCgpIHtcbiAgICByZXR1cm4gdGhpcy5pc0xvb2t1cCA/ICd1dGlsaXR5OnNlYXJjaCcgOiAndXRpbGl0eTpkb3duJztcbiAgfVxuXG4gIGhhc05vTWF0Y2hlcygpIHtcbiAgICByZXR1cm4gdGhpcy5pc0xvb2t1cCAmJiB0aGlzLmRhdGEubGVuZ3RoID09PSAwICYmICF0aGlzLmxvYWRpbmdNb3JlO1xuICB9XG5cbiAgb25PcHRpb25TZWxlY3Rpb24ob3B0aW9uOiBOZ2xDb21ib2JveE9wdGlvbiB8IG51bGwgPSB0aGlzLmFjdGl2ZU9wdGlvbikge1xuICAgIGlmIChvcHRpb24pIHtcbiAgICAgIGNvbnN0IHNlbGVjdGlvbiA9IGFkZE9wdGlvblRvU2VsZWN0aW9uKG9wdGlvbi52YWx1ZSwgdGhpcy5zZWxlY3Rpb24sIHRoaXMubXVsdGlwbGUpO1xuICAgICAgdGhpcy5zZWxlY3Rpb25DaGFuZ2UuZW1pdChzZWxlY3Rpb24pO1xuICAgICAgaWYgKHRoaXMuY2xvc2VPblNlbGVjdGlvbikge1xuICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gVHJpZ2dlciBieSBjbGVhciBidXR0b24gb24gTG9va3VwXG4gIG9uQ2xlYXJTZWxlY3Rpb24oKSB7XG4gICAgdGhpcy5zZWxlY3Rpb25DaGFuZ2UuZW1pdChudWxsKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuaW5wdXRFbD8uZm9jdXMoKSwgMCk7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgd2hldGhlciB2YWx1ZSBpcyBjdXJyZW50bHkgc2VsZWN0ZWQuXG4gICAqXG4gICAqIEBwYXJhbSB2YWx1ZSBUaGUgdmFsdWUgaW4gdGVzdCwgd2hldGhlciBpcyAocGFydCBvZikgc2VsZWN0aW9uIG9yIG5vdFxuICAgKi9cbiAgaXNTZWxlY3RlZCh2YWx1ZTogYW55KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGlzT3B0aW9uU2VsZWN0ZWQodmFsdWUsIHRoaXMuc2VsZWN0aW9uLCB0aGlzLm11bHRpcGxlKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuZGV0YWNoKCk7XG4gIH1cblxuICBjbG9zZSgpIHtcbiAgICB0aGlzLm9wZW5DaGFuZ2UuZW1pdChmYWxzZSk7XG4gIH1cblxuICBwcml2YXRlIGRldGFjaCgpIHtcbiAgICB0aGlzLmtleWJvYXJkU3Vic2NyaWJlKGZhbHNlKTtcbiAgICB0aGlzLmtleU1hbmFnZXIgPSBudWxsO1xuICAgIGlmICh0aGlzLm9wdGlvbkNoYW5nZXNTdWJzY3JpcHRpb24pIHtcbiAgICAgIHRoaXMub3B0aW9uQ2hhbmdlc1N1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgdGhpcy5vcHRpb25DaGFuZ2VzU3Vic2NyaXB0aW9uID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGNhbGN1bGF0ZURpc3BsYXlWYWx1ZSgpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuc2VsZWN0aW9uVmFsdWVGbih0aGlzLnNlbGVjdGVkT3B0aW9ucy5tYXAob3B0aW9uID0+IG9wdGlvbi5sYWJlbCB8fCAnJykpO1xuICAgIHRoaXMuaW5wdXRFbD8uc2V0VmFsdWUodmFsdWUpO1xuICB9XG5cbiAgcHJpdmF0ZSBrZXlib2FyZFN1YnNjcmliZShsaXN0ZW46IGJvb2xlYW4pIHtcbiAgICBpZiAodGhpcy5rZXlib2FyZFN1YnNjcmlwdGlvbikge1xuICAgICAgdGhpcy5rZXlib2FyZFN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgdGhpcy5rZXlib2FyZFN1YnNjcmlwdGlvbiA9IG51bGw7XG4gICAgfVxuXG4gICAgaWYgKGxpc3RlbiAmJiB0aGlzLmlucHV0RWwpIHtcbiAgICAgIHRoaXMua2V5Ym9hcmRTdWJzY3JpcHRpb24gPSB0aGlzLmlucHV0RWwua2V5Ym9hcmRCdWZmZXIkLnN1YnNjcmliZSgocGF0dGVybikgPT4ge1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zICYmIHRoaXMua2V5TWFuYWdlcikge1xuXG4gICAgICAgICAgcGF0dGVybiA9IHBhdHRlcm4udG9Mb2NhbGVMb3dlckNhc2UoKTtcblxuICAgICAgICAgIGNvbnN0IG9wdGlvbnMgPSB0aGlzLm9wdGlvbnMudG9BcnJheSgpO1xuXG4gICAgICAgICAgY29uc3QgYWN0aXZlSW5kZXggPSB0aGlzLmFjdGl2ZU9wdGlvbiA/ICh0aGlzLmtleU1hbmFnZXIuYWN0aXZlSXRlbUluZGV4IHx8IDApICsgMSA6IDA7XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDAsIG4gPSBvcHRpb25zLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgY29uc3QgaW5kZXggPSAoYWN0aXZlSW5kZXggKyBpKSAlIG47XG4gICAgICAgICAgICBjb25zdCBvcHRpb24gPSBvcHRpb25zW2luZGV4XTtcbiAgICAgICAgICAgIGlmICghb3B0aW9uLmRpc2FibGVkICYmIG9wdGlvbi5sYWJlbC50b0xvY2FsZUxvd2VyQ2FzZSgpLnN1YnN0cigwLCBwYXR0ZXJuLmxlbmd0aCkgPT09IHBhdHRlcm4pIHtcbiAgICAgICAgICAgICAgdGhpcy5rZXlNYW5hZ2VyLnNldEFjdGl2ZUl0ZW0ob3B0aW9uKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZU1lbnVIZWlnaHQoKSB7XG4gICAgdGhpcy5uZ1pvbmUub25TdGFibGUuYXNPYnNlcnZhYmxlKCkucGlwZSh0YWtlKDEpKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuY2RrT3ZlcmxheSAmJiB0aGlzLmRyb3Bkb3duRWxlbWVudFJlZikge1xuICAgICAgICBjb25zdCB7IG92ZXJsYXlSZWYgfSA9IHRoaXMuY2RrT3ZlcmxheTtcbiAgICAgICAgY29uc3QgaGVpZ2h0ID0gdGhpcy5kcm9wZG93bkVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5vZmZzZXRIZWlnaHQ7XG4gICAgICAgIG92ZXJsYXlSZWYudXBkYXRlU2l6ZSh7XG4gICAgICAgICAgbWluSGVpZ2h0OiBoZWlnaHQgKyA0LFxuICAgICAgICB9KTtcbiAgICAgICAgb3ZlcmxheVJlZi51cGRhdGVQb3NpdGlvbigpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG4iXX0=
import { __decorate } from "tslib";
import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, ViewChildren, ContentChild, ViewChild, NgZone, ChangeDetectorRef, Optional, Inject, HostBinding } from '@angular/core';
import { ActiveDescendantKeyManager } from '@angular/cdk/a11y';
import { take } from 'rxjs/operators';
import { DEFAULT_DROPDOWN_POSITIONS } from '../util/overlay-position';
import { uniqueId, isOptionSelected, addOptionToSelection } from '../util/util';
import { InputBoolean, InputNumber, toBoolean } from '../util/convert';
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
        this.hasErrors = false;
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
    ngAfterContentInit() {
        if (!this.inputEl) {
            throw Error(`[ng-lightning] Couldn't find an <input> with [nglCombobox] attribute inside NglCombobox`);
        }
        this.ɵRequiredSubscription = this.inputEl.ɵRequiredSubject.subscribe((required) => {
            this.required = required;
            this.cd.detectChanges();
        });
        this.calculateErrors();
    }
    ngOnChanges(changes) {
        if (changes.selection || (this.selection && changes.data)) {
            this.calculateDisplayValue();
        }
        setTimeout(() => this.calculateErrors(), 0);
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
            var _a, _b, _c;
            const options = ((_a = this.options) === null || _a === void 0 ? void 0 : _a.toArray()) || [];
            if (!this.activeOption || options.indexOf(this.activeOption) === -1) {
                if (this.isLookup && options.length === 0) {
                    (_b = this.keyManager) === null || _b === void 0 ? void 0 : _b.setActiveItem(null);
                }
                else {
                    (_c = this.keyManager) === null || _c === void 0 ? void 0 : _c.setFirstItemActive();
                }
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
        var _a;
        this.detach();
        (_a = this.ɵRequiredSubscription) === null || _a === void 0 ? void 0 : _a.unsubscribe();
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
    calculateErrors() {
        if (this.required) {
            this.hasErrors = !toBoolean(this.selection);
        }
        this.cd.detectChanges();
    }
}
NglCombobox.decorators = [
    { type: Component, args: [{
                selector: 'ngl-combobox',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: "\n<label [nglFormLabel]=\"label\" [attr.for]=\"inputEl.id\" [required]=\"required\"></label>\n<div class=\"slds-form-element__control\">\n  <div class=\"slds-combobox_container\" [class.slds-has-selection]=\"hasLookupSingleSelection\">\n    <div class=\"slds-combobox slds-dropdown-trigger slds-dropdown-trigger_click\" [attr.aria-expanded]=\"open\" aria-haspopup=\"listbox\" role=\"combobox\" [class.slds-is-open]=\"open\" [attr.aria-owns]=\"uid\">\n      <div class=\"slds-combobox__form-element slds-input-has-icon\" role=\"none\" cdkOverlayOrigin #overlayOrigin=\"cdkOverlayOrigin\" [class.slds-input-has-icon_group-right]=\"loading\" [class.slds-input-has-icon_right]=\"!loading\">\n        <ng-content select=\"input\"></ng-content>\n        <div class=\"slds-input__icon-group slds-input__icon-group_right\" *ngIf=\"loading; else iconRight\">\n          <div class=\"slds-spinner slds-spinner_brand slds-spinner_x-small slds-input__spinner\" role=\"status\"><span class=\"slds-assistive-text\">{{ loadingLabel }}</span>\n            <div class=\"slds-spinner__dot-a\"></div>\n            <div class=\"slds-spinner__dot-b\"></div>\n          </div>\n          <ng-template [ngTemplateOutlet]=\"iconRight\"></ng-template>\n        </div>\n        <ng-template #iconRight>\n          <button class=\"slds-button slds-button_icon slds-input__icon slds-input__icon_right\" *ngIf=\"hasLookupSingleSelection; else iconTpl\" type=\"button\" (click)=\"onClearSelection()\" [title]=\"removeSelectedLabel\">\n            <svg class=\"slds-button__icon\" nglIconName=\"utility:close\"></svg><span class=\"slds-assistive-text\">{{ removeSelectedLabel }}</span>\n          </button>\n        </ng-template>\n        <ng-template #iconTpl><span class=\"slds-icon_container slds-input__icon slds-input__icon_right\">\n            <svg class=\"slds-icon slds-icon_x-small slds-icon-text-default\" [nglIconName]=\"inputIconRight()\"></svg></span></ng-template>\n      </div>\n    </div>\n  </div>\n</div>\n<ng-template cdkConnectedOverlay #cdkOverlay=\"cdkConnectedOverlay\" [cdkConnectedOverlayPositions]=\"overlayPositions\" [cdkConnectedOverlayOrigin]=\"overlayOrigin\" [cdkConnectedOverlayMinWidth]=\"overlayWidth\" [cdkConnectedOverlayOpen]=\"open\" (nglOverlayScrolledOutsideView)=\"close()\" (attach)=\"onAttach()\" (detach)=\"onDetach()\">\n  <div class=\"slds-dropdown slds-dropdown_fluid\" #dropdown [attr.id]=\"uid\" role=\"listbox\" [ngClass]=\"dropdownClass()\" (mousedown)=\"$event.preventDefault()\">\n    <ul class=\"slds-listbox slds-listbox_vertical\" role=\"presentation\">\n      <li *ngFor=\"let d of data; trackBy: trackByOption\" nglComboboxOption [value]=\"d.value\" [label]=\"d.label\" [disabled]=\"d.disabled\" [selected]=\"isSelected(d.value)\"></li>\n      <li class=\"slds-listbox__item\" *ngIf=\"loadingMore\" role=\"presentation\">\n        <div class=\"slds-align_absolute-center slds-p-top_medium\">\n          <div class=\"slds-spinner slds-spinner_x-small slds-spinner_inline\" role=\"status\">\n            <div class=\"slds-assistive-text\">{{ loadingLabel }}</div>\n            <div class=\"slds-spinner__dot-a\"></div>\n            <div class=\"slds-spinner__dot-b\"></div>\n          </div>\n        </div>\n      </li>\n      <li class=\"slds-listbox__item\" *ngIf=\"hasNoMatches()\" role=\"presentation\" aria-live=\"polite\">\n        <div class=\"slds-align_absolute-center\"><span role=\"status\">{{ noOptionsFound }}</span></div>\n      </li>\n    </ul>\n  </div>\n</ng-template>",
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
    hasErrors: [{ type: HostBinding, args: ['class.slds-has-error',] }],
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tYm9ib3guanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1saWdodG5pbmcvc3JjL2xpYi9jb21ib2JveGVzL2NvbWJvYm94LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLHVCQUF1QixFQUMvRCxZQUFZLEVBQTRCLFlBQVksRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFjLGlCQUFpQixFQUN0RyxRQUFRLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBb0IsTUFBTSxlQUFlLENBQUM7QUFDaEYsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFHL0QsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3RDLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3RFLE9BQU8sRUFBRSxRQUFRLEVBQUUsZ0JBQWdCLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDaEYsT0FBTyxFQUFFLFlBQVksRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDdkUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDdEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDcEQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDeEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLG1CQUFtQixFQUFFLE1BQU0sVUFBVSxDQUFDO0FBaUJsRSxNQUFNLE9BQU8sV0FBVztJQWdIdEIsWUFBcUQsYUFBZ0MsRUFDakUsTUFBYyxFQUNkLEVBQXFCLEVBQ3JCLE9BQTJCO1FBRjNCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxPQUFFLEdBQUYsRUFBRSxDQUFt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QUNsQztnQkFDRCxTQUFTLEVBQUUsQ0FBRSxrQkFBa0IsQ0FBRTthQUNsQzs7O1lBaEJRLGlCQUFpQix1QkFpSVgsUUFBUSxZQUFJLE1BQU0sU0FBQyxtQkFBbUI7WUE3SXFCLE1BQU07WUFBYyxpQkFBaUI7WUFXdEcsa0JBQWtCOzs7c0JBb0J4QixLQUFLO29CQUVMLEtBQUs7bUJBSUwsS0FBSzt5QkFFTCxNQUFNO3dCQUVOLEtBQUs7OEJBRUwsTUFBTTt1QkFFTixLQUFLOzRCQUVMLEtBQUs7c0JBRUwsWUFBWSxTQUFDLGdCQUFnQixFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTtzQkFFL0MsS0FBSzswQkFFTCxLQUFLOytCQUVMLEtBQUs7MkJBS0wsS0FBSzs2QkFLTCxLQUFLO2tDQUtMLEtBQUs7c0JBRUwsWUFBWSxTQUFDLGlCQUFpQjt3QkFFOUIsV0FBVyxTQUFDLHNCQUFzQjttQkFFbEMsS0FBSyxTQUFDLFNBQVM7NEJBZ0JmLFNBQVMsU0FBQyxlQUFlLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO3lCQUUzQyxTQUFTLFNBQUMsWUFBWTtpQ0FFdEIsU0FBUyxTQUFDLFVBQVU7K0JBbUJwQixLQUFLOztBQTlFbUI7SUFBZixZQUFZLEVBQUU7eUNBQWM7QUFRYjtJQUFmLFlBQVksRUFBRTs2Q0FBa0I7QUFFbEI7SUFBZCxXQUFXLEVBQUU7a0RBQStCO0FBSTdCO0lBQWYsWUFBWSxFQUFFOzRDQUFtQjtBQUVsQjtJQUFmLFlBQVksRUFBRTtnREFBdUI7QUFFdEI7SUFBZixZQUFZLEVBQUU7cURBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBPbkNoYW5nZXMsIFRlbXBsYXRlUmVmLCBPbkRlc3Ryb3ksXG4gICAgICAgICBWaWV3Q2hpbGRyZW4sIFF1ZXJ5TGlzdCwgU2ltcGxlQ2hhbmdlcywgQ29udGVudENoaWxkLCBWaWV3Q2hpbGQsIE5nWm9uZSwgRWxlbWVudFJlZiwgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgICAgICBPcHRpb25hbCwgSW5qZWN0LCBIb3N0QmluZGluZywgQWZ0ZXJDb250ZW50SW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZlRGVzY2VuZGFudEtleU1hbmFnZXIgfSBmcm9tICdAYW5ndWxhci9jZGsvYTExeSc7XG5pbXBvcnQgeyBDb25uZWN0aW9uUG9zaXRpb25QYWlyLCBDZGtPdmVybGF5T3JpZ2luLCBDZGtDb25uZWN0ZWRPdmVybGF5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YWtlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgREVGQVVMVF9EUk9QRE9XTl9QT1NJVElPTlMgfSBmcm9tICcuLi91dGlsL292ZXJsYXktcG9zaXRpb24nO1xuaW1wb3J0IHsgdW5pcXVlSWQsIGlzT3B0aW9uU2VsZWN0ZWQsIGFkZE9wdGlvblRvU2VsZWN0aW9uIH0gZnJvbSAnLi4vdXRpbC91dGlsJztcbmltcG9ydCB7IElucHV0Qm9vbGVhbiwgSW5wdXROdW1iZXIsIHRvQm9vbGVhbiB9IGZyb20gJy4uL3V0aWwvY29udmVydCc7XG5pbXBvcnQgeyBOZ2xDb21ib2JveE9wdGlvbiB9IGZyb20gJy4vY29tYm9ib3gtb3B0aW9uJztcbmltcG9ydCB7IE5nbENvbWJvYm94SW5wdXQgfSBmcm9tICcuL2NvbWJvYm94LWlucHV0JztcbmltcG9ydCB7IE5nbENvbWJvYm94U2VydmljZSB9IGZyb20gJy4vY29tYm9ib3guc2VydmljZSc7XG5pbXBvcnQgeyBOZ2xDb21ib2JveENvbmZpZywgTkdMX0NPTUJPQk9YX0NPTkZJRyB9IGZyb20gJy4vY29uZmlnJztcblxuZXhwb3J0IGludGVyZmFjZSBOZ2xDb21ib2JveE9wdGlvbkl0ZW0ge1xuICB2YWx1ZTogbnVtYmVyIHwgc3RyaW5nO1xuICBsYWJlbD86IHN0cmluZztcbiAgZGlzYWJsZWQ/OiBib29sZWFuO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZ2wtY29tYm9ib3gnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgdGVtcGxhdGVVcmw6ICcuL2NvbWJvYm94Lmh0bWwnLFxuICBob3N0OiB7XG4gICAgJ2NsYXNzLnNsZHMtZm9ybS1lbGVtZW50JzogJ3RydWUnLFxuICB9LFxuICBwcm92aWRlcnM6IFsgTmdsQ29tYm9ib3hTZXJ2aWNlIF0sXG59KVxuZXhwb3J0IGNsYXNzIE5nbENvbWJvYm94IGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIEFmdGVyQ29udGVudEluaXQge1xuXG4gIEBJbnB1dCgpIHZhcmlhbnQ6ICdiYXNlJyB8ICdsb29rdXAnID0gJ2Jhc2UnO1xuXG4gIEBJbnB1dCgpIGxhYmVsPzogc3RyaW5nIHwgVGVtcGxhdGVSZWY8YW55PjtcblxuICByZWFkb25seSB1aWQgPSB1bmlxdWVJZCgnY29tYm9ib3gnKTtcblxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgb3BlbiA9IGZhbHNlO1xuXG4gIEBPdXRwdXQoKSBvcGVuQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuXG4gIEBJbnB1dCgpIHNlbGVjdGlvbjogYW55O1xuXG4gIEBPdXRwdXQoKSBzZWxlY3Rpb25DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG11bHRpcGxlID0gZmFsc2U7XG5cbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgdmlzaWJsZUxlbmd0aDogNSB8IDcgfCAxMCA9IDU7XG5cbiAgQENvbnRlbnRDaGlsZChOZ2xDb21ib2JveElucHV0LCB7IHN0YXRpYzogdHJ1ZSB9KSBpbnB1dEVsPzogTmdsQ29tYm9ib3hJbnB1dDtcblxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbG9hZGluZz86IGJvb2xlYW47XG5cbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGxvYWRpbmdNb3JlPzogYm9vbGVhbjtcblxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgY2xvc2VPblNlbGVjdGlvbiA9IHRydWU7XG5cbiAgLyoqXG4gICAqIFRleHQgYWRkZWQgdG8gbG9hZGluZyBzcGlubmVyLlxuICAgKi9cbiAgQElucHV0KCkgbG9hZGluZ0xhYmVsOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFRleHQgbWVzc2FnZSB0aGF0IHJlbmRlcnMgd2hlbiBubyBtYXRjaGVzIGZvdW5kLlxuICAgKi9cbiAgQElucHV0KCkgbm9PcHRpb25zRm91bmQ6IHN0cmluZztcblxuICAvKipcbiAgICogVGV4dCBmb3IgcmVtb3Zpbmcgc2luZ2xlIHNlbGVjdGVkIG9wdGlvbi5cbiAgICovXG4gIEBJbnB1dCgpIHJlbW92ZVNlbGVjdGVkTGFiZWw6IHN0cmluZztcblxuICBAVmlld0NoaWxkcmVuKE5nbENvbWJvYm94T3B0aW9uKSByZWFkb25seSBvcHRpb25zPzogUXVlcnlMaXN0PE5nbENvbWJvYm94T3B0aW9uPjtcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnNsZHMtaGFzLWVycm9yJykgaGFzRXJyb3JzID0gZmFsc2U7XG5cbiAgQElucHV0KCdvcHRpb25zJykgc2V0IGRhdGEoZGF0YTogYW55W10pIHtcbiAgICB0aGlzLl9kYXRhID0gKGRhdGEgfHwgW10pLm1hcCgoZCkgPT4ge1xuICAgICAgaWYgKHR5cGVvZiBkID09PSAnc3RyaW5nJykge1xuICAgICAgICAvLyBTdXBwb3J0IGFycmF5IG9mIHN0cmluZ3MgYXMgb3B0aW9ucywgYnkgbWFwcGluZyB0byBOZ2xDb21ib2JveE9wdGlvbkl0ZW1cbiAgICAgICAgcmV0dXJuIHsgdmFsdWU6IGQsIGxhYmVsOiBkIH07XG4gICAgICB9IGVsc2UgaWYgKCFkLmxhYmVsKSB7XG4gICAgICAgIC8vIFVzZSBgdmFsdWVgIGlmIG1pc3NpbmcgYGxhYmVsYFxuICAgICAgICByZXR1cm4geyAuLi5kLCBsYWJlbDogZC52YWx1ZSB9O1xuICAgICAgfVxuICAgICAgcmV0dXJuIGQ7XG4gICAgfSk7XG4gIH1cbiAgZ2V0IGRhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RhdGEgYXMgYW55W107XG4gIH1cblxuICBAVmlld0NoaWxkKCdvdmVybGF5T3JpZ2luJywgeyBzdGF0aWM6IHRydWUgfSkgb3ZlcmxheU9yaWdpbj86IENka092ZXJsYXlPcmlnaW47XG5cbiAgQFZpZXdDaGlsZCgnY2RrT3ZlcmxheScpIGNka092ZXJsYXk/OiBDZGtDb25uZWN0ZWRPdmVybGF5O1xuXG4gIEBWaWV3Q2hpbGQoJ2Ryb3Bkb3duJykgZHJvcGRvd25FbGVtZW50UmVmPzogRWxlbWVudFJlZjtcblxuICBvdmVybGF5V2lkdGggPSAwO1xuXG4gIG92ZXJsYXlQb3NpdGlvbnM6IENvbm5lY3Rpb25Qb3NpdGlvblBhaXJbXSA9IFsuLi5ERUZBVUxUX0RST1BET1dOX1BPU0lUSU9OU1snbGVmdCddXTtcblxuICAvKiogTWFuYWdlcyBhY3RpdmUgaXRlbSBpbiBvcHRpb24gbGlzdCBiYXNlZCBvbiBrZXkgZXZlbnRzLiAqL1xuICBrZXlNYW5hZ2VyPzogQWN0aXZlRGVzY2VuZGFudEtleU1hbmFnZXI8TmdsQ29tYm9ib3hPcHRpb24+IHwgbnVsbDtcblxuICBwcml2YXRlIG9wdGlvbkNoYW5nZXNTdWJzY3JpcHRpb24/OiBTdWJzY3JpcHRpb24gfCBudWxsO1xuXG4gIHByaXZhdGUgybVSZXF1aXJlZFN1YnNjcmlwdGlvbj86IFN1YnNjcmlwdGlvbjtcblxuICBwcml2YXRlIF9kYXRhPzogTmdsQ29tYm9ib3hPcHRpb25JdGVtW10gfCBudWxsO1xuXG4gIHByaXZhdGUga2V5Ym9hcmRTdWJzY3JpcHRpb24/OiBTdWJzY3JpcHRpb24gfCBudWxsO1xuXG4gIHJlcXVpcmVkOiBib29sZWFuO1xuXG4gIEBJbnB1dCgpIHNlbGVjdGlvblZhbHVlRm4gPSAoc2VsZWN0aW9uOiBzdHJpbmdbXSk6IHN0cmluZyA9PiB7XG4gICAgaWYgKHNlbGVjdGlvbi5sZW5ndGggPiAwKSB7XG4gICAgICBpZiAodGhpcy5tdWx0aXBsZSAmJiB0aGlzLmlzTG9va3VwKSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICAgIH1cbiAgICAgIHJldHVybiBzZWxlY3Rpb24ubGVuZ3RoID09PSAxID8gc2VsZWN0aW9uWzBdIDogYCR7c2VsZWN0aW9uLmxlbmd0aH0gb3B0aW9ucyBzZWxlY3RlZGA7XG4gICAgfVxuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIGdldCBhY3RpdmVPcHRpb24oKTogTmdsQ29tYm9ib3hPcHRpb24gfCBudWxsIHtcbiAgICByZXR1cm4gdGhpcy5rZXlNYW5hZ2VyID8gdGhpcy5rZXlNYW5hZ2VyLmFjdGl2ZUl0ZW0gOiBudWxsO1xuICB9XG5cbiAgZ2V0IHNlbGVjdGVkT3B0aW9ucygpOiBOZ2xDb21ib2JveE9wdGlvbkl0ZW1bXSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YSA/IHRoaXMuZGF0YS5maWx0ZXIoZCA9PiB0aGlzLmlzU2VsZWN0ZWQoZC52YWx1ZSkpIDogW107XG4gIH1cblxuICBnZXQgaXNMb29rdXAoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMudmFyaWFudCA9PT0gJ2xvb2t1cCc7XG4gIH1cblxuICBnZXQgaGFzTG9va3VwU2luZ2xlU2VsZWN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmlzTG9va3VwICYmICF0aGlzLm11bHRpcGxlICYmIHRoaXMuc2VsZWN0ZWRPcHRpb25zLmxlbmd0aCA+IDA7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBASW5qZWN0KE5HTF9DT01CT0JPWF9DT05GSUcpIGRlZmF1bHRDb25maWc6IE5nbENvbWJvYm94Q29uZmlnLFxuICAgICAgICAgICAgICBwcml2YXRlIG5nWm9uZTogTmdab25lLFxuICAgICAgICAgICAgICBwcml2YXRlIGNkOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBzZXJ2aWNlOiBOZ2xDb21ib2JveFNlcnZpY2UpIHtcbiAgICBjb25zdCBjb25maWcgPSB7IC4uLm5ldyBOZ2xDb21ib2JveENvbmZpZygpLCAuLi5kZWZhdWx0Q29uZmlnIH07XG4gICAgdGhpcy5sb2FkaW5nTGFiZWwgPSBjb25maWcubG9hZGluZ0xhYmVsO1xuICAgIHRoaXMubm9PcHRpb25zRm91bmQgPSBjb25maWcubm9PcHRpb25zRm91bmQ7XG4gICAgdGhpcy5yZW1vdmVTZWxlY3RlZExhYmVsID0gY29uZmlnLnJlbW92ZVNlbGVjdGVkTGFiZWw7XG5cbiAgICB0aGlzLnNlcnZpY2UuY29tYm9ib3ggPSB0aGlzO1xuICAgIC8vIHRoaXMuc2VydmljZS5vcGVuQ2hhbmdlID0gdGhpcy5vcGVuQ2hhbmdlO1xuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAgIGlmICghdGhpcy5pbnB1dEVsKSB7XG4gICAgICB0aHJvdyBFcnJvcihgW25nLWxpZ2h0bmluZ10gQ291bGRuJ3QgZmluZCBhbiA8aW5wdXQ+IHdpdGggW25nbENvbWJvYm94XSBhdHRyaWJ1dGUgaW5zaWRlIE5nbENvbWJvYm94YCk7XG4gICAgfVxuICAgIHRoaXMuybVSZXF1aXJlZFN1YnNjcmlwdGlvbiA9IHRoaXMuaW5wdXRFbC7JtVJlcXVpcmVkU3ViamVjdC5zdWJzY3JpYmUoKHJlcXVpcmVkKSA9PiB7XG4gICAgICB0aGlzLnJlcXVpcmVkID0gcmVxdWlyZWQ7XG4gICAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcbiAgICB9KTtcbiAgICB0aGlzLmNhbGN1bGF0ZUVycm9ycygpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIGlmIChjaGFuZ2VzLnNlbGVjdGlvbiB8fCAodGhpcy5zZWxlY3Rpb24gJiYgY2hhbmdlcy5kYXRhKSkge1xuICAgICAgdGhpcy5jYWxjdWxhdGVEaXNwbGF5VmFsdWUoKTtcbiAgICB9XG4gICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmNhbGN1bGF0ZUVycm9ycygpLCAwKTtcbiAgfVxuXG4gIG9uQXR0YWNoKCkge1xuICAgIC8vIFNhbWUgd2lkdGggYXMgdGhlIHRyaWdnZXIgZWxlbWVudFxuICAgIHRoaXMub3ZlcmxheVdpZHRoID0gdGhpcy5vdmVybGF5T3JpZ2luPy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQub2Zmc2V0V2lkdGg7XG4gICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XG5cbiAgICB0aGlzLmtleU1hbmFnZXIgPSB0aGlzLm9wdGlvbnMgJiYgbmV3IEFjdGl2ZURlc2NlbmRhbnRLZXlNYW5hZ2VyKHRoaXMub3B0aW9ucykud2l0aFdyYXAoKTtcblxuICAgIC8vIEFjdGl2YXRlIHNlbGVjdGVkIGl0ZW0gb3IgZmlyc3Qgb3B0aW9uXG4gICAgY29uc3Qgc2VsZWN0ZWRPcHRpb24gPSB0aGlzLm9wdGlvbnM/LmZpbmQobyA9PiBvLnNlbGVjdGVkKTtcbiAgICBpZiAoc2VsZWN0ZWRPcHRpb24pIHtcbiAgICAgIHRoaXMua2V5TWFuYWdlcj8uc2V0QWN0aXZlSXRlbShzZWxlY3RlZE9wdGlvbik7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5rZXlNYW5hZ2VyPy5zZXRGaXJzdEl0ZW1BY3RpdmUoKTtcbiAgICB9XG5cbiAgICAvLyBMaXN0ZW4gdG8gYnV0dG9uIHByZXNzZXMgaWYgcGlja2xpc3QgdG8gYWN0aXZhdGUgbWF0Y2hpbmcgb3B0aW9uXG4gICAgdGhpcy5rZXlib2FyZFN1YnNjcmliZSh0aGlzLnZhcmlhbnQgPT09ICdiYXNlJyk7XG5cbiAgICAvLyBXaGVuIGl0IGlzIG9wZW4gd2UgbGlzdGVuIGZvciBvcHRpb24gY2hhbmdlcyBpbiBvcmRlciB0byBmaXggYWN0aXZlIG9wdGlvbiBhbmQgaGFuZGxlIHNjcm9sbFxuICAgIHRoaXMub3B0aW9uQ2hhbmdlc1N1YnNjcmlwdGlvbiA9IHRoaXMub3B0aW9ucz8uY2hhbmdlcy5zdWJzY3JpYmUoKCkgPT4ge1xuXG4gICAgICBjb25zdCBvcHRpb25zID0gdGhpcy5vcHRpb25zPy50b0FycmF5KCkgfHwgW107XG5cbiAgICAgIGlmICghdGhpcy5hY3RpdmVPcHRpb24gfHwgb3B0aW9ucy5pbmRleE9mKHRoaXMuYWN0aXZlT3B0aW9uKSA9PT0gLTEpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNMb29rdXAgJiYgb3B0aW9ucy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICB0aGlzLmtleU1hbmFnZXI/LnNldEFjdGl2ZUl0ZW0obnVsbCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5rZXlNYW5hZ2VyPy5zZXRGaXJzdEl0ZW1BY3RpdmUoKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5hY3RpdmVPcHRpb24uc2Nyb2xsSW50b1ZpZXcoKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy51cGRhdGVNZW51SGVpZ2h0KCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLnVwZGF0ZU1lbnVIZWlnaHQoKTtcbiAgfVxuXG4gIG9uRGV0YWNoKCkge1xuICAgIGlmICh0aGlzLm9wZW4pIHtcbiAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBDbGVhciBhcmlhLWFjdGl2ZWRlc2NlbmRhbnQgd2hlbiBtZW51IGlzIGNsb3NlZFxuICAgIHRoaXMuaW5wdXRFbD8uc2V0QXJpYUFjdGl2ZURlc2NlbmRhbnQobnVsbCk7XG5cbiAgICB0aGlzLmRldGFjaCgpO1xuICB9XG5cbiAgdHJhY2tCeU9wdGlvbihfaW5kZXg6IG51bWJlciwgb3B0aW9uOiBOZ2xDb21ib2JveE9wdGlvbikge1xuICAgIHJldHVybiBvcHRpb24udmFsdWU7XG4gIH1cblxuICBkcm9wZG93bkNsYXNzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBbYHNsZHMtZHJvcGRvd25fbGVuZ3RoLSR7dGhpcy52aXNpYmxlTGVuZ3RofWBdOiB0aGlzLnZpc2libGVMZW5ndGggPiAwLFxuICAgIH07XG4gIH1cblxuICBpbnB1dEljb25SaWdodCgpIHtcbiAgICByZXR1cm4gdGhpcy5pc0xvb2t1cCA/ICd1dGlsaXR5OnNlYXJjaCcgOiAndXRpbGl0eTpkb3duJztcbiAgfVxuXG4gIGhhc05vTWF0Y2hlcygpIHtcbiAgICByZXR1cm4gdGhpcy5pc0xvb2t1cCAmJiB0aGlzLmRhdGEubGVuZ3RoID09PSAwICYmICF0aGlzLmxvYWRpbmdNb3JlO1xuICB9XG5cbiAgb25PcHRpb25TZWxlY3Rpb24ob3B0aW9uOiBOZ2xDb21ib2JveE9wdGlvbiB8IG51bGwgPSB0aGlzLmFjdGl2ZU9wdGlvbikge1xuICAgIGlmIChvcHRpb24pIHtcbiAgICAgIGNvbnN0IHNlbGVjdGlvbiA9IGFkZE9wdGlvblRvU2VsZWN0aW9uKG9wdGlvbi52YWx1ZSwgdGhpcy5zZWxlY3Rpb24sIHRoaXMubXVsdGlwbGUpO1xuICAgICAgdGhpcy5zZWxlY3Rpb25DaGFuZ2UuZW1pdChzZWxlY3Rpb24pO1xuICAgICAgaWYgKHRoaXMuY2xvc2VPblNlbGVjdGlvbikge1xuICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gVHJpZ2dlciBieSBjbGVhciBidXR0b24gb24gTG9va3VwXG4gIG9uQ2xlYXJTZWxlY3Rpb24oKSB7XG4gICAgdGhpcy5zZWxlY3Rpb25DaGFuZ2UuZW1pdChudWxsKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuaW5wdXRFbD8uZm9jdXMoKSwgMCk7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgd2hldGhlciB2YWx1ZSBpcyBjdXJyZW50bHkgc2VsZWN0ZWQuXG4gICAqXG4gICAqIEBwYXJhbSB2YWx1ZSBUaGUgdmFsdWUgaW4gdGVzdCwgd2hldGhlciBpcyAocGFydCBvZikgc2VsZWN0aW9uIG9yIG5vdFxuICAgKi9cbiAgaXNTZWxlY3RlZCh2YWx1ZTogYW55KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGlzT3B0aW9uU2VsZWN0ZWQodmFsdWUsIHRoaXMuc2VsZWN0aW9uLCB0aGlzLm11bHRpcGxlKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuZGV0YWNoKCk7XG4gICAgdGhpcy7JtVJlcXVpcmVkU3Vic2NyaXB0aW9uPy51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgY2xvc2UoKSB7XG4gICAgdGhpcy5vcGVuQ2hhbmdlLmVtaXQoZmFsc2UpO1xuICB9XG5cbiAgcHJpdmF0ZSBkZXRhY2goKSB7XG4gICAgdGhpcy5rZXlib2FyZFN1YnNjcmliZShmYWxzZSk7XG4gICAgdGhpcy5rZXlNYW5hZ2VyID0gbnVsbDtcbiAgICBpZiAodGhpcy5vcHRpb25DaGFuZ2VzU3Vic2NyaXB0aW9uKSB7XG4gICAgICB0aGlzLm9wdGlvbkNoYW5nZXNTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgIHRoaXMub3B0aW9uQ2hhbmdlc1N1YnNjcmlwdGlvbiA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBjYWxjdWxhdGVEaXNwbGF5VmFsdWUoKSB7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLnNlbGVjdGlvblZhbHVlRm4odGhpcy5zZWxlY3RlZE9wdGlvbnMubWFwKG9wdGlvbiA9PiBvcHRpb24ubGFiZWwgfHwgJycpKTtcbiAgICB0aGlzLmlucHV0RWw/LnNldFZhbHVlKHZhbHVlKTtcbiAgfVxuXG4gIHByaXZhdGUga2V5Ym9hcmRTdWJzY3JpYmUobGlzdGVuOiBib29sZWFuKSB7XG4gICAgaWYgKHRoaXMua2V5Ym9hcmRTdWJzY3JpcHRpb24pIHtcbiAgICAgIHRoaXMua2V5Ym9hcmRTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgIHRoaXMua2V5Ym9hcmRTdWJzY3JpcHRpb24gPSBudWxsO1xuICAgIH1cblxuICAgIGlmIChsaXN0ZW4gJiYgdGhpcy5pbnB1dEVsKSB7XG4gICAgICB0aGlzLmtleWJvYXJkU3Vic2NyaXB0aW9uID0gdGhpcy5pbnB1dEVsLmtleWJvYXJkQnVmZmVyJC5zdWJzY3JpYmUoKHBhdHRlcm4pID0+IHtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucyAmJiB0aGlzLmtleU1hbmFnZXIpIHtcblxuICAgICAgICAgIHBhdHRlcm4gPSBwYXR0ZXJuLnRvTG9jYWxlTG93ZXJDYXNlKCk7XG5cbiAgICAgICAgICBjb25zdCBvcHRpb25zID0gdGhpcy5vcHRpb25zLnRvQXJyYXkoKTtcblxuICAgICAgICAgIGNvbnN0IGFjdGl2ZUluZGV4ID0gdGhpcy5hY3RpdmVPcHRpb24gPyAodGhpcy5rZXlNYW5hZ2VyLmFjdGl2ZUl0ZW1JbmRleCB8fCAwKSArIDEgOiAwO1xuICAgICAgICAgIGZvciAobGV0IGkgPSAwLCBuID0gb3B0aW9ucy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gKGFjdGl2ZUluZGV4ICsgaSkgJSBuO1xuICAgICAgICAgICAgY29uc3Qgb3B0aW9uID0gb3B0aW9uc1tpbmRleF07XG4gICAgICAgICAgICBpZiAoIW9wdGlvbi5kaXNhYmxlZCAmJiBvcHRpb24ubGFiZWwudG9Mb2NhbGVMb3dlckNhc2UoKS5zdWJzdHIoMCwgcGF0dGVybi5sZW5ndGgpID09PSBwYXR0ZXJuKSB7XG4gICAgICAgICAgICAgIHRoaXMua2V5TWFuYWdlci5zZXRBY3RpdmVJdGVtKG9wdGlvbik7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVNZW51SGVpZ2h0KCkge1xuICAgIHRoaXMubmdab25lLm9uU3RhYmxlLmFzT2JzZXJ2YWJsZSgpLnBpcGUodGFrZSgxKSkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIGlmICh0aGlzLmNka092ZXJsYXkgJiYgdGhpcy5kcm9wZG93bkVsZW1lbnRSZWYpIHtcbiAgICAgICAgY29uc3QgeyBvdmVybGF5UmVmIH0gPSB0aGlzLmNka092ZXJsYXk7XG4gICAgICAgIGNvbnN0IGhlaWdodCA9IHRoaXMuZHJvcGRvd25FbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xuICAgICAgICBvdmVybGF5UmVmLnVwZGF0ZVNpemUoe1xuICAgICAgICAgIG1pbkhlaWdodDogaGVpZ2h0ICsgNCxcbiAgICAgICAgfSk7XG4gICAgICAgIG92ZXJsYXlSZWYudXBkYXRlUG9zaXRpb24oKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgY2FsY3VsYXRlRXJyb3JzKCkge1xuICAgIGlmICh0aGlzLnJlcXVpcmVkKSB7XG4gICAgICB0aGlzLmhhc0Vycm9ycyA9ICF0b0Jvb2xlYW4odGhpcy5zZWxlY3Rpb24pO1xuICAgIH1cbiAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcbiAgfVxufVxuIl19
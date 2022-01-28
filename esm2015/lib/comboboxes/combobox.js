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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tYm9ib3guanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1saWdodG5pbmcvc3JjL2xpYi9jb21ib2JveGVzL2NvbWJvYm94LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLHVCQUF1QixFQUMvRCxZQUFZLEVBQTRCLFlBQVksRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFjLGlCQUFpQixFQUN0RyxRQUFRLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBb0IsTUFBTSxlQUFlLENBQUM7QUFDaEYsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFHL0QsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3RDLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3RFLE9BQU8sRUFBRSxRQUFRLEVBQUUsZ0JBQWdCLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDaEYsT0FBTyxFQUFFLFlBQVksRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDdkUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDdEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDcEQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDeEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLG1CQUFtQixFQUFFLE1BQU0sVUFBVSxDQUFDO0FBaUJsRSxNQUFNLE9BQU8sV0FBVztJQWdIdEIsWUFBcUQsYUFBZ0MsRUFDakUsTUFBYyxFQUNkLEVBQXFCLEVBQ3JCLE9BQTJCO1FBRjNCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxPQUFFLEdBQUYsRUFBRSxDQUFt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RUwsTUFBTTt3QkFFTixLQUFLOzhCQUVMLE1BQU07dUJBRU4sS0FBSzs0QkFFTCxLQUFLO3NCQUVMLFlBQVksU0FBQyxnQkFBZ0IsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7c0JBRS9DLEtBQUs7MEJBRUwsS0FBSzsrQkFFTCxLQUFLOzJCQUtMLEtBQUs7NkJBS0wsS0FBSztrQ0FLTCxLQUFLO3NCQUVMLFlBQVksU0FBQyxpQkFBaUI7d0JBRTlCLFdBQVcsU0FBQyxzQkFBc0I7bUJBRWxDLEtBQUssU0FBQyxTQUFTOzRCQWdCZixTQUFTLFNBQUMsZUFBZSxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTt5QkFFM0MsU0FBUyxTQUFDLFlBQVk7aUNBRXRCLFNBQVMsU0FBQyxVQUFVOytCQW1CcEIsS0FBSzs7QUE5RW1CO0lBQWYsWUFBWSxFQUFFO3lDQUFjO0FBUWI7SUFBZixZQUFZLEVBQUU7NkNBQWtCO0FBRWxCO0lBQWQsV0FBVyxFQUFFO2tEQUErQjtBQUk3QjtJQUFmLFlBQVksRUFBRTs0Q0FBbUI7QUFFbEI7SUFBZixZQUFZLEVBQUU7Z0RBQXVCO0FBRXRCO0lBQWYsWUFBWSxFQUFFO3FEQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgT25DaGFuZ2VzLCBUZW1wbGF0ZVJlZiwgT25EZXN0cm95LFxuICAgICAgICAgVmlld0NoaWxkcmVuLCBRdWVyeUxpc3QsIFNpbXBsZUNoYW5nZXMsIENvbnRlbnRDaGlsZCwgVmlld0NoaWxkLCBOZ1pvbmUsIEVsZW1lbnRSZWYsIENoYW5nZURldGVjdG9yUmVmLFxuICAgICAgICAgT3B0aW9uYWwsIEluamVjdCwgSG9zdEJpbmRpbmcsIEFmdGVyQ29udGVudEluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGl2ZURlc2NlbmRhbnRLZXlNYW5hZ2VyIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2ExMXknO1xuaW1wb3J0IHsgQ29ubmVjdGlvblBvc2l0aW9uUGFpciwgQ2RrT3ZlcmxheU9yaWdpbiwgQ2RrQ29ubmVjdGVkT3ZlcmxheSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IERFRkFVTFRfRFJPUERPV05fUE9TSVRJT05TIH0gZnJvbSAnLi4vdXRpbC9vdmVybGF5LXBvc2l0aW9uJztcbmltcG9ydCB7IHVuaXF1ZUlkLCBpc09wdGlvblNlbGVjdGVkLCBhZGRPcHRpb25Ub1NlbGVjdGlvbiB9IGZyb20gJy4uL3V0aWwvdXRpbCc7XG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4sIElucHV0TnVtYmVyLCB0b0Jvb2xlYW4gfSBmcm9tICcuLi91dGlsL2NvbnZlcnQnO1xuaW1wb3J0IHsgTmdsQ29tYm9ib3hPcHRpb24gfSBmcm9tICcuL2NvbWJvYm94LW9wdGlvbic7XG5pbXBvcnQgeyBOZ2xDb21ib2JveElucHV0IH0gZnJvbSAnLi9jb21ib2JveC1pbnB1dCc7XG5pbXBvcnQgeyBOZ2xDb21ib2JveFNlcnZpY2UgfSBmcm9tICcuL2NvbWJvYm94LnNlcnZpY2UnO1xuaW1wb3J0IHsgTmdsQ29tYm9ib3hDb25maWcsIE5HTF9DT01CT0JPWF9DT05GSUcgfSBmcm9tICcuL2NvbmZpZyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmdsQ29tYm9ib3hPcHRpb25JdGVtIHtcbiAgdmFsdWU6IG51bWJlciB8IHN0cmluZztcbiAgbGFiZWw/OiBzdHJpbmc7XG4gIGRpc2FibGVkPzogYm9vbGVhbjtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmdsLWNvbWJvYm94JyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHRlbXBsYXRlVXJsOiAnLi9jb21ib2JveC5odG1sJyxcbiAgaG9zdDoge1xuICAgICdjbGFzcy5zbGRzLWZvcm0tZWxlbWVudCc6ICd0cnVlJyxcbiAgfSxcbiAgcHJvdmlkZXJzOiBbIE5nbENvbWJvYm94U2VydmljZSBdLFxufSlcbmV4cG9ydCBjbGFzcyBOZ2xDb21ib2JveCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25EZXN0cm95LCBBZnRlckNvbnRlbnRJbml0IHtcblxuICBASW5wdXQoKSB2YXJpYW50OiAnYmFzZScgfCAnbG9va3VwJyA9ICdiYXNlJztcblxuICBASW5wdXQoKSBsYWJlbD86IHN0cmluZyB8IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgcmVhZG9ubHkgdWlkID0gdW5pcXVlSWQoJ2NvbWJvYm94Jyk7XG5cbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG9wZW4gPSBmYWxzZTtcblxuICBAT3V0cHV0KCkgb3BlbkNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcblxuICBASW5wdXQoKSBzZWxlY3Rpb246IGFueTtcblxuICBAT3V0cHV0KCkgc2VsZWN0aW9uQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBtdWx0aXBsZSA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIHZpc2libGVMZW5ndGg6IDUgfCA3IHwgMTAgPSA1O1xuXG4gIEBDb250ZW50Q2hpbGQoTmdsQ29tYm9ib3hJbnB1dCwgeyBzdGF0aWM6IHRydWUgfSkgaW5wdXRFbD86IE5nbENvbWJvYm94SW5wdXQ7XG5cbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGxvYWRpbmc/OiBib29sZWFuO1xuXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBsb2FkaW5nTW9yZT86IGJvb2xlYW47XG5cbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGNsb3NlT25TZWxlY3Rpb24gPSB0cnVlO1xuXG4gIC8qKlxuICAgKiBUZXh0IGFkZGVkIHRvIGxvYWRpbmcgc3Bpbm5lci5cbiAgICovXG4gIEBJbnB1dCgpIGxvYWRpbmdMYWJlbDogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUZXh0IG1lc3NhZ2UgdGhhdCByZW5kZXJzIHdoZW4gbm8gbWF0Y2hlcyBmb3VuZC5cbiAgICovXG4gIEBJbnB1dCgpIG5vT3B0aW9uc0ZvdW5kOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFRleHQgZm9yIHJlbW92aW5nIHNpbmdsZSBzZWxlY3RlZCBvcHRpb24uXG4gICAqL1xuICBASW5wdXQoKSByZW1vdmVTZWxlY3RlZExhYmVsOiBzdHJpbmc7XG5cbiAgQFZpZXdDaGlsZHJlbihOZ2xDb21ib2JveE9wdGlvbikgcmVhZG9ubHkgb3B0aW9ucz86IFF1ZXJ5TGlzdDxOZ2xDb21ib2JveE9wdGlvbj47XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5zbGRzLWhhcy1lcnJvcicpIGhhc0Vycm9ycyA9IGZhbHNlO1xuXG4gIEBJbnB1dCgnb3B0aW9ucycpIHNldCBkYXRhKGRhdGE6IGFueVtdKSB7XG4gICAgdGhpcy5fZGF0YSA9IChkYXRhIHx8IFtdKS5tYXAoKGQpID0+IHtcbiAgICAgIGlmICh0eXBlb2YgZCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgLy8gU3VwcG9ydCBhcnJheSBvZiBzdHJpbmdzIGFzIG9wdGlvbnMsIGJ5IG1hcHBpbmcgdG8gTmdsQ29tYm9ib3hPcHRpb25JdGVtXG4gICAgICAgIHJldHVybiB7IHZhbHVlOiBkLCBsYWJlbDogZCB9O1xuICAgICAgfSBlbHNlIGlmICghZC5sYWJlbCkge1xuICAgICAgICAvLyBVc2UgYHZhbHVlYCBpZiBtaXNzaW5nIGBsYWJlbGBcbiAgICAgICAgcmV0dXJuIHsgLi4uZCwgbGFiZWw6IGQudmFsdWUgfTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBkO1xuICAgIH0pO1xuICB9XG4gIGdldCBkYXRhKCkge1xuICAgIHJldHVybiB0aGlzLl9kYXRhIGFzIGFueVtdO1xuICB9XG5cbiAgQFZpZXdDaGlsZCgnb3ZlcmxheU9yaWdpbicsIHsgc3RhdGljOiB0cnVlIH0pIG92ZXJsYXlPcmlnaW4/OiBDZGtPdmVybGF5T3JpZ2luO1xuXG4gIEBWaWV3Q2hpbGQoJ2Nka092ZXJsYXknKSBjZGtPdmVybGF5PzogQ2RrQ29ubmVjdGVkT3ZlcmxheTtcblxuICBAVmlld0NoaWxkKCdkcm9wZG93bicpIGRyb3Bkb3duRWxlbWVudFJlZj86IEVsZW1lbnRSZWY7XG5cbiAgb3ZlcmxheVdpZHRoID0gMDtcblxuICBvdmVybGF5UG9zaXRpb25zOiBDb25uZWN0aW9uUG9zaXRpb25QYWlyW10gPSBbLi4uREVGQVVMVF9EUk9QRE9XTl9QT1NJVElPTlNbJ2xlZnQnXV07XG5cbiAgLyoqIE1hbmFnZXMgYWN0aXZlIGl0ZW0gaW4gb3B0aW9uIGxpc3QgYmFzZWQgb24ga2V5IGV2ZW50cy4gKi9cbiAga2V5TWFuYWdlcj86IEFjdGl2ZURlc2NlbmRhbnRLZXlNYW5hZ2VyPE5nbENvbWJvYm94T3B0aW9uPiB8IG51bGw7XG5cbiAgcHJpdmF0ZSBvcHRpb25DaGFuZ2VzU3Vic2NyaXB0aW9uPzogU3Vic2NyaXB0aW9uIHwgbnVsbDtcblxuICBwcml2YXRlIMm1UmVxdWlyZWRTdWJzY3JpcHRpb24/OiBTdWJzY3JpcHRpb247XG5cbiAgcHJpdmF0ZSBfZGF0YT86IE5nbENvbWJvYm94T3B0aW9uSXRlbVtdIHwgbnVsbDtcblxuICBwcml2YXRlIGtleWJvYXJkU3Vic2NyaXB0aW9uPzogU3Vic2NyaXB0aW9uIHwgbnVsbDtcblxuICByZXF1aXJlZDogYm9vbGVhbjtcblxuICBASW5wdXQoKSBzZWxlY3Rpb25WYWx1ZUZuID0gKHNlbGVjdGlvbjogc3RyaW5nW10pOiBzdHJpbmcgPT4ge1xuICAgIGlmIChzZWxlY3Rpb24ubGVuZ3RoID4gMCkge1xuICAgICAgaWYgKHRoaXMubXVsdGlwbGUgJiYgdGhpcy5pc0xvb2t1cCkge1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgICB9XG4gICAgICByZXR1cm4gc2VsZWN0aW9uLmxlbmd0aCA9PT0gMSA/IHNlbGVjdGlvblswXSA6IGAke3NlbGVjdGlvbi5sZW5ndGh9IG9wdGlvbnMgc2VsZWN0ZWRgO1xuICAgIH1cbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICBnZXQgYWN0aXZlT3B0aW9uKCk6IE5nbENvbWJvYm94T3B0aW9uIHwgbnVsbCB7XG4gICAgcmV0dXJuIHRoaXMua2V5TWFuYWdlciA/IHRoaXMua2V5TWFuYWdlci5hY3RpdmVJdGVtIDogbnVsbDtcbiAgfVxuXG4gIGdldCBzZWxlY3RlZE9wdGlvbnMoKTogTmdsQ29tYm9ib3hPcHRpb25JdGVtW10ge1xuICAgIHJldHVybiB0aGlzLmRhdGEgPyB0aGlzLmRhdGEuZmlsdGVyKGQgPT4gdGhpcy5pc1NlbGVjdGVkKGQudmFsdWUpKSA6IFtdO1xuICB9XG5cbiAgZ2V0IGlzTG9va3VwKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnZhcmlhbnQgPT09ICdsb29rdXAnO1xuICB9XG5cbiAgZ2V0IGhhc0xvb2t1cFNpbmdsZVNlbGVjdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5pc0xvb2t1cCAmJiAhdGhpcy5tdWx0aXBsZSAmJiB0aGlzLnNlbGVjdGVkT3B0aW9ucy5sZW5ndGggPiAwO1xuICB9XG5cbiAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgQEluamVjdChOR0xfQ09NQk9CT1hfQ09ORklHKSBkZWZhdWx0Q29uZmlnOiBOZ2xDb21ib2JveENvbmZpZyxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgICAgICAgICAgIHByaXZhdGUgc2VydmljZTogTmdsQ29tYm9ib3hTZXJ2aWNlKSB7XG4gICAgY29uc3QgY29uZmlnID0geyAuLi5uZXcgTmdsQ29tYm9ib3hDb25maWcoKSwgLi4uZGVmYXVsdENvbmZpZyB9O1xuICAgIHRoaXMubG9hZGluZ0xhYmVsID0gY29uZmlnLmxvYWRpbmdMYWJlbDtcbiAgICB0aGlzLm5vT3B0aW9uc0ZvdW5kID0gY29uZmlnLm5vT3B0aW9uc0ZvdW5kO1xuICAgIHRoaXMucmVtb3ZlU2VsZWN0ZWRMYWJlbCA9IGNvbmZpZy5yZW1vdmVTZWxlY3RlZExhYmVsO1xuXG4gICAgdGhpcy5zZXJ2aWNlLmNvbWJvYm94ID0gdGhpcztcbiAgICAvLyB0aGlzLnNlcnZpY2Uub3BlbkNoYW5nZSA9IHRoaXMub3BlbkNoYW5nZTtcbiAgfVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICBpZiAoIXRoaXMuaW5wdXRFbCkge1xuICAgICAgdGhyb3cgRXJyb3IoYFtuZy1saWdodG5pbmddIENvdWxkbid0IGZpbmQgYW4gPGlucHV0PiB3aXRoIFtuZ2xDb21ib2JveF0gYXR0cmlidXRlIGluc2lkZSBOZ2xDb21ib2JveGApO1xuICAgIH1cbiAgICB0aGlzLsm1UmVxdWlyZWRTdWJzY3JpcHRpb24gPSB0aGlzLmlucHV0RWwuybVSZXF1aXJlZFN1YmplY3Quc3Vic2NyaWJlKChyZXF1aXJlZCkgPT4ge1xuICAgICAgdGhpcy5yZXF1aXJlZCA9IHJlcXVpcmVkO1xuICAgICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfSk7XG4gICAgdGhpcy5jYWxjdWxhdGVFcnJvcnMoKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICBpZiAoY2hhbmdlcy5zZWxlY3Rpb24gfHwgKHRoaXMuc2VsZWN0aW9uICYmIGNoYW5nZXMuZGF0YSkpIHtcbiAgICAgIHRoaXMuY2FsY3VsYXRlRGlzcGxheVZhbHVlKCk7XG4gICAgfVxuICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5jYWxjdWxhdGVFcnJvcnMoKSwgMCk7XG4gIH1cblxuICBvbkF0dGFjaCgpIHtcbiAgICAvLyBTYW1lIHdpZHRoIGFzIHRoZSB0cmlnZ2VyIGVsZW1lbnRcbiAgICB0aGlzLm92ZXJsYXlXaWR0aCA9IHRoaXMub3ZlcmxheU9yaWdpbj8uZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoO1xuICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xuXG4gICAgdGhpcy5rZXlNYW5hZ2VyID0gdGhpcy5vcHRpb25zICYmIG5ldyBBY3RpdmVEZXNjZW5kYW50S2V5TWFuYWdlcih0aGlzLm9wdGlvbnMpLndpdGhXcmFwKCk7XG5cbiAgICAvLyBBY3RpdmF0ZSBzZWxlY3RlZCBpdGVtIG9yIGZpcnN0IG9wdGlvblxuICAgIGNvbnN0IHNlbGVjdGVkT3B0aW9uID0gdGhpcy5vcHRpb25zPy5maW5kKG8gPT4gby5zZWxlY3RlZCk7XG4gICAgaWYgKHNlbGVjdGVkT3B0aW9uKSB7XG4gICAgICB0aGlzLmtleU1hbmFnZXI/LnNldEFjdGl2ZUl0ZW0oc2VsZWN0ZWRPcHRpb24pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmtleU1hbmFnZXI/LnNldEZpcnN0SXRlbUFjdGl2ZSgpO1xuICAgIH1cblxuICAgIC8vIExpc3RlbiB0byBidXR0b24gcHJlc3NlcyBpZiBwaWNrbGlzdCB0byBhY3RpdmF0ZSBtYXRjaGluZyBvcHRpb25cbiAgICB0aGlzLmtleWJvYXJkU3Vic2NyaWJlKHRoaXMudmFyaWFudCA9PT0gJ2Jhc2UnKTtcblxuICAgIC8vIFdoZW4gaXQgaXMgb3BlbiB3ZSBsaXN0ZW4gZm9yIG9wdGlvbiBjaGFuZ2VzIGluIG9yZGVyIHRvIGZpeCBhY3RpdmUgb3B0aW9uIGFuZCBoYW5kbGUgc2Nyb2xsXG4gICAgdGhpcy5vcHRpb25DaGFuZ2VzU3Vic2NyaXB0aW9uID0gdGhpcy5vcHRpb25zPy5jaGFuZ2VzLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICBpZiAoIXRoaXMuYWN0aXZlT3B0aW9uIHx8IHRoaXMub3B0aW9ucz8udG9BcnJheSgpLmluZGV4T2YodGhpcy5hY3RpdmVPcHRpb24pID09PSAtMSkge1xuICAgICAgICAvLyBBY3RpdmF0ZSBmaXJzdCBvcHRpb24gaWYgYWN0aXZlIG9uZSBpcyBkZXN0cm95ZWRcbiAgICAgICAgdGhpcy5rZXlNYW5hZ2VyPy5zZXRGaXJzdEl0ZW1BY3RpdmUoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuYWN0aXZlT3B0aW9uLnNjcm9sbEludG9WaWV3KCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMudXBkYXRlTWVudUhlaWdodCgpO1xuICAgIH0pO1xuXG4gICAgdGhpcy51cGRhdGVNZW51SGVpZ2h0KCk7XG4gIH1cblxuICBvbkRldGFjaCgpIHtcbiAgICBpZiAodGhpcy5vcGVuKSB7XG4gICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gQ2xlYXIgYXJpYS1hY3RpdmVkZXNjZW5kYW50IHdoZW4gbWVudSBpcyBjbG9zZWRcbiAgICB0aGlzLmlucHV0RWw/LnNldEFyaWFBY3RpdmVEZXNjZW5kYW50KG51bGwpO1xuXG4gICAgdGhpcy5kZXRhY2goKTtcbiAgfVxuXG4gIHRyYWNrQnlPcHRpb24oX2luZGV4OiBudW1iZXIsIG9wdGlvbjogTmdsQ29tYm9ib3hPcHRpb24pIHtcbiAgICByZXR1cm4gb3B0aW9uLnZhbHVlO1xuICB9XG5cbiAgZHJvcGRvd25DbGFzcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgW2BzbGRzLWRyb3Bkb3duX2xlbmd0aC0ke3RoaXMudmlzaWJsZUxlbmd0aH1gXTogdGhpcy52aXNpYmxlTGVuZ3RoID4gMCxcbiAgICB9O1xuICB9XG5cbiAgaW5wdXRJY29uUmlnaHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNMb29rdXAgPyAndXRpbGl0eTpzZWFyY2gnIDogJ3V0aWxpdHk6ZG93bic7XG4gIH1cblxuICBoYXNOb01hdGNoZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNMb29rdXAgJiYgdGhpcy5kYXRhLmxlbmd0aCA9PT0gMCAmJiAhdGhpcy5sb2FkaW5nTW9yZTtcbiAgfVxuXG4gIG9uT3B0aW9uU2VsZWN0aW9uKG9wdGlvbjogTmdsQ29tYm9ib3hPcHRpb24gfCBudWxsID0gdGhpcy5hY3RpdmVPcHRpb24pIHtcbiAgICBpZiAob3B0aW9uKSB7XG4gICAgICBjb25zdCBzZWxlY3Rpb24gPSBhZGRPcHRpb25Ub1NlbGVjdGlvbihvcHRpb24udmFsdWUsIHRoaXMuc2VsZWN0aW9uLCB0aGlzLm11bHRpcGxlKTtcbiAgICAgIHRoaXMuc2VsZWN0aW9uQ2hhbmdlLmVtaXQoc2VsZWN0aW9uKTtcbiAgICAgIGlmICh0aGlzLmNsb3NlT25TZWxlY3Rpb24pIHtcbiAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIFRyaWdnZXIgYnkgY2xlYXIgYnV0dG9uIG9uIExvb2t1cFxuICBvbkNsZWFyU2VsZWN0aW9uKCkge1xuICAgIHRoaXMuc2VsZWN0aW9uQ2hhbmdlLmVtaXQobnVsbCk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmlucHV0RWw/LmZvY3VzKCksIDApO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIHdoZXRoZXIgdmFsdWUgaXMgY3VycmVudGx5IHNlbGVjdGVkLlxuICAgKlxuICAgKiBAcGFyYW0gdmFsdWUgVGhlIHZhbHVlIGluIHRlc3QsIHdoZXRoZXIgaXMgKHBhcnQgb2YpIHNlbGVjdGlvbiBvciBub3RcbiAgICovXG4gIGlzU2VsZWN0ZWQodmFsdWU6IGFueSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBpc09wdGlvblNlbGVjdGVkKHZhbHVlLCB0aGlzLnNlbGVjdGlvbiwgdGhpcy5tdWx0aXBsZSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLmRldGFjaCgpO1xuICAgIHRoaXMuybVSZXF1aXJlZFN1YnNjcmlwdGlvbj8udW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIGNsb3NlKCkge1xuICAgIHRoaXMub3BlbkNoYW5nZS5lbWl0KGZhbHNlKTtcbiAgfVxuXG4gIHByaXZhdGUgZGV0YWNoKCkge1xuICAgIHRoaXMua2V5Ym9hcmRTdWJzY3JpYmUoZmFsc2UpO1xuICAgIHRoaXMua2V5TWFuYWdlciA9IG51bGw7XG4gICAgaWYgKHRoaXMub3B0aW9uQ2hhbmdlc1N1YnNjcmlwdGlvbikge1xuICAgICAgdGhpcy5vcHRpb25DaGFuZ2VzU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICB0aGlzLm9wdGlvbkNoYW5nZXNTdWJzY3JpcHRpb24gPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgY2FsY3VsYXRlRGlzcGxheVZhbHVlKCkge1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5zZWxlY3Rpb25WYWx1ZUZuKHRoaXMuc2VsZWN0ZWRPcHRpb25zLm1hcChvcHRpb24gPT4gb3B0aW9uLmxhYmVsIHx8ICcnKSk7XG4gICAgdGhpcy5pbnB1dEVsPy5zZXRWYWx1ZSh2YWx1ZSk7XG4gIH1cblxuICBwcml2YXRlIGtleWJvYXJkU3Vic2NyaWJlKGxpc3RlbjogYm9vbGVhbikge1xuICAgIGlmICh0aGlzLmtleWJvYXJkU3Vic2NyaXB0aW9uKSB7XG4gICAgICB0aGlzLmtleWJvYXJkU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICB0aGlzLmtleWJvYXJkU3Vic2NyaXB0aW9uID0gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAobGlzdGVuICYmIHRoaXMuaW5wdXRFbCkge1xuICAgICAgdGhpcy5rZXlib2FyZFN1YnNjcmlwdGlvbiA9IHRoaXMuaW5wdXRFbC5rZXlib2FyZEJ1ZmZlciQuc3Vic2NyaWJlKChwYXR0ZXJuKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMgJiYgdGhpcy5rZXlNYW5hZ2VyKSB7XG5cbiAgICAgICAgICBwYXR0ZXJuID0gcGF0dGVybi50b0xvY2FsZUxvd2VyQ2FzZSgpO1xuXG4gICAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHRoaXMub3B0aW9ucy50b0FycmF5KCk7XG5cbiAgICAgICAgICBjb25zdCBhY3RpdmVJbmRleCA9IHRoaXMuYWN0aXZlT3B0aW9uID8gKHRoaXMua2V5TWFuYWdlci5hY3RpdmVJdGVtSW5kZXggfHwgMCkgKyAxIDogMDtcbiAgICAgICAgICBmb3IgKGxldCBpID0gMCwgbiA9IG9wdGlvbnMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IChhY3RpdmVJbmRleCArIGkpICUgbjtcbiAgICAgICAgICAgIGNvbnN0IG9wdGlvbiA9IG9wdGlvbnNbaW5kZXhdO1xuICAgICAgICAgICAgaWYgKCFvcHRpb24uZGlzYWJsZWQgJiYgb3B0aW9uLmxhYmVsLnRvTG9jYWxlTG93ZXJDYXNlKCkuc3Vic3RyKDAsIHBhdHRlcm4ubGVuZ3RoKSA9PT0gcGF0dGVybikge1xuICAgICAgICAgICAgICB0aGlzLmtleU1hbmFnZXIuc2V0QWN0aXZlSXRlbShvcHRpb24pO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlTWVudUhlaWdodCgpIHtcbiAgICB0aGlzLm5nWm9uZS5vblN0YWJsZS5hc09ic2VydmFibGUoKS5waXBlKHRha2UoMSkpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICBpZiAodGhpcy5jZGtPdmVybGF5ICYmIHRoaXMuZHJvcGRvd25FbGVtZW50UmVmKSB7XG4gICAgICAgIGNvbnN0IHsgb3ZlcmxheVJlZiB9ID0gdGhpcy5jZGtPdmVybGF5O1xuICAgICAgICBjb25zdCBoZWlnaHQgPSB0aGlzLmRyb3Bkb3duRWxlbWVudFJlZi5uYXRpdmVFbGVtZW50Lm9mZnNldEhlaWdodDtcbiAgICAgICAgb3ZlcmxheVJlZi51cGRhdGVTaXplKHtcbiAgICAgICAgICBtaW5IZWlnaHQ6IGhlaWdodCArIDQsXG4gICAgICAgIH0pO1xuICAgICAgICBvdmVybGF5UmVmLnVwZGF0ZVBvc2l0aW9uKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGNhbGN1bGF0ZUVycm9ycygpIHtcbiAgICBpZiAodGhpcy5yZXF1aXJlZCkge1xuICAgICAgdGhpcy5oYXNFcnJvcnMgPSAhdG9Cb29sZWFuKHRoaXMuc2VsZWN0aW9uKTtcbiAgICB9XG4gICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cbn1cbiJdfQ==
import { __decorate } from "tslib";
import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, ViewChildren, ContentChild, ViewChild, Optional, Inject, HostBinding } from '@angular/core';
import { ActiveDescendantKeyManager } from '@angular/cdk/a11y';
import { take } from 'rxjs/operators';
import { DEFAULT_DROPDOWN_POSITIONS } from '../util/overlay-position';
import { uniqueId, isOptionSelected, addOptionToSelection } from '../util/util';
import { InputBoolean, InputNumber, toBoolean } from '../util/convert';
import { NglComboboxOption } from './combobox-option';
import { NglComboboxInput } from './combobox-input';
import { NglComboboxService } from './combobox.service';
import { NglComboboxConfig, NGL_COMBOBOX_CONFIG } from './config';
import * as i0 from "@angular/core";
import * as i1 from "./combobox.service";
import * as i2 from "@angular/common";
import * as i3 from "../icons/svg";
import * as i4 from "../forms/label";
import * as i5 from "@angular/cdk/overlay";
import * as i6 from "../common/overlay/overlay-outside";
import * as i7 from "./combobox-option";
import * as i8 from "./config";
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
        const config = { ...new NglComboboxConfig(), ...defaultConfig };
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
                return { ...d, label: d.value };
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
        // Same width as the trigger element
        this.overlayWidth = this.overlayOrigin?.elementRef.nativeElement.offsetWidth;
        this.cd.detectChanges();
        this.keyManager = this.options && new ActiveDescendantKeyManager(this.options).withWrap();
        // Activate selected item or first option
        const selectedOption = this.options?.find(o => o.selected);
        if (selectedOption) {
            this.keyManager?.setActiveItem(selectedOption);
        }
        else {
            this.keyManager?.setFirstItemActive();
        }
        // Listen to button presses if picklist to activate matching option
        this.keyboardSubscribe(this.variant === 'base');
        // When it is open we listen for option changes in order to fix active option and handle scroll
        this.optionChangesSubscription = this.options?.changes.subscribe(() => {
            const options = this.options?.toArray() || [];
            if (!this.activeOption || options.indexOf(this.activeOption) === -1) {
                if (this.isLookup && options.length === 0) {
                    this.keyManager?.setActiveItem(null);
                }
                else {
                    this.keyManager?.setFirstItemActive();
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
        if (this.open) {
            this.close();
            return;
        }
        // Clear aria-activedescendant when menu is closed
        this.inputEl?.setAriaActiveDescendant(null);
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
        setTimeout(() => this.inputEl?.focus(), 0);
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
        this.ɵRequiredSubscription?.unsubscribe();
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
        const value = this.selectionValueFn(this.selectedOptions.map(option => option.label || ''));
        this.inputEl?.setValue(value);
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
NglCombobox.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglCombobox, deps: [{ token: NGL_COMBOBOX_CONFIG, optional: true }, { token: i0.NgZone }, { token: i0.ChangeDetectorRef }, { token: i1.NglComboboxService }], target: i0.ɵɵFactoryTarget.Component });
NglCombobox.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: NglCombobox, selector: "ngl-combobox", inputs: { variant: "variant", label: "label", open: "open", selection: "selection", multiple: "multiple", visibleLength: "visibleLength", loading: "loading", loadingMore: "loadingMore", closeOnSelection: "closeOnSelection", loadingLabel: "loadingLabel", noOptionsFound: "noOptionsFound", removeSelectedLabel: "removeSelectedLabel", data: ["options", "data"], selectionValueFn: "selectionValueFn" }, outputs: { openChange: "openChange", selectionChange: "selectionChange" }, host: { attributes: { "class.slds-form-element": "true" }, properties: { "class.slds-has-error": "this.hasErrors" } }, providers: [NglComboboxService], queries: [{ propertyName: "inputEl", first: true, predicate: NglComboboxInput, descendants: true, static: true }], viewQueries: [{ propertyName: "overlayOrigin", first: true, predicate: ["overlayOrigin"], descendants: true, static: true }, { propertyName: "cdkOverlay", first: true, predicate: ["cdkOverlay"], descendants: true }, { propertyName: "dropdownElementRef", first: true, predicate: ["dropdown"], descendants: true }, { propertyName: "options", predicate: NglComboboxOption, descendants: true }], usesOnChanges: true, ngImport: i0, template: "\n<label [nglFormLabel]=\"label\" [attr.for]=\"inputEl.id\" [required]=\"required\"></label>\n<div class=\"slds-form-element__control\">\n  <div class=\"slds-combobox_container\" [class.slds-has-selection]=\"hasLookupSingleSelection\">\n    <div class=\"slds-combobox slds-dropdown-trigger slds-dropdown-trigger_click\" [attr.aria-expanded]=\"open\" aria-haspopup=\"listbox\" role=\"combobox\" [class.slds-is-open]=\"open\" [attr.aria-owns]=\"uid\">\n      <div class=\"slds-combobox__form-element slds-input-has-icon\" role=\"none\" cdkOverlayOrigin #overlayOrigin=\"cdkOverlayOrigin\" [class.slds-input-has-icon_group-right]=\"loading\" [class.slds-input-has-icon_right]=\"!loading\">\n        <ng-content select=\"input\"></ng-content>\n        <div class=\"slds-input__icon-group slds-input__icon-group_right\" *ngIf=\"loading; else iconRight\">\n          <div class=\"slds-spinner slds-spinner_brand slds-spinner_x-small slds-input__spinner\" role=\"status\"><span class=\"slds-assistive-text\">{{ loadingLabel }}</span>\n            <div class=\"slds-spinner__dot-a\"></div>\n            <div class=\"slds-spinner__dot-b\"></div>\n          </div>\n          <ng-template [ngTemplateOutlet]=\"iconRight\"></ng-template>\n        </div>\n        <ng-template #iconRight>\n          <button class=\"slds-button slds-button_icon slds-input__icon slds-input__icon_right\" *ngIf=\"hasLookupSingleSelection; else iconTpl\" type=\"button\" (click)=\"onClearSelection()\" [title]=\"removeSelectedLabel\">\n            <svg class=\"slds-button__icon\" nglIconName=\"utility:close\"></svg><span class=\"slds-assistive-text\">{{ removeSelectedLabel }}</span>\n          </button>\n        </ng-template>\n        <ng-template #iconTpl><span class=\"slds-icon_container slds-input__icon slds-input__icon_right\">\n            <svg class=\"slds-icon slds-icon_x-small slds-icon-text-default\" [nglIconName]=\"inputIconRight()\"></svg></span></ng-template>\n      </div>\n    </div>\n  </div>\n</div>\n<ng-template cdkConnectedOverlay #cdkOverlay=\"cdkConnectedOverlay\" [cdkConnectedOverlayPositions]=\"overlayPositions\" [cdkConnectedOverlayOrigin]=\"overlayOrigin\" [cdkConnectedOverlayMinWidth]=\"overlayWidth\" [cdkConnectedOverlayOpen]=\"open\" (nglOverlayScrolledOutsideView)=\"close()\" (attach)=\"onAttach()\" (detach)=\"onDetach()\">\n  <div class=\"slds-dropdown slds-dropdown_fluid\" #dropdown [attr.id]=\"uid\" role=\"listbox\" [ngClass]=\"dropdownClass()\" (mousedown)=\"$event.preventDefault()\">\n    <ul class=\"slds-listbox slds-listbox_vertical\" role=\"presentation\">\n      <li *ngFor=\"let d of data; trackBy: trackByOption\" nglComboboxOption [value]=\"d.value\" [label]=\"d.label\" [disabled]=\"d.disabled\" [selected]=\"isSelected(d.value)\" (ariaActiveDescendant)=\"inputEl.setAriaActiveDescendant($event)\" (selectedOption)=\"onOptionSelection($event)\" (activeOption)=\"keyManager.setActiveItem($event)\"></li>\n      <li class=\"slds-listbox__item\" *ngIf=\"loadingMore\" role=\"presentation\">\n        <div class=\"slds-align_absolute-center slds-p-top_medium\">\n          <div class=\"slds-spinner slds-spinner_x-small slds-spinner_inline\" role=\"status\">\n            <div class=\"slds-assistive-text\">{{ loadingLabel }}</div>\n            <div class=\"slds-spinner__dot-a\"></div>\n            <div class=\"slds-spinner__dot-b\"></div>\n          </div>\n        </div>\n      </li>\n      <li class=\"slds-listbox__item\" *ngIf=\"hasNoMatches()\" role=\"presentation\" aria-live=\"polite\">\n        <div class=\"slds-align_absolute-center\"><span role=\"status\">{{ noOptionsFound }}</span></div>\n      </li>\n    </ul>\n  </div>\n</ng-template>", dependencies: [{ kind: "directive", type: i2.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i2.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "component", type: i3.NglIconSvg, selector: "svg[nglIconName]", inputs: ["nglIconName", "xPos"] }, { kind: "component", type: i4.NglFormLabel, selector: "label[nglFormLabel]", inputs: ["nglFormLabel", "nglFormLabelClass", "required"] }, { kind: "directive", type: i5.CdkConnectedOverlay, selector: "[cdk-connected-overlay], [connected-overlay], [cdkConnectedOverlay]", inputs: ["cdkConnectedOverlayOrigin", "cdkConnectedOverlayPositions", "cdkConnectedOverlayPositionStrategy", "cdkConnectedOverlayOffsetX", "cdkConnectedOverlayOffsetY", "cdkConnectedOverlayWidth", "cdkConnectedOverlayHeight", "cdkConnectedOverlayMinWidth", "cdkConnectedOverlayMinHeight", "cdkConnectedOverlayBackdropClass", "cdkConnectedOverlayPanelClass", "cdkConnectedOverlayViewportMargin", "cdkConnectedOverlayScrollStrategy", "cdkConnectedOverlayOpen", "cdkConnectedOverlayDisableClose", "cdkConnectedOverlayTransformOriginOn", "cdkConnectedOverlayHasBackdrop", "cdkConnectedOverlayLockPosition", "cdkConnectedOverlayFlexibleDimensions", "cdkConnectedOverlayGrowAfterOpen", "cdkConnectedOverlayPush"], outputs: ["backdropClick", "positionChange", "attach", "detach", "overlayKeydown", "overlayOutsideClick"], exportAs: ["cdkConnectedOverlay"] }, { kind: "directive", type: i5.CdkOverlayOrigin, selector: "[cdk-overlay-origin], [overlay-origin], [cdkOverlayOrigin]", exportAs: ["cdkOverlayOrigin"] }, { kind: "directive", type: i6.NglOverlaynglOverlayScrolledOutsideViewDirective, selector: "[nglOverlayScrolledOutsideView]", outputs: ["nglOverlayScrolledOutsideView"] }, { kind: "component", type: i7.NglComboboxOption, selector: "ngl-combobox-option, [nglComboboxOption]", inputs: ["value", "label", "selected", "disabled"], outputs: ["ariaActiveDescendant", "selectedOption", "activeOption"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
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
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglCombobox, decorators: [{
            type: Component,
            args: [{ selector: 'ngl-combobox', changeDetection: ChangeDetectionStrategy.OnPush, host: {
                        'class.slds-form-element': 'true',
                    }, providers: [NglComboboxService], template: "\n<label [nglFormLabel]=\"label\" [attr.for]=\"inputEl.id\" [required]=\"required\"></label>\n<div class=\"slds-form-element__control\">\n  <div class=\"slds-combobox_container\" [class.slds-has-selection]=\"hasLookupSingleSelection\">\n    <div class=\"slds-combobox slds-dropdown-trigger slds-dropdown-trigger_click\" [attr.aria-expanded]=\"open\" aria-haspopup=\"listbox\" role=\"combobox\" [class.slds-is-open]=\"open\" [attr.aria-owns]=\"uid\">\n      <div class=\"slds-combobox__form-element slds-input-has-icon\" role=\"none\" cdkOverlayOrigin #overlayOrigin=\"cdkOverlayOrigin\" [class.slds-input-has-icon_group-right]=\"loading\" [class.slds-input-has-icon_right]=\"!loading\">\n        <ng-content select=\"input\"></ng-content>\n        <div class=\"slds-input__icon-group slds-input__icon-group_right\" *ngIf=\"loading; else iconRight\">\n          <div class=\"slds-spinner slds-spinner_brand slds-spinner_x-small slds-input__spinner\" role=\"status\"><span class=\"slds-assistive-text\">{{ loadingLabel }}</span>\n            <div class=\"slds-spinner__dot-a\"></div>\n            <div class=\"slds-spinner__dot-b\"></div>\n          </div>\n          <ng-template [ngTemplateOutlet]=\"iconRight\"></ng-template>\n        </div>\n        <ng-template #iconRight>\n          <button class=\"slds-button slds-button_icon slds-input__icon slds-input__icon_right\" *ngIf=\"hasLookupSingleSelection; else iconTpl\" type=\"button\" (click)=\"onClearSelection()\" [title]=\"removeSelectedLabel\">\n            <svg class=\"slds-button__icon\" nglIconName=\"utility:close\"></svg><span class=\"slds-assistive-text\">{{ removeSelectedLabel }}</span>\n          </button>\n        </ng-template>\n        <ng-template #iconTpl><span class=\"slds-icon_container slds-input__icon slds-input__icon_right\">\n            <svg class=\"slds-icon slds-icon_x-small slds-icon-text-default\" [nglIconName]=\"inputIconRight()\"></svg></span></ng-template>\n      </div>\n    </div>\n  </div>\n</div>\n<ng-template cdkConnectedOverlay #cdkOverlay=\"cdkConnectedOverlay\" [cdkConnectedOverlayPositions]=\"overlayPositions\" [cdkConnectedOverlayOrigin]=\"overlayOrigin\" [cdkConnectedOverlayMinWidth]=\"overlayWidth\" [cdkConnectedOverlayOpen]=\"open\" (nglOverlayScrolledOutsideView)=\"close()\" (attach)=\"onAttach()\" (detach)=\"onDetach()\">\n  <div class=\"slds-dropdown slds-dropdown_fluid\" #dropdown [attr.id]=\"uid\" role=\"listbox\" [ngClass]=\"dropdownClass()\" (mousedown)=\"$event.preventDefault()\">\n    <ul class=\"slds-listbox slds-listbox_vertical\" role=\"presentation\">\n      <li *ngFor=\"let d of data; trackBy: trackByOption\" nglComboboxOption [value]=\"d.value\" [label]=\"d.label\" [disabled]=\"d.disabled\" [selected]=\"isSelected(d.value)\" (ariaActiveDescendant)=\"inputEl.setAriaActiveDescendant($event)\" (selectedOption)=\"onOptionSelection($event)\" (activeOption)=\"keyManager.setActiveItem($event)\"></li>\n      <li class=\"slds-listbox__item\" *ngIf=\"loadingMore\" role=\"presentation\">\n        <div class=\"slds-align_absolute-center slds-p-top_medium\">\n          <div class=\"slds-spinner slds-spinner_x-small slds-spinner_inline\" role=\"status\">\n            <div class=\"slds-assistive-text\">{{ loadingLabel }}</div>\n            <div class=\"slds-spinner__dot-a\"></div>\n            <div class=\"slds-spinner__dot-b\"></div>\n          </div>\n        </div>\n      </li>\n      <li class=\"slds-listbox__item\" *ngIf=\"hasNoMatches()\" role=\"presentation\" aria-live=\"polite\">\n        <div class=\"slds-align_absolute-center\"><span role=\"status\">{{ noOptionsFound }}</span></div>\n      </li>\n    </ul>\n  </div>\n</ng-template>" }]
        }], ctorParameters: function () { return [{ type: i8.NglComboboxConfig, decorators: [{
                    type: Optional
                }, {
                    type: Inject,
                    args: [NGL_COMBOBOX_CONFIG]
                }] }, { type: i0.NgZone }, { type: i0.ChangeDetectorRef }, { type: i1.NglComboboxService }]; }, propDecorators: { variant: [{
                type: Input
            }], label: [{
                type: Input
            }], open: [{
                type: Input
            }], openChange: [{
                type: Output
            }], selection: [{
                type: Input
            }], selectionChange: [{
                type: Output
            }], multiple: [{
                type: Input
            }], visibleLength: [{
                type: Input
            }], inputEl: [{
                type: ContentChild,
                args: [NglComboboxInput, { static: true }]
            }], loading: [{
                type: Input
            }], loadingMore: [{
                type: Input
            }], closeOnSelection: [{
                type: Input
            }], loadingLabel: [{
                type: Input
            }], noOptionsFound: [{
                type: Input
            }], removeSelectedLabel: [{
                type: Input
            }], options: [{
                type: ViewChildren,
                args: [NglComboboxOption]
            }], hasErrors: [{
                type: HostBinding,
                args: ['class.slds-has-error']
            }], data: [{
                type: Input,
                args: ['options']
            }], overlayOrigin: [{
                type: ViewChild,
                args: ['overlayOrigin', { static: true }]
            }], cdkOverlay: [{
                type: ViewChild,
                args: ['cdkOverlay']
            }], dropdownElementRef: [{
                type: ViewChild,
                args: ['dropdown']
            }], selectionValueFn: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tYm9ib3guanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1saWdodG5pbmcvc3JjL2xpYi9jb21ib2JveGVzL2NvbWJvYm94LnRzIiwiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctbGlnaHRuaW5nL3NyYy9saWIvY29tYm9ib3hlcy9jb21ib2JveC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLHVCQUF1QixFQUMvRCxZQUFZLEVBQTRCLFlBQVksRUFBRSxTQUFTLEVBQy9ELFFBQVEsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFvQixNQUFNLGVBQWUsQ0FBQztBQUNoRixPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUcvRCxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDdEMsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDdEUsT0FBTyxFQUFFLFFBQVEsRUFBRSxnQkFBZ0IsRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUNoRixPQUFPLEVBQUUsWUFBWSxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN2RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNwRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxVQUFVLENBQUM7Ozs7Ozs7Ozs7QUFpQmxFLE1BQU0sT0FBTyxXQUFXO0lBZ0h0QixZQUFxRCxhQUFnQyxFQUNqRSxNQUFjLEVBQ2QsRUFBcUIsRUFD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QUVBLGtCQUFrQjtzQkFBeEMsU0FBUzt1QkFBQyxVQUFVO2dCQW1CWixnQkFBZ0I7c0JBQXhCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIE9uQ2hhbmdlcywgVGVtcGxhdGVSZWYsIE9uRGVzdHJveSxcbiAgICAgICAgIFZpZXdDaGlsZHJlbiwgUXVlcnlMaXN0LCBTaW1wbGVDaGFuZ2VzLCBDb250ZW50Q2hpbGQsIFZpZXdDaGlsZCwgTmdab25lLCBFbGVtZW50UmVmLCBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICAgICAgIE9wdGlvbmFsLCBJbmplY3QsIEhvc3RCaW5kaW5nLCBBZnRlckNvbnRlbnRJbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmVEZXNjZW5kYW50S2V5TWFuYWdlciB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9hMTF5JztcbmltcG9ydCB7IENvbm5lY3Rpb25Qb3NpdGlvblBhaXIsIENka092ZXJsYXlPcmlnaW4sIENka0Nvbm5lY3RlZE92ZXJsYXkgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2UgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBERUZBVUxUX0RST1BET1dOX1BPU0lUSU9OUyB9IGZyb20gJy4uL3V0aWwvb3ZlcmxheS1wb3NpdGlvbic7XG5pbXBvcnQgeyB1bmlxdWVJZCwgaXNPcHRpb25TZWxlY3RlZCwgYWRkT3B0aW9uVG9TZWxlY3Rpb24gfSBmcm9tICcuLi91dGlsL3V0aWwnO1xuaW1wb3J0IHsgSW5wdXRCb29sZWFuLCBJbnB1dE51bWJlciwgdG9Cb29sZWFuIH0gZnJvbSAnLi4vdXRpbC9jb252ZXJ0JztcbmltcG9ydCB7IE5nbENvbWJvYm94T3B0aW9uIH0gZnJvbSAnLi9jb21ib2JveC1vcHRpb24nO1xuaW1wb3J0IHsgTmdsQ29tYm9ib3hJbnB1dCB9IGZyb20gJy4vY29tYm9ib3gtaW5wdXQnO1xuaW1wb3J0IHsgTmdsQ29tYm9ib3hTZXJ2aWNlIH0gZnJvbSAnLi9jb21ib2JveC5zZXJ2aWNlJztcbmltcG9ydCB7IE5nbENvbWJvYm94Q29uZmlnLCBOR0xfQ09NQk9CT1hfQ09ORklHIH0gZnJvbSAnLi9jb25maWcnO1xuXG5leHBvcnQgaW50ZXJmYWNlIE5nbENvbWJvYm94T3B0aW9uSXRlbSB7XG4gIHZhbHVlOiBudW1iZXIgfCBzdHJpbmc7XG4gIGxhYmVsPzogc3RyaW5nO1xuICBkaXNhYmxlZD86IGJvb2xlYW47XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25nbC1jb21ib2JveCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICB0ZW1wbGF0ZVVybDogJy4vY29tYm9ib3guaHRtbCcsXG4gIGhvc3Q6IHtcbiAgICAnY2xhc3Muc2xkcy1mb3JtLWVsZW1lbnQnOiAndHJ1ZScsXG4gIH0sXG4gIHByb3ZpZGVyczogWyBOZ2xDb21ib2JveFNlcnZpY2UgXSxcbn0pXG5leHBvcnQgY2xhc3MgTmdsQ29tYm9ib3ggaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uRGVzdHJveSwgQWZ0ZXJDb250ZW50SW5pdCB7XG5cbiAgQElucHV0KCkgdmFyaWFudDogJ2Jhc2UnIHwgJ2xvb2t1cCcgPSAnYmFzZSc7XG5cbiAgQElucHV0KCkgbGFiZWw/OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIHJlYWRvbmx5IHVpZCA9IHVuaXF1ZUlkKCdjb21ib2JveCcpO1xuXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBvcGVuID0gZmFsc2U7XG5cbiAgQE91dHB1dCgpIG9wZW5DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG5cbiAgQElucHV0KCkgc2VsZWN0aW9uOiBhbnk7XG5cbiAgQE91dHB1dCgpIHNlbGVjdGlvbkNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbXVsdGlwbGUgPSBmYWxzZTtcblxuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSB2aXNpYmxlTGVuZ3RoOiA1IHwgNyB8IDEwID0gNTtcblxuICBAQ29udGVudENoaWxkKE5nbENvbWJvYm94SW5wdXQsIHsgc3RhdGljOiB0cnVlIH0pIGlucHV0RWw/OiBOZ2xDb21ib2JveElucHV0O1xuXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBsb2FkaW5nPzogYm9vbGVhbjtcblxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbG9hZGluZ01vcmU/OiBib29sZWFuO1xuXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBjbG9zZU9uU2VsZWN0aW9uID0gdHJ1ZTtcblxuICAvKipcbiAgICogVGV4dCBhZGRlZCB0byBsb2FkaW5nIHNwaW5uZXIuXG4gICAqL1xuICBASW5wdXQoKSBsb2FkaW5nTGFiZWw6IHN0cmluZztcblxuICAvKipcbiAgICogVGV4dCBtZXNzYWdlIHRoYXQgcmVuZGVycyB3aGVuIG5vIG1hdGNoZXMgZm91bmQuXG4gICAqL1xuICBASW5wdXQoKSBub09wdGlvbnNGb3VuZDogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUZXh0IGZvciByZW1vdmluZyBzaW5nbGUgc2VsZWN0ZWQgb3B0aW9uLlxuICAgKi9cbiAgQElucHV0KCkgcmVtb3ZlU2VsZWN0ZWRMYWJlbDogc3RyaW5nO1xuXG4gIEBWaWV3Q2hpbGRyZW4oTmdsQ29tYm9ib3hPcHRpb24pIHJlYWRvbmx5IG9wdGlvbnM/OiBRdWVyeUxpc3Q8TmdsQ29tYm9ib3hPcHRpb24+O1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3Muc2xkcy1oYXMtZXJyb3InKSBoYXNFcnJvcnMgPSBmYWxzZTtcblxuICBASW5wdXQoJ29wdGlvbnMnKSBzZXQgZGF0YShkYXRhOiBhbnlbXSkge1xuICAgIHRoaXMuX2RhdGEgPSAoZGF0YSB8fCBbXSkubWFwKChkKSA9PiB7XG4gICAgICBpZiAodHlwZW9mIGQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIC8vIFN1cHBvcnQgYXJyYXkgb2Ygc3RyaW5ncyBhcyBvcHRpb25zLCBieSBtYXBwaW5nIHRvIE5nbENvbWJvYm94T3B0aW9uSXRlbVxuICAgICAgICByZXR1cm4geyB2YWx1ZTogZCwgbGFiZWw6IGQgfTtcbiAgICAgIH0gZWxzZSBpZiAoIWQubGFiZWwpIHtcbiAgICAgICAgLy8gVXNlIGB2YWx1ZWAgaWYgbWlzc2luZyBgbGFiZWxgXG4gICAgICAgIHJldHVybiB7IC4uLmQsIGxhYmVsOiBkLnZhbHVlIH07XG4gICAgICB9XG4gICAgICByZXR1cm4gZDtcbiAgICB9KTtcbiAgfVxuICBnZXQgZGF0YSgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGF0YSBhcyBhbnlbXTtcbiAgfVxuXG4gIEBWaWV3Q2hpbGQoJ292ZXJsYXlPcmlnaW4nLCB7IHN0YXRpYzogdHJ1ZSB9KSBvdmVybGF5T3JpZ2luPzogQ2RrT3ZlcmxheU9yaWdpbjtcblxuICBAVmlld0NoaWxkKCdjZGtPdmVybGF5JykgY2RrT3ZlcmxheT86IENka0Nvbm5lY3RlZE92ZXJsYXk7XG5cbiAgQFZpZXdDaGlsZCgnZHJvcGRvd24nKSBkcm9wZG93bkVsZW1lbnRSZWY/OiBFbGVtZW50UmVmO1xuXG4gIG92ZXJsYXlXaWR0aCA9IDA7XG5cbiAgb3ZlcmxheVBvc2l0aW9uczogQ29ubmVjdGlvblBvc2l0aW9uUGFpcltdID0gWy4uLkRFRkFVTFRfRFJPUERPV05fUE9TSVRJT05TWydsZWZ0J11dO1xuXG4gIC8qKiBNYW5hZ2VzIGFjdGl2ZSBpdGVtIGluIG9wdGlvbiBsaXN0IGJhc2VkIG9uIGtleSBldmVudHMuICovXG4gIGtleU1hbmFnZXI/OiBBY3RpdmVEZXNjZW5kYW50S2V5TWFuYWdlcjxOZ2xDb21ib2JveE9wdGlvbj4gfCBudWxsO1xuXG4gIHByaXZhdGUgb3B0aW9uQ2hhbmdlc1N1YnNjcmlwdGlvbj86IFN1YnNjcmlwdGlvbiB8IG51bGw7XG5cbiAgcHJpdmF0ZSDJtVJlcXVpcmVkU3Vic2NyaXB0aW9uPzogU3Vic2NyaXB0aW9uO1xuXG4gIHByaXZhdGUgX2RhdGE/OiBOZ2xDb21ib2JveE9wdGlvbkl0ZW1bXSB8IG51bGw7XG5cbiAgcHJpdmF0ZSBrZXlib2FyZFN1YnNjcmlwdGlvbj86IFN1YnNjcmlwdGlvbiB8IG51bGw7XG5cbiAgcmVxdWlyZWQ6IGJvb2xlYW47XG5cbiAgQElucHV0KCkgc2VsZWN0aW9uVmFsdWVGbiA9IChzZWxlY3Rpb246IHN0cmluZ1tdKTogc3RyaW5nID0+IHtcbiAgICBpZiAoc2VsZWN0aW9uLmxlbmd0aCA+IDApIHtcbiAgICAgIGlmICh0aGlzLm11bHRpcGxlICYmIHRoaXMuaXNMb29rdXApIHtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHNlbGVjdGlvbi5sZW5ndGggPT09IDEgPyBzZWxlY3Rpb25bMF0gOiBgJHtzZWxlY3Rpb24ubGVuZ3RofSBvcHRpb25zIHNlbGVjdGVkYDtcbiAgICB9XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgZ2V0IGFjdGl2ZU9wdGlvbigpOiBOZ2xDb21ib2JveE9wdGlvbiB8IG51bGwge1xuICAgIHJldHVybiB0aGlzLmtleU1hbmFnZXIgPyB0aGlzLmtleU1hbmFnZXIuYWN0aXZlSXRlbSA6IG51bGw7XG4gIH1cblxuICBnZXQgc2VsZWN0ZWRPcHRpb25zKCk6IE5nbENvbWJvYm94T3B0aW9uSXRlbVtdIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhID8gdGhpcy5kYXRhLmZpbHRlcihkID0+IHRoaXMuaXNTZWxlY3RlZChkLnZhbHVlKSkgOiBbXTtcbiAgfVxuXG4gIGdldCBpc0xvb2t1cCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy52YXJpYW50ID09PSAnbG9va3VwJztcbiAgfVxuXG4gIGdldCBoYXNMb29rdXBTaW5nbGVTZWxlY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNMb29rdXAgJiYgIXRoaXMubXVsdGlwbGUgJiYgdGhpcy5zZWxlY3RlZE9wdGlvbnMubGVuZ3RoID4gMDtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIEBJbmplY3QoTkdMX0NPTUJPQk9YX0NPTkZJRykgZGVmYXVsdENvbmZpZzogTmdsQ29tYm9ib3hDb25maWcsXG4gICAgICAgICAgICAgIHByaXZhdGUgbmdab25lOiBOZ1pvbmUsXG4gICAgICAgICAgICAgIHByaXZhdGUgY2Q6IENoYW5nZURldGVjdG9yUmVmLFxuICAgICAgICAgICAgICBwcml2YXRlIHNlcnZpY2U6IE5nbENvbWJvYm94U2VydmljZSkge1xuICAgIGNvbnN0IGNvbmZpZyA9IHsgLi4ubmV3IE5nbENvbWJvYm94Q29uZmlnKCksIC4uLmRlZmF1bHRDb25maWcgfTtcbiAgICB0aGlzLmxvYWRpbmdMYWJlbCA9IGNvbmZpZy5sb2FkaW5nTGFiZWw7XG4gICAgdGhpcy5ub09wdGlvbnNGb3VuZCA9IGNvbmZpZy5ub09wdGlvbnNGb3VuZDtcbiAgICB0aGlzLnJlbW92ZVNlbGVjdGVkTGFiZWwgPSBjb25maWcucmVtb3ZlU2VsZWN0ZWRMYWJlbDtcblxuICAgIHRoaXMuc2VydmljZS5jb21ib2JveCA9IHRoaXM7XG4gICAgLy8gdGhpcy5zZXJ2aWNlLm9wZW5DaGFuZ2UgPSB0aGlzLm9wZW5DaGFuZ2U7XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgaWYgKCF0aGlzLmlucHV0RWwpIHtcbiAgICAgIHRocm93IEVycm9yKGBbbmctbGlnaHRuaW5nXSBDb3VsZG4ndCBmaW5kIGFuIDxpbnB1dD4gd2l0aCBbbmdsQ29tYm9ib3hdIGF0dHJpYnV0ZSBpbnNpZGUgTmdsQ29tYm9ib3hgKTtcbiAgICB9XG4gICAgdGhpcy7JtVJlcXVpcmVkU3Vic2NyaXB0aW9uID0gdGhpcy5pbnB1dEVsLsm1UmVxdWlyZWRTdWJqZWN0LnN1YnNjcmliZSgocmVxdWlyZWQpID0+IHtcbiAgICAgIHRoaXMucmVxdWlyZWQgPSByZXF1aXJlZDtcbiAgICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH0pO1xuICAgIHRoaXMuY2FsY3VsYXRlRXJyb3JzKCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgaWYgKGNoYW5nZXMuc2VsZWN0aW9uIHx8ICh0aGlzLnNlbGVjdGlvbiAmJiBjaGFuZ2VzLmRhdGEpKSB7XG4gICAgICB0aGlzLmNhbGN1bGF0ZURpc3BsYXlWYWx1ZSgpO1xuICAgIH1cbiAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuY2FsY3VsYXRlRXJyb3JzKCksIDApO1xuICB9XG5cbiAgb25BdHRhY2goKSB7XG4gICAgLy8gU2FtZSB3aWR0aCBhcyB0aGUgdHJpZ2dlciBlbGVtZW50XG4gICAgdGhpcy5vdmVybGF5V2lkdGggPSB0aGlzLm92ZXJsYXlPcmlnaW4/LmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aDtcbiAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcblxuICAgIHRoaXMua2V5TWFuYWdlciA9IHRoaXMub3B0aW9ucyAmJiBuZXcgQWN0aXZlRGVzY2VuZGFudEtleU1hbmFnZXIodGhpcy5vcHRpb25zKS53aXRoV3JhcCgpO1xuXG4gICAgLy8gQWN0aXZhdGUgc2VsZWN0ZWQgaXRlbSBvciBmaXJzdCBvcHRpb25cbiAgICBjb25zdCBzZWxlY3RlZE9wdGlvbiA9IHRoaXMub3B0aW9ucz8uZmluZChvID0+IG8uc2VsZWN0ZWQpO1xuICAgIGlmIChzZWxlY3RlZE9wdGlvbikge1xuICAgICAgdGhpcy5rZXlNYW5hZ2VyPy5zZXRBY3RpdmVJdGVtKHNlbGVjdGVkT3B0aW9uKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmtleU1hbmFnZXI/LnNldEZpcnN0SXRlbUFjdGl2ZSgpO1xuICAgIH1cblxuICAgIC8vIExpc3RlbiB0byBidXR0b24gcHJlc3NlcyBpZiBwaWNrbGlzdCB0byBhY3RpdmF0ZSBtYXRjaGluZyBvcHRpb25cbiAgICB0aGlzLmtleWJvYXJkU3Vic2NyaWJlKHRoaXMudmFyaWFudCA9PT0gJ2Jhc2UnKTtcblxuICAgIC8vIFdoZW4gaXQgaXMgb3BlbiB3ZSBsaXN0ZW4gZm9yIG9wdGlvbiBjaGFuZ2VzIGluIG9yZGVyIHRvIGZpeCBhY3RpdmUgb3B0aW9uIGFuZCBoYW5kbGUgc2Nyb2xsXG4gICAgdGhpcy5vcHRpb25DaGFuZ2VzU3Vic2NyaXB0aW9uID0gdGhpcy5vcHRpb25zPy5jaGFuZ2VzLnN1YnNjcmliZSgoKSA9PiB7XG5cbiAgICAgIGNvbnN0IG9wdGlvbnMgPSB0aGlzLm9wdGlvbnM/LnRvQXJyYXkoKSB8fCBbXTtcblxuICAgICAgaWYgKCF0aGlzLmFjdGl2ZU9wdGlvbiB8fCBvcHRpb25zLmluZGV4T2YodGhpcy5hY3RpdmVPcHRpb24pID09PSAtMSkge1xuICAgICAgICBpZiAodGhpcy5pc0xvb2t1cCAmJiBvcHRpb25zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIHRoaXMua2V5TWFuYWdlcj8uc2V0QWN0aXZlSXRlbShudWxsKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmtleU1hbmFnZXI/LnNldEZpcnN0SXRlbUFjdGl2ZSgpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmFjdGl2ZU9wdGlvbi5zY3JvbGxJbnRvVmlldygpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnVwZGF0ZU1lbnVIZWlnaHQoKTtcbiAgICB9KTtcblxuICAgIHRoaXMudXBkYXRlTWVudUhlaWdodCgpO1xuICB9XG5cbiAgb25EZXRhY2goKSB7XG4gICAgaWYgKHRoaXMub3Blbikge1xuICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIENsZWFyIGFyaWEtYWN0aXZlZGVzY2VuZGFudCB3aGVuIG1lbnUgaXMgY2xvc2VkXG4gICAgdGhpcy5pbnB1dEVsPy5zZXRBcmlhQWN0aXZlRGVzY2VuZGFudChudWxsKTtcblxuICAgIHRoaXMuZGV0YWNoKCk7XG4gIH1cblxuICB0cmFja0J5T3B0aW9uKF9pbmRleDogbnVtYmVyLCBvcHRpb246IE5nbENvbWJvYm94T3B0aW9uKSB7XG4gICAgcmV0dXJuIG9wdGlvbi52YWx1ZTtcbiAgfVxuXG4gIGRyb3Bkb3duQ2xhc3MoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFtgc2xkcy1kcm9wZG93bl9sZW5ndGgtJHt0aGlzLnZpc2libGVMZW5ndGh9YF06IHRoaXMudmlzaWJsZUxlbmd0aCA+IDAsXG4gICAgfTtcbiAgfVxuXG4gIGlucHV0SWNvblJpZ2h0KCkge1xuICAgIHJldHVybiB0aGlzLmlzTG9va3VwID8gJ3V0aWxpdHk6c2VhcmNoJyA6ICd1dGlsaXR5OmRvd24nO1xuICB9XG5cbiAgaGFzTm9NYXRjaGVzKCkge1xuICAgIHJldHVybiB0aGlzLmlzTG9va3VwICYmIHRoaXMuZGF0YS5sZW5ndGggPT09IDAgJiYgIXRoaXMubG9hZGluZ01vcmU7XG4gIH1cblxuICBvbk9wdGlvblNlbGVjdGlvbihvcHRpb246IE5nbENvbWJvYm94T3B0aW9uIHwgbnVsbCA9IHRoaXMuYWN0aXZlT3B0aW9uKSB7XG4gICAgaWYgKG9wdGlvbikge1xuICAgICAgY29uc3Qgc2VsZWN0aW9uID0gYWRkT3B0aW9uVG9TZWxlY3Rpb24ob3B0aW9uLnZhbHVlLCB0aGlzLnNlbGVjdGlvbiwgdGhpcy5tdWx0aXBsZSk7XG4gICAgICB0aGlzLnNlbGVjdGlvbkNoYW5nZS5lbWl0KHNlbGVjdGlvbik7XG4gICAgICBpZiAodGhpcy5jbG9zZU9uU2VsZWN0aW9uKSB7XG4gICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBUcmlnZ2VyIGJ5IGNsZWFyIGJ1dHRvbiBvbiBMb29rdXBcbiAgb25DbGVhclNlbGVjdGlvbigpIHtcbiAgICB0aGlzLnNlbGVjdGlvbkNoYW5nZS5lbWl0KG51bGwpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5pbnB1dEVsPy5mb2N1cygpLCAwKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayB3aGV0aGVyIHZhbHVlIGlzIGN1cnJlbnRseSBzZWxlY3RlZC5cbiAgICpcbiAgICogQHBhcmFtIHZhbHVlIFRoZSB2YWx1ZSBpbiB0ZXN0LCB3aGV0aGVyIGlzIChwYXJ0IG9mKSBzZWxlY3Rpb24gb3Igbm90XG4gICAqL1xuICBpc1NlbGVjdGVkKHZhbHVlOiBhbnkpOiBib29sZWFuIHtcbiAgICByZXR1cm4gaXNPcHRpb25TZWxlY3RlZCh2YWx1ZSwgdGhpcy5zZWxlY3Rpb24sIHRoaXMubXVsdGlwbGUpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5kZXRhY2goKTtcbiAgICB0aGlzLsm1UmVxdWlyZWRTdWJzY3JpcHRpb24/LnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICBjbG9zZSgpIHtcbiAgICB0aGlzLm9wZW5DaGFuZ2UuZW1pdChmYWxzZSk7XG4gIH1cblxuICBwcml2YXRlIGRldGFjaCgpIHtcbiAgICB0aGlzLmtleWJvYXJkU3Vic2NyaWJlKGZhbHNlKTtcbiAgICB0aGlzLmtleU1hbmFnZXIgPSBudWxsO1xuICAgIGlmICh0aGlzLm9wdGlvbkNoYW5nZXNTdWJzY3JpcHRpb24pIHtcbiAgICAgIHRoaXMub3B0aW9uQ2hhbmdlc1N1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgdGhpcy5vcHRpb25DaGFuZ2VzU3Vic2NyaXB0aW9uID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGNhbGN1bGF0ZURpc3BsYXlWYWx1ZSgpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuc2VsZWN0aW9uVmFsdWVGbih0aGlzLnNlbGVjdGVkT3B0aW9ucy5tYXAob3B0aW9uID0+IG9wdGlvbi5sYWJlbCB8fCAnJykpO1xuICAgIHRoaXMuaW5wdXRFbD8uc2V0VmFsdWUodmFsdWUpO1xuICB9XG5cbiAgcHJpdmF0ZSBrZXlib2FyZFN1YnNjcmliZShsaXN0ZW46IGJvb2xlYW4pIHtcbiAgICBpZiAodGhpcy5rZXlib2FyZFN1YnNjcmlwdGlvbikge1xuICAgICAgdGhpcy5rZXlib2FyZFN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgdGhpcy5rZXlib2FyZFN1YnNjcmlwdGlvbiA9IG51bGw7XG4gICAgfVxuXG4gICAgaWYgKGxpc3RlbiAmJiB0aGlzLmlucHV0RWwpIHtcbiAgICAgIHRoaXMua2V5Ym9hcmRTdWJzY3JpcHRpb24gPSB0aGlzLmlucHV0RWwua2V5Ym9hcmRCdWZmZXIkLnN1YnNjcmliZSgocGF0dGVybikgPT4ge1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zICYmIHRoaXMua2V5TWFuYWdlcikge1xuXG4gICAgICAgICAgcGF0dGVybiA9IHBhdHRlcm4udG9Mb2NhbGVMb3dlckNhc2UoKTtcblxuICAgICAgICAgIGNvbnN0IG9wdGlvbnMgPSB0aGlzLm9wdGlvbnMudG9BcnJheSgpO1xuXG4gICAgICAgICAgY29uc3QgYWN0aXZlSW5kZXggPSB0aGlzLmFjdGl2ZU9wdGlvbiA/ICh0aGlzLmtleU1hbmFnZXIuYWN0aXZlSXRlbUluZGV4IHx8IDApICsgMSA6IDA7XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDAsIG4gPSBvcHRpb25zLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgY29uc3QgaW5kZXggPSAoYWN0aXZlSW5kZXggKyBpKSAlIG47XG4gICAgICAgICAgICBjb25zdCBvcHRpb24gPSBvcHRpb25zW2luZGV4XTtcbiAgICAgICAgICAgIGlmICghb3B0aW9uLmRpc2FibGVkICYmIG9wdGlvbi5sYWJlbC50b0xvY2FsZUxvd2VyQ2FzZSgpLnN1YnN0cigwLCBwYXR0ZXJuLmxlbmd0aCkgPT09IHBhdHRlcm4pIHtcbiAgICAgICAgICAgICAgdGhpcy5rZXlNYW5hZ2VyLnNldEFjdGl2ZUl0ZW0ob3B0aW9uKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZU1lbnVIZWlnaHQoKSB7XG4gICAgdGhpcy5uZ1pvbmUub25TdGFibGUuYXNPYnNlcnZhYmxlKCkucGlwZSh0YWtlKDEpKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuY2RrT3ZlcmxheSAmJiB0aGlzLmRyb3Bkb3duRWxlbWVudFJlZikge1xuICAgICAgICBjb25zdCB7IG92ZXJsYXlSZWYgfSA9IHRoaXMuY2RrT3ZlcmxheTtcbiAgICAgICAgY29uc3QgaGVpZ2h0ID0gdGhpcy5kcm9wZG93bkVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5vZmZzZXRIZWlnaHQ7XG4gICAgICAgIG92ZXJsYXlSZWYudXBkYXRlU2l6ZSh7XG4gICAgICAgICAgbWluSGVpZ2h0OiBoZWlnaHQgKyA0LFxuICAgICAgICB9KTtcbiAgICAgICAgb3ZlcmxheVJlZi51cGRhdGVQb3NpdGlvbigpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBjYWxjdWxhdGVFcnJvcnMoKSB7XG4gICAgaWYgKHRoaXMucmVxdWlyZWQpIHtcbiAgICAgIHRoaXMuaGFzRXJyb3JzID0gIXRvQm9vbGVhbih0aGlzLnNlbGVjdGlvbik7XG4gICAgfVxuICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG59XG4iLCJcbjxsYWJlbCBbbmdsRm9ybUxhYmVsXT1cImxhYmVsXCIgW2F0dHIuZm9yXT1cImlucHV0RWwuaWRcIiBbcmVxdWlyZWRdPVwicmVxdWlyZWRcIj48L2xhYmVsPlxuPGRpdiBjbGFzcz1cInNsZHMtZm9ybS1lbGVtZW50X19jb250cm9sXCI+XG4gIDxkaXYgY2xhc3M9XCJzbGRzLWNvbWJvYm94X2NvbnRhaW5lclwiIFtjbGFzcy5zbGRzLWhhcy1zZWxlY3Rpb25dPVwiaGFzTG9va3VwU2luZ2xlU2VsZWN0aW9uXCI+XG4gICAgPGRpdiBjbGFzcz1cInNsZHMtY29tYm9ib3ggc2xkcy1kcm9wZG93bi10cmlnZ2VyIHNsZHMtZHJvcGRvd24tdHJpZ2dlcl9jbGlja1wiIFthdHRyLmFyaWEtZXhwYW5kZWRdPVwib3BlblwiIGFyaWEtaGFzcG9wdXA9XCJsaXN0Ym94XCIgcm9sZT1cImNvbWJvYm94XCIgW2NsYXNzLnNsZHMtaXMtb3Blbl09XCJvcGVuXCIgW2F0dHIuYXJpYS1vd25zXT1cInVpZFwiPlxuICAgICAgPGRpdiBjbGFzcz1cInNsZHMtY29tYm9ib3hfX2Zvcm0tZWxlbWVudCBzbGRzLWlucHV0LWhhcy1pY29uXCIgcm9sZT1cIm5vbmVcIiBjZGtPdmVybGF5T3JpZ2luICNvdmVybGF5T3JpZ2luPVwiY2RrT3ZlcmxheU9yaWdpblwiIFtjbGFzcy5zbGRzLWlucHV0LWhhcy1pY29uX2dyb3VwLXJpZ2h0XT1cImxvYWRpbmdcIiBbY2xhc3Muc2xkcy1pbnB1dC1oYXMtaWNvbl9yaWdodF09XCIhbG9hZGluZ1wiPlxuICAgICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJpbnB1dFwiPjwvbmctY29udGVudD5cbiAgICAgICAgPGRpdiBjbGFzcz1cInNsZHMtaW5wdXRfX2ljb24tZ3JvdXAgc2xkcy1pbnB1dF9faWNvbi1ncm91cF9yaWdodFwiICpuZ0lmPVwibG9hZGluZzsgZWxzZSBpY29uUmlnaHRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwic2xkcy1zcGlubmVyIHNsZHMtc3Bpbm5lcl9icmFuZCBzbGRzLXNwaW5uZXJfeC1zbWFsbCBzbGRzLWlucHV0X19zcGlubmVyXCIgcm9sZT1cInN0YXR1c1wiPjxzcGFuIGNsYXNzPVwic2xkcy1hc3Npc3RpdmUtdGV4dFwiPnt7IGxvYWRpbmdMYWJlbCB9fTwvc3Bhbj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzbGRzLXNwaW5uZXJfX2RvdC1hXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2xkcy1zcGlubmVyX19kb3QtYlwiPjwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJpY29uUmlnaHRcIj48L25nLXRlbXBsYXRlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPG5nLXRlbXBsYXRlICNpY29uUmlnaHQ+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInNsZHMtYnV0dG9uIHNsZHMtYnV0dG9uX2ljb24gc2xkcy1pbnB1dF9faWNvbiBzbGRzLWlucHV0X19pY29uX3JpZ2h0XCIgKm5nSWY9XCJoYXNMb29rdXBTaW5nbGVTZWxlY3Rpb247IGVsc2UgaWNvblRwbFwiIHR5cGU9XCJidXR0b25cIiAoY2xpY2spPVwib25DbGVhclNlbGVjdGlvbigpXCIgW3RpdGxlXT1cInJlbW92ZVNlbGVjdGVkTGFiZWxcIj5cbiAgICAgICAgICAgIDxzdmcgY2xhc3M9XCJzbGRzLWJ1dHRvbl9faWNvblwiIG5nbEljb25OYW1lPVwidXRpbGl0eTpjbG9zZVwiPjwvc3ZnPjxzcGFuIGNsYXNzPVwic2xkcy1hc3Npc3RpdmUtdGV4dFwiPnt7IHJlbW92ZVNlbGVjdGVkTGFiZWwgfX08L3NwYW4+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICAgIDxuZy10ZW1wbGF0ZSAjaWNvblRwbD48c3BhbiBjbGFzcz1cInNsZHMtaWNvbl9jb250YWluZXIgc2xkcy1pbnB1dF9faWNvbiBzbGRzLWlucHV0X19pY29uX3JpZ2h0XCI+XG4gICAgICAgICAgICA8c3ZnIGNsYXNzPVwic2xkcy1pY29uIHNsZHMtaWNvbl94LXNtYWxsIHNsZHMtaWNvbi10ZXh0LWRlZmF1bHRcIiBbbmdsSWNvbk5hbWVdPVwiaW5wdXRJY29uUmlnaHQoKVwiPjwvc3ZnPjwvc3Bhbj48L25nLXRlbXBsYXRlPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC9kaXY+XG48bmctdGVtcGxhdGUgY2RrQ29ubmVjdGVkT3ZlcmxheSAjY2RrT3ZlcmxheT1cImNka0Nvbm5lY3RlZE92ZXJsYXlcIiBbY2RrQ29ubmVjdGVkT3ZlcmxheVBvc2l0aW9uc109XCJvdmVybGF5UG9zaXRpb25zXCIgW2Nka0Nvbm5lY3RlZE92ZXJsYXlPcmlnaW5dPVwib3ZlcmxheU9yaWdpblwiIFtjZGtDb25uZWN0ZWRPdmVybGF5TWluV2lkdGhdPVwib3ZlcmxheVdpZHRoXCIgW2Nka0Nvbm5lY3RlZE92ZXJsYXlPcGVuXT1cIm9wZW5cIiAobmdsT3ZlcmxheVNjcm9sbGVkT3V0c2lkZVZpZXcpPVwiY2xvc2UoKVwiIChhdHRhY2gpPVwib25BdHRhY2goKVwiIChkZXRhY2gpPVwib25EZXRhY2goKVwiPlxuICA8ZGl2IGNsYXNzPVwic2xkcy1kcm9wZG93biBzbGRzLWRyb3Bkb3duX2ZsdWlkXCIgI2Ryb3Bkb3duIFthdHRyLmlkXT1cInVpZFwiIHJvbGU9XCJsaXN0Ym94XCIgW25nQ2xhc3NdPVwiZHJvcGRvd25DbGFzcygpXCIgKG1vdXNlZG93bik9XCIkZXZlbnQucHJldmVudERlZmF1bHQoKVwiPlxuICAgIDx1bCBjbGFzcz1cInNsZHMtbGlzdGJveCBzbGRzLWxpc3Rib3hfdmVydGljYWxcIiByb2xlPVwicHJlc2VudGF0aW9uXCI+XG4gICAgICA8bGkgKm5nRm9yPVwibGV0IGQgb2YgZGF0YTsgdHJhY2tCeTogdHJhY2tCeU9wdGlvblwiIG5nbENvbWJvYm94T3B0aW9uIFt2YWx1ZV09XCJkLnZhbHVlXCIgW2xhYmVsXT1cImQubGFiZWxcIiBbZGlzYWJsZWRdPVwiZC5kaXNhYmxlZFwiIFtzZWxlY3RlZF09XCJpc1NlbGVjdGVkKGQudmFsdWUpXCIgKGFyaWFBY3RpdmVEZXNjZW5kYW50KT1cImlucHV0RWwuc2V0QXJpYUFjdGl2ZURlc2NlbmRhbnQoJGV2ZW50KVwiIChzZWxlY3RlZE9wdGlvbik9XCJvbk9wdGlvblNlbGVjdGlvbigkZXZlbnQpXCIgKGFjdGl2ZU9wdGlvbik9XCJrZXlNYW5hZ2VyLnNldEFjdGl2ZUl0ZW0oJGV2ZW50KVwiPjwvbGk+XG4gICAgICA8bGkgY2xhc3M9XCJzbGRzLWxpc3Rib3hfX2l0ZW1cIiAqbmdJZj1cImxvYWRpbmdNb3JlXCIgcm9sZT1cInByZXNlbnRhdGlvblwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwic2xkcy1hbGlnbl9hYnNvbHV0ZS1jZW50ZXIgc2xkcy1wLXRvcF9tZWRpdW1cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwic2xkcy1zcGlubmVyIHNsZHMtc3Bpbm5lcl94LXNtYWxsIHNsZHMtc3Bpbm5lcl9pbmxpbmVcIiByb2xlPVwic3RhdHVzXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2xkcy1hc3Npc3RpdmUtdGV4dFwiPnt7IGxvYWRpbmdMYWJlbCB9fTwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNsZHMtc3Bpbm5lcl9fZG90LWFcIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzbGRzLXNwaW5uZXJfX2RvdC1iXCI+PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9saT5cbiAgICAgIDxsaSBjbGFzcz1cInNsZHMtbGlzdGJveF9faXRlbVwiICpuZ0lmPVwiaGFzTm9NYXRjaGVzKClcIiByb2xlPVwicHJlc2VudGF0aW9uXCIgYXJpYS1saXZlPVwicG9saXRlXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJzbGRzLWFsaWduX2Fic29sdXRlLWNlbnRlclwiPjxzcGFuIHJvbGU9XCJzdGF0dXNcIj57eyBub09wdGlvbnNGb3VuZCB9fTwvc3Bhbj48L2Rpdj5cbiAgICAgIDwvbGk+XG4gICAgPC91bD5cbiAgPC9kaXY+XG48L25nLXRlbXBsYXRlPiJdfQ==
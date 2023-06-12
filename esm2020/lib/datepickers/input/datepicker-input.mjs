import { __decorate } from "tslib";
import { Component, Input, ChangeDetectionStrategy, forwardRef, Output, EventEmitter, ViewChild, Inject, Optional, LOCALE_ID } from '@angular/core';
import { NG_VALUE_ACCESSOR, NG_VALIDATORS } from '@angular/forms';
import { DOWN_ARROW, UP_ARROW } from '@angular/cdk/keycodes';
import { BehaviorSubject } from 'rxjs';
import { take } from 'rxjs/operators';
import { uniqueId } from '../../util/util';
import { InputBoolean, toBoolean } from '../../util/convert';
import { HostService } from '../../common/host/host.service';
import { NGL_DATEPICKER_CONFIG, NglDatepickerConfig } from '../config';
import { DEFAULT_DROPDOWN_POSITIONS } from '../../util/overlay-position';
import { parseDate, isDisabled } from '../util';
import * as i0 from "@angular/core";
import * as i1 from "../../common/host/host.service";
import * as i2 from "@angular/cdk/a11y";
import * as i3 from "../adapters/date-fns-adapter";
import * as i4 from "@angular/common";
import * as i5 from "../../icons/svg";
import * as i6 from "@angular/cdk/overlay";
import * as i7 from "../../common/clickoutside";
import * as i8 from "../../common/overlay/overlay-outside";
import * as i9 from "../../forms/label";
import * as i10 from "../datepicker";
import * as i11 from "../config";
const NGL_DATEPICKER_INPUT_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => NglDatepickerInput),
    multi: true
};
const NGL_DATEPICKER_INPUT_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => NglDatepickerInput),
    multi: true
};
export class NglDatepickerInput {
    constructor(defaultConfig, locale, element, renderer, cd, hostService, ngZone, focusTrapFactory, adapter) {
        this.element = element;
        this.renderer = renderer;
        this.cd = cd;
        this.hostService = hostService;
        this.ngZone = ngZone;
        this.focusTrapFactory = focusTrapFactory;
        this.adapter = adapter;
        /**
         * Emits when selected date changes.
         */
        this.valueChange = new EventEmitter();
        /**
         * Text for button to open calendar.
         */
        this.selectDateLabel = 'Select a date';
        this.dateDisabled = null;
        this.uid = uniqueId('datepicker-input');
        this._open = new BehaviorSubject(false);
        this._value = null;
        this.onChange = null;
        this.onTouched = () => { };
        this.validatorChange = () => { };
        this.renderer.addClass(this.element.nativeElement, 'slds-form-element');
        this.renderer.addClass(this.element.nativeElement, 'slds-dropdown-trigger');
        this.renderer.addClass(this.element.nativeElement, 'slds-dropdown-trigger_click');
        this.config = { ...new NglDatepickerConfig(locale), ...defaultConfig };
        this.format = this.config.format;
        this.delimiter = this.config.delimiter;
        this.setPositions(this.config.dropdownAlign);
        this.monthNames = this.config.monthNames;
        this.dayNamesShort = this.config.dayNamesShort;
        this.dayNamesLong = this.config.dayNamesLong;
        this.firstDayOfWeek = this.config.firstDayOfWeek;
        this.showToday = this.config.showToday;
        this.relativeYearFrom = this.config.relativeYearFrom;
        this.relativeYearTo = this.config.relativeYearTo;
        this.openOnInputClick = this.config.openOnInputClick;
        this.todayLabel = this.config.todayLabel;
        this.previousMonthLabel = this.config.previousMonthLabel;
        this.nextMonthLabel = this.config.nextMonthLabel;
        this.patternPlaceholder = this.config.patternPlaceholder;
    }
    /**
     * The date value.
     */
    set value(value) {
        if (value === this._value) {
            return;
        }
        this._value = value;
        if (this.value instanceof Date) {
            this.date = this.value;
            this.formatInputValue();
        }
        else {
            this.updateInputValue(value || '');
        }
    }
    get value() {
        return this._value;
    }
    set required(required) {
        this.isRequired = toBoolean(required);
    }
    set open(open) {
        this._open.next(open);
    }
    get open() {
        return this._open.value;
    }
    validate(c) {
        const value = c.value;
        if (!value) {
            return null;
        }
        if (!(this.value instanceof Date)) {
            return { 'nglDatepickerInput': { invalid: c.value } };
        }
        const date = parseDate(value);
        if (isDisabled(date, this.dateDisabled, parseDate(this.min), parseDate(this.max))) {
            return { 'nglDatepickerInput': { disabled: c.value } };
        }
        return null;
    }
    writeValue(value) {
        this.value = value;
        this.cd.markForCheck();
    }
    registerOnChange(fn) { this.onChange = fn; }
    registerOnTouched(fn) { this.onTouched = fn; }
    registerOnValidatorChange(fn) { this.validatorChange = fn; }
    setDisabledState(disabled) { this.disabled = disabled; }
    onBlur() {
        if (this.value instanceof Date) {
            this.updateInputValue();
        }
        this.onTouched();
    }
    ngOnInit() {
        this._open.subscribe(() => {
            this.setHostClass();
            this.cd.markForCheck();
        });
    }
    ngOnChanges(changes) {
        if (changes.format || changes.delimiter) {
            this.setPattern();
            if (this.value instanceof Date) {
                this.updateInputValue();
            }
        }
        if (changes.dropdownAlign) {
            this.setPositions(this.dropdownAlign);
        }
        if (changes.min || changes.max) {
            this.validatorChange();
        }
        if ((changes.patternPlaceholder || changes.format || changes.delimiter) && this.patternPlaceholder) {
            this.inputEl.setPlaceholder(this.getPattern().toLocaleUpperCase());
        }
        if (changes.disabled) {
            this.inputEl.setDisabled(this.disabled);
        }
    }
    ngOnDestroy() {
        this.closeCalendar(false);
    }
    onKeyboardInput(evt) {
        const keyCode = evt.keyCode;
        if (!this.open && (keyCode === DOWN_ARROW || keyCode === UP_ARROW)) {
            this.openCalendar();
        }
    }
    onInputChange() {
        const value = this.inputEl.element.nativeElement.value;
        const date = this.dateParse(value);
        this.emitSelection(date || value);
    }
    openCalendar() {
        this.open = true;
    }
    onAttach() {
        this.focusTrap = this.focusTrapFactory.create(this.cdkOverlay.overlayRef.overlayElement);
    }
    onDetach() {
        if (this.open) {
            this.closeCalendar();
        }
    }
    closeCalendar(focusInput = true) {
        this.open = false;
        if (this.focusTrap) {
            this.focusTrap.destroy();
            this.focusTrap = null;
        }
        if (focusInput) {
            this.inputEl.element.nativeElement.focus();
        }
    }
    onTriggerClick(origin) {
        if (origin === 'input' && !this.openOnInputClick) {
            return;
        }
        if (!this.open) {
            this.openCalendar();
        }
        else {
            this.closeCalendar(false);
        }
    }
    pickerSelection(date) {
        this.emitSelection(date);
        this.closeCalendar();
    }
    updateDatepickerSize(width, height) {
        this.ngZone.onStable.asObservable().pipe(take(1)).subscribe(() => {
            const { overlayRef } = this.cdkOverlay;
            overlayRef.updateSize({
                minWidth: width,
                minHeight: height + 4,
            });
            overlayRef.updatePosition();
        });
    }
    setPositions(align) {
        this.overlayPositions = [...DEFAULT_DROPDOWN_POSITIONS[align]];
    }
    formatInputValue() {
        const inputValue = this.inputEl.element.nativeElement.value;
        if (!inputValue) {
            this.updateInputValue();
        }
        else {
            const date = this.value;
            const dateNow = this.dateParse(inputValue);
            if (!dateNow || dateNow.getFullYear() !== date.getFullYear() || dateNow.getMonth() !== date.getMonth() || dateNow.getDate() !== date.getDate()) {
                this.updateInputValue();
            }
        }
    }
    updateInputValue(value = this.dateFormat(this.value)) {
        this.renderer.setProperty(this.inputEl.element.nativeElement, 'value', value || '');
    }
    dateParse(value) {
        return this.adapter.parse(value, this.getPattern());
    }
    dateFormat(date) {
        return this.adapter.format(date, this.getPattern());
    }
    getPattern() {
        if (!this.pattern) {
            this.setPattern();
        }
        return this.pattern;
    }
    setPattern() {
        this.pattern = this.adapter.pattern(this.format || this.config.format, this.delimiter || this.config.delimiter);
    }
    emitSelection(value) {
        this.valueChange.emit(value);
        if (this.onChange) {
            this.value = value;
            this.onChange(value);
        }
    }
    setHostClass() {
        this.hostService.updateClass(this.element, {
            [`slds-is-open`]: this.open,
        });
    }
}
NglDatepickerInput.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglDatepickerInput, deps: [{ token: NGL_DATEPICKER_CONFIG, optional: true }, { token: LOCALE_ID }, { token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i0.ChangeDetectorRef }, { token: i1.HostService }, { token: i0.NgZone }, { token: i2.FocusTrapFactory }, { token: i3.NglDateAdapter }], target: i0.ɵɵFactoryTarget.Component });
NglDatepickerInput.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: NglDatepickerInput, selector: "ngl-datepicker-input", inputs: { label: "label", format: "format", delimiter: "delimiter", disabled: "disabled", dropdownAlign: "dropdownAlign", value: "value", openOnInputClick: "openOnInputClick", min: "min", max: "max", required: "required", selectDateLabel: "selectDateLabel", patternPlaceholder: "patternPlaceholder", monthNames: "monthNames", dayNamesShort: "dayNamesShort", dayNamesLong: "dayNamesLong", firstDayOfWeek: "firstDayOfWeek", showToday: "showToday", dateDisabled: "dateDisabled", relativeYearFrom: "relativeYearFrom", relativeYearTo: "relativeYearTo", todayLabel: "todayLabel", previousMonthLabel: "previousMonthLabel", nextMonthLabel: "nextMonthLabel" }, outputs: { valueChange: "valueChange" }, providers: [NGL_DATEPICKER_INPUT_VALUE_ACCESSOR, NGL_DATEPICKER_INPUT_VALIDATOR, HostService], viewQueries: [{ propertyName: "cdkOverlay", first: true, predicate: ["cdkOverlay"], descendants: true }], usesOnChanges: true, ngImport: i0, template: "\n<label *ngIf=\"label\" [nglFormLabel]=\"label\" [attr.for]=\"uid\" [required]=\"isRequired\"></label>\n<div class=\"slds-form-element__control slds-input-has-icon slds-input-has-icon_right\" #formEl cdkOverlayOrigin #overlayOrigin=\"cdkOverlayOrigin\">\n  <ng-content></ng-content>\n  <button class=\"slds-button slds-button_icon slds-input__icon slds-input__icon_right\" type=\"button\" [title]=\"selectDateLabel\" [disabled]=\"disabled\" (click)=\"onTriggerClick('button')\">\n    <svg class=\"slds-button__icon\" nglIconName=\"utility:event\"></svg><span class=\"slds-assistive-text\">{{ selectDateLabel }}</span>\n  </button>\n</div>\n<ng-template cdkConnectedOverlay #cdkOverlay=\"cdkConnectedOverlay\" [cdkConnectedOverlayPositions]=\"overlayPositions\" [cdkConnectedOverlayOrigin]=\"overlayOrigin\" [cdkConnectedOverlayOpen]=\"open\" (nglOverlayScrolledOutsideView)=\"closeCalendar(false)\" (attach)=\"onAttach()\" (detach)=\"onDetach()\">\n  <ngl-datepicker class=\"slds-dropdown\" [attr.aria-hidden]=\"!open\" [date]=\"date\" [monthNames]=\"monthNames\" [dayNamesShort]=\"dayNamesShort\" [dayNamesLong]=\"dayNamesLong\" [firstDayOfWeek]=\"firstDayOfWeek\" [showToday]=\"showToday\" [min]=\"min\" [max]=\"max\" [relativeYearFrom]=\"relativeYearFrom\" [relativeYearTo]=\"relativeYearTo\" [todayLabel]=\"todayLabel\" [previousMonthLabel]=\"previousMonthLabel\" [nextMonthLabel]=\"nextMonthLabel\" [dateDisabled]=\"dateDisabled\" (dateChange)=\"pickerSelection($event)\" (nglClickOutside)=\"closeCalendar(false)\" [nglClickOutsideIgnore]=\"formEl\" (updateSize)=\"updateDatepickerSize($event.width, $event.height)\"></ngl-datepicker>\n</ng-template>", dependencies: [{ kind: "directive", type: i4.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i5.NglIconSvg, selector: "svg[nglIconName]", inputs: ["nglIconName", "xPos"] }, { kind: "directive", type: i6.CdkConnectedOverlay, selector: "[cdk-connected-overlay], [connected-overlay], [cdkConnectedOverlay]", inputs: ["cdkConnectedOverlayOrigin", "cdkConnectedOverlayPositions", "cdkConnectedOverlayPositionStrategy", "cdkConnectedOverlayOffsetX", "cdkConnectedOverlayOffsetY", "cdkConnectedOverlayWidth", "cdkConnectedOverlayHeight", "cdkConnectedOverlayMinWidth", "cdkConnectedOverlayMinHeight", "cdkConnectedOverlayBackdropClass", "cdkConnectedOverlayPanelClass", "cdkConnectedOverlayViewportMargin", "cdkConnectedOverlayScrollStrategy", "cdkConnectedOverlayOpen", "cdkConnectedOverlayDisableClose", "cdkConnectedOverlayTransformOriginOn", "cdkConnectedOverlayHasBackdrop", "cdkConnectedOverlayLockPosition", "cdkConnectedOverlayFlexibleDimensions", "cdkConnectedOverlayGrowAfterOpen", "cdkConnectedOverlayPush"], outputs: ["backdropClick", "positionChange", "attach", "detach", "overlayKeydown", "overlayOutsideClick"], exportAs: ["cdkConnectedOverlay"] }, { kind: "directive", type: i6.CdkOverlayOrigin, selector: "[cdk-overlay-origin], [overlay-origin], [cdkOverlayOrigin]", exportAs: ["cdkOverlayOrigin"] }, { kind: "directive", type: i7.NglClickOutsideDirective, selector: "[nglClickOutside]", inputs: ["nglClickOutsideIgnore"], outputs: ["nglClickOutside"] }, { kind: "directive", type: i8.NglOverlaynglOverlayScrolledOutsideViewDirective, selector: "[nglOverlayScrolledOutsideView]", outputs: ["nglOverlayScrolledOutsideView"] }, { kind: "component", type: i9.NglFormLabel, selector: "label[nglFormLabel]", inputs: ["nglFormLabel", "nglFormLabelClass", "required"] }, { kind: "component", type: i10.NglDatepicker, selector: "ngl-datepicker", inputs: ["monthNames", "dayNamesShort", "dayNamesLong", "dateDisabled", "date", "showToday", "firstDayOfWeek", "relativeYearFrom", "relativeYearTo", "min", "max", "todayLabel", "previousMonthLabel", "nextMonthLabel"], outputs: ["updateSize", "dateChange"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
__decorate([
    InputBoolean()
], NglDatepickerInput.prototype, "disabled", void 0);
__decorate([
    InputBoolean()
], NglDatepickerInput.prototype, "openOnInputClick", void 0);
__decorate([
    InputBoolean()
], NglDatepickerInput.prototype, "patternPlaceholder", void 0);
__decorate([
    InputBoolean()
], NglDatepickerInput.prototype, "showToday", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglDatepickerInput, decorators: [{
            type: Component,
            args: [{ selector: 'ngl-datepicker-input', changeDetection: ChangeDetectionStrategy.OnPush, providers: [NGL_DATEPICKER_INPUT_VALUE_ACCESSOR, NGL_DATEPICKER_INPUT_VALIDATOR, HostService], template: "\n<label *ngIf=\"label\" [nglFormLabel]=\"label\" [attr.for]=\"uid\" [required]=\"isRequired\"></label>\n<div class=\"slds-form-element__control slds-input-has-icon slds-input-has-icon_right\" #formEl cdkOverlayOrigin #overlayOrigin=\"cdkOverlayOrigin\">\n  <ng-content></ng-content>\n  <button class=\"slds-button slds-button_icon slds-input__icon slds-input__icon_right\" type=\"button\" [title]=\"selectDateLabel\" [disabled]=\"disabled\" (click)=\"onTriggerClick('button')\">\n    <svg class=\"slds-button__icon\" nglIconName=\"utility:event\"></svg><span class=\"slds-assistive-text\">{{ selectDateLabel }}</span>\n  </button>\n</div>\n<ng-template cdkConnectedOverlay #cdkOverlay=\"cdkConnectedOverlay\" [cdkConnectedOverlayPositions]=\"overlayPositions\" [cdkConnectedOverlayOrigin]=\"overlayOrigin\" [cdkConnectedOverlayOpen]=\"open\" (nglOverlayScrolledOutsideView)=\"closeCalendar(false)\" (attach)=\"onAttach()\" (detach)=\"onDetach()\">\n  <ngl-datepicker class=\"slds-dropdown\" [attr.aria-hidden]=\"!open\" [date]=\"date\" [monthNames]=\"monthNames\" [dayNamesShort]=\"dayNamesShort\" [dayNamesLong]=\"dayNamesLong\" [firstDayOfWeek]=\"firstDayOfWeek\" [showToday]=\"showToday\" [min]=\"min\" [max]=\"max\" [relativeYearFrom]=\"relativeYearFrom\" [relativeYearTo]=\"relativeYearTo\" [todayLabel]=\"todayLabel\" [previousMonthLabel]=\"previousMonthLabel\" [nextMonthLabel]=\"nextMonthLabel\" [dateDisabled]=\"dateDisabled\" (dateChange)=\"pickerSelection($event)\" (nglClickOutside)=\"closeCalendar(false)\" [nglClickOutsideIgnore]=\"formEl\" (updateSize)=\"updateDatepickerSize($event.width, $event.height)\"></ngl-datepicker>\n</ng-template>" }]
        }], ctorParameters: function () { return [{ type: i11.NglDatepickerConfig, decorators: [{
                    type: Optional
                }, {
                    type: Inject,
                    args: [NGL_DATEPICKER_CONFIG]
                }] }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [LOCALE_ID]
                }] }, { type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i0.ChangeDetectorRef }, { type: i1.HostService }, { type: i0.NgZone }, { type: i2.FocusTrapFactory }, { type: i3.NglDateAdapter }]; }, propDecorators: { label: [{
                type: Input
            }], format: [{
                type: Input
            }], delimiter: [{
                type: Input
            }], disabled: [{
                type: Input
            }], dropdownAlign: [{
                type: Input
            }], value: [{
                type: Input
            }], openOnInputClick: [{
                type: Input
            }], valueChange: [{
                type: Output
            }], cdkOverlay: [{
                type: ViewChild,
                args: ['cdkOverlay']
            }], min: [{
                type: Input
            }], max: [{
                type: Input
            }], required: [{
                type: Input
            }], selectDateLabel: [{
                type: Input
            }], patternPlaceholder: [{
                type: Input
            }], monthNames: [{
                type: Input
            }], dayNamesShort: [{
                type: Input
            }], dayNamesLong: [{
                type: Input
            }], firstDayOfWeek: [{
                type: Input
            }], showToday: [{
                type: Input
            }], dateDisabled: [{
                type: Input
            }], relativeYearFrom: [{
                type: Input
            }], relativeYearTo: [{
                type: Input
            }], todayLabel: [{
                type: Input
            }], previousMonthLabel: [{
                type: Input
            }], nextMonthLabel: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci1pbnB1dC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nLWxpZ2h0bmluZy9zcmMvbGliL2RhdGVwaWNrZXJzL2lucHV0L2RhdGVwaWNrZXItaW5wdXQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1saWdodG5pbmcvc3JjL2xpYi9kYXRlcGlja2Vycy9pbnB1dC9kYXRlcGlja2VyLWlucHV0Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLHVCQUF1QixFQUFzQyxVQUFVLEVBQ3pGLE1BQU0sRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFVLE1BQU0sRUFBdUMsUUFBUSxFQUFVLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNsSixPQUFPLEVBQUUsaUJBQWlCLEVBQXdCLGFBQWEsRUFBZ0QsTUFBTSxnQkFBZ0IsQ0FBQztBQUd0SSxPQUFPLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzdELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdkMsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3RDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQzdELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUU3RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDdkUsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDekUsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxTQUFTLENBQUM7Ozs7Ozs7Ozs7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RWxlbWVudFJlZiwgUmVuZGVyZXIyLCBUZW1wbGF0ZVJlZiwgZm9yd2FyZFJlZiwgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgICAgICBPdXRwdXQsIEV2ZW50RW1pdHRlciwgVmlld0NoaWxkLCBPbkluaXQsIEluamVjdCwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzLCBPbkRlc3Ryb3ksIE9wdGlvbmFsLCBOZ1pvbmUsIExPQ0FMRV9JRCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTkdfVkFMVUVfQUNDRVNTT1IsIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxJREFUT1JTLCBWYWxpZGF0b3IsIEFic3RyYWN0Q29udHJvbCwgVmFsaWRhdGlvbkVycm9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IENka0Nvbm5lY3RlZE92ZXJsYXksIENvbm5lY3Rpb25Qb3NpdGlvblBhaXIgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XG5pbXBvcnQgeyBGb2N1c1RyYXBGYWN0b3J5LCBGb2N1c1RyYXAgfSBmcm9tICdAYW5ndWxhci9jZGsvYTExeSc7XG5pbXBvcnQgeyBET1dOX0FSUk9XLCBVUF9BUlJPVyB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9rZXljb2Rlcyc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2UgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyB1bmlxdWVJZCB9IGZyb20gJy4uLy4uL3V0aWwvdXRpbCc7XG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4sIHRvQm9vbGVhbiB9IGZyb20gJy4uLy4uL3V0aWwvY29udmVydCc7XG5pbXBvcnQgeyBIb3N0U2VydmljZSB9IGZyb20gJy4uLy4uL2NvbW1vbi9ob3N0L2hvc3Quc2VydmljZSc7XG5pbXBvcnQgeyBOZ2xEYXRlQWRhcHRlciB9IGZyb20gJy4uL2FkYXB0ZXJzL2RhdGUtZm5zLWFkYXB0ZXInO1xuaW1wb3J0IHsgTkdMX0RBVEVQSUNLRVJfQ09ORklHLCBOZ2xEYXRlcGlja2VyQ29uZmlnIH0gZnJvbSAnLi4vY29uZmlnJztcbmltcG9ydCB7IERFRkFVTFRfRFJPUERPV05fUE9TSVRJT05TIH0gZnJvbSAnLi4vLi4vdXRpbC9vdmVybGF5LXBvc2l0aW9uJztcbmltcG9ydCB7IHBhcnNlRGF0ZSwgaXNEaXNhYmxlZCB9IGZyb20gJy4uL3V0aWwnO1xuaW1wb3J0IHsgSURhdGVwaWNrZXJJbnB1dCB9IGZyb20gJy4vZGF0ZXBpY2tlci1pbnB1dC5pbnRlcmZhY2UnO1xuXG5jb25zdCBOR0xfREFURVBJQ0tFUl9JTlBVVF9WQUxVRV9BQ0NFU1NPUiA9IHtcbiAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IE5nbERhdGVwaWNrZXJJbnB1dCksXG4gIG11bHRpOiB0cnVlXG59O1xuXG5jb25zdCBOR0xfREFURVBJQ0tFUl9JTlBVVF9WQUxJREFUT1IgPSB7XG4gIHByb3ZpZGU6IE5HX1ZBTElEQVRPUlMsXG4gIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IE5nbERhdGVwaWNrZXJJbnB1dCksXG4gIG11bHRpOiB0cnVlXG59O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZ2wtZGF0ZXBpY2tlci1pbnB1dCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9kYXRlcGlja2VyLWlucHV0Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgcHJvdmlkZXJzOiBbTkdMX0RBVEVQSUNLRVJfSU5QVVRfVkFMVUVfQUNDRVNTT1IsIE5HTF9EQVRFUElDS0VSX0lOUFVUX1ZBTElEQVRPUiwgSG9zdFNlcnZpY2VdLFxufSlcbmV4cG9ydCBjbGFzcyBOZ2xEYXRlcGlja2VySW5wdXQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgVmFsaWRhdG9yLCBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcblxuICAvKipcbiAgICogTGFiZWwgdGhhdCBhcHBlYXJzIGFib3ZlIHRoZSBpbnB1dC5cbiAgICovXG4gIEBJbnB1dCgpIGxhYmVsOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIC8qKlxuICAgKiBQcmUtZGVmaW5lZCBmb3JtYXQgdG8gdXNlLlxuICAgKi9cbiAgQElucHV0KCkgZm9ybWF0OiAnYmlnLWVuZGlhbicgfCAnbGl0dGxlLWVuZGlhbicgfCAnbWlkZGxlLWVuZGlhbic7XG5cbiAgLyoqXG4gICAqIERlbGltaXRlciB0byB1c2Ugb24gcHJlLWRlZmluZWQgZm9ybWF0cy5cbiAgICovXG4gIEBJbnB1dCgpIGRlbGltaXRlcjtcblxuICAvKipcbiAgICogRGlzYWJsZSBpbnB1dCBhbmQgY2FsZW5kYXIuXG4gICAqL1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgZGlzYWJsZWQ6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIEFsaWducyB0aGUgcmlnaHQgb3IgbGVmdCBzaWRlIG9mIHRoZSBkcm9wZG93biBtZW51IHdpdGggdGhlIHJlc3BlY3RpdmUgc2lkZSBvZiB0aGUgaW5wdXQuXG4gICAqL1xuICBASW5wdXQoKSBkcm9wZG93bkFsaWduOiAnbGVmdCcgfCAncmlnaHQnO1xuXG4gIC8qKlxuICAgKiBUaGUgZGF0ZSB2YWx1ZS5cbiAgICovXG4gIEBJbnB1dCgpIHNldCB2YWx1ZSh2YWx1ZTogRGF0ZSB8IHN0cmluZyB8IG51bGwpIHtcbiAgICBpZiAodmFsdWUgPT09IHRoaXMuX3ZhbHVlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XG5cbiAgICBpZiAodGhpcy52YWx1ZSBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgIHRoaXMuZGF0ZSA9IHRoaXMudmFsdWU7XG4gICAgICB0aGlzLmZvcm1hdElucHV0VmFsdWUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy51cGRhdGVJbnB1dFZhbHVlKDxzdHJpbmc+dmFsdWUgfHwgJycpO1xuICAgIH1cbiAgfVxuICBnZXQgdmFsdWUoKTogRGF0ZSB8IHN0cmluZyB8IG51bGwge1xuICAgIHJldHVybiB0aGlzLl92YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBXaGV0aGVyIHRvIG9wZW4gdGhlIGRhdGVwaWNrZXIgd2hlbiBhIG1vdXNlIHVzZXIgY2xpY2tzIG9uIHRoZSBpbnB1dC5cbiAgICovXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBvcGVuT25JbnB1dENsaWNrOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBFbWl0cyB3aGVuIHNlbGVjdGVkIGRhdGUgY2hhbmdlcy5cbiAgICovXG4gIEBPdXRwdXQoKSB2YWx1ZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8RGF0ZSB8IHN0cmluZyB8IG51bGw+KCk7XG5cbiAgaW5wdXRFbDogSURhdGVwaWNrZXJJbnB1dDtcblxuICAvLyBAQ29udGVudENoaWxkKCdpbnB1dEVsJywgeyBzdGF0aWM6IGZhbHNlIH0pIGlucHV0RWw6IFNxdWFyZUNvbmZpZztcblxuICBAVmlld0NoaWxkKCdjZGtPdmVybGF5JykgY2RrT3ZlcmxheTogQ2RrQ29ubmVjdGVkT3ZlcmxheTtcblxuICAvKipcbiAgICogVGhlIG1pbmltdW0gdmFsaWQgZGF0ZS5cbiAgICovXG4gIEBJbnB1dCgpIG1pbjogRGF0ZTtcblxuICAvKipcbiAgICogVGhlIG1heGltdW0gdmFsaWQgZGF0ZS5cbiAgICovXG4gIEBJbnB1dCgpIG1heDogRGF0ZTtcblxuICBASW5wdXQoKSBzZXQgcmVxdWlyZWQocmVxdWlyZWQ6IGFueSkge1xuICAgIHRoaXMuaXNSZXF1aXJlZCA9IHRvQm9vbGVhbihyZXF1aXJlZCk7XG4gIH1cbiAgaXNSZXF1aXJlZDogQm9vbGVhbjtcbiAgLyoqXG4gICAqIFRleHQgZm9yIGJ1dHRvbiB0byBvcGVuIGNhbGVuZGFyLlxuICAgKi9cbiAgQElucHV0KCkgc2VsZWN0RGF0ZUxhYmVsID0gJ1NlbGVjdCBhIGRhdGUnO1xuXG4gIC8qKlxuICAgKiBXaGV0aGVyIHRvIHVzZSB0aGUgYWNjZXB0ZWQgcGF0dGVybiBhcyBwbGFjZWhvbGRlci5cbiAgICovXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBwYXR0ZXJuUGxhY2Vob2xkZXI6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIERhdGVwaWNrZXIgaW5wdXRzXG4gICAqL1xuICBASW5wdXQoKSBtb250aE5hbWVzOiBSZWFkb25seUFycmF5PHN0cmluZz47XG4gIEBJbnB1dCgpIGRheU5hbWVzU2hvcnQ6IFJlYWRvbmx5QXJyYXk8c3RyaW5nPjtcbiAgQElucHV0KCkgZGF5TmFtZXNMb25nOiBSZWFkb25seUFycmF5PHN0cmluZz47XG4gIEBJbnB1dCgpIGZpcnN0RGF5T2ZXZWVrOiBudW1iZXI7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBzaG93VG9kYXk6IGJvb2xlYW47XG4gIEBJbnB1dCgpIGRhdGVEaXNhYmxlZDogKGRhdGU6IERhdGUpID0+IGJvb2xlYW4gfCBudWxsID0gbnVsbDtcbiAgQElucHV0KCkgcmVsYXRpdmVZZWFyRnJvbTogbnVtYmVyO1xuICBASW5wdXQoKSByZWxhdGl2ZVllYXJUbzogbnVtYmVyO1xuICBASW5wdXQoKSB0b2RheUxhYmVsOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHByZXZpb3VzTW9udGhMYWJlbDogc3RyaW5nO1xuICBASW5wdXQoKSBuZXh0TW9udGhMYWJlbDogc3RyaW5nO1xuXG4gIGRhdGU6IERhdGU7XG5cbiAgdWlkID0gdW5pcXVlSWQoJ2RhdGVwaWNrZXItaW5wdXQnKTtcblxuICBvdmVybGF5UG9zaXRpb25zOiBDb25uZWN0aW9uUG9zaXRpb25QYWlyW107XG5cbiAgc2V0IG9wZW4ob3BlbjogYm9vbGVhbikge1xuICAgIHRoaXMuX29wZW4ubmV4dChvcGVuKTtcbiAgfVxuICBnZXQgb3BlbigpIHtcbiAgICByZXR1cm4gdGhpcy5fb3Blbi52YWx1ZTtcbiAgfVxuXG4gIHByaXZhdGUgX29wZW4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KGZhbHNlKTtcblxuICBwcml2YXRlIF92YWx1ZTogRGF0ZSB8IHN0cmluZyB8IG51bGwgPSBudWxsO1xuXG4gIHByaXZhdGUgcGF0dGVybjogc3RyaW5nO1xuXG4gIHByaXZhdGUgY29uZmlnOiBOZ2xEYXRlcGlja2VyQ29uZmlnO1xuXG4gIHByaXZhdGUgZm9jdXNUcmFwOiBGb2N1c1RyYXA7XG5cbiAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgQEluamVjdChOR0xfREFURVBJQ0tFUl9DT05GSUcpIGRlZmF1bHRDb25maWc6IE5nbERhdGVwaWNrZXJDb25maWcsXG4gICAgICAgICAgICAgIEBJbmplY3QoTE9DQUxFX0lEKSBsb2NhbGU6IHN0cmluZyxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50UmVmLFxuICAgICAgICAgICAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgICAgICAgICAgIHByaXZhdGUgY2Q6IENoYW5nZURldGVjdG9yUmVmLFxuICAgICAgICAgICAgICBwcml2YXRlIGhvc3RTZXJ2aWNlOiBIb3N0U2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBmb2N1c1RyYXBGYWN0b3J5OiBGb2N1c1RyYXBGYWN0b3J5LFxuICAgICAgICAgICAgICBwcml2YXRlIGFkYXB0ZXI6IE5nbERhdGVBZGFwdGVyKSB7XG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ3NsZHMtZm9ybS1lbGVtZW50Jyk7XG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ3NsZHMtZHJvcGRvd24tdHJpZ2dlcicpO1xuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICdzbGRzLWRyb3Bkb3duLXRyaWdnZXJfY2xpY2snKTtcblxuICAgIHRoaXMuY29uZmlnID0geyAuLi5uZXcgTmdsRGF0ZXBpY2tlckNvbmZpZyhsb2NhbGUpLCAuLi5kZWZhdWx0Q29uZmlnIH07XG4gICAgdGhpcy5mb3JtYXQgPSB0aGlzLmNvbmZpZy5mb3JtYXQ7XG4gICAgdGhpcy5kZWxpbWl0ZXIgPSB0aGlzLmNvbmZpZy5kZWxpbWl0ZXI7XG4gICAgdGhpcy5zZXRQb3NpdGlvbnModGhpcy5jb25maWcuZHJvcGRvd25BbGlnbik7XG4gICAgdGhpcy5tb250aE5hbWVzID0gdGhpcy5jb25maWcubW9udGhOYW1lcztcbiAgICB0aGlzLmRheU5hbWVzU2hvcnQgPSB0aGlzLmNvbmZpZy5kYXlOYW1lc1Nob3J0O1xuICAgIHRoaXMuZGF5TmFtZXNMb25nID0gdGhpcy5jb25maWcuZGF5TmFtZXNMb25nO1xuICAgIHRoaXMuZmlyc3REYXlPZldlZWsgPSB0aGlzLmNvbmZpZy5maXJzdERheU9mV2VlaztcbiAgICB0aGlzLnNob3dUb2RheSA9IHRoaXMuY29uZmlnLnNob3dUb2RheTtcbiAgICB0aGlzLnJlbGF0aXZlWWVhckZyb20gPSB0aGlzLmNvbmZpZy5yZWxhdGl2ZVllYXJGcm9tO1xuICAgIHRoaXMucmVsYXRpdmVZZWFyVG8gPSB0aGlzLmNvbmZpZy5yZWxhdGl2ZVllYXJUbztcbiAgICB0aGlzLm9wZW5PbklucHV0Q2xpY2sgPSB0aGlzLmNvbmZpZy5vcGVuT25JbnB1dENsaWNrO1xuICAgIHRoaXMudG9kYXlMYWJlbCA9IHRoaXMuY29uZmlnLnRvZGF5TGFiZWw7XG4gICAgdGhpcy5wcmV2aW91c01vbnRoTGFiZWwgPSB0aGlzLmNvbmZpZy5wcmV2aW91c01vbnRoTGFiZWw7XG4gICAgdGhpcy5uZXh0TW9udGhMYWJlbCA9IHRoaXMuY29uZmlnLm5leHRNb250aExhYmVsO1xuICAgIHRoaXMucGF0dGVyblBsYWNlaG9sZGVyID0gdGhpcy5jb25maWcucGF0dGVyblBsYWNlaG9sZGVyO1xuICB9XG5cbiAgb25DaGFuZ2U6IEZ1bmN0aW9uIHwgbnVsbCA9IG51bGw7XG5cbiAgb25Ub3VjaGVkID0gKCkgPT4ge307XG5cbiAgdmFsaWRhdG9yQ2hhbmdlID0gKCkgPT4ge307XG5cbiAgdmFsaWRhdGUoYzogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwge1xuICAgIGNvbnN0IHZhbHVlID0gYy52YWx1ZTtcblxuICAgIGlmICghdmFsdWUpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGlmICghKHRoaXMudmFsdWUgaW5zdGFuY2VvZiBEYXRlKSkge1xuICAgICAgcmV0dXJuIHsgJ25nbERhdGVwaWNrZXJJbnB1dCc6IHsgaW52YWxpZDogYy52YWx1ZSB9IH07XG4gICAgfVxuXG4gICAgY29uc3QgZGF0ZSA9IHBhcnNlRGF0ZSh2YWx1ZSk7XG4gICAgaWYgKGlzRGlzYWJsZWQoZGF0ZSwgdGhpcy5kYXRlRGlzYWJsZWQsIHBhcnNlRGF0ZSh0aGlzLm1pbiksIHBhcnNlRGF0ZSh0aGlzLm1heCkpKSB7XG4gICAgICByZXR1cm4geyAnbmdsRGF0ZXBpY2tlcklucHV0JzogeyBkaXNhYmxlZDogYy52YWx1ZSB9IH07XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB3cml0ZVZhbHVlKHZhbHVlOiBEYXRlKSB7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAodmFsdWU6IGFueSkgPT4gYW55KTogdm9pZCB7IHRoaXMub25DaGFuZ2UgPSBmbjsgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiBhbnkpOiB2b2lkIHsgdGhpcy5vblRvdWNoZWQgPSBmbjsgfVxuXG4gIHJlZ2lzdGVyT25WYWxpZGF0b3JDaGFuZ2UoZm46ICgpID0+IHZvaWQpOiB2b2lkIHsgdGhpcy52YWxpZGF0b3JDaGFuZ2UgPSBmbjsgfVxuXG4gIHNldERpc2FibGVkU3RhdGUoZGlzYWJsZWQ6IGJvb2xlYW4pIHsgdGhpcy5kaXNhYmxlZCA9IGRpc2FibGVkOyB9XG5cbiAgb25CbHVyKCkge1xuICAgIGlmICh0aGlzLnZhbHVlIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgdGhpcy51cGRhdGVJbnB1dFZhbHVlKCk7XG4gICAgfVxuICAgIHRoaXMub25Ub3VjaGVkKCk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLl9vcGVuLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLnNldEhvc3RDbGFzcygpO1xuICAgICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcbiAgICB9KTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICBpZiAoY2hhbmdlcy5mb3JtYXQgfHwgY2hhbmdlcy5kZWxpbWl0ZXIpIHtcbiAgICAgIHRoaXMuc2V0UGF0dGVybigpO1xuICAgICAgaWYgKHRoaXMudmFsdWUgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgIHRoaXMudXBkYXRlSW5wdXRWYWx1ZSgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChjaGFuZ2VzLmRyb3Bkb3duQWxpZ24pIHtcbiAgICAgIHRoaXMuc2V0UG9zaXRpb25zKHRoaXMuZHJvcGRvd25BbGlnbik7XG4gICAgfVxuXG4gICAgaWYgKGNoYW5nZXMubWluIHx8IGNoYW5nZXMubWF4KSB7XG4gICAgICB0aGlzLnZhbGlkYXRvckNoYW5nZSgpO1xuICAgIH1cblxuICAgIGlmICgoY2hhbmdlcy5wYXR0ZXJuUGxhY2Vob2xkZXIgfHwgY2hhbmdlcy5mb3JtYXQgfHwgY2hhbmdlcy5kZWxpbWl0ZXIpICYmIHRoaXMucGF0dGVyblBsYWNlaG9sZGVyKSB7XG4gICAgICB0aGlzLmlucHV0RWwuc2V0UGxhY2Vob2xkZXIodGhpcy5nZXRQYXR0ZXJuKCkudG9Mb2NhbGVVcHBlckNhc2UoKSk7XG4gICAgfVxuXG4gICAgaWYgKGNoYW5nZXMuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuaW5wdXRFbC5zZXREaXNhYmxlZCh0aGlzLmRpc2FibGVkKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLmNsb3NlQ2FsZW5kYXIoZmFsc2UpO1xuICB9XG5cbiAgb25LZXlib2FyZElucHV0KGV2dDogS2V5Ym9hcmRFdmVudCkge1xuICAgIGNvbnN0IGtleUNvZGUgPSBldnQua2V5Q29kZTtcblxuICAgIGlmICghdGhpcy5vcGVuICYmIChrZXlDb2RlID09PSBET1dOX0FSUk9XIHx8IGtleUNvZGUgPT09IFVQX0FSUk9XKSkge1xuICAgICAgdGhpcy5vcGVuQ2FsZW5kYXIoKTtcbiAgICB9XG4gIH1cblxuICBvbklucHV0Q2hhbmdlKCkge1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5pbnB1dEVsLmVsZW1lbnQubmF0aXZlRWxlbWVudC52YWx1ZTtcblxuICAgIGNvbnN0IGRhdGUgPSB0aGlzLmRhdGVQYXJzZSh2YWx1ZSk7XG4gICAgdGhpcy5lbWl0U2VsZWN0aW9uKGRhdGUgfHwgdmFsdWUpO1xuICB9XG5cbiAgb3BlbkNhbGVuZGFyKCkge1xuICAgIHRoaXMub3BlbiA9IHRydWU7XG4gIH1cblxuICBvbkF0dGFjaCgpIHtcbiAgICB0aGlzLmZvY3VzVHJhcCA9IHRoaXMuZm9jdXNUcmFwRmFjdG9yeS5jcmVhdGUodGhpcy5jZGtPdmVybGF5Lm92ZXJsYXlSZWYub3ZlcmxheUVsZW1lbnQpO1xuICB9XG5cbiAgb25EZXRhY2goKSB7XG4gICAgaWYgKHRoaXMub3Blbikge1xuICAgICAgdGhpcy5jbG9zZUNhbGVuZGFyKCk7XG4gICAgfVxuICB9XG5cbiAgY2xvc2VDYWxlbmRhcihmb2N1c0lucHV0ID0gdHJ1ZSkge1xuICAgIHRoaXMub3BlbiA9IGZhbHNlO1xuXG4gICAgaWYgKHRoaXMuZm9jdXNUcmFwKSB7XG4gICAgICB0aGlzLmZvY3VzVHJhcC5kZXN0cm95KCk7XG4gICAgICB0aGlzLmZvY3VzVHJhcCA9IG51bGw7XG4gICAgfVxuXG4gICAgaWYgKGZvY3VzSW5wdXQpIHtcbiAgICAgIHRoaXMuaW5wdXRFbC5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICB9XG4gIH1cblxuICBvblRyaWdnZXJDbGljayhvcmlnaW46ICdpbnB1dCcgfCAnYnV0dG9uJykge1xuICAgIGlmIChvcmlnaW4gPT09ICdpbnB1dCcgJiYgIXRoaXMub3Blbk9uSW5wdXRDbGljaykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5vcGVuKSB7XG4gICAgICB0aGlzLm9wZW5DYWxlbmRhcigpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNsb3NlQ2FsZW5kYXIoZmFsc2UpO1xuICAgIH1cbiAgfVxuXG4gIHBpY2tlclNlbGVjdGlvbihkYXRlOiBEYXRlKSB7XG4gICAgdGhpcy5lbWl0U2VsZWN0aW9uKGRhdGUpO1xuICAgIHRoaXMuY2xvc2VDYWxlbmRhcigpO1xuICB9XG5cbiAgdXBkYXRlRGF0ZXBpY2tlclNpemUod2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIpIHtcbiAgICB0aGlzLm5nWm9uZS5vblN0YWJsZS5hc09ic2VydmFibGUoKS5waXBlKHRha2UoMSkpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICBjb25zdCB7IG92ZXJsYXlSZWYgfSA9IHRoaXMuY2RrT3ZlcmxheTtcbiAgICAgIG92ZXJsYXlSZWYudXBkYXRlU2l6ZSh7XG4gICAgICAgIG1pbldpZHRoOiB3aWR0aCxcbiAgICAgICAgbWluSGVpZ2h0OiBoZWlnaHQgKyA0LFxuICAgICAgfSk7XG4gICAgICBvdmVybGF5UmVmLnVwZGF0ZVBvc2l0aW9uKCk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIHNldFBvc2l0aW9ucyhhbGlnbjogJ2xlZnQnIHwgJ3JpZ2h0Jykge1xuICAgIHRoaXMub3ZlcmxheVBvc2l0aW9ucyA9IFsuLi5ERUZBVUxUX0RST1BET1dOX1BPU0lUSU9OU1thbGlnbl1dO1xuICB9XG5cbiAgcHJpdmF0ZSBmb3JtYXRJbnB1dFZhbHVlKCkge1xuICAgIGNvbnN0IGlucHV0VmFsdWUgPSB0aGlzLmlucHV0RWwuZWxlbWVudC5uYXRpdmVFbGVtZW50LnZhbHVlO1xuICAgIGlmICghaW5wdXRWYWx1ZSkge1xuICAgICAgdGhpcy51cGRhdGVJbnB1dFZhbHVlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGRhdGUgPSB0aGlzLnZhbHVlIGFzIERhdGU7XG4gICAgICBjb25zdCBkYXRlTm93ID0gdGhpcy5kYXRlUGFyc2UoaW5wdXRWYWx1ZSk7XG5cbiAgICAgIGlmICghZGF0ZU5vdyB8fCBkYXRlTm93LmdldEZ1bGxZZWFyKCkgIT09IGRhdGUuZ2V0RnVsbFllYXIoKSB8fCBkYXRlTm93LmdldE1vbnRoKCkgIT09IGRhdGUuZ2V0TW9udGgoKSB8fCBkYXRlTm93LmdldERhdGUoKSAhPT0gZGF0ZS5nZXREYXRlKCkpIHtcbiAgICAgICAgdGhpcy51cGRhdGVJbnB1dFZhbHVlKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVJbnB1dFZhbHVlKHZhbHVlOiBzdHJpbmcgPSB0aGlzLmRhdGVGb3JtYXQoPERhdGU+dGhpcy52YWx1ZSkpIHtcbiAgICB0aGlzLnJlbmRlcmVyLnNldFByb3BlcnR5KHRoaXMuaW5wdXRFbC5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICd2YWx1ZScsIHZhbHVlIHx8ICcnKTtcbiAgfVxuXG4gIHByaXZhdGUgZGF0ZVBhcnNlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5hZGFwdGVyLnBhcnNlKHZhbHVlLCB0aGlzLmdldFBhdHRlcm4oKSk7XG4gIH1cblxuICBwcml2YXRlIGRhdGVGb3JtYXQoZGF0ZTogRGF0ZSkge1xuICAgIHJldHVybiB0aGlzLmFkYXB0ZXIuZm9ybWF0KGRhdGUsIHRoaXMuZ2V0UGF0dGVybigpKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0UGF0dGVybigpIHtcbiAgICBpZiAoIXRoaXMucGF0dGVybikge1xuICAgICAgdGhpcy5zZXRQYXR0ZXJuKCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnBhdHRlcm47XG4gIH1cblxuICBwcml2YXRlIHNldFBhdHRlcm4oKSB7XG4gICAgdGhpcy5wYXR0ZXJuID0gdGhpcy5hZGFwdGVyLnBhdHRlcm4odGhpcy5mb3JtYXQgfHwgdGhpcy5jb25maWcuZm9ybWF0LCB0aGlzLmRlbGltaXRlciB8fCB0aGlzLmNvbmZpZy5kZWxpbWl0ZXIpO1xuICB9XG5cbiAgcHJpdmF0ZSBlbWl0U2VsZWN0aW9uKHZhbHVlOiBEYXRlIHwgc3RyaW5nKSB7XG4gICAgdGhpcy52YWx1ZUNoYW5nZS5lbWl0KHZhbHVlKTtcblxuICAgIGlmICh0aGlzLm9uQ2hhbmdlKSB7XG4gICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgICB0aGlzLm9uQ2hhbmdlKHZhbHVlKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHNldEhvc3RDbGFzcygpIHtcbiAgICB0aGlzLmhvc3RTZXJ2aWNlLnVwZGF0ZUNsYXNzKHRoaXMuZWxlbWVudCwge1xuICAgICAgW2BzbGRzLWlzLW9wZW5gXTogdGhpcy5vcGVuLFxuICAgIH0pO1xuICB9XG59XG4iLCJcbjxsYWJlbCAqbmdJZj1cImxhYmVsXCIgW25nbEZvcm1MYWJlbF09XCJsYWJlbFwiIFthdHRyLmZvcl09XCJ1aWRcIiBbcmVxdWlyZWRdPVwiaXNSZXF1aXJlZFwiPjwvbGFiZWw+XG48ZGl2IGNsYXNzPVwic2xkcy1mb3JtLWVsZW1lbnRfX2NvbnRyb2wgc2xkcy1pbnB1dC1oYXMtaWNvbiBzbGRzLWlucHV0LWhhcy1pY29uX3JpZ2h0XCIgI2Zvcm1FbCBjZGtPdmVybGF5T3JpZ2luICNvdmVybGF5T3JpZ2luPVwiY2RrT3ZlcmxheU9yaWdpblwiPlxuICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gIDxidXR0b24gY2xhc3M9XCJzbGRzLWJ1dHRvbiBzbGRzLWJ1dHRvbl9pY29uIHNsZHMtaW5wdXRfX2ljb24gc2xkcy1pbnB1dF9faWNvbl9yaWdodFwiIHR5cGU9XCJidXR0b25cIiBbdGl0bGVdPVwic2VsZWN0RGF0ZUxhYmVsXCIgW2Rpc2FibGVkXT1cImRpc2FibGVkXCIgKGNsaWNrKT1cIm9uVHJpZ2dlckNsaWNrKCdidXR0b24nKVwiPlxuICAgIDxzdmcgY2xhc3M9XCJzbGRzLWJ1dHRvbl9faWNvblwiIG5nbEljb25OYW1lPVwidXRpbGl0eTpldmVudFwiPjwvc3ZnPjxzcGFuIGNsYXNzPVwic2xkcy1hc3Npc3RpdmUtdGV4dFwiPnt7IHNlbGVjdERhdGVMYWJlbCB9fTwvc3Bhbj5cbiAgPC9idXR0b24+XG48L2Rpdj5cbjxuZy10ZW1wbGF0ZSBjZGtDb25uZWN0ZWRPdmVybGF5ICNjZGtPdmVybGF5PVwiY2RrQ29ubmVjdGVkT3ZlcmxheVwiIFtjZGtDb25uZWN0ZWRPdmVybGF5UG9zaXRpb25zXT1cIm92ZXJsYXlQb3NpdGlvbnNcIiBbY2RrQ29ubmVjdGVkT3ZlcmxheU9yaWdpbl09XCJvdmVybGF5T3JpZ2luXCIgW2Nka0Nvbm5lY3RlZE92ZXJsYXlPcGVuXT1cIm9wZW5cIiAobmdsT3ZlcmxheVNjcm9sbGVkT3V0c2lkZVZpZXcpPVwiY2xvc2VDYWxlbmRhcihmYWxzZSlcIiAoYXR0YWNoKT1cIm9uQXR0YWNoKClcIiAoZGV0YWNoKT1cIm9uRGV0YWNoKClcIj5cbiAgPG5nbC1kYXRlcGlja2VyIGNsYXNzPVwic2xkcy1kcm9wZG93blwiIFthdHRyLmFyaWEtaGlkZGVuXT1cIiFvcGVuXCIgW2RhdGVdPVwiZGF0ZVwiIFttb250aE5hbWVzXT1cIm1vbnRoTmFtZXNcIiBbZGF5TmFtZXNTaG9ydF09XCJkYXlOYW1lc1Nob3J0XCIgW2RheU5hbWVzTG9uZ109XCJkYXlOYW1lc0xvbmdcIiBbZmlyc3REYXlPZldlZWtdPVwiZmlyc3REYXlPZldlZWtcIiBbc2hvd1RvZGF5XT1cInNob3dUb2RheVwiIFttaW5dPVwibWluXCIgW21heF09XCJtYXhcIiBbcmVsYXRpdmVZZWFyRnJvbV09XCJyZWxhdGl2ZVllYXJGcm9tXCIgW3JlbGF0aXZlWWVhclRvXT1cInJlbGF0aXZlWWVhclRvXCIgW3RvZGF5TGFiZWxdPVwidG9kYXlMYWJlbFwiIFtwcmV2aW91c01vbnRoTGFiZWxdPVwicHJldmlvdXNNb250aExhYmVsXCIgW25leHRNb250aExhYmVsXT1cIm5leHRNb250aExhYmVsXCIgW2RhdGVEaXNhYmxlZF09XCJkYXRlRGlzYWJsZWRcIiAoZGF0ZUNoYW5nZSk9XCJwaWNrZXJTZWxlY3Rpb24oJGV2ZW50KVwiIChuZ2xDbGlja091dHNpZGUpPVwiY2xvc2VDYWxlbmRhcihmYWxzZSlcIiBbbmdsQ2xpY2tPdXRzaWRlSWdub3JlXT1cImZvcm1FbFwiICh1cGRhdGVTaXplKT1cInVwZGF0ZURhdGVwaWNrZXJTaXplKCRldmVudC53aWR0aCwgJGV2ZW50LmhlaWdodClcIj48L25nbC1kYXRlcGlja2VyPlxuPC9uZy10ZW1wbGF0ZT4iXX0=
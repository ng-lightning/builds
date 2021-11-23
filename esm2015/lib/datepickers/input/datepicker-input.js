import { __decorate } from "tslib";
import { Component, Input, ChangeDetectionStrategy, ElementRef, Renderer2, forwardRef, ChangeDetectorRef, Output, EventEmitter, ViewChild, Inject, Optional, NgZone, LOCALE_ID } from '@angular/core';
import { NG_VALUE_ACCESSOR, NG_VALIDATORS } from '@angular/forms';
import { FocusTrapFactory } from '@angular/cdk/a11y';
import { DOWN_ARROW, UP_ARROW } from '@angular/cdk/keycodes';
import { BehaviorSubject } from 'rxjs';
import { take } from 'rxjs/operators';
import { uniqueId } from '../../util/util';
import { InputBoolean, toBoolean } from '../../util/convert';
import { HostService } from '../../common/host/host.service';
import { NglDateAdapter } from '../adapters/date-fns-adapter';
import { NGL_DATEPICKER_CONFIG, NglDatepickerConfig } from '../config';
import { DEFAULT_DROPDOWN_POSITIONS } from '../../util/overlay-position';
import { parseDate, isDisabled } from '../util';
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
        this.config = Object.assign(Object.assign({}, new NglDatepickerConfig(locale)), defaultConfig);
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
NglDatepickerInput.decorators = [
    { type: Component, args: [{
                selector: 'ngl-datepicker-input',
                template: "\n<label *ngIf=\"label\" [nglFormLabel]=\"label\" [attr.for]=\"uid\" [required]=\"isRequired\"></label>\n<div class=\"slds-form-element__control slds-input-has-icon slds-input-has-icon_right\" #formEl cdkOverlayOrigin #overlayOrigin=\"cdkOverlayOrigin\">\n  <ng-content></ng-content>\n  <button class=\"slds-button slds-button_icon slds-input__icon slds-input__icon_right\" type=\"button\" [title]=\"selectDateLabel\" [disabled]=\"disabled\" (click)=\"onTriggerClick('button')\">\n    <svg class=\"slds-button__icon\" nglIconName=\"utility:event\"></svg><span class=\"slds-assistive-text\">{{ selectDateLabel }}</span>\n  </button>\n</div>\n<ng-template cdkConnectedOverlay #cdkOverlay=\"cdkConnectedOverlay\" [cdkConnectedOverlayPositions]=\"overlayPositions\" [cdkConnectedOverlayOrigin]=\"overlayOrigin\" [cdkConnectedOverlayOpen]=\"open\" (nglOverlayScrolledOutsideView)=\"closeCalendar(false)\" (attach)=\"onAttach()\" (detach)=\"onDetach()\">\n  <ngl-datepicker class=\"slds-dropdown\" [attr.aria-hidden]=\"!open\" [date]=\"date\" [monthNames]=\"monthNames\" [dayNamesShort]=\"dayNamesShort\" [dayNamesLong]=\"dayNamesLong\" [firstDayOfWeek]=\"firstDayOfWeek\" [showToday]=\"showToday\" [min]=\"min\" [max]=\"max\" [relativeYearFrom]=\"relativeYearFrom\" [relativeYearTo]=\"relativeYearTo\" [todayLabel]=\"todayLabel\" [previousMonthLabel]=\"previousMonthLabel\" [nextMonthLabel]=\"nextMonthLabel\" [dateDisabled]=\"dateDisabled\" (dateChange)=\"pickerSelection($event)\" (nglClickOutside)=\"closeCalendar(false)\" [nglClickOutsideIgnore]=\"formEl\"></ngl-datepicker>\n</ng-template>",
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [NGL_DATEPICKER_INPUT_VALUE_ACCESSOR, NGL_DATEPICKER_INPUT_VALIDATOR, HostService]
            },] }
];
NglDatepickerInput.ctorParameters = () => [
    { type: NglDatepickerConfig, decorators: [{ type: Optional }, { type: Inject, args: [NGL_DATEPICKER_CONFIG,] }] },
    { type: String, decorators: [{ type: Inject, args: [LOCALE_ID,] }] },
    { type: ElementRef },
    { type: Renderer2 },
    { type: ChangeDetectorRef },
    { type: HostService },
    { type: NgZone },
    { type: FocusTrapFactory },
    { type: NglDateAdapter }
];
NglDatepickerInput.propDecorators = {
    label: [{ type: Input }],
    format: [{ type: Input }],
    delimiter: [{ type: Input }],
    disabled: [{ type: Input }],
    dropdownAlign: [{ type: Input }],
    value: [{ type: Input }],
    openOnInputClick: [{ type: Input }],
    valueChange: [{ type: Output }],
    cdkOverlay: [{ type: ViewChild, args: ['cdkOverlay',] }],
    min: [{ type: Input }],
    max: [{ type: Input }],
    required: [{ type: Input }],
    selectDateLabel: [{ type: Input }],
    patternPlaceholder: [{ type: Input }],
    monthNames: [{ type: Input }],
    dayNamesShort: [{ type: Input }],
    dayNamesLong: [{ type: Input }],
    firstDayOfWeek: [{ type: Input }],
    showToday: [{ type: Input }],
    dateDisabled: [{ type: Input }],
    relativeYearFrom: [{ type: Input }],
    relativeYearTo: [{ type: Input }],
    todayLabel: [{ type: Input }],
    previousMonthLabel: [{ type: Input }],
    nextMonthLabel: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci1pbnB1dC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nLWxpZ2h0bmluZy9zcmMvbGliL2RhdGVwaWNrZXJzL2lucHV0L2RhdGVwaWNrZXItaW5wdXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLHVCQUF1QixFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQWUsVUFBVSxFQUFFLGlCQUFpQixFQUM1RyxNQUFNLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBVSxNQUFNLEVBQXVDLFFBQVEsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2xKLE9BQU8sRUFBRSxpQkFBaUIsRUFBd0IsYUFBYSxFQUFnRCxNQUFNLGdCQUFnQixDQUFDO0FBRXRJLE9BQU8sRUFBRSxnQkFBZ0IsRUFBYSxNQUFNLG1CQUFtQixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDN0QsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN2QyxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDdEMsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDN0QsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzdELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUM5RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDdkUsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDekUsT0FBTyxFQUFFLFNBQVMs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LG1CQUFtQix1QkFvSnBDLFFBQVEsWUFBSSxNQUFNLFNBQUMscUJBQXFCO3lDQUN4QyxNQUFNLFNBQUMsU0FBUztZQWpLcUIsVUFBVTtZQUFFLFNBQVM7WUFBMkIsaUJBQWlCO1lBVTVHLFdBQVc7WUFUcUYsTUFBTTtZQUd0RyxnQkFBZ0I7WUFPaEIsY0FBYzs7O29CQTZCcEIsS0FBSztxQkFLTCxLQUFLO3dCQUtMLEtBQUs7dUJBS0wsS0FBSzs0QkFLTCxLQUFLO29CQUtMLEtBQUs7K0JBb0JMLEtBQUs7MEJBS0wsTUFBTTt5QkFNTixTQUFTLFNBQUMsWUFBWTtrQkFLdEIsS0FBSztrQkFLTCxLQUFLO3VCQUVMLEtBQUs7OEJBT0wsS0FBSztpQ0FLTCxLQUFLO3lCQUtMLEtBQUs7NEJBQ0wsS0FBSzsyQkFDTCxLQUFLOzZCQUNMLEtBQUs7d0JBQ0wsS0FBSzsyQkFDTCxLQUFLOytCQUNMLEtBQUs7NkJBQ0wsS0FBSzt5QkFDTCxLQUFLO2lDQUNMLEtBQUs7NkJBQ0wsS0FBSzs7QUFoRm1CO0lBQWYsWUFBWSxFQUFFO29EQUFtQjtBQThCbEI7SUFBZixZQUFZLEVBQUU7NERBQTJCO0FBbUMxQjtJQUFmLFlBQVksRUFBRTs4REFBNkI7QUFTNUI7SUFBZixZQUFZLEVBQUU7cURBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIEVsZW1lbnRSZWYsIFJlbmRlcmVyMiwgVGVtcGxhdGVSZWYsIGZvcndhcmRSZWYsIENoYW5nZURldGVjdG9yUmVmLFxuICAgICAgICAgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIFZpZXdDaGlsZCwgT25Jbml0LCBJbmplY3QsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcywgT25EZXN0cm95LCBPcHRpb25hbCwgTmdab25lLCBMT0NBTEVfSUQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5HX1ZBTFVFX0FDQ0VTU09SLCBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMSURBVE9SUywgVmFsaWRhdG9yLCBBYnN0cmFjdENvbnRyb2wsIFZhbGlkYXRpb25FcnJvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBDZGtDb25uZWN0ZWRPdmVybGF5LCBDb25uZWN0aW9uUG9zaXRpb25QYWlyIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xuaW1wb3J0IHsgRm9jdXNUcmFwRmFjdG9yeSwgRm9jdXNUcmFwIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2ExMXknO1xuaW1wb3J0IHsgRE9XTl9BUlJPVywgVVBfQVJST1cgfSBmcm9tICdAYW5ndWxhci9jZGsva2V5Y29kZXMnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YWtlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgdW5pcXVlSWQgfSBmcm9tICcuLi8uLi91dGlsL3V0aWwnO1xuaW1wb3J0IHsgSW5wdXRCb29sZWFuLCB0b0Jvb2xlYW4gfSBmcm9tICcuLi8uLi91dGlsL2NvbnZlcnQnO1xuaW1wb3J0IHsgSG9zdFNlcnZpY2UgfSBmcm9tICcuLi8uLi9jb21tb24vaG9zdC9ob3N0LnNlcnZpY2UnO1xuaW1wb3J0IHsgTmdsRGF0ZUFkYXB0ZXIgfSBmcm9tICcuLi9hZGFwdGVycy9kYXRlLWZucy1hZGFwdGVyJztcbmltcG9ydCB7IE5HTF9EQVRFUElDS0VSX0NPTkZJRywgTmdsRGF0ZXBpY2tlckNvbmZpZyB9IGZyb20gJy4uL2NvbmZpZyc7XG5pbXBvcnQgeyBERUZBVUxUX0RST1BET1dOX1BPU0lUSU9OUyB9IGZyb20gJy4uLy4uL3V0aWwvb3ZlcmxheS1wb3NpdGlvbic7XG5pbXBvcnQgeyBwYXJzZURhdGUsIGlzRGlzYWJsZWQgfSBmcm9tICcuLi91dGlsJztcbmltcG9ydCB7IElEYXRlcGlja2VySW5wdXQgfSBmcm9tICcuL2RhdGVwaWNrZXItaW5wdXQuaW50ZXJmYWNlJztcblxuY29uc3QgTkdMX0RBVEVQSUNLRVJfSU5QVVRfVkFMVUVfQUNDRVNTT1IgPSB7XG4gIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBOZ2xEYXRlcGlja2VySW5wdXQpLFxuICBtdWx0aTogdHJ1ZVxufTtcblxuY29uc3QgTkdMX0RBVEVQSUNLRVJfSU5QVVRfVkFMSURBVE9SID0ge1xuICBwcm92aWRlOiBOR19WQUxJREFUT1JTLFxuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBOZ2xEYXRlcGlja2VySW5wdXQpLFxuICBtdWx0aTogdHJ1ZVxufTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmdsLWRhdGVwaWNrZXItaW5wdXQnLFxuICB0ZW1wbGF0ZVVybDogJy4vZGF0ZXBpY2tlci1pbnB1dC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByb3ZpZGVyczogW05HTF9EQVRFUElDS0VSX0lOUFVUX1ZBTFVFX0FDQ0VTU09SLCBOR0xfREFURVBJQ0tFUl9JTlBVVF9WQUxJREFUT1IsIEhvc3RTZXJ2aWNlXSxcbn0pXG5leHBvcnQgY2xhc3MgTmdsRGF0ZXBpY2tlcklucHV0IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3IsIFZhbGlkYXRvciwgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG5cbiAgLyoqXG4gICAqIExhYmVsIHRoYXQgYXBwZWFycyBhYm92ZSB0aGUgaW5wdXQuXG4gICAqL1xuICBASW5wdXQoKSBsYWJlbDogc3RyaW5nIHwgVGVtcGxhdGVSZWY8YW55PjtcblxuICAvKipcbiAgICogUHJlLWRlZmluZWQgZm9ybWF0IHRvIHVzZS5cbiAgICovXG4gIEBJbnB1dCgpIGZvcm1hdDogJ2JpZy1lbmRpYW4nIHwgJ2xpdHRsZS1lbmRpYW4nIHwgJ21pZGRsZS1lbmRpYW4nO1xuXG4gIC8qKlxuICAgKiBEZWxpbWl0ZXIgdG8gdXNlIG9uIHByZS1kZWZpbmVkIGZvcm1hdHMuXG4gICAqL1xuICBASW5wdXQoKSBkZWxpbWl0ZXI7XG5cbiAgLyoqXG4gICAqIERpc2FibGUgaW5wdXQgYW5kIGNhbGVuZGFyLlxuICAgKi9cbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGRpc2FibGVkOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBBbGlnbnMgdGhlIHJpZ2h0IG9yIGxlZnQgc2lkZSBvZiB0aGUgZHJvcGRvd24gbWVudSB3aXRoIHRoZSByZXNwZWN0aXZlIHNpZGUgb2YgdGhlIGlucHV0LlxuICAgKi9cbiAgQElucHV0KCkgZHJvcGRvd25BbGlnbjogJ2xlZnQnIHwgJ3JpZ2h0JztcblxuICAvKipcbiAgICogVGhlIGRhdGUgdmFsdWUuXG4gICAqL1xuICBASW5wdXQoKSBzZXQgdmFsdWUodmFsdWU6IERhdGUgfCBzdHJpbmcgfCBudWxsKSB7XG4gICAgaWYgKHZhbHVlID09PSB0aGlzLl92YWx1ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xuXG4gICAgaWYgKHRoaXMudmFsdWUgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICB0aGlzLmRhdGUgPSB0aGlzLnZhbHVlO1xuICAgICAgdGhpcy5mb3JtYXRJbnB1dFZhbHVlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudXBkYXRlSW5wdXRWYWx1ZSg8c3RyaW5nPnZhbHVlIHx8ICcnKTtcbiAgICB9XG4gIH1cbiAgZ2V0IHZhbHVlKCk6IERhdGUgfCBzdHJpbmcgfCBudWxsIHtcbiAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogV2hldGhlciB0byBvcGVuIHRoZSBkYXRlcGlja2VyIHdoZW4gYSBtb3VzZSB1c2VyIGNsaWNrcyBvbiB0aGUgaW5wdXQuXG4gICAqL1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgb3Blbk9uSW5wdXRDbGljazogYm9vbGVhbjtcblxuICAvKipcbiAgICogRW1pdHMgd2hlbiBzZWxlY3RlZCBkYXRlIGNoYW5nZXMuXG4gICAqL1xuICBAT3V0cHV0KCkgdmFsdWVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPERhdGUgfCBzdHJpbmcgfCBudWxsPigpO1xuXG4gIGlucHV0RWw6IElEYXRlcGlja2VySW5wdXQ7XG5cbiAgLy8gQENvbnRlbnRDaGlsZCgnaW5wdXRFbCcsIHsgc3RhdGljOiBmYWxzZSB9KSBpbnB1dEVsOiBTcXVhcmVDb25maWc7XG5cbiAgQFZpZXdDaGlsZCgnY2RrT3ZlcmxheScpIGNka092ZXJsYXk6IENka0Nvbm5lY3RlZE92ZXJsYXk7XG5cbiAgLyoqXG4gICAqIFRoZSBtaW5pbXVtIHZhbGlkIGRhdGUuXG4gICAqL1xuICBASW5wdXQoKSBtaW46IERhdGU7XG5cbiAgLyoqXG4gICAqIFRoZSBtYXhpbXVtIHZhbGlkIGRhdGUuXG4gICAqL1xuICBASW5wdXQoKSBtYXg6IERhdGU7XG5cbiAgQElucHV0KCkgc2V0IHJlcXVpcmVkKHJlcXVpcmVkOiBhbnkpIHtcbiAgICB0aGlzLmlzUmVxdWlyZWQgPSB0b0Jvb2xlYW4ocmVxdWlyZWQpO1xuICB9XG4gIGlzUmVxdWlyZWQ6IEJvb2xlYW47XG4gIC8qKlxuICAgKiBUZXh0IGZvciBidXR0b24gdG8gb3BlbiBjYWxlbmRhci5cbiAgICovXG4gIEBJbnB1dCgpIHNlbGVjdERhdGVMYWJlbCA9ICdTZWxlY3QgYSBkYXRlJztcblxuICAvKipcbiAgICogV2hldGhlciB0byB1c2UgdGhlIGFjY2VwdGVkIHBhdHRlcm4gYXMgcGxhY2Vob2xkZXIuXG4gICAqL1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgcGF0dGVyblBsYWNlaG9sZGVyOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBEYXRlcGlja2VyIGlucHV0c1xuICAgKi9cbiAgQElucHV0KCkgbW9udGhOYW1lczogUmVhZG9ubHlBcnJheTxzdHJpbmc+O1xuICBASW5wdXQoKSBkYXlOYW1lc1Nob3J0OiBSZWFkb25seUFycmF5PHN0cmluZz47XG4gIEBJbnB1dCgpIGRheU5hbWVzTG9uZzogUmVhZG9ubHlBcnJheTxzdHJpbmc+O1xuICBASW5wdXQoKSBmaXJzdERheU9mV2VlazogbnVtYmVyO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgc2hvd1RvZGF5OiBib29sZWFuO1xuICBASW5wdXQoKSBkYXRlRGlzYWJsZWQ6IChkYXRlOiBEYXRlKSA9PiBib29sZWFuIHwgbnVsbCA9IG51bGw7XG4gIEBJbnB1dCgpIHJlbGF0aXZlWWVhckZyb206IG51bWJlcjtcbiAgQElucHV0KCkgcmVsYXRpdmVZZWFyVG86IG51bWJlcjtcbiAgQElucHV0KCkgdG9kYXlMYWJlbDogc3RyaW5nO1xuICBASW5wdXQoKSBwcmV2aW91c01vbnRoTGFiZWw6IHN0cmluZztcbiAgQElucHV0KCkgbmV4dE1vbnRoTGFiZWw6IHN0cmluZztcblxuICBkYXRlOiBEYXRlO1xuXG4gIHVpZCA9IHVuaXF1ZUlkKCdkYXRlcGlja2VyLWlucHV0Jyk7XG5cbiAgb3ZlcmxheVBvc2l0aW9uczogQ29ubmVjdGlvblBvc2l0aW9uUGFpcltdO1xuXG4gIHNldCBvcGVuKG9wZW46IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9vcGVuLm5leHQob3Blbik7XG4gIH1cbiAgZ2V0IG9wZW4oKSB7XG4gICAgcmV0dXJuIHRoaXMuX29wZW4udmFsdWU7XG4gIH1cblxuICBwcml2YXRlIF9vcGVuID0gbmV3IEJlaGF2aW9yU3ViamVjdChmYWxzZSk7XG5cbiAgcHJpdmF0ZSBfdmFsdWU6IERhdGUgfCBzdHJpbmcgfCBudWxsID0gbnVsbDtcblxuICBwcml2YXRlIHBhdHRlcm46IHN0cmluZztcblxuICBwcml2YXRlIGNvbmZpZzogTmdsRGF0ZXBpY2tlckNvbmZpZztcblxuICBwcml2YXRlIGZvY3VzVHJhcDogRm9jdXNUcmFwO1xuXG4gIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIEBJbmplY3QoTkdMX0RBVEVQSUNLRVJfQ09ORklHKSBkZWZhdWx0Q29uZmlnOiBOZ2xEYXRlcGlja2VyQ29uZmlnLFxuICAgICAgICAgICAgICBASW5qZWN0KExPQ0FMRV9JRCkgbG9jYWxlOiBzdHJpbmcsXG4gICAgICAgICAgICAgIHByaXZhdGUgZWxlbWVudDogRWxlbWVudFJlZixcbiAgICAgICAgICAgICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgICAgICAgICAgICBwcml2YXRlIGNkOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBob3N0U2VydmljZTogSG9zdFNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgbmdab25lOiBOZ1pvbmUsXG4gICAgICAgICAgICAgIHByaXZhdGUgZm9jdXNUcmFwRmFjdG9yeTogRm9jdXNUcmFwRmFjdG9yeSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBhZGFwdGVyOiBOZ2xEYXRlQWRhcHRlcikge1xuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICdzbGRzLWZvcm0tZWxlbWVudCcpO1xuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICdzbGRzLWRyb3Bkb3duLXRyaWdnZXInKTtcbiAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LCAnc2xkcy1kcm9wZG93bi10cmlnZ2VyX2NsaWNrJyk7XG5cbiAgICB0aGlzLmNvbmZpZyA9IHsgLi4ubmV3IE5nbERhdGVwaWNrZXJDb25maWcobG9jYWxlKSwgLi4uZGVmYXVsdENvbmZpZyB9O1xuICAgIHRoaXMuZm9ybWF0ID0gdGhpcy5jb25maWcuZm9ybWF0O1xuICAgIHRoaXMuZGVsaW1pdGVyID0gdGhpcy5jb25maWcuZGVsaW1pdGVyO1xuICAgIHRoaXMuc2V0UG9zaXRpb25zKHRoaXMuY29uZmlnLmRyb3Bkb3duQWxpZ24pO1xuICAgIHRoaXMubW9udGhOYW1lcyA9IHRoaXMuY29uZmlnLm1vbnRoTmFtZXM7XG4gICAgdGhpcy5kYXlOYW1lc1Nob3J0ID0gdGhpcy5jb25maWcuZGF5TmFtZXNTaG9ydDtcbiAgICB0aGlzLmRheU5hbWVzTG9uZyA9IHRoaXMuY29uZmlnLmRheU5hbWVzTG9uZztcbiAgICB0aGlzLmZpcnN0RGF5T2ZXZWVrID0gdGhpcy5jb25maWcuZmlyc3REYXlPZldlZWs7XG4gICAgdGhpcy5zaG93VG9kYXkgPSB0aGlzLmNvbmZpZy5zaG93VG9kYXk7XG4gICAgdGhpcy5yZWxhdGl2ZVllYXJGcm9tID0gdGhpcy5jb25maWcucmVsYXRpdmVZZWFyRnJvbTtcbiAgICB0aGlzLnJlbGF0aXZlWWVhclRvID0gdGhpcy5jb25maWcucmVsYXRpdmVZZWFyVG87XG4gICAgdGhpcy5vcGVuT25JbnB1dENsaWNrID0gdGhpcy5jb25maWcub3Blbk9uSW5wdXRDbGljaztcbiAgICB0aGlzLnRvZGF5TGFiZWwgPSB0aGlzLmNvbmZpZy50b2RheUxhYmVsO1xuICAgIHRoaXMucHJldmlvdXNNb250aExhYmVsID0gdGhpcy5jb25maWcucHJldmlvdXNNb250aExhYmVsO1xuICAgIHRoaXMubmV4dE1vbnRoTGFiZWwgPSB0aGlzLmNvbmZpZy5uZXh0TW9udGhMYWJlbDtcbiAgICB0aGlzLnBhdHRlcm5QbGFjZWhvbGRlciA9IHRoaXMuY29uZmlnLnBhdHRlcm5QbGFjZWhvbGRlcjtcbiAgfVxuXG4gIG9uQ2hhbmdlOiBGdW5jdGlvbiB8IG51bGwgPSBudWxsO1xuXG4gIG9uVG91Y2hlZCA9ICgpID0+IHt9O1xuXG4gIHZhbGlkYXRvckNoYW5nZSA9ICgpID0+IHt9O1xuXG4gIHZhbGlkYXRlKGM6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsIHtcbiAgICBjb25zdCB2YWx1ZSA9IGMudmFsdWU7XG5cbiAgICBpZiAoIXZhbHVlKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAoISh0aGlzLnZhbHVlIGluc3RhbmNlb2YgRGF0ZSkpIHtcbiAgICAgIHJldHVybiB7ICduZ2xEYXRlcGlja2VySW5wdXQnOiB7IGludmFsaWQ6IGMudmFsdWUgfSB9O1xuICAgIH1cblxuICAgIGNvbnN0IGRhdGUgPSBwYXJzZURhdGUodmFsdWUpO1xuICAgIGlmIChpc0Rpc2FibGVkKGRhdGUsIHRoaXMuZGF0ZURpc2FibGVkLCBwYXJzZURhdGUodGhpcy5taW4pLCBwYXJzZURhdGUodGhpcy5tYXgpKSkge1xuICAgICAgcmV0dXJuIHsgJ25nbERhdGVwaWNrZXJJbnB1dCc6IHsgZGlzYWJsZWQ6IGMudmFsdWUgfSB9O1xuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgd3JpdGVWYWx1ZSh2YWx1ZTogRGF0ZSkge1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKHZhbHVlOiBhbnkpID0+IGFueSk6IHZvaWQgeyB0aGlzLm9uQ2hhbmdlID0gZm47IH1cblxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4gYW55KTogdm9pZCB7IHRoaXMub25Ub3VjaGVkID0gZm47IH1cblxuICByZWdpc3Rlck9uVmFsaWRhdG9yQ2hhbmdlKGZuOiAoKSA9PiB2b2lkKTogdm9pZCB7IHRoaXMudmFsaWRhdG9yQ2hhbmdlID0gZm47IH1cblxuICBzZXREaXNhYmxlZFN0YXRlKGRpc2FibGVkOiBib29sZWFuKSB7IHRoaXMuZGlzYWJsZWQgPSBkaXNhYmxlZDsgfVxuXG4gIG9uQmx1cigpIHtcbiAgICBpZiAodGhpcy52YWx1ZSBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgIHRoaXMudXBkYXRlSW5wdXRWYWx1ZSgpO1xuICAgIH1cbiAgICB0aGlzLm9uVG91Y2hlZCgpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5fb3Blbi5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5zZXRIb3N0Q2xhc3MoKTtcbiAgICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XG4gICAgfSk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgaWYgKGNoYW5nZXMuZm9ybWF0IHx8IGNoYW5nZXMuZGVsaW1pdGVyKSB7XG4gICAgICB0aGlzLnNldFBhdHRlcm4oKTtcbiAgICAgIGlmICh0aGlzLnZhbHVlIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgICB0aGlzLnVwZGF0ZUlucHV0VmFsdWUoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoY2hhbmdlcy5kcm9wZG93bkFsaWduKSB7XG4gICAgICB0aGlzLnNldFBvc2l0aW9ucyh0aGlzLmRyb3Bkb3duQWxpZ24pO1xuICAgIH1cblxuICAgIGlmIChjaGFuZ2VzLm1pbiB8fCBjaGFuZ2VzLm1heCkge1xuICAgICAgdGhpcy52YWxpZGF0b3JDaGFuZ2UoKTtcbiAgICB9XG5cbiAgICBpZiAoKGNoYW5nZXMucGF0dGVyblBsYWNlaG9sZGVyIHx8IGNoYW5nZXMuZm9ybWF0IHx8IGNoYW5nZXMuZGVsaW1pdGVyKSAmJiB0aGlzLnBhdHRlcm5QbGFjZWhvbGRlcikge1xuICAgICAgdGhpcy5pbnB1dEVsLnNldFBsYWNlaG9sZGVyKHRoaXMuZ2V0UGF0dGVybigpLnRvTG9jYWxlVXBwZXJDYXNlKCkpO1xuICAgIH1cblxuICAgIGlmIChjaGFuZ2VzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLmlucHV0RWwuc2V0RGlzYWJsZWQodGhpcy5kaXNhYmxlZCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5jbG9zZUNhbGVuZGFyKGZhbHNlKTtcbiAgfVxuXG4gIG9uS2V5Ym9hcmRJbnB1dChldnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICBjb25zdCBrZXlDb2RlID0gZXZ0LmtleUNvZGU7XG5cbiAgICBpZiAoIXRoaXMub3BlbiAmJiAoa2V5Q29kZSA9PT0gRE9XTl9BUlJPVyB8fCBrZXlDb2RlID09PSBVUF9BUlJPVykpIHtcbiAgICAgIHRoaXMub3BlbkNhbGVuZGFyKCk7XG4gICAgfVxuICB9XG5cbiAgb25JbnB1dENoYW5nZSgpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuaW5wdXRFbC5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQudmFsdWU7XG5cbiAgICBjb25zdCBkYXRlID0gdGhpcy5kYXRlUGFyc2UodmFsdWUpO1xuICAgIHRoaXMuZW1pdFNlbGVjdGlvbihkYXRlIHx8IHZhbHVlKTtcbiAgfVxuXG4gIG9wZW5DYWxlbmRhcigpIHtcbiAgICB0aGlzLm9wZW4gPSB0cnVlO1xuICB9XG5cbiAgb25BdHRhY2goKSB7XG4gICAgdGhpcy5mb2N1c1RyYXAgPSB0aGlzLmZvY3VzVHJhcEZhY3RvcnkuY3JlYXRlKHRoaXMuY2RrT3ZlcmxheS5vdmVybGF5UmVmLm92ZXJsYXlFbGVtZW50KTtcbiAgfVxuXG4gIG9uRGV0YWNoKCkge1xuICAgIGlmICh0aGlzLm9wZW4pIHtcbiAgICAgIHRoaXMuY2xvc2VDYWxlbmRhcigpO1xuICAgIH1cbiAgfVxuXG4gIGNsb3NlQ2FsZW5kYXIoZm9jdXNJbnB1dCA9IHRydWUpIHtcbiAgICB0aGlzLm9wZW4gPSBmYWxzZTtcblxuICAgIGlmICh0aGlzLmZvY3VzVHJhcCkge1xuICAgICAgdGhpcy5mb2N1c1RyYXAuZGVzdHJveSgpO1xuICAgICAgdGhpcy5mb2N1c1RyYXAgPSBudWxsO1xuICAgIH1cblxuICAgIGlmIChmb2N1c0lucHV0KSB7XG4gICAgICB0aGlzLmlucHV0RWwuZWxlbWVudC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgfVxuICB9XG5cbiAgb25UcmlnZ2VyQ2xpY2sob3JpZ2luOiAnaW5wdXQnIHwgJ2J1dHRvbicpIHtcbiAgICBpZiAob3JpZ2luID09PSAnaW5wdXQnICYmICF0aGlzLm9wZW5PbklucHV0Q2xpY2spIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMub3Blbikge1xuICAgICAgdGhpcy5vcGVuQ2FsZW5kYXIoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jbG9zZUNhbGVuZGFyKGZhbHNlKTtcbiAgICB9XG4gIH1cblxuICBwaWNrZXJTZWxlY3Rpb24oZGF0ZTogRGF0ZSkge1xuICAgIHRoaXMuZW1pdFNlbGVjdGlvbihkYXRlKTtcbiAgICB0aGlzLmNsb3NlQ2FsZW5kYXIoKTtcbiAgfVxuXG4gIHVwZGF0ZURhdGVwaWNrZXJTaXplKHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyKSB7XG4gICAgdGhpcy5uZ1pvbmUub25TdGFibGUuYXNPYnNlcnZhYmxlKCkucGlwZSh0YWtlKDEpKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgY29uc3QgeyBvdmVybGF5UmVmIH0gPSB0aGlzLmNka092ZXJsYXk7XG4gICAgICBvdmVybGF5UmVmLnVwZGF0ZVNpemUoe1xuICAgICAgICBtaW5XaWR0aDogd2lkdGgsXG4gICAgICAgIG1pbkhlaWdodDogaGVpZ2h0ICsgNCxcbiAgICAgIH0pO1xuICAgICAgb3ZlcmxheVJlZi51cGRhdGVQb3NpdGlvbigpO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRQb3NpdGlvbnMoYWxpZ246ICdsZWZ0JyB8ICdyaWdodCcpIHtcbiAgICB0aGlzLm92ZXJsYXlQb3NpdGlvbnMgPSBbLi4uREVGQVVMVF9EUk9QRE9XTl9QT1NJVElPTlNbYWxpZ25dXTtcbiAgfVxuXG4gIHByaXZhdGUgZm9ybWF0SW5wdXRWYWx1ZSgpIHtcbiAgICBjb25zdCBpbnB1dFZhbHVlID0gdGhpcy5pbnB1dEVsLmVsZW1lbnQubmF0aXZlRWxlbWVudC52YWx1ZTtcbiAgICBpZiAoIWlucHV0VmFsdWUpIHtcbiAgICAgIHRoaXMudXBkYXRlSW5wdXRWYWx1ZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBkYXRlID0gdGhpcy52YWx1ZSBhcyBEYXRlO1xuICAgICAgY29uc3QgZGF0ZU5vdyA9IHRoaXMuZGF0ZVBhcnNlKGlucHV0VmFsdWUpO1xuXG4gICAgICBpZiAoIWRhdGVOb3cgfHwgZGF0ZU5vdy5nZXRGdWxsWWVhcigpICE9PSBkYXRlLmdldEZ1bGxZZWFyKCkgfHwgZGF0ZU5vdy5nZXRNb250aCgpICE9PSBkYXRlLmdldE1vbnRoKCkgfHwgZGF0ZU5vdy5nZXREYXRlKCkgIT09IGRhdGUuZ2V0RGF0ZSgpKSB7XG4gICAgICAgIHRoaXMudXBkYXRlSW5wdXRWYWx1ZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlSW5wdXRWYWx1ZSh2YWx1ZTogc3RyaW5nID0gdGhpcy5kYXRlRm9ybWF0KDxEYXRlPnRoaXMudmFsdWUpKSB7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRQcm9wZXJ0eSh0aGlzLmlucHV0RWwuZWxlbWVudC5uYXRpdmVFbGVtZW50LCAndmFsdWUnLCB2YWx1ZSB8fCAnJyk7XG4gIH1cblxuICBwcml2YXRlIGRhdGVQYXJzZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMuYWRhcHRlci5wYXJzZSh2YWx1ZSwgdGhpcy5nZXRQYXR0ZXJuKCkpO1xuICB9XG5cbiAgcHJpdmF0ZSBkYXRlRm9ybWF0KGRhdGU6IERhdGUpIHtcbiAgICByZXR1cm4gdGhpcy5hZGFwdGVyLmZvcm1hdChkYXRlLCB0aGlzLmdldFBhdHRlcm4oKSk7XG4gIH1cblxuICBwcml2YXRlIGdldFBhdHRlcm4oKSB7XG4gICAgaWYgKCF0aGlzLnBhdHRlcm4pIHtcbiAgICAgIHRoaXMuc2V0UGF0dGVybigpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5wYXR0ZXJuO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRQYXR0ZXJuKCkge1xuICAgIHRoaXMucGF0dGVybiA9IHRoaXMuYWRhcHRlci5wYXR0ZXJuKHRoaXMuZm9ybWF0IHx8IHRoaXMuY29uZmlnLmZvcm1hdCwgdGhpcy5kZWxpbWl0ZXIgfHwgdGhpcy5jb25maWcuZGVsaW1pdGVyKTtcbiAgfVxuXG4gIHByaXZhdGUgZW1pdFNlbGVjdGlvbih2YWx1ZTogRGF0ZSB8IHN0cmluZykge1xuICAgIHRoaXMudmFsdWVDaGFuZ2UuZW1pdCh2YWx1ZSk7XG5cbiAgICBpZiAodGhpcy5vbkNoYW5nZSkge1xuICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgdGhpcy5vbkNoYW5nZSh2YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzZXRIb3N0Q2xhc3MoKSB7XG4gICAgdGhpcy5ob3N0U2VydmljZS51cGRhdGVDbGFzcyh0aGlzLmVsZW1lbnQsIHtcbiAgICAgIFtgc2xkcy1pcy1vcGVuYF06IHRoaXMub3BlbixcbiAgICB9KTtcbiAgfVxufVxuIl19
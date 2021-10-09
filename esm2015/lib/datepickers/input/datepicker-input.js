import { __decorate } from "tslib";
import { Component, Input, ChangeDetectionStrategy, ElementRef, Renderer2, forwardRef, ChangeDetectorRef, Output, EventEmitter, ViewChild, Inject, Optional, NgZone, LOCALE_ID } from '@angular/core';
import { NG_VALUE_ACCESSOR, NG_VALIDATORS } from '@angular/forms';
import { FocusTrapFactory } from '@angular/cdk/a11y';
import { DOWN_ARROW, UP_ARROW } from '@angular/cdk/keycodes';
import { BehaviorSubject } from 'rxjs';
import { take } from 'rxjs/operators';
import { uniqueId } from '../../util/util';
import { InputBoolean } from '../../util/convert';
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
                template: "\n<label class=\"slds-form-element__label\" *ngIf=\"label\" [attr.for]=\"uid\" [nglInternalOutlet]=\"label\"></label>\n<div class=\"slds-form-element__control slds-input-has-icon slds-input-has-icon_right\" #formEl cdkOverlayOrigin #overlayOrigin=\"cdkOverlayOrigin\">\n  <ng-content></ng-content>\n  <button class=\"slds-button slds-button_icon slds-input__icon slds-input__icon_right\" type=\"button\" [title]=\"selectDateLabel\" [disabled]=\"disabled\" (click)=\"onTriggerClick('button')\">\n    <svg class=\"slds-button__icon\" nglIconName=\"utility:event\"></svg><span class=\"slds-assistive-text\">{{ selectDateLabel }}</span>\n  </button>\n</div>\n<ng-template cdkConnectedOverlay #cdkOverlay=\"cdkConnectedOverlay\" [cdkConnectedOverlayPositions]=\"overlayPositions\" [cdkConnectedOverlayOrigin]=\"overlayOrigin\" [cdkConnectedOverlayOpen]=\"open\" (nglOverlayScrolledOutsideView)=\"closeCalendar(false)\" (attach)=\"onAttach()\" (detach)=\"onDetach()\">\n  <ngl-datepicker class=\"slds-dropdown\" [attr.aria-hidden]=\"!open\" [date]=\"date\" [monthNames]=\"monthNames\" [dayNamesShort]=\"dayNamesShort\" [dayNamesLong]=\"dayNamesLong\" [firstDayOfWeek]=\"firstDayOfWeek\" [showToday]=\"showToday\" [min]=\"min\" [max]=\"max\" [relativeYearFrom]=\"relativeYearFrom\" [relativeYearTo]=\"relativeYearTo\" [todayLabel]=\"todayLabel\" [previousMonthLabel]=\"previousMonthLabel\" [nextMonthLabel]=\"nextMonthLabel\" [dateDisabled]=\"dateDisabled\" (dateChange)=\"pickerSelection($event)\" (nglClickOutside)=\"closeCalendar(false)\" [nglClickOutsideIgnore]=\"formEl\"></ngl-datepicker>\n</ng-template>",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci1pbnB1dC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nLWxpZ2h0bmluZy9zcmMvbGliL2RhdGVwaWNrZXJzL2lucHV0L2RhdGVwaWNrZXItaW5wdXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLHVCQUF1QixFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQWUsVUFBVSxFQUFFLGlCQUFpQixFQUM1RyxNQUFNLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBVSxNQUFNLEVBQXVDLFFBQVEsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2xKLE9BQU8sRUFBRSxpQkFBaUIsRUFBd0IsYUFBYSxFQUFnRCxNQUFNLGdCQUFnQixDQUFDO0FBRXRJLE9BQU8sRUFBRSxnQkFBZ0IsRUFBYSxNQUFNLG1CQUFtQixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDN0QsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN2QyxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDdEMsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDN0QsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQzlELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUN2RSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUN6RSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUs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QjtZQVU1RyxXQUFXO1lBVHFGLE1BQU07WUFHdEcsZ0JBQWdCO1lBT2hCLGNBQWM7OztvQkE2QnBCLEtBQUs7cUJBS0wsS0FBSzt3QkFLTCxLQUFLO3VCQUtMLEtBQUs7NEJBS0wsS0FBSztvQkFLTCxLQUFLOytCQW9CTCxLQUFLOzBCQUtMLE1BQU07eUJBTU4sU0FBUyxTQUFDLFlBQVk7a0JBS3RCLEtBQUs7a0JBS0wsS0FBSzs4QkFLTCxLQUFLO2lDQUtMLEtBQUs7eUJBS0wsS0FBSzs0QkFDTCxLQUFLOzJCQUNMLEtBQUs7NkJBQ0wsS0FBSzt3QkFDTCxLQUFLOzJCQUNMLEtBQUs7K0JBQ0wsS0FBSzs2QkFDTCxLQUFLO3lCQUNMLEtBQUs7aUNBQ0wsS0FBSzs2QkFDTCxLQUFLOztBQTVFbUI7SUFBZixZQUFZLEVBQUU7b0RBQW1CO0FBOEJsQjtJQUFmLFlBQVksRUFBRTs0REFBMkI7QUErQjFCO0lBQWYsWUFBWSxFQUFFOzhEQUE2QjtBQVM1QjtJQUFmLFlBQVksRUFBRTtxREFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgRWxlbWVudFJlZiwgUmVuZGVyZXIyLCBUZW1wbGF0ZVJlZiwgZm9yd2FyZFJlZiwgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgICAgICBPdXRwdXQsIEV2ZW50RW1pdHRlciwgVmlld0NoaWxkLCBPbkluaXQsIEluamVjdCwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzLCBPbkRlc3Ryb3ksIE9wdGlvbmFsLCBOZ1pvbmUsIExPQ0FMRV9JRCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTkdfVkFMVUVfQUNDRVNTT1IsIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxJREFUT1JTLCBWYWxpZGF0b3IsIEFic3RyYWN0Q29udHJvbCwgVmFsaWRhdGlvbkVycm9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IENka0Nvbm5lY3RlZE92ZXJsYXksIENvbm5lY3Rpb25Qb3NpdGlvblBhaXIgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XG5pbXBvcnQgeyBGb2N1c1RyYXBGYWN0b3J5LCBGb2N1c1RyYXAgfSBmcm9tICdAYW5ndWxhci9jZGsvYTExeSc7XG5pbXBvcnQgeyBET1dOX0FSUk9XLCBVUF9BUlJPVyB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9rZXljb2Rlcyc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2UgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyB1bmlxdWVJZCB9IGZyb20gJy4uLy4uL3V0aWwvdXRpbCc7XG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4gfSBmcm9tICcuLi8uLi91dGlsL2NvbnZlcnQnO1xuaW1wb3J0IHsgSG9zdFNlcnZpY2UgfSBmcm9tICcuLi8uLi9jb21tb24vaG9zdC9ob3N0LnNlcnZpY2UnO1xuaW1wb3J0IHsgTmdsRGF0ZUFkYXB0ZXIgfSBmcm9tICcuLi9hZGFwdGVycy9kYXRlLWZucy1hZGFwdGVyJztcbmltcG9ydCB7IE5HTF9EQVRFUElDS0VSX0NPTkZJRywgTmdsRGF0ZXBpY2tlckNvbmZpZyB9IGZyb20gJy4uL2NvbmZpZyc7XG5pbXBvcnQgeyBERUZBVUxUX0RST1BET1dOX1BPU0lUSU9OUyB9IGZyb20gJy4uLy4uL3V0aWwvb3ZlcmxheS1wb3NpdGlvbic7XG5pbXBvcnQgeyBwYXJzZURhdGUsIGlzRGlzYWJsZWQgfSBmcm9tICcuLi91dGlsJztcbmltcG9ydCB7IElEYXRlcGlja2VySW5wdXQgfSBmcm9tICcuL2RhdGVwaWNrZXItaW5wdXQuaW50ZXJmYWNlJztcblxuY29uc3QgTkdMX0RBVEVQSUNLRVJfSU5QVVRfVkFMVUVfQUNDRVNTT1IgPSB7XG4gIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBOZ2xEYXRlcGlja2VySW5wdXQpLFxuICBtdWx0aTogdHJ1ZVxufTtcblxuY29uc3QgTkdMX0RBVEVQSUNLRVJfSU5QVVRfVkFMSURBVE9SID0ge1xuICBwcm92aWRlOiBOR19WQUxJREFUT1JTLFxuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBOZ2xEYXRlcGlja2VySW5wdXQpLFxuICBtdWx0aTogdHJ1ZVxufTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmdsLWRhdGVwaWNrZXItaW5wdXQnLFxuICB0ZW1wbGF0ZVVybDogJy4vZGF0ZXBpY2tlci1pbnB1dC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByb3ZpZGVyczogW05HTF9EQVRFUElDS0VSX0lOUFVUX1ZBTFVFX0FDQ0VTU09SLCBOR0xfREFURVBJQ0tFUl9JTlBVVF9WQUxJREFUT1IsIEhvc3RTZXJ2aWNlXSxcbn0pXG5leHBvcnQgY2xhc3MgTmdsRGF0ZXBpY2tlcklucHV0IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3IsIFZhbGlkYXRvciwgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG5cbiAgLyoqXG4gICAqIExhYmVsIHRoYXQgYXBwZWFycyBhYm92ZSB0aGUgaW5wdXQuXG4gICAqL1xuICBASW5wdXQoKSBsYWJlbDogc3RyaW5nIHwgVGVtcGxhdGVSZWY8YW55PjtcblxuICAvKipcbiAgICogUHJlLWRlZmluZWQgZm9ybWF0IHRvIHVzZS5cbiAgICovXG4gIEBJbnB1dCgpIGZvcm1hdDogJ2JpZy1lbmRpYW4nIHwgJ2xpdHRsZS1lbmRpYW4nIHwgJ21pZGRsZS1lbmRpYW4nO1xuXG4gIC8qKlxuICAgKiBEZWxpbWl0ZXIgdG8gdXNlIG9uIHByZS1kZWZpbmVkIGZvcm1hdHMuXG4gICAqL1xuICBASW5wdXQoKSBkZWxpbWl0ZXI7XG5cbiAgLyoqXG4gICAqIERpc2FibGUgaW5wdXQgYW5kIGNhbGVuZGFyLlxuICAgKi9cbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGRpc2FibGVkOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBBbGlnbnMgdGhlIHJpZ2h0IG9yIGxlZnQgc2lkZSBvZiB0aGUgZHJvcGRvd24gbWVudSB3aXRoIHRoZSByZXNwZWN0aXZlIHNpZGUgb2YgdGhlIGlucHV0LlxuICAgKi9cbiAgQElucHV0KCkgZHJvcGRvd25BbGlnbjogJ2xlZnQnIHwgJ3JpZ2h0JztcblxuICAvKipcbiAgICogVGhlIGRhdGUgdmFsdWUuXG4gICAqL1xuICBASW5wdXQoKSBzZXQgdmFsdWUodmFsdWU6IERhdGUgfCBzdHJpbmcgfCBudWxsKSB7XG4gICAgaWYgKHZhbHVlID09PSB0aGlzLl92YWx1ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xuXG4gICAgaWYgKHRoaXMudmFsdWUgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICB0aGlzLmRhdGUgPSB0aGlzLnZhbHVlO1xuICAgICAgdGhpcy5mb3JtYXRJbnB1dFZhbHVlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudXBkYXRlSW5wdXRWYWx1ZSg8c3RyaW5nPnZhbHVlIHx8ICcnKTtcbiAgICB9XG4gIH1cbiAgZ2V0IHZhbHVlKCk6IERhdGUgfCBzdHJpbmcgfCBudWxsIHtcbiAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogV2hldGhlciB0byBvcGVuIHRoZSBkYXRlcGlja2VyIHdoZW4gYSBtb3VzZSB1c2VyIGNsaWNrcyBvbiB0aGUgaW5wdXQuXG4gICAqL1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgb3Blbk9uSW5wdXRDbGljazogYm9vbGVhbjtcblxuICAvKipcbiAgICogRW1pdHMgd2hlbiBzZWxlY3RlZCBkYXRlIGNoYW5nZXMuXG4gICAqL1xuICBAT3V0cHV0KCkgdmFsdWVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPERhdGUgfCBzdHJpbmcgfCBudWxsPigpO1xuXG4gIGlucHV0RWw6IElEYXRlcGlja2VySW5wdXQ7XG5cbiAgLy8gQENvbnRlbnRDaGlsZCgnaW5wdXRFbCcsIHsgc3RhdGljOiBmYWxzZSB9KSBpbnB1dEVsOiBTcXVhcmVDb25maWc7XG5cbiAgQFZpZXdDaGlsZCgnY2RrT3ZlcmxheScpIGNka092ZXJsYXk6IENka0Nvbm5lY3RlZE92ZXJsYXk7XG5cbiAgLyoqXG4gICAqIFRoZSBtaW5pbXVtIHZhbGlkIGRhdGUuXG4gICAqL1xuICBASW5wdXQoKSBtaW46IERhdGU7XG5cbiAgLyoqXG4gICAqIFRoZSBtYXhpbXVtIHZhbGlkIGRhdGUuXG4gICAqL1xuICBASW5wdXQoKSBtYXg6IERhdGU7XG5cbiAgLyoqXG4gICAqIFRleHQgZm9yIGJ1dHRvbiB0byBvcGVuIGNhbGVuZGFyLlxuICAgKi9cbiAgQElucHV0KCkgc2VsZWN0RGF0ZUxhYmVsID0gJ1NlbGVjdCBhIGRhdGUnO1xuXG4gIC8qKlxuICAgKiBXaGV0aGVyIHRvIHVzZSB0aGUgYWNjZXB0ZWQgcGF0dGVybiBhcyBwbGFjZWhvbGRlci5cbiAgICovXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBwYXR0ZXJuUGxhY2Vob2xkZXI6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIERhdGVwaWNrZXIgaW5wdXRzXG4gICAqL1xuICBASW5wdXQoKSBtb250aE5hbWVzOiBSZWFkb25seUFycmF5PHN0cmluZz47XG4gIEBJbnB1dCgpIGRheU5hbWVzU2hvcnQ6IFJlYWRvbmx5QXJyYXk8c3RyaW5nPjtcbiAgQElucHV0KCkgZGF5TmFtZXNMb25nOiBSZWFkb25seUFycmF5PHN0cmluZz47XG4gIEBJbnB1dCgpIGZpcnN0RGF5T2ZXZWVrOiBudW1iZXI7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBzaG93VG9kYXk6IGJvb2xlYW47XG4gIEBJbnB1dCgpIGRhdGVEaXNhYmxlZDogKGRhdGU6IERhdGUpID0+IGJvb2xlYW4gfCBudWxsID0gbnVsbDtcbiAgQElucHV0KCkgcmVsYXRpdmVZZWFyRnJvbTogbnVtYmVyO1xuICBASW5wdXQoKSByZWxhdGl2ZVllYXJUbzogbnVtYmVyO1xuICBASW5wdXQoKSB0b2RheUxhYmVsOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHByZXZpb3VzTW9udGhMYWJlbDogc3RyaW5nO1xuICBASW5wdXQoKSBuZXh0TW9udGhMYWJlbDogc3RyaW5nO1xuXG4gIGRhdGU6IERhdGU7XG5cbiAgdWlkID0gdW5pcXVlSWQoJ2RhdGVwaWNrZXItaW5wdXQnKTtcblxuICBvdmVybGF5UG9zaXRpb25zOiBDb25uZWN0aW9uUG9zaXRpb25QYWlyW107XG5cbiAgc2V0IG9wZW4ob3BlbjogYm9vbGVhbikge1xuICAgIHRoaXMuX29wZW4ubmV4dChvcGVuKTtcbiAgfVxuICBnZXQgb3BlbigpIHtcbiAgICByZXR1cm4gdGhpcy5fb3Blbi52YWx1ZTtcbiAgfVxuXG4gIHByaXZhdGUgX29wZW4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KGZhbHNlKTtcblxuICBwcml2YXRlIF92YWx1ZTogRGF0ZSB8IHN0cmluZyB8IG51bGwgPSBudWxsO1xuXG4gIHByaXZhdGUgcGF0dGVybjogc3RyaW5nO1xuXG4gIHByaXZhdGUgY29uZmlnOiBOZ2xEYXRlcGlja2VyQ29uZmlnO1xuXG4gIHByaXZhdGUgZm9jdXNUcmFwOiBGb2N1c1RyYXA7XG5cbiAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgQEluamVjdChOR0xfREFURVBJQ0tFUl9DT05GSUcpIGRlZmF1bHRDb25maWc6IE5nbERhdGVwaWNrZXJDb25maWcsXG4gICAgICAgICAgICAgIEBJbmplY3QoTE9DQUxFX0lEKSBsb2NhbGU6IHN0cmluZyxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50UmVmLFxuICAgICAgICAgICAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgICAgICAgICAgIHByaXZhdGUgY2Q6IENoYW5nZURldGVjdG9yUmVmLFxuICAgICAgICAgICAgICBwcml2YXRlIGhvc3RTZXJ2aWNlOiBIb3N0U2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBmb2N1c1RyYXBGYWN0b3J5OiBGb2N1c1RyYXBGYWN0b3J5LFxuICAgICAgICAgICAgICBwcml2YXRlIGFkYXB0ZXI6IE5nbERhdGVBZGFwdGVyKSB7XG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ3NsZHMtZm9ybS1lbGVtZW50Jyk7XG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ3NsZHMtZHJvcGRvd24tdHJpZ2dlcicpO1xuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICdzbGRzLWRyb3Bkb3duLXRyaWdnZXJfY2xpY2snKTtcblxuICAgIHRoaXMuY29uZmlnID0geyAuLi5uZXcgTmdsRGF0ZXBpY2tlckNvbmZpZyhsb2NhbGUpLCAuLi5kZWZhdWx0Q29uZmlnIH07XG4gICAgdGhpcy5mb3JtYXQgPSB0aGlzLmNvbmZpZy5mb3JtYXQ7XG4gICAgdGhpcy5kZWxpbWl0ZXIgPSB0aGlzLmNvbmZpZy5kZWxpbWl0ZXI7XG4gICAgdGhpcy5zZXRQb3NpdGlvbnModGhpcy5jb25maWcuZHJvcGRvd25BbGlnbik7XG4gICAgdGhpcy5tb250aE5hbWVzID0gdGhpcy5jb25maWcubW9udGhOYW1lcztcbiAgICB0aGlzLmRheU5hbWVzU2hvcnQgPSB0aGlzLmNvbmZpZy5kYXlOYW1lc1Nob3J0O1xuICAgIHRoaXMuZGF5TmFtZXNMb25nID0gdGhpcy5jb25maWcuZGF5TmFtZXNMb25nO1xuICAgIHRoaXMuZmlyc3REYXlPZldlZWsgPSB0aGlzLmNvbmZpZy5maXJzdERheU9mV2VlaztcbiAgICB0aGlzLnNob3dUb2RheSA9IHRoaXMuY29uZmlnLnNob3dUb2RheTtcbiAgICB0aGlzLnJlbGF0aXZlWWVhckZyb20gPSB0aGlzLmNvbmZpZy5yZWxhdGl2ZVllYXJGcm9tO1xuICAgIHRoaXMucmVsYXRpdmVZZWFyVG8gPSB0aGlzLmNvbmZpZy5yZWxhdGl2ZVllYXJUbztcbiAgICB0aGlzLm9wZW5PbklucHV0Q2xpY2sgPSB0aGlzLmNvbmZpZy5vcGVuT25JbnB1dENsaWNrO1xuICAgIHRoaXMudG9kYXlMYWJlbCA9IHRoaXMuY29uZmlnLnRvZGF5TGFiZWw7XG4gICAgdGhpcy5wcmV2aW91c01vbnRoTGFiZWwgPSB0aGlzLmNvbmZpZy5wcmV2aW91c01vbnRoTGFiZWw7XG4gICAgdGhpcy5uZXh0TW9udGhMYWJlbCA9IHRoaXMuY29uZmlnLm5leHRNb250aExhYmVsO1xuICAgIHRoaXMucGF0dGVyblBsYWNlaG9sZGVyID0gdGhpcy5jb25maWcucGF0dGVyblBsYWNlaG9sZGVyO1xuICB9XG5cbiAgb25DaGFuZ2U6IEZ1bmN0aW9uIHwgbnVsbCA9IG51bGw7XG5cbiAgb25Ub3VjaGVkID0gKCkgPT4ge307XG5cbiAgdmFsaWRhdG9yQ2hhbmdlID0gKCkgPT4ge307XG5cbiAgdmFsaWRhdGUoYzogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwge1xuICAgIGNvbnN0IHZhbHVlID0gYy52YWx1ZTtcblxuICAgIGlmICghdmFsdWUpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGlmICghKHRoaXMudmFsdWUgaW5zdGFuY2VvZiBEYXRlKSkge1xuICAgICAgcmV0dXJuIHsgJ25nbERhdGVwaWNrZXJJbnB1dCc6IHsgaW52YWxpZDogYy52YWx1ZSB9IH07XG4gICAgfVxuXG4gICAgY29uc3QgZGF0ZSA9IHBhcnNlRGF0ZSh2YWx1ZSk7XG4gICAgaWYgKGlzRGlzYWJsZWQoZGF0ZSwgdGhpcy5kYXRlRGlzYWJsZWQsIHBhcnNlRGF0ZSh0aGlzLm1pbiksIHBhcnNlRGF0ZSh0aGlzLm1heCkpKSB7XG4gICAgICByZXR1cm4geyAnbmdsRGF0ZXBpY2tlcklucHV0JzogeyBkaXNhYmxlZDogYy52YWx1ZSB9IH07XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB3cml0ZVZhbHVlKHZhbHVlOiBEYXRlKSB7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAodmFsdWU6IGFueSkgPT4gYW55KTogdm9pZCB7IHRoaXMub25DaGFuZ2UgPSBmbjsgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiBhbnkpOiB2b2lkIHsgdGhpcy5vblRvdWNoZWQgPSBmbjsgfVxuXG4gIHJlZ2lzdGVyT25WYWxpZGF0b3JDaGFuZ2UoZm46ICgpID0+IHZvaWQpOiB2b2lkIHsgdGhpcy52YWxpZGF0b3JDaGFuZ2UgPSBmbjsgfVxuXG4gIHNldERpc2FibGVkU3RhdGUoZGlzYWJsZWQ6IGJvb2xlYW4pIHsgdGhpcy5kaXNhYmxlZCA9IGRpc2FibGVkOyB9XG5cbiAgb25CbHVyKCkge1xuICAgIGlmICh0aGlzLnZhbHVlIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgdGhpcy51cGRhdGVJbnB1dFZhbHVlKCk7XG4gICAgfVxuICAgIHRoaXMub25Ub3VjaGVkKCk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLl9vcGVuLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLnNldEhvc3RDbGFzcygpO1xuICAgICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcbiAgICB9KTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICBpZiAoY2hhbmdlcy5mb3JtYXQgfHwgY2hhbmdlcy5kZWxpbWl0ZXIpIHtcbiAgICAgIHRoaXMuc2V0UGF0dGVybigpO1xuICAgICAgaWYgKHRoaXMudmFsdWUgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgIHRoaXMudXBkYXRlSW5wdXRWYWx1ZSgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChjaGFuZ2VzLmRyb3Bkb3duQWxpZ24pIHtcbiAgICAgIHRoaXMuc2V0UG9zaXRpb25zKHRoaXMuZHJvcGRvd25BbGlnbik7XG4gICAgfVxuXG4gICAgaWYgKGNoYW5nZXMubWluIHx8IGNoYW5nZXMubWF4KSB7XG4gICAgICB0aGlzLnZhbGlkYXRvckNoYW5nZSgpO1xuICAgIH1cblxuICAgIGlmICgoY2hhbmdlcy5wYXR0ZXJuUGxhY2Vob2xkZXIgfHwgY2hhbmdlcy5mb3JtYXQgfHwgY2hhbmdlcy5kZWxpbWl0ZXIpICYmIHRoaXMucGF0dGVyblBsYWNlaG9sZGVyKSB7XG4gICAgICB0aGlzLmlucHV0RWwuc2V0UGxhY2Vob2xkZXIodGhpcy5nZXRQYXR0ZXJuKCkudG9Mb2NhbGVVcHBlckNhc2UoKSk7XG4gICAgfVxuXG4gICAgaWYgKGNoYW5nZXMuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuaW5wdXRFbC5zZXREaXNhYmxlZCh0aGlzLmRpc2FibGVkKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLmNsb3NlQ2FsZW5kYXIoZmFsc2UpO1xuICB9XG5cbiAgb25LZXlib2FyZElucHV0KGV2dDogS2V5Ym9hcmRFdmVudCkge1xuICAgIGNvbnN0IGtleUNvZGUgPSBldnQua2V5Q29kZTtcblxuICAgIGlmICghdGhpcy5vcGVuICYmIChrZXlDb2RlID09PSBET1dOX0FSUk9XIHx8IGtleUNvZGUgPT09IFVQX0FSUk9XKSkge1xuICAgICAgdGhpcy5vcGVuQ2FsZW5kYXIoKTtcbiAgICB9XG4gIH1cblxuICBvbklucHV0Q2hhbmdlKCkge1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5pbnB1dEVsLmVsZW1lbnQubmF0aXZlRWxlbWVudC52YWx1ZTtcblxuICAgIGNvbnN0IGRhdGUgPSB0aGlzLmRhdGVQYXJzZSh2YWx1ZSk7XG4gICAgdGhpcy5lbWl0U2VsZWN0aW9uKGRhdGUgfHwgdmFsdWUpO1xuICB9XG5cbiAgb3BlbkNhbGVuZGFyKCkge1xuICAgIHRoaXMub3BlbiA9IHRydWU7XG4gIH1cblxuICBvbkF0dGFjaCgpIHtcbiAgICB0aGlzLmZvY3VzVHJhcCA9IHRoaXMuZm9jdXNUcmFwRmFjdG9yeS5jcmVhdGUodGhpcy5jZGtPdmVybGF5Lm92ZXJsYXlSZWYub3ZlcmxheUVsZW1lbnQpO1xuICB9XG5cbiAgb25EZXRhY2goKSB7XG4gICAgaWYgKHRoaXMub3Blbikge1xuICAgICAgdGhpcy5jbG9zZUNhbGVuZGFyKCk7XG4gICAgfVxuICB9XG5cbiAgY2xvc2VDYWxlbmRhcihmb2N1c0lucHV0ID0gdHJ1ZSkge1xuICAgIHRoaXMub3BlbiA9IGZhbHNlO1xuXG4gICAgaWYgKHRoaXMuZm9jdXNUcmFwKSB7XG4gICAgICB0aGlzLmZvY3VzVHJhcC5kZXN0cm95KCk7XG4gICAgICB0aGlzLmZvY3VzVHJhcCA9IG51bGw7XG4gICAgfVxuXG4gICAgaWYgKGZvY3VzSW5wdXQpIHtcbiAgICAgIHRoaXMuaW5wdXRFbC5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICB9XG4gIH1cblxuICBvblRyaWdnZXJDbGljayhvcmlnaW46ICdpbnB1dCcgfCAnYnV0dG9uJykge1xuICAgIGlmIChvcmlnaW4gPT09ICdpbnB1dCcgJiYgIXRoaXMub3Blbk9uSW5wdXRDbGljaykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5vcGVuKSB7XG4gICAgICB0aGlzLm9wZW5DYWxlbmRhcigpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNsb3NlQ2FsZW5kYXIoZmFsc2UpO1xuICAgIH1cbiAgfVxuXG4gIHBpY2tlclNlbGVjdGlvbihkYXRlOiBEYXRlKSB7XG4gICAgdGhpcy5lbWl0U2VsZWN0aW9uKGRhdGUpO1xuICAgIHRoaXMuY2xvc2VDYWxlbmRhcigpO1xuICB9XG5cbiAgdXBkYXRlRGF0ZXBpY2tlclNpemUod2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIpIHtcbiAgICB0aGlzLm5nWm9uZS5vblN0YWJsZS5hc09ic2VydmFibGUoKS5waXBlKHRha2UoMSkpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICBjb25zdCB7IG92ZXJsYXlSZWYgfSA9IHRoaXMuY2RrT3ZlcmxheTtcbiAgICAgIG92ZXJsYXlSZWYudXBkYXRlU2l6ZSh7XG4gICAgICAgIG1pbldpZHRoOiB3aWR0aCxcbiAgICAgICAgbWluSGVpZ2h0OiBoZWlnaHQgKyA0LFxuICAgICAgfSk7XG4gICAgICBvdmVybGF5UmVmLnVwZGF0ZVBvc2l0aW9uKCk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIHNldFBvc2l0aW9ucyhhbGlnbjogJ2xlZnQnIHwgJ3JpZ2h0Jykge1xuICAgIHRoaXMub3ZlcmxheVBvc2l0aW9ucyA9IFsuLi5ERUZBVUxUX0RST1BET1dOX1BPU0lUSU9OU1thbGlnbl1dO1xuICB9XG5cbiAgcHJpdmF0ZSBmb3JtYXRJbnB1dFZhbHVlKCkge1xuICAgIGNvbnN0IGlucHV0VmFsdWUgPSB0aGlzLmlucHV0RWwuZWxlbWVudC5uYXRpdmVFbGVtZW50LnZhbHVlO1xuICAgIGlmICghaW5wdXRWYWx1ZSkge1xuICAgICAgdGhpcy51cGRhdGVJbnB1dFZhbHVlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGRhdGUgPSB0aGlzLnZhbHVlIGFzIERhdGU7XG4gICAgICBjb25zdCBkYXRlTm93ID0gdGhpcy5kYXRlUGFyc2UoaW5wdXRWYWx1ZSk7XG5cbiAgICAgIGlmICghZGF0ZU5vdyB8fCBkYXRlTm93LmdldEZ1bGxZZWFyKCkgIT09IGRhdGUuZ2V0RnVsbFllYXIoKSB8fCBkYXRlTm93LmdldE1vbnRoKCkgIT09IGRhdGUuZ2V0TW9udGgoKSB8fCBkYXRlTm93LmdldERhdGUoKSAhPT0gZGF0ZS5nZXREYXRlKCkpIHtcbiAgICAgICAgdGhpcy51cGRhdGVJbnB1dFZhbHVlKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVJbnB1dFZhbHVlKHZhbHVlOiBzdHJpbmcgPSB0aGlzLmRhdGVGb3JtYXQoPERhdGU+dGhpcy52YWx1ZSkpIHtcbiAgICB0aGlzLnJlbmRlcmVyLnNldFByb3BlcnR5KHRoaXMuaW5wdXRFbC5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICd2YWx1ZScsIHZhbHVlIHx8ICcnKTtcbiAgfVxuXG4gIHByaXZhdGUgZGF0ZVBhcnNlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5hZGFwdGVyLnBhcnNlKHZhbHVlLCB0aGlzLmdldFBhdHRlcm4oKSk7XG4gIH1cblxuICBwcml2YXRlIGRhdGVGb3JtYXQoZGF0ZTogRGF0ZSkge1xuICAgIHJldHVybiB0aGlzLmFkYXB0ZXIuZm9ybWF0KGRhdGUsIHRoaXMuZ2V0UGF0dGVybigpKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0UGF0dGVybigpIHtcbiAgICBpZiAoIXRoaXMucGF0dGVybikge1xuICAgICAgdGhpcy5zZXRQYXR0ZXJuKCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnBhdHRlcm47XG4gIH1cblxuICBwcml2YXRlIHNldFBhdHRlcm4oKSB7XG4gICAgdGhpcy5wYXR0ZXJuID0gdGhpcy5hZGFwdGVyLnBhdHRlcm4odGhpcy5mb3JtYXQgfHwgdGhpcy5jb25maWcuZm9ybWF0LCB0aGlzLmRlbGltaXRlciB8fCB0aGlzLmNvbmZpZy5kZWxpbWl0ZXIpO1xuICB9XG5cbiAgcHJpdmF0ZSBlbWl0U2VsZWN0aW9uKHZhbHVlOiBEYXRlIHwgc3RyaW5nKSB7XG4gICAgdGhpcy52YWx1ZUNoYW5nZS5lbWl0KHZhbHVlKTtcblxuICAgIGlmICh0aGlzLm9uQ2hhbmdlKSB7XG4gICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgICB0aGlzLm9uQ2hhbmdlKHZhbHVlKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHNldEhvc3RDbGFzcygpIHtcbiAgICB0aGlzLmhvc3RTZXJ2aWNlLnVwZGF0ZUNsYXNzKHRoaXMuZWxlbWVudCwge1xuICAgICAgW2BzbGRzLWlzLW9wZW5gXTogdGhpcy5vcGVuLFxuICAgIH0pO1xuICB9XG59XG4iXX0=
import { __decorate } from "tslib";
import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, ElementRef, Optional, Inject, ViewChild, LOCALE_ID } from '@angular/core';
import { ENTER, UP_ARROW, LEFT_ARROW, DOWN_ARROW, RIGHT_ARROW, PAGE_UP, PAGE_DOWN, HOME, END } from '@angular/cdk/keycodes';
import { uniqueId, trapEvent } from '../util/util';
import { InputBoolean, InputNumber } from '../util/convert';
import { NglDatepickerInput } from './input/datepicker-input';
import { NGL_DATEPICKER_CONFIG, NglDatepickerConfig } from './config';
import { numberOfDaysInMonth, getToday, isDisabled, compareDate, isSameMonth, parseDate } from './util';
import { NglDatepickerMonth } from './month';
const KEYBOARD_MOVES = {
    [UP_ARROW]: ['Move', -7],
    [LEFT_ARROW]: ['Move', -1],
    [DOWN_ARROW]: ['Move', 7],
    [RIGHT_ARROW]: ['Move', 1],
    [PAGE_UP]: ['MoveMonth', -1],
    [PAGE_DOWN]: ['MoveMonth', 1],
    [HOME]: ['MoveTo', 1],
    [END]: ['MoveTo', 31],
};
export class NglDatepicker {
    constructor(dtInput, defaultConfig, locale, element) {
        this.dtInput = dtInput;
        this.element = element;
        this.dateDisabled = null;
        this.dateChange = new EventEmitter();
        this.uid = uniqueId('datepicker');
        const config = Object.assign(Object.assign({}, new NglDatepickerConfig(locale)), defaultConfig);
        this.monthNames = config.monthNames;
        this.dayNamesShort = config.dayNamesShort;
        this.dayNamesLong = config.dayNamesLong;
        this.firstDayOfWeek = config.firstDayOfWeek;
        this.showToday = config.showToday;
        this.relativeYearFrom = config.relativeYearFrom;
        this.relativeYearTo = config.relativeYearTo;
        this.todayLabel = config.todayLabel;
        this.previousMonthLabel = config.previousMonthLabel;
        this.nextMonthLabel = config.nextMonthLabel;
    }
    set date(date) {
        this._date = parseDate(date);
    }
    ngOnInit() {
        this.setMinMaxDates();
        this.setCurrent(this._date || getToday());
    }
    ngOnChanges(changes) {
        if ((changes.date && changes.date.isFirstChange()) ||
            changes.relativeYearFrom || changes.relativeYearTo ||
            changes.min || changes.max) {
            this.setMinMaxDates();
        }
        if (changes.date) {
            this.setCurrent(this._date);
        }
    }
    moveYear(year) {
        this.setCurrent({ year: +year });
    }
    moveMonth(diff) {
        this.moveCalendar('MoveMonth', diff);
    }
    keyboardHandler(evt) {
        const keyCode = evt.keyCode;
        if (keyCode === ENTER) {
            trapEvent(evt);
            if (!this.isDisabledDate(this.current)) {
                this.select(this.current);
            }
            return;
        }
        const move = KEYBOARD_MOVES[keyCode];
        if (!move) {
            return;
        }
        // Handle keyboard event inside datepicker
        trapEvent(evt);
        const [code, param] = move;
        this.moveCalendar(code, param);
        this.focusActiveDay();
    }
    select(date) {
        if (date.disabled) {
            return;
        }
        const { year, month, day } = date;
        this.dateChange.emit(new Date(year, month, day));
    }
    selectToday() {
        const today = getToday();
        if (this.isDisabledDate(today)) {
            this.setCurrent(today);
        }
        else {
            this.dateChange.emit(new Date());
        }
    }
    ngAfterViewInit() {
        if (this.dtInput) {
            const el = this.element.nativeElement;
            this.dtInput.updateDatepickerSize(el.offsetWidth, el.offsetHeight);
            this.focusActiveDay();
        }
    }
    /** Whether the previous period button is disabled. */
    previousDisabled() {
        return this.minDate && isSameMonth(this.current, this.minDate);
    }
    /** Whether the next period button is disabled. */
    nextDisabled() {
        return this.maxDate && isSameMonth(this.current, this.maxDate);
    }
    focusActiveDay() {
        this.monthView.focusActiveDay();
    }
    moveCalendar(code, param) {
        const { year, month, day } = this.current;
        const date = new Date(year, month, day, 12);
        if (code === 'Move') {
            date.setDate(day + (+param));
            this.setCurrent({ year: date.getFullYear(), month: date.getMonth(), day: date.getDate() });
        }
        else if (code === 'MoveMonth') {
            date.setMonth(month + (+param), 1);
            this.setCurrent({ year: date.getFullYear(), month: date.getMonth(), day });
        }
        else if (code === 'MoveTo') {
            this.setCurrent({ day: +param });
        }
    }
    setCurrent(d, doRender = true) {
        this.current = Object.assign(Object.assign({}, this.current), d);
        // Keep current inside minimum/maximum range
        if (compareDate(this.current, this.minDate) < 0) {
            this.current = this.minDate;
        }
        else if (compareDate(this.current, this.maxDate) > 0) {
            this.current = this.maxDate;
        }
        if (doRender) {
            this.render();
        }
    }
    render() {
        const { year, month, day } = this.current;
        this.monthLabel = this.monthNames[month];
        // Keep current day inside limits of this month
        this.setCurrent({ day: Math.min(day, numberOfDaysInMonth(year, month)) }, false);
    }
    /** Date filter for the month */
    isDisabledDate(date) {
        return isDisabled(date, this.dateDisabled, this.minDate, this.maxDate);
    }
    setMinMaxDates() {
        const { year } = getToday();
        this.minDate = this.min ? parseDate(this.min) : { year: year + this.relativeYearFrom, month: 0, day: 1 };
        this.maxDate = this.max ? parseDate(this.max) : { year: year + this.relativeYearTo, month: 11, day: 31 };
    }
}
NglDatepicker.decorators = [
    { type: Component, args: [{
                selector: 'ngl-datepicker',
                template: "\n<div class=\"slds-datepicker__filter slds-grid\">\n  <div class=\"slds-datepicker__filter_month slds-grid slds-grid_align-spread slds-grow\">\n    <div class=\"slds-align-middle\">\n      <button class=\"slds-button slds-button_icon-container\" type=\"button\" (click)=\"moveMonth(-1)\" [disabled]=\"previousDisabled()\" [title]=\"previousMonthLabel\">\n        <svg class=\"slds-button__icon\" nglIconName=\"left\"></svg><span class=\"slds-assistive-text\">{{ previousMonthLabel }}</span>\n      </button>\n    </div>\n    <h2 class=\"slds-align-middle\" [id]=\"uid + '_month'\" aria-live=\"assertive\" aria-atomic=\"true\">{{ monthLabel }}</h2>\n    <div class=\"slds-align-middle\">\n      <button class=\"slds-button slds-button_icon-container\" type=\"button\" (click)=\"moveMonth(1)\" [disabled]=\"nextDisabled()\" [title]=\"nextMonthLabel\">\n        <svg class=\"slds-button__icon\" nglIconName=\"right\"></svg><span class=\"slds-assistive-text\">{{ nextMonthLabel }}</span>\n      </button>\n    </div>\n  </div>\n  <ngl-date-year class=\"slds-shrink-none\" [year]=\"current.year\" [from]=\"minDate\" [to]=\"maxDate\" (yearChange)=\"moveYear($event)\"></ngl-date-year>\n</div>\n<table class=\"datepicker__month\" role=\"grid\" [attr.aria-labelledby]=\"uid + '_month'\" (keydown)=\"keyboardHandler($event)\">\n  <thead>\n    <tr nglWeekdays [firstDayOfWeek]=\"firstDayOfWeek\" [dayNamesShort]=\"dayNamesShort\" [dayNamesLong]=\"dayNamesLong\"></tr>\n  </thead>\n  <tbody *ngIf=\"current\" nglDatepickerMonth [year]=\"current.year\" [month]=\"current.month\" [day]=\"current.day\" [selected]=\"_date\" [firstDayOfWeek]=\"firstDayOfWeek\" [minDate]=\"minDate\" [maxDate]=\"maxDate\" [dateDisabled]=\"dateDisabled\" (selectDate)=\"select($event)\"></tbody>\n</table>\n<button class=\"slds-button slds-align_absolute-center slds-text-link\" *ngIf=\"showToday\" (click)=\"selectToday()\">{{ todayLabel }}</button>",
                changeDetection: ChangeDetectionStrategy.OnPush,
                host: {
                    '[class.slds-datepicker]': 'true',
                },
                styles: [`:host { display: block; }`]
            },] }
];
NglDatepicker.ctorParameters = () => [
    { type: NglDatepickerInput, decorators: [{ type: Optional }, { type: Inject, args: [NglDatepickerInput,] }] },
    { type: NglDatepickerConfig, decorators: [{ type: Optional }, { type: Inject, args: [NGL_DATEPICKER_CONFIG,] }] },
    { type: String, decorators: [{ type: Inject, args: [LOCALE_ID,] }] },
    { type: ElementRef }
];
NglDatepicker.propDecorators = {
    monthNames: [{ type: Input }],
    dayNamesShort: [{ type: Input }],
    dayNamesLong: [{ type: Input }],
    dateDisabled: [{ type: Input }],
    date: [{ type: Input }],
    dateChange: [{ type: Output }],
    showToday: [{ type: Input }],
    firstDayOfWeek: [{ type: Input }],
    relativeYearFrom: [{ type: Input }],
    relativeYearTo: [{ type: Input }],
    min: [{ type: Input }],
    max: [{ type: Input }],
    todayLabel: [{ type: Input }],
    previousMonthLabel: [{ type: Input }],
    nextMonthLabel: [{ type: Input }],
    monthView: [{ type: ViewChild, args: [NglDatepickerMonth,] }]
};
__decorate([
    InputBoolean()
], NglDatepicker.prototype, "showToday", void 0);
__decorate([
    InputNumber()
], NglDatepicker.prototype, "firstDayOfWeek", void 0);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nLWxpZ2h0bmluZy9zcmMvbGliL2RhdGVwaWNrZXJzL2RhdGVwaWNrZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsdUJBQXVCLEVBQUUsVUFBVSxFQUN6QyxRQUFRLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBaUIsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hILE9BQU8sRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzVILE9BQU8sRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQ25ELE9BQU8sRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDNUQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDOUQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLG1CQUFtQixFQUFFLE1BQU0sVUFBVSxDQUFDO0FBQ3RFLE9BQU8sRUFBbUIsbUJBQW1CLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUN6SCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFFN0MsTUFBTSxjQUFjLEdBQUc7SUFDckIsQ0FBQyxRQUFRLENBQUMsRUFBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQztJQUMzQixDQUFDLFVBQVUsQ0FBQyxFQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzNCLENB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Ozs7WUFoT0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLDA0REFBZ0M7Z0JBQ2hDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxJQUFJLEVBQUU7b0JBQ0oseUJBQXlCLEVBQUUsTUFBTTtpQkFDbEM7eUJBQ1EsMkJBQTJCO2FBQ3JDOzs7WUF4QlEsa0JBQWtCLHVCQXdGWixRQUFRLFlBQUksTUFBTSxTQUFDLGtCQUFrQjtZQXZGcEIsbUJBQW1CLHVCQXdGcEMsUUFBUSxZQUFJLE1BQU0sU0FBQyxxQkFBcUI7eUNBQ3hDLE1BQU0sU0FBQyxTQUFTO1lBL0YyQyxVQUFVOzs7eUJBK0JqRixLQUFLOzRCQUNMLEtBQUs7MkJBQ0wsS0FBSzsyQkFDTCxLQUFLO21CQUlMLEtBQUs7eUJBR0wsTUFBTTt3QkFFTixLQUFLOzZCQUVMLEtBQUs7K0JBS0wsS0FBSzs2QkFLTCxLQUFLO2tCQUtMLEtBQUs7a0JBS0wsS0FBSzt5QkFLTCxLQUFLO2lDQUtMLEtBQUs7NkJBS0wsS0FBSzt3QkFXTCxTQUFTLFNBQUMsa0JBQWtCOztBQWhESjtJQUFmLFlBQVksRUFBRTtnREFBb0I7QUFFcEI7SUFBZCxXQUFXLEVBQUU7cURBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBFbGVtZW50UmVmLFxuICAgICAgICAgT25Jbml0LCBPbkNoYW5nZXMsIEFmdGVyVmlld0luaXQsIE9wdGlvbmFsLCBJbmplY3QsIFZpZXdDaGlsZCwgU2ltcGxlQ2hhbmdlcywgTE9DQUxFX0lEIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBFTlRFUiwgVVBfQVJST1csIExFRlRfQVJST1csIERPV05fQVJST1csIFJJR0hUX0FSUk9XLCBQQUdFX1VQLCBQQUdFX0RPV04sIEhPTUUsIEVORCB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9rZXljb2Rlcyc7XG5pbXBvcnQgeyB1bmlxdWVJZCwgdHJhcEV2ZW50IH0gZnJvbSAnLi4vdXRpbC91dGlsJztcbmltcG9ydCB7IElucHV0Qm9vbGVhbiwgSW5wdXROdW1iZXIgfSBmcm9tICcuLi91dGlsL2NvbnZlcnQnO1xuaW1wb3J0IHsgTmdsRGF0ZXBpY2tlcklucHV0IH0gZnJvbSAnLi9pbnB1dC9kYXRlcGlja2VyLWlucHV0JztcbmltcG9ydCB7IE5HTF9EQVRFUElDS0VSX0NPTkZJRywgTmdsRGF0ZXBpY2tlckNvbmZpZyB9IGZyb20gJy4vY29uZmlnJztcbmltcG9ydCB7IE5nbEludGVybmFsRGF0ZSwgbnVtYmVyT2ZEYXlzSW5Nb250aCwgZ2V0VG9kYXksIGlzRGlzYWJsZWQsIGNvbXBhcmVEYXRlLCBpc1NhbWVNb250aCwgcGFyc2VEYXRlIH0gZnJvbSAnLi91dGlsJztcbmltcG9ydCB7IE5nbERhdGVwaWNrZXJNb250aCB9IGZyb20gJy4vbW9udGgnO1xuXG5jb25zdCBLRVlCT0FSRF9NT1ZFUyA9IHtcbiAgW1VQX0FSUk9XXTogICAgWydNb3ZlJywgLTddLFxuICBbTEVGVF9BUlJPV106ICBbJ01vdmUnLCAtMV0sXG4gIFtET1dOX0FSUk9XXTogIFsnTW92ZScsIDddLFxuICBbUklHSFRfQVJST1ddOiBbJ01vdmUnLCAxXSxcbiAgW1BBR0VfVVBdOiAgICAgWydNb3ZlTW9udGgnLCAtMV0sXG4gIFtQQUdFX0RPV05dOiAgIFsnTW92ZU1vbnRoJywgMV0sXG4gIFtIT01FXTogICAgICAgIFsnTW92ZVRvJywgMV0sXG4gIFtFTkRdOiAgICAgICAgIFsnTW92ZVRvJywgMzFdLFxufTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmdsLWRhdGVwaWNrZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vZGF0ZXBpY2tlci5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLnNsZHMtZGF0ZXBpY2tlcl0nOiAndHJ1ZScsXG4gIH0sXG4gIHN0eWxlczogW2A6aG9zdCB7IGRpc3BsYXk6IGJsb2NrOyB9YF0sXG59KVxuZXhwb3J0IGNsYXNzIE5nbERhdGVwaWNrZXIgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgQWZ0ZXJWaWV3SW5pdCB7XG4gIEBJbnB1dCgpIG1vbnRoTmFtZXM6IFJlYWRvbmx5QXJyYXk8c3RyaW5nPjtcbiAgQElucHV0KCkgZGF5TmFtZXNTaG9ydDogUmVhZG9ubHlBcnJheTxzdHJpbmc+O1xuICBASW5wdXQoKSBkYXlOYW1lc0xvbmc6IFJlYWRvbmx5QXJyYXk8c3RyaW5nPjtcbiAgQElucHV0KCkgZGF0ZURpc2FibGVkOiAoZGF0ZTogRGF0ZSkgPT4gYm9vbGVhbiB8IG51bGwgPSBudWxsO1xuXG4gIF9kYXRlOiBOZ2xJbnRlcm5hbERhdGU7XG4gIGN1cnJlbnQ6IE5nbEludGVybmFsRGF0ZTtcbiAgQElucHV0KCkgc2V0IGRhdGUoZGF0ZTogRGF0ZSkge1xuICAgIHRoaXMuX2RhdGUgPSBwYXJzZURhdGUoZGF0ZSk7XG4gIH1cbiAgQE91dHB1dCgpIGRhdGVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHNob3dUb2RheTogYm9vbGVhbjtcblxuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBmaXJzdERheU9mV2VlazogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBPZmZzZXQgb2YgeWVhciBmcm9tIGN1cnJlbnQgeWVhciwgdGhhdCBjYW4gYmUgdGhlIG1pbmltdW0gb3B0aW9uIGluIHRoZSB5ZWFyIHNlbGVjdGlvbiBkcm9wZG93bi5cbiAgICovXG4gIEBJbnB1dCgpIHJlbGF0aXZlWWVhckZyb206IG51bWJlcjtcblxuICAvKipcbiAgICogT2Zmc2V0IG9mIHllYXIgZnJvbSBjdXJyZW50IHllYXIsIHRoYXQgY2FuIGJlIHRoZSBtYXhpbXVtIG9wdGlvbiBpbiB0aGUgeWVhciBzZWxlY3Rpb24gZHJvcGRvd24uXG4gICAqL1xuICBASW5wdXQoKSByZWxhdGl2ZVllYXJUbzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBUaGUgbWluaW11bSBkYXRlIHRoYXQgY2FuIGJlIHNlbGVjdGVkLlxuICAgKi9cbiAgQElucHV0KCkgbWluOiBEYXRlO1xuXG4gIC8qKlxuICAgKiBUaGUgbWF4aW11bSBkYXRlIHRoYXQgY2FuIGJlIHNlbGVjdGVkLlxuICAgKi9cbiAgQElucHV0KCkgbWF4OiBEYXRlO1xuXG4gIC8qKlxuICAgKiBMYWJlbCBvZiBzaG9ydGN1dCB0byBzZWxlY3QgY3VycmVudCBkYXRlLlxuICAgKi9cbiAgQElucHV0KCkgdG9kYXlMYWJlbDogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBMYWJlbCBmb3IgYnV0dG9uIHRvIGdvIHRvIHRoZSBwcmV2aW91cyBtb250aC5cbiAgICovXG4gIEBJbnB1dCgpIHByZXZpb3VzTW9udGhMYWJlbDogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBMYWJlbCBmb3IgYnV0dG9uIHRvIGdvIHRvIHRoZSBuZXh0IG1vbnRoLlxuICAgKi9cbiAgQElucHV0KCkgbmV4dE1vbnRoTGFiZWw6IHN0cmluZztcblxuXG4gIHdlZWtzOiBOZ2xJbnRlcm5hbERhdGVbXTtcbiAgdWlkID0gdW5pcXVlSWQoJ2RhdGVwaWNrZXInKTtcbiAgbW9udGhMYWJlbDogc3RyaW5nO1xuXG4gIG1pbkRhdGU6IE5nbEludGVybmFsRGF0ZTtcblxuICBtYXhEYXRlOiBOZ2xJbnRlcm5hbERhdGU7XG5cbiAgQFZpZXdDaGlsZChOZ2xEYXRlcGlja2VyTW9udGgpIG1vbnRoVmlldzogTmdsRGF0ZXBpY2tlck1vbnRoO1xuXG4gIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIEBJbmplY3QoTmdsRGF0ZXBpY2tlcklucHV0KSBwcml2YXRlIGR0SW5wdXQ6IE5nbERhdGVwaWNrZXJJbnB1dCxcbiAgICAgICAgICAgICAgQE9wdGlvbmFsKCkgQEluamVjdChOR0xfREFURVBJQ0tFUl9DT05GSUcpIGRlZmF1bHRDb25maWc6IE5nbERhdGVwaWNrZXJDb25maWcsXG4gICAgICAgICAgICAgIEBJbmplY3QoTE9DQUxFX0lEKSBsb2NhbGU6IHN0cmluZyxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50UmVmKSB7XG5cbiAgICBjb25zdCBjb25maWcgPSB7IC4uLm5ldyBOZ2xEYXRlcGlja2VyQ29uZmlnKGxvY2FsZSksIC4uLmRlZmF1bHRDb25maWcgfTtcbiAgICB0aGlzLm1vbnRoTmFtZXMgPSBjb25maWcubW9udGhOYW1lcztcbiAgICB0aGlzLmRheU5hbWVzU2hvcnQgPSBjb25maWcuZGF5TmFtZXNTaG9ydDtcbiAgICB0aGlzLmRheU5hbWVzTG9uZyA9IGNvbmZpZy5kYXlOYW1lc0xvbmc7XG4gICAgdGhpcy5maXJzdERheU9mV2VlayA9IGNvbmZpZy5maXJzdERheU9mV2VlaztcbiAgICB0aGlzLnNob3dUb2RheSA9IGNvbmZpZy5zaG93VG9kYXk7XG4gICAgdGhpcy5yZWxhdGl2ZVllYXJGcm9tID0gY29uZmlnLnJlbGF0aXZlWWVhckZyb207XG4gICAgdGhpcy5yZWxhdGl2ZVllYXJUbyA9IGNvbmZpZy5yZWxhdGl2ZVllYXJUbztcbiAgICB0aGlzLnRvZGF5TGFiZWwgPSBjb25maWcudG9kYXlMYWJlbDtcbiAgICB0aGlzLnByZXZpb3VzTW9udGhMYWJlbCA9IGNvbmZpZy5wcmV2aW91c01vbnRoTGFiZWw7XG4gICAgdGhpcy5uZXh0TW9udGhMYWJlbCA9IGNvbmZpZy5uZXh0TW9udGhMYWJlbDtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuc2V0TWluTWF4RGF0ZXMoKTtcbiAgICB0aGlzLnNldEN1cnJlbnQodGhpcy5fZGF0ZSB8fCBnZXRUb2RheSgpKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICBpZiAoKGNoYW5nZXMuZGF0ZSAmJiBjaGFuZ2VzLmRhdGUuaXNGaXJzdENoYW5nZSgpKSB8fFxuICAgICAgICBjaGFuZ2VzLnJlbGF0aXZlWWVhckZyb20gfHwgY2hhbmdlcy5yZWxhdGl2ZVllYXJUbyB8fFxuICAgICAgICBjaGFuZ2VzLm1pbiB8fCBjaGFuZ2VzLm1heCkge1xuICAgICAgdGhpcy5zZXRNaW5NYXhEYXRlcygpO1xuICAgIH1cbiAgICBpZiAoY2hhbmdlcy5kYXRlKSB7XG4gICAgICB0aGlzLnNldEN1cnJlbnQodGhpcy5fZGF0ZSk7XG4gICAgfVxuICB9XG5cbiAgbW92ZVllYXIoeWVhcjogc3RyaW5nIHwgbnVtYmVyKSB7XG4gICAgdGhpcy5zZXRDdXJyZW50KHsgeWVhcjogK3llYXIgfSk7XG4gIH1cblxuICBtb3ZlTW9udGgoZGlmZjogbnVtYmVyKSB7XG4gICAgdGhpcy5tb3ZlQ2FsZW5kYXIoJ01vdmVNb250aCcsIGRpZmYpO1xuICB9XG5cbiAga2V5Ym9hcmRIYW5kbGVyKGV2dDogS2V5Ym9hcmRFdmVudCkge1xuICAgIGNvbnN0IGtleUNvZGUgPSBldnQua2V5Q29kZTtcblxuICAgIGlmIChrZXlDb2RlID09PSBFTlRFUikge1xuICAgICAgdHJhcEV2ZW50KGV2dCk7XG4gICAgICBpZiAoIXRoaXMuaXNEaXNhYmxlZERhdGUodGhpcy5jdXJyZW50KSkge1xuICAgICAgICB0aGlzLnNlbGVjdCh0aGlzLmN1cnJlbnQpO1xuICAgICAgfVxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IG1vdmUgPSBLRVlCT0FSRF9NT1ZFU1trZXlDb2RlXTtcbiAgICBpZiAoIW1vdmUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBIYW5kbGUga2V5Ym9hcmQgZXZlbnQgaW5zaWRlIGRhdGVwaWNrZXJcbiAgICB0cmFwRXZlbnQoZXZ0KTtcblxuICAgIGNvbnN0IFtjb2RlLCBwYXJhbV0gPSBtb3ZlO1xuICAgIHRoaXMubW92ZUNhbGVuZGFyKGNvZGUsIHBhcmFtKTtcbiAgICB0aGlzLmZvY3VzQWN0aXZlRGF5KCk7XG4gIH1cblxuICBzZWxlY3QoZGF0ZTogTmdsSW50ZXJuYWxEYXRlKSB7XG4gICAgaWYgKGRhdGUuZGlzYWJsZWQpIHsgcmV0dXJuOyB9XG5cbiAgICBjb25zdCB7eWVhciwgbW9udGgsIGRheX0gPSBkYXRlO1xuICAgIHRoaXMuZGF0ZUNoYW5nZS5lbWl0KG5ldyBEYXRlKHllYXIsIG1vbnRoLCBkYXkpKTtcbiAgfVxuXG4gIHNlbGVjdFRvZGF5KCkge1xuICAgIGNvbnN0IHRvZGF5ID0gZ2V0VG9kYXkoKTtcbiAgICBpZiAodGhpcy5pc0Rpc2FibGVkRGF0ZSh0b2RheSkpIHtcbiAgICAgIHRoaXMuc2V0Q3VycmVudCh0b2RheSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZGF0ZUNoYW5nZS5lbWl0KG5ldyBEYXRlKCkpO1xuICAgIH1cbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICBpZiAodGhpcy5kdElucHV0KSB7XG4gICAgICBjb25zdCBlbCA9IHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50O1xuICAgICAgdGhpcy5kdElucHV0LnVwZGF0ZURhdGVwaWNrZXJTaXplKGVsLm9mZnNldFdpZHRoLCBlbC5vZmZzZXRIZWlnaHQpO1xuXG4gICAgICB0aGlzLmZvY3VzQWN0aXZlRGF5KCk7XG4gICAgfVxuICB9XG5cbiAgLyoqIFdoZXRoZXIgdGhlIHByZXZpb3VzIHBlcmlvZCBidXR0b24gaXMgZGlzYWJsZWQuICovXG4gIHByZXZpb3VzRGlzYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMubWluRGF0ZSAmJiBpc1NhbWVNb250aCh0aGlzLmN1cnJlbnQsIHRoaXMubWluRGF0ZSk7XG4gIH1cblxuICAvKiogV2hldGhlciB0aGUgbmV4dCBwZXJpb2QgYnV0dG9uIGlzIGRpc2FibGVkLiAqL1xuICBuZXh0RGlzYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMubWF4RGF0ZSAmJiBpc1NhbWVNb250aCh0aGlzLmN1cnJlbnQsIHRoaXMubWF4RGF0ZSk7XG4gIH1cblxuICBwcml2YXRlIGZvY3VzQWN0aXZlRGF5KCkge1xuICAgIHRoaXMubW9udGhWaWV3LmZvY3VzQWN0aXZlRGF5KCk7XG4gIH1cblxuICBwcml2YXRlIG1vdmVDYWxlbmRhcihjb2RlOiAnTW92ZScgfCAnTW92ZU1vbnRoJyB8ICdNb3ZlVG8nLCBwYXJhbTogbnVtYmVyKSB7XG4gICAgY29uc3QgeyB5ZWFyLCBtb250aCwgZGF5IH0gPSB0aGlzLmN1cnJlbnQ7XG4gICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKHllYXIsIG1vbnRoLCBkYXksIDEyKTtcblxuICAgIGlmIChjb2RlID09PSAnTW92ZScpIHtcbiAgICAgIGRhdGUuc2V0RGF0ZShkYXkgKyAoK3BhcmFtKSk7XG4gICAgICB0aGlzLnNldEN1cnJlbnQoeyB5ZWFyOiBkYXRlLmdldEZ1bGxZZWFyKCksIG1vbnRoOiBkYXRlLmdldE1vbnRoKCksIGRheTogZGF0ZS5nZXREYXRlKCkgfSk7XG4gICAgfSBlbHNlIGlmIChjb2RlID09PSAnTW92ZU1vbnRoJykge1xuICAgICAgZGF0ZS5zZXRNb250aChtb250aCArICgrcGFyYW0pLCAxKTtcbiAgICAgIHRoaXMuc2V0Q3VycmVudCh7IHllYXI6IGRhdGUuZ2V0RnVsbFllYXIoKSwgbW9udGg6IGRhdGUuZ2V0TW9udGgoKSwgZGF5IH0pO1xuICAgIH0gZWxzZSBpZiAoY29kZSA9PT0gJ01vdmVUbycpIHtcbiAgICAgIHRoaXMuc2V0Q3VycmVudCh7IGRheTogK3BhcmFtIH0pO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc2V0Q3VycmVudChkOiBQYXJ0aWFsPE5nbEludGVybmFsRGF0ZT4sIGRvUmVuZGVyID0gdHJ1ZSkge1xuICAgIHRoaXMuY3VycmVudCA9IHsgLi4udGhpcy5jdXJyZW50LCAuLi5kIH07XG5cbiAgICAvLyBLZWVwIGN1cnJlbnQgaW5zaWRlIG1pbmltdW0vbWF4aW11bSByYW5nZVxuICAgIGlmIChjb21wYXJlRGF0ZSh0aGlzLmN1cnJlbnQsIHRoaXMubWluRGF0ZSkgPCAwKSB7XG4gICAgICB0aGlzLmN1cnJlbnQgPSB0aGlzLm1pbkRhdGU7XG4gICAgfSBlbHNlIGlmIChjb21wYXJlRGF0ZSh0aGlzLmN1cnJlbnQsIHRoaXMubWF4RGF0ZSkgPiAwKSB7XG4gICAgICB0aGlzLmN1cnJlbnQgPSB0aGlzLm1heERhdGU7XG4gICAgfVxuXG4gICAgaWYgKGRvUmVuZGVyKSB7XG4gICAgICB0aGlzLnJlbmRlcigpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgeWVhciwgbW9udGgsIGRheSB9ID0gdGhpcy5jdXJyZW50O1xuICAgIHRoaXMubW9udGhMYWJlbCA9IHRoaXMubW9udGhOYW1lc1ttb250aF07XG5cbiAgICAvLyBLZWVwIGN1cnJlbnQgZGF5IGluc2lkZSBsaW1pdHMgb2YgdGhpcyBtb250aFxuICAgIHRoaXMuc2V0Q3VycmVudCh7IGRheTogTWF0aC5taW4oZGF5LCBudW1iZXJPZkRheXNJbk1vbnRoKHllYXIsIG1vbnRoKSkgfSwgZmFsc2UpO1xuICB9XG5cbiAgLyoqIERhdGUgZmlsdGVyIGZvciB0aGUgbW9udGggKi9cbiAgcHJpdmF0ZSBpc0Rpc2FibGVkRGF0ZShkYXRlOiBOZ2xJbnRlcm5hbERhdGUpOiBib29sZWFuIHtcbiAgICByZXR1cm4gaXNEaXNhYmxlZChkYXRlLCB0aGlzLmRhdGVEaXNhYmxlZCwgdGhpcy5taW5EYXRlLCB0aGlzLm1heERhdGUpO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRNaW5NYXhEYXRlcygpIHtcbiAgICBjb25zdCB7IHllYXIgfSA9IGdldFRvZGF5KCk7XG4gICAgdGhpcy5taW5EYXRlID0gdGhpcy5taW4gPyBwYXJzZURhdGUodGhpcy5taW4pIDogeyB5ZWFyOiB5ZWFyICsgdGhpcy5yZWxhdGl2ZVllYXJGcm9tLCBtb250aDogMCwgZGF5OiAxIH07XG4gICAgdGhpcy5tYXhEYXRlID0gdGhpcy5tYXggPyBwYXJzZURhdGUodGhpcy5tYXgpIDogeyB5ZWFyOiB5ZWFyICsgdGhpcy5yZWxhdGl2ZVllYXJUbywgbW9udGg6IDExLCBkYXk6IDMxIH07XG4gIH1cbn1cbiJdfQ==
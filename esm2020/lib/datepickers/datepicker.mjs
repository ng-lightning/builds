import { __decorate } from "tslib";
import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, Optional, Inject, ViewChild, LOCALE_ID } from '@angular/core';
import { ENTER, UP_ARROW, LEFT_ARROW, DOWN_ARROW, RIGHT_ARROW, PAGE_UP, PAGE_DOWN, HOME, END } from '@angular/cdk/keycodes';
import { uniqueId, trapEvent } from '../util/util';
import { InputBoolean, InputNumber } from '../util/convert';
import { NGL_DATEPICKER_CONFIG, NglDatepickerConfig } from './config';
import { numberOfDaysInMonth, getToday, isDisabled, compareDate, isSameMonth, parseDate } from './util';
import { NglDatepickerMonth } from './month';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../icons/svg";
import * as i3 from "./weekdays";
import * as i4 from "./year";
import * as i5 from "./month";
import * as i6 from "./config";
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
    constructor(defaultConfig, locale, element) {
        this.element = element;
        this.dateDisabled = null;
        this.updateSize = new EventEmitter();
        this.dateChange = new EventEmitter();
        this.uid = uniqueId('datepicker');
        const config = { ...new NglDatepickerConfig(locale), ...defaultConfig };
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
        const { offsetWidth, offsetHeight } = this.element.nativeElement;
        this.updateSize.emit({ width: offsetWidth, height: offsetHeight });
        this.focusActiveDay();
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
        this.current = { ...this.current, ...d };
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
NglDatepicker.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglDatepicker, deps: [{ token: NGL_DATEPICKER_CONFIG, optional: true }, { token: LOCALE_ID }, { token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
NglDatepicker.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: NglDatepicker, selector: "ngl-datepicker", inputs: { monthNames: "monthNames", dayNamesShort: "dayNamesShort", dayNamesLong: "dayNamesLong", dateDisabled: "dateDisabled", date: "date", showToday: "showToday", firstDayOfWeek: "firstDayOfWeek", relativeYearFrom: "relativeYearFrom", relativeYearTo: "relativeYearTo", min: "min", max: "max", todayLabel: "todayLabel", previousMonthLabel: "previousMonthLabel", nextMonthLabel: "nextMonthLabel" }, outputs: { updateSize: "updateSize", dateChange: "dateChange" }, host: { properties: { "class.slds-datepicker": "true" } }, viewQueries: [{ propertyName: "monthView", first: true, predicate: NglDatepickerMonth, descendants: true }], usesOnChanges: true, ngImport: i0, template: "\n<div class=\"slds-datepicker__filter slds-grid\">\n  <div class=\"slds-datepicker__filter_month slds-grid slds-grid_align-spread slds-grow\">\n    <div class=\"slds-align-middle\">\n      <button class=\"slds-button slds-button_icon-container\" type=\"button\" (click)=\"moveMonth(-1)\" [disabled]=\"previousDisabled()\" [title]=\"previousMonthLabel\">\n        <svg class=\"slds-button__icon\" nglIconName=\"left\"></svg><span class=\"slds-assistive-text\">{{ previousMonthLabel }}</span>\n      </button>\n    </div>\n    <h2 class=\"slds-align-middle\" [id]=\"uid + '_month'\" aria-live=\"assertive\" aria-atomic=\"true\">{{ monthLabel }}</h2>\n    <div class=\"slds-align-middle\">\n      <button class=\"slds-button slds-button_icon-container\" type=\"button\" (click)=\"moveMonth(1)\" [disabled]=\"nextDisabled()\" [title]=\"nextMonthLabel\">\n        <svg class=\"slds-button__icon\" nglIconName=\"right\"></svg><span class=\"slds-assistive-text\">{{ nextMonthLabel }}</span>\n      </button>\n    </div>\n  </div>\n  <ngl-date-year class=\"slds-shrink-none\" [year]=\"current.year\" [from]=\"minDate\" [to]=\"maxDate\" (yearChange)=\"moveYear($event)\"></ngl-date-year>\n</div>\n<table class=\"datepicker__month\" role=\"grid\" [attr.aria-labelledby]=\"uid + '_month'\" (keydown)=\"keyboardHandler($event)\">\n  <thead>\n    <tr nglWeekdays [firstDayOfWeek]=\"firstDayOfWeek\" [dayNamesShort]=\"dayNamesShort\" [dayNamesLong]=\"dayNamesLong\"></tr>\n  </thead>\n  <tbody *ngIf=\"current\" nglDatepickerMonth [year]=\"current.year\" [month]=\"current.month\" [day]=\"current.day\" [selected]=\"_date\" [firstDayOfWeek]=\"firstDayOfWeek\" [minDate]=\"minDate\" [maxDate]=\"maxDate\" [dateDisabled]=\"dateDisabled\" (selectDate)=\"select($event)\"></tbody>\n</table>\n<button class=\"slds-button slds-align_absolute-center slds-text-link\" *ngIf=\"showToday\" (click)=\"selectToday()\">{{ todayLabel }}</button>", styles: [":host{display:block}\n"], dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i2.NglIconSvg, selector: "svg[nglIconName]", inputs: ["nglIconName", "xPos"] }, { kind: "component", type: i3.NglDatepickerWeekdays, selector: "tr[nglWeekdays]", inputs: ["dayNamesShort", "dayNamesLong", "firstDayOfWeek"] }, { kind: "component", type: i4.NglDatepickerYear, selector: "ngl-date-year", inputs: ["from", "to", "year"], outputs: ["yearChange"] }, { kind: "component", type: i5.NglDatepickerMonth, selector: "[nglDatepickerMonth]", inputs: ["selected", "year", "month", "day", "firstDayOfWeek", "minDate", "maxDate", "dateDisabled"], outputs: ["selectDate"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
__decorate([
    InputBoolean()
], NglDatepicker.prototype, "showToday", void 0);
__decorate([
    InputNumber()
], NglDatepicker.prototype, "firstDayOfWeek", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglDatepicker, decorators: [{
            type: Component,
            args: [{ selector: 'ngl-datepicker', changeDetection: ChangeDetectionStrategy.OnPush, host: {
                        '[class.slds-datepicker]': 'true',
                    }, template: "\n<div class=\"slds-datepicker__filter slds-grid\">\n  <div class=\"slds-datepicker__filter_month slds-grid slds-grid_align-spread slds-grow\">\n    <div class=\"slds-align-middle\">\n      <button class=\"slds-button slds-button_icon-container\" type=\"button\" (click)=\"moveMonth(-1)\" [disabled]=\"previousDisabled()\" [title]=\"previousMonthLabel\">\n        <svg class=\"slds-button__icon\" nglIconName=\"left\"></svg><span class=\"slds-assistive-text\">{{ previousMonthLabel }}</span>\n      </button>\n    </div>\n    <h2 class=\"slds-align-middle\" [id]=\"uid + '_month'\" aria-live=\"assertive\" aria-atomic=\"true\">{{ monthLabel }}</h2>\n    <div class=\"slds-align-middle\">\n      <button class=\"slds-button slds-button_icon-container\" type=\"button\" (click)=\"moveMonth(1)\" [disabled]=\"nextDisabled()\" [title]=\"nextMonthLabel\">\n        <svg class=\"slds-button__icon\" nglIconName=\"right\"></svg><span class=\"slds-assistive-text\">{{ nextMonthLabel }}</span>\n      </button>\n    </div>\n  </div>\n  <ngl-date-year class=\"slds-shrink-none\" [year]=\"current.year\" [from]=\"minDate\" [to]=\"maxDate\" (yearChange)=\"moveYear($event)\"></ngl-date-year>\n</div>\n<table class=\"datepicker__month\" role=\"grid\" [attr.aria-labelledby]=\"uid + '_month'\" (keydown)=\"keyboardHandler($event)\">\n  <thead>\n    <tr nglWeekdays [firstDayOfWeek]=\"firstDayOfWeek\" [dayNamesShort]=\"dayNamesShort\" [dayNamesLong]=\"dayNamesLong\"></tr>\n  </thead>\n  <tbody *ngIf=\"current\" nglDatepickerMonth [year]=\"current.year\" [month]=\"current.month\" [day]=\"current.day\" [selected]=\"_date\" [firstDayOfWeek]=\"firstDayOfWeek\" [minDate]=\"minDate\" [maxDate]=\"maxDate\" [dateDisabled]=\"dateDisabled\" (selectDate)=\"select($event)\"></tbody>\n</table>\n<button class=\"slds-button slds-align_absolute-center slds-text-link\" *ngIf=\"showToday\" (click)=\"selectToday()\">{{ todayLabel }}</button>", styles: [":host{display:block}\n"] }]
        }], ctorParameters: function () { return [{ type: i6.NglDatepickerConfig, decorators: [{
                    type: Optional
                }, {
                    type: Inject,
                    args: [NGL_DATEPICKER_CONFIG]
                }] }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [LOCALE_ID]
                }] }, { type: i0.ElementRef }]; }, propDecorators: { monthNames: [{
                type: Input
            }], dayNamesShort: [{
                type: Input
            }], dayNamesLong: [{
                type: Input
            }], dateDisabled: [{
                type: Input
            }], updateSize: [{
                type: Output
            }], date: [{
                type: Input
            }], dateChange: [{
                type: Output
            }], showToday: [{
                type: Input
            }], firstDayOfWeek: [{
                type: Input
            }], relativeYearFrom: [{
                type: Input
            }], relativeYearTo: [{
                type: Input
            }], min: [{
                type: Input
            }], max: [{
                type: Input
            }], todayLabel: [{
                type: Input
            }], previousMonthLabel: [{
                type: Input
            }], nextMonthLabel: [{
                type: Input
            }], monthView: [{
                type: ViewChild,
                args: [NglDatepickerMonth]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nLWxpZ2h0bmluZy9zcmMvbGliL2RhdGVwaWNrZXJzL2RhdGVwaWNrZXIudHMiLCIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1saWdodG5pbmcvc3JjL2xpYi9kYXRlcGlja2Vycy9kYXRlcGlja2VyLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsdUJBQXVCLEVBQzdCLFFBQVEsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFpQixTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEgsT0FBTyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDNUgsT0FBTyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDbkQsT0FBTyxFQUFFLFlBQVksRUFBRSxXQUFXLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUM1RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFDdEUsT0FBTyxFQUFtQixtQkFBbUIsRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBQ3pILE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLFNBQVMsQ0FBQzs7Ozs7Ozs7QUFFN0MsTUFBTSxjQUFjLEdBQUc7SUFDckIsQ0FBQyxRQUFRLENBQUMsRUFBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQztJQUMzQixDQUFDLFVBQVUsQ0FBQyxFQUFHLENBQUMsTUFBTSxF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RUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsQ0FBQztJQUMzRyxDQUFDOzswR0FwTlUsYUFBYSxrQkFnRVEscUJBQXFCLDZCQUNqQyxTQUFTOzhGQWpFbEIsYUFBYSw2bUJBOERiLGtCQUFrQixxRUMzRi9CLGc0REF1QnlJO0FEb0I5RztJQUFmLFlBQVksRUFBRTtnREFBb0I7QUFFcEI7SUFBZCxXQUFXLEVBQUU7cURBQXdCOzJGQWhCcEMsYUFBYTtrQkFUekIsU0FBUzsrQkFDRSxnQkFBZ0IsbUJBRVQsdUJBQXVCLENBQUMsTUFBTSxRQUN6Qzt3QkFDSix5QkFBeUIsRUFBRSxNQUFNO3FCQUNsQzs7MEJBbUVZLFFBQVE7OzBCQUFJLE1BQU07MkJBQUMscUJBQXFCOzswQkFDeEMsTUFBTTsyQkFBQyxTQUFTO3FFQWhFcEIsVUFBVTtzQkFBbEIsS0FBSztnQkFDRyxhQUFhO3NCQUFyQixLQUFLO2dCQUNHLFlBQVk7c0JBQXBCLEtBQUs7Z0JBQ0csWUFBWTtzQkFBcEIsS0FBSztnQkFDSSxVQUFVO3NCQUFuQixNQUFNO2dCQUlNLElBQUk7c0JBQWhCLEtBQUs7Z0JBR0ksVUFBVTtzQkFBbkIsTUFBTTtnQkFFa0IsU0FBUztzQkFBakMsS0FBSztnQkFFa0IsY0FBYztzQkFBckMsS0FBSztnQkFLRyxnQkFBZ0I7c0JBQXhCLEtBQUs7Z0JBS0csY0FBYztzQkFBdEIsS0FBSztnQkFLRyxHQUFHO3NCQUFYLEtBQUs7Z0JBS0csR0FBRztzQkFBWCxLQUFLO2dCQUtHLFVBQVU7c0JBQWxCLEtBQUs7Z0JBS0csa0JBQWtCO3NCQUExQixLQUFLO2dCQUtHLGNBQWM7c0JBQXRCLEtBQUs7Z0JBV3lCLFNBQVM7c0JBQXZDLFNBQVM7dUJBQUMsa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBFbGVtZW50UmVmLFxuICAgICAgICAgT25Jbml0LCBPbkNoYW5nZXMsIEFmdGVyVmlld0luaXQsIE9wdGlvbmFsLCBJbmplY3QsIFZpZXdDaGlsZCwgU2ltcGxlQ2hhbmdlcywgTE9DQUxFX0lEIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBFTlRFUiwgVVBfQVJST1csIExFRlRfQVJST1csIERPV05fQVJST1csIFJJR0hUX0FSUk9XLCBQQUdFX1VQLCBQQUdFX0RPV04sIEhPTUUsIEVORCB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9rZXljb2Rlcyc7XG5pbXBvcnQgeyB1bmlxdWVJZCwgdHJhcEV2ZW50IH0gZnJvbSAnLi4vdXRpbC91dGlsJztcbmltcG9ydCB7IElucHV0Qm9vbGVhbiwgSW5wdXROdW1iZXIgfSBmcm9tICcuLi91dGlsL2NvbnZlcnQnO1xuaW1wb3J0IHsgTkdMX0RBVEVQSUNLRVJfQ09ORklHLCBOZ2xEYXRlcGlja2VyQ29uZmlnIH0gZnJvbSAnLi9jb25maWcnO1xuaW1wb3J0IHsgTmdsSW50ZXJuYWxEYXRlLCBudW1iZXJPZkRheXNJbk1vbnRoLCBnZXRUb2RheSwgaXNEaXNhYmxlZCwgY29tcGFyZURhdGUsIGlzU2FtZU1vbnRoLCBwYXJzZURhdGUgfSBmcm9tICcuL3V0aWwnO1xuaW1wb3J0IHsgTmdsRGF0ZXBpY2tlck1vbnRoIH0gZnJvbSAnLi9tb250aCc7XG5cbmNvbnN0IEtFWUJPQVJEX01PVkVTID0ge1xuICBbVVBfQVJST1ddOiAgICBbJ01vdmUnLCAtN10sXG4gIFtMRUZUX0FSUk9XXTogIFsnTW92ZScsIC0xXSxcbiAgW0RPV05fQVJST1ddOiAgWydNb3ZlJywgN10sXG4gIFtSSUdIVF9BUlJPV106IFsnTW92ZScsIDFdLFxuICBbUEFHRV9VUF06ICAgICBbJ01vdmVNb250aCcsIC0xXSxcbiAgW1BBR0VfRE9XTl06ICAgWydNb3ZlTW9udGgnLCAxXSxcbiAgW0hPTUVdOiAgICAgICAgWydNb3ZlVG8nLCAxXSxcbiAgW0VORF06ICAgICAgICAgWydNb3ZlVG8nLCAzMV0sXG59O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZ2wtZGF0ZXBpY2tlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9kYXRlcGlja2VyLmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgaG9zdDoge1xuICAgICdbY2xhc3Muc2xkcy1kYXRlcGlja2VyXSc6ICd0cnVlJyxcbiAgfSxcbiAgc3R5bGVzOiBbYDpob3N0IHsgZGlzcGxheTogYmxvY2s7IH1gXSxcbn0pXG5leHBvcnQgY2xhc3MgTmdsRGF0ZXBpY2tlciBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBBZnRlclZpZXdJbml0IHtcbiAgQElucHV0KCkgbW9udGhOYW1lczogUmVhZG9ubHlBcnJheTxzdHJpbmc+O1xuICBASW5wdXQoKSBkYXlOYW1lc1Nob3J0OiBSZWFkb25seUFycmF5PHN0cmluZz47XG4gIEBJbnB1dCgpIGRheU5hbWVzTG9uZzogUmVhZG9ubHlBcnJheTxzdHJpbmc+O1xuICBASW5wdXQoKSBkYXRlRGlzYWJsZWQ6IChkYXRlOiBEYXRlKSA9PiBib29sZWFuIHwgbnVsbCA9IG51bGw7XG4gIEBPdXRwdXQoKSB1cGRhdGVTaXplID0gbmV3IEV2ZW50RW1pdHRlcjx7IHdpZHRoOiBudW1iZXI7IGhlaWdodDogbnVtYmVyIH0+KCk7XG5cbiAgX2RhdGU6IE5nbEludGVybmFsRGF0ZTtcbiAgY3VycmVudDogTmdsSW50ZXJuYWxEYXRlO1xuICBASW5wdXQoKSBzZXQgZGF0ZShkYXRlOiBEYXRlKSB7XG4gICAgdGhpcy5fZGF0ZSA9IHBhcnNlRGF0ZShkYXRlKTtcbiAgfVxuICBAT3V0cHV0KCkgZGF0ZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgc2hvd1RvZGF5OiBib29sZWFuO1xuXG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIGZpcnN0RGF5T2ZXZWVrOiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIE9mZnNldCBvZiB5ZWFyIGZyb20gY3VycmVudCB5ZWFyLCB0aGF0IGNhbiBiZSB0aGUgbWluaW11bSBvcHRpb24gaW4gdGhlIHllYXIgc2VsZWN0aW9uIGRyb3Bkb3duLlxuICAgKi9cbiAgQElucHV0KCkgcmVsYXRpdmVZZWFyRnJvbTogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBPZmZzZXQgb2YgeWVhciBmcm9tIGN1cnJlbnQgeWVhciwgdGhhdCBjYW4gYmUgdGhlIG1heGltdW0gb3B0aW9uIGluIHRoZSB5ZWFyIHNlbGVjdGlvbiBkcm9wZG93bi5cbiAgICovXG4gIEBJbnB1dCgpIHJlbGF0aXZlWWVhclRvOiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFRoZSBtaW5pbXVtIGRhdGUgdGhhdCBjYW4gYmUgc2VsZWN0ZWQuXG4gICAqL1xuICBASW5wdXQoKSBtaW46IERhdGU7XG5cbiAgLyoqXG4gICAqIFRoZSBtYXhpbXVtIGRhdGUgdGhhdCBjYW4gYmUgc2VsZWN0ZWQuXG4gICAqL1xuICBASW5wdXQoKSBtYXg6IERhdGU7XG5cbiAgLyoqXG4gICAqIExhYmVsIG9mIHNob3J0Y3V0IHRvIHNlbGVjdCBjdXJyZW50IGRhdGUuXG4gICAqL1xuICBASW5wdXQoKSB0b2RheUxhYmVsOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIExhYmVsIGZvciBidXR0b24gdG8gZ28gdG8gdGhlIHByZXZpb3VzIG1vbnRoLlxuICAgKi9cbiAgQElucHV0KCkgcHJldmlvdXNNb250aExhYmVsOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIExhYmVsIGZvciBidXR0b24gdG8gZ28gdG8gdGhlIG5leHQgbW9udGguXG4gICAqL1xuICBASW5wdXQoKSBuZXh0TW9udGhMYWJlbDogc3RyaW5nO1xuXG5cbiAgd2Vla3M6IE5nbEludGVybmFsRGF0ZVtdO1xuICB1aWQgPSB1bmlxdWVJZCgnZGF0ZXBpY2tlcicpO1xuICBtb250aExhYmVsOiBzdHJpbmc7XG5cbiAgbWluRGF0ZTogTmdsSW50ZXJuYWxEYXRlO1xuXG4gIG1heERhdGU6IE5nbEludGVybmFsRGF0ZTtcblxuICBAVmlld0NoaWxkKE5nbERhdGVwaWNrZXJNb250aCkgbW9udGhWaWV3OiBOZ2xEYXRlcGlja2VyTW9udGg7XG5cbiAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgQEluamVjdChOR0xfREFURVBJQ0tFUl9DT05GSUcpIGRlZmF1bHRDb25maWc6IE5nbERhdGVwaWNrZXJDb25maWcsXG4gICAgICAgICAgICAgIEBJbmplY3QoTE9DQUxFX0lEKSBsb2NhbGU6IHN0cmluZyxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50UmVmKSB7XG5cbiAgICBjb25zdCBjb25maWcgPSB7IC4uLm5ldyBOZ2xEYXRlcGlja2VyQ29uZmlnKGxvY2FsZSksIC4uLmRlZmF1bHRDb25maWcgfTtcbiAgICB0aGlzLm1vbnRoTmFtZXMgPSBjb25maWcubW9udGhOYW1lcztcbiAgICB0aGlzLmRheU5hbWVzU2hvcnQgPSBjb25maWcuZGF5TmFtZXNTaG9ydDtcbiAgICB0aGlzLmRheU5hbWVzTG9uZyA9IGNvbmZpZy5kYXlOYW1lc0xvbmc7XG4gICAgdGhpcy5maXJzdERheU9mV2VlayA9IGNvbmZpZy5maXJzdERheU9mV2VlaztcbiAgICB0aGlzLnNob3dUb2RheSA9IGNvbmZpZy5zaG93VG9kYXk7XG4gICAgdGhpcy5yZWxhdGl2ZVllYXJGcm9tID0gY29uZmlnLnJlbGF0aXZlWWVhckZyb207XG4gICAgdGhpcy5yZWxhdGl2ZVllYXJUbyA9IGNvbmZpZy5yZWxhdGl2ZVllYXJUbztcbiAgICB0aGlzLnRvZGF5TGFiZWwgPSBjb25maWcudG9kYXlMYWJlbDtcbiAgICB0aGlzLnByZXZpb3VzTW9udGhMYWJlbCA9IGNvbmZpZy5wcmV2aW91c01vbnRoTGFiZWw7XG4gICAgdGhpcy5uZXh0TW9udGhMYWJlbCA9IGNvbmZpZy5uZXh0TW9udGhMYWJlbDtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuc2V0TWluTWF4RGF0ZXMoKTtcbiAgICB0aGlzLnNldEN1cnJlbnQodGhpcy5fZGF0ZSB8fCBnZXRUb2RheSgpKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICBpZiAoKGNoYW5nZXMuZGF0ZSAmJiBjaGFuZ2VzLmRhdGUuaXNGaXJzdENoYW5nZSgpKSB8fFxuICAgICAgICBjaGFuZ2VzLnJlbGF0aXZlWWVhckZyb20gfHwgY2hhbmdlcy5yZWxhdGl2ZVllYXJUbyB8fFxuICAgICAgICBjaGFuZ2VzLm1pbiB8fCBjaGFuZ2VzLm1heCkge1xuICAgICAgdGhpcy5zZXRNaW5NYXhEYXRlcygpO1xuICAgIH1cbiAgICBpZiAoY2hhbmdlcy5kYXRlKSB7XG4gICAgICB0aGlzLnNldEN1cnJlbnQodGhpcy5fZGF0ZSk7XG4gICAgfVxuICB9XG5cbiAgbW92ZVllYXIoeWVhcjogc3RyaW5nIHwgbnVtYmVyKSB7XG4gICAgdGhpcy5zZXRDdXJyZW50KHsgeWVhcjogK3llYXIgfSk7XG4gIH1cblxuICBtb3ZlTW9udGgoZGlmZjogbnVtYmVyKSB7XG4gICAgdGhpcy5tb3ZlQ2FsZW5kYXIoJ01vdmVNb250aCcsIGRpZmYpO1xuICB9XG5cbiAga2V5Ym9hcmRIYW5kbGVyKGV2dDogS2V5Ym9hcmRFdmVudCkge1xuICAgIGNvbnN0IGtleUNvZGUgPSBldnQua2V5Q29kZTtcblxuICAgIGlmIChrZXlDb2RlID09PSBFTlRFUikge1xuICAgICAgdHJhcEV2ZW50KGV2dCk7XG4gICAgICBpZiAoIXRoaXMuaXNEaXNhYmxlZERhdGUodGhpcy5jdXJyZW50KSkge1xuICAgICAgICB0aGlzLnNlbGVjdCh0aGlzLmN1cnJlbnQpO1xuICAgICAgfVxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IG1vdmUgPSBLRVlCT0FSRF9NT1ZFU1trZXlDb2RlXTtcbiAgICBpZiAoIW1vdmUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBIYW5kbGUga2V5Ym9hcmQgZXZlbnQgaW5zaWRlIGRhdGVwaWNrZXJcbiAgICB0cmFwRXZlbnQoZXZ0KTtcblxuICAgIGNvbnN0IFtjb2RlLCBwYXJhbV0gPSBtb3ZlO1xuICAgIHRoaXMubW92ZUNhbGVuZGFyKGNvZGUsIHBhcmFtKTtcbiAgICB0aGlzLmZvY3VzQWN0aXZlRGF5KCk7XG4gIH1cblxuICBzZWxlY3QoZGF0ZTogTmdsSW50ZXJuYWxEYXRlKSB7XG4gICAgaWYgKGRhdGUuZGlzYWJsZWQpIHsgcmV0dXJuOyB9XG5cbiAgICBjb25zdCB7eWVhciwgbW9udGgsIGRheX0gPSBkYXRlO1xuICAgIHRoaXMuZGF0ZUNoYW5nZS5lbWl0KG5ldyBEYXRlKHllYXIsIG1vbnRoLCBkYXkpKTtcbiAgfVxuXG4gIHNlbGVjdFRvZGF5KCkge1xuICAgIGNvbnN0IHRvZGF5ID0gZ2V0VG9kYXkoKTtcbiAgICBpZiAodGhpcy5pc0Rpc2FibGVkRGF0ZSh0b2RheSkpIHtcbiAgICAgIHRoaXMuc2V0Q3VycmVudCh0b2RheSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZGF0ZUNoYW5nZS5lbWl0KG5ldyBEYXRlKCkpO1xuICAgIH1cbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICBjb25zdCB7IG9mZnNldFdpZHRoLCBvZmZzZXRIZWlnaHQgfSA9IHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50O1xuICAgIHRoaXMudXBkYXRlU2l6ZS5lbWl0KHt3aWR0aDogb2Zmc2V0V2lkdGgsIGhlaWdodDogb2Zmc2V0SGVpZ2h0fSk7XG4gICAgdGhpcy5mb2N1c0FjdGl2ZURheSgpO1xuICB9XG5cbiAgLyoqIFdoZXRoZXIgdGhlIHByZXZpb3VzIHBlcmlvZCBidXR0b24gaXMgZGlzYWJsZWQuICovXG4gIHByZXZpb3VzRGlzYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMubWluRGF0ZSAmJiBpc1NhbWVNb250aCh0aGlzLmN1cnJlbnQsIHRoaXMubWluRGF0ZSk7XG4gIH1cblxuICAvKiogV2hldGhlciB0aGUgbmV4dCBwZXJpb2QgYnV0dG9uIGlzIGRpc2FibGVkLiAqL1xuICBuZXh0RGlzYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMubWF4RGF0ZSAmJiBpc1NhbWVNb250aCh0aGlzLmN1cnJlbnQsIHRoaXMubWF4RGF0ZSk7XG4gIH1cblxuICBwcml2YXRlIGZvY3VzQWN0aXZlRGF5KCkge1xuICAgIHRoaXMubW9udGhWaWV3LmZvY3VzQWN0aXZlRGF5KCk7XG4gIH1cblxuICBwcml2YXRlIG1vdmVDYWxlbmRhcihjb2RlOiAnTW92ZScgfCAnTW92ZU1vbnRoJyB8ICdNb3ZlVG8nLCBwYXJhbTogbnVtYmVyKSB7XG4gICAgY29uc3QgeyB5ZWFyLCBtb250aCwgZGF5IH0gPSB0aGlzLmN1cnJlbnQ7XG4gICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKHllYXIsIG1vbnRoLCBkYXksIDEyKTtcblxuICAgIGlmIChjb2RlID09PSAnTW92ZScpIHtcbiAgICAgIGRhdGUuc2V0RGF0ZShkYXkgKyAoK3BhcmFtKSk7XG4gICAgICB0aGlzLnNldEN1cnJlbnQoeyB5ZWFyOiBkYXRlLmdldEZ1bGxZZWFyKCksIG1vbnRoOiBkYXRlLmdldE1vbnRoKCksIGRheTogZGF0ZS5nZXREYXRlKCkgfSk7XG4gICAgfSBlbHNlIGlmIChjb2RlID09PSAnTW92ZU1vbnRoJykge1xuICAgICAgZGF0ZS5zZXRNb250aChtb250aCArICgrcGFyYW0pLCAxKTtcbiAgICAgIHRoaXMuc2V0Q3VycmVudCh7IHllYXI6IGRhdGUuZ2V0RnVsbFllYXIoKSwgbW9udGg6IGRhdGUuZ2V0TW9udGgoKSwgZGF5IH0pO1xuICAgIH0gZWxzZSBpZiAoY29kZSA9PT0gJ01vdmVUbycpIHtcbiAgICAgIHRoaXMuc2V0Q3VycmVudCh7IGRheTogK3BhcmFtIH0pO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc2V0Q3VycmVudChkOiBQYXJ0aWFsPE5nbEludGVybmFsRGF0ZT4sIGRvUmVuZGVyID0gdHJ1ZSkge1xuICAgIHRoaXMuY3VycmVudCA9IHsgLi4udGhpcy5jdXJyZW50LCAuLi5kIH07XG5cbiAgICAvLyBLZWVwIGN1cnJlbnQgaW5zaWRlIG1pbmltdW0vbWF4aW11bSByYW5nZVxuICAgIGlmIChjb21wYXJlRGF0ZSh0aGlzLmN1cnJlbnQsIHRoaXMubWluRGF0ZSkgPCAwKSB7XG4gICAgICB0aGlzLmN1cnJlbnQgPSB0aGlzLm1pbkRhdGU7XG4gICAgfSBlbHNlIGlmIChjb21wYXJlRGF0ZSh0aGlzLmN1cnJlbnQsIHRoaXMubWF4RGF0ZSkgPiAwKSB7XG4gICAgICB0aGlzLmN1cnJlbnQgPSB0aGlzLm1heERhdGU7XG4gICAgfVxuXG4gICAgaWYgKGRvUmVuZGVyKSB7XG4gICAgICB0aGlzLnJlbmRlcigpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgeWVhciwgbW9udGgsIGRheSB9ID0gdGhpcy5jdXJyZW50O1xuICAgIHRoaXMubW9udGhMYWJlbCA9IHRoaXMubW9udGhOYW1lc1ttb250aF07XG5cbiAgICAvLyBLZWVwIGN1cnJlbnQgZGF5IGluc2lkZSBsaW1pdHMgb2YgdGhpcyBtb250aFxuICAgIHRoaXMuc2V0Q3VycmVudCh7IGRheTogTWF0aC5taW4oZGF5LCBudW1iZXJPZkRheXNJbk1vbnRoKHllYXIsIG1vbnRoKSkgfSwgZmFsc2UpO1xuICB9XG5cbiAgLyoqIERhdGUgZmlsdGVyIGZvciB0aGUgbW9udGggKi9cbiAgcHJpdmF0ZSBpc0Rpc2FibGVkRGF0ZShkYXRlOiBOZ2xJbnRlcm5hbERhdGUpOiBib29sZWFuIHtcbiAgICByZXR1cm4gaXNEaXNhYmxlZChkYXRlLCB0aGlzLmRhdGVEaXNhYmxlZCwgdGhpcy5taW5EYXRlLCB0aGlzLm1heERhdGUpO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRNaW5NYXhEYXRlcygpIHtcbiAgICBjb25zdCB7IHllYXIgfSA9IGdldFRvZGF5KCk7XG4gICAgdGhpcy5taW5EYXRlID0gdGhpcy5taW4gPyBwYXJzZURhdGUodGhpcy5taW4pIDogeyB5ZWFyOiB5ZWFyICsgdGhpcy5yZWxhdGl2ZVllYXJGcm9tLCBtb250aDogMCwgZGF5OiAxIH07XG4gICAgdGhpcy5tYXhEYXRlID0gdGhpcy5tYXggPyBwYXJzZURhdGUodGhpcy5tYXgpIDogeyB5ZWFyOiB5ZWFyICsgdGhpcy5yZWxhdGl2ZVllYXJUbywgbW9udGg6IDExLCBkYXk6IDMxIH07XG4gIH1cbn1cbiIsIlxuPGRpdiBjbGFzcz1cInNsZHMtZGF0ZXBpY2tlcl9fZmlsdGVyIHNsZHMtZ3JpZFwiPlxuICA8ZGl2IGNsYXNzPVwic2xkcy1kYXRlcGlja2VyX19maWx0ZXJfbW9udGggc2xkcy1ncmlkIHNsZHMtZ3JpZF9hbGlnbi1zcHJlYWQgc2xkcy1ncm93XCI+XG4gICAgPGRpdiBjbGFzcz1cInNsZHMtYWxpZ24tbWlkZGxlXCI+XG4gICAgICA8YnV0dG9uIGNsYXNzPVwic2xkcy1idXR0b24gc2xkcy1idXR0b25faWNvbi1jb250YWluZXJcIiB0eXBlPVwiYnV0dG9uXCIgKGNsaWNrKT1cIm1vdmVNb250aCgtMSlcIiBbZGlzYWJsZWRdPVwicHJldmlvdXNEaXNhYmxlZCgpXCIgW3RpdGxlXT1cInByZXZpb3VzTW9udGhMYWJlbFwiPlxuICAgICAgICA8c3ZnIGNsYXNzPVwic2xkcy1idXR0b25fX2ljb25cIiBuZ2xJY29uTmFtZT1cImxlZnRcIj48L3N2Zz48c3BhbiBjbGFzcz1cInNsZHMtYXNzaXN0aXZlLXRleHRcIj57eyBwcmV2aW91c01vbnRoTGFiZWwgfX08L3NwYW4+XG4gICAgICA8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgICA8aDIgY2xhc3M9XCJzbGRzLWFsaWduLW1pZGRsZVwiIFtpZF09XCJ1aWQgKyAnX21vbnRoJ1wiIGFyaWEtbGl2ZT1cImFzc2VydGl2ZVwiIGFyaWEtYXRvbWljPVwidHJ1ZVwiPnt7IG1vbnRoTGFiZWwgfX08L2gyPlxuICAgIDxkaXYgY2xhc3M9XCJzbGRzLWFsaWduLW1pZGRsZVwiPlxuICAgICAgPGJ1dHRvbiBjbGFzcz1cInNsZHMtYnV0dG9uIHNsZHMtYnV0dG9uX2ljb24tY29udGFpbmVyXCIgdHlwZT1cImJ1dHRvblwiIChjbGljayk9XCJtb3ZlTW9udGgoMSlcIiBbZGlzYWJsZWRdPVwibmV4dERpc2FibGVkKClcIiBbdGl0bGVdPVwibmV4dE1vbnRoTGFiZWxcIj5cbiAgICAgICAgPHN2ZyBjbGFzcz1cInNsZHMtYnV0dG9uX19pY29uXCIgbmdsSWNvbk5hbWU9XCJyaWdodFwiPjwvc3ZnPjxzcGFuIGNsYXNzPVwic2xkcy1hc3Npc3RpdmUtdGV4dFwiPnt7IG5leHRNb250aExhYmVsIH19PC9zcGFuPlxuICAgICAgPC9idXR0b24+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuICA8bmdsLWRhdGUteWVhciBjbGFzcz1cInNsZHMtc2hyaW5rLW5vbmVcIiBbeWVhcl09XCJjdXJyZW50LnllYXJcIiBbZnJvbV09XCJtaW5EYXRlXCIgW3RvXT1cIm1heERhdGVcIiAoeWVhckNoYW5nZSk9XCJtb3ZlWWVhcigkZXZlbnQpXCI+PC9uZ2wtZGF0ZS15ZWFyPlxuPC9kaXY+XG48dGFibGUgY2xhc3M9XCJkYXRlcGlja2VyX19tb250aFwiIHJvbGU9XCJncmlkXCIgW2F0dHIuYXJpYS1sYWJlbGxlZGJ5XT1cInVpZCArICdfbW9udGgnXCIgKGtleWRvd24pPVwia2V5Ym9hcmRIYW5kbGVyKCRldmVudClcIj5cbiAgPHRoZWFkPlxuICAgIDx0ciBuZ2xXZWVrZGF5cyBbZmlyc3REYXlPZldlZWtdPVwiZmlyc3REYXlPZldlZWtcIiBbZGF5TmFtZXNTaG9ydF09XCJkYXlOYW1lc1Nob3J0XCIgW2RheU5hbWVzTG9uZ109XCJkYXlOYW1lc0xvbmdcIj48L3RyPlxuICA8L3RoZWFkPlxuICA8dGJvZHkgKm5nSWY9XCJjdXJyZW50XCIgbmdsRGF0ZXBpY2tlck1vbnRoIFt5ZWFyXT1cImN1cnJlbnQueWVhclwiIFttb250aF09XCJjdXJyZW50Lm1vbnRoXCIgW2RheV09XCJjdXJyZW50LmRheVwiIFtzZWxlY3RlZF09XCJfZGF0ZVwiIFtmaXJzdERheU9mV2Vla109XCJmaXJzdERheU9mV2Vla1wiIFttaW5EYXRlXT1cIm1pbkRhdGVcIiBbbWF4RGF0ZV09XCJtYXhEYXRlXCIgW2RhdGVEaXNhYmxlZF09XCJkYXRlRGlzYWJsZWRcIiAoc2VsZWN0RGF0ZSk9XCJzZWxlY3QoJGV2ZW50KVwiPjwvdGJvZHk+XG48L3RhYmxlPlxuPGJ1dHRvbiBjbGFzcz1cInNsZHMtYnV0dG9uIHNsZHMtYWxpZ25fYWJzb2x1dGUtY2VudGVyIHNsZHMtdGV4dC1saW5rXCIgKm5nSWY9XCJzaG93VG9kYXlcIiAoY2xpY2spPVwic2VsZWN0VG9kYXkoKVwiPnt7IHRvZGF5TGFiZWwgfX08L2J1dHRvbj4iXX0=
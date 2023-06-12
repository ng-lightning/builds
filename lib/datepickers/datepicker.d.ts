import { EventEmitter, ElementRef, OnInit, OnChanges, AfterViewInit, SimpleChanges } from '@angular/core';
import { NglDatepickerConfig } from './config';
import { NglInternalDate } from './util';
import { NglDatepickerMonth } from './month';
import * as i0 from "@angular/core";
export declare class NglDatepicker implements OnInit, OnChanges, AfterViewInit {
    private element;
    monthNames: ReadonlyArray<string>;
    dayNamesShort: ReadonlyArray<string>;
    dayNamesLong: ReadonlyArray<string>;
    dateDisabled: (date: Date) => boolean | null;
    updateSize: EventEmitter<{
        width: number;
        height: number;
    }>;
    _date: NglInternalDate;
    current: NglInternalDate;
    set date(date: Date);
    dateChange: EventEmitter<any>;
    showToday: boolean;
    firstDayOfWeek: number;
    /**
     * Offset of year from current year, that can be the minimum option in the year selection dropdown.
     */
    relativeYearFrom: number;
    /**
     * Offset of year from current year, that can be the maximum option in the year selection dropdown.
     */
    relativeYearTo: number;
    /**
     * The minimum date that can be selected.
     */
    min: Date;
    /**
     * The maximum date that can be selected.
     */
    max: Date;
    /**
     * Label of shortcut to select current date.
     */
    todayLabel: string;
    /**
     * Label for button to go to the previous month.
     */
    previousMonthLabel: string;
    /**
     * Label for button to go to the next month.
     */
    nextMonthLabel: string;
    weeks: NglInternalDate[];
    uid: string;
    monthLabel: string;
    minDate: NglInternalDate;
    maxDate: NglInternalDate;
    monthView: NglDatepickerMonth;
    constructor(defaultConfig: NglDatepickerConfig, locale: string, element: ElementRef);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    moveYear(year: string | number): void;
    moveMonth(diff: number): void;
    keyboardHandler(evt: KeyboardEvent): void;
    select(date: NglInternalDate): void;
    selectToday(): void;
    ngAfterViewInit(): void;
    /** Whether the previous period button is disabled. */
    previousDisabled(): boolean;
    /** Whether the next period button is disabled. */
    nextDisabled(): boolean;
    private focusActiveDay;
    private moveCalendar;
    private setCurrent;
    private render;
    /** Date filter for the month */
    private isDisabledDate;
    private setMinMaxDates;
    static ɵfac: i0.ɵɵFactoryDeclaration<NglDatepicker, [{ optional: true; }, null, null]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NglDatepicker, "ngl-datepicker", never, { "monthNames": "monthNames"; "dayNamesShort": "dayNamesShort"; "dayNamesLong": "dayNamesLong"; "dateDisabled": "dateDisabled"; "date": "date"; "showToday": "showToday"; "firstDayOfWeek": "firstDayOfWeek"; "relativeYearFrom": "relativeYearFrom"; "relativeYearTo": "relativeYearTo"; "min": "min"; "max": "max"; "todayLabel": "todayLabel"; "previousMonthLabel": "previousMonthLabel"; "nextMonthLabel": "nextMonthLabel"; }, { "updateSize": "updateSize"; "dateChange": "dateChange"; }, never, never, false, never>;
}

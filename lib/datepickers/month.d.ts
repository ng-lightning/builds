import { EventEmitter, QueryList, NgZone, OnChanges, SimpleChanges } from '@angular/core';
import { NglInternalDate } from './util';
import { NglDay } from './day';
import * as i0 from "@angular/core";
interface INglDayCell extends NglInternalDate {
    today: boolean;
    isCurrentMonth: boolean;
    selected?: boolean;
    active?: boolean;
}
export declare class NglDatepickerMonth implements OnChanges {
    private ngZone;
    selected: NglInternalDate;
    year: number;
    month: number;
    day: number;
    firstDayOfWeek: number;
    minDate: NglInternalDate;
    maxDate: NglInternalDate;
    dateDisabled: (date: Date) => boolean | null;
    selectDate: EventEmitter<NglInternalDate>;
    days: QueryList<NglDay>;
    weeks: INglDayCell[][];
    constructor(ngZone: NgZone);
    indexTrackBy(index: number): number;
    dateTrackBy(index: number, { year, month, day }: NglInternalDate): string;
    onSelect(date: NglInternalDate): void;
    ngOnChanges(changes: SimpleChanges): void;
    focusActiveDay(): void;
    private renderView;
    private daysInMonth;
    private daysInPreviousMonth;
    private daysInNextMonth;
    private getDayObjects;
    private updateActive;
    private isActive;
    private updateSelected;
    private isSelected;
    private updateDisabled;
    /** Date filter for the month */
    private isDisabled;
    static ɵfac: i0.ɵɵFactoryDeclaration<NglDatepickerMonth, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NglDatepickerMonth, "[nglDatepickerMonth]", never, { "selected": "selected"; "year": "year"; "month": "month"; "day": "day"; "firstDayOfWeek": "firstDayOfWeek"; "minDate": "minDate"; "maxDate": "maxDate"; "dateDisabled": "dateDisabled"; }, { "selectDate": "selectDate"; }, never, never, false, never>;
}
export {};

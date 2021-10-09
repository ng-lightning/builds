import { EventEmitter, QueryList, NgZone, OnChanges, SimpleChanges } from '@angular/core';
import { NglInternalDate } from './util';
import { NglDay } from './day';
interface INglDayCell extends NglInternalDate {
    today: boolean;
    isCurrentMonth: boolean;
    selected?: boolean;
    active?: boolean;
}
export declare class NglDatepickerMonth implements OnChanges {
    private ngZone;
    readonly selected: NglInternalDate;
    readonly year: number;
    readonly month: number;
    readonly day: number;
    readonly firstDayOfWeek: number;
    readonly minDate: NglInternalDate;
    readonly maxDate: NglInternalDate;
    readonly dateDisabled: (date: Date) => boolean | null;
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
}
export {};

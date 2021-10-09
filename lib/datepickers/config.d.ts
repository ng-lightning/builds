import { InjectionToken } from '@angular/core';
/** Injection token that can be used to specify default options. */
export declare const NGL_DATEPICKER_CONFIG: InjectionToken<NglDatepickerConfig<any>>;
export declare class NglDatepickerConfig<D = any> {
    format: 'big-endian' | 'little-endian' | 'middle-endian';
    delimiter: string;
    dropdownAlign: 'left' | 'right';
    monthNames: ReadonlyArray<string>;
    dayNamesShort: ReadonlyArray<string>;
    dayNamesLong: ReadonlyArray<string>;
    firstDayOfWeek: number;
    showToday: boolean;
    relativeYearFrom: number;
    relativeYearTo: number;
    openOnInputClick: boolean;
    todayLabel: string;
    previousMonthLabel: string;
    nextMonthLabel: string;
    patternPlaceholder: boolean;
    constructor(locale: string);
}

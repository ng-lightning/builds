export interface NglInternalDate {
    year: number;
    month: number;
    day: number;
    disabled?: boolean;
}
export declare function parseDate(date: Date): NglInternalDate;
export declare function isEqualDate(d1: NglInternalDate, d2: NglInternalDate): boolean;
export declare function getToday(): NglInternalDate;
export declare function numberOfDaysInMonth(year: number, month: number): number;
export declare function split(arr: any[], size?: number): any[];
export declare function isDisabled(d: NglInternalDate, disabledCallback: (d: Date) => boolean, min: NglInternalDate, max: NglInternalDate): boolean;
export declare function compareDate(d1: NglInternalDate, d2: NglInternalDate): 1 | 0 | -1;
export declare function isSameMonth(d1: NglInternalDate, d2: NglInternalDate): boolean;

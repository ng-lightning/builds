import { EventEmitter, OnChanges } from '@angular/core';
import { NglInternalDate } from './util';
import * as i0 from "@angular/core";
export declare class NglDatepickerYear implements OnChanges {
    uid: string;
    from: NglInternalDate;
    to: NglInternalDate;
    year: number;
    yearChange: EventEmitter<any>;
    range: number[];
    change($event: string): void;
    ngOnChanges(): void;
    private getRange;
    static ɵfac: i0.ɵɵFactoryDeclaration<NglDatepickerYear, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NglDatepickerYear, "ngl-date-year", never, { "from": "from"; "to": "to"; "year": "year"; }, { "yearChange": "yearChange"; }, never, never, false, never>;
}

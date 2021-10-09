import { EventEmitter, OnChanges } from '@angular/core';
import { NglInternalDate } from './util';
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
}

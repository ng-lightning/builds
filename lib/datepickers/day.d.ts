import { ElementRef } from '@angular/core';
import { NglInternalDate } from './util';
export declare class NglDay {
    private el;
    readonly date: NglInternalDate;
    readonly nglDayDisabled: boolean;
    readonly nglDaySelected: boolean;
    readonly isActive: any;
    get tabindex(): 0 | -1;
    constructor(el: ElementRef);
    focus(): void;
}

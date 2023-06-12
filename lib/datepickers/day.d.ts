import { ElementRef } from '@angular/core';
import { NglInternalDate } from './util';
import * as i0 from "@angular/core";
export declare class NglDay {
    private el;
    date: NglInternalDate;
    nglDayDisabled: boolean;
    nglDaySelected: boolean;
    isActive: any;
    get tabindex(): 0 | -1;
    constructor(el: ElementRef);
    focus(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NglDay, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<NglDay, "td[nglDay]", never, { "date": "nglDay"; "nglDayDisabled": "nglDayDisabled"; "nglDaySelected": "nglDaySelected"; "isActive": "isActive"; }, {}, never, never, false, never>;
}

import { ElementRef, Renderer2 } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
export declare class NglInputElement {
    private el;
    private renderer;
    ɵRequiredSubject: BehaviorSubject<boolean>;
    describedBy: string;
    set required(required: any);
    constructor(el: ElementRef, renderer: Renderer2);
    get id(): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<NglInputElement, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<NglInputElement, "input[ngl]:not([type=checkbox]):not([type=radio])", never, { "required": "required"; }, {}, never, never, false, never>;
}

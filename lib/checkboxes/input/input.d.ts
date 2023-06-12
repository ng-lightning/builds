import { ElementRef, Renderer2 } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
export declare class NglCheckboxInput {
    private el;
    private renderer;
    ɵRequiredSubject: BehaviorSubject<boolean>;
    set describedBy(value: string);
    set required(required: any);
    constructor(el: ElementRef, renderer: Renderer2);
    get id(): any;
    addClass(klass: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NglCheckboxInput, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<NglCheckboxInput, "input[ngl][type=checkbox]", never, { "required": "required"; }, {}, never, never, false, never>;
}

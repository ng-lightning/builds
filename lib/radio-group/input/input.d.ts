import { ElementRef, Renderer2 } from '@angular/core';
import * as i0 from "@angular/core";
export declare class NglRadioInput {
    private el;
    private renderer;
    name: string;
    describedBy: string;
    constructor(el: ElementRef, renderer: Renderer2);
    get id(): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<NglRadioInput, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<NglRadioInput, "input[ngl][type=radio]", never, {}, {}, never, never, false, never>;
}

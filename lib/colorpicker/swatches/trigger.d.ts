import { ElementRef, Renderer2, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export declare class NglColorpickerSwatchTrigger {
    private el;
    private renderer;
    selected: boolean;
    selectedChange: EventEmitter<any>;
    constructor(el: ElementRef, renderer: Renderer2);
    onSelect(): void;
    focus(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NglColorpickerSwatchTrigger, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<NglColorpickerSwatchTrigger, "[nglColorpickerSwatchTrigger]", never, { "selected": "selected"; }, { "selectedChange": "selectedChange"; }, never, never, false, never>;
}

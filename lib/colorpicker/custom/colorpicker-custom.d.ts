import { ElementRef, Renderer2, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { IHSV } from '../util';
import * as i0 from "@angular/core";
export declare class NglColorpickerCustom implements OnChanges {
    private el;
    private renderer;
    hsv: IHSV;
    hsvChange: EventEmitter<IHSV>;
    hex: string;
    constructor(el: ElementRef, renderer: Renderer2);
    ngOnChanges(changes: SimpleChanges): void;
    onHsvChange($event: IHSV): void;
    onHexChange(hex: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NglColorpickerCustom, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NglColorpickerCustom, "ngl-colorpicker-custom", never, { "hsv": "hsv"; }, { "hsvChange": "hsvChange"; }, never, never, false, never>;
}

import { ElementRef, Renderer2 } from '@angular/core';
export declare type NglFileCropValue = '16-by-9' | '4-by-3' | '1-by-1';
export declare class NglFileCrop {
    private element;
    private renderer;
    set nglFileCrop(ratio: NglFileCropValue);
    private cropClass;
    private currentRatio;
    constructor(element: ElementRef, renderer: Renderer2);
}

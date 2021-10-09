import { ElementRef, Renderer2 } from '@angular/core';
export declare class NglRadioInput {
    private el;
    private renderer;
    name: string;
    describedBy: string;
    constructor(el: ElementRef, renderer: Renderer2);
    get id(): any;
}

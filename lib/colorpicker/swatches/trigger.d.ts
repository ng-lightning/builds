import { ElementRef, Renderer2, EventEmitter } from '@angular/core';
export declare class NglColorpickerSwatchTrigger {
    private el;
    private renderer;
    readonly selected: boolean;
    selectedChange: EventEmitter<any>;
    constructor(el: ElementRef, renderer: Renderer2);
    onSelect(): void;
    focus(): void;
}

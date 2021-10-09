import { ElementRef, Renderer2, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { IHSV } from '../util';
export declare class NglColorpickerCustom implements OnChanges {
    private el;
    private renderer;
    readonly hsv: IHSV;
    hsvChange: EventEmitter<IHSV>;
    hex: string;
    constructor(el: ElementRef, renderer: Renderer2);
    ngOnChanges(changes: SimpleChanges): void;
    onHsvChange($event: IHSV): void;
    onHexChange(hex: string): void;
}

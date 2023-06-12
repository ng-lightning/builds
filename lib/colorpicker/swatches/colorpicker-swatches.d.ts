import { ElementRef, Renderer2, EventEmitter, QueryList, OnChanges } from '@angular/core';
import { NglColorpickerSwatchTrigger } from './trigger';
import * as i0 from "@angular/core";
export declare class NglColorpickerSwatches implements OnChanges {
    private el;
    private renderer;
    hex: string;
    hexChange: EventEmitter<string>;
    swatchColors: string[];
    readonly triggers: QueryList<NglColorpickerSwatchTrigger>;
    activeIndex: number;
    constructor(el: ElementRef, renderer: Renderer2);
    ngOnChanges(): void;
    onSelectViaInteraction(evt: KeyboardEvent): void;
    isSelected(hex: string): boolean;
    onSelect(hex: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NglColorpickerSwatches, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NglColorpickerSwatches, "ngl-colorpicker-swatches", never, { "hex": "hex"; "swatchColors": "swatchColors"; }, { "hexChange": "hexChange"; }, never, never, false, never>;
}

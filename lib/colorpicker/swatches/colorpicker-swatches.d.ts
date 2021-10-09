import { ElementRef, Renderer2, EventEmitter, QueryList, OnChanges } from '@angular/core';
import { NglColorpickerSwatchTrigger } from './trigger';
export declare class NglColorpickerSwatches implements OnChanges {
    private el;
    private renderer;
    readonly hex: string;
    hexChange: EventEmitter<string>;
    swatchColors: string[];
    readonly triggers: QueryList<NglColorpickerSwatchTrigger>;
    activeIndex: number;
    constructor(el: ElementRef, renderer: Renderer2);
    ngOnChanges(): void;
    onSelectViaInteraction(evt: KeyboardEvent): void;
    isSelected(hex: string): boolean;
    onSelect(hex: string): void;
}

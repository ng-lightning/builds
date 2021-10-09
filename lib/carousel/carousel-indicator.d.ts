import { ElementRef, OnChanges, SimpleChanges } from '@angular/core';
import { NglCarouselImage } from './carousel-image';
export declare class NglCarouselIndicator implements OnChanges {
    private el;
    readonly isActive: any;
    get tabindex(): 0 | -1;
    readonly image: NglCarouselImage;
    uid: string;
    constructor(el: ElementRef);
    ngOnChanges(changes: SimpleChanges): void;
    focus(): void;
}

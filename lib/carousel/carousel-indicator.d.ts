import { ElementRef, OnChanges, SimpleChanges } from '@angular/core';
import { NglCarouselImage } from './carousel-image';
import * as i0 from "@angular/core";
export declare class NglCarouselIndicator implements OnChanges {
    private el;
    isActive: any;
    get tabindex(): 0 | -1;
    image: NglCarouselImage;
    uid: string;
    constructor(el: ElementRef);
    ngOnChanges(changes: SimpleChanges): void;
    focus(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NglCarouselIndicator, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<NglCarouselIndicator, "[nglCarouselIndicator]", never, { "isActive": "isActive"; "image": "image"; }, {}, never, never, false, never>;
}

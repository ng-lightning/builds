import { EventEmitter, ElementRef, Renderer2 } from '@angular/core';
import { NglAccordionSection } from './accordion-section';
import * as i0 from "@angular/core";
export declare class NglAccordionItem {
    isActive: boolean;
    section: NglAccordionSection;
    toggle: EventEmitter<any>;
    uid: string;
    constructor(element: ElementRef, renderer: Renderer2);
    onToggle(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NglAccordionItem, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NglAccordionItem, "li[nglAccordionItem]", never, { "isActive": "isActive"; "section": "section"; }, { "toggle": "toggle"; }, never, never, false, never>;
}

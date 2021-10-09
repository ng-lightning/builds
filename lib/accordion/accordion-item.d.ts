import { EventEmitter, ElementRef, Renderer2 } from '@angular/core';
import { NglAccordionSection } from './accordion-section';
export declare class NglAccordionItem {
    isActive: boolean;
    section: NglAccordionSection;
    toggle: EventEmitter<any>;
    uid: string;
    constructor(element: ElementRef, renderer: Renderer2);
    onToggle(): void;
}

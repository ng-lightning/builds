import { EventEmitter, ElementRef, Renderer2, QueryList } from '@angular/core';
import { NglAccordionSection } from './accordion-section';
export declare class NglAccordion {
    /**
     * Defines the expanded section(s).
     */
    activeName: string | string[];
    activeNameChange: EventEmitter<string | string[]>;
    /**
     * Whether we allow multiple sections open at a time.
     */
    multiple: boolean;
    sections: QueryList<NglAccordionSection>;
    constructor(element: ElementRef, renderer: Renderer2);
    toggle(section: NglAccordionSection): void;
    isActive(section: NglAccordionSection): boolean;
}

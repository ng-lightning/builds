import { TemplateRef } from '@angular/core';
import * as i0 from "@angular/core";
export declare class NglAccordionSection {
    templateRef: TemplateRef<any>;
    constructor(templateRef: TemplateRef<any>);
    /**
     * Displayed as the title of the section.
     */
    label: string | TemplateRef<any>;
    /**
     * Context data available as local variable in `label`, if TemplateRef.
     */
    labelContext: any;
    /**
     * The unique name to use with the `activeName` of the accordion component.
     */
    name: string;
    static ɵfac: i0.ɵɵFactoryDeclaration<NglAccordionSection, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<NglAccordionSection, "[nglAccordionSection]", never, { "label": "label"; "labelContext": "labelContext"; "name": "name"; }, {}, never, never, false, never>;
}

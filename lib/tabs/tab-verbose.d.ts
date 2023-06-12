import { TemplateRef, AfterContentInit } from '@angular/core';
import { NglTab } from './tab';
import * as i0 from "@angular/core";
export declare class NglTabLabel {
    templateRef: TemplateRef<any>;
    constructor(templateRef: TemplateRef<any>);
    static ɵfac: i0.ɵɵFactoryDeclaration<NglTabLabel, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<NglTabLabel, "[ngl-tab-label]", never, {}, {}, never, never, false, never>;
}
export declare class NglTabContent {
    templateRef: TemplateRef<any>;
    constructor(templateRef: TemplateRef<any>);
    static ɵfac: i0.ɵɵFactoryDeclaration<NglTabContent, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<NglTabContent, "[ngl-tab-content]", never, {}, {}, never, never, false, never>;
}
export declare class NglTabVerbose extends NglTab implements AfterContentInit {
    contentTemplate: NglTabContent;
    labelTemplate: NglTabLabel;
    ngAfterContentInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NglTabVerbose, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<NglTabVerbose, "ngl-tab", never, {}, {}, ["contentTemplate", "labelTemplate"], never, false, never>;
}

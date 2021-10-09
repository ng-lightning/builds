import { TemplateRef, AfterContentInit } from '@angular/core';
import { NglTab } from './tab';
export declare class NglTabLabel {
    templateRef: TemplateRef<any>;
    constructor(templateRef: TemplateRef<any>);
}
export declare class NglTabContent {
    templateRef: TemplateRef<any>;
    constructor(templateRef: TemplateRef<any>);
}
export declare class NglTabVerbose extends NglTab implements AfterContentInit {
    contentTemplate: NglTabContent;
    labelTemplate: NglTabLabel;
    ngAfterContentInit(): void;
}

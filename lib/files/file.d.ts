import { ElementRef, Renderer2, TemplateRef } from '@angular/core';
import * as i0 from "@angular/core";
export declare class NglFile {
    element: ElementRef;
    renderer: Renderer2;
    text: string | TemplateRef<any>;
    iconName: string;
    constructor(element: ElementRef, renderer: Renderer2);
    static ɵfac: i0.ɵɵFactoryDeclaration<NglFile, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NglFile, "ngl-file", never, { "text": "text"; "iconName": "iconName"; }, {}, never, ["*"], false, never>;
}

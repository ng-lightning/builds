import { ElementRef, Renderer2 } from '@angular/core';
import { NglIconConfig } from './config';
import * as i0 from "@angular/core";
export declare class NglIconSvg {
    path: string;
    set iconName(iconName: string);
    xPos: string;
    iconPath: string;
    constructor(defaultConfig: NglIconConfig, el: ElementRef, renderer: Renderer2);
    static ɵfac: i0.ɵɵFactoryDeclaration<NglIconSvg, [{ optional: true; }, null, null]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NglIconSvg, "svg[nglIconName]", never, { "iconName": "nglIconName"; "xPos": "xPos"; }, {}, never, never, false, never>;
}

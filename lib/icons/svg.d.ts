import { ElementRef, Renderer2 } from '@angular/core';
import { NglIconConfig } from './config';
export declare class NglIconSvg {
    path: string;
    set iconName(iconName: string);
    xPos: string;
    iconPath: string;
    constructor(defaultConfig: NglIconConfig, el: ElementRef, renderer: Renderer2);
}

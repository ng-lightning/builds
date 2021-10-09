import { ElementRef, Renderer2, TemplateRef } from '@angular/core';
export declare class NglFile {
    element: ElementRef;
    renderer: Renderer2;
    text: string | TemplateRef<any>;
    iconName: string;
    constructor(element: ElementRef, renderer: Renderer2);
}

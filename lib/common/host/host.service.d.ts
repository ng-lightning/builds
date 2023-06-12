import { RendererFactory2, ElementRef } from '@angular/core';
import * as i0 from "@angular/core";
export declare class HostService {
    private classMap;
    private styleMap;
    private renderer;
    updateClass({ nativeElement }: ElementRef, classMap: object): void;
    updateStyle({ nativeElement }: ElementRef, styleMap: object): void;
    constructor(rendererFactory2: RendererFactory2);
    static ɵfac: i0.ɵɵFactoryDeclaration<HostService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<HostService>;
}

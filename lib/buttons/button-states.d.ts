import { ElementRef, Renderer2 } from '@angular/core';
import * as i0 from "@angular/core";
export declare class NglButtonStateOn {
    private el;
    private renderer;
    /**
     * LDS name of the icon.
     * Names are written in the format 'utility:down' where 'utility' is the category, and 'down' is the specific icon to be displayed.
     */
    iconName: string;
    constructor(el: ElementRef, renderer: Renderer2);
    protected getHostClass(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<NglButtonStateOn, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NglButtonStateOn, "ngl-state-on", never, { "iconName": "iconName"; }, {}, never, ["*"], false, never>;
}
export declare class NglButtonStateOff extends NglButtonStateOn {
    protected getHostClass(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<NglButtonStateOff, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NglButtonStateOff, "ngl-state-off", never, {}, {}, never, ["*"], false, never>;
}
export declare class NglButtonStateHover extends NglButtonStateOn {
    protected getHostClass(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<NglButtonStateHover, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NglButtonStateHover, "ngl-state-hover", never, {}, {}, never, ["*"], false, never>;
}

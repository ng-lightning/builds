import { ElementRef, Renderer2 } from '@angular/core';
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
}
export declare class NglButtonStateOff extends NglButtonStateOn {
    protected getHostClass(): string;
}
export declare class NglButtonStateHover extends NglButtonStateOn {
    protected getHostClass(): string;
}

import { ElementRef, Renderer2, OnInit, OnChanges } from '@angular/core';
import { HostService } from '../common/host/host.service';
export declare class NglButtonIcon implements OnInit, OnChanges {
    private el;
    private hostService;
    /**
     * LDS name of the icon.
     * Names are written in the format 'utility:down' where 'utility' is the category, and 'down' is the specific icon to be displayed.
     * Only utility icons can be used in this component.
     */
    iconName: string;
    /**
     * Fallback value for `alternativeText`.
     */
    title: string;
    /**
     * The alternative text used to describe the icon.
     * This text should describe what happens, not what the icon looks like.
     */
    alternativeText: any;
    /**
     * The variant changes the appearance of the button
     */
    variant: 'bare' | 'container' | 'brand' | 'border' | 'border-filled' | 'inverse' | 'border-inverse';
    /**
     *  For non-bare variants, the size applies to the button, otherwise it applies to the icon itself
     */
    size: string;
    /**
     * CSS classes that are applied to the SVG.
     */
    svgClass: string | string[] | Set<string> | {
        [klass: string]: any;
    };
    get altText(): any;
    constructor(el: ElementRef, hostService: HostService, renderer: Renderer2);
    ngOnInit(): void;
    ngOnChanges(): void;
    iconClass(): {
        [klass: string]: any;
    };
    private setHostClass;
    private hasVariant;
}

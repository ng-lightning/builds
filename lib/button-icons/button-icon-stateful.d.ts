import { ElementRef, Renderer2, OnInit, OnChanges, EventEmitter } from '@angular/core';
import { HostService } from '../common/host/host.service';
import * as i0 from "@angular/core";
export declare class NglButtonIconStateful implements OnInit, OnChanges {
    private el;
    private hostService;
    /**
     * Specifies whether button is in selected state or not.
     */
    selected: boolean;
    selectedChange: EventEmitter<boolean>;
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
     * The variant changes the appearance of the button.
     */
    variant: 'border' | 'border-filled' | 'border-inverse';
    /**
     *  The size of the button.
     */
    size: 'xx-small' | 'x-small' | 'small' | null;
    get altText(): any;
    constructor(el: ElementRef, hostService: HostService, renderer: Renderer2);
    onclick(): void;
    ngOnInit(): void;
    ngOnChanges(): void;
    private setHostClass;
    static ɵfac: i0.ɵɵFactoryDeclaration<NglButtonIconStateful, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NglButtonIconStateful, "[nglButtonIconStateful]", never, { "selected": "selected"; "iconName": "iconName"; "title": "title"; "alternativeText": "alternativeText"; "variant": "variant"; "size": "size"; }, { "selectedChange": "selectedChange"; }, never, ["*"], false, never>;
}

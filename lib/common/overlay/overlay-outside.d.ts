import { EventEmitter, OnInit, OnDestroy, NgZone } from '@angular/core';
import { CdkConnectedOverlay, ScrollDispatcher } from '@angular/cdk/overlay';
import * as i0 from "@angular/core";
export declare class NglOverlaynglOverlayScrolledOutsideViewDirective implements OnInit, OnDestroy {
    private cdkOverlay;
    private ngZone;
    private scrollDispatcher;
    overlayOutside: EventEmitter<void>;
    private subscription;
    constructor(cdkOverlay: CdkConnectedOverlay, ngZone: NgZone, scrollDispatcher: ScrollDispatcher);
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NglOverlaynglOverlayScrolledOutsideViewDirective, [{ self: true; }, null, null]>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<NglOverlaynglOverlayScrolledOutsideViewDirective, "[nglOverlayScrolledOutsideView]", never, {}, { "overlayOutside": "nglOverlayScrolledOutsideView"; }, never, never, false, never>;
}
/**
 * Gets whether an element is scrolled outside of view by its parent scrolling container.
 * @param element Dimensions of the element (from getBoundingClientRect)
 * @param container Dimensions of element's scrolling container (from getBoundingClientRect)
 * @returns Whether the element is scrolled out of view
 */
export declare function isElementOutside(element: ClientRect, container: ClientRect): boolean;

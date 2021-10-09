import { EventEmitter, OnInit, OnDestroy, NgZone } from '@angular/core';
import { CdkConnectedOverlay, ScrollDispatcher } from '@angular/cdk/overlay';
export declare class NglOverlaynglOverlayScrolledOutsideViewDirective implements OnInit, OnDestroy {
    private cdkOverlay;
    private ngZone;
    private scrollDispatcher;
    overlayOutside: EventEmitter<void>;
    private subscription;
    constructor(cdkOverlay: CdkConnectedOverlay, ngZone: NgZone, scrollDispatcher: ScrollDispatcher);
    ngOnInit(): void;
    ngOnDestroy(): void;
}
/**
 * Gets whether an element is scrolled outside of view by its parent scrolling container.
 * @param element Dimensions of the element (from getBoundingClientRect)
 * @param container Dimensions of element's scrolling container (from getBoundingClientRect)
 * @returns Whether the element is scrolled out of view
 */
export declare function isElementOutside(element: ClientRect, container: ClientRect): boolean;

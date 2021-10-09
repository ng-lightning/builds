import { ElementRef, TemplateRef, ViewContainerRef, OnDestroy, OnChanges, SimpleChanges, EventEmitter, Renderer2 } from '@angular/core';
import { Overlay } from '@angular/cdk/overlay';
import { Placement } from '../util/overlay-position';
export declare type Size = 'small' | 'medium' | 'large' | 'full-width';
export declare type Variant = 'walkthrough' | 'feature' | 'warning' | 'error' | 'panel';
export declare class NglPopoverTrigger implements OnChanges, OnDestroy {
    private element;
    private renderer;
    private viewContainerRef;
    private overlay;
    /**
     * The body as string or the connected template reference to show.
     */
    template: string | TemplateRef<void>;
    /**
     * The header as string or the connected template reference to show.
     */
    header: string | TemplateRef<void>;
    /**
     * The footer as string or the connected template reference to show.
     */
    footer: string | TemplateRef<void>;
    /**
     * Determines the variant of the popover.
     */
    variant: Variant;
    /**
     * Determines the size of the popover.
     */
    size: Size;
    /**
     * Position relative to host element.
     */
    set placement(_placement: Placement);
    get placement(): Placement;
    /**
     * Whether the floating popover is visible.
     */
    set nglOpen(_open: any);
    get nglOpen(): any;
    /**
     * Close button title (and assistive text).
     */
    closeTitle: string;
    popoverClass: any;
    /**
       * Whether or not to override the close button's visibility, if `nglPopoverOpenChange` is set.
       */
    closeVisible: boolean;
    /** Emit an event when actual popover is shown or hidden */
    nglPopoverOpenChange: EventEmitter<any>;
    canClose: boolean;
    /** Names of properties that should be proxy to child component. */
    private needProxyProperties;
    private _placement;
    private _open;
    private portal;
    private overlayRef;
    private popover;
    private backdrop;
    private closeSubscription;
    private positionChangesSubscription;
    private globalClickEventUnsubscriber;
    private clickEventUnsubscriber;
    private globalClickTimeout;
    constructor(element: ElementRef, renderer: Renderer2, viewContainerRef: ViewContainerRef, overlay: Overlay);
    ngOnChanges(changes: SimpleChanges): void;
    onclick(evt: Event): void;
    ngOnDestroy(): void;
    private open;
    private close;
    private toggle;
    private create;
    /** Detaches the currently attached popover. */
    private detach;
    /** Create the overlay config and position strategy */
    private createOverlay;
    /** Updates the position of the current popover. */
    private updatePosition;
    private updatePopover;
    /** Set inputs of child components when this component's inputs change. */
    private updateProxies;
    /** Returns a stream that emits whenever an action that should close the popover occurs. */
    private popoverClosingActions;
    private handleGlobalClickEvent;
    private subscribeToClickEvents;
    private unsubscribeFromClickEvents;
    private clearGlobalClickTimeout;
}

import { ElementRef, TemplateRef, ViewContainerRef, OnDestroy, OnChanges, SimpleChanges, EventEmitter, Renderer2 } from '@angular/core';
import { Overlay } from '@angular/cdk/overlay';
import { Placement } from '../util/overlay-position';
import { NglTooltipConfig } from './config';
export declare class NglTooltipTrigger implements OnChanges, OnDestroy {
    private element;
    private renderer;
    private viewContainerRef;
    private overlay;
    /**
     * The content as string or the connected template reference to show.
     */
    template: string | TemplateRef<void>;
    /**
     * Position relative to host element.
     */
    set placement(placement: Placement);
    get placement(): Placement;
    /**
     * Delay in milliseconds until it opens/closes.
     */
    set delay(_delay: any | any[]);
    /**
     * Whether the floating tooltip is visible.
     */
    set nglOpen(open: boolean);
    get nglOpen(): boolean;
    /**
     * Open/close without two-way binding input.
     */
    openAuto: boolean | string;
    /**
     * Gives the possibility to interact with the content of the popover.
     */
    interactive: boolean | string;
    /**
     * Extra class(es) you want to apply to tooltip host element.
     */
    tooltipClass: any;
    /**
     * Emit an event when actual tooltip is shown or hidden.
     */
    nglTooltipOpenChange: EventEmitter<boolean>;
    uid: string;
    /** Names of properties that should be proxy to child component. */
    private needProxyProperties;
    private _placement;
    private _open;
    private portal;
    private overlayRef;
    private tooltip;
    private openDelay;
    private closeDelay;
    private toggleTimeout;
    private positionChangesSubscription;
    private overlayListeners;
    private overlayElement;
    private config;
    constructor(defaultConfig: NglTooltipConfig, element: ElementRef, renderer: Renderer2, viewContainerRef: ViewContainerRef, overlay: Overlay);
    ngOnChanges(changes: SimpleChanges): void;
    onMouseOver(): void;
    onMouseOut(): void;
    ngOnDestroy(): void;
    open(delay?: number): void;
    close(delay?: number): void;
    toggle(): void;
    private handle;
    private emitOpen;
    private create;
    /** Detaches the currently-attached tooltip. */
    private detach;
    /** Create the overlay config and position strategy */
    private createOverlay;
    /** Updates the position of the current tooltip. */
    private updatePosition;
    private updateTooltip;
    /**
     * Set inputs of child components when this component's inputs change.
     */
    private updateProxies;
}

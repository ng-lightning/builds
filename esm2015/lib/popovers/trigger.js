import { __decorate } from "tslib";
import { Directive, Input, ElementRef, ViewContainerRef, Output, EventEmitter, Renderer2, HostListener } from '@angular/core';
import { Overlay } from '@angular/cdk/overlay';
import { ESCAPE } from '@angular/cdk/keycodes';
import { ComponentPortal } from '@angular/cdk/portal';
import { Subject, merge } from 'rxjs';
import { map, filter, mapTo, distinctUntilChanged } from 'rxjs/operators';
import { NglPopover } from './popover';
import { POSITION_MAP, DEFAULT_POPOVER_POSITIONS, getPlacementName } from '../util/overlay-position';
import { hasObservers } from '../util/hasObservers';
import { toBoolean, InputBoolean } from '../util/convert';
export class NglPopoverTrigger {
    constructor(element, renderer, viewContainerRef, overlay) {
        this.element = element;
        this.renderer = renderer;
        this.viewContainerRef = viewContainerRef;
        this.overlay = overlay;
        /**
         * Close button title (and assistive text).
         */
        this.closeTitle = 'Close dialog';
        /**
           * Whether or not to override the close button's visibility, if `nglPopoverOpenChange` is set.
           */
        this.closeVisible = true;
        /** Emit an event when actual popover is shown or hidden */
        this.nglPopoverOpenChange = new EventEmitter();
        /** Names of properties that should be proxy to child component. */
        this.needProxyProperties = new Set([
            'template',
            'header',
            'footer',
            'placement',
            'variant',
            'size',
            'closeTitle',
            'canClose',
            'popoverClass',
            'closeVisible',
        ]);
        this._placement = 'top';
        this.backdrop = new Subject();
        this.globalClickEventUnsubscriber = null;
        this.clickEventUnsubscriber = null;
    }
    /**
     * Position relative to host element.
     */
    set placement(_placement) {
        _placement = _placement || 'top';
        if (_placement === this._placement) {
            return;
        }
        this._placement = _placement;
        if (this.overlayRef) {
            this.updatePosition();
        }
    }
    get placement() {
        return this._placement;
    }
    /**
     * Whether the floating popover is visible.
     */
    set nglOpen(_open) {
        _open = toBoolean(_open) && (['backdrop', 'x', 'escape'].indexOf(_open) === -1);
        _open ? this.create() : this.detach();
        this._open = _open;
    }
    get nglOpen() {
        return this._open;
    }
    ngOnChanges(changes) {
        if (changes.nglOpen && !changes.nglOpen.firstChange) {
            const open = changes.nglOpen.currentValue;
            if (!toBoolean(open) || open === 'x' || open === 'escape') {
                this.element.nativeElement.focus();
            }
        }
        if (this.nglOpen) {
            this.updateProxies(changes);
            Promise.resolve().then(() => {
                if (this.overlayRef) {
                    this.overlayRef.updatePosition();
                }
            });
            this.popover.markForCheck();
        }
    }
    onclick(evt) {
        evt.preventDefault();
        this.toggle();
    }
    ngOnDestroy() {
        this.detach();
        this.close();
    }
    open() {
        if (!this.nglOpen) {
            this.nglPopoverOpenChange.emit(true);
        }
    }
    close(reason = false) {
        if (this.nglOpen) {
            this.nglPopoverOpenChange.emit(reason);
        }
    }
    toggle() {
        this.nglOpen ? this.close() : this.open();
    }
    create() {
        if (this.nglOpen) {
            return;
        }
        this.detach();
        const overlayRef = this.createOverlay();
        this.portal = this.portal || new ComponentPortal(NglPopover, this.viewContainerRef);
        this.popover = overlayRef.attach(this.portal).instance;
        this.needProxyProperties.forEach(property => this.updatePopover(property, this[property]));
        this.popover.markForCheck();
        this.clearGlobalClickTimeout();
        this.globalClickTimeout = setTimeout(() => {
            this.subscribeToClickEvents();
        });
        this.closeSubscription = this.popoverClosingActions()
            .subscribe(reason => this.close(reason));
    }
    /** Detaches the currently attached popover. */
    detach() {
        if (this.overlayRef) {
            this.overlayRef.detach();
            this.overlayRef.dispose();
            this.overlayRef = null;
        }
        this.unsubscribeFromClickEvents();
        if (this.closeSubscription) {
            this.closeSubscription.unsubscribe();
            this.closeSubscription = null;
        }
        if (this.positionChangesSubscription) {
            this.positionChangesSubscription.unsubscribe();
            this.positionChangesSubscription = null;
        }
        this.popover = null;
    }
    /** Create the overlay config and position strategy */
    createOverlay() {
        if (this.overlayRef) {
            return this.overlayRef;
        }
        // Create connected position strategy that listens for scroll events to reposition.
        const strategy = this.overlay.position()
            .flexibleConnectedTo(this.element)
            .withFlexibleDimensions(false)
            .withViewportMargin(8)
            .withPush(false);
        this.positionChangesSubscription = strategy.positionChanges
            .pipe(map(change => getPlacementName(change, this.placement)), distinctUntilChanged())
            .subscribe((placement) => {
            this.updatePosition();
            this.updatePopover('placement', placement);
            this.popover.markForCheck();
        });
        this.overlayRef = this.overlay.create({
            positionStrategy: strategy,
            scrollStrategy: this.overlay.scrollStrategies.reposition(),
        });
        this.updatePosition();
        return this.overlayRef;
    }
    /** Updates the position of the current popover. */
    updatePosition() {
        const position = this.overlayRef.getConfig().positionStrategy;
        position.withPositions([
            POSITION_MAP[this.placement].position,
            ...DEFAULT_POPOVER_POSITIONS,
        ]);
    }
    updatePopover(key, value) {
        this.popover[key] = value;
    }
    /** Set inputs of child components when this component's inputs change. */
    updateProxies(changes) {
        Object.keys(changes)
            .filter(key => this.needProxyProperties.has(key))
            .forEach(key => this.updatePopover(key, this[key]));
    }
    /** Returns a stream that emits whenever an action that should close the popover occurs. */
    popoverClosingActions() {
        const backdrop = this.backdrop.pipe(mapTo('backdrop'));
        const close = this.popover.close.pipe(mapTo('x'));
        const escape = this.overlayRef.keydownEvents().pipe(filter(event => event.keyCode === ESCAPE), mapTo('escape'));
        return merge(backdrop, close, escape);
    }
    handleGlobalClickEvent($event) {
        if ($event.$nglStop) {
            return;
        }
        this.backdrop.next();
    }
    subscribeToClickEvents() {
        this.unsubscribeFromClickEvents();
        // Prevent document listener to close it, since click happened inside
        this.clickEventUnsubscriber = this.renderer.listen(this.popover.element.nativeElement, 'click', ($event) => $event.$nglStop = true);
        this.globalClickEventUnsubscriber = this.renderer.listen('document', 'click', this.handleGlobalClickEvent.bind(this));
    }
    unsubscribeFromClickEvents() {
        if (this.clickEventUnsubscriber) {
            this.clickEventUnsubscriber();
            this.clickEventUnsubscriber = null;
        }
        if (this.globalClickEventUnsubscriber) {
            this.globalClickEventUnsubscriber();
            this.globalClickEventUnsubscriber = null;
        }
    }
    clearGlobalClickTimeout() {
        clearTimeout(this.globalClickTimeout);
    }
}
NglPopoverTrigger.decorators = [
    { type: Directive, args: [{
                selector: '[nglPopover]',
                exportAs: 'nglPopover',
            },] }
];
NglPopoverTrigger.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: ViewContainerRef },
    { type: Overlay }
];
NglPopoverTrigger.propDecorators = {
    template: [{ type: Input, args: ['nglPopover',] }],
    header: [{ type: Input, args: ['nglPopoverHeader',] }],
    footer: [{ type: Input, args: ['nglPopoverFooter',] }],
    variant: [{ type: Input, args: ['nglPopoverVariant',] }],
    size: [{ type: Input, args: ['nglPopoverSize',] }],
    placement: [{ type: Input, args: ['nglPopoverPlacement',] }],
    nglOpen: [{ type: Input, args: ['nglPopoverOpen',] }],
    closeTitle: [{ type: Input, args: ['nglPopoverCloseTitle',] }],
    popoverClass: [{ type: Input, args: ['nglPopoverClass',] }],
    closeVisible: [{ type: Input, args: ['nglPopoverCloseVisible',] }],
    nglPopoverOpenChange: [{ type: Output }],
    onclick: [{ type: HostListener, args: ['click', ['$event'],] }]
};
__decorate([
    InputBoolean()
], NglPopoverTrigger.prototype, "closeVisible", void 0);
__decorate([
    hasObservers('nglPopoverOpenChange')
], NglPopoverTrigger.prototype, "canClose", void 0);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJpZ2dlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nLWxpZ2h0bmluZy9zcmMvbGliL3BvcG92ZXJzL3RyaWdnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBZSxnQkFBZ0IsRUFDbkQsTUFBTSxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3RGLE9BQU8sRUFBYyxPQUFPLEVBQXFDLE1BQU0sc0JBQXNCLENBQUM7QUFDOUYsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQy9DLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBZ0IsTUFBTSxNQUFNLENBQUM7QUFDcEQsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDMUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUN2QyxPQUFPLEVBQUUsWUFBWSxFQUFFLHlCQUF5QixFQUFFLGdCQUFnQixFQUFhLE1BQU0sMEJBQTBCLENBQUM7QUFDaEgsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFTMUQsTUFBTSxPQUFPLGlCQUFpQjtJQXNHNUIsWUFDVSxPQUFtQixFQUNuQixRQUFtQixFQUNuQixnQkFBa0MsRUFDbEMsT0FBZ0I7UUFIaEIsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQUNuQixhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ25CLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsWUFBTyxH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QXFCO3NCQW9CM0IsS0FBSyxTQUFDLGdCQUFnQjt5QkFhdEIsS0FBSyxTQUFDLHNCQUFzQjsyQkFFNUIsS0FBSyxTQUFDLGlCQUFpQjsyQkFLdkIsS0FBSyxTQUFDLHdCQUF3QjttQ0FHOUIsTUFBTTtzQkF3RE4sWUFBWSxTQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQzs7QUEzRGdCO0lBQWYsWUFBWSxFQUFFO3VEQUFxQjtBQUsvQjtJQUFyQyxZQUFZLENBQUMsc0JBQXNCLENBQUM7bURBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgRWxlbWVudFJlZiwgVGVtcGxhdGVSZWYsIFZpZXdDb250YWluZXJSZWYsIE9uRGVzdHJveSwgT25DaGFuZ2VzLFxuICBTaW1wbGVDaGFuZ2VzLCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgUmVuZGVyZXIyLCBIb3N0TGlzdGVuZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE92ZXJsYXlSZWYsIE92ZXJsYXksIEZsZXhpYmxlQ29ubmVjdGVkUG9zaXRpb25TdHJhdGVneSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcbmltcG9ydCB7IEVTQ0FQRSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9rZXljb2Rlcyc7XG5pbXBvcnQgeyBDb21wb25lbnRQb3J0YWwgfSBmcm9tICdAYW5ndWxhci9jZGsvcG9ydGFsJztcbmltcG9ydCB7IFN1YmplY3QsIG1lcmdlLCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCwgZmlsdGVyLCBtYXBUbywgZGlzdGluY3RVbnRpbENoYW5nZWQgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBOZ2xQb3BvdmVyIH0gZnJvbSAnLi9wb3BvdmVyJztcbmltcG9ydCB7IFBPU0lUSU9OX01BUCwgREVGQVVMVF9QT1BPVkVSX1BPU0lUSU9OUywgZ2V0UGxhY2VtZW50TmFtZSwgUGxhY2VtZW50IH0gZnJvbSAnLi4vdXRpbC9vdmVybGF5LXBvc2l0aW9uJztcbmltcG9ydCB7IGhhc09ic2VydmVycyB9IGZyb20gJy4uL3V0aWwvaGFzT2JzZXJ2ZXJzJztcbmltcG9ydCB7IHRvQm9vbGVhbiwgSW5wdXRCb29sZWFuIH0gZnJvbSAnLi4vdXRpbC9jb252ZXJ0JztcblxuZXhwb3J0IHR5cGUgU2l6ZSA9ICdzbWFsbCcgfCAnbWVkaXVtJyB8ICdsYXJnZScgfCAnZnVsbC13aWR0aCc7XG5leHBvcnQgdHlwZSBWYXJpYW50ID0gJ3dhbGt0aHJvdWdoJyB8ICdmZWF0dXJlJyB8ICd3YXJuaW5nJyB8ICdlcnJvcicgfCAncGFuZWwnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbmdsUG9wb3Zlcl0nLFxuICBleHBvcnRBczogJ25nbFBvcG92ZXInLFxufSlcbmV4cG9ydCBjbGFzcyBOZ2xQb3BvdmVyVHJpZ2dlciBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcblxuICAvKipcbiAgICogVGhlIGJvZHkgYXMgc3RyaW5nIG9yIHRoZSBjb25uZWN0ZWQgdGVtcGxhdGUgcmVmZXJlbmNlIHRvIHNob3cuXG4gICAqL1xuICBASW5wdXQoJ25nbFBvcG92ZXInKSB0ZW1wbGF0ZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XG5cbiAgLyoqXG4gICAqIFRoZSBoZWFkZXIgYXMgc3RyaW5nIG9yIHRoZSBjb25uZWN0ZWQgdGVtcGxhdGUgcmVmZXJlbmNlIHRvIHNob3cuXG4gICAqL1xuICBASW5wdXQoJ25nbFBvcG92ZXJIZWFkZXInKSBoZWFkZXI6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuXG4gIC8qKlxuICAgKiBUaGUgZm9vdGVyIGFzIHN0cmluZyBvciB0aGUgY29ubmVjdGVkIHRlbXBsYXRlIHJlZmVyZW5jZSB0byBzaG93LlxuICAgKi9cbiAgQElucHV0KCduZ2xQb3BvdmVyRm9vdGVyJykgZm9vdGVyOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcblxuICAvKipcbiAgICogRGV0ZXJtaW5lcyB0aGUgdmFyaWFudCBvZiB0aGUgcG9wb3Zlci5cbiAgICovXG4gIEBJbnB1dCgnbmdsUG9wb3ZlclZhcmlhbnQnKSB2YXJpYW50OiBWYXJpYW50O1xuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmVzIHRoZSBzaXplIG9mIHRoZSBwb3BvdmVyLlxuICAgKi9cbiAgQElucHV0KCduZ2xQb3BvdmVyU2l6ZScpIHNpemU6IFNpemU7XG5cbiAgLyoqXG4gICAqIFBvc2l0aW9uIHJlbGF0aXZlIHRvIGhvc3QgZWxlbWVudC5cbiAgICovXG4gIEBJbnB1dCgnbmdsUG9wb3ZlclBsYWNlbWVudCcpXG4gIHNldCBwbGFjZW1lbnQoX3BsYWNlbWVudDogUGxhY2VtZW50KSB7XG4gICAgX3BsYWNlbWVudCA9IF9wbGFjZW1lbnQgfHwgJ3RvcCc7XG4gICAgaWYgKF9wbGFjZW1lbnQgPT09IHRoaXMuX3BsYWNlbWVudCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX3BsYWNlbWVudCA9IF9wbGFjZW1lbnQ7XG5cbiAgICBpZiAodGhpcy5vdmVybGF5UmVmKSB7XG4gICAgICB0aGlzLnVwZGF0ZVBvc2l0aW9uKCk7XG4gICAgfVxuICB9XG4gIGdldCBwbGFjZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3BsYWNlbWVudDtcbiAgfVxuXG4gIC8qKlxuICAgKiBXaGV0aGVyIHRoZSBmbG9hdGluZyBwb3BvdmVyIGlzIHZpc2libGUuXG4gICAqL1xuICBASW5wdXQoJ25nbFBvcG92ZXJPcGVuJylcbiAgc2V0IG5nbE9wZW4oX29wZW46IGFueSkge1xuICAgIF9vcGVuID0gdG9Cb29sZWFuKF9vcGVuKSAmJiAoWydiYWNrZHJvcCcsICd4JywgJ2VzY2FwZSddLmluZGV4T2YoX29wZW4pID09PSAtMSk7XG4gICAgX29wZW4gPyB0aGlzLmNyZWF0ZSgpIDogdGhpcy5kZXRhY2goKTtcbiAgICB0aGlzLl9vcGVuID0gX29wZW47XG4gIH1cbiAgZ2V0IG5nbE9wZW4oKSB7XG4gICAgcmV0dXJuIHRoaXMuX29wZW47XG4gIH1cblxuICAvKipcbiAgICogQ2xvc2UgYnV0dG9uIHRpdGxlIChhbmQgYXNzaXN0aXZlIHRleHQpLlxuICAgKi9cbiAgQElucHV0KCduZ2xQb3BvdmVyQ2xvc2VUaXRsZScpIGNsb3NlVGl0bGUgPSAnQ2xvc2UgZGlhbG9nJztcblxuICBASW5wdXQoJ25nbFBvcG92ZXJDbGFzcycpIHBvcG92ZXJDbGFzczogYW55O1xuXG4gIC8qKlxuXHQgKiBXaGV0aGVyIG9yIG5vdCB0byBvdmVycmlkZSB0aGUgY2xvc2UgYnV0dG9uJ3MgdmlzaWJpbGl0eSwgaWYgYG5nbFBvcG92ZXJPcGVuQ2hhbmdlYCBpcyBzZXQuXG5cdCAqL1xuICBASW5wdXQoJ25nbFBvcG92ZXJDbG9zZVZpc2libGUnKSBASW5wdXRCb29sZWFuKCkgY2xvc2VWaXNpYmxlID0gdHJ1ZTtcblxuICAvKiogRW1pdCBhbiBldmVudCB3aGVuIGFjdHVhbCBwb3BvdmVyIGlzIHNob3duIG9yIGhpZGRlbiAqL1xuICBAT3V0cHV0KCkgbmdsUG9wb3Zlck9wZW5DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBAaGFzT2JzZXJ2ZXJzKCduZ2xQb3BvdmVyT3BlbkNoYW5nZScpIGNhbkNsb3NlOiBib29sZWFuO1xuXG4gIC8qKiBOYW1lcyBvZiBwcm9wZXJ0aWVzIHRoYXQgc2hvdWxkIGJlIHByb3h5IHRvIGNoaWxkIGNvbXBvbmVudC4gKi9cbiAgcHJpdmF0ZSBuZWVkUHJveHlQcm9wZXJ0aWVzID0gbmV3IFNldChbXG4gICAgJ3RlbXBsYXRlJyxcbiAgICAnaGVhZGVyJyxcbiAgICAnZm9vdGVyJyxcbiAgICAncGxhY2VtZW50JyxcbiAgICAndmFyaWFudCcsXG4gICAgJ3NpemUnLFxuICAgICdjbG9zZVRpdGxlJyxcbiAgICAnY2FuQ2xvc2UnLFxuICAgICdwb3BvdmVyQ2xhc3MnLFxuICAgICdjbG9zZVZpc2libGUnLFxuICBdKTtcbiAgcHJpdmF0ZSBfcGxhY2VtZW50OiBQbGFjZW1lbnQgPSAndG9wJztcbiAgcHJpdmF0ZSBfb3BlbjogYm9vbGVhbjtcbiAgcHJpdmF0ZSBwb3J0YWw6IENvbXBvbmVudFBvcnRhbDxOZ2xQb3BvdmVyPjtcbiAgcHJpdmF0ZSBvdmVybGF5UmVmOiBPdmVybGF5UmVmIHwgbnVsbDtcbiAgcHJpdmF0ZSBwb3BvdmVyOiBOZ2xQb3BvdmVyIHwgbnVsbDtcbiAgcHJpdmF0ZSBiYWNrZHJvcCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG4gIHByaXZhdGUgY2xvc2VTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcbiAgcHJpdmF0ZSBwb3NpdGlvbkNoYW5nZXNTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcbiAgcHJpdmF0ZSBnbG9iYWxDbGlja0V2ZW50VW5zdWJzY3JpYmVyOiBGdW5jdGlvbiA9IG51bGw7XG4gIHByaXZhdGUgY2xpY2tFdmVudFVuc3Vic2NyaWJlcjogRnVuY3Rpb24gPSBudWxsO1xuICBwcml2YXRlIGdsb2JhbENsaWNrVGltZW91dDogbnVtYmVyO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZWxlbWVudDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSB2aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxuICAgIHByaXZhdGUgb3ZlcmxheTogT3ZlcmxheSkge31cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgaWYgKGNoYW5nZXMubmdsT3BlbiAmJiAhY2hhbmdlcy5uZ2xPcGVuLmZpcnN0Q2hhbmdlKSB7XG4gICAgICBjb25zdCBvcGVuID0gY2hhbmdlcy5uZ2xPcGVuLmN1cnJlbnRWYWx1ZTtcbiAgICAgIGlmICghdG9Cb29sZWFuKG9wZW4pIHx8IG9wZW4gPT09ICd4JyB8fCBvcGVuID09PSAnZXNjYXBlJykge1xuICAgICAgICB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0aGlzLm5nbE9wZW4pIHtcbiAgICAgIHRoaXMudXBkYXRlUHJveGllcyhjaGFuZ2VzKTtcblxuICAgICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLm92ZXJsYXlSZWYpIHtcbiAgICAgICAgICB0aGlzLm92ZXJsYXlSZWYudXBkYXRlUG9zaXRpb24oKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHRoaXMucG9wb3Zlci5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdjbGljaycsIFsnJGV2ZW50J10pXG4gIG9uY2xpY2soZXZ0OiBFdmVudCkge1xuICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMudG9nZ2xlKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmRldGFjaCgpO1xuICAgIHRoaXMuY2xvc2UoKTtcbiAgfVxuXG4gIHByaXZhdGUgb3BlbigpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMubmdsT3Blbikge1xuICAgICAgdGhpcy5uZ2xQb3BvdmVyT3BlbkNoYW5nZS5lbWl0KHRydWUpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgY2xvc2UocmVhc29uOiBhbnkgPSBmYWxzZSk6IHZvaWQge1xuICAgIGlmICh0aGlzLm5nbE9wZW4pIHtcbiAgICAgIHRoaXMubmdsUG9wb3Zlck9wZW5DaGFuZ2UuZW1pdChyZWFzb24pO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgdG9nZ2xlKCk6IHZvaWQge1xuICAgIHRoaXMubmdsT3BlbiA/IHRoaXMuY2xvc2UoKSA6IHRoaXMub3BlbigpO1xuICB9XG5cbiAgcHJpdmF0ZSBjcmVhdGUoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMubmdsT3Blbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuZGV0YWNoKCk7XG5cbiAgICBjb25zdCBvdmVybGF5UmVmID0gdGhpcy5jcmVhdGVPdmVybGF5KCk7XG5cbiAgICB0aGlzLnBvcnRhbCA9IHRoaXMucG9ydGFsIHx8IG5ldyBDb21wb25lbnRQb3J0YWwoTmdsUG9wb3ZlciwgdGhpcy52aWV3Q29udGFpbmVyUmVmKTtcbiAgICB0aGlzLnBvcG92ZXIgPSBvdmVybGF5UmVmLmF0dGFjaCh0aGlzLnBvcnRhbCkuaW5zdGFuY2U7XG5cbiAgICB0aGlzLm5lZWRQcm94eVByb3BlcnRpZXMuZm9yRWFjaChwcm9wZXJ0eSA9PiB0aGlzLnVwZGF0ZVBvcG92ZXIocHJvcGVydHksIHRoaXNbIHByb3BlcnR5IF0pKTtcbiAgICB0aGlzLnBvcG92ZXIubWFya0ZvckNoZWNrKCk7XG5cbiAgICB0aGlzLmNsZWFyR2xvYmFsQ2xpY2tUaW1lb3V0KCk7XG4gICAgdGhpcy5nbG9iYWxDbGlja1RpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuc3Vic2NyaWJlVG9DbGlja0V2ZW50cygpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5jbG9zZVN1YnNjcmlwdGlvbiA9IHRoaXMucG9wb3ZlckNsb3NpbmdBY3Rpb25zKClcbiAgICAgIC5zdWJzY3JpYmUocmVhc29uID0+IHRoaXMuY2xvc2UocmVhc29uKSk7XG4gIH1cblxuICAvKiogRGV0YWNoZXMgdGhlIGN1cnJlbnRseSBhdHRhY2hlZCBwb3BvdmVyLiAqL1xuICBwcml2YXRlIGRldGFjaCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5vdmVybGF5UmVmKSB7XG4gICAgICB0aGlzLm92ZXJsYXlSZWYuZGV0YWNoKCk7XG4gICAgICB0aGlzLm92ZXJsYXlSZWYuZGlzcG9zZSgpO1xuICAgICAgdGhpcy5vdmVybGF5UmVmID0gbnVsbDtcbiAgICB9XG5cbiAgICB0aGlzLnVuc3Vic2NyaWJlRnJvbUNsaWNrRXZlbnRzKCk7XG5cbiAgICBpZiAodGhpcy5jbG9zZVN1YnNjcmlwdGlvbikge1xuICAgICAgdGhpcy5jbG9zZVN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgdGhpcy5jbG9zZVN1YnNjcmlwdGlvbiA9IG51bGw7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucG9zaXRpb25DaGFuZ2VzU3Vic2NyaXB0aW9uKSB7XG4gICAgICB0aGlzLnBvc2l0aW9uQ2hhbmdlc1N1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgdGhpcy5wb3NpdGlvbkNoYW5nZXNTdWJzY3JpcHRpb24gPSBudWxsO1xuICAgIH1cblxuICAgIHRoaXMucG9wb3ZlciA9IG51bGw7XG4gIH1cblxuICAvKiogQ3JlYXRlIHRoZSBvdmVybGF5IGNvbmZpZyBhbmQgcG9zaXRpb24gc3RyYXRlZ3kgKi9cbiAgcHJpdmF0ZSBjcmVhdGVPdmVybGF5KCk6IE92ZXJsYXlSZWYge1xuICAgIGlmICh0aGlzLm92ZXJsYXlSZWYpIHtcbiAgICAgIHJldHVybiB0aGlzLm92ZXJsYXlSZWY7XG4gICAgfVxuXG4gICAgLy8gQ3JlYXRlIGNvbm5lY3RlZCBwb3NpdGlvbiBzdHJhdGVneSB0aGF0IGxpc3RlbnMgZm9yIHNjcm9sbCBldmVudHMgdG8gcmVwb3NpdGlvbi5cbiAgICBjb25zdCBzdHJhdGVneSA9IHRoaXMub3ZlcmxheS5wb3NpdGlvbigpXG4gICAgICAuZmxleGlibGVDb25uZWN0ZWRUbyh0aGlzLmVsZW1lbnQpXG4gICAgICAud2l0aEZsZXhpYmxlRGltZW5zaW9ucyhmYWxzZSlcbiAgICAgIC53aXRoVmlld3BvcnRNYXJnaW4oOClcbiAgICAgIC53aXRoUHVzaChmYWxzZSk7XG5cbiAgICB0aGlzLnBvc2l0aW9uQ2hhbmdlc1N1YnNjcmlwdGlvbiA9IHN0cmF0ZWd5LnBvc2l0aW9uQ2hhbmdlc1xuICAgICAgLnBpcGUobWFwKGNoYW5nZSA9PiBnZXRQbGFjZW1lbnROYW1lKGNoYW5nZSwgdGhpcy5wbGFjZW1lbnQpKSwgZGlzdGluY3RVbnRpbENoYW5nZWQoKSlcbiAgICAgIC5zdWJzY3JpYmUoKHBsYWNlbWVudDogUGxhY2VtZW50KSA9PiB7XG4gICAgICAgIHRoaXMudXBkYXRlUG9zaXRpb24oKTtcbiAgICAgICAgdGhpcy51cGRhdGVQb3BvdmVyKCdwbGFjZW1lbnQnLCBwbGFjZW1lbnQpO1xuICAgICAgICB0aGlzLnBvcG92ZXIubWFya0ZvckNoZWNrKCk7XG4gICAgICB9KTtcblxuICAgIHRoaXMub3ZlcmxheVJlZiA9IHRoaXMub3ZlcmxheS5jcmVhdGUoe1xuICAgICAgcG9zaXRpb25TdHJhdGVneTogc3RyYXRlZ3ksXG4gICAgICBzY3JvbGxTdHJhdGVneTogdGhpcy5vdmVybGF5LnNjcm9sbFN0cmF0ZWdpZXMucmVwb3NpdGlvbigpLFxuICAgIH0pO1xuXG4gICAgdGhpcy51cGRhdGVQb3NpdGlvbigpO1xuXG4gICAgcmV0dXJuIHRoaXMub3ZlcmxheVJlZjtcbiAgfVxuXG4gIC8qKiBVcGRhdGVzIHRoZSBwb3NpdGlvbiBvZiB0aGUgY3VycmVudCBwb3BvdmVyLiAqL1xuICBwcml2YXRlIHVwZGF0ZVBvc2l0aW9uKCk6IHZvaWQge1xuICAgIGNvbnN0IHBvc2l0aW9uID0gPEZsZXhpYmxlQ29ubmVjdGVkUG9zaXRpb25TdHJhdGVneT50aGlzLm92ZXJsYXlSZWYuZ2V0Q29uZmlnKCkucG9zaXRpb25TdHJhdGVneTtcblxuICAgIHBvc2l0aW9uLndpdGhQb3NpdGlvbnMoW1xuICAgICAgUE9TSVRJT05fTUFQW3RoaXMucGxhY2VtZW50XS5wb3NpdGlvbixcbiAgICAgIC4uLkRFRkFVTFRfUE9QT1ZFUl9QT1NJVElPTlMsXG4gICAgXSk7XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZVBvcG92ZXIoa2V5OiBzdHJpbmcsIHZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLnBvcG92ZXJbIGtleSBdID0gdmFsdWU7XG4gIH1cblxuICAvKiogU2V0IGlucHV0cyBvZiBjaGlsZCBjb21wb25lbnRzIHdoZW4gdGhpcyBjb21wb25lbnQncyBpbnB1dHMgY2hhbmdlLiAqL1xuICBwcml2YXRlIHVwZGF0ZVByb3hpZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIE9iamVjdC5rZXlzKGNoYW5nZXMpXG4gICAgICAuZmlsdGVyKGtleSA9PiB0aGlzLm5lZWRQcm94eVByb3BlcnRpZXMuaGFzKGtleSkpXG4gICAgICAuZm9yRWFjaChrZXkgPT4gdGhpcy51cGRhdGVQb3BvdmVyKGtleSwgdGhpc1trZXldKSk7XG4gIH1cblxuICAvKiogUmV0dXJucyBhIHN0cmVhbSB0aGF0IGVtaXRzIHdoZW5ldmVyIGFuIGFjdGlvbiB0aGF0IHNob3VsZCBjbG9zZSB0aGUgcG9wb3ZlciBvY2N1cnMuICovXG4gIHByaXZhdGUgcG9wb3ZlckNsb3NpbmdBY3Rpb25zKCkge1xuICAgIGNvbnN0IGJhY2tkcm9wID0gdGhpcy5iYWNrZHJvcC5waXBlKG1hcFRvKCdiYWNrZHJvcCcpKTtcbiAgICBjb25zdCBjbG9zZSA9IHRoaXMucG9wb3Zlci5jbG9zZS5waXBlKG1hcFRvKCd4JykpO1xuICAgIGNvbnN0IGVzY2FwZSA9IHRoaXMub3ZlcmxheVJlZi5rZXlkb3duRXZlbnRzKCkucGlwZShmaWx0ZXIoZXZlbnQgPT4gZXZlbnQua2V5Q29kZSA9PT0gRVNDQVBFKSwgbWFwVG8oJ2VzY2FwZScpKTtcbiAgICByZXR1cm4gbWVyZ2UoYmFja2Ryb3AsIGNsb3NlLCBlc2NhcGUpO1xuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVHbG9iYWxDbGlja0V2ZW50KCRldmVudDogYW55KSB7XG4gICAgaWYgKCRldmVudC4kbmdsU3RvcCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmJhY2tkcm9wLm5leHQoKTtcbiAgfVxuXG4gIHByaXZhdGUgc3Vic2NyaWJlVG9DbGlja0V2ZW50cygpIHtcbiAgICB0aGlzLnVuc3Vic2NyaWJlRnJvbUNsaWNrRXZlbnRzKCk7XG5cbiAgICAvLyBQcmV2ZW50IGRvY3VtZW50IGxpc3RlbmVyIHRvIGNsb3NlIGl0LCBzaW5jZSBjbGljayBoYXBwZW5lZCBpbnNpZGVcbiAgICB0aGlzLmNsaWNrRXZlbnRVbnN1YnNjcmliZXIgPSB0aGlzLnJlbmRlcmVyLmxpc3Rlbih0aGlzLnBvcG92ZXIuZWxlbWVudC5uYXRpdmVFbGVtZW50LCAnY2xpY2snLCAoJGV2ZW50OiBhbnkpID0+ICRldmVudC4kbmdsU3RvcCA9IHRydWUpO1xuXG4gICAgdGhpcy5nbG9iYWxDbGlja0V2ZW50VW5zdWJzY3JpYmVyID0gdGhpcy5yZW5kZXJlci5saXN0ZW4oJ2RvY3VtZW50JywgJ2NsaWNrJywgdGhpcy5oYW5kbGVHbG9iYWxDbGlja0V2ZW50LmJpbmQodGhpcykpO1xuICB9XG5cbiAgcHJpdmF0ZSB1bnN1YnNjcmliZUZyb21DbGlja0V2ZW50cygpIHtcbiAgICBpZiAodGhpcy5jbGlja0V2ZW50VW5zdWJzY3JpYmVyKSB7XG4gICAgICB0aGlzLmNsaWNrRXZlbnRVbnN1YnNjcmliZXIoKTtcbiAgICAgIHRoaXMuY2xpY2tFdmVudFVuc3Vic2NyaWJlciA9IG51bGw7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuZ2xvYmFsQ2xpY2tFdmVudFVuc3Vic2NyaWJlcikge1xuICAgICAgdGhpcy5nbG9iYWxDbGlja0V2ZW50VW5zdWJzY3JpYmVyKCk7XG4gICAgICB0aGlzLmdsb2JhbENsaWNrRXZlbnRVbnN1YnNjcmliZXIgPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgY2xlYXJHbG9iYWxDbGlja1RpbWVvdXQoKSB7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMuZ2xvYmFsQ2xpY2tUaW1lb3V0KTtcbiAgfVxufVxuIl19
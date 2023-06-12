import { __decorate } from "tslib";
import { Directive, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { ESCAPE } from '@angular/cdk/keycodes';
import { ComponentPortal } from '@angular/cdk/portal';
import { Subject, merge } from 'rxjs';
import { map, filter, mapTo, distinctUntilChanged } from 'rxjs/operators';
import { NglPopover } from './popover';
import { POSITION_MAP, DEFAULT_POPOVER_POSITIONS, getPlacementName } from '../util/overlay-position';
import { hasObservers } from '../util/hasObservers';
import { toBoolean, InputBoolean } from '../util/convert';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/overlay";
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
NglPopoverTrigger.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglPopoverTrigger, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i0.ViewContainerRef }, { token: i1.Overlay }], target: i0.ɵɵFactoryTarget.Directive });
NglPopoverTrigger.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.2.9", type: NglPopoverTrigger, selector: "[nglPopover]", inputs: { template: ["nglPopover", "template"], header: ["nglPopoverHeader", "header"], footer: ["nglPopoverFooter", "footer"], variant: ["nglPopoverVariant", "variant"], size: ["nglPopoverSize", "size"], placement: ["nglPopoverPlacement", "placement"], nglOpen: ["nglPopoverOpen", "nglOpen"], closeTitle: ["nglPopoverCloseTitle", "closeTitle"], popoverClass: ["nglPopoverClass", "popoverClass"], closeVisible: ["nglPopoverCloseVisible", "closeVisible"] }, outputs: { nglPopoverOpenChange: "nglPopoverOpenChange" }, host: { listeners: { "click": "onclick($event)" } }, exportAs: ["nglPopover"], usesOnChanges: true, ngImport: i0 });
__decorate([
    InputBoolean()
], NglPopoverTrigger.prototype, "closeVisible", void 0);
__decorate([
    hasObservers('nglPopoverOpenChange')
], NglPopoverTrigger.prototype, "canClose", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglPopoverTrigger, decorators: [{
            type: Directive,
            args: [{
                    selector: '[nglPopover]',
                    exportAs: 'nglPopover',
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i0.ViewContainerRef }, { type: i1.Overlay }]; }, propDecorators: { template: [{
                type: Input,
                args: ['nglPopover']
            }], header: [{
                type: Input,
                args: ['nglPopoverHeader']
            }], footer: [{
                type: Input,
                args: ['nglPopoverFooter']
            }], variant: [{
                type: Input,
                args: ['nglPopoverVariant']
            }], size: [{
                type: Input,
                args: ['nglPopoverSize']
            }], placement: [{
                type: Input,
                args: ['nglPopoverPlacement']
            }], nglOpen: [{
                type: Input,
                args: ['nglPopoverOpen']
            }], closeTitle: [{
                type: Input,
                args: ['nglPopoverCloseTitle']
            }], popoverClass: [{
                type: Input,
                args: ['nglPopoverClass']
            }], closeVisible: [{
                type: Input,
                args: ['nglPopoverCloseVisible']
            }], nglPopoverOpenChange: [{
                type: Output
            }], canClose: [], onclick: [{
                type: HostListener,
                args: ['click', ['$event']]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJpZ2dlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nLWxpZ2h0bmluZy9zcmMvbGliL3BvcG92ZXJzL3RyaWdnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUNSLE1BQU0sRUFBRSxZQUFZLEVBQWEsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXRGLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdEQsT0FBTyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQWdCLE1BQU0sTUFBTSxDQUFDO0FBQ3BELE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDdkMsT0FBTyxFQUFFLFlBQVksRUFBRSx5QkFBeUIsRUFBRSxnQkFBZ0IsRUFBYSxNQUFNLDBCQUEwQixDQUFDO0FBQ2hILE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNwRCxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDOzs7QUFTMUQsTUFBTSxPQUFPLGlCQUFpQjtJQXNHNUIsWUFDVSxPQUFtQixFQUNuQixRQUFtQixFQUNuQixnQkFBa0MsRUFDbEMsT0FBZ0I7UUFIaEIsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQUNuQixhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ25CLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsWUFBTyxHQUFQLE9BQU8sQ0FBUztRQTlDMUI7O1dBRUc7UUFDNEIsZUFBVSxHQUFHLGNBQWMsQ0FBQztRQUkzRDs7YUFFRTtRQUMrQyxpQkFB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LElBQUk7c0JBQTVCLEtBQUs7dUJBQUMsZ0JBQWdCO2dCQU1uQixTQUFTO3NCQURaLEtBQUs7dUJBQUMscUJBQXFCO2dCQXFCeEIsT0FBTztzQkFEVixLQUFLO3VCQUFDLGdCQUFnQjtnQkFhUSxVQUFVO3NCQUF4QyxLQUFLO3VCQUFDLHNCQUFzQjtnQkFFSCxZQUFZO3NCQUFyQyxLQUFLO3VCQUFDLGlCQUFpQjtnQkFLeUIsWUFBWTtzQkFBNUQsS0FBSzt1QkFBQyx3QkFBd0I7Z0JBR3JCLG9CQUFvQjtzQkFBN0IsTUFBTTtnQkFFK0IsUUFBUSxNQXVEOUMsT0FBTztzQkFETixZQUFZO3VCQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIEVsZW1lbnRSZWYsIFRlbXBsYXRlUmVmLCBWaWV3Q29udGFpbmVyUmVmLCBPbkRlc3Ryb3ksIE9uQ2hhbmdlcyxcbiAgU2ltcGxlQ2hhbmdlcywgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIFJlbmRlcmVyMiwgSG9zdExpc3RlbmVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPdmVybGF5UmVmLCBPdmVybGF5LCBGbGV4aWJsZUNvbm5lY3RlZFBvc2l0aW9uU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XG5pbXBvcnQgeyBFU0NBUEUgfSBmcm9tICdAYW5ndWxhci9jZGsva2V5Y29kZXMnO1xuaW1wb3J0IHsgQ29tcG9uZW50UG9ydGFsIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BvcnRhbCc7XG5pbXBvcnQgeyBTdWJqZWN0LCBtZXJnZSwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAsIGZpbHRlciwgbWFwVG8sIGRpc3RpbmN0VW50aWxDaGFuZ2VkIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgTmdsUG9wb3ZlciB9IGZyb20gJy4vcG9wb3Zlcic7XG5pbXBvcnQgeyBQT1NJVElPTl9NQVAsIERFRkFVTFRfUE9QT1ZFUl9QT1NJVElPTlMsIGdldFBsYWNlbWVudE5hbWUsIFBsYWNlbWVudCB9IGZyb20gJy4uL3V0aWwvb3ZlcmxheS1wb3NpdGlvbic7XG5pbXBvcnQgeyBoYXNPYnNlcnZlcnMgfSBmcm9tICcuLi91dGlsL2hhc09ic2VydmVycyc7XG5pbXBvcnQgeyB0b0Jvb2xlYW4sIElucHV0Qm9vbGVhbiB9IGZyb20gJy4uL3V0aWwvY29udmVydCc7XG5cbmV4cG9ydCB0eXBlIFNpemUgPSAnc21hbGwnIHwgJ21lZGl1bScgfCAnbGFyZ2UnIHwgJ2Z1bGwtd2lkdGgnO1xuZXhwb3J0IHR5cGUgVmFyaWFudCA9ICd3YWxrdGhyb3VnaCcgfCAnZmVhdHVyZScgfCAnd2FybmluZycgfCAnZXJyb3InIHwgJ3BhbmVsJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW25nbFBvcG92ZXJdJyxcbiAgZXhwb3J0QXM6ICduZ2xQb3BvdmVyJyxcbn0pXG5leHBvcnQgY2xhc3MgTmdsUG9wb3ZlclRyaWdnZXIgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG5cbiAgLyoqXG4gICAqIFRoZSBib2R5IGFzIHN0cmluZyBvciB0aGUgY29ubmVjdGVkIHRlbXBsYXRlIHJlZmVyZW5jZSB0byBzaG93LlxuICAgKi9cbiAgQElucHV0KCduZ2xQb3BvdmVyJykgdGVtcGxhdGU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuXG4gIC8qKlxuICAgKiBUaGUgaGVhZGVyIGFzIHN0cmluZyBvciB0aGUgY29ubmVjdGVkIHRlbXBsYXRlIHJlZmVyZW5jZSB0byBzaG93LlxuICAgKi9cbiAgQElucHV0KCduZ2xQb3BvdmVySGVhZGVyJykgaGVhZGVyOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcblxuICAvKipcbiAgICogVGhlIGZvb3RlciBhcyBzdHJpbmcgb3IgdGhlIGNvbm5lY3RlZCB0ZW1wbGF0ZSByZWZlcmVuY2UgdG8gc2hvdy5cbiAgICovXG4gIEBJbnB1dCgnbmdsUG9wb3ZlckZvb3RlcicpIGZvb3Rlcjogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XG5cbiAgLyoqXG4gICAqIERldGVybWluZXMgdGhlIHZhcmlhbnQgb2YgdGhlIHBvcG92ZXIuXG4gICAqL1xuICBASW5wdXQoJ25nbFBvcG92ZXJWYXJpYW50JykgdmFyaWFudDogVmFyaWFudDtcblxuICAvKipcbiAgICogRGV0ZXJtaW5lcyB0aGUgc2l6ZSBvZiB0aGUgcG9wb3Zlci5cbiAgICovXG4gIEBJbnB1dCgnbmdsUG9wb3ZlclNpemUnKSBzaXplOiBTaXplO1xuXG4gIC8qKlxuICAgKiBQb3NpdGlvbiByZWxhdGl2ZSB0byBob3N0IGVsZW1lbnQuXG4gICAqL1xuICBASW5wdXQoJ25nbFBvcG92ZXJQbGFjZW1lbnQnKVxuICBzZXQgcGxhY2VtZW50KF9wbGFjZW1lbnQ6IFBsYWNlbWVudCkge1xuICAgIF9wbGFjZW1lbnQgPSBfcGxhY2VtZW50IHx8ICd0b3AnO1xuICAgIGlmIChfcGxhY2VtZW50ID09PSB0aGlzLl9wbGFjZW1lbnQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl9wbGFjZW1lbnQgPSBfcGxhY2VtZW50O1xuXG4gICAgaWYgKHRoaXMub3ZlcmxheVJlZikge1xuICAgICAgdGhpcy51cGRhdGVQb3NpdGlvbigpO1xuICAgIH1cbiAgfVxuICBnZXQgcGxhY2VtZW50KCkge1xuICAgIHJldHVybiB0aGlzLl9wbGFjZW1lbnQ7XG4gIH1cblxuICAvKipcbiAgICogV2hldGhlciB0aGUgZmxvYXRpbmcgcG9wb3ZlciBpcyB2aXNpYmxlLlxuICAgKi9cbiAgQElucHV0KCduZ2xQb3BvdmVyT3BlbicpXG4gIHNldCBuZ2xPcGVuKF9vcGVuOiBhbnkpIHtcbiAgICBfb3BlbiA9IHRvQm9vbGVhbihfb3BlbikgJiYgKFsnYmFja2Ryb3AnLCAneCcsICdlc2NhcGUnXS5pbmRleE9mKF9vcGVuKSA9PT0gLTEpO1xuICAgIF9vcGVuID8gdGhpcy5jcmVhdGUoKSA6IHRoaXMuZGV0YWNoKCk7XG4gICAgdGhpcy5fb3BlbiA9IF9vcGVuO1xuICB9XG4gIGdldCBuZ2xPcGVuKCkge1xuICAgIHJldHVybiB0aGlzLl9vcGVuO1xuICB9XG5cbiAgLyoqXG4gICAqIENsb3NlIGJ1dHRvbiB0aXRsZSAoYW5kIGFzc2lzdGl2ZSB0ZXh0KS5cbiAgICovXG4gIEBJbnB1dCgnbmdsUG9wb3ZlckNsb3NlVGl0bGUnKSBjbG9zZVRpdGxlID0gJ0Nsb3NlIGRpYWxvZyc7XG5cbiAgQElucHV0KCduZ2xQb3BvdmVyQ2xhc3MnKSBwb3BvdmVyQ2xhc3M6IGFueTtcblxuICAvKipcblx0ICogV2hldGhlciBvciBub3QgdG8gb3ZlcnJpZGUgdGhlIGNsb3NlIGJ1dHRvbidzIHZpc2liaWxpdHksIGlmIGBuZ2xQb3BvdmVyT3BlbkNoYW5nZWAgaXMgc2V0LlxuXHQgKi9cbiAgQElucHV0KCduZ2xQb3BvdmVyQ2xvc2VWaXNpYmxlJykgQElucHV0Qm9vbGVhbigpIGNsb3NlVmlzaWJsZSA9IHRydWU7XG5cbiAgLyoqIEVtaXQgYW4gZXZlbnQgd2hlbiBhY3R1YWwgcG9wb3ZlciBpcyBzaG93biBvciBoaWRkZW4gKi9cbiAgQE91dHB1dCgpIG5nbFBvcG92ZXJPcGVuQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgQGhhc09ic2VydmVycygnbmdsUG9wb3Zlck9wZW5DaGFuZ2UnKSBjYW5DbG9zZTogYm9vbGVhbjtcblxuICAvKiogTmFtZXMgb2YgcHJvcGVydGllcyB0aGF0IHNob3VsZCBiZSBwcm94eSB0byBjaGlsZCBjb21wb25lbnQuICovXG4gIHByaXZhdGUgbmVlZFByb3h5UHJvcGVydGllcyA9IG5ldyBTZXQoW1xuICAgICd0ZW1wbGF0ZScsXG4gICAgJ2hlYWRlcicsXG4gICAgJ2Zvb3RlcicsXG4gICAgJ3BsYWNlbWVudCcsXG4gICAgJ3ZhcmlhbnQnLFxuICAgICdzaXplJyxcbiAgICAnY2xvc2VUaXRsZScsXG4gICAgJ2NhbkNsb3NlJyxcbiAgICAncG9wb3ZlckNsYXNzJyxcbiAgICAnY2xvc2VWaXNpYmxlJyxcbiAgXSk7XG4gIHByaXZhdGUgX3BsYWNlbWVudDogUGxhY2VtZW50ID0gJ3RvcCc7XG4gIHByaXZhdGUgX29wZW46IGJvb2xlYW47XG4gIHByaXZhdGUgcG9ydGFsOiBDb21wb25lbnRQb3J0YWw8TmdsUG9wb3Zlcj47XG4gIHByaXZhdGUgb3ZlcmxheVJlZjogT3ZlcmxheVJlZiB8IG51bGw7XG4gIHByaXZhdGUgcG9wb3ZlcjogTmdsUG9wb3ZlciB8IG51bGw7XG4gIHByaXZhdGUgYmFja2Ryb3AgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuICBwcml2YXRlIGNsb3NlU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG4gIHByaXZhdGUgcG9zaXRpb25DaGFuZ2VzU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG4gIHByaXZhdGUgZ2xvYmFsQ2xpY2tFdmVudFVuc3Vic2NyaWJlcjogRnVuY3Rpb24gPSBudWxsO1xuICBwcml2YXRlIGNsaWNrRXZlbnRVbnN1YnNjcmliZXI6IEZ1bmN0aW9uID0gbnVsbDtcbiAgcHJpdmF0ZSBnbG9iYWxDbGlja1RpbWVvdXQ6IG51bWJlcjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGVsZW1lbnQ6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZixcbiAgICBwcml2YXRlIG92ZXJsYXk6IE92ZXJsYXkpIHt9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGlmIChjaGFuZ2VzLm5nbE9wZW4gJiYgIWNoYW5nZXMubmdsT3Blbi5maXJzdENoYW5nZSkge1xuICAgICAgY29uc3Qgb3BlbiA9IGNoYW5nZXMubmdsT3Blbi5jdXJyZW50VmFsdWU7XG4gICAgICBpZiAoIXRvQm9vbGVhbihvcGVuKSB8fCBvcGVuID09PSAneCcgfHwgb3BlbiA9PT0gJ2VzY2FwZScpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGhpcy5uZ2xPcGVuKSB7XG4gICAgICB0aGlzLnVwZGF0ZVByb3hpZXMoY2hhbmdlcyk7XG5cbiAgICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5vdmVybGF5UmVmKSB7XG4gICAgICAgICAgdGhpcy5vdmVybGF5UmVmLnVwZGF0ZVBvc2l0aW9uKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLnBvcG92ZXIubWFya0ZvckNoZWNrKCk7XG4gICAgfVxuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snLCBbJyRldmVudCddKVxuICBvbmNsaWNrKGV2dDogRXZlbnQpIHtcbiAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLnRvZ2dsZSgpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5kZXRhY2goKTtcbiAgICB0aGlzLmNsb3NlKCk7XG4gIH1cblxuICBwcml2YXRlIG9wZW4oKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLm5nbE9wZW4pIHtcbiAgICAgIHRoaXMubmdsUG9wb3Zlck9wZW5DaGFuZ2UuZW1pdCh0cnVlKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGNsb3NlKHJlYXNvbjogYW55ID0gZmFsc2UpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5uZ2xPcGVuKSB7XG4gICAgICB0aGlzLm5nbFBvcG92ZXJPcGVuQ2hhbmdlLmVtaXQocmVhc29uKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHRvZ2dsZSgpOiB2b2lkIHtcbiAgICB0aGlzLm5nbE9wZW4gPyB0aGlzLmNsb3NlKCkgOiB0aGlzLm9wZW4oKTtcbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm5nbE9wZW4pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmRldGFjaCgpO1xuXG4gICAgY29uc3Qgb3ZlcmxheVJlZiA9IHRoaXMuY3JlYXRlT3ZlcmxheSgpO1xuXG4gICAgdGhpcy5wb3J0YWwgPSB0aGlzLnBvcnRhbCB8fCBuZXcgQ29tcG9uZW50UG9ydGFsKE5nbFBvcG92ZXIsIHRoaXMudmlld0NvbnRhaW5lclJlZik7XG4gICAgdGhpcy5wb3BvdmVyID0gb3ZlcmxheVJlZi5hdHRhY2godGhpcy5wb3J0YWwpLmluc3RhbmNlO1xuXG4gICAgdGhpcy5uZWVkUHJveHlQcm9wZXJ0aWVzLmZvckVhY2gocHJvcGVydHkgPT4gdGhpcy51cGRhdGVQb3BvdmVyKHByb3BlcnR5LCB0aGlzWyBwcm9wZXJ0eSBdKSk7XG4gICAgdGhpcy5wb3BvdmVyLm1hcmtGb3JDaGVjaygpO1xuXG4gICAgdGhpcy5jbGVhckdsb2JhbENsaWNrVGltZW91dCgpO1xuICAgIHRoaXMuZ2xvYmFsQ2xpY2tUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLnN1YnNjcmliZVRvQ2xpY2tFdmVudHMoKTtcbiAgICB9KTtcblxuICAgIHRoaXMuY2xvc2VTdWJzY3JpcHRpb24gPSB0aGlzLnBvcG92ZXJDbG9zaW5nQWN0aW9ucygpXG4gICAgICAuc3Vic2NyaWJlKHJlYXNvbiA9PiB0aGlzLmNsb3NlKHJlYXNvbikpO1xuICB9XG5cbiAgLyoqIERldGFjaGVzIHRoZSBjdXJyZW50bHkgYXR0YWNoZWQgcG9wb3Zlci4gKi9cbiAgcHJpdmF0ZSBkZXRhY2goKTogdm9pZCB7XG4gICAgaWYgKHRoaXMub3ZlcmxheVJlZikge1xuICAgICAgdGhpcy5vdmVybGF5UmVmLmRldGFjaCgpO1xuICAgICAgdGhpcy5vdmVybGF5UmVmLmRpc3Bvc2UoKTtcbiAgICAgIHRoaXMub3ZlcmxheVJlZiA9IG51bGw7XG4gICAgfVxuXG4gICAgdGhpcy51bnN1YnNjcmliZUZyb21DbGlja0V2ZW50cygpO1xuXG4gICAgaWYgKHRoaXMuY2xvc2VTdWJzY3JpcHRpb24pIHtcbiAgICAgIHRoaXMuY2xvc2VTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgIHRoaXMuY2xvc2VTdWJzY3JpcHRpb24gPSBudWxsO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnBvc2l0aW9uQ2hhbmdlc1N1YnNjcmlwdGlvbikge1xuICAgICAgdGhpcy5wb3NpdGlvbkNoYW5nZXNTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgIHRoaXMucG9zaXRpb25DaGFuZ2VzU3Vic2NyaXB0aW9uID0gbnVsbDtcbiAgICB9XG5cbiAgICB0aGlzLnBvcG92ZXIgPSBudWxsO1xuICB9XG5cbiAgLyoqIENyZWF0ZSB0aGUgb3ZlcmxheSBjb25maWcgYW5kIHBvc2l0aW9uIHN0cmF0ZWd5ICovXG4gIHByaXZhdGUgY3JlYXRlT3ZlcmxheSgpOiBPdmVybGF5UmVmIHtcbiAgICBpZiAodGhpcy5vdmVybGF5UmVmKSB7XG4gICAgICByZXR1cm4gdGhpcy5vdmVybGF5UmVmO1xuICAgIH1cblxuICAgIC8vIENyZWF0ZSBjb25uZWN0ZWQgcG9zaXRpb24gc3RyYXRlZ3kgdGhhdCBsaXN0ZW5zIGZvciBzY3JvbGwgZXZlbnRzIHRvIHJlcG9zaXRpb24uXG4gICAgY29uc3Qgc3RyYXRlZ3kgPSB0aGlzLm92ZXJsYXkucG9zaXRpb24oKVxuICAgICAgLmZsZXhpYmxlQ29ubmVjdGVkVG8odGhpcy5lbGVtZW50KVxuICAgICAgLndpdGhGbGV4aWJsZURpbWVuc2lvbnMoZmFsc2UpXG4gICAgICAud2l0aFZpZXdwb3J0TWFyZ2luKDgpXG4gICAgICAud2l0aFB1c2goZmFsc2UpO1xuXG4gICAgdGhpcy5wb3NpdGlvbkNoYW5nZXNTdWJzY3JpcHRpb24gPSBzdHJhdGVneS5wb3NpdGlvbkNoYW5nZXNcbiAgICAgIC5waXBlKG1hcChjaGFuZ2UgPT4gZ2V0UGxhY2VtZW50TmFtZShjaGFuZ2UsIHRoaXMucGxhY2VtZW50KSksIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCkpXG4gICAgICAuc3Vic2NyaWJlKChwbGFjZW1lbnQ6IFBsYWNlbWVudCkgPT4ge1xuICAgICAgICB0aGlzLnVwZGF0ZVBvc2l0aW9uKCk7XG4gICAgICAgIHRoaXMudXBkYXRlUG9wb3ZlcigncGxhY2VtZW50JywgcGxhY2VtZW50KTtcbiAgICAgICAgdGhpcy5wb3BvdmVyLm1hcmtGb3JDaGVjaygpO1xuICAgICAgfSk7XG5cbiAgICB0aGlzLm92ZXJsYXlSZWYgPSB0aGlzLm92ZXJsYXkuY3JlYXRlKHtcbiAgICAgIHBvc2l0aW9uU3RyYXRlZ3k6IHN0cmF0ZWd5LFxuICAgICAgc2Nyb2xsU3RyYXRlZ3k6IHRoaXMub3ZlcmxheS5zY3JvbGxTdHJhdGVnaWVzLnJlcG9zaXRpb24oKSxcbiAgICB9KTtcblxuICAgIHRoaXMudXBkYXRlUG9zaXRpb24oKTtcblxuICAgIHJldHVybiB0aGlzLm92ZXJsYXlSZWY7XG4gIH1cblxuICAvKiogVXBkYXRlcyB0aGUgcG9zaXRpb24gb2YgdGhlIGN1cnJlbnQgcG9wb3Zlci4gKi9cbiAgcHJpdmF0ZSB1cGRhdGVQb3NpdGlvbigpOiB2b2lkIHtcbiAgICBjb25zdCBwb3NpdGlvbiA9IDxGbGV4aWJsZUNvbm5lY3RlZFBvc2l0aW9uU3RyYXRlZ3k+dGhpcy5vdmVybGF5UmVmLmdldENvbmZpZygpLnBvc2l0aW9uU3RyYXRlZ3k7XG5cbiAgICBwb3NpdGlvbi53aXRoUG9zaXRpb25zKFtcbiAgICAgIFBPU0lUSU9OX01BUFt0aGlzLnBsYWNlbWVudF0ucG9zaXRpb24sXG4gICAgICAuLi5ERUZBVUxUX1BPUE9WRVJfUE9TSVRJT05TLFxuICAgIF0pO1xuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVQb3BvdmVyKGtleTogc3RyaW5nLCB2YWx1ZTogYW55KTogdm9pZCB7XG4gICAgdGhpcy5wb3BvdmVyWyBrZXkgXSA9IHZhbHVlO1xuICB9XG5cbiAgLyoqIFNldCBpbnB1dHMgb2YgY2hpbGQgY29tcG9uZW50cyB3aGVuIHRoaXMgY29tcG9uZW50J3MgaW5wdXRzIGNoYW5nZS4gKi9cbiAgcHJpdmF0ZSB1cGRhdGVQcm94aWVzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBPYmplY3Qua2V5cyhjaGFuZ2VzKVxuICAgICAgLmZpbHRlcihrZXkgPT4gdGhpcy5uZWVkUHJveHlQcm9wZXJ0aWVzLmhhcyhrZXkpKVxuICAgICAgLmZvckVhY2goa2V5ID0+IHRoaXMudXBkYXRlUG9wb3ZlcihrZXksIHRoaXNba2V5XSkpO1xuICB9XG5cbiAgLyoqIFJldHVybnMgYSBzdHJlYW0gdGhhdCBlbWl0cyB3aGVuZXZlciBhbiBhY3Rpb24gdGhhdCBzaG91bGQgY2xvc2UgdGhlIHBvcG92ZXIgb2NjdXJzLiAqL1xuICBwcml2YXRlIHBvcG92ZXJDbG9zaW5nQWN0aW9ucygpIHtcbiAgICBjb25zdCBiYWNrZHJvcCA9IHRoaXMuYmFja2Ryb3AucGlwZShtYXBUbygnYmFja2Ryb3AnKSk7XG4gICAgY29uc3QgY2xvc2UgPSB0aGlzLnBvcG92ZXIuY2xvc2UucGlwZShtYXBUbygneCcpKTtcbiAgICBjb25zdCBlc2NhcGUgPSB0aGlzLm92ZXJsYXlSZWYua2V5ZG93bkV2ZW50cygpLnBpcGUoZmlsdGVyKGV2ZW50ID0+IGV2ZW50LmtleUNvZGUgPT09IEVTQ0FQRSksIG1hcFRvKCdlc2NhcGUnKSk7XG4gICAgcmV0dXJuIG1lcmdlKGJhY2tkcm9wLCBjbG9zZSwgZXNjYXBlKTtcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlR2xvYmFsQ2xpY2tFdmVudCgkZXZlbnQ6IGFueSkge1xuICAgIGlmICgkZXZlbnQuJG5nbFN0b3ApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5iYWNrZHJvcC5uZXh0KCk7XG4gIH1cblxuICBwcml2YXRlIHN1YnNjcmliZVRvQ2xpY2tFdmVudHMoKSB7XG4gICAgdGhpcy51bnN1YnNjcmliZUZyb21DbGlja0V2ZW50cygpO1xuXG4gICAgLy8gUHJldmVudCBkb2N1bWVudCBsaXN0ZW5lciB0byBjbG9zZSBpdCwgc2luY2UgY2xpY2sgaGFwcGVuZWQgaW5zaWRlXG4gICAgdGhpcy5jbGlja0V2ZW50VW5zdWJzY3JpYmVyID0gdGhpcy5yZW5kZXJlci5saXN0ZW4odGhpcy5wb3BvdmVyLmVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ2NsaWNrJywgKCRldmVudDogYW55KSA9PiAkZXZlbnQuJG5nbFN0b3AgPSB0cnVlKTtcblxuICAgIHRoaXMuZ2xvYmFsQ2xpY2tFdmVudFVuc3Vic2NyaWJlciA9IHRoaXMucmVuZGVyZXIubGlzdGVuKCdkb2N1bWVudCcsICdjbGljaycsIHRoaXMuaGFuZGxlR2xvYmFsQ2xpY2tFdmVudC5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIHByaXZhdGUgdW5zdWJzY3JpYmVGcm9tQ2xpY2tFdmVudHMoKSB7XG4gICAgaWYgKHRoaXMuY2xpY2tFdmVudFVuc3Vic2NyaWJlcikge1xuICAgICAgdGhpcy5jbGlja0V2ZW50VW5zdWJzY3JpYmVyKCk7XG4gICAgICB0aGlzLmNsaWNrRXZlbnRVbnN1YnNjcmliZXIgPSBudWxsO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmdsb2JhbENsaWNrRXZlbnRVbnN1YnNjcmliZXIpIHtcbiAgICAgIHRoaXMuZ2xvYmFsQ2xpY2tFdmVudFVuc3Vic2NyaWJlcigpO1xuICAgICAgdGhpcy5nbG9iYWxDbGlja0V2ZW50VW5zdWJzY3JpYmVyID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGNsZWFyR2xvYmFsQ2xpY2tUaW1lb3V0KCkge1xuICAgIGNsZWFyVGltZW91dCh0aGlzLmdsb2JhbENsaWNrVGltZW91dCk7XG4gIH1cbn1cbiJdfQ==
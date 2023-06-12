import { __decorate } from "tslib";
import { Directive, Input, Output, EventEmitter, HostListener, Optional, Inject } from '@angular/core';
import { ComponentPortal } from '@angular/cdk/portal';
import { map, distinctUntilChanged } from 'rxjs/operators';
import { NglTooltip } from './tooltip';
import { POSITION_MAP, DEFAULT_TOOLTIP_POSITIONS, getPlacementName } from '../util/overlay-position';
import { uniqueId } from '../util/util';
import { InputBoolean } from '../util/convert';
import { NGL_TOOLTIP_CONFIG, NglTooltipConfig } from './config';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/overlay";
import * as i2 from "./config";
export class NglTooltipTrigger {
    constructor(defaultConfig, element, renderer, viewContainerRef, overlay) {
        this.element = element;
        this.renderer = renderer;
        this.viewContainerRef = viewContainerRef;
        this.overlay = overlay;
        /**
         * Emit an event when actual tooltip is shown or hidden.
         */
        this.nglTooltipOpenChange = new EventEmitter();
        this.uid = uniqueId('tooltip');
        /** Names of properties that should be proxy to child component. */
        this.needProxyProperties = new Set([
            'template',
            'placement',
            'uid',
            'tooltipClass',
        ]);
        this.openDelay = 0;
        this.closeDelay = 0;
        this.toggleTimeout = null;
        this.overlayListeners = new Set();
        this.config = { ...new NglTooltipConfig(), ...defaultConfig };
        this.openAuto = this.config.openAuto;
        this.interactive = this.config.interactive;
        this.delay = this.config.delay;
        this.renderer.setAttribute(this.element.nativeElement, 'aria-describedby', this.uid);
    }
    /**
     * Position relative to host element.
     */
    set placement(placement) {
        if (placement === this.placement) {
            return;
        }
        this._placement = placement;
        if (this.overlayRef) {
            this.updatePosition();
        }
    }
    get placement() {
        return this._placement || this.config.placement;
    }
    /**
     * Delay in milliseconds until it opens/closes.
     */
    set delay(_delay) {
        const delay = Array.isArray(_delay) ? _delay : [_delay, _delay];
        [this.openDelay, this.closeDelay] = delay.map(Number);
    }
    /**
     * Whether the floating tooltip is visible.
     */
    set nglOpen(open) {
        if (open === this.nglOpen) {
            return;
        }
        open ? this.create() : this.detach();
        this._open = open;
    }
    get nglOpen() {
        return this._open;
    }
    ngOnChanges(changes) {
        if (this.nglOpen) {
            this.updateProxies(changes);
            Promise.resolve().then(() => {
                if (this.overlayRef) {
                    this.overlayRef.updatePosition();
                }
            });
        }
    }
    onMouseOver() {
        this.open();
    }
    onMouseOut() {
        this.close();
        if (this.overlayRef && !this.overlayElement && this.interactive) {
            this.overlayElement = this.overlayRef.overlayElement;
            this.overlayListeners.add(this.renderer.listen(this.overlayElement, 'mouseenter', () => this.open()));
            this.overlayListeners.add(this.renderer.listen(this.overlayElement, 'mouseleave', () => this.close()));
        }
    }
    ngOnDestroy() {
        this.detach();
        this.close(0);
    }
    // Expose open method
    open(delay = this.openDelay) {
        this.handle(true, delay);
    }
    // Expose close method
    close(delay = this.closeDelay) {
        this.handle(false, delay);
    }
    // Expose toggle method
    toggle() {
        this.nglOpen ? this.close(0) : this.open(0);
    }
    handle(open, delay) {
        if (this.toggleTimeout !== null) {
            clearTimeout(this.toggleTimeout);
            this.toggleTimeout = null;
        }
        if (open !== this.nglOpen) {
            if (delay > 0) {
                this.toggleTimeout = setTimeout(() => {
                    this.toggleTimeout = null;
                    this.emitOpen(open);
                }, delay);
            }
            else {
                this.emitOpen(open);
            }
        }
    }
    emitOpen(open) {
        if (this.openAuto) {
            this.nglOpen = open;
        }
        this.nglTooltipOpenChange.emit(open);
    }
    create() {
        if (this.nglOpen) {
            return;
        }
        this.detach();
        const overlayRef = this.createOverlay();
        this.portal = this.portal || new ComponentPortal(NglTooltip, this.viewContainerRef);
        this.tooltip = overlayRef.attach(this.portal).instance;
        this.needProxyProperties.forEach(property => this.updateTooltip(property, this[property]));
    }
    /** Detaches the currently-attached tooltip. */
    detach() {
        if (this.overlayRef) {
            this.overlayRef.detach();
            this.overlayRef.dispose();
            this.overlayRef = null;
        }
        // Clean up the event listeners
        this.overlayListeners.forEach((unlisten) => unlisten());
        this.overlayListeners.clear();
        // Clear the overlay reference used for interactive mode
        if (this.interactive) {
            this.overlayElement = null;
        }
        if (this.positionChangesSubscription) {
            this.positionChangesSubscription.unsubscribe();
            this.positionChangesSubscription = null;
        }
        this.tooltip = null;
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
            this.updateTooltip('placement', placement);
        });
        this.overlayRef = this.overlay.create({
            positionStrategy: strategy,
            scrollStrategy: this.overlay.scrollStrategies.reposition(),
        });
        this.updatePosition();
        return this.overlayRef;
    }
    /** Updates the position of the current tooltip. */
    updatePosition() {
        const position = this.overlayRef.getConfig().positionStrategy;
        position.withPositions([
            POSITION_MAP[this.placement].position,
            ...DEFAULT_TOOLTIP_POSITIONS,
        ]);
    }
    updateTooltip(key, value) {
        this.tooltip[key] = value;
    }
    /**
     * Set inputs of child components when this component's inputs change.
     */
    updateProxies(changes) {
        Object.keys(changes)
            .filter(key => this.needProxyProperties.has(key))
            .forEach(key => this.updateTooltip(key, this[key]));
    }
}
NglTooltipTrigger.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglTooltipTrigger, deps: [{ token: NGL_TOOLTIP_CONFIG, optional: true }, { token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i0.ViewContainerRef }, { token: i1.Overlay }], target: i0.ɵɵFactoryTarget.Directive });
NglTooltipTrigger.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.2.9", type: NglTooltipTrigger, selector: "[nglTooltip]", inputs: { template: ["nglTooltip", "template"], placement: ["nglTooltipPlacement", "placement"], delay: ["nglTooltipDelay", "delay"], nglOpen: ["nglTooltipOpen", "nglOpen"], openAuto: ["nglTooltipOpenAuto", "openAuto"], interactive: ["nglTooltipInteractive", "interactive"], tooltipClass: ["nglTooltipClass", "tooltipClass"] }, outputs: { nglTooltipOpenChange: "nglTooltipOpenChange" }, host: { listeners: { "mouseenter": "onMouseOver()", "focus": "onMouseOver()", "mouseleave": "onMouseOut()", "blur": "onMouseOut()" } }, exportAs: ["nglTooltip"], usesOnChanges: true, ngImport: i0 });
__decorate([
    InputBoolean()
], NglTooltipTrigger.prototype, "openAuto", void 0);
__decorate([
    InputBoolean()
], NglTooltipTrigger.prototype, "interactive", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglTooltipTrigger, decorators: [{
            type: Directive,
            args: [{
                    selector: '[nglTooltip]',
                    exportAs: 'nglTooltip',
                }]
        }], ctorParameters: function () { return [{ type: i2.NglTooltipConfig, decorators: [{
                    type: Optional
                }, {
                    type: Inject,
                    args: [NGL_TOOLTIP_CONFIG]
                }] }, { type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i0.ViewContainerRef }, { type: i1.Overlay }]; }, propDecorators: { template: [{
                type: Input,
                args: ['nglTooltip']
            }], placement: [{
                type: Input,
                args: ['nglTooltipPlacement']
            }], delay: [{
                type: Input,
                args: ['nglTooltipDelay']
            }], nglOpen: [{
                type: Input,
                args: ['nglTooltipOpen']
            }], openAuto: [{
                type: Input,
                args: ['nglTooltipOpenAuto']
            }], interactive: [{
                type: Input,
                args: ['nglTooltipInteractive']
            }], tooltipClass: [{
                type: Input,
                args: ['nglTooltipClass']
            }], nglTooltipOpenChange: [{
                type: Output
            }], onMouseOver: [{
                type: HostListener,
                args: ['mouseenter']
            }, {
                type: HostListener,
                args: ['focus']
            }], onMouseOut: [{
                type: HostListener,
                args: ['mouseleave']
            }, {
                type: HostListener,
                args: ['blur']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJpZ2dlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nLWxpZ2h0bmluZy9zcmMvbGliL3Rvb2x0aXBzL3RyaWdnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUNHLE1BQU0sRUFBRSxZQUFZLEVBQWEsWUFBWSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFbkgsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRXRELE9BQU8sRUFBRSxHQUFHLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQ3ZDLE9BQU8sRUFBRSxZQUFZLEVBQUUseUJBQXlCLEVBQUUsZ0JBQWdCLEVBQWEsTUFBTSwwQkFBMEIsQ0FBQztBQUNoSCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQ3hDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxVQUFVLENBQUM7Ozs7QUFNaEUsTUFBTSxPQUFPLGlCQUFpQjtJQTZGNUIsWUFBb0QsYUFBK0IsRUFDL0QsT0FBbUIsRUFDbkIsUUFBbUIsRUFDbkIsZ0JBQWtDLEVBQ2xDLE9BQWdCO1FBSGhCLFlBQU8sR0FBUCxPQUFPLENBQVk7UUFDbkIsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNuQixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLFlBQU8sR0FBUCxPQUFPLENBQVM7UUFoQ3BDOztXQUVHO1FBQ08seUJBQW9CLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQUU3RCxRQUFHLEdBQUcsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBRTFCLG1F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aXZlLCBJbnB1dCwgRWxlbWVudFJlZiwgVGVtcGxhdGVSZWYsIFZpZXdDb250YWluZXJSZWYsIE9uRGVzdHJveSxcbiAgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzLCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgUmVuZGVyZXIyLCBIb3N0TGlzdGVuZXIsIE9wdGlvbmFsLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE92ZXJsYXlSZWYsIE92ZXJsYXksIEZsZXhpYmxlQ29ubmVjdGVkUG9zaXRpb25TdHJhdGVneSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcbmltcG9ydCB7IENvbXBvbmVudFBvcnRhbCB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wb3J0YWwnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAsIGRpc3RpbmN0VW50aWxDaGFuZ2VkIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgTmdsVG9vbHRpcCB9IGZyb20gJy4vdG9vbHRpcCc7XG5pbXBvcnQgeyBQT1NJVElPTl9NQVAsIERFRkFVTFRfVE9PTFRJUF9QT1NJVElPTlMsIGdldFBsYWNlbWVudE5hbWUsIFBsYWNlbWVudCB9IGZyb20gJy4uL3V0aWwvb3ZlcmxheS1wb3NpdGlvbic7XG5pbXBvcnQgeyB1bmlxdWVJZCB9IGZyb20gJy4uL3V0aWwvdXRpbCc7XG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4gfSBmcm9tICcuLi91dGlsL2NvbnZlcnQnO1xuaW1wb3J0IHsgTkdMX1RPT0xUSVBfQ09ORklHLCBOZ2xUb29sdGlwQ29uZmlnIH0gZnJvbSAnLi9jb25maWcnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbmdsVG9vbHRpcF0nLFxuICBleHBvcnRBczogJ25nbFRvb2x0aXAnLFxufSlcbmV4cG9ydCBjbGFzcyBOZ2xUb29sdGlwVHJpZ2dlciBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcblxuICAvKipcbiAgICogVGhlIGNvbnRlbnQgYXMgc3RyaW5nIG9yIHRoZSBjb25uZWN0ZWQgdGVtcGxhdGUgcmVmZXJlbmNlIHRvIHNob3cuXG4gICAqL1xuICBASW5wdXQoJ25nbFRvb2x0aXAnKSB0ZW1wbGF0ZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XG5cbiAgLyoqXG4gICAqIFBvc2l0aW9uIHJlbGF0aXZlIHRvIGhvc3QgZWxlbWVudC5cbiAgICovXG4gIEBJbnB1dCgnbmdsVG9vbHRpcFBsYWNlbWVudCcpXG4gIHNldCBwbGFjZW1lbnQocGxhY2VtZW50OiBQbGFjZW1lbnQpIHtcbiAgICBpZiAocGxhY2VtZW50ID09PSB0aGlzLnBsYWNlbWVudCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX3BsYWNlbWVudCA9IHBsYWNlbWVudDtcblxuICAgIGlmICh0aGlzLm92ZXJsYXlSZWYpIHtcbiAgICAgIHRoaXMudXBkYXRlUG9zaXRpb24oKTtcbiAgICB9XG4gIH1cbiAgZ2V0IHBsYWNlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcGxhY2VtZW50IHx8IHRoaXMuY29uZmlnLnBsYWNlbWVudDtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWxheSBpbiBtaWxsaXNlY29uZHMgdW50aWwgaXQgb3BlbnMvY2xvc2VzLlxuICAgKi9cbiAgQElucHV0KCduZ2xUb29sdGlwRGVsYXknKVxuICBzZXQgZGVsYXkoX2RlbGF5OiBhbnkgfCBhbnlbXSkge1xuICAgIGNvbnN0IGRlbGF5ID0gQXJyYXkuaXNBcnJheShfZGVsYXkpID8gX2RlbGF5IDogW19kZWxheSwgX2RlbGF5XTtcbiAgICBbdGhpcy5vcGVuRGVsYXksIHRoaXMuY2xvc2VEZWxheV0gPSBkZWxheS5tYXAoTnVtYmVyKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBXaGV0aGVyIHRoZSBmbG9hdGluZyB0b29sdGlwIGlzIHZpc2libGUuXG4gICAqL1xuICBASW5wdXQoJ25nbFRvb2x0aXBPcGVuJykgc2V0IG5nbE9wZW4ob3BlbjogYm9vbGVhbikge1xuICAgIGlmIChvcGVuID09PSB0aGlzLm5nbE9wZW4pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBvcGVuID8gdGhpcy5jcmVhdGUoKSA6IHRoaXMuZGV0YWNoKCk7XG4gICAgdGhpcy5fb3BlbiA9IG9wZW47XG4gIH1cbiAgZ2V0IG5nbE9wZW4oKSB7XG4gICAgcmV0dXJuIHRoaXMuX29wZW47XG4gIH1cblxuICAvKipcbiAgICogT3Blbi9jbG9zZSB3aXRob3V0IHR3by13YXkgYmluZGluZyBpbnB1dC5cbiAgICovXG4gIEBJbnB1dCgnbmdsVG9vbHRpcE9wZW5BdXRvJykgQElucHV0Qm9vbGVhbigpIG9wZW5BdXRvOiBib29sZWFuIHwgc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBHaXZlcyB0aGUgcG9zc2liaWxpdHkgdG8gaW50ZXJhY3Qgd2l0aCB0aGUgY29udGVudCBvZiB0aGUgcG9wb3Zlci5cbiAgICovXG4gIEBJbnB1dCgnbmdsVG9vbHRpcEludGVyYWN0aXZlJykgQElucHV0Qm9vbGVhbigpIGludGVyYWN0aXZlOiBib29sZWFuIHwgc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBFeHRyYSBjbGFzcyhlcykgeW91IHdhbnQgdG8gYXBwbHkgdG8gdG9vbHRpcCBob3N0IGVsZW1lbnQuXG4gICAqL1xuICBASW5wdXQoJ25nbFRvb2x0aXBDbGFzcycpIHRvb2x0aXBDbGFzczogYW55O1xuXG4gIC8qKlxuICAgKiBFbWl0IGFuIGV2ZW50IHdoZW4gYWN0dWFsIHRvb2x0aXAgaXMgc2hvd24gb3IgaGlkZGVuLlxuICAgKi9cbiAgQE91dHB1dCgpIG5nbFRvb2x0aXBPcGVuQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuXG4gIHVpZCA9IHVuaXF1ZUlkKCd0b29sdGlwJyk7XG5cbiAgLyoqIE5hbWVzIG9mIHByb3BlcnRpZXMgdGhhdCBzaG91bGQgYmUgcHJveHkgdG8gY2hpbGQgY29tcG9uZW50LiAqL1xuICBwcml2YXRlIG5lZWRQcm94eVByb3BlcnRpZXMgPSBuZXcgU2V0KFtcbiAgICAndGVtcGxhdGUnLFxuICAgICdwbGFjZW1lbnQnLFxuICAgICd1aWQnLFxuICAgICd0b29sdGlwQ2xhc3MnLFxuICBdKTtcbiAgcHJpdmF0ZSBfcGxhY2VtZW50OiBQbGFjZW1lbnQ7XG4gIHByaXZhdGUgX29wZW46IGJvb2xlYW47XG4gIHByaXZhdGUgcG9ydGFsOiBDb21wb25lbnRQb3J0YWw8TmdsVG9vbHRpcD47XG4gIHByaXZhdGUgb3ZlcmxheVJlZjogT3ZlcmxheVJlZiB8IG51bGw7XG4gIHByaXZhdGUgdG9vbHRpcDogTmdsVG9vbHRpcCB8IG51bGw7XG4gIHByaXZhdGUgb3BlbkRlbGF5ID0gMDtcbiAgcHJpdmF0ZSBjbG9zZURlbGF5ID0gMDtcbiAgcHJpdmF0ZSB0b2dnbGVUaW1lb3V0OiBhbnkgPSBudWxsO1xuICBwcml2YXRlIHBvc2l0aW9uQ2hhbmdlc1N1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuICBwcml2YXRlIG92ZXJsYXlMaXN0ZW5lcnMgPSBuZXcgU2V0PCgpID0+IHZvaWQ+KCk7XG4gIHByaXZhdGUgb3ZlcmxheUVsZW1lbnQ7XG5cbiAgcHJpdmF0ZSBjb25maWc6IE5nbFRvb2x0aXBDb25maWc7XG5cbiAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgQEluamVjdChOR0xfVE9PTFRJUF9DT05GSUcpIGRlZmF1bHRDb25maWc6IE5nbFRvb2x0aXBDb25maWcsXG4gICAgICAgICAgICAgIHByaXZhdGUgZWxlbWVudDogRWxlbWVudFJlZixcbiAgICAgICAgICAgICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgICAgICAgICAgICBwcml2YXRlIHZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYsXG4gICAgICAgICAgICAgIHByaXZhdGUgb3ZlcmxheTogT3ZlcmxheSkge1xuICAgIHRoaXMuY29uZmlnID0geyAuLi5uZXcgTmdsVG9vbHRpcENvbmZpZygpLCAuLi5kZWZhdWx0Q29uZmlnIH07XG4gICAgdGhpcy5vcGVuQXV0byA9IHRoaXMuY29uZmlnLm9wZW5BdXRvO1xuICAgIHRoaXMuaW50ZXJhY3RpdmUgPSB0aGlzLmNvbmZpZy5pbnRlcmFjdGl2ZTtcbiAgICB0aGlzLmRlbGF5ID0gdGhpcy5jb25maWcuZGVsYXk7XG5cbiAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZSh0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ2FyaWEtZGVzY3JpYmVkYnknLCB0aGlzLnVpZCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgaWYgKHRoaXMubmdsT3Blbikge1xuICAgICAgdGhpcy51cGRhdGVQcm94aWVzKGNoYW5nZXMpO1xuXG4gICAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMub3ZlcmxheVJlZikge1xuICAgICAgICAgIHRoaXMub3ZlcmxheVJlZi51cGRhdGVQb3NpdGlvbigpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdtb3VzZWVudGVyJylcbiAgQEhvc3RMaXN0ZW5lcignZm9jdXMnKVxuICBvbk1vdXNlT3ZlcigpIHtcbiAgICB0aGlzLm9wZW4oKTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ21vdXNlbGVhdmUnKVxuICBASG9zdExpc3RlbmVyKCdibHVyJylcbiAgb25Nb3VzZU91dCgpIHtcbiAgICB0aGlzLmNsb3NlKCk7XG4gICAgaWYgKHRoaXMub3ZlcmxheVJlZiAmJiAhdGhpcy5vdmVybGF5RWxlbWVudCAmJiB0aGlzLmludGVyYWN0aXZlKSB7XG4gICAgICB0aGlzLm92ZXJsYXlFbGVtZW50ID0gdGhpcy5vdmVybGF5UmVmLm92ZXJsYXlFbGVtZW50O1xuICAgICAgdGhpcy5vdmVybGF5TGlzdGVuZXJzLmFkZCh0aGlzLnJlbmRlcmVyLmxpc3Rlbih0aGlzLm92ZXJsYXlFbGVtZW50LCAnbW91c2VlbnRlcicsICgpID0+IHRoaXMub3BlbigpKSk7XG4gICAgICB0aGlzLm92ZXJsYXlMaXN0ZW5lcnMuYWRkKHRoaXMucmVuZGVyZXIubGlzdGVuKHRoaXMub3ZlcmxheUVsZW1lbnQsICdtb3VzZWxlYXZlJywgKCkgPT4gdGhpcy5jbG9zZSgpKSk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5kZXRhY2goKTtcbiAgICB0aGlzLmNsb3NlKDApO1xuICB9XG5cbiAgLy8gRXhwb3NlIG9wZW4gbWV0aG9kXG4gIG9wZW4oZGVsYXkgPSB0aGlzLm9wZW5EZWxheSk6IHZvaWQge1xuICAgIHRoaXMuaGFuZGxlKHRydWUsIGRlbGF5KTtcbiAgfVxuXG4gIC8vIEV4cG9zZSBjbG9zZSBtZXRob2RcbiAgY2xvc2UoZGVsYXkgPSB0aGlzLmNsb3NlRGVsYXkpOiB2b2lkIHtcbiAgICB0aGlzLmhhbmRsZShmYWxzZSwgZGVsYXkpO1xuICB9XG5cbiAgLy8gRXhwb3NlIHRvZ2dsZSBtZXRob2RcbiAgdG9nZ2xlKCk6IHZvaWQge1xuICAgIHRoaXMubmdsT3BlbiA/IHRoaXMuY2xvc2UoMCkgOiB0aGlzLm9wZW4oMCk7XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZShvcGVuOiBib29sZWFuLCBkZWxheTogbnVtYmVyKTogdm9pZCB7XG4gICAgaWYgKHRoaXMudG9nZ2xlVGltZW91dCAhPT0gbnVsbCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudG9nZ2xlVGltZW91dCk7XG4gICAgICB0aGlzLnRvZ2dsZVRpbWVvdXQgPSBudWxsO1xuICAgIH1cblxuICAgIGlmIChvcGVuICE9PSB0aGlzLm5nbE9wZW4pIHtcbiAgICAgIGlmIChkZWxheSA+IDApIHtcbiAgICAgICAgdGhpcy50b2dnbGVUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy50b2dnbGVUaW1lb3V0ID0gbnVsbDtcbiAgICAgICAgICB0aGlzLmVtaXRPcGVuKG9wZW4pO1xuICAgICAgICB9LCBkZWxheSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmVtaXRPcGVuKG9wZW4pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZW1pdE9wZW4ob3Blbikge1xuICAgIGlmICh0aGlzLm9wZW5BdXRvKSB7XG4gICAgICB0aGlzLm5nbE9wZW4gPSBvcGVuO1xuICAgIH1cbiAgICB0aGlzLm5nbFRvb2x0aXBPcGVuQ2hhbmdlLmVtaXQob3Blbik7XG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5uZ2xPcGVuKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5kZXRhY2goKTtcblxuICAgIGNvbnN0IG92ZXJsYXlSZWYgPSB0aGlzLmNyZWF0ZU92ZXJsYXkoKTtcblxuICAgIHRoaXMucG9ydGFsID0gdGhpcy5wb3J0YWwgfHwgbmV3IENvbXBvbmVudFBvcnRhbChOZ2xUb29sdGlwLCB0aGlzLnZpZXdDb250YWluZXJSZWYpO1xuICAgIHRoaXMudG9vbHRpcCA9IG92ZXJsYXlSZWYuYXR0YWNoKHRoaXMucG9ydGFsKS5pbnN0YW5jZTtcblxuICAgIHRoaXMubmVlZFByb3h5UHJvcGVydGllcy5mb3JFYWNoKHByb3BlcnR5ID0+IHRoaXMudXBkYXRlVG9vbHRpcChwcm9wZXJ0eSwgdGhpc1sgcHJvcGVydHkgXSkpO1xuICB9XG5cbiAgLyoqIERldGFjaGVzIHRoZSBjdXJyZW50bHktYXR0YWNoZWQgdG9vbHRpcC4gKi9cbiAgcHJpdmF0ZSBkZXRhY2goKTogdm9pZCB7XG4gICAgaWYgKHRoaXMub3ZlcmxheVJlZikge1xuICAgICAgdGhpcy5vdmVybGF5UmVmLmRldGFjaCgpO1xuICAgICAgdGhpcy5vdmVybGF5UmVmLmRpc3Bvc2UoKTtcbiAgICAgIHRoaXMub3ZlcmxheVJlZiA9IG51bGw7XG4gICAgfVxuXG4gICAgLy8gQ2xlYW4gdXAgdGhlIGV2ZW50IGxpc3RlbmVyc1xuICAgIHRoaXMub3ZlcmxheUxpc3RlbmVycy5mb3JFYWNoKCh1bmxpc3RlbikgPT4gdW5saXN0ZW4oKSk7XG4gICAgdGhpcy5vdmVybGF5TGlzdGVuZXJzLmNsZWFyKCk7XG5cbiAgICAvLyBDbGVhciB0aGUgb3ZlcmxheSByZWZlcmVuY2UgdXNlZCBmb3IgaW50ZXJhY3RpdmUgbW9kZVxuICAgIGlmICh0aGlzLmludGVyYWN0aXZlKSB7XG4gICAgICB0aGlzLm92ZXJsYXlFbGVtZW50ID0gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5wb3NpdGlvbkNoYW5nZXNTdWJzY3JpcHRpb24pIHtcbiAgICAgIHRoaXMucG9zaXRpb25DaGFuZ2VzU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICB0aGlzLnBvc2l0aW9uQ2hhbmdlc1N1YnNjcmlwdGlvbiA9IG51bGw7XG4gICAgfVxuXG4gICAgdGhpcy50b29sdGlwID0gbnVsbDtcbiAgfVxuXG4gIC8qKiBDcmVhdGUgdGhlIG92ZXJsYXkgY29uZmlnIGFuZCBwb3NpdGlvbiBzdHJhdGVneSAqL1xuICBwcml2YXRlIGNyZWF0ZU92ZXJsYXkoKTogT3ZlcmxheVJlZiB7XG4gICAgaWYgKHRoaXMub3ZlcmxheVJlZikge1xuICAgICAgcmV0dXJuIHRoaXMub3ZlcmxheVJlZjtcbiAgICB9XG5cbiAgICAvLyBDcmVhdGUgY29ubmVjdGVkIHBvc2l0aW9uIHN0cmF0ZWd5IHRoYXQgbGlzdGVucyBmb3Igc2Nyb2xsIGV2ZW50cyB0byByZXBvc2l0aW9uLlxuICAgIGNvbnN0IHN0cmF0ZWd5ID0gdGhpcy5vdmVybGF5LnBvc2l0aW9uKClcbiAgICAgIC5mbGV4aWJsZUNvbm5lY3RlZFRvKHRoaXMuZWxlbWVudClcbiAgICAgIC53aXRoRmxleGlibGVEaW1lbnNpb25zKGZhbHNlKVxuICAgICAgLndpdGhWaWV3cG9ydE1hcmdpbig4KVxuICAgICAgLndpdGhQdXNoKGZhbHNlKTtcblxuICAgIHRoaXMucG9zaXRpb25DaGFuZ2VzU3Vic2NyaXB0aW9uID0gc3RyYXRlZ3kucG9zaXRpb25DaGFuZ2VzXG4gICAgICAucGlwZShtYXAoY2hhbmdlID0+IGdldFBsYWNlbWVudE5hbWUoY2hhbmdlLCB0aGlzLnBsYWNlbWVudCkpLCBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpKVxuICAgICAgLnN1YnNjcmliZSgocGxhY2VtZW50OiBQbGFjZW1lbnQpID0+IHtcbiAgICAgICAgdGhpcy51cGRhdGVQb3NpdGlvbigpO1xuICAgICAgICB0aGlzLnVwZGF0ZVRvb2x0aXAoJ3BsYWNlbWVudCcsIHBsYWNlbWVudCk7XG4gICAgICB9KTtcblxuICAgIHRoaXMub3ZlcmxheVJlZiA9IHRoaXMub3ZlcmxheS5jcmVhdGUoe1xuICAgICAgcG9zaXRpb25TdHJhdGVneTogc3RyYXRlZ3ksXG4gICAgICBzY3JvbGxTdHJhdGVneTogdGhpcy5vdmVybGF5LnNjcm9sbFN0cmF0ZWdpZXMucmVwb3NpdGlvbigpLFxuICAgIH0pO1xuXG4gICAgdGhpcy51cGRhdGVQb3NpdGlvbigpO1xuXG4gICAgcmV0dXJuIHRoaXMub3ZlcmxheVJlZjtcbiAgfVxuXG4gIC8qKiBVcGRhdGVzIHRoZSBwb3NpdGlvbiBvZiB0aGUgY3VycmVudCB0b29sdGlwLiAqL1xuICBwcml2YXRlIHVwZGF0ZVBvc2l0aW9uKCk6IHZvaWQge1xuICAgIGNvbnN0IHBvc2l0aW9uID0gPEZsZXhpYmxlQ29ubmVjdGVkUG9zaXRpb25TdHJhdGVneT50aGlzLm92ZXJsYXlSZWYuZ2V0Q29uZmlnKCkucG9zaXRpb25TdHJhdGVneTtcblxuICAgIHBvc2l0aW9uLndpdGhQb3NpdGlvbnMoW1xuICAgICAgUE9TSVRJT05fTUFQW3RoaXMucGxhY2VtZW50XS5wb3NpdGlvbixcbiAgICAgIC4uLkRFRkFVTFRfVE9PTFRJUF9QT1NJVElPTlMsXG4gICAgXSk7XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZVRvb2x0aXAoa2V5OiBzdHJpbmcsIHZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLnRvb2x0aXBbIGtleSBdID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2V0IGlucHV0cyBvZiBjaGlsZCBjb21wb25lbnRzIHdoZW4gdGhpcyBjb21wb25lbnQncyBpbnB1dHMgY2hhbmdlLlxuICAgKi9cbiAgcHJpdmF0ZSB1cGRhdGVQcm94aWVzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBPYmplY3Qua2V5cyhjaGFuZ2VzKVxuICAgICAgLmZpbHRlcihrZXkgPT4gdGhpcy5uZWVkUHJveHlQcm9wZXJ0aWVzLmhhcyhrZXkpKVxuICAgICAgLmZvckVhY2goa2V5ID0+IHRoaXMudXBkYXRlVG9vbHRpcChrZXksIHRoaXNba2V5XSkpO1xuICB9XG59XG4iXX0=
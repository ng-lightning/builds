import { __decorate } from "tslib";
import { Component, EventEmitter, ChangeDetectionStrategy, HostBinding } from '@angular/core';
import { uniqueId, ngClassCombine } from '../util/util';
import { POSITION_MAP, getPlacementStyles } from '../util/overlay-position';
import { HostService } from '../common/host/host.service';
import { isTemplateRef } from '../util/check';
import { OnChange } from '../util/property-watch-decorator';
import * as i0 from "@angular/core";
import * as i1 from "../common/host/host.service";
import * as i2 from "@angular/cdk/a11y";
import * as i3 from "@angular/common";
import * as i4 from "../util/outlet";
import * as i5 from "../icons/svg";
export class NglPopover {
    constructor(hostService, element, renderer, focusTrapFactory, cd) {
        this.hostService = hostService;
        this.element = element;
        this.renderer = renderer;
        this.focusTrapFactory = focusTrapFactory;
        this.cd = cd;
        this.close = new EventEmitter();
        this.isTemplateRef = isTemplateRef;
        this.uid = uniqueId('popover');
    }
    get labelledby() {
        return this.header ? `${this.uid}-heading` : null;
    }
    get describedby() {
        return this.template ? this.uid : null;
    }
    ngOnInit() {
        this.focusTrap = this.focusTrapFactory.create(this.element.nativeElement);
        this.focusTrap.focusInitialElementWhenReady();
    }
    ngOnDestroy() {
        if (this.focusTrap) {
            this.focusTrap.destroy();
            this.focusTrap = null;
        }
    }
    nglOnPropertyChange(prop) {
        if (prop === 'size' || prop === 'popoverClass') {
            this.setHostClass();
        }
        else if (prop === 'placement') {
            this.nubbin = POSITION_MAP[this.placement].nubbin;
            this.setHostClass();
        }
        else if (prop === 'variant') {
            this.inverseCloseButton = ['walkthrough', 'feature', 'error'].indexOf(this.variant) > -1;
            this.setHostClass();
        }
    }
    markForCheck() {
        this.cd.markForCheck();
    }
    onClose() {
        this.close.emit();
    }
    setHostClass() {
        this.hostService.updateClass(this.element, ngClassCombine(this.popoverClass, {
            [`slds-nubbin_${this.nubbin}`]: true,
            [`slds-popover_${this.size}`]: !!this.size,
            [`slds-popover_walkthrough`]: this.variant === 'feature',
            [`slds-popover_${this.variant}`]: !!this.variant,
        }));
        this.hostService.updateStyle(this.element, getPlacementStyles(this.nubbin));
    }
}
NglPopover.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglPopover, deps: [{ token: i1.HostService }, { token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i2.FocusTrapFactory }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component });
NglPopover.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: NglPopover, selector: "section[ngl-popover]", host: { attributes: { "role": "dialog" }, properties: { "class.slds-popover": "true", "attr.aria-labelledby": "this.labelledby", "attr.aria-describedby": "this.describedby" } }, providers: [HostService], ngImport: i0, template: "\n<button class=\"slds-button slds-button_icon slds-button_icon-small slds-float_right slds-popover__close\" *ngIf=\"canClose &amp;&amp; closeVisible\" [title]=\"closeTitle\" [class.slds-button_icon-inverse]=\"inverseCloseButton\" (click)=\"onClose()\">\n  <svg class=\"slds-button__icon\" nglIconName=\"close\"></svg><span class=\"slds-assistive-text\" *ngIf=\"closeTitle\">{{closeTitle}}</span>\n</button>\n<header class=\"slds-popover__header\" *ngIf=\"header\">\n  <div *ngIf=\"isTemplateRef(header); else defaultTpl\" [id]=\"labelledby\">\n    <ng-container [ngTemplateOutlet]=\"header\"></ng-container>\n  </div>\n  <ng-template #defaultTpl>\n    <h2 class=\"slds-text-heading_small\" [id]=\"labelledby\">{{header}}</h2>\n  </ng-template>\n</header>\n<div class=\"slds-popover__body\" [id]=\"uid\" [nglInternalOutlet]=\"template\"></div>\n<footer class=\"slds-popover__footer\" *ngIf=\"footer\" [nglInternalOutlet]=\"footer\"></footer>", dependencies: [{ kind: "directive", type: i3.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i3.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "component", type: i4.NglInternalOutlet, selector: "[nglInternalOutlet]", inputs: ["nglInternalOutlet", "nglInternalOutletContext"] }, { kind: "component", type: i5.NglIconSvg, selector: "svg[nglIconName]", inputs: ["nglIconName", "xPos"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
__decorate([
    OnChange()
], NglPopover.prototype, "popoverClass", void 0);
__decorate([
    OnChange()
], NglPopover.prototype, "size", void 0);
__decorate([
    OnChange()
], NglPopover.prototype, "variant", void 0);
__decorate([
    OnChange()
], NglPopover.prototype, "placement", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglPopover, decorators: [{
            type: Component,
            args: [{ selector: 'section[ngl-popover]', changeDetection: ChangeDetectionStrategy.OnPush, providers: [HostService], host: {
                        'role': 'dialog',
                        '[class.slds-popover]': 'true',
                    }, template: "\n<button class=\"slds-button slds-button_icon slds-button_icon-small slds-float_right slds-popover__close\" *ngIf=\"canClose &amp;&amp; closeVisible\" [title]=\"closeTitle\" [class.slds-button_icon-inverse]=\"inverseCloseButton\" (click)=\"onClose()\">\n  <svg class=\"slds-button__icon\" nglIconName=\"close\"></svg><span class=\"slds-assistive-text\" *ngIf=\"closeTitle\">{{closeTitle}}</span>\n</button>\n<header class=\"slds-popover__header\" *ngIf=\"header\">\n  <div *ngIf=\"isTemplateRef(header); else defaultTpl\" [id]=\"labelledby\">\n    <ng-container [ngTemplateOutlet]=\"header\"></ng-container>\n  </div>\n  <ng-template #defaultTpl>\n    <h2 class=\"slds-text-heading_small\" [id]=\"labelledby\">{{header}}</h2>\n  </ng-template>\n</header>\n<div class=\"slds-popover__body\" [id]=\"uid\" [nglInternalOutlet]=\"template\"></div>\n<footer class=\"slds-popover__footer\" *ngIf=\"footer\" [nglInternalOutlet]=\"footer\"></footer>" }]
        }], ctorParameters: function () { return [{ type: i1.HostService }, { type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i2.FocusTrapFactory }, { type: i0.ChangeDetectorRef }]; }, propDecorators: { popoverClass: [], size: [], variant: [], placement: [], labelledby: [{
                type: HostBinding,
                args: ['attr.aria-labelledby']
            }], describedby: [{
                type: HostBinding,
                args: ['attr.aria-describedby']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wb3Zlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nLWxpZ2h0bmluZy9zcmMvbGliL3BvcG92ZXJzL3BvcG92ZXIudHMiLCIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1saWdodG5pbmcvc3JjL2xpYi9wb3BvdmVycy9wb3BvdmVyLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLHVCQUF1QixFQUNuQixXQUFXLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQzVGLE9BQU8sRUFBRSxRQUFRLEVBQUUsY0FBYyxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQ3hELE9BQU8sRUFBYSxZQUFZLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUd2RixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5QyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sa0NBQWtDLENBQUM7Ozs7Ozs7QUFhNUQsTUFBTSxPQUFPLFVBQVU7SUEwQ3JCLFlBQ1UsV0FBd0IsRUFDekIsT0FBbUIsRUFDbkIsUUFBbUIsRUFDbEIsZ0JBQWtDLEVBQ2xDLEVBQXFCO1FBSnJCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3pCLFlBQU8sR0FBUCxPQUFPLENBQVk7UUFDbkIsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNsQixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLE9BQUUsR0FBRixFQUFFLENBQW1CO1FBakIvQixVQUFLLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUUzQixrQkFBYSxHQUFHLGFBQWEsQ0FBQztRQUU5QixRQUFHLEdBQUcsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBYVEsQ0FBQztJQTNCbkMsSUFDSSxVQUFVO1FBQ1osT0FB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QUFFLFFBQVE7d0JBQ2hCLHNCQUFzQixFQUFFLE1BQU07cUJBQy9CO2tOQWNXLFlBQVksTUFFWixJQUFJLE1BRUosT0FBTyxNQUVQLFNBQVMsTUFHakIsVUFBVTtzQkFEYixXQUFXO3VCQUFDLHNCQUFzQjtnQkFNL0IsV0FBVztzQkFEZCxXQUFXO3VCQUFDLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIFRlbXBsYXRlUmVmLCBFbGVtZW50UmVmLCBSZW5kZXJlcjIsIEhvc3RCaW5kaW5nLCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgdW5pcXVlSWQsIG5nQ2xhc3NDb21iaW5lIH0gZnJvbSAnLi4vdXRpbC91dGlsJztcbmltcG9ydCB7IFBsYWNlbWVudCwgUE9TSVRJT05fTUFQLCBnZXRQbGFjZW1lbnRTdHlsZXMgfSBmcm9tICcuLi91dGlsL292ZXJsYXktcG9zaXRpb24nO1xuaW1wb3J0IHsgRm9jdXNUcmFwLCBGb2N1c1RyYXBGYWN0b3J5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2ExMXknO1xuaW1wb3J0IHsgVmFyaWFudCwgU2l6ZSB9IGZyb20gJy4vdHJpZ2dlcic7XG5pbXBvcnQgeyBIb3N0U2VydmljZSB9IGZyb20gJy4uL2NvbW1vbi9ob3N0L2hvc3Quc2VydmljZSc7XG5pbXBvcnQgeyBpc1RlbXBsYXRlUmVmIH0gZnJvbSAnLi4vdXRpbC9jaGVjayc7XG5pbXBvcnQgeyBPbkNoYW5nZSB9IGZyb20gJy4uL3V0aWwvcHJvcGVydHktd2F0Y2gtZGVjb3JhdG9yJztcblxuQENvbXBvbmVudCh7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAYW5ndWxhci1lc2xpbnQvY29tcG9uZW50LXNlbGVjdG9yXG4gIHNlbGVjdG9yOiAnc2VjdGlvbltuZ2wtcG9wb3Zlcl0nLFxuICB0ZW1wbGF0ZVVybDogJy4vcG9wb3Zlci5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByb3ZpZGVyczogW0hvc3RTZXJ2aWNlXSxcbiAgaG9zdDoge1xuICAgICdyb2xlJzogJ2RpYWxvZycsXG4gICAgJ1tjbGFzcy5zbGRzLXBvcG92ZXJdJzogJ3RydWUnLFxuICB9LFxufSlcbmV4cG9ydCBjbGFzcyBOZ2xQb3BvdmVyIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG4gIHRlbXBsYXRlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcblxuICBoZWFkZXI6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuXG4gIGZvb3Rlcjogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XG5cbiAgY2xvc2VUaXRsZTogc3RyaW5nO1xuXG4gIGNsb3NlVmlzaWJsZTogYm9vbGVhbjtcblxuICBAT25DaGFuZ2UoKSBwb3BvdmVyQ2xhc3M6IGFueTtcblxuICBAT25DaGFuZ2UoKSBzaXplOiBTaXplO1xuXG4gIEBPbkNoYW5nZSgpIHZhcmlhbnQ6IFZhcmlhbnQ7XG5cbiAgQE9uQ2hhbmdlKCkgcGxhY2VtZW50OiBQbGFjZW1lbnQ7XG5cbiAgQEhvc3RCaW5kaW5nKCdhdHRyLmFyaWEtbGFiZWxsZWRieScpXG4gIGdldCBsYWJlbGxlZGJ5KCkge1xuICAgIHJldHVybiB0aGlzLmhlYWRlciA/IGAke3RoaXMudWlkfS1oZWFkaW5nYCA6IG51bGw7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2F0dHIuYXJpYS1kZXNjcmliZWRieScpXG4gIGdldCBkZXNjcmliZWRieSgpIHtcbiAgICByZXR1cm4gdGhpcy50ZW1wbGF0ZSA/IHRoaXMudWlkIDogbnVsbDtcbiAgfVxuXG4gIGNsb3NlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGlzVGVtcGxhdGVSZWYgPSBpc1RlbXBsYXRlUmVmO1xuICBjYW5DbG9zZTogYm9vbGVhbjtcbiAgdWlkID0gdW5pcXVlSWQoJ3BvcG92ZXInKTtcbiAgaW52ZXJzZUNsb3NlQnV0dG9uOiBib29sZWFuO1xuXG4gIHByaXZhdGUgbnViYmluOiBQbGFjZW1lbnQ7XG5cbiAgLyoqIFRoZSBjbGFzcyB0aGF0IHRyYXBzIGFuZCBtYW5hZ2VzIGZvY3VzIHdpdGhpbiB0aGUgZGlhbG9nLiAqL1xuICBwcml2YXRlIGZvY3VzVHJhcDogRm9jdXNUcmFwO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgaG9zdFNlcnZpY2U6IEhvc3RTZXJ2aWNlLFxuICAgIHB1YmxpYyBlbGVtZW50OiBFbGVtZW50UmVmLFxuICAgIHB1YmxpYyByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgZm9jdXNUcmFwRmFjdG9yeTogRm9jdXNUcmFwRmFjdG9yeSxcbiAgICBwcml2YXRlIGNkOiBDaGFuZ2VEZXRlY3RvclJlZikge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmZvY3VzVHJhcCA9IHRoaXMuZm9jdXNUcmFwRmFjdG9yeS5jcmVhdGUodGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQpO1xuICAgIHRoaXMuZm9jdXNUcmFwLmZvY3VzSW5pdGlhbEVsZW1lbnRXaGVuUmVhZHkoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICBpZiAodGhpcy5mb2N1c1RyYXApIHtcbiAgICAgIHRoaXMuZm9jdXNUcmFwLmRlc3Ryb3koKTtcbiAgICAgIHRoaXMuZm9jdXNUcmFwID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICBuZ2xPblByb3BlcnR5Q2hhbmdlKHByb3ApIHtcbiAgICBpZiAocHJvcCA9PT0gJ3NpemUnIHx8IHByb3AgPT09ICdwb3BvdmVyQ2xhc3MnKSB7XG4gICAgICB0aGlzLnNldEhvc3RDbGFzcygpO1xuICAgIH0gZWxzZSBpZiAocHJvcCA9PT0gJ3BsYWNlbWVudCcpIHtcbiAgICAgIHRoaXMubnViYmluID0gUE9TSVRJT05fTUFQW3RoaXMucGxhY2VtZW50XS5udWJiaW47XG4gICAgICB0aGlzLnNldEhvc3RDbGFzcygpO1xuICAgIH0gZWxzZSBpZiAocHJvcCA9PT0gJ3ZhcmlhbnQnKSB7XG4gICAgICB0aGlzLmludmVyc2VDbG9zZUJ1dHRvbiA9IFsnd2Fsa3Rocm91Z2gnLCAnZmVhdHVyZScsICdlcnJvciddLmluZGV4T2YodGhpcy52YXJpYW50KSA+IC0xO1xuICAgICAgdGhpcy5zZXRIb3N0Q2xhc3MoKTtcbiAgICB9XG4gIH1cblxuICBtYXJrRm9yQ2hlY2soKSB7XG4gICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIG9uQ2xvc2UoKSB7XG4gICAgdGhpcy5jbG9zZS5lbWl0KCk7XG4gIH1cblxuICBwcml2YXRlIHNldEhvc3RDbGFzcygpIHtcbiAgICB0aGlzLmhvc3RTZXJ2aWNlLnVwZGF0ZUNsYXNzKHRoaXMuZWxlbWVudCwgbmdDbGFzc0NvbWJpbmUodGhpcy5wb3BvdmVyQ2xhc3MsIHtcbiAgICAgIFtgc2xkcy1udWJiaW5fJHt0aGlzLm51YmJpbn1gXTogdHJ1ZSxcbiAgICAgIFtgc2xkcy1wb3BvdmVyXyR7dGhpcy5zaXplfWBdOiAhIXRoaXMuc2l6ZSxcbiAgICAgIFtgc2xkcy1wb3BvdmVyX3dhbGt0aHJvdWdoYF06IHRoaXMudmFyaWFudCA9PT0gJ2ZlYXR1cmUnLFxuICAgICAgW2BzbGRzLXBvcG92ZXJfJHt0aGlzLnZhcmlhbnR9YF06ICEhdGhpcy52YXJpYW50LFxuICAgIH0pKTtcblxuICAgIHRoaXMuaG9zdFNlcnZpY2UudXBkYXRlU3R5bGUodGhpcy5lbGVtZW50LCBnZXRQbGFjZW1lbnRTdHlsZXModGhpcy5udWJiaW4pKTtcbiAgfVxuXG59XG4iLCJcbjxidXR0b24gY2xhc3M9XCJzbGRzLWJ1dHRvbiBzbGRzLWJ1dHRvbl9pY29uIHNsZHMtYnV0dG9uX2ljb24tc21hbGwgc2xkcy1mbG9hdF9yaWdodCBzbGRzLXBvcG92ZXJfX2Nsb3NlXCIgKm5nSWY9XCJjYW5DbG9zZSAmYW1wOyZhbXA7IGNsb3NlVmlzaWJsZVwiIFt0aXRsZV09XCJjbG9zZVRpdGxlXCIgW2NsYXNzLnNsZHMtYnV0dG9uX2ljb24taW52ZXJzZV09XCJpbnZlcnNlQ2xvc2VCdXR0b25cIiAoY2xpY2spPVwib25DbG9zZSgpXCI+XG4gIDxzdmcgY2xhc3M9XCJzbGRzLWJ1dHRvbl9faWNvblwiIG5nbEljb25OYW1lPVwiY2xvc2VcIj48L3N2Zz48c3BhbiBjbGFzcz1cInNsZHMtYXNzaXN0aXZlLXRleHRcIiAqbmdJZj1cImNsb3NlVGl0bGVcIj57e2Nsb3NlVGl0bGV9fTwvc3Bhbj5cbjwvYnV0dG9uPlxuPGhlYWRlciBjbGFzcz1cInNsZHMtcG9wb3Zlcl9faGVhZGVyXCIgKm5nSWY9XCJoZWFkZXJcIj5cbiAgPGRpdiAqbmdJZj1cImlzVGVtcGxhdGVSZWYoaGVhZGVyKTsgZWxzZSBkZWZhdWx0VHBsXCIgW2lkXT1cImxhYmVsbGVkYnlcIj5cbiAgICA8bmctY29udGFpbmVyIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImhlYWRlclwiPjwvbmctY29udGFpbmVyPlxuICA8L2Rpdj5cbiAgPG5nLXRlbXBsYXRlICNkZWZhdWx0VHBsPlxuICAgIDxoMiBjbGFzcz1cInNsZHMtdGV4dC1oZWFkaW5nX3NtYWxsXCIgW2lkXT1cImxhYmVsbGVkYnlcIj57e2hlYWRlcn19PC9oMj5cbiAgPC9uZy10ZW1wbGF0ZT5cbjwvaGVhZGVyPlxuPGRpdiBjbGFzcz1cInNsZHMtcG9wb3Zlcl9fYm9keVwiIFtpZF09XCJ1aWRcIiBbbmdsSW50ZXJuYWxPdXRsZXRdPVwidGVtcGxhdGVcIj48L2Rpdj5cbjxmb290ZXIgY2xhc3M9XCJzbGRzLXBvcG92ZXJfX2Zvb3RlclwiICpuZ0lmPVwiZm9vdGVyXCIgW25nbEludGVybmFsT3V0bGV0XT1cImZvb3RlclwiPjwvZm9vdGVyPiJdfQ==
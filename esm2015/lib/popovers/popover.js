import { __decorate } from "tslib";
import { Component, EventEmitter, ChangeDetectionStrategy, ChangeDetectorRef, ElementRef, Renderer2, HostBinding } from '@angular/core';
import { uniqueId, ngClassCombine } from '../util/util';
import { POSITION_MAP, getPlacementStyles } from '../util/overlay-position';
import { FocusTrapFactory } from '@angular/cdk/a11y';
import { HostService } from '../common/host/host.service';
import { isTemplateRef } from '../util/check';
import { OnChange } from '../util/property-watch-decorator';
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
NglPopover.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'section[ngl-popover]',
                template: "\n<button class=\"slds-button slds-button_icon slds-button_icon-small slds-float_right slds-popover__close\" *ngIf=\"canClose &amp;&amp; closeVisible\" [title]=\"closeTitle\" [class.slds-button_icon-inverse]=\"inverseCloseButton\" (click)=\"onClose()\">\n  <svg class=\"slds-button__icon\" nglIconName=\"close\"></svg><span class=\"slds-assistive-text\" *ngIf=\"closeTitle\">{{closeTitle}}</span>\n</button>\n<header class=\"slds-popover__header\" *ngIf=\"header\">\n  <div *ngIf=\"isTemplateRef(header); else defaultTpl\" [id]=\"labelledby\">\n    <ng-container [ngTemplateOutlet]=\"header\"></ng-container>\n  </div>\n  <ng-template #defaultTpl>\n    <h2 class=\"slds-text-heading_small\" [id]=\"labelledby\">{{header}}</h2>\n  </ng-template>\n</header>\n<div class=\"slds-popover__body\" [id]=\"uid\" [nglInternalOutlet]=\"template\"></div>\n<footer class=\"slds-popover__footer\" *ngIf=\"footer\" [nglInternalOutlet]=\"footer\"></footer>",
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [HostService],
                host: {
                    'role': 'dialog',
                    '[class.slds-popover]': 'true',
                }
            },] }
];
NglPopover.ctorParameters = () => [
    { type: HostService },
    { type: ElementRef },
    { type: Renderer2 },
    { type: FocusTrapFactory },
    { type: ChangeDetectorRef }
];
NglPopover.propDecorators = {
    labelledby: [{ type: HostBinding, args: ['attr.aria-labelledby',] }],
    describedby: [{ type: HostBinding, args: ['attr.aria-describedby',] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wb3Zlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nLWxpZ2h0bmluZy9zcmMvbGliL3BvcG92ZXJzL3BvcG92ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLHVCQUF1QixFQUFFLGlCQUFpQixFQUM3RCxVQUFVLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFDNUYsT0FBTyxFQUFFLFFBQVEsRUFBRSxjQUFjLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDeEQsT0FBTyxFQUFhLFlBQVksRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3ZGLE9BQU8sRUFBYSxnQkFBZ0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRWhFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQWE1RCxNQUFNLE9BQU8sVUFBVTtJQTBDckIsWUFDVSxXQUF3QixFQUN6QixPQUFtQixFQUNuQixRQUFtQixFQUNsQixnQkFBa0MsRUFDbEMsRUFBcUI7UUFKckIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDekIsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQUNuQixhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ2xCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsT0FBRSxHQUFGLEVBQUUsQ0FBbUI7UUFqQi9CLFVBQUssR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBRTNCLGtCQUFhLEdBQUcsYUFBYSxDQUFDO1FBRTlCLFFBQUcsR0FBRyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUM7SUFhUSxDQUFDO0lBM0JuQyxJQUNJLFVBQVU7UUFDWixP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O3lCQXlDekUsV0FBVyxTQUFDLHNCQUFzQjswQkFLbEMsV0FBVyxTQUFDLHVCQUF1Qjs7QUFieEI7SUFBWCxRQUFRLEVBQUU7Z0RBQW1CO0FBRWxCO0lBQVgsUUFBUSxFQUFFO3dDQUFZO0FBRVg7SUFBWCxRQUFRLEVBQUU7MkNBQWtCO0FBRWpCO0lBQVgsUUFBUSxFQUFFOzZDQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIFRlbXBsYXRlUmVmLCBFbGVtZW50UmVmLCBSZW5kZXJlcjIsIEhvc3RCaW5kaW5nLCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgdW5pcXVlSWQsIG5nQ2xhc3NDb21iaW5lIH0gZnJvbSAnLi4vdXRpbC91dGlsJztcbmltcG9ydCB7IFBsYWNlbWVudCwgUE9TSVRJT05fTUFQLCBnZXRQbGFjZW1lbnRTdHlsZXMgfSBmcm9tICcuLi91dGlsL292ZXJsYXktcG9zaXRpb24nO1xuaW1wb3J0IHsgRm9jdXNUcmFwLCBGb2N1c1RyYXBGYWN0b3J5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2ExMXknO1xuaW1wb3J0IHsgVmFyaWFudCwgU2l6ZSB9IGZyb20gJy4vdHJpZ2dlcic7XG5pbXBvcnQgeyBIb3N0U2VydmljZSB9IGZyb20gJy4uL2NvbW1vbi9ob3N0L2hvc3Quc2VydmljZSc7XG5pbXBvcnQgeyBpc1RlbXBsYXRlUmVmIH0gZnJvbSAnLi4vdXRpbC9jaGVjayc7XG5pbXBvcnQgeyBPbkNoYW5nZSB9IGZyb20gJy4uL3V0aWwvcHJvcGVydHktd2F0Y2gtZGVjb3JhdG9yJztcblxuQENvbXBvbmVudCh7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICdzZWN0aW9uW25nbC1wb3BvdmVyXScsXG4gIHRlbXBsYXRlVXJsOiAnLi9wb3BvdmVyLmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgcHJvdmlkZXJzOiBbSG9zdFNlcnZpY2VdLFxuICBob3N0OiB7XG4gICAgJ3JvbGUnOiAnZGlhbG9nJyxcbiAgICAnW2NsYXNzLnNsZHMtcG9wb3Zlcl0nOiAndHJ1ZScsXG4gIH0sXG59KVxuZXhwb3J0IGNsYXNzIE5nbFBvcG92ZXIgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cbiAgdGVtcGxhdGU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuXG4gIGhlYWRlcjogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XG5cbiAgZm9vdGVyOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcblxuICBjbG9zZVRpdGxlOiBzdHJpbmc7XG5cbiAgY2xvc2VWaXNpYmxlOiBib29sZWFuO1xuXG4gIEBPbkNoYW5nZSgpIHBvcG92ZXJDbGFzczogYW55O1xuXG4gIEBPbkNoYW5nZSgpIHNpemU6IFNpemU7XG5cbiAgQE9uQ2hhbmdlKCkgdmFyaWFudDogVmFyaWFudDtcblxuICBAT25DaGFuZ2UoKSBwbGFjZW1lbnQ6IFBsYWNlbWVudDtcblxuICBASG9zdEJpbmRpbmcoJ2F0dHIuYXJpYS1sYWJlbGxlZGJ5JylcbiAgZ2V0IGxhYmVsbGVkYnkoKSB7XG4gICAgcmV0dXJuIHRoaXMuaGVhZGVyID8gYCR7dGhpcy51aWR9LWhlYWRpbmdgIDogbnVsbDtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnYXR0ci5hcmlhLWRlc2NyaWJlZGJ5JylcbiAgZ2V0IGRlc2NyaWJlZGJ5KCkge1xuICAgIHJldHVybiB0aGlzLnRlbXBsYXRlID8gdGhpcy51aWQgOiBudWxsO1xuICB9XG5cbiAgY2xvc2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgaXNUZW1wbGF0ZVJlZiA9IGlzVGVtcGxhdGVSZWY7XG4gIGNhbkNsb3NlOiBib29sZWFuO1xuICB1aWQgPSB1bmlxdWVJZCgncG9wb3ZlcicpO1xuICBpbnZlcnNlQ2xvc2VCdXR0b246IGJvb2xlYW47XG5cbiAgcHJpdmF0ZSBudWJiaW46IFBsYWNlbWVudDtcblxuICAvKiogVGhlIGNsYXNzIHRoYXQgdHJhcHMgYW5kIG1hbmFnZXMgZm9jdXMgd2l0aGluIHRoZSBkaWFsb2cuICovXG4gIHByaXZhdGUgZm9jdXNUcmFwOiBGb2N1c1RyYXA7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBob3N0U2VydmljZTogSG9zdFNlcnZpY2UsXG4gICAgcHVibGljIGVsZW1lbnQ6IEVsZW1lbnRSZWYsXG4gICAgcHVibGljIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBmb2N1c1RyYXBGYWN0b3J5OiBGb2N1c1RyYXBGYWN0b3J5LFxuICAgIHByaXZhdGUgY2Q6IENoYW5nZURldGVjdG9yUmVmKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuZm9jdXNUcmFwID0gdGhpcy5mb2N1c1RyYXBGYWN0b3J5LmNyZWF0ZSh0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCk7XG4gICAgdGhpcy5mb2N1c1RyYXAuZm9jdXNJbml0aWFsRWxlbWVudFdoZW5SZWFkeSgpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gIGlmICh0aGlzLmZvY3VzVHJhcCkge1xuICAgICAgdGhpcy5mb2N1c1RyYXAuZGVzdHJveSgpO1xuICAgICAgdGhpcy5mb2N1c1RyYXAgPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIG5nbE9uUHJvcGVydHlDaGFuZ2UocHJvcCkge1xuICAgIGlmIChwcm9wID09PSAnc2l6ZScgfHwgcHJvcCA9PT0gJ3BvcG92ZXJDbGFzcycpIHtcbiAgICAgIHRoaXMuc2V0SG9zdENsYXNzKCk7XG4gICAgfSBlbHNlIGlmIChwcm9wID09PSAncGxhY2VtZW50Jykge1xuICAgICAgdGhpcy5udWJiaW4gPSBQT1NJVElPTl9NQVBbdGhpcy5wbGFjZW1lbnRdLm51YmJpbjtcbiAgICAgIHRoaXMuc2V0SG9zdENsYXNzKCk7XG4gICAgfSBlbHNlIGlmIChwcm9wID09PSAndmFyaWFudCcpIHtcbiAgICAgIHRoaXMuaW52ZXJzZUNsb3NlQnV0dG9uID0gWyd3YWxrdGhyb3VnaCcsICdmZWF0dXJlJywgJ2Vycm9yJ10uaW5kZXhPZih0aGlzLnZhcmlhbnQpID4gLTE7XG4gICAgICB0aGlzLnNldEhvc3RDbGFzcygpO1xuICAgIH1cbiAgfVxuXG4gIG1hcmtGb3JDaGVjaygpIHtcbiAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgb25DbG9zZSgpIHtcbiAgICB0aGlzLmNsb3NlLmVtaXQoKTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0SG9zdENsYXNzKCkge1xuICAgIHRoaXMuaG9zdFNlcnZpY2UudXBkYXRlQ2xhc3ModGhpcy5lbGVtZW50LCBuZ0NsYXNzQ29tYmluZSh0aGlzLnBvcG92ZXJDbGFzcywge1xuICAgICAgW2BzbGRzLW51YmJpbl8ke3RoaXMubnViYmlufWBdOiB0cnVlLFxuICAgICAgW2BzbGRzLXBvcG92ZXJfJHt0aGlzLnNpemV9YF06ICEhdGhpcy5zaXplLFxuICAgICAgW2BzbGRzLXBvcG92ZXJfd2Fsa3Rocm91Z2hgXTogdGhpcy52YXJpYW50ID09PSAnZmVhdHVyZScsXG4gICAgICBbYHNsZHMtcG9wb3Zlcl8ke3RoaXMudmFyaWFudH1gXTogISF0aGlzLnZhcmlhbnQsXG4gICAgfSkpO1xuXG4gICAgdGhpcy5ob3N0U2VydmljZS51cGRhdGVTdHlsZSh0aGlzLmVsZW1lbnQsIGdldFBsYWNlbWVudFN0eWxlcyh0aGlzLm51YmJpbikpO1xuICB9XG5cbn1cbiJdfQ==
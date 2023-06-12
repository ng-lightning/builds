import { __decorate } from "tslib";
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { POSITION_MAP, getPlacementStyles } from '../util/overlay-position';
import { HostService } from '../common/host/host.service';
import { OnChange } from '../util/property-watch-decorator';
import { ngClassCombine } from '../util/util';
import * as i0 from "@angular/core";
import * as i1 from "../common/host/host.service";
import * as i2 from "../util/outlet";
export class NglTooltip {
    constructor(element, renderer, hostService, cd) {
        this.element = element;
        this.renderer = renderer;
        this.hostService = hostService;
        this.cd = cd;
        this.renderer.addClass(this.element.nativeElement, 'slds-popover');
        this.renderer.addClass(this.element.nativeElement, 'slds-popover_tooltip');
        this.renderer.setAttribute(this.element.nativeElement, 'role', 'tooltip');
    }
    nglOnPropertyChange(prop) {
        if (prop === 'uid') {
            this.renderer.setAttribute(this.element.nativeElement, 'id', this.uid);
        }
        else if (prop === 'placement') {
            this.nubbin = POSITION_MAP[this.placement].nubbin;
            this.setHostClass();
        }
        else if (prop === 'template') {
            this.cd.markForCheck();
        }
        else if (prop === 'tooltipClass') {
            this.setHostClass();
        }
    }
    setHostClass() {
        this.hostService.updateClass(this.element, ngClassCombine(this.tooltipClass, {
            [`slds-nubbin_${this.nubbin}`]: true,
        }));
        this.hostService.updateStyle(this.element, getPlacementStyles(this.nubbin));
    }
}
NglTooltip.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglTooltip, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i1.HostService }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component });
NglTooltip.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: NglTooltip, selector: "div[ngl-tooltip]", providers: [HostService], ngImport: i0, template: "\n<div class=\"slds-popover__body\" [nglInternalOutlet]=\"template\"></div>", dependencies: [{ kind: "component", type: i2.NglInternalOutlet, selector: "[nglInternalOutlet]", inputs: ["nglInternalOutlet", "nglInternalOutletContext"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
__decorate([
    OnChange()
], NglTooltip.prototype, "template", void 0);
__decorate([
    OnChange()
], NglTooltip.prototype, "placement", void 0);
__decorate([
    OnChange()
], NglTooltip.prototype, "uid", void 0);
__decorate([
    OnChange()
], NglTooltip.prototype, "tooltipClass", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglTooltip, decorators: [{
            type: Component,
            args: [{ selector: 'div[ngl-tooltip]', changeDetection: ChangeDetectionStrategy.OnPush, providers: [HostService], template: "\n<div class=\"slds-popover__body\" [nglInternalOutlet]=\"template\"></div>" }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i1.HostService }, { type: i0.ChangeDetectorRef }]; }, propDecorators: { template: [], placement: [], uid: [], tooltipClass: [] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nLWxpZ2h0bmluZy9zcmMvbGliL3Rvb2x0aXBzL3Rvb2x0aXAudHMiLCIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1saWdodG5pbmcvc3JjL2xpYi90b29sdGlwcy90b29sdGlwLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsdUJBQXVCLEVBQXlELE1BQU0sZUFBZSxDQUFDO0FBQzFILE9BQU8sRUFBYSxZQUFZLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUN2RixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDMUQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQzVELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxjQUFjLENBQUM7Ozs7QUFTOUMsTUFBTSxPQUFPLFVBQVU7SUFZckIsWUFBb0IsT0FBbUIsRUFDbkIsUUFBbUIsRUFDbkIsV0FBd0IsRUFDeEIsRUFBcUI7UUFIckIsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQUNuQixhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ25CLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLE9BQUUsR0FBRixFQUFFLENBQW1CO1FBQ3ZDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLGNBQWMsQ0FBQyxDQUFDO1FBQ25FLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLHNCQUFzQixDQUFDLENBQUM7UUFDM0UsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsTUFBTSxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQzVFLENBQUM7SUFFRCxtQkFBbUIsQ0FBQyxJQUFJO1FBQ3RCLElBQUksSUFBSSxLQUFLLEtBQUssRUFBRTtZQUNsQixJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ3hFO2FBQU0sSUFBSSxJQUFJLEtBQUssV0FBVyxFQUFFO1lBQy9CLElBQUksQ0FBQyxNQUFNLEdBQUcsWUFBWSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFNLENBQUM7WUFDbEQsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1NBQ3JCO2FBQU0sSUFBSSxJQUFJLEtBQUssVUFBVSxFQUFFO1lBQzlCLElBQUksQ0FBQyxFQUFFLENBQUMsWUFBWSxFQUFFLENBQUM7U0FDeEI7YUFBTSxJQUFJLElBQUksS0FBSyxjQUFjLEVBQUU7WUFDbEMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1NBQ3JCO0lBQ0wsQ0FBQztJQUVTLFlBQVk7UUFDbEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxjQUFjLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRTtZQUMzRSxDQUFDLGVBQWUsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsSUFBSTtTQUNyQyxDQUFDLENBQUMsQ0FBQztRQUVKLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsa0JBQWtCLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDOUUsQ0FBQzs7dUdBeENVLFVBQVU7MkZBQVYsVUFBVSwyQ0FGVixDQUFDLFdBQVcsQ0FBQywwQkNYMUIsNkVBQ3FFO0FEY3ZEO0lBQVgsUUFBUSxFQUFFOzRDQUFzQztBQUVyQztJQUFYLFFBQVEsRUFBRTs2Q0FBc0I7QUFFcEI7SUFBWixRQUFRLEVBQUU7dUNBQWM7QUFFWjtJQUFaLFFBQVEsRUFBRTtnREFBb0I7MkZBUnBCLFVBQVU7a0JBUHRCLFNBQVM7K0JBRUUsa0JBQWtCLG1CQUVYLHVCQUF1QixDQUFDLE1BQU0sYUFDcEMsQ0FBQyxXQUFXLENBQUM7bUxBSVosUUFBUSxNQUVSLFNBQVMsTUFFUixHQUFHLE1BRUgsWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBUZW1wbGF0ZVJlZiwgRWxlbWVudFJlZiwgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQbGFjZW1lbnQsIFBPU0lUSU9OX01BUCwgZ2V0UGxhY2VtZW50U3R5bGVzIH0gZnJvbSAnLi4vdXRpbC9vdmVybGF5LXBvc2l0aW9uJztcbmltcG9ydCB7IEhvc3RTZXJ2aWNlIH0gZnJvbSAnLi4vY29tbW9uL2hvc3QvaG9zdC5zZXJ2aWNlJztcbmltcG9ydCB7IE9uQ2hhbmdlIH0gZnJvbSAnLi4vdXRpbC9wcm9wZXJ0eS13YXRjaC1kZWNvcmF0b3InO1xuaW1wb3J0IHsgbmdDbGFzc0NvbWJpbmUgfSBmcm9tICcuLi91dGlsL3V0aWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBhbmd1bGFyLWVzbGludC9jb21wb25lbnQtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICdkaXZbbmdsLXRvb2x0aXBdJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3Rvb2x0aXAuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBwcm92aWRlcnM6IFtIb3N0U2VydmljZV0sXG59KVxuZXhwb3J0IGNsYXNzIE5nbFRvb2x0aXAge1xuXG4gIEBPbkNoYW5nZSgpIHRlbXBsYXRlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcblxuICBAT25DaGFuZ2UoKSBwbGFjZW1lbnQ6IFBsYWNlbWVudDtcblxuICBAT25DaGFuZ2UoKSAgdWlkOiBzdHJpbmc7XG5cbiAgQE9uQ2hhbmdlKCkgIHRvb2x0aXBDbGFzczogYW55O1xuXG4gIHByaXZhdGUgbnViYmluOiBQbGFjZW1lbnQ7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50UmVmLFxuICAgICAgICAgICAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgICAgICAgICAgIHByaXZhdGUgaG9zdFNlcnZpY2U6IEhvc3RTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIGNkOiBDaGFuZ2VEZXRlY3RvclJlZikge1xuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICdzbGRzLXBvcG92ZXInKTtcbiAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LCAnc2xkcy1wb3BvdmVyX3Rvb2x0aXAnKTtcbiAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZSh0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ3JvbGUnLCAndG9vbHRpcCcpO1xuICB9XG5cbiAgbmdsT25Qcm9wZXJ0eUNoYW5nZShwcm9wKSB7XG4gICAgaWYgKHByb3AgPT09ICd1aWQnKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZSh0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ2lkJywgdGhpcy51aWQpO1xuICAgIH0gZWxzZSBpZiAocHJvcCA9PT0gJ3BsYWNlbWVudCcpIHtcbiAgICAgIHRoaXMubnViYmluID0gUE9TSVRJT05fTUFQW3RoaXMucGxhY2VtZW50XS5udWJiaW47XG4gICAgICB0aGlzLnNldEhvc3RDbGFzcygpO1xuICAgIH0gZWxzZSBpZiAocHJvcCA9PT0gJ3RlbXBsYXRlJykge1xuICAgICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcbiAgICB9IGVsc2UgaWYgKHByb3AgPT09ICd0b29sdGlwQ2xhc3MnKSB7XG4gICAgICB0aGlzLnNldEhvc3RDbGFzcygpO1xuICAgIH1cbn1cblxuICBwcml2YXRlIHNldEhvc3RDbGFzcygpIHtcbiAgICB0aGlzLmhvc3RTZXJ2aWNlLnVwZGF0ZUNsYXNzKHRoaXMuZWxlbWVudCwgbmdDbGFzc0NvbWJpbmUodGhpcy50b29sdGlwQ2xhc3MsIHtcbiAgICAgIFtgc2xkcy1udWJiaW5fJHt0aGlzLm51YmJpbn1gXTogdHJ1ZSxcbiAgICB9KSk7XG5cbiAgICB0aGlzLmhvc3RTZXJ2aWNlLnVwZGF0ZVN0eWxlKHRoaXMuZWxlbWVudCwgZ2V0UGxhY2VtZW50U3R5bGVzKHRoaXMubnViYmluKSk7XG4gIH1cbn1cbiIsIlxuPGRpdiBjbGFzcz1cInNsZHMtcG9wb3Zlcl9fYm9keVwiIFtuZ2xJbnRlcm5hbE91dGxldF09XCJ0ZW1wbGF0ZVwiPjwvZGl2PiJdfQ==
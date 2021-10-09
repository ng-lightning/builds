import { __decorate } from "tslib";
import { Component, ChangeDetectionStrategy, ChangeDetectorRef, ElementRef, Renderer2 } from '@angular/core';
import { POSITION_MAP, getPlacementStyles } from '../util/overlay-position';
import { HostService } from '../common/host/host.service';
import { OnChange } from '../util/property-watch-decorator';
import { ngClassCombine } from '../util/util';
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
NglTooltip.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'div[ngl-tooltip]',
                template: "\n<div class=\"slds-popover__body\" [nglInternalOutlet]=\"template\"></div>",
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [HostService]
            },] }
];
NglTooltip.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: HostService },
    { type: ChangeDetectorRef }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nLWxpZ2h0bmluZy9zcmMvbGliL3Rvb2x0aXBzL3Rvb2x0aXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsdUJBQXVCLEVBQUUsaUJBQWlCLEVBQWUsVUFBVSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxSCxPQUFPLEVBQWEsWUFBWSxFQUFFLGtCQUFrQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDdkYsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQzFELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUM1RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBUzlDLE1BQU0sT0FBTyxVQUFVO0lBWXJCLFlBQW9CLE9BQW1CLEVBQ25CLFFBQW1CLEVBQ25CLFdBQXdCLEVBQ3hCLEVBQXFCO1FBSHJCLFlBQU8sR0FBUCxPQUFPLENBQVk7UUFDbkIsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNuQixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixPQUFFLEdBQUYsRUFBRSxDQUFtQjtRQUN2QyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxjQUFjLENBQUMsQ0FBQztRQUNuRSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxzQkFBc0IsQ0FBQyxDQUFDO1FBQzNFLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLE1BQU0sRUFBRSxTQUFTLENBQUMsQ0FBQztJQUM1RSxDQUFDO0lBRUQsbUJBQW1CLENBQUMsSUFBSTtRQUN0QixJQUFJLElBQUksS0FBSyxLQUFLLEVBQUU7WUFDbEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUN4RTthQUFNLElBQUksSUFBSSxLQUFLLFdBQVcsRUFBRTtZQUMvQixJQUFJLENBQUMsTUFBTSxHQUFHLFlBQVksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBTSxDQUFDO1lBQ2xELElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztTQUNyQjthQUFNLElBQUksSUFBSSxLQUFLLFVBQVUsRUFBRTtZQUM5QixJQUFJLENBQUMsRUFBRSxDQUFDLFlBQVksRUFBRSxDQUFDO1NBQ3hCO2FBQU0sSUFBSSxJQUFJLEtBQUssY0FBYyxFQUFFO1lBQ2xDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztTQUNyQjtJQUNMLENBQUM7SUFFUyxZQUFZO1FBQ2xCLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsY0FBYyxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDM0UsQ0FBQyxlQUFlLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLElBQUk7U0FDckMsQ0FBQyxDQUFDLENBQUM7UUFFSixJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLGtCQUFrQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQzlFLENBQUM7OztZQS9DRixTQUFTLFNBQUM7Z0JBQ1QsOENBQThDO2dCQUM5QyxRQUFRLEVBQUUsa0JBQWtCO2dCQUM1Qix1RkFBNkI7Z0JBQzdCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxTQUFTLEVBQUUsQ0FBQyxXQUFXLENBQUM7YUFDekI7OztZQVo0RSxVQUFVO1lBQUUsU0FBUztZQUV6RixXQUFXO1lBRnlCLGlCQUFpQjs7QUFlaEQ7SUFBWCxRQUFRLEVBQUU7NENBQXNDO0FBRXJDO0lBQVgsUUFBUSxFQUFFOzZDQUFzQjtBQUVwQjtJQUFaLFFBQVEsRUFBRTt1Q0FBYztBQUVaO0lBQVosUUFBUSxFQUFFO2dEQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBUZW1wbGF0ZVJlZiwgRWxlbWVudFJlZiwgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQbGFjZW1lbnQsIFBPU0lUSU9OX01BUCwgZ2V0UGxhY2VtZW50U3R5bGVzIH0gZnJvbSAnLi4vdXRpbC9vdmVybGF5LXBvc2l0aW9uJztcbmltcG9ydCB7IEhvc3RTZXJ2aWNlIH0gZnJvbSAnLi4vY29tbW9uL2hvc3QvaG9zdC5zZXJ2aWNlJztcbmltcG9ydCB7IE9uQ2hhbmdlIH0gZnJvbSAnLi4vdXRpbC9wcm9wZXJ0eS13YXRjaC1kZWNvcmF0b3InO1xuaW1wb3J0IHsgbmdDbGFzc0NvbWJpbmUgfSBmcm9tICcuLi91dGlsL3V0aWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxuICBzZWxlY3RvcjogJ2RpdltuZ2wtdG9vbHRpcF0nLFxuICB0ZW1wbGF0ZVVybDogJy4vdG9vbHRpcC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByb3ZpZGVyczogW0hvc3RTZXJ2aWNlXSxcbn0pXG5leHBvcnQgY2xhc3MgTmdsVG9vbHRpcCB7XG5cbiAgQE9uQ2hhbmdlKCkgdGVtcGxhdGU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuXG4gIEBPbkNoYW5nZSgpIHBsYWNlbWVudDogUGxhY2VtZW50O1xuXG4gIEBPbkNoYW5nZSgpICB1aWQ6IHN0cmluZztcblxuICBAT25DaGFuZ2UoKSAgdG9vbHRpcENsYXNzOiBhbnk7XG5cbiAgcHJpdmF0ZSBudWJiaW46IFBsYWNlbWVudDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnQ6IEVsZW1lbnRSZWYsXG4gICAgICAgICAgICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBob3N0U2VydmljZTogSG9zdFNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgY2Q6IENoYW5nZURldGVjdG9yUmVmKSB7XG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ3NsZHMtcG9wb3ZlcicpO1xuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICdzbGRzLXBvcG92ZXJfdG9vbHRpcCcpO1xuICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LCAncm9sZScsICd0b29sdGlwJyk7XG4gIH1cblxuICBuZ2xPblByb3BlcnR5Q2hhbmdlKHByb3ApIHtcbiAgICBpZiAocHJvcCA9PT0gJ3VpZCcpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LCAnaWQnLCB0aGlzLnVpZCk7XG4gICAgfSBlbHNlIGlmIChwcm9wID09PSAncGxhY2VtZW50Jykge1xuICAgICAgdGhpcy5udWJiaW4gPSBQT1NJVElPTl9NQVBbdGhpcy5wbGFjZW1lbnRdLm51YmJpbjtcbiAgICAgIHRoaXMuc2V0SG9zdENsYXNzKCk7XG4gICAgfSBlbHNlIGlmIChwcm9wID09PSAndGVtcGxhdGUnKSB7XG4gICAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpO1xuICAgIH0gZWxzZSBpZiAocHJvcCA9PT0gJ3Rvb2x0aXBDbGFzcycpIHtcbiAgICAgIHRoaXMuc2V0SG9zdENsYXNzKCk7XG4gICAgfVxufVxuXG4gIHByaXZhdGUgc2V0SG9zdENsYXNzKCkge1xuICAgIHRoaXMuaG9zdFNlcnZpY2UudXBkYXRlQ2xhc3ModGhpcy5lbGVtZW50LCBuZ0NsYXNzQ29tYmluZSh0aGlzLnRvb2x0aXBDbGFzcywge1xuICAgICAgW2BzbGRzLW51YmJpbl8ke3RoaXMubnViYmlufWBdOiB0cnVlLFxuICAgIH0pKTtcblxuICAgIHRoaXMuaG9zdFNlcnZpY2UudXBkYXRlU3R5bGUodGhpcy5lbGVtZW50LCBnZXRQbGFjZW1lbnRTdHlsZXModGhpcy5udWJiaW4pKTtcbiAgfVxufVxuIl19
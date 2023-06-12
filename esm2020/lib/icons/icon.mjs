import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { HostService } from '../common/host/host.service';
import { ngClassCombine } from '../util/util';
import { normalizeIconName } from './util';
import * as i0 from "@angular/core";
import * as i1 from "../common/host/host.service";
import * as i2 from "@angular/common";
import * as i3 from "./svg";
export class NglIcon {
    constructor(el, hostService) {
        this.el = el;
        this.hostService = hostService;
        /**
         * The appearance of a `utility` icon.
         */
        this.variant = 'default';
    }
    set iconName(iconName) {
        this._iconName = normalizeIconName(iconName);
    }
    get iconName() {
        return this._iconName;
    }
    ngOnInit() {
        this.setHostClass();
    }
    ngOnChanges() {
        this.setHostClass();
    }
    svgClasses() {
        const [category] = this.iconName.split(':');
        const isUtility = category === 'utility';
        const isDefaultOrInverse = this.variant === 'default' || this.variant === 'inverse';
        const classes = {
            [`slds-icon_${this.size}`]: !!this.size && this.size !== 'medium',
            [`slds-icon-text-${isDefaultOrInverse ? 'default' : this.variant}`]: isDefaultOrInverse ?
                (this.variant === 'default' ? isUtility : !isUtility)
                : !!this.variant,
        };
        return ngClassCombine(this.svgClass, classes);
    }
    setHostClass() {
        const [category, icon] = this.iconName.split(':');
        const kebabCaseName = icon.replace(/_/g, '-');
        this.hostService.updateClass(this.el, {
            [`slds-icon_container`]: category !== 'utility',
            [`slds-icon_container_circle`]: category === 'action',
            [`slds-icon-${category}-${kebabCaseName}`]: category !== 'utility' && category !== 'doctype',
        });
    }
}
NglIcon.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglIcon, deps: [{ token: i0.ElementRef }, { token: i1.HostService }], target: i0.ɵɵFactoryTarget.Component });
NglIcon.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: NglIcon, selector: "ngl-icon, [ngl-icon]", inputs: { iconName: "iconName", variant: "variant", size: "size", alternativeText: "alternativeText", svgClass: "svgClass" }, providers: [HostService], usesOnChanges: true, ngImport: i0, template: "\n<svg class=\"slds-icon\" [nglIconName]=\"iconName\" [ngClass]=\"svgClasses()\"></svg>\n<ng-content></ng-content><span class=\"slds-assistive-text\" *ngIf=\"alternativeText\">{{alternativeText}}</span>", dependencies: [{ kind: "directive", type: i2.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i3.NglIconSvg, selector: "svg[nglIconName]", inputs: ["nglIconName", "xPos"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglIcon, decorators: [{
            type: Component,
            args: [{ selector: 'ngl-icon, [ngl-icon]', changeDetection: ChangeDetectionStrategy.OnPush, providers: [HostService], template: "\n<svg class=\"slds-icon\" [nglIconName]=\"iconName\" [ngClass]=\"svgClasses()\"></svg>\n<ng-content></ng-content><span class=\"slds-assistive-text\" *ngIf=\"alternativeText\">{{alternativeText}}</span>" }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i1.HostService }]; }, propDecorators: { iconName: [{
                type: Input
            }], variant: [{
                type: Input
            }], size: [{
                type: Input
            }], alternativeText: [{
                type: Input
            }], svgClass: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nLWxpZ2h0bmluZy9zcmMvbGliL2ljb25zL2ljb24udHMiLCIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1saWdodG5pbmcvc3JjL2xpYi9pY29ucy9pY29uLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsdUJBQXVCLEVBQWlDLE1BQU0sZUFBZSxDQUFDO0FBQ3pHLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQzlDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLFFBQVEsQ0FBQzs7Ozs7QUFRM0MsTUFBTSxPQUFPLE9BQU87SUErQmxCLFlBQW9CLEVBQWMsRUFBVSxXQUF3QjtRQUFoRCxPQUFFLEdBQUYsRUFBRSxDQUFZO1FBQVUsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUF0QnBFOztXQUVHO1FBQ00sWUFBTyxHQUFpRSxTQUFTLENBQUM7SUFtQnBCLENBQUM7SUE3QnhFLElBQWEsUUFBUSxDQUFDLFFBQWdCO1FBQ3BDLElBQUksQ0FBQyxTQUFTLEdBQUcsaUJBQWlCLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUNELElBQUksUUFBUTtRQUNWLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN4QixDQUFDO0lBMEJELFFBQVE7UUFDTixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUVELFVBQVU7UUFDUixNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDNUMsTUFBTSxTQUFTLEdBQUcsUUFBUSxLQUFLLFNBQVMsQ0FBQztRQUN6QyxNQUFNLGtCQUFrQixHQUFHLElBQUksQ0FBQyxPQUFPLEtBQUssU0FBUyxJQUFJLElBQUksQ0FBQyxPQUFPLEtBQUssU0FBUyxDQUFDO1FBRXBGLE1BQU0sT0FBTyxHQUFHO1lBQ2QsQ0FBQyxhQUFhLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssUUFBUTtZQUNqRSxDQUFDLGtCQUFrQixrQkFBa0IsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO2dCQUN2RixDQUFDLElBQUksQ0FBQyxPQUFPLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO2dCQUNyRCxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPO1NBQ25CLENBQUM7UUFFRixPQUFPLGNBQWMsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFFTyxZQUFZO1FBQ2xCLE1BQU0sQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDbEQsTUFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFFOUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRTtZQUNwQyxDQUFDLHFCQUFxQixDQUFDLEVBQUUsUUFBUSxLQUFLLFNBQVM7WUFDL0MsQ0FBQyw0QkFBNEIsQ0FBQyxFQUFFLFFBQVEsS0FBSyxRQUFRO1lBQ3JELENBQUMsYUFBYSxRQUFRLElBQUksYUFBYSxFQUFFLENBQUMsRUFBRSxRQUFRLEtBQUssU0FBUyxJQUFJLFFBQVEsS0FBSyxTQUFTO1NBQzdGLENBQUMsQ0FBQztJQUNMLENBQUM7O29HQWpFVSxPQUFPO3dGQUFQLE9BQU8sNktBRlAsQ0FBQyxXQUFXLENBQUMsK0NDVDFCLDRNQUU2RzsyRkRTaEcsT0FBTztrQkFObkIsU0FBUzsrQkFDRSxzQkFBc0IsbUJBRWYsdUJBQXVCLENBQUMsTUFBTSxhQUNwQyxDQUFDLFdBQVcsQ0FBQzsySEFJWCxRQUFRO3NCQUFwQixLQUFLO2dCQVVHLE9BQU87c0JBQWYsS0FBSztnQkFLRyxJQUFJO3NCQUFaLEtBQUs7Z0JBS0csZUFBZTtzQkFBdkIsS0FBSztnQkFLRyxRQUFRO3NCQUFoQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIE9uSW5pdCwgT25DaGFuZ2VzLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIb3N0U2VydmljZSB9IGZyb20gJy4uL2NvbW1vbi9ob3N0L2hvc3Quc2VydmljZSc7XG5pbXBvcnQgeyBuZ0NsYXNzQ29tYmluZSB9IGZyb20gJy4uL3V0aWwvdXRpbCc7XG5pbXBvcnQgeyBub3JtYWxpemVJY29uTmFtZSB9IGZyb20gJy4vdXRpbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25nbC1pY29uLCBbbmdsLWljb25dJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2ljb24uaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBwcm92aWRlcnM6IFtIb3N0U2VydmljZV0sXG59KVxuZXhwb3J0IGNsYXNzIE5nbEljb24gaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG5cbiAgQElucHV0KCkgc2V0IGljb25OYW1lKGljb25OYW1lOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9pY29uTmFtZSA9IG5vcm1hbGl6ZUljb25OYW1lKGljb25OYW1lKTtcbiAgfVxuICBnZXQgaWNvbk5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ljb25OYW1lO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBhcHBlYXJhbmNlIG9mIGEgYHV0aWxpdHlgIGljb24uXG4gICAqL1xuICBASW5wdXQoKSB2YXJpYW50OiAnZGVmYXVsdCcgfCAnd2FybmluZycgfCAnZXJyb3InIHwgJ2xpZ2h0JyB8ICdpbnZlcnNlJyB8IG51bGwgPSAnZGVmYXVsdCc7XG5cbiAgLyoqXG4gICAqIFRoZSBzaXplIG9mIHRoZSBpY29uLlxuICAgKi9cbiAgQElucHV0KCkgc2l6ZTogJ3h4LXNtYWxsJyB8ICd4LXNtYWxsJyB8ICdzbWFsbCcgfCAnbWVkaXVtJyB8ICdsYXJnZSc7XG5cbiAgLyoqXG4gICAqIFRleHQgdXNlZCB0byBkZXNjcmliZSB0aGUgaWNvbiBmb3IgYWNjZXNzaWJpbGl0eS5cbiAgICovXG4gIEBJbnB1dCgpIGFsdGVybmF0aXZlVGV4dDogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBDU1MgY2xhc3NlcyB0aGF0IGFyZSBhcHBsaWVkIHRvIHRoZSBTVkcuXG4gICAqL1xuICBASW5wdXQoKSBzdmdDbGFzczogc3RyaW5nIHwgc3RyaW5nW10gfCBTZXQ8c3RyaW5nPiB8IHsgW2tsYXNzOiBzdHJpbmddOiBhbnkgfTtcblxuICBwcml2YXRlIF9pY29uTmFtZTogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsIHByaXZhdGUgaG9zdFNlcnZpY2U6IEhvc3RTZXJ2aWNlKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuc2V0SG9zdENsYXNzKCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpIHtcbiAgICB0aGlzLnNldEhvc3RDbGFzcygpO1xuICB9XG5cbiAgc3ZnQ2xhc3NlcygpIHtcbiAgICBjb25zdCBbY2F0ZWdvcnldID0gdGhpcy5pY29uTmFtZS5zcGxpdCgnOicpO1xuICAgIGNvbnN0IGlzVXRpbGl0eSA9IGNhdGVnb3J5ID09PSAndXRpbGl0eSc7XG4gICAgY29uc3QgaXNEZWZhdWx0T3JJbnZlcnNlID0gdGhpcy52YXJpYW50ID09PSAnZGVmYXVsdCcgfHwgdGhpcy52YXJpYW50ID09PSAnaW52ZXJzZSc7XG5cbiAgICBjb25zdCBjbGFzc2VzID0ge1xuICAgICAgW2BzbGRzLWljb25fJHt0aGlzLnNpemV9YF06ICEhdGhpcy5zaXplICYmIHRoaXMuc2l6ZSAhPT0gJ21lZGl1bScsXG4gICAgICBbYHNsZHMtaWNvbi10ZXh0LSR7aXNEZWZhdWx0T3JJbnZlcnNlID8gJ2RlZmF1bHQnIDogdGhpcy52YXJpYW50fWBdOiBpc0RlZmF1bHRPckludmVyc2UgP1xuICAgICAgICAodGhpcy52YXJpYW50ID09PSAnZGVmYXVsdCcgPyBpc1V0aWxpdHkgOiAhaXNVdGlsaXR5KVxuICAgICAgICA6ICEhdGhpcy52YXJpYW50LFxuICAgIH07XG5cbiAgICByZXR1cm4gbmdDbGFzc0NvbWJpbmUodGhpcy5zdmdDbGFzcywgY2xhc3Nlcyk7XG4gIH1cblxuICBwcml2YXRlIHNldEhvc3RDbGFzcygpIHtcbiAgICBjb25zdCBbY2F0ZWdvcnksIGljb25dID0gdGhpcy5pY29uTmFtZS5zcGxpdCgnOicpO1xuICAgIGNvbnN0IGtlYmFiQ2FzZU5hbWUgPSBpY29uLnJlcGxhY2UoL18vZywgJy0nKTtcblxuICAgIHRoaXMuaG9zdFNlcnZpY2UudXBkYXRlQ2xhc3ModGhpcy5lbCwge1xuICAgICAgW2BzbGRzLWljb25fY29udGFpbmVyYF06IGNhdGVnb3J5ICE9PSAndXRpbGl0eScsXG4gICAgICBbYHNsZHMtaWNvbl9jb250YWluZXJfY2lyY2xlYF06IGNhdGVnb3J5ID09PSAnYWN0aW9uJyxcbiAgICAgIFtgc2xkcy1pY29uLSR7Y2F0ZWdvcnl9LSR7a2ViYWJDYXNlTmFtZX1gXTogY2F0ZWdvcnkgIT09ICd1dGlsaXR5JyAmJiBjYXRlZ29yeSAhPT0gJ2RvY3R5cGUnLFxuICAgIH0pO1xuICB9XG5cbn1cbiIsIlxuPHN2ZyBjbGFzcz1cInNsZHMtaWNvblwiIFtuZ2xJY29uTmFtZV09XCJpY29uTmFtZVwiIFtuZ0NsYXNzXT1cInN2Z0NsYXNzZXMoKVwiPjwvc3ZnPlxuPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PjxzcGFuIGNsYXNzPVwic2xkcy1hc3Npc3RpdmUtdGV4dFwiICpuZ0lmPVwiYWx0ZXJuYXRpdmVUZXh0XCI+e3thbHRlcm5hdGl2ZVRleHR9fTwvc3Bhbj4iXX0=
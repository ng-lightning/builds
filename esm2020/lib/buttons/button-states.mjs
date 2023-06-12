import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../icons/svg";
export class NglButtonStateOn {
    constructor(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.renderer.addClass(this.el.nativeElement, this.getHostClass());
    }
    getHostClass() {
        return 'slds-text-selected';
    }
}
NglButtonStateOn.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglButtonStateOn, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Component });
NglButtonStateOn.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: NglButtonStateOn, selector: "ngl-state-on", inputs: { iconName: "iconName" }, ngImport: i0, template: "\n<svg class=\"slds-button__icon slds-button__icon_small slds-button__icon_left\" *ngIf=\"iconName\" [nglIconName]=\"iconName\"></svg>\n<ng-content></ng-content>", dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i2.NglIconSvg, selector: "svg[nglIconName]", inputs: ["nglIconName", "xPos"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglButtonStateOn, decorators: [{
            type: Component,
            args: [{ selector: 'ngl-state-on', changeDetection: ChangeDetectionStrategy.OnPush, template: "\n<svg class=\"slds-button__icon slds-button__icon_small slds-button__icon_left\" *ngIf=\"iconName\" [nglIconName]=\"iconName\"></svg>\n<ng-content></ng-content>" }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }]; }, propDecorators: { iconName: [{
                type: Input
            }] } });
export class NglButtonStateOff extends NglButtonStateOn {
    getHostClass() {
        return 'slds-text-not-selected';
    }
}
NglButtonStateOff.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglButtonStateOff, deps: null, target: i0.ɵɵFactoryTarget.Component });
NglButtonStateOff.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: NglButtonStateOff, selector: "ngl-state-off", usesInheritance: true, ngImport: i0, template: "\n<svg class=\"slds-button__icon slds-button__icon_small slds-button__icon_left\" *ngIf=\"iconName\" [nglIconName]=\"iconName\"></svg>\n<ng-content></ng-content>", dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i2.NglIconSvg, selector: "svg[nglIconName]", inputs: ["nglIconName", "xPos"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglButtonStateOff, decorators: [{
            type: Component,
            args: [{ selector: 'ngl-state-off', changeDetection: ChangeDetectionStrategy.OnPush, template: "\n<svg class=\"slds-button__icon slds-button__icon_small slds-button__icon_left\" *ngIf=\"iconName\" [nglIconName]=\"iconName\"></svg>\n<ng-content></ng-content>" }]
        }] });
export class NglButtonStateHover extends NglButtonStateOn {
    getHostClass() {
        return 'slds-text-selected-focus';
    }
}
NglButtonStateHover.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglButtonStateHover, deps: null, target: i0.ɵɵFactoryTarget.Component });
NglButtonStateHover.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: NglButtonStateHover, selector: "ngl-state-hover", usesInheritance: true, ngImport: i0, template: "\n<svg class=\"slds-button__icon slds-button__icon_small slds-button__icon_left\" *ngIf=\"iconName\" [nglIconName]=\"iconName\"></svg>\n<ng-content></ng-content>", dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i2.NglIconSvg, selector: "svg[nglIconName]", inputs: ["nglIconName", "xPos"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglButtonStateHover, decorators: [{
            type: Component,
            args: [{ selector: 'ngl-state-hover', changeDetection: ChangeDetectionStrategy.OnPush, template: "\n<svg class=\"slds-button__icon slds-button__icon_small slds-button__icon_left\" *ngIf=\"iconName\" [nglIconName]=\"iconName\"></svg>\n<ng-content></ng-content>" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLXN0YXRlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nLWxpZ2h0bmluZy9zcmMvbGliL2J1dHRvbnMvYnV0dG9uLXN0YXRlcy50cyIsIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nLWxpZ2h0bmluZy9zcmMvbGliL2J1dHRvbnMvYnV0dG9uLXN0YXRlcy5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUF5Qix1QkFBdUIsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7OztBQU9qRyxNQUFNLE9BQU8sZ0JBQWdCO0lBUTNCLFlBQW9CLEVBQWMsRUFBVSxRQUFtQjtRQUEzQyxPQUFFLEdBQUYsRUFBRSxDQUFZO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUM3RCxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQztJQUNyRSxDQUFDO0lBRVMsWUFBWTtRQUNwQixPQUFPLG9CQUFvQixDQUFDO0lBQzlCLENBQUM7OzZHQWRVLGdCQUFnQjtpR0FBaEIsZ0JBQWdCLHNGQ1A3QixtS0FFeUI7MkZES1osZ0JBQWdCO2tCQUw1QixTQUFTOytCQUNFLGNBQWMsbUJBRVAsdUJBQXVCLENBQUMsTUFBTTt5SEFRdEMsUUFBUTtzQkFBaEIsS0FBSzs7QUFnQlIsTUFBTSxPQUFPLGlCQUFrQixTQUFRLGdCQUFnQjtJQUMzQyxZQUFZO1FBQ3BCLE9BQU8sd0JBQXdCLENBQUM7SUFDbEMsQ0FBQzs7OEdBSFUsaUJBQWlCO2tHQUFqQixpQkFBaUIsNEVDN0I5QixtS0FFeUI7MkZEMkJaLGlCQUFpQjtrQkFMN0IsU0FBUzsrQkFDRSxlQUFlLG1CQUVSLHVCQUF1QixDQUFDLE1BQU07O0FBYWpELE1BQU0sT0FBTyxtQkFBb0IsU0FBUSxnQkFBZ0I7SUFDN0MsWUFBWTtRQUNwQixPQUFPLDBCQUEwQixDQUFDO0lBQ3BDLENBQUM7O2dIQUhVLG1CQUFtQjtvR0FBbkIsbUJBQW1CLDhFQ3hDaEMsbUtBRXlCOzJGRHNDWixtQkFBbUI7a0JBTC9CLFNBQVM7K0JBQ0UsaUJBQWlCLG1CQUVWLHVCQUF1QixDQUFDLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBFbGVtZW50UmVmLCBSZW5kZXJlcjIsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25nbC1zdGF0ZS1vbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9idXR0b24tc3RhdGVzLmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgTmdsQnV0dG9uU3RhdGVPbiB7XG5cbiAgLyoqXG4gICAqIExEUyBuYW1lIG9mIHRoZSBpY29uLlxuICAgKiBOYW1lcyBhcmUgd3JpdHRlbiBpbiB0aGUgZm9ybWF0ICd1dGlsaXR5OmRvd24nIHdoZXJlICd1dGlsaXR5JyBpcyB0aGUgY2F0ZWdvcnksIGFuZCAnZG93bicgaXMgdGhlIHNwZWNpZmljIGljb24gdG8gYmUgZGlzcGxheWVkLlxuICAgKi9cbiAgQElucHV0KCkgaWNvbk5hbWU6IHN0cmluZztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmLCBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHtcbiAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgdGhpcy5nZXRIb3N0Q2xhc3MoKSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0SG9zdENsYXNzKCkge1xuICAgIHJldHVybiAnc2xkcy10ZXh0LXNlbGVjdGVkJztcbiAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZ2wtc3RhdGUtb2ZmJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2J1dHRvbi1zdGF0ZXMuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBOZ2xCdXR0b25TdGF0ZU9mZiBleHRlbmRzIE5nbEJ1dHRvblN0YXRlT24ge1xuICBwcm90ZWN0ZWQgZ2V0SG9zdENsYXNzKCkge1xuICAgIHJldHVybiAnc2xkcy10ZXh0LW5vdC1zZWxlY3RlZCc7XG4gIH1cbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmdsLXN0YXRlLWhvdmVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2J1dHRvbi1zdGF0ZXMuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBOZ2xCdXR0b25TdGF0ZUhvdmVyIGV4dGVuZHMgTmdsQnV0dG9uU3RhdGVPbiB7XG4gIHByb3RlY3RlZCBnZXRIb3N0Q2xhc3MoKSB7XG4gICAgcmV0dXJuICdzbGRzLXRleHQtc2VsZWN0ZWQtZm9jdXMnO1xuICB9XG59XG4iLCJcbjxzdmcgY2xhc3M9XCJzbGRzLWJ1dHRvbl9faWNvbiBzbGRzLWJ1dHRvbl9faWNvbl9zbWFsbCBzbGRzLWJ1dHRvbl9faWNvbl9sZWZ0XCIgKm5nSWY9XCJpY29uTmFtZVwiIFtuZ2xJY29uTmFtZV09XCJpY29uTmFtZVwiPjwvc3ZnPlxuPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PiJdfQ==
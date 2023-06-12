import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { HostService } from '../common/host/host.service';
import * as i0 from "@angular/core";
import * as i1 from "../common/host/host.service";
import * as i2 from "@angular/common";
import * as i3 from "../icons/svg";
export class NglButton {
    constructor(el, renderer, hostService) {
        this.el = el;
        this.renderer = renderer;
        this.hostService = hostService;
        /**
         * Changes the appearance of the button.
         */
        this.variant = 'neutral';
        /**
         * Describes the position of the icon with respect to ng-content.
         */
        this.iconPosition = 'left';
        this.renderer.addClass(this.el.nativeElement, 'slds-button');
    }
    ngOnInit() {
        this.setHostClass();
    }
    ngOnChanges(changes) {
        if (changes.variant) {
            this.setHostClass();
        }
    }
    hasLeftIcon() {
        return this.iconName && (!this.iconPosition || this.iconPosition === 'left');
    }
    hasRightIcon() {
        return this.iconName && this.iconPosition === 'right';
    }
    setHostClass() {
        this.hostService.updateClass(this.el, {
            [`slds-button_${this.variant}`]: this.variant && this.variant !== 'base',
        });
    }
}
NglButton.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglButton, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i1.HostService }], target: i0.ɵɵFactoryTarget.Component });
NglButton.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: NglButton, selector: "[nglButton]", inputs: { variant: "variant", iconName: "iconName", iconPosition: "iconPosition" }, providers: [HostService], usesOnChanges: true, ngImport: i0, template: "\n<svg class=\"slds-button__icon slds-button__icon_left\" *ngIf=\"hasLeftIcon()\" [nglIconName]=\"iconName\"></svg>\n<ng-content></ng-content>\n<svg class=\"slds-button__icon slds-button__icon_right\" *ngIf=\"hasRightIcon()\" [nglIconName]=\"iconName\"></svg>", dependencies: [{ kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i3.NglIconSvg, selector: "svg[nglIconName]", inputs: ["nglIconName", "xPos"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglButton, decorators: [{
            type: Component,
            args: [{ selector: '[nglButton]', changeDetection: ChangeDetectionStrategy.OnPush, providers: [HostService], template: "\n<svg class=\"slds-button__icon slds-button__icon_left\" *ngIf=\"hasLeftIcon()\" [nglIconName]=\"iconName\"></svg>\n<ng-content></ng-content>\n<svg class=\"slds-button__icon slds-button__icon_right\" *ngIf=\"hasRightIcon()\" [nglIconName]=\"iconName\"></svg>" }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i1.HostService }]; }, propDecorators: { variant: [{
                type: Input
            }], iconName: [{
                type: Input
            }], iconPosition: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctbGlnaHRuaW5nL3NyYy9saWIvYnV0dG9ucy9idXR0b24udHMiLCIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1saWdodG5pbmcvc3JjL2xpYi9idXR0b25zL2J1dHRvbi5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUF5Qix1QkFBdUIsRUFBb0MsTUFBTSxlQUFlLENBQUM7QUFDbkksT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDZCQUE2QixDQUFDOzs7OztBQVMxRCxNQUFNLE9BQU8sU0FBUztJQWtCcEIsWUFBb0IsRUFBYyxFQUFVLFFBQW1CLEVBQVUsV0FBd0I7UUFBN0UsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUFVLGFBQVEsR0FBUixRQUFRLENBQVc7UUFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQWhCakc7O1dBRUc7UUFDTSxZQUFPLEdBQWdILFNBQVMsQ0FBQztRQVExSTs7V0FFRztRQUNNLGlCQUFZLEdBQXFCLE1BQU0sQ0FBQztRQUcvQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxhQUFhLENBQUMsQ0FBQztJQUMvRCxDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBRUQsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLElBQUksT0FBTyxDQUFDLE9BQU8sRUFBRTtZQUNuQixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7U0FDckI7SUFDSCxDQUFDO0lBRUQsV0FBVztRQUNULE9BQU8sSUFBSSxDQUFDLFFBQVEsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksSUFBSSxJQUFJLENBQUMsWUFBWSxLQUFLLE1BQU0sQ0FBQyxDQUFDO0lBQy9FLENBQUM7SUFFRCxZQUFZO1FBQ1YsT0FBTyxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxZQUFZLEtBQUssT0FBTyxDQUFDO0lBQ3hELENBQUM7SUFFTyxZQUFZO1FBQ2xCLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUU7WUFDcEMsQ0FBQyxlQUFlLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLE9BQU8sS0FBSyxNQUFNO1NBQ3pFLENBQUMsQ0FBQztJQUNMLENBQUM7O3NHQTVDVSxTQUFTOzBGQUFULFNBQVMsMEhBRlQsQ0FBQyxXQUFXLENBQUMsK0NDUjFCLHFRQUc2RzsyRkRPaEcsU0FBUztrQkFQckIsU0FBUzsrQkFFRSxhQUFhLG1CQUVOLHVCQUF1QixDQUFDLE1BQU0sYUFDcEMsQ0FBQyxXQUFXLENBQUM7bUpBT2YsT0FBTztzQkFBZixLQUFLO2dCQU1HLFFBQVE7c0JBQWhCLEtBQUs7Z0JBS0csWUFBWTtzQkFBcEIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIEVsZW1lbnRSZWYsIFJlbmRlcmVyMiwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIE9uSW5pdCwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIb3N0U2VydmljZSB9IGZyb20gJy4uL2NvbW1vbi9ob3N0L2hvc3Quc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQGFuZ3VsYXItZXNsaW50L2NvbXBvbmVudC1zZWxlY3RvclxuICBzZWxlY3RvcjogJ1tuZ2xCdXR0b25dJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2J1dHRvbi5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByb3ZpZGVyczogW0hvc3RTZXJ2aWNlXSxcbn0pXG5leHBvcnQgY2xhc3MgTmdsQnV0dG9uIGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuXG4gIC8qKlxuICAgKiBDaGFuZ2VzIHRoZSBhcHBlYXJhbmNlIG9mIHRoZSBidXR0b24uXG4gICAqL1xuICBASW5wdXQoKSB2YXJpYW50OiAnYmFzZScgfCAnbmV1dHJhbCcgfCAnYnJhbmQnIHwgJ291dGxpbmUtYnJhbmQnIHwgJ2Rlc3RydWN0aXZlJyB8ICd0ZXh0LWRlc3RydWN0aXZlJyB8ICdpbnZlcnNlJyB8ICdzdWNjZXNzJyA9ICduZXV0cmFsJztcblxuICAvKipcbiAgICogTERTIG5hbWUgb2YgdGhlIGljb24uXG4gICAqIE5hbWVzIGFyZSB3cml0dGVuIGluIHRoZSBmb3JtYXQgJ3V0aWxpdHk6ZG93bicgd2hlcmUgJ3V0aWxpdHknIGlzIHRoZSBjYXRlZ29yeSwgYW5kICdkb3duJyBpcyB0aGUgc3BlY2lmaWMgaWNvbiB0byBiZSBkaXNwbGF5ZWQuXG4gICAqL1xuICBASW5wdXQoKSBpY29uTmFtZTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBEZXNjcmliZXMgdGhlIHBvc2l0aW9uIG9mIHRoZSBpY29uIHdpdGggcmVzcGVjdCB0byBuZy1jb250ZW50LlxuICAgKi9cbiAgQElucHV0KCkgaWNvblBvc2l0aW9uOiAnbGVmdCcgfCAncmlnaHQnID0gJ2xlZnQnO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMiwgcHJpdmF0ZSBob3N0U2VydmljZTogSG9zdFNlcnZpY2UpIHtcbiAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgJ3NsZHMtYnV0dG9uJyk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnNldEhvc3RDbGFzcygpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIGlmIChjaGFuZ2VzLnZhcmlhbnQpIHtcbiAgICAgIHRoaXMuc2V0SG9zdENsYXNzKCk7XG4gICAgfVxuICB9XG5cbiAgaGFzTGVmdEljb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuaWNvbk5hbWUgJiYgKCF0aGlzLmljb25Qb3NpdGlvbiB8fCB0aGlzLmljb25Qb3NpdGlvbiA9PT0gJ2xlZnQnKTtcbiAgfVxuXG4gIGhhc1JpZ2h0SWNvbigpIHtcbiAgICByZXR1cm4gdGhpcy5pY29uTmFtZSAmJiB0aGlzLmljb25Qb3NpdGlvbiA9PT0gJ3JpZ2h0JztcbiAgfVxuXG4gIHByaXZhdGUgc2V0SG9zdENsYXNzKCkge1xuICAgIHRoaXMuaG9zdFNlcnZpY2UudXBkYXRlQ2xhc3ModGhpcy5lbCwge1xuICAgICAgW2BzbGRzLWJ1dHRvbl8ke3RoaXMudmFyaWFudH1gXTogdGhpcy52YXJpYW50ICYmIHRoaXMudmFyaWFudCAhPT0gJ2Jhc2UnLFxuICAgIH0pO1xuICB9XG5cbn1cbiIsIlxuPHN2ZyBjbGFzcz1cInNsZHMtYnV0dG9uX19pY29uIHNsZHMtYnV0dG9uX19pY29uX2xlZnRcIiAqbmdJZj1cImhhc0xlZnRJY29uKClcIiBbbmdsSWNvbk5hbWVdPVwiaWNvbk5hbWVcIj48L3N2Zz5cbjxuZy1jb250ZW50PjwvbmctY29udGVudD5cbjxzdmcgY2xhc3M9XCJzbGRzLWJ1dHRvbl9faWNvbiBzbGRzLWJ1dHRvbl9faWNvbl9yaWdodFwiICpuZ0lmPVwiaGFzUmlnaHRJY29uKClcIiBbbmdsSWNvbk5hbWVdPVwiaWNvbk5hbWVcIj48L3N2Zz4iXX0=
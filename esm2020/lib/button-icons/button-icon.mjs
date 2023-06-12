import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { HostService } from '../common/host/host.service';
import { ngClassCombine } from '../util/util';
import * as i0 from "@angular/core";
import * as i1 from "../common/host/host.service";
import * as i2 from "@angular/common";
import * as i3 from "../icons/svg";
export class NglButtonIcon {
    constructor(el, hostService, renderer) {
        this.el = el;
        this.hostService = hostService;
        /**
         * The variant changes the appearance of the button
         */
        this.variant = 'border';
        renderer.addClass(this.el.nativeElement, 'slds-button');
        renderer.addClass(this.el.nativeElement, 'slds-button_icon');
    }
    get altText() {
        return this.alternativeText || this.title;
    }
    ngOnInit() {
        this.setHostClass();
    }
    ngOnChanges() {
        this.setHostClass();
    }
    iconClass() {
        const hasVariant = this.hasVariant();
        const classes = {
            [`slds-button__icon_${this.size}`]: !hasVariant,
        };
        return ngClassCombine(this.svgClass, classes);
    }
    setHostClass() {
        const hasVariant = this.hasVariant();
        this.hostService.updateClass(this.el, {
            [`slds-button_icon-${this.variant}`]: hasVariant,
            [`slds-button_icon-${this.size}`]: this.size && hasVariant,
        });
    }
    hasVariant() {
        return this.variant && this.variant !== 'bare';
    }
}
NglButtonIcon.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglButtonIcon, deps: [{ token: i0.ElementRef }, { token: i1.HostService }, { token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Component });
NglButtonIcon.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: NglButtonIcon, selector: "[nglButtonIcon]", inputs: { iconName: "iconName", title: "title", alternativeText: "alternativeText", variant: "variant", size: "size", svgClass: "svgClass" }, providers: [HostService], usesOnChanges: true, ngImport: i0, template: "\n<svg class=\"slds-button__icon\" *ngIf=\"iconName\" [nglIconName]=\"iconName\" [ngClass]=\"iconClass()\"></svg>\n<ng-content></ng-content><span class=\"slds-assistive-text\" *ngIf=\"altText as text\">{{ text }}</span>", dependencies: [{ kind: "directive", type: i2.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i3.NglIconSvg, selector: "svg[nglIconName]", inputs: ["nglIconName", "xPos"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglButtonIcon, decorators: [{
            type: Component,
            args: [{ selector: '[nglButtonIcon]', changeDetection: ChangeDetectionStrategy.OnPush, providers: [HostService], template: "\n<svg class=\"slds-button__icon\" *ngIf=\"iconName\" [nglIconName]=\"iconName\" [ngClass]=\"iconClass()\"></svg>\n<ng-content></ng-content><span class=\"slds-assistive-text\" *ngIf=\"altText as text\">{{ text }}</span>" }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i1.HostService }, { type: i0.Renderer2 }]; }, propDecorators: { iconName: [{
                type: Input
            }], title: [{
                type: Input
            }], alternativeText: [{
                type: Input
            }], variant: [{
                type: Input
            }], size: [{
                type: Input
            }], svgClass: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLWljb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1saWdodG5pbmcvc3JjL2xpYi9idXR0b24taWNvbnMvYnV0dG9uLWljb24udHMiLCIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1saWdodG5pbmcvc3JjL2xpYi9idXR0b24taWNvbnMvYnV0dG9uLWljb24uaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBeUIsdUJBQXVCLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQ3BILE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sY0FBYyxDQUFDOzs7OztBQVM5QyxNQUFNLE9BQU8sYUFBYTtJQXVDeEIsWUFBb0IsRUFBYyxFQUFVLFdBQXdCLEVBQUUsUUFBbUI7UUFBckUsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBbkJwRTs7V0FFRztRQUNNLFlBQU8sR0FBK0YsUUFBUSxDQUFDO1FBaUJ0SCxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLGFBQWEsQ0FBQyxDQUFDO1FBQ3hELFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztJQUMvRCxDQUFDO0lBUEQsSUFBSSxPQUFPO1FBQ1QsT0FBTyxJQUFJLENBQUMsZUFBZSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDNUMsQ0FBQztJQU9ELFFBQVE7UUFDTixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUVELFNBQVM7UUFDUCxNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDckMsTUFBTSxPQUFPLEdBQUc7WUFDZCxDQUFDLHFCQUFxQixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLFVBQVU7U0FDaEQsQ0FBQztRQUVGLE9BQU8sY0FBYyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUVPLFlBQVk7UUFDbEIsTUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ3JDLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUU7WUFDcEMsQ0FBQyxvQkFBb0IsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUUsVUFBVTtZQUNoRCxDQUFDLG9CQUFvQixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsSUFBSSxJQUFJLFVBQVU7U0FDM0QsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVPLFVBQVU7UUFDaEIsT0FBTyxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxPQUFPLEtBQUssTUFBTSxDQUFDO0lBQ2pELENBQUM7OzBHQXZFVSxhQUFhOzhGQUFiLGFBQWEsd0xBRmIsQ0FBQyxXQUFXLENBQUMsK0NDVDFCLDZOQUVvRzsyRkRTdkYsYUFBYTtrQkFQekIsU0FBUzsrQkFFRSxpQkFBaUIsbUJBRVYsdUJBQXVCLENBQUMsTUFBTSxhQUNwQyxDQUFDLFdBQVcsQ0FBQzttSkFTZixRQUFRO3NCQUFoQixLQUFLO2dCQUtHLEtBQUs7c0JBQWIsS0FBSztnQkFNRyxlQUFlO3NCQUF2QixLQUFLO2dCQUtHLE9BQU87c0JBQWYsS0FBSztnQkFLRyxJQUFJO3NCQUFaLEtBQUs7Z0JBS0csUUFBUTtzQkFBaEIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIEVsZW1lbnRSZWYsIFJlbmRlcmVyMiwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIE9uSW5pdCwgT25DaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIb3N0U2VydmljZSB9IGZyb20gJy4uL2NvbW1vbi9ob3N0L2hvc3Quc2VydmljZSc7XG5pbXBvcnQgeyBuZ0NsYXNzQ29tYmluZSB9IGZyb20gJy4uL3V0aWwvdXRpbCc7XG5cbkBDb21wb25lbnQoe1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQGFuZ3VsYXItZXNsaW50L2NvbXBvbmVudC1zZWxlY3RvclxuICBzZWxlY3RvcjogJ1tuZ2xCdXR0b25JY29uXScsXG4gIHRlbXBsYXRlVXJsOiAnLi9idXR0b24taWNvbi5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByb3ZpZGVyczogW0hvc3RTZXJ2aWNlXSxcbn0pXG5leHBvcnQgY2xhc3MgTmdsQnV0dG9uSWNvbiBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcblxuICAvKipcbiAgICogTERTIG5hbWUgb2YgdGhlIGljb24uXG4gICAqIE5hbWVzIGFyZSB3cml0dGVuIGluIHRoZSBmb3JtYXQgJ3V0aWxpdHk6ZG93bicgd2hlcmUgJ3V0aWxpdHknIGlzIHRoZSBjYXRlZ29yeSwgYW5kICdkb3duJyBpcyB0aGUgc3BlY2lmaWMgaWNvbiB0byBiZSBkaXNwbGF5ZWQuXG4gICAqIE9ubHkgdXRpbGl0eSBpY29ucyBjYW4gYmUgdXNlZCBpbiB0aGlzIGNvbXBvbmVudC5cbiAgICovXG4gIEBJbnB1dCgpIGljb25OYW1lOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEZhbGxiYWNrIHZhbHVlIGZvciBgYWx0ZXJuYXRpdmVUZXh0YC5cbiAgICovXG4gIEBJbnB1dCgpIHRpdGxlOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFRoZSBhbHRlcm5hdGl2ZSB0ZXh0IHVzZWQgdG8gZGVzY3JpYmUgdGhlIGljb24uXG4gICAqIFRoaXMgdGV4dCBzaG91bGQgZGVzY3JpYmUgd2hhdCBoYXBwZW5zLCBub3Qgd2hhdCB0aGUgaWNvbiBsb29rcyBsaWtlLlxuICAgKi9cbiAgQElucHV0KCkgYWx0ZXJuYXRpdmVUZXh0O1xuXG4gIC8qKlxuICAgKiBUaGUgdmFyaWFudCBjaGFuZ2VzIHRoZSBhcHBlYXJhbmNlIG9mIHRoZSBidXR0b25cbiAgICovXG4gIEBJbnB1dCgpIHZhcmlhbnQ6ICdiYXJlJyB8ICdjb250YWluZXInIHwgJ2JyYW5kJyB8ICdib3JkZXInIHwgJ2JvcmRlci1maWxsZWQnIHwgJ2ludmVyc2UnIHwgJ2JvcmRlci1pbnZlcnNlJyA9ICdib3JkZXInO1xuXG4gIC8qKlxuICAgKiAgRm9yIG5vbi1iYXJlIHZhcmlhbnRzLCB0aGUgc2l6ZSBhcHBsaWVzIHRvIHRoZSBidXR0b24sIG90aGVyd2lzZSBpdCBhcHBsaWVzIHRvIHRoZSBpY29uIGl0c2VsZlxuICAgKi9cbiAgQElucHV0KCkgc2l6ZTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBDU1MgY2xhc3NlcyB0aGF0IGFyZSBhcHBsaWVkIHRvIHRoZSBTVkcuXG4gICAqL1xuICBASW5wdXQoKSBzdmdDbGFzczogc3RyaW5nIHwgc3RyaW5nW10gfCBTZXQ8c3RyaW5nPiB8IHsgW2tsYXNzOiBzdHJpbmddOiBhbnkgfTtcblxuICBnZXQgYWx0VGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5hbHRlcm5hdGl2ZVRleHQgfHwgdGhpcy50aXRsZTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsIHByaXZhdGUgaG9zdFNlcnZpY2U6IEhvc3RTZXJ2aWNlLCByZW5kZXJlcjogUmVuZGVyZXIyKSB7XG4gICAgcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbC5uYXRpdmVFbGVtZW50LCAnc2xkcy1idXR0b24nKTtcbiAgICByZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsICdzbGRzLWJ1dHRvbl9pY29uJyk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnNldEhvc3RDbGFzcygpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKSB7XG4gICAgdGhpcy5zZXRIb3N0Q2xhc3MoKTtcbiAgfVxuXG4gIGljb25DbGFzcygpIHtcbiAgICBjb25zdCBoYXNWYXJpYW50ID0gdGhpcy5oYXNWYXJpYW50KCk7XG4gICAgY29uc3QgY2xhc3NlcyA9IHtcbiAgICAgIFtgc2xkcy1idXR0b25fX2ljb25fJHt0aGlzLnNpemV9YF06ICFoYXNWYXJpYW50LFxuICAgIH07XG5cbiAgICByZXR1cm4gbmdDbGFzc0NvbWJpbmUodGhpcy5zdmdDbGFzcywgY2xhc3Nlcyk7XG4gIH1cblxuICBwcml2YXRlIHNldEhvc3RDbGFzcygpIHtcbiAgICBjb25zdCBoYXNWYXJpYW50ID0gdGhpcy5oYXNWYXJpYW50KCk7XG4gICAgdGhpcy5ob3N0U2VydmljZS51cGRhdGVDbGFzcyh0aGlzLmVsLCB7XG4gICAgICBbYHNsZHMtYnV0dG9uX2ljb24tJHt0aGlzLnZhcmlhbnR9YF06IGhhc1ZhcmlhbnQsXG4gICAgICBbYHNsZHMtYnV0dG9uX2ljb24tJHt0aGlzLnNpemV9YF06IHRoaXMuc2l6ZSAmJiBoYXNWYXJpYW50LFxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBoYXNWYXJpYW50KCkge1xuICAgIHJldHVybiB0aGlzLnZhcmlhbnQgJiYgdGhpcy52YXJpYW50ICE9PSAnYmFyZSc7XG4gIH1cbn1cbiIsIlxuPHN2ZyBjbGFzcz1cInNsZHMtYnV0dG9uX19pY29uXCIgKm5nSWY9XCJpY29uTmFtZVwiIFtuZ2xJY29uTmFtZV09XCJpY29uTmFtZVwiIFtuZ0NsYXNzXT1cImljb25DbGFzcygpXCI+PC9zdmc+XG48bmctY29udGVudD48L25nLWNvbnRlbnQ+PHNwYW4gY2xhc3M9XCJzbGRzLWFzc2lzdGl2ZS10ZXh0XCIgKm5nSWY9XCJhbHRUZXh0IGFzIHRleHRcIj57eyB0ZXh0IH19PC9zcGFuPiJdfQ==
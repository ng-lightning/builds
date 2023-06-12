import { __decorate } from "tslib";
import { Component, Input, ChangeDetectionStrategy, Output, EventEmitter, HostListener, HostBinding } from '@angular/core';
import { HostService } from '../common/host/host.service';
import { InputBoolean } from '../util/convert';
import * as i0 from "@angular/core";
import * as i1 from "../common/host/host.service";
import * as i2 from "@angular/common";
import * as i3 from "../icons/svg";
const DEFAULT_VARIANT = 'border';
export class NglButtonIconStateful {
    constructor(el, hostService, renderer) {
        this.el = el;
        this.hostService = hostService;
        /**
         * Specifies whether button is in selected state or not.
         */
        this.selected = false;
        this.selectedChange = new EventEmitter();
        /**
         * The variant changes the appearance of the button.
         */
        this.variant = DEFAULT_VARIANT;
        /**
         *  The size of the button.
         */
        this.size = null;
        renderer.addClass(this.el.nativeElement, 'slds-button');
        renderer.addClass(this.el.nativeElement, 'slds-button_icon');
    }
    get altText() {
        return this.alternativeText || this.title;
    }
    onclick() {
        this.selectedChange.emit(!this.selected);
    }
    ngOnInit() {
        this.setHostClass();
    }
    ngOnChanges() {
        this.setHostClass();
    }
    setHostClass() {
        this.hostService.updateClass(this.el, {
            [`slds-button_icon-${this.variant || DEFAULT_VARIANT}`]: true,
            [`slds-button_icon-${this.size}`]: !!this.size,
        });
    }
}
NglButtonIconStateful.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglButtonIconStateful, deps: [{ token: i0.ElementRef }, { token: i1.HostService }, { token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Component });
NglButtonIconStateful.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: NglButtonIconStateful, selector: "[nglButtonIconStateful]", inputs: { selected: "selected", iconName: "iconName", title: "title", alternativeText: "alternativeText", variant: "variant", size: "size" }, outputs: { selectedChange: "selectedChange" }, host: { listeners: { "click": "onclick()" }, properties: { "class.slds-is-selected": "this.selected", "attr.aria-pressed": "this.selected" } }, providers: [HostService], usesOnChanges: true, ngImport: i0, template: "\n<svg class=\"slds-button__icon\" *ngIf=\"iconName\" [nglIconName]=\"iconName\"></svg>\n<ng-content></ng-content><span class=\"slds-assistive-text\" *ngIf=\"altText as text\">{{ text }}</span>", dependencies: [{ kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i3.NglIconSvg, selector: "svg[nglIconName]", inputs: ["nglIconName", "xPos"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
__decorate([
    InputBoolean()
], NglButtonIconStateful.prototype, "selected", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglButtonIconStateful, decorators: [{
            type: Component,
            args: [{ selector: '[nglButtonIconStateful]', changeDetection: ChangeDetectionStrategy.OnPush, providers: [HostService], template: "\n<svg class=\"slds-button__icon\" *ngIf=\"iconName\" [nglIconName]=\"iconName\"></svg>\n<ng-content></ng-content><span class=\"slds-assistive-text\" *ngIf=\"altText as text\">{{ text }}</span>" }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i1.HostService }, { type: i0.Renderer2 }]; }, propDecorators: { selected: [{
                type: HostBinding,
                args: ['class.slds-is-selected']
            }, {
                type: HostBinding,
                args: ['attr.aria-pressed']
            }, {
                type: Input
            }], selectedChange: [{
                type: Output
            }], iconName: [{
                type: Input
            }], title: [{
                type: Input
            }], alternativeText: [{
                type: Input
            }], variant: [{
                type: Input
            }], size: [{
                type: Input
            }], onclick: [{
                type: HostListener,
                args: ['click']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLWljb24tc3RhdGVmdWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1saWdodG5pbmcvc3JjL2xpYi9idXR0b24taWNvbnMvYnV0dG9uLWljb24tc3RhdGVmdWwudHMiLCIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1saWdodG5pbmcvc3JjL2xpYi9idXR0b24taWNvbnMvYnV0dG9uLWljb24tc3RhdGVmdWwuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQXlCLHVCQUF1QixFQUNoRSxNQUFNLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEYsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQzFELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7Ozs7QUFFL0MsTUFBTSxlQUFlLEdBQUcsUUFBUSxDQUFDO0FBU2pDLE1BQU0sT0FBTyxxQkFBcUI7SUEyQ2hDLFlBQW9CLEVBQWMsRUFBVSxXQUF3QixFQUFFLFFBQW1CO1FBQXJFLE9BQUUsR0FBRixFQUFFLENBQVk7UUFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQXpDcEU7O1dBRUc7UUFHc0IsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUVoQyxtQkFBYyxHQUFHLElBQUksWUFBWSxFQUFXLENBQUM7UUFvQnZEOztXQUVHO1FBQ00sWUFBTyxHQUFrRCxlQUFlLENBQUM7UUFFbEY7O1dBRUc7UUFDTSxTQUFJLEdBQTRDLElBQUksQ0FBQztRQU81RCxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLGFBQWEsQ0FBQyxDQUFDO1FBQ3hELFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztJQUMvRCxDQUFDO0lBUEQsSUFBSSxPQUFPO1FBQ1QsT0FBTyxJQUFJLENBQUMsZUFBZSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDNUMsQ0FBQztJQVFELE9BQU87UUFDTCxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBRU8sWUFBWTtRQUNsQixJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFO1lBQ3BDLENBQUMsb0JBQW9CLElBQUksQ0FBQyxPQUFPLElBQUksZUFBZSxFQUFFLENBQUMsRUFBRSxJQUFJO1lBQzdELENBQUMsb0JBQW9CLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSTtTQUMvQyxDQUFDLENBQUM7SUFDTCxDQUFDOztrSEFsRVUscUJBQXFCO3NHQUFyQixxQkFBcUIsK1hBRnJCLENBQUMsV0FBVyxDQUFDLCtDQ1oxQixtTUFFb0c7QURtQnpFO0lBQWYsWUFBWSxFQUFFO3VEQUFrQjsyRkFQL0IscUJBQXFCO2tCQVBqQyxTQUFTOytCQUVFLHlCQUF5QixtQkFFbEIsdUJBQXVCLENBQUMsTUFBTSxhQUNwQyxDQUFDLFdBQVcsQ0FBQzttSkFTQyxRQUFRO3NCQUZoQyxXQUFXO3VCQUFDLHdCQUF3Qjs7c0JBQ3BDLFdBQVc7dUJBQUMsbUJBQW1COztzQkFDL0IsS0FBSztnQkFFSSxjQUFjO3NCQUF2QixNQUFNO2dCQU9FLFFBQVE7c0JBQWhCLEtBQUs7Z0JBS0csS0FBSztzQkFBYixLQUFLO2dCQU1HLGVBQWU7c0JBQXZCLEtBQUs7Z0JBS0csT0FBTztzQkFBZixLQUFLO2dCQUtHLElBQUk7c0JBQVosS0FBSztnQkFZTixPQUFPO3NCQUROLFlBQVk7dUJBQUMsT0FBTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIEVsZW1lbnRSZWYsIFJlbmRlcmVyMiwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIE9uSW5pdCwgT25DaGFuZ2VzLFxuICAgICAgICAgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIEhvc3RMaXN0ZW5lciwgSG9zdEJpbmRpbmcgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEhvc3RTZXJ2aWNlIH0gZnJvbSAnLi4vY29tbW9uL2hvc3QvaG9zdC5zZXJ2aWNlJztcbmltcG9ydCB7IElucHV0Qm9vbGVhbiB9IGZyb20gJy4uL3V0aWwvY29udmVydCc7XG5cbmNvbnN0IERFRkFVTFRfVkFSSUFOVCA9ICdib3JkZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBhbmd1bGFyLWVzbGludC9jb21wb25lbnQtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICdbbmdsQnV0dG9uSWNvblN0YXRlZnVsXScsXG4gIHRlbXBsYXRlVXJsOiAnLi9idXR0b24taWNvbi1zdGF0ZWZ1bC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByb3ZpZGVyczogW0hvc3RTZXJ2aWNlXSxcbn0pXG5leHBvcnQgY2xhc3MgTmdsQnV0dG9uSWNvblN0YXRlZnVsIGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuXG4gIC8qKlxuICAgKiBTcGVjaWZpZXMgd2hldGhlciBidXR0b24gaXMgaW4gc2VsZWN0ZWQgc3RhdGUgb3Igbm90LlxuICAgKi9cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5zbGRzLWlzLXNlbGVjdGVkJylcbiAgQEhvc3RCaW5kaW5nKCdhdHRyLmFyaWEtcHJlc3NlZCcpXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBzZWxlY3RlZCA9IGZhbHNlO1xuXG4gIEBPdXRwdXQoKSBzZWxlY3RlZENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcblxuICAvKipcbiAgICogTERTIG5hbWUgb2YgdGhlIGljb24uXG4gICAqIE5hbWVzIGFyZSB3cml0dGVuIGluIHRoZSBmb3JtYXQgJ3V0aWxpdHk6ZG93bicgd2hlcmUgJ3V0aWxpdHknIGlzIHRoZSBjYXRlZ29yeSwgYW5kICdkb3duJyBpcyB0aGUgc3BlY2lmaWMgaWNvbiB0byBiZSBkaXNwbGF5ZWQuXG4gICAqIE9ubHkgdXRpbGl0eSBpY29ucyBjYW4gYmUgdXNlZCBpbiB0aGlzIGNvbXBvbmVudC5cbiAgICovXG4gIEBJbnB1dCgpIGljb25OYW1lOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEZhbGxiYWNrIHZhbHVlIGZvciBgYWx0ZXJuYXRpdmVUZXh0YC5cbiAgICovXG4gIEBJbnB1dCgpIHRpdGxlOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFRoZSBhbHRlcm5hdGl2ZSB0ZXh0IHVzZWQgdG8gZGVzY3JpYmUgdGhlIGljb24uXG4gICAqIFRoaXMgdGV4dCBzaG91bGQgZGVzY3JpYmUgd2hhdCBoYXBwZW5zLCBub3Qgd2hhdCB0aGUgaWNvbiBsb29rcyBsaWtlLlxuICAgKi9cbiAgQElucHV0KCkgYWx0ZXJuYXRpdmVUZXh0O1xuXG4gIC8qKlxuICAgKiBUaGUgdmFyaWFudCBjaGFuZ2VzIHRoZSBhcHBlYXJhbmNlIG9mIHRoZSBidXR0b24uXG4gICAqL1xuICBASW5wdXQoKSB2YXJpYW50OiAnYm9yZGVyJyB8ICdib3JkZXItZmlsbGVkJyB8ICdib3JkZXItaW52ZXJzZScgPSBERUZBVUxUX1ZBUklBTlQ7XG5cbiAgLyoqXG4gICAqICBUaGUgc2l6ZSBvZiB0aGUgYnV0dG9uLlxuICAgKi9cbiAgQElucHV0KCkgc2l6ZTogJ3h4LXNtYWxsJyB8ICd4LXNtYWxsJyB8ICdzbWFsbCcgfCBudWxsID0gbnVsbDtcblxuICBnZXQgYWx0VGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5hbHRlcm5hdGl2ZVRleHQgfHwgdGhpcy50aXRsZTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsIHByaXZhdGUgaG9zdFNlcnZpY2U6IEhvc3RTZXJ2aWNlLCByZW5kZXJlcjogUmVuZGVyZXIyKSB7XG4gICAgcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbC5uYXRpdmVFbGVtZW50LCAnc2xkcy1idXR0b24nKTtcbiAgICByZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsICdzbGRzLWJ1dHRvbl9pY29uJyk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdjbGljaycpXG4gIG9uY2xpY2soKSB7XG4gICAgdGhpcy5zZWxlY3RlZENoYW5nZS5lbWl0KCF0aGlzLnNlbGVjdGVkKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuc2V0SG9zdENsYXNzKCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpIHtcbiAgICB0aGlzLnNldEhvc3RDbGFzcygpO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRIb3N0Q2xhc3MoKSB7XG4gICAgdGhpcy5ob3N0U2VydmljZS51cGRhdGVDbGFzcyh0aGlzLmVsLCB7XG4gICAgICBbYHNsZHMtYnV0dG9uX2ljb24tJHt0aGlzLnZhcmlhbnQgfHwgREVGQVVMVF9WQVJJQU5UfWBdOiB0cnVlLFxuICAgICAgW2BzbGRzLWJ1dHRvbl9pY29uLSR7dGhpcy5zaXplfWBdOiAhIXRoaXMuc2l6ZSxcbiAgICB9KTtcbiAgfVxufVxuIiwiXG48c3ZnIGNsYXNzPVwic2xkcy1idXR0b25fX2ljb25cIiAqbmdJZj1cImljb25OYW1lXCIgW25nbEljb25OYW1lXT1cImljb25OYW1lXCI+PC9zdmc+XG48bmctY29udGVudD48L25nLWNvbnRlbnQ+PHNwYW4gY2xhc3M9XCJzbGRzLWFzc2lzdGl2ZS10ZXh0XCIgKm5nSWY9XCJhbHRUZXh0IGFzIHRleHRcIj57eyB0ZXh0IH19PC9zcGFuPiJdfQ==
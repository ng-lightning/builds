import { Directive, Input, HostBinding } from '@angular/core';
import * as i0 from "@angular/core";
export class NglDay {
    constructor(el) {
        this.el = el;
    }
    get tabindex() {
        return this.isActive ? 0 : -1;
    }
    focus() {
        this.el.nativeElement.focus();
    }
}
NglDay.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglDay, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Directive });
NglDay.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.2.9", type: NglDay, selector: "td[nglDay]", inputs: { date: ["nglDay", "date"], nglDayDisabled: "nglDayDisabled", nglDaySelected: "nglDaySelected", isActive: "isActive" }, host: { properties: { "class.slds-disabled-text": "this.nglDayDisabled", "attr.aria-disabled": "this.nglDayDisabled", "class.slds-is-selected": "this.nglDaySelected", "attr.aria-selected": "this.nglDaySelected", "attr.tabindex": "this.tabindex" } }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglDay, decorators: [{
            type: Directive,
            args: [{
                    selector: 'td[nglDay]',
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { date: [{
                type: Input,
                args: ['nglDay']
            }], nglDayDisabled: [{
                type: HostBinding,
                args: ['class.slds-disabled-text']
            }, {
                type: HostBinding,
                args: ['attr.aria-disabled']
            }, {
                type: Input
            }], nglDaySelected: [{
                type: HostBinding,
                args: ['class.slds-is-selected']
            }, {
                type: HostBinding,
                args: ['attr.aria-selected']
            }, {
                type: Input
            }], isActive: [{
                type: Input
            }], tabindex: [{
                type: HostBinding,
                args: ['attr.tabindex']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctbGlnaHRuaW5nL3NyYy9saWIvZGF0ZXBpY2tlcnMvZGF5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBYyxNQUFNLGVBQWUsQ0FBQzs7QUFNMUUsTUFBTSxPQUFPLE1BQU07SUFtQmpCLFlBQW9CLEVBQWM7UUFBZCxPQUFFLEdBQUYsRUFBRSxDQUFZO0lBQUcsQ0FBQztJQUx0QyxJQUNJLFFBQVE7UUFDVixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUlELEtBQUs7UUFDSCxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNoQyxDQUFDOzttR0F2QlUsTUFBTTt1RkFBTixNQUFNOzJGQUFOLE1BQU07a0JBSGxCLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLFlBQVk7aUJBQ3ZCO2lHQUdrQixJQUFJO3NCQUFwQixLQUFLO3VCQUFDLFFBQVE7Z0JBSU4sY0FBYztzQkFGdEIsV0FBVzt1QkFBQywwQkFBMEI7O3NCQUN0QyxXQUFXO3VCQUFDLG9CQUFvQjs7c0JBQ2hDLEtBQUs7Z0JBSUcsY0FBYztzQkFGdEIsV0FBVzt1QkFBQyx3QkFBd0I7O3NCQUNwQyxXQUFXO3VCQUFDLG9CQUFvQjs7c0JBQ2hDLEtBQUs7Z0JBRUcsUUFBUTtzQkFBaEIsS0FBSztnQkFHRixRQUFRO3NCQURYLFdBQVc7dUJBQUMsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIEhvc3RCaW5kaW5nLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ2xJbnRlcm5hbERhdGUgfSBmcm9tICcuL3V0aWwnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICd0ZFtuZ2xEYXldJyxcbn0pXG5leHBvcnQgY2xhc3MgTmdsRGF5IHtcblxuICBASW5wdXQoJ25nbERheScpIGRhdGU6IE5nbEludGVybmFsRGF0ZTtcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnNsZHMtZGlzYWJsZWQtdGV4dCcpXG4gIEBIb3N0QmluZGluZygnYXR0ci5hcmlhLWRpc2FibGVkJylcbiAgQElucHV0KCkgbmdsRGF5RGlzYWJsZWQ6IGJvb2xlYW47XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5zbGRzLWlzLXNlbGVjdGVkJylcbiAgQEhvc3RCaW5kaW5nKCdhdHRyLmFyaWEtc2VsZWN0ZWQnKVxuICBASW5wdXQoKSBuZ2xEYXlTZWxlY3RlZDogYm9vbGVhbjtcblxuICBASW5wdXQoKSBpc0FjdGl2ZTtcblxuICBASG9zdEJpbmRpbmcoJ2F0dHIudGFiaW5kZXgnKVxuICBnZXQgdGFiaW5kZXgoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNBY3RpdmUgPyAwIDogLTE7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmKSB7fVxuXG4gIGZvY3VzKCkge1xuICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICB9XG59XG4iXX0=
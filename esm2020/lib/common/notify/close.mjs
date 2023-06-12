import { Directive, Inject, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class NglCommonNotifyClose {
    constructor(host) {
        this.host = host;
        this.host.dismissible = true;
    }
    set dismissible(dismissible) {
        this.host.dismissible = dismissible;
    }
}
NglCommonNotifyClose.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglCommonNotifyClose, deps: [{ token: 'host' }], target: i0.ɵɵFactoryTarget.Directive });
NglCommonNotifyClose.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.2.9", type: NglCommonNotifyClose, inputs: { dismissible: "dismissible" }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglCommonNotifyClose, decorators: [{
            type: Directive
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Inject,
                    args: ['host']
                }] }]; }, propDecorators: { dismissible: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xvc2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1saWdodG5pbmcvc3JjL2xpYi9jb21tb24vbm90aWZ5L2Nsb3NlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFFekQsTUFBTSxPQUFnQixvQkFBb0I7SUFNeEMsWUFBb0MsSUFBUztRQUFULFNBQUksR0FBSixJQUFJLENBQUs7UUFDM0MsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO0lBQy9CLENBQUM7SUFORCxJQUFhLFdBQVcsQ0FBQyxXQUFvQjtRQUMzQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7SUFDdEMsQ0FBQzs7aUhBSm1CLG9CQUFvQixrQkFNcEIsTUFBTTtxR0FOTixvQkFBb0I7MkZBQXBCLG9CQUFvQjtrQkFEekMsU0FBUzs7MEJBT0ssTUFBTTsyQkFBQyxNQUFNOzRDQUpiLFdBQVc7c0JBQXZCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEluamVjdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbkBEaXJlY3RpdmUoKVxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIE5nbENvbW1vbk5vdGlmeUNsb3NlIHtcblxuICBASW5wdXQoKSBzZXQgZGlzbWlzc2libGUoZGlzbWlzc2libGU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmhvc3QuZGlzbWlzc2libGUgPSBkaXNtaXNzaWJsZTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoJ2hvc3QnKSBwcml2YXRlIGhvc3Q6IGFueSkge1xuICAgIHRoaXMuaG9zdC5kaXNtaXNzaWJsZSA9IHRydWU7XG4gIH1cblxufVxuIl19
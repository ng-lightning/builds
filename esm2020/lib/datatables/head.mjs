import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter, HostBinding } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../icons/svg";
import * as i3 from "../util/outlet";
export class NglInternalDatatableHeadCell {
    constructor() {
        this.sort = new EventEmitter();
    }
    get header() {
        return this.headingTpl || this.heading;
    }
    get attrTitle() {
        return this.heading || null;
    }
    get ariaSort() {
        return this.sortOrder ? `${this.sortOrder}ending` : 'none';
    }
    sortChange() {
        this.sort.emit(this.sortOrder === 'desc' ? 'asc' : 'desc');
    }
}
NglInternalDatatableHeadCell.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglInternalDatatableHeadCell, deps: [], target: i0.ɵɵFactoryTarget.Component });
NglInternalDatatableHeadCell.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: NglInternalDatatableHeadCell, selector: "th[nglDatatableHead]", inputs: { heading: "heading", headingTpl: "headingTpl", sortable: "sortable", sortOrder: "sortOrder" }, outputs: { sort: "sort" }, host: { properties: { "class.slds-is-sorted_asc": "sortOrder === 'asc'", "class.slds-is-sorted_desc": "sortOrder === 'desc'", "class.slds-is-sorted": "!!sortOrder", "class.slds-is-sortable": "this.sortable", "attr.aria-sort": "this.ariaSort" } }, ngImport: i0, template: "<a class=\"slds-th__action slds-text-link_reset\" *ngIf=\"sortable; else baseTpl\" (click)=\"sortChange()\" role=\"button\" tabindex=\"0\"><span class=\"slds-assistive-text\">Sort by:</span>\n  <div class=\"slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate\"><span class=\"slds-truncate\" [attr.title]=\"attrTitle\" [nglInternalOutlet]=\"header\"></span><span class=\"slds-icon_container slds-icon-utility-arrowdown\">\n      <svg class=\"slds-icon slds-icon-text-default slds-is-sortable__icon\" nglIconName=\"arrowdown\"></svg></span></div></a>\n<ng-template #baseTpl>\n  <div class=\"slds-truncate\" [attr.title]=\"attrTitle\" [nglInternalOutlet]=\"header\"></div>\n</ng-template>", dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i2.NglIconSvg, selector: "svg[nglIconName]", inputs: ["nglIconName", "xPos"] }, { kind: "component", type: i3.NglInternalOutlet, selector: "[nglInternalOutlet]", inputs: ["nglInternalOutlet", "nglInternalOutletContext"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglInternalDatatableHeadCell, decorators: [{
            type: Component,
            args: [{ selector: 'th[nglDatatableHead]', changeDetection: ChangeDetectionStrategy.OnPush, host: {
                        '[class.slds-is-sorted_asc]': `sortOrder === 'asc'`,
                        '[class.slds-is-sorted_desc]': `sortOrder === 'desc'`,
                        '[class.slds-is-sorted]': `!!sortOrder`,
                    }, template: "<a class=\"slds-th__action slds-text-link_reset\" *ngIf=\"sortable; else baseTpl\" (click)=\"sortChange()\" role=\"button\" tabindex=\"0\"><span class=\"slds-assistive-text\">Sort by:</span>\n  <div class=\"slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate\"><span class=\"slds-truncate\" [attr.title]=\"attrTitle\" [nglInternalOutlet]=\"header\"></span><span class=\"slds-icon_container slds-icon-utility-arrowdown\">\n      <svg class=\"slds-icon slds-icon-text-default slds-is-sortable__icon\" nglIconName=\"arrowdown\"></svg></span></div></a>\n<ng-template #baseTpl>\n  <div class=\"slds-truncate\" [attr.title]=\"attrTitle\" [nglInternalOutlet]=\"header\"></div>\n</ng-template>" }]
        }], propDecorators: { heading: [{
                type: Input
            }], headingTpl: [{
                type: Input
            }], sortable: [{
                type: HostBinding,
                args: ['class.slds-is-sortable']
            }, {
                type: Input
            }], sortOrder: [{
                type: Input
            }], ariaSort: [{
                type: HostBinding,
                args: ['attr.aria-sort']
            }], sort: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nLWxpZ2h0bmluZy9zcmMvbGliL2RhdGF0YWJsZXMvaGVhZC50cyIsIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nLWxpZ2h0bmluZy9zcmMvbGliL2RhdGF0YWJsZXMvaGVhZC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsdUJBQXVCLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUFlLE1BQU0sZUFBZSxDQUFDOzs7OztBQWExSCxNQUFNLE9BQU8sNEJBQTRCO0lBWHpDO1FBa0NXLFNBQUksR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0tBS3BDO0lBdkJDLElBQUksTUFBTTtRQUNSLE9BQU8sSUFBSSxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3pDLENBQUM7SUFFRCxJQUFJLFNBQVM7UUFDWCxPQUFPLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDO0lBQzlCLENBQUM7SUFPRCxJQUNJLFFBQVE7UUFDVixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsUUFBUSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7SUFDN0QsQ0FBQztJQUlELFVBQVU7UUFDUixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxLQUFLLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM3RCxDQUFDOzt5SEEzQlUsNEJBQTRCOzZHQUE1Qiw0QkFBNEIsc2JDYnpDLDZyQkFLYzsyRkRRRCw0QkFBNEI7a0JBWHhDLFNBQVM7K0JBRUUsc0JBQXNCLG1CQUVmLHVCQUF1QixDQUFDLE1BQU0sUUFDekM7d0JBQ0osNEJBQTRCLEVBQUUscUJBQXFCO3dCQUNuRCw2QkFBNkIsRUFBRSxzQkFBc0I7d0JBQ3JELHdCQUF3QixFQUFFLGFBQWE7cUJBQ3hDOzhCQUlRLE9BQU87c0JBQWYsS0FBSztnQkFDRyxVQUFVO3NCQUFsQixLQUFLO2dCQVdHLFFBQVE7c0JBRGhCLFdBQVc7dUJBQUMsd0JBQXdCOztzQkFDcEMsS0FBSztnQkFFRyxTQUFTO3NCQUFqQixLQUFLO2dCQUdGLFFBQVE7c0JBRFgsV0FBVzt1QkFBQyxnQkFBZ0I7Z0JBS3BCLElBQUk7c0JBQVosTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgSG9zdEJpbmRpbmcsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQGFuZ3VsYXItZXNsaW50L2NvbXBvbmVudC1zZWxlY3RvclxuICBzZWxlY3RvcjogJ3RoW25nbERhdGF0YWJsZUhlYWRdJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2hlYWQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5zbGRzLWlzLXNvcnRlZF9hc2NdJzogYHNvcnRPcmRlciA9PT0gJ2FzYydgLFxuICAgICdbY2xhc3Muc2xkcy1pcy1zb3J0ZWRfZGVzY10nOiBgc29ydE9yZGVyID09PSAnZGVzYydgLFxuICAgICdbY2xhc3Muc2xkcy1pcy1zb3J0ZWRdJzogYCEhc29ydE9yZGVyYCxcbiAgfSxcbn0pXG5leHBvcnQgY2xhc3MgTmdsSW50ZXJuYWxEYXRhdGFibGVIZWFkQ2VsbCB7XG5cbiAgQElucHV0KCkgaGVhZGluZzogc3RyaW5nO1xuICBASW5wdXQoKSBoZWFkaW5nVHBsOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIGdldCBoZWFkZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuaGVhZGluZ1RwbCB8fCB0aGlzLmhlYWRpbmc7XG4gIH1cblxuICBnZXQgYXR0clRpdGxlKCkge1xuICAgIHJldHVybiB0aGlzLmhlYWRpbmcgfHwgbnVsbDtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3Muc2xkcy1pcy1zb3J0YWJsZScpXG4gIEBJbnB1dCgpIHNvcnRhYmxlOiBib29sZWFuO1xuXG4gIEBJbnB1dCgpIHNvcnRPcmRlcjogJ2FzYycgfCAnZGVzYyc7XG5cbiAgQEhvc3RCaW5kaW5nKCdhdHRyLmFyaWEtc29ydCcpXG4gIGdldCBhcmlhU29ydCgpIHtcbiAgICByZXR1cm4gdGhpcy5zb3J0T3JkZXIgPyBgJHt0aGlzLnNvcnRPcmRlcn1lbmRpbmdgIDogJ25vbmUnO1xuICB9XG5cbiAgQE91dHB1dCgpc29ydCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBzb3J0Q2hhbmdlKCkge1xuICAgIHRoaXMuc29ydC5lbWl0KHRoaXMuc29ydE9yZGVyID09PSAnZGVzYycgPyAnYXNjJyA6ICdkZXNjJyk7XG4gIH1cbn1cbiIsIjxhIGNsYXNzPVwic2xkcy10aF9fYWN0aW9uIHNsZHMtdGV4dC1saW5rX3Jlc2V0XCIgKm5nSWY9XCJzb3J0YWJsZTsgZWxzZSBiYXNlVHBsXCIgKGNsaWNrKT1cInNvcnRDaGFuZ2UoKVwiIHJvbGU9XCJidXR0b25cIiB0YWJpbmRleD1cIjBcIj48c3BhbiBjbGFzcz1cInNsZHMtYXNzaXN0aXZlLXRleHRcIj5Tb3J0IGJ5Ojwvc3Bhbj5cbiAgPGRpdiBjbGFzcz1cInNsZHMtZ3JpZCBzbGRzLWdyaWRfdmVydGljYWwtYWxpZ24tY2VudGVyIHNsZHMtaGFzLWZsZXhpLXRydW5jYXRlXCI+PHNwYW4gY2xhc3M9XCJzbGRzLXRydW5jYXRlXCIgW2F0dHIudGl0bGVdPVwiYXR0clRpdGxlXCIgW25nbEludGVybmFsT3V0bGV0XT1cImhlYWRlclwiPjwvc3Bhbj48c3BhbiBjbGFzcz1cInNsZHMtaWNvbl9jb250YWluZXIgc2xkcy1pY29uLXV0aWxpdHktYXJyb3dkb3duXCI+XG4gICAgICA8c3ZnIGNsYXNzPVwic2xkcy1pY29uIHNsZHMtaWNvbi10ZXh0LWRlZmF1bHQgc2xkcy1pcy1zb3J0YWJsZV9faWNvblwiIG5nbEljb25OYW1lPVwiYXJyb3dkb3duXCI+PC9zdmc+PC9zcGFuPjwvZGl2PjwvYT5cbjxuZy10ZW1wbGF0ZSAjYmFzZVRwbD5cbiAgPGRpdiBjbGFzcz1cInNsZHMtdHJ1bmNhdGVcIiBbYXR0ci50aXRsZV09XCJhdHRyVGl0bGVcIiBbbmdsSW50ZXJuYWxPdXRsZXRdPVwiaGVhZGVyXCI+PC9kaXY+XG48L25nLXRlbXBsYXRlPiJdfQ==
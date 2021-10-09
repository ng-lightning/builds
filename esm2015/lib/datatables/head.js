import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter, HostBinding } from '@angular/core';
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
NglInternalDatatableHeadCell.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'th[nglDatatableHead]',
                template: "<a class=\"slds-th__action slds-text-link_reset\" *ngIf=\"sortable; else baseTpl\" (click)=\"sortChange()\" role=\"button\" tabindex=\"0\"><span class=\"slds-assistive-text\">Sort by:</span>\n  <div class=\"slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate\"><span class=\"slds-truncate\" [attr.title]=\"attrTitle\" [nglInternalOutlet]=\"header\"></span><span class=\"slds-icon_container slds-icon-utility-arrowdown\">\n      <svg class=\"slds-icon slds-icon-text-default slds-is-sortable__icon\" nglIconName=\"arrowdown\"></svg></span></div></a>\n<ng-template #baseTpl>\n  <div class=\"slds-truncate\" [attr.title]=\"attrTitle\" [nglInternalOutlet]=\"header\"></div>\n</ng-template>",
                changeDetection: ChangeDetectionStrategy.OnPush,
                host: {
                    '[class.slds-is-sorted_asc]': `sortOrder === 'asc'`,
                    '[class.slds-is-sorted_desc]': `sortOrder === 'desc'`,
                    '[class.slds-is-sorted]': `!!sortOrder`,
                }
            },] }
];
NglInternalDatatableHeadCell.propDecorators = {
    heading: [{ type: Input }],
    headingTpl: [{ type: Input }],
    sortable: [{ type: HostBinding, args: ['class.slds-is-sortable',] }, { type: Input }],
    sortOrder: [{ type: Input }],
    ariaSort: [{ type: HostBinding, args: ['attr.aria-sort',] }],
    sort: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nLWxpZ2h0bmluZy9zcmMvbGliL2RhdGF0YWJsZXMvaGVhZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLHVCQUF1QixFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLFdBQVcsRUFBZSxNQUFNLGVBQWUsQ0FBQztBQWExSCxNQUFNLE9BQU8sNEJBQTRCO0lBWHpDO1FBa0NXLFNBQUksR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBS3JDLENBQUM7SUF2QkMsSUFBSSxNQUFNO1FBQ1IsT0FBTyxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDekMsQ0FBQztJQUVELElBQUksU0FBUztRQUNYLE9BQU8sSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUM7SUFDOUIsQ0FBQztJQU9ELElBQ0ksUUFBUTtRQUNWLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxRQUFRLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztJQUM3RCxDQUFDO0lBSUQsVUFBVTtRQUNSLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEtBQUssTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzdELENBQUM7OztZQXRDRixTQUFTLFNBQUM7Z0JBQ1QsOENBQThDO2dCQUM5QyxRQUFRLEVBQUUsc0JBQXNCO2dCQUNoQyx1c0JBQTBCO2dCQUMxQixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsSUFBSSxFQUFFO29CQUNKLDRCQUE0QixFQUFFLHFCQUFxQjtvQkFDbkQsNkJBQTZCLEVBQUUsc0JBQXNCO29CQUNyRCx3QkFBd0IsRUFBRSxhQUFhO2lCQUN4QzthQUNGOzs7c0JBR0UsS0FBSzt5QkFDTCxLQUFLO3VCQVVMLFdBQVcsU0FBQyx3QkFBd0IsY0FDcEMsS0FBSzt3QkFFTCxLQUFLO3VCQUVMLFdBQVcsU0FBQyxnQkFBZ0I7bUJBSzVCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIEhvc3RCaW5kaW5nLCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxuICBzZWxlY3RvcjogJ3RoW25nbERhdGF0YWJsZUhlYWRdJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2hlYWQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5zbGRzLWlzLXNvcnRlZF9hc2NdJzogYHNvcnRPcmRlciA9PT0gJ2FzYydgLFxuICAgICdbY2xhc3Muc2xkcy1pcy1zb3J0ZWRfZGVzY10nOiBgc29ydE9yZGVyID09PSAnZGVzYydgLFxuICAgICdbY2xhc3Muc2xkcy1pcy1zb3J0ZWRdJzogYCEhc29ydE9yZGVyYCxcbiAgfSxcbn0pXG5leHBvcnQgY2xhc3MgTmdsSW50ZXJuYWxEYXRhdGFibGVIZWFkQ2VsbCB7XG5cbiAgQElucHV0KCkgaGVhZGluZzogc3RyaW5nO1xuICBASW5wdXQoKSBoZWFkaW5nVHBsOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIGdldCBoZWFkZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuaGVhZGluZ1RwbCB8fCB0aGlzLmhlYWRpbmc7XG4gIH1cblxuICBnZXQgYXR0clRpdGxlKCkge1xuICAgIHJldHVybiB0aGlzLmhlYWRpbmcgfHwgbnVsbDtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3Muc2xkcy1pcy1zb3J0YWJsZScpXG4gIEBJbnB1dCgpIHNvcnRhYmxlOiBib29sZWFuO1xuXG4gIEBJbnB1dCgpIHNvcnRPcmRlcjogJ2FzYycgfCAnZGVzYyc7XG5cbiAgQEhvc3RCaW5kaW5nKCdhdHRyLmFyaWEtc29ydCcpXG4gIGdldCBhcmlhU29ydCgpIHtcbiAgICByZXR1cm4gdGhpcy5zb3J0T3JkZXIgPyBgJHt0aGlzLnNvcnRPcmRlcn1lbmRpbmdgIDogJ25vbmUnO1xuICB9XG5cbiAgQE91dHB1dCgpc29ydCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBzb3J0Q2hhbmdlKCkge1xuICAgIHRoaXMuc29ydC5lbWl0KHRoaXMuc29ydE9yZGVyID09PSAnZGVzYycgPyAnYXNjJyA6ICdkZXNjJyk7XG4gIH1cbn1cbiJdfQ==
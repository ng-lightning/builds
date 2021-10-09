import { Component, ChangeDetectionStrategy, Input, HostBinding } from '@angular/core';
export class NglInternalDatatableCell {
    get dataLabel() {
        return this.column.heading;
    }
    ngOnChanges() {
        this.context = {
            $implicit: this.value,
            row: this.row,
            index: this.index,
        };
    }
    get value() {
        const { key } = this.column;
        return key ? this.row[key] : null;
    }
}
NglInternalDatatableCell.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'td[nglDatatatableCell_]',
                template: "\n<div [class.slds-truncate]=\"column.truncate\" [attr.title]=\"column.truncate ? value : null\">\n  <ng-container *ngIf=\"column.cellTpl; else stringTpl\" [ngTemplateOutlet]=\"column.cellTpl.templateRef\" [ngTemplateOutletContext]=\"context\"></ng-container>\n  <ng-template #stringTpl>{{ value }}</ng-template>\n</div>",
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
NglInternalDatatableCell.propDecorators = {
    row: [{ type: Input }],
    column: [{ type: Input }],
    index: [{ type: Input }],
    dataLabel: [{ type: HostBinding, args: ['attr.data-label',] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2VsbC1pbnRlcm5hbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nLWxpZ2h0bmluZy9zcmMvbGliL2RhdGF0YWJsZXMvY2VsbC1pbnRlcm5hbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLHVCQUF1QixFQUFFLEtBQUssRUFBRSxXQUFXLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFTbEcsTUFBTSxPQUFPLHdCQUF3QjtJQUtuQyxJQUNJLFNBQVM7UUFDWCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDO0lBQzdCLENBQUM7SUFJRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLE9BQU8sR0FBSTtZQUNkLFNBQVMsRUFBRSxJQUFJLENBQUMsS0FBSztZQUNyQixHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUc7WUFDYixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7U0FDbEIsQ0FBQztJQUNKLENBQUM7SUFFRCxJQUFJLEtBQUs7UUFDUCxNQUFNLEVBQUUsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUM1QixPQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBRSxHQUFHLENBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQ3RDLENBQUM7OztZQTdCRixTQUFTLFNBQUM7Z0JBQ1QsOENBQThDO2dCQUM5QyxRQUFRLEVBQUUseUJBQXlCO2dCQUNuQyw0VUFBbUM7Z0JBQ25DLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEOzs7a0JBRUUsS0FBSztxQkFDTCxLQUFLO29CQUNMLEtBQUs7d0JBRUwsV0FBVyxTQUFDLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIElucHV0LCBIb3N0QmluZGluZywgT25DaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ2xEYXRhdGFibGVDb2x1bW4gfSBmcm9tICcuL2NvbHVtbic7XG5cbkBDb21wb25lbnQoe1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXG4gIHNlbGVjdG9yOiAndGRbbmdsRGF0YXRhdGFibGVDZWxsX10nLFxuICB0ZW1wbGF0ZVVybDogJy4vY2VsbC1pbnRlcm5hbC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIE5nbEludGVybmFsRGF0YXRhYmxlQ2VsbCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgpIHJvdzogYW55O1xuICBASW5wdXQoKSBjb2x1bW46IE5nbERhdGF0YWJsZUNvbHVtbjtcbiAgQElucHV0KCkgaW5kZXg6IG51bWJlcjtcblxuICBASG9zdEJpbmRpbmcoJ2F0dHIuZGF0YS1sYWJlbCcpXG4gIGdldCBkYXRhTGFiZWwoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29sdW1uLmhlYWRpbmc7XG4gIH1cblxuICBjb250ZXh0OiBhbnk7XG5cbiAgbmdPbkNoYW5nZXMoKSB7XG4gICAgdGhpcy5jb250ZXh0ID0gIHtcbiAgICAgICRpbXBsaWNpdDogdGhpcy52YWx1ZSxcbiAgICAgIHJvdzogdGhpcy5yb3csXG4gICAgICBpbmRleDogdGhpcy5pbmRleCxcbiAgICB9O1xuICB9XG5cbiAgZ2V0IHZhbHVlKCkge1xuICAgIGNvbnN0IHsga2V5IH0gPSB0aGlzLmNvbHVtbjtcbiAgICByZXR1cm4ga2V5ID8gdGhpcy5yb3dbIGtleSBdIDogbnVsbDtcbiAgfVxufVxuIl19
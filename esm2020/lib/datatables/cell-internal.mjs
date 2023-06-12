import { Component, ChangeDetectionStrategy, Input, HostBinding } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
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
NglInternalDatatableCell.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglInternalDatatableCell, deps: [], target: i0.ɵɵFactoryTarget.Component });
NglInternalDatatableCell.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: NglInternalDatatableCell, selector: "td[nglDatatatableCell_]", inputs: { row: "row", column: "column", index: "index" }, host: { properties: { "attr.data-label": "this.dataLabel" } }, usesOnChanges: true, ngImport: i0, template: "\n<div [class.slds-truncate]=\"column.truncate\" [attr.title]=\"column.truncate ? value : null\">\n  <ng-container *ngIf=\"column.cellTpl; else stringTpl\" [ngTemplateOutlet]=\"column.cellTpl.templateRef\" [ngTemplateOutletContext]=\"context\"></ng-container>\n  <ng-template #stringTpl>{{ value }}</ng-template>\n</div>", dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglInternalDatatableCell, decorators: [{
            type: Component,
            args: [{ selector: 'td[nglDatatatableCell_]', changeDetection: ChangeDetectionStrategy.OnPush, template: "\n<div [class.slds-truncate]=\"column.truncate\" [attr.title]=\"column.truncate ? value : null\">\n  <ng-container *ngIf=\"column.cellTpl; else stringTpl\" [ngTemplateOutlet]=\"column.cellTpl.templateRef\" [ngTemplateOutletContext]=\"context\"></ng-container>\n  <ng-template #stringTpl>{{ value }}</ng-template>\n</div>" }]
        }], propDecorators: { row: [{
                type: Input
            }], column: [{
                type: Input
            }], index: [{
                type: Input
            }], dataLabel: [{
                type: HostBinding,
                args: ['attr.data-label']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2VsbC1pbnRlcm5hbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nLWxpZ2h0bmluZy9zcmMvbGliL2RhdGF0YWJsZXMvY2VsbC1pbnRlcm5hbC50cyIsIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nLWxpZ2h0bmluZy9zcmMvbGliL2RhdGF0YWJsZXMvY2VsbC1pbnRlcm5hbC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsdUJBQXVCLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBYSxNQUFNLGVBQWUsQ0FBQzs7O0FBU2xHLE1BQU0sT0FBTyx3QkFBd0I7SUFLbkMsSUFDSSxTQUFTO1FBQ1gsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQztJQUM3QixDQUFDO0lBSUQsV0FBVztRQUNULElBQUksQ0FBQyxPQUFPLEdBQUk7WUFDZCxTQUFTLEVBQUUsSUFBSSxDQUFDLEtBQUs7WUFDckIsR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHO1lBQ2IsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO1NBQ2xCLENBQUM7SUFDSixDQUFDO0lBRUQsSUFBSSxLQUFLO1FBQ1AsTUFBTSxFQUFFLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDNUIsT0FBTyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUUsR0FBRyxDQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUN0QyxDQUFDOztxSEF2QlUsd0JBQXdCO3lHQUF4Qix3QkFBd0IsNk1DVHJDLGtVQUlNOzJGREtPLHdCQUF3QjtrQkFOcEMsU0FBUzsrQkFFRSx5QkFBeUIsbUJBRWxCLHVCQUF1QixDQUFDLE1BQU07OEJBR3RDLEdBQUc7c0JBQVgsS0FBSztnQkFDRyxNQUFNO3NCQUFkLEtBQUs7Z0JBQ0csS0FBSztzQkFBYixLQUFLO2dCQUdGLFNBQVM7c0JBRFosV0FBVzt1QkFBQyxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBJbnB1dCwgSG9zdEJpbmRpbmcsIE9uQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmdsRGF0YXRhYmxlQ29sdW1uIH0gZnJvbSAnLi9jb2x1bW4nO1xuXG5AQ29tcG9uZW50KHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBhbmd1bGFyLWVzbGludC9jb21wb25lbnQtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICd0ZFtuZ2xEYXRhdGF0YWJsZUNlbGxfXScsXG4gIHRlbXBsYXRlVXJsOiAnLi9jZWxsLWludGVybmFsLmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgTmdsSW50ZXJuYWxEYXRhdGFibGVDZWxsIGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgQElucHV0KCkgcm93OiBhbnk7XG4gIEBJbnB1dCgpIGNvbHVtbjogTmdsRGF0YXRhYmxlQ29sdW1uO1xuICBASW5wdXQoKSBpbmRleDogbnVtYmVyO1xuXG4gIEBIb3N0QmluZGluZygnYXR0ci5kYXRhLWxhYmVsJylcbiAgZ2V0IGRhdGFMYWJlbCgpIHtcbiAgICByZXR1cm4gdGhpcy5jb2x1bW4uaGVhZGluZztcbiAgfVxuXG4gIGNvbnRleHQ6IGFueTtcblxuICBuZ09uQ2hhbmdlcygpIHtcbiAgICB0aGlzLmNvbnRleHQgPSAge1xuICAgICAgJGltcGxpY2l0OiB0aGlzLnZhbHVlLFxuICAgICAgcm93OiB0aGlzLnJvdyxcbiAgICAgIGluZGV4OiB0aGlzLmluZGV4LFxuICAgIH07XG4gIH1cblxuICBnZXQgdmFsdWUoKSB7XG4gICAgY29uc3QgeyBrZXkgfSA9IHRoaXMuY29sdW1uO1xuICAgIHJldHVybiBrZXkgPyB0aGlzLnJvd1sga2V5IF0gOiBudWxsO1xuICB9XG59XG4iLCJcbjxkaXYgW2NsYXNzLnNsZHMtdHJ1bmNhdGVdPVwiY29sdW1uLnRydW5jYXRlXCIgW2F0dHIudGl0bGVdPVwiY29sdW1uLnRydW5jYXRlID8gdmFsdWUgOiBudWxsXCI+XG4gIDxuZy1jb250YWluZXIgKm5nSWY9XCJjb2x1bW4uY2VsbFRwbDsgZWxzZSBzdHJpbmdUcGxcIiBbbmdUZW1wbGF0ZU91dGxldF09XCJjb2x1bW4uY2VsbFRwbC50ZW1wbGF0ZVJlZlwiIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJjb250ZXh0XCI+PC9uZy1jb250YWluZXI+XG4gIDxuZy10ZW1wbGF0ZSAjc3RyaW5nVHBsPnt7IHZhbHVlIH19PC9uZy10ZW1wbGF0ZT5cbjwvZGl2PiJdfQ==
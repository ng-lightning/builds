import { Component, Input, ContentChild, ContentChildren, HostBinding, Output, EventEmitter } from '@angular/core';
import { NglDatatableColumn } from './column';
import { NglDatatableLoadingOverlay, NglDatatableNoRowsOverlay } from './overlays';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "./head";
import * as i3 from "./cell-internal";
export class NglDatatable {
    constructor(detector) {
        this.detector = detector;
        this.data = [];
        this.sortChange = new EventEmitter();
        this.loading = false;
        this.rowClick = new EventEmitter();
        this.dataTrackBy = (index, data) => {
            return this.trackByKey ? data[this.trackByKey] : index;
        };
    }
    get showLoading() {
        return this.loading && this.loadingOverlay;
    }
    columnTrackBy(index, column) {
        return column.key || index;
    }
    onColumnSort(column, order) {
        const key = column.key;
        if (!key) {
            throw new Error(`ng-lightning: No "key" property is set for sortable column "${column.heading}"`);
        }
        this.sortChange.emit({ key, order });
    }
    getColumnSortOrder(column) {
        return this.sort && column.key === this.sort.key ? this.sort.order : null;
    }
    onRowClick(event, data) {
        this.rowClick.emit({ event, data });
    }
    ngAfterContentInit() {
        this._columnsSubscription = this.columns.changes.subscribe(() => this.detector.markForCheck());
    }
    ngOnDestroy() {
        if (this._columnsSubscription) {
            this._columnsSubscription.unsubscribe();
            this._columnsSubscription = null;
        }
    }
}
NglDatatable.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglDatatable, deps: [{ token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component });
NglDatatable.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: NglDatatable, selector: "table[ngl-datatable]", inputs: { data: "data", trackByKey: "trackByKey", sort: "sort", loading: "loading" }, outputs: { sortChange: "sortChange", rowClick: "rowClick" }, host: { properties: { "class.slds-table": "true", "class.slds-is-relative": "this.loading" } }, queries: [{ propertyName: "loadingOverlay", first: true, predicate: NglDatatableLoadingOverlay, descendants: true }, { propertyName: "noRowsOverlay", first: true, predicate: NglDatatableNoRowsOverlay, descendants: true }, { propertyName: "columns", predicate: NglDatatableColumn }], ngImport: i0, template: "\n<thead>\n  <tr class=\"slds-line-height_reset\">\n    <th *ngFor=\"let col of columns; trackBy:columnTrackBy\" nglDatatableHead scope=\"col\" [heading]=\"col.heading\" [headingTpl]=\"col.headingTpl?.templateRef\" [sortable]=\"col.sortable\" [sortOrder]=\"getColumnSortOrder(col)\" (sort)=\"onColumnSort(col, $event)\" [ngClass]=\"col.headClass\"></th>\n  </tr>\n</thead>\n<tbody>\n  <ng-template #noData>\n    <tr>\n      <td [attr.colspan]=\"columns.length\">\n        <ng-template [ngTemplateOutlet]=\"noRowsOverlay?.templateRef\"></ng-template>\n      </td>\n    </tr>\n  </ng-template>\n  <ng-container *ngIf=\"data &amp;&amp; data.length &gt; 0; else noData\">\n    <tr *ngFor=\"let d of data; let i = index; trackBy:dataTrackBy\" (click)=\"onRowClick($event, d)\">\n      <td *ngFor=\"let col of columns; trackBy:columnTrackBy\" [ngClass]=\"col.cellClass\" nglDatatatableCell_ [row]=\"d\" [column]=\"col\" [index]=\"i\"></td>\n    </tr>\n  </ng-container>\n</tbody>\n<div class=\"ngl-datatable-loading slds-align_absolute-center\" *ngIf=\"showLoading\">\n  <ng-template [ngTemplateOutlet]=\"loadingOverlay.templateRef\"></ng-template>\n</div>", styles: [".ngl-datatable-loading{position:absolute;z-index:1;inset:0;background:rgba(255,255,255,.5)}\n"], dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "component", type: i2.NglInternalDatatableHeadCell, selector: "th[nglDatatableHead]", inputs: ["heading", "headingTpl", "sortable", "sortOrder"], outputs: ["sort"] }, { kind: "component", type: i3.NglInternalDatatableCell, selector: "td[nglDatatatableCell_]", inputs: ["row", "column", "index"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglDatatable, decorators: [{
            type: Component,
            args: [{ selector: 'table[ngl-datatable]', host: {
                        '[class.slds-table]': 'true',
                    }, template: "\n<thead>\n  <tr class=\"slds-line-height_reset\">\n    <th *ngFor=\"let col of columns; trackBy:columnTrackBy\" nglDatatableHead scope=\"col\" [heading]=\"col.heading\" [headingTpl]=\"col.headingTpl?.templateRef\" [sortable]=\"col.sortable\" [sortOrder]=\"getColumnSortOrder(col)\" (sort)=\"onColumnSort(col, $event)\" [ngClass]=\"col.headClass\"></th>\n  </tr>\n</thead>\n<tbody>\n  <ng-template #noData>\n    <tr>\n      <td [attr.colspan]=\"columns.length\">\n        <ng-template [ngTemplateOutlet]=\"noRowsOverlay?.templateRef\"></ng-template>\n      </td>\n    </tr>\n  </ng-template>\n  <ng-container *ngIf=\"data &amp;&amp; data.length &gt; 0; else noData\">\n    <tr *ngFor=\"let d of data; let i = index; trackBy:dataTrackBy\" (click)=\"onRowClick($event, d)\">\n      <td *ngFor=\"let col of columns; trackBy:columnTrackBy\" [ngClass]=\"col.cellClass\" nglDatatatableCell_ [row]=\"d\" [column]=\"col\" [index]=\"i\"></td>\n    </tr>\n  </ng-container>\n</tbody>\n<div class=\"ngl-datatable-loading slds-align_absolute-center\" *ngIf=\"showLoading\">\n  <ng-template [ngTemplateOutlet]=\"loadingOverlay.templateRef\"></ng-template>\n</div>", styles: [".ngl-datatable-loading{position:absolute;z-index:1;inset:0;background:rgba(255,255,255,.5)}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }]; }, propDecorators: { data: [{
                type: Input
            }], trackByKey: [{
                type: Input
            }], sort: [{
                type: Input
            }], sortChange: [{
                type: Output
            }], loading: [{
                type: HostBinding,
                args: ['class.slds-is-relative']
            }, {
                type: Input
            }], loadingOverlay: [{
                type: ContentChild,
                args: [NglDatatableLoadingOverlay]
            }], noRowsOverlay: [{
                type: ContentChild,
                args: [NglDatatableNoRowsOverlay]
            }], columns: [{
                type: ContentChildren,
                args: [NglDatatableColumn]
            }], rowClick: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YXRhYmxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctbGlnaHRuaW5nL3NyYy9saWIvZGF0YXRhYmxlcy9kYXRhdGFibGUudHMiLCIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1saWdodG5pbmcvc3JjL2xpYi9kYXRhdGFibGVzL2RhdGF0YWJsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQUUsS0FBSyxFQUFxQixZQUFZLEVBQUUsZUFBZSxFQUNsRSxXQUFXLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFDbEMsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sVUFBVSxDQUFDO0FBQzlDLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSx5QkFBeUIsRUFBRSxNQUFNLFlBQVksQ0FBQzs7Ozs7QUE0Qm5GLE1BQU0sT0FBTyxZQUFZO0lBeUJ2QixZQUFvQixRQUEyQjtRQUEzQixhQUFRLEdBQVIsUUFBUSxDQUFtQjtRQXZCdEMsU0FBSSxHQUFVLEVBQUUsQ0FBQztRQUloQixlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQXFCLENBQUM7UUFHcEQsWUFBTyxHQUFHLEtBQUssQ0FBQztRQVlmLGFBQVEsR0FBRyxJQUFJLFlBQVksRUFBeUIsQ0FBQztRQVUvRCxnQkFBVyxHQUFHLENBQUMsS0FBYSxFQUFFLElBQVMsRUFBRSxFQUFFO1lBQ3pDLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1FBQ3pELENBQUMsQ0FBQTtJQVJpRCxDQUFDO0lBWm5ELElBQUksV0FBVztRQUNiLE9BQU8sSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDO0lBQzdDLENBQUM7SUFZRCxhQUFhLENBQUMsS0FBYSxFQUFFLE1BQTBCO1FBQ3JELE9BQU8sTUFBTSxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUM7SUFDN0IsQ0FBQztJQU1ELFlBQVksQ0FBQyxNQUEwQixFQUFFLEtBQXFCO1FBQzVELE1BQU0sR0FBRyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUM7UUFDdkIsSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUNSLE1BQU0sSUFBSSxLQUFLLENBQUMsK0RBQStELE1BQU0sQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO1NBQ25HO1FBQ0QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBQyxHQUFHLEVBQUUsS0FBSyxFQUFDLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRUQsa0JBQWtCLENBQUMsTUFBMEI7UUFDM0MsT0FBTyxJQUFJLENBQUMsSUFBSSxJQUFJLE1BQU0sQ0FBQyxHQUFHLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDNUUsQ0FBQztJQUVELFVBQVUsQ0FBQyxLQUFZLEVBQUUsSUFBUztRQUNoQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFFRCxrQkFBa0I7UUFDaEIsSUFBSSxDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUM7SUFDakcsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLElBQUksQ0FBQyxvQkFBb0IsRUFBRTtZQUM3QixJQUFJLENBQUMsb0JBQW9CLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDeEMsSUFBSSxDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQztTQUNsQztJQUNILENBQUM7O3lHQTVEVSxZQUFZOzZGQUFaLFlBQVksMlZBV1QsMEJBQTBCLGdGQU0xQix5QkFBeUIsNkRBRXRCLGtCQUFrQiw2QkNyRHJDLGdvQ0FzQk07MkZEWU8sWUFBWTtrQkFoQnhCLFNBQVM7K0JBRUUsc0JBQXNCLFFBRTFCO3dCQUNKLG9CQUFvQixFQUFFLE1BQU07cUJBQzdCO3dHQVlRLElBQUk7c0JBQVosS0FBSztnQkFDRyxVQUFVO3NCQUFsQixLQUFLO2dCQUVHLElBQUk7c0JBQVosS0FBSztnQkFDSSxVQUFVO3NCQUFuQixNQUFNO2dCQUdFLE9BQU87c0JBRGYsV0FBVzt1QkFBQyx3QkFBd0I7O3NCQUNwQyxLQUFLO2dCQUVvQyxjQUFjO3NCQUF2RCxZQUFZO3VCQUFDLDBCQUEwQjtnQkFNQyxhQUFhO3NCQUFyRCxZQUFZO3VCQUFDLHlCQUF5QjtnQkFFRixPQUFPO3NCQUEzQyxlQUFlO3VCQUFDLGtCQUFrQjtnQkFFekIsUUFBUTtzQkFBakIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCwgSW5wdXQsIENoYW5nZURldGVjdG9yUmVmLCBDb250ZW50Q2hpbGQsIENvbnRlbnRDaGlsZHJlbiwgUXVlcnlMaXN0LFxuICBIb3N0QmluZGluZywgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIEFmdGVyQ29udGVudEluaXQsIE9uRGVzdHJveVxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgTmdsRGF0YXRhYmxlQ29sdW1uIH0gZnJvbSAnLi9jb2x1bW4nO1xuaW1wb3J0IHsgTmdsRGF0YXRhYmxlTG9hZGluZ092ZXJsYXksIE5nbERhdGF0YWJsZU5vUm93c092ZXJsYXkgfSBmcm9tICcuL292ZXJsYXlzJztcblxuZXhwb3J0IGludGVyZmFjZSBJTmdsRGF0YXRhYmxlU29ydCB7XG4gIGtleTogc3RyaW5nO1xuICBvcmRlcjogJ2FzYycgfCAnZGVzYyc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSU5nbERhdGF0YWJsZVJvd0NsaWNrIHtcbiAgZXZlbnQ6IEV2ZW50O1xuICBkYXRhOiBhbnk7XG59XG5cbkBDb21wb25lbnQoe1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQGFuZ3VsYXItZXNsaW50L2NvbXBvbmVudC1zZWxlY3RvclxuICBzZWxlY3RvcjogJ3RhYmxlW25nbC1kYXRhdGFibGVdJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2RhdGF0YWJsZS5odG1sJyxcbiAgaG9zdDoge1xuICAgICdbY2xhc3Muc2xkcy10YWJsZV0nOiAndHJ1ZScsXG4gIH0sXG4gIHN0eWxlczogW2BcbiAgICAubmdsLWRhdGF0YWJsZS1sb2FkaW5nIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHotaW5kZXg6IDE7XG4gICAgICB0b3A6IDA7IGxlZnQ6IDA7IHJpZ2h0OiAwOyBib3R0b206IDA7XG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSlcbiAgICB9XG4gIGBdLFxufSlcbmV4cG9ydCBjbGFzcyBOZ2xEYXRhdGFibGUgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0LCBPbkRlc3Ryb3kge1xuXG4gIEBJbnB1dCgpIGRhdGE6IGFueVtdID0gW107XG4gIEBJbnB1dCgpIHRyYWNrQnlLZXk6IHN0cmluZztcblxuICBASW5wdXQoKSBzb3J0OiBJTmdsRGF0YXRhYmxlU29ydDtcbiAgQE91dHB1dCgpIHNvcnRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPElOZ2xEYXRhdGFibGVTb3J0PigpO1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3Muc2xkcy1pcy1yZWxhdGl2ZScpXG4gIEBJbnB1dCgpIGxvYWRpbmcgPSBmYWxzZTtcblxuICBAQ29udGVudENoaWxkKE5nbERhdGF0YWJsZUxvYWRpbmdPdmVybGF5KSBsb2FkaW5nT3ZlcmxheTogTmdsRGF0YXRhYmxlTG9hZGluZ092ZXJsYXk7XG5cbiAgZ2V0IHNob3dMb2FkaW5nKCkge1xuICAgIHJldHVybiB0aGlzLmxvYWRpbmcgJiYgdGhpcy5sb2FkaW5nT3ZlcmxheTtcbiAgfVxuXG4gIEBDb250ZW50Q2hpbGQoTmdsRGF0YXRhYmxlTm9Sb3dzT3ZlcmxheSkgbm9Sb3dzT3ZlcmxheTogTmdsRGF0YXRhYmxlTm9Sb3dzT3ZlcmxheTtcblxuICBAQ29udGVudENoaWxkcmVuKE5nbERhdGF0YWJsZUNvbHVtbikgY29sdW1uczogUXVlcnlMaXN0PE5nbERhdGF0YWJsZUNvbHVtbj47XG5cbiAgQE91dHB1dCgpIHJvd0NsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxJTmdsRGF0YXRhYmxlUm93Q2xpY2s+KCk7XG5cbiAgcHJpdmF0ZSBfY29sdW1uc1N1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZGV0ZWN0b3I6IENoYW5nZURldGVjdG9yUmVmKSB7fVxuXG4gIGNvbHVtblRyYWNrQnkoaW5kZXg6IG51bWJlciwgY29sdW1uOiBOZ2xEYXRhdGFibGVDb2x1bW4pIHtcbiAgICByZXR1cm4gY29sdW1uLmtleSB8fCBpbmRleDtcbiAgfVxuXG4gIGRhdGFUcmFja0J5ID0gKGluZGV4OiBudW1iZXIsIGRhdGE6IGFueSkgPT4ge1xuICAgIHJldHVybiB0aGlzLnRyYWNrQnlLZXkgPyBkYXRhW3RoaXMudHJhY2tCeUtleV0gOiBpbmRleDtcbiAgfVxuXG4gIG9uQ29sdW1uU29ydChjb2x1bW46IE5nbERhdGF0YWJsZUNvbHVtbiwgb3JkZXI6ICdhc2MnIHwgJ2Rlc2MnKSB7XG4gICAgY29uc3Qga2V5ID0gY29sdW1uLmtleTtcbiAgICBpZiAoIWtleSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBuZy1saWdodG5pbmc6IE5vIFwia2V5XCIgcHJvcGVydHkgaXMgc2V0IGZvciBzb3J0YWJsZSBjb2x1bW4gXCIke2NvbHVtbi5oZWFkaW5nfVwiYCk7XG4gICAgfVxuICAgIHRoaXMuc29ydENoYW5nZS5lbWl0KHtrZXksIG9yZGVyfSk7XG4gIH1cblxuICBnZXRDb2x1bW5Tb3J0T3JkZXIoY29sdW1uOiBOZ2xEYXRhdGFibGVDb2x1bW4pIHtcbiAgICByZXR1cm4gdGhpcy5zb3J0ICYmIGNvbHVtbi5rZXkgPT09IHRoaXMuc29ydC5rZXkgPyB0aGlzLnNvcnQub3JkZXIgOiBudWxsO1xuICB9XG5cbiAgb25Sb3dDbGljayhldmVudDogRXZlbnQsIGRhdGE6IGFueSkge1xuICAgIHRoaXMucm93Q2xpY2suZW1pdCh7IGV2ZW50LCBkYXRhIH0pO1xuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAgIHRoaXMuX2NvbHVtbnNTdWJzY3JpcHRpb24gPSB0aGlzLmNvbHVtbnMuY2hhbmdlcy5zdWJzY3JpYmUoKCkgPT4gdGhpcy5kZXRlY3Rvci5tYXJrRm9yQ2hlY2soKSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBpZiAodGhpcy5fY29sdW1uc1N1YnNjcmlwdGlvbikge1xuICAgICAgdGhpcy5fY29sdW1uc1N1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgdGhpcy5fY29sdW1uc1N1YnNjcmlwdGlvbiA9IG51bGw7XG4gICAgfVxuICB9XG59XG4iLCJcbjx0aGVhZD5cbiAgPHRyIGNsYXNzPVwic2xkcy1saW5lLWhlaWdodF9yZXNldFwiPlxuICAgIDx0aCAqbmdGb3I9XCJsZXQgY29sIG9mIGNvbHVtbnM7IHRyYWNrQnk6Y29sdW1uVHJhY2tCeVwiIG5nbERhdGF0YWJsZUhlYWQgc2NvcGU9XCJjb2xcIiBbaGVhZGluZ109XCJjb2wuaGVhZGluZ1wiIFtoZWFkaW5nVHBsXT1cImNvbC5oZWFkaW5nVHBsPy50ZW1wbGF0ZVJlZlwiIFtzb3J0YWJsZV09XCJjb2wuc29ydGFibGVcIiBbc29ydE9yZGVyXT1cImdldENvbHVtblNvcnRPcmRlcihjb2wpXCIgKHNvcnQpPVwib25Db2x1bW5Tb3J0KGNvbCwgJGV2ZW50KVwiIFtuZ0NsYXNzXT1cImNvbC5oZWFkQ2xhc3NcIj48L3RoPlxuICA8L3RyPlxuPC90aGVhZD5cbjx0Ym9keT5cbiAgPG5nLXRlbXBsYXRlICNub0RhdGE+XG4gICAgPHRyPlxuICAgICAgPHRkIFthdHRyLmNvbHNwYW5dPVwiY29sdW1ucy5sZW5ndGhcIj5cbiAgICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cIm5vUm93c092ZXJsYXk/LnRlbXBsYXRlUmVmXCI+PC9uZy10ZW1wbGF0ZT5cbiAgICAgIDwvdGQ+XG4gICAgPC90cj5cbiAgPC9uZy10ZW1wbGF0ZT5cbiAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImRhdGEgJmFtcDsmYW1wOyBkYXRhLmxlbmd0aCAmZ3Q7IDA7IGVsc2Ugbm9EYXRhXCI+XG4gICAgPHRyICpuZ0Zvcj1cImxldCBkIG9mIGRhdGE7IGxldCBpID0gaW5kZXg7IHRyYWNrQnk6ZGF0YVRyYWNrQnlcIiAoY2xpY2spPVwib25Sb3dDbGljaygkZXZlbnQsIGQpXCI+XG4gICAgICA8dGQgKm5nRm9yPVwibGV0IGNvbCBvZiBjb2x1bW5zOyB0cmFja0J5OmNvbHVtblRyYWNrQnlcIiBbbmdDbGFzc109XCJjb2wuY2VsbENsYXNzXCIgbmdsRGF0YXRhdGFibGVDZWxsXyBbcm93XT1cImRcIiBbY29sdW1uXT1cImNvbFwiIFtpbmRleF09XCJpXCI+PC90ZD5cbiAgICA8L3RyPlxuICA8L25nLWNvbnRhaW5lcj5cbjwvdGJvZHk+XG48ZGl2IGNsYXNzPVwibmdsLWRhdGF0YWJsZS1sb2FkaW5nIHNsZHMtYWxpZ25fYWJzb2x1dGUtY2VudGVyXCIgKm5nSWY9XCJzaG93TG9hZGluZ1wiPlxuICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwibG9hZGluZ092ZXJsYXkudGVtcGxhdGVSZWZcIj48L25nLXRlbXBsYXRlPlxuPC9kaXY+Il19
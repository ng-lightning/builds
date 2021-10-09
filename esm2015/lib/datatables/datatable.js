import { Component, Input, ChangeDetectorRef, ContentChild, ContentChildren, HostBinding, Output, EventEmitter } from '@angular/core';
import { NglDatatableColumn } from './column';
import { NglDatatableLoadingOverlay, NglDatatableNoRowsOverlay } from './overlays';
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
NglDatatable.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'table[ngl-datatable]',
                template: "\n<thead>\n  <tr class=\"slds-line-height_reset\">\n    <th *ngFor=\"let col of columns; trackBy:columnTrackBy\" nglDatatableHead scope=\"col\" [heading]=\"col.heading\" [headingTpl]=\"col.headingTpl?.templateRef\" [sortable]=\"col.sortable\" [sortOrder]=\"getColumnSortOrder(col)\" (sort)=\"onColumnSort(col, $event)\" [ngClass]=\"col.headClass\"></th>\n  </tr>\n</thead>\n<tbody>\n  <ng-template #noData>\n    <tr>\n      <td [attr.colspan]=\"columns.length\">\n        <ng-template [ngTemplateOutlet]=\"noRowsOverlay?.templateRef\"></ng-template>\n      </td>\n    </tr>\n  </ng-template>\n  <ng-container *ngIf=\"data &amp;&amp; data.length &gt; 0; else noData\">\n    <tr *ngFor=\"let d of data; let i = index; trackBy:dataTrackBy\" (click)=\"onRowClick($event, d)\">\n      <td *ngFor=\"let col of columns; trackBy:columnTrackBy\" [ngClass]=\"col.cellClass\" nglDatatatableCell_ [row]=\"d\" [column]=\"col\" [index]=\"i\"></td>\n    </tr>\n  </ng-container>\n</tbody>\n<div class=\"ngl-datatable-loading slds-align_absolute-center\" *ngIf=\"showLoading\">\n  <ng-template [ngTemplateOutlet]=\"loadingOverlay.templateRef\"></ng-template>\n</div>",
                host: {
                    '[class.slds-table]': 'true',
                },
                styles: [`
    .ngl-datatable-loading {
      position: absolute;
      z-index: 1;
      top: 0; left: 0; right: 0; bottom: 0;
      background: rgba(255, 255, 255, 0.5)
    }
  `]
            },] }
];
NglDatatable.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
NglDatatable.propDecorators = {
    data: [{ type: Input }],
    trackByKey: [{ type: Input }],
    sort: [{ type: Input }],
    sortChange: [{ type: Output }],
    loading: [{ type: HostBinding, args: ['class.slds-is-relative',] }, { type: Input }],
    loadingOverlay: [{ type: ContentChild, args: [NglDatatableLoadingOverlay,] }],
    noRowsOverlay: [{ type: ContentChild, args: [NglDatatableNoRowsOverlay,] }],
    columns: [{ type: ContentChildren, args: [NglDatatableColumn,] }],
    rowClick: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YXRhYmxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctbGlnaHRuaW5nL3NyYy9saWIvZGF0YXRhYmxlcy9kYXRhdGFibGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFBRSxLQUFLLEVBQUUsaUJBQWlCLEVBQUUsWUFBWSxFQUFFLGVBQWUsRUFDbEUsV0FBVyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQ2xDLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUM5QyxPQUFPLEVBQUUsMEJBQTBCLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxZQUFZLENBQUM7QUE0Qm5GLE1BQU0sT0FBTyxZQUFZO0lBeUJ2QixZQUFvQixRQUEyQjtRQUEzQixhQUFRLEdBQVIsUUFBUSxDQUFtQjtRQXZCdEMsU0FBSSxHQUFVLEVBQUUsQ0FBQztRQUloQixlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQXFCLENBQUM7UUFHcEQsWUFBTyxHQUFHLEtBQUssQ0FBQztRQVlmLGFBQVEsR0FBRyxJQUFJLFlBQVksRUFBeUIsQ0FBQztRQVUvRCxnQkFBVyxHQUFHLENBQUMsS0FBYSxFQUFFLElBQVMsRUFBRSxFQUFFO1lBQ3pDLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1FBQ3pELENBQUMsQ0FBQTtJQVJpRCxDQUFDO0lBWm5ELElBQUksV0FBVztRQUNiLE9BQU8sSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDO0lBQzdDLENBQUM7SUFZRCxhQUFhLENBQUMsS0FBYSxFQUFFLE1BQTBCO1FBQ3JELE9BQU8sTUFBTSxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUM7SUFDN0IsQ0FBQztJQU1ELFlBQVksQ0FBQyxNQUEwQixFQUFFLEtBQXFCO1FBQzVELE1BQU0sR0FBRyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUM7UUFDdkIsSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUNSLE1BQU0sSUFBSSxLQUFLLENBQUMsK0RBQStELE1BQU0sQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO1NBQ25HO1FBQ0QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBQyxHQUFHLEVBQUUsS0FBSyxFQUFDLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRUQsa0JBQWtCLENBQUMsTUFBMEI7UUFDM0MsT0FBTyxJQUFJLENBQUMsSUFBSSxJQUFJLE1BQU0sQ0FBQyxHQUFHLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDNUUsQ0FBQztJQUVELFVBQVUsQ0FBQyxLQUFZLEVBQUUsSUFBUztRQUNoQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFFRCxrQkFBa0I7UUFDaEIsSUFBSSxDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUM7SUFDakcsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLElBQUksQ0FBQyxvQkFBb0IsRUFBRTtZQUM3QixJQUFJLENBQUMsb0JBQW9CLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDeEMsSUFBSSxDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQztTQUNsQztJQUNILENBQUM7OztZQTVFRixTQUFTLFNBQUM7Z0JBQ1QsOENBQThDO2dCQUM5QyxRQUFRLEVBQUUsc0JBQXNCO2dCQUNoQywwb0NBQStCO2dCQUMvQixJQUFJLEVBQUU7b0JBQ0osb0JBQW9CLEVBQUUsTUFBTTtpQkFDN0I7eUJBQ1E7Ozs7Ozs7R0FPUjthQUNGOzs7WUFoQ21CLGlCQUFpQjs7O21CQW1DbEMsS0FBSzt5QkFDTCxLQUFLO21CQUVMLEtBQUs7eUJBQ0wsTUFBTTtzQkFFTixXQUFXLFNBQUMsd0JBQXdCLGNBQ3BDLEtBQUs7NkJBRUwsWUFBWSxTQUFDLDBCQUEwQjs0QkFNdkMsWUFBWSxTQUFDLHlCQUF5QjtzQkFFdEMsZUFBZSxTQUFDLGtCQUFrQjt1QkFFbEMsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCwgSW5wdXQsIENoYW5nZURldGVjdG9yUmVmLCBDb250ZW50Q2hpbGQsIENvbnRlbnRDaGlsZHJlbiwgUXVlcnlMaXN0LFxuICBIb3N0QmluZGluZywgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIEFmdGVyQ29udGVudEluaXQsIE9uRGVzdHJveVxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgTmdsRGF0YXRhYmxlQ29sdW1uIH0gZnJvbSAnLi9jb2x1bW4nO1xuaW1wb3J0IHsgTmdsRGF0YXRhYmxlTG9hZGluZ092ZXJsYXksIE5nbERhdGF0YWJsZU5vUm93c092ZXJsYXkgfSBmcm9tICcuL292ZXJsYXlzJztcblxuZXhwb3J0IGludGVyZmFjZSBJTmdsRGF0YXRhYmxlU29ydCB7XG4gIGtleTogc3RyaW5nO1xuICBvcmRlcjogJ2FzYycgfCAnZGVzYyc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSU5nbERhdGF0YWJsZVJvd0NsaWNrIHtcbiAgZXZlbnQ6IEV2ZW50O1xuICBkYXRhOiBhbnk7XG59XG5cbkBDb21wb25lbnQoe1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXG4gIHNlbGVjdG9yOiAndGFibGVbbmdsLWRhdGF0YWJsZV0nLFxuICB0ZW1wbGF0ZVVybDogJy4vZGF0YXRhYmxlLmh0bWwnLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5zbGRzLXRhYmxlXSc6ICd0cnVlJyxcbiAgfSxcbiAgc3R5bGVzOiBbYFxuICAgIC5uZ2wtZGF0YXRhYmxlLWxvYWRpbmcge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgei1pbmRleDogMTtcbiAgICAgIHRvcDogMDsgbGVmdDogMDsgcmlnaHQ6IDA7IGJvdHRvbTogMDtcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KVxuICAgIH1cbiAgYF0sXG59KVxuZXhwb3J0IGNsYXNzIE5nbERhdGF0YWJsZSBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQsIE9uRGVzdHJveSB7XG5cbiAgQElucHV0KCkgZGF0YTogYW55W10gPSBbXTtcbiAgQElucHV0KCkgdHJhY2tCeUtleTogc3RyaW5nO1xuXG4gIEBJbnB1dCgpIHNvcnQ6IElOZ2xEYXRhdGFibGVTb3J0O1xuICBAT3V0cHV0KCkgc29ydENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8SU5nbERhdGF0YWJsZVNvcnQ+KCk7XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5zbGRzLWlzLXJlbGF0aXZlJylcbiAgQElucHV0KCkgbG9hZGluZyA9IGZhbHNlO1xuXG4gIEBDb250ZW50Q2hpbGQoTmdsRGF0YXRhYmxlTG9hZGluZ092ZXJsYXkpIGxvYWRpbmdPdmVybGF5OiBOZ2xEYXRhdGFibGVMb2FkaW5nT3ZlcmxheTtcblxuICBnZXQgc2hvd0xvYWRpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubG9hZGluZyAmJiB0aGlzLmxvYWRpbmdPdmVybGF5O1xuICB9XG5cbiAgQENvbnRlbnRDaGlsZChOZ2xEYXRhdGFibGVOb1Jvd3NPdmVybGF5KSBub1Jvd3NPdmVybGF5OiBOZ2xEYXRhdGFibGVOb1Jvd3NPdmVybGF5O1xuXG4gIEBDb250ZW50Q2hpbGRyZW4oTmdsRGF0YXRhYmxlQ29sdW1uKSBjb2x1bW5zOiBRdWVyeUxpc3Q8TmdsRGF0YXRhYmxlQ29sdW1uPjtcblxuICBAT3V0cHV0KCkgcm93Q2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPElOZ2xEYXRhdGFibGVSb3dDbGljaz4oKTtcblxuICBwcml2YXRlIF9jb2x1bW5zU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBkZXRlY3RvcjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHt9XG5cbiAgY29sdW1uVHJhY2tCeShpbmRleDogbnVtYmVyLCBjb2x1bW46IE5nbERhdGF0YWJsZUNvbHVtbikge1xuICAgIHJldHVybiBjb2x1bW4ua2V5IHx8IGluZGV4O1xuICB9XG5cbiAgZGF0YVRyYWNrQnkgPSAoaW5kZXg6IG51bWJlciwgZGF0YTogYW55KSA9PiB7XG4gICAgcmV0dXJuIHRoaXMudHJhY2tCeUtleSA/IGRhdGFbdGhpcy50cmFja0J5S2V5XSA6IGluZGV4O1xuICB9XG5cbiAgb25Db2x1bW5Tb3J0KGNvbHVtbjogTmdsRGF0YXRhYmxlQ29sdW1uLCBvcmRlcjogJ2FzYycgfCAnZGVzYycpIHtcbiAgICBjb25zdCBrZXkgPSBjb2x1bW4ua2V5O1xuICAgIGlmICgha2V5KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYG5nLWxpZ2h0bmluZzogTm8gXCJrZXlcIiBwcm9wZXJ0eSBpcyBzZXQgZm9yIHNvcnRhYmxlIGNvbHVtbiBcIiR7Y29sdW1uLmhlYWRpbmd9XCJgKTtcbiAgICB9XG4gICAgdGhpcy5zb3J0Q2hhbmdlLmVtaXQoe2tleSwgb3JkZXJ9KTtcbiAgfVxuXG4gIGdldENvbHVtblNvcnRPcmRlcihjb2x1bW46IE5nbERhdGF0YWJsZUNvbHVtbikge1xuICAgIHJldHVybiB0aGlzLnNvcnQgJiYgY29sdW1uLmtleSA9PT0gdGhpcy5zb3J0LmtleSA/IHRoaXMuc29ydC5vcmRlciA6IG51bGw7XG4gIH1cblxuICBvblJvd0NsaWNrKGV2ZW50OiBFdmVudCwgZGF0YTogYW55KSB7XG4gICAgdGhpcy5yb3dDbGljay5lbWl0KHsgZXZlbnQsIGRhdGEgfSk7XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgdGhpcy5fY29sdW1uc1N1YnNjcmlwdGlvbiA9IHRoaXMuY29sdW1ucy5jaGFuZ2VzLnN1YnNjcmliZSgoKSA9PiB0aGlzLmRldGVjdG9yLm1hcmtGb3JDaGVjaygpKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIGlmICh0aGlzLl9jb2x1bW5zU3Vic2NyaXB0aW9uKSB7XG4gICAgICB0aGlzLl9jb2x1bW5zU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICB0aGlzLl9jb2x1bW5zU3Vic2NyaXB0aW9uID0gbnVsbDtcbiAgICB9XG4gIH1cbn1cbiJdfQ==
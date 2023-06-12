import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NglInternalOutletModule } from '../util/outlet.module';
import { NglDatatable } from './datatable';
import { NglDatatableColumn } from './column';
import { NglDatatableCell } from './cell';
import { NglDatatableHeadingTemplate } from './heading';
import { NglDatatableLoadingOverlay, NglDatatableNoRowsOverlay } from './overlays';
import { NglIconsModule } from '../icons/module';
import { NglInternalDatatableHeadCell } from './head';
import { NglInternalDatatableCell } from './cell-internal';
import * as i0 from "@angular/core";
const NGL_DATATABLE_DIRECTIVES = [
    NglDatatable,
    NglDatatableColumn,
    NglDatatableCell,
    NglDatatableHeadingTemplate,
    NglDatatableLoadingOverlay, NglDatatableNoRowsOverlay,
];
export class NglDatatablesModule {
}
NglDatatablesModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglDatatablesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
NglDatatablesModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.9", ngImport: i0, type: NglDatatablesModule, declarations: [NglDatatable,
        NglDatatableColumn,
        NglDatatableCell,
        NglDatatableHeadingTemplate,
        NglDatatableLoadingOverlay, NglDatatableNoRowsOverlay, NglInternalDatatableHeadCell, NglInternalDatatableCell], imports: [CommonModule, NglIconsModule, NglInternalOutletModule], exports: [NglDatatable,
        NglDatatableColumn,
        NglDatatableCell,
        NglDatatableHeadingTemplate,
        NglDatatableLoadingOverlay, NglDatatableNoRowsOverlay] });
NglDatatablesModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglDatatablesModule, imports: [CommonModule, NglIconsModule, NglInternalOutletModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglDatatablesModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [NGL_DATATABLE_DIRECTIVES, NglInternalDatatableHeadCell, NglInternalDatatableCell],
                    exports: [NGL_DATATABLE_DIRECTIVES],
                    imports: [CommonModule, NglIconsModule, NglInternalOutletModule],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctbGlnaHRuaW5nL3NyYy9saWIvZGF0YXRhYmxlcy9tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFaEUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUMzQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFDOUMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sUUFBUSxDQUFDO0FBQzFDLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUN4RCxPQUFPLEVBQUUsMEJBQTBCLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFDbkYsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRWpELE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUN0RCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7QUFFM0QsTUFBTSx3QkFBd0IsR0FBRztJQUMvQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQiwyQkFBMkI7SUFDM0IsMEJBQTBCLEVBQUUseUJBQXlCO0NBQ3RELENBQUM7QUFPRixNQUFNLE9BQU8sbUJBQW1COztnSEFBbkIsbUJBQW1CO2lIQUFuQixtQkFBbUIsaUJBWjlCLFlBQVk7UUFDWixrQkFBa0I7UUFDbEIsZ0JBQWdCO1FBQ2hCLDJCQUEyQjtRQUMzQiwwQkFBMEIsRUFBRSx5QkFBeUIsRUFJWiw0QkFBNEIsRUFBRSx3QkFBd0IsYUFFckYsWUFBWSxFQUFFLGNBQWMsRUFBRSx1QkFBdUIsYUFWL0QsWUFBWTtRQUNaLGtCQUFrQjtRQUNsQixnQkFBZ0I7UUFDaEIsMkJBQTJCO1FBQzNCLDBCQUEwQixFQUFFLHlCQUF5QjtpSEFRMUMsbUJBQW1CLFlBRnBCLFlBQVksRUFBRSxjQUFjLEVBQUUsdUJBQXVCOzJGQUVwRCxtQkFBbUI7a0JBTC9CLFFBQVE7bUJBQUM7b0JBQ1IsWUFBWSxFQUFFLENBQUMsd0JBQXdCLEVBQUUsNEJBQTRCLEVBQUUsd0JBQXdCLENBQUM7b0JBQ2hHLE9BQU8sRUFBRSxDQUFDLHdCQUF3QixDQUFDO29CQUNuQyxPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsY0FBYyxFQUFFLHVCQUF1QixDQUFDO2lCQUNqRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdsSW50ZXJuYWxPdXRsZXRNb2R1bGUgfSBmcm9tICcuLi91dGlsL291dGxldC5tb2R1bGUnO1xuXG5pbXBvcnQgeyBOZ2xEYXRhdGFibGUgfSBmcm9tICcuL2RhdGF0YWJsZSc7XG5pbXBvcnQgeyBOZ2xEYXRhdGFibGVDb2x1bW4gfSBmcm9tICcuL2NvbHVtbic7XG5pbXBvcnQgeyBOZ2xEYXRhdGFibGVDZWxsIH0gZnJvbSAnLi9jZWxsJztcbmltcG9ydCB7IE5nbERhdGF0YWJsZUhlYWRpbmdUZW1wbGF0ZSB9IGZyb20gJy4vaGVhZGluZyc7XG5pbXBvcnQgeyBOZ2xEYXRhdGFibGVMb2FkaW5nT3ZlcmxheSwgTmdsRGF0YXRhYmxlTm9Sb3dzT3ZlcmxheSB9IGZyb20gJy4vb3ZlcmxheXMnO1xuaW1wb3J0IHsgTmdsSWNvbnNNb2R1bGUgfSBmcm9tICcuLi9pY29ucy9tb2R1bGUnO1xuXG5pbXBvcnQgeyBOZ2xJbnRlcm5hbERhdGF0YWJsZUhlYWRDZWxsIH0gZnJvbSAnLi9oZWFkJztcbmltcG9ydCB7IE5nbEludGVybmFsRGF0YXRhYmxlQ2VsbCB9IGZyb20gJy4vY2VsbC1pbnRlcm5hbCc7XG5cbmNvbnN0IE5HTF9EQVRBVEFCTEVfRElSRUNUSVZFUyA9IFtcbiAgTmdsRGF0YXRhYmxlLFxuICBOZ2xEYXRhdGFibGVDb2x1bW4sXG4gIE5nbERhdGF0YWJsZUNlbGwsXG4gIE5nbERhdGF0YWJsZUhlYWRpbmdUZW1wbGF0ZSxcbiAgTmdsRGF0YXRhYmxlTG9hZGluZ092ZXJsYXksIE5nbERhdGF0YWJsZU5vUm93c092ZXJsYXksXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtOR0xfREFUQVRBQkxFX0RJUkVDVElWRVMsIE5nbEludGVybmFsRGF0YXRhYmxlSGVhZENlbGwsIE5nbEludGVybmFsRGF0YXRhYmxlQ2VsbF0sXG4gIGV4cG9ydHM6IFtOR0xfREFUQVRBQkxFX0RJUkVDVElWRVNdLFxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBOZ2xJY29uc01vZHVsZSwgTmdsSW50ZXJuYWxPdXRsZXRNb2R1bGVdLFxufSlcbmV4cG9ydCBjbGFzcyBOZ2xEYXRhdGFibGVzTW9kdWxlIHt9XG4iXX0=
import { ChangeDetectorRef, QueryList, EventEmitter, AfterContentInit, OnDestroy } from '@angular/core';
import { NglDatatableColumn } from './column';
import { NglDatatableLoadingOverlay, NglDatatableNoRowsOverlay } from './overlays';
export interface INglDatatableSort {
    key: string;
    order: 'asc' | 'desc';
}
export interface INglDatatableRowClick {
    event: Event;
    data: any;
}
export declare class NglDatatable implements AfterContentInit, OnDestroy {
    private detector;
    data: any[];
    trackByKey: string;
    sort: INglDatatableSort;
    sortChange: EventEmitter<INglDatatableSort>;
    loading: boolean;
    loadingOverlay: NglDatatableLoadingOverlay;
    get showLoading(): NglDatatableLoadingOverlay;
    noRowsOverlay: NglDatatableNoRowsOverlay;
    columns: QueryList<NglDatatableColumn>;
    rowClick: EventEmitter<INglDatatableRowClick>;
    private _columnsSubscription;
    constructor(detector: ChangeDetectorRef);
    columnTrackBy(index: number, column: NglDatatableColumn): string | number;
    dataTrackBy: (index: number, data: any) => any;
    onColumnSort(column: NglDatatableColumn, order: 'asc' | 'desc'): void;
    getColumnSortOrder(column: NglDatatableColumn): "desc" | "asc";
    onRowClick(event: Event, data: any): void;
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
}

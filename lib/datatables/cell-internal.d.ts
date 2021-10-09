import { OnChanges } from '@angular/core';
import { NglDatatableColumn } from './column';
export declare class NglInternalDatatableCell implements OnChanges {
    row: any;
    column: NglDatatableColumn;
    index: number;
    get dataLabel(): string;
    context: any;
    ngOnChanges(): void;
    get value(): any;
}

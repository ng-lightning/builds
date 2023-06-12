import { OnChanges } from '@angular/core';
import { NglDatatableColumn } from './column';
import * as i0 from "@angular/core";
export declare class NglInternalDatatableCell implements OnChanges {
    row: any;
    column: NglDatatableColumn;
    index: number;
    get dataLabel(): string;
    context: any;
    ngOnChanges(): void;
    get value(): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<NglInternalDatatableCell, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NglInternalDatatableCell, "td[nglDatatatableCell_]", never, { "row": "row"; "column": "column"; "index": "index"; }, {}, never, never, false, never>;
}

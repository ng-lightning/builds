import { EventEmitter, TemplateRef } from '@angular/core';
import * as i0 from "@angular/core";
export declare class NglInternalDatatableHeadCell {
    heading: string;
    headingTpl: TemplateRef<any>;
    get header(): string | TemplateRef<any>;
    get attrTitle(): string;
    sortable: boolean;
    sortOrder: 'asc' | 'desc';
    get ariaSort(): string;
    sort: EventEmitter<any>;
    sortChange(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NglInternalDatatableHeadCell, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NglInternalDatatableHeadCell, "th[nglDatatableHead]", never, { "heading": "heading"; "headingTpl": "headingTpl"; "sortable": "sortable"; "sortOrder": "sortOrder"; }, { "sort": "sort"; }, never, never, false, never>;
}

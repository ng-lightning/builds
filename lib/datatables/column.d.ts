import { NglDatatableCell } from './cell';
import { NglDatatableHeadingTemplate } from './heading';
import * as i0 from "@angular/core";
export declare class NglDatatableColumn {
    heading: string;
    key: string;
    headClass: any;
    cellClass: any;
    sortable: boolean;
    truncate: boolean;
    cellTpl: NglDatatableCell;
    headingTpl: NglDatatableHeadingTemplate;
    static ɵfac: i0.ɵɵFactoryDeclaration<NglDatatableColumn, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<NglDatatableColumn, "ngl-datatable-column", never, { "heading": "heading"; "key": "key"; "headClass": "headClass"; "cellClass": "cellClass"; "sortable": "sortable"; "truncate": "truncate"; }, {}, ["cellTpl", "headingTpl"], never, false, never>;
}

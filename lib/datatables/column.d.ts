import { NglDatatableCell } from './cell';
import { NglDatatableHeadingTemplate } from './heading';
export declare class NglDatatableColumn {
    heading: string;
    key: string;
    headClass: any;
    cellClass: any;
    sortable: boolean;
    truncate: boolean;
    cellTpl: NglDatatableCell;
    headingTpl: NglDatatableHeadingTemplate;
}

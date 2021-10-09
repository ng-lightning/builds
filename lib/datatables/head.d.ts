import { EventEmitter, TemplateRef } from '@angular/core';
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
}

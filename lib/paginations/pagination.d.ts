import { EventEmitter, OnChanges } from '@angular/core';
export interface NglPage {
    number: number | string;
    disabled?: boolean;
}
export declare class NglPagination implements OnChanges {
    pages: NglPage[];
    current: number;
    set page(page: number | string);
    pageChange: EventEmitter<number>;
    total: number | string;
    perPage: number | string;
    limit: number | string;
    boundaryNumbers: number;
    firstText: string;
    previousText: string;
    nextText: string;
    lastText: string;
    boundaryLinks: boolean;
    totalPages: number;
    hasPrevious(): boolean;
    hasNext(): boolean;
    goto(page: number): void;
    ngOnChanges(): void;
    pageTrackBy(index: number, page: NglPage): string | number;
    get start(): number;
    get end(): number;
    private getPageArray;
    private getPage;
    private getGapPage;
    /**
     * Calculate first and last visible page numbers
     */
    private limits;
}

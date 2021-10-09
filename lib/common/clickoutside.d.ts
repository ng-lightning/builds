import { EventEmitter, AfterViewInit, OnDestroy, ElementRef } from '@angular/core';
export declare class NglClickOutsideDirective implements AfterViewInit, OnDestroy {
    private document;
    private element;
    clickOutside: EventEmitter<void>;
    ignore: HTMLElement | HTMLElement[];
    private subscription;
    constructor(document: any, element: ElementRef);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    private shouldClose;
}

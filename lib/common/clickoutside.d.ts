import { EventEmitter, AfterViewInit, OnDestroy, ElementRef } from '@angular/core';
import * as i0 from "@angular/core";
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
    static ɵfac: i0.ɵɵFactoryDeclaration<NglClickOutsideDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<NglClickOutsideDirective, "[nglClickOutside]", never, { "ignore": "nglClickOutsideIgnore"; }, { "clickOutside": "nglClickOutside"; }, never, never, false, never>;
}

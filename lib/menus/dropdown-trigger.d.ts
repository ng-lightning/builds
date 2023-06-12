import { ElementRef, OnDestroy } from '@angular/core';
import { NglDropdown } from './dropdown';
import * as i0 from "@angular/core";
export declare class NglDropdownTrigger implements OnDestroy {
    private element;
    private dropdown;
    private parentFocusEventSubscription;
    constructor(element: ElementRef, dropdown: NglDropdown);
    ngOnDestroy(): void;
    toggleOpen(): void;
    onKeyDownOpen($event: Event): void;
    focus(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NglDropdownTrigger, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<NglDropdownTrigger, "[nglDropdownTrigger]", never, {}, {}, never, never, false, never>;
}

import { ElementRef, OnDestroy } from '@angular/core';
import { NglDropdown } from './dropdown';
export declare class NglDropdownTrigger implements OnDestroy {
    private element;
    private dropdown;
    private parentFocusEventSubscription;
    constructor(element: ElementRef, dropdown: NglDropdown);
    ngOnDestroy(): void;
    toggleOpen(): void;
    onKeyDownOpen($event: Event): void;
    focus(): void;
}

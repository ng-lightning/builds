import { ElementRef } from '@angular/core';
export declare class NglDropdownItem {
    private element;
    private isFocused;
    onFocus(): void;
    onBlur(): void;
    constructor(element: ElementRef);
    hasFocus(): boolean;
    focus(): void;
}

import { ElementRef } from '@angular/core';
import * as i0 from "@angular/core";
export declare class NglDropdownItem {
    private element;
    private isFocused;
    onFocus(): void;
    onBlur(): void;
    constructor(element: ElementRef);
    hasFocus(): boolean;
    focus(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NglDropdownItem, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<NglDropdownItem, "[nglDropdownItem]", never, {}, {}, never, never, false, never>;
}

import { ElementRef, Renderer2, ChangeDetectorRef } from '@angular/core';
import { NglCommonNotify } from '../common/notify/notify';
import * as i0 from "@angular/core";
export declare class NglToast extends NglCommonNotify {
    constructor(element: ElementRef, renderer: Renderer2, cd: ChangeDetectorRef);
    static ɵfac: i0.ɵɵFactoryDeclaration<NglToast, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NglToast, "ngl-toast", ["nglToast"], {}, {}, never, ["*"], false, never>;
}

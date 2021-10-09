import { ElementRef, Renderer2, ChangeDetectorRef } from '@angular/core';
import { NglCommonNotify } from '../common/notify/notify';
export declare class NglAlert extends NglCommonNotify {
    constructor(element: ElementRef, renderer: Renderer2, cd: ChangeDetectorRef);
}

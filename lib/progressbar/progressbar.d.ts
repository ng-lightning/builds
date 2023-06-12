import { ElementRef, Renderer2, OnInit, OnChanges } from '@angular/core';
import { HostService } from '../common/host/host.service';
import * as i0 from "@angular/core";
export declare class NglProgressBar implements OnInit, OnChanges {
    private element;
    private renderer;
    private hostService;
    /**
     * The percentage value of the progress bar.
     */
    set value(value: number);
    get value(): number;
    /**
     * The size of the progress bar.
     */
    size: 'x-small' | 'small' | 'medium' | 'large';
    /**
     * The variant of the progress bar.
     */
    variant: 'circular';
    private _value;
    constructor(element: ElementRef, renderer: Renderer2, hostService: HostService);
    ngOnInit(): void;
    ngOnChanges(): void;
    private setHostClass;
    static ɵfac: i0.ɵɵFactoryDeclaration<NglProgressBar, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NglProgressBar, "ngl-progress-bar", never, { "value": "value"; "size": "size"; "variant": "variant"; }, {}, never, never, false, never>;
}

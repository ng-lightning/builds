import { ElementRef, Renderer2, OnInit, OnChanges } from '@angular/core';
import { HostService } from '../common/host/host.service';
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
}

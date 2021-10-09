import { EventEmitter, ElementRef, Renderer2, OnInit, OnChanges } from '@angular/core';
import { HostService } from '../common/host/host.service';
export declare class NglButtonStateful implements OnInit, OnChanges {
    private el;
    private renderer;
    private hostService;
    /**
     * Shows whether the button has been selected or not.
     */
    state: boolean;
    /**
     * Triggered when the button is clicked.
     */
    stateChange: EventEmitter<boolean>;
    /**
     * Appearance.
     */
    variant: 'brand' | 'destructive' | 'inverse' | 'neutral' | 'success' | 'text';
    private focused;
    constructor(el: ElementRef, renderer: Renderer2, hostService: HostService);
    onSelectChange(): void;
    onFocusToggle(focused: string): void;
    ngOnInit(): void;
    ngOnChanges(): void;
    private setHostClass;
}

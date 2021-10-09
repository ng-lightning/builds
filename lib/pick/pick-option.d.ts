import { ElementRef, Renderer2, OnInit, OnDestroy } from '@angular/core';
import { NglPick } from './pick';
export declare class NglPickOption implements OnInit, OnDestroy {
    private element;
    private renderer;
    private nglPick;
    get active(): boolean;
    set setValue(value: any);
    nglPickActiveClass: string;
    private _value;
    private _active;
    private _subscription;
    constructor(element: ElementRef, renderer: Renderer2, nglPick: NglPick);
    pick(evt?: Event): void;
    ngOnInit(): void;
    ngOnDestroy(): void;
    private _isActive;
}

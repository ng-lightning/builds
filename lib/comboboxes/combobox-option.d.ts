import { OnDestroy, ElementRef, Renderer2, ChangeDetectorRef, NgZone } from '@angular/core';
import { Highlightable } from '@angular/cdk/a11y';
import { NglComboboxService } from './combobox.service';
export declare class NglComboboxOption implements Highlightable, OnDestroy {
    private element;
    private service;
    private cd;
    private ngZone;
    value: any;
    label: string;
    selected: boolean;
    disabled: boolean;
    uid: string;
    set active(active: boolean);
    get active(): boolean;
    private _active;
    private scrollTimer;
    private disableNextScrollIntoView;
    private destroyed;
    constructor(element: ElementRef, service: NglComboboxService, cd: ChangeDetectorRef, ngZone: NgZone, renderer: Renderer2);
    onSelectViaInteraction(evt: MouseEvent): void;
    hover(): void;
    setActiveStyles(): void;
    setInactiveStyles(): void;
    scrollIntoView(): void;
    ngOnDestroy(): void;
}

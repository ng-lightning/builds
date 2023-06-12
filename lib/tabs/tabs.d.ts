import { QueryList, EventEmitter, ElementRef, Renderer2, AfterContentInit } from '@angular/core';
import { NglTab } from './tab';
import * as i0 from "@angular/core";
export declare class NglTabs implements AfterContentInit {
    private element;
    private renderer;
    set variant(variant: 'default' | 'scoped');
    get variant(): 'default' | 'scoped';
    tabs: QueryList<NglTab>;
    activeTab: NglTab;
    selected: string | number | NglTab;
    set setSelected(selected: string | number | NglTab);
    selectedChange: EventEmitter<NglTab>;
    /**
     * Whether every tab's content is instantiated when visible, and destroyed when hidden.
     */
    lazy: boolean;
    private _variant;
    constructor(element: ElementRef, renderer: Renderer2);
    ngAfterContentInit(): void;
    select(tab: NglTab): void;
    move(evt: Event, moves: number): void;
    tabClass(tab: NglTab): string;
    trackByTab(index: any, tab: NglTab): string;
    private activate;
    private findTab;
    static ɵfac: i0.ɵɵFactoryDeclaration<NglTabs, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NglTabs, "ngl-tabset", never, { "variant": "variant"; "setSelected": "selected"; "lazy": "lazy"; }, { "selectedChange": "selectedChange"; }, ["tabs"], never, false, never>;
}

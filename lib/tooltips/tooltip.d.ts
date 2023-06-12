import { ChangeDetectorRef, TemplateRef, ElementRef, Renderer2 } from '@angular/core';
import { Placement } from '../util/overlay-position';
import { HostService } from '../common/host/host.service';
import * as i0 from "@angular/core";
export declare class NglTooltip {
    private element;
    private renderer;
    private hostService;
    private cd;
    template: string | TemplateRef<void>;
    placement: Placement;
    uid: string;
    tooltipClass: any;
    private nubbin;
    constructor(element: ElementRef, renderer: Renderer2, hostService: HostService, cd: ChangeDetectorRef);
    nglOnPropertyChange(prop: any): void;
    private setHostClass;
    static ɵfac: i0.ɵɵFactoryDeclaration<NglTooltip, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NglTooltip, "div[ngl-tooltip]", never, {}, {}, never, never, false, never>;
}

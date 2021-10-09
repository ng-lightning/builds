import { ChangeDetectorRef, TemplateRef, ElementRef, Renderer2 } from '@angular/core';
import { Placement } from '../util/overlay-position';
import { HostService } from '../common/host/host.service';
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
}

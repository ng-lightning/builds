import { EventEmitter, ChangeDetectorRef, TemplateRef, ElementRef, Renderer2, OnInit, OnDestroy } from '@angular/core';
import { Placement } from '../util/overlay-position';
import { FocusTrapFactory } from '@angular/cdk/a11y';
import { Variant, Size } from './trigger';
import { HostService } from '../common/host/host.service';
import { isTemplateRef } from '../util/check';
export declare class NglPopover implements OnInit, OnDestroy {
    private hostService;
    element: ElementRef;
    renderer: Renderer2;
    private focusTrapFactory;
    private cd;
    template: string | TemplateRef<void>;
    header: string | TemplateRef<void>;
    footer: string | TemplateRef<void>;
    closeTitle: string;
    closeVisible: boolean;
    popoverClass: any;
    size: Size;
    variant: Variant;
    placement: Placement;
    get labelledby(): string;
    get describedby(): string;
    close: EventEmitter<any>;
    isTemplateRef: typeof isTemplateRef;
    canClose: boolean;
    uid: string;
    inverseCloseButton: boolean;
    private nubbin;
    /** The class that traps and manages focus within the dialog. */
    private focusTrap;
    constructor(hostService: HostService, element: ElementRef, renderer: Renderer2, focusTrapFactory: FocusTrapFactory, cd: ChangeDetectorRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
    nglOnPropertyChange(prop: any): void;
    markForCheck(): void;
    onClose(): void;
    private setHostClass;
}

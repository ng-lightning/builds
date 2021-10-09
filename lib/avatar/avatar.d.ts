import { EventEmitter, ElementRef, Renderer2, OnInit, OnChanges } from '@angular/core';
import { HostService } from '../common/host/host.service';
export declare class NglAvatar implements OnInit, OnChanges {
    private element;
    private hostService;
    src: string;
    alternativeText: string;
    size: string;
    variant: string;
    initials: string;
    fallbackIconName: string;
    error: EventEmitter<any>;
    private _imgError;
    constructor(element: ElementRef, renderer: Renderer2, hostService: HostService);
    fallbackIconClass(): string;
    get shouldShowImage(): boolean;
    onImgError(): void;
    ngOnInit(): void;
    ngOnChanges(): void;
    private setHostClass;
}

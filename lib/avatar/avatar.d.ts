import { EventEmitter, ElementRef, Renderer2, OnInit, OnChanges } from '@angular/core';
import { HostService } from '../common/host/host.service';
import * as i0 from "@angular/core";
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
    static ɵfac: i0.ɵɵFactoryDeclaration<NglAvatar, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NglAvatar, "ngl-avatar", never, { "src": "src"; "alternativeText": "alternativeText"; "size": "size"; "variant": "variant"; "initials": "initials"; "fallbackIconName": "fallbackIconName"; }, { "error": "error"; }, never, never, false, never>;
}

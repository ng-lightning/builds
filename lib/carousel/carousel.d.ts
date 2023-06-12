import { QueryList, EventEmitter, OnChanges, SimpleChanges, ElementRef } from '@angular/core';
import { NglCarouselImage } from './carousel-image';
import { NglCarouselIndicator } from './carousel-indicator';
import * as i0 from "@angular/core";
export declare class NglCarousel implements OnChanges {
    private document;
    active: any;
    activeChange: EventEmitter<number>;
    /**
     * The auto scroll duration in seconds. After that the next image is displayed.
     */
    scrollDuration: number;
    /**
     * Whether auto scroll is enabled.
     */
    autoScroll: boolean;
    /**
     * Whether the carousel should continue looping from the beginning after the last item is displayed.
     */
    autoRefresh: boolean;
    images: QueryList<NglCarouselImage>;
    indicators: QueryList<NglCarouselIndicator>;
    indicatorsEl: ElementRef<HTMLElement>;
    labels: {
        startAutoPlay: string;
        stopAutoPlay: string;
    };
    playing: boolean;
    private nextTimer;
    constructor(document: any);
    isActive(index: number): boolean;
    getImage(index: number): NglCarouselImage;
    ngOnChanges(changes: SimpleChanges): void;
    onIndicatorClick(index: number): void;
    onKeyboard(evt: KeyboardEvent): void;
    setActive(index: number, stopPlaying?: boolean): void;
    togglePlay(): void;
    playLabel(): string;
    private activateNext;
    private setTimer;
    static ɵfac: i0.ɵɵFactoryDeclaration<NglCarousel, [{ optional: true; }]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NglCarousel, "ngl-carousel", never, { "active": "active"; "scrollDuration": "scrollDuration"; "autoScroll": "autoScroll"; "autoRefresh": "autoRefresh"; "labels": "labels"; }, { "activeChange": "activeChange"; }, ["images"], ["*"], false, never>;
}

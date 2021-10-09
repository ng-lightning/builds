import { ChangeDetectorRef, ElementRef, EventEmitter, OnDestroy, Renderer2 } from '@angular/core';
export declare abstract class NglCommonNotify implements OnDestroy {
    private element;
    private renderer;
    private cd;
    /**
     * The type of alert.
     */
    set variant(variant: 'error' | 'info' | 'success' | 'warning');
    get variant(): 'error' | 'info' | 'success' | 'warning';
    iconName: string;
    assistiveText: any;
    closeButtonAssistiveText: string;
    /**
     * The number of milliseconds after which, the close event will be triggered with an emitted reason of `'timeout'`.
     */
    set duration(duration: number);
    /**
     * Triggered by close button or duration timeout.
     */
    closeEventEmitter: EventEmitter<string>;
    set dismissible(dismissible: boolean);
    get dismissible(): boolean;
    private _dismissible;
    private currentTimeout;
    private _variant;
    constructor(element: ElementRef, renderer: Renderer2, cd: ChangeDetectorRef, type: string);
    close(reason?: string, $event?: Event): void;
    ngOnDestroy(): void;
    private clearTimeout;
    private toggleThemeClass;
}

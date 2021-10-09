import { ElementRef, EventEmitter, OnChanges, SimpleChanges, AfterContentInit, OnDestroy } from '@angular/core';
import { FocusTrapFactory } from '@angular/cdk/a11y';
import { Overlay } from '@angular/cdk/overlay';
import { NglModalHeaderTemplate, NglModalTaglineTemplate, NglModalFooterTemplate } from './templates';
export declare class NglModal implements OnChanges, AfterContentInit, OnDestroy {
    private focusTrapFactory;
    private document;
    private overlay;
    private element;
    header: string;
    size: string;
    directional: boolean;
    headingId: string;
    contentId: string;
    open: boolean;
    get hasHeader(): string | NglModalHeaderTemplate;
    closeButtonAssistiveText: string;
    openChange: EventEmitter<any>;
    headerTpl: NglModalHeaderTemplate;
    taglineTpl: NglModalTaglineTemplate;
    footer: NglModalFooterTemplate;
    dismissOnClickOutside: boolean;
    prompt: 'success' | 'warning' | 'error' | 'wrench' | 'offline' | 'info';
    showClose: boolean;
    /** The class that traps and manages focus within the dialog. */
    private focusTrap;
    private container;
    /** Element that was focused before the dialog was opened. Save this to restore upon close. */
    private elementFocusedBeforeDialogWasOpened;
    private scrollStrategy;
    constructor(focusTrapFactory: FocusTrapFactory, document: any, overlay: Overlay, element: ElementRef);
    close(evt?: Event): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngAfterContentInit(): void;
    clickOutside(evt: any): void;
    ngOnDestroy(): void;
    modalClass(): {
        [x: string]: boolean;
        "slds-fade-in-open": boolean;
        "slds-modal_prompt": boolean;
    };
    modalHeaderClass(): {
        [x: string]: boolean;
        "slds-modal__header_empty": boolean;
    };
    modalFooterClass(): {
        "slds-modal__footer_directional": boolean;
        "slds-theme_default": boolean;
    };
    private handleOpen;
}

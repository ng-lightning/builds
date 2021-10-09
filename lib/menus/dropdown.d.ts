import { EventEmitter, ElementRef, OnInit, OnDestroy, QueryList, Renderer2 } from '@angular/core';
import { NglDropdownItem } from './dropdown-item';
export declare class NglDropdown implements OnInit, OnDestroy {
    element: ElementRef;
    renderer: Renderer2;
    set isOpen(isOpen: boolean);
    get isOpen(): boolean;
    handlePageEvents: boolean;
    items: QueryList<NglDropdownItem>;
    isOpenChange: EventEmitter<boolean>;
    triggerFocusEventEmitter: EventEmitter<any>;
    private _isOpen;
    private openEventSubscription;
    private globalClickEventUnsubscriber;
    private clickEventUnsubscriber;
    private globalClickTimeout;
    onKeydownClose(eventName: string): void;
    onKeydownFocusNext($event: Event, direction: 'next' | 'previous'): void;
    constructor(element: ElementRef, renderer: Renderer2);
    ngOnInit(): void;
    ngOnDestroy(): void;
    toggle(toggle?: boolean, focus?: boolean): void;
    private handleGlobalClickEvent;
    private _subscribeToClickEvents;
    private _unsubscribeFromClickEvents;
    private clearGlobalClickTimeout;
    private focusItem;
    private handleDropdownOpenEvent;
}

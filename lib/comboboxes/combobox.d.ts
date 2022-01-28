import { EventEmitter, OnChanges, TemplateRef, OnDestroy, QueryList, SimpleChanges, NgZone, ElementRef, ChangeDetectorRef, AfterContentInit } from '@angular/core';
import { ActiveDescendantKeyManager } from '@angular/cdk/a11y';
import { ConnectionPositionPair, CdkOverlayOrigin, CdkConnectedOverlay } from '@angular/cdk/overlay';
import { NglComboboxOption } from './combobox-option';
import { NglComboboxInput } from './combobox-input';
import { NglComboboxService } from './combobox.service';
import { NglComboboxConfig } from './config';
export interface NglComboboxOptionItem {
    value: number | string;
    label?: string;
    disabled?: boolean;
}
export declare class NglCombobox implements OnChanges, OnDestroy, AfterContentInit {
    private ngZone;
    private cd;
    private service;
    variant: 'base' | 'lookup';
    label?: string | TemplateRef<any>;
    readonly uid: string;
    open: boolean;
    openChange: EventEmitter<boolean>;
    selection: any;
    selectionChange: EventEmitter<any>;
    multiple: boolean;
    visibleLength: 5 | 7 | 10;
    inputEl?: NglComboboxInput;
    loading?: boolean;
    loadingMore?: boolean;
    closeOnSelection: boolean;
    /**
     * Text added to loading spinner.
     */
    loadingLabel: string;
    /**
     * Text message that renders when no matches found.
     */
    noOptionsFound: string;
    /**
     * Text for removing single selected option.
     */
    removeSelectedLabel: string;
    readonly options?: QueryList<NglComboboxOption>;
    hasErrors: boolean;
    set data(data: any[]);
    get data(): any[];
    overlayOrigin?: CdkOverlayOrigin;
    cdkOverlay?: CdkConnectedOverlay;
    dropdownElementRef?: ElementRef;
    overlayWidth: number;
    overlayPositions: ConnectionPositionPair[];
    /** Manages active item in option list based on key events. */
    keyManager?: ActiveDescendantKeyManager<NglComboboxOption> | null;
    private optionChangesSubscription?;
    private ɵRequiredSubscription?;
    private _data?;
    private keyboardSubscription?;
    required: boolean;
    selectionValueFn: (selection: string[]) => string;
    get activeOption(): NglComboboxOption | null;
    get selectedOptions(): NglComboboxOptionItem[];
    get isLookup(): boolean;
    get hasLookupSingleSelection(): boolean;
    constructor(defaultConfig: NglComboboxConfig, ngZone: NgZone, cd: ChangeDetectorRef, service: NglComboboxService);
    ngAfterContentInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    onAttach(): void;
    onDetach(): void;
    trackByOption(_index: number, option: NglComboboxOption): any;
    dropdownClass(): {
        [x: string]: boolean;
    };
    inputIconRight(): "utility:search" | "utility:down";
    hasNoMatches(): boolean;
    onOptionSelection(option?: NglComboboxOption | null): void;
    onClearSelection(): void;
    /**
     * Check whether value is currently selected.
     *
     * @param value The value in test, whether is (part of) selection or not
     */
    isSelected(value: any): boolean;
    ngOnDestroy(): void;
    close(): void;
    private detach;
    private calculateDisplayValue;
    private keyboardSubscribe;
    private updateMenuHeight;
    private calculateErrors;
}

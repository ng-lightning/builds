import { ElementRef, Renderer2, TemplateRef, ChangeDetectorRef, EventEmitter, OnInit, OnChanges, SimpleChanges, OnDestroy, NgZone } from '@angular/core';
import { ControlValueAccessor, Validator, AbstractControl, ValidationErrors } from '@angular/forms';
import { CdkConnectedOverlay, ConnectionPositionPair } from '@angular/cdk/overlay';
import { FocusTrapFactory } from '@angular/cdk/a11y';
import { HostService } from '../../common/host/host.service';
import { NglDateAdapter } from '../adapters/date-fns-adapter';
import { NglDatepickerConfig } from '../config';
import { IDatepickerInput } from './datepicker-input.interface';
import * as i0 from "@angular/core";
export declare class NglDatepickerInput implements ControlValueAccessor, Validator, OnInit, OnChanges, OnDestroy {
    private element;
    private renderer;
    private cd;
    private hostService;
    private ngZone;
    private focusTrapFactory;
    private adapter;
    /**
     * Label that appears above the input.
     */
    label: string | TemplateRef<any>;
    /**
     * Pre-defined format to use.
     */
    format: 'big-endian' | 'little-endian' | 'middle-endian';
    /**
     * Delimiter to use on pre-defined formats.
     */
    delimiter: any;
    /**
     * Disable input and calendar.
     */
    disabled: boolean;
    /**
     * Aligns the right or left side of the dropdown menu with the respective side of the input.
     */
    dropdownAlign: 'left' | 'right';
    /**
     * The date value.
     */
    set value(value: Date | string | null);
    get value(): Date | string | null;
    /**
     * Whether to open the datepicker when a mouse user clicks on the input.
     */
    openOnInputClick: boolean;
    /**
     * Emits when selected date changes.
     */
    valueChange: EventEmitter<string | Date>;
    inputEl: IDatepickerInput;
    cdkOverlay: CdkConnectedOverlay;
    /**
     * The minimum valid date.
     */
    min: Date;
    /**
     * The maximum valid date.
     */
    max: Date;
    set required(required: any);
    isRequired: Boolean;
    /**
     * Text for button to open calendar.
     */
    selectDateLabel: string;
    /**
     * Whether to use the accepted pattern as placeholder.
     */
    patternPlaceholder: boolean;
    /**
     * Datepicker inputs
     */
    monthNames: ReadonlyArray<string>;
    dayNamesShort: ReadonlyArray<string>;
    dayNamesLong: ReadonlyArray<string>;
    firstDayOfWeek: number;
    showToday: boolean;
    dateDisabled: (date: Date) => boolean | null;
    relativeYearFrom: number;
    relativeYearTo: number;
    todayLabel: string;
    previousMonthLabel: string;
    nextMonthLabel: string;
    date: Date;
    uid: string;
    overlayPositions: ConnectionPositionPair[];
    set open(open: boolean);
    get open(): boolean;
    private _open;
    private _value;
    private pattern;
    private config;
    private focusTrap;
    constructor(defaultConfig: NglDatepickerConfig, locale: string, element: ElementRef, renderer: Renderer2, cd: ChangeDetectorRef, hostService: HostService, ngZone: NgZone, focusTrapFactory: FocusTrapFactory, adapter: NglDateAdapter);
    onChange: Function | null;
    onTouched: () => void;
    validatorChange: () => void;
    validate(c: AbstractControl): ValidationErrors | null;
    writeValue(value: Date): void;
    registerOnChange(fn: (value: any) => any): void;
    registerOnTouched(fn: () => any): void;
    registerOnValidatorChange(fn: () => void): void;
    setDisabledState(disabled: boolean): void;
    onBlur(): void;
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    onKeyboardInput(evt: KeyboardEvent): void;
    onInputChange(): void;
    openCalendar(): void;
    onAttach(): void;
    onDetach(): void;
    closeCalendar(focusInput?: boolean): void;
    onTriggerClick(origin: 'input' | 'button'): void;
    pickerSelection(date: Date): void;
    updateDatepickerSize(width: number, height: number): void;
    private setPositions;
    private formatInputValue;
    private updateInputValue;
    private dateParse;
    private dateFormat;
    private getPattern;
    private setPattern;
    private emitSelection;
    private setHostClass;
    static ɵfac: i0.ɵɵFactoryDeclaration<NglDatepickerInput, [{ optional: true; }, null, null, null, null, null, null, null, null]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NglDatepickerInput, "ngl-datepicker-input", never, { "label": "label"; "format": "format"; "delimiter": "delimiter"; "disabled": "disabled"; "dropdownAlign": "dropdownAlign"; "value": "value"; "openOnInputClick": "openOnInputClick"; "min": "min"; "max": "max"; "required": "required"; "selectDateLabel": "selectDateLabel"; "patternPlaceholder": "patternPlaceholder"; "monthNames": "monthNames"; "dayNamesShort": "dayNamesShort"; "dayNamesLong": "dayNamesLong"; "firstDayOfWeek": "firstDayOfWeek"; "showToday": "showToday"; "dateDisabled": "dateDisabled"; "relativeYearFrom": "relativeYearFrom"; "relativeYearTo": "relativeYearTo"; "todayLabel": "todayLabel"; "previousMonthLabel": "previousMonthLabel"; "nextMonthLabel": "nextMonthLabel"; }, { "valueChange": "valueChange"; }, never, ["*"], false, never>;
}

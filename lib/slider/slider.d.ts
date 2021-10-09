import { ElementRef, Renderer2, TemplateRef, ChangeDetectorRef, EventEmitter } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
export declare class NglSlider implements ControlValueAccessor {
    private element;
    private renderer;
    private cd;
    /**
     * Label that appears above the Slider.
     */
    label: string | TemplateRef<any>;
    /**
     * The minimum value that the slider can have.
     */
    min: number;
    /**
     * The maximum value that the slider can have.
     */
    max: number;
    /**
     * The granularity the slider can step through values.
     */
    step: number;
    /**
     * Whether the slider will be displayed vertically.
     */
    vertical: boolean;
    /**
     * The size of the slider.
     */
    size: 'xx-small' | 'x-small' | 'small' | 'medium' | 'large' | 'x-large' | 'xx-large';
    /**
     * Whether the slider is disabled.
     */
    disabled: boolean;
    /**
     * Message to display when there is in an error state.
     */
    error: string | TemplateRef<any>;
    get hasError(): boolean;
    set value(value: number | null);
    get value(): number;
    valueChange: EventEmitter<number>;
    uid: string;
    private _value;
    constructor(element: ElementRef, renderer: Renderer2, cd: ChangeDetectorRef);
    onChange: Function | null;
    onTouched: () => void;
    writeValue(value: number): void;
    registerOnChange(fn: (value: any) => any): void;
    registerOnTouched(fn: () => any): void;
    setDisabledState(isDisabled: boolean): void;
    onInput(value: any): void;
    sliderClass(): {
        [x: string]: boolean;
        "slds-slider_vertical": boolean;
    };
    private limit;
}

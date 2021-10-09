import { ElementRef, Renderer2, ChangeDetectorRef, TemplateRef } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { IHSV } from './util';
import { NglColorpickerConfig } from './config';
export declare class NglColorpicker implements ControlValueAccessor {
    private el;
    private renderer;
    private cd;
    /**
     * An input label as for a form.
     */
    label: string;
    /**
     * Placeholder of input box.
     */
    placeholder: string;
    /**
     * Text for cancel button on popover.
     */
    cancelButtonLabel: string;
    /**
     * Text for submit button of popover.
     */
    submitButtonLabel: string;
    /**
     * Highlights the input as a required field (does not perform any validation).
     */
    required: boolean;
    /**
     * A tooltip that is displayed next to the label.
     */
    fieldLevelHelpTooltip: string | TemplateRef<any>;
    /**
     * Error message when hex color input is invalid.
     */
    invalidColorLabel: string | TemplateRef<any>;
    /**
     * Text for swatch tab of popover.
     */
    swatchTabLabel: string;
    /**
     * Text for custom tab of popover.
     */
    customTabLabel: string;
    /**
     * Hex color values which are used to set the options of the swatch tab of the colorpicker popover.
     */
    swatchColors: string[];
    /**
     * Whether to make the hex color input readonly.
     */
    readonlyInput: boolean;
    /**
     * Determines which tab is visible when popover opens.
     */
    defaultSelectedTab: 'swatches' | 'custom';
    /**
     * Configures to show both or which one of the color selection interfaces.
     */
    variant: 'base' | 'swatches' | 'custom';
    color: string;
    uid: string;
    open: boolean;
    disabled: boolean;
    hexCurrent: string;
    hsvCurrent: {
        hue: any;
        saturation: number;
        value: number;
    };
    constructor(defaultConfig: NglColorpickerConfig, el: ElementRef, renderer: Renderer2, cd: ChangeDetectorRef);
    onChange: (_: any) => void;
    onTouched: () => void;
    writeValue(value: string): void;
    registerOnChange(fn: (value: any) => any): void;
    registerOnTouched(fn: () => any): void;
    setDisabledState(isDisabled: boolean): void;
    onSwatchSelection(hex: string): void;
    onCustomSelection(hsv: IHSV): void;
    openChange(open: boolean): void;
    cancel(): void;
    done(): void;
    canApply(): boolean;
    onInput(hex: string): void;
    get isValidInput(): boolean;
}

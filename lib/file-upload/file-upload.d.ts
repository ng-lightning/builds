import { ElementRef, Renderer2, TemplateRef, OnChanges, SimpleChanges } from '@angular/core';
import { ControlValueAccessor, Validator, AbstractControl, ValidationErrors } from '@angular/forms';
export declare class NglFileUpload implements ControlValueAccessor, Validator, OnChanges {
    private element;
    private renderer;
    /**
     * Label that appears above the upload area.
     */
    label: string | TemplateRef<any>;
    /**
     * File types that can be accepted. See [input accept Attribute](https://www.w3schools.com/tags/att_input_accept.asp).
     */
    accept: string | string[];
    /**
     * Whether file selection is disabled.
     */
    disabled: boolean;
    /**
      * How many files can be selected simultaneously. `0` means unlimited.
      */
    maxFiles: number;
    /**
     * File size limit in bytes. `0` means unlimited.
     */
    maxFilesize: number;
    /**
     * Message to display when there is in an error state.
     */
    error: string | TemplateRef<any>;
    /**
     * Text for button to open file selector.
     */
    uploadButtonLabel: string;
    /**
     * Text to display inside drop zone.
     */
    dropZoneLabel: string;
    uid: string;
    isDragOver: boolean;
    files: File[];
    constructor(element: ElementRef, renderer: Renderer2);
    onChange: Function | null;
    onTouched: () => void;
    validatorChange: () => void;
    writeValue(value: File[]): void;
    registerOnChange(fn: (value: any) => any): void;
    registerOnTouched(fn: () => any): void;
    registerOnValidatorChange(fn: () => void): void;
    setDisabledState(isDisabled: boolean): void;
    validate(c: AbstractControl): ValidationErrors | null;
    ngOnChanges(changes: SimpleChanges): void;
    onDropZone(evt: DragEvent): void;
    onInputChange(files: FileList): void;
    private select;
}

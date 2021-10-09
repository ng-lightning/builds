import { ElementRef, Renderer2, OnDestroy } from '@angular/core';
import { NglDatepickerInput } from './datepicker-input';
import { IDatepickerInput } from './datepicker-input.interface';
export declare class NglDatepickerInputDirective implements IDatepickerInput, OnDestroy {
    element: ElementRef;
    private renderer;
    private datepickerInput;
    constructor(element: ElementRef, renderer: Renderer2, datepickerInput: NglDatepickerInput);
    onClick(): void;
    onKeydown(evt: any): void;
    onInput(): void;
    onBlur(): void;
    setPlaceholder(placeholder: string): void;
    setDisabled(disabled: boolean): void;
    ngOnDestroy(): void;
}

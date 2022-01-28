import { ElementRef, Renderer2 } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { NglComboboxService } from './combobox.service';
export declare class NglComboboxInput {
    private service;
    private el;
    private renderer;
    keyboardBuffer$: Observable<string>;
    ɵRequiredSubject: BehaviorSubject<boolean>;
    get isReadonly(): boolean;
    get ariaAutocomplete(): string;
    get hasReadonlyValue(): boolean;
    set required(required: any);
    get id(): any;
    constructor(service: NglComboboxService, el: ElementRef, renderer: Renderer2);
    setAriaActiveDescendant(uid: string | null): void;
    setValue(value: any): void;
    focus(): void;
    onMouseInteraction(): void;
    onBlur(): void;
    onKeyboard(evt: KeyboardEvent): void;
}

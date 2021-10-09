import { ElementRef, Renderer2 } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
export declare class NglCheckboxInput {
    private el;
    private renderer;
    ɵRequiredSubject: BehaviorSubject<boolean>;
    set describedBy(value: string);
    set required(required: any);
    constructor(el: ElementRef, renderer: Renderer2);
    get id(): any;
    addClass(klass: string): void;
}

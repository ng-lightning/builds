import { ElementRef, Renderer2 } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
export declare class NglInputElement {
    private el;
    private renderer;
    ɵRequiredSubject: BehaviorSubject<boolean>;
    describedBy: string;
    set required(required: any);
    constructor(el: ElementRef, renderer: Renderer2);
    get id(): any;
}

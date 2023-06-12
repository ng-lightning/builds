import { TemplateRef, ElementRef, Renderer2, OnInit } from '@angular/core';
import * as i0 from "@angular/core";
export declare class NglFormLabel implements OnInit {
    private element;
    private renderer;
    label: string | TemplateRef<any>;
    klass: string;
    required: boolean;
    constructor(element: ElementRef, renderer: Renderer2);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NglFormLabel, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NglFormLabel, "label[nglFormLabel]", never, { "label": "nglFormLabel"; "klass": "nglFormLabelClass"; "required": "required"; }, {}, never, ["*"], false, never>;
}

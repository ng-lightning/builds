import { TemplateRef, ElementRef, Renderer2, OnInit } from '@angular/core';
export declare class NglFormLabel implements OnInit {
    private element;
    private renderer;
    label: string | TemplateRef<any>;
    klass: string;
    required: boolean;
    constructor(element: ElementRef, renderer: Renderer2);
    ngOnInit(): void;
}

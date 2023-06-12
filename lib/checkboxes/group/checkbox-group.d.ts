import { TemplateRef, AfterContentInit, OnChanges, QueryList, SimpleChanges } from '@angular/core';
import { NglCheckboxOption } from './checkbox-option';
import * as i0 from "@angular/core";
export declare class NglCheckboxGroup implements OnChanges, AfterContentInit {
    options: QueryList<NglCheckboxOption>;
    label: string | TemplateRef<any>;
    error: string | TemplateRef<any>;
    get hasError(): boolean;
    required: boolean;
    get errorId(): string;
    set type(type: 'list' | 'button');
    get type(): 'list' | 'button';
    private uid;
    private _type;
    ngOnChanges(changes: SimpleChanges): void;
    ngAfterContentInit(): void;
    private updateChildrenType;
    static ɵfac: i0.ɵɵFactoryDeclaration<NglCheckboxGroup, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NglCheckboxGroup, "ngl-checkbox-group,[ngl-checkbox-group]", never, { "label": "label"; "error": "error"; "required": "required"; "type": "type"; }, {}, ["options"], ["*"], false, never>;
}

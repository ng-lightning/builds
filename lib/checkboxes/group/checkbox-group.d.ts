import { TemplateRef, AfterContentInit, OnChanges, QueryList, SimpleChanges } from '@angular/core';
import { NglCheckboxOption } from './checkbox-option';
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
}

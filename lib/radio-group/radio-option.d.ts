import { TemplateRef, ChangeDetectorRef, OnInit, AfterContentInit, OnDestroy } from '@angular/core';
import { NglRadioGroup } from './radio-group';
import { NglRadioInput } from './input/input';
export declare class NglRadioOption implements OnInit, AfterContentInit, OnDestroy {
    private radioGroup;
    private cd;
    label: string | TemplateRef<any>;
    input: NglRadioInput;
    constructor(radioGroup: NglRadioGroup, cd: ChangeDetectorRef);
    type: 'list' | 'button';
    get isTypeList(): boolean;
    get isTypeButton(): boolean;
    private subscriptions;
    ngOnInit(): void;
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
}

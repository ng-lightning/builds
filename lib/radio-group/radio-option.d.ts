import { TemplateRef, ChangeDetectorRef, OnInit, AfterContentInit, OnDestroy } from '@angular/core';
import { NglRadioGroup } from './radio-group';
import { NglRadioInput } from './input/input';
import * as i0 from "@angular/core";
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
    static ɵfac: i0.ɵɵFactoryDeclaration<NglRadioOption, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NglRadioOption, "ngl-radio-option", never, { "label": "label"; }, {}, ["input"], ["*"], false, never>;
}

import { ChangeDetectorRef, AfterContentInit, TemplateRef, OnDestroy } from '@angular/core';
import { NglCheckboxInput } from '../input/input';
import * as i0 from "@angular/core";
export declare class NglCheckboxToggle implements AfterContentInit, OnDestroy {
    private cd;
    input: NglCheckboxInput;
    label: string | TemplateRef<any>;
    error: string;
    enabledText: string;
    disabledText: string;
    get hasError(): boolean;
    required: boolean;
    uid: string;
    private ɵRequiredSubscription;
    constructor(cd: ChangeDetectorRef);
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NglCheckboxToggle, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NglCheckboxToggle, "ngl-checkbox-toggle", never, { "label": "label"; "error": "error"; "enabledText": "enabledText"; "disabledText": "disabledText"; }, {}, ["input"], ["*"], false, never>;
}

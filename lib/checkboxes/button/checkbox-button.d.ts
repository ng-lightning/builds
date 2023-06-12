import { ChangeDetectorRef, AfterContentInit, TemplateRef } from '@angular/core';
import { NglCheckboxInput } from '../input/input';
import * as i0 from "@angular/core";
export declare class NglCheckboxButton implements AfterContentInit {
    private cd;
    input: NglCheckboxInput;
    label: string | TemplateRef<any>;
    _uid: string;
    constructor(cd: ChangeDetectorRef);
    ngAfterContentInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NglCheckboxButton, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NglCheckboxButton, "ngl-checkbox-button", never, { "label": "label"; }, {}, ["input"], ["*"], false, never>;
}

import { ChangeDetectorRef, AfterContentInit, TemplateRef } from '@angular/core';
import { NglCheckboxInput } from '../input/input';
export declare class NglCheckboxButton implements AfterContentInit {
    private cd;
    input: NglCheckboxInput;
    label: string | TemplateRef<any>;
    _uid: string;
    constructor(cd: ChangeDetectorRef);
    ngAfterContentInit(): void;
}

import { ChangeDetectorRef, AfterContentInit, TemplateRef, OnDestroy } from '@angular/core';
import { NglCheckboxInput } from '../input/input';
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
}

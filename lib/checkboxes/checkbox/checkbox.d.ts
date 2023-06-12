import { TemplateRef, AfterContentInit, ChangeDetectorRef, OnChanges, OnDestroy } from '@angular/core';
import { NglCheckboxInput } from '../input/input';
import * as i0 from "@angular/core";
export declare class NglCheckbox implements OnChanges, AfterContentInit, OnDestroy {
    private cd;
    input: NglCheckboxInput;
    label: string | TemplateRef<any>;
    error: string | TemplateRef<any>;
    stacked: boolean;
    get hasError(): boolean;
    required: boolean;
    _uid: string;
    get errorId(): string;
    private ɵRequiredSubscription;
    constructor(cd: ChangeDetectorRef);
    ngOnChanges(): void;
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NglCheckbox, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NglCheckbox, "ngl-checkbox,[ngl-checkbox]", never, { "label": "label"; "error": "error"; "stacked": "stacked"; }, {}, ["input"], ["*"], false, never>;
}

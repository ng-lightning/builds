import { TemplateRef, AfterContentInit, ChangeDetectorRef, OnChanges, OnDestroy } from '@angular/core';
import { NglSelectInput } from '../input/input';
import * as i0 from "@angular/core";
export declare class NglSelect implements OnChanges, AfterContentInit, OnDestroy {
    private cd;
    input: NglSelectInput;
    label: string | TemplateRef<any>;
    fieldLevelHelpTooltip: string | TemplateRef<any>;
    error: string | TemplateRef<any>;
    get hasError(): boolean;
    required: boolean;
    _uid: string;
    get errorId(): string;
    private ɵRequiredSubscription;
    constructor(cd: ChangeDetectorRef);
    ngOnChanges(): void;
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NglSelect, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NglSelect, "ngl-select,[ngl-select]", never, { "label": "label"; "fieldLevelHelpTooltip": "fieldLevelHelpTooltip"; "error": "error"; }, {}, ["input"], ["*"], false, never>;
}

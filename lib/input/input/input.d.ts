import { TemplateRef, AfterContentInit, ChangeDetectorRef, OnChanges, OnDestroy } from '@angular/core';
import { NglInputElement } from '../element/element';
import * as i0 from "@angular/core";
export declare class NglInput implements OnChanges, AfterContentInit, OnDestroy {
    private cd;
    input: NglInputElement;
    label?: string | TemplateRef<any>;
    error?: string | TemplateRef<any>;
    stacked?: boolean;
    fieldLevelHelpTooltip?: string | TemplateRef<any>;
    get hasError(): boolean;
    required: boolean;
    _uid: string;
    get errorId(): string;
    private ɵRequiredSubscription;
    constructor(cd: ChangeDetectorRef);
    ngOnChanges(): void;
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NglInput, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NglInput, "ngl-input,[ngl-input]", never, { "label": "label"; "error": "error"; "stacked": "stacked"; "fieldLevelHelpTooltip": "fieldLevelHelpTooltip"; }, {}, ["input"], ["*"], false, never>;
}

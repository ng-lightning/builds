import { TemplateRef, AfterContentInit, ChangeDetectorRef, OnChanges, OnDestroy } from '@angular/core';
import { NglTextareaInput } from '../input/input';
import * as i0 from "@angular/core";
export declare class NglTextarea implements OnChanges, AfterContentInit, OnDestroy {
    private cd;
    input: NglTextareaInput;
    label: string | TemplateRef<any>;
    fieldLevelHelpTooltip: string | TemplateRef<any>;
    error: string;
    get hasError(): boolean;
    required: boolean;
    _uid: string;
    get errorId(): string;
    private ɵRequiredSubscription;
    constructor(cd: ChangeDetectorRef);
    ngOnChanges(): void;
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NglTextarea, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NglTextarea, "ngl-textarea,[ngl-textarea]", never, { "label": "label"; "fieldLevelHelpTooltip": "fieldLevelHelpTooltip"; "error": "error"; }, {}, ["input"], ["*"], false, never>;
}

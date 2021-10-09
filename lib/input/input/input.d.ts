import { TemplateRef, AfterContentInit, ChangeDetectorRef, OnChanges, OnDestroy } from '@angular/core';
import { NglInputElement } from '../element/element';
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
}

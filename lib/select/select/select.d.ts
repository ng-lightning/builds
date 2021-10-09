import { TemplateRef, AfterContentInit, ChangeDetectorRef, OnChanges, OnDestroy } from '@angular/core';
import { NglSelectInput } from '../input/input';
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
}

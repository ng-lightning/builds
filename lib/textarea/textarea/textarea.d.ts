import { TemplateRef, AfterContentInit, ChangeDetectorRef, OnChanges, OnDestroy } from '@angular/core';
import { NglTextareaInput } from '../input/input';
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
}

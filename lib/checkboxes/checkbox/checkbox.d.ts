import { TemplateRef, AfterContentInit, ChangeDetectorRef, OnChanges, OnDestroy } from '@angular/core';
import { NglCheckboxInput } from '../input/input';
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
}

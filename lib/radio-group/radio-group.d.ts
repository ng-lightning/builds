import { TemplateRef, OnChanges, SimpleChanges } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
export declare class NglRadioGroup implements OnChanges {
    label: string | TemplateRef<any>;
    error: string;
    get hasError(): boolean;
    required: boolean;
    get errorId(): string;
    type: 'list' | 'button';
    uid: string;
    type$: BehaviorSubject<"button" | "list">;
    error$: BehaviorSubject<string>;
    ngOnChanges(changes: SimpleChanges): void;
}

import { TemplateRef, OnChanges, SimpleChanges } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
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
    static ɵfac: i0.ɵɵFactoryDeclaration<NglRadioGroup, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NglRadioGroup, "ngl-radio-group,[ngl-radio-group]", never, { "label": "label"; "error": "error"; "required": "required"; "type": "type"; }, {}, never, ["*"], false, never>;
}

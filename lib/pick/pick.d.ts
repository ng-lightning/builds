import { EventEmitter, AfterContentInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
export declare class NglPick implements AfterContentInit {
    selected: any;
    values: BehaviorSubject<any>;
    set setSelected(selected: string);
    nglPickActiveClass: string;
    nglPickChange: EventEmitter<any>;
    nglOptionDestroyed: EventEmitter<any>;
    isMultiple: boolean;
    ngAfterContentInit(): void;
    selectOption(value: any): void;
    optionRemoved(value: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NglPick, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<NglPick, "[nglPick]", never, { "setSelected": "nglPick"; "nglPickActiveClass": "nglPickActiveClass"; "isMultiple": "nglPickMultiple"; }, { "nglPickChange": "nglPickChange"; "nglOptionDestroyed": "nglOptionDestroyed"; }, never, never, false, never>;
}

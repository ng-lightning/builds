import { EventEmitter, AfterContentInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
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
}

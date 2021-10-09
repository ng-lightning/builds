import { EventEmitter } from '@angular/core';
export declare class NglExpandableSection {
    title: string;
    collapsable: boolean;
    open: boolean;
    openChange: EventEmitter<boolean>;
    private _uid;
    get expanded(): boolean;
    get uid(): string;
    toggle(event: Event): void;
}

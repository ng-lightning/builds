import { TemplateRef, EventEmitter } from '@angular/core';
export declare class NglTab {
    templateRef: TemplateRef<any>;
    id: string;
    label: string | TemplateRef<any>;
    activate: EventEmitter<NglTab>;
    deactivate: EventEmitter<NglTab>;
    uid: string;
    private _active;
    constructor(templateRef: TemplateRef<any>);
    set active(active: boolean);
    get active(): boolean;
}

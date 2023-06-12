import { TemplateRef, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
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
    static ɵfac: i0.ɵɵFactoryDeclaration<NglTab, [{ optional: true; }]>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<NglTab, "[ngl-tab]", ["nglTab"], { "id": "id"; "label": "label"; }, { "activate": "activate"; "deactivate": "deactivate"; }, never, never, false, never>;
}

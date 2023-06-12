import { EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export declare class NglExpandableSection {
    title: string;
    collapsable: boolean;
    open: boolean;
    openChange: EventEmitter<boolean>;
    private _uid;
    get expanded(): boolean;
    get uid(): string;
    toggle(event: Event): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NglExpandableSection, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NglExpandableSection, "ngl-expandable-section", never, { "title": "title"; "collapsable": "collapsable"; "open": "open"; }, { "openChange": "openChange"; }, never, ["*"], false, never>;
}

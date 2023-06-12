import { TemplateRef, ChangeDetectorRef, ElementRef } from '@angular/core';
import { NglCheckboxInput } from '../input/input';
import { HostService } from '../../common/host/host.service';
import * as i0 from "@angular/core";
export declare class NglCheckboxOption {
    private cd;
    private element;
    private hostService;
    label: string | TemplateRef<any>;
    input: NglCheckboxInput;
    constructor(cd: ChangeDetectorRef, element: ElementRef, hostService: HostService);
    set type(type: string);
    get type(): string;
    private _type;
    setError(id: string): void;
    private setHostClass;
    static ɵfac: i0.ɵɵFactoryDeclaration<NglCheckboxOption, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NglCheckboxOption, "ngl-checkbox-option", never, { "label": "label"; }, {}, ["input"], ["*"], false, never>;
}

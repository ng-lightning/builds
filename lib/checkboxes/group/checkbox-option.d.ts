import { TemplateRef, ChangeDetectorRef, ElementRef } from '@angular/core';
import { NglCheckboxInput } from '../input/input';
import { HostService } from '../../common/host/host.service';
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
}

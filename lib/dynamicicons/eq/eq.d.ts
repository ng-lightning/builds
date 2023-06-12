import { BaseDynamicIconComponent } from '../base-dynamic-icon';
import * as i0 from "@angular/core";
export declare type NglDynamicIconEqOption = 'play' | 'stop';
export declare class NglDynamicIconEq extends BaseDynamicIconComponent {
    set option(option: NglDynamicIconEqOption);
    get option(): NglDynamicIconEqOption;
    private _option;
    isAnimated(): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<NglDynamicIconEq, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NglDynamicIconEq, "ngl-dynamic-icon-eq", never, { "option": "option"; }, {}, never, never, false, never>;
}

import { BaseDynamicIconComponent } from '../base-dynamic-icon';
import * as i0 from "@angular/core";
export declare type NglDynamicIconScoreOption = 'positive' | 'negative';
export declare class NglDynamicIconScore extends BaseDynamicIconComponent {
    set option(option: NglDynamicIconScoreOption);
    get option(): NglDynamicIconScoreOption;
    private _option;
    static ɵfac: i0.ɵɵFactoryDeclaration<NglDynamicIconScore, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NglDynamicIconScore, "ngl-dynamic-icon-score", never, { "option": "option"; }, {}, never, never, false, never>;
}

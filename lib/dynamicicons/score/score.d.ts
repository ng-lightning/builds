import { BaseDynamicIconComponent } from '../base-dynamic-icon';
export declare type NglDynamicIconScoreOption = 'positive' | 'negative';
export declare class NglDynamicIconScore extends BaseDynamicIconComponent {
    set option(option: NglDynamicIconScoreOption);
    get option(): NglDynamicIconScoreOption;
    private _option;
}

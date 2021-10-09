import { BaseDynamicIconComponent } from '../base-dynamic-icon';
export declare type NglDynamicIconEqOption = 'play' | 'stop';
export declare class NglDynamicIconEq extends BaseDynamicIconComponent {
    set option(option: NglDynamicIconEqOption);
    get option(): NglDynamicIconEqOption;
    private _option;
    isAnimated(): boolean;
}

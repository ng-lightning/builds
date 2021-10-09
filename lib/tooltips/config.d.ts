import { InjectionToken } from '@angular/core';
import { Placement } from '../util/overlay-position';
/** Injection token that can be used to specify default options. */
export declare const NGL_TOOLTIP_CONFIG: InjectionToken<NglTooltipConfig<any>>;
export declare class NglTooltipConfig<D = any> {
    /**
     * Default position relative to host element.
     */
    placement: Placement;
    /**
     * Whether you can interact with the content of the tooltip.
     */
    interactive: boolean;
    /**
     * Whether tooltip will open/close without two-way binding input.
     */
    openAuto: boolean;
    /**
     * Delay in milliseconds until it opens/closes.
     */
    delay: any | any[];
}

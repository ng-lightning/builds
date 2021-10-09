import { InjectionToken } from '@angular/core';
/** Injection token that can be used to specify default options. */
export declare const NGL_RATING_CONFIG: InjectionToken<NglRatingConfig<any>>;
/**
 * Configuration service for the NglRating component.
 */
export declare class NglRatingConfig<D = any> {
    /**
     * The color of the icon when status is "on"
     */
    colorOn: string;
    /**
     * The color of the icon when status is "off"
     */
    colorOff: string;
}

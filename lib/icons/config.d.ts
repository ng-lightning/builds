import { InjectionToken } from '@angular/core';
/** Injection token that can be used to specify default options. */
export declare const NGL_ICON_CONFIG: InjectionToken<NglIconConfig<any>>;
/**
 * Configuration service for the icons components.
 */
export declare class NglIconConfig<D = any> {
    /**
     * The path to LDS assets
     */
    svgPath: string;
}

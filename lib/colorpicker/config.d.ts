import { InjectionToken } from '@angular/core';
/** Injection token that can be used to specify default options. */
export declare const NGL_COLORPICKER_CONFIG: InjectionToken<NglColorpickerConfig<any>>;
export declare class NglColorpickerConfig<D = any> {
    swatchColors: string[];
    variant: 'base' | 'swatches' | 'custom';
}

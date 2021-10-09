import { InjectionToken } from '@angular/core';
/** Injection token that can be used to specify default options. */
export declare const NGL_COMBOBOX_CONFIG: InjectionToken<NglComboboxConfig<any>>;
export declare class NglComboboxConfig<D = any> {
    loadingLabel: string;
    noOptionsFound: string;
    removeSelectedLabel: string;
}

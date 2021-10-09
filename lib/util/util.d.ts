import { ElementRef, Renderer2 } from '@angular/core';
export declare function isInt(value: any): boolean;
export declare function isObject(value: any): boolean;
export declare function uniqueId(prefix?: string): string;
export interface IReplaceClass {
    renderer: Renderer2;
    element: ElementRef;
}
export declare function replaceClass(instance: IReplaceClass, oldClass: string | string[], newClass?: string | string[]): void;
export declare function ngClassCombine(ngClasses: string | string[] | Set<string> | {
    [klass: string]: any;
}, customClasses: {
    [klass: string]: any;
}): {
    [klass: string]: any;
};
/**
   * Check whether value is currently selected.
   *
   * @param selection The value(s) currently selected
   * @param value The value in test, whether is (part of) selection or not
   * @param multiple Whether selections can be have multiple values
   */
export declare function isOptionSelected(value: string | number | any, selection: any | any[], multiple: boolean): boolean;
export declare function addOptionToSelection(value: string | number | any, selection: any | any[], multiple: boolean, clearable?: boolean): any;
export declare function menuItemScroll(container: any, domItem: any, scrollPadding?: number): void;
export declare function trapEvent(event: Event): void;

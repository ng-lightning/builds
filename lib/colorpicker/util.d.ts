export interface IHSV {
    hue: number;
    saturation: number;
    value: number;
}
export declare function getHexFromHsv(hsv: IHSV): string;
export declare function getHexFromRgb({ red, green, blue }: {
    red: any;
    green: any;
    blue: any;
}): string;
export declare function getHsvFromHex(hex: any): {
    hue: any;
    saturation: number;
    value: number;
};
export declare function getRgbFromHex(hex: any): {
    red: number;
    green: number;
    blue: number;
};
export declare function isValidHex(value: string): boolean;

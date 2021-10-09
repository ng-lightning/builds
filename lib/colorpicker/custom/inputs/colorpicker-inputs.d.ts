import { EventEmitter } from '@angular/core';
export declare class NglColorpickerInputs {
    set hex(hex: string);
    get hex(): string;
    hexChange: EventEmitter<string>;
    red: number;
    green: number;
    blue: number;
    uid: string;
    private _hex;
    updateHex(value: any): void;
    onRGB(key: string, value: number): void;
    get isHexInvalid(): boolean;
    isColorNumberValid(key: string): boolean;
    isRGBValid(): boolean;
}

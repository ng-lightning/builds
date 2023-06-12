import { NglDateAdapterBase } from './adapter';
import * as i0 from "@angular/core";
export declare class NglDateAdapter extends NglDateAdapterBase {
    parse(value: string, format: string): Date | null;
    format(date: Date, format: string): string;
    pattern(name: 'big-endian' | 'little-endian' | 'middle-endian', delimiter: string): string;
    private isValidDate;
    static ɵfac: i0.ɵɵFactoryDeclaration<NglDateAdapter, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<NglDateAdapter>;
}

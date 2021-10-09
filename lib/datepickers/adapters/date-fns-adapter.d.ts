import { NglDateAdapterBase } from './adapter';
export declare class NglDateAdapter extends NglDateAdapterBase {
    parse(value: string, format: string): Date | null;
    format(date: Date, format: string): string;
    pattern(name: 'big-endian' | 'little-endian' | 'middle-endian', delimiter: string): string;
    private isValidDate;
}

export interface SimpleChange<T> {
    firstChange: boolean;
    previousValue: T;
    currentValue: T;
    isFirstChange: () => boolean;
}
export declare function OnChange<T = any>(callback?: string): (target: any, key: PropertyKey) => void;

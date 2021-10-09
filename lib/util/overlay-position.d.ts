import { ConnectedOverlayPositionChange, ConnectionPositionPair } from '@angular/cdk/overlay';
export declare type Placement = 'top' | 'top-left' | 'top-left-corner' | 'top-right' | 'top-right-corner' | 'right' | 'right-top' | 'right-top-corner' | 'right-bottom' | 'right-bottom-corner' | 'bottom' | 'bottom-left' | 'bottom-left-corner' | 'bottom-right' | 'bottom-right-corner' | 'left' | 'left-top' | 'left-top-corner' | 'left-bottom' | 'left-bottom-corner';
export declare const POSITION_MAP: {
    [key: string]: {
        position: ConnectionPositionPair;
        nubbin: Placement;
    };
};
export declare const DEFAULT_DROPDOWN_POSITIONS: {
    left: any[];
    right: any[];
};
export declare const DEFAULT_TOOLTIP_POSITIONS: ConnectionPositionPair[];
export declare const DEFAULT_POPOVER_POSITIONS: ConnectionPositionPair[];
export declare function getPlacementName(position: ConnectedOverlayPositionChange, initialPlacement: Placement): string;
export declare function getPlacementStyles(nubbin: Placement): {
    [x: string]: string | boolean;
};

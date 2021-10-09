import { InjectionToken } from '@angular/core';
/** Injection token that can be used to specify default options. */
export const NGL_TOOLTIP_CONFIG = new InjectionToken('ngl-tooltip-config');
export class NglTooltipConfig {
    constructor() {
        /**
         * Default position relative to host element.
         */
        this.placement = 'top';
        /**
         * Whether you can interact with the content of the tooltip.
         */
        this.interactive = false;
        /**
         * Whether tooltip will open/close without two-way binding input.
         */
        this.openAuto = false;
        /**
         * Delay in milliseconds until it opens/closes.
         */
        this.delay = 0;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctbGlnaHRuaW5nL3NyYy9saWIvdG9vbHRpcHMvY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHL0MsbUVBQW1FO0FBQ25FLE1BQU0sQ0FBQyxNQUFNLGtCQUFrQixHQUFHLElBQUksY0FBYyxDQUFtQixvQkFBb0IsQ0FBQyxDQUFDO0FBRTdGLE1BQU0sT0FBTyxnQkFBZ0I7SUFBN0I7UUFFRTs7V0FFRztRQUNILGNBQVMsR0FBYyxLQUFLLENBQUM7UUFFN0I7O1dBRUc7UUFDSCxnQkFBVyxHQUFHLEtBQUssQ0FBQztRQUVwQjs7V0FFRztRQUNILGFBQVEsR0FBRyxLQUFLLENBQUM7UUFFakI7O1dBRUc7UUFDSCxVQUFLLEdBQWdCLENBQUMsQ0FBQztJQUN6QixDQUFDO0NBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3Rpb25Ub2tlbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGxhY2VtZW50IH0gZnJvbSAnLi4vdXRpbC9vdmVybGF5LXBvc2l0aW9uJztcblxuLyoqIEluamVjdGlvbiB0b2tlbiB0aGF0IGNhbiBiZSB1c2VkIHRvIHNwZWNpZnkgZGVmYXVsdCBvcHRpb25zLiAqL1xuZXhwb3J0IGNvbnN0IE5HTF9UT09MVElQX0NPTkZJRyA9IG5ldyBJbmplY3Rpb25Ub2tlbjxOZ2xUb29sdGlwQ29uZmlnPignbmdsLXRvb2x0aXAtY29uZmlnJyk7XG5cbmV4cG9ydCBjbGFzcyBOZ2xUb29sdGlwQ29uZmlnPEQgPSBhbnk+IHtcblxuICAvKipcbiAgICogRGVmYXVsdCBwb3NpdGlvbiByZWxhdGl2ZSB0byBob3N0IGVsZW1lbnQuXG4gICAqL1xuICBwbGFjZW1lbnQ6IFBsYWNlbWVudCA9ICd0b3AnO1xuXG4gIC8qKlxuICAgKiBXaGV0aGVyIHlvdSBjYW4gaW50ZXJhY3Qgd2l0aCB0aGUgY29udGVudCBvZiB0aGUgdG9vbHRpcC5cbiAgICovXG4gIGludGVyYWN0aXZlID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgdG9vbHRpcCB3aWxsIG9wZW4vY2xvc2Ugd2l0aG91dCB0d28td2F5IGJpbmRpbmcgaW5wdXQuXG4gICAqL1xuICBvcGVuQXV0byA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBEZWxheSBpbiBtaWxsaXNlY29uZHMgdW50aWwgaXQgb3BlbnMvY2xvc2VzLlxuICAgKi9cbiAgZGVsYXk6IGFueSB8IGFueVtdID0gMDtcbn1cbiJdfQ==
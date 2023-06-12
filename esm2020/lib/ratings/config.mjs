import { InjectionToken } from '@angular/core';
/** Injection token that can be used to specify default options. */
export const NGL_RATING_CONFIG = new InjectionToken('ngl-rating-config');
/**
 * Configuration service for the NglRating component.
 */
export class NglRatingConfig {
    constructor() {
        /**
         * The color of the icon when status is "on"
         */
        this.colorOn = '#FFB75D';
        /**
         * The color of the icon when status is "off"
         */
        this.colorOff = '54698D';
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctbGlnaHRuaW5nL3NyYy9saWIvcmF0aW5ncy9jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUvQyxtRUFBbUU7QUFDbkUsTUFBTSxDQUFDLE1BQU0saUJBQWlCLEdBQUcsSUFBSSxjQUFjLENBQWtCLG1CQUFtQixDQUFDLENBQUM7QUFFMUY7O0dBRUc7QUFDSCxNQUFNLE9BQU8sZUFBZTtJQUE1QjtRQUVFOztXQUVHO1FBQ0gsWUFBTyxHQUFHLFNBQVMsQ0FBQztRQUVwQjs7V0FFRztRQUNILGFBQVEsR0FBRyxRQUFRLENBQUM7SUFFdEIsQ0FBQztDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0aW9uVG9rZW4gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqIEluamVjdGlvbiB0b2tlbiB0aGF0IGNhbiBiZSB1c2VkIHRvIHNwZWNpZnkgZGVmYXVsdCBvcHRpb25zLiAqL1xuZXhwb3J0IGNvbnN0IE5HTF9SQVRJTkdfQ09ORklHID0gbmV3IEluamVjdGlvblRva2VuPE5nbFJhdGluZ0NvbmZpZz4oJ25nbC1yYXRpbmctY29uZmlnJyk7XG5cbi8qKlxuICogQ29uZmlndXJhdGlvbiBzZXJ2aWNlIGZvciB0aGUgTmdsUmF0aW5nIGNvbXBvbmVudC5cbiAqL1xuZXhwb3J0IGNsYXNzIE5nbFJhdGluZ0NvbmZpZzxEID0gYW55PiB7XG5cbiAgLyoqXG4gICAqIFRoZSBjb2xvciBvZiB0aGUgaWNvbiB3aGVuIHN0YXR1cyBpcyBcIm9uXCJcbiAgICovXG4gIGNvbG9yT24gPSAnI0ZGQjc1RCc7XG5cbiAgLyoqXG4gICAqIFRoZSBjb2xvciBvZiB0aGUgaWNvbiB3aGVuIHN0YXR1cyBpcyBcIm9mZlwiXG4gICAqL1xuICBjb2xvck9mZiA9ICc1NDY5OEQnO1xuXG59XG4iXX0=
import { EventEmitter } from '@angular/core';
export function hasObservers(output) {
    function propDecorator(target, propName) {
        const privatePropName = `$$__${propName}`;
        if (Object.prototype.hasOwnProperty.call(target, privatePropName)) {
            console.warn(`[ng-lightning]: The prop "${privatePropName}" already exists, it will be overridden by ${propName} decorator.`);
        }
        Object.defineProperty(target, privatePropName, {
            configurable: true,
            writable: true
        });
        Object.defineProperty(target, propName, {
            get() {
                if (!(this[output] instanceof EventEmitter)) {
                    throw Error(`[ng-lightning] ${target.constructor.name}: "${output}" is not an EventEmitter`);
                }
                return this[output].observers.length > 0;
            },
            set() {
                console.warn(`[ng-lightning] ${target.constructor.name}: "${propName}" is readonly and cannot be assigned a value`);
            }
        });
    }
    return propDecorator;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFzT2JzZXJ2ZXJzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctbGlnaHRuaW5nL3NyYy9saWIvdXRpbC9oYXNPYnNlcnZlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU3QyxNQUFNLFVBQVUsWUFBWSxDQUFDLE1BQWM7SUFFekMsU0FBUyxhQUFhLENBQUMsTUFBVyxFQUFFLFFBQWdCO1FBQ2xELE1BQU0sZUFBZSxHQUFHLE9BQU8sUUFBUSxFQUFFLENBQUM7UUFFMUMsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLGVBQWUsQ0FBQyxFQUFFO1lBQ2pFLE9BQU8sQ0FBQyxJQUFJLENBQUMsNkJBQTZCLGVBQWUsOENBQThDLFFBQVEsYUFBYSxDQUFDLENBQUM7U0FDL0g7UUFFRCxNQUFNLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxlQUFlLEVBQUU7WUFDN0MsWUFBWSxFQUFFLElBQUk7WUFDbEIsUUFBUSxFQUFFLElBQUk7U0FDZixDQUFDLENBQUM7UUFFSCxNQUFNLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxRQUFRLEVBQUU7WUFDdEMsR0FBRztnQkFDRCxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksWUFBWSxDQUFDLEVBQUU7b0JBQzNDLE1BQU0sS0FBSyxDQUFDLGtCQUFrQixNQUFNLENBQUMsV0FBVyxDQUFDLElBQUksTUFBTSxNQUFNLDBCQUEwQixDQUFDLENBQUM7aUJBQzlGO2dCQUNELE9BQTJCLElBQUksQ0FBQyxNQUFNLENBQUUsQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztZQUNoRSxDQUFDO1lBQ0QsR0FBRztnQkFDRCxPQUFPLENBQUMsSUFBSSxDQUFDLGtCQUFrQixNQUFNLENBQUMsV0FBVyxDQUFDLElBQUksTUFBTSxRQUFRLDhDQUE4QyxDQUFDLENBQUM7WUFDdEgsQ0FBQztTQUNGLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxPQUFPLGFBQWEsQ0FBQztBQUN2QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBoYXNPYnNlcnZlcnMob3V0cHV0OiBzdHJpbmcpIHtcblxuICBmdW5jdGlvbiBwcm9wRGVjb3JhdG9yKHRhcmdldDogYW55LCBwcm9wTmFtZTogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3QgcHJpdmF0ZVByb3BOYW1lID0gYCQkX18ke3Byb3BOYW1lfWA7XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHRhcmdldCwgcHJpdmF0ZVByb3BOYW1lKSkge1xuICAgICAgY29uc29sZS53YXJuKGBbbmctbGlnaHRuaW5nXTogVGhlIHByb3AgXCIke3ByaXZhdGVQcm9wTmFtZX1cIiBhbHJlYWR5IGV4aXN0cywgaXQgd2lsbCBiZSBvdmVycmlkZGVuIGJ5ICR7cHJvcE5hbWV9IGRlY29yYXRvci5gKTtcbiAgICB9XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBwcml2YXRlUHJvcE5hbWUsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBwcm9wTmFtZSwge1xuICAgICAgZ2V0KCk6IGJvb2xlYW4ge1xuICAgICAgICBpZiAoISh0aGlzW291dHB1dF0gaW5zdGFuY2VvZiBFdmVudEVtaXR0ZXIpKSB7XG4gICAgICAgICAgdGhyb3cgRXJyb3IoYFtuZy1saWdodG5pbmddICR7dGFyZ2V0LmNvbnN0cnVjdG9yLm5hbWV9OiBcIiR7b3V0cHV0fVwiIGlzIG5vdCBhbiBFdmVudEVtaXR0ZXJgKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKDxFdmVudEVtaXR0ZXI8YW55Pj50aGlzW291dHB1dF0pLm9ic2VydmVycy5sZW5ndGggPiAwO1xuICAgICAgfSxcbiAgICAgIHNldCgpOiB2b2lkIHtcbiAgICAgICAgY29uc29sZS53YXJuKGBbbmctbGlnaHRuaW5nXSAke3RhcmdldC5jb25zdHJ1Y3Rvci5uYW1lfTogXCIke3Byb3BOYW1lfVwiIGlzIHJlYWRvbmx5IGFuZCBjYW5ub3QgYmUgYXNzaWduZWQgYSB2YWx1ZWApO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHByb3BEZWNvcmF0b3I7XG59XG4iXX0=
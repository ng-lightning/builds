import { Directive, Input, TemplateRef, Output, EventEmitter, Optional } from '@angular/core';
import { uniqueId } from '../util/util';
/*
 * <ng-template ngl-tab label="...">
 *    Content goes here...
 * </ng-template>
 */
export class NglTab {
    constructor(templateRef) {
        this.templateRef = templateRef;
        this.activate = new EventEmitter();
        this.deactivate = new EventEmitter();
        this.uid = uniqueId('tab');
        this._active = false;
    }
    set active(active) {
        if (active === this._active) {
            return;
        }
        this._active = active;
        if (active) {
            this.activate.emit(this);
        }
        else {
            this.deactivate.emit(this);
        }
    }
    get active() {
        return this._active;
    }
}
NglTab.decorators = [
    { type: Directive, args: [{
                // tslint:disable-next-line:directive-selector
                selector: '[ngl-tab]',
                exportAs: 'nglTab',
            },] }
];
NglTab.ctorParameters = () => [
    { type: TemplateRef, decorators: [{ type: Optional }] }
];
NglTab.propDecorators = {
    id: [{ type: Input }],
    label: [{ type: Input }],
    activate: [{ type: Output }],
    deactivate: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctbGlnaHRuaW5nL3NyYy9saWIvdGFicy90YWIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlGLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFFeEM7Ozs7R0FJRztBQU1ILE1BQU0sT0FBTyxNQUFNO0lBVWpCLFlBQStCLFdBQTZCO1FBQTdCLGdCQUFXLEdBQVgsV0FBVyxDQUFrQjtRQVBsRCxhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUN0QyxlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUVsRCxRQUFHLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRWQsWUFBTyxHQUFHLEtBQUssQ0FBQztJQUV1QyxDQUFDO0lBRWhFLElBQUksTUFBTSxDQUFDLE1BQWU7UUFDeEIsSUFBSSxNQUFNLEtBQU0sSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUFFLE9BQU87U0FBRTtRQUN6QyxJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztRQUN0QixJQUFJLE1BQU0sRUFBRTtZQUNWLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzFCO2FBQU07WUFDTCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUM1QjtJQUNILENBQUM7SUFFRCxJQUFJLE1BQU07UUFDUixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDdEIsQ0FBQzs7O1lBN0JGLFNBQVMsU0FBQztnQkFDVCw4Q0FBOEM7Z0JBQzlDLFFBQVEsRUFBRSxXQUFXO2dCQUNyQixRQUFRLEVBQUUsUUFBUTthQUNuQjs7O1lBWjBCLFdBQVcsdUJBdUJ2QixRQUFROzs7aUJBVHBCLEtBQUs7b0JBQ0wsS0FBSzt1QkFDTCxNQUFNO3lCQUNOLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBUZW1wbGF0ZVJlZiwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyB1bmlxdWVJZCB9IGZyb20gJy4uL3V0aWwvdXRpbCc7XG5cbi8qXG4gKiA8bmctdGVtcGxhdGUgbmdsLXRhYiBsYWJlbD1cIi4uLlwiPlxuICogICAgQ29udGVudCBnb2VzIGhlcmUuLi5cbiAqIDwvbmctdGVtcGxhdGU+XG4gKi9cbkBEaXJlY3RpdmUoe1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6ZGlyZWN0aXZlLXNlbGVjdG9yXG4gIHNlbGVjdG9yOiAnW25nbC10YWJdJyxcbiAgZXhwb3J0QXM6ICduZ2xUYWInLFxufSlcbmV4cG9ydCBjbGFzcyBOZ2xUYWIge1xuICBASW5wdXQoKSBpZDogc3RyaW5nO1xuICBASW5wdXQoKSBsYWJlbDogc3RyaW5nIHwgVGVtcGxhdGVSZWY8YW55PjtcbiAgQE91dHB1dCgpIGFjdGl2YXRlID0gbmV3IEV2ZW50RW1pdHRlcjxOZ2xUYWI+KCk7XG4gIEBPdXRwdXQoKSBkZWFjdGl2YXRlID0gbmV3IEV2ZW50RW1pdHRlcjxOZ2xUYWI+KCk7XG5cbiAgdWlkID0gdW5pcXVlSWQoJ3RhYicpO1xuXG4gIHByaXZhdGUgX2FjdGl2ZSA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIHB1YmxpYyB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55Pikge31cblxuICBzZXQgYWN0aXZlKGFjdGl2ZTogYm9vbGVhbikge1xuICAgIGlmIChhY3RpdmUgPT09ICB0aGlzLl9hY3RpdmUpIHsgcmV0dXJuOyB9XG4gICAgdGhpcy5fYWN0aXZlID0gYWN0aXZlO1xuICAgIGlmIChhY3RpdmUpIHtcbiAgICAgIHRoaXMuYWN0aXZhdGUuZW1pdCh0aGlzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kZWFjdGl2YXRlLmVtaXQodGhpcyk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IGFjdGl2ZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fYWN0aXZlO1xuICB9XG59XG4iXX0=
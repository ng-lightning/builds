import { Directive, Input, Output, EventEmitter, Optional } from '@angular/core';
import { uniqueId } from '../util/util';
import * as i0 from "@angular/core";
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
NglTab.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglTab, deps: [{ token: i0.TemplateRef, optional: true }], target: i0.ɵɵFactoryTarget.Directive });
NglTab.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.2.9", type: NglTab, selector: "[ngl-tab]", inputs: { id: "id", label: "label" }, outputs: { activate: "activate", deactivate: "deactivate" }, exportAs: ["nglTab"], ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglTab, decorators: [{
            type: Directive,
            args: [{
                    // eslint-disable-next-line @angular-eslint/directive-selector
                    selector: '[ngl-tab]',
                    exportAs: 'nglTab',
                }]
        }], ctorParameters: function () { return [{ type: i0.TemplateRef, decorators: [{
                    type: Optional
                }] }]; }, propDecorators: { id: [{
                type: Input
            }], label: [{
                type: Input
            }], activate: [{
                type: Output
            }], deactivate: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctbGlnaHRuaW5nL3NyYy9saWIvdGFicy90YWIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQWUsTUFBTSxFQUFFLFlBQVksRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUYsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGNBQWMsQ0FBQzs7QUFFeEM7Ozs7R0FJRztBQU1ILE1BQU0sT0FBTyxNQUFNO0lBVWpCLFlBQStCLFdBQTZCO1FBQTdCLGdCQUFXLEdBQVgsV0FBVyxDQUFrQjtRQVBsRCxhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUN0QyxlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUVsRCxRQUFHLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRWQsWUFBTyxHQUFHLEtBQUssQ0FBQztJQUV1QyxDQUFDO0lBRWhFLElBQUksTUFBTSxDQUFDLE1BQWU7UUFDeEIsSUFBSSxNQUFNLEtBQU0sSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUFFLE9BQU87U0FBRTtRQUN6QyxJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztRQUN0QixJQUFJLE1BQU0sRUFBRTtZQUNWLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzFCO2FBQU07WUFDTCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUM1QjtJQUNILENBQUM7SUFFRCxJQUFJLE1BQU07UUFDUixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDdEIsQ0FBQzs7bUdBeEJVLE1BQU07dUZBQU4sTUFBTTsyRkFBTixNQUFNO2tCQUxsQixTQUFTO21CQUFDO29CQUNULDhEQUE4RDtvQkFDOUQsUUFBUSxFQUFFLFdBQVc7b0JBQ3JCLFFBQVEsRUFBRSxRQUFRO2lCQUNuQjs7MEJBV2MsUUFBUTs0Q0FUWixFQUFFO3NCQUFWLEtBQUs7Z0JBQ0csS0FBSztzQkFBYixLQUFLO2dCQUNJLFFBQVE7c0JBQWpCLE1BQU07Z0JBQ0csVUFBVTtzQkFBbkIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIFRlbXBsYXRlUmVmLCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHVuaXF1ZUlkIH0gZnJvbSAnLi4vdXRpbC91dGlsJztcblxuLypcbiAqIDxuZy10ZW1wbGF0ZSBuZ2wtdGFiIGxhYmVsPVwiLi4uXCI+XG4gKiAgICBDb250ZW50IGdvZXMgaGVyZS4uLlxuICogPC9uZy10ZW1wbGF0ZT5cbiAqL1xuQERpcmVjdGl2ZSh7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAYW5ndWxhci1lc2xpbnQvZGlyZWN0aXZlLXNlbGVjdG9yXG4gIHNlbGVjdG9yOiAnW25nbC10YWJdJyxcbiAgZXhwb3J0QXM6ICduZ2xUYWInLFxufSlcbmV4cG9ydCBjbGFzcyBOZ2xUYWIge1xuICBASW5wdXQoKSBpZDogc3RyaW5nO1xuICBASW5wdXQoKSBsYWJlbDogc3RyaW5nIHwgVGVtcGxhdGVSZWY8YW55PjtcbiAgQE91dHB1dCgpIGFjdGl2YXRlID0gbmV3IEV2ZW50RW1pdHRlcjxOZ2xUYWI+KCk7XG4gIEBPdXRwdXQoKSBkZWFjdGl2YXRlID0gbmV3IEV2ZW50RW1pdHRlcjxOZ2xUYWI+KCk7XG5cbiAgdWlkID0gdW5pcXVlSWQoJ3RhYicpO1xuXG4gIHByaXZhdGUgX2FjdGl2ZSA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIHB1YmxpYyB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55Pikge31cblxuICBzZXQgYWN0aXZlKGFjdGl2ZTogYm9vbGVhbikge1xuICAgIGlmIChhY3RpdmUgPT09ICB0aGlzLl9hY3RpdmUpIHsgcmV0dXJuOyB9XG4gICAgdGhpcy5fYWN0aXZlID0gYWN0aXZlO1xuICAgIGlmIChhY3RpdmUpIHtcbiAgICAgIHRoaXMuYWN0aXZhdGUuZW1pdCh0aGlzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kZWFjdGl2YXRlLmVtaXQodGhpcyk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IGFjdGl2ZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fYWN0aXZlO1xuICB9XG59XG4iXX0=
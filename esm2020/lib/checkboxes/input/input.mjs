import { Directive, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { toBoolean } from '../../util/convert';
import { uniqueId } from '../../util/util';
import * as i0 from "@angular/core";
export class NglCheckboxInput {
    constructor(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.ɵRequiredSubject = new BehaviorSubject(false);
        if (!this.el.nativeElement.id) {
            this.renderer.setAttribute(this.el.nativeElement, 'id', uniqueId('checkbox'));
        }
    }
    set describedBy(value) {
        this.renderer.setAttribute(this.el.nativeElement, 'aria-describedby', value);
    }
    set required(required) {
        this.ɵRequiredSubject.next(toBoolean(required));
    }
    get id() {
        return this.el.nativeElement.id;
    }
    addClass(klass) {
        this.renderer.addClass(this.el.nativeElement, klass);
    }
}
NglCheckboxInput.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglCheckboxInput, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Directive });
NglCheckboxInput.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.2.9", type: NglCheckboxInput, selector: "input[ngl][type=checkbox]", inputs: { required: "required" }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglCheckboxInput, decorators: [{
            type: Directive,
            args: [{
                    selector: 'input[ngl][type=checkbox]',
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }]; }, propDecorators: { required: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1saWdodG5pbmcvc3JjL2xpYi9jaGVja2JveGVzL2lucHV0L2lucHV0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWMsS0FBSyxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdkMsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7QUFLM0MsTUFBTSxPQUFPLGdCQUFnQjtJQVkzQixZQUFvQixFQUFjLEVBQVUsUUFBbUI7UUFBM0MsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUFVLGFBQVEsR0FBUixRQUFRLENBQVc7UUFWL0QscUJBQWdCLEdBQUcsSUFBSSxlQUFlLENBQVUsS0FBSyxDQUFDLENBQUM7UUFXckQsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLEVBQUUsRUFBRTtZQUM3QixJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxJQUFJLEVBQUUsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7U0FDL0U7SUFDSCxDQUFDO0lBWkQsSUFBSSxXQUFXLENBQUMsS0FBYTtRQUMzQixJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxrQkFBa0IsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUMvRSxDQUFDO0lBRUQsSUFBYSxRQUFRLENBQUMsUUFBYTtRQUNqQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFRRCxJQUFJLEVBQUU7UUFDSixPQUFPLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQztJQUNsQyxDQUFDO0lBRUQsUUFBUSxDQUFDLEtBQWE7UUFDcEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDdkQsQ0FBQzs7NkdBeEJVLGdCQUFnQjtpR0FBaEIsZ0JBQWdCOzJGQUFoQixnQkFBZ0I7a0JBSDVCLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLDJCQUEyQjtpQkFDdEM7eUhBU2MsUUFBUTtzQkFBcEIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSW5wdXQsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0b0Jvb2xlYW4gfSBmcm9tICcuLi8uLi91dGlsL2NvbnZlcnQnO1xuaW1wb3J0IHsgdW5pcXVlSWQgfSBmcm9tICcuLi8uLi91dGlsL3V0aWwnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdpbnB1dFtuZ2xdW3R5cGU9Y2hlY2tib3hdJyxcbn0pXG5leHBvcnQgY2xhc3MgTmdsQ2hlY2tib3hJbnB1dCB7XG5cbiAgybVSZXF1aXJlZFN1YmplY3QgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+KGZhbHNlKTtcblxuICBzZXQgZGVzY3JpYmVkQnkodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgJ2FyaWEtZGVzY3JpYmVkYnknLCB2YWx1ZSk7XG4gIH1cblxuICBASW5wdXQoKSBzZXQgcmVxdWlyZWQocmVxdWlyZWQ6IGFueSkge1xuICAgIHRoaXMuybVSZXF1aXJlZFN1YmplY3QubmV4dCh0b0Jvb2xlYW4ocmVxdWlyZWQpKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMikge1xuICAgIGlmICghdGhpcy5lbC5uYXRpdmVFbGVtZW50LmlkKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZSh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsICdpZCcsIHVuaXF1ZUlkKCdjaGVja2JveCcpKTtcbiAgICB9XG4gIH1cblxuICBnZXQgaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZWwubmF0aXZlRWxlbWVudC5pZDtcbiAgfVxuXG4gIGFkZENsYXNzKGtsYXNzOiBzdHJpbmcpIHtcbiAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWwubmF0aXZlRWxlbWVudCwga2xhc3MpO1xuICB9XG59XG4iXX0=
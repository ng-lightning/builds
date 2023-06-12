import { Directive, HostBinding } from '@angular/core';
import { uniqueId } from '../../util/util';
import * as i0 from "@angular/core";
export class NglRadioInput {
    constructor(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        if (!this.el.nativeElement.id) {
            this.renderer.setAttribute(this.el.nativeElement, 'id', uniqueId('radio'));
        }
    }
    get id() {
        return this.el.nativeElement.id;
    }
}
NglRadioInput.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglRadioInput, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Directive });
NglRadioInput.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.2.9", type: NglRadioInput, selector: "input[ngl][type=radio]", host: { properties: { "attr.name": "this.name", "attr.aria-describedby": "this.describedBy" } }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglRadioInput, decorators: [{
            type: Directive,
            args: [{
                    selector: 'input[ngl][type=radio]',
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }]; }, propDecorators: { name: [{
                type: HostBinding,
                args: ['attr.name']
            }], describedBy: [{
                type: HostBinding,
                args: ['attr.aria-describedby']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1saWdodG5pbmcvc3JjL2xpYi9yYWRpby1ncm91cC9pbnB1dC9pbnB1dC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUF5QixXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDOztBQUszQyxNQUFNLE9BQU8sYUFBYTtJQU14QixZQUFvQixFQUFjLEVBQVUsUUFBbUI7UUFBM0MsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUFVLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDN0QsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLEVBQUUsRUFBRTtZQUM3QixJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxJQUFJLEVBQUUsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7U0FDNUU7SUFDSCxDQUFDO0lBRUQsSUFBSSxFQUFFO1FBQ0osT0FBTyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUM7SUFDbEMsQ0FBQzs7MEdBZFUsYUFBYTs4RkFBYixhQUFhOzJGQUFiLGFBQWE7a0JBSHpCLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLHdCQUF3QjtpQkFDbkM7eUhBRzJCLElBQUk7c0JBQTdCLFdBQVc7dUJBQUMsV0FBVztnQkFFYyxXQUFXO3NCQUFoRCxXQUFXO3VCQUFDLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgUmVuZGVyZXIyLCBIb3N0QmluZGluZyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgdW5pcXVlSWQgfSBmcm9tICcuLi8uLi91dGlsL3V0aWwnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdpbnB1dFtuZ2xdW3R5cGU9cmFkaW9dJyxcbn0pXG5leHBvcnQgY2xhc3MgTmdsUmFkaW9JbnB1dCB7XG5cbiAgQEhvc3RCaW5kaW5nKCdhdHRyLm5hbWUnKSBuYW1lOiBzdHJpbmc7XG5cbiAgQEhvc3RCaW5kaW5nKCdhdHRyLmFyaWEtZGVzY3JpYmVkYnknKSBkZXNjcmliZWRCeTogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMikge1xuICAgIGlmICghdGhpcy5lbC5uYXRpdmVFbGVtZW50LmlkKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZSh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsICdpZCcsIHVuaXF1ZUlkKCdyYWRpbycpKTtcbiAgICB9XG4gIH1cblxuICBnZXQgaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZWwubmF0aXZlRWxlbWVudC5pZDtcbiAgfVxufVxuIl19
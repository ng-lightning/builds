import { Directive, HostBinding, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { toBoolean } from '../../util/convert';
import { uniqueId } from '../../util/util';
import * as i0 from "@angular/core";
export class NglInputElement {
    constructor(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.ɵRequiredSubject = new BehaviorSubject(false);
        if (!this.el.nativeElement.id) {
            this.renderer.setAttribute(this.el.nativeElement, 'id', uniqueId('input'));
        }
    }
    set required(required) {
        this.ɵRequiredSubject.next(toBoolean(required));
    }
    get id() {
        return this.el.nativeElement.id;
    }
}
NglInputElement.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglInputElement, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Directive });
NglInputElement.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.2.9", type: NglInputElement, selector: "input[ngl]:not([type=checkbox]):not([type=radio])", inputs: { required: "required" }, host: { properties: { "class.slds-input": "true", "attr.aria-describedby": "this.describedBy" } }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglInputElement, decorators: [{
            type: Directive,
            args: [{
                    selector: 'input[ngl]:not([type=checkbox]):not([type=radio])',
                    host: {
                        '[class.slds-input]': 'true',
                    }
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }]; }, propDecorators: { describedBy: [{
                type: HostBinding,
                args: ['attr.aria-describedby']
            }], required: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWxlbWVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nLWxpZ2h0bmluZy9zcmMvbGliL2lucHV0L2VsZW1lbnQvZWxlbWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBYyxLQUFLLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFDckYsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN2QyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDOztBQVEzQyxNQUFNLE9BQU8sZUFBZTtJQVUxQixZQUFvQixFQUFjLEVBQVUsUUFBbUI7UUFBM0MsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUFVLGFBQVEsR0FBUixRQUFRLENBQVc7UUFSL0QscUJBQWdCLEdBQUcsSUFBSSxlQUFlLENBQVUsS0FBSyxDQUFDLENBQUM7UUFTckQsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLEVBQUUsRUFBRTtZQUM3QixJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxJQUFJLEVBQUUsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7U0FDNUU7SUFDSCxDQUFDO0lBUkQsSUFBYSxRQUFRLENBQUMsUUFBYTtRQUNqQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFRRCxJQUFJLEVBQUU7UUFDSixPQUFPLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQztJQUNsQyxDQUFDOzs0R0FsQlUsZUFBZTtnR0FBZixlQUFlOzJGQUFmLGVBQWU7a0JBTjNCLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLG1EQUFtRDtvQkFDN0QsSUFBSSxFQUFFO3dCQUNKLG9CQUFvQixFQUFFLE1BQU07cUJBQzdCO2lCQUNGO3lIQUt1QyxXQUFXO3NCQUFoRCxXQUFXO3VCQUFDLHVCQUF1QjtnQkFFdkIsUUFBUTtzQkFBcEIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSG9zdEJpbmRpbmcsIEVsZW1lbnRSZWYsIElucHV0LCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdG9Cb29sZWFuIH0gZnJvbSAnLi4vLi4vdXRpbC9jb252ZXJ0JztcbmltcG9ydCB7IHVuaXF1ZUlkIH0gZnJvbSAnLi4vLi4vdXRpbC91dGlsJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnaW5wdXRbbmdsXTpub3QoW3R5cGU9Y2hlY2tib3hdKTpub3QoW3R5cGU9cmFkaW9dKScsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLnNsZHMtaW5wdXRdJzogJ3RydWUnLFxuICB9XG59KVxuZXhwb3J0IGNsYXNzIE5nbElucHV0RWxlbWVudCB7XG5cbiAgybVSZXF1aXJlZFN1YmplY3QgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+KGZhbHNlKTtcblxuICBASG9zdEJpbmRpbmcoJ2F0dHIuYXJpYS1kZXNjcmliZWRieScpIGRlc2NyaWJlZEJ5OiBzdHJpbmc7XG5cbiAgQElucHV0KCkgc2V0IHJlcXVpcmVkKHJlcXVpcmVkOiBhbnkpIHtcbiAgICB0aGlzLsm1UmVxdWlyZWRTdWJqZWN0Lm5leHQodG9Cb29sZWFuKHJlcXVpcmVkKSk7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmLCBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHtcbiAgICBpZiAoIXRoaXMuZWwubmF0aXZlRWxlbWVudC5pZCkge1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUodGhpcy5lbC5uYXRpdmVFbGVtZW50LCAnaWQnLCB1bmlxdWVJZCgnaW5wdXQnKSk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IGlkKCkge1xuICAgIHJldHVybiB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuaWQ7XG4gIH1cbn1cbiJdfQ==
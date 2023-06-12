import { Directive, HostBinding, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { toBoolean } from '../../util/convert';
import { uniqueId } from '../../util/util';
import * as i0 from "@angular/core";
export class NglTextareaInput {
    constructor(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.ɵRequiredSubject = new BehaviorSubject(false);
        if (!this.el.nativeElement.id) {
            this.renderer.setAttribute(this.el.nativeElement, 'id', uniqueId('textarea'));
        }
    }
    set required(required) {
        this.ɵRequiredSubject.next(toBoolean(required));
    }
    get id() {
        return this.el.nativeElement.id;
    }
}
NglTextareaInput.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglTextareaInput, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Directive });
NglTextareaInput.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.2.9", type: NglTextareaInput, selector: "textarea[ngl]", inputs: { required: "required" }, host: { properties: { "class.slds-textarea": "true", "attr.aria-describedby": "this.describedBy" } }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglTextareaInput, decorators: [{
            type: Directive,
            args: [{
                    selector: 'textarea[ngl]',
                    host: {
                        '[class.slds-textarea]': 'true',
                    },
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }]; }, propDecorators: { describedBy: [{
                type: HostBinding,
                args: ['attr.aria-describedby']
            }], required: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1saWdodG5pbmcvc3JjL2xpYi90ZXh0YXJlYS9pbnB1dC9pbnB1dC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBYyxLQUFLLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFDckYsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN2QyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDOztBQVEzQyxNQUFNLE9BQU8sZ0JBQWdCO0lBVTNCLFlBQW9CLEVBQWMsRUFBVSxRQUFtQjtRQUEzQyxPQUFFLEdBQUYsRUFBRSxDQUFZO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQVIvRCxxQkFBZ0IsR0FBRyxJQUFJLGVBQWUsQ0FBVSxLQUFLLENBQUMsQ0FBQztRQVNyRCxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsRUFBRSxFQUFFO1lBQzdCLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLElBQUksRUFBRSxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztTQUMvRTtJQUNILENBQUM7SUFSRCxJQUFhLFFBQVEsQ0FBQyxRQUFhO1FBQ2pDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQVFELElBQUksRUFBRTtRQUNKLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDO0lBQ2xDLENBQUM7OzZHQWxCVSxnQkFBZ0I7aUdBQWhCLGdCQUFnQjsyRkFBaEIsZ0JBQWdCO2tCQU41QixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxlQUFlO29CQUN6QixJQUFJLEVBQUU7d0JBQ0osdUJBQXVCLEVBQUUsTUFBTTtxQkFDaEM7aUJBQ0Y7eUhBS3VDLFdBQVc7c0JBQWhELFdBQVc7dUJBQUMsdUJBQXVCO2dCQUV2QixRQUFRO3NCQUFwQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBIb3N0QmluZGluZywgRWxlbWVudFJlZiwgSW5wdXQsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0b0Jvb2xlYW4gfSBmcm9tICcuLi8uLi91dGlsL2NvbnZlcnQnO1xuaW1wb3J0IHsgdW5pcXVlSWQgfSBmcm9tICcuLi8uLi91dGlsL3V0aWwnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICd0ZXh0YXJlYVtuZ2xdJyxcbiAgaG9zdDoge1xuICAgICdbY2xhc3Muc2xkcy10ZXh0YXJlYV0nOiAndHJ1ZScsXG4gIH0sXG59KVxuZXhwb3J0IGNsYXNzIE5nbFRleHRhcmVhSW5wdXQge1xuXG4gIMm1UmVxdWlyZWRTdWJqZWN0ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPihmYWxzZSk7XG5cbiAgQEhvc3RCaW5kaW5nKCdhdHRyLmFyaWEtZGVzY3JpYmVkYnknKSBkZXNjcmliZWRCeTogc3RyaW5nO1xuXG4gIEBJbnB1dCgpIHNldCByZXF1aXJlZChyZXF1aXJlZDogYW55KSB7XG4gICAgdGhpcy7JtVJlcXVpcmVkU3ViamVjdC5uZXh0KHRvQm9vbGVhbihyZXF1aXJlZCkpO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZiwgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyKSB7XG4gICAgaWYgKCF0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuaWQpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgJ2lkJywgdW5pcXVlSWQoJ3RleHRhcmVhJykpO1xuICAgIH1cbiAgfVxuXG4gIGdldCBpZCgpIHtcbiAgICByZXR1cm4gdGhpcy5lbC5uYXRpdmVFbGVtZW50LmlkO1xuICB9XG59XG4iXX0=
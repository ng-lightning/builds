import { Component, Input, ChangeDetectionStrategy, Renderer2, ElementRef } from '@angular/core';
import { uniqueId } from '../util/util';
export class NglCarouselImage {
    constructor(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.uid = uniqueId('carousel-image');
        this.renderer.setAttribute(this.el.nativeElement, 'id', this.uid);
        this.renderer.addClass(this.el.nativeElement, 'slds-carousel__panel');
        this.renderer.setAttribute(this.el.nativeElement, 'role', 'tabpanel');
    }
    set labelledby(labelledby) {
        this.renderer.setAttribute(this.el.nativeElement, 'aria-labelledby', labelledby);
    }
    set active(active) {
        this.renderer.setAttribute(this.el.nativeElement, 'aria-hidden', `${!active}`);
    }
}
NglCarouselImage.decorators = [
    { type: Component, args: [{
                selector: 'ngl-carousel-image',
                template: "<a class=\"slds-carousel__panel-action slds-text-link_reset\" href=\"javascript:void(0);\" [attr.tabindex]=\"active ? 0 : -1\">\n  <div class=\"slds-carousel__image\"><img [src]=\"src\" [attr.alt]=\"alternativeText || null\"></div>\n  <div class=\"slds-carousel__content\">\n    <h2 class=\"slds-carousel__content-title\" [nglInternalOutlet]=\"header\"></h2>\n    <p [nglInternalOutlet]=\"description\"></p>\n  </div></a>",
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
NglCarouselImage.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
NglCarouselImage.propDecorators = {
    src: [{ type: Input }],
    header: [{ type: Input }],
    description: [{ type: Input }],
    alternativeText: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2Fyb3VzZWwtaW1hZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1saWdodG5pbmcvc3JjL2xpYi9jYXJvdXNlbC9jYXJvdXNlbC1pbWFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSx1QkFBdUIsRUFBZSxTQUFTLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlHLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFPeEMsTUFBTSxPQUFPLGdCQUFnQjtJQWdDM0IsWUFBb0IsRUFBYyxFQUFVLFFBQW1CO1FBQTNDLE9BQUUsR0FBRixFQUFFLENBQVk7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBVi9ELFFBQUcsR0FBRyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQVcvQixJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2xFLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLHNCQUFzQixDQUFDLENBQUM7UUFDdEUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsTUFBTSxFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBQ3hFLENBQUM7SUFaRCxJQUFJLFVBQVUsQ0FBQyxVQUFrQjtRQUMvQixJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxpQkFBaUIsRUFBRSxVQUFVLENBQUMsQ0FBQztJQUNuRixDQUFDO0lBRUQsSUFBSSxNQUFNLENBQUMsTUFBZTtRQUN4QixJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxhQUFhLEVBQUUsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7SUFDakYsQ0FBQzs7O1lBbkNGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsb0JBQW9CO2dCQUM5QixpYkFBb0M7Z0JBQ3BDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEOzs7WUFQMkUsVUFBVTtZQUFyQixTQUFTOzs7a0JBYXZFLEtBQUs7cUJBS0wsS0FBSzswQkFLTCxLQUFLOzhCQUtMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgVGVtcGxhdGVSZWYsIFJlbmRlcmVyMiwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgdW5pcXVlSWQgfSBmcm9tICcuLi91dGlsL3V0aWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZ2wtY2Fyb3VzZWwtaW1hZ2UnLFxuICB0ZW1wbGF0ZVVybDogJy4vY2Fyb3VzZWwtaW1hZ2UuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBOZ2xDYXJvdXNlbEltYWdlIHtcblxuICAvKipcbiAgICogXHRUaGUgcGF0aCB0byB0aGUgaW1hZ2UuXG4gICAqL1xuICBASW5wdXQoKSBzcmM6IHN0cmluZztcblxuICAvKipcbiAgICogVGV4dCBmb3IgdGhlIGxhYmVsIHRoYXQncyBkaXNwbGF5ZWQgdW5kZXIgdGhlIGltYWdlLlxuICAgKi9cbiAgQElucHV0KCkgaGVhZGVyOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFRleHQgZGlzcGxheWVkIHVuZGVyIHRoZSBoZWFkZXIuXG4gICAqL1xuICBASW5wdXQoKSBkZXNjcmlwdGlvbjogc3RyaW5nIHwgVGVtcGxhdGVSZWY8YW55PjtcblxuICAvKipcbiAgICogQXNzaXN0aXZlIHRleHQgZm9yIHRoZSBpbWFnZS5cbiAgICovXG4gIEBJbnB1dCgpIGFsdGVybmF0aXZlVGV4dDogc3RyaW5nO1xuXG4gIHVpZCA9IHVuaXF1ZUlkKCdjYXJvdXNlbC1pbWFnZScpO1xuXG4gIHNldCBsYWJlbGxlZGJ5KGxhYmVsbGVkYnk6IHN0cmluZykge1xuICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgJ2FyaWEtbGFiZWxsZWRieScsIGxhYmVsbGVkYnkpO1xuICB9XG5cbiAgc2V0IGFjdGl2ZShhY3RpdmU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZSh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsICdhcmlhLWhpZGRlbicsIGAkeyFhY3RpdmV9YCk7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmLCBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHtcbiAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZSh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsICdpZCcsIHRoaXMudWlkKTtcbiAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgJ3NsZHMtY2Fyb3VzZWxfX3BhbmVsJyk7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUodGhpcy5lbC5uYXRpdmVFbGVtZW50LCAncm9sZScsICd0YWJwYW5lbCcpO1xuICB9XG5cbn1cbiJdfQ==
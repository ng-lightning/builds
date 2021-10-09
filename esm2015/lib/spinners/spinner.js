import { Component, Input, ChangeDetectionStrategy, ElementRef, Renderer2 } from '@angular/core';
import { HostService } from '../common/host/host.service';
export class NglSpinner {
    constructor(element, renderer, hostService) {
        this.element = element;
        this.renderer = renderer;
        this.hostService = hostService;
        this.renderer.addClass(this.element.nativeElement, 'slds-spinner');
        this.renderer.setAttribute(this.element.nativeElement, 'role', 'status');
    }
    ngOnInit() {
        this.setHostClass();
    }
    ngOnChanges() {
        this.setHostClass();
    }
    setHostClass() {
        this.hostService.updateClass(this.element, {
            [`slds-spinner_${this.size || 'medium'}`]: true,
            [`slds-spinner_${this.variant}`]: !!this.variant,
        });
    }
}
NglSpinner.decorators = [
    { type: Component, args: [{
                selector: 'ngl-spinner',
                template: "<span class=\"slds-assistive-text\" *ngIf=\"alternativeText\">{{ alternativeText }}</span>\n<div class=\"slds-spinner__dot-a\"></div>\n<div class=\"slds-spinner__dot-b\"></div>",
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [HostService]
            },] }
];
NglSpinner.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: HostService }
];
NglSpinner.propDecorators = {
    size: [{ type: Input }],
    variant: [{ type: Input }],
    alternativeText: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Bpbm5lci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nLWxpZ2h0bmluZy9zcmMvbGliL3NwaW5uZXJzL3NwaW5uZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsdUJBQXVCLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFDcEgsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBUTFELE1BQU0sT0FBTyxVQUFVO0lBaUJyQixZQUFvQixPQUFtQixFQUFVLFFBQW1CLEVBQVUsV0FBd0I7UUFBbEYsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQUFVLGFBQVEsR0FBUixRQUFRLENBQVc7UUFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUNwRyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxjQUFjLENBQUMsQ0FBQztRQUNuRSxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDM0UsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUVPLFlBQVk7UUFDbEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUN6QyxDQUFDLGdCQUFnQixJQUFJLENBQUMsSUFBSSxJQUFJLFFBQVEsRUFBRSxDQUFDLEVBQUUsSUFBSTtZQUMvQyxDQUFDLGdCQUFnQixJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU87U0FDakQsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7O1lBekNGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsYUFBYTtnQkFDdkIsNExBQTZCO2dCQUM3QixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsU0FBUyxFQUFFLENBQUMsV0FBVyxDQUFDO2FBQ3pCOzs7WUFSbUQsVUFBVTtZQUFFLFNBQVM7WUFDaEUsV0FBVzs7O21CQWFqQixLQUFLO3NCQUtMLEtBQUs7OEJBS0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBFbGVtZW50UmVmLCBSZW5kZXJlcjIsIE9uSW5pdCwgT25DaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIb3N0U2VydmljZSB9IGZyb20gJy4uL2NvbW1vbi9ob3N0L2hvc3Quc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25nbC1zcGlubmVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NwaW5uZXIuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBwcm92aWRlcnM6IFtIb3N0U2VydmljZV0sXG59KVxuZXhwb3J0IGNsYXNzIE5nbFNwaW5uZXIgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG5cbiAgLyoqXG4gICAqIFRoZSBzaXplIG9mIHRoZSBzcGlubmVyLlxuICAgKi9cbiAgQElucHV0KCkgc2l6ZTogJ3h4LXNtYWxsJyB8ICd4LXNtYWxsJyB8ICAnc21hbGwnIHwgJ21lZGl1bScgfCAnbGFyZ2UnO1xuXG4gIC8qKlxuICAgKiBUaGUgdmFyaWFudCBjaGFuZ2VzIHRoZSBhcHBlYXJhbmNlIG9mIHRoZSBzcGlubmVyLlxuICAgKi9cbiAgQElucHV0KCkgdmFyaWFudDogJ2JyYW5kJyB8ICdpbnZlcnNlJztcblxuICAvKipcbiAgICogVGhlIGFsdGVybmF0aXZlIHRleHQgdXNlZCB0byBkZXNjcmliZSB0aGUgcmVhc29uIGZvciB0aGUgd2FpdCBhbmQgbmVlZCBmb3IgYSBzcGlubmVyLlxuICAgKi9cbiAgQElucHV0KCkgYWx0ZXJuYXRpdmVUZXh0OiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50UmVmLCBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsIHByaXZhdGUgaG9zdFNlcnZpY2U6IEhvc3RTZXJ2aWNlKSB7XG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ3NsZHMtc3Bpbm5lcicpO1xuICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LCAncm9sZScsICdzdGF0dXMnKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuc2V0SG9zdENsYXNzKCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpIHtcbiAgICB0aGlzLnNldEhvc3RDbGFzcygpO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRIb3N0Q2xhc3MoKSB7XG4gICAgdGhpcy5ob3N0U2VydmljZS51cGRhdGVDbGFzcyh0aGlzLmVsZW1lbnQsIHtcbiAgICAgIFtgc2xkcy1zcGlubmVyXyR7dGhpcy5zaXplIHx8ICdtZWRpdW0nfWBdOiB0cnVlLFxuICAgICAgW2BzbGRzLXNwaW5uZXJfJHt0aGlzLnZhcmlhbnR9YF06ICEhdGhpcy52YXJpYW50LFxuICAgIH0pO1xuICB9XG59XG4iXX0=
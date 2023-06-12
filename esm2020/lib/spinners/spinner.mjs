import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { HostService } from '../common/host/host.service';
import * as i0 from "@angular/core";
import * as i1 from "../common/host/host.service";
import * as i2 from "@angular/common";
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
NglSpinner.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglSpinner, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i1.HostService }], target: i0.ɵɵFactoryTarget.Component });
NglSpinner.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: NglSpinner, selector: "ngl-spinner", inputs: { size: "size", variant: "variant", alternativeText: "alternativeText" }, providers: [HostService], usesOnChanges: true, ngImport: i0, template: "<span class=\"slds-assistive-text\" *ngIf=\"alternativeText\">{{ alternativeText }}</span>\n<div class=\"slds-spinner__dot-a\"></div>\n<div class=\"slds-spinner__dot-b\"></div>", dependencies: [{ kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglSpinner, decorators: [{
            type: Component,
            args: [{ selector: 'ngl-spinner', changeDetection: ChangeDetectionStrategy.OnPush, providers: [HostService], template: "<span class=\"slds-assistive-text\" *ngIf=\"alternativeText\">{{ alternativeText }}</span>\n<div class=\"slds-spinner__dot-a\"></div>\n<div class=\"slds-spinner__dot-b\"></div>" }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i1.HostService }]; }, propDecorators: { size: [{
                type: Input
            }], variant: [{
                type: Input
            }], alternativeText: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Bpbm5lci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nLWxpZ2h0bmluZy9zcmMvbGliL3NwaW5uZXJzL3NwaW5uZXIudHMiLCIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1saWdodG5pbmcvc3JjL2xpYi9zcGlubmVycy9zcGlubmVyLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsdUJBQXVCLEVBQTRDLE1BQU0sZUFBZSxDQUFDO0FBQ3BILE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQzs7OztBQVExRCxNQUFNLE9BQU8sVUFBVTtJQWlCckIsWUFBb0IsT0FBbUIsRUFBVSxRQUFtQixFQUFVLFdBQXdCO1FBQWxGLFlBQU8sR0FBUCxPQUFPLENBQVk7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQVUsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDcEcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsY0FBYyxDQUFDLENBQUM7UUFDbkUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsTUFBTSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQzNFLENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFFTyxZQUFZO1FBQ2xCLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDekMsQ0FBQyxnQkFBZ0IsSUFBSSxDQUFDLElBQUksSUFBSSxRQUFRLEVBQUUsQ0FBQyxFQUFFLElBQUk7WUFDL0MsQ0FBQyxnQkFBZ0IsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPO1NBQ2pELENBQUMsQ0FBQztJQUNMLENBQUM7O3VHQW5DVSxVQUFVOzJGQUFWLFVBQVUsd0hBRlYsQ0FBQyxXQUFXLENBQUMsK0NDUDFCLGtMQUV1QzsyRkRPMUIsVUFBVTtrQkFOdEIsU0FBUzsrQkFDRSxhQUFhLG1CQUVOLHVCQUF1QixDQUFDLE1BQU0sYUFDcEMsQ0FBQyxXQUFXLENBQUM7bUpBT2YsSUFBSTtzQkFBWixLQUFLO2dCQUtHLE9BQU87c0JBQWYsS0FBSztnQkFLRyxlQUFlO3NCQUF2QixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIEVsZW1lbnRSZWYsIFJlbmRlcmVyMiwgT25Jbml0LCBPbkNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEhvc3RTZXJ2aWNlIH0gZnJvbSAnLi4vY29tbW9uL2hvc3QvaG9zdC5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmdsLXNwaW5uZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vc3Bpbm5lci5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByb3ZpZGVyczogW0hvc3RTZXJ2aWNlXSxcbn0pXG5leHBvcnQgY2xhc3MgTmdsU3Bpbm5lciBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcblxuICAvKipcbiAgICogVGhlIHNpemUgb2YgdGhlIHNwaW5uZXIuXG4gICAqL1xuICBASW5wdXQoKSBzaXplOiAneHgtc21hbGwnIHwgJ3gtc21hbGwnIHwgICdzbWFsbCcgfCAnbWVkaXVtJyB8ICdsYXJnZSc7XG5cbiAgLyoqXG4gICAqIFRoZSB2YXJpYW50IGNoYW5nZXMgdGhlIGFwcGVhcmFuY2Ugb2YgdGhlIHNwaW5uZXIuXG4gICAqL1xuICBASW5wdXQoKSB2YXJpYW50OiAnYnJhbmQnIHwgJ2ludmVyc2UnO1xuXG4gIC8qKlxuICAgKiBUaGUgYWx0ZXJuYXRpdmUgdGV4dCB1c2VkIHRvIGRlc2NyaWJlIHRoZSByZWFzb24gZm9yIHRoZSB3YWl0IGFuZCBuZWVkIGZvciBhIHNwaW5uZXIuXG4gICAqL1xuICBASW5wdXQoKSBhbHRlcm5hdGl2ZVRleHQ6IHN0cmluZztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnQ6IEVsZW1lbnRSZWYsIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMiwgcHJpdmF0ZSBob3N0U2VydmljZTogSG9zdFNlcnZpY2UpIHtcbiAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LCAnc2xkcy1zcGlubmVyJyk7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUodGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICdyb2xlJywgJ3N0YXR1cycpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5zZXRIb3N0Q2xhc3MoKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCkge1xuICAgIHRoaXMuc2V0SG9zdENsYXNzKCk7XG4gIH1cblxuICBwcml2YXRlIHNldEhvc3RDbGFzcygpIHtcbiAgICB0aGlzLmhvc3RTZXJ2aWNlLnVwZGF0ZUNsYXNzKHRoaXMuZWxlbWVudCwge1xuICAgICAgW2BzbGRzLXNwaW5uZXJfJHt0aGlzLnNpemUgfHwgJ21lZGl1bSd9YF06IHRydWUsXG4gICAgICBbYHNsZHMtc3Bpbm5lcl8ke3RoaXMudmFyaWFudH1gXTogISF0aGlzLnZhcmlhbnQsXG4gICAgfSk7XG4gIH1cbn1cbiIsIjxzcGFuIGNsYXNzPVwic2xkcy1hc3Npc3RpdmUtdGV4dFwiICpuZ0lmPVwiYWx0ZXJuYXRpdmVUZXh0XCI+e3sgYWx0ZXJuYXRpdmVUZXh0IH19PC9zcGFuPlxuPGRpdiBjbGFzcz1cInNsZHMtc3Bpbm5lcl9fZG90LWFcIj48L2Rpdj5cbjxkaXYgY2xhc3M9XCJzbGRzLXNwaW5uZXJfX2RvdC1iXCI+PC9kaXY+Il19
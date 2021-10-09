import { Component, Input, ElementRef, Renderer2, ChangeDetectionStrategy } from '@angular/core';
import { HostService } from '../common/host/host.service';
import { ngClassCombine } from '../util/util';
export class NglButtonIcon {
    constructor(el, hostService, renderer) {
        this.el = el;
        this.hostService = hostService;
        /**
         * The variant changes the appearance of the button
         */
        this.variant = 'border';
        renderer.addClass(this.el.nativeElement, 'slds-button');
        renderer.addClass(this.el.nativeElement, 'slds-button_icon');
    }
    get altText() {
        return this.alternativeText || this.title;
    }
    ngOnInit() {
        this.setHostClass();
    }
    ngOnChanges() {
        this.setHostClass();
    }
    iconClass() {
        const hasVariant = this.hasVariant();
        const classes = {
            [`slds-button__icon_${this.size}`]: !hasVariant,
        };
        return ngClassCombine(this.svgClass, classes);
    }
    setHostClass() {
        const hasVariant = this.hasVariant();
        this.hostService.updateClass(this.el, {
            [`slds-button_icon-${this.variant}`]: hasVariant,
            [`slds-button_icon-${this.size}`]: this.size && hasVariant,
        });
    }
    hasVariant() {
        return this.variant && this.variant !== 'bare';
    }
}
NglButtonIcon.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: '[nglButtonIcon]',
                template: "\n<svg class=\"slds-button__icon\" *ngIf=\"iconName\" [nglIconName]=\"iconName\" [ngClass]=\"iconClass()\"></svg>\n<ng-content></ng-content><span class=\"slds-assistive-text\" *ngIf=\"altText as text\">{{ text }}</span>",
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [HostService]
            },] }
];
NglButtonIcon.ctorParameters = () => [
    { type: ElementRef },
    { type: HostService },
    { type: Renderer2 }
];
NglButtonIcon.propDecorators = {
    iconName: [{ type: Input }],
    title: [{ type: Input }],
    alternativeText: [{ type: Input }],
    variant: [{ type: Input }],
    size: [{ type: Input }],
    svgClass: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLWljb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1saWdodG5pbmcvc3JjL2xpYi9idXR0b24taWNvbnMvYnV0dG9uLWljb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSx1QkFBdUIsRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFDcEgsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQzFELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFTOUMsTUFBTSxPQUFPLGFBQWE7SUF1Q3hCLFlBQW9CLEVBQWMsRUFBVSxXQUF3QixFQUFFLFFBQW1CO1FBQXJFLE9BQUUsR0FBRixFQUFFLENBQVk7UUFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQW5CcEU7O1dBRUc7UUFDTSxZQUFPLEdBQStGLFFBQVEsQ0FBQztRQWlCdEgsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxhQUFhLENBQUMsQ0FBQztRQUN4RCxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLGtCQUFrQixDQUFDLENBQUM7SUFDL0QsQ0FBQztJQVBELElBQUksT0FBTztRQUNULE9BQU8sSUFBSSxDQUFDLGVBQWUsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQzVDLENBQUM7SUFPRCxRQUFRO1FBQ04sSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFFRCxTQUFTO1FBQ1AsTUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ3JDLE1BQU0sT0FBTyxHQUFHO1lBQ2QsQ0FBQyxxQkFBcUIsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxVQUFVO1NBQ2hELENBQUM7UUFFRixPQUFPLGNBQWMsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFFTyxZQUFZO1FBQ2xCLE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNyQyxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFO1lBQ3BDLENBQUMsb0JBQW9CLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxFQUFFLFVBQVU7WUFDaEQsQ0FBQyxvQkFBb0IsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLElBQUksSUFBSSxVQUFVO1NBQzNELENBQUMsQ0FBQztJQUNMLENBQUM7SUFFTyxVQUFVO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsT0FBTyxLQUFLLE1BQU0sQ0FBQztJQUNqRCxDQUFDOzs7WUE5RUYsU0FBUyxTQUFDO2dCQUNULDhDQUE4QztnQkFDOUMsUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0IsdU9BQWlDO2dCQUNqQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsU0FBUyxFQUFFLENBQUMsV0FBVyxDQUFDO2FBQ3pCOzs7WUFWMEIsVUFBVTtZQUM1QixXQUFXO1lBRG1CLFNBQVM7Ozt1QkFrQjdDLEtBQUs7b0JBS0wsS0FBSzs4QkFNTCxLQUFLO3NCQUtMLEtBQUs7bUJBS0wsS0FBSzt1QkFLTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgRWxlbWVudFJlZiwgUmVuZGVyZXIyLCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgT25Jbml0LCBPbkNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEhvc3RTZXJ2aWNlIH0gZnJvbSAnLi4vY29tbW9uL2hvc3QvaG9zdC5zZXJ2aWNlJztcbmltcG9ydCB7IG5nQ2xhc3NDb21iaW5lIH0gZnJvbSAnLi4vdXRpbC91dGlsJztcblxuQENvbXBvbmVudCh7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICdbbmdsQnV0dG9uSWNvbl0nLFxuICB0ZW1wbGF0ZVVybDogJy4vYnV0dG9uLWljb24uaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBwcm92aWRlcnM6IFtIb3N0U2VydmljZV0sXG59KVxuZXhwb3J0IGNsYXNzIE5nbEJ1dHRvbkljb24gaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG5cbiAgLyoqXG4gICAqIExEUyBuYW1lIG9mIHRoZSBpY29uLlxuICAgKiBOYW1lcyBhcmUgd3JpdHRlbiBpbiB0aGUgZm9ybWF0ICd1dGlsaXR5OmRvd24nIHdoZXJlICd1dGlsaXR5JyBpcyB0aGUgY2F0ZWdvcnksIGFuZCAnZG93bicgaXMgdGhlIHNwZWNpZmljIGljb24gdG8gYmUgZGlzcGxheWVkLlxuICAgKiBPbmx5IHV0aWxpdHkgaWNvbnMgY2FuIGJlIHVzZWQgaW4gdGhpcyBjb21wb25lbnQuXG4gICAqL1xuICBASW5wdXQoKSBpY29uTmFtZTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBGYWxsYmFjayB2YWx1ZSBmb3IgYGFsdGVybmF0aXZlVGV4dGAuXG4gICAqL1xuICBASW5wdXQoKSB0aXRsZTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUaGUgYWx0ZXJuYXRpdmUgdGV4dCB1c2VkIHRvIGRlc2NyaWJlIHRoZSBpY29uLlxuICAgKiBUaGlzIHRleHQgc2hvdWxkIGRlc2NyaWJlIHdoYXQgaGFwcGVucywgbm90IHdoYXQgdGhlIGljb24gbG9va3MgbGlrZS5cbiAgICovXG4gIEBJbnB1dCgpIGFsdGVybmF0aXZlVGV4dDtcblxuICAvKipcbiAgICogVGhlIHZhcmlhbnQgY2hhbmdlcyB0aGUgYXBwZWFyYW5jZSBvZiB0aGUgYnV0dG9uXG4gICAqL1xuICBASW5wdXQoKSB2YXJpYW50OiAnYmFyZScgfCAnY29udGFpbmVyJyB8ICdicmFuZCcgfCAnYm9yZGVyJyB8ICdib3JkZXItZmlsbGVkJyB8ICdpbnZlcnNlJyB8ICdib3JkZXItaW52ZXJzZScgPSAnYm9yZGVyJztcblxuICAvKipcbiAgICogIEZvciBub24tYmFyZSB2YXJpYW50cywgdGhlIHNpemUgYXBwbGllcyB0byB0aGUgYnV0dG9uLCBvdGhlcndpc2UgaXQgYXBwbGllcyB0byB0aGUgaWNvbiBpdHNlbGZcbiAgICovXG4gIEBJbnB1dCgpIHNpemU6IHN0cmluZztcblxuICAvKipcbiAgICogQ1NTIGNsYXNzZXMgdGhhdCBhcmUgYXBwbGllZCB0byB0aGUgU1ZHLlxuICAgKi9cbiAgQElucHV0KCkgc3ZnQ2xhc3M6IHN0cmluZyB8IHN0cmluZ1tdIHwgU2V0PHN0cmluZz4gfCB7IFtrbGFzczogc3RyaW5nXTogYW55IH07XG5cbiAgZ2V0IGFsdFRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuYWx0ZXJuYXRpdmVUZXh0IHx8IHRoaXMudGl0bGU7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmLCBwcml2YXRlIGhvc3RTZXJ2aWNlOiBIb3N0U2VydmljZSwgcmVuZGVyZXI6IFJlbmRlcmVyMikge1xuICAgIHJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgJ3NsZHMtYnV0dG9uJyk7XG4gICAgcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbC5uYXRpdmVFbGVtZW50LCAnc2xkcy1idXR0b25faWNvbicpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5zZXRIb3N0Q2xhc3MoKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCkge1xuICAgIHRoaXMuc2V0SG9zdENsYXNzKCk7XG4gIH1cblxuICBpY29uQ2xhc3MoKSB7XG4gICAgY29uc3QgaGFzVmFyaWFudCA9IHRoaXMuaGFzVmFyaWFudCgpO1xuICAgIGNvbnN0IGNsYXNzZXMgPSB7XG4gICAgICBbYHNsZHMtYnV0dG9uX19pY29uXyR7dGhpcy5zaXplfWBdOiAhaGFzVmFyaWFudCxcbiAgICB9O1xuXG4gICAgcmV0dXJuIG5nQ2xhc3NDb21iaW5lKHRoaXMuc3ZnQ2xhc3MsIGNsYXNzZXMpO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRIb3N0Q2xhc3MoKSB7XG4gICAgY29uc3QgaGFzVmFyaWFudCA9IHRoaXMuaGFzVmFyaWFudCgpO1xuICAgIHRoaXMuaG9zdFNlcnZpY2UudXBkYXRlQ2xhc3ModGhpcy5lbCwge1xuICAgICAgW2BzbGRzLWJ1dHRvbl9pY29uLSR7dGhpcy52YXJpYW50fWBdOiBoYXNWYXJpYW50LFxuICAgICAgW2BzbGRzLWJ1dHRvbl9pY29uLSR7dGhpcy5zaXplfWBdOiB0aGlzLnNpemUgJiYgaGFzVmFyaWFudCxcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgaGFzVmFyaWFudCgpIHtcbiAgICByZXR1cm4gdGhpcy52YXJpYW50ICYmIHRoaXMudmFyaWFudCAhPT0gJ2JhcmUnO1xuICB9XG59XG4iXX0=
import { Component, Input, ElementRef, Renderer2, ChangeDetectionStrategy } from '@angular/core';
import { HostService } from '../common/host/host.service';
export class NglButton {
    constructor(el, renderer, hostService) {
        this.el = el;
        this.renderer = renderer;
        this.hostService = hostService;
        /**
         * Changes the appearance of the button.
         */
        this.variant = 'neutral';
        /**
         * Describes the position of the icon with respect to ng-content.
         */
        this.iconPosition = 'left';
        this.renderer.addClass(this.el.nativeElement, 'slds-button');
    }
    ngOnInit() {
        this.setHostClass();
    }
    ngOnChanges(changes) {
        if (changes.variant) {
            this.setHostClass();
        }
    }
    hasLeftIcon() {
        return this.iconName && (!this.iconPosition || this.iconPosition === 'left');
    }
    hasRightIcon() {
        return this.iconName && this.iconPosition === 'right';
    }
    setHostClass() {
        this.hostService.updateClass(this.el, {
            [`slds-button_${this.variant}`]: this.variant && this.variant !== 'base',
        });
    }
}
NglButton.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: '[nglButton]',
                template: "\n<svg class=\"slds-button__icon slds-button__icon_left\" *ngIf=\"hasLeftIcon()\" [nglIconName]=\"iconName\"></svg>\n<ng-content></ng-content>\n<svg class=\"slds-button__icon slds-button__icon_right\" *ngIf=\"hasRightIcon()\" [nglIconName]=\"iconName\"></svg>",
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [HostService]
            },] }
];
NglButton.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: HostService }
];
NglButton.propDecorators = {
    variant: [{ type: Input }],
    iconName: [{ type: Input }],
    iconPosition: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctbGlnaHRuaW5nL3NyYy9saWIvYnV0dG9ucy9idXR0b24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSx1QkFBdUIsRUFBb0MsTUFBTSxlQUFlLENBQUM7QUFDbkksT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBUzFELE1BQU0sT0FBTyxTQUFTO0lBa0JwQixZQUFvQixFQUFjLEVBQVUsUUFBbUIsRUFBVSxXQUF3QjtRQUE3RSxPQUFFLEdBQUYsRUFBRSxDQUFZO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBaEJqRzs7V0FFRztRQUNNLFlBQU8sR0FBZ0gsU0FBUyxDQUFDO1FBUTFJOztXQUVHO1FBQ00saUJBQVksR0FBcUIsTUFBTSxDQUFDO1FBRy9DLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLGFBQWEsQ0FBQyxDQUFDO0lBQy9ELENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFFRCxXQUFXLENBQUMsT0FBc0I7UUFDaEMsSUFBSSxPQUFPLENBQUMsT0FBTyxFQUFFO1lBQ25CLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztTQUNyQjtJQUNILENBQUM7SUFFRCxXQUFXO1FBQ1QsT0FBTyxJQUFJLENBQUMsUUFBUSxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxJQUFJLElBQUksQ0FBQyxZQUFZLEtBQUssTUFBTSxDQUFDLENBQUM7SUFDL0UsQ0FBQztJQUVELFlBQVk7UUFDVixPQUFPLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLFlBQVksS0FBSyxPQUFPLENBQUM7SUFDeEQsQ0FBQztJQUVPLFlBQVk7UUFDbEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRTtZQUNwQyxDQUFDLGVBQWUsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsT0FBTyxLQUFLLE1BQU07U0FDekUsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7O1lBbkRGLFNBQVMsU0FBQztnQkFDVCw4Q0FBOEM7Z0JBQzlDLFFBQVEsRUFBRSxhQUFhO2dCQUN2QiwrUUFBNEI7Z0JBQzVCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxTQUFTLEVBQUUsQ0FBQyxXQUFXLENBQUM7YUFDekI7OztZQVQwQixVQUFVO1lBQUUsU0FBUztZQUN2QyxXQUFXOzs7c0JBY2pCLEtBQUs7dUJBTUwsS0FBSzsyQkFLTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgRWxlbWVudFJlZiwgUmVuZGVyZXIyLCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgT25Jbml0LCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEhvc3RTZXJ2aWNlIH0gZnJvbSAnLi4vY29tbW9uL2hvc3QvaG9zdC5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICdbbmdsQnV0dG9uXScsXG4gIHRlbXBsYXRlVXJsOiAnLi9idXR0b24uaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBwcm92aWRlcnM6IFtIb3N0U2VydmljZV0sXG59KVxuZXhwb3J0IGNsYXNzIE5nbEJ1dHRvbiBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcblxuICAvKipcbiAgICogQ2hhbmdlcyB0aGUgYXBwZWFyYW5jZSBvZiB0aGUgYnV0dG9uLlxuICAgKi9cbiAgQElucHV0KCkgdmFyaWFudDogJ2Jhc2UnIHwgJ25ldXRyYWwnIHwgJ2JyYW5kJyB8ICdvdXRsaW5lLWJyYW5kJyB8ICdkZXN0cnVjdGl2ZScgfCAndGV4dC1kZXN0cnVjdGl2ZScgfCAnaW52ZXJzZScgfCAnc3VjY2VzcycgPSAnbmV1dHJhbCc7XG5cbiAgLyoqXG4gICAqIExEUyBuYW1lIG9mIHRoZSBpY29uLlxuICAgKiBOYW1lcyBhcmUgd3JpdHRlbiBpbiB0aGUgZm9ybWF0ICd1dGlsaXR5OmRvd24nIHdoZXJlICd1dGlsaXR5JyBpcyB0aGUgY2F0ZWdvcnksIGFuZCAnZG93bicgaXMgdGhlIHNwZWNpZmljIGljb24gdG8gYmUgZGlzcGxheWVkLlxuICAgKi9cbiAgQElucHV0KCkgaWNvbk5hbWU6IHN0cmluZztcblxuICAvKipcbiAgICogRGVzY3JpYmVzIHRoZSBwb3NpdGlvbiBvZiB0aGUgaWNvbiB3aXRoIHJlc3BlY3QgdG8gbmctY29udGVudC5cbiAgICovXG4gIEBJbnB1dCgpIGljb25Qb3NpdGlvbjogJ2xlZnQnIHwgJ3JpZ2h0JyA9ICdsZWZ0JztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmLCBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsIHByaXZhdGUgaG9zdFNlcnZpY2U6IEhvc3RTZXJ2aWNlKSB7XG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsICdzbGRzLWJ1dHRvbicpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5zZXRIb3N0Q2xhc3MoKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICBpZiAoY2hhbmdlcy52YXJpYW50KSB7XG4gICAgICB0aGlzLnNldEhvc3RDbGFzcygpO1xuICAgIH1cbiAgfVxuXG4gIGhhc0xlZnRJY29uKCkge1xuICAgIHJldHVybiB0aGlzLmljb25OYW1lICYmICghdGhpcy5pY29uUG9zaXRpb24gfHwgdGhpcy5pY29uUG9zaXRpb24gPT09ICdsZWZ0Jyk7XG4gIH1cblxuICBoYXNSaWdodEljb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuaWNvbk5hbWUgJiYgdGhpcy5pY29uUG9zaXRpb24gPT09ICdyaWdodCc7XG4gIH1cblxuICBwcml2YXRlIHNldEhvc3RDbGFzcygpIHtcbiAgICB0aGlzLmhvc3RTZXJ2aWNlLnVwZGF0ZUNsYXNzKHRoaXMuZWwsIHtcbiAgICAgIFtgc2xkcy1idXR0b25fJHt0aGlzLnZhcmlhbnR9YF06IHRoaXMudmFyaWFudCAmJiB0aGlzLnZhcmlhbnQgIT09ICdiYXNlJyxcbiAgICB9KTtcbiAgfVxuXG59XG4iXX0=
import { __decorate } from "tslib";
import { Directive, Input, Output, EventEmitter, HostListener, ElementRef, Renderer2 } from '@angular/core';
import { InputBoolean } from '../util/convert';
import { HostService } from '../common/host/host.service';
export class NglButtonStateful {
    constructor(el, renderer, hostService) {
        this.el = el;
        this.renderer = renderer;
        this.hostService = hostService;
        /**
         * Triggered when the button is clicked.
         */
        this.stateChange = new EventEmitter();
        /**
         * Appearance.
         */
        this.variant = 'neutral';
        this.renderer.addClass(this.el.nativeElement, 'slds-button');
        this.renderer.addClass(this.el.nativeElement, 'slds-button_stateful');
        this.renderer.setAttribute(this.el.nativeElement, 'aria-live', 'assertive');
    }
    onSelectChange() {
        this.stateChange.emit(!this.state);
    }
    onFocusToggle(focused) {
        this.focused = !!+focused;
        if (!this.focused) {
            this.setHostClass();
        }
    }
    ngOnInit() {
        this.setHostClass();
    }
    ngOnChanges() {
        this.setHostClass();
    }
    setHostClass() {
        this.hostService.updateClass(this.el, {
            [`slds-button_${this.variant === 'text' ? 'reset' : this.variant}`]: !!this.variant,
            [`slds-is-selected-clicked`]: this.state && this.focused,
            [`slds-is-selected`]: this.state && !this.focused,
            [`slds-not-selected`]: !this.state,
        });
    }
}
NglButtonStateful.decorators = [
    { type: Directive, args: [{
                selector: '[nglButtonStateful]',
                providers: [HostService],
            },] }
];
NglButtonStateful.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: HostService }
];
NglButtonStateful.propDecorators = {
    state: [{ type: Input }],
    stateChange: [{ type: Output }],
    variant: [{ type: Input }],
    onSelectChange: [{ type: HostListener, args: ['click',] }],
    onFocusToggle: [{ type: HostListener, args: ['focus', ['1'],] }, { type: HostListener, args: ['blur', ['0'],] }]
};
__decorate([
    InputBoolean()
], NglButtonStateful.prototype, "state", void 0);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLXN0YXRlZnVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctbGlnaHRuaW5nL3NyYy9saWIvYnV0dG9ucy9idXR0b24tc3RhdGVmdWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQy9ILE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFNMUQsTUFBTSxPQUFPLGlCQUFpQjtJQW1CNUIsWUFBb0IsRUFBYyxFQUFVLFFBQW1CLEVBQVUsV0FBd0I7UUFBN0UsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUFVLGFBQVEsR0FBUixRQUFRLENBQVc7UUFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQVpqRzs7V0FFRztRQUNPLGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQUVwRDs7V0FFRztRQUNNLFlBQU8sR0FBeUUsU0FBUyxDQUFDO1FBS2pHLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLGFBQWEsQ0FBQyxDQUFDO1FBQzdELElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLHNCQUFzQixDQUFDLENBQUM7UUFDdEUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsV0FBVyxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBQzlFLENBQUM7SUFHRCxjQUFjO1FBQ1osSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUlELGFBQWEsQ0FBQyxPQUFlO1FBQzNCLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDO1FBRTFCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2pCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztTQUNyQjtJQUNILENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFFTyxZQUFZO1FBQ2xCLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUU7WUFDcEMsQ0FBQyxlQUFlLElBQUksQ0FBQyxPQUFPLEtBQUssTUFBTSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTztZQUNuRixDQUFDLDBCQUEwQixDQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsT0FBTztZQUN4RCxDQUFDLGtCQUFrQixDQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPO1lBQ2pELENBQUMsbUJBQW1CLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLO1NBQ25DLENBQUMsQ0FBQztJQUNMLENBQUM7OztZQTNERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtnQkFDL0IsU0FBUyxFQUFFLENBQUMsV0FBVyxDQUFDO2FBQ3pCOzs7WUFQOEQsVUFBVTtZQUFFLFNBQVM7WUFFM0UsV0FBVzs7O29CQVdqQixLQUFLOzBCQUtMLE1BQU07c0JBS04sS0FBSzs2QkFVTCxZQUFZLFNBQUMsT0FBTzs0QkFLcEIsWUFBWSxTQUFDLE9BQU8sRUFBRSxDQUFDLEdBQUcsQ0FBQyxjQUMzQixZQUFZLFNBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxDQUFDOztBQTFCRjtJQUFmLFlBQVksRUFBRTtnREFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgSG9zdExpc3RlbmVyLCBFbGVtZW50UmVmLCBSZW5kZXJlcjIsIE9uSW5pdCwgT25DaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4gfSBmcm9tICcuLi91dGlsL2NvbnZlcnQnO1xuaW1wb3J0IHsgSG9zdFNlcnZpY2UgfSBmcm9tICcuLi9jb21tb24vaG9zdC9ob3N0LnNlcnZpY2UnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbmdsQnV0dG9uU3RhdGVmdWxdJyxcbiAgcHJvdmlkZXJzOiBbSG9zdFNlcnZpY2VdLFxufSlcbmV4cG9ydCBjbGFzcyBOZ2xCdXR0b25TdGF0ZWZ1bCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcblxuICAvKipcbiAgICogU2hvd3Mgd2hldGhlciB0aGUgYnV0dG9uIGhhcyBiZWVuIHNlbGVjdGVkIG9yIG5vdC5cbiAgICovXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBzdGF0ZTogYm9vbGVhbjtcblxuICAvKipcbiAgICogVHJpZ2dlcmVkIHdoZW4gdGhlIGJ1dHRvbiBpcyBjbGlja2VkLlxuICAgKi9cbiAgQE91dHB1dCgpIHN0YXRlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuXG4gIC8qKlxuICAgKiBBcHBlYXJhbmNlLlxuICAgKi9cbiAgQElucHV0KCkgdmFyaWFudDogJ2JyYW5kJyB8ICdkZXN0cnVjdGl2ZScgfCAnaW52ZXJzZScgfCAnbmV1dHJhbCcgfCAnc3VjY2VzcycgfCAndGV4dCcgPSAnbmV1dHJhbCc7XG5cbiAgcHJpdmF0ZSBmb2N1c2VkOiBib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMiwgcHJpdmF0ZSBob3N0U2VydmljZTogSG9zdFNlcnZpY2UgKSB7XG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsICdzbGRzLWJ1dHRvbicpO1xuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbC5uYXRpdmVFbGVtZW50LCAnc2xkcy1idXR0b25fc3RhdGVmdWwnKTtcbiAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZSh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsICdhcmlhLWxpdmUnLCAnYXNzZXJ0aXZlJyk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdjbGljaycpXG4gIG9uU2VsZWN0Q2hhbmdlKCkge1xuICAgIHRoaXMuc3RhdGVDaGFuZ2UuZW1pdCghdGhpcy5zdGF0ZSk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdmb2N1cycsIFsnMSddKVxuICBASG9zdExpc3RlbmVyKCdibHVyJywgWycwJ10pXG4gIG9uRm9jdXNUb2dnbGUoZm9jdXNlZDogc3RyaW5nKSB7XG4gICAgdGhpcy5mb2N1c2VkID0gISErZm9jdXNlZDtcblxuICAgIGlmICghdGhpcy5mb2N1c2VkKSB7XG4gICAgICB0aGlzLnNldEhvc3RDbGFzcygpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuc2V0SG9zdENsYXNzKCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpIHtcbiAgICB0aGlzLnNldEhvc3RDbGFzcygpO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRIb3N0Q2xhc3MoKSB7XG4gICAgdGhpcy5ob3N0U2VydmljZS51cGRhdGVDbGFzcyh0aGlzLmVsLCB7XG4gICAgICBbYHNsZHMtYnV0dG9uXyR7dGhpcy52YXJpYW50ID09PSAndGV4dCcgPyAncmVzZXQnIDogdGhpcy52YXJpYW50fWBdOiAhIXRoaXMudmFyaWFudCxcbiAgICAgIFtgc2xkcy1pcy1zZWxlY3RlZC1jbGlja2VkYF06IHRoaXMuc3RhdGUgJiYgdGhpcy5mb2N1c2VkLFxuICAgICAgW2BzbGRzLWlzLXNlbGVjdGVkYF06IHRoaXMuc3RhdGUgJiYgIXRoaXMuZm9jdXNlZCxcbiAgICAgIFtgc2xkcy1ub3Qtc2VsZWN0ZWRgXTogIXRoaXMuc3RhdGUsXG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==
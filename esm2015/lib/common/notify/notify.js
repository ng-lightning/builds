import { ChangeDetectorRef, Directive, ElementRef, EventEmitter, Inject, Input, Output, Renderer2 } from '@angular/core';
import { isInt } from '../../util/util';
export class NglCommonNotify {
    constructor(element, renderer, cd, type) {
        this.element = element;
        this.renderer = renderer;
        this.cd = cd;
        this.closeButtonAssistiveText = 'Close';
        /**
         * Triggered by close button or duration timeout.
         */
        // tslint:disable-next-line:no-output-rename
        this.closeEventEmitter = new EventEmitter();
        this.currentTimeout = null;
        this.renderer.addClass(this.element.nativeElement, 'slds-notify');
        this.renderer.addClass(this.element.nativeElement, `slds-notify_${type}`);
        this.toggleThemeClass(true, this.variant);
        this.renderer.setAttribute(this.element.nativeElement, 'role', type === 'toast' ? 'status' : 'alert');
    }
    /**
     * The type of alert.
     */
    set variant(variant) {
        this.toggleThemeClass(false, this.variant);
        this._variant = variant;
        this.toggleThemeClass(true, this.variant);
    }
    get variant() {
        return this._variant || 'info';
    }
    /**
     * The number of milliseconds after which, the close event will be triggered with an emitted reason of `'timeout'`.
     */
    set duration(duration) {
        this.clearTimeout();
        if (isInt(duration) && duration >= 0) {
            this.currentTimeout = setTimeout(() => this.close('timeout'), +duration);
        }
    }
    set dismissible(dismissible) {
        this._dismissible = dismissible;
        this.cd.markForCheck();
    }
    get dismissible() {
        return this._dismissible;
    }
    close(reason, $event) {
        this.clearTimeout();
        if ($event) {
            $event.preventDefault();
            $event.stopPropagation();
        }
        this.closeEventEmitter.emit(reason);
    }
    ngOnDestroy() {
        this.clearTimeout();
    }
    clearTimeout() {
        if (this.currentTimeout !== null) {
            clearTimeout(this.currentTimeout);
            this.currentTimeout = null;
        }
    }
    toggleThemeClass(isAdd, klass) {
        if (!klass) {
            return;
        }
        const el = this.element.nativeElement;
        this.renderer[isAdd ? 'addClass' : 'removeClass'](el, `slds-theme_${klass}`);
    }
}
NglCommonNotify.decorators = [
    { type: Directive }
];
NglCommonNotify.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: ChangeDetectorRef },
    { type: String, decorators: [{ type: Inject, args: ['type',] }] }
];
NglCommonNotify.propDecorators = {
    variant: [{ type: Input }],
    iconName: [{ type: Input }],
    assistiveText: [{ type: Input }],
    closeButtonAssistiveText: [{ type: Input }],
    duration: [{ type: Input }],
    closeEventEmitter: [{ type: Output, args: ['close',] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWZ5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctbGlnaHRuaW5nL3NyYy9saWIvY29tbW9uL25vdGlmeS9ub3RpZnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQWEsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNwSSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFHeEMsTUFBTSxPQUFnQixlQUFlO0lBaURuQyxZQUFvQixPQUFtQixFQUFVLFFBQW1CLEVBQVUsRUFBcUIsRUFBa0IsSUFBWTtRQUE3RyxZQUFPLEdBQVAsT0FBTyxDQUFZO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUFVLE9BQUUsR0FBRixFQUFFLENBQW1CO1FBaEMxRiw2QkFBd0IsR0FBRyxPQUFPLENBQUU7UUFZN0M7O1dBRUc7UUFDSCw0Q0FBNEM7UUFDM0Isc0JBQWlCLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQVl4RCxtQkFBYyxHQUFRLElBQUksQ0FBQztRQUtqQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxhQUFhLENBQUMsQ0FBQztRQUNsRSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxlQUFlLElBQUksRUFBRSxDQUFDLENBQUM7UUFDMUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDMUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsTUFBTSxFQUFFLElBQUksS0FBSyxPQUFPLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDeEcsQ0FBQztJQXBERDs7T0FFRztJQUNILElBQWEsT0FBTyxDQUFDLE9BQWlEO1FBQ3BFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFDRCxJQUFJLE9BQU87UUFDVCxPQUFPLElBQUksQ0FBQyxRQUFRLElBQUksTUFBTSxDQUFDO0lBQ2pDLENBQUM7SUFPRDs7T0FFRztJQUNILElBQWEsUUFBUSxDQUFDLFFBQWdCO1FBQ3BDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQixJQUFJLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxRQUFRLElBQUksQ0FBQyxFQUFFO1lBQ3BDLElBQUksQ0FBQyxjQUFjLEdBQUcsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUMxRTtJQUNILENBQUM7SUFRRCxJQUFJLFdBQVcsQ0FBQyxXQUFvQjtRQUNsQyxJQUFJLENBQUMsWUFBWSxHQUFHLFdBQVcsQ0FBQztRQUNoQyxJQUFJLENBQUMsRUFBRSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFDRCxJQUFJLFdBQVc7UUFDYixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDM0IsQ0FBQztJQWVELEtBQUssQ0FBQyxNQUFlLEVBQUUsTUFBYztRQUNuQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEIsSUFBSSxNQUFNLEVBQUU7WUFDVixNQUFNLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDeEIsTUFBTSxDQUFDLGVBQWUsRUFBRSxDQUFDO1NBQzFCO1FBQ0QsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBRU8sWUFBWTtRQUNsQixJQUFJLElBQUksQ0FBQyxjQUFjLEtBQUssSUFBSSxFQUFFO1lBQ2hDLFlBQVksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7WUFDbEMsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7U0FDNUI7SUFDSCxDQUFDO0lBRU8sZ0JBQWdCLENBQUMsS0FBYyxFQUFFLEtBQWE7UUFDcEQsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUFFLE9BQU87U0FBRTtRQUV2QixNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQztRQUN0QyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxFQUFFLEVBQUUsY0FBYyxLQUFLLEVBQUUsQ0FBQyxDQUFDO0lBQy9FLENBQUM7OztZQWxGRixTQUFTOzs7WUFINkIsVUFBVTtZQUFrRCxTQUFTO1lBQW5HLGlCQUFpQjt5Q0FxRDhFLE1BQU0sU0FBQyxNQUFNOzs7c0JBNUNsSCxLQUFLO3VCQVNMLEtBQUs7NEJBRUwsS0FBSzt1Q0FDTCxLQUFLO3VCQUtMLEtBQUs7Z0NBV0wsTUFBTSxTQUFDLE9BQU8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3RvclJlZiwgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIEluamVjdCwgSW5wdXQsIE9uRGVzdHJveSwgT3V0cHV0LCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGlzSW50IH0gZnJvbSAnLi4vLi4vdXRpbC91dGlsJztcblxuQERpcmVjdGl2ZSgpXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgTmdsQ29tbW9uTm90aWZ5IGltcGxlbWVudHMgT25EZXN0cm95IHtcblxuICAvKipcbiAgICogVGhlIHR5cGUgb2YgYWxlcnQuXG4gICAqL1xuICBASW5wdXQoKSBzZXQgdmFyaWFudCh2YXJpYW50OiAnZXJyb3InIHwgJ2luZm8nIHwgJ3N1Y2Nlc3MnIHwgJ3dhcm5pbmcnKSB7XG4gICAgdGhpcy50b2dnbGVUaGVtZUNsYXNzKGZhbHNlLCB0aGlzLnZhcmlhbnQpO1xuICAgIHRoaXMuX3ZhcmlhbnQgPSB2YXJpYW50O1xuICAgIHRoaXMudG9nZ2xlVGhlbWVDbGFzcyh0cnVlLCB0aGlzLnZhcmlhbnQpO1xuICB9XG4gIGdldCB2YXJpYW50KCkge1xuICAgIHJldHVybiB0aGlzLl92YXJpYW50IHx8ICdpbmZvJztcbiAgfVxuXG4gIEBJbnB1dCgpIGljb25OYW1lOiBzdHJpbmc7XG5cbiAgQElucHV0KCkgYXNzaXN0aXZlVGV4dDtcbiAgQElucHV0KCkgY2xvc2VCdXR0b25Bc3Npc3RpdmVUZXh0ID0gJ0Nsb3NlJyA7XG5cbiAgLyoqXG4gICAqIFRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGFmdGVyIHdoaWNoLCB0aGUgY2xvc2UgZXZlbnQgd2lsbCBiZSB0cmlnZ2VyZWQgd2l0aCBhbiBlbWl0dGVkIHJlYXNvbiBvZiBgJ3RpbWVvdXQnYC5cbiAgICovXG4gIEBJbnB1dCgpIHNldCBkdXJhdGlvbihkdXJhdGlvbjogbnVtYmVyKSB7XG4gICAgdGhpcy5jbGVhclRpbWVvdXQoKTtcbiAgICBpZiAoaXNJbnQoZHVyYXRpb24pICYmIGR1cmF0aW9uID49IDApIHtcbiAgICAgIHRoaXMuY3VycmVudFRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHRoaXMuY2xvc2UoJ3RpbWVvdXQnKSwgK2R1cmF0aW9uKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVHJpZ2dlcmVkIGJ5IGNsb3NlIGJ1dHRvbiBvciBkdXJhdGlvbiB0aW1lb3V0LlxuICAgKi9cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLW91dHB1dC1yZW5hbWVcbiAgQE91dHB1dCgnY2xvc2UnKSBjbG9zZUV2ZW50RW1pdHRlciA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuXG4gIHNldCBkaXNtaXNzaWJsZShkaXNtaXNzaWJsZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2Rpc21pc3NpYmxlID0gZGlzbWlzc2libGU7XG4gICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuICBnZXQgZGlzbWlzc2libGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Rpc21pc3NpYmxlO1xuICB9XG5cbiAgcHJpdmF0ZSBfZGlzbWlzc2libGU6IGJvb2xlYW47XG5cbiAgcHJpdmF0ZSBjdXJyZW50VGltZW91dDogYW55ID0gbnVsbDtcblxuICBwcml2YXRlIF92YXJpYW50OiAnZXJyb3InIHwgJ2luZm8nIHwgJ3N1Y2Nlc3MnIHwgJ3dhcm5pbmcnO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudDogRWxlbWVudFJlZiwgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLCBwcml2YXRlIGNkOiBDaGFuZ2VEZXRlY3RvclJlZiwgQEluamVjdCgndHlwZScpIHR5cGU6IHN0cmluZykge1xuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICdzbGRzLW5vdGlmeScpO1xuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsIGBzbGRzLW5vdGlmeV8ke3R5cGV9YCk7XG4gICAgdGhpcy50b2dnbGVUaGVtZUNsYXNzKHRydWUsIHRoaXMudmFyaWFudCk7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUodGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICdyb2xlJywgdHlwZSA9PT0gJ3RvYXN0JyA/ICdzdGF0dXMnIDogJ2FsZXJ0Jyk7XG4gIH1cblxuICBjbG9zZShyZWFzb24/OiBzdHJpbmcsICRldmVudD86IEV2ZW50KSB7XG4gICAgdGhpcy5jbGVhclRpbWVvdXQoKTtcbiAgICBpZiAoJGV2ZW50KSB7XG4gICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9XG4gICAgdGhpcy5jbG9zZUV2ZW50RW1pdHRlci5lbWl0KHJlYXNvbik7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLmNsZWFyVGltZW91dCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBjbGVhclRpbWVvdXQoKSB7XG4gICAgaWYgKHRoaXMuY3VycmVudFRpbWVvdXQgIT09IG51bGwpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLmN1cnJlbnRUaW1lb3V0KTtcbiAgICAgIHRoaXMuY3VycmVudFRpbWVvdXQgPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgdG9nZ2xlVGhlbWVDbGFzcyhpc0FkZDogYm9vbGVhbiwga2xhc3M6IHN0cmluZykge1xuICAgIGlmICgha2xhc3MpIHsgcmV0dXJuOyB9XG5cbiAgICBjb25zdCBlbCA9IHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50O1xuICAgIHRoaXMucmVuZGVyZXJbaXNBZGQgPyAnYWRkQ2xhc3MnIDogJ3JlbW92ZUNsYXNzJ10oZWwsIGBzbGRzLXRoZW1lXyR7a2xhc3N9YCk7XG4gIH1cbn1cbiJdfQ==
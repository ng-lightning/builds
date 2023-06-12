import { Directive, EventEmitter, Inject, Input, Output } from '@angular/core';
import { isInt } from '../../util/util';
import * as i0 from "@angular/core";
export class NglCommonNotify {
    constructor(element, renderer, cd, type) {
        this.element = element;
        this.renderer = renderer;
        this.cd = cd;
        this.closeButtonAssistiveText = 'Close';
        /**
         * Triggered by close button or duration timeout.
         */
        // eslint-disable-next-line @angular-eslint/no-output-rename
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
NglCommonNotify.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglCommonNotify, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i0.ChangeDetectorRef }, { token: 'type' }], target: i0.ɵɵFactoryTarget.Directive });
NglCommonNotify.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.2.9", type: NglCommonNotify, inputs: { variant: "variant", iconName: "iconName", assistiveText: "assistiveText", closeButtonAssistiveText: "closeButtonAssistiveText", duration: "duration" }, outputs: { closeEventEmitter: "close" }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglCommonNotify, decorators: [{
            type: Directive
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i0.ChangeDetectorRef }, { type: undefined, decorators: [{
                    type: Inject,
                    args: ['type']
                }] }]; }, propDecorators: { variant: [{
                type: Input
            }], iconName: [{
                type: Input
            }], assistiveText: [{
                type: Input
            }], closeButtonAssistiveText: [{
                type: Input
            }], duration: [{
                type: Input
            }], closeEventEmitter: [{
                type: Output,
                args: ['close']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWZ5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctbGlnaHRuaW5nL3NyYy9saWIvY29tbW9uL25vdGlmeS9ub3RpZnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFxQixTQUFTLEVBQWMsWUFBWSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQWEsTUFBTSxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBQ3BJLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7QUFHeEMsTUFBTSxPQUFnQixlQUFlO0lBaURuQyxZQUFvQixPQUFtQixFQUFVLFFBQW1CLEVBQVUsRUFBcUIsRUFBa0IsSUFBWTtRQUE3RyxZQUFPLEdBQVAsT0FBTyxDQUFZO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUFVLE9BQUUsR0FBRixFQUFFLENBQW1CO1FBaEMxRiw2QkFBd0IsR0FBRyxPQUFPLENBQUU7UUFZN0M7O1dBRUc7UUFDSCw0REFBNEQ7UUFDM0Msc0JBQWlCLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQVl4RCxtQkFBYyxHQUFRLElBQUksQ0FBQztRQUtqQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxhQUFhLENBQUMsQ0FBQztRQUNsRSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxlQUFlLElBQUksRUFBRSxDQUFDLENBQUM7UUFDMUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDMUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsTUFBTSxFQUFFLElBQUksS0FBSyxPQUFPLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDeEcsQ0FBQztJQXBERDs7T0FFRztJQUNILElBQWEsT0FBTyxDQUFDLE9BQWlEO1FBQ3BFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFDRCxJQUFJLE9BQU87UUFDVCxPQUFPLElBQUksQ0FBQyxRQUFRLElBQUksTUFBTSxDQUFDO0lBQ2pDLENBQUM7SUFPRDs7T0FFRztJQUNILElBQWEsUUFBUSxDQUFDLFFBQWdCO1FBQ3BDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQixJQUFJLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxRQUFRLElBQUksQ0FBQyxFQUFFO1lBQ3BDLElBQUksQ0FBQyxjQUFjLEdBQUcsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUMxRTtJQUNILENBQUM7SUFRRCxJQUFJLFdBQVcsQ0FBQyxXQUFvQjtRQUNsQyxJQUFJLENBQUMsWUFBWSxHQUFHLFdBQVcsQ0FBQztRQUNoQyxJQUFJLENBQUMsRUFBRSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFDRCxJQUFJLFdBQVc7UUFDYixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDM0IsQ0FBQztJQWVELEtBQUssQ0FBQyxNQUFlLEVBQUUsTUFBYztRQUNuQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEIsSUFBSSxNQUFNLEVBQUU7WUFDVixNQUFNLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDeEIsTUFBTSxDQUFDLGVBQWUsRUFBRSxDQUFDO1NBQzFCO1FBQ0QsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBRU8sWUFBWTtRQUNsQixJQUFJLElBQUksQ0FBQyxjQUFjLEtBQUssSUFBSSxFQUFFO1lBQ2hDLFlBQVksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7WUFDbEMsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7U0FDNUI7SUFDSCxDQUFDO0lBRU8sZ0JBQWdCLENBQUMsS0FBYyxFQUFFLEtBQWE7UUFDcEQsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUFFLE9BQU87U0FBRTtRQUV2QixNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQztRQUN0QyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxFQUFFLEVBQUUsY0FBYyxLQUFLLEVBQUUsQ0FBQyxDQUFDO0lBQy9FLENBQUM7OzRHQWpGbUIsZUFBZSxzR0FpRDBFLE1BQU07Z0dBakQvRixlQUFlOzJGQUFmLGVBQWU7a0JBRHBDLFNBQVM7OzBCQWtEOEYsTUFBTTsyQkFBQyxNQUFNOzRDQTVDdEcsT0FBTztzQkFBbkIsS0FBSztnQkFTRyxRQUFRO3NCQUFoQixLQUFLO2dCQUVHLGFBQWE7c0JBQXJCLEtBQUs7Z0JBQ0csd0JBQXdCO3NCQUFoQyxLQUFLO2dCQUtPLFFBQVE7c0JBQXBCLEtBQUs7Z0JBV1csaUJBQWlCO3NCQUFqQyxNQUFNO3VCQUFDLE9BQU8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3RvclJlZiwgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIEluamVjdCwgSW5wdXQsIE9uRGVzdHJveSwgT3V0cHV0LCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGlzSW50IH0gZnJvbSAnLi4vLi4vdXRpbC91dGlsJztcblxuQERpcmVjdGl2ZSgpXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgTmdsQ29tbW9uTm90aWZ5IGltcGxlbWVudHMgT25EZXN0cm95IHtcblxuICAvKipcbiAgICogVGhlIHR5cGUgb2YgYWxlcnQuXG4gICAqL1xuICBASW5wdXQoKSBzZXQgdmFyaWFudCh2YXJpYW50OiAnZXJyb3InIHwgJ2luZm8nIHwgJ3N1Y2Nlc3MnIHwgJ3dhcm5pbmcnKSB7XG4gICAgdGhpcy50b2dnbGVUaGVtZUNsYXNzKGZhbHNlLCB0aGlzLnZhcmlhbnQpO1xuICAgIHRoaXMuX3ZhcmlhbnQgPSB2YXJpYW50O1xuICAgIHRoaXMudG9nZ2xlVGhlbWVDbGFzcyh0cnVlLCB0aGlzLnZhcmlhbnQpO1xuICB9XG4gIGdldCB2YXJpYW50KCkge1xuICAgIHJldHVybiB0aGlzLl92YXJpYW50IHx8ICdpbmZvJztcbiAgfVxuXG4gIEBJbnB1dCgpIGljb25OYW1lOiBzdHJpbmc7XG5cbiAgQElucHV0KCkgYXNzaXN0aXZlVGV4dDtcbiAgQElucHV0KCkgY2xvc2VCdXR0b25Bc3Npc3RpdmVUZXh0ID0gJ0Nsb3NlJyA7XG5cbiAgLyoqXG4gICAqIFRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGFmdGVyIHdoaWNoLCB0aGUgY2xvc2UgZXZlbnQgd2lsbCBiZSB0cmlnZ2VyZWQgd2l0aCBhbiBlbWl0dGVkIHJlYXNvbiBvZiBgJ3RpbWVvdXQnYC5cbiAgICovXG4gIEBJbnB1dCgpIHNldCBkdXJhdGlvbihkdXJhdGlvbjogbnVtYmVyKSB7XG4gICAgdGhpcy5jbGVhclRpbWVvdXQoKTtcbiAgICBpZiAoaXNJbnQoZHVyYXRpb24pICYmIGR1cmF0aW9uID49IDApIHtcbiAgICAgIHRoaXMuY3VycmVudFRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHRoaXMuY2xvc2UoJ3RpbWVvdXQnKSwgK2R1cmF0aW9uKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVHJpZ2dlcmVkIGJ5IGNsb3NlIGJ1dHRvbiBvciBkdXJhdGlvbiB0aW1lb3V0LlxuICAgKi9cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBhbmd1bGFyLWVzbGludC9uby1vdXRwdXQtcmVuYW1lXG4gIEBPdXRwdXQoJ2Nsb3NlJykgY2xvc2VFdmVudEVtaXR0ZXIgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcblxuICBzZXQgZGlzbWlzc2libGUoZGlzbWlzc2libGU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9kaXNtaXNzaWJsZSA9IGRpc21pc3NpYmxlO1xuICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XG4gIH1cbiAgZ2V0IGRpc21pc3NpYmxlKCkge1xuICAgIHJldHVybiB0aGlzLl9kaXNtaXNzaWJsZTtcbiAgfVxuXG4gIHByaXZhdGUgX2Rpc21pc3NpYmxlOiBib29sZWFuO1xuXG4gIHByaXZhdGUgY3VycmVudFRpbWVvdXQ6IGFueSA9IG51bGw7XG5cbiAgcHJpdmF0ZSBfdmFyaWFudDogJ2Vycm9yJyB8ICdpbmZvJyB8ICdzdWNjZXNzJyB8ICd3YXJuaW5nJztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnQ6IEVsZW1lbnRSZWYsIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMiwgcHJpdmF0ZSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYsIEBJbmplY3QoJ3R5cGUnKSB0eXBlOiBzdHJpbmcpIHtcbiAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LCAnc2xkcy1ub3RpZnknKTtcbiAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LCBgc2xkcy1ub3RpZnlfJHt0eXBlfWApO1xuICAgIHRoaXMudG9nZ2xlVGhlbWVDbGFzcyh0cnVlLCB0aGlzLnZhcmlhbnQpO1xuICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LCAncm9sZScsIHR5cGUgPT09ICd0b2FzdCcgPyAnc3RhdHVzJyA6ICdhbGVydCcpO1xuICB9XG5cbiAgY2xvc2UocmVhc29uPzogc3RyaW5nLCAkZXZlbnQ/OiBFdmVudCkge1xuICAgIHRoaXMuY2xlYXJUaW1lb3V0KCk7XG4gICAgaWYgKCRldmVudCkge1xuICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfVxuICAgIHRoaXMuY2xvc2VFdmVudEVtaXR0ZXIuZW1pdChyZWFzb24pO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5jbGVhclRpbWVvdXQoKTtcbiAgfVxuXG4gIHByaXZhdGUgY2xlYXJUaW1lb3V0KCkge1xuICAgIGlmICh0aGlzLmN1cnJlbnRUaW1lb3V0ICE9PSBudWxsKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5jdXJyZW50VGltZW91dCk7XG4gICAgICB0aGlzLmN1cnJlbnRUaW1lb3V0ID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHRvZ2dsZVRoZW1lQ2xhc3MoaXNBZGQ6IGJvb2xlYW4sIGtsYXNzOiBzdHJpbmcpIHtcbiAgICBpZiAoIWtsYXNzKSB7IHJldHVybjsgfVxuXG4gICAgY29uc3QgZWwgPSB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudDtcbiAgICB0aGlzLnJlbmRlcmVyW2lzQWRkID8gJ2FkZENsYXNzJyA6ICdyZW1vdmVDbGFzcyddKGVsLCBgc2xkcy10aGVtZV8ke2tsYXNzfWApO1xuICB9XG59XG4iXX0=
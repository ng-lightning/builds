import { __decorate } from "tslib";
import { Component, Input, ChangeDetectionStrategy, ElementRef, Renderer2, HostListener, ChangeDetectorRef, NgZone } from '@angular/core';
import { uniqueId, trapEvent, menuItemScroll } from '../util/util';
import { InputBoolean } from '../util/convert';
import { NglComboboxService } from './combobox.service';
export class NglComboboxOption {
    constructor(element, service, cd, ngZone, renderer) {
        this.element = element;
        this.service = service;
        this.cd = cd;
        this.ngZone = ngZone;
        this.disabled = false;
        this.uid = uniqueId('combo-option');
        this._active = false;
        // Flag to disable scrolling into view when option is activated using mouse
        this.disableNextScrollIntoView = false;
        this.destroyed = false;
        renderer.addClass(element.nativeElement, 'slds-listbox__item');
        renderer.setAttribute(element.nativeElement, 'role', 'presentation');
    }
    // Whether or not the option is currently active and ready to be selected
    set active(active) {
        if (this.active === active || this.destroyed) {
            return;
        }
        this._active = active;
        this.cd.detectChanges();
        if (active) {
            this.service.combobox.inputEl.setAriaActiveDescendant(this.uid);
            this.scrollIntoView();
        }
        else {
            clearTimeout(this.scrollTimer);
        }
    }
    get active() {
        return this._active;
    }
    onSelectViaInteraction(evt) {
        trapEvent(evt);
        if (!this.disabled) {
            this.service.combobox.onOptionSelection(this);
        }
    }
    hover() {
        if (!this.disabled) {
            this.disableNextScrollIntoView = true;
            this.service.combobox.keyManager.setActiveItem(this);
        }
    }
    setActiveStyles() {
        this.active = true;
    }
    setInactiveStyles() {
        this.active = false;
    }
    scrollIntoView() {
        if (this.disableNextScrollIntoView) {
            this.disableNextScrollIntoView = false;
            return;
        }
        this.ngZone.runOutsideAngular(() => {
            this.scrollTimer = setTimeout(() => {
                const li = this.element.nativeElement;
                menuItemScroll(li.parentElement.parentElement, li);
            }, 0);
        });
    }
    ngOnDestroy() {
        this.destroyed = true;
        clearTimeout(this.scrollTimer);
    }
}
NglComboboxOption.decorators = [
    { type: Component, args: [{
                selector: 'ngl-combobox-option, [nglComboboxOption]',
                template: "\n<div class=\"slds-media slds-listbox__option slds-listbox__option_plain slds-media_small slds-media_center\" role=\"option\" [attr.id]=\"uid\" [class.slds-has-focus]=\"active\" [class.slds-is-selected]=\"selected\" [attr.aria-selected]=\"selected || null\" [attr.aria-disabled]=\"disabled || null\"><span class=\"slds-media__figure slds-listbox__option-icon\"><span class=\"slds-icon_container slds-icon-utility-check slds-current-color\" *ngIf=\"selected\">\n      <svg class=\"slds-icon slds-icon_x-small\" nglIconName=\"utility:check\"></svg></span></span><span class=\"slds-media__body\"><span class=\"slds-truncate\"><span class=\"slds-assistive-text\" *ngIf=\"selected\">Current Selection:</span>{{ label }}</span></span></div>",
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
NglComboboxOption.ctorParameters = () => [
    { type: ElementRef },
    { type: NglComboboxService },
    { type: ChangeDetectorRef },
    { type: NgZone },
    { type: Renderer2 }
];
NglComboboxOption.propDecorators = {
    value: [{ type: Input }],
    label: [{ type: Input }],
    selected: [{ type: Input }],
    disabled: [{ type: Input }],
    onSelectViaInteraction: [{ type: HostListener, args: ['mousedown', ['$event'],] }],
    hover: [{ type: HostListener, args: ['mouseenter',] }]
};
__decorate([
    InputBoolean()
], NglComboboxOption.prototype, "selected", void 0);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tYm9ib3gtb3B0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctbGlnaHRuaW5nL3NyYy9saWIvY29tYm9ib3hlcy9jb21ib2JveC1vcHRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQUUsS0FBSyxFQUFFLHVCQUF1QixFQUN6QyxVQUFVLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxpQkFBaUIsRUFBRSxNQUFNLEVBQy9ELE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLGNBQWMsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUNuRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFPeEQsTUFBTSxPQUFPLGlCQUFpQjtJQXlDNUIsWUFBb0IsT0FBbUIsRUFDbkIsT0FBMkIsRUFDM0IsRUFBcUIsRUFDckIsTUFBYyxFQUN0QixRQUFtQjtRQUpYLFlBQU8sR0FBUCxPQUFPLENBQVk7UUFDbkIsWUFBTyxHQUFQLE9BQU8sQ0FBb0I7UUFDM0IsT0FBRSxHQUFGLEVBQUUsQ0FBbUI7UUFDckIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQXBDekIsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUUxQixRQUFHLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBc0J2QixZQUFPLEdBQUcsS0FBSyxDQUFDO1FBSXhCLDJFQUEyRTtRQUNuRSw4QkFBeUIsR0FBRyxLQUFLLENBQUM7UUFFbEMsY0FBUyxHQUFHLEtBQUssQ0FBQztRQU94QixRQUFRLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsb0JBQW9CLENBQUMsQ0FBQztRQUMvRCxRQUFRLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsTUFBTSxFQUFFLGNBQWMsQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7SUFwQ0QseUVBQXlFO0lBQ3pFLElBQUksTUFBTSxDQUFDLE1BQWU7UUFDeEIsSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLE1BQU0sSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQzVDLE9BQU87U0FDUjtRQUVELElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLENBQUM7UUFFeEIsSUFBSSxNQUFNLEVBQUU7WUFDVixJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2hFLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztTQUN2QjthQUFNO1lBQ0wsWUFBWSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUNoQztJQUNILENBQUM7SUFDRCxJQUFJLE1BQU07UUFDUixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDdEIsQ0FBQztJQXFCRCxzQkFBc0IsQ0FBQyxHQUFlO1FBQ3BDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNmLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2xCLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxDQUFDO1NBQy9DO0lBQ0gsQ0FBQztJQUdELEtBQUs7UUFDSCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNsQixJQUFJLENBQUMseUJBQXlCLEdBQUcsSUFBSSxDQUFDO1lBQ3RDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDdEQ7SUFDSCxDQUFDO0lBRUQsZUFBZTtRQUNiLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO0lBQ3JCLENBQUM7SUFFRCxpQkFBaUI7UUFDZixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUN0QixDQUFDO0lBRUQsY0FBYztRQUNaLElBQUksSUFBSSxDQUFDLHlCQUF5QixFQUFFO1lBQ2xDLElBQUksQ0FBQyx5QkFBeUIsR0FBRyxLQUFLLENBQUM7WUFDdkMsT0FBTztTQUNSO1FBRUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLEVBQUU7WUFDakMsSUFBSSxDQUFDLFdBQVcsR0FBRyxVQUFVLENBQUMsR0FBRyxFQUFFO2dCQUNqQyxNQUFNLEVBQUUsR0FBZ0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUM7Z0JBQ25ELGNBQWMsQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLGFBQWEsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUNyRCxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDUixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDdEIsWUFBWSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNqQyxDQUFDOzs7WUFoR0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSwwQ0FBMEM7Z0JBQ3BELDJ1QkFBcUM7Z0JBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEOzs7WUFYQyxVQUFVO1lBS0gsa0JBQWtCO1lBTFksaUJBQWlCO1lBQUUsTUFBTTtZQUFsRCxTQUFTOzs7b0JBY3BCLEtBQUs7b0JBRUwsS0FBSzt1QkFFTCxLQUFLO3VCQUVMLEtBQUs7cUNBMENMLFlBQVksU0FBQyxXQUFXLEVBQUUsQ0FBQyxRQUFRLENBQUM7b0JBUXBDLFlBQVksU0FBQyxZQUFZOztBQXBERDtJQUFmLFlBQVksRUFBRTttREFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsIElucHV0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgT25EZXN0cm95LFxuICBFbGVtZW50UmVmLCBSZW5kZXJlcjIsIEhvc3RMaXN0ZW5lciwgQ2hhbmdlRGV0ZWN0b3JSZWYsIE5nWm9uZVxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEhpZ2hsaWdodGFibGUgfSBmcm9tICdAYW5ndWxhci9jZGsvYTExeSc7XG5pbXBvcnQgeyB1bmlxdWVJZCwgdHJhcEV2ZW50LCBtZW51SXRlbVNjcm9sbCB9IGZyb20gJy4uL3V0aWwvdXRpbCc7XG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4gfSBmcm9tICcuLi91dGlsL2NvbnZlcnQnO1xuaW1wb3J0IHsgTmdsQ29tYm9ib3hTZXJ2aWNlIH0gZnJvbSAnLi9jb21ib2JveC5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmdsLWNvbWJvYm94LW9wdGlvbiwgW25nbENvbWJvYm94T3B0aW9uXScsXG4gIHRlbXBsYXRlVXJsOiAnLi9jb21ib2JveC1vcHRpb24uaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBOZ2xDb21ib2JveE9wdGlvbiBpbXBsZW1lbnRzIEhpZ2hsaWdodGFibGUsIE9uRGVzdHJveSB7XG5cbiAgQElucHV0KCkgdmFsdWU6IGFueTtcblxuICBASW5wdXQoKSBsYWJlbDogc3RyaW5nO1xuXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBzZWxlY3RlZDogYm9vbGVhbjtcblxuICBASW5wdXQoKSBkaXNhYmxlZCA9IGZhbHNlO1xuXG4gIHVpZCA9IHVuaXF1ZUlkKCdjb21iby1vcHRpb24nKTtcblxuICAvLyBXaGV0aGVyIG9yIG5vdCB0aGUgb3B0aW9uIGlzIGN1cnJlbnRseSBhY3RpdmUgYW5kIHJlYWR5IHRvIGJlIHNlbGVjdGVkXG4gIHNldCBhY3RpdmUoYWN0aXZlOiBib29sZWFuKSB7XG4gICAgaWYgKHRoaXMuYWN0aXZlID09PSBhY3RpdmUgfHwgdGhpcy5kZXN0cm95ZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl9hY3RpdmUgPSBhY3RpdmU7XG4gICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XG5cbiAgICBpZiAoYWN0aXZlKSB7XG4gICAgICB0aGlzLnNlcnZpY2UuY29tYm9ib3guaW5wdXRFbC5zZXRBcmlhQWN0aXZlRGVzY2VuZGFudCh0aGlzLnVpZCk7XG4gICAgICB0aGlzLnNjcm9sbEludG9WaWV3KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLnNjcm9sbFRpbWVyKTtcbiAgICB9XG4gIH1cbiAgZ2V0IGFjdGl2ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fYWN0aXZlO1xuICB9XG5cbiAgcHJpdmF0ZSBfYWN0aXZlID0gZmFsc2U7XG5cbiAgcHJpdmF0ZSBzY3JvbGxUaW1lcjogYW55O1xuXG4gIC8vIEZsYWcgdG8gZGlzYWJsZSBzY3JvbGxpbmcgaW50byB2aWV3IHdoZW4gb3B0aW9uIGlzIGFjdGl2YXRlZCB1c2luZyBtb3VzZVxuICBwcml2YXRlIGRpc2FibGVOZXh0U2Nyb2xsSW50b1ZpZXcgPSBmYWxzZTtcblxuICBwcml2YXRlIGRlc3Ryb3llZCA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudDogRWxlbWVudFJlZixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBzZXJ2aWNlOiBOZ2xDb21ib2JveFNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgY2Q6IENoYW5nZURldGVjdG9yUmVmLFxuICAgICAgICAgICAgICBwcml2YXRlIG5nWm9uZTogTmdab25lLFxuICAgICAgICAgICAgICByZW5kZXJlcjogUmVuZGVyZXIyKSB7XG4gICAgcmVuZGVyZXIuYWRkQ2xhc3MoZWxlbWVudC5uYXRpdmVFbGVtZW50LCAnc2xkcy1saXN0Ym94X19pdGVtJyk7XG4gICAgcmVuZGVyZXIuc2V0QXR0cmlidXRlKGVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ3JvbGUnLCAncHJlc2VudGF0aW9uJyk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdtb3VzZWRvd24nLCBbJyRldmVudCddKVxuICBvblNlbGVjdFZpYUludGVyYWN0aW9uKGV2dDogTW91c2VFdmVudCkge1xuICAgIHRyYXBFdmVudChldnQpO1xuICAgIGlmICghdGhpcy5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5zZXJ2aWNlLmNvbWJvYm94Lm9uT3B0aW9uU2VsZWN0aW9uKHRoaXMpO1xuICAgIH1cbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ21vdXNlZW50ZXInKVxuICBob3ZlcigpIHtcbiAgICBpZiAoIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuZGlzYWJsZU5leHRTY3JvbGxJbnRvVmlldyA9IHRydWU7XG4gICAgICB0aGlzLnNlcnZpY2UuY29tYm9ib3gua2V5TWFuYWdlci5zZXRBY3RpdmVJdGVtKHRoaXMpO1xuICAgIH1cbiAgfVxuXG4gIHNldEFjdGl2ZVN0eWxlcygpOiB2b2lkIHtcbiAgICB0aGlzLmFjdGl2ZSA9IHRydWU7XG4gIH1cblxuICBzZXRJbmFjdGl2ZVN0eWxlcygpOiB2b2lkIHtcbiAgICB0aGlzLmFjdGl2ZSA9IGZhbHNlO1xuICB9XG5cbiAgc2Nyb2xsSW50b1ZpZXcoKSB7XG4gICAgaWYgKHRoaXMuZGlzYWJsZU5leHRTY3JvbGxJbnRvVmlldykge1xuICAgICAgdGhpcy5kaXNhYmxlTmV4dFNjcm9sbEludG9WaWV3ID0gZmFsc2U7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgdGhpcy5zY3JvbGxUaW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBjb25zdCBsaTogSFRNTEVsZW1lbnQgPSB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudDtcbiAgICAgICAgbWVudUl0ZW1TY3JvbGwobGkucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LCBsaSk7XG4gICAgICB9LCAwKTtcbiAgICB9KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuZGVzdHJveWVkID0gdHJ1ZTtcbiAgICBjbGVhclRpbWVvdXQodGhpcy5zY3JvbGxUaW1lcik7XG4gIH1cbn1cbiJdfQ==
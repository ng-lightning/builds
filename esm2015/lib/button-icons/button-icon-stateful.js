import { __decorate } from "tslib";
import { Component, Input, ElementRef, Renderer2, ChangeDetectionStrategy, Output, EventEmitter, HostListener, HostBinding } from '@angular/core';
import { HostService } from '../common/host/host.service';
import { InputBoolean } from '../util/convert';
const DEFAULT_VARIANT = 'border';
export class NglButtonIconStateful {
    constructor(el, hostService, renderer) {
        this.el = el;
        this.hostService = hostService;
        /**
         * Specifies whether button is in selected state or not.
         */
        this.selected = false;
        this.selectedChange = new EventEmitter();
        /**
         * The variant changes the appearance of the button.
         */
        this.variant = DEFAULT_VARIANT;
        /**
         *  The size of the button.
         */
        this.size = null;
        renderer.addClass(this.el.nativeElement, 'slds-button');
        renderer.addClass(this.el.nativeElement, 'slds-button_icon');
    }
    get altText() {
        return this.alternativeText || this.title;
    }
    onclick() {
        this.selectedChange.emit(!this.selected);
    }
    ngOnInit() {
        this.setHostClass();
    }
    ngOnChanges() {
        this.setHostClass();
    }
    setHostClass() {
        this.hostService.updateClass(this.el, {
            [`slds-button_icon-${this.variant || DEFAULT_VARIANT}`]: true,
            [`slds-button_icon-${this.size}`]: !!this.size,
        });
    }
}
NglButtonIconStateful.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: '[nglButtonIconStateful]',
                template: "\n<svg class=\"slds-button__icon\" *ngIf=\"iconName\" [nglIconName]=\"iconName\"></svg>\n<ng-content></ng-content><span class=\"slds-assistive-text\" *ngIf=\"altText as text\">{{ text }}</span>",
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [HostService]
            },] }
];
NglButtonIconStateful.ctorParameters = () => [
    { type: ElementRef },
    { type: HostService },
    { type: Renderer2 }
];
NglButtonIconStateful.propDecorators = {
    selected: [{ type: HostBinding, args: ['class.slds-is-selected',] }, { type: HostBinding, args: ['attr.aria-pressed',] }, { type: Input }],
    selectedChange: [{ type: Output }],
    iconName: [{ type: Input }],
    title: [{ type: Input }],
    alternativeText: [{ type: Input }],
    variant: [{ type: Input }],
    size: [{ type: Input }],
    onclick: [{ type: HostListener, args: ['click',] }]
};
__decorate([
    InputBoolean()
], NglButtonIconStateful.prototype, "selected", void 0);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLWljb24tc3RhdGVmdWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1saWdodG5pbmcvc3JjL2xpYi9idXR0b24taWNvbnMvYnV0dG9uLWljb24tc3RhdGVmdWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsdUJBQXVCLEVBQ2hFLE1BQU0sRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoRixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDMUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE1BQU0sZUFBZSxHQUFHLFFBQVEsQ0FBQztBQVNqQyxNQUFNLE9BQU8scUJBQXFCO0lBMkNoQyxZQUFvQixFQUFjLEVBQVUsV0FBd0IsRUFBRSxRQUFtQjtRQUFyRSxPQUFFLEdBQUYsRUFBRSxDQUFZO1FBQVUsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUF6Q3BFOztXQUVHO1FBR3NCLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFFaEMsbUJBQWMsR0FBRyxJQUFJLFlBQVksRUFBVyxDQUFDO1FBb0J2RDs7V0FFRztRQUNNLFlBQU8sR0FBa0QsZUFBZSxDQUFDO1FBRWxGOztXQUVHO1FBQ00sU0FBSSxHQUE0QyxJQUFJLENBQUM7UUFPNUQsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxhQUFhLENBQUMsQ0FBQztRQUN4RCxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLGtCQUFrQixDQUFDLENBQUM7SUFDL0QsQ0FBQztJQVBELElBQUksT0FBTztRQUNULE9BQU8sSUFBSSxDQUFDLGVBQWUsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQzVDLENBQUM7SUFRRCxPQUFPO1FBQ0wsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUVPLFlBQVk7UUFDbEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRTtZQUNwQyxDQUFDLG9CQUFvQixJQUFJLENBQUMsT0FBTyxJQUFJLGVBQWUsRUFBRSxDQUFDLEVBQUUsSUFBSTtZQUM3RCxDQUFDLG9CQUFvQixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUk7U0FDL0MsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7O1lBekVGLFNBQVMsU0FBQztnQkFDVCw4Q0FBOEM7Z0JBQzlDLFFBQVEsRUFBRSx5QkFBeUI7Z0JBQ25DLDZNQUEwQztnQkFDMUMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLFNBQVMsRUFBRSxDQUFDLFdBQVcsQ0FBQzthQUN6Qjs7O1lBYjBCLFVBQVU7WUFFNUIsV0FBVztZQUZtQixTQUFTOzs7dUJBbUI3QyxXQUFXLFNBQUMsd0JBQXdCLGNBQ3BDLFdBQVcsU0FBQyxtQkFBbUIsY0FDL0IsS0FBSzs2QkFFTCxNQUFNO3VCQU9OLEtBQUs7b0JBS0wsS0FBSzs4QkFNTCxLQUFLO3NCQUtMLEtBQUs7bUJBS0wsS0FBSztzQkFXTCxZQUFZLFNBQUMsT0FBTzs7QUF6Q0k7SUFBZixZQUFZLEVBQUU7dURBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgRWxlbWVudFJlZiwgUmVuZGVyZXIyLCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgT25Jbml0LCBPbkNoYW5nZXMsXG4gICAgICAgICBPdXRwdXQsIEV2ZW50RW1pdHRlciwgSG9zdExpc3RlbmVyLCBIb3N0QmluZGluZyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSG9zdFNlcnZpY2UgfSBmcm9tICcuLi9jb21tb24vaG9zdC9ob3N0LnNlcnZpY2UnO1xuaW1wb3J0IHsgSW5wdXRCb29sZWFuIH0gZnJvbSAnLi4vdXRpbC9jb252ZXJ0JztcblxuY29uc3QgREVGQVVMVF9WQVJJQU5UID0gJ2JvcmRlcic7XG5cbkBDb21wb25lbnQoe1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXG4gIHNlbGVjdG9yOiAnW25nbEJ1dHRvbkljb25TdGF0ZWZ1bF0nLFxuICB0ZW1wbGF0ZVVybDogJy4vYnV0dG9uLWljb24tc3RhdGVmdWwuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBwcm92aWRlcnM6IFtIb3N0U2VydmljZV0sXG59KVxuZXhwb3J0IGNsYXNzIE5nbEJ1dHRvbkljb25TdGF0ZWZ1bCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcblxuICAvKipcbiAgICogU3BlY2lmaWVzIHdoZXRoZXIgYnV0dG9uIGlzIGluIHNlbGVjdGVkIHN0YXRlIG9yIG5vdC5cbiAgICovXG4gIEBIb3N0QmluZGluZygnY2xhc3Muc2xkcy1pcy1zZWxlY3RlZCcpXG4gIEBIb3N0QmluZGluZygnYXR0ci5hcmlhLXByZXNzZWQnKVxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgc2VsZWN0ZWQgPSBmYWxzZTtcblxuICBAT3V0cHV0KCkgc2VsZWN0ZWRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG5cbiAgLyoqXG4gICAqIExEUyBuYW1lIG9mIHRoZSBpY29uLlxuICAgKiBOYW1lcyBhcmUgd3JpdHRlbiBpbiB0aGUgZm9ybWF0ICd1dGlsaXR5OmRvd24nIHdoZXJlICd1dGlsaXR5JyBpcyB0aGUgY2F0ZWdvcnksIGFuZCAnZG93bicgaXMgdGhlIHNwZWNpZmljIGljb24gdG8gYmUgZGlzcGxheWVkLlxuICAgKiBPbmx5IHV0aWxpdHkgaWNvbnMgY2FuIGJlIHVzZWQgaW4gdGhpcyBjb21wb25lbnQuXG4gICAqL1xuICBASW5wdXQoKSBpY29uTmFtZTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBGYWxsYmFjayB2YWx1ZSBmb3IgYGFsdGVybmF0aXZlVGV4dGAuXG4gICAqL1xuICBASW5wdXQoKSB0aXRsZTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUaGUgYWx0ZXJuYXRpdmUgdGV4dCB1c2VkIHRvIGRlc2NyaWJlIHRoZSBpY29uLlxuICAgKiBUaGlzIHRleHQgc2hvdWxkIGRlc2NyaWJlIHdoYXQgaGFwcGVucywgbm90IHdoYXQgdGhlIGljb24gbG9va3MgbGlrZS5cbiAgICovXG4gIEBJbnB1dCgpIGFsdGVybmF0aXZlVGV4dDtcblxuICAvKipcbiAgICogVGhlIHZhcmlhbnQgY2hhbmdlcyB0aGUgYXBwZWFyYW5jZSBvZiB0aGUgYnV0dG9uLlxuICAgKi9cbiAgQElucHV0KCkgdmFyaWFudDogJ2JvcmRlcicgfCAnYm9yZGVyLWZpbGxlZCcgfCAnYm9yZGVyLWludmVyc2UnID0gREVGQVVMVF9WQVJJQU5UO1xuXG4gIC8qKlxuICAgKiAgVGhlIHNpemUgb2YgdGhlIGJ1dHRvbi5cbiAgICovXG4gIEBJbnB1dCgpIHNpemU6ICd4eC1zbWFsbCcgfCAneC1zbWFsbCcgfCAnc21hbGwnIHwgbnVsbCA9IG51bGw7XG5cbiAgZ2V0IGFsdFRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuYWx0ZXJuYXRpdmVUZXh0IHx8IHRoaXMudGl0bGU7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmLCBwcml2YXRlIGhvc3RTZXJ2aWNlOiBIb3N0U2VydmljZSwgcmVuZGVyZXI6IFJlbmRlcmVyMikge1xuICAgIHJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgJ3NsZHMtYnV0dG9uJyk7XG4gICAgcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbC5uYXRpdmVFbGVtZW50LCAnc2xkcy1idXR0b25faWNvbicpO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snKVxuICBvbmNsaWNrKCkge1xuICAgIHRoaXMuc2VsZWN0ZWRDaGFuZ2UuZW1pdCghdGhpcy5zZWxlY3RlZCk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnNldEhvc3RDbGFzcygpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKSB7XG4gICAgdGhpcy5zZXRIb3N0Q2xhc3MoKTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0SG9zdENsYXNzKCkge1xuICAgIHRoaXMuaG9zdFNlcnZpY2UudXBkYXRlQ2xhc3ModGhpcy5lbCwge1xuICAgICAgW2BzbGRzLWJ1dHRvbl9pY29uLSR7dGhpcy52YXJpYW50IHx8IERFRkFVTFRfVkFSSUFOVH1gXTogdHJ1ZSxcbiAgICAgIFtgc2xkcy1idXR0b25faWNvbi0ke3RoaXMuc2l6ZX1gXTogISF0aGlzLnNpemUsXG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==
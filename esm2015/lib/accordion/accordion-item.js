import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, ElementRef, Renderer2 } from '@angular/core';
import { uniqueId } from '../util/util';
export class NglAccordionItem {
    constructor(element, renderer) {
        this.toggle = new EventEmitter();
        this.uid = uniqueId('accordion-item');
        renderer.addClass(element.nativeElement, 'slds-accordion__list-item');
    }
    onToggle() {
        this.toggle.emit();
    }
}
NglAccordionItem.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'li[nglAccordionItem]',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: "\n<section class=\"slds-accordion__section\" [class.slds-is-open]=\"isActive\">\n  <div class=\"slds-accordion__summary\">\n    <h3 class=\"slds-accordion__summary-heading\" (click)=\"onToggle()\">\n      <button class=\"slds-button slds-button_reset slds-accordion__summary-action\" [attr.aria-controls]=\"uid\" [attr.aria-expanded]=\"isActive\" type=\"button\">\n        <svg class=\"slds-accordion__summary-action-icon slds-button__icon slds-button__icon_left\" nglIconName=\"utility:switch\"></svg><span class=\"slds-truncate\" [nglInternalOutlet]=\"section.label\" [nglInternalOutletContext]=\"{$implicit: section.labelContext}\"></span>\n      </button>\n    </h3>\n  </div>\n  <div class=\"slds-accordion__content\" [attr.hidden]=\"isActive ? null : ''\" [id]=\"uid\">\n    <ng-container *ngIf=\"isActive\">\n      <ng-template [ngTemplateOutlet]=\"section.templateRef\"></ng-template>\n    </ng-container>\n  </div>\n</section>"
            },] }
];
NglAccordionItem.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
NglAccordionItem.propDecorators = {
    isActive: [{ type: Input }],
    section: [{ type: Input }],
    toggle: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3JkaW9uLWl0ZW0uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1saWdodG5pbmcvc3JjL2xpYi9hY2NvcmRpb24vYWNjb3JkaW9uLWl0ZW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSx1QkFBdUIsRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXZILE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFReEMsTUFBTSxPQUFPLGdCQUFnQjtJQVUzQixZQUFZLE9BQW1CLEVBQUUsUUFBbUI7UUFKMUMsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFFdEMsUUFBRyxHQUFHLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBRy9CLFFBQVEsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSwyQkFBMkIsQ0FBQyxDQUFDO0lBQ3hFLENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNyQixDQUFDOzs7WUF0QkYsU0FBUyxTQUFDO2dCQUNULDhDQUE4QztnQkFDOUMsUUFBUSxFQUFFLHNCQUFzQjtnQkFDaEMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLG03QkFBb0M7YUFDckM7OztZQVR5RSxVQUFVO1lBQUUsU0FBUzs7O3VCQVk1RixLQUFLO3NCQUVMLEtBQUs7cUJBRUwsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgRWxlbWVudFJlZiwgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ2xBY2NvcmRpb25TZWN0aW9uIH0gZnJvbSAnLi9hY2NvcmRpb24tc2VjdGlvbic7XG5pbXBvcnQgeyB1bmlxdWVJZCB9IGZyb20gJy4uL3V0aWwvdXRpbCc7XG5cbkBDb21wb25lbnQoe1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXG4gIHNlbGVjdG9yOiAnbGlbbmdsQWNjb3JkaW9uSXRlbV0nLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgdGVtcGxhdGVVcmw6ICcuL2FjY29yZGlvbi1pdGVtLmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBOZ2xBY2NvcmRpb25JdGVtIHtcblxuICBASW5wdXQoKSBpc0FjdGl2ZTogYm9vbGVhbjtcblxuICBASW5wdXQoKSBzZWN0aW9uOiBOZ2xBY2NvcmRpb25TZWN0aW9uO1xuXG4gIEBPdXRwdXQoKSB0b2dnbGUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgdWlkID0gdW5pcXVlSWQoJ2FjY29yZGlvbi1pdGVtJyk7XG5cbiAgY29uc3RydWN0b3IoZWxlbWVudDogRWxlbWVudFJlZiwgcmVuZGVyZXI6IFJlbmRlcmVyMikge1xuICAgIHJlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ3NsZHMtYWNjb3JkaW9uX19saXN0LWl0ZW0nKTtcbiAgfVxuXG4gIG9uVG9nZ2xlKCkge1xuICAgIHRoaXMudG9nZ2xlLmVtaXQoKTtcbiAgfVxufVxuIl19
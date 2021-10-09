import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NglPill } from './pill';
export class NglPillLink {
    constructor(pill) {
        pill.linked = true;
    }
}
NglPillLink.decorators = [
    { type: Component, args: [{
                //  tslint:disable-next-line:component-selector
                selector: 'a[nglPillAction]',
                template: "<span class=\"slds-pill__label\">\n  <ng-content></ng-content></span>",
                changeDetection: ChangeDetectionStrategy.OnPush,
                host: {
                    '[class.slds-pill__action]': 'true',
                }
            },] }
];
NglPillLink.ctorParameters = () => [
    { type: NglPill }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGlsbC1saW5rLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctbGlnaHRuaW5nL3NyYy9saWIvcGlsbHMvcGlsbC1saW5rLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLFFBQVEsQ0FBQztBQVdqQyxNQUFNLE9BQU8sV0FBVztJQUV0QixZQUFZLElBQWE7UUFDdkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7SUFDckIsQ0FBQzs7O1lBYkYsU0FBUyxTQUFDO2dCQUNULCtDQUErQztnQkFDL0MsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIsaUZBQStCO2dCQUMvQixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsSUFBSSxFQUFFO29CQUNKLDJCQUEyQixFQUFFLE1BQU07aUJBQ3BDO2FBQ0Y7OztZQVZRLE9BQU8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ2xQaWxsIH0gZnJvbSAnLi9waWxsJztcblxuQENvbXBvbmVudCh7XG4gIC8vICB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXG4gIHNlbGVjdG9yOiAnYVtuZ2xQaWxsQWN0aW9uXScsXG4gIHRlbXBsYXRlVXJsOiAnLi9waWxsLWxpbmsuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5zbGRzLXBpbGxfX2FjdGlvbl0nOiAndHJ1ZScsXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgTmdsUGlsbExpbmsge1xuXG4gIGNvbnN0cnVjdG9yKHBpbGw6IE5nbFBpbGwpIHtcbiAgICBwaWxsLmxpbmtlZCA9IHRydWU7XG4gIH1cblxufVxuIl19
import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { BaseDynamicIconComponent } from '../base-dynamic-icon';
export class NglDynamicIconScore extends BaseDynamicIconComponent {
    set option(option) {
        this._option = option || 'positive';
    }
    get option() {
        return this._option;
    }
}
NglDynamicIconScore.decorators = [
    { type: Component, args: [{
                selector: 'ngl-dynamic-icon-score',
                template: "<span class=\"slds-icon-score\" [attr.data-slds-state]=\"option\">\n  <svg class=\"slds-icon-score__positive\" viewBox=\"0 0 5 5\" aria-hidden=\"true\">\n    <circle cx=\"50%\" cy=\"50%\" r=\"1.875\"></circle>\n  </svg>\n  <svg class=\"slds-icon-score__negative\" viewBox=\"0 0 5 5\" aria-hidden=\"true\">\n    <circle cx=\"50%\" cy=\"50%\" r=\"1.875\"></circle>\n  </svg><span class=\"slds-assistive-text\" *ngIf=\"alternativeText\">{{alternativeText}}</span></span>",
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
NglDynamicIconScore.propDecorators = {
    option: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NvcmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1saWdodG5pbmcvc3JjL2xpYi9keW5hbWljaWNvbnMvc2NvcmUvc2NvcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSx1QkFBdUIsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFTaEUsTUFBTSxPQUFPLG1CQUFvQixTQUFRLHdCQUF3QjtJQUUvRCxJQUFhLE1BQU0sQ0FBQyxNQUFpQztRQUNuRCxJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sSUFBSSxVQUFVLENBQUM7SUFDdEMsQ0FBQztJQUNELElBQUksTUFBTTtRQUNSLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN0QixDQUFDOzs7WUFaRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHdCQUF3QjtnQkFDbEMsK2RBQTJCO2dCQUMzQixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDs7O3FCQUdFLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmFzZUR5bmFtaWNJY29uQ29tcG9uZW50IH0gZnJvbSAnLi4vYmFzZS1keW5hbWljLWljb24nO1xuXG5leHBvcnQgdHlwZSBOZ2xEeW5hbWljSWNvblNjb3JlT3B0aW9uID0gJ3Bvc2l0aXZlJyB8ICduZWdhdGl2ZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25nbC1keW5hbWljLWljb24tc2NvcmUnLFxuICB0ZW1wbGF0ZVVybDogJy4vc2NvcmUuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBOZ2xEeW5hbWljSWNvblNjb3JlIGV4dGVuZHMgQmFzZUR5bmFtaWNJY29uQ29tcG9uZW50IHtcblxuICBASW5wdXQoKSBzZXQgb3B0aW9uKG9wdGlvbjogTmdsRHluYW1pY0ljb25TY29yZU9wdGlvbikge1xuICAgIHRoaXMuX29wdGlvbiA9IG9wdGlvbiB8fCAncG9zaXRpdmUnO1xuICB9XG4gIGdldCBvcHRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX29wdGlvbjtcbiAgfVxuXG4gIHByaXZhdGUgX29wdGlvbjogTmdsRHluYW1pY0ljb25TY29yZU9wdGlvbjtcblxufVxuIl19
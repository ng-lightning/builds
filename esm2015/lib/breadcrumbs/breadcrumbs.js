import { Component, ChangeDetectionStrategy, Input, ContentChildren } from '@angular/core';
import { NglBreadcrumb } from './breadcrumb';
export class NglBreadcrumbs {
}
NglBreadcrumbs.decorators = [
    { type: Component, args: [{
                selector: 'ngl-breadcrumbs',
                template: "\n<nav role=\"navigation\" [attr.aria-label]=\"assistiveText\">\n  <ol class=\"slds-breadcrumb slds-list_horizontal slds-wrap\">\n    <li class=\"slds-breadcrumb__item\" *ngFor=\"let b of breadcrumbs\">\n      <ng-template [ngTemplateOutlet]=\"b.templateRef\"></ng-template>\n    </li>\n  </ol>\n</nav>",
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
NglBreadcrumbs.propDecorators = {
    assistiveText: [{ type: Input }],
    breadcrumbs: [{ type: ContentChildren, args: [NglBreadcrumb,] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJlYWRjcnVtYnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1saWdodG5pbmcvc3JjL2xpYi9icmVhZGNydW1icy9icmVhZGNydW1icy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLHVCQUF1QixFQUFFLEtBQUssRUFBRSxlQUFlLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFDdEcsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQU83QyxNQUFNLE9BQU8sY0FBYzs7O1lBTDFCLFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsaUJBQWlCO2dCQUMzQiwwVEFBaUM7Z0JBQ2pDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQy9DOzs7NEJBRUUsS0FBSzswQkFDTCxlQUFlLFNBQUMsYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIElucHV0LCBDb250ZW50Q2hpbGRyZW4sIFF1ZXJ5TGlzdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmdsQnJlYWRjcnVtYiB9IGZyb20gJy4vYnJlYWRjcnVtYic7XG5cbkBDb21wb25lbnQoe1xuIHNlbGVjdG9yOiAnbmdsLWJyZWFkY3J1bWJzJyxcbiB0ZW1wbGF0ZVVybDogJy4vYnJlYWRjcnVtYnMuaHRtbCcsXG4gY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIE5nbEJyZWFkY3J1bWJzIHtcbiAgQElucHV0KCkgYXNzaXN0aXZlVGV4dDogc3RyaW5nO1xuICBAQ29udGVudENoaWxkcmVuKE5nbEJyZWFkY3J1bWIpIGJyZWFkY3J1bWJzOiBRdWVyeUxpc3Q8TmdsQnJlYWRjcnVtYj47XG59XG4iXX0=
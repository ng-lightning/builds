import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NglBreadcrumbs } from './breadcrumbs';
import { NglBreadcrumb } from './breadcrumb';
const NGL_BREADCRUMB_DIRECTIVES = [
    NglBreadcrumbs,
    NglBreadcrumb,
];
export class NglBreadcrumbsModule {
}
NglBreadcrumbsModule.decorators = [
    { type: NgModule, args: [{
                declarations: [NGL_BREADCRUMB_DIRECTIVES],
                exports: [NGL_BREADCRUMB_DIRECTIVES],
                imports: [CommonModule],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctbGlnaHRuaW5nL3NyYy9saWIvYnJlYWRjcnVtYnMvbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUU3QyxNQUFNLHlCQUF5QixHQUFHO0lBQ2hDLGNBQWM7SUFDZCxhQUFhO0NBQ2QsQ0FBQztBQU9GLE1BQU0sT0FBTyxvQkFBb0I7OztZQUxoQyxRQUFRLFNBQUM7Z0JBQ1IsWUFBWSxFQUFFLENBQUMseUJBQXlCLENBQUM7Z0JBQ3pDLE9BQU8sRUFBRSxDQUFDLHlCQUF5QixDQUFDO2dCQUNwQyxPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7YUFDeEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgTmdsQnJlYWRjcnVtYnMgfSBmcm9tICcuL2JyZWFkY3J1bWJzJztcbmltcG9ydCB7IE5nbEJyZWFkY3J1bWIgfSBmcm9tICcuL2JyZWFkY3J1bWInO1xuXG5jb25zdCBOR0xfQlJFQURDUlVNQl9ESVJFQ1RJVkVTID0gW1xuICBOZ2xCcmVhZGNydW1icyxcbiAgTmdsQnJlYWRjcnVtYixcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW05HTF9CUkVBRENSVU1CX0RJUkVDVElWRVNdLFxuICBleHBvcnRzOiBbTkdMX0JSRUFEQ1JVTUJfRElSRUNUSVZFU10sXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxufSlcbmV4cG9ydCBjbGFzcyBOZ2xCcmVhZGNydW1ic01vZHVsZSB7fVxuIl19
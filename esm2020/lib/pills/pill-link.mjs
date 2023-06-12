import { Component, ChangeDetectionStrategy } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./pill";
export class NglPillLink {
    constructor(pill) {
        pill.linked = true;
    }
}
NglPillLink.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglPillLink, deps: [{ token: i1.NglPill }], target: i0.ɵɵFactoryTarget.Component });
NglPillLink.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: NglPillLink, selector: "a[nglPillAction]", host: { properties: { "class.slds-pill__action": "true" } }, ngImport: i0, template: "<span class=\"slds-pill__label\">\n  <ng-content></ng-content></span>", changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglPillLink, decorators: [{
            type: Component,
            args: [{ selector: 'a[nglPillAction]', changeDetection: ChangeDetectionStrategy.OnPush, host: {
                        '[class.slds-pill__action]': 'true',
                    }, template: "<span class=\"slds-pill__label\">\n  <ng-content></ng-content></span>" }]
        }], ctorParameters: function () { return [{ type: i1.NglPill }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGlsbC1saW5rLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctbGlnaHRuaW5nL3NyYy9saWIvcGlsbHMvcGlsbC1saW5rLnRzIiwiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctbGlnaHRuaW5nL3NyYy9saWIvcGlsbHMvcGlsbC1saW5rLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7O0FBWW5FLE1BQU0sT0FBTyxXQUFXO0lBRXRCLFlBQVksSUFBYTtRQUN2QixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztJQUNyQixDQUFDOzt3R0FKVSxXQUFXOzRGQUFYLFdBQVcscUhDWnhCLHVFQUNrQzsyRkRXckIsV0FBVztrQkFUdkIsU0FBUzsrQkFFRSxrQkFBa0IsbUJBRVgsdUJBQXVCLENBQUMsTUFBTSxRQUN6Qzt3QkFDSiwyQkFBMkIsRUFBRSxNQUFNO3FCQUNwQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5nbFBpbGwgfSBmcm9tICcuL3BpbGwnO1xuXG5AQ29tcG9uZW50KHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBhbmd1bGFyLWVzbGludC9jb21wb25lbnQtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICdhW25nbFBpbGxBY3Rpb25dJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3BpbGwtbGluay5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLnNsZHMtcGlsbF9fYWN0aW9uXSc6ICd0cnVlJyxcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBOZ2xQaWxsTGluayB7XG5cbiAgY29uc3RydWN0b3IocGlsbDogTmdsUGlsbCkge1xuICAgIHBpbGwubGlua2VkID0gdHJ1ZTtcbiAgfVxuXG59XG4iLCI8c3BhbiBjbGFzcz1cInNsZHMtcGlsbF9fbGFiZWxcIj5cbiAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50Pjwvc3Bhbj4iXX0=
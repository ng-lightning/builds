import { Component, Input, ChangeDetectionStrategy, ContentChild } from '@angular/core';
import { NglCheckboxInput } from '../input/input';
import * as i0 from "@angular/core";
import * as i1 from "../../util/outlet";
export class NglCheckboxButton {
    constructor(cd) {
        this.cd = cd;
    }
    ngAfterContentInit() {
        if (!this.input) {
            throw Error(`[ng-lightning] Couldn't find an <input type="checkbox"> with [ngl] attribute inside ${this}`);
        }
        this._uid = this.input.id;
        this.cd.detectChanges();
        this.input.addClass('slds-assistive-text');
    }
}
NglCheckboxButton.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglCheckboxButton, deps: [{ token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component });
NglCheckboxButton.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: NglCheckboxButton, selector: "ngl-checkbox-button", inputs: { label: "label" }, host: { properties: { "class.slds-checkbox_add-button": "true" } }, queries: [{ propertyName: "input", first: true, predicate: NglCheckboxInput, descendants: true, static: true }], ngImport: i0, template: "\n<ng-content></ng-content>\n<label class=\"slds-checkbox_faux\" [attr.for]=\"_uid\"><span class=\"slds-assistive-text\" [nglInternalOutlet]=\"label\"></span></label>", dependencies: [{ kind: "component", type: i1.NglInternalOutlet, selector: "[nglInternalOutlet]", inputs: ["nglInternalOutlet", "nglInternalOutletContext"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglCheckboxButton, decorators: [{
            type: Component,
            args: [{ selector: 'ngl-checkbox-button', changeDetection: ChangeDetectionStrategy.OnPush, host: {
                        '[class.slds-checkbox_add-button]': 'true',
                    }, template: "\n<ng-content></ng-content>\n<label class=\"slds-checkbox_faux\" [attr.for]=\"_uid\"><span class=\"slds-assistive-text\" [nglInternalOutlet]=\"label\"></span></label>" }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }]; }, propDecorators: { input: [{
                type: ContentChild,
                args: [NglCheckboxInput, { static: true }]
            }], label: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3gtYnV0dG9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctbGlnaHRuaW5nL3NyYy9saWIvY2hlY2tib3hlcy9idXR0b24vY2hlY2tib3gtYnV0dG9uLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctbGlnaHRuaW5nL3NyYy9saWIvY2hlY2tib3hlcy9idXR0b24vY2hlY2tib3gtYnV0dG9uLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsdUJBQXVCLEVBQUUsWUFBWSxFQUFvRCxNQUFNLGVBQWUsQ0FBQztBQUMxSSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7O0FBVWxELE1BQU0sT0FBTyxpQkFBaUI7SUFPNUIsWUFBb0IsRUFBcUI7UUFBckIsT0FBRSxHQUFGLEVBQUUsQ0FBbUI7SUFBRyxDQUFDO0lBRTdDLGtCQUFrQjtRQUNoQixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNmLE1BQU0sS0FBSyxDQUFDLHVGQUF1RixJQUFJLEVBQUUsQ0FBQyxDQUFDO1NBQzVHO1FBRUQsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQztRQUMxQixJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBRXhCLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLHFCQUFxQixDQUFDLENBQUM7SUFDN0MsQ0FBQzs7OEdBbEJVLGlCQUFpQjtrR0FBakIsaUJBQWlCLDhMQUNkLGdCQUFnQiw4RENaaEMsd0tBRWlJOzJGRFNwSCxpQkFBaUI7a0JBUjdCLFNBQVM7K0JBQ0UscUJBQXFCLG1CQUVkLHVCQUF1QixDQUFDLE1BQU0sUUFDekM7d0JBQ0osa0NBQWtDLEVBQUUsTUFBTTtxQkFDM0M7d0dBR2lELEtBQUs7c0JBQXRELFlBQVk7dUJBQUMsZ0JBQWdCLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO2dCQUV2QyxLQUFLO3NCQUFiLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29udGVudENoaWxkLCBDaGFuZ2VEZXRlY3RvclJlZiwgQWZ0ZXJDb250ZW50SW5pdCwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5nbENoZWNrYm94SW5wdXQgfSBmcm9tICcuLi9pbnB1dC9pbnB1dCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25nbC1jaGVja2JveC1idXR0b24nLFxuICB0ZW1wbGF0ZVVybDogJy4vY2hlY2tib3gtYnV0dG9uLmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgaG9zdDoge1xuICAgICdbY2xhc3Muc2xkcy1jaGVja2JveF9hZGQtYnV0dG9uXSc6ICd0cnVlJyxcbiAgfSxcbn0pXG5leHBvcnQgY2xhc3MgTmdsQ2hlY2tib3hCdXR0b24gaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0IHtcbiAgQENvbnRlbnRDaGlsZChOZ2xDaGVja2JveElucHV0LCB7IHN0YXRpYzogdHJ1ZSB9KSBpbnB1dDogTmdsQ2hlY2tib3hJbnB1dDtcblxuICBASW5wdXQoKSBsYWJlbDogc3RyaW5nIHwgVGVtcGxhdGVSZWY8YW55PjtcblxuICBfdWlkOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYpIHt9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAgIGlmICghdGhpcy5pbnB1dCkge1xuICAgICAgdGhyb3cgRXJyb3IoYFtuZy1saWdodG5pbmddIENvdWxkbid0IGZpbmQgYW4gPGlucHV0IHR5cGU9XCJjaGVja2JveFwiPiB3aXRoIFtuZ2xdIGF0dHJpYnV0ZSBpbnNpZGUgJHt0aGlzfWApO1xuICAgIH1cblxuICAgIHRoaXMuX3VpZCA9IHRoaXMuaW5wdXQuaWQ7XG4gICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XG5cbiAgICB0aGlzLmlucHV0LmFkZENsYXNzKCdzbGRzLWFzc2lzdGl2ZS10ZXh0Jyk7XG4gIH1cbn1cbiIsIlxuPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuPGxhYmVsIGNsYXNzPVwic2xkcy1jaGVja2JveF9mYXV4XCIgW2F0dHIuZm9yXT1cIl91aWRcIj48c3BhbiBjbGFzcz1cInNsZHMtYXNzaXN0aXZlLXRleHRcIiBbbmdsSW50ZXJuYWxPdXRsZXRdPVwibGFiZWxcIj48L3NwYW4+PC9sYWJlbD4iXX0=
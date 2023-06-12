import { Component, Input, ChangeDetectionStrategy, ContentChild, HostBinding } from '@angular/core';
import { NglCheckboxInput } from '../input/input';
import { toBoolean } from '../../util/convert';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../../util/outlet";
export class NglCheckboxToggle {
    constructor(cd) {
        this.cd = cd;
        this.enabledText = 'Enabled';
        this.disabledText = 'Disabled';
    }
    get hasError() {
        return toBoolean(this.error);
    }
    ngAfterContentInit() {
        if (!this.input) {
            throw Error(`[ng-lightning] Couldn't find an <input type="checkbox"> with [ngl] attribute inside NglCheckboxToggle`);
        }
        this.ɵRequiredSubscription = this.input.ɵRequiredSubject.subscribe((required) => {
            this.required = required;
            this.cd.detectChanges();
        });
        this.uid = `${this.input.id}_toggle`;
        this.input.describedBy = this.uid;
        this.cd.detectChanges();
    }
    ngOnDestroy() {
        if (this.ɵRequiredSubscription) {
            this.ɵRequiredSubscription.unsubscribe();
            this.ɵRequiredSubscription = null;
        }
    }
}
NglCheckboxToggle.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglCheckboxToggle, deps: [{ token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component });
NglCheckboxToggle.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: NglCheckboxToggle, selector: "ngl-checkbox-toggle", inputs: { label: "label", error: "error", enabledText: "enabledText", disabledText: "disabledText" }, host: { properties: { "class.slds-form-element": "true", "class.slds-has-error": "this.hasError" } }, queries: [{ propertyName: "input", first: true, predicate: NglCheckboxInput, descendants: true, static: true }], ngImport: i0, template: "\n<label class=\"slds-checkbox_toggle slds-grid\"><abbr class=\"slds-required\" *ngIf=\"required\" title=\"required\">*</abbr><span class=\"slds-form-element__label slds-m-bottom_none\" [nglInternalOutlet]=\"label\"></span>\n  <ng-content></ng-content><span class=\"slds-checkbox_faux_container\" [id]=\"uid\" aria-live=\"assertive\"><span class=\"slds-checkbox_faux\"></span><span class=\"slds-checkbox_on\">{{enabledText}}</span><span class=\"slds-checkbox_off\">{{disabledText}}</span></span>\n</label>\n<div class=\"slds-form-element__help\" *ngIf=\"error\">{{error}}</div>", dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i2.NglInternalOutlet, selector: "[nglInternalOutlet]", inputs: ["nglInternalOutlet", "nglInternalOutletContext"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglCheckboxToggle, decorators: [{
            type: Component,
            args: [{ selector: 'ngl-checkbox-toggle', changeDetection: ChangeDetectionStrategy.OnPush, host: {
                        '[class.slds-form-element]': 'true',
                    }, template: "\n<label class=\"slds-checkbox_toggle slds-grid\"><abbr class=\"slds-required\" *ngIf=\"required\" title=\"required\">*</abbr><span class=\"slds-form-element__label slds-m-bottom_none\" [nglInternalOutlet]=\"label\"></span>\n  <ng-content></ng-content><span class=\"slds-checkbox_faux_container\" [id]=\"uid\" aria-live=\"assertive\"><span class=\"slds-checkbox_faux\"></span><span class=\"slds-checkbox_on\">{{enabledText}}</span><span class=\"slds-checkbox_off\">{{disabledText}}</span></span>\n</label>\n<div class=\"slds-form-element__help\" *ngIf=\"error\">{{error}}</div>" }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }]; }, propDecorators: { input: [{
                type: ContentChild,
                args: [NglCheckboxInput, { static: true }]
            }], label: [{
                type: Input
            }], error: [{
                type: Input
            }], enabledText: [{
                type: Input
            }], disabledText: [{
                type: Input
            }], hasError: [{
                type: HostBinding,
                args: ['class.slds-has-error']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3gtdG9nZ2xlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctbGlnaHRuaW5nL3NyYy9saWIvY2hlY2tib3hlcy90b2dnbGUvY2hlY2tib3gtdG9nZ2xlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctbGlnaHRuaW5nL3NyYy9saWIvY2hlY2tib3hlcy90b2dnbGUvY2hlY2tib3gtdG9nZ2xlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsdUJBQXVCLEVBQUUsWUFBWSxFQUMxQyxXQUFXLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFDcEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLG9CQUFvQixDQUFDOzs7O0FBVy9DLE1BQU0sT0FBTyxpQkFBaUI7SUFxQjVCLFlBQW9CLEVBQXFCO1FBQXJCLE9BQUUsR0FBRixFQUFFLENBQW1CO1FBZGhDLGdCQUFXLEdBQUcsU0FBUyxDQUFDO1FBQ3hCLGlCQUFZLEdBQUcsVUFBVSxDQUFDO0lBYVMsQ0FBQztJQVg3QyxJQUNJLFFBQVE7UUFDVixPQUFPLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQVVELGtCQUFrQjtRQUNoQixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNmLE1BQU0sS0FBSyxDQUFDLHVHQUF1RyxDQUFDLENBQUM7U0FDdEg7UUFFRCxJQUFJLENBQUMscUJBQXFCLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsQ0FBQyxRQUFRLEVBQUUsRUFBRTtZQUM5RSxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztZQUN6QixJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQzFCLENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxTQUFTLENBQUM7UUFDckMsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQztRQUNsQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxJQUFJLENBQUMscUJBQXFCLEVBQUU7WUFDOUIsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQ3pDLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLENBQUM7U0FDbkM7SUFDSCxDQUFDOzs4R0EzQ1UsaUJBQWlCO2tHQUFqQixpQkFBaUIsMFNBQ2QsZ0JBQWdCLDhEQ2ZoQyxta0JBSWtFOzJGRFVyRCxpQkFBaUI7a0JBUjdCLFNBQVM7K0JBQ0UscUJBQXFCLG1CQUVkLHVCQUF1QixDQUFDLE1BQU0sUUFDekM7d0JBQ0osMkJBQTJCLEVBQUUsTUFBTTtxQkFDcEM7d0dBR2lELEtBQUs7c0JBQXRELFlBQVk7dUJBQUMsZ0JBQWdCLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO2dCQUV2QyxLQUFLO3NCQUFiLEtBQUs7Z0JBRUcsS0FBSztzQkFBYixLQUFLO2dCQUVHLFdBQVc7c0JBQW5CLEtBQUs7Z0JBQ0csWUFBWTtzQkFBcEIsS0FBSztnQkFHRixRQUFRO3NCQURYLFdBQVc7dUJBQUMsc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbnRlbnRDaGlsZCwgQ2hhbmdlRGV0ZWN0b3JSZWYsIEFmdGVyQ29udGVudEluaXQsXG4gICAgICAgICBUZW1wbGF0ZVJlZiwgSG9zdEJpbmRpbmcsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmdsQ2hlY2tib3hJbnB1dCB9IGZyb20gJy4uL2lucHV0L2lucHV0JztcbmltcG9ydCB7IHRvQm9vbGVhbiB9IGZyb20gJy4uLy4uL3V0aWwvY29udmVydCc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmdsLWNoZWNrYm94LXRvZ2dsZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9jaGVja2JveC10b2dnbGUuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5zbGRzLWZvcm0tZWxlbWVudF0nOiAndHJ1ZScsXG4gIH0sXG59KVxuZXhwb3J0IGNsYXNzIE5nbENoZWNrYm94VG9nZ2xlIGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCwgT25EZXN0cm95IHtcbiAgQENvbnRlbnRDaGlsZChOZ2xDaGVja2JveElucHV0LCB7IHN0YXRpYzogdHJ1ZSB9KSBpbnB1dDogTmdsQ2hlY2tib3hJbnB1dDtcblxuICBASW5wdXQoKSBsYWJlbDogc3RyaW5nIHwgVGVtcGxhdGVSZWY8YW55PjtcblxuICBASW5wdXQoKSBlcnJvcjogc3RyaW5nO1xuXG4gIEBJbnB1dCgpIGVuYWJsZWRUZXh0ID0gJ0VuYWJsZWQnO1xuICBASW5wdXQoKSBkaXNhYmxlZFRleHQgPSAnRGlzYWJsZWQnO1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3Muc2xkcy1oYXMtZXJyb3InKVxuICBnZXQgaGFzRXJyb3IoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRvQm9vbGVhbih0aGlzLmVycm9yKTtcbiAgfVxuXG4gIHJlcXVpcmVkOiBib29sZWFuO1xuXG4gIHVpZDogc3RyaW5nO1xuXG4gIHByaXZhdGUgybVSZXF1aXJlZFN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2Q6IENoYW5nZURldGVjdG9yUmVmKSB7fVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICBpZiAoIXRoaXMuaW5wdXQpIHtcbiAgICAgIHRocm93IEVycm9yKGBbbmctbGlnaHRuaW5nXSBDb3VsZG4ndCBmaW5kIGFuIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIj4gd2l0aCBbbmdsXSBhdHRyaWJ1dGUgaW5zaWRlIE5nbENoZWNrYm94VG9nZ2xlYCk7XG4gICAgfVxuXG4gICAgdGhpcy7JtVJlcXVpcmVkU3Vic2NyaXB0aW9uID0gdGhpcy5pbnB1dC7JtVJlcXVpcmVkU3ViamVjdC5zdWJzY3JpYmUoKHJlcXVpcmVkKSA9PiB7XG4gICAgICB0aGlzLnJlcXVpcmVkID0gcmVxdWlyZWQ7XG4gICAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcbiAgICB9KTtcblxuICAgIHRoaXMudWlkID0gYCR7dGhpcy5pbnB1dC5pZH1fdG9nZ2xlYDtcbiAgICB0aGlzLmlucHV0LmRlc2NyaWJlZEJ5ID0gdGhpcy51aWQ7XG4gICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBpZiAodGhpcy7JtVJlcXVpcmVkU3Vic2NyaXB0aW9uKSB7XG4gICAgICB0aGlzLsm1UmVxdWlyZWRTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgIHRoaXMuybVSZXF1aXJlZFN1YnNjcmlwdGlvbiA9IG51bGw7XG4gICAgfVxuICB9XG59XG4iLCJcbjxsYWJlbCBjbGFzcz1cInNsZHMtY2hlY2tib3hfdG9nZ2xlIHNsZHMtZ3JpZFwiPjxhYmJyIGNsYXNzPVwic2xkcy1yZXF1aXJlZFwiICpuZ0lmPVwicmVxdWlyZWRcIiB0aXRsZT1cInJlcXVpcmVkXCI+KjwvYWJicj48c3BhbiBjbGFzcz1cInNsZHMtZm9ybS1lbGVtZW50X19sYWJlbCBzbGRzLW0tYm90dG9tX25vbmVcIiBbbmdsSW50ZXJuYWxPdXRsZXRdPVwibGFiZWxcIj48L3NwYW4+XG4gIDxuZy1jb250ZW50PjwvbmctY29udGVudD48c3BhbiBjbGFzcz1cInNsZHMtY2hlY2tib3hfZmF1eF9jb250YWluZXJcIiBbaWRdPVwidWlkXCIgYXJpYS1saXZlPVwiYXNzZXJ0aXZlXCI+PHNwYW4gY2xhc3M9XCJzbGRzLWNoZWNrYm94X2ZhdXhcIj48L3NwYW4+PHNwYW4gY2xhc3M9XCJzbGRzLWNoZWNrYm94X29uXCI+e3tlbmFibGVkVGV4dH19PC9zcGFuPjxzcGFuIGNsYXNzPVwic2xkcy1jaGVja2JveF9vZmZcIj57e2Rpc2FibGVkVGV4dH19PC9zcGFuPjwvc3Bhbj5cbjwvbGFiZWw+XG48ZGl2IGNsYXNzPVwic2xkcy1mb3JtLWVsZW1lbnRfX2hlbHBcIiAqbmdJZj1cImVycm9yXCI+e3tlcnJvcn19PC9kaXY+Il19
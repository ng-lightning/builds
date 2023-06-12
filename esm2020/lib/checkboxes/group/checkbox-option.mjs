import { Component, Input, ContentChild, ChangeDetectionStrategy } from '@angular/core';
import { NglCheckboxInput } from '../input/input';
import { HostService } from '../../common/host/host.service';
import * as i0 from "@angular/core";
import * as i1 from "../../common/host/host.service";
import * as i2 from "@angular/common";
import * as i3 from "../../util/outlet";
export class NglCheckboxOption {
    constructor(cd, element, hostService) {
        this.cd = cd;
        this.element = element;
        this.hostService = hostService;
    }
    set type(type) {
        this._type = type;
        this.setHostClass();
        this.cd.detectChanges();
    }
    get type() {
        return this._type;
    }
    setError(id) {
        this.input.describedBy = id;
    }
    setHostClass() {
        this.hostService.updateClass(this.element, {
            [`slds-checkbox`]: this.type === 'list',
            [`slds-button`]: this.type === 'button',
            [`slds-checkbox_button`]: this.type === 'button',
        });
    }
}
NglCheckboxOption.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglCheckboxOption, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i1.HostService }], target: i0.ɵɵFactoryTarget.Component });
NglCheckboxOption.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: NglCheckboxOption, selector: "ngl-checkbox-option", inputs: { label: "label" }, providers: [HostService], queries: [{ propertyName: "input", first: true, predicate: NglCheckboxInput, descendants: true, static: true }], ngImport: i0, template: "\n<ng-content></ng-content>\n<label class=\"slds-checkbox__label\" *ngIf=\"type === 'list'\" [attr.for]=\"input.id\"><span class=\"slds-checkbox_faux\"></span><span class=\"slds-form-element__label\" [nglInternalOutlet]=\"label\"></span></label>\n<label class=\"slds-checkbox_button__label\" *ngIf=\"type === 'button'\" [attr.for]=\"input.id\"><span class=\"slds-checkbox_faux\" [nglInternalOutlet]=\"label\"></span></label>", dependencies: [{ kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i3.NglInternalOutlet, selector: "[nglInternalOutlet]", inputs: ["nglInternalOutlet", "nglInternalOutletContext"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglCheckboxOption, decorators: [{
            type: Component,
            args: [{ selector: 'ngl-checkbox-option', changeDetection: ChangeDetectionStrategy.OnPush, providers: [HostService], template: "\n<ng-content></ng-content>\n<label class=\"slds-checkbox__label\" *ngIf=\"type === 'list'\" [attr.for]=\"input.id\"><span class=\"slds-checkbox_faux\"></span><span class=\"slds-form-element__label\" [nglInternalOutlet]=\"label\"></span></label>\n<label class=\"slds-checkbox_button__label\" *ngIf=\"type === 'button'\" [attr.for]=\"input.id\"><span class=\"slds-checkbox_faux\" [nglInternalOutlet]=\"label\"></span></label>" }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i1.HostService }]; }, propDecorators: { label: [{
                type: Input
            }], input: [{
                type: ContentChild,
                args: [NglCheckboxInput, { static: true }]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3gtb3B0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctbGlnaHRuaW5nL3NyYy9saWIvY2hlY2tib3hlcy9ncm91cC9jaGVja2JveC1vcHRpb24udHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1saWdodG5pbmcvc3JjL2xpYi9jaGVja2JveGVzL2dyb3VwL2NoZWNrYm94LW9wdGlvbi5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWUsS0FBSyxFQUFFLFlBQVksRUFBRSx1QkFBdUIsRUFBaUMsTUFBTSxlQUFlLENBQUM7QUFDcEksT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdDQUFnQyxDQUFDOzs7OztBQVE3RCxNQUFNLE9BQU8saUJBQWlCO0lBSzVCLFlBQW9CLEVBQXFCLEVBQVUsT0FBbUIsRUFBVSxXQUF3QjtRQUFwRixPQUFFLEdBQUYsRUFBRSxDQUFtQjtRQUFVLFlBQU8sR0FBUCxPQUFPLENBQVk7UUFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtJQUFHLENBQUM7SUFFNUcsSUFBSSxJQUFJLENBQUMsSUFBWTtRQUNuQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztRQUNsQixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBQ0QsSUFBSSxJQUFJO1FBQ04sT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3BCLENBQUM7SUFJRCxRQUFRLENBQUMsRUFBVTtRQUNqQixJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUM7SUFDOUIsQ0FBQztJQUVPLFlBQVk7UUFDbEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUN6QyxDQUFDLGVBQWUsQ0FBQyxFQUFFLElBQUksQ0FBQyxJQUFJLEtBQUssTUFBTTtZQUN2QyxDQUFDLGFBQWEsQ0FBQyxFQUFFLElBQUksQ0FBQyxJQUFJLEtBQUssUUFBUTtZQUN2QyxDQUFDLHNCQUFzQixDQUFDLEVBQUUsSUFBSSxDQUFDLElBQUksS0FBSyxRQUFRO1NBQ2pELENBQUMsQ0FBQztJQUNMLENBQUM7OzhHQTVCVSxpQkFBaUI7a0dBQWpCLGlCQUFpQiwwRUFGakIsQ0FBQyxXQUFXLENBQUMsNkRBS1YsZ0JBQWdCLDhEQ2JoQywwYUFHdUs7MkZETzFKLGlCQUFpQjtrQkFON0IsU0FBUzsrQkFDRSxxQkFBcUIsbUJBRWQsdUJBQXVCLENBQUMsTUFBTSxhQUNwQyxDQUFDLFdBQVcsQ0FBQzsySkFHZixLQUFLO3NCQUFiLEtBQUs7Z0JBRTRDLEtBQUs7c0JBQXRELFlBQVk7dUJBQUMsZ0JBQWdCLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBUZW1wbGF0ZVJlZiwgSW5wdXQsIENvbnRlbnRDaGlsZCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ2xDaGVja2JveElucHV0IH0gZnJvbSAnLi4vaW5wdXQvaW5wdXQnO1xuaW1wb3J0IHsgSG9zdFNlcnZpY2UgfSBmcm9tICcuLi8uLi9jb21tb24vaG9zdC9ob3N0LnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZ2wtY2hlY2tib3gtb3B0aW9uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NoZWNrYm94LW9wdGlvbi5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByb3ZpZGVyczogW0hvc3RTZXJ2aWNlXSxcbn0pXG5leHBvcnQgY2xhc3MgTmdsQ2hlY2tib3hPcHRpb24ge1xuICBASW5wdXQoKSBsYWJlbDogc3RyaW5nIHwgVGVtcGxhdGVSZWY8YW55PjtcblxuICBAQ29udGVudENoaWxkKE5nbENoZWNrYm94SW5wdXQsIHsgc3RhdGljOiB0cnVlIH0pIGlucHV0OiBOZ2xDaGVja2JveElucHV0O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2Q6IENoYW5nZURldGVjdG9yUmVmLCBwcml2YXRlIGVsZW1lbnQ6IEVsZW1lbnRSZWYsIHByaXZhdGUgaG9zdFNlcnZpY2U6IEhvc3RTZXJ2aWNlKSB7fVxuXG4gIHNldCB0eXBlKHR5cGU6IHN0cmluZykge1xuICAgIHRoaXMuX3R5cGUgPSB0eXBlO1xuICAgIHRoaXMuc2V0SG9zdENsYXNzKCk7XG4gICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cbiAgZ2V0IHR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3R5cGU7XG4gIH1cblxuICBwcml2YXRlIF90eXBlOiBzdHJpbmc7XG5cbiAgc2V0RXJyb3IoaWQ6IHN0cmluZykge1xuICAgIHRoaXMuaW5wdXQuZGVzY3JpYmVkQnkgPSBpZDtcbiAgfVxuXG4gIHByaXZhdGUgc2V0SG9zdENsYXNzKCkge1xuICAgIHRoaXMuaG9zdFNlcnZpY2UudXBkYXRlQ2xhc3ModGhpcy5lbGVtZW50LCB7XG4gICAgICBbYHNsZHMtY2hlY2tib3hgXTogdGhpcy50eXBlID09PSAnbGlzdCcsXG4gICAgICBbYHNsZHMtYnV0dG9uYF06IHRoaXMudHlwZSA9PT0gJ2J1dHRvbicsXG4gICAgICBbYHNsZHMtY2hlY2tib3hfYnV0dG9uYF06IHRoaXMudHlwZSA9PT0gJ2J1dHRvbicsXG4gICAgfSk7XG4gIH1cblxufVxuIiwiXG48bmctY29udGVudD48L25nLWNvbnRlbnQ+XG48bGFiZWwgY2xhc3M9XCJzbGRzLWNoZWNrYm94X19sYWJlbFwiICpuZ0lmPVwidHlwZSA9PT0gJ2xpc3QnXCIgW2F0dHIuZm9yXT1cImlucHV0LmlkXCI+PHNwYW4gY2xhc3M9XCJzbGRzLWNoZWNrYm94X2ZhdXhcIj48L3NwYW4+PHNwYW4gY2xhc3M9XCJzbGRzLWZvcm0tZWxlbWVudF9fbGFiZWxcIiBbbmdsSW50ZXJuYWxPdXRsZXRdPVwibGFiZWxcIj48L3NwYW4+PC9sYWJlbD5cbjxsYWJlbCBjbGFzcz1cInNsZHMtY2hlY2tib3hfYnV0dG9uX19sYWJlbFwiICpuZ0lmPVwidHlwZSA9PT0gJ2J1dHRvbidcIiBbYXR0ci5mb3JdPVwiaW5wdXQuaWRcIj48c3BhbiBjbGFzcz1cInNsZHMtY2hlY2tib3hfZmF1eFwiIFtuZ2xJbnRlcm5hbE91dGxldF09XCJsYWJlbFwiPjwvc3Bhbj48L2xhYmVsPiJdfQ==
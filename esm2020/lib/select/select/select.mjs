import { Component, Input, ChangeDetectionStrategy, ContentChild, HostBinding } from '@angular/core';
import { NglSelectInput } from '../input/input';
import { toBoolean } from '../../util/convert';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../../forms/label";
import * as i3 from "../../forms/help";
import * as i4 from "../../util/outlet";
export class NglSelect {
    constructor(cd) {
        this.cd = cd;
    }
    get hasError() {
        return toBoolean(this.error);
    }
    get errorId() {
        return `error_${this._uid}`;
    }
    ngOnChanges() {
        this.input.describedBy = this.error ? this.errorId : null;
    }
    ngAfterContentInit() {
        if (!this.input) {
            throw Error(`[ng-lightning] Couldn't find an <select> with [ngl] attribute inside ngl-select`);
        }
        this.ɵRequiredSubscription = this.input.ɵRequiredSubject.subscribe((required) => {
            this.required = required;
            this.cd.detectChanges();
        });
        this._uid = this.input.id;
        this.cd.detectChanges();
    }
    ngOnDestroy() {
        if (this.ɵRequiredSubscription) {
            this.ɵRequiredSubscription.unsubscribe();
            this.ɵRequiredSubscription = null;
        }
    }
}
NglSelect.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglSelect, deps: [{ token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component });
NglSelect.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: NglSelect, selector: "ngl-select,[ngl-select]", inputs: { label: "label", fieldLevelHelpTooltip: "fieldLevelHelpTooltip", error: "error" }, host: { properties: { "class.slds-form-element": "true", "class.slds-has-error": "this.hasError" } }, queries: [{ propertyName: "input", first: true, predicate: NglSelectInput, descendants: true, static: true }], usesOnChanges: true, ngImport: i0, template: "\n<label [nglFormLabel]=\"label\" [attr.for]=\"_uid\" [required]=\"required\"></label>\n<ngl-form-help *ngIf=\"fieldLevelHelpTooltip\" [content]=\"fieldLevelHelpTooltip\"></ngl-form-help>\n<div class=\"slds-form-element__control\">\n  <div class=\"slds-select_container\">\n    <ng-content></ng-content>\n  </div>\n</div>\n<div class=\"slds-form-element__help\" *ngIf=\"hasError\" [id]=\"errorId\" [nglInternalOutlet]=\"error\"></div>", dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i2.NglFormLabel, selector: "label[nglFormLabel]", inputs: ["nglFormLabel", "nglFormLabelClass", "required"] }, { kind: "component", type: i3.NglFormHelp, selector: "ngl-form-help", inputs: ["content"] }, { kind: "component", type: i4.NglInternalOutlet, selector: "[nglInternalOutlet]", inputs: ["nglInternalOutlet", "nglInternalOutletContext"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglSelect, decorators: [{
            type: Component,
            args: [{ selector: 'ngl-select,[ngl-select]', changeDetection: ChangeDetectionStrategy.OnPush, host: {
                        '[class.slds-form-element]': 'true',
                    }, template: "\n<label [nglFormLabel]=\"label\" [attr.for]=\"_uid\" [required]=\"required\"></label>\n<ngl-form-help *ngIf=\"fieldLevelHelpTooltip\" [content]=\"fieldLevelHelpTooltip\"></ngl-form-help>\n<div class=\"slds-form-element__control\">\n  <div class=\"slds-select_container\">\n    <ng-content></ng-content>\n  </div>\n</div>\n<div class=\"slds-form-element__help\" *ngIf=\"hasError\" [id]=\"errorId\" [nglInternalOutlet]=\"error\"></div>" }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }]; }, propDecorators: { input: [{
                type: ContentChild,
                args: [NglSelectInput, { static: true }]
            }], label: [{
                type: Input
            }], fieldLevelHelpTooltip: [{
                type: Input
            }], error: [{
                type: Input
            }], hasError: [{
                type: HostBinding,
                args: ['class.slds-has-error']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctbGlnaHRuaW5nL3NyYy9saWIvc2VsZWN0L3NlbGVjdC9zZWxlY3QudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1saWdodG5pbmcvc3JjL2xpYi9zZWxlY3Qvc2VsZWN0L3NlbGVjdC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLHVCQUF1QixFQUFFLFlBQVksRUFBZSxXQUFXLEVBQ3RCLE1BQU0sZUFBZSxDQUFDO0FBQzFGLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNoRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7Ozs7OztBQVcvQyxNQUFNLE9BQU8sU0FBUztJQXdCcEIsWUFBb0IsRUFBcUI7UUFBckIsT0FBRSxHQUFGLEVBQUUsQ0FBbUI7SUFBRyxDQUFDO0lBZjdDLElBQ0ksUUFBUTtRQUNWLE9BQU8sU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBTUQsSUFBSSxPQUFPO1FBQ1QsT0FBTyxTQUFTLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUM5QixDQUFDO0lBTUQsV0FBVztRQUNULElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUM1RCxDQUFDO0lBRUQsa0JBQWtCO1FBQ2hCLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ2YsTUFBTSxLQUFLLENBQUMsaUZBQWlGLENBQUMsQ0FBQztTQUNoRztRQUVELElBQUksQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFFO1lBQzlFLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1lBQ3pCLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDMUIsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDO1FBQzFCLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLElBQUksQ0FBQyxxQkFBcUIsRUFBRTtZQUM5QixJQUFJLENBQUMscUJBQXFCLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDekMsSUFBSSxDQUFDLHFCQUFxQixHQUFHLElBQUksQ0FBQztTQUNuQztJQUNILENBQUM7O3NHQWpEVSxTQUFTOzBGQUFULFNBQVMsb1NBQ04sY0FBYyxtRkNmOUIsb2JBUXVHOzJGRE0xRixTQUFTO2tCQVJyQixTQUFTOytCQUNFLHlCQUF5QixtQkFFbEIsdUJBQXVCLENBQUMsTUFBTSxRQUN6Qzt3QkFDSiwyQkFBMkIsRUFBRSxNQUFNO3FCQUNwQzt3R0FHK0MsS0FBSztzQkFBcEQsWUFBWTt1QkFBQyxjQUFjLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO2dCQUVyQyxLQUFLO3NCQUFiLEtBQUs7Z0JBRUcscUJBQXFCO3NCQUE3QixLQUFLO2dCQUVHLEtBQUs7c0JBQWIsS0FBSztnQkFHRixRQUFRO3NCQURYLFdBQVc7dUJBQUMsc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbnRlbnRDaGlsZCwgVGVtcGxhdGVSZWYsIEhvc3RCaW5kaW5nLFxuICAgICAgICAgQWZ0ZXJDb250ZW50SW5pdCwgQ2hhbmdlRGV0ZWN0b3JSZWYsIE9uQ2hhbmdlcywgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ2xTZWxlY3RJbnB1dCB9IGZyb20gJy4uL2lucHV0L2lucHV0JztcbmltcG9ydCB7IHRvQm9vbGVhbiB9IGZyb20gJy4uLy4uL3V0aWwvY29udmVydCc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmdsLXNlbGVjdCxbbmdsLXNlbGVjdF0nLFxuICB0ZW1wbGF0ZVVybDogJy4vc2VsZWN0Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgaG9zdDoge1xuICAgICdbY2xhc3Muc2xkcy1mb3JtLWVsZW1lbnRdJzogJ3RydWUnLFxuICB9LFxufSlcbmV4cG9ydCBjbGFzcyBOZ2xTZWxlY3QgaW1wbGVtZW50cyBPbkNoYW5nZXMsIEFmdGVyQ29udGVudEluaXQsIE9uRGVzdHJveSB7XG4gIEBDb250ZW50Q2hpbGQoTmdsU2VsZWN0SW5wdXQsIHsgc3RhdGljOiB0cnVlIH0pIGlucHV0OiBOZ2xTZWxlY3RJbnB1dDtcblxuICBASW5wdXQoKSBsYWJlbDogc3RyaW5nIHwgVGVtcGxhdGVSZWY8YW55PjtcblxuICBASW5wdXQoKSBmaWVsZExldmVsSGVscFRvb2x0aXA6IHN0cmluZyB8IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgQElucHV0KCkgZXJyb3I6IHN0cmluZyB8IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5zbGRzLWhhcy1lcnJvcicpXG4gIGdldCBoYXNFcnJvcigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdG9Cb29sZWFuKHRoaXMuZXJyb3IpO1xuICB9XG5cbiAgcmVxdWlyZWQ6IGJvb2xlYW47XG5cbiAgX3VpZDogc3RyaW5nO1xuXG4gIGdldCBlcnJvcklkKCkge1xuICAgIHJldHVybiBgZXJyb3JfJHt0aGlzLl91aWR9YDtcbiAgfVxuXG4gIHByaXZhdGUgybVSZXF1aXJlZFN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2Q6IENoYW5nZURldGVjdG9yUmVmKSB7fVxuXG4gIG5nT25DaGFuZ2VzKCkge1xuICAgIHRoaXMuaW5wdXQuZGVzY3JpYmVkQnkgPSB0aGlzLmVycm9yID8gdGhpcy5lcnJvcklkIDogbnVsbDtcbiAgfVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICBpZiAoIXRoaXMuaW5wdXQpIHtcbiAgICAgIHRocm93IEVycm9yKGBbbmctbGlnaHRuaW5nXSBDb3VsZG4ndCBmaW5kIGFuIDxzZWxlY3Q+IHdpdGggW25nbF0gYXR0cmlidXRlIGluc2lkZSBuZ2wtc2VsZWN0YCk7XG4gICAgfVxuXG4gICAgdGhpcy7JtVJlcXVpcmVkU3Vic2NyaXB0aW9uID0gdGhpcy5pbnB1dC7JtVJlcXVpcmVkU3ViamVjdC5zdWJzY3JpYmUoKHJlcXVpcmVkKSA9PiB7XG4gICAgICB0aGlzLnJlcXVpcmVkID0gcmVxdWlyZWQ7XG4gICAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcbiAgICB9KTtcblxuICAgIHRoaXMuX3VpZCA9IHRoaXMuaW5wdXQuaWQ7XG4gICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBpZiAodGhpcy7JtVJlcXVpcmVkU3Vic2NyaXB0aW9uKSB7XG4gICAgICB0aGlzLsm1UmVxdWlyZWRTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgIHRoaXMuybVSZXF1aXJlZFN1YnNjcmlwdGlvbiA9IG51bGw7XG4gICAgfVxuICB9XG59XG4iLCJcbjxsYWJlbCBbbmdsRm9ybUxhYmVsXT1cImxhYmVsXCIgW2F0dHIuZm9yXT1cIl91aWRcIiBbcmVxdWlyZWRdPVwicmVxdWlyZWRcIj48L2xhYmVsPlxuPG5nbC1mb3JtLWhlbHAgKm5nSWY9XCJmaWVsZExldmVsSGVscFRvb2x0aXBcIiBbY29udGVudF09XCJmaWVsZExldmVsSGVscFRvb2x0aXBcIj48L25nbC1mb3JtLWhlbHA+XG48ZGl2IGNsYXNzPVwic2xkcy1mb3JtLWVsZW1lbnRfX2NvbnRyb2xcIj5cbiAgPGRpdiBjbGFzcz1cInNsZHMtc2VsZWN0X2NvbnRhaW5lclwiPlxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgPC9kaXY+XG48L2Rpdj5cbjxkaXYgY2xhc3M9XCJzbGRzLWZvcm0tZWxlbWVudF9faGVscFwiICpuZ0lmPVwiaGFzRXJyb3JcIiBbaWRdPVwiZXJyb3JJZFwiIFtuZ2xJbnRlcm5hbE91dGxldF09XCJlcnJvclwiPjwvZGl2PiJdfQ==
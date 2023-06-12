import { Component, Input, ChangeDetectionStrategy, ContentChild, HostBinding } from '@angular/core';
import { NglTextareaInput } from '../input/input';
import { toBoolean } from '../../util/convert';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../../forms/label";
import * as i3 from "../../forms/help";
export class NglTextarea {
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
            throw Error(`[ng-lightning] Couldn't find an <textarea> with [ngl] attribute inside ngl-textarea`);
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
NglTextarea.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglTextarea, deps: [{ token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component });
NglTextarea.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: NglTextarea, selector: "ngl-textarea,[ngl-textarea]", inputs: { label: "label", fieldLevelHelpTooltip: "fieldLevelHelpTooltip", error: "error" }, host: { properties: { "class.slds-form-element": "true", "class.slds-has-error": "this.hasError" } }, queries: [{ propertyName: "input", first: true, predicate: NglTextareaInput, descendants: true, static: true }], usesOnChanges: true, ngImport: i0, template: "\n<label [nglFormLabel]=\"label\" [attr.for]=\"_uid\" [required]=\"required\"></label>\n<ngl-form-help *ngIf=\"fieldLevelHelpTooltip\" [content]=\"fieldLevelHelpTooltip\"></ngl-form-help>\n<div class=\"slds-form-element__control\">\n  <div class=\"slds-textarea_container\">\n    <ng-content></ng-content>\n  </div>\n</div>\n<div class=\"slds-form-element__help\" *ngIf=\"error\" [id]=\"errorId\">{{error}}</div>", dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i2.NglFormLabel, selector: "label[nglFormLabel]", inputs: ["nglFormLabel", "nglFormLabelClass", "required"] }, { kind: "component", type: i3.NglFormHelp, selector: "ngl-form-help", inputs: ["content"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglTextarea, decorators: [{
            type: Component,
            args: [{ selector: 'ngl-textarea,[ngl-textarea]', changeDetection: ChangeDetectionStrategy.OnPush, host: {
                        '[class.slds-form-element]': 'true',
                    }, template: "\n<label [nglFormLabel]=\"label\" [attr.for]=\"_uid\" [required]=\"required\"></label>\n<ngl-form-help *ngIf=\"fieldLevelHelpTooltip\" [content]=\"fieldLevelHelpTooltip\"></ngl-form-help>\n<div class=\"slds-form-element__control\">\n  <div class=\"slds-textarea_container\">\n    <ng-content></ng-content>\n  </div>\n</div>\n<div class=\"slds-form-element__help\" *ngIf=\"error\" [id]=\"errorId\">{{error}}</div>" }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }]; }, propDecorators: { input: [{
                type: ContentChild,
                args: [NglTextareaInput, { static: true }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dGFyZWEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1saWdodG5pbmcvc3JjL2xpYi90ZXh0YXJlYS90ZXh0YXJlYS90ZXh0YXJlYS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nLWxpZ2h0bmluZy9zcmMvbGliL3RleHRhcmVhL3RleHRhcmVhL3RleHRhcmVhLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsdUJBQXVCLEVBQUUsWUFBWSxFQUFlLFdBQVcsRUFDdEIsTUFBTSxlQUFlLENBQUM7QUFDMUYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLG9CQUFvQixDQUFDOzs7OztBQVcvQyxNQUFNLE9BQU8sV0FBVztJQXdCdEIsWUFBb0IsRUFBcUI7UUFBckIsT0FBRSxHQUFGLEVBQUUsQ0FBbUI7SUFBRyxDQUFDO0lBZjdDLElBQ0ksUUFBUTtRQUNWLE9BQU8sU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBTUQsSUFBSSxPQUFPO1FBQ1QsT0FBTyxTQUFTLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUM5QixDQUFDO0lBTUQsV0FBVztRQUNULElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUM1RCxDQUFDO0lBRUQsa0JBQWtCO1FBQ2hCLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ2YsTUFBTSxLQUFLLENBQUMscUZBQXFGLENBQUMsQ0FBQztTQUNwRztRQUVELElBQUksQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFFO1lBQzlFLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1lBQ3pCLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDMUIsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDO1FBQzFCLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLElBQUksQ0FBQyxxQkFBcUIsRUFBRTtZQUM5QixJQUFJLENBQUMscUJBQXFCLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDekMsSUFBSSxDQUFDLHFCQUFxQixHQUFHLElBQUksQ0FBQztTQUNuQztJQUNILENBQUM7O3dHQWpEVSxXQUFXOzRGQUFYLFdBQVcsd1NBQ1IsZ0JBQWdCLG1GQ2ZoQyw4WkFRaUY7MkZETXBFLFdBQVc7a0JBUnZCLFNBQVM7K0JBQ0UsNkJBQTZCLG1CQUV0Qix1QkFBdUIsQ0FBQyxNQUFNLFFBQ3pDO3dCQUNKLDJCQUEyQixFQUFFLE1BQU07cUJBQ3BDO3dHQUdpRCxLQUFLO3NCQUF0RCxZQUFZO3VCQUFDLGdCQUFnQixFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTtnQkFFdkMsS0FBSztzQkFBYixLQUFLO2dCQUVHLHFCQUFxQjtzQkFBN0IsS0FBSztnQkFFRyxLQUFLO3NCQUFiLEtBQUs7Z0JBR0YsUUFBUTtzQkFEWCxXQUFXO3VCQUFDLHNCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb250ZW50Q2hpbGQsIFRlbXBsYXRlUmVmLCBIb3N0QmluZGluZyxcbiAgICAgICAgIEFmdGVyQ29udGVudEluaXQsIENoYW5nZURldGVjdG9yUmVmLCBPbkNoYW5nZXMsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmdsVGV4dGFyZWFJbnB1dCB9IGZyb20gJy4uL2lucHV0L2lucHV0JztcbmltcG9ydCB7IHRvQm9vbGVhbiB9IGZyb20gJy4uLy4uL3V0aWwvY29udmVydCc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmdsLXRleHRhcmVhLFtuZ2wtdGV4dGFyZWFdJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RleHRhcmVhLmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgaG9zdDoge1xuICAgICdbY2xhc3Muc2xkcy1mb3JtLWVsZW1lbnRdJzogJ3RydWUnLFxuICB9LFxufSlcbmV4cG9ydCBjbGFzcyBOZ2xUZXh0YXJlYSBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgQWZ0ZXJDb250ZW50SW5pdCwgT25EZXN0cm95IHtcbiAgQENvbnRlbnRDaGlsZChOZ2xUZXh0YXJlYUlucHV0LCB7IHN0YXRpYzogdHJ1ZSB9KSBpbnB1dDogTmdsVGV4dGFyZWFJbnB1dDtcblxuICBASW5wdXQoKSBsYWJlbDogc3RyaW5nIHwgVGVtcGxhdGVSZWY8YW55PjtcblxuICBASW5wdXQoKSBmaWVsZExldmVsSGVscFRvb2x0aXA6IHN0cmluZyB8IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgQElucHV0KCkgZXJyb3I6IHN0cmluZztcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnNsZHMtaGFzLWVycm9yJylcbiAgZ2V0IGhhc0Vycm9yKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0b0Jvb2xlYW4odGhpcy5lcnJvcik7XG4gIH1cblxuICByZXF1aXJlZDogYm9vbGVhbjtcblxuICBfdWlkOiBzdHJpbmc7XG5cbiAgZ2V0IGVycm9ySWQoKSB7XG4gICAgcmV0dXJuIGBlcnJvcl8ke3RoaXMuX3VpZH1gO1xuICB9XG5cbiAgcHJpdmF0ZSDJtVJlcXVpcmVkU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYpIHt9XG5cbiAgbmdPbkNoYW5nZXMoKSB7XG4gICAgdGhpcy5pbnB1dC5kZXNjcmliZWRCeSA9IHRoaXMuZXJyb3IgPyB0aGlzLmVycm9ySWQgOiBudWxsO1xuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAgIGlmICghdGhpcy5pbnB1dCkge1xuICAgICAgdGhyb3cgRXJyb3IoYFtuZy1saWdodG5pbmddIENvdWxkbid0IGZpbmQgYW4gPHRleHRhcmVhPiB3aXRoIFtuZ2xdIGF0dHJpYnV0ZSBpbnNpZGUgbmdsLXRleHRhcmVhYCk7XG4gICAgfVxuXG4gICAgdGhpcy7JtVJlcXVpcmVkU3Vic2NyaXB0aW9uID0gdGhpcy5pbnB1dC7JtVJlcXVpcmVkU3ViamVjdC5zdWJzY3JpYmUoKHJlcXVpcmVkKSA9PiB7XG4gICAgICB0aGlzLnJlcXVpcmVkID0gcmVxdWlyZWQ7XG4gICAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcbiAgICB9KTtcblxuICAgIHRoaXMuX3VpZCA9IHRoaXMuaW5wdXQuaWQ7XG4gICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBpZiAodGhpcy7JtVJlcXVpcmVkU3Vic2NyaXB0aW9uKSB7XG4gICAgICB0aGlzLsm1UmVxdWlyZWRTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgIHRoaXMuybVSZXF1aXJlZFN1YnNjcmlwdGlvbiA9IG51bGw7XG4gICAgfVxuICB9XG59XG4iLCJcbjxsYWJlbCBbbmdsRm9ybUxhYmVsXT1cImxhYmVsXCIgW2F0dHIuZm9yXT1cIl91aWRcIiBbcmVxdWlyZWRdPVwicmVxdWlyZWRcIj48L2xhYmVsPlxuPG5nbC1mb3JtLWhlbHAgKm5nSWY9XCJmaWVsZExldmVsSGVscFRvb2x0aXBcIiBbY29udGVudF09XCJmaWVsZExldmVsSGVscFRvb2x0aXBcIj48L25nbC1mb3JtLWhlbHA+XG48ZGl2IGNsYXNzPVwic2xkcy1mb3JtLWVsZW1lbnRfX2NvbnRyb2xcIj5cbiAgPGRpdiBjbGFzcz1cInNsZHMtdGV4dGFyZWFfY29udGFpbmVyXCI+XG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICA8L2Rpdj5cbjwvZGl2PlxuPGRpdiBjbGFzcz1cInNsZHMtZm9ybS1lbGVtZW50X19oZWxwXCIgKm5nSWY9XCJlcnJvclwiIFtpZF09XCJlcnJvcklkXCI+e3tlcnJvcn19PC9kaXY+Il19
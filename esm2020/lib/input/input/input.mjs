import { __decorate } from "tslib";
import { Component, Input, ChangeDetectionStrategy, ContentChild, HostBinding } from '@angular/core';
import { NglInputElement } from '../element/element';
import { toBoolean, InputBoolean } from '../../util/convert';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../../forms/label";
import * as i3 from "../../forms/help";
import * as i4 from "../../util/outlet";
export class NglInput {
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
            throw Error(`[ng-lightning] Couldn't find an <input> with [ngl] attribute inside NglInput`);
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
NglInput.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglInput, deps: [{ token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component });
NglInput.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: NglInput, selector: "ngl-input,[ngl-input]", inputs: { label: "label", error: "error", stacked: "stacked", fieldLevelHelpTooltip: "fieldLevelHelpTooltip" }, host: { properties: { "class.slds-form-element": "true", "class.slds-has-error": "this.hasError" } }, queries: [{ propertyName: "input", first: true, predicate: NglInputElement, descendants: true, static: true }], usesOnChanges: true, ngImport: i0, template: "\n<label [nglFormLabel]=\"label\" [attr.for]=\"_uid\" [required]=\"required\"></label>\n<ngl-form-help *ngIf=\"fieldLevelHelpTooltip\" [content]=\"fieldLevelHelpTooltip\"></ngl-form-help>\n<div class=\"slds-form-element__control\">\n  <ng-content></ng-content>\n</div>\n<div class=\"slds-form-element__help\" *ngIf=\"hasError\" [id]=\"errorId\" [nglInternalOutlet]=\"error\"></div>", dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i2.NglFormLabel, selector: "label[nglFormLabel]", inputs: ["nglFormLabel", "nglFormLabelClass", "required"] }, { kind: "component", type: i3.NglFormHelp, selector: "ngl-form-help", inputs: ["content"] }, { kind: "component", type: i4.NglInternalOutlet, selector: "[nglInternalOutlet]", inputs: ["nglInternalOutlet", "nglInternalOutletContext"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
__decorate([
    InputBoolean()
], NglInput.prototype, "stacked", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglInput, decorators: [{
            type: Component,
            args: [{ selector: 'ngl-input,[ngl-input]', changeDetection: ChangeDetectionStrategy.OnPush, host: {
                        '[class.slds-form-element]': 'true',
                    }, template: "\n<label [nglFormLabel]=\"label\" [attr.for]=\"_uid\" [required]=\"required\"></label>\n<ngl-form-help *ngIf=\"fieldLevelHelpTooltip\" [content]=\"fieldLevelHelpTooltip\"></ngl-form-help>\n<div class=\"slds-form-element__control\">\n  <ng-content></ng-content>\n</div>\n<div class=\"slds-form-element__help\" *ngIf=\"hasError\" [id]=\"errorId\" [nglInternalOutlet]=\"error\"></div>" }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }]; }, propDecorators: { input: [{
                type: ContentChild,
                args: [NglInputElement, { static: true }]
            }], label: [{
                type: Input
            }], error: [{
                type: Input
            }], stacked: [{
                type: Input
            }], fieldLevelHelpTooltip: [{
                type: Input
            }], hasError: [{
                type: HostBinding,
                args: ['class.slds-has-error']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1saWdodG5pbmcvc3JjL2xpYi9pbnB1dC9pbnB1dC9pbnB1dC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nLWxpZ2h0bmluZy9zcmMvbGliL2lucHV0L2lucHV0L2lucHV0Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLHVCQUF1QixFQUFFLFlBQVksRUFBZSxXQUFXLEVBQ3RCLE1BQU0sZUFBZSxDQUFDO0FBQzFGLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDOzs7Ozs7QUFXN0QsTUFBTSxPQUFPLFFBQVE7SUEwQm5CLFlBQW9CLEVBQXFCO1FBQXJCLE9BQUUsR0FBRixFQUFFLENBQW1CO0lBQUcsQ0FBQztJQWY3QyxJQUNJLFFBQVE7UUFDVixPQUFPLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQU1ELElBQUksT0FBTztRQUNULE9BQU8sU0FBUyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDOUIsQ0FBQztJQU1ELFdBQVc7UUFDVCxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDNUQsQ0FBQztJQUVELGtCQUFrQjtRQUNoQixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNmLE1BQU0sS0FBSyxDQUFDLDhFQUE4RSxDQUFDLENBQUM7U0FDN0Y7UUFFRCxJQUFJLENBQUMscUJBQXFCLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsQ0FBQyxRQUFRLEVBQUUsRUFBRTtZQUM5RSxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztZQUN6QixJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQzFCLENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQztRQUMxQixJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxJQUFJLENBQUMscUJBQXFCLEVBQUU7WUFDOUIsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQ3pDLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLENBQUM7U0FDbkM7SUFDSCxDQUFDOztxR0FuRFUsUUFBUTt5RkFBUixRQUFRLHNUQUNMLGVBQWUsbUZDZi9CLCtYQU11RztBRGU1RTtJQUFmLFlBQVksRUFBRTt5Q0FBbUI7MkZBUGhDLFFBQVE7a0JBUnBCLFNBQVM7K0JBQ0UsdUJBQXVCLG1CQUVoQix1QkFBdUIsQ0FBQyxNQUFNLFFBQ3pDO3dCQUNKLDJCQUEyQixFQUFFLE1BQU07cUJBQ3BDO3dHQUdnRCxLQUFLO3NCQUFyRCxZQUFZO3VCQUFDLGVBQWUsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7Z0JBRXRDLEtBQUs7c0JBQWIsS0FBSztnQkFFRyxLQUFLO3NCQUFiLEtBQUs7Z0JBRW1CLE9BQU87c0JBQS9CLEtBQUs7Z0JBRUcscUJBQXFCO3NCQUE3QixLQUFLO2dCQUdGLFFBQVE7c0JBRFgsV0FBVzt1QkFBQyxzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29udGVudENoaWxkLCBUZW1wbGF0ZVJlZiwgSG9zdEJpbmRpbmcsXG4gICAgICAgICBBZnRlckNvbnRlbnRJbml0LCBDaGFuZ2VEZXRlY3RvclJlZiwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5nbElucHV0RWxlbWVudCB9IGZyb20gJy4uL2VsZW1lbnQvZWxlbWVudCc7XG5pbXBvcnQgeyB0b0Jvb2xlYW4sIElucHV0Qm9vbGVhbiB9IGZyb20gJy4uLy4uL3V0aWwvY29udmVydCc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmdsLWlucHV0LFtuZ2wtaW5wdXRdJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2lucHV0Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgaG9zdDoge1xuICAgICdbY2xhc3Muc2xkcy1mb3JtLWVsZW1lbnRdJzogJ3RydWUnLFxuICB9LFxufSlcbmV4cG9ydCBjbGFzcyBOZ2xJbnB1dCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgQWZ0ZXJDb250ZW50SW5pdCwgT25EZXN0cm95IHtcbiAgQENvbnRlbnRDaGlsZChOZ2xJbnB1dEVsZW1lbnQsIHsgc3RhdGljOiB0cnVlIH0pIGlucHV0OiBOZ2xJbnB1dEVsZW1lbnQ7XG5cbiAgQElucHV0KCkgbGFiZWw/OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIEBJbnB1dCgpIGVycm9yPzogc3RyaW5nIHwgVGVtcGxhdGVSZWY8YW55PjtcblxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgc3RhY2tlZD86IGJvb2xlYW47XG5cbiAgQElucHV0KCkgZmllbGRMZXZlbEhlbHBUb29sdGlwPzogc3RyaW5nIHwgVGVtcGxhdGVSZWY8YW55PjtcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnNsZHMtaGFzLWVycm9yJylcbiAgZ2V0IGhhc0Vycm9yKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0b0Jvb2xlYW4odGhpcy5lcnJvcik7XG4gIH1cblxuICByZXF1aXJlZDogYm9vbGVhbjtcblxuICBfdWlkOiBzdHJpbmc7XG5cbiAgZ2V0IGVycm9ySWQoKSB7XG4gICAgcmV0dXJuIGBlcnJvcl8ke3RoaXMuX3VpZH1gO1xuICB9XG5cbiAgcHJpdmF0ZSDJtVJlcXVpcmVkU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYpIHt9XG5cbiAgbmdPbkNoYW5nZXMoKSB7XG4gICAgdGhpcy5pbnB1dC5kZXNjcmliZWRCeSA9IHRoaXMuZXJyb3IgPyB0aGlzLmVycm9ySWQgOiBudWxsO1xuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAgIGlmICghdGhpcy5pbnB1dCkge1xuICAgICAgdGhyb3cgRXJyb3IoYFtuZy1saWdodG5pbmddIENvdWxkbid0IGZpbmQgYW4gPGlucHV0PiB3aXRoIFtuZ2xdIGF0dHJpYnV0ZSBpbnNpZGUgTmdsSW5wdXRgKTtcbiAgICB9XG5cbiAgICB0aGlzLsm1UmVxdWlyZWRTdWJzY3JpcHRpb24gPSB0aGlzLmlucHV0Lsm1UmVxdWlyZWRTdWJqZWN0LnN1YnNjcmliZSgocmVxdWlyZWQpID0+IHtcbiAgICAgIHRoaXMucmVxdWlyZWQgPSByZXF1aXJlZDtcbiAgICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5fdWlkID0gdGhpcy5pbnB1dC5pZDtcbiAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIGlmICh0aGlzLsm1UmVxdWlyZWRTdWJzY3JpcHRpb24pIHtcbiAgICAgIHRoaXMuybVSZXF1aXJlZFN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgdGhpcy7JtVJlcXVpcmVkU3Vic2NyaXB0aW9uID0gbnVsbDtcbiAgICB9XG4gIH1cbn1cbiIsIlxuPGxhYmVsIFtuZ2xGb3JtTGFiZWxdPVwibGFiZWxcIiBbYXR0ci5mb3JdPVwiX3VpZFwiIFtyZXF1aXJlZF09XCJyZXF1aXJlZFwiPjwvbGFiZWw+XG48bmdsLWZvcm0taGVscCAqbmdJZj1cImZpZWxkTGV2ZWxIZWxwVG9vbHRpcFwiIFtjb250ZW50XT1cImZpZWxkTGV2ZWxIZWxwVG9vbHRpcFwiPjwvbmdsLWZvcm0taGVscD5cbjxkaXYgY2xhc3M9XCJzbGRzLWZvcm0tZWxlbWVudF9fY29udHJvbFwiPlxuICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG48L2Rpdj5cbjxkaXYgY2xhc3M9XCJzbGRzLWZvcm0tZWxlbWVudF9faGVscFwiICpuZ0lmPVwiaGFzRXJyb3JcIiBbaWRdPVwiZXJyb3JJZFwiIFtuZ2xJbnRlcm5hbE91dGxldF09XCJlcnJvclwiPjwvZGl2PiJdfQ==
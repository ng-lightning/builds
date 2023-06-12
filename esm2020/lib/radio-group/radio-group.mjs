import { __decorate } from "tslib";
import { Component, Input, ChangeDetectionStrategy, HostBinding } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { toBoolean, InputBoolean } from '../util/convert';
import { uniqueId } from '../util/util';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../util/outlet";
export class NglRadioGroup {
    constructor() {
        this.error = null;
        this.type = 'list';
        this.uid = uniqueId('radio-group');
        this.type$ = new BehaviorSubject(this.type);
        this.error$ = new BehaviorSubject(this.error);
    }
    get hasError() {
        return toBoolean(this.error);
    }
    get errorId() {
        return `error_${this.uid}`;
    }
    ngOnChanges(changes) {
        if (changes.type) {
            this.type$.next(this.type);
        }
        if (changes.error) {
            this.error$.next(this.hasError ? this.errorId : null);
        }
    }
}
NglRadioGroup.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglRadioGroup, deps: [], target: i0.ɵɵFactoryTarget.Component });
NglRadioGroup.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: NglRadioGroup, selector: "ngl-radio-group,[ngl-radio-group]", inputs: { label: "label", error: "error", required: "required", type: "type" }, host: { properties: { "class.slds-form-element": "true", "class.slds-has-error": "this.hasError" } }, usesOnChanges: true, ngImport: i0, template: "\n<legend class=\"slds-form-element__legend slds-form-element__label\"><abbr class=\"slds-required\" *ngIf=\"required\" title=\"required\">*</abbr><span [nglInternalOutlet]=\"label\"></span></legend>\n<div class=\"slds-form-element__control\">\n  <div class=\"slds-radio_button-group\" *ngIf=\"type === 'button'; else contentTpl\">\n    <ng-container *ngTemplateOutlet=\"contentTpl\"></ng-container>\n  </div>\n</div>\n<div class=\"slds-form-element__help\" *ngIf=\"error\" [id]=\"errorId\">{{error}}</div>\n<ng-template #contentTpl>\n  <ng-content></ng-content>\n</ng-template>", dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "component", type: i2.NglInternalOutlet, selector: "[nglInternalOutlet]", inputs: ["nglInternalOutlet", "nglInternalOutletContext"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
__decorate([
    InputBoolean()
], NglRadioGroup.prototype, "required", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglRadioGroup, decorators: [{
            type: Component,
            args: [{ selector: 'ngl-radio-group,[ngl-radio-group]', changeDetection: ChangeDetectionStrategy.OnPush, host: {
                        '[class.slds-form-element]': 'true',
                    }, template: "\n<legend class=\"slds-form-element__legend slds-form-element__label\"><abbr class=\"slds-required\" *ngIf=\"required\" title=\"required\">*</abbr><span [nglInternalOutlet]=\"label\"></span></legend>\n<div class=\"slds-form-element__control\">\n  <div class=\"slds-radio_button-group\" *ngIf=\"type === 'button'; else contentTpl\">\n    <ng-container *ngTemplateOutlet=\"contentTpl\"></ng-container>\n  </div>\n</div>\n<div class=\"slds-form-element__help\" *ngIf=\"error\" [id]=\"errorId\">{{error}}</div>\n<ng-template #contentTpl>\n  <ng-content></ng-content>\n</ng-template>" }]
        }], propDecorators: { label: [{
                type: Input
            }], error: [{
                type: Input
            }], hasError: [{
                type: HostBinding,
                args: ['class.slds-has-error']
            }], required: [{
                type: Input
            }], type: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW8tZ3JvdXAuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1saWdodG5pbmcvc3JjL2xpYi9yYWRpby1ncm91cC9yYWRpby1ncm91cC50cyIsIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nLWxpZ2h0bmluZy9zcmMvbGliL3JhZGlvLWdyb3VwL3JhZGlvLWdyb3VwLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLHVCQUF1QixFQUFlLFdBQVcsRUFBNEIsTUFBTSxlQUFlLENBQUM7QUFDOUgsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN2QyxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzFELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxjQUFjLENBQUM7Ozs7QUFVeEMsTUFBTSxPQUFPLGFBQWE7SUFSMUI7UUFZVyxVQUFLLEdBQVcsSUFBSSxDQUFDO1FBYXJCLFNBQUksR0FBc0IsTUFBTSxDQUFDO1FBRTFDLFFBQUcsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLENBQUM7UUFFOUIsVUFBSyxHQUFHLElBQUksZUFBZSxDQUFvQixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFMUQsV0FBTSxHQUFHLElBQUksZUFBZSxDQUFnQixJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7S0FVekQ7SUEzQkMsSUFDSSxRQUFRO1FBQ1YsT0FBTyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFJRCxJQUFJLE9BQU87UUFDVCxPQUFPLFNBQVMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFVRCxXQUFXLENBQUMsT0FBc0I7UUFDaEMsSUFBSSxPQUFPLENBQUMsSUFBSSxFQUFFO1lBQ2hCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUM1QjtRQUNELElBQUksT0FBTyxDQUFDLEtBQUssRUFBRTtZQUNqQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN2RDtJQUNILENBQUM7OzBHQWhDVSxhQUFhOzhGQUFiLGFBQWEsb1JDYjFCLG9rQkFVYztBRGNhO0lBQWYsWUFBWSxFQUFFOytDQUFtQjsyRkFYaEMsYUFBYTtrQkFSekIsU0FBUzsrQkFDRSxtQ0FBbUMsbUJBRTVCLHVCQUF1QixDQUFDLE1BQU0sUUFDekM7d0JBQ0osMkJBQTJCLEVBQUUsTUFBTTtxQkFDcEM7OEJBSVEsS0FBSztzQkFBYixLQUFLO2dCQUVHLEtBQUs7c0JBQWIsS0FBSztnQkFHRixRQUFRO3NCQURYLFdBQVc7dUJBQUMsc0JBQXNCO2dCQUtWLFFBQVE7c0JBQWhDLEtBQUs7Z0JBTUcsSUFBSTtzQkFBWixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIFRlbXBsYXRlUmVmLCBIb3N0QmluZGluZywgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRvQm9vbGVhbiwgSW5wdXRCb29sZWFuIH0gZnJvbSAnLi4vdXRpbC9jb252ZXJ0JztcbmltcG9ydCB7IHVuaXF1ZUlkIH0gZnJvbSAnLi4vdXRpbC91dGlsJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmdsLXJhZGlvLWdyb3VwLFtuZ2wtcmFkaW8tZ3JvdXBdJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3JhZGlvLWdyb3VwLmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgaG9zdDoge1xuICAgICdbY2xhc3Muc2xkcy1mb3JtLWVsZW1lbnRdJzogJ3RydWUnLFxuICB9LFxufSlcbmV4cG9ydCBjbGFzcyBOZ2xSYWRpb0dyb3VwIGltcGxlbWVudHMgT25DaGFuZ2VzIHtcblxuICBASW5wdXQoKSBsYWJlbDogc3RyaW5nIHwgVGVtcGxhdGVSZWY8YW55PjtcblxuICBASW5wdXQoKSBlcnJvcjogc3RyaW5nID0gbnVsbDtcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnNsZHMtaGFzLWVycm9yJylcbiAgZ2V0IGhhc0Vycm9yKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0b0Jvb2xlYW4odGhpcy5lcnJvcik7XG4gIH1cblxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgcmVxdWlyZWQ6IGJvb2xlYW47XG5cbiAgZ2V0IGVycm9ySWQoKSB7XG4gICAgcmV0dXJuIGBlcnJvcl8ke3RoaXMudWlkfWA7XG4gIH1cblxuICBASW5wdXQoKSB0eXBlOiAnbGlzdCcgfCAnYnV0dG9uJyA9ICdsaXN0JztcblxuICB1aWQgPSB1bmlxdWVJZCgncmFkaW8tZ3JvdXAnKTtcblxuICB0eXBlJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8J2xpc3QnIHwgJ2J1dHRvbic+KHRoaXMudHlwZSk7XG5cbiAgZXJyb3IkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxzdHJpbmcgfCBudWxsPih0aGlzLmVycm9yKTtcblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgaWYgKGNoYW5nZXMudHlwZSkge1xuICAgICAgdGhpcy50eXBlJC5uZXh0KHRoaXMudHlwZSk7XG4gICAgfVxuICAgIGlmIChjaGFuZ2VzLmVycm9yKSB7XG4gICAgICB0aGlzLmVycm9yJC5uZXh0KHRoaXMuaGFzRXJyb3IgPyB0aGlzLmVycm9ySWQgOiBudWxsKTtcbiAgICB9XG4gIH1cbn1cbiIsIlxuPGxlZ2VuZCBjbGFzcz1cInNsZHMtZm9ybS1lbGVtZW50X19sZWdlbmQgc2xkcy1mb3JtLWVsZW1lbnRfX2xhYmVsXCI+PGFiYnIgY2xhc3M9XCJzbGRzLXJlcXVpcmVkXCIgKm5nSWY9XCJyZXF1aXJlZFwiIHRpdGxlPVwicmVxdWlyZWRcIj4qPC9hYmJyPjxzcGFuIFtuZ2xJbnRlcm5hbE91dGxldF09XCJsYWJlbFwiPjwvc3Bhbj48L2xlZ2VuZD5cbjxkaXYgY2xhc3M9XCJzbGRzLWZvcm0tZWxlbWVudF9fY29udHJvbFwiPlxuICA8ZGl2IGNsYXNzPVwic2xkcy1yYWRpb19idXR0b24tZ3JvdXBcIiAqbmdJZj1cInR5cGUgPT09ICdidXR0b24nOyBlbHNlIGNvbnRlbnRUcGxcIj5cbiAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwiY29udGVudFRwbFwiPjwvbmctY29udGFpbmVyPlxuICA8L2Rpdj5cbjwvZGl2PlxuPGRpdiBjbGFzcz1cInNsZHMtZm9ybS1lbGVtZW50X19oZWxwXCIgKm5nSWY9XCJlcnJvclwiIFtpZF09XCJlcnJvcklkXCI+e3tlcnJvcn19PC9kaXY+XG48bmctdGVtcGxhdGUgI2NvbnRlbnRUcGw+XG4gIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbjwvbmctdGVtcGxhdGU+Il19
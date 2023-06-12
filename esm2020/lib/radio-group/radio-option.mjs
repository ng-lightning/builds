import { Component, Input, ContentChild, ChangeDetectionStrategy, HostBinding } from '@angular/core';
import { NglRadioInput } from './input/input';
import * as i0 from "@angular/core";
import * as i1 from "./radio-group";
import * as i2 from "@angular/common";
import * as i3 from "../util/outlet";
export class NglRadioOption {
    constructor(radioGroup, cd) {
        this.radioGroup = radioGroup;
        this.cd = cd;
        this.subscriptions = [];
    }
    get isTypeList() {
        return this.type === 'list';
    }
    get isTypeButton() {
        return this.type === 'button';
    }
    ngOnInit() {
        this.subscriptions.push(this.radioGroup.type$.subscribe((type) => {
            this.type = type;
            this.cd.detectChanges();
        }), this.radioGroup.error$.subscribe((errorId) => {
            this.input.describedBy = errorId;
        }));
    }
    ngAfterContentInit() {
        this.input.name = this.radioGroup.uid;
    }
    ngOnDestroy() {
        this.subscriptions.forEach((s) => s.unsubscribe());
    }
}
NglRadioOption.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglRadioOption, deps: [{ token: i1.NglRadioGroup }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component });
NglRadioOption.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: NglRadioOption, selector: "ngl-radio-option", inputs: { label: "label" }, host: { properties: { "class.slds-radio": "this.isTypeList", "class.slds-button": "this.isTypeButton", "class.slds-radio_button": "this.isTypeButton" } }, queries: [{ propertyName: "input", first: true, predicate: NglRadioInput, descendants: true, static: true }], ngImport: i0, template: "\n<ng-content></ng-content>\n<label class=\"slds-radio__label\" *ngIf=\"type === 'list'\" [attr.for]=\"input.id\"><span class=\"slds-radio_faux\"></span><span class=\"slds-form-element__label\" [nglInternalOutlet]=\"label\"></span></label>\n<label class=\"slds-radio_button__label\" *ngIf=\"type === 'button'\" [attr.for]=\"input.id\"><span class=\"slds-radio_faux\" [nglInternalOutlet]=\"label\"></span></label>", dependencies: [{ kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i3.NglInternalOutlet, selector: "[nglInternalOutlet]", inputs: ["nglInternalOutlet", "nglInternalOutletContext"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglRadioOption, decorators: [{
            type: Component,
            args: [{ selector: 'ngl-radio-option', changeDetection: ChangeDetectionStrategy.OnPush, template: "\n<ng-content></ng-content>\n<label class=\"slds-radio__label\" *ngIf=\"type === 'list'\" [attr.for]=\"input.id\"><span class=\"slds-radio_faux\"></span><span class=\"slds-form-element__label\" [nglInternalOutlet]=\"label\"></span></label>\n<label class=\"slds-radio_button__label\" *ngIf=\"type === 'button'\" [attr.for]=\"input.id\"><span class=\"slds-radio_faux\" [nglInternalOutlet]=\"label\"></span></label>" }]
        }], ctorParameters: function () { return [{ type: i1.NglRadioGroup }, { type: i0.ChangeDetectorRef }]; }, propDecorators: { label: [{
                type: Input
            }], input: [{
                type: ContentChild,
                args: [NglRadioInput, { static: true }]
            }], isTypeList: [{
                type: HostBinding,
                args: ['class.slds-radio']
            }], isTypeButton: [{
                type: HostBinding,
                args: ['class.slds-button']
            }, {
                type: HostBinding,
                args: ['class.slds-radio_button']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW8tb3B0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctbGlnaHRuaW5nL3NyYy9saWIvcmFkaW8tZ3JvdXAvcmFkaW8tb3B0aW9uLnRzIiwiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctbGlnaHRuaW5nL3NyYy9saWIvcmFkaW8tZ3JvdXAvcmFkaW8tb3B0aW9uLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBZSxLQUFLLEVBQUUsWUFBWSxFQUFFLHVCQUF1QixFQUNwRSxXQUFXLEVBQXVDLE1BQU0sZUFBZSxDQUFDO0FBR2pGLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7O0FBTzlDLE1BQU0sT0FBTyxjQUFjO0lBS3pCLFlBQW9CLFVBQXlCLEVBQVUsRUFBcUI7UUFBeEQsZUFBVSxHQUFWLFVBQVUsQ0FBZTtRQUFVLE9BQUUsR0FBRixFQUFFLENBQW1CO1FBZXBFLGtCQUFhLEdBQW1CLEVBQUUsQ0FBQztJQWZvQyxDQUFDO0lBSWhGLElBQ0ksVUFBVTtRQUNaLE9BQU8sSUFBSSxDQUFDLElBQUksS0FBSyxNQUFNLENBQUM7SUFDOUIsQ0FBQztJQUVELElBRUksWUFBWTtRQUNkLE9BQU8sSUFBSSxDQUFDLElBQUksS0FBSyxRQUFRLENBQUM7SUFDaEMsQ0FBQztJQUlELFFBQVE7UUFDTixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FDckIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBdUIsRUFBRSxFQUFFO1lBQzFELElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDMUIsQ0FBQyxDQUFDLEVBQ0YsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsT0FBc0IsRUFBRSxFQUFFO1lBQzFELElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxHQUFHLE9BQU8sQ0FBQztRQUNuQyxDQUFDLENBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQztJQUVELGtCQUFrQjtRQUNoQixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQztJQUN4QyxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBZSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztJQUNuRSxDQUFDOzsyR0F4Q1UsY0FBYzsrRkFBZCxjQUFjLGtSQUdYLGFBQWEsOERDZDdCLDhaQUdpSzsyRkRRcEosY0FBYztrQkFMMUIsU0FBUzsrQkFDRSxrQkFBa0IsbUJBRVgsdUJBQXVCLENBQUMsTUFBTTtvSUFHdEMsS0FBSztzQkFBYixLQUFLO2dCQUV5QyxLQUFLO3NCQUFuRCxZQUFZO3VCQUFDLGFBQWEsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7Z0JBT3pDLFVBQVU7c0JBRGIsV0FBVzt1QkFBQyxrQkFBa0I7Z0JBTzNCLFlBQVk7c0JBRmYsV0FBVzt1QkFBQyxtQkFBbUI7O3NCQUMvQixXQUFXO3VCQUFDLHlCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVGVtcGxhdGVSZWYsIElucHV0LCBDb250ZW50Q2hpbGQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICAgICAgIEhvc3RCaW5kaW5nLCBPbkluaXQsIEFmdGVyQ29udGVudEluaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBOZ2xSYWRpb0dyb3VwIH0gZnJvbSAnLi9yYWRpby1ncm91cCc7XG5pbXBvcnQgeyBOZ2xSYWRpb0lucHV0IH0gZnJvbSAnLi9pbnB1dC9pbnB1dCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25nbC1yYWRpby1vcHRpb24nLFxuICB0ZW1wbGF0ZVVybDogJy4vcmFkaW8tb3B0aW9uLmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgTmdsUmFkaW9PcHRpb24gaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyQ29udGVudEluaXQsIE9uRGVzdHJveSB7XG4gIEBJbnB1dCgpIGxhYmVsOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIEBDb250ZW50Q2hpbGQoTmdsUmFkaW9JbnB1dCwgeyBzdGF0aWM6IHRydWUgfSkgaW5wdXQ6IE5nbFJhZGlvSW5wdXQ7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByYWRpb0dyb3VwOiBOZ2xSYWRpb0dyb3VwLCBwcml2YXRlIGNkOiBDaGFuZ2VEZXRlY3RvclJlZikge31cblxuICB0eXBlOiAnbGlzdCcgfCAnYnV0dG9uJztcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnNsZHMtcmFkaW8nKVxuICBnZXQgaXNUeXBlTGlzdCgpIHtcbiAgICByZXR1cm4gdGhpcy50eXBlID09PSAnbGlzdCc7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnNsZHMtYnV0dG9uJylcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5zbGRzLXJhZGlvX2J1dHRvbicpXG4gIGdldCBpc1R5cGVCdXR0b24oKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZSA9PT0gJ2J1dHRvbic7XG4gIH1cblxuICBwcml2YXRlIHN1YnNjcmlwdGlvbnM6IFN1YnNjcmlwdGlvbltdID0gW107XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5zdWJzY3JpcHRpb25zLnB1c2goXG4gICAgICB0aGlzLnJhZGlvR3JvdXAudHlwZSQuc3Vic2NyaWJlKCh0eXBlOiAnbGlzdCcgfCAnYnV0dG9uJykgPT4ge1xuICAgICAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgICAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcbiAgICAgIH0pLFxuICAgICAgdGhpcy5yYWRpb0dyb3VwLmVycm9yJC5zdWJzY3JpYmUoKGVycm9ySWQ6IHN0cmluZyB8IG51bGwpID0+IHtcbiAgICAgICAgdGhpcy5pbnB1dC5kZXNjcmliZWRCeSA9IGVycm9ySWQ7XG4gICAgICB9KSxcbiAgICApO1xuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAgIHRoaXMuaW5wdXQubmFtZSA9IHRoaXMucmFkaW9Hcm91cC51aWQ7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbnMuZm9yRWFjaCgoczogU3Vic2NyaXB0aW9uKSA9PiBzLnVuc3Vic2NyaWJlKCkpO1xuICB9XG59XG4iLCJcbjxuZy1jb250ZW50PjwvbmctY29udGVudD5cbjxsYWJlbCBjbGFzcz1cInNsZHMtcmFkaW9fX2xhYmVsXCIgKm5nSWY9XCJ0eXBlID09PSAnbGlzdCdcIiBbYXR0ci5mb3JdPVwiaW5wdXQuaWRcIj48c3BhbiBjbGFzcz1cInNsZHMtcmFkaW9fZmF1eFwiPjwvc3Bhbj48c3BhbiBjbGFzcz1cInNsZHMtZm9ybS1lbGVtZW50X19sYWJlbFwiIFtuZ2xJbnRlcm5hbE91dGxldF09XCJsYWJlbFwiPjwvc3Bhbj48L2xhYmVsPlxuPGxhYmVsIGNsYXNzPVwic2xkcy1yYWRpb19idXR0b25fX2xhYmVsXCIgKm5nSWY9XCJ0eXBlID09PSAnYnV0dG9uJ1wiIFthdHRyLmZvcl09XCJpbnB1dC5pZFwiPjxzcGFuIGNsYXNzPVwic2xkcy1yYWRpb19mYXV4XCIgW25nbEludGVybmFsT3V0bGV0XT1cImxhYmVsXCI+PC9zcGFuPjwvbGFiZWw+Il19
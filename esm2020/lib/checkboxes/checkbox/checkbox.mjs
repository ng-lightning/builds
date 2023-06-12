import { __decorate } from "tslib";
import { Component, Input, ChangeDetectionStrategy, ContentChild, HostBinding } from '@angular/core';
import { NglCheckboxInput } from '../input/input';
import { toBoolean, InputBoolean } from '../../util/convert';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../../util/outlet";
export class NglCheckbox {
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
            throw Error(`[ng-lightning] Couldn't find an <input type="checkbox"> with [ngl] attribute inside NglCheckbox`);
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
NglCheckbox.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglCheckbox, deps: [{ token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component });
NglCheckbox.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: NglCheckbox, selector: "ngl-checkbox,[ngl-checkbox]", inputs: { label: "label", error: "error", stacked: "stacked" }, host: { properties: { "class.slds-form-element": "true", "class.slds-has-error": "this.hasError" } }, queries: [{ propertyName: "input", first: true, predicate: NglCheckboxInput, descendants: true, static: true }], usesOnChanges: true, ngImport: i0, template: "\n<div class=\"slds-form-element__control\">\n  <div class=\"slds-checkbox\" [class.slds-checkbox_stacked]=\"stacked\"><abbr class=\"slds-required\" *ngIf=\"required\" title=\"required\">*</abbr>\n    <ng-content></ng-content>\n    <label class=\"slds-checkbox__label\" [attr.for]=\"_uid\"><span class=\"slds-checkbox_faux\"></span><span class=\"slds-form-element__label\" [nglInternalOutlet]=\"label\"></span></label>\n  </div>\n</div>\n<div class=\"slds-form-element__help\" *ngIf=\"hasError\" [id]=\"errorId\" [nglInternalOutlet]=\"error\"></div>", dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i2.NglInternalOutlet, selector: "[nglInternalOutlet]", inputs: ["nglInternalOutlet", "nglInternalOutletContext"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
__decorate([
    InputBoolean()
], NglCheckbox.prototype, "stacked", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglCheckbox, decorators: [{
            type: Component,
            args: [{ selector: 'ngl-checkbox,[ngl-checkbox]', changeDetection: ChangeDetectionStrategy.OnPush, host: {
                        '[class.slds-form-element]': 'true',
                    }, template: "\n<div class=\"slds-form-element__control\">\n  <div class=\"slds-checkbox\" [class.slds-checkbox_stacked]=\"stacked\"><abbr class=\"slds-required\" *ngIf=\"required\" title=\"required\">*</abbr>\n    <ng-content></ng-content>\n    <label class=\"slds-checkbox__label\" [attr.for]=\"_uid\"><span class=\"slds-checkbox_faux\"></span><span class=\"slds-form-element__label\" [nglInternalOutlet]=\"label\"></span></label>\n  </div>\n</div>\n<div class=\"slds-form-element__help\" *ngIf=\"hasError\" [id]=\"errorId\" [nglInternalOutlet]=\"error\"></div>" }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }]; }, propDecorators: { input: [{
                type: ContentChild,
                args: [NglCheckboxInput, { static: true }]
            }], label: [{
                type: Input
            }], error: [{
                type: Input
            }], stacked: [{
                type: Input
            }], hasError: [{
                type: HostBinding,
                args: ['class.slds-has-error']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3guanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1saWdodG5pbmcvc3JjL2xpYi9jaGVja2JveGVzL2NoZWNrYm94L2NoZWNrYm94LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctbGlnaHRuaW5nL3NyYy9saWIvY2hlY2tib3hlcy9jaGVja2JveC9jaGVja2JveC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSx1QkFBdUIsRUFBRSxZQUFZLEVBQWUsV0FBVyxFQUN0QixNQUFNLGVBQWUsQ0FBQztBQUMxRixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDOzs7O0FBVzdELE1BQU0sT0FBTyxXQUFXO0lBd0J0QixZQUFvQixFQUFxQjtRQUFyQixPQUFFLEdBQUYsRUFBRSxDQUFtQjtJQUFHLENBQUM7SUFmN0MsSUFDSSxRQUFRO1FBQ1YsT0FBTyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFNRCxJQUFJLE9BQU87UUFDVCxPQUFPLFNBQVMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQzlCLENBQUM7SUFNRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQzVELENBQUM7SUFFRCxrQkFBa0I7UUFDaEIsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDZixNQUFNLEtBQUssQ0FBQyxpR0FBaUcsQ0FBQyxDQUFDO1NBQ2hIO1FBRUQsSUFBSSxDQUFDLHFCQUFxQixHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUU7WUFDOUUsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7WUFDekIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUMxQixDQUFDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUM7UUFDMUIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBRUQsV0FBVztRQUNULElBQUksSUFBSSxDQUFDLHFCQUFxQixFQUFFO1lBQzlCLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUN6QyxJQUFJLENBQUMscUJBQXFCLEdBQUcsSUFBSSxDQUFDO1NBQ25DO0lBQ0gsQ0FBQzs7d0dBakRVLFdBQVc7NEZBQVgsV0FBVyw0UUFDUixnQkFBZ0IsbUZDZmhDLHVpQkFPdUc7QURjNUU7SUFBZixZQUFZLEVBQUU7NENBQWtCOzJGQVAvQixXQUFXO2tCQVJ2QixTQUFTOytCQUNFLDZCQUE2QixtQkFFdEIsdUJBQXVCLENBQUMsTUFBTSxRQUN6Qzt3QkFDSiwyQkFBMkIsRUFBRSxNQUFNO3FCQUNwQzt3R0FHaUQsS0FBSztzQkFBdEQsWUFBWTt1QkFBQyxnQkFBZ0IsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7Z0JBRXZDLEtBQUs7c0JBQWIsS0FBSztnQkFFRyxLQUFLO3NCQUFiLEtBQUs7Z0JBRW1CLE9BQU87c0JBQS9CLEtBQUs7Z0JBR0YsUUFBUTtzQkFEWCxXQUFXO3VCQUFDLHNCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb250ZW50Q2hpbGQsIFRlbXBsYXRlUmVmLCBIb3N0QmluZGluZyxcbiAgICAgICAgIEFmdGVyQ29udGVudEluaXQsIENoYW5nZURldGVjdG9yUmVmLCBPbkNoYW5nZXMsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmdsQ2hlY2tib3hJbnB1dCB9IGZyb20gJy4uL2lucHV0L2lucHV0JztcbmltcG9ydCB7IHRvQm9vbGVhbiwgSW5wdXRCb29sZWFuIH0gZnJvbSAnLi4vLi4vdXRpbC9jb252ZXJ0JztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZ2wtY2hlY2tib3gsW25nbC1jaGVja2JveF0nLFxuICB0ZW1wbGF0ZVVybDogJy4vY2hlY2tib3guaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5zbGRzLWZvcm0tZWxlbWVudF0nOiAndHJ1ZScsXG4gIH0sXG59KVxuZXhwb3J0IGNsYXNzIE5nbENoZWNrYm94IGltcGxlbWVudHMgT25DaGFuZ2VzLCBBZnRlckNvbnRlbnRJbml0LCBPbkRlc3Ryb3kge1xuICBAQ29udGVudENoaWxkKE5nbENoZWNrYm94SW5wdXQsIHsgc3RhdGljOiB0cnVlIH0pIGlucHV0OiBOZ2xDaGVja2JveElucHV0O1xuXG4gIEBJbnB1dCgpIGxhYmVsOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIEBJbnB1dCgpIGVycm9yOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBzdGFja2VkOiBib29sZWFuO1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3Muc2xkcy1oYXMtZXJyb3InKVxuICBnZXQgaGFzRXJyb3IoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRvQm9vbGVhbih0aGlzLmVycm9yKTtcbiAgfVxuXG4gIHJlcXVpcmVkOiBib29sZWFuO1xuXG4gIF91aWQ6IHN0cmluZztcblxuICBnZXQgZXJyb3JJZCgpIHtcbiAgICByZXR1cm4gYGVycm9yXyR7dGhpcy5fdWlkfWA7XG4gIH1cblxuICBwcml2YXRlIMm1UmVxdWlyZWRTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNkOiBDaGFuZ2VEZXRlY3RvclJlZikge31cblxuICBuZ09uQ2hhbmdlcygpIHtcbiAgICB0aGlzLmlucHV0LmRlc2NyaWJlZEJ5ID0gdGhpcy5lcnJvciA/IHRoaXMuZXJyb3JJZCA6IG51bGw7XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgaWYgKCF0aGlzLmlucHV0KSB7XG4gICAgICB0aHJvdyBFcnJvcihgW25nLWxpZ2h0bmluZ10gQ291bGRuJ3QgZmluZCBhbiA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCI+IHdpdGggW25nbF0gYXR0cmlidXRlIGluc2lkZSBOZ2xDaGVja2JveGApO1xuICAgIH1cblxuICAgIHRoaXMuybVSZXF1aXJlZFN1YnNjcmlwdGlvbiA9IHRoaXMuaW5wdXQuybVSZXF1aXJlZFN1YmplY3Quc3Vic2NyaWJlKChyZXF1aXJlZCkgPT4ge1xuICAgICAgdGhpcy5yZXF1aXJlZCA9IHJlcXVpcmVkO1xuICAgICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLl91aWQgPSB0aGlzLmlucHV0LmlkO1xuICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgaWYgKHRoaXMuybVSZXF1aXJlZFN1YnNjcmlwdGlvbikge1xuICAgICAgdGhpcy7JtVJlcXVpcmVkU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICB0aGlzLsm1UmVxdWlyZWRTdWJzY3JpcHRpb24gPSBudWxsO1xuICAgIH1cbiAgfVxufVxuIiwiXG48ZGl2IGNsYXNzPVwic2xkcy1mb3JtLWVsZW1lbnRfX2NvbnRyb2xcIj5cbiAgPGRpdiBjbGFzcz1cInNsZHMtY2hlY2tib3hcIiBbY2xhc3Muc2xkcy1jaGVja2JveF9zdGFja2VkXT1cInN0YWNrZWRcIj48YWJiciBjbGFzcz1cInNsZHMtcmVxdWlyZWRcIiAqbmdJZj1cInJlcXVpcmVkXCIgdGl0bGU9XCJyZXF1aXJlZFwiPio8L2FiYnI+XG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgIDxsYWJlbCBjbGFzcz1cInNsZHMtY2hlY2tib3hfX2xhYmVsXCIgW2F0dHIuZm9yXT1cIl91aWRcIj48c3BhbiBjbGFzcz1cInNsZHMtY2hlY2tib3hfZmF1eFwiPjwvc3Bhbj48c3BhbiBjbGFzcz1cInNsZHMtZm9ybS1lbGVtZW50X19sYWJlbFwiIFtuZ2xJbnRlcm5hbE91dGxldF09XCJsYWJlbFwiPjwvc3Bhbj48L2xhYmVsPlxuICA8L2Rpdj5cbjwvZGl2PlxuPGRpdiBjbGFzcz1cInNsZHMtZm9ybS1lbGVtZW50X19oZWxwXCIgKm5nSWY9XCJoYXNFcnJvclwiIFtpZF09XCJlcnJvcklkXCIgW25nbEludGVybmFsT3V0bGV0XT1cImVycm9yXCI+PC9kaXY+Il19
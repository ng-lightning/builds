import { __decorate } from "tslib";
import { Component, Input, ChangeDetectionStrategy, ContentChild, HostBinding, ChangeDetectorRef } from '@angular/core';
import { NglCheckboxInput } from '../input/input';
import { toBoolean, InputBoolean } from '../../util/convert';
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
NglCheckbox.decorators = [
    { type: Component, args: [{
                selector: 'ngl-checkbox,[ngl-checkbox]',
                template: "\n<div class=\"slds-form-element__control\">\n  <div class=\"slds-checkbox\" [class.slds-checkbox_stacked]=\"stacked\"><abbr class=\"slds-required\" *ngIf=\"required\" title=\"required\">*</abbr>\n    <ng-content></ng-content>\n    <label class=\"slds-checkbox__label\" [attr.for]=\"_uid\"><span class=\"slds-checkbox_faux\"></span><span class=\"slds-form-element__label\" [nglInternalOutlet]=\"label\"></span></label>\n  </div>\n</div>\n<div class=\"slds-form-element__help\" *ngIf=\"hasError\" [id]=\"errorId\" [nglInternalOutlet]=\"error\"></div>",
                changeDetection: ChangeDetectionStrategy.OnPush,
                host: {
                    '[class.slds-form-element]': 'true',
                }
            },] }
];
NglCheckbox.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
NglCheckbox.propDecorators = {
    input: [{ type: ContentChild, args: [NglCheckboxInput, { static: true },] }],
    label: [{ type: Input }],
    error: [{ type: Input }],
    stacked: [{ type: Input }],
    hasError: [{ type: HostBinding, args: ['class.slds-has-error',] }]
};
__decorate([
    InputBoolean()
], NglCheckbox.prototype, "stacked", void 0);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3guanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1saWdodG5pbmcvc3JjL2xpYi9jaGVja2JveGVzL2NoZWNrYm94L2NoZWNrYm94LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSx1QkFBdUIsRUFBRSxZQUFZLEVBQWUsV0FBVyxFQUMvRCxpQkFBaUIsRUFBd0IsTUFBTSxlQUFlLENBQUM7QUFDMUYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEQsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQVc3RCxNQUFNLE9BQU8sV0FBVztJQXdCdEIsWUFBb0IsRUFBcUI7UUFBckIsT0FBRSxHQUFGLEVBQUUsQ0FBbUI7SUFBRyxDQUFDO0lBZjdDLElBQ0ksUUFBUTtRQUNWLE9BQU8sU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBTUQsSUFBSSxPQUFPO1FBQ1QsT0FBTyxTQUFTLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUM5QixDQUFDO0lBTUQsV0FBVztRQUNULElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUM1RCxDQUFDO0lBRUQsa0JBQWtCO1FBQ2hCLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ2YsTUFBTSxLQUFLLENBQUMsaUdBQWlHLENBQUMsQ0FBQztTQUNoSDtRQUVELElBQUksQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFFO1lBQzlFLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1lBQ3pCLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDMUIsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDO1FBQzFCLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLElBQUksQ0FBQyxxQkFBcUIsRUFBRTtZQUM5QixJQUFJLENBQUMscUJBQXFCLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDekMsSUFBSSxDQUFDLHFCQUFxQixHQUFHLElBQUksQ0FBQztTQUNuQztJQUNILENBQUM7OztZQXpERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDZCQUE2QjtnQkFDdkMsaWpCQUE4QjtnQkFDOUIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLElBQUksRUFBRTtvQkFDSiwyQkFBMkIsRUFBRSxNQUFNO2lCQUNwQzthQUNGOzs7WUFaMEIsaUJBQWlCOzs7b0JBY3pDLFlBQVksU0FBQyxnQkFBZ0IsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7b0JBRS9DLEtBQUs7b0JBRUwsS0FBSztzQkFFTCxLQUFLO3VCQUVMLFdBQVcsU0FBQyxzQkFBc0I7O0FBRlY7SUFBZixZQUFZLEVBQUU7NENBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbnRlbnRDaGlsZCwgVGVtcGxhdGVSZWYsIEhvc3RCaW5kaW5nLFxuICAgICAgICAgQWZ0ZXJDb250ZW50SW5pdCwgQ2hhbmdlRGV0ZWN0b3JSZWYsIE9uQ2hhbmdlcywgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ2xDaGVja2JveElucHV0IH0gZnJvbSAnLi4vaW5wdXQvaW5wdXQnO1xuaW1wb3J0IHsgdG9Cb29sZWFuLCBJbnB1dEJvb2xlYW4gfSBmcm9tICcuLi8uLi91dGlsL2NvbnZlcnQnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25nbC1jaGVja2JveCxbbmdsLWNoZWNrYm94XScsXG4gIHRlbXBsYXRlVXJsOiAnLi9jaGVja2JveC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLnNsZHMtZm9ybS1lbGVtZW50XSc6ICd0cnVlJyxcbiAgfSxcbn0pXG5leHBvcnQgY2xhc3MgTmdsQ2hlY2tib3ggaW1wbGVtZW50cyBPbkNoYW5nZXMsIEFmdGVyQ29udGVudEluaXQsIE9uRGVzdHJveSB7XG4gIEBDb250ZW50Q2hpbGQoTmdsQ2hlY2tib3hJbnB1dCwgeyBzdGF0aWM6IHRydWUgfSkgaW5wdXQ6IE5nbENoZWNrYm94SW5wdXQ7XG5cbiAgQElucHV0KCkgbGFiZWw6IHN0cmluZyB8IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgQElucHV0KCkgZXJyb3I6IHN0cmluZyB8IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHN0YWNrZWQ6IGJvb2xlYW47XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5zbGRzLWhhcy1lcnJvcicpXG4gIGdldCBoYXNFcnJvcigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdG9Cb29sZWFuKHRoaXMuZXJyb3IpO1xuICB9XG5cbiAgcmVxdWlyZWQ6IGJvb2xlYW47XG5cbiAgX3VpZDogc3RyaW5nO1xuXG4gIGdldCBlcnJvcklkKCkge1xuICAgIHJldHVybiBgZXJyb3JfJHt0aGlzLl91aWR9YDtcbiAgfVxuXG4gIHByaXZhdGUgybVSZXF1aXJlZFN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2Q6IENoYW5nZURldGVjdG9yUmVmKSB7fVxuXG4gIG5nT25DaGFuZ2VzKCkge1xuICAgIHRoaXMuaW5wdXQuZGVzY3JpYmVkQnkgPSB0aGlzLmVycm9yID8gdGhpcy5lcnJvcklkIDogbnVsbDtcbiAgfVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICBpZiAoIXRoaXMuaW5wdXQpIHtcbiAgICAgIHRocm93IEVycm9yKGBbbmctbGlnaHRuaW5nXSBDb3VsZG4ndCBmaW5kIGFuIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIj4gd2l0aCBbbmdsXSBhdHRyaWJ1dGUgaW5zaWRlIE5nbENoZWNrYm94YCk7XG4gICAgfVxuXG4gICAgdGhpcy7JtVJlcXVpcmVkU3Vic2NyaXB0aW9uID0gdGhpcy5pbnB1dC7JtVJlcXVpcmVkU3ViamVjdC5zdWJzY3JpYmUoKHJlcXVpcmVkKSA9PiB7XG4gICAgICB0aGlzLnJlcXVpcmVkID0gcmVxdWlyZWQ7XG4gICAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcbiAgICB9KTtcblxuICAgIHRoaXMuX3VpZCA9IHRoaXMuaW5wdXQuaWQ7XG4gICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBpZiAodGhpcy7JtVJlcXVpcmVkU3Vic2NyaXB0aW9uKSB7XG4gICAgICB0aGlzLsm1UmVxdWlyZWRTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgIHRoaXMuybVSZXF1aXJlZFN1YnNjcmlwdGlvbiA9IG51bGw7XG4gICAgfVxuICB9XG59XG4iXX0=
import { __decorate } from "tslib";
import { Component, Input, ChangeDetectionStrategy, ContentChild, HostBinding, ChangeDetectorRef } from '@angular/core';
import { NglInputElement } from '../element/element';
import { toBoolean, InputBoolean } from '../../util/convert';
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
NglInput.decorators = [
    { type: Component, args: [{
                selector: 'ngl-input,[ngl-input]',
                template: "\n<label [nglFormLabel]=\"label\" [attr.for]=\"_uid\" [required]=\"required\"></label>\n<ngl-form-help *ngIf=\"fieldLevelHelpTooltip\" [content]=\"fieldLevelHelpTooltip\"></ngl-form-help>\n<div class=\"slds-form-element__control\">\n  <ng-content></ng-content>\n</div>\n<div class=\"slds-form-element__help\" *ngIf=\"hasError\" [id]=\"errorId\" [nglInternalOutlet]=\"error\"></div>",
                changeDetection: ChangeDetectionStrategy.OnPush,
                host: {
                    '[class.slds-form-element]': 'true',
                }
            },] }
];
NglInput.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
NglInput.propDecorators = {
    input: [{ type: ContentChild, args: [NglInputElement, { static: true },] }],
    label: [{ type: Input }],
    error: [{ type: Input }],
    stacked: [{ type: Input }],
    fieldLevelHelpTooltip: [{ type: Input }],
    hasError: [{ type: HostBinding, args: ['class.slds-has-error',] }]
};
__decorate([
    InputBoolean()
], NglInput.prototype, "stacked", void 0);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1saWdodG5pbmcvc3JjL2xpYi9pbnB1dC9pbnB1dC9pbnB1dC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsdUJBQXVCLEVBQUUsWUFBWSxFQUFlLFdBQVcsRUFDL0QsaUJBQWlCLEVBQXdCLE1BQU0sZUFBZSxDQUFDO0FBQzFGLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBVzdELE1BQU0sT0FBTyxRQUFRO0lBMEJuQixZQUFvQixFQUFxQjtRQUFyQixPQUFFLEdBQUYsRUFBRSxDQUFtQjtJQUFHLENBQUM7SUFmN0MsSUFDSSxRQUFRO1FBQ1YsT0FBTyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFNRCxJQUFJLE9BQU87UUFDVCxPQUFPLFNBQVMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQzlCLENBQUM7SUFNRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQzVELENBQUM7SUFFRCxrQkFBa0I7UUFDaEIsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDZixNQUFNLEtBQUssQ0FBQyw4RUFBOEUsQ0FBQyxDQUFDO1NBQzdGO1FBRUQsSUFBSSxDQUFDLHFCQUFxQixHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUU7WUFDOUUsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7WUFDekIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUMxQixDQUFDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUM7UUFDMUIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBRUQsV0FBVztRQUNULElBQUksSUFBSSxDQUFDLHFCQUFxQixFQUFFO1lBQzlCLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUN6QyxJQUFJLENBQUMscUJBQXFCLEdBQUcsSUFBSSxDQUFDO1NBQ25DO0lBQ0gsQ0FBQzs7O1lBM0RGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsdUJBQXVCO2dCQUNqQyx5WUFBMkI7Z0JBQzNCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxJQUFJLEVBQUU7b0JBQ0osMkJBQTJCLEVBQUUsTUFBTTtpQkFDcEM7YUFDRjs7O1lBWjBCLGlCQUFpQjs7O29CQWN6QyxZQUFZLFNBQUMsZUFBZSxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTtvQkFFOUMsS0FBSztvQkFFTCxLQUFLO3NCQUVMLEtBQUs7b0NBRUwsS0FBSzt1QkFFTCxXQUFXLFNBQUMsc0JBQXNCOztBQUpWO0lBQWYsWUFBWSxFQUFFO3lDQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb250ZW50Q2hpbGQsIFRlbXBsYXRlUmVmLCBIb3N0QmluZGluZyxcbiAgICAgICAgIEFmdGVyQ29udGVudEluaXQsIENoYW5nZURldGVjdG9yUmVmLCBPbkNoYW5nZXMsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmdsSW5wdXRFbGVtZW50IH0gZnJvbSAnLi4vZWxlbWVudC9lbGVtZW50JztcbmltcG9ydCB7IHRvQm9vbGVhbiwgSW5wdXRCb29sZWFuIH0gZnJvbSAnLi4vLi4vdXRpbC9jb252ZXJ0JztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZ2wtaW5wdXQsW25nbC1pbnB1dF0nLFxuICB0ZW1wbGF0ZVVybDogJy4vaW5wdXQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5zbGRzLWZvcm0tZWxlbWVudF0nOiAndHJ1ZScsXG4gIH0sXG59KVxuZXhwb3J0IGNsYXNzIE5nbElucHV0IGltcGxlbWVudHMgT25DaGFuZ2VzLCBBZnRlckNvbnRlbnRJbml0LCBPbkRlc3Ryb3kge1xuICBAQ29udGVudENoaWxkKE5nbElucHV0RWxlbWVudCwgeyBzdGF0aWM6IHRydWUgfSkgaW5wdXQ6IE5nbElucHV0RWxlbWVudDtcblxuICBASW5wdXQoKSBsYWJlbD86IHN0cmluZyB8IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgQElucHV0KCkgZXJyb3I/OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBzdGFja2VkPzogYm9vbGVhbjtcblxuICBASW5wdXQoKSBmaWVsZExldmVsSGVscFRvb2x0aXA/OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3Muc2xkcy1oYXMtZXJyb3InKVxuICBnZXQgaGFzRXJyb3IoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRvQm9vbGVhbih0aGlzLmVycm9yKTtcbiAgfVxuXG4gIHJlcXVpcmVkOiBib29sZWFuO1xuXG4gIF91aWQ6IHN0cmluZztcblxuICBnZXQgZXJyb3JJZCgpIHtcbiAgICByZXR1cm4gYGVycm9yXyR7dGhpcy5fdWlkfWA7XG4gIH1cblxuICBwcml2YXRlIMm1UmVxdWlyZWRTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNkOiBDaGFuZ2VEZXRlY3RvclJlZikge31cblxuICBuZ09uQ2hhbmdlcygpIHtcbiAgICB0aGlzLmlucHV0LmRlc2NyaWJlZEJ5ID0gdGhpcy5lcnJvciA/IHRoaXMuZXJyb3JJZCA6IG51bGw7XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgaWYgKCF0aGlzLmlucHV0KSB7XG4gICAgICB0aHJvdyBFcnJvcihgW25nLWxpZ2h0bmluZ10gQ291bGRuJ3QgZmluZCBhbiA8aW5wdXQ+IHdpdGggW25nbF0gYXR0cmlidXRlIGluc2lkZSBOZ2xJbnB1dGApO1xuICAgIH1cblxuICAgIHRoaXMuybVSZXF1aXJlZFN1YnNjcmlwdGlvbiA9IHRoaXMuaW5wdXQuybVSZXF1aXJlZFN1YmplY3Quc3Vic2NyaWJlKChyZXF1aXJlZCkgPT4ge1xuICAgICAgdGhpcy5yZXF1aXJlZCA9IHJlcXVpcmVkO1xuICAgICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLl91aWQgPSB0aGlzLmlucHV0LmlkO1xuICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgaWYgKHRoaXMuybVSZXF1aXJlZFN1YnNjcmlwdGlvbikge1xuICAgICAgdGhpcy7JtVJlcXVpcmVkU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICB0aGlzLsm1UmVxdWlyZWRTdWJzY3JpcHRpb24gPSBudWxsO1xuICAgIH1cbiAgfVxufVxuIl19
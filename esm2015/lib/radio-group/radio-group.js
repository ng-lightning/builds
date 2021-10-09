import { __decorate } from "tslib";
import { Component, Input, ChangeDetectionStrategy, HostBinding } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { toBoolean, InputBoolean } from '../util/convert';
import { uniqueId } from '../util/util';
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
NglRadioGroup.decorators = [
    { type: Component, args: [{
                selector: 'ngl-radio-group,[ngl-radio-group]',
                template: "\n<legend class=\"slds-form-element__legend slds-form-element__label\"><abbr class=\"slds-required\" *ngIf=\"required\" title=\"required\">*</abbr><span [nglInternalOutlet]=\"label\"></span></legend>\n<div class=\"slds-form-element__control\">\n  <div class=\"slds-radio_button-group\" *ngIf=\"type === 'button'; else contentTpl\">\n    <ng-container *ngTemplateOutlet=\"contentTpl\"></ng-container>\n  </div>\n</div>\n<div class=\"slds-form-element__help\" *ngIf=\"error\" [id]=\"errorId\">{{error}}</div>\n<ng-template #contentTpl>\n  <ng-content></ng-content>\n</ng-template>",
                changeDetection: ChangeDetectionStrategy.OnPush,
                host: {
                    '[class.slds-form-element]': 'true',
                }
            },] }
];
NglRadioGroup.propDecorators = {
    label: [{ type: Input }],
    error: [{ type: Input }],
    hasError: [{ type: HostBinding, args: ['class.slds-has-error',] }],
    required: [{ type: Input }],
    type: [{ type: Input }]
};
__decorate([
    InputBoolean()
], NglRadioGroup.prototype, "required", void 0);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW8tZ3JvdXAuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1saWdodG5pbmcvc3JjL2xpYi9yYWRpby1ncm91cC9yYWRpby1ncm91cC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsdUJBQXVCLEVBQWUsV0FBVyxFQUE0QixNQUFNLGVBQWUsQ0FBQztBQUM5SCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3ZDLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDMUQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQVV4QyxNQUFNLE9BQU8sYUFBYTtJQVIxQjtRQVlXLFVBQUssR0FBVyxJQUFJLENBQUM7UUFhckIsU0FBSSxHQUFzQixNQUFNLENBQUM7UUFFMUMsUUFBRyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUU5QixVQUFLLEdBQUcsSUFBSSxlQUFlLENBQW9CLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUUxRCxXQUFNLEdBQUcsSUFBSSxlQUFlLENBQWdCLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQVUxRCxDQUFDO0lBM0JDLElBQ0ksUUFBUTtRQUNWLE9BQU8sU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBSUQsSUFBSSxPQUFPO1FBQ1QsT0FBTyxTQUFTLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBVUQsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLElBQUksT0FBTyxDQUFDLElBQUksRUFBRTtZQUNoQixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDNUI7UUFDRCxJQUFJLE9BQU8sQ0FBQyxLQUFLLEVBQUU7WUFDakIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDdkQ7SUFDSCxDQUFDOzs7WUF4Q0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxtQ0FBbUM7Z0JBQzdDLDhrQkFBaUM7Z0JBQ2pDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxJQUFJLEVBQUU7b0JBQ0osMkJBQTJCLEVBQUUsTUFBTTtpQkFDcEM7YUFDRjs7O29CQUdFLEtBQUs7b0JBRUwsS0FBSzt1QkFFTCxXQUFXLFNBQUMsc0JBQXNCO3VCQUtsQyxLQUFLO21CQU1MLEtBQUs7O0FBTm1CO0lBQWYsWUFBWSxFQUFFOytDQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBUZW1wbGF0ZVJlZiwgSG9zdEJpbmRpbmcsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0b0Jvb2xlYW4sIElucHV0Qm9vbGVhbiB9IGZyb20gJy4uL3V0aWwvY29udmVydCc7XG5pbXBvcnQgeyB1bmlxdWVJZCB9IGZyb20gJy4uL3V0aWwvdXRpbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25nbC1yYWRpby1ncm91cCxbbmdsLXJhZGlvLWdyb3VwXScsXG4gIHRlbXBsYXRlVXJsOiAnLi9yYWRpby1ncm91cC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLnNsZHMtZm9ybS1lbGVtZW50XSc6ICd0cnVlJyxcbiAgfSxcbn0pXG5leHBvcnQgY2xhc3MgTmdsUmFkaW9Hcm91cCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG5cbiAgQElucHV0KCkgbGFiZWw6IHN0cmluZyB8IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgQElucHV0KCkgZXJyb3I6IHN0cmluZyA9IG51bGw7XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5zbGRzLWhhcy1lcnJvcicpXG4gIGdldCBoYXNFcnJvcigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdG9Cb29sZWFuKHRoaXMuZXJyb3IpO1xuICB9XG5cbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHJlcXVpcmVkOiBib29sZWFuO1xuXG4gIGdldCBlcnJvcklkKCkge1xuICAgIHJldHVybiBgZXJyb3JfJHt0aGlzLnVpZH1gO1xuICB9XG5cbiAgQElucHV0KCkgdHlwZTogJ2xpc3QnIHwgJ2J1dHRvbicgPSAnbGlzdCc7XG5cbiAgdWlkID0gdW5pcXVlSWQoJ3JhZGlvLWdyb3VwJyk7XG5cbiAgdHlwZSQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PCdsaXN0JyB8ICdidXR0b24nPih0aGlzLnR5cGUpO1xuXG4gIGVycm9yJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8c3RyaW5nIHwgbnVsbD4odGhpcy5lcnJvcik7XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIGlmIChjaGFuZ2VzLnR5cGUpIHtcbiAgICAgIHRoaXMudHlwZSQubmV4dCh0aGlzLnR5cGUpO1xuICAgIH1cbiAgICBpZiAoY2hhbmdlcy5lcnJvcikge1xuICAgICAgdGhpcy5lcnJvciQubmV4dCh0aGlzLmhhc0Vycm9yID8gdGhpcy5lcnJvcklkIDogbnVsbCk7XG4gICAgfVxuICB9XG59XG4iXX0=
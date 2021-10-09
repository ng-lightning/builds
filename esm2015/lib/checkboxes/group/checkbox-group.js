import { __decorate } from "tslib";
import { Component, Input, ChangeDetectionStrategy, HostBinding, ContentChildren } from '@angular/core';
import { toBoolean, InputBoolean } from '../../util/convert';
import { uniqueId } from '../../util/util';
import { NglCheckboxOption } from './checkbox-option';
export class NglCheckboxGroup {
    constructor() {
        this.uid = uniqueId('checkbox-group');
        this._type = 'list';
    }
    get hasError() {
        return toBoolean(this.error);
    }
    get errorId() {
        return `error_${this.uid}`;
    }
    set type(type) {
        this._type = type;
        this.updateChildrenType();
    }
    get type() {
        return this._type;
    }
    ngOnChanges(changes) {
        if (changes.error && this.options) {
            this.options.forEach((option) => {
                option.setError(this.error ? this.errorId : null);
            });
        }
    }
    ngAfterContentInit() {
        this.updateChildrenType();
    }
    updateChildrenType() {
        if (!this.options) {
            return;
        }
        this.options.forEach((option) => {
            option.type = this.type;
        });
    }
}
NglCheckboxGroup.decorators = [
    { type: Component, args: [{
                selector: 'ngl-checkbox-group,[ngl-checkbox-group]',
                template: "\n<legend class=\"slds-form-element__legend slds-form-element__label\"><abbr class=\"slds-required\" *ngIf=\"required\" title=\"required\">*</abbr><span [nglInternalOutlet]=\"label\"></span></legend>\n<div class=\"slds-form-element__control\">\n  <div class=\"slds-checkbox_button-group\" *ngIf=\"type === 'button'; else contentTpl\">\n    <ng-container *ngTemplateOutlet=\"contentTpl\"></ng-container>\n  </div>\n</div>\n<div class=\"slds-form-element__help\" *ngIf=\"hasError\" [id]=\"errorId\" [nglInternalOutlet]=\"error\"></div>\n<ng-template #contentTpl>\n  <ng-content></ng-content>\n</ng-template>",
                changeDetection: ChangeDetectionStrategy.OnPush,
                host: {
                    '[class.slds-form-element]': 'true',
                }
            },] }
];
NglCheckboxGroup.propDecorators = {
    options: [{ type: ContentChildren, args: [NglCheckboxOption,] }],
    label: [{ type: Input }],
    error: [{ type: Input }],
    hasError: [{ type: HostBinding, args: ['class.slds-has-error',] }],
    required: [{ type: Input }],
    type: [{ type: Input }]
};
__decorate([
    InputBoolean()
], NglCheckboxGroup.prototype, "required", void 0);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3gtZ3JvdXAuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1saWdodG5pbmcvc3JjL2xpYi9jaGVja2JveGVzL2dyb3VwL2NoZWNrYm94LWdyb3VwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSx1QkFBdUIsRUFBZSxXQUFXLEVBQ3RDLGVBQWUsRUFBNEIsTUFBTSxlQUFlLENBQUM7QUFDdkcsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUM3RCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFVdEQsTUFBTSxPQUFPLGdCQUFnQjtJQVI3QjtRQW1DVSxRQUFHLEdBQUcsUUFBUSxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFFakMsVUFBSyxHQUFzQixNQUFNLENBQUM7SUF1QjVDLENBQUM7SUE1Q0MsSUFDSSxRQUFRO1FBQ1YsT0FBTyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFJRCxJQUFJLE9BQU87UUFDVCxPQUFPLFNBQVMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFFRCxJQUFhLElBQUksQ0FBQyxJQUF1QjtRQUN2QyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztRQUNsQixJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBQ0QsSUFBSSxJQUFJO1FBQ04sT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3BCLENBQUM7SUFNRCxXQUFXLENBQUMsT0FBc0I7UUFDaEMsSUFBSSxPQUFPLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDakMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUF5QixFQUFFLEVBQUU7Z0JBQ2pELE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDcEQsQ0FBQyxDQUFDLENBQUM7U0FDSjtJQUNILENBQUM7SUFFRCxrQkFBa0I7UUFDaEIsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7SUFDNUIsQ0FBQztJQUVPLGtCQUFrQjtRQUN4QixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNqQixPQUFPO1NBQ1I7UUFFRCxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQXlCLEVBQUUsRUFBRTtZQUNqRCxNQUFNLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDMUIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDOzs7WUEzREYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSx5Q0FBeUM7Z0JBQ25ELHltQkFBb0M7Z0JBQ3BDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxJQUFJLEVBQUU7b0JBQ0osMkJBQTJCLEVBQUUsTUFBTTtpQkFDcEM7YUFDRjs7O3NCQUdFLGVBQWUsU0FBQyxpQkFBaUI7b0JBRWpDLEtBQUs7b0JBRUwsS0FBSzt1QkFFTCxXQUFXLFNBQUMsc0JBQXNCO3VCQUtsQyxLQUFLO21CQU1MLEtBQUs7O0FBTm1CO0lBQWYsWUFBWSxFQUFFO2tEQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBUZW1wbGF0ZVJlZiwgSG9zdEJpbmRpbmcsXG4gICAgICAgICBBZnRlckNvbnRlbnRJbml0LCBPbkNoYW5nZXMsIENvbnRlbnRDaGlsZHJlbiwgUXVlcnlMaXN0LCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyB0b0Jvb2xlYW4sIElucHV0Qm9vbGVhbiB9IGZyb20gJy4uLy4uL3V0aWwvY29udmVydCc7XG5pbXBvcnQgeyB1bmlxdWVJZCB9IGZyb20gJy4uLy4uL3V0aWwvdXRpbCc7XG5pbXBvcnQgeyBOZ2xDaGVja2JveE9wdGlvbiB9IGZyb20gJy4vY2hlY2tib3gtb3B0aW9uJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmdsLWNoZWNrYm94LWdyb3VwLFtuZ2wtY2hlY2tib3gtZ3JvdXBdJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NoZWNrYm94LWdyb3VwLmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgaG9zdDoge1xuICAgICdbY2xhc3Muc2xkcy1mb3JtLWVsZW1lbnRdJzogJ3RydWUnLFxuICB9LFxufSlcbmV4cG9ydCBjbGFzcyBOZ2xDaGVja2JveEdyb3VwIGltcGxlbWVudHMgT25DaGFuZ2VzLCBBZnRlckNvbnRlbnRJbml0IHtcblxuICBAQ29udGVudENoaWxkcmVuKE5nbENoZWNrYm94T3B0aW9uKSBvcHRpb25zOiBRdWVyeUxpc3Q8TmdsQ2hlY2tib3hPcHRpb24+O1xuXG4gIEBJbnB1dCgpIGxhYmVsOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIEBJbnB1dCgpIGVycm9yOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3Muc2xkcy1oYXMtZXJyb3InKVxuICBnZXQgaGFzRXJyb3IoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRvQm9vbGVhbih0aGlzLmVycm9yKTtcbiAgfVxuXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSByZXF1aXJlZDogYm9vbGVhbjtcblxuICBnZXQgZXJyb3JJZCgpIHtcbiAgICByZXR1cm4gYGVycm9yXyR7dGhpcy51aWR9YDtcbiAgfVxuXG4gIEBJbnB1dCgpIHNldCB0eXBlKHR5cGU6ICdsaXN0JyB8ICdidXR0b24nKSB7XG4gICAgdGhpcy5fdHlwZSA9IHR5cGU7XG4gICAgdGhpcy51cGRhdGVDaGlsZHJlblR5cGUoKTtcbiAgfVxuICBnZXQgdHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fdHlwZTtcbiAgfVxuXG4gIHByaXZhdGUgdWlkID0gdW5pcXVlSWQoJ2NoZWNrYm94LWdyb3VwJyk7XG5cbiAgcHJpdmF0ZSBfdHlwZTogJ2xpc3QnIHwgJ2J1dHRvbicgPSAnbGlzdCc7XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIGlmIChjaGFuZ2VzLmVycm9yICYmIHRoaXMub3B0aW9ucykge1xuICAgICAgdGhpcy5vcHRpb25zLmZvckVhY2goKG9wdGlvbjogTmdsQ2hlY2tib3hPcHRpb24pID0+IHtcbiAgICAgICAgb3B0aW9uLnNldEVycm9yKHRoaXMuZXJyb3IgPyB0aGlzLmVycm9ySWQgOiBudWxsKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICB0aGlzLnVwZGF0ZUNoaWxkcmVuVHlwZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVDaGlsZHJlblR5cGUoKSB7XG4gICAgaWYgKCF0aGlzLm9wdGlvbnMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLm9wdGlvbnMuZm9yRWFjaCgob3B0aW9uOiBOZ2xDaGVja2JveE9wdGlvbikgPT4ge1xuICAgICAgb3B0aW9uLnR5cGUgPSB0aGlzLnR5cGU7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==
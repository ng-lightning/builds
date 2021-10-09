import { Component, Input, Output, EventEmitter, HostBinding, ChangeDetectionStrategy } from '@angular/core';
import { uniqueId } from '../util/util';
export class NglExpandableSection {
    constructor() {
        this.collapsable = true;
        this.open = false;
        this.openChange = new EventEmitter();
        this._uid = uniqueId('expandable-section');
    }
    get expanded() {
        return this.collapsable ? this.open : true;
    }
    get uid() {
        return this.collapsable ? this._uid : undefined;
    }
    toggle(event) {
        event.preventDefault();
        this.openChange.emit(!this.open);
    }
}
NglExpandableSection.decorators = [
    { type: Component, args: [{
                selector: 'ngl-expandable-section',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: "\n<h3 class=\"slds-section__title\" [class.slds-theme_shade]=\"!collapsable\">\n  <button class=\"slds-button slds-section__title-action\" *ngIf=\"collapsable; else simple_title\" [attr.aria-controls]=\"uid\" [attr.aria-expanded]=\"expanded\" type=\"button\" (click)=\"toggle($event)\">\n    <svg class=\"slds-section__title-action-icon slds-button__icon slds-button__icon_left\" nglIconName=\"switch\"></svg><span class=\"slds-truncate\" [title]=\"title\">{{title}}</span>\n  </button>\n  <ng-template #simple_title><span class=\"slds-truncate slds-p-horizontal_small\" [title]=\"title\">{{title}}</span>\n  </ng-template>\n</h3>\n<div class=\"slds-section__content\" [attr.aria-hidden]=\"!expanded\" [attr.id]=\"uid\">\n  <ng-content></ng-content>\n</div>",
                host: {
                    '[class.slds-section]': 'true',
                }
            },] }
];
NglExpandableSection.propDecorators = {
    title: [{ type: Input }],
    collapsable: [{ type: Input }],
    open: [{ type: Input }],
    openChange: [{ type: Output }],
    expanded: [{ type: HostBinding, args: ['class.slds-is-open',] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nLWxpZ2h0bmluZy9zcmMvbGliL3NlY3Rpb25zL3NlY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxXQUFXLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0csT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQVV4QyxNQUFNLE9BQU8sb0JBQW9CO0lBUmpDO1FBV1csZ0JBQVcsR0FBRyxJQUFJLENBQUM7UUFDbkIsU0FBSSxHQUFHLEtBQUssQ0FBQztRQUVaLGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBVyxDQUFDO1FBRTNDLFNBQUksR0FBRyxRQUFRLENBQUMsb0JBQW9CLENBQUMsQ0FBQztJQWVoRCxDQUFDO0lBYkMsSUFDSSxRQUFRO1FBQ1YsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDN0MsQ0FBQztJQUVELElBQUksR0FBRztRQUNMLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQ2xELENBQUM7SUFFRCxNQUFNLENBQUMsS0FBWTtRQUNqQixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbkMsQ0FBQzs7O1lBOUJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsd0JBQXdCO2dCQUNsQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsaXdCQUE2QjtnQkFDN0IsSUFBSSxFQUFFO29CQUNKLHNCQUFzQixFQUFFLE1BQU07aUJBQy9CO2FBQ0Y7OztvQkFHRSxLQUFLOzBCQUNMLEtBQUs7bUJBQ0wsS0FBSzt5QkFFTCxNQUFNO3VCQUlOLFdBQVcsU0FBQyxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgSG9zdEJpbmRpbmcsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyB1bmlxdWVJZCB9IGZyb20gJy4uL3V0aWwvdXRpbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25nbC1leHBhbmRhYmxlLXNlY3Rpb24nLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgdGVtcGxhdGVVcmw6ICcuL3NlY3Rpb24uaHRtbCcsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLnNsZHMtc2VjdGlvbl0nOiAndHJ1ZScsXG4gIH0sXG59KVxuZXhwb3J0IGNsYXNzIE5nbEV4cGFuZGFibGVTZWN0aW9uIHtcblxuICBASW5wdXQoKSB0aXRsZTogc3RyaW5nO1xuICBASW5wdXQoKSBjb2xsYXBzYWJsZSA9IHRydWU7XG4gIEBJbnB1dCgpIG9wZW4gPSBmYWxzZTtcblxuICBAT3V0cHV0KCkgb3BlbkNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcblxuICBwcml2YXRlIF91aWQgPSB1bmlxdWVJZCgnZXhwYW5kYWJsZS1zZWN0aW9uJyk7XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5zbGRzLWlzLW9wZW4nKVxuICBnZXQgZXhwYW5kZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29sbGFwc2FibGUgPyB0aGlzLm9wZW4gOiB0cnVlO1xuICB9XG5cbiAgZ2V0IHVpZCgpIHtcbiAgICByZXR1cm4gdGhpcy5jb2xsYXBzYWJsZSA/IHRoaXMuX3VpZCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHRvZ2dsZShldmVudDogRXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMub3BlbkNoYW5nZS5lbWl0KCF0aGlzLm9wZW4pO1xuICB9XG59XG4iXX0=
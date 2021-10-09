import { Component, Input, ContentChild, ChangeDetectionStrategy, ChangeDetectorRef, HostBinding } from '@angular/core';
import { NglRadioGroup } from './radio-group';
import { NglRadioInput } from './input/input';
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
NglRadioOption.decorators = [
    { type: Component, args: [{
                selector: 'ngl-radio-option',
                template: "\n<ng-content></ng-content>\n<label class=\"slds-radio__label\" *ngIf=\"type === 'list'\" [attr.for]=\"input.id\"><span class=\"slds-radio_faux\"></span><span class=\"slds-form-element__label\" [nglInternalOutlet]=\"label\"></span></label>\n<label class=\"slds-radio_button__label\" *ngIf=\"type === 'button'\" [attr.for]=\"input.id\"><span class=\"slds-radio_faux\" [nglInternalOutlet]=\"label\"></span></label>",
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
NglRadioOption.ctorParameters = () => [
    { type: NglRadioGroup },
    { type: ChangeDetectorRef }
];
NglRadioOption.propDecorators = {
    label: [{ type: Input }],
    input: [{ type: ContentChild, args: [NglRadioInput, { static: true },] }],
    isTypeList: [{ type: HostBinding, args: ['class.slds-radio',] }],
    isTypeButton: [{ type: HostBinding, args: ['class.slds-button',] }, { type: HostBinding, args: ['class.slds-radio_button',] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW8tb3B0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctbGlnaHRuaW5nL3NyYy9saWIvcmFkaW8tZ3JvdXAvcmFkaW8tb3B0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWUsS0FBSyxFQUFFLFlBQVksRUFBRSx1QkFBdUIsRUFBRSxpQkFBaUIsRUFDdkYsV0FBVyxFQUF1QyxNQUFNLGVBQWUsQ0FBQztBQUVqRixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPOUMsTUFBTSxPQUFPLGNBQWM7SUFLekIsWUFBb0IsVUFBeUIsRUFBVSxFQUFxQjtRQUF4RCxlQUFVLEdBQVYsVUFBVSxDQUFlO1FBQVUsT0FBRSxHQUFGLEVBQUUsQ0FBbUI7UUFlcEUsa0JBQWEsR0FBbUIsRUFBRSxDQUFDO0lBZm9DLENBQUM7SUFJaEYsSUFDSSxVQUFVO1FBQ1osT0FBTyxJQUFJLENBQUMsSUFBSSxLQUFLLE1BQU0sQ0FBQztJQUM5QixDQUFDO0lBRUQsSUFFSSxZQUFZO1FBQ2QsT0FBTyxJQUFJLENBQUMsSUFBSSxLQUFLLFFBQVEsQ0FBQztJQUNoQyxDQUFDO0lBSUQsUUFBUTtRQUNOLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUNyQixJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUF1QixFQUFFLEVBQUU7WUFDMUQsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7WUFDakIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUMxQixDQUFDLENBQUMsRUFDRixJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxPQUFzQixFQUFFLEVBQUU7WUFDMUQsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFDO1FBQ25DLENBQUMsQ0FBQyxDQUNILENBQUM7SUFDSixDQUFDO0lBRUQsa0JBQWtCO1FBQ2hCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDO0lBQ3hDLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFlLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO0lBQ25FLENBQUM7OztZQTdDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIsd2FBQWtDO2dCQUNsQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDs7O1lBUFEsYUFBYTtZQUh5RCxpQkFBaUI7OztvQkFZN0YsS0FBSztvQkFFTCxZQUFZLFNBQUMsYUFBYSxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTt5QkFNNUMsV0FBVyxTQUFDLGtCQUFrQjsyQkFLOUIsV0FBVyxTQUFDLG1CQUFtQixjQUMvQixXQUFXLFNBQUMseUJBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBUZW1wbGF0ZVJlZiwgSW5wdXQsIENvbnRlbnRDaGlsZCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLFxuICAgICAgICAgSG9zdEJpbmRpbmcsIE9uSW5pdCwgQWZ0ZXJDb250ZW50SW5pdCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IE5nbFJhZGlvR3JvdXAgfSBmcm9tICcuL3JhZGlvLWdyb3VwJztcbmltcG9ydCB7IE5nbFJhZGlvSW5wdXQgfSBmcm9tICcuL2lucHV0L2lucHV0JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmdsLXJhZGlvLW9wdGlvbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9yYWRpby1vcHRpb24uaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBOZ2xSYWRpb09wdGlvbiBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJDb250ZW50SW5pdCwgT25EZXN0cm95IHtcbiAgQElucHV0KCkgbGFiZWw6IHN0cmluZyB8IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgQENvbnRlbnRDaGlsZChOZ2xSYWRpb0lucHV0LCB7IHN0YXRpYzogdHJ1ZSB9KSBpbnB1dDogTmdsUmFkaW9JbnB1dDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJhZGlvR3JvdXA6IE5nbFJhZGlvR3JvdXAsIHByaXZhdGUgY2Q6IENoYW5nZURldGVjdG9yUmVmKSB7fVxuXG4gIHR5cGU6ICdsaXN0JyB8ICdidXR0b24nO1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3Muc2xkcy1yYWRpbycpXG4gIGdldCBpc1R5cGVMaXN0KCkge1xuICAgIHJldHVybiB0aGlzLnR5cGUgPT09ICdsaXN0JztcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3Muc2xkcy1idXR0b24nKVxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnNsZHMtcmFkaW9fYnV0dG9uJylcbiAgZ2V0IGlzVHlwZUJ1dHRvbigpIHtcbiAgICByZXR1cm4gdGhpcy50eXBlID09PSAnYnV0dG9uJztcbiAgfVxuXG4gIHByaXZhdGUgc3Vic2NyaXB0aW9uczogU3Vic2NyaXB0aW9uW10gPSBbXTtcblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbnMucHVzaChcbiAgICAgIHRoaXMucmFkaW9Hcm91cC50eXBlJC5zdWJzY3JpYmUoKHR5cGU6ICdsaXN0JyB8ICdidXR0b24nKSA9PiB7XG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgfSksXG4gICAgICB0aGlzLnJhZGlvR3JvdXAuZXJyb3IkLnN1YnNjcmliZSgoZXJyb3JJZDogc3RyaW5nIHwgbnVsbCkgPT4ge1xuICAgICAgICB0aGlzLmlucHV0LmRlc2NyaWJlZEJ5ID0gZXJyb3JJZDtcbiAgICAgIH0pLFxuICAgICk7XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgdGhpcy5pbnB1dC5uYW1lID0gdGhpcy5yYWRpb0dyb3VwLnVpZDtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5mb3JFYWNoKChzOiBTdWJzY3JpcHRpb24pID0+IHMudW5zdWJzY3JpYmUoKSk7XG4gIH1cbn1cbiJdfQ==
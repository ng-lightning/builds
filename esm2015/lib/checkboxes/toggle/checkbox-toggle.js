import { Component, Input, ChangeDetectionStrategy, ContentChild, ChangeDetectorRef, HostBinding } from '@angular/core';
import { NglCheckboxInput } from '../input/input';
import { toBoolean } from '../../util/convert';
export class NglCheckboxToggle {
    constructor(cd) {
        this.cd = cd;
        this.enabledText = 'Enabled';
        this.disabledText = 'Disabled';
    }
    get hasError() {
        return toBoolean(this.error);
    }
    ngAfterContentInit() {
        if (!this.input) {
            throw Error(`[ng-lightning] Couldn't find an <input type="checkbox"> with [ngl] attribute inside NglCheckboxToggle`);
        }
        this.ɵRequiredSubscription = this.input.ɵRequiredSubject.subscribe((required) => {
            this.required = required;
            this.cd.detectChanges();
        });
        this.uid = `${this.input.id}_toggle`;
        this.input.describedBy = this.uid;
        this.cd.detectChanges();
    }
    ngOnDestroy() {
        if (this.ɵRequiredSubscription) {
            this.ɵRequiredSubscription.unsubscribe();
            this.ɵRequiredSubscription = null;
        }
    }
}
NglCheckboxToggle.decorators = [
    { type: Component, args: [{
                selector: 'ngl-checkbox-toggle',
                template: "\n<label class=\"slds-checkbox_toggle slds-grid\"><abbr class=\"slds-required\" *ngIf=\"required\" title=\"required\">*</abbr><span class=\"slds-form-element__label slds-m-bottom_none\" [nglInternalOutlet]=\"label\"></span>\n  <ng-content></ng-content><span class=\"slds-checkbox_faux_container\" [id]=\"uid\" aria-live=\"assertive\"><span class=\"slds-checkbox_faux\"></span><span class=\"slds-checkbox_on\">{{enabledText}}</span><span class=\"slds-checkbox_off\">{{disabledText}}</span></span>\n</label>\n<div class=\"slds-form-element__help\" *ngIf=\"error\">{{error}}</div>",
                changeDetection: ChangeDetectionStrategy.OnPush,
                host: {
                    '[class.slds-form-element]': 'true',
                }
            },] }
];
NglCheckboxToggle.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
NglCheckboxToggle.propDecorators = {
    input: [{ type: ContentChild, args: [NglCheckboxInput, { static: true },] }],
    label: [{ type: Input }],
    error: [{ type: Input }],
    enabledText: [{ type: Input }],
    disabledText: [{ type: Input }],
    hasError: [{ type: HostBinding, args: ['class.slds-has-error',] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3gtdG9nZ2xlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctbGlnaHRuaW5nL3NyYy9saWIvY2hlY2tib3hlcy90b2dnbGUvY2hlY2tib3gtdG9nZ2xlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLHVCQUF1QixFQUFFLFlBQVksRUFBRSxpQkFBaUIsRUFDN0QsV0FBVyxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQVcvQyxNQUFNLE9BQU8saUJBQWlCO0lBcUI1QixZQUFvQixFQUFxQjtRQUFyQixPQUFFLEdBQUYsRUFBRSxDQUFtQjtRQWRoQyxnQkFBVyxHQUFHLFNBQVMsQ0FBQztRQUN4QixpQkFBWSxHQUFHLFVBQVUsQ0FBQztJQWFTLENBQUM7SUFYN0MsSUFDSSxRQUFRO1FBQ1YsT0FBTyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFVRCxrQkFBa0I7UUFDaEIsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDZixNQUFNLEtBQUssQ0FBQyx1R0FBdUcsQ0FBQyxDQUFDO1NBQ3RIO1FBRUQsSUFBSSxDQUFDLHFCQUFxQixHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUU7WUFDOUUsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7WUFDekIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUMxQixDQUFDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsU0FBUyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUM7UUFDbEMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBRUQsV0FBVztRQUNULElBQUksSUFBSSxDQUFDLHFCQUFxQixFQUFFO1lBQzlCLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUN6QyxJQUFJLENBQUMscUJBQXFCLEdBQUcsSUFBSSxDQUFDO1NBQ25DO0lBQ0gsQ0FBQzs7O1lBbkRGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUscUJBQXFCO2dCQUMvQiw2a0JBQXFDO2dCQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsSUFBSSxFQUFFO29CQUNKLDJCQUEyQixFQUFFLE1BQU07aUJBQ3BDO2FBQ0Y7OztZQWJpRSxpQkFBaUI7OztvQkFlaEYsWUFBWSxTQUFDLGdCQUFnQixFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTtvQkFFL0MsS0FBSztvQkFFTCxLQUFLOzBCQUVMLEtBQUs7MkJBQ0wsS0FBSzt1QkFFTCxXQUFXLFNBQUMsc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbnRlbnRDaGlsZCwgQ2hhbmdlRGV0ZWN0b3JSZWYsIEFmdGVyQ29udGVudEluaXQsXG4gICAgICAgICBUZW1wbGF0ZVJlZiwgSG9zdEJpbmRpbmcsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmdsQ2hlY2tib3hJbnB1dCB9IGZyb20gJy4uL2lucHV0L2lucHV0JztcbmltcG9ydCB7IHRvQm9vbGVhbiB9IGZyb20gJy4uLy4uL3V0aWwvY29udmVydCc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmdsLWNoZWNrYm94LXRvZ2dsZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9jaGVja2JveC10b2dnbGUuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5zbGRzLWZvcm0tZWxlbWVudF0nOiAndHJ1ZScsXG4gIH0sXG59KVxuZXhwb3J0IGNsYXNzIE5nbENoZWNrYm94VG9nZ2xlIGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCwgT25EZXN0cm95IHtcbiAgQENvbnRlbnRDaGlsZChOZ2xDaGVja2JveElucHV0LCB7IHN0YXRpYzogdHJ1ZSB9KSBpbnB1dDogTmdsQ2hlY2tib3hJbnB1dDtcblxuICBASW5wdXQoKSBsYWJlbDogc3RyaW5nIHwgVGVtcGxhdGVSZWY8YW55PjtcblxuICBASW5wdXQoKSBlcnJvcjogc3RyaW5nO1xuXG4gIEBJbnB1dCgpIGVuYWJsZWRUZXh0ID0gJ0VuYWJsZWQnO1xuICBASW5wdXQoKSBkaXNhYmxlZFRleHQgPSAnRGlzYWJsZWQnO1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3Muc2xkcy1oYXMtZXJyb3InKVxuICBnZXQgaGFzRXJyb3IoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRvQm9vbGVhbih0aGlzLmVycm9yKTtcbiAgfVxuXG4gIHJlcXVpcmVkOiBib29sZWFuO1xuXG4gIHVpZDogc3RyaW5nO1xuXG4gIHByaXZhdGUgybVSZXF1aXJlZFN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2Q6IENoYW5nZURldGVjdG9yUmVmKSB7fVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICBpZiAoIXRoaXMuaW5wdXQpIHtcbiAgICAgIHRocm93IEVycm9yKGBbbmctbGlnaHRuaW5nXSBDb3VsZG4ndCBmaW5kIGFuIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIj4gd2l0aCBbbmdsXSBhdHRyaWJ1dGUgaW5zaWRlIE5nbENoZWNrYm94VG9nZ2xlYCk7XG4gICAgfVxuXG4gICAgdGhpcy7JtVJlcXVpcmVkU3Vic2NyaXB0aW9uID0gdGhpcy5pbnB1dC7JtVJlcXVpcmVkU3ViamVjdC5zdWJzY3JpYmUoKHJlcXVpcmVkKSA9PiB7XG4gICAgICB0aGlzLnJlcXVpcmVkID0gcmVxdWlyZWQ7XG4gICAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcbiAgICB9KTtcblxuICAgIHRoaXMudWlkID0gYCR7dGhpcy5pbnB1dC5pZH1fdG9nZ2xlYDtcbiAgICB0aGlzLmlucHV0LmRlc2NyaWJlZEJ5ID0gdGhpcy51aWQ7XG4gICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBpZiAodGhpcy7JtVJlcXVpcmVkU3Vic2NyaXB0aW9uKSB7XG4gICAgICB0aGlzLsm1UmVxdWlyZWRTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgIHRoaXMuybVSZXF1aXJlZFN1YnNjcmlwdGlvbiA9IG51bGw7XG4gICAgfVxuICB9XG59XG4iXX0=
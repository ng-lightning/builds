import { Component, ElementRef, Renderer2, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { NglCommonNotify } from '../common/notify/notify';
export class NglToast extends NglCommonNotify {
    constructor(element, renderer, cd) {
        super(element, renderer, cd, 'toast');
    }
}
NglToast.decorators = [
    { type: Component, args: [{
                selector: 'ngl-toast',
                template: "<span class=\"slds-assistive-text\">{{assistiveText || variant}}</span>\n<ngl-icon class=\"slds-m-right_small slds-no-flex slds-align-top\" *ngIf=\"iconName\" [iconName]=\"iconName\" size=\"small\" variant=\"\"></ngl-icon>\n<div class=\"slds-notify__content\">\n  <ng-content></ng-content>\n</div>\n<button class=\"slds-button slds-button_icon slds-notify__close slds-button_icon-inverse\" *ngIf=\"dismissible\" type=\"button\" (click)=\"close('button', $event)\">\n  <svg class=\"slds-button__icon slds-button__icon_large\" nglIconName=\"utility:close\"></svg><span class=\"slds-assistive-text\" *ngIf=\"closeButtonAssistiveText\">{{closeButtonAssistiveText}}</span>\n</button>",
                changeDetection: ChangeDetectionStrategy.OnPush,
                exportAs: 'nglToast'
            },] }
];
NglToast.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: ChangeDetectorRef }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1saWdodG5pbmcvc3JjL2xpYi90b2FzdC90b2FzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsdUJBQXVCLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0csT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBUTFELE1BQU0sT0FBTyxRQUFTLFNBQVEsZUFBZTtJQUUzQyxZQUFZLE9BQW1CLEVBQUUsUUFBbUIsRUFBRSxFQUFxQjtRQUN6RSxLQUFLLENBQUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDeEMsQ0FBQzs7O1lBVkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxXQUFXO2dCQUNyQixrckJBQTJCO2dCQUMzQixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsUUFBUSxFQUFFLFVBQVU7YUFDckI7OztZQVJtQixVQUFVO1lBQUUsU0FBUztZQUEyQixpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIFJlbmRlcmVyMiwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ2xDb21tb25Ob3RpZnkgfSBmcm9tICcuLi9jb21tb24vbm90aWZ5L25vdGlmeSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25nbC10b2FzdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi90b2FzdC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGV4cG9ydEFzOiAnbmdsVG9hc3QnLFxufSlcbmV4cG9ydCBjbGFzcyBOZ2xUb2FzdCBleHRlbmRzIE5nbENvbW1vbk5vdGlmeSB7XG5cbiAgY29uc3RydWN0b3IoZWxlbWVudDogRWxlbWVudFJlZiwgcmVuZGVyZXI6IFJlbmRlcmVyMiwgY2Q6IENoYW5nZURldGVjdG9yUmVmKSB7XG4gICAgc3VwZXIoZWxlbWVudCwgcmVuZGVyZXIsIGNkLCAndG9hc3QnKTtcbiAgfVxuXG59XG4iXX0=
import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
export class NglFormHelp {
    constructor() {
        this.isOpen = false;
    }
}
NglFormHelp.decorators = [
    { type: Component, args: [{
                selector: 'ngl-form-help',
                template: "\n<button class=\"slds-button slds-button_icon\" [nglTooltip]=\"content\" [(nglTooltipOpen)]=\"isOpen\">\n  <svg class=\"slds-button__icon\" nglIconName=\"utility:info\"></svg><span class=\"slds-assistive-text\">Help</span>\n</button>",
                changeDetection: ChangeDetectionStrategy.OnPush,
                host: {
                    '[class.slds-form-element__icon]': 'true',
                }
            },] }
];
NglFormHelp.propDecorators = {
    content: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nLWxpZ2h0bmluZy9zcmMvbGliL2Zvcm1zL2hlbHAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsdUJBQXVCLEVBQWUsTUFBTSxlQUFlLENBQUM7QUFVdkYsTUFBTSxPQUFPLFdBQVc7SUFSeEI7UUFVRSxXQUFNLEdBQUcsS0FBSyxDQUFDO0lBSWpCLENBQUM7OztZQWRBLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZUFBZTtnQkFDekIsc1BBQTBCO2dCQUMxQixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsSUFBSSxFQUFFO29CQUNKLGlDQUFpQyxFQUFFLE1BQU07aUJBQzFDO2FBQ0Y7OztzQkFLRSxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25nbC1mb3JtLWhlbHAnLFxuICB0ZW1wbGF0ZVVybDogJy4vaGVscC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLnNsZHMtZm9ybS1lbGVtZW50X19pY29uXSc6ICd0cnVlJyxcbiAgfSxcbn0pXG5leHBvcnQgY2xhc3MgTmdsRm9ybUhlbHAge1xuXG4gIGlzT3BlbiA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpIGNvbnRlbnQ6IHN0cmluZyB8IFRlbXBsYXRlUmVmPGFueT47XG5cbn1cbiJdfQ==
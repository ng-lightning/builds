import { Component, Input, ElementRef, Renderer2, ChangeDetectionStrategy } from '@angular/core';
export class NglButtonStateOn {
    constructor(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.renderer.addClass(this.el.nativeElement, this.getHostClass());
    }
    getHostClass() {
        return 'slds-text-selected';
    }
}
NglButtonStateOn.decorators = [
    { type: Component, args: [{
                selector: 'ngl-state-on',
                template: "\n<svg class=\"slds-button__icon slds-button__icon_small slds-button__icon_left\" *ngIf=\"iconName\" [nglIconName]=\"iconName\"></svg>\n<ng-content></ng-content>",
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
NglButtonStateOn.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
NglButtonStateOn.propDecorators = {
    iconName: [{ type: Input }]
};
export class NglButtonStateOff extends NglButtonStateOn {
    getHostClass() {
        return 'slds-text-not-selected';
    }
}
NglButtonStateOff.decorators = [
    { type: Component, args: [{
                selector: 'ngl-state-off',
                template: "\n<svg class=\"slds-button__icon slds-button__icon_small slds-button__icon_left\" *ngIf=\"iconName\" [nglIconName]=\"iconName\"></svg>\n<ng-content></ng-content>",
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
export class NglButtonStateHover extends NglButtonStateOn {
    getHostClass() {
        return 'slds-text-selected-focus';
    }
}
NglButtonStateHover.decorators = [
    { type: Component, args: [{
                selector: 'ngl-state-hover',
                template: "\n<svg class=\"slds-button__icon slds-button__icon_small slds-button__icon_left\" *ngIf=\"iconName\" [nglIconName]=\"iconName\"></svg>\n<ng-content></ng-content>",
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLXN0YXRlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nLWxpZ2h0bmluZy9zcmMvbGliL2J1dHRvbnMvYnV0dG9uLXN0YXRlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBT2pHLE1BQU0sT0FBTyxnQkFBZ0I7SUFRM0IsWUFBb0IsRUFBYyxFQUFVLFFBQW1CO1FBQTNDLE9BQUUsR0FBRixFQUFFLENBQVk7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQzdELElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDO0lBQ3JFLENBQUM7SUFFUyxZQUFZO1FBQ3BCLE9BQU8sb0JBQW9CLENBQUM7SUFDOUIsQ0FBQzs7O1lBbkJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsY0FBYztnQkFDeEIsNktBQW1DO2dCQUNuQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDs7O1lBTjBCLFVBQVU7WUFBRSxTQUFTOzs7dUJBYTdDLEtBQUs7O0FBZ0JSLE1BQU0sT0FBTyxpQkFBa0IsU0FBUSxnQkFBZ0I7SUFDM0MsWUFBWTtRQUNwQixPQUFPLHdCQUF3QixDQUFDO0lBQ2xDLENBQUM7OztZQVJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZUFBZTtnQkFDekIsNktBQW1DO2dCQUNuQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDs7QUFZRCxNQUFNLE9BQU8sbUJBQW9CLFNBQVEsZ0JBQWdCO0lBQzdDLFlBQVk7UUFDcEIsT0FBTywwQkFBMEIsQ0FBQztJQUNwQyxDQUFDOzs7WUFSRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0IsNktBQW1DO2dCQUNuQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIEVsZW1lbnRSZWYsIFJlbmRlcmVyMiwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmdsLXN0YXRlLW9uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2J1dHRvbi1zdGF0ZXMuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBOZ2xCdXR0b25TdGF0ZU9uIHtcblxuICAvKipcbiAgICogTERTIG5hbWUgb2YgdGhlIGljb24uXG4gICAqIE5hbWVzIGFyZSB3cml0dGVuIGluIHRoZSBmb3JtYXQgJ3V0aWxpdHk6ZG93bicgd2hlcmUgJ3V0aWxpdHknIGlzIHRoZSBjYXRlZ29yeSwgYW5kICdkb3duJyBpcyB0aGUgc3BlY2lmaWMgaWNvbiB0byBiZSBkaXNwbGF5ZWQuXG4gICAqL1xuICBASW5wdXQoKSBpY29uTmFtZTogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMikge1xuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmdldEhvc3RDbGFzcygpKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBnZXRIb3N0Q2xhc3MoKSB7XG4gICAgcmV0dXJuICdzbGRzLXRleHQtc2VsZWN0ZWQnO1xuICB9XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25nbC1zdGF0ZS1vZmYnLFxuICB0ZW1wbGF0ZVVybDogJy4vYnV0dG9uLXN0YXRlcy5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIE5nbEJ1dHRvblN0YXRlT2ZmIGV4dGVuZHMgTmdsQnV0dG9uU3RhdGVPbiB7XG4gIHByb3RlY3RlZCBnZXRIb3N0Q2xhc3MoKSB7XG4gICAgcmV0dXJuICdzbGRzLXRleHQtbm90LXNlbGVjdGVkJztcbiAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZ2wtc3RhdGUtaG92ZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vYnV0dG9uLXN0YXRlcy5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIE5nbEJ1dHRvblN0YXRlSG92ZXIgZXh0ZW5kcyBOZ2xCdXR0b25TdGF0ZU9uIHtcbiAgcHJvdGVjdGVkIGdldEhvc3RDbGFzcygpIHtcbiAgICByZXR1cm4gJ3NsZHMtdGV4dC1zZWxlY3RlZC1mb2N1cyc7XG4gIH1cbn1cbiJdfQ==
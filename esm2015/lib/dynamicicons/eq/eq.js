import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { BaseDynamicIconComponent } from '../base-dynamic-icon';
export class NglDynamicIconEq extends BaseDynamicIconComponent {
    set option(option) {
        this._option = option || 'play';
    }
    get option() {
        return this._option;
    }
    isAnimated() {
        return this.option !== 'stop';
    }
}
NglDynamicIconEq.decorators = [
    { type: Component, args: [{
                selector: 'ngl-dynamic-icon-eq',
                template: "\n<div class=\"slds-icon-eq\" [class.slds-is-animated]=\"isAnimated()\">\n  <div class=\"slds-icon-eq__bar\"></div>\n  <div class=\"slds-icon-eq__bar\"></div>\n  <div class=\"slds-icon-eq__bar\"></div><span class=\"slds-assistive-text\" *ngIf=\"alternativeText\">{{alternativeText}}</span>\n</div>",
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
NglDynamicIconEq.propDecorators = {
    option: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1saWdodG5pbmcvc3JjL2xpYi9keW5hbWljaWNvbnMvZXEvZXEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSx1QkFBdUIsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFTaEUsTUFBTSxPQUFPLGdCQUFpQixTQUFRLHdCQUF3QjtJQUU1RCxJQUFhLE1BQU0sQ0FBQyxNQUE4QjtRQUNoRCxJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sSUFBSSxNQUFNLENBQUM7SUFDbEMsQ0FBQztJQUNELElBQUksTUFBTTtRQUNSLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN0QixDQUFDO0lBSUQsVUFBVTtRQUNSLE9BQU8sSUFBSSxDQUFDLE1BQU0sS0FBSyxNQUFNLENBQUM7SUFDaEMsQ0FBQzs7O1lBbEJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUscUJBQXFCO2dCQUMvQixxVEFBd0I7Z0JBQ3hCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEOzs7cUJBR0UsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCYXNlRHluYW1pY0ljb25Db21wb25lbnQgfSBmcm9tICcuLi9iYXNlLWR5bmFtaWMtaWNvbic7XG5cbmV4cG9ydCB0eXBlIE5nbER5bmFtaWNJY29uRXFPcHRpb24gPSAncGxheScgfCAnc3RvcCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25nbC1keW5hbWljLWljb24tZXEnLFxuICB0ZW1wbGF0ZVVybDogJy4vZXEuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBOZ2xEeW5hbWljSWNvbkVxIGV4dGVuZHMgQmFzZUR5bmFtaWNJY29uQ29tcG9uZW50IHtcblxuICBASW5wdXQoKSBzZXQgb3B0aW9uKG9wdGlvbjogTmdsRHluYW1pY0ljb25FcU9wdGlvbikge1xuICAgIHRoaXMuX29wdGlvbiA9IG9wdGlvbiB8fCAncGxheSc7XG4gIH1cbiAgZ2V0IG9wdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fb3B0aW9uO1xuICB9XG5cbiAgcHJpdmF0ZSBfb3B0aW9uOiBOZ2xEeW5hbWljSWNvbkVxT3B0aW9uO1xuXG4gIGlzQW5pbWF0ZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9uICE9PSAnc3RvcCc7XG4gIH1cblxufVxuIl19
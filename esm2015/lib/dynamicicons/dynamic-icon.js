import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { BaseDynamicIconComponent } from './base-dynamic-icon';
export class NglDynamicIcon extends BaseDynamicIconComponent {
}
NglDynamicIcon.decorators = [
    { type: Component, args: [{
                selector: 'ngl-dynamic-icon',
                template: "\n<ng-container [ngSwitch]=\"type\">\n  <ngl-dynamic-icon-ellie *ngSwitchCase=\"'ellie'\" [alternativeText]=\"alternativeText\"></ngl-dynamic-icon-ellie>\n  <ngl-dynamic-icon-eq *ngSwitchCase=\"'eq'\" [option]=\"option\" [alternativeText]=\"alternativeText\"></ngl-dynamic-icon-eq>\n  <ngl-dynamic-icon-score *ngSwitchCase=\"'score'\" [option]=\"option\" [alternativeText]=\"alternativeText\"></ngl-dynamic-icon-score>\n  <ngl-dynamic-icon-waffle *ngSwitchCase=\"'waffle'\" [alternativeText]=\"alternativeText\"></ngl-dynamic-icon-waffle>\n</ng-container>",
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
NglDynamicIcon.propDecorators = {
    type: [{ type: Input }],
    option: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1pY29uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctbGlnaHRuaW5nL3NyYy9saWIvZHluYW1pY2ljb25zL2R5bmFtaWMtaWNvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLHVCQUF1QixFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxRSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQU8vRCxNQUFNLE9BQU8sY0FBZSxTQUFRLHdCQUF3Qjs7O1lBTDNELFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsa0JBQWtCO2dCQUM1Qix1akJBQWtDO2dCQUNsQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDs7O21CQUdFLEtBQUs7cUJBRUwsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCYXNlRHluYW1pY0ljb25Db21wb25lbnQgfSBmcm9tICcuL2Jhc2UtZHluYW1pYy1pY29uJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmdsLWR5bmFtaWMtaWNvbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9keW5hbWljLWljb24uaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBOZ2xEeW5hbWljSWNvbiBleHRlbmRzIEJhc2VEeW5hbWljSWNvbkNvbXBvbmVudCB7XG5cbiAgQElucHV0KCkgdHlwZTogJ2VsbGllJyB8ICdlcScgfCAnd2FmZmxlJztcblxuICBASW5wdXQoKSBvcHRpb246IHN0cmluZztcblxufVxuIl19
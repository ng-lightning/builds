import { __decorate } from "tslib";
import { Component, Input, ChangeDetectionStrategy, ElementRef, Renderer2 } from '@angular/core';
import { InputBoolean } from '../util/convert';
export class NglFormLabel {
    constructor(element, renderer) {
        this.element = element;
        this.renderer = renderer;
        this.klass = 'slds-form-element__label';
    }
    ngOnInit() {
        this.renderer.addClass(this.element.nativeElement, this.klass);
    }
}
NglFormLabel.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'label[nglFormLabel]',
                template: "<abbr class=\"slds-required\" *ngIf=\"required\" title=\"Required\">*</abbr><span [nglInternalOutlet]=\"label\"></span>\n<ng-content></ng-content>",
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
NglFormLabel.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
NglFormLabel.propDecorators = {
    label: [{ type: Input, args: ['nglFormLabel',] }],
    klass: [{ type: Input, args: ['nglFormLabelClass',] }],
    required: [{ type: Input }]
};
__decorate([
    InputBoolean()
], NglFormLabel.prototype, "required", void 0);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFiZWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1saWdodG5pbmcvc3JjL2xpYi9mb3Jtcy9sYWJlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsdUJBQXVCLEVBQWUsVUFBVSxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUN0SCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFRL0MsTUFBTSxPQUFPLFlBQVk7SUFRdkIsWUFBb0IsT0FBbUIsRUFBVSxRQUFtQjtRQUFoRCxZQUFPLEdBQVAsT0FBTyxDQUFZO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUp4QyxVQUFLLEdBQUcsMEJBQTBCLENBQUM7SUFJUSxDQUFDO0lBRXhFLFFBQVE7UUFDTixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDakUsQ0FBQzs7O1lBbEJGLFNBQVMsU0FBQztnQkFDVCw4Q0FBOEM7Z0JBQzlDLFFBQVEsRUFBRSxxQkFBcUI7Z0JBQy9CLDhKQUEyQjtnQkFDM0IsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDaEQ7OztZQVJnRSxVQUFVO1lBQUUsU0FBUzs7O29CQVduRixLQUFLLFNBQUMsY0FBYztvQkFFcEIsS0FBSyxTQUFDLG1CQUFtQjt1QkFFekIsS0FBSzs7QUFBbUI7SUFBZixZQUFZLEVBQUU7OENBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIFRlbXBsYXRlUmVmLCBFbGVtZW50UmVmLCBSZW5kZXJlcjIsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSW5wdXRCb29sZWFuIH0gZnJvbSAnLi4vdXRpbC9jb252ZXJ0JztcblxuQENvbXBvbmVudCh7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICdsYWJlbFtuZ2xGb3JtTGFiZWxdJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2xhYmVsLmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgTmdsRm9ybUxhYmVsIGltcGxlbWVudHMgT25Jbml0IHtcblxuICBASW5wdXQoJ25nbEZvcm1MYWJlbCcpIGxhYmVsOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIEBJbnB1dCgnbmdsRm9ybUxhYmVsQ2xhc3MnKSBrbGFzcyA9ICdzbGRzLWZvcm0tZWxlbWVudF9fbGFiZWwnO1xuXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSByZXF1aXJlZDogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnQ6IEVsZW1lbnRSZWYsIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMikge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LCB0aGlzLmtsYXNzKTtcbiAgfVxuXG59XG4iXX0=
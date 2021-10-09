import { Component, Input, TemplateRef, ChangeDetectionStrategy } from '@angular/core';
export class NglInternalOutlet {
    isTemplate() {
        return this.nglInternalOutlet instanceof TemplateRef;
    }
}
NglInternalOutlet.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: '[nglInternalOutlet]',
                template: `
    <ng-template [ngIf]="isTemplate()" [ngIfElse]="str">
      <ng-template [ngTemplateOutlet]="nglInternalOutlet" [ngTemplateOutletContext]="nglInternalOutletContext"></ng-template>
    </ng-template>
    <ng-template #str>{{nglInternalOutlet}}</ng-template>`,
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
NglInternalOutlet.propDecorators = {
    nglInternalOutlet: [{ type: Input }],
    nglInternalOutletContext: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3V0bGV0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctbGlnaHRuaW5nL3NyYy9saWIvdXRpbC9vdXRsZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBWXZGLE1BQU0sT0FBTyxpQkFBaUI7SUFLNUIsVUFBVTtRQUNSLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixZQUFZLFdBQVcsQ0FBQztJQUN2RCxDQUFDOzs7WUFqQkYsU0FBUyxTQUFDO2dCQUNULDhDQUE4QztnQkFDOUMsUUFBUSxFQUFFLHFCQUFxQjtnQkFDL0IsUUFBUSxFQUFFOzs7OzBEQUk4QztnQkFDeEQsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDaEQ7OztnQ0FFRSxLQUFLO3VDQUVMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBUZW1wbGF0ZVJlZiwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICdbbmdsSW50ZXJuYWxPdXRsZXRdJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bmctdGVtcGxhdGUgW25nSWZdPVwiaXNUZW1wbGF0ZSgpXCIgW25nSWZFbHNlXT1cInN0clwiPlxuICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cIm5nbEludGVybmFsT3V0bGV0XCIgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cIm5nbEludGVybmFsT3V0bGV0Q29udGV4dFwiPjwvbmctdGVtcGxhdGU+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgICA8bmctdGVtcGxhdGUgI3N0cj57e25nbEludGVybmFsT3V0bGV0fX08L25nLXRlbXBsYXRlPmAsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBOZ2xJbnRlcm5hbE91dGxldCB7XG4gIEBJbnB1dCgpIG5nbEludGVybmFsT3V0bGV0OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIEBJbnB1dCgpIG5nbEludGVybmFsT3V0bGV0Q29udGV4dDogYW55IDtcblxuICBpc1RlbXBsYXRlKCkge1xuICAgIHJldHVybiB0aGlzLm5nbEludGVybmFsT3V0bGV0IGluc3RhbmNlb2YgVGVtcGxhdGVSZWY7XG4gIH1cbn1cbiJdfQ==
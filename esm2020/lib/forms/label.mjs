import { __decorate } from "tslib";
import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { InputBoolean } from '../util/convert';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../util/outlet";
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
NglFormLabel.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglFormLabel, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Component });
NglFormLabel.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: NglFormLabel, selector: "label[nglFormLabel]", inputs: { label: ["nglFormLabel", "label"], klass: ["nglFormLabelClass", "klass"], required: "required" }, ngImport: i0, template: "<abbr class=\"slds-required\" *ngIf=\"required\" title=\"Required\">*</abbr><span [nglInternalOutlet]=\"label\"></span>\n<ng-content></ng-content>", dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i2.NglInternalOutlet, selector: "[nglInternalOutlet]", inputs: ["nglInternalOutlet", "nglInternalOutletContext"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
__decorate([
    InputBoolean()
], NglFormLabel.prototype, "required", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglFormLabel, decorators: [{
            type: Component,
            args: [{ selector: 'label[nglFormLabel]', changeDetection: ChangeDetectionStrategy.OnPush, template: "<abbr class=\"slds-required\" *ngIf=\"required\" title=\"Required\">*</abbr><span [nglInternalOutlet]=\"label\"></span>\n<ng-content></ng-content>" }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }]; }, propDecorators: { label: [{
                type: Input,
                args: ['nglFormLabel']
            }], klass: [{
                type: Input,
                args: ['nglFormLabelClass']
            }], required: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFiZWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1saWdodG5pbmcvc3JjL2xpYi9mb3Jtcy9sYWJlbC50cyIsIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nLWxpZ2h0bmluZy9zcmMvbGliL2Zvcm1zL2xhYmVsLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLHVCQUF1QixFQUE4QyxNQUFNLGVBQWUsQ0FBQztBQUN0SCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7Ozs7QUFRL0MsTUFBTSxPQUFPLFlBQVk7SUFRdkIsWUFBb0IsT0FBbUIsRUFBVSxRQUFtQjtRQUFoRCxZQUFPLEdBQVAsT0FBTyxDQUFZO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUp4QyxVQUFLLEdBQUcsMEJBQTBCLENBQUM7SUFJUSxDQUFDO0lBRXhFLFFBQVE7UUFDTixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDakUsQ0FBQzs7eUdBWlUsWUFBWTs2RkFBWixZQUFZLHNLQ1R6QixvSkFDeUI7QURjRTtJQUFmLFlBQVksRUFBRTs4Q0FBbUI7MkZBTmhDLFlBQVk7a0JBTnhCLFNBQVM7K0JBRUUscUJBQXFCLG1CQUVkLHVCQUF1QixDQUFDLE1BQU07eUhBSXhCLEtBQUs7c0JBQTNCLEtBQUs7dUJBQUMsY0FBYztnQkFFTyxLQUFLO3NCQUFoQyxLQUFLO3VCQUFDLG1CQUFtQjtnQkFFRCxRQUFRO3NCQUFoQyxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIFRlbXBsYXRlUmVmLCBFbGVtZW50UmVmLCBSZW5kZXJlcjIsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSW5wdXRCb29sZWFuIH0gZnJvbSAnLi4vdXRpbC9jb252ZXJ0JztcblxuQENvbXBvbmVudCh7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAYW5ndWxhci1lc2xpbnQvY29tcG9uZW50LXNlbGVjdG9yXG4gIHNlbGVjdG9yOiAnbGFiZWxbbmdsRm9ybUxhYmVsXScsXG4gIHRlbXBsYXRlVXJsOiAnLi9sYWJlbC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIE5nbEZvcm1MYWJlbCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQElucHV0KCduZ2xGb3JtTGFiZWwnKSBsYWJlbDogc3RyaW5nIHwgVGVtcGxhdGVSZWY8YW55PjtcblxuICBASW5wdXQoJ25nbEZvcm1MYWJlbENsYXNzJykga2xhc3MgPSAnc2xkcy1mb3JtLWVsZW1lbnRfX2xhYmVsJztcblxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgcmVxdWlyZWQ6IGJvb2xlYW47XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50UmVmLCBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCwgdGhpcy5rbGFzcyk7XG4gIH1cblxufVxuIiwiPGFiYnIgY2xhc3M9XCJzbGRzLXJlcXVpcmVkXCIgKm5nSWY9XCJyZXF1aXJlZFwiIHRpdGxlPVwiUmVxdWlyZWRcIj4qPC9hYmJyPjxzcGFuIFtuZ2xJbnRlcm5hbE91dGxldF09XCJsYWJlbFwiPjwvc3Bhbj5cbjxuZy1jb250ZW50PjwvbmctY29udGVudD4iXX0=
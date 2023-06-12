import { Component, Input, TemplateRef, ChangeDetectionStrategy } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class NglInternalOutlet {
    isTemplate() {
        return this.nglInternalOutlet instanceof TemplateRef;
    }
}
NglInternalOutlet.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglInternalOutlet, deps: [], target: i0.ɵɵFactoryTarget.Component });
NglInternalOutlet.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: NglInternalOutlet, selector: "[nglInternalOutlet]", inputs: { nglInternalOutlet: "nglInternalOutlet", nglInternalOutletContext: "nglInternalOutletContext" }, ngImport: i0, template: `
    <ng-template [ngIf]="isTemplate()" [ngIfElse]="str">
      <ng-template [ngTemplateOutlet]="nglInternalOutlet" [ngTemplateOutletContext]="nglInternalOutletContext"></ng-template>
    </ng-template>
    <ng-template #str>{{nglInternalOutlet}}</ng-template>`, isInline: true, dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglInternalOutlet, decorators: [{
            type: Component,
            args: [{
                    // eslint-disable-next-line @angular-eslint/component-selector
                    selector: '[nglInternalOutlet]',
                    template: `
    <ng-template [ngIf]="isTemplate()" [ngIfElse]="str">
      <ng-template [ngTemplateOutlet]="nglInternalOutlet" [ngTemplateOutletContext]="nglInternalOutletContext"></ng-template>
    </ng-template>
    <ng-template #str>{{nglInternalOutlet}}</ng-template>`,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                }]
        }], propDecorators: { nglInternalOutlet: [{
                type: Input
            }], nglInternalOutletContext: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3V0bGV0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctbGlnaHRuaW5nL3NyYy9saWIvdXRpbC9vdXRsZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sZUFBZSxDQUFDOzs7QUFZdkYsTUFBTSxPQUFPLGlCQUFpQjtJQUs1QixVQUFVO1FBQ1IsT0FBTyxJQUFJLENBQUMsaUJBQWlCLFlBQVksV0FBVyxDQUFDO0lBQ3ZELENBQUM7OzhHQVBVLGlCQUFpQjtrR0FBakIsaUJBQWlCLHFLQVBsQjs7OzswREFJOEM7MkZBRzdDLGlCQUFpQjtrQkFWN0IsU0FBUzttQkFBQztvQkFDVCw4REFBOEQ7b0JBQzlELFFBQVEsRUFBRSxxQkFBcUI7b0JBQy9CLFFBQVEsRUFBRTs7OzswREFJOEM7b0JBQ3hELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2lCQUNoRDs4QkFFVSxpQkFBaUI7c0JBQXpCLEtBQUs7Z0JBRUcsd0JBQXdCO3NCQUFoQyxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgVGVtcGxhdGVSZWYsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQGFuZ3VsYXItZXNsaW50L2NvbXBvbmVudC1zZWxlY3RvclxuICBzZWxlY3RvcjogJ1tuZ2xJbnRlcm5hbE91dGxldF0nLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuZy10ZW1wbGF0ZSBbbmdJZl09XCJpc1RlbXBsYXRlKClcIiBbbmdJZkVsc2VdPVwic3RyXCI+XG4gICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwibmdsSW50ZXJuYWxPdXRsZXRcIiBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwibmdsSW50ZXJuYWxPdXRsZXRDb250ZXh0XCI+PC9uZy10ZW1wbGF0ZT5cbiAgICA8L25nLXRlbXBsYXRlPlxuICAgIDxuZy10ZW1wbGF0ZSAjc3RyPnt7bmdsSW50ZXJuYWxPdXRsZXR9fTwvbmctdGVtcGxhdGU+YCxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIE5nbEludGVybmFsT3V0bGV0IHtcbiAgQElucHV0KCkgbmdsSW50ZXJuYWxPdXRsZXQ6IHN0cmluZyB8IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgQElucHV0KCkgbmdsSW50ZXJuYWxPdXRsZXRDb250ZXh0OiBhbnkgO1xuXG4gIGlzVGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmdsSW50ZXJuYWxPdXRsZXQgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZjtcbiAgfVxufVxuIl19
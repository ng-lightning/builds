import { Directive, Input } from '@angular/core';
import { uniqueId } from '../util/util';
import * as i0 from "@angular/core";
export class NglAccordionSection {
    constructor(templateRef) {
        this.templateRef = templateRef;
        /**
         * The unique name to use with the `activeName` of the accordion component.
         */
        this.name = uniqueId('accordion-section');
    }
}
NglAccordionSection.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglAccordionSection, deps: [{ token: i0.TemplateRef }], target: i0.ɵɵFactoryTarget.Directive });
NglAccordionSection.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.2.9", type: NglAccordionSection, selector: "[nglAccordionSection]", inputs: { label: "label", labelContext: "labelContext", name: "name" }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglAccordionSection, decorators: [{
            type: Directive,
            args: [{
                    selector: '[nglAccordionSection]',
                }]
        }], ctorParameters: function () { return [{ type: i0.TemplateRef }]; }, propDecorators: { label: [{
                type: Input
            }], labelContext: [{
                type: Input
            }], name: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3JkaW9uLXNlY3Rpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1saWdodG5pbmcvc3JjL2xpYi9hY2NvcmRpb24vYWNjb3JkaW9uLXNlY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBZSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGNBQWMsQ0FBQzs7QUFLeEMsTUFBTSxPQUFPLG1CQUFtQjtJQUM5QixZQUFtQixXQUE2QjtRQUE3QixnQkFBVyxHQUFYLFdBQVcsQ0FBa0I7UUFZaEQ7O1dBRUc7UUFDTSxTQUFJLEdBQUcsUUFBUSxDQUFDLG1CQUFtQixDQUFDLENBQUM7SUFmSyxDQUFDOztnSEFEekMsbUJBQW1CO29HQUFuQixtQkFBbUI7MkZBQW5CLG1CQUFtQjtrQkFIL0IsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsdUJBQXVCO2lCQUNsQztrR0FPVSxLQUFLO3NCQUFiLEtBQUs7Z0JBS0csWUFBWTtzQkFBcEIsS0FBSztnQkFLRyxJQUFJO3NCQUFaLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIFRlbXBsYXRlUmVmLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgdW5pcXVlSWQgfSBmcm9tICcuLi91dGlsL3V0aWwnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbmdsQWNjb3JkaW9uU2VjdGlvbl0nLFxufSlcbmV4cG9ydCBjbGFzcyBOZ2xBY2NvcmRpb25TZWN0aW9uIHtcbiAgY29uc3RydWN0b3IocHVibGljIHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxhbnk+KSB7fVxuXG4gIC8qKlxuICAgKiBEaXNwbGF5ZWQgYXMgdGhlIHRpdGxlIG9mIHRoZSBzZWN0aW9uLlxuICAgKi9cbiAgQElucHV0KCkgbGFiZWw6IHN0cmluZyB8IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgLyoqXG4gICAqIENvbnRleHQgZGF0YSBhdmFpbGFibGUgYXMgbG9jYWwgdmFyaWFibGUgaW4gYGxhYmVsYCwgaWYgVGVtcGxhdGVSZWYuXG4gICAqL1xuICBASW5wdXQoKSBsYWJlbENvbnRleHQ6IGFueTtcblxuICAvKipcbiAgICogVGhlIHVuaXF1ZSBuYW1lIHRvIHVzZSB3aXRoIHRoZSBgYWN0aXZlTmFtZWAgb2YgdGhlIGFjY29yZGlvbiBjb21wb25lbnQuXG4gICAqL1xuICBASW5wdXQoKSBuYW1lID0gdW5pcXVlSWQoJ2FjY29yZGlvbi1zZWN0aW9uJyk7XG5cbn1cbiJdfQ==
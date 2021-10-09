import { Directive, TemplateRef, Input } from '@angular/core';
import { uniqueId } from '../util/util';
export class NglAccordionSection {
    constructor(templateRef) {
        this.templateRef = templateRef;
        /**
         * The unique name to use with the `activeName` of the accordion component.
         */
        this.name = uniqueId('accordion-section');
    }
}
NglAccordionSection.decorators = [
    { type: Directive, args: [{
                selector: '[nglAccordionSection]',
            },] }
];
NglAccordionSection.ctorParameters = () => [
    { type: TemplateRef }
];
NglAccordionSection.propDecorators = {
    label: [{ type: Input }],
    labelContext: [{ type: Input }],
    name: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3JkaW9uLXNlY3Rpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1saWdodG5pbmcvc3JjL2xpYi9hY2NvcmRpb24vYWNjb3JkaW9uLXNlY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFLeEMsTUFBTSxPQUFPLG1CQUFtQjtJQUM5QixZQUFtQixXQUE2QjtRQUE3QixnQkFBVyxHQUFYLFdBQVcsQ0FBa0I7UUFZaEQ7O1dBRUc7UUFDTSxTQUFJLEdBQUcsUUFBUSxDQUFDLG1CQUFtQixDQUFDLENBQUM7SUFmSyxDQUFDOzs7WUFKckQsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSx1QkFBdUI7YUFDbEM7OztZQUxtQixXQUFXOzs7b0JBWTVCLEtBQUs7MkJBS0wsS0FBSzttQkFLTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBUZW1wbGF0ZVJlZiwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHVuaXF1ZUlkIH0gZnJvbSAnLi4vdXRpbC91dGlsJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW25nbEFjY29yZGlvblNlY3Rpb25dJyxcbn0pXG5leHBvcnQgY2xhc3MgTmdsQWNjb3JkaW9uU2VjdGlvbiB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55Pikge31cblxuICAvKipcbiAgICogRGlzcGxheWVkIGFzIHRoZSB0aXRsZSBvZiB0aGUgc2VjdGlvbi5cbiAgICovXG4gIEBJbnB1dCgpIGxhYmVsOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIC8qKlxuICAgKiBDb250ZXh0IGRhdGEgYXZhaWxhYmxlIGFzIGxvY2FsIHZhcmlhYmxlIGluIGBsYWJlbGAsIGlmIFRlbXBsYXRlUmVmLlxuICAgKi9cbiAgQElucHV0KCkgbGFiZWxDb250ZXh0OiBhbnk7XG5cbiAgLyoqXG4gICAqIFRoZSB1bmlxdWUgbmFtZSB0byB1c2Ugd2l0aCB0aGUgYGFjdGl2ZU5hbWVgIG9mIHRoZSBhY2NvcmRpb24gY29tcG9uZW50LlxuICAgKi9cbiAgQElucHV0KCkgbmFtZSA9IHVuaXF1ZUlkKCdhY2NvcmRpb24tc2VjdGlvbicpO1xuXG59XG4iXX0=
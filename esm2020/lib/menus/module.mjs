import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NglDropdownTrigger } from './dropdown-trigger';
import { NglDropdown } from './dropdown';
import { NglDropdownItem } from './dropdown-item';
import * as i0 from "@angular/core";
const NGL_DROPDOWN_DIRECTIVES = [
    NglDropdown,
    NglDropdownTrigger,
    NglDropdownItem,
];
export class NglMenusModule {
}
NglMenusModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglMenusModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
NglMenusModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.9", ngImport: i0, type: NglMenusModule, declarations: [NglDropdown,
        NglDropdownTrigger,
        NglDropdownItem], imports: [CommonModule], exports: [NglDropdown,
        NglDropdownTrigger,
        NglDropdownItem] });
NglMenusModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglMenusModule, imports: [CommonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglMenusModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [NGL_DROPDOWN_DIRECTIVES],
                    exports: [NGL_DROPDOWN_DIRECTIVES],
                    imports: [CommonModule],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctbGlnaHRuaW5nL3NyYy9saWIvbWVudXMvbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFDekMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGlCQUFpQixDQUFDOztBQUVsRCxNQUFNLHVCQUF1QixHQUFHO0lBQzlCLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsZUFBZTtDQUNoQixDQUFDO0FBUUYsTUFBTSxPQUFPLGNBQWM7OzJHQUFkLGNBQWM7NEdBQWQsY0FBYyxpQkFYekIsV0FBVztRQUNYLGtCQUFrQjtRQUNsQixlQUFlLGFBT0wsWUFBWSxhQVR0QixXQUFXO1FBQ1gsa0JBQWtCO1FBQ2xCLGVBQWU7NEdBU0osY0FBYyxZQUZmLFlBQVk7MkZBRVgsY0FBYztrQkFMMUIsUUFBUTttQkFBQztvQkFDUixZQUFZLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQztvQkFDdkMsT0FBTyxFQUFFLENBQUMsdUJBQXVCLENBQUM7b0JBQ2xDLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQztpQkFDeEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgTmdsRHJvcGRvd25UcmlnZ2VyIH0gZnJvbSAnLi9kcm9wZG93bi10cmlnZ2VyJztcbmltcG9ydCB7IE5nbERyb3Bkb3duIH0gZnJvbSAnLi9kcm9wZG93bic7XG5pbXBvcnQgeyBOZ2xEcm9wZG93bkl0ZW0gfSBmcm9tICcuL2Ryb3Bkb3duLWl0ZW0nO1xuXG5jb25zdCBOR0xfRFJPUERPV05fRElSRUNUSVZFUyA9IFtcbiAgTmdsRHJvcGRvd24sXG4gIE5nbERyb3Bkb3duVHJpZ2dlcixcbiAgTmdsRHJvcGRvd25JdGVtLFxuXTtcblxuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtOR0xfRFJPUERPV05fRElSRUNUSVZFU10sXG4gIGV4cG9ydHM6IFtOR0xfRFJPUERPV05fRElSRUNUSVZFU10sXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxufSlcbmV4cG9ydCBjbGFzcyBOZ2xNZW51c01vZHVsZSB7fVxuIl19
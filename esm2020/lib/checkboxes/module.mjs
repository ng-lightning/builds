import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NglInternalOutletModule } from '../util/outlet.module';
import { NglCheckboxButton } from './button/checkbox-button';
import { NglCheckbox } from './checkbox/checkbox';
import { NglCheckboxToggle } from './toggle/checkbox-toggle';
import { NglCheckboxInput } from './input/input';
import { NglCheckboxGroup } from './group/checkbox-group';
import { NglCheckboxOption } from './group/checkbox-option';
import * as i0 from "@angular/core";
const DIRECTIVES = [
    NglCheckboxButton,
    NglCheckbox,
    NglCheckboxToggle,
    NglCheckboxInput,
    NglCheckboxGroup,
    NglCheckboxOption,
];
export class NglCheckboxesModule {
}
NglCheckboxesModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglCheckboxesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
NglCheckboxesModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.9", ngImport: i0, type: NglCheckboxesModule, declarations: [NglCheckboxButton,
        NglCheckbox,
        NglCheckboxToggle,
        NglCheckboxInput,
        NglCheckboxGroup,
        NglCheckboxOption], imports: [CommonModule, NglInternalOutletModule], exports: [NglCheckboxButton,
        NglCheckbox,
        NglCheckboxToggle,
        NglCheckboxInput,
        NglCheckboxGroup,
        NglCheckboxOption] });
NglCheckboxesModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglCheckboxesModule, imports: [CommonModule, NglInternalOutletModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglCheckboxesModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: DIRECTIVES,
                    exports: DIRECTIVES,
                    imports: [CommonModule, NglInternalOutletModule],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctbGlnaHRuaW5nL3NyYy9saWIvY2hlY2tib3hlcy9tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFaEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDN0QsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzdELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVqRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUMxRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7QUFFNUQsTUFBTSxVQUFVLEdBQUc7SUFDakIsaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixpQkFBaUI7Q0FDbEIsQ0FBQztBQU9GLE1BQU0sT0FBTyxtQkFBbUI7O2dIQUFuQixtQkFBbUI7aUhBQW5CLG1CQUFtQixpQkFiOUIsaUJBQWlCO1FBQ2pCLFdBQVc7UUFDWCxpQkFBaUI7UUFDakIsZ0JBQWdCO1FBQ2hCLGdCQUFnQjtRQUNoQixpQkFBaUIsYUFNUCxZQUFZLEVBQUUsdUJBQXVCLGFBWC9DLGlCQUFpQjtRQUNqQixXQUFXO1FBQ1gsaUJBQWlCO1FBQ2pCLGdCQUFnQjtRQUNoQixnQkFBZ0I7UUFDaEIsaUJBQWlCO2lIQVFOLG1CQUFtQixZQUZwQixZQUFZLEVBQUUsdUJBQXVCOzJGQUVwQyxtQkFBbUI7a0JBTC9CLFFBQVE7bUJBQUM7b0JBQ1IsWUFBWSxFQUFFLFVBQVU7b0JBQ3hCLE9BQU8sRUFBRSxVQUFVO29CQUNuQixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsdUJBQXVCLENBQUM7aUJBQ2pEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ2xJbnRlcm5hbE91dGxldE1vZHVsZSB9IGZyb20gJy4uL3V0aWwvb3V0bGV0Lm1vZHVsZSc7XG5cbmltcG9ydCB7IE5nbENoZWNrYm94QnV0dG9uIH0gZnJvbSAnLi9idXR0b24vY2hlY2tib3gtYnV0dG9uJztcbmltcG9ydCB7IE5nbENoZWNrYm94IH0gZnJvbSAnLi9jaGVja2JveC9jaGVja2JveCc7XG5pbXBvcnQgeyBOZ2xDaGVja2JveFRvZ2dsZSB9IGZyb20gJy4vdG9nZ2xlL2NoZWNrYm94LXRvZ2dsZSc7XG5pbXBvcnQgeyBOZ2xDaGVja2JveElucHV0IH0gZnJvbSAnLi9pbnB1dC9pbnB1dCc7XG5cbmltcG9ydCB7IE5nbENoZWNrYm94R3JvdXAgfSBmcm9tICcuL2dyb3VwL2NoZWNrYm94LWdyb3VwJztcbmltcG9ydCB7IE5nbENoZWNrYm94T3B0aW9uIH0gZnJvbSAnLi9ncm91cC9jaGVja2JveC1vcHRpb24nO1xuXG5jb25zdCBESVJFQ1RJVkVTID0gW1xuICBOZ2xDaGVja2JveEJ1dHRvbixcbiAgTmdsQ2hlY2tib3gsXG4gIE5nbENoZWNrYm94VG9nZ2xlLFxuICBOZ2xDaGVja2JveElucHV0LFxuICBOZ2xDaGVja2JveEdyb3VwLFxuICBOZ2xDaGVja2JveE9wdGlvbixcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogRElSRUNUSVZFUyxcbiAgZXhwb3J0czogRElSRUNUSVZFUyxcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgTmdsSW50ZXJuYWxPdXRsZXRNb2R1bGVdLFxufSlcbmV4cG9ydCBjbGFzcyBOZ2xDaGVja2JveGVzTW9kdWxlIHt9XG4iXX0=
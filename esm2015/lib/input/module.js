import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NglFormsModule } from '../forms/module';
import { NglInternalOutletModule } from '../util/outlet.module';
import { NglInput } from './input/input';
import { NglInputElement } from './element/element';
const DIRECTIVES = [
    NglInput,
    NglInputElement,
];
export class NglInputModule {
}
NglInputModule.decorators = [
    { type: NgModule, args: [{
                declarations: DIRECTIVES,
                exports: DIRECTIVES,
                imports: [CommonModule, NglFormsModule, NglInternalOutletModule],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctbGlnaHRuaW5nL3NyYy9saWIvaW5wdXQvbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUVoRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUVwRCxNQUFNLFVBQVUsR0FBRztJQUNqQixRQUFRO0lBQ1IsZUFBZTtDQUNoQixDQUFDO0FBT0YsTUFBTSxPQUFPLGNBQWM7OztZQUwxQixRQUFRLFNBQUM7Z0JBQ1IsWUFBWSxFQUFFLFVBQVU7Z0JBQ3hCLE9BQU8sRUFBRSxVQUFVO2dCQUNuQixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsY0FBYyxFQUFFLHVCQUF1QixDQUFDO2FBQ2pFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ2xGb3Jtc01vZHVsZSB9IGZyb20gJy4uL2Zvcm1zL21vZHVsZSc7XG5pbXBvcnQgeyBOZ2xJbnRlcm5hbE91dGxldE1vZHVsZSB9IGZyb20gJy4uL3V0aWwvb3V0bGV0Lm1vZHVsZSc7XG5cbmltcG9ydCB7IE5nbElucHV0IH0gZnJvbSAnLi9pbnB1dC9pbnB1dCc7XG5pbXBvcnQgeyBOZ2xJbnB1dEVsZW1lbnQgfSBmcm9tICcuL2VsZW1lbnQvZWxlbWVudCc7XG5cbmNvbnN0IERJUkVDVElWRVMgPSBbXG4gIE5nbElucHV0LFxuICBOZ2xJbnB1dEVsZW1lbnQsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IERJUkVDVElWRVMsXG4gIGV4cG9ydHM6IERJUkVDVElWRVMsXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIE5nbEZvcm1zTW9kdWxlLCBOZ2xJbnRlcm5hbE91dGxldE1vZHVsZV0sXG59KVxuZXhwb3J0IGNsYXNzIE5nbElucHV0TW9kdWxlIHt9XG4iXX0=
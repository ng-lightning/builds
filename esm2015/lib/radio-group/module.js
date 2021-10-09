import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NglInternalOutletModule } from '../util/outlet.module';
import { NglRadioGroup } from './radio-group';
import { NglRadioOption } from './radio-option';
import { NglRadioInput } from './input/input';
const DIRECTIVES = [
    NglRadioGroup,
    NglRadioOption,
    NglRadioInput,
];
export class NglRadiosModule {
}
NglRadiosModule.decorators = [
    { type: NgModule, args: [{
                declarations: DIRECTIVES,
                exports: DIRECTIVES,
                imports: [CommonModule, NglInternalOutletModule],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctbGlnaHRuaW5nL3NyYy9saWIvcmFkaW8tZ3JvdXAvbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRWhFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFOUMsTUFBTSxVQUFVLEdBQUc7SUFDakIsYUFBYTtJQUNiLGNBQWM7SUFDZCxhQUFhO0NBQ2QsQ0FBQztBQU9GLE1BQU0sT0FBTyxlQUFlOzs7WUFMM0IsUUFBUSxTQUFDO2dCQUNSLFlBQVksRUFBRSxVQUFVO2dCQUN4QixPQUFPLEVBQUUsVUFBVTtnQkFDbkIsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLHVCQUF1QixDQUFDO2FBQ2pEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ2xJbnRlcm5hbE91dGxldE1vZHVsZSB9IGZyb20gJy4uL3V0aWwvb3V0bGV0Lm1vZHVsZSc7XG5cbmltcG9ydCB7IE5nbFJhZGlvR3JvdXAgfSBmcm9tICcuL3JhZGlvLWdyb3VwJztcbmltcG9ydCB7IE5nbFJhZGlvT3B0aW9uIH0gZnJvbSAnLi9yYWRpby1vcHRpb24nO1xuaW1wb3J0IHsgTmdsUmFkaW9JbnB1dCB9IGZyb20gJy4vaW5wdXQvaW5wdXQnO1xuXG5jb25zdCBESVJFQ1RJVkVTID0gW1xuICBOZ2xSYWRpb0dyb3VwLFxuICBOZ2xSYWRpb09wdGlvbixcbiAgTmdsUmFkaW9JbnB1dCxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogRElSRUNUSVZFUyxcbiAgZXhwb3J0czogRElSRUNUSVZFUyxcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgTmdsSW50ZXJuYWxPdXRsZXRNb2R1bGVdLFxufSlcbmV4cG9ydCBjbGFzcyBOZ2xSYWRpb3NNb2R1bGUge31cbiJdfQ==
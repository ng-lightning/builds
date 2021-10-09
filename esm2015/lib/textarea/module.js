import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NglFormsModule } from '../forms/module';
import { NglTextarea } from './textarea/textarea';
import { NglTextareaInput } from './input/input';
const DIRECTIVES = [
    NglTextarea,
    NglTextareaInput,
];
export class NglTextareaModule {
}
NglTextareaModule.decorators = [
    { type: NgModule, args: [{
                declarations: DIRECTIVES,
                exports: DIRECTIVES,
                imports: [CommonModule, NglFormsModule],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctbGlnaHRuaW5nL3NyYy9saWIvdGV4dGFyZWEvbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUVqRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDbEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWpELE1BQU0sVUFBVSxHQUFHO0lBQ2pCLFdBQVc7SUFDWCxnQkFBZ0I7Q0FDakIsQ0FBQztBQU9GLE1BQU0sT0FBTyxpQkFBaUI7OztZQUw3QixRQUFRLFNBQUM7Z0JBQ1IsWUFBWSxFQUFFLFVBQVU7Z0JBQ3hCLE9BQU8sRUFBRSxVQUFVO2dCQUNuQixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsY0FBYyxDQUFDO2FBQ3hDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ2xGb3Jtc01vZHVsZSB9IGZyb20gJy4uL2Zvcm1zL21vZHVsZSc7XG5cbmltcG9ydCB7IE5nbFRleHRhcmVhIH0gZnJvbSAnLi90ZXh0YXJlYS90ZXh0YXJlYSc7XG5pbXBvcnQgeyBOZ2xUZXh0YXJlYUlucHV0IH0gZnJvbSAnLi9pbnB1dC9pbnB1dCc7XG5cbmNvbnN0IERJUkVDVElWRVMgPSBbXG4gIE5nbFRleHRhcmVhLFxuICBOZ2xUZXh0YXJlYUlucHV0LFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBESVJFQ1RJVkVTLFxuICBleHBvcnRzOiBESVJFQ1RJVkVTLFxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBOZ2xGb3Jtc01vZHVsZV0sXG59KVxuZXhwb3J0IGNsYXNzIE5nbFRleHRhcmVhTW9kdWxlIHt9XG4iXX0=
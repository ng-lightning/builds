import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NglClickOutsideDirective } from './clickoutside';
const DIRECTIVES = [NglClickOutsideDirective];
export class NglClickOutsideModule {
}
NglClickOutsideModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: DIRECTIVES,
                exports: DIRECTIVES,
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpY2tvdXRzaWRlLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nLWxpZ2h0bmluZy9zcmMvbGliL2NvbW1vbi9jbGlja291dHNpZGUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTFELE1BQU0sVUFBVSxHQUFHLENBQUMsd0JBQXdCLENBQUMsQ0FBQztBQU85QyxNQUFNLE9BQU8scUJBQXFCOzs7WUFMakMsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQztnQkFDdkIsWUFBWSxFQUFFLFVBQVU7Z0JBQ3hCLE9BQU8sRUFBRSxVQUFVO2FBQ3BCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IE5nbENsaWNrT3V0c2lkZURpcmVjdGl2ZSB9IGZyb20gJy4vY2xpY2tvdXRzaWRlJztcblxuY29uc3QgRElSRUNUSVZFUyA9IFtOZ2xDbGlja091dHNpZGVEaXJlY3RpdmVdO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBESVJFQ1RJVkVTLFxuICBleHBvcnRzOiBESVJFQ1RJVkVTLFxufSlcbmV4cG9ydCBjbGFzcyBOZ2xDbGlja091dHNpZGVNb2R1bGUge31cbiJdfQ==
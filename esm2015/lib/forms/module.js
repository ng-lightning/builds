import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NglInternalOutletModule } from '../util/outlet.module';
import { NglIconsModule } from '../icons/module';
import { NglTooltipsModule } from '../tooltips/module';
import { NglFormLabel } from './label';
import { NglFormHelp } from './help';
const DIRECTIVES = [
    NglFormLabel,
    NglFormHelp,
];
export class NglFormsModule {
}
NglFormsModule.decorators = [
    { type: NgModule, args: [{
                declarations: DIRECTIVES,
                exports: DIRECTIVES,
                imports: [CommonModule, NglInternalOutletModule, NglIconsModule, NglTooltipsModule],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctbGlnaHRuaW5nL3NyYy9saWIvZm9ybXMvbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUV2RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sU0FBUyxDQUFDO0FBQ3ZDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFFckMsTUFBTSxVQUFVLEdBQUc7SUFDakIsWUFBWTtJQUNaLFdBQVc7Q0FDWixDQUFDO0FBT0YsTUFBTSxPQUFPLGNBQWM7OztZQUwxQixRQUFRLFNBQUM7Z0JBQ1IsWUFBWSxFQUFFLFVBQVU7Z0JBQ3hCLE9BQU8sRUFBRSxVQUFVO2dCQUNuQixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsdUJBQXVCLEVBQUUsY0FBYyxFQUFFLGlCQUFpQixDQUFDO2FBQ3BGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ2xJbnRlcm5hbE91dGxldE1vZHVsZSB9IGZyb20gJy4uL3V0aWwvb3V0bGV0Lm1vZHVsZSc7XG5pbXBvcnQgeyBOZ2xJY29uc01vZHVsZSB9IGZyb20gJy4uL2ljb25zL21vZHVsZSc7XG5pbXBvcnQgeyBOZ2xUb29sdGlwc01vZHVsZSB9IGZyb20gJy4uL3Rvb2x0aXBzL21vZHVsZSc7XG5cbmltcG9ydCB7IE5nbEZvcm1MYWJlbCB9IGZyb20gJy4vbGFiZWwnO1xuaW1wb3J0IHsgTmdsRm9ybUhlbHAgfSBmcm9tICcuL2hlbHAnO1xuXG5jb25zdCBESVJFQ1RJVkVTID0gW1xuICBOZ2xGb3JtTGFiZWwsXG4gIE5nbEZvcm1IZWxwLFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBESVJFQ1RJVkVTLFxuICBleHBvcnRzOiBESVJFQ1RJVkVTLFxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBOZ2xJbnRlcm5hbE91dGxldE1vZHVsZSwgTmdsSWNvbnNNb2R1bGUsIE5nbFRvb2x0aXBzTW9kdWxlXSxcbn0pXG5leHBvcnQgY2xhc3MgTmdsRm9ybXNNb2R1bGUge31cbiJdfQ==
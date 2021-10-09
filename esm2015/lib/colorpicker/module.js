import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NglIconsModule } from '../icons/module';
import { NglTabsModule } from '../tabs/module';
import { NglPopoversModule } from '../popovers/module';
import { NglFormsModule } from '../forms/module';
import { NglInternalOutletModule } from '../util/outlet.module';
import { NglColorpicker } from './colorpicker';
import { NglColorpickerSwatch } from './swatch/colorpicker-swatch';
import { NglColorpickerCustom } from './custom/colorpicker-custom';
import { NglColorpickerRange } from './custom/range/colorpicker-range';
import { NglColorpickerInputs } from './custom/inputs/colorpicker-inputs';
import { NglColorpickerSwatches } from './swatches/colorpicker-swatches';
import { NglColorpickerSwatchTrigger } from './swatches/trigger';
const DIRECTIVES = [
    NglColorpicker,
];
export class NglColorpickerModule {
}
NglColorpickerModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    ...DIRECTIVES,
                    NglColorpickerSwatch,
                    NglColorpickerCustom,
                    NglColorpickerRange,
                    NglColorpickerInputs,
                    NglColorpickerSwatches,
                    NglColorpickerSwatchTrigger,
                ],
                exports: DIRECTIVES,
                imports: [
                    CommonModule,
                    NglIconsModule,
                    NglTabsModule,
                    NglPopoversModule,
                    NglFormsModule,
                    NglInternalOutletModule,
                ],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctbGlnaHRuaW5nL3NyYy9saWIvY29sb3JwaWNrZXIvbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDdkQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2pELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRWhFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0MsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDbkUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDbkUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDdkUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDMUUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDekUsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFakUsTUFBTSxVQUFVLEdBQUc7SUFDakIsY0FBYztDQUNmLENBQUM7QUFzQkYsTUFBTSxPQUFPLG9CQUFvQjs7O1lBcEJoQyxRQUFRLFNBQUM7Z0JBQ1IsWUFBWSxFQUFFO29CQUNaLEdBQUcsVUFBVTtvQkFDYixvQkFBb0I7b0JBQ3BCLG9CQUFvQjtvQkFDcEIsbUJBQW1CO29CQUNuQixvQkFBb0I7b0JBQ3BCLHNCQUFzQjtvQkFDdEIsMkJBQTJCO2lCQUM1QjtnQkFDRCxPQUFPLEVBQUUsVUFBVTtnQkFDbkIsT0FBTyxFQUFFO29CQUNQLFlBQVk7b0JBQ1osY0FBYztvQkFDZCxhQUFhO29CQUNiLGlCQUFpQjtvQkFDakIsY0FBYztvQkFDZCx1QkFBdUI7aUJBQ3hCO2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nbEljb25zTW9kdWxlIH0gZnJvbSAnLi4vaWNvbnMvbW9kdWxlJztcbmltcG9ydCB7IE5nbFRhYnNNb2R1bGUgfSBmcm9tICcuLi90YWJzL21vZHVsZSc7XG5pbXBvcnQgeyBOZ2xQb3BvdmVyc01vZHVsZSB9IGZyb20gJy4uL3BvcG92ZXJzL21vZHVsZSc7XG5pbXBvcnQgeyBOZ2xGb3Jtc01vZHVsZSB9IGZyb20gJy4uL2Zvcm1zL21vZHVsZSc7XG5pbXBvcnQgeyBOZ2xJbnRlcm5hbE91dGxldE1vZHVsZSB9IGZyb20gJy4uL3V0aWwvb3V0bGV0Lm1vZHVsZSc7XG5cbmltcG9ydCB7IE5nbENvbG9ycGlja2VyIH0gZnJvbSAnLi9jb2xvcnBpY2tlcic7XG5pbXBvcnQgeyBOZ2xDb2xvcnBpY2tlclN3YXRjaCB9IGZyb20gJy4vc3dhdGNoL2NvbG9ycGlja2VyLXN3YXRjaCc7XG5pbXBvcnQgeyBOZ2xDb2xvcnBpY2tlckN1c3RvbSB9IGZyb20gJy4vY3VzdG9tL2NvbG9ycGlja2VyLWN1c3RvbSc7XG5pbXBvcnQgeyBOZ2xDb2xvcnBpY2tlclJhbmdlIH0gZnJvbSAnLi9jdXN0b20vcmFuZ2UvY29sb3JwaWNrZXItcmFuZ2UnO1xuaW1wb3J0IHsgTmdsQ29sb3JwaWNrZXJJbnB1dHMgfSBmcm9tICcuL2N1c3RvbS9pbnB1dHMvY29sb3JwaWNrZXItaW5wdXRzJztcbmltcG9ydCB7IE5nbENvbG9ycGlja2VyU3dhdGNoZXMgfSBmcm9tICcuL3N3YXRjaGVzL2NvbG9ycGlja2VyLXN3YXRjaGVzJztcbmltcG9ydCB7IE5nbENvbG9ycGlja2VyU3dhdGNoVHJpZ2dlciB9IGZyb20gJy4vc3dhdGNoZXMvdHJpZ2dlcic7XG5cbmNvbnN0IERJUkVDVElWRVMgPSBbXG4gIE5nbENvbG9ycGlja2VyLFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgLi4uRElSRUNUSVZFUyxcbiAgICBOZ2xDb2xvcnBpY2tlclN3YXRjaCxcbiAgICBOZ2xDb2xvcnBpY2tlckN1c3RvbSxcbiAgICBOZ2xDb2xvcnBpY2tlclJhbmdlLFxuICAgIE5nbENvbG9ycGlja2VySW5wdXRzLFxuICAgIE5nbENvbG9ycGlja2VyU3dhdGNoZXMsXG4gICAgTmdsQ29sb3JwaWNrZXJTd2F0Y2hUcmlnZ2VyLFxuICBdLFxuICBleHBvcnRzOiBESVJFQ1RJVkVTLFxuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIE5nbEljb25zTW9kdWxlLFxuICAgIE5nbFRhYnNNb2R1bGUsXG4gICAgTmdsUG9wb3ZlcnNNb2R1bGUsXG4gICAgTmdsRm9ybXNNb2R1bGUsXG4gICAgTmdsSW50ZXJuYWxPdXRsZXRNb2R1bGUsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIE5nbENvbG9ycGlja2VyTW9kdWxlIHt9XG4iXX0=
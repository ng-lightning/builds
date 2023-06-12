import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OverlayModule } from '@angular/cdk/overlay';
import { NglIconsModule } from '../icons/module';
import { NglInternalOutletModule } from '../util/outlet.module';
import { NglClickOutsideModule } from '../common/clickoutside.module';
import { NglDatepicker } from './datepicker';
import { NglDatepickerInput } from './input/datepicker-input';
import { NglDatepickerInputDirective } from './input/datepicker-input.directive';
import { NglDatepickerWeekdays } from './weekdays';
import { NglDay } from './day';
import { NglDatepickerYear } from './year';
import { NglDatepickerMonth } from './month';
import { NglDateAdapter } from './adapters/date-fns-adapter';
import { NglOverlayModule } from '../common/overlay/overlay.module';
import { NglFormsModule } from '../forms/module';
import * as i0 from "@angular/core";
const EXPORTS = [
    NglDatepicker, NglDatepickerInput, NglDatepickerInputDirective,
];
export class NglDatepickersModule {
}
NglDatepickersModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglDatepickersModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
NglDatepickersModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.9", ngImport: i0, type: NglDatepickersModule, declarations: [NglDatepicker, NglDatepickerInput, NglDatepickerInputDirective, NglDay, NglDatepickerWeekdays, NglDatepickerYear, NglDatepickerMonth], imports: [CommonModule,
        FormsModule,
        NglIconsModule,
        NglInternalOutletModule,
        OverlayModule,
        NglClickOutsideModule,
        NglOverlayModule,
        NglFormsModule], exports: [NglDatepicker, NglDatepickerInput, NglDatepickerInputDirective] });
NglDatepickersModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglDatepickersModule, providers: [NglDateAdapter], imports: [CommonModule,
        FormsModule,
        NglIconsModule,
        NglInternalOutletModule,
        OverlayModule,
        NglClickOutsideModule,
        NglOverlayModule,
        NglFormsModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglDatepickersModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [...EXPORTS, NglDay, NglDatepickerWeekdays, NglDatepickerYear, NglDatepickerMonth],
                    exports: EXPORTS,
                    imports: [
                        CommonModule,
                        FormsModule,
                        NglIconsModule,
                        NglInternalOutletModule,
                        OverlayModule,
                        NglClickOutsideModule,
                        NglOverlayModule,
                        NglFormsModule
                    ],
                    providers: [NglDateAdapter],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctbGlnaHRuaW5nL3NyYy9saWIvZGF0ZXBpY2tlcnMvbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDckQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2pELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBRXRFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDN0MsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDOUQsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFFakYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxPQUFPLENBQUM7QUFDL0IsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sUUFBUSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLFNBQVMsQ0FBQztBQUU3QyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDN0QsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDcEUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGlCQUFpQixDQUFDOztBQUVqRCxNQUFNLE9BQU8sR0FBRztJQUNkLGFBQWEsRUFBRSxrQkFBa0IsRUFBRSwyQkFBMkI7Q0FDL0QsQ0FBQztBQWlCRixNQUFNLE9BQU8sb0JBQW9COztpSEFBcEIsb0JBQW9CO2tIQUFwQixvQkFBb0IsaUJBbEIvQixhQUFhLEVBQUUsa0JBQWtCLEVBQUUsMkJBQTJCLEVBSW5DLE1BQU0sRUFBRSxxQkFBcUIsRUFBRSxpQkFBaUIsRUFBRSxrQkFBa0IsYUFHN0YsWUFBWTtRQUNaLFdBQVc7UUFDWCxjQUFjO1FBQ2QsdUJBQXVCO1FBQ3ZCLGFBQWE7UUFDYixxQkFBcUI7UUFDckIsZ0JBQWdCO1FBQ2hCLGNBQWMsYUFkaEIsYUFBYSxFQUFFLGtCQUFrQixFQUFFLDJCQUEyQjtrSEFrQm5ELG9CQUFvQixhQUZwQixDQUFDLGNBQWMsQ0FBQyxZQVR6QixZQUFZO1FBQ1osV0FBVztRQUNYLGNBQWM7UUFDZCx1QkFBdUI7UUFDdkIsYUFBYTtRQUNiLHFCQUFxQjtRQUNyQixnQkFBZ0I7UUFDaEIsY0FBYzsyRkFJTCxvQkFBb0I7a0JBZmhDLFFBQVE7bUJBQUM7b0JBQ1IsWUFBWSxFQUFFLENBQUMsR0FBRyxPQUFPLEVBQUUsTUFBTSxFQUFFLHFCQUFxQixFQUFFLGlCQUFpQixFQUFFLGtCQUFrQixDQUFDO29CQUNoRyxPQUFPLEVBQUUsT0FBTztvQkFDaEIsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osV0FBVzt3QkFDWCxjQUFjO3dCQUNkLHVCQUF1Qjt3QkFDdkIsYUFBYTt3QkFDYixxQkFBcUI7d0JBQ3JCLGdCQUFnQjt3QkFDaEIsY0FBYztxQkFDZjtvQkFDRCxTQUFTLEVBQUUsQ0FBQyxjQUFjLENBQUM7aUJBQzVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE92ZXJsYXlNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XG5pbXBvcnQgeyBOZ2xJY29uc01vZHVsZSB9IGZyb20gJy4uL2ljb25zL21vZHVsZSc7XG5pbXBvcnQgeyBOZ2xJbnRlcm5hbE91dGxldE1vZHVsZSB9IGZyb20gJy4uL3V0aWwvb3V0bGV0Lm1vZHVsZSc7XG5pbXBvcnQgeyBOZ2xDbGlja091dHNpZGVNb2R1bGUgfSBmcm9tICcuLi9jb21tb24vY2xpY2tvdXRzaWRlLm1vZHVsZSc7XG5cbmltcG9ydCB7IE5nbERhdGVwaWNrZXIgfSBmcm9tICcuL2RhdGVwaWNrZXInO1xuaW1wb3J0IHsgTmdsRGF0ZXBpY2tlcklucHV0IH0gZnJvbSAnLi9pbnB1dC9kYXRlcGlja2VyLWlucHV0JztcbmltcG9ydCB7IE5nbERhdGVwaWNrZXJJbnB1dERpcmVjdGl2ZSB9IGZyb20gJy4vaW5wdXQvZGF0ZXBpY2tlci1pbnB1dC5kaXJlY3RpdmUnO1xuXG5pbXBvcnQgeyBOZ2xEYXRlcGlja2VyV2Vla2RheXMgfSBmcm9tICcuL3dlZWtkYXlzJztcbmltcG9ydCB7IE5nbERheSB9IGZyb20gJy4vZGF5JztcbmltcG9ydCB7IE5nbERhdGVwaWNrZXJZZWFyIH0gZnJvbSAnLi95ZWFyJztcbmltcG9ydCB7IE5nbERhdGVwaWNrZXJNb250aCB9IGZyb20gJy4vbW9udGgnO1xuXG5pbXBvcnQgeyBOZ2xEYXRlQWRhcHRlciB9IGZyb20gJy4vYWRhcHRlcnMvZGF0ZS1mbnMtYWRhcHRlcic7XG5pbXBvcnQgeyBOZ2xPdmVybGF5TW9kdWxlIH0gZnJvbSAnLi4vY29tbW9uL292ZXJsYXkvb3ZlcmxheS5tb2R1bGUnO1xuaW1wb3J0IHsgTmdsRm9ybXNNb2R1bGUgfSBmcm9tICcuLi9mb3Jtcy9tb2R1bGUnO1xuXG5jb25zdCBFWFBPUlRTID0gW1xuICBOZ2xEYXRlcGlja2VyLCBOZ2xEYXRlcGlja2VySW5wdXQsIE5nbERhdGVwaWNrZXJJbnB1dERpcmVjdGl2ZSxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogWy4uLkVYUE9SVFMsIE5nbERheSwgTmdsRGF0ZXBpY2tlcldlZWtkYXlzLCBOZ2xEYXRlcGlja2VyWWVhciwgTmdsRGF0ZXBpY2tlck1vbnRoXSxcbiAgZXhwb3J0czogRVhQT1JUUyxcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBOZ2xJY29uc01vZHVsZSxcbiAgICBOZ2xJbnRlcm5hbE91dGxldE1vZHVsZSxcbiAgICBPdmVybGF5TW9kdWxlLFxuICAgIE5nbENsaWNrT3V0c2lkZU1vZHVsZSxcbiAgICBOZ2xPdmVybGF5TW9kdWxlLFxuICAgIE5nbEZvcm1zTW9kdWxlXG4gIF0sXG4gIHByb3ZpZGVyczogW05nbERhdGVBZGFwdGVyXSxcbn0pXG5leHBvcnQgY2xhc3MgTmdsRGF0ZXBpY2tlcnNNb2R1bGUge31cbiJdfQ==
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
const EXPORTS = [
    NglDatepicker, NglDatepickerInput, NglDatepickerInputDirective,
];
export class NglDatepickersModule {
}
NglDatepickersModule.decorators = [
    { type: NgModule, args: [{
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
                ],
                providers: [NglDateAdapter],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctbGlnaHRuaW5nL3NyYy9saWIvZGF0ZXBpY2tlcnMvbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDckQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2pELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBRXRFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDN0MsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDOUQsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFFakYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxPQUFPLENBQUM7QUFDL0IsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sUUFBUSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLFNBQVMsQ0FBQztBQUU3QyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDN0QsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFFcEUsTUFBTSxPQUFPLEdBQUc7SUFDZCxhQUFhLEVBQUUsa0JBQWtCLEVBQUUsMkJBQTJCO0NBQy9ELENBQUM7QUFnQkYsTUFBTSxPQUFPLG9CQUFvQjs7O1lBZGhDLFFBQVEsU0FBQztnQkFDUixZQUFZLEVBQUUsQ0FBQyxHQUFHLE9BQU8sRUFBRSxNQUFNLEVBQUUscUJBQXFCLEVBQUUsaUJBQWlCLEVBQUUsa0JBQWtCLENBQUM7Z0JBQ2hHLE9BQU8sRUFBRSxPQUFPO2dCQUNoQixPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWixXQUFXO29CQUNYLGNBQWM7b0JBQ2QsdUJBQXVCO29CQUN2QixhQUFhO29CQUNiLHFCQUFxQjtvQkFDckIsZ0JBQWdCO2lCQUNqQjtnQkFDRCxTQUFTLEVBQUUsQ0FBQyxjQUFjLENBQUM7YUFDNUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgT3ZlcmxheU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcbmltcG9ydCB7IE5nbEljb25zTW9kdWxlIH0gZnJvbSAnLi4vaWNvbnMvbW9kdWxlJztcbmltcG9ydCB7IE5nbEludGVybmFsT3V0bGV0TW9kdWxlIH0gZnJvbSAnLi4vdXRpbC9vdXRsZXQubW9kdWxlJztcbmltcG9ydCB7IE5nbENsaWNrT3V0c2lkZU1vZHVsZSB9IGZyb20gJy4uL2NvbW1vbi9jbGlja291dHNpZGUubW9kdWxlJztcblxuaW1wb3J0IHsgTmdsRGF0ZXBpY2tlciB9IGZyb20gJy4vZGF0ZXBpY2tlcic7XG5pbXBvcnQgeyBOZ2xEYXRlcGlja2VySW5wdXQgfSBmcm9tICcuL2lucHV0L2RhdGVwaWNrZXItaW5wdXQnO1xuaW1wb3J0IHsgTmdsRGF0ZXBpY2tlcklucHV0RGlyZWN0aXZlIH0gZnJvbSAnLi9pbnB1dC9kYXRlcGlja2VyLWlucHV0LmRpcmVjdGl2ZSc7XG5cbmltcG9ydCB7IE5nbERhdGVwaWNrZXJXZWVrZGF5cyB9IGZyb20gJy4vd2Vla2RheXMnO1xuaW1wb3J0IHsgTmdsRGF5IH0gZnJvbSAnLi9kYXknO1xuaW1wb3J0IHsgTmdsRGF0ZXBpY2tlclllYXIgfSBmcm9tICcuL3llYXInO1xuaW1wb3J0IHsgTmdsRGF0ZXBpY2tlck1vbnRoIH0gZnJvbSAnLi9tb250aCc7XG5cbmltcG9ydCB7IE5nbERhdGVBZGFwdGVyIH0gZnJvbSAnLi9hZGFwdGVycy9kYXRlLWZucy1hZGFwdGVyJztcbmltcG9ydCB7IE5nbE92ZXJsYXlNb2R1bGUgfSBmcm9tICcuLi9jb21tb24vb3ZlcmxheS9vdmVybGF5Lm1vZHVsZSc7XG5cbmNvbnN0IEVYUE9SVFMgPSBbXG4gIE5nbERhdGVwaWNrZXIsIE5nbERhdGVwaWNrZXJJbnB1dCwgTmdsRGF0ZXBpY2tlcklucHV0RGlyZWN0aXZlLFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbLi4uRVhQT1JUUywgTmdsRGF5LCBOZ2xEYXRlcGlja2VyV2Vla2RheXMsIE5nbERhdGVwaWNrZXJZZWFyLCBOZ2xEYXRlcGlja2VyTW9udGhdLFxuICBleHBvcnRzOiBFWFBPUlRTLFxuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIE5nbEljb25zTW9kdWxlLFxuICAgIE5nbEludGVybmFsT3V0bGV0TW9kdWxlLFxuICAgIE92ZXJsYXlNb2R1bGUsXG4gICAgTmdsQ2xpY2tPdXRzaWRlTW9kdWxlLFxuICAgIE5nbE92ZXJsYXlNb2R1bGUsXG4gIF0sXG4gIHByb3ZpZGVyczogW05nbERhdGVBZGFwdGVyXSxcbn0pXG5leHBvcnQgY2xhc3MgTmdsRGF0ZXBpY2tlcnNNb2R1bGUge31cbiJdfQ==
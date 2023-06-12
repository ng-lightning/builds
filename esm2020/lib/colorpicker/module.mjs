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
import * as i0 from "@angular/core";
const DIRECTIVES = [
    NglColorpicker,
];
export class NglColorpickerModule {
}
NglColorpickerModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglColorpickerModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
NglColorpickerModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.9", ngImport: i0, type: NglColorpickerModule, declarations: [NglColorpicker, NglColorpickerSwatch,
        NglColorpickerCustom,
        NglColorpickerRange,
        NglColorpickerInputs,
        NglColorpickerSwatches,
        NglColorpickerSwatchTrigger], imports: [CommonModule,
        NglIconsModule,
        NglTabsModule,
        NglPopoversModule,
        NglFormsModule,
        NglInternalOutletModule], exports: [NglColorpicker] });
NglColorpickerModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglColorpickerModule, imports: [CommonModule,
        NglIconsModule,
        NglTabsModule,
        NglPopoversModule,
        NglFormsModule,
        NglInternalOutletModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglColorpickerModule, decorators: [{
            type: NgModule,
            args: [{
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
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctbGlnaHRuaW5nL3NyYy9saWIvY29sb3JwaWNrZXIvbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDdkQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2pELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRWhFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0MsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDbkUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDbkUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDdkUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDMUUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDekUsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7O0FBRWpFLE1BQU0sVUFBVSxHQUFHO0lBQ2pCLGNBQWM7Q0FDZixDQUFDO0FBc0JGLE1BQU0sT0FBTyxvQkFBb0I7O2lIQUFwQixvQkFBb0I7a0hBQXBCLG9CQUFvQixpQkF2Qi9CLGNBQWMsRUFNWixvQkFBb0I7UUFDcEIsb0JBQW9CO1FBQ3BCLG1CQUFtQjtRQUNuQixvQkFBb0I7UUFDcEIsc0JBQXNCO1FBQ3RCLDJCQUEyQixhQUkzQixZQUFZO1FBQ1osY0FBYztRQUNkLGFBQWE7UUFDYixpQkFBaUI7UUFDakIsY0FBYztRQUNkLHVCQUF1QixhQXBCekIsY0FBYztrSEF1Qkgsb0JBQW9CLFlBUjdCLFlBQVk7UUFDWixjQUFjO1FBQ2QsYUFBYTtRQUNiLGlCQUFpQjtRQUNqQixjQUFjO1FBQ2QsdUJBQXVCOzJGQUdkLG9CQUFvQjtrQkFwQmhDLFFBQVE7bUJBQUM7b0JBQ1IsWUFBWSxFQUFFO3dCQUNaLEdBQUcsVUFBVTt3QkFDYixvQkFBb0I7d0JBQ3BCLG9CQUFvQjt3QkFDcEIsbUJBQW1CO3dCQUNuQixvQkFBb0I7d0JBQ3BCLHNCQUFzQjt3QkFDdEIsMkJBQTJCO3FCQUM1QjtvQkFDRCxPQUFPLEVBQUUsVUFBVTtvQkFDbkIsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osY0FBYzt3QkFDZCxhQUFhO3dCQUNiLGlCQUFpQjt3QkFDakIsY0FBYzt3QkFDZCx1QkFBdUI7cUJBQ3hCO2lCQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ2xJY29uc01vZHVsZSB9IGZyb20gJy4uL2ljb25zL21vZHVsZSc7XG5pbXBvcnQgeyBOZ2xUYWJzTW9kdWxlIH0gZnJvbSAnLi4vdGFicy9tb2R1bGUnO1xuaW1wb3J0IHsgTmdsUG9wb3ZlcnNNb2R1bGUgfSBmcm9tICcuLi9wb3BvdmVycy9tb2R1bGUnO1xuaW1wb3J0IHsgTmdsRm9ybXNNb2R1bGUgfSBmcm9tICcuLi9mb3Jtcy9tb2R1bGUnO1xuaW1wb3J0IHsgTmdsSW50ZXJuYWxPdXRsZXRNb2R1bGUgfSBmcm9tICcuLi91dGlsL291dGxldC5tb2R1bGUnO1xuXG5pbXBvcnQgeyBOZ2xDb2xvcnBpY2tlciB9IGZyb20gJy4vY29sb3JwaWNrZXInO1xuaW1wb3J0IHsgTmdsQ29sb3JwaWNrZXJTd2F0Y2ggfSBmcm9tICcuL3N3YXRjaC9jb2xvcnBpY2tlci1zd2F0Y2gnO1xuaW1wb3J0IHsgTmdsQ29sb3JwaWNrZXJDdXN0b20gfSBmcm9tICcuL2N1c3RvbS9jb2xvcnBpY2tlci1jdXN0b20nO1xuaW1wb3J0IHsgTmdsQ29sb3JwaWNrZXJSYW5nZSB9IGZyb20gJy4vY3VzdG9tL3JhbmdlL2NvbG9ycGlja2VyLXJhbmdlJztcbmltcG9ydCB7IE5nbENvbG9ycGlja2VySW5wdXRzIH0gZnJvbSAnLi9jdXN0b20vaW5wdXRzL2NvbG9ycGlja2VyLWlucHV0cyc7XG5pbXBvcnQgeyBOZ2xDb2xvcnBpY2tlclN3YXRjaGVzIH0gZnJvbSAnLi9zd2F0Y2hlcy9jb2xvcnBpY2tlci1zd2F0Y2hlcyc7XG5pbXBvcnQgeyBOZ2xDb2xvcnBpY2tlclN3YXRjaFRyaWdnZXIgfSBmcm9tICcuL3N3YXRjaGVzL3RyaWdnZXInO1xuXG5jb25zdCBESVJFQ1RJVkVTID0gW1xuICBOZ2xDb2xvcnBpY2tlcixcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIC4uLkRJUkVDVElWRVMsXG4gICAgTmdsQ29sb3JwaWNrZXJTd2F0Y2gsXG4gICAgTmdsQ29sb3JwaWNrZXJDdXN0b20sXG4gICAgTmdsQ29sb3JwaWNrZXJSYW5nZSxcbiAgICBOZ2xDb2xvcnBpY2tlcklucHV0cyxcbiAgICBOZ2xDb2xvcnBpY2tlclN3YXRjaGVzLFxuICAgIE5nbENvbG9ycGlja2VyU3dhdGNoVHJpZ2dlcixcbiAgXSxcbiAgZXhwb3J0czogRElSRUNUSVZFUyxcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBOZ2xJY29uc01vZHVsZSxcbiAgICBOZ2xUYWJzTW9kdWxlLFxuICAgIE5nbFBvcG92ZXJzTW9kdWxlLFxuICAgIE5nbEZvcm1zTW9kdWxlLFxuICAgIE5nbEludGVybmFsT3V0bGV0TW9kdWxlLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBOZ2xDb2xvcnBpY2tlck1vZHVsZSB7fVxuIl19
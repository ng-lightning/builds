import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';
import { A11yModule } from '@angular/cdk/a11y';
import { NglPopover } from './popover';
import { NglPopoverTrigger } from './trigger';
import { NglInternalOutletModule } from '../util/outlet.module';
import { NglIconsModule } from '../icons/module';
import * as i0 from "@angular/core";
const NGL_POPOVER_DIRECTIVES = [
    NglPopover,
    NglPopoverTrigger,
];
export class NglPopoversModule {
}
NglPopoversModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglPopoversModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
NglPopoversModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.9", ngImport: i0, type: NglPopoversModule, declarations: [NglPopover,
        NglPopoverTrigger], imports: [CommonModule, OverlayModule, A11yModule, NglInternalOutletModule, NglIconsModule], exports: [NglPopover,
        NglPopoverTrigger] });
NglPopoversModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglPopoversModule, imports: [CommonModule, OverlayModule, A11yModule, NglInternalOutletModule, NglIconsModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglPopoversModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [NGL_POPOVER_DIRECTIVES],
                    exports: [NGL_POPOVER_DIRECTIVES],
                    imports: [CommonModule, OverlayModule, A11yModule, NglInternalOutletModule, NglIconsModule]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctbGlnaHRuaW5nL3NyYy9saWIvcG9wb3ZlcnMvbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFL0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUN2QyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDOUMsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDaEUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGlCQUFpQixDQUFDOztBQUVqRCxNQUFNLHNCQUFzQixHQUFHO0lBQzdCLFVBQVU7SUFDVixpQkFBaUI7Q0FDbEIsQ0FBQztBQU9GLE1BQU0sT0FBTyxpQkFBaUI7OzhHQUFqQixpQkFBaUI7K0dBQWpCLGlCQUFpQixpQkFUNUIsVUFBVTtRQUNWLGlCQUFpQixhQU1MLFlBQVksRUFBRSxhQUFhLEVBQUUsVUFBVSxFQUFFLHVCQUF1QixFQUFFLGNBQWMsYUFQNUYsVUFBVTtRQUNWLGlCQUFpQjsrR0FRTixpQkFBaUIsWUFGaEIsWUFBWSxFQUFFLGFBQWEsRUFBRSxVQUFVLEVBQUUsdUJBQXVCLEVBQUUsY0FBYzsyRkFFakYsaUJBQWlCO2tCQUw3QixRQUFRO21CQUFDO29CQUNOLFlBQVksRUFBRSxDQUFDLHNCQUFzQixDQUFDO29CQUN0QyxPQUFPLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztvQkFDakMsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLGFBQWEsRUFBRSxVQUFVLEVBQUUsdUJBQXVCLEVBQUUsY0FBYyxDQUFDO2lCQUM5RiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgT3ZlcmxheU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcbmltcG9ydCB7IEExMXlNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvYTExeSc7XG5cbmltcG9ydCB7IE5nbFBvcG92ZXIgfSBmcm9tICcuL3BvcG92ZXInO1xuaW1wb3J0IHsgTmdsUG9wb3ZlclRyaWdnZXIgfSBmcm9tICcuL3RyaWdnZXInO1xuaW1wb3J0IHsgTmdsSW50ZXJuYWxPdXRsZXRNb2R1bGUgfSBmcm9tICcuLi91dGlsL291dGxldC5tb2R1bGUnO1xuaW1wb3J0IHsgTmdsSWNvbnNNb2R1bGUgfSBmcm9tICcuLi9pY29ucy9tb2R1bGUnO1xuXG5jb25zdCBOR0xfUE9QT1ZFUl9ESVJFQ1RJVkVTID0gW1xuICBOZ2xQb3BvdmVyLFxuICBOZ2xQb3BvdmVyVHJpZ2dlcixcbl07XG5cbkBOZ01vZHVsZSh7XG4gICAgZGVjbGFyYXRpb25zOiBbTkdMX1BPUE9WRVJfRElSRUNUSVZFU10sXG4gICAgZXhwb3J0czogW05HTF9QT1BPVkVSX0RJUkVDVElWRVNdLFxuICAgIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIE92ZXJsYXlNb2R1bGUsIEExMXlNb2R1bGUsIE5nbEludGVybmFsT3V0bGV0TW9kdWxlLCBOZ2xJY29uc01vZHVsZV1cbn0pXG5leHBvcnQgY2xhc3MgTmdsUG9wb3ZlcnNNb2R1bGUge31cbiJdfQ==
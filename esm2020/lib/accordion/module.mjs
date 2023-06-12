import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NglIconsModule } from '../icons/module';
import { NglInternalOutletModule } from '../util/outlet.module';
import { NglAccordion } from './accordion';
import { NglAccordionSection } from './accordion-section';
import { NglAccordionItem } from './accordion-item';
import * as i0 from "@angular/core";
const DIRECTIVES = [
    NglAccordion,
    NglAccordionSection,
];
export class NglAccordionModule {
}
NglAccordionModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglAccordionModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
NglAccordionModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.9", ngImport: i0, type: NglAccordionModule, declarations: [NglAccordion,
        NglAccordionSection, NglAccordionItem], imports: [CommonModule, NglIconsModule, NglInternalOutletModule], exports: [NglAccordion,
        NglAccordionSection] });
NglAccordionModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglAccordionModule, imports: [CommonModule, NglIconsModule, NglInternalOutletModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglAccordionModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [...DIRECTIVES, NglAccordionItem],
                    exports: DIRECTIVES,
                    imports: [CommonModule, NglIconsModule, NglInternalOutletModule],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctbGlnaHRuaW5nL3NyYy9saWIvYWNjb3JkaW9uL21vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDakQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFaEUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUMzQyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7QUFFcEQsTUFBTSxVQUFVLEdBQUc7SUFDakIsWUFBWTtJQUNaLG1CQUFtQjtDQUNwQixDQUFDO0FBT0YsTUFBTSxPQUFPLGtCQUFrQjs7K0dBQWxCLGtCQUFrQjtnSEFBbEIsa0JBQWtCLGlCQVQ3QixZQUFZO1FBQ1osbUJBQW1CLEVBSVcsZ0JBQWdCLGFBRXBDLFlBQVksRUFBRSxjQUFjLEVBQUUsdUJBQXVCLGFBUC9ELFlBQVk7UUFDWixtQkFBbUI7Z0hBUVIsa0JBQWtCLFlBRm5CLFlBQVksRUFBRSxjQUFjLEVBQUUsdUJBQXVCOzJGQUVwRCxrQkFBa0I7a0JBTDlCLFFBQVE7bUJBQUM7b0JBQ1IsWUFBWSxFQUFFLENBQUMsR0FBRyxVQUFVLEVBQUUsZ0JBQWdCLENBQUM7b0JBQy9DLE9BQU8sRUFBRSxVQUFVO29CQUNuQixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsY0FBYyxFQUFFLHVCQUF1QixDQUFDO2lCQUNqRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdsSWNvbnNNb2R1bGUgfSBmcm9tICcuLi9pY29ucy9tb2R1bGUnO1xuaW1wb3J0IHsgTmdsSW50ZXJuYWxPdXRsZXRNb2R1bGUgfSBmcm9tICcuLi91dGlsL291dGxldC5tb2R1bGUnO1xuXG5pbXBvcnQgeyBOZ2xBY2NvcmRpb24gfSBmcm9tICcuL2FjY29yZGlvbic7XG5pbXBvcnQgeyBOZ2xBY2NvcmRpb25TZWN0aW9uIH0gZnJvbSAnLi9hY2NvcmRpb24tc2VjdGlvbic7XG5pbXBvcnQgeyBOZ2xBY2NvcmRpb25JdGVtIH0gZnJvbSAnLi9hY2NvcmRpb24taXRlbSc7XG5cbmNvbnN0IERJUkVDVElWRVMgPSBbXG4gIE5nbEFjY29yZGlvbixcbiAgTmdsQWNjb3JkaW9uU2VjdGlvbixcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogWy4uLkRJUkVDVElWRVMsIE5nbEFjY29yZGlvbkl0ZW1dLFxuICBleHBvcnRzOiBESVJFQ1RJVkVTLFxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBOZ2xJY29uc01vZHVsZSwgTmdsSW50ZXJuYWxPdXRsZXRNb2R1bGVdLFxufSlcbmV4cG9ydCBjbGFzcyBOZ2xBY2NvcmRpb25Nb2R1bGUge31cbiJdfQ==
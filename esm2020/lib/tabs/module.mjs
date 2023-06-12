import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NglTabs } from './tabs';
import { NglTab } from './tab';
import { NglTabVerbose, NglTabContent, NglTabLabel } from './tab-verbose';
import { NglInternalOutletModule } from '../util/outlet.module';
import * as i0 from "@angular/core";
const NGL_TAB_DIRECTIVES = [
    NglTabs,
    NglTab,
    NglTabVerbose, NglTabContent, NglTabLabel,
];
export class NglTabsModule {
}
NglTabsModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglTabsModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
NglTabsModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.9", ngImport: i0, type: NglTabsModule, declarations: [NglTabs,
        NglTab,
        NglTabVerbose, NglTabContent, NglTabLabel], imports: [CommonModule, NglInternalOutletModule], exports: [NglTabs,
        NglTab,
        NglTabVerbose, NglTabContent, NglTabLabel] });
NglTabsModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglTabsModule, imports: [CommonModule, NglInternalOutletModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglTabsModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [NGL_TAB_DIRECTIVES],
                    exports: [NGL_TAB_DIRECTIVES],
                    imports: [CommonModule, NglInternalOutletModule],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctbGlnaHRuaW5nL3NyYy9saWIvdGFicy9tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUNqQyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sT0FBTyxDQUFDO0FBQy9CLE9BQU8sRUFBRSxhQUFhLEVBQUUsYUFBYSxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7QUFFaEUsTUFBTSxrQkFBa0IsR0FBRztJQUN6QixPQUFPO0lBQ1AsTUFBTTtJQUNOLGFBQWEsRUFBRSxhQUFhLEVBQUUsV0FBVztDQUMxQyxDQUFDO0FBT0YsTUFBTSxPQUFPLGFBQWE7OzBHQUFiLGFBQWE7MkdBQWIsYUFBYSxpQkFWeEIsT0FBTztRQUNQLE1BQU07UUFDTixhQUFhLEVBQUUsYUFBYSxFQUFFLFdBQVcsYUFNL0IsWUFBWSxFQUFFLHVCQUF1QixhQVIvQyxPQUFPO1FBQ1AsTUFBTTtRQUNOLGFBQWEsRUFBRSxhQUFhLEVBQUUsV0FBVzsyR0FROUIsYUFBYSxZQUZkLFlBQVksRUFBRSx1QkFBdUI7MkZBRXBDLGFBQWE7a0JBTHpCLFFBQVE7bUJBQUM7b0JBQ1IsWUFBWSxFQUFFLENBQUMsa0JBQWtCLENBQUM7b0JBQ2xDLE9BQU8sRUFBRSxDQUFDLGtCQUFrQixDQUFDO29CQUM3QixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsdUJBQXVCLENBQUM7aUJBQ2pEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IE5nbFRhYnMgfSBmcm9tICcuL3RhYnMnO1xuaW1wb3J0IHsgTmdsVGFiIH0gZnJvbSAnLi90YWInO1xuaW1wb3J0IHsgTmdsVGFiVmVyYm9zZSwgTmdsVGFiQ29udGVudCwgTmdsVGFiTGFiZWwgfSBmcm9tICcuL3RhYi12ZXJib3NlJztcbmltcG9ydCB7IE5nbEludGVybmFsT3V0bGV0TW9kdWxlIH0gZnJvbSAnLi4vdXRpbC9vdXRsZXQubW9kdWxlJztcblxuY29uc3QgTkdMX1RBQl9ESVJFQ1RJVkVTID0gW1xuICBOZ2xUYWJzLFxuICBOZ2xUYWIsXG4gIE5nbFRhYlZlcmJvc2UsIE5nbFRhYkNvbnRlbnQsIE5nbFRhYkxhYmVsLFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbTkdMX1RBQl9ESVJFQ1RJVkVTXSxcbiAgZXhwb3J0czogW05HTF9UQUJfRElSRUNUSVZFU10sXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIE5nbEludGVybmFsT3V0bGV0TW9kdWxlXSxcbn0pXG5leHBvcnQgY2xhc3MgTmdsVGFic01vZHVsZSB7fVxuIl19
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NglInternalOutletModule } from '../util/outlet.module';
import { NglIconsModule } from '../icons/module';
import { NglTooltipsModule } from '../tooltips/module';
import { NglFormLabel } from './label';
import { NglFormHelp } from './help';
import * as i0 from "@angular/core";
const DIRECTIVES = [
    NglFormLabel,
    NglFormHelp,
];
export class NglFormsModule {
}
NglFormsModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglFormsModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
NglFormsModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.9", ngImport: i0, type: NglFormsModule, declarations: [NglFormLabel,
        NglFormHelp], imports: [CommonModule, NglInternalOutletModule, NglIconsModule, NglTooltipsModule], exports: [NglFormLabel,
        NglFormHelp] });
NglFormsModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglFormsModule, imports: [CommonModule, NglInternalOutletModule, NglIconsModule, NglTooltipsModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglFormsModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: DIRECTIVES,
                    exports: DIRECTIVES,
                    imports: [CommonModule, NglInternalOutletModule, NglIconsModule, NglTooltipsModule],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctbGlnaHRuaW5nL3NyYy9saWIvZm9ybXMvbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUV2RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sU0FBUyxDQUFDO0FBQ3ZDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxRQUFRLENBQUM7O0FBRXJDLE1BQU0sVUFBVSxHQUFHO0lBQ2pCLFlBQVk7SUFDWixXQUFXO0NBQ1osQ0FBQztBQU9GLE1BQU0sT0FBTyxjQUFjOzsyR0FBZCxjQUFjOzRHQUFkLGNBQWMsaUJBVHpCLFlBQVk7UUFDWixXQUFXLGFBTUQsWUFBWSxFQUFFLHVCQUF1QixFQUFFLGNBQWMsRUFBRSxpQkFBaUIsYUFQbEYsWUFBWTtRQUNaLFdBQVc7NEdBUUEsY0FBYyxZQUZmLFlBQVksRUFBRSx1QkFBdUIsRUFBRSxjQUFjLEVBQUUsaUJBQWlCOzJGQUV2RSxjQUFjO2tCQUwxQixRQUFRO21CQUFDO29CQUNSLFlBQVksRUFBRSxVQUFVO29CQUN4QixPQUFPLEVBQUUsVUFBVTtvQkFDbkIsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLHVCQUF1QixFQUFFLGNBQWMsRUFBRSxpQkFBaUIsQ0FBQztpQkFDcEYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nbEludGVybmFsT3V0bGV0TW9kdWxlIH0gZnJvbSAnLi4vdXRpbC9vdXRsZXQubW9kdWxlJztcbmltcG9ydCB7IE5nbEljb25zTW9kdWxlIH0gZnJvbSAnLi4vaWNvbnMvbW9kdWxlJztcbmltcG9ydCB7IE5nbFRvb2x0aXBzTW9kdWxlIH0gZnJvbSAnLi4vdG9vbHRpcHMvbW9kdWxlJztcblxuaW1wb3J0IHsgTmdsRm9ybUxhYmVsIH0gZnJvbSAnLi9sYWJlbCc7XG5pbXBvcnQgeyBOZ2xGb3JtSGVscCB9IGZyb20gJy4vaGVscCc7XG5cbmNvbnN0IERJUkVDVElWRVMgPSBbXG4gIE5nbEZvcm1MYWJlbCxcbiAgTmdsRm9ybUhlbHAsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IERJUkVDVElWRVMsXG4gIGV4cG9ydHM6IERJUkVDVElWRVMsXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIE5nbEludGVybmFsT3V0bGV0TW9kdWxlLCBOZ2xJY29uc01vZHVsZSwgTmdsVG9vbHRpcHNNb2R1bGVdLFxufSlcbmV4cG9ydCBjbGFzcyBOZ2xGb3Jtc01vZHVsZSB7fVxuIl19
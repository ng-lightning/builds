import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';
import { A11yModule } from '@angular/cdk/a11y';
import { NglTooltip } from './tooltip';
import { NglTooltipTrigger } from './trigger';
import { NglInternalOutletModule } from '../util/outlet.module';
import * as i0 from "@angular/core";
export class NglTooltipsModule {
}
NglTooltipsModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglTooltipsModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
NglTooltipsModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.9", ngImport: i0, type: NglTooltipsModule, declarations: [NglTooltip, NglTooltipTrigger], imports: [CommonModule, OverlayModule, A11yModule, NglInternalOutletModule], exports: [NglTooltipTrigger] });
NglTooltipsModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglTooltipsModule, imports: [CommonModule, OverlayModule, A11yModule, NglInternalOutletModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglTooltipsModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [NglTooltip, NglTooltipTrigger],
                    exports: [NglTooltipTrigger],
                    imports: [CommonModule, OverlayModule, A11yModule, NglInternalOutletModule]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctbGlnaHRuaW5nL3NyYy9saWIvdG9vbHRpcHMvbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFL0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUN2QyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDOUMsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sdUJBQXVCLENBQUM7O0FBT2hFLE1BQU0sT0FBTyxpQkFBaUI7OzhHQUFqQixpQkFBaUI7K0dBQWpCLGlCQUFpQixpQkFKWCxVQUFVLEVBQUUsaUJBQWlCLGFBRWxDLFlBQVksRUFBRSxhQUFhLEVBQUUsVUFBVSxFQUFFLHVCQUF1QixhQURoRSxpQkFBaUI7K0dBR2xCLGlCQUFpQixZQUZoQixZQUFZLEVBQUUsYUFBYSxFQUFFLFVBQVUsRUFBRSx1QkFBdUI7MkZBRWpFLGlCQUFpQjtrQkFMN0IsUUFBUTttQkFBQztvQkFDTixZQUFZLEVBQUUsQ0FBQyxVQUFVLEVBQUUsaUJBQWlCLENBQUM7b0JBQzdDLE9BQU8sRUFBRSxDQUFDLGlCQUFpQixDQUFDO29CQUM1QixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsYUFBYSxFQUFFLFVBQVUsRUFBRSx1QkFBdUIsQ0FBQztpQkFDOUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE92ZXJsYXlNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XG5pbXBvcnQgeyBBMTF5TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2ExMXknO1xuXG5pbXBvcnQgeyBOZ2xUb29sdGlwIH0gZnJvbSAnLi90b29sdGlwJztcbmltcG9ydCB7IE5nbFRvb2x0aXBUcmlnZ2VyIH0gZnJvbSAnLi90cmlnZ2VyJztcbmltcG9ydCB7IE5nbEludGVybmFsT3V0bGV0TW9kdWxlIH0gZnJvbSAnLi4vdXRpbC9vdXRsZXQubW9kdWxlJztcblxuQE5nTW9kdWxlKHtcbiAgICBkZWNsYXJhdGlvbnM6IFtOZ2xUb29sdGlwLCBOZ2xUb29sdGlwVHJpZ2dlcl0sXG4gICAgZXhwb3J0czogW05nbFRvb2x0aXBUcmlnZ2VyXSxcbiAgICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBPdmVybGF5TW9kdWxlLCBBMTF5TW9kdWxlLCBOZ2xJbnRlcm5hbE91dGxldE1vZHVsZV1cbn0pXG5leHBvcnQgY2xhc3MgTmdsVG9vbHRpcHNNb2R1bGUge31cbiJdfQ==
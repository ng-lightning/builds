import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';
import { A11yModule } from '@angular/cdk/a11y';
import { NglTooltip } from './tooltip';
import { NglTooltipTrigger } from './trigger';
import { NglInternalOutletModule } from '../util/outlet.module';
export class NglTooltipsModule {
}
NglTooltipsModule.decorators = [
    { type: NgModule, args: [{
                declarations: [NglTooltip, NglTooltipTrigger],
                exports: [NglTooltipTrigger],
                imports: [CommonModule, OverlayModule, A11yModule, NglInternalOutletModule],
                entryComponents: [NglTooltip],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctbGlnaHRuaW5nL3NyYy9saWIvdG9vbHRpcHMvbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFL0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUN2QyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDOUMsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFRaEUsTUFBTSxPQUFPLGlCQUFpQjs7O1lBTjdCLFFBQVEsU0FBQztnQkFDUixZQUFZLEVBQUUsQ0FBQyxVQUFVLEVBQUUsaUJBQWlCLENBQUM7Z0JBQzdDLE9BQU8sRUFBRSxDQUFDLGlCQUFpQixDQUFDO2dCQUM1QixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsYUFBYSxFQUFFLFVBQVUsRUFBRSx1QkFBdUIsQ0FBQztnQkFDM0UsZUFBZSxFQUFFLENBQUMsVUFBVSxDQUFDO2FBQzlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBPdmVybGF5TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xuaW1wb3J0IHsgQTExeU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9hMTF5JztcblxuaW1wb3J0IHsgTmdsVG9vbHRpcCB9IGZyb20gJy4vdG9vbHRpcCc7XG5pbXBvcnQgeyBOZ2xUb29sdGlwVHJpZ2dlciB9IGZyb20gJy4vdHJpZ2dlcic7XG5pbXBvcnQgeyBOZ2xJbnRlcm5hbE91dGxldE1vZHVsZSB9IGZyb20gJy4uL3V0aWwvb3V0bGV0Lm1vZHVsZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW05nbFRvb2x0aXAsIE5nbFRvb2x0aXBUcmlnZ2VyXSxcbiAgZXhwb3J0czogW05nbFRvb2x0aXBUcmlnZ2VyXSxcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgT3ZlcmxheU1vZHVsZSwgQTExeU1vZHVsZSwgTmdsSW50ZXJuYWxPdXRsZXRNb2R1bGVdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtOZ2xUb29sdGlwXSxcbn0pXG5leHBvcnQgY2xhc3MgTmdsVG9vbHRpcHNNb2R1bGUge31cbiJdfQ==
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NglIconsModule } from '../icons/module';
import { NglInternalOutletModule } from '../util/outlet.module';
import { NglFile } from './file';
import { NglFileCrop } from './file-crop';
export class NglFilesModule {
}
NglFilesModule.decorators = [
    { type: NgModule, args: [{
                declarations: [NglFile, NglFileCrop],
                exports: [NglFile, NglFileCrop],
                imports: [CommonModule, NglIconsModule, NglInternalOutletModule],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctbGlnaHRuaW5nL3NyYy9saWIvZmlsZXMvbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUVoRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBQ2pDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFPMUMsTUFBTSxPQUFPLGNBQWM7OztZQUwxQixRQUFRLFNBQUM7Z0JBQ1IsWUFBWSxFQUFFLENBQUMsT0FBTyxFQUFFLFdBQVcsQ0FBQztnQkFDcEMsT0FBTyxFQUFFLENBQUMsT0FBTyxFQUFFLFdBQVcsQ0FBQztnQkFDL0IsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLGNBQWMsRUFBRSx1QkFBdUIsQ0FBQzthQUNqRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdsSWNvbnNNb2R1bGUgfSBmcm9tICcuLi9pY29ucy9tb2R1bGUnO1xuaW1wb3J0IHsgTmdsSW50ZXJuYWxPdXRsZXRNb2R1bGUgfSBmcm9tICcuLi91dGlsL291dGxldC5tb2R1bGUnO1xuXG5pbXBvcnQgeyBOZ2xGaWxlIH0gZnJvbSAnLi9maWxlJztcbmltcG9ydCB7IE5nbEZpbGVDcm9wIH0gZnJvbSAnLi9maWxlLWNyb3AnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtOZ2xGaWxlLCBOZ2xGaWxlQ3JvcF0sXG4gIGV4cG9ydHM6IFtOZ2xGaWxlLCBOZ2xGaWxlQ3JvcF0sXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIE5nbEljb25zTW9kdWxlLCBOZ2xJbnRlcm5hbE91dGxldE1vZHVsZV0sXG59KVxuZXhwb3J0IGNsYXNzIE5nbEZpbGVzTW9kdWxlIHt9XG4iXX0=
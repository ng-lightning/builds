import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NglIconsModule } from '../icons/module';
import { NglInternalOutletModule } from '../util/outlet.module';
import { NglFileUpload } from './file-upload';
export class NglFileUploadModule {
}
NglFileUploadModule.decorators = [
    { type: NgModule, args: [{
                declarations: [NglFileUpload],
                exports: [NglFileUpload],
                imports: [CommonModule, NglIconsModule, NglInternalOutletModule],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctbGlnaHRuaW5nL3NyYy9saWIvZmlsZS11cGxvYWQvbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUVoRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBTzlDLE1BQU0sT0FBTyxtQkFBbUI7OztZQUwvQixRQUFRLFNBQUM7Z0JBQ1IsWUFBWSxFQUFFLENBQUMsYUFBYSxDQUFDO2dCQUM3QixPQUFPLEVBQUUsQ0FBQyxhQUFhLENBQUM7Z0JBQ3hCLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxjQUFjLEVBQUUsdUJBQXVCLENBQUM7YUFDakUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nbEljb25zTW9kdWxlIH0gZnJvbSAnLi4vaWNvbnMvbW9kdWxlJztcbmltcG9ydCB7IE5nbEludGVybmFsT3V0bGV0TW9kdWxlIH0gZnJvbSAnLi4vdXRpbC9vdXRsZXQubW9kdWxlJztcblxuaW1wb3J0IHsgTmdsRmlsZVVwbG9hZCB9IGZyb20gJy4vZmlsZS11cGxvYWQnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtOZ2xGaWxlVXBsb2FkXSxcbiAgZXhwb3J0czogW05nbEZpbGVVcGxvYWRdLFxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBOZ2xJY29uc01vZHVsZSwgTmdsSW50ZXJuYWxPdXRsZXRNb2R1bGVdLFxufSlcbmV4cG9ydCBjbGFzcyBOZ2xGaWxlVXBsb2FkTW9kdWxlIHt9XG4iXX0=
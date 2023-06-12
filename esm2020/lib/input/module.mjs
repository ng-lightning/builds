import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NglFormsModule } from '../forms/module';
import { NglInternalOutletModule } from '../util/outlet.module';
import { NglInput } from './input/input';
import { NglInputElement } from './element/element';
import * as i0 from "@angular/core";
const DIRECTIVES = [
    NglInput,
    NglInputElement,
];
export class NglInputModule {
}
NglInputModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglInputModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
NglInputModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.9", ngImport: i0, type: NglInputModule, declarations: [NglInput,
        NglInputElement], imports: [CommonModule, NglFormsModule, NglInternalOutletModule], exports: [NglInput,
        NglInputElement] });
NglInputModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglInputModule, imports: [CommonModule, NglFormsModule, NglInternalOutletModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglInputModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: DIRECTIVES,
                    exports: DIRECTIVES,
                    imports: [CommonModule, NglFormsModule, NglInternalOutletModule],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctbGlnaHRuaW5nL3NyYy9saWIvaW5wdXQvbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUVoRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7QUFFcEQsTUFBTSxVQUFVLEdBQUc7SUFDakIsUUFBUTtJQUNSLGVBQWU7Q0FDaEIsQ0FBQztBQU9GLE1BQU0sT0FBTyxjQUFjOzsyR0FBZCxjQUFjOzRHQUFkLGNBQWMsaUJBVHpCLFFBQVE7UUFDUixlQUFlLGFBTUwsWUFBWSxFQUFFLGNBQWMsRUFBRSx1QkFBdUIsYUFQL0QsUUFBUTtRQUNSLGVBQWU7NEdBUUosY0FBYyxZQUZmLFlBQVksRUFBRSxjQUFjLEVBQUUsdUJBQXVCOzJGQUVwRCxjQUFjO2tCQUwxQixRQUFRO21CQUFDO29CQUNSLFlBQVksRUFBRSxVQUFVO29CQUN4QixPQUFPLEVBQUUsVUFBVTtvQkFDbkIsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLGNBQWMsRUFBRSx1QkFBdUIsQ0FBQztpQkFDakUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nbEZvcm1zTW9kdWxlIH0gZnJvbSAnLi4vZm9ybXMvbW9kdWxlJztcbmltcG9ydCB7IE5nbEludGVybmFsT3V0bGV0TW9kdWxlIH0gZnJvbSAnLi4vdXRpbC9vdXRsZXQubW9kdWxlJztcblxuaW1wb3J0IHsgTmdsSW5wdXQgfSBmcm9tICcuL2lucHV0L2lucHV0JztcbmltcG9ydCB7IE5nbElucHV0RWxlbWVudCB9IGZyb20gJy4vZWxlbWVudC9lbGVtZW50JztcblxuY29uc3QgRElSRUNUSVZFUyA9IFtcbiAgTmdsSW5wdXQsXG4gIE5nbElucHV0RWxlbWVudCxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogRElSRUNUSVZFUyxcbiAgZXhwb3J0czogRElSRUNUSVZFUyxcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgTmdsRm9ybXNNb2R1bGUsIE5nbEludGVybmFsT3V0bGV0TW9kdWxlXSxcbn0pXG5leHBvcnQgY2xhc3MgTmdsSW5wdXRNb2R1bGUge31cbiJdfQ==
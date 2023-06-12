import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NglButton } from './button';
import { NglIconsModule } from '../icons/module';
import { NglButtonStateful } from './button-stateful';
import { NglButtonStateOn, NglButtonStateOff, NglButtonStateHover } from './button-states';
import * as i0 from "@angular/core";
const NGL_BUTTON_DIRECTIVES = [
    NglButton,
    NglButtonStateful,
    NglButtonStateOn,
    NglButtonStateOff,
    NglButtonStateHover
];
export class NglButtonsModule {
}
NglButtonsModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglButtonsModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
NglButtonsModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.9", ngImport: i0, type: NglButtonsModule, declarations: [NglButton,
        NglButtonStateful,
        NglButtonStateOn,
        NglButtonStateOff,
        NglButtonStateHover], imports: [CommonModule, NglIconsModule], exports: [NglButton,
        NglButtonStateful,
        NglButtonStateOn,
        NglButtonStateOff,
        NglButtonStateHover] });
NglButtonsModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglButtonsModule, imports: [CommonModule, NglIconsModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglButtonsModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: NGL_BUTTON_DIRECTIVES,
                    exports: NGL_BUTTON_DIRECTIVES,
                    imports: [CommonModule, NglIconsModule],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctbGlnaHRuaW5nL3NyYy9saWIvYnV0dG9ucy9tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUNyQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDakQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDdEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLGlCQUFpQixFQUFFLG1CQUFtQixFQUFFLE1BQU0saUJBQWlCLENBQUM7O0FBRTNGLE1BQU0scUJBQXFCLEdBQUc7SUFDNUIsU0FBUztJQUNULGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtDQUNwQixDQUFDO0FBT0YsTUFBTSxPQUFPLGdCQUFnQjs7NkdBQWhCLGdCQUFnQjs4R0FBaEIsZ0JBQWdCLGlCQVozQixTQUFTO1FBQ1QsaUJBQWlCO1FBQ2pCLGdCQUFnQjtRQUNoQixpQkFBaUI7UUFDakIsbUJBQW1CLGFBTVQsWUFBWSxFQUFFLGNBQWMsYUFWdEMsU0FBUztRQUNULGlCQUFpQjtRQUNqQixnQkFBZ0I7UUFDaEIsaUJBQWlCO1FBQ2pCLG1CQUFtQjs4R0FRUixnQkFBZ0IsWUFGakIsWUFBWSxFQUFFLGNBQWM7MkZBRTNCLGdCQUFnQjtrQkFMNUIsUUFBUTttQkFBQztvQkFDUixZQUFZLEVBQUUscUJBQXFCO29CQUNuQyxPQUFPLEVBQUUscUJBQXFCO29CQUM5QixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsY0FBYyxDQUFDO2lCQUN4QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBOZ2xCdXR0b24gfSBmcm9tICcuL2J1dHRvbic7XG5pbXBvcnQgeyBOZ2xJY29uc01vZHVsZSB9IGZyb20gJy4uL2ljb25zL21vZHVsZSc7XG5pbXBvcnQgeyBOZ2xCdXR0b25TdGF0ZWZ1bCB9IGZyb20gJy4vYnV0dG9uLXN0YXRlZnVsJztcbmltcG9ydCB7IE5nbEJ1dHRvblN0YXRlT24sIE5nbEJ1dHRvblN0YXRlT2ZmLCBOZ2xCdXR0b25TdGF0ZUhvdmVyIH0gZnJvbSAnLi9idXR0b24tc3RhdGVzJztcblxuY29uc3QgTkdMX0JVVFRPTl9ESVJFQ1RJVkVTID0gW1xuICBOZ2xCdXR0b24sXG4gIE5nbEJ1dHRvblN0YXRlZnVsLFxuICBOZ2xCdXR0b25TdGF0ZU9uLFxuICBOZ2xCdXR0b25TdGF0ZU9mZixcbiAgTmdsQnV0dG9uU3RhdGVIb3ZlclxuXTtcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBOR0xfQlVUVE9OX0RJUkVDVElWRVMsXG4gIGV4cG9ydHM6IE5HTF9CVVRUT05fRElSRUNUSVZFUyxcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgTmdsSWNvbnNNb2R1bGVdLFxufSlcbmV4cG9ydCBjbGFzcyBOZ2xCdXR0b25zTW9kdWxlIHt9XG4iXX0=
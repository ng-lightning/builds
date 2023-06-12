import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NglDynamicIcon } from './dynamic-icon';
import { NglDynamicIconEllie } from './ellie/ellie';
import { NglDynamicIconEq } from './eq/eq';
import { NglDynamicIconScore } from './score/score';
import { NglDynamicIconWaffle } from './waffle/waffle';
import * as i0 from "@angular/core";
const NGL_DYNAMIC_ICON_DIRECTIVES = [
    NglDynamicIcon,
    NglDynamicIconEllie,
    NglDynamicIconEq,
    NglDynamicIconScore,
    NglDynamicIconWaffle,
];
export class NglDynamicIconsModule {
}
NglDynamicIconsModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglDynamicIconsModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
NglDynamicIconsModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.9", ngImport: i0, type: NglDynamicIconsModule, declarations: [NglDynamicIcon,
        NglDynamicIconEllie,
        NglDynamicIconEq,
        NglDynamicIconScore,
        NglDynamicIconWaffle], imports: [CommonModule], exports: [NglDynamicIcon,
        NglDynamicIconEllie,
        NglDynamicIconEq,
        NglDynamicIconScore,
        NglDynamicIconWaffle] });
NglDynamicIconsModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglDynamicIconsModule, imports: [CommonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglDynamicIconsModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: NGL_DYNAMIC_ICON_DIRECTIVES,
                    exports: NGL_DYNAMIC_ICON_DIRECTIVES,
                    imports: [CommonModule],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctbGlnaHRuaW5nL3NyYy9saWIvZHluYW1pY2ljb25zL21vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFaEQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3BELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLFNBQVMsQ0FBQztBQUMzQyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDcEQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0saUJBQWlCLENBQUM7O0FBRXZELE1BQU0sMkJBQTJCLEdBQUc7SUFDbEMsY0FBYztJQUNkLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLG9CQUFvQjtDQUNyQixDQUFDO0FBT0YsTUFBTSxPQUFPLHFCQUFxQjs7a0hBQXJCLHFCQUFxQjttSEFBckIscUJBQXFCLGlCQVpoQyxjQUFjO1FBQ2QsbUJBQW1CO1FBQ25CLGdCQUFnQjtRQUNoQixtQkFBbUI7UUFDbkIsb0JBQW9CLGFBTVQsWUFBWSxhQVZ2QixjQUFjO1FBQ2QsbUJBQW1CO1FBQ25CLGdCQUFnQjtRQUNoQixtQkFBbUI7UUFDbkIsb0JBQW9CO21IQVFULHFCQUFxQixZQUZyQixZQUFZOzJGQUVaLHFCQUFxQjtrQkFMakMsUUFBUTttQkFBQztvQkFDUixZQUFZLEVBQUUsMkJBQTJCO29CQUN6QyxPQUFPLEVBQUUsMkJBQTJCO29CQUNwQyxPQUFPLEVBQUUsQ0FBRSxZQUFZLENBQUU7aUJBQzFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IE5nbER5bmFtaWNJY29uIH0gZnJvbSAnLi9keW5hbWljLWljb24nO1xuXG5pbXBvcnQgeyBOZ2xEeW5hbWljSWNvbkVsbGllIH0gZnJvbSAnLi9lbGxpZS9lbGxpZSc7XG5pbXBvcnQgeyBOZ2xEeW5hbWljSWNvbkVxIH0gZnJvbSAnLi9lcS9lcSc7XG5pbXBvcnQgeyBOZ2xEeW5hbWljSWNvblNjb3JlIH0gZnJvbSAnLi9zY29yZS9zY29yZSc7XG5pbXBvcnQgeyBOZ2xEeW5hbWljSWNvbldhZmZsZSB9IGZyb20gJy4vd2FmZmxlL3dhZmZsZSc7XG5cbmNvbnN0IE5HTF9EWU5BTUlDX0lDT05fRElSRUNUSVZFUyA9IFtcbiAgTmdsRHluYW1pY0ljb24sXG4gIE5nbER5bmFtaWNJY29uRWxsaWUsXG4gIE5nbER5bmFtaWNJY29uRXEsXG4gIE5nbER5bmFtaWNJY29uU2NvcmUsXG4gIE5nbER5bmFtaWNJY29uV2FmZmxlLFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBOR0xfRFlOQU1JQ19JQ09OX0RJUkVDVElWRVMsXG4gIGV4cG9ydHM6IE5HTF9EWU5BTUlDX0lDT05fRElSRUNUSVZFUyxcbiAgaW1wb3J0czogWyBDb21tb25Nb2R1bGUgXSxcbn0pXG5leHBvcnQgY2xhc3MgTmdsRHluYW1pY0ljb25zTW9kdWxlIHt9XG4iXX0=
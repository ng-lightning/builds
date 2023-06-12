import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NglPill } from './pill';
import { NglPillLink } from './pill-link';
import { NglIconsModule } from '../icons/module';
import { NglAvatarModule } from '../avatar/module';
import * as i0 from "@angular/core";
const NGL_PILL_DIRECTIVES = [
    NglPill,
    NglPillLink,
];
export class NglPillsModule {
}
NglPillsModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglPillsModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
NglPillsModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.9", ngImport: i0, type: NglPillsModule, declarations: [NglPill,
        NglPillLink], imports: [CommonModule, NglIconsModule, NglAvatarModule], exports: [NglPill,
        NglPillLink] });
NglPillsModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglPillsModule, imports: [CommonModule, NglIconsModule, NglAvatarModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglPillsModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: NGL_PILL_DIRECTIVES,
                    exports: NGL_PILL_DIRECTIVES,
                    imports: [CommonModule, NglIconsModule, NglAvatarModule],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctbGlnaHRuaW5nL3NyYy9saWIvcGlsbHMvbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFDakMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUMxQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDakQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGtCQUFrQixDQUFDOztBQUVuRCxNQUFNLG1CQUFtQixHQUFHO0lBQzFCLE9BQU87SUFDUCxXQUFXO0NBQ1osQ0FBQztBQU9GLE1BQU0sT0FBTyxjQUFjOzsyR0FBZCxjQUFjOzRHQUFkLGNBQWMsaUJBVHpCLE9BQU87UUFDUCxXQUFXLGFBTUQsWUFBWSxFQUFFLGNBQWMsRUFBRSxlQUFlLGFBUHZELE9BQU87UUFDUCxXQUFXOzRHQVFBLGNBQWMsWUFGZixZQUFZLEVBQUUsY0FBYyxFQUFFLGVBQWU7MkZBRTVDLGNBQWM7a0JBTDFCLFFBQVE7bUJBQUM7b0JBQ1IsWUFBWSxFQUFFLG1CQUFtQjtvQkFDakMsT0FBTyxFQUFFLG1CQUFtQjtvQkFDNUIsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLGNBQWMsRUFBRSxlQUFlLENBQUM7aUJBQ3pEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IE5nbFBpbGwgfSBmcm9tICcuL3BpbGwnO1xuaW1wb3J0IHsgTmdsUGlsbExpbmsgfSBmcm9tICcuL3BpbGwtbGluayc7XG5pbXBvcnQgeyBOZ2xJY29uc01vZHVsZSB9IGZyb20gJy4uL2ljb25zL21vZHVsZSc7XG5pbXBvcnQgeyBOZ2xBdmF0YXJNb2R1bGUgfSBmcm9tICcuLi9hdmF0YXIvbW9kdWxlJztcblxuY29uc3QgTkdMX1BJTExfRElSRUNUSVZFUyA9IFtcbiAgTmdsUGlsbCxcbiAgTmdsUGlsbExpbmssXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IE5HTF9QSUxMX0RJUkVDVElWRVMsXG4gIGV4cG9ydHM6IE5HTF9QSUxMX0RJUkVDVElWRVMsXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIE5nbEljb25zTW9kdWxlLCBOZ2xBdmF0YXJNb2R1bGVdLFxufSlcbmV4cG9ydCBjbGFzcyBOZ2xQaWxsc01vZHVsZSB7fVxuIl19
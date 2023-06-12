import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NglAlert } from './alert';
import { NglAlertClose } from './alert-close';
import { NglIconsModule } from '../icons/module';
import * as i0 from "@angular/core";
const NGL_ALERT_DIRECTIVES = [
    NglAlert,
    NglAlertClose,
];
export class NglAlertModule {
}
NglAlertModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglAlertModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
NglAlertModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.9", ngImport: i0, type: NglAlertModule, declarations: [NglAlert,
        NglAlertClose], imports: [CommonModule, NglIconsModule], exports: [NglAlert,
        NglAlertClose] });
NglAlertModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglAlertModule, imports: [CommonModule, NglIconsModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglAlertModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [NGL_ALERT_DIRECTIVES],
                    exports: [NGL_ALERT_DIRECTIVES],
                    imports: [CommonModule, NglIconsModule],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctbGlnaHRuaW5nL3NyYy9saWIvYWxlcnQvbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFDbkMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5QyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0saUJBQWlCLENBQUM7O0FBRWpELE1BQU0sb0JBQW9CLEdBQUc7SUFDM0IsUUFBUTtJQUNSLGFBQWE7Q0FDZCxDQUFDO0FBT0YsTUFBTSxPQUFPLGNBQWM7OzJHQUFkLGNBQWM7NEdBQWQsY0FBYyxpQkFUekIsUUFBUTtRQUNSLGFBQWEsYUFNSCxZQUFZLEVBQUUsY0FBYyxhQVB0QyxRQUFRO1FBQ1IsYUFBYTs0R0FRRixjQUFjLFlBRmYsWUFBWSxFQUFFLGNBQWM7MkZBRTNCLGNBQWM7a0JBTDFCLFFBQVE7bUJBQUM7b0JBQ1IsWUFBWSxFQUFFLENBQUMsb0JBQW9CLENBQUM7b0JBQ3BDLE9BQU8sRUFBRSxDQUFDLG9CQUFvQixDQUFDO29CQUMvQixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsY0FBYyxDQUFDO2lCQUN4QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBOZ2xBbGVydCB9IGZyb20gJy4vYWxlcnQnO1xuaW1wb3J0IHsgTmdsQWxlcnRDbG9zZSB9IGZyb20gJy4vYWxlcnQtY2xvc2UnO1xuaW1wb3J0IHsgTmdsSWNvbnNNb2R1bGUgfSBmcm9tICcuLi9pY29ucy9tb2R1bGUnO1xuXG5jb25zdCBOR0xfQUxFUlRfRElSRUNUSVZFUyA9IFtcbiAgTmdsQWxlcnQsXG4gIE5nbEFsZXJ0Q2xvc2UsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtOR0xfQUxFUlRfRElSRUNUSVZFU10sXG4gIGV4cG9ydHM6IFtOR0xfQUxFUlRfRElSRUNUSVZFU10sXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIE5nbEljb25zTW9kdWxlXSxcbn0pXG5leHBvcnQgY2xhc3MgTmdsQWxlcnRNb2R1bGUge31cbiJdfQ==
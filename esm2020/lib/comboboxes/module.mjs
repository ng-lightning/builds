import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NglInternalOutletModule } from '../util/outlet.module';
import { NglIconsModule } from '../icons/module';
import { NglFormsModule } from '../forms/module';
import { NglOverlayModule } from '../common/overlay/overlay.module';
import { NglCombobox } from './combobox';
import { NglComboboxOption } from './combobox-option';
import { NglComboboxInput } from './combobox-input';
import { OverlayModule } from '@angular/cdk/overlay';
import * as i0 from "@angular/core";
const DIRECTIVES = [
    NglCombobox,
    NglComboboxOption,
    NglComboboxInput,
];
export class NglComboboxesModule {
}
NglComboboxesModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglComboboxesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
NglComboboxesModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.9", ngImport: i0, type: NglComboboxesModule, declarations: [NglCombobox,
        NglComboboxOption,
        NglComboboxInput], imports: [CommonModule, NglInternalOutletModule, NglIconsModule, NglFormsModule, OverlayModule, NglOverlayModule], exports: [NglCombobox,
        NglComboboxOption,
        NglComboboxInput] });
NglComboboxesModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglComboboxesModule, imports: [CommonModule, NglInternalOutletModule, NglIconsModule, NglFormsModule, OverlayModule, NglOverlayModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglComboboxesModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: DIRECTIVES,
                    exports: DIRECTIVES,
                    imports: [CommonModule, NglInternalOutletModule, NglIconsModule, NglFormsModule, OverlayModule, NglOverlayModule],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctbGlnaHRuaW5nL3NyYy9saWIvY29tYm9ib3hlcy9tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDaEUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUVwRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7QUFFckQsTUFBTSxVQUFVLEdBQUc7SUFDakIsV0FBVztJQUNYLGlCQUFpQjtJQUNqQixnQkFBZ0I7Q0FDakIsQ0FBQztBQU9GLE1BQU0sT0FBTyxtQkFBbUI7O2dIQUFuQixtQkFBbUI7aUhBQW5CLG1CQUFtQixpQkFWOUIsV0FBVztRQUNYLGlCQUFpQjtRQUNqQixnQkFBZ0IsYUFNTixZQUFZLEVBQUUsdUJBQXVCLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRSxhQUFhLEVBQUUsZ0JBQWdCLGFBUmhILFdBQVc7UUFDWCxpQkFBaUI7UUFDakIsZ0JBQWdCO2lIQVFMLG1CQUFtQixZQUZwQixZQUFZLEVBQUUsdUJBQXVCLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRSxhQUFhLEVBQUUsZ0JBQWdCOzJGQUVyRyxtQkFBbUI7a0JBTC9CLFFBQVE7bUJBQUM7b0JBQ1IsWUFBWSxFQUFFLFVBQVU7b0JBQ3hCLE9BQU8sRUFBRSxVQUFVO29CQUNuQixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsdUJBQXVCLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRSxhQUFhLEVBQUUsZ0JBQWdCLENBQUM7aUJBQ2xIIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ2xJbnRlcm5hbE91dGxldE1vZHVsZSB9IGZyb20gJy4uL3V0aWwvb3V0bGV0Lm1vZHVsZSc7XG5pbXBvcnQgeyBOZ2xJY29uc01vZHVsZSB9IGZyb20gJy4uL2ljb25zL21vZHVsZSc7XG5pbXBvcnQgeyBOZ2xGb3Jtc01vZHVsZSB9IGZyb20gJy4uL2Zvcm1zL21vZHVsZSc7XG5pbXBvcnQgeyBOZ2xPdmVybGF5TW9kdWxlIH0gZnJvbSAnLi4vY29tbW9uL292ZXJsYXkvb3ZlcmxheS5tb2R1bGUnO1xuXG5pbXBvcnQgeyBOZ2xDb21ib2JveCB9IGZyb20gJy4vY29tYm9ib3gnO1xuaW1wb3J0IHsgTmdsQ29tYm9ib3hPcHRpb24gfSBmcm9tICcuL2NvbWJvYm94LW9wdGlvbic7XG5pbXBvcnQgeyBOZ2xDb21ib2JveElucHV0IH0gZnJvbSAnLi9jb21ib2JveC1pbnB1dCc7XG5pbXBvcnQgeyBPdmVybGF5TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xuXG5jb25zdCBESVJFQ1RJVkVTID0gW1xuICBOZ2xDb21ib2JveCxcbiAgTmdsQ29tYm9ib3hPcHRpb24sXG4gIE5nbENvbWJvYm94SW5wdXQsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IERJUkVDVElWRVMsXG4gIGV4cG9ydHM6IERJUkVDVElWRVMsXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIE5nbEludGVybmFsT3V0bGV0TW9kdWxlLCBOZ2xJY29uc01vZHVsZSwgTmdsRm9ybXNNb2R1bGUsIE92ZXJsYXlNb2R1bGUsIE5nbE92ZXJsYXlNb2R1bGVdLFxufSlcbmV4cG9ydCBjbGFzcyBOZ2xDb21ib2JveGVzTW9kdWxlIHt9XG4iXX0=
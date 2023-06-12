import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NglFormsModule } from '../forms/module';
import { NglInternalOutletModule } from '../util/outlet.module';
import { NglSelect } from './select/select';
import { NglSelectInput } from './input/input';
import * as i0 from "@angular/core";
const DIRECTIVES = [
    NglSelect,
    NglSelectInput,
];
export class NglSelectModule {
}
NglSelectModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglSelectModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
NglSelectModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.9", ngImport: i0, type: NglSelectModule, declarations: [NglSelect,
        NglSelectInput], imports: [CommonModule, NglFormsModule, NglInternalOutletModule], exports: [NglSelect,
        NglSelectInput] });
NglSelectModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglSelectModule, imports: [CommonModule, NglFormsModule, NglInternalOutletModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglSelectModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: DIRECTIVES,
                    exports: DIRECTIVES,
                    imports: [CommonModule, NglFormsModule, NglInternalOutletModule],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctbGlnaHRuaW5nL3NyYy9saWIvc2VsZWN0L21vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDakQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFaEUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzVDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBRS9DLE1BQU0sVUFBVSxHQUFHO0lBQ2pCLFNBQVM7SUFDVCxjQUFjO0NBQ2YsQ0FBQztBQU9GLE1BQU0sT0FBTyxlQUFlOzs0R0FBZixlQUFlOzZHQUFmLGVBQWUsaUJBVDFCLFNBQVM7UUFDVCxjQUFjLGFBTUosWUFBWSxFQUFFLGNBQWMsRUFBRSx1QkFBdUIsYUFQL0QsU0FBUztRQUNULGNBQWM7NkdBUUgsZUFBZSxZQUZoQixZQUFZLEVBQUUsY0FBYyxFQUFFLHVCQUF1QjsyRkFFcEQsZUFBZTtrQkFMM0IsUUFBUTttQkFBQztvQkFDUixZQUFZLEVBQUUsVUFBVTtvQkFDeEIsT0FBTyxFQUFFLFVBQVU7b0JBQ25CLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxjQUFjLEVBQUUsdUJBQXVCLENBQUM7aUJBQ2pFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ2xGb3Jtc01vZHVsZSB9IGZyb20gJy4uL2Zvcm1zL21vZHVsZSc7XG5pbXBvcnQgeyBOZ2xJbnRlcm5hbE91dGxldE1vZHVsZSB9IGZyb20gJy4uL3V0aWwvb3V0bGV0Lm1vZHVsZSc7XG5cbmltcG9ydCB7IE5nbFNlbGVjdCB9IGZyb20gJy4vc2VsZWN0L3NlbGVjdCc7XG5pbXBvcnQgeyBOZ2xTZWxlY3RJbnB1dCB9IGZyb20gJy4vaW5wdXQvaW5wdXQnO1xuXG5jb25zdCBESVJFQ1RJVkVTID0gW1xuICBOZ2xTZWxlY3QsXG4gIE5nbFNlbGVjdElucHV0LFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBESVJFQ1RJVkVTLFxuICBleHBvcnRzOiBESVJFQ1RJVkVTLFxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBOZ2xGb3Jtc01vZHVsZSwgTmdsSW50ZXJuYWxPdXRsZXRNb2R1bGVdLFxufSlcbmV4cG9ydCBjbGFzcyBOZ2xTZWxlY3RNb2R1bGUge31cbiJdfQ==
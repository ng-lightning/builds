import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NglRating } from './rating';
import { NglRatingIconTemplate } from './icons';
import { NglIconsModule } from '../icons/module';
import * as i0 from "@angular/core";
const DIRECTIVES = [
    NglRating,
    NglRatingIconTemplate,
];
export class NglRatingsModule {
}
NglRatingsModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglRatingsModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
NglRatingsModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.9", ngImport: i0, type: NglRatingsModule, declarations: [NglRating,
        NglRatingIconTemplate], imports: [CommonModule, NglIconsModule], exports: [NglRating,
        NglRatingIconTemplate] });
NglRatingsModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglRatingsModule, imports: [CommonModule, NglIconsModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglRatingsModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, NglIconsModule],
                    declarations: [...DIRECTIVES],
                    exports: [...DIRECTIVES],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctbGlnaHRuaW5nL3NyYy9saWIvcmF0aW5ncy9tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUNyQyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFDaEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGlCQUFpQixDQUFDOztBQUVqRCxNQUFNLFVBQVUsR0FBRztJQUNqQixTQUFTO0lBQ1QscUJBQXFCO0NBQ3RCLENBQUM7QUFPRixNQUFNLE9BQU8sZ0JBQWdCOzs2R0FBaEIsZ0JBQWdCOzhHQUFoQixnQkFBZ0IsaUJBVDNCLFNBQVM7UUFDVCxxQkFBcUIsYUFJWCxZQUFZLEVBQUUsY0FBYyxhQUx0QyxTQUFTO1FBQ1QscUJBQXFCOzhHQVFWLGdCQUFnQixZQUpqQixZQUFZLEVBQUUsY0FBYzsyRkFJM0IsZ0JBQWdCO2tCQUw1QixRQUFRO21CQUFDO29CQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxjQUFjLENBQUM7b0JBQ3ZDLFlBQVksRUFBRSxDQUFFLEdBQUcsVUFBVSxDQUFFO29CQUMvQixPQUFPLEVBQUUsQ0FBRSxHQUFHLFVBQVUsQ0FBRTtpQkFDM0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgTmdsUmF0aW5nIH0gZnJvbSAnLi9yYXRpbmcnO1xuaW1wb3J0IHsgTmdsUmF0aW5nSWNvblRlbXBsYXRlIH0gZnJvbSAnLi9pY29ucyc7XG5pbXBvcnQgeyBOZ2xJY29uc01vZHVsZSB9IGZyb20gJy4uL2ljb25zL21vZHVsZSc7XG5cbmNvbnN0IERJUkVDVElWRVMgPSBbXG4gIE5nbFJhdGluZyxcbiAgTmdsUmF0aW5nSWNvblRlbXBsYXRlLFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgTmdsSWNvbnNNb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFsgLi4uRElSRUNUSVZFUyBdLFxuICBleHBvcnRzOiBbIC4uLkRJUkVDVElWRVMgXSxcbn0pXG5leHBvcnQgY2xhc3MgTmdsUmF0aW5nc01vZHVsZSB7fVxuIl19
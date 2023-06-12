import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { getHexFromHsv, getHsvFromHex } from '../util';
import * as i0 from "@angular/core";
import * as i1 from "./range/colorpicker-range";
import * as i2 from "./inputs/colorpicker-inputs";
export class NglColorpickerCustom {
    constructor(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.hsvChange = new EventEmitter();
        this.renderer.addClass(this.el.nativeElement, 'slds-color-picker__custom');
    }
    ngOnChanges(changes) {
        if (changes.hsv) {
            this.hex = getHexFromHsv(this.hsv);
        }
    }
    onHsvChange($event) {
        this.hsvChange.emit($event);
    }
    onHexChange(hex) {
        const hsv = getHsvFromHex(hex);
        this.hsvChange.emit(hsv);
    }
}
NglColorpickerCustom.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglColorpickerCustom, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Component });
NglColorpickerCustom.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: NglColorpickerCustom, selector: "ngl-colorpicker-custom", inputs: { hsv: "hsv" }, outputs: { hsvChange: "hsvChange" }, usesOnChanges: true, ngImport: i0, template: "\n<ngl-colorpicker-range [hsv]=\"hsv\" (hsvChange)=\"onHsvChange($event)\"></ngl-colorpicker-range>\n<ngl-colorpicker-inputs [hex]=\"hex\" (hexChange)=\"onHexChange($event)\"></ngl-colorpicker-inputs>", dependencies: [{ kind: "component", type: i1.NglColorpickerRange, selector: "ngl-colorpicker-range", inputs: ["hsv"], outputs: ["hsvChange"] }, { kind: "component", type: i2.NglColorpickerInputs, selector: "ngl-colorpicker-inputs", inputs: ["hex"], outputs: ["hexChange"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglColorpickerCustom, decorators: [{
            type: Component,
            args: [{ selector: 'ngl-colorpicker-custom', changeDetection: ChangeDetectionStrategy.OnPush, template: "\n<ngl-colorpicker-range [hsv]=\"hsv\" (hsvChange)=\"onHsvChange($event)\"></ngl-colorpicker-range>\n<ngl-colorpicker-inputs [hex]=\"hex\" (hexChange)=\"onHexChange($event)\"></ngl-colorpicker-inputs>" }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }]; }, propDecorators: { hsv: [{
                type: Input
            }], hsvChange: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sb3JwaWNrZXItY3VzdG9tLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctbGlnaHRuaW5nL3NyYy9saWIvY29sb3JwaWNrZXIvY3VzdG9tL2NvbG9ycGlja2VyLWN1c3RvbS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nLWxpZ2h0bmluZy9zcmMvbGliL2NvbG9ycGlja2VyL2N1c3RvbS9jb2xvcnBpY2tlci1jdXN0b20uaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUF5Qix1QkFBdUIsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBNEIsTUFBTSxlQUFlLENBQUM7QUFDakosT0FBTyxFQUFRLGFBQWEsRUFBRSxhQUFhLEVBQUUsTUFBTSxTQUFTLENBQUM7Ozs7QUFPN0QsTUFBTSxPQUFPLG9CQUFvQjtJQVEvQixZQUFvQixFQUFjLEVBQVUsUUFBbUI7UUFBM0MsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUFVLGFBQVEsR0FBUixRQUFRLENBQVc7UUFKckQsY0FBUyxHQUFHLElBQUksWUFBWSxFQUFRLENBQUM7UUFLN0MsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsMkJBQTJCLENBQUMsQ0FBQztJQUM3RSxDQUFDO0lBRUQsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLElBQUksT0FBTyxDQUFDLEdBQUcsRUFBRTtZQUNmLElBQUksQ0FBQyxHQUFHLEdBQUcsYUFBYSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNwQztJQUNILENBQUM7SUFFRCxXQUFXLENBQUMsTUFBWTtRQUN0QixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBRUQsV0FBVyxDQUFDLEdBQVc7UUFDckIsTUFBTSxHQUFHLEdBQUcsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQy9CLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzNCLENBQUM7O2lIQXpCVSxvQkFBb0I7cUdBQXBCLG9CQUFvQixnSkNSakMsME1BRStGOzJGRE1sRixvQkFBb0I7a0JBTGhDLFNBQVM7K0JBQ0Usd0JBQXdCLG1CQUVqQix1QkFBdUIsQ0FBQyxNQUFNO3lIQUl0QyxHQUFHO3NCQUFYLEtBQUs7Z0JBRUksU0FBUztzQkFBbEIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgUmVuZGVyZXIyLCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElIU1YsIGdldEhleEZyb21Ic3YsIGdldEhzdkZyb21IZXggfSBmcm9tICcuLi91dGlsJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmdsLWNvbG9ycGlja2VyLWN1c3RvbScsXG4gIHRlbXBsYXRlVXJsOiAnLi9jb2xvcnBpY2tlci1jdXN0b20uaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBOZ2xDb2xvcnBpY2tlckN1c3RvbSBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG5cbiAgQElucHV0KCkgaHN2OiBJSFNWO1xuXG4gIEBPdXRwdXQoKSBoc3ZDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPElIU1Y+KCk7XG5cbiAgaGV4OiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZiwgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyKSB7XG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsICdzbGRzLWNvbG9yLXBpY2tlcl9fY3VzdG9tJyk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgaWYgKGNoYW5nZXMuaHN2KSB7XG4gICAgICB0aGlzLmhleCA9IGdldEhleEZyb21Ic3YodGhpcy5oc3YpO1xuICAgIH1cbiAgfVxuXG4gIG9uSHN2Q2hhbmdlKCRldmVudDogSUhTVikge1xuICAgIHRoaXMuaHN2Q2hhbmdlLmVtaXQoJGV2ZW50KTtcbiAgfVxuXG4gIG9uSGV4Q2hhbmdlKGhleDogc3RyaW5nKSB7XG4gICAgY29uc3QgaHN2ID0gZ2V0SHN2RnJvbUhleChoZXgpO1xuICAgIHRoaXMuaHN2Q2hhbmdlLmVtaXQoaHN2KTtcbiAgfVxufVxuIiwiXG48bmdsLWNvbG9ycGlja2VyLXJhbmdlIFtoc3ZdPVwiaHN2XCIgKGhzdkNoYW5nZSk9XCJvbkhzdkNoYW5nZSgkZXZlbnQpXCI+PC9uZ2wtY29sb3JwaWNrZXItcmFuZ2U+XG48bmdsLWNvbG9ycGlja2VyLWlucHV0cyBbaGV4XT1cImhleFwiIChoZXhDaGFuZ2UpPVwib25IZXhDaGFuZ2UoJGV2ZW50KVwiPjwvbmdsLWNvbG9ycGlja2VyLWlucHV0cz4iXX0=
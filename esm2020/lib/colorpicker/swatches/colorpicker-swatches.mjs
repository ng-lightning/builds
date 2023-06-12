import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter, HostListener, ViewChildren } from '@angular/core';
import { LEFT_ARROW, DOWN_ARROW, UP_ARROW, RIGHT_ARROW } from '@angular/cdk/keycodes';
import { trapEvent } from '../../util/util';
import { NglColorpickerSwatchTrigger } from './trigger';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../swatch/colorpicker-swatch";
import * as i3 from "./trigger";
export class NglColorpickerSwatches {
    constructor(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.hexChange = new EventEmitter();
        this.swatchColors = [];
        this.renderer.addClass(this.el.nativeElement, 'slds-color-picker__swatches');
    }
    ngOnChanges() {
        this.activeIndex = Math.max(this.swatchColors.indexOf(this.hex), 0);
    }
    onSelectViaInteraction(evt) {
        let direction = 0;
        switch (evt.keyCode) {
            case LEFT_ARROW:
            case UP_ARROW:
                direction = -1;
                break;
            case RIGHT_ARROW:
            case DOWN_ARROW:
                direction = 1;
                break;
            default:
                return;
        }
        trapEvent(evt);
        const activeIndex = this.swatchColors.indexOf(this.hex);
        const index = (this.triggers.length + activeIndex + direction) % this.triggers.length;
        const trigger = this.triggers.toArray()[index];
        trigger.focus();
    }
    isSelected(hex) {
        return hex === this.hex;
    }
    onSelect(hex) {
        this.hexChange.emit(hex);
    }
}
NglColorpickerSwatches.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglColorpickerSwatches, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Component });
NglColorpickerSwatches.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: NglColorpickerSwatches, selector: "ngl-colorpicker-swatches", inputs: { hex: "hex", swatchColors: "swatchColors" }, outputs: { hexChange: "hexChange" }, host: { listeners: { "keydown": "onSelectViaInteraction($event)" } }, viewQueries: [{ propertyName: "triggers", predicate: NglColorpickerSwatchTrigger, descendants: true }], usesOnChanges: true, ngImport: i0, template: "\n<li class=\"slds-color-picker__swatch\" *ngFor=\"let color of swatchColors; let i = index\" role=\"presentation\"><a nglColorpickerSwatchTrigger href=\"javascript:void(0);\" [selected]=\"isSelected(color)\" [attr.tabindex]=\"activeIndex === i ? 0 : -1\" (selectedChange)=\"onSelect(color)\"><span nglColorpickerSwatch [color]=\"color\"></span></a></li>", styles: [".ngl-color-picker__swatch-selected{box-shadow:#757070 1px 1px 1px}\n"], dependencies: [{ kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "component", type: i2.NglColorpickerSwatch, selector: "[nglColorpickerSwatch]", inputs: ["color"] }, { kind: "directive", type: i3.NglColorpickerSwatchTrigger, selector: "[nglColorpickerSwatchTrigger]", inputs: ["selected"], outputs: ["selectedChange"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglColorpickerSwatches, decorators: [{
            type: Component,
            args: [{ selector: 'ngl-colorpicker-swatches', changeDetection: ChangeDetectionStrategy.OnPush, template: "\n<li class=\"slds-color-picker__swatch\" *ngFor=\"let color of swatchColors; let i = index\" role=\"presentation\"><a nglColorpickerSwatchTrigger href=\"javascript:void(0);\" [selected]=\"isSelected(color)\" [attr.tabindex]=\"activeIndex === i ? 0 : -1\" (selectedChange)=\"onSelect(color)\"><span nglColorpickerSwatch [color]=\"color\"></span></a></li>", styles: [".ngl-color-picker__swatch-selected{box-shadow:#757070 1px 1px 1px}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }]; }, propDecorators: { hex: [{
                type: Input
            }], hexChange: [{
                type: Output
            }], swatchColors: [{
                type: Input
            }], triggers: [{
                type: ViewChildren,
                args: [NglColorpickerSwatchTrigger]
            }], onSelectViaInteraction: [{
                type: HostListener,
                args: ['keydown', ['$event']]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sb3JwaWNrZXItc3dhdGNoZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1saWdodG5pbmcvc3JjL2xpYi9jb2xvcnBpY2tlci9zd2F0Y2hlcy9jb2xvcnBpY2tlci1zd2F0Y2hlcy50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nLWxpZ2h0bmluZy9zcmMvbGliL2NvbG9ycGlja2VyL3N3YXRjaGVzL2NvbG9ycGlja2VyLXN3YXRjaGVzLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBeUIsdUJBQXVCLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQzdGLFlBQVksRUFBRSxZQUFZLEVBQXdCLE1BQU0sZUFBZSxDQUFDO0FBQzFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUN0RixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDNUMsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sV0FBVyxDQUFDOzs7OztBQVl4RCxNQUFNLE9BQU8sc0JBQXNCO0lBWWpDLFlBQW9CLEVBQWMsRUFBVSxRQUFtQjtRQUEzQyxPQUFFLEdBQUYsRUFBRSxDQUFZO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQVJyRCxjQUFTLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUV4QyxpQkFBWSxHQUFhLEVBQUUsQ0FBQztRQU9uQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSw2QkFBNkIsQ0FBQyxDQUFDO0lBQy9FLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUN0RSxDQUFDO0lBR0Qsc0JBQXNCLENBQUMsR0FBa0I7UUFDdkMsSUFBSSxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQ2xCLFFBQVEsR0FBRyxDQUFDLE9BQU8sRUFBRTtZQUNuQixLQUFLLFVBQVUsQ0FBQztZQUNoQixLQUFLLFFBQVE7Z0JBQ1gsU0FBUyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUNmLE1BQU07WUFDUixLQUFLLFdBQVcsQ0FBQztZQUNqQixLQUFLLFVBQVU7Z0JBQ2IsU0FBUyxHQUFHLENBQUMsQ0FBQztnQkFDZCxNQUFNO1lBQ1I7Z0JBQ0UsT0FBTztTQUNWO1FBRUQsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRWYsTUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRXhELE1BQU0sS0FBSyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsV0FBVyxHQUFHLFNBQVMsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO1FBQ3RGLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDL0MsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2xCLENBQUM7SUFFRCxVQUFVLENBQUMsR0FBVztRQUNwQixPQUFPLEdBQUcsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDO0lBQzFCLENBQUM7SUFFRCxRQUFRLENBQUMsR0FBVztRQUNsQixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMzQixDQUFDOzttSEFuRFUsc0JBQXNCO3VHQUF0QixzQkFBc0IsOFBBUW5CLDJCQUEyQixxRUN4QjNDLG9XQUNnVjsyRkRlblUsc0JBQXNCO2tCQVZsQyxTQUFTOytCQUNFLDBCQUEwQixtQkFFbkIsdUJBQXVCLENBQUMsTUFBTTt5SEFTdEMsR0FBRztzQkFBWCxLQUFLO2dCQUVJLFNBQVM7c0JBQWxCLE1BQU07Z0JBRUUsWUFBWTtzQkFBcEIsS0FBSztnQkFFOEMsUUFBUTtzQkFBM0QsWUFBWTt1QkFBQywyQkFBMkI7Z0JBYXpDLHNCQUFzQjtzQkFEckIsWUFBWTt1QkFBQyxTQUFTLEVBQUUsQ0FBQyxRQUFRLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIFJlbmRlcmVyMiwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlcixcbiAgSG9zdExpc3RlbmVyLCBWaWV3Q2hpbGRyZW4sIFF1ZXJ5TGlzdCwgT25DaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMRUZUX0FSUk9XLCBET1dOX0FSUk9XLCBVUF9BUlJPVywgUklHSFRfQVJST1cgfSBmcm9tICdAYW5ndWxhci9jZGsva2V5Y29kZXMnO1xuaW1wb3J0IHsgdHJhcEV2ZW50IH0gZnJvbSAnLi4vLi4vdXRpbC91dGlsJztcbmltcG9ydCB7IE5nbENvbG9ycGlja2VyU3dhdGNoVHJpZ2dlciB9IGZyb20gJy4vdHJpZ2dlcic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25nbC1jb2xvcnBpY2tlci1zd2F0Y2hlcycsXG4gIHRlbXBsYXRlVXJsOiAnLi9jb2xvcnBpY2tlci1zd2F0Y2hlcy5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHN0eWxlczogW2BcbiAgICAubmdsLWNvbG9yLXBpY2tlcl9fc3dhdGNoLXNlbGVjdGVkIHtcbiAgICAgIGJveC1zaGFkb3c6IHJnYigxMTcsIDExMiwgMTEyKSAxcHggMXB4IDFweDtcbiAgICB9XG4gIGBdXG59KVxuZXhwb3J0IGNsYXNzIE5nbENvbG9ycGlja2VyU3dhdGNoZXMgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuXG4gIEBJbnB1dCgpIGhleDogc3RyaW5nO1xuXG4gIEBPdXRwdXQoKSBoZXhDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcblxuICBASW5wdXQoKSBzd2F0Y2hDb2xvcnM6IHN0cmluZ1tdID0gW107XG5cbiAgQFZpZXdDaGlsZHJlbihOZ2xDb2xvcnBpY2tlclN3YXRjaFRyaWdnZXIpIHJlYWRvbmx5IHRyaWdnZXJzOiBRdWVyeUxpc3Q8TmdsQ29sb3JwaWNrZXJTd2F0Y2hUcmlnZ2VyPjtcblxuICBhY3RpdmVJbmRleDogbnVtYmVyO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMikge1xuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbC5uYXRpdmVFbGVtZW50LCAnc2xkcy1jb2xvci1waWNrZXJfX3N3YXRjaGVzJyk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpIHtcbiAgICB0aGlzLmFjdGl2ZUluZGV4ID0gTWF0aC5tYXgodGhpcy5zd2F0Y2hDb2xvcnMuaW5kZXhPZih0aGlzLmhleCksIDApO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcigna2V5ZG93bicsIFsnJGV2ZW50J10pXG4gIG9uU2VsZWN0VmlhSW50ZXJhY3Rpb24oZXZ0OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgbGV0IGRpcmVjdGlvbiA9IDA7XG4gICAgc3dpdGNoIChldnQua2V5Q29kZSkge1xuICAgICAgY2FzZSBMRUZUX0FSUk9XOlxuICAgICAgY2FzZSBVUF9BUlJPVzpcbiAgICAgICAgZGlyZWN0aW9uID0gLTE7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBSSUdIVF9BUlJPVzpcbiAgICAgIGNhc2UgRE9XTl9BUlJPVzpcbiAgICAgICAgZGlyZWN0aW9uID0gMTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdHJhcEV2ZW50KGV2dCk7XG5cbiAgICBjb25zdCBhY3RpdmVJbmRleCA9IHRoaXMuc3dhdGNoQ29sb3JzLmluZGV4T2YodGhpcy5oZXgpO1xuXG4gICAgY29uc3QgaW5kZXggPSAodGhpcy50cmlnZ2Vycy5sZW5ndGggKyBhY3RpdmVJbmRleCArIGRpcmVjdGlvbikgJSB0aGlzLnRyaWdnZXJzLmxlbmd0aDtcbiAgICBjb25zdCB0cmlnZ2VyID0gdGhpcy50cmlnZ2Vycy50b0FycmF5KClbaW5kZXhdO1xuICAgIHRyaWdnZXIuZm9jdXMoKTtcbiAgfVxuXG4gIGlzU2VsZWN0ZWQoaGV4OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gaGV4ID09PSB0aGlzLmhleDtcbiAgfVxuXG4gIG9uU2VsZWN0KGhleDogc3RyaW5nKSB7XG4gICAgdGhpcy5oZXhDaGFuZ2UuZW1pdChoZXgpO1xuICB9XG59XG4iLCJcbjxsaSBjbGFzcz1cInNsZHMtY29sb3ItcGlja2VyX19zd2F0Y2hcIiAqbmdGb3I9XCJsZXQgY29sb3Igb2Ygc3dhdGNoQ29sb3JzOyBsZXQgaSA9IGluZGV4XCIgcm9sZT1cInByZXNlbnRhdGlvblwiPjxhIG5nbENvbG9ycGlja2VyU3dhdGNoVHJpZ2dlciBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApO1wiIFtzZWxlY3RlZF09XCJpc1NlbGVjdGVkKGNvbG9yKVwiIFthdHRyLnRhYmluZGV4XT1cImFjdGl2ZUluZGV4ID09PSBpID8gMCA6IC0xXCIgKHNlbGVjdGVkQ2hhbmdlKT1cIm9uU2VsZWN0KGNvbG9yKVwiPjxzcGFuIG5nbENvbG9ycGlja2VyU3dhdGNoIFtjb2xvcl09XCJjb2xvclwiPjwvc3Bhbj48L2E+PC9saT4iXX0=
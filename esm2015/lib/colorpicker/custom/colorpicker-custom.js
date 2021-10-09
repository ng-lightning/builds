import { Component, ElementRef, Renderer2, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { getHexFromHsv, getHsvFromHex } from '../util';
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
NglColorpickerCustom.decorators = [
    { type: Component, args: [{
                selector: 'ngl-colorpicker-custom',
                template: "\n<ngl-colorpicker-range [hsv]=\"hsv\" (hsvChange)=\"onHsvChange($event)\"></ngl-colorpicker-range>\n<ngl-colorpicker-inputs [hex]=\"hex\" (hexChange)=\"onHexChange($event)\"></ngl-colorpicker-inputs>",
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
NglColorpickerCustom.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
NglColorpickerCustom.propDecorators = {
    hsv: [{ type: Input }],
    hsvChange: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sb3JwaWNrZXItY3VzdG9tLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctbGlnaHRuaW5nL3NyYy9saWIvY29sb3JwaWNrZXIvY3VzdG9tL2NvbG9ycGlja2VyLWN1c3RvbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsdUJBQXVCLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQTRCLE1BQU0sZUFBZSxDQUFDO0FBQ2pKLE9BQU8sRUFBUSxhQUFhLEVBQUUsYUFBYSxFQUFFLE1BQU0sU0FBUyxDQUFDO0FBTzdELE1BQU0sT0FBTyxvQkFBb0I7SUFRL0IsWUFBb0IsRUFBYyxFQUFVLFFBQW1CO1FBQTNDLE9BQUUsR0FBRixFQUFFLENBQVk7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBSnJELGNBQVMsR0FBRyxJQUFJLFlBQVksRUFBUSxDQUFDO1FBSzdDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLDJCQUEyQixDQUFDLENBQUM7SUFDN0UsQ0FBQztJQUVELFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxJQUFJLE9BQU8sQ0FBQyxHQUFHLEVBQUU7WUFDZixJQUFJLENBQUMsR0FBRyxHQUFHLGFBQWEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDcEM7SUFDSCxDQUFDO0lBRUQsV0FBVyxDQUFDLE1BQVk7UUFDdEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUVELFdBQVcsQ0FBQyxHQUFXO1FBQ3JCLE1BQU0sR0FBRyxHQUFHLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUMvQixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMzQixDQUFDOzs7WUE5QkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSx3QkFBd0I7Z0JBQ2xDLG9OQUF3QztnQkFDeEMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDaEQ7OztZQVBtQixVQUFVO1lBQUUsU0FBUzs7O2tCQVV0QyxLQUFLO3dCQUVMLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIFJlbmRlcmVyMiwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJSFNWLCBnZXRIZXhGcm9tSHN2LCBnZXRIc3ZGcm9tSGV4IH0gZnJvbSAnLi4vdXRpbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25nbC1jb2xvcnBpY2tlci1jdXN0b20nLFxuICB0ZW1wbGF0ZVVybDogJy4vY29sb3JwaWNrZXItY3VzdG9tLmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgTmdsQ29sb3JwaWNrZXJDdXN0b20gaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuXG4gIEBJbnB1dCgpIHJlYWRvbmx5IGhzdjogSUhTVjtcblxuICBAT3V0cHV0KCkgaHN2Q2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxJSFNWPigpO1xuXG4gIGhleDogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMikge1xuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbC5uYXRpdmVFbGVtZW50LCAnc2xkcy1jb2xvci1waWNrZXJfX2N1c3RvbScpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIGlmIChjaGFuZ2VzLmhzdikge1xuICAgICAgdGhpcy5oZXggPSBnZXRIZXhGcm9tSHN2KHRoaXMuaHN2KTtcbiAgICB9XG4gIH1cblxuICBvbkhzdkNoYW5nZSgkZXZlbnQ6IElIU1YpIHtcbiAgICB0aGlzLmhzdkNoYW5nZS5lbWl0KCRldmVudCk7XG4gIH1cblxuICBvbkhleENoYW5nZShoZXg6IHN0cmluZykge1xuICAgIGNvbnN0IGhzdiA9IGdldEhzdkZyb21IZXgoaGV4KTtcbiAgICB0aGlzLmhzdkNoYW5nZS5lbWl0KGhzdik7XG4gIH1cbn1cbiJdfQ==
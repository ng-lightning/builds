import { Component, ElementRef, Renderer2, ChangeDetectionStrategy, Input, Output, EventEmitter, HostListener, ViewChildren } from '@angular/core';
import { LEFT_ARROW, DOWN_ARROW, UP_ARROW, RIGHT_ARROW } from '@angular/cdk/keycodes';
import { trapEvent } from '../../util/util';
import { NglColorpickerSwatchTrigger } from './trigger';
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
NglColorpickerSwatches.decorators = [
    { type: Component, args: [{
                selector: 'ngl-colorpicker-swatches',
                template: "\n<li class=\"slds-color-picker__swatch\" *ngFor=\"let color of swatchColors; let i = index\" role=\"presentation\"><a nglColorpickerSwatchTrigger href=\"javascript:void(0);\" [selected]=\"isSelected(color)\" [attr.tabindex]=\"activeIndex === i ? 0 : -1\" (selectedChange)=\"onSelect(color)\"><span nglColorpickerSwatch [color]=\"color\"></span></a></li>",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [`
    .ngl-color-picker__swatch-selected {
      box-shadow: rgb(117, 112, 112) 1px 1px 1px;
    }
  `]
            },] }
];
NglColorpickerSwatches.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
NglColorpickerSwatches.propDecorators = {
    hex: [{ type: Input }],
    hexChange: [{ type: Output }],
    swatchColors: [{ type: Input }],
    triggers: [{ type: ViewChildren, args: [NglColorpickerSwatchTrigger,] }],
    onSelectViaInteraction: [{ type: HostListener, args: ['keydown', ['$event'],] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sb3JwaWNrZXItc3dhdGNoZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1saWdodG5pbmcvc3JjL2xpYi9jb2xvcnBpY2tlci9zd2F0Y2hlcy9jb2xvcnBpY2tlci1zd2F0Y2hlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsdUJBQXVCLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQzdGLFlBQVksRUFBRSxZQUFZLEVBQXdCLE1BQU0sZUFBZSxDQUFDO0FBQzFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUN0RixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDNUMsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sV0FBVyxDQUFDO0FBWXhELE1BQU0sT0FBTyxzQkFBc0I7SUFZakMsWUFBb0IsRUFBYyxFQUFVLFFBQW1CO1FBQTNDLE9BQUUsR0FBRixFQUFFLENBQVk7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBUnJELGNBQVMsR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO1FBRXhDLGlCQUFZLEdBQWEsRUFBRSxDQUFDO1FBT25DLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLDZCQUE2QixDQUFDLENBQUM7SUFDL0UsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3RFLENBQUM7SUFHRCxzQkFBc0IsQ0FBQyxHQUFrQjtRQUN2QyxJQUFJLFNBQVMsR0FBRyxDQUFDLENBQUM7UUFDbEIsUUFBUSxHQUFHLENBQUMsT0FBTyxFQUFFO1lBQ25CLEtBQUssVUFBVSxDQUFDO1lBQ2hCLEtBQUssUUFBUTtnQkFDWCxTQUFTLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ2YsTUFBTTtZQUNSLEtBQUssV0FBVyxDQUFDO1lBQ2pCLEtBQUssVUFBVTtnQkFDYixTQUFTLEdBQUcsQ0FBQyxDQUFDO2dCQUNkLE1BQU07WUFDUjtnQkFDRSxPQUFPO1NBQ1Y7UUFFRCxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFZixNQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFeEQsTUFBTSxLQUFLLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxXQUFXLEdBQUcsU0FBUyxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7UUFDdEYsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMvQyxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDbEIsQ0FBQztJQUVELFVBQVUsQ0FBQyxHQUFXO1FBQ3BCLE9BQU8sR0FBRyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUM7SUFDMUIsQ0FBQztJQUVELFFBQVEsQ0FBQyxHQUFXO1FBQ2xCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzNCLENBQUM7OztZQTdERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDBCQUEwQjtnQkFDcEMsOFdBQTBDO2dCQUMxQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTt5QkFDdEM7Ozs7R0FJUjthQUNGOzs7WUFmbUIsVUFBVTtZQUFFLFNBQVM7OztrQkFrQnRDLEtBQUs7d0JBRUwsTUFBTTsyQkFFTixLQUFLO3VCQUVMLFlBQVksU0FBQywyQkFBMkI7cUNBWXhDLFlBQVksU0FBQyxTQUFTLEVBQUUsQ0FBQyxRQUFRLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIFJlbmRlcmVyMiwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlcixcbiAgSG9zdExpc3RlbmVyLCBWaWV3Q2hpbGRyZW4sIFF1ZXJ5TGlzdCwgT25DaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMRUZUX0FSUk9XLCBET1dOX0FSUk9XLCBVUF9BUlJPVywgUklHSFRfQVJST1cgfSBmcm9tICdAYW5ndWxhci9jZGsva2V5Y29kZXMnO1xuaW1wb3J0IHsgdHJhcEV2ZW50IH0gZnJvbSAnLi4vLi4vdXRpbC91dGlsJztcbmltcG9ydCB7IE5nbENvbG9ycGlja2VyU3dhdGNoVHJpZ2dlciB9IGZyb20gJy4vdHJpZ2dlcic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25nbC1jb2xvcnBpY2tlci1zd2F0Y2hlcycsXG4gIHRlbXBsYXRlVXJsOiAnLi9jb2xvcnBpY2tlci1zd2F0Y2hlcy5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHN0eWxlczogW2BcbiAgICAubmdsLWNvbG9yLXBpY2tlcl9fc3dhdGNoLXNlbGVjdGVkIHtcbiAgICAgIGJveC1zaGFkb3c6IHJnYigxMTcsIDExMiwgMTEyKSAxcHggMXB4IDFweDtcbiAgICB9XG4gIGBdXG59KVxuZXhwb3J0IGNsYXNzIE5nbENvbG9ycGlja2VyU3dhdGNoZXMgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuXG4gIEBJbnB1dCgpIHJlYWRvbmx5IGhleDogc3RyaW5nO1xuXG4gIEBPdXRwdXQoKSBoZXhDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcblxuICBASW5wdXQoKSBzd2F0Y2hDb2xvcnM6IHN0cmluZ1tdID0gW107XG5cbiAgQFZpZXdDaGlsZHJlbihOZ2xDb2xvcnBpY2tlclN3YXRjaFRyaWdnZXIpIHJlYWRvbmx5IHRyaWdnZXJzOiBRdWVyeUxpc3Q8TmdsQ29sb3JwaWNrZXJTd2F0Y2hUcmlnZ2VyPjtcblxuICBhY3RpdmVJbmRleDogbnVtYmVyO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMikge1xuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbC5uYXRpdmVFbGVtZW50LCAnc2xkcy1jb2xvci1waWNrZXJfX3N3YXRjaGVzJyk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpIHtcbiAgICB0aGlzLmFjdGl2ZUluZGV4ID0gTWF0aC5tYXgodGhpcy5zd2F0Y2hDb2xvcnMuaW5kZXhPZih0aGlzLmhleCksIDApO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcigna2V5ZG93bicsIFsnJGV2ZW50J10pXG4gIG9uU2VsZWN0VmlhSW50ZXJhY3Rpb24oZXZ0OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgbGV0IGRpcmVjdGlvbiA9IDA7XG4gICAgc3dpdGNoIChldnQua2V5Q29kZSkge1xuICAgICAgY2FzZSBMRUZUX0FSUk9XOlxuICAgICAgY2FzZSBVUF9BUlJPVzpcbiAgICAgICAgZGlyZWN0aW9uID0gLTE7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBSSUdIVF9BUlJPVzpcbiAgICAgIGNhc2UgRE9XTl9BUlJPVzpcbiAgICAgICAgZGlyZWN0aW9uID0gMTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdHJhcEV2ZW50KGV2dCk7XG5cbiAgICBjb25zdCBhY3RpdmVJbmRleCA9IHRoaXMuc3dhdGNoQ29sb3JzLmluZGV4T2YodGhpcy5oZXgpO1xuXG4gICAgY29uc3QgaW5kZXggPSAodGhpcy50cmlnZ2Vycy5sZW5ndGggKyBhY3RpdmVJbmRleCArIGRpcmVjdGlvbikgJSB0aGlzLnRyaWdnZXJzLmxlbmd0aDtcbiAgICBjb25zdCB0cmlnZ2VyID0gdGhpcy50cmlnZ2Vycy50b0FycmF5KClbaW5kZXhdO1xuICAgIHRyaWdnZXIuZm9jdXMoKTtcbiAgfVxuXG4gIGlzU2VsZWN0ZWQoaGV4OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gaGV4ID09PSB0aGlzLmhleDtcbiAgfVxuXG4gIG9uU2VsZWN0KGhleDogc3RyaW5nKSB7XG4gICAgdGhpcy5oZXhDaGFuZ2UuZW1pdChoZXgpO1xuICB9XG59XG4iXX0=
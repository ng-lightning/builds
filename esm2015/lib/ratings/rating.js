import { __decorate } from "tslib";
import { Component, Input, ChangeDetectionStrategy, Output, EventEmitter, HostListener, HostBinding, ContentChild, ViewChild, Optional, Inject } from '@angular/core';
import { NglRatingIconTemplate } from './icons';
import { InputBoolean } from '../util/convert';
import { NGL_RATING_CONFIG, NglRatingConfig } from './config';
export class NglRating {
    constructor(defaultConfig) {
        this.range = [];
        this.icon = 'favorite';
        this.readonly = false;
        this.rateChange = new EventEmitter();
        this.hover = new EventEmitter();
        this._max = 5;
        const config = Object.assign(Object.assign({}, new NglRatingConfig()), defaultConfig);
        this.colorOn = config.colorOn;
        this.colorOff = config.colorOff;
    }
    set rate(rate) {
        this.inputRate = rate;
        this.currentRate = rate;
    }
    set max(max) {
        this._max = +max;
        this.setRange();
    }
    get max() {
        return this._max;
    }
    ngOnInit() {
        this.setRange();
    }
    ngAfterContentInit() {
        this._template = this.iconTemplate ? this.iconTemplate.templateRef : this.defaultTemplate;
    }
    update(value) {
        if (value < 1 || value > this.max || this.readonly || value === this.inputRate) {
            return;
        }
        this.rateChange.emit(value);
    }
    enter(value) {
        if (this.readonly) {
            return;
        }
        this.currentRate = value;
        this.hover.emit(value);
    }
    getFill(value) {
        if (value <= this.currentRate) {
            return 100;
        }
        if (Math.ceil(this.currentRate) < value) {
            return 0;
        }
        return Math.round(100 * (this.currentRate % 1));
    }
    reset() {
        this.currentRate = this.inputRate;
    }
    // Keyboard interactions
    keyboardIncrease(evt) {
        evt.preventDefault();
        this.update(this.inputRate + 1);
    }
    keyboardDecrease(evt) {
        evt.preventDefault();
        this.update(this.inputRate - 1);
    }
    // ARIA
    get ariaValuenow() {
        return this.inputRate;
    }
    setRange() {
        this.range = Array.apply(null, { length: this.max }).map((value, index) => index + 1);
    }
}
NglRating.decorators = [
    { type: Component, args: [{
                selector: 'ngl-rating',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: "\n<ng-template #t let-fill=\"fill\">\n  <svg class=\"slds-icon\" [nglIconName]=\"icon\" [ngClass]=\"size ? 'slds-icon_' + size : ''\" [style.fill]=\"fill === 100 ? colorOn : colorOff\"></svg>\n  <svg class=\"slds-icon\" *ngIf=\"fill &gt; 0 &amp;&amp; fill &lt; 100\" [nglIconName]=\"icon\" [ngClass]=\"size ? 'slds-icon_' + size : ''\" [style.fill]=\"colorOn\" style=\"position:absolute; bottom:0;\" [style.left.%]=\"fill - 100\" [xPos]=\"(100 - fill) + '%'\"></svg>\n</ng-template>\n<div class=\"slds-show_inline-block\" *ngFor=\"let r of range; let i = index\" (click)=\"update(r)\" (mouseenter)=\"enter(r)\" style=\"position: relative;\">\n  <ng-template [ngTemplateOutlet]=\"_template\" [ngTemplateOutletContext]=\"{$implicit: r &lt;= currentRate, index: i, fill: getFill(r)}\"></ng-template>\n</div>",
                host: {
                    'style': 'white-space: nowrap;',
                    'tabindex': '0',
                    'aria-valuemin': '0',
                    '[attr.aria-valuemax]': 'max',
                }
            },] }
];
NglRating.ctorParameters = () => [
    { type: NglRatingConfig, decorators: [{ type: Optional }, { type: Inject, args: [NGL_RATING_CONFIG,] }] }
];
NglRating.propDecorators = {
    icon: [{ type: Input }],
    size: [{ type: Input }],
    readonly: [{ type: Input, args: ['isReadonly',] }],
    rate: [{ type: Input }],
    defaultTemplate: [{ type: ViewChild, args: ['t', { static: true },] }],
    iconTemplate: [{ type: ContentChild, args: [NglRatingIconTemplate,] }],
    max: [{ type: Input }],
    colorOn: [{ type: Input }],
    colorOff: [{ type: Input }],
    rateChange: [{ type: Output }],
    hover: [{ type: Output }],
    reset: [{ type: HostListener, args: ['mouseleave',] }],
    keyboardIncrease: [{ type: HostListener, args: ['keydown.ArrowUp', ['$event'],] }, { type: HostListener, args: ['keydown.ArrowRight', ['$event'],] }],
    keyboardDecrease: [{ type: HostListener, args: ['keydown.ArrowDown', ['$event'],] }, { type: HostListener, args: ['keydown.ArrowLeft', ['$event'],] }],
    ariaValuenow: [{ type: HostBinding, args: ['attr.aria-valuenow',] }]
};
__decorate([
    InputBoolean()
], NglRating.prototype, "readonly", void 0);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmF0aW5nLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctbGlnaHRuaW5nL3NyYy9saWIvcmF0aW5ncy9yYXRpbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUM5RSxXQUFXLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBeUMsUUFBUSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3SCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFDaEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxlQUFlLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFhOUQsTUFBTSxPQUFPLFNBQVM7SUFxQ3BCLFlBQW1ELGFBQThCO1FBbkNqRixVQUFLLEdBQWEsRUFBRSxDQUFDO1FBR1osU0FBSSxHQUFHLFVBQVUsQ0FBQztRQUlVLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFxQjVDLGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO1FBQ3hDLFVBQUssR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO1FBR3JDLFNBQUksR0FBRyxDQUFDLENBQUM7UUFJZixNQUFNLE1BQU0sbUNBQVEsSUFBSSxlQUFlLEVBQUUsR0FBSyxhQUFhLENBQUUsQ0FBQztRQUM5RCxJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUM7UUFDOUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDO0lBQ2xDLENBQUM7SUE5QkQsSUFBYSxJQUFJLENBQUMsSUFBWTtRQUM1QixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUN0QixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztJQUMxQixDQUFDO0lBS0QsSUFBYSxHQUFHLENBQUMsR0FBb0I7UUFDbkMsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLEdBQUcsQ0FBQztRQUNqQixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDbEIsQ0FBQztJQUNELElBQUksR0FBRztRQUNMLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztJQUNuQixDQUFDO0lBa0JELFFBQVE7UUFDTixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDbEIsQ0FBQztJQUVELGtCQUFrQjtRQUNoQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDO0lBQzVGLENBQUM7SUFFRCxNQUFNLENBQUMsS0FBYTtRQUNsQixJQUFJLEtBQUssR0FBRyxDQUFDLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxLQUFLLEtBQUssSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUFFLE9BQU87U0FBRTtRQUMzRixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBRUQsS0FBSyxDQUFDLEtBQWE7UUFDakIsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQUUsT0FBTztTQUFFO1FBRTlCLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3pCLENBQUM7SUFFRCxPQUFPLENBQUMsS0FBYTtRQUNuQixJQUFJLEtBQUssSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQzdCLE9BQU8sR0FBRyxDQUFDO1NBQ1o7UUFDRCxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLEtBQUssRUFBRTtZQUN2QyxPQUFPLENBQUMsQ0FBQztTQUNWO1FBRUQsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBRTJCLEtBQUs7UUFDL0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3BDLENBQUM7SUFFRCx3QkFBd0I7SUFHeEIsZ0JBQWdCLENBQUMsR0FBa0I7UUFDakMsR0FBRyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBSUQsZ0JBQWdCLENBQUMsR0FBa0I7UUFDakMsR0FBRyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRUQsT0FBTztJQUNQLElBQXVDLFlBQVk7UUFDakQsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3hCLENBQUM7SUFFTyxRQUFRO1FBQ2QsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxFQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFVLEVBQUUsS0FBYSxFQUFFLEVBQUUsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDbkcsQ0FBQzs7O1lBL0dGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsWUFBWTtnQkFDdEIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLGd6QkFBNEI7Z0JBQzVCLElBQUksRUFBRTtvQkFDSixPQUFPLEVBQUUsc0JBQXNCO29CQUMvQixVQUFVLEVBQUUsR0FBRztvQkFDZixlQUFlLEVBQUUsR0FBRztvQkFDcEIsc0JBQXNCLEVBQUUsS0FBSztpQkFDOUI7YUFDRjs7O1lBWjJCLGVBQWUsdUJBa0Q1QixRQUFRLFlBQUksTUFBTSxTQUFDLGlCQUFpQjs7O21CQWhDaEQsS0FBSzttQkFFTCxLQUFLO3VCQUVMLEtBQUssU0FBQyxZQUFZO21CQUVsQixLQUFLOzhCQUtMLFNBQVMsU0FBQyxHQUFHLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFOzJCQUMvQixZQUFZLFNBQUMscUJBQXFCO2tCQUVsQyxLQUFLO3NCQVFMLEtBQUs7dUJBQ0wsS0FBSzt5QkFFTCxNQUFNO29CQUNOLE1BQU07b0JBMkNOLFlBQVksU0FBQyxZQUFZOytCQUt6QixZQUFZLFNBQUMsaUJBQWlCLEVBQUUsQ0FBQyxRQUFRLENBQUMsY0FDMUMsWUFBWSxTQUFDLG9CQUFvQixFQUFFLENBQUMsUUFBUSxDQUFDOytCQU03QyxZQUFZLFNBQUMsbUJBQW1CLEVBQUUsQ0FBQyxRQUFRLENBQUMsY0FDNUMsWUFBWSxTQUFDLG1CQUFtQixFQUFFLENBQUMsUUFBUSxDQUFDOzJCQU81QyxXQUFXLFNBQUMsb0JBQW9COztBQXJGSTtJQUFmLFlBQVksRUFBRTsyQ0FBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIEhvc3RMaXN0ZW5lcixcbiAgICAgICAgSG9zdEJpbmRpbmcsIENvbnRlbnRDaGlsZCwgVmlld0NoaWxkLCBUZW1wbGF0ZVJlZiwgT25Jbml0LCBBZnRlckNvbnRlbnRJbml0LCBPcHRpb25hbCwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ2xSYXRpbmdJY29uVGVtcGxhdGUgfSBmcm9tICcuL2ljb25zJztcbmltcG9ydCB7IElucHV0Qm9vbGVhbiB9IGZyb20gJy4uL3V0aWwvY29udmVydCc7XG5pbXBvcnQgeyBOR0xfUkFUSU5HX0NPTkZJRywgTmdsUmF0aW5nQ29uZmlnIH0gZnJvbSAnLi9jb25maWcnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZ2wtcmF0aW5nJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHRlbXBsYXRlVXJsOiAnLi9yYXRpbmcuaHRtbCcsXG4gIGhvc3Q6IHtcbiAgICAnc3R5bGUnOiAnd2hpdGUtc3BhY2U6IG5vd3JhcDsnLFxuICAgICd0YWJpbmRleCc6ICcwJyxcbiAgICAnYXJpYS12YWx1ZW1pbic6ICcwJyxcbiAgICAnW2F0dHIuYXJpYS12YWx1ZW1heF0nOiAnbWF4JyxcbiAgfSxcbn0pXG5leHBvcnQgY2xhc3MgTmdsUmF0aW5nIGltcGxlbWVudHMgT25Jbml0LCBBZnRlckNvbnRlbnRJbml0IHtcblxuICByYW5nZTogbnVtYmVyW10gPSBbXTtcbiAgY3VycmVudFJhdGU6IG51bWJlcjtcblxuICBASW5wdXQoKSBpY29uID0gJ2Zhdm9yaXRlJztcblxuICBASW5wdXQoKSBzaXplOiAneC1zbWFsbCcgfCAnc21hbGwnIHwgJ2xhcmdlJztcblxuICBASW5wdXQoJ2lzUmVhZG9ubHknKSBASW5wdXRCb29sZWFuKCkgcmVhZG9ubHkgPSBmYWxzZTtcblxuICBASW5wdXQoKSBzZXQgcmF0ZShyYXRlOiBudW1iZXIpIHtcbiAgICB0aGlzLmlucHV0UmF0ZSA9IHJhdGU7XG4gICAgdGhpcy5jdXJyZW50UmF0ZSA9IHJhdGU7XG4gIH1cblxuICBAVmlld0NoaWxkKCd0JywgeyBzdGF0aWM6IHRydWUgfSkgZGVmYXVsdFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICBAQ29udGVudENoaWxkKE5nbFJhdGluZ0ljb25UZW1wbGF0ZSkgaWNvblRlbXBsYXRlOiBOZ2xSYXRpbmdJY29uVGVtcGxhdGU7XG5cbiAgQElucHV0KCkgc2V0IG1heChtYXg6IG51bWJlciB8IHN0cmluZykge1xuICAgIHRoaXMuX21heCA9ICttYXg7XG4gICAgdGhpcy5zZXRSYW5nZSgpO1xuICB9XG4gIGdldCBtYXgoKSB7XG4gICAgcmV0dXJuIHRoaXMuX21heDtcbiAgfVxuXG4gIEBJbnB1dCgpIGNvbG9yT246IHN0cmluZztcbiAgQElucHV0KCkgY29sb3JPZmY6IHN0cmluZztcblxuICBAT3V0cHV0KCkgcmF0ZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuICBAT3V0cHV0KCkgaG92ZXIgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcblxuICBfdGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG4gIHByaXZhdGUgX21heCA9IDU7XG4gIHByaXZhdGUgaW5wdXRSYXRlOiBudW1iZXI7XG5cbiAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgQEluamVjdChOR0xfUkFUSU5HX0NPTkZJRykgZGVmYXVsdENvbmZpZzogTmdsUmF0aW5nQ29uZmlnKSB7XG4gICAgY29uc3QgY29uZmlnID0geyAuLi5uZXcgTmdsUmF0aW5nQ29uZmlnKCksIC4uLmRlZmF1bHRDb25maWcgfTtcbiAgICB0aGlzLmNvbG9yT24gPSBjb25maWcuY29sb3JPbjtcbiAgICB0aGlzLmNvbG9yT2ZmID0gY29uZmlnLmNvbG9yT2ZmO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5zZXRSYW5nZSgpO1xuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAgIHRoaXMuX3RlbXBsYXRlID0gdGhpcy5pY29uVGVtcGxhdGUgPyB0aGlzLmljb25UZW1wbGF0ZS50ZW1wbGF0ZVJlZiA6IHRoaXMuZGVmYXVsdFRlbXBsYXRlO1xuICB9XG5cbiAgdXBkYXRlKHZhbHVlOiBudW1iZXIpIHtcbiAgICBpZiAodmFsdWUgPCAxIHx8IHZhbHVlID4gdGhpcy5tYXggfHwgdGhpcy5yZWFkb25seSB8fCB2YWx1ZSA9PT0gdGhpcy5pbnB1dFJhdGUpIHsgcmV0dXJuOyB9XG4gICAgdGhpcy5yYXRlQ2hhbmdlLmVtaXQodmFsdWUpO1xuICB9XG5cbiAgZW50ZXIodmFsdWU6IG51bWJlcikge1xuICAgIGlmICh0aGlzLnJlYWRvbmx5KSB7IHJldHVybjsgfVxuXG4gICAgdGhpcy5jdXJyZW50UmF0ZSA9IHZhbHVlO1xuICAgIHRoaXMuaG92ZXIuZW1pdCh2YWx1ZSk7XG4gIH1cblxuICBnZXRGaWxsKHZhbHVlOiBudW1iZXIpIHtcbiAgICBpZiAodmFsdWUgPD0gdGhpcy5jdXJyZW50UmF0ZSkge1xuICAgICAgcmV0dXJuIDEwMDtcbiAgICB9XG4gICAgaWYgKE1hdGguY2VpbCh0aGlzLmN1cnJlbnRSYXRlKSA8IHZhbHVlKSB7XG4gICAgICByZXR1cm4gMDtcbiAgICB9XG5cbiAgICByZXR1cm4gTWF0aC5yb3VuZCgxMDAgKiAodGhpcy5jdXJyZW50UmF0ZSAlIDEpKTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ21vdXNlbGVhdmUnKSByZXNldCgpIHtcbiAgICB0aGlzLmN1cnJlbnRSYXRlID0gdGhpcy5pbnB1dFJhdGU7XG4gIH1cblxuICAvLyBLZXlib2FyZCBpbnRlcmFjdGlvbnNcbiAgQEhvc3RMaXN0ZW5lcigna2V5ZG93bi5BcnJvd1VwJywgWyckZXZlbnQnXSlcbiAgQEhvc3RMaXN0ZW5lcigna2V5ZG93bi5BcnJvd1JpZ2h0JywgWyckZXZlbnQnXSlcbiAga2V5Ym9hcmRJbmNyZWFzZShldnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLnVwZGF0ZSh0aGlzLmlucHV0UmF0ZSArIDEpO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcigna2V5ZG93bi5BcnJvd0Rvd24nLCBbJyRldmVudCddKVxuICBASG9zdExpc3RlbmVyKCdrZXlkb3duLkFycm93TGVmdCcsIFsnJGV2ZW50J10pXG4gIGtleWJvYXJkRGVjcmVhc2UoZXZ0OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy51cGRhdGUodGhpcy5pbnB1dFJhdGUgLSAxKTtcbiAgfVxuXG4gIC8vIEFSSUFcbiAgQEhvc3RCaW5kaW5nKCdhdHRyLmFyaWEtdmFsdWVub3cnKSBnZXQgYXJpYVZhbHVlbm93KCkge1xuICAgIHJldHVybiB0aGlzLmlucHV0UmF0ZTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0UmFuZ2UoKSB7XG4gICAgdGhpcy5yYW5nZSA9IEFycmF5LmFwcGx5KG51bGwsIHtsZW5ndGg6IHRoaXMubWF4fSkubWFwKCh2YWx1ZTogYW55LCBpbmRleDogbnVtYmVyKSA9PiBpbmRleCArIDEpO1xuICB9XG59XG4iXX0=
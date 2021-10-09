import { Component, ChangeDetectionStrategy, Input, ViewChild, Output, EventEmitter, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { LEFT_ARROW, DOWN_ARROW, UP_ARROW, RIGHT_ARROW } from '@angular/cdk/keycodes';
import { flatMap, map, takeUntil, startWith } from 'rxjs/operators';
import { merge, fromEvent } from 'rxjs';
import { getHexFromHsv } from '../../util';
import { trapEvent, uniqueId } from '../../../util/util';
export class NglColorpickerRange {
    constructor(document) {
        this.document = document;
        this.hsvChange = new EventEmitter();
        this.uid = uniqueId('colorpicker-range');
        this._hsv = { hue: 0, saturation: 0, value: 0 };
    }
    set hsv(hsv) {
        if (hsv) {
            this._hsv = hsv;
        }
    }
    get hsv() {
        return this._hsv;
    }
    get hex() {
        return getHexFromHsv(this.hsv);
    }
    ngAfterViewInit() {
        this.dragSubscription = this.setupDrag().subscribe((mm) => this.emitChange(mm));
    }
    hueSliderChange(value) {
        this.emitChange({ hue: value });
    }
    rangeIndicatorKeyboard(evt) {
        let saturation = this.hsv.saturation;
        let value = this.hsv.value;
        switch (evt.keyCode) {
            case LEFT_ARROW:
                saturation = this.limit(saturation - 1);
                break;
            case RIGHT_ARROW:
                saturation = this.limit(saturation + 1);
                break;
            case UP_ARROW:
                value = this.limit(value + 1);
                break;
            case DOWN_ARROW:
                value = this.limit(value - 1);
                break;
            default:
                return;
        }
        trapEvent(evt);
        this.emitChange({ saturation, value });
    }
    indicatorStyle() {
        return {
            'bottom.%': this.hsv.value,
            'left.%': this.hsv.saturation,
            'background': this.hex,
        };
    }
    ngOnDestroy() {
        if (this.dragSubscription) {
            this.dragSubscription.unsubscribe();
            this.dragSubscription = null;
        }
    }
    emitChange(hsv) {
        this.hsvChange.emit(Object.assign(Object.assign({}, this.hsv), hsv));
    }
    limit(value) {
        return Math.min(Math.max(value, 0), 100);
    }
    setupDrag() {
        const dragTarget = this.rangeIndicatorContainer.nativeElement;
        const pressEnd = merge(fromEvent(this.document, 'mouseup'), fromEvent(this.document, 'touchend'));
        const pressMove = merge(fromEvent(this.document, 'mousemove'), fromEvent(this.document, 'touchmove'));
        const pressStart = merge(fromEvent(dragTarget, 'mousedown'), fromEvent(dragTarget, 'touchstart'));
        return pressStart.pipe(flatMap((md) => {
            this.rangeIndicator.nativeElement.focus();
            const rect = dragTarget.getBoundingClientRect();
            return pressMove.pipe(startWith(md), map((mm) => {
                mm.preventDefault();
                const saturation = Math.round((mm.clientX - rect.left) / rect.width * 100);
                const value = Math.round((rect.bottom - mm.clientY) / rect.height * 100);
                return { saturation: this.limit(saturation), value: this.limit(value) };
            }), takeUntil(pressEnd));
        }));
    }
}
NglColorpickerRange.decorators = [
    { type: Component, args: [{
                selector: 'ngl-colorpicker-range',
                template: "\n<p class=\"slds-assistive-text\" [attr.id]=\"uid + '-instructions'\">Use arrow keys to select a saturation and brightness, on an x and y axis.</p>\n<div class=\"slds-color-picker__custom-range\" #rangeIndicatorContainer [style.background]=\"'hsl(' + hsv.hue + ', 100%, 50%)'\"><a class=\"slds-color-picker__range-indicator\" #rangeIndicator href=\"javascript:void(0);\" aria-live=\"assertive\" aria-atomic=\"true\" [attr.aria-describedby]=\"uid + '-instructions'\" [ngStyle]=\"indicatorStyle()\" (keydown)=\"rangeIndicatorKeyboard($event)\"><span class=\"slds-assistive-text\">Saturation: {{hsv.saturation}}%. Brightness: {{hsv.value}}%.</span></a></div>\n<div class=\"slds-color-picker__hue-and-preview\">\n  <label class=\"slds-assistive-text\" [attr.for]=\"uid + '-hue'\">Select Hue</label>\n  <input class=\"slds-color-picker__hue-slider\" #hueSlider type=\"range\" min=\"0\" max=\"360\" [id]=\"uid + '-hue'\" [value]=\"hsv.hue\" (input)=\"hueSliderChange($event.target.value)\"><span nglColorpickerSwatch [color]=\"hex\"></span>\n</div>",
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
NglColorpickerRange.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
];
NglColorpickerRange.propDecorators = {
    hsv: [{ type: Input }],
    hsvChange: [{ type: Output }],
    rangeIndicator: [{ type: ViewChild, args: ['rangeIndicator',] }],
    rangeIndicatorContainer: [{ type: ViewChild, args: ['rangeIndicatorContainer',] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sb3JwaWNrZXItcmFuZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1saWdodG5pbmcvc3JjL2xpYi9jb2xvcnBpY2tlci9jdXN0b20vcmFuZ2UvY29sb3JwaWNrZXItcmFuZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBYyx1QkFBdUIsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQTRCLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6SixPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3RGLE9BQU8sRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNwRSxPQUFPLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBZ0IsTUFBTSxNQUFNLENBQUM7QUFDdEQsT0FBTyxFQUFFLGFBQWEsRUFBUSxNQUFNLFlBQVksQ0FBQztBQUNqRCxPQUFPLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBT3pELE1BQU0sT0FBTyxtQkFBbUI7SUEwQjlCLFlBQXNDLFFBQWE7UUFBYixhQUFRLEdBQVIsUUFBUSxDQUFLO1FBZnpDLGNBQVMsR0FBRyxJQUFJLFlBQVksRUFBUSxDQUFDO1FBSy9DLFFBQUcsR0FBRyxRQUFRLENBQUMsbUJBQW1CLENBQUMsQ0FBQztRQU01QixTQUFJLEdBQVMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLFVBQVUsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDO0lBSUYsQ0FBQztJQXhCeEQsSUFBYSxHQUFHLENBQUMsR0FBUztR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Q3BCLENBQUM7UUFDSixDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ04sQ0FBQzs7O1lBM0hGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsdUJBQXVCO2dCQUNqQywraENBQXVDO2dCQUN2QyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDs7OzRDQTJCYyxNQUFNLFNBQUMsUUFBUTs7O2tCQXhCM0IsS0FBSzt3QkFTTCxNQUFNOzZCQUVOLFNBQVMsU0FBQyxnQkFBZ0I7c0NBQzFCLFNBQVMsU0FBQyx5QkFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBJbnB1dCwgVmlld0NoaWxkLCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95LCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IExFRlRfQVJST1csIERPV05fQVJST1csIFVQX0FSUk9XLCBSSUdIVF9BUlJPVyB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9rZXljb2Rlcyc7XG5pbXBvcnQgeyBmbGF0TWFwLCBtYXAsIHRha2VVbnRpbCwgc3RhcnRXaXRoIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgbWVyZ2UsIGZyb21FdmVudCwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBnZXRIZXhGcm9tSHN2LCBJSFNWIH0gZnJvbSAnLi4vLi4vdXRpbCc7XG5pbXBvcnQgeyB0cmFwRXZlbnQsIHVuaXF1ZUlkIH0gZnJvbSAnLi4vLi4vLi4vdXRpbC91dGlsJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmdsLWNvbG9ycGlja2VyLXJhbmdlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NvbG9ycGlja2VyLXJhbmdlLmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgTmdsQ29sb3JwaWNrZXJSYW5nZSBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XG5cbiAgQElucHV0KCkgc2V0IGhzdihoc3Y6IElIU1YpIHtcbiAgICBpZiAoaHN2KSB7XG4gICAgICB0aGlzLl9oc3YgPSBoc3Y7XG4gICAgfVxuICB9XG4gIGdldCBoc3YoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2hzdjtcbiAgfVxuXG4gIEBPdXRwdXQoKSBoc3ZDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPElIU1Y+KCk7XG5cbiAgQFZpZXdDaGlsZCgncmFuZ2VJbmRpY2F0b3InKSByYW5nZUluZGljYXRvcjogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgncmFuZ2VJbmRpY2F0b3JDb250YWluZXInKSByYW5nZUluZGljYXRvckNvbnRhaW5lcjogRWxlbWVudFJlZjtcblxuICB1aWQgPSB1bmlxdWVJZCgnY29sb3JwaWNrZXItcmFuZ2UnKTtcblxuICBnZXQgaGV4KCkge1xuICAgIHJldHVybiBnZXRIZXhGcm9tSHN2KHRoaXMuaHN2KTtcbiAgfVxuXG4gIHByaXZhdGUgX2hzdjogSUhTViA9IHsgaHVlOiAwLCBzYXR1cmF0aW9uOiAwLCB2YWx1ZTogMCB9O1xuXG4gIHByaXZhdGUgZHJhZ1N1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jdW1lbnQ6IGFueSkgeyB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMuZHJhZ1N1YnNjcmlwdGlvbiA9IHRoaXMuc2V0dXBEcmFnKCkuc3Vic2NyaWJlKChtbTogYW55KSA9PiB0aGlzLmVtaXRDaGFuZ2UobW0pKTtcbiAgfVxuXG4gIGh1ZVNsaWRlckNoYW5nZSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5lbWl0Q2hhbmdlKHsgaHVlOiB2YWx1ZSB9KTtcbiAgfVxuXG4gIHJhbmdlSW5kaWNhdG9yS2V5Ym9hcmQoZXZ0OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgbGV0IHNhdHVyYXRpb24gPSB0aGlzLmhzdi5zYXR1cmF0aW9uO1xuICAgIGxldCB2YWx1ZSA9IHRoaXMuaHN2LnZhbHVlO1xuXG4gICAgc3dpdGNoIChldnQua2V5Q29kZSkge1xuICAgICAgY2FzZSBMRUZUX0FSUk9XOlxuICAgICAgICBzYXR1cmF0aW9uID0gdGhpcy5saW1pdChzYXR1cmF0aW9uIC0gMSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBSSUdIVF9BUlJPVzpcbiAgICAgICAgc2F0dXJhdGlvbiA9IHRoaXMubGltaXQoc2F0dXJhdGlvbiArIDEpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgVVBfQVJST1c6XG4gICAgICAgIHZhbHVlID0gdGhpcy5saW1pdCh2YWx1ZSArIDEpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgRE9XTl9BUlJPVzpcbiAgICAgICAgdmFsdWUgPSB0aGlzLmxpbWl0KHZhbHVlIC0gMSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRyYXBFdmVudChldnQpO1xuICAgIHRoaXMuZW1pdENoYW5nZSh7IHNhdHVyYXRpb24sIHZhbHVlIH0pO1xuICB9XG5cbiAgaW5kaWNhdG9yU3R5bGUoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICdib3R0b20uJSc6IHRoaXMuaHN2LnZhbHVlLFxuICAgICAgJ2xlZnQuJSc6IHRoaXMuaHN2LnNhdHVyYXRpb24sXG4gICAgICAnYmFja2dyb3VuZCc6IHRoaXMuaGV4LFxuICAgIH07XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBpZiAodGhpcy5kcmFnU3Vic2NyaXB0aW9uKSB7XG4gICAgICB0aGlzLmRyYWdTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgIHRoaXMuZHJhZ1N1YnNjcmlwdGlvbiA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBlbWl0Q2hhbmdlKGhzdjogUGFydGlhbDxJSFNWPikge1xuICAgIHRoaXMuaHN2Q2hhbmdlLmVtaXQoeyAuLi50aGlzLmhzdiwgLi4uaHN2IH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBsaW1pdCh2YWx1ZSk6IG51bWJlciB7XG4gICAgcmV0dXJuIE1hdGgubWluKE1hdGgubWF4KHZhbHVlLCAwKSwgMTAwKTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0dXBEcmFnKCkge1xuICAgIGNvbnN0IGRyYWdUYXJnZXQgPSB0aGlzLnJhbmdlSW5kaWNhdG9yQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQ7XG5cbiAgICBjb25zdCBwcmVzc0VuZCA9IG1lcmdlKFxuICAgICAgZnJvbUV2ZW50KHRoaXMuZG9jdW1lbnQsICdtb3VzZXVwJyksXG4gICAgICBmcm9tRXZlbnQodGhpcy5kb2N1bWVudCwgJ3RvdWNoZW5kJylcbiAgICApO1xuXG4gICAgY29uc3QgcHJlc3NNb3ZlID0gbWVyZ2UoXG4gICAgICBmcm9tRXZlbnQodGhpcy5kb2N1bWVudCwgJ21vdXNlbW92ZScpLFxuICAgICAgZnJvbUV2ZW50KHRoaXMuZG9jdW1lbnQsICd0b3VjaG1vdmUnKVxuICAgICk7XG5cbiAgICBjb25zdCBwcmVzc1N0YXJ0ID0gbWVyZ2UoXG4gICAgICBmcm9tRXZlbnQoZHJhZ1RhcmdldCwgJ21vdXNlZG93bicpLFxuICAgICAgZnJvbUV2ZW50KGRyYWdUYXJnZXQsICd0b3VjaHN0YXJ0JylcbiAgICApO1xuXG4gICAgcmV0dXJuIHByZXNzU3RhcnQucGlwZShmbGF0TWFwKChtZCkgPT4ge1xuICAgICAgdGhpcy5yYW5nZUluZGljYXRvci5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgICBjb25zdCByZWN0ID0gZHJhZ1RhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgICByZXR1cm4gcHJlc3NNb3ZlLnBpcGUoXG4gICAgICAgIHN0YXJ0V2l0aChtZCksXG4gICAgICAgIG1hcCgobW06IGFueSkgPT4ge1xuICAgICAgICAgIG1tLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICBjb25zdCBzYXR1cmF0aW9uID0gTWF0aC5yb3VuZCgobW0uY2xpZW50WCAtIHJlY3QubGVmdCkgLyByZWN0LndpZHRoICogMTAwKTtcbiAgICAgICAgICBjb25zdCB2YWx1ZSA9IE1hdGgucm91bmQoKHJlY3QuYm90dG9tIC0gbW0uY2xpZW50WSkgLyByZWN0LmhlaWdodCAqIDEwMCk7XG4gICAgICAgICAgcmV0dXJuIHsgc2F0dXJhdGlvbjogdGhpcy5saW1pdChzYXR1cmF0aW9uKSwgdmFsdWU6IHRoaXMubGltaXQodmFsdWUpIH07XG4gICAgICAgIH0pLFxuICAgICAgICB0YWtlVW50aWwocHJlc3NFbmQpLFxuICAgICAgKTtcbiAgICB9KSk7XG4gIH1cbn1cbiJdfQ==
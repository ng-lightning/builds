import { Component, ChangeDetectionStrategy, Input, ViewChild, Output, EventEmitter, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { LEFT_ARROW, DOWN_ARROW, UP_ARROW, RIGHT_ARROW } from '@angular/cdk/keycodes';
import { flatMap, map, takeUntil, startWith } from 'rxjs/operators';
import { merge, fromEvent } from 'rxjs';
import { getHexFromHsv } from '../../util';
import { trapEvent, uniqueId } from '../../../util/util';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../../swatch/colorpicker-swatch";
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
        this.hsvChange.emit({ ...this.hsv, ...hsv });
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
NglColorpickerRange.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglColorpickerRange, deps: [{ token: DOCUMENT }], target: i0.ɵɵFactoryTarget.Component });
NglColorpickerRange.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: NglColorpickerRange, selector: "ngl-colorpicker-range", inputs: { hsv: "hsv" }, outputs: { hsvChange: "hsvChange" }, viewQueries: [{ propertyName: "rangeIndicator", first: true, predicate: ["rangeIndicator"], descendants: true }, { propertyName: "rangeIndicatorContainer", first: true, predicate: ["rangeIndicatorContainer"], descendants: true }], ngImport: i0, template: "\n<p class=\"slds-assistive-text\" [attr.id]=\"uid + '-instructions'\">Use arrow keys to select a saturation and brightness, on an x and y axis.</p>\n<div class=\"slds-color-picker__custom-range\" #rangeIndicatorContainer [style.background]=\"'hsl(' + hsv.hue + ', 100%, 50%)'\"><a class=\"slds-color-picker__range-indicator\" #rangeIndicator href=\"javascript:void(0);\" aria-live=\"assertive\" aria-atomic=\"true\" [attr.aria-describedby]=\"uid + '-instructions'\" [ngStyle]=\"indicatorStyle()\" (keydown)=\"rangeIndicatorKeyboard($event)\"><span class=\"slds-assistive-text\">Saturation: {{hsv.saturation}}%. Brightness: {{hsv.value}}%.</span></a></div>\n<div class=\"slds-color-picker__hue-and-preview\">\n  <label class=\"slds-assistive-text\" [attr.for]=\"uid + '-hue'\">Select Hue</label>\n  <input class=\"slds-color-picker__hue-slider\" #hueSlider type=\"range\" min=\"0\" max=\"360\" [id]=\"uid + '-hue'\" [value]=\"hsv.hue\" (input)=\"hueSliderChange($event.target.value)\"><span nglColorpickerSwatch [color]=\"hex\"></span>\n</div>", dependencies: [{ kind: "directive", type: i1.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { kind: "component", type: i2.NglColorpickerSwatch, selector: "[nglColorpickerSwatch]", inputs: ["color"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglColorpickerRange, decorators: [{
            type: Component,
            args: [{ selector: 'ngl-colorpicker-range', changeDetection: ChangeDetectionStrategy.OnPush, template: "\n<p class=\"slds-assistive-text\" [attr.id]=\"uid + '-instructions'\">Use arrow keys to select a saturation and brightness, on an x and y axis.</p>\n<div class=\"slds-color-picker__custom-range\" #rangeIndicatorContainer [style.background]=\"'hsl(' + hsv.hue + ', 100%, 50%)'\"><a class=\"slds-color-picker__range-indicator\" #rangeIndicator href=\"javascript:void(0);\" aria-live=\"assertive\" aria-atomic=\"true\" [attr.aria-describedby]=\"uid + '-instructions'\" [ngStyle]=\"indicatorStyle()\" (keydown)=\"rangeIndicatorKeyboard($event)\"><span class=\"slds-assistive-text\">Saturation: {{hsv.saturation}}%. Brightness: {{hsv.value}}%.</span></a></div>\n<div class=\"slds-color-picker__hue-and-preview\">\n  <label class=\"slds-assistive-text\" [attr.for]=\"uid + '-hue'\">Select Hue</label>\n  <input class=\"slds-color-picker__hue-slider\" #hueSlider type=\"range\" min=\"0\" max=\"360\" [id]=\"uid + '-hue'\" [value]=\"hsv.hue\" (input)=\"hueSliderChange($event.target.value)\"><span nglColorpickerSwatch [color]=\"hex\"></span>\n</div>" }]
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Inject,
                    args: [DOCUMENT]
                }] }]; }, propDecorators: { hsv: [{
                type: Input
            }], hsvChange: [{
                type: Output
            }], rangeIndicator: [{
                type: ViewChild,
                args: ['rangeIndicator']
            }], rangeIndicatorContainer: [{
                type: ViewChild,
                args: ['rangeIndicatorContainer']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sb3JwaWNrZXItcmFuZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1saWdodG5pbmcvc3JjL2xpYi9jb2xvcnBpY2tlci9jdXN0b20vcmFuZ2UvY29sb3JwaWNrZXItcmFuZ2UudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1saWdodG5pbmcvc3JjL2xpYi9jb2xvcnBpY2tlci9jdXN0b20vcmFuZ2UvY29sb3JwaWNrZXItcmFuZ2UuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFjLHVCQUF1QixFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBNEIsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pKLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDdEYsT0FBTyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3BFLE9BQU8sRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFnQixNQUFNLE1BQU0sQ0FBQztBQUN0RCxPQUFPLEVBQUUsYUFBYSxFQUFRLE1BQU0sWUFBWSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7Ozs7QUFPekQsTUFBTSxPQUFPLG1CQUFtQjtJQTBCOUIsWUFBc0MsUUFBYTtRQUFiLGFBQVEsR0FBUixRQUFRLENBQUs7UUFmekMsY0FBUyxHQUFHLElBQUksWUFBWSxFQUFRLENBQUM7UUFLL0MsUUFBRyxHQUFHLFFBQVEsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBTTVCLFNBQUksR0FBUyxFQUFF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Q0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQztZQUMxRSxDQUFDLENBQUMsRUFDRixTQUFTLENBQUMsUUFBUSxDQUFDLENBQ3BCLENBQUM7UUFDSixDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ04sQ0FBQzs7Z0hBdEhVLG1CQUFtQixrQkEwQlYsUUFBUTtvR0ExQmpCLG1CQUFtQixpV0NiaEMscWhDQU1NOzJGRE9PLG1CQUFtQjtrQkFML0IsU0FBUzsrQkFDRSx1QkFBdUIsbUJBRWhCLHVCQUF1QixDQUFDLE1BQU07OzBCQTRCbEMsTUFBTTsyQkFBQyxRQUFROzRDQXhCZixHQUFHO3NCQUFmLEtBQUs7Z0JBU0ksU0FBUztzQkFBbEIsTUFBTTtnQkFFc0IsY0FBYztzQkFBMUMsU0FBUzt1QkFBQyxnQkFBZ0I7Z0JBQ1csdUJBQXVCO3NCQUE1RCxTQUFTO3VCQUFDLHlCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIElucHV0LCBWaWV3Q2hpbGQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3ksIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTEVGVF9BUlJPVywgRE9XTl9BUlJPVywgVVBfQVJST1csIFJJR0hUX0FSUk9XIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2tleWNvZGVzJztcbmltcG9ydCB7IGZsYXRNYXAsIG1hcCwgdGFrZVVudGlsLCBzdGFydFdpdGggfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBtZXJnZSwgZnJvbUV2ZW50LCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGdldEhleEZyb21Ic3YsIElIU1YgfSBmcm9tICcuLi8uLi91dGlsJztcbmltcG9ydCB7IHRyYXBFdmVudCwgdW5pcXVlSWQgfSBmcm9tICcuLi8uLi8uLi91dGlsL3V0aWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZ2wtY29sb3JwaWNrZXItcmFuZ2UnLFxuICB0ZW1wbGF0ZVVybDogJy4vY29sb3JwaWNrZXItcmFuZ2UuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBOZ2xDb2xvcnBpY2tlclJhbmdlIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcblxuICBASW5wdXQoKSBzZXQgaHN2KGhzdjogSUhTVikge1xuICAgIGlmIChoc3YpIHtcbiAgICAgIHRoaXMuX2hzdiA9IGhzdjtcbiAgICB9XG4gIH1cbiAgZ2V0IGhzdigpIHtcbiAgICByZXR1cm4gdGhpcy5faHN2O1xuICB9XG5cbiAgQE91dHB1dCgpIGhzdkNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8SUhTVj4oKTtcblxuICBAVmlld0NoaWxkKCdyYW5nZUluZGljYXRvcicpIHJhbmdlSW5kaWNhdG9yOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKCdyYW5nZUluZGljYXRvckNvbnRhaW5lcicpIHJhbmdlSW5kaWNhdG9yQ29udGFpbmVyOiBFbGVtZW50UmVmO1xuXG4gIHVpZCA9IHVuaXF1ZUlkKCdjb2xvcnBpY2tlci1yYW5nZScpO1xuXG4gIGdldCBoZXgoKSB7XG4gICAgcmV0dXJuIGdldEhleEZyb21Ic3YodGhpcy5oc3YpO1xuICB9XG5cbiAgcHJpdmF0ZSBfaHN2OiBJSFNWID0geyBodWU6IDAsIHNhdHVyYXRpb246IDAsIHZhbHVlOiAwIH07XG5cbiAgcHJpdmF0ZSBkcmFnU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG5cbiAgY29uc3RydWN0b3IoQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2N1bWVudDogYW55KSB7IH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy5kcmFnU3Vic2NyaXB0aW9uID0gdGhpcy5zZXR1cERyYWcoKS5zdWJzY3JpYmUoKG1tOiBhbnkpID0+IHRoaXMuZW1pdENoYW5nZShtbSkpO1xuICB9XG5cbiAgaHVlU2xpZGVyQ2hhbmdlKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLmVtaXRDaGFuZ2UoeyBodWU6IHZhbHVlIH0pO1xuICB9XG5cbiAgcmFuZ2VJbmRpY2F0b3JLZXlib2FyZChldnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICBsZXQgc2F0dXJhdGlvbiA9IHRoaXMuaHN2LnNhdHVyYXRpb247XG4gICAgbGV0IHZhbHVlID0gdGhpcy5oc3YudmFsdWU7XG5cbiAgICBzd2l0Y2ggKGV2dC5rZXlDb2RlKSB7XG4gICAgICBjYXNlIExFRlRfQVJST1c6XG4gICAgICAgIHNhdHVyYXRpb24gPSB0aGlzLmxpbWl0KHNhdHVyYXRpb24gLSAxKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFJJR0hUX0FSUk9XOlxuICAgICAgICBzYXR1cmF0aW9uID0gdGhpcy5saW1pdChzYXR1cmF0aW9uICsgMSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBVUF9BUlJPVzpcbiAgICAgICAgdmFsdWUgPSB0aGlzLmxpbWl0KHZhbHVlICsgMSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBET1dOX0FSUk9XOlxuICAgICAgICB2YWx1ZSA9IHRoaXMubGltaXQodmFsdWUgLSAxKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdHJhcEV2ZW50KGV2dCk7XG4gICAgdGhpcy5lbWl0Q2hhbmdlKHsgc2F0dXJhdGlvbiwgdmFsdWUgfSk7XG4gIH1cblxuICBpbmRpY2F0b3JTdHlsZSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgJ2JvdHRvbS4lJzogdGhpcy5oc3YudmFsdWUsXG4gICAgICAnbGVmdC4lJzogdGhpcy5oc3Yuc2F0dXJhdGlvbixcbiAgICAgICdiYWNrZ3JvdW5kJzogdGhpcy5oZXgsXG4gICAgfTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIGlmICh0aGlzLmRyYWdTdWJzY3JpcHRpb24pIHtcbiAgICAgIHRoaXMuZHJhZ1N1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgdGhpcy5kcmFnU3Vic2NyaXB0aW9uID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGVtaXRDaGFuZ2UoaHN2OiBQYXJ0aWFsPElIU1Y+KSB7XG4gICAgdGhpcy5oc3ZDaGFuZ2UuZW1pdCh7IC4uLnRoaXMuaHN2LCAuLi5oc3YgfSk7XG4gIH1cblxuICBwcml2YXRlIGxpbWl0KHZhbHVlKTogbnVtYmVyIHtcbiAgICByZXR1cm4gTWF0aC5taW4oTWF0aC5tYXgodmFsdWUsIDApLCAxMDApO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXR1cERyYWcoKSB7XG4gICAgY29uc3QgZHJhZ1RhcmdldCA9IHRoaXMucmFuZ2VJbmRpY2F0b3JDb250YWluZXIubmF0aXZlRWxlbWVudDtcblxuICAgIGNvbnN0IHByZXNzRW5kID0gbWVyZ2UoXG4gICAgICBmcm9tRXZlbnQodGhpcy5kb2N1bWVudCwgJ21vdXNldXAnKSxcbiAgICAgIGZyb21FdmVudCh0aGlzLmRvY3VtZW50LCAndG91Y2hlbmQnKVxuICAgICk7XG5cbiAgICBjb25zdCBwcmVzc01vdmUgPSBtZXJnZShcbiAgICAgIGZyb21FdmVudCh0aGlzLmRvY3VtZW50LCAnbW91c2Vtb3ZlJyksXG4gICAgICBmcm9tRXZlbnQodGhpcy5kb2N1bWVudCwgJ3RvdWNobW92ZScpXG4gICAgKTtcblxuICAgIGNvbnN0IHByZXNzU3RhcnQgPSBtZXJnZShcbiAgICAgIGZyb21FdmVudChkcmFnVGFyZ2V0LCAnbW91c2Vkb3duJyksXG4gICAgICBmcm9tRXZlbnQoZHJhZ1RhcmdldCwgJ3RvdWNoc3RhcnQnKVxuICAgICk7XG5cbiAgICByZXR1cm4gcHJlc3NTdGFydC5waXBlKGZsYXRNYXAoKG1kKSA9PiB7XG4gICAgICB0aGlzLnJhbmdlSW5kaWNhdG9yLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICAgIGNvbnN0IHJlY3QgPSBkcmFnVGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgIHJldHVybiBwcmVzc01vdmUucGlwZShcbiAgICAgICAgc3RhcnRXaXRoKG1kKSxcbiAgICAgICAgbWFwKChtbTogYW55KSA9PiB7XG4gICAgICAgICAgbW0ucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgIGNvbnN0IHNhdHVyYXRpb24gPSBNYXRoLnJvdW5kKChtbS5jbGllbnRYIC0gcmVjdC5sZWZ0KSAvIHJlY3Qud2lkdGggKiAxMDApO1xuICAgICAgICAgIGNvbnN0IHZhbHVlID0gTWF0aC5yb3VuZCgocmVjdC5ib3R0b20gLSBtbS5jbGllbnRZKSAvIHJlY3QuaGVpZ2h0ICogMTAwKTtcbiAgICAgICAgICByZXR1cm4geyBzYXR1cmF0aW9uOiB0aGlzLmxpbWl0KHNhdHVyYXRpb24pLCB2YWx1ZTogdGhpcy5saW1pdCh2YWx1ZSkgfTtcbiAgICAgICAgfSksXG4gICAgICAgIHRha2VVbnRpbChwcmVzc0VuZCksXG4gICAgICApO1xuICAgIH0pKTtcbiAgfVxufVxuIiwiXG48cCBjbGFzcz1cInNsZHMtYXNzaXN0aXZlLXRleHRcIiBbYXR0ci5pZF09XCJ1aWQgKyAnLWluc3RydWN0aW9ucydcIj5Vc2UgYXJyb3cga2V5cyB0byBzZWxlY3QgYSBzYXR1cmF0aW9uIGFuZCBicmlnaHRuZXNzLCBvbiBhbiB4IGFuZCB5IGF4aXMuPC9wPlxuPGRpdiBjbGFzcz1cInNsZHMtY29sb3ItcGlja2VyX19jdXN0b20tcmFuZ2VcIiAjcmFuZ2VJbmRpY2F0b3JDb250YWluZXIgW3N0eWxlLmJhY2tncm91bmRdPVwiJ2hzbCgnICsgaHN2Lmh1ZSArICcsIDEwMCUsIDUwJSknXCI+PGEgY2xhc3M9XCJzbGRzLWNvbG9yLXBpY2tlcl9fcmFuZ2UtaW5kaWNhdG9yXCIgI3JhbmdlSW5kaWNhdG9yIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMCk7XCIgYXJpYS1saXZlPVwiYXNzZXJ0aXZlXCIgYXJpYS1hdG9taWM9XCJ0cnVlXCIgW2F0dHIuYXJpYS1kZXNjcmliZWRieV09XCJ1aWQgKyAnLWluc3RydWN0aW9ucydcIiBbbmdTdHlsZV09XCJpbmRpY2F0b3JTdHlsZSgpXCIgKGtleWRvd24pPVwicmFuZ2VJbmRpY2F0b3JLZXlib2FyZCgkZXZlbnQpXCI+PHNwYW4gY2xhc3M9XCJzbGRzLWFzc2lzdGl2ZS10ZXh0XCI+U2F0dXJhdGlvbjoge3toc3Yuc2F0dXJhdGlvbn19JS4gQnJpZ2h0bmVzczoge3toc3YudmFsdWV9fSUuPC9zcGFuPjwvYT48L2Rpdj5cbjxkaXYgY2xhc3M9XCJzbGRzLWNvbG9yLXBpY2tlcl9faHVlLWFuZC1wcmV2aWV3XCI+XG4gIDxsYWJlbCBjbGFzcz1cInNsZHMtYXNzaXN0aXZlLXRleHRcIiBbYXR0ci5mb3JdPVwidWlkICsgJy1odWUnXCI+U2VsZWN0IEh1ZTwvbGFiZWw+XG4gIDxpbnB1dCBjbGFzcz1cInNsZHMtY29sb3ItcGlja2VyX19odWUtc2xpZGVyXCIgI2h1ZVNsaWRlciB0eXBlPVwicmFuZ2VcIiBtaW49XCIwXCIgbWF4PVwiMzYwXCIgW2lkXT1cInVpZCArICctaHVlJ1wiIFt2YWx1ZV09XCJoc3YuaHVlXCIgKGlucHV0KT1cImh1ZVNsaWRlckNoYW5nZSgkZXZlbnQudGFyZ2V0LnZhbHVlKVwiPjxzcGFuIG5nbENvbG9ycGlja2VyU3dhdGNoIFtjb2xvcl09XCJoZXhcIj48L3NwYW4+XG48L2Rpdj4iXX0=
import { __decorate } from "tslib";
import { Component, Input, ChangeDetectionStrategy, forwardRef, HostBinding, Output, EventEmitter } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { coerceNumberProperty } from '@angular/cdk/coercion';
import { uniqueId } from '../util/util';
import { InputNumber, InputBoolean } from '../util/convert';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../util/outlet";
const NGL_SLIDER_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => NglSlider),
    multi: true
};
export class NglSlider {
    constructor(element, renderer, cd) {
        this.element = element;
        this.renderer = renderer;
        this.cd = cd;
        /**
         * The minimum value that the slider can have.
         */
        this.min = 0;
        /**
         * The maximum value that the slider can have.
         */
        this.max = 100;
        /**
         * The granularity the slider can step through values.
         */
        this.step = 1;
        /**
         * Whether the slider will be displayed vertically.
         */
        this.vertical = false;
        this.valueChange = new EventEmitter();
        this.uid = uniqueId('slider');
        this._value = null;
        this.onChange = null;
        this.onTouched = () => { };
        this.renderer.addClass(this.element.nativeElement, 'slds-form-element');
    }
    get hasError() {
        return !!this.error;
    }
    set value(value) {
        if (value !== this._value) {
            this._value = this.limit(coerceNumberProperty(value));
        }
    }
    get value() {
        // If the value needs to be read and it is still uninitialized, initialize it to the min.
        if (this._value === null) {
            this._value = this.min;
        }
        return this._value;
    }
    writeValue(value) {
        this.value = value;
        this.cd.markForCheck();
    }
    registerOnChange(fn) { this.onChange = fn; }
    registerOnTouched(fn) { this.onTouched = fn; }
    setDisabledState(isDisabled) { this.disabled = isDisabled; }
    onInput(value) {
        // Make sure we always emit number
        this.valueChange.emit(coerceNumberProperty(value));
        if (this.onChange) {
            this.value = value;
            this.onChange(this.value);
        }
    }
    sliderClass() {
        return {
            [`slds-size_${this.size}`]: !!this.size,
            [`slds-slider_vertical`]: this.vertical,
        };
    }
    limit(value) {
        return Math.min(Math.max(value, this.min), this.max);
    }
}
NglSlider.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglSlider, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component });
NglSlider.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: NglSlider, selector: "ngl-slider", inputs: { label: "label", min: "min", max: "max", step: "step", vertical: "vertical", size: "size", disabled: "disabled", error: "error", value: "value" }, outputs: { valueChange: "valueChange" }, host: { properties: { "class.slds-has-error": "this.hasError" } }, providers: [NGL_SLIDER_VALUE_ACCESSOR], ngImport: i0, template: "\n<label class=\"slds-form-element__label\" [attr.for]=\"uid\"><span class=\"slds-slider-label\"><span class=\"slds-slider-label__label\" *ngIf=\"label\" [nglInternalOutlet]=\"label\"></span><span class=\"slds-slider-label__range\">{{min}} - {{max}}</span></span></label>\n<div class=\"slds-form-element__control\">\n  <div class=\"slds-slider\" [ngClass]=\"sliderClass()\">\n    <input class=\"slds-slider__range\" [id]=\"uid\" type=\"range\" [value]=\"value\" [min]=\"min\" [max]=\"max\" [step]=\"step\" [disabled]=\"disabled\" [attr.aria-describedby]=\"hasError ? uid + '-error' : null\" (input)=\"onInput($event.target.value)\"><span class=\"slds-slider__value\" aria-hidden=\"true\">{{value}}</span>\n  </div>\n  <div class=\"slds-form-element__help\" *ngIf=\"hasError\" [id]=\"uid + '-error'\" [nglInternalOutlet]=\"error\"></div>\n</div>", dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i2.NglInternalOutlet, selector: "[nglInternalOutlet]", inputs: ["nglInternalOutlet", "nglInternalOutletContext"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
__decorate([
    InputNumber()
], NglSlider.prototype, "min", void 0);
__decorate([
    InputNumber()
], NglSlider.prototype, "max", void 0);
__decorate([
    InputNumber()
], NglSlider.prototype, "step", void 0);
__decorate([
    InputBoolean()
], NglSlider.prototype, "vertical", void 0);
__decorate([
    InputBoolean()
], NglSlider.prototype, "disabled", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglSlider, decorators: [{
            type: Component,
            args: [{ selector: 'ngl-slider', changeDetection: ChangeDetectionStrategy.OnPush, providers: [NGL_SLIDER_VALUE_ACCESSOR], template: "\n<label class=\"slds-form-element__label\" [attr.for]=\"uid\"><span class=\"slds-slider-label\"><span class=\"slds-slider-label__label\" *ngIf=\"label\" [nglInternalOutlet]=\"label\"></span><span class=\"slds-slider-label__range\">{{min}} - {{max}}</span></span></label>\n<div class=\"slds-form-element__control\">\n  <div class=\"slds-slider\" [ngClass]=\"sliderClass()\">\n    <input class=\"slds-slider__range\" [id]=\"uid\" type=\"range\" [value]=\"value\" [min]=\"min\" [max]=\"max\" [step]=\"step\" [disabled]=\"disabled\" [attr.aria-describedby]=\"hasError ? uid + '-error' : null\" (input)=\"onInput($event.target.value)\"><span class=\"slds-slider__value\" aria-hidden=\"true\">{{value}}</span>\n  </div>\n  <div class=\"slds-form-element__help\" *ngIf=\"hasError\" [id]=\"uid + '-error'\" [nglInternalOutlet]=\"error\"></div>\n</div>" }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i0.ChangeDetectorRef }]; }, propDecorators: { label: [{
                type: Input
            }], min: [{
                type: Input
            }], max: [{
                type: Input
            }], step: [{
                type: Input
            }], vertical: [{
                type: Input
            }], size: [{
                type: Input
            }], disabled: [{
                type: Input
            }], error: [{
                type: Input
            }], hasError: [{
                type: HostBinding,
                args: ['class.slds-has-error']
            }], value: [{
                type: Input
            }], valueChange: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctbGlnaHRuaW5nL3NyYy9saWIvc2xpZGVyL3NsaWRlci50cyIsIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nLWxpZ2h0bmluZy9zcmMvbGliL3NsaWRlci9zbGlkZXIuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsdUJBQXVCLEVBQ3pDLFVBQVUsRUFBcUIsV0FBVyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakcsT0FBTyxFQUFFLGlCQUFpQixFQUF3QixNQUFNLGdCQUFnQixDQUFDO0FBQ3pFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzdELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDeEMsT0FBTyxFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7OztBQUU1RCxNQUFNLHlCQUF5QixHQUFHO0lBQ2hDLE9BQU8sRUFBRSxpQkFBaUI7SUFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxTQUFTLENBQUM7SUFDeEMsS0FBSyxFQUFFLElBQUk7Q0FDWixDQUFDO0FBUUYsTUFBTSxPQUFPLFNBQVM7SUFrRXBCLFlBQW9CLE9BQW1CLEVBQVUsUUFBbUIsRUFBVSxFQUFxQjtRQUEvRSxZQUFPLEdBQVAsT0FBTyxDQUFZO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUFVLE9BQUUsR0FBRixFQUFFLENBQW1CO1FBM0RuRzs7V0FFRztRQUNxQixRQUFHLEdBQUcsQ0FBQyxDQUFDO1FBRWhDOztXQUVHO1FBQ3FCLFFBQUcsR0FBRyxHQUFHLENBQUM7UUFFbEM7O1dBRUc7UUFDcUIsU0FBSSxHQUFHLENBQUMsQ0FBQztRQUVqQzs7V0FFRztR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LENBQUM7eUpBTzdCLEtBQUs7c0JBQWIsS0FBSztnQkFLa0IsR0FBRztzQkFBMUIsS0FBSztnQkFLa0IsR0FBRztzQkFBMUIsS0FBSztnQkFLa0IsSUFBSTtzQkFBM0IsS0FBSztnQkFLbUIsUUFBUTtzQkFBaEMsS0FBSztnQkFLRyxJQUFJO3NCQUFaLEtBQUs7Z0JBS21CLFFBQVE7c0JBQWhDLEtBQUs7Z0JBS0csS0FBSztzQkFBYixLQUFLO2dCQUdGLFFBQVE7c0JBRFgsV0FBVzt1QkFBQyxzQkFBc0I7Z0JBS3RCLEtBQUs7c0JBQWpCLEtBQUs7Z0JBYUksV0FBVztzQkFBcEIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBFbGVtZW50UmVmLCBSZW5kZXJlcjIsIFRlbXBsYXRlUmVmLFxuICAgICAgICAgZm9yd2FyZFJlZiwgQ2hhbmdlRGV0ZWN0b3JSZWYsIEhvc3RCaW5kaW5nLCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTkdfVkFMVUVfQUNDRVNTT1IsIENvbnRyb2xWYWx1ZUFjY2Vzc29yIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgY29lcmNlTnVtYmVyUHJvcGVydHkgfSBmcm9tICdAYW5ndWxhci9jZGsvY29lcmNpb24nO1xuaW1wb3J0IHsgdW5pcXVlSWQgfSBmcm9tICcuLi91dGlsL3V0aWwnO1xuaW1wb3J0IHsgSW5wdXROdW1iZXIsIElucHV0Qm9vbGVhbiB9IGZyb20gJy4uL3V0aWwvY29udmVydCc7XG5cbmNvbnN0IE5HTF9TTElERVJfVkFMVUVfQUNDRVNTT1IgPSB7XG4gIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBOZ2xTbGlkZXIpLFxuICBtdWx0aTogdHJ1ZVxufTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmdsLXNsaWRlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9zbGlkZXIuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBwcm92aWRlcnM6IFtOR0xfU0xJREVSX1ZBTFVFX0FDQ0VTU09SXSxcbn0pXG5leHBvcnQgY2xhc3MgTmdsU2xpZGVyIGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuXG4gIC8qKlxuICAgKiBMYWJlbCB0aGF0IGFwcGVhcnMgYWJvdmUgdGhlIFNsaWRlci5cbiAgICovXG4gIEBJbnB1dCgpIGxhYmVsOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIC8qKlxuICAgKiBUaGUgbWluaW11bSB2YWx1ZSB0aGF0IHRoZSBzbGlkZXIgY2FuIGhhdmUuXG4gICAqL1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBtaW4gPSAwO1xuXG4gIC8qKlxuICAgKiBUaGUgbWF4aW11bSB2YWx1ZSB0aGF0IHRoZSBzbGlkZXIgY2FuIGhhdmUuXG4gICAqL1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBtYXggPSAxMDA7XG5cbiAgLyoqXG4gICAqIFRoZSBncmFudWxhcml0eSB0aGUgc2xpZGVyIGNhbiBzdGVwIHRocm91Z2ggdmFsdWVzLlxuICAgKi9cbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgc3RlcCA9IDE7XG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgdGhlIHNsaWRlciB3aWxsIGJlIGRpc3BsYXllZCB2ZXJ0aWNhbGx5LlxuICAgKi9cbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHZlcnRpY2FsID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIFRoZSBzaXplIG9mIHRoZSBzbGlkZXIuXG4gICAqL1xuICBASW5wdXQoKSBzaXplOiAneHgtc21hbGwnIHwgJ3gtc21hbGwnIHwgJ3NtYWxsJyB8ICdtZWRpdW0nIHwgJ2xhcmdlJyB8ICd4LWxhcmdlJyB8ICd4eC1sYXJnZSc7XG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgdGhlIHNsaWRlciBpcyBkaXNhYmxlZC5cbiAgICovXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBkaXNhYmxlZDogYm9vbGVhbjtcblxuICAvKipcbiAgICogTWVzc2FnZSB0byBkaXNwbGF5IHdoZW4gdGhlcmUgaXMgaW4gYW4gZXJyb3Igc3RhdGUuXG4gICAqL1xuICBASW5wdXQoKSBlcnJvcjogc3RyaW5nIHwgVGVtcGxhdGVSZWY8YW55PjtcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnNsZHMtaGFzLWVycm9yJylcbiAgZ2V0IGhhc0Vycm9yKCkge1xuICAgIHJldHVybiAhIXRoaXMuZXJyb3I7XG4gIH1cblxuICBASW5wdXQoKSBzZXQgdmFsdWUodmFsdWU6IG51bWJlciB8IG51bGwpIHtcbiAgICBpZiAodmFsdWUgIT09IHRoaXMuX3ZhbHVlKSB7XG4gICAgICB0aGlzLl92YWx1ZSA9IHRoaXMubGltaXQoY29lcmNlTnVtYmVyUHJvcGVydHkodmFsdWUpKTtcbiAgICB9XG4gIH1cbiAgZ2V0IHZhbHVlKCk6IG51bWJlciB7XG4gICAgLy8gSWYgdGhlIHZhbHVlIG5lZWRzIHRvIGJlIHJlYWQgYW5kIGl0IGlzIHN0aWxsIHVuaW5pdGlhbGl6ZWQsIGluaXRpYWxpemUgaXQgdG8gdGhlIG1pbi5cbiAgICBpZiAodGhpcy5fdmFsdWUgPT09IG51bGwpIHtcbiAgICAgIHRoaXMuX3ZhbHVlID0gdGhpcy5taW47XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl92YWx1ZTtcbiAgfVxuXG4gIEBPdXRwdXQoKSB2YWx1ZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuXG4gIHVpZCA9IHVuaXF1ZUlkKCdzbGlkZXInKTtcblxuICBwcml2YXRlIF92YWx1ZTogbnVtYmVyIHwgbnVsbCA9IG51bGw7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50UmVmLCBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsIHByaXZhdGUgY2Q6IENoYW5nZURldGVjdG9yUmVmKSB7XG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ3NsZHMtZm9ybS1lbGVtZW50Jyk7XG4gIH1cblxuICBvbkNoYW5nZTogRnVuY3Rpb24gfCBudWxsID0gbnVsbDtcblxuICBvblRvdWNoZWQgPSAoKSA9PiB7fTtcblxuICB3cml0ZVZhbHVlKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46ICh2YWx1ZTogYW55KSA9PiBhbnkpOiB2b2lkIHsgdGhpcy5vbkNoYW5nZSA9IGZuOyB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IGFueSk6IHZvaWQgeyB0aGlzLm9uVG91Y2hlZCA9IGZuOyB9XG5cbiAgc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKSB7IHRoaXMuZGlzYWJsZWQgPSBpc0Rpc2FibGVkOyB9XG5cbiAgb25JbnB1dCh2YWx1ZSkge1xuICAgIC8vIE1ha2Ugc3VyZSB3ZSBhbHdheXMgZW1pdCBudW1iZXJcbiAgICB0aGlzLnZhbHVlQ2hhbmdlLmVtaXQoY29lcmNlTnVtYmVyUHJvcGVydHkodmFsdWUpKTtcblxuICAgIGlmICh0aGlzLm9uQ2hhbmdlKSB7XG4gICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgICB0aGlzLm9uQ2hhbmdlKHRoaXMudmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIHNsaWRlckNsYXNzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBbYHNsZHMtc2l6ZV8ke3RoaXMuc2l6ZX1gXTogISF0aGlzLnNpemUsXG4gICAgICBbYHNsZHMtc2xpZGVyX3ZlcnRpY2FsYF06IHRoaXMudmVydGljYWwsXG4gICAgfTtcbiAgfVxuXG4gIHByaXZhdGUgbGltaXQodmFsdWU6IG51bWJlcik6IG51bWJlciB7XG4gICAgcmV0dXJuIE1hdGgubWluKE1hdGgubWF4KHZhbHVlLCB0aGlzLm1pbiksIHRoaXMubWF4KTtcbiAgfVxufVxuIiwiXG48bGFiZWwgY2xhc3M9XCJzbGRzLWZvcm0tZWxlbWVudF9fbGFiZWxcIiBbYXR0ci5mb3JdPVwidWlkXCI+PHNwYW4gY2xhc3M9XCJzbGRzLXNsaWRlci1sYWJlbFwiPjxzcGFuIGNsYXNzPVwic2xkcy1zbGlkZXItbGFiZWxfX2xhYmVsXCIgKm5nSWY9XCJsYWJlbFwiIFtuZ2xJbnRlcm5hbE91dGxldF09XCJsYWJlbFwiPjwvc3Bhbj48c3BhbiBjbGFzcz1cInNsZHMtc2xpZGVyLWxhYmVsX19yYW5nZVwiPnt7bWlufX0gLSB7e21heH19PC9zcGFuPjwvc3Bhbj48L2xhYmVsPlxuPGRpdiBjbGFzcz1cInNsZHMtZm9ybS1lbGVtZW50X19jb250cm9sXCI+XG4gIDxkaXYgY2xhc3M9XCJzbGRzLXNsaWRlclwiIFtuZ0NsYXNzXT1cInNsaWRlckNsYXNzKClcIj5cbiAgICA8aW5wdXQgY2xhc3M9XCJzbGRzLXNsaWRlcl9fcmFuZ2VcIiBbaWRdPVwidWlkXCIgdHlwZT1cInJhbmdlXCIgW3ZhbHVlXT1cInZhbHVlXCIgW21pbl09XCJtaW5cIiBbbWF4XT1cIm1heFwiIFtzdGVwXT1cInN0ZXBcIiBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIiBbYXR0ci5hcmlhLWRlc2NyaWJlZGJ5XT1cImhhc0Vycm9yID8gdWlkICsgJy1lcnJvcicgOiBudWxsXCIgKGlucHV0KT1cIm9uSW5wdXQoJGV2ZW50LnRhcmdldC52YWx1ZSlcIj48c3BhbiBjbGFzcz1cInNsZHMtc2xpZGVyX192YWx1ZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPnt7dmFsdWV9fTwvc3Bhbj5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJzbGRzLWZvcm0tZWxlbWVudF9faGVscFwiICpuZ0lmPVwiaGFzRXJyb3JcIiBbaWRdPVwidWlkICsgJy1lcnJvcidcIiBbbmdsSW50ZXJuYWxPdXRsZXRdPVwiZXJyb3JcIj48L2Rpdj5cbjwvZGl2PiJdfQ==
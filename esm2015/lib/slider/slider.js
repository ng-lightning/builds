import { __decorate } from "tslib";
import { Component, Input, ChangeDetectionStrategy, ElementRef, Renderer2, forwardRef, ChangeDetectorRef, HostBinding, Output, EventEmitter } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { coerceNumberProperty } from '@angular/cdk/coercion';
import { uniqueId } from '../util/util';
import { InputNumber, InputBoolean } from '../util/convert';
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
NglSlider.decorators = [
    { type: Component, args: [{
                selector: 'ngl-slider',
                template: "\n<label class=\"slds-form-element__label\" [attr.for]=\"uid\"><span class=\"slds-slider-label\"><span class=\"slds-slider-label__label\" *ngIf=\"label\" [nglInternalOutlet]=\"label\"></span><span class=\"slds-slider-label__range\">{{min}} - {{max}}</span></span></label>\n<div class=\"slds-form-element__control\">\n  <div class=\"slds-slider\" [ngClass]=\"sliderClass()\">\n    <input class=\"slds-slider__range\" [id]=\"uid\" type=\"range\" [value]=\"value\" [min]=\"min\" [max]=\"max\" [step]=\"step\" [disabled]=\"disabled\" [attr.aria-describedby]=\"hasError ? uid + '-error' : null\" (input)=\"onInput($event.target.value)\"><span class=\"slds-slider__value\" aria-hidden=\"true\">{{value}}</span>\n  </div>\n  <div class=\"slds-form-element__help\" *ngIf=\"hasError\" [id]=\"uid + '-error'\" [nglInternalOutlet]=\"error\"></div>\n</div>",
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [NGL_SLIDER_VALUE_ACCESSOR]
            },] }
];
NglSlider.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: ChangeDetectorRef }
];
NglSlider.propDecorators = {
    label: [{ type: Input }],
    min: [{ type: Input }],
    max: [{ type: Input }],
    step: [{ type: Input }],
    vertical: [{ type: Input }],
    size: [{ type: Input }],
    disabled: [{ type: Input }],
    error: [{ type: Input }],
    hasError: [{ type: HostBinding, args: ['class.slds-has-error',] }],
    value: [{ type: Input }],
    valueChange: [{ type: Output }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctbGlnaHRuaW5nL3NyYy9saWIvc2xpZGVyL3NsaWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsdUJBQXVCLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFDaEUsVUFBVSxFQUFFLGlCQUFpQixFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pHLE9BQU8sRUFBRSxpQkFBaUIsRUFBd0IsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6RSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQ3hDLE9BQU8sRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFNUQsTUFBTSx5QkFBeUIsR0FBRztJQUNoQyxPQUFPLEVBQUUsaUJBQWlCO0lBQzFCLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsU0FBUyxDQUFDO0lBQ3hDLEtBQUssRUFBRSxJQUFJO0NBQ1osQ0FBQztBQVFGLE1BQU0sT0FBTyxTQUFTO0lBa0VwQixZQUFvQixPQUFtQixFQUFVLFFBQW1CLEVBQVUsRUFBcUI7UUFBL0UsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQUFVLGFBQVEsR0FBUixRQUFRLENBQVc7UUFBVSxPQUFFLEdBQUYsRUFBRSxDQUFtQjtRQTNEbkc7O1dBRUc7UUFDcUIsUUFBRyxHQUFHLENBQUMsQ0FBQztRQUVoQzs7V0FFRztRQUNxQixRQUFHLEdBQUcsR0FBRyxDQUFDO1FBRWxDOztXQUVHO1FBQ3FCLFNBQUksR0FBRyxDQUFDLENBQUM7UUFFakM7O1dBRUc7UUFDc0IsYUFBUSxHQUFHLEtBQUssQ0FBQztRQW1DaEMsZ0JBQVcs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SUFBZCxXQUFXLEVBQUU7c0NBQVM7QUFLUjtJQUFkLFdBQVcsRUFBRTtzQ0FBVztBQUtWO0lBQWQsV0FBVyxFQUFFO3VDQUFVO0FBS1I7SUFBZixZQUFZLEVBQUU7MkNBQWtCO0FBVWpCO0lBQWYsWUFBWSxFQUFFOzJDQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBFbGVtZW50UmVmLCBSZW5kZXJlcjIsIFRlbXBsYXRlUmVmLFxuICAgICAgICAgZm9yd2FyZFJlZiwgQ2hhbmdlRGV0ZWN0b3JSZWYsIEhvc3RCaW5kaW5nLCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTkdfVkFMVUVfQUNDRVNTT1IsIENvbnRyb2xWYWx1ZUFjY2Vzc29yIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgY29lcmNlTnVtYmVyUHJvcGVydHkgfSBmcm9tICdAYW5ndWxhci9jZGsvY29lcmNpb24nO1xuaW1wb3J0IHsgdW5pcXVlSWQgfSBmcm9tICcuLi91dGlsL3V0aWwnO1xuaW1wb3J0IHsgSW5wdXROdW1iZXIsIElucHV0Qm9vbGVhbiB9IGZyb20gJy4uL3V0aWwvY29udmVydCc7XG5cbmNvbnN0IE5HTF9TTElERVJfVkFMVUVfQUNDRVNTT1IgPSB7XG4gIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBOZ2xTbGlkZXIpLFxuICBtdWx0aTogdHJ1ZVxufTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmdsLXNsaWRlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9zbGlkZXIuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBwcm92aWRlcnM6IFtOR0xfU0xJREVSX1ZBTFVFX0FDQ0VTU09SXSxcbn0pXG5leHBvcnQgY2xhc3MgTmdsU2xpZGVyIGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuXG4gIC8qKlxuICAgKiBMYWJlbCB0aGF0IGFwcGVhcnMgYWJvdmUgdGhlIFNsaWRlci5cbiAgICovXG4gIEBJbnB1dCgpIGxhYmVsOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIC8qKlxuICAgKiBUaGUgbWluaW11bSB2YWx1ZSB0aGF0IHRoZSBzbGlkZXIgY2FuIGhhdmUuXG4gICAqL1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBtaW4gPSAwO1xuXG4gIC8qKlxuICAgKiBUaGUgbWF4aW11bSB2YWx1ZSB0aGF0IHRoZSBzbGlkZXIgY2FuIGhhdmUuXG4gICAqL1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBtYXggPSAxMDA7XG5cbiAgLyoqXG4gICAqIFRoZSBncmFudWxhcml0eSB0aGUgc2xpZGVyIGNhbiBzdGVwIHRocm91Z2ggdmFsdWVzLlxuICAgKi9cbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgc3RlcCA9IDE7XG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgdGhlIHNsaWRlciB3aWxsIGJlIGRpc3BsYXllZCB2ZXJ0aWNhbGx5LlxuICAgKi9cbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHZlcnRpY2FsID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIFRoZSBzaXplIG9mIHRoZSBzbGlkZXIuXG4gICAqL1xuICBASW5wdXQoKSBzaXplOiAneHgtc21hbGwnIHwgJ3gtc21hbGwnIHwgJ3NtYWxsJyB8ICdtZWRpdW0nIHwgJ2xhcmdlJyB8ICd4LWxhcmdlJyB8ICd4eC1sYXJnZSc7XG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgdGhlIHNsaWRlciBpcyBkaXNhYmxlZC5cbiAgICovXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBkaXNhYmxlZDogYm9vbGVhbjtcblxuICAvKipcbiAgICogTWVzc2FnZSB0byBkaXNwbGF5IHdoZW4gdGhlcmUgaXMgaW4gYW4gZXJyb3Igc3RhdGUuXG4gICAqL1xuICBASW5wdXQoKSBlcnJvcjogc3RyaW5nIHwgVGVtcGxhdGVSZWY8YW55PjtcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnNsZHMtaGFzLWVycm9yJylcbiAgZ2V0IGhhc0Vycm9yKCkge1xuICAgIHJldHVybiAhIXRoaXMuZXJyb3I7XG4gIH1cblxuICBASW5wdXQoKSBzZXQgdmFsdWUodmFsdWU6IG51bWJlciB8IG51bGwpIHtcbiAgICBpZiAodmFsdWUgIT09IHRoaXMuX3ZhbHVlKSB7XG4gICAgICB0aGlzLl92YWx1ZSA9IHRoaXMubGltaXQoY29lcmNlTnVtYmVyUHJvcGVydHkodmFsdWUpKTtcbiAgICB9XG4gIH1cbiAgZ2V0IHZhbHVlKCk6IG51bWJlciB7XG4gICAgLy8gSWYgdGhlIHZhbHVlIG5lZWRzIHRvIGJlIHJlYWQgYW5kIGl0IGlzIHN0aWxsIHVuaW5pdGlhbGl6ZWQsIGluaXRpYWxpemUgaXQgdG8gdGhlIG1pbi5cbiAgICBpZiAodGhpcy5fdmFsdWUgPT09IG51bGwpIHtcbiAgICAgIHRoaXMuX3ZhbHVlID0gdGhpcy5taW47XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl92YWx1ZTtcbiAgfVxuXG4gIEBPdXRwdXQoKSB2YWx1ZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuXG4gIHVpZCA9IHVuaXF1ZUlkKCdzbGlkZXInKTtcblxuICBwcml2YXRlIF92YWx1ZTogbnVtYmVyIHwgbnVsbCA9IG51bGw7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50UmVmLCBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsIHByaXZhdGUgY2Q6IENoYW5nZURldGVjdG9yUmVmKSB7XG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ3NsZHMtZm9ybS1lbGVtZW50Jyk7XG4gIH1cblxuICBvbkNoYW5nZTogRnVuY3Rpb24gfCBudWxsID0gbnVsbDtcblxuICBvblRvdWNoZWQgPSAoKSA9PiB7fTtcblxuICB3cml0ZVZhbHVlKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46ICh2YWx1ZTogYW55KSA9PiBhbnkpOiB2b2lkIHsgdGhpcy5vbkNoYW5nZSA9IGZuOyB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IGFueSk6IHZvaWQgeyB0aGlzLm9uVG91Y2hlZCA9IGZuOyB9XG5cbiAgc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKSB7IHRoaXMuZGlzYWJsZWQgPSBpc0Rpc2FibGVkOyB9XG5cbiAgb25JbnB1dCh2YWx1ZSkge1xuICAgIC8vIE1ha2Ugc3VyZSB3ZSBhbHdheXMgZW1pdCBudW1iZXJcbiAgICB0aGlzLnZhbHVlQ2hhbmdlLmVtaXQoY29lcmNlTnVtYmVyUHJvcGVydHkodmFsdWUpKTtcblxuICAgIGlmICh0aGlzLm9uQ2hhbmdlKSB7XG4gICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgICB0aGlzLm9uQ2hhbmdlKHRoaXMudmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIHNsaWRlckNsYXNzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBbYHNsZHMtc2l6ZV8ke3RoaXMuc2l6ZX1gXTogISF0aGlzLnNpemUsXG4gICAgICBbYHNsZHMtc2xpZGVyX3ZlcnRpY2FsYF06IHRoaXMudmVydGljYWwsXG4gICAgfTtcbiAgfVxuXG4gIHByaXZhdGUgbGltaXQodmFsdWU6IG51bWJlcik6IG51bWJlciB7XG4gICAgcmV0dXJuIE1hdGgubWluKE1hdGgubWF4KHZhbHVlLCB0aGlzLm1pbiksIHRoaXMubWF4KTtcbiAgfVxufVxuIl19
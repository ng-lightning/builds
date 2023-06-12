import { Directive, Input, HostListener } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./pick";
export class NglPickOption {
    constructor(element, renderer, nglPick) {
        this.element = element;
        this.renderer = renderer;
        this.nglPick = nglPick;
        this._active = false;
    }
    // Use a getter to prevent direct altering
    get active() {
        return this._active;
    }
    set setValue(value) {
        this._value = value;
    }
    pick(evt) {
        if (evt) {
            evt.preventDefault();
        }
        this.nglPick.selectOption(this._value);
    }
    ngOnInit() {
        this._subscription = this.nglPick.values.subscribe(value => {
            this._active = this._isActive(value);
            const activeClass = this.nglPickActiveClass || this.nglPick.nglPickActiveClass;
            if (activeClass) {
                if (this.active) {
                    this.renderer.addClass(this.element.nativeElement, activeClass);
                }
                else {
                    this.renderer.removeClass(this.element.nativeElement, activeClass);
                }
            }
        });
    }
    ngOnDestroy() {
        this._subscription.unsubscribe();
        this.nglPick.optionRemoved(this._value);
    }
    _isActive(value) {
        if (this.nglPick.isMultiple) {
            if (!value) {
                return false;
            }
            return Array.isArray(value) ? value.indexOf(this._value) > -1 : !!value[this._value];
        }
        else {
            return this._value === value;
        }
    }
}
NglPickOption.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglPickOption, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i1.NglPick }], target: i0.ɵɵFactoryTarget.Directive });
NglPickOption.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.2.9", type: NglPickOption, selector: "[nglPickOption]", inputs: { setValue: ["nglPickOption", "setValue"], nglPickActiveClass: "nglPickActiveClass" }, host: { attributes: { "role": "button" }, listeners: { "click": "pick()", "keydown.Space": "pick($event)", "keydown.Enter": "pick($event)" } }, exportAs: ["nglPickOption"], ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglPickOption, decorators: [{
            type: Directive,
            args: [{
                    selector: '[nglPickOption]',
                    exportAs: 'nglPickOption',
                    host: {
                        'role': 'button',
                    },
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i1.NglPick }]; }, propDecorators: { setValue: [{
                type: Input,
                args: ['nglPickOption']
            }], nglPickActiveClass: [{
                type: Input
            }], pick: [{
                type: HostListener,
                args: ['click']
            }, {
                type: HostListener,
                args: ['keydown.Space', ['$event']]
            }, {
                type: HostListener,
                args: ['keydown.Enter', ['$event']]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGljay1vcHRpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1saWdodG5pbmcvc3JjL2xpYi9waWNrL3BpY2stb3B0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBNEMsTUFBTSxlQUFlLENBQUM7OztBQVd6RyxNQUFNLE9BQU8sYUFBYTtJQWlCeEIsWUFBb0IsT0FBbUIsRUFBVSxRQUFtQixFQUFVLE9BQWdCO1FBQTFFLFlBQU8sR0FBUCxPQUFPLENBQVk7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBUztRQUh0RixZQUFPLEdBQUcsS0FBSyxDQUFDO0lBR3lFLENBQUM7SUFmbEcsMENBQTBDO0lBQzFDLElBQUksTUFBTTtRQUNSLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN0QixDQUFDO0lBRUQsSUFBNEIsUUFBUSxDQUFDLEtBQVU7UUFDN0MsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDdEIsQ0FBQztJQWFELElBQUksQ0FBQyxHQUFXO1FBQ2QsSUFBSSxHQUFHLEVBQUU7WUFDUCxHQUFHLENBQUMsY0FBYyxFQUFFLENBQUM7U0FDdEI7UUFDRCxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUN6RCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7WUFFckMsTUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsa0JBQWtCLENBQUM7WUFDL0UsSUFBSSxXQUFXLEVBQUU7Z0JBQ2YsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO29CQUNmLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLFdBQVcsQ0FBQyxDQUFDO2lCQUNqRTtxQkFBTTtvQkFDTCxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxXQUFXLENBQUMsQ0FBQztpQkFDcEU7YUFDRjtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBRU8sU0FBUyxDQUFDLEtBQVU7UUFDMUIsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRTtZQUMzQixJQUFJLENBQUMsS0FBSyxFQUFFO2dCQUFFLE9BQU8sS0FBSyxDQUFDO2FBQUU7WUFDN0IsT0FBTyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDdEY7YUFBTTtZQUNMLE9BQU8sSUFBSSxDQUFDLE1BQU0sS0FBSyxLQUFLLENBQUM7U0FDOUI7SUFDSCxDQUFDOzswR0F4RFUsYUFBYTs4RkFBYixhQUFhOzJGQUFiLGFBQWE7a0JBUHpCLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtvQkFDM0IsUUFBUSxFQUFFLGVBQWU7b0JBQ3pCLElBQUksRUFBRTt3QkFDSixNQUFNLEVBQUUsUUFBUTtxQkFDakI7aUJBQ0Y7K0lBUTZCLFFBQVE7c0JBQW5DLEtBQUs7dUJBQUMsZUFBZTtnQkFJYixrQkFBa0I7c0JBQTFCLEtBQUs7Z0JBV04sSUFBSTtzQkFISCxZQUFZO3VCQUFDLE9BQU87O3NCQUNwQixZQUFZO3VCQUFDLGVBQWUsRUFBRSxDQUFDLFFBQVEsQ0FBQzs7c0JBQ3hDLFlBQVk7dUJBQUMsZUFBZSxFQUFFLENBQUMsUUFBUSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgSG9zdExpc3RlbmVyLCBFbGVtZW50UmVmLCBSZW5kZXJlcjIsIE9uSW5pdCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IE5nbFBpY2sgfSBmcm9tICcuL3BpY2snO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbmdsUGlja09wdGlvbl0nLFxuICBleHBvcnRBczogJ25nbFBpY2tPcHRpb24nLFxuICBob3N0OiB7XG4gICAgJ3JvbGUnOiAnYnV0dG9uJyxcbiAgfSxcbn0pXG5leHBvcnQgY2xhc3MgTmdsUGlja09wdGlvbiBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuICAvLyBVc2UgYSBnZXR0ZXIgdG8gcHJldmVudCBkaXJlY3QgYWx0ZXJpbmdcbiAgZ2V0IGFjdGl2ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fYWN0aXZlO1xuICB9XG5cbiAgQElucHV0KCduZ2xQaWNrT3B0aW9uJykgc2V0IHNldFZhbHVlKHZhbHVlOiBhbnkpIHtcbiAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xuICB9XG5cbiAgQElucHV0KCkgbmdsUGlja0FjdGl2ZUNsYXNzOiBzdHJpbmc7XG5cbiAgcHJpdmF0ZSBfdmFsdWU6IGFueTtcbiAgcHJpdmF0ZSBfYWN0aXZlID0gZmFsc2U7XG4gIHByaXZhdGUgX3N1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudDogRWxlbWVudFJlZiwgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLCBwcml2YXRlIG5nbFBpY2s6IE5nbFBpY2spIHt9XG5cbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snKVxuICBASG9zdExpc3RlbmVyKCdrZXlkb3duLlNwYWNlJywgWyckZXZlbnQnXSlcbiAgQEhvc3RMaXN0ZW5lcigna2V5ZG93bi5FbnRlcicsIFsnJGV2ZW50J10pXG4gIHBpY2soZXZ0PzogRXZlbnQpIHtcbiAgICBpZiAoZXZ0KSB7XG4gICAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gICAgdGhpcy5uZ2xQaWNrLnNlbGVjdE9wdGlvbih0aGlzLl92YWx1ZSk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLl9zdWJzY3JpcHRpb24gPSB0aGlzLm5nbFBpY2sudmFsdWVzLnN1YnNjcmliZSh2YWx1ZSA9PiB7XG4gICAgICB0aGlzLl9hY3RpdmUgPSB0aGlzLl9pc0FjdGl2ZSh2YWx1ZSk7XG5cbiAgICAgIGNvbnN0IGFjdGl2ZUNsYXNzID0gdGhpcy5uZ2xQaWNrQWN0aXZlQ2xhc3MgfHwgdGhpcy5uZ2xQaWNrLm5nbFBpY2tBY3RpdmVDbGFzcztcbiAgICAgIGlmIChhY3RpdmVDbGFzcykge1xuICAgICAgICBpZiAodGhpcy5hY3RpdmUpIHtcbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LCBhY3RpdmVDbGFzcyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCwgYWN0aXZlQ2xhc3MpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLl9zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB0aGlzLm5nbFBpY2sub3B0aW9uUmVtb3ZlZCh0aGlzLl92YWx1ZSk7XG4gIH1cblxuICBwcml2YXRlIF9pc0FjdGl2ZSh2YWx1ZTogYW55KSB7XG4gICAgaWYgKHRoaXMubmdsUGljay5pc011bHRpcGxlKSB7XG4gICAgICBpZiAoIXZhbHVlKSB7IHJldHVybiBmYWxzZTsgfVxuICAgICAgcmV0dXJuIEFycmF5LmlzQXJyYXkodmFsdWUpID8gdmFsdWUuaW5kZXhPZih0aGlzLl92YWx1ZSkgPiAtMSA6ICEhdmFsdWVbdGhpcy5fdmFsdWVdO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5fdmFsdWUgPT09IHZhbHVlO1xuICAgIH1cbiAgfVxufVxuIl19
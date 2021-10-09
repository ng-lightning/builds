import { Directive, Input, HostListener, ElementRef, Renderer2 } from '@angular/core';
import { NglPick } from './pick';
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
NglPickOption.decorators = [
    { type: Directive, args: [{
                selector: '[nglPickOption]',
                exportAs: 'nglPickOption',
                host: {
                    'role': 'button',
                },
            },] }
];
NglPickOption.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: NglPick }
];
NglPickOption.propDecorators = {
    setValue: [{ type: Input, args: ['nglPickOption',] }],
    nglPickActiveClass: [{ type: Input }],
    pick: [{ type: HostListener, args: ['click',] }, { type: HostListener, args: ['keydown.Space', ['$event'],] }, { type: HostListener, args: ['keydown.Enter', ['$event'],] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGljay1vcHRpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1saWdodG5pbmcvc3JjL2xpYi9waWNrL3BpY2stb3B0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFxQixNQUFNLGVBQWUsQ0FBQztBQUV6RyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBU2pDLE1BQU0sT0FBTyxhQUFhO0lBaUJ4QixZQUFvQixPQUFtQixFQUFVLFFBQW1CLEVBQVUsT0FBZ0I7UUFBMUUsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQUFVLGFBQVEsR0FBUixRQUFRLENBQVc7UUFBVSxZQUFPLEdBQVAsT0FBTyxDQUFTO1FBSHRGLFlBQU8sR0FBRyxLQUFLLENBQUM7SUFHeUUsQ0FBQztJQWZsRywwQ0FBMEM7SUFDMUMsSUFBSSxNQUFNO1FBQ1IsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3RCLENBQUM7SUFFRCxJQUE0QixRQUFRLENBQUMsS0FBVTtRQUM3QyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUN0QixDQUFDO0lBYUQsSUFBSSxDQUFDLEdBQVc7UUFDZCxJQUFJLEdBQUcsRUFBRTtZQUNQLEdBQUcsQ0FBQyxjQUFjLEVBQUUsQ0FBQztTQUN0QjtRQUNELElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ3pELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUVyQyxNQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsa0JBQWtCLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQztZQUMvRSxJQUFJLFdBQVcsRUFBRTtnQkFDZixJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7b0JBQ2YsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsV0FBVyxDQUFDLENBQUM7aUJBQ2pFO3FCQUFNO29CQUNMLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLFdBQVcsQ0FBQyxDQUFDO2lCQUNwRTthQUNGO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDakMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFTyxTQUFTLENBQUMsS0FBVTtRQUMxQixJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFO1lBQzNCLElBQUksQ0FBQyxLQUFLLEVBQUU7Z0JBQUUsT0FBTyxLQUFLLENBQUM7YUFBRTtZQUM3QixPQUFPLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUN0RjthQUFNO1lBQ0wsT0FBTyxJQUFJLENBQUMsTUFBTSxLQUFLLEtBQUssQ0FBQztTQUM5QjtJQUNILENBQUM7OztZQS9ERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0IsUUFBUSxFQUFFLGVBQWU7Z0JBQ3pCLElBQUksRUFBRTtvQkFDSixNQUFNLEVBQUUsUUFBUTtpQkFDakI7YUFDRjs7O1lBVndDLFVBQVU7WUFBRSxTQUFTO1lBRXJELE9BQU87Ozt1QkFnQmIsS0FBSyxTQUFDLGVBQWU7aUNBSXJCLEtBQUs7bUJBUUwsWUFBWSxTQUFDLE9BQU8sY0FDcEIsWUFBWSxTQUFDLGVBQWUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxjQUN4QyxZQUFZLFNBQUMsZUFBZSxFQUFFLENBQUMsUUFBUSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgSG9zdExpc3RlbmVyLCBFbGVtZW50UmVmLCBSZW5kZXJlcjIsIE9uSW5pdCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IE5nbFBpY2sgfSBmcm9tICcuL3BpY2snO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbmdsUGlja09wdGlvbl0nLFxuICBleHBvcnRBczogJ25nbFBpY2tPcHRpb24nLFxuICBob3N0OiB7XG4gICAgJ3JvbGUnOiAnYnV0dG9uJyxcbiAgfSxcbn0pXG5leHBvcnQgY2xhc3MgTmdsUGlja09wdGlvbiBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuICAvLyBVc2UgYSBnZXR0ZXIgdG8gcHJldmVudCBkaXJlY3QgYWx0ZXJpbmdcbiAgZ2V0IGFjdGl2ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fYWN0aXZlO1xuICB9XG5cbiAgQElucHV0KCduZ2xQaWNrT3B0aW9uJykgc2V0IHNldFZhbHVlKHZhbHVlOiBhbnkpIHtcbiAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xuICB9XG5cbiAgQElucHV0KCkgbmdsUGlja0FjdGl2ZUNsYXNzOiBzdHJpbmc7XG5cbiAgcHJpdmF0ZSBfdmFsdWU6IGFueTtcbiAgcHJpdmF0ZSBfYWN0aXZlID0gZmFsc2U7XG4gIHByaXZhdGUgX3N1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudDogRWxlbWVudFJlZiwgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLCBwcml2YXRlIG5nbFBpY2s6IE5nbFBpY2spIHt9XG5cbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snKVxuICBASG9zdExpc3RlbmVyKCdrZXlkb3duLlNwYWNlJywgWyckZXZlbnQnXSlcbiAgQEhvc3RMaXN0ZW5lcigna2V5ZG93bi5FbnRlcicsIFsnJGV2ZW50J10pXG4gIHBpY2soZXZ0PzogRXZlbnQpIHtcbiAgICBpZiAoZXZ0KSB7XG4gICAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gICAgdGhpcy5uZ2xQaWNrLnNlbGVjdE9wdGlvbih0aGlzLl92YWx1ZSk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLl9zdWJzY3JpcHRpb24gPSB0aGlzLm5nbFBpY2sudmFsdWVzLnN1YnNjcmliZSh2YWx1ZSA9PiB7XG4gICAgICB0aGlzLl9hY3RpdmUgPSB0aGlzLl9pc0FjdGl2ZSh2YWx1ZSk7XG5cbiAgICAgIGNvbnN0IGFjdGl2ZUNsYXNzID0gdGhpcy5uZ2xQaWNrQWN0aXZlQ2xhc3MgfHwgdGhpcy5uZ2xQaWNrLm5nbFBpY2tBY3RpdmVDbGFzcztcbiAgICAgIGlmIChhY3RpdmVDbGFzcykge1xuICAgICAgICBpZiAodGhpcy5hY3RpdmUpIHtcbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LCBhY3RpdmVDbGFzcyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCwgYWN0aXZlQ2xhc3MpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLl9zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB0aGlzLm5nbFBpY2sub3B0aW9uUmVtb3ZlZCh0aGlzLl92YWx1ZSk7XG4gIH1cblxuICBwcml2YXRlIF9pc0FjdGl2ZSh2YWx1ZTogYW55KSB7XG4gICAgaWYgKHRoaXMubmdsUGljay5pc011bHRpcGxlKSB7XG4gICAgICBpZiAoIXZhbHVlKSB7IHJldHVybiBmYWxzZTsgfVxuICAgICAgcmV0dXJuIEFycmF5LmlzQXJyYXkodmFsdWUpID8gdmFsdWUuaW5kZXhPZih0aGlzLl92YWx1ZSkgPiAtMSA6ICEhdmFsdWVbdGhpcy5fdmFsdWVdO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5fdmFsdWUgPT09IHZhbHVlO1xuICAgIH1cbiAgfVxufVxuIl19
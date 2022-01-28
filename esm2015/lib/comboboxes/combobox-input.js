import { Directive, ElementRef, Renderer2, HostListener, HostBinding, Input } from '@angular/core';
import { uniqueId, trapEvent } from '../util/util';
import { DOWN_ARROW, ENTER, ESCAPE } from '@angular/cdk/keycodes';
import { fromEvent, BehaviorSubject } from 'rxjs';
import { buffer, debounceTime, map } from 'rxjs/operators';
import { NglComboboxService } from './combobox.service';
import { toBoolean } from '../util/convert';
const MAX_INTERVAL_BETWEEN_KEYSTROKES = 300; // ms
export class NglComboboxInput {
    constructor(service, el, renderer) {
        this.service = service;
        this.el = el;
        this.renderer = renderer;
        this.ɵRequiredSubject = new BehaviorSubject(false);
        const { nativeElement } = this.el;
        this.renderer.addClass(nativeElement, 'slds-input');
        this.renderer.addClass(nativeElement, 'slds-combobox__input');
        this.renderer.setAttribute(nativeElement, 'autoComplete', 'off');
        this.renderer.setAttribute(nativeElement, 'role', 'textbox');
        this.renderer.setAttribute(nativeElement, 'aria-controls', this.service.combobox.uid);
        if (!nativeElement.id) {
            this.renderer.setAttribute(nativeElement, 'id', uniqueId('combobox-input'));
        }
        const keyboardEvent$ = fromEvent(nativeElement, 'keypress').pipe(map((e) => e.keyCode));
        this.keyboardBuffer$ = keyboardEvent$.pipe(buffer(keyboardEvent$.pipe(debounceTime(MAX_INTERVAL_BETWEEN_KEYSTROKES))), map((keyCodes) => keyCodes.map((c) => String.fromCharCode(c)).join('')));
    }
    get isReadonly() {
        return this.service.combobox.variant === 'base' || this.service.combobox.hasLookupSingleSelection;
    }
    get ariaAutocomplete() {
        return this.service.combobox.isLookup ? 'list' : null;
    }
    get hasReadonlyValue() {
        return this.service.combobox.hasLookupSingleSelection;
    }
    set required(required) {
        this.ɵRequiredSubject.next(toBoolean(required));
    }
    get id() {
        return this.el.nativeElement.id;
    }
    setAriaActiveDescendant(uid) {
        if (uid) {
            this.renderer.setAttribute(this.el.nativeElement, 'aria-activedescendant', uid);
        }
        else {
            this.renderer.removeAttribute(this.el.nativeElement, 'aria-activedescendant');
        }
    }
    setValue(value) {
        this.renderer.setProperty(this.el.nativeElement, 'value', value !== null ? value : '');
    }
    focus() {
        this.el.nativeElement.focus();
    }
    onMouseInteraction() {
        if (this.service.combobox.hasLookupSingleSelection || (this.service.combobox.open && this.service.combobox.isLookup)) {
            return;
        }
        this.service.combobox.openChange.emit(!this.service.combobox.open);
    }
    onBlur() {
        this.service.combobox.openChange.emit(false);
    }
    onKeyboard(evt) {
        const keyCode = evt.keyCode;
        if (keyCode === ESCAPE) {
            // This is handled by CDK, and detaches overlay
            return;
        }
        if (this.service.combobox.open) {
            switch (keyCode) {
                // User selects currently active option by pressing the `Enter` key
                case ENTER:
                    trapEvent(evt);
                    this.service.combobox.onOptionSelection();
                    return;
                // Propagate to keymanager
                default:
                    this.service.combobox.keyManager.onKeydown(evt);
                    return;
            }
        }
        else {
            // Do nothing if readonly Lookup
            if (this.service.combobox.hasLookupSingleSelection) {
                return;
            }
            // Pressing the `Down` or `Enter` key will expand the collapsed menu
            if (keyCode === DOWN_ARROW || keyCode === ENTER) {
                trapEvent(evt);
                this.service.combobox.openChange.emit(true);
                return;
            }
            // Any key on Lookup should expand the collapsed menu
            if (this.service.combobox.isLookup) {
                // Delay emission so actual value of the input has been updated
                setTimeout(() => this.service.combobox.openChange.emit(true), 0);
            }
        }
    }
}
NglComboboxInput.decorators = [
    { type: Directive, args: [{
                selector: 'input[nglCombobox]',
            },] }
];
NglComboboxInput.ctorParameters = () => [
    { type: NglComboboxService },
    { type: ElementRef },
    { type: Renderer2 }
];
NglComboboxInput.propDecorators = {
    isReadonly: [{ type: HostBinding, args: ['readOnly',] }],
    ariaAutocomplete: [{ type: HostBinding, args: ['attr.aria-autocomplete',] }],
    hasReadonlyValue: [{ type: HostBinding, args: ['class.slds-combobox__input-value',] }],
    required: [{ type: Input }],
    onMouseInteraction: [{ type: HostListener, args: ['click',] }],
    onBlur: [{ type: HostListener, args: ['blur',] }],
    onKeyboard: [{ type: HostListener, args: ['keydown', ['$event'],] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tYm9ib3gtaW5wdXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1saWdodG5pbmcvc3JjL2xpYi9jb21ib2JveGVzL2NvbWJvYm94LWlucHV0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRyxPQUFPLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUNuRCxPQUFPLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNsRSxPQUFPLEVBQWMsU0FBUyxFQUFFLGVBQWUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUM5RCxPQUFPLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFNUMsTUFBTSwrQkFBK0IsR0FBRyxHQUFHLENBQUMsQ0FBQyxLQUFLO0FBS2xELE1BQU0sT0FBTyxnQkFBZ0I7SUE0QjNCLFlBQW9CLE9BQTJCLEVBQzNCLEVBQWMsRUFDZCxRQUFtQjtRQUZuQixZQUFPLEdBQVAsT0FBTyxDQUFvQjtRQUMzQixPQUFFLEdBQUYsRUFBRSxDQUFZO1FBQ2QsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQTNCdkMscUJBQWdCLEdBQUcsSUFBSSxlQUFlLENBQVUsS0FBSyxDQUFDLENBQUM7UUE0QnJELE1BQU0sRUFBRSxhQUFhLEVBQUUsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDO1FBQ2xDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLGFBQWEs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SUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyx3QkFBd0IsRUFBRTtnQkFDbEQsT0FBTzthQUNSO1lBRUQsb0VBQW9FO1lBQ3BFLElBQUksT0FBTyxLQUFLLFVBQVUsSUFBSSxPQUFPLEtBQUssS0FBSyxFQUFFO2dCQUMvQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2YsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDNUMsT0FBTzthQUNSO1lBRUQscURBQXFEO1lBQ3JELElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFO2dCQUNsQywrREFBK0Q7Z0JBQy9ELFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2FBQ2xFO1NBQ0Y7SUFDSCxDQUFDOzs7WUExSEYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxvQkFBb0I7YUFDL0I7OztZQVBRLGtCQUFrQjtZQUxQLFVBQVU7WUFBRSxTQUFTOzs7eUJBa0J0QyxXQUFXLFNBQUMsVUFBVTsrQkFLdEIsV0FBVyxTQUFDLHdCQUF3QjsrQkFLcEMsV0FBVyxTQUFDLGtDQUFrQzt1QkFLOUMsS0FBSztpQ0E0Q0wsWUFBWSxTQUFDLE9BQU87cUJBUXBCLFlBQVksU0FBQyxNQUFNO3lCQUtuQixZQUFZLFNBQUMsU0FBUyxFQUFFLENBQUMsUUFBUSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBSZW5kZXJlcjIsIEhvc3RMaXN0ZW5lciwgSG9zdEJpbmRpbmcsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyB1bmlxdWVJZCwgdHJhcEV2ZW50IH0gZnJvbSAnLi4vdXRpbC91dGlsJztcbmltcG9ydCB7IERPV05fQVJST1csIEVOVEVSLCBFU0NBUEUgfSBmcm9tICdAYW5ndWxhci9jZGsva2V5Y29kZXMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgZnJvbUV2ZW50LCBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGJ1ZmZlciwgZGVib3VuY2VUaW1lLCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBOZ2xDb21ib2JveFNlcnZpY2UgfSBmcm9tICcuL2NvbWJvYm94LnNlcnZpY2UnO1xuaW1wb3J0IHsgdG9Cb29sZWFuIH0gZnJvbSAnLi4vdXRpbC9jb252ZXJ0JztcblxuY29uc3QgTUFYX0lOVEVSVkFMX0JFVFdFRU5fS0VZU1RST0tFUyA9IDMwMDsgLy8gbXNcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnaW5wdXRbbmdsQ29tYm9ib3hdJyxcbn0pXG5leHBvcnQgY2xhc3MgTmdsQ29tYm9ib3hJbnB1dCB7XG5cbiAga2V5Ym9hcmRCdWZmZXIkOiBPYnNlcnZhYmxlPHN0cmluZz47XG4gIMm1UmVxdWlyZWRTdWJqZWN0ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPihmYWxzZSk7XG5cbiAgQEhvc3RCaW5kaW5nKCdyZWFkT25seScpXG4gIGdldCBpc1JlYWRvbmx5KCkge1xuICAgIHJldHVybiB0aGlzLnNlcnZpY2UuY29tYm9ib3gudmFyaWFudCA9PT0gJ2Jhc2UnIHx8IHRoaXMuc2VydmljZS5jb21ib2JveC5oYXNMb29rdXBTaW5nbGVTZWxlY3Rpb247XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2F0dHIuYXJpYS1hdXRvY29tcGxldGUnKVxuICBnZXQgYXJpYUF1dG9jb21wbGV0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5zZXJ2aWNlLmNvbWJvYm94LmlzTG9va3VwID8gJ2xpc3QnIDogbnVsbDtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3Muc2xkcy1jb21ib2JveF9faW5wdXQtdmFsdWUnKVxuICBnZXQgaGFzUmVhZG9ubHlWYWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5zZXJ2aWNlLmNvbWJvYm94Lmhhc0xvb2t1cFNpbmdsZVNlbGVjdGlvbjtcbiAgfVxuXG4gIEBJbnB1dCgpIHNldCByZXF1aXJlZChyZXF1aXJlZDogYW55KSB7XG4gICAgdGhpcy7JtVJlcXVpcmVkU3ViamVjdC5uZXh0KHRvQm9vbGVhbihyZXF1aXJlZCkpO1xuICB9XG5cbiAgZ2V0IGlkKCkge1xuICAgIHJldHVybiB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuaWQ7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNlcnZpY2U6IE5nbENvbWJvYm94U2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBlbDogRWxlbWVudFJlZixcbiAgICAgICAgICAgICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyKSB7XG4gICAgY29uc3QgeyBuYXRpdmVFbGVtZW50IH0gPSB0aGlzLmVsO1xuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3MobmF0aXZlRWxlbWVudCwgJ3NsZHMtaW5wdXQnKTtcbiAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKG5hdGl2ZUVsZW1lbnQsICdzbGRzLWNvbWJvYm94X19pbnB1dCcpO1xuICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKG5hdGl2ZUVsZW1lbnQsICdhdXRvQ29tcGxldGUnLCAnb2ZmJyk7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUobmF0aXZlRWxlbWVudCwgJ3JvbGUnLCAndGV4dGJveCcpO1xuICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKG5hdGl2ZUVsZW1lbnQsICdhcmlhLWNvbnRyb2xzJywgdGhpcy5zZXJ2aWNlLmNvbWJvYm94LnVpZCk7XG4gICAgaWYgKCFuYXRpdmVFbGVtZW50LmlkKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZShuYXRpdmVFbGVtZW50LCAnaWQnLCB1bmlxdWVJZCgnY29tYm9ib3gtaW5wdXQnKSk7XG4gICAgfVxuXG4gICAgY29uc3Qga2V5Ym9hcmRFdmVudCQgPSBmcm9tRXZlbnQobmF0aXZlRWxlbWVudCwgJ2tleXByZXNzJykucGlwZShtYXAoKGU6IEtleWJvYXJkRXZlbnQpID0+IGUua2V5Q29kZSkpO1xuICAgIHRoaXMua2V5Ym9hcmRCdWZmZXIkID0ga2V5Ym9hcmRFdmVudCQucGlwZShcbiAgICAgIGJ1ZmZlcihrZXlib2FyZEV2ZW50JC5waXBlKGRlYm91bmNlVGltZShNQVhfSU5URVJWQUxfQkVUV0VFTl9LRVlTVFJPS0VTKSkpLFxuICAgICAgbWFwKChrZXlDb2RlczogbnVtYmVyW10pID0+IGtleUNvZGVzLm1hcCgoYykgPT4gU3RyaW5nLmZyb21DaGFyQ29kZShjKSkuam9pbignJykpXG4gICAgKTtcbiAgfVxuXG4gIHNldEFyaWFBY3RpdmVEZXNjZW5kYW50KHVpZDogc3RyaW5nIHwgbnVsbCkge1xuICAgIGlmICh1aWQpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgJ2FyaWEtYWN0aXZlZGVzY2VuZGFudCcsIHVpZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQXR0cmlidXRlKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgJ2FyaWEtYWN0aXZlZGVzY2VuZGFudCcpO1xuICAgIH1cbiAgfVxuXG4gIHNldFZhbHVlKHZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLnJlbmRlcmVyLnNldFByb3BlcnR5KHRoaXMuZWwubmF0aXZlRWxlbWVudCwgJ3ZhbHVlJywgdmFsdWUgIT09IG51bGwgPyB2YWx1ZSA6ICcnKTtcbiAgfVxuXG4gIGZvY3VzKCkge1xuICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snKVxuICBvbk1vdXNlSW50ZXJhY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuc2VydmljZS5jb21ib2JveC5oYXNMb29rdXBTaW5nbGVTZWxlY3Rpb24gfHwgKHRoaXMuc2VydmljZS5jb21ib2JveC5vcGVuICYmIHRoaXMuc2VydmljZS5jb21ib2JveC5pc0xvb2t1cCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5zZXJ2aWNlLmNvbWJvYm94Lm9wZW5DaGFuZ2UuZW1pdCghdGhpcy5zZXJ2aWNlLmNvbWJvYm94Lm9wZW4pO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignYmx1cicpXG4gIG9uQmx1cigpIHtcbiAgICB0aGlzLnNlcnZpY2UuY29tYm9ib3gub3BlbkNoYW5nZS5lbWl0KGZhbHNlKTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2tleWRvd24nLCBbJyRldmVudCddKVxuICBvbktleWJvYXJkKGV2dDogS2V5Ym9hcmRFdmVudCkge1xuICAgIGNvbnN0IGtleUNvZGUgPSBldnQua2V5Q29kZTtcblxuICAgIGlmIChrZXlDb2RlID09PSBFU0NBUEUpIHtcbiAgICAgIC8vIFRoaXMgaXMgaGFuZGxlZCBieSBDREssIGFuZCBkZXRhY2hlcyBvdmVybGF5XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuc2VydmljZS5jb21ib2JveC5vcGVuKSB7XG4gICAgICBzd2l0Y2ggKGtleUNvZGUpIHtcbiAgICAgICAgLy8gVXNlciBzZWxlY3RzIGN1cnJlbnRseSBhY3RpdmUgb3B0aW9uIGJ5IHByZXNzaW5nIHRoZSBgRW50ZXJgIGtleVxuICAgICAgICBjYXNlIEVOVEVSOlxuICAgICAgICAgIHRyYXBFdmVudChldnQpO1xuICAgICAgICAgIHRoaXMuc2VydmljZS5jb21ib2JveC5vbk9wdGlvblNlbGVjdGlvbigpO1xuICAgICAgICAgIHJldHVybjtcblxuICAgICAgICAvLyBQcm9wYWdhdGUgdG8ga2V5bWFuYWdlclxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHRoaXMuc2VydmljZS5jb21ib2JveC5rZXlNYW5hZ2VyLm9uS2V5ZG93bihldnQpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuXG4gICAgICAvLyBEbyBub3RoaW5nIGlmIHJlYWRvbmx5IExvb2t1cFxuICAgICAgaWYgKHRoaXMuc2VydmljZS5jb21ib2JveC5oYXNMb29rdXBTaW5nbGVTZWxlY3Rpb24pIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBQcmVzc2luZyB0aGUgYERvd25gIG9yIGBFbnRlcmAga2V5IHdpbGwgZXhwYW5kIHRoZSBjb2xsYXBzZWQgbWVudVxuICAgICAgaWYgKGtleUNvZGUgPT09IERPV05fQVJST1cgfHwga2V5Q29kZSA9PT0gRU5URVIpIHtcbiAgICAgICAgdHJhcEV2ZW50KGV2dCk7XG4gICAgICAgIHRoaXMuc2VydmljZS5jb21ib2JveC5vcGVuQ2hhbmdlLmVtaXQodHJ1ZSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gQW55IGtleSBvbiBMb29rdXAgc2hvdWxkIGV4cGFuZCB0aGUgY29sbGFwc2VkIG1lbnVcbiAgICAgIGlmICh0aGlzLnNlcnZpY2UuY29tYm9ib3guaXNMb29rdXApIHtcbiAgICAgICAgLy8gRGVsYXkgZW1pc3Npb24gc28gYWN0dWFsIHZhbHVlIG9mIHRoZSBpbnB1dCBoYXMgYmVlbiB1cGRhdGVkXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5zZXJ2aWNlLmNvbWJvYm94Lm9wZW5DaGFuZ2UuZW1pdCh0cnVlKSwgMCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbn1cbiJdfQ==
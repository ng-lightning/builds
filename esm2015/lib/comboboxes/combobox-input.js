import { Directive, ElementRef, Renderer2, HostListener, HostBinding } from '@angular/core';
import { uniqueId, trapEvent } from '../util/util';
import { DOWN_ARROW, ENTER, ESCAPE } from '@angular/cdk/keycodes';
import { fromEvent } from 'rxjs';
import { buffer, debounceTime, map } from 'rxjs/operators';
import { NglComboboxService } from './combobox.service';
const MAX_INTERVAL_BETWEEN_KEYSTROKES = 300; // ms
export class NglComboboxInput {
    constructor(service, el, renderer) {
        this.service = service;
        this.el = el;
        this.renderer = renderer;
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
    onMouseInteraction: [{ type: HostListener, args: ['click',] }],
    onBlur: [{ type: HostListener, args: ['blur',] }],
    onKeyboard: [{ type: HostListener, args: ['keydown', ['$event'],] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tYm9ib3gtaW5wdXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1saWdodG5pbmcvc3JjL2xpYi9jb21ib2JveGVzL2NvbWJvYm94LWlucHV0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzVGLE9BQU8sRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQ25ELE9BQU8sRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2xFLE9BQU8sRUFBYyxTQUFTLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDN0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFeEQsTUFBTSwrQkFBK0IsR0FBRyxHQUFHLENBQUMsQ0FBQyxLQUFLO0FBS2xELE1BQU0sT0FBTyxnQkFBZ0I7SUF1QjNCLFlBQW9CLE9BQTJCLEVBQzNCLEVBQWMsRUFDZCxRQUFtQjtRQUZuQixZQUFPLEdBQVAsT0FBTyxDQUFvQjtRQUMzQixPQUFFLEdBQUYsRUFBRSxDQUFZO1FBQ2QsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNyQyxNQUFNLEVBQUUsYUFBYSxFQUFFLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQztRQUNsQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFDcEQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsYUFBYSxFQUFFLHNCQUFzQixDQUFDLENBQUM7UUFDOUQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZ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QUksQ0FBQyxDQUFDO2dCQUM1QyxPQUFPO2FBQ1I7WUFFRCxxREFBcUQ7WUFDckQsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUU7Z0JBQ2xDLCtEQUErRDtnQkFDL0QsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7YUFDbEU7U0FDRjtJQUNILENBQUM7OztZQXJIRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjthQUMvQjs7O1lBTlEsa0JBQWtCO1lBTFAsVUFBVTtZQUFFLFNBQVM7Ozt5QkFnQnRDLFdBQVcsU0FBQyxVQUFVOytCQUt0QixXQUFXLFNBQUMsd0JBQXdCOytCQUtwQyxXQUFXLFNBQUMsa0NBQWtDO2lDQTZDOUMsWUFBWSxTQUFDLE9BQU87cUJBUXBCLFlBQVksU0FBQyxNQUFNO3lCQUtuQixZQUFZLFNBQUMsU0FBUyxFQUFFLENBQUMsUUFBUSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBSZW5kZXJlcjIsIEhvc3RMaXN0ZW5lciwgSG9zdEJpbmRpbmcgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHVuaXF1ZUlkLCB0cmFwRXZlbnQgfSBmcm9tICcuLi91dGlsL3V0aWwnO1xuaW1wb3J0IHsgRE9XTl9BUlJPVywgRU5URVIsIEVTQ0FQRSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9rZXljb2Rlcyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBmcm9tRXZlbnQgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGJ1ZmZlciwgZGVib3VuY2VUaW1lLCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBOZ2xDb21ib2JveFNlcnZpY2UgfSBmcm9tICcuL2NvbWJvYm94LnNlcnZpY2UnO1xuXG5jb25zdCBNQVhfSU5URVJWQUxfQkVUV0VFTl9LRVlTVFJPS0VTID0gMzAwOyAvLyBtc1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdpbnB1dFtuZ2xDb21ib2JveF0nLFxufSlcbmV4cG9ydCBjbGFzcyBOZ2xDb21ib2JveElucHV0IHtcblxuICBrZXlib2FyZEJ1ZmZlciQ6IE9ic2VydmFibGU8c3RyaW5nPjtcblxuICBASG9zdEJpbmRpbmcoJ3JlYWRPbmx5JylcbiAgZ2V0IGlzUmVhZG9ubHkoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2VydmljZS5jb21ib2JveC52YXJpYW50ID09PSAnYmFzZScgfHwgdGhpcy5zZXJ2aWNlLmNvbWJvYm94Lmhhc0xvb2t1cFNpbmdsZVNlbGVjdGlvbjtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnYXR0ci5hcmlhLWF1dG9jb21wbGV0ZScpXG4gIGdldCBhcmlhQXV0b2NvbXBsZXRlKCkge1xuICAgIHJldHVybiB0aGlzLnNlcnZpY2UuY29tYm9ib3guaXNMb29rdXAgPyAnbGlzdCcgOiBudWxsO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5zbGRzLWNvbWJvYm94X19pbnB1dC12YWx1ZScpXG4gIGdldCBoYXNSZWFkb25seVZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLnNlcnZpY2UuY29tYm9ib3guaGFzTG9va3VwU2luZ2xlU2VsZWN0aW9uO1xuICB9XG5cbiAgZ2V0IGlkKCkge1xuICAgIHJldHVybiB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuaWQ7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNlcnZpY2U6IE5nbENvbWJvYm94U2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBlbDogRWxlbWVudFJlZixcbiAgICAgICAgICAgICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyKSB7XG4gICAgY29uc3QgeyBuYXRpdmVFbGVtZW50IH0gPSB0aGlzLmVsO1xuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3MobmF0aXZlRWxlbWVudCwgJ3NsZHMtaW5wdXQnKTtcbiAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKG5hdGl2ZUVsZW1lbnQsICdzbGRzLWNvbWJvYm94X19pbnB1dCcpO1xuICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKG5hdGl2ZUVsZW1lbnQsICdhdXRvQ29tcGxldGUnLCAnb2ZmJyk7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUobmF0aXZlRWxlbWVudCwgJ3JvbGUnLCAndGV4dGJveCcpO1xuICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKG5hdGl2ZUVsZW1lbnQsICdhcmlhLWNvbnRyb2xzJywgdGhpcy5zZXJ2aWNlLmNvbWJvYm94LnVpZCk7XG4gICAgaWYgKCFuYXRpdmVFbGVtZW50LmlkKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZShuYXRpdmVFbGVtZW50LCAnaWQnLCB1bmlxdWVJZCgnY29tYm9ib3gtaW5wdXQnKSk7XG4gICAgfVxuXG4gICAgY29uc3Qga2V5Ym9hcmRFdmVudCQgPSBmcm9tRXZlbnQobmF0aXZlRWxlbWVudCwgJ2tleXByZXNzJykucGlwZShtYXAoKGU6IEtleWJvYXJkRXZlbnQpID0+IGUua2V5Q29kZSkpO1xuICAgIHRoaXMua2V5Ym9hcmRCdWZmZXIkID0ga2V5Ym9hcmRFdmVudCQucGlwZShcbiAgICAgIGJ1ZmZlcihrZXlib2FyZEV2ZW50JC5waXBlKGRlYm91bmNlVGltZShNQVhfSU5URVJWQUxfQkVUV0VFTl9LRVlTVFJPS0VTKSkpLFxuICAgICAgbWFwKChrZXlDb2RlczogbnVtYmVyW10pID0+IGtleUNvZGVzLm1hcCgoYykgPT4gU3RyaW5nLmZyb21DaGFyQ29kZShjKSkuam9pbignJykpXG4gICAgKTtcbiAgfVxuXG4gIHNldEFyaWFBY3RpdmVEZXNjZW5kYW50KHVpZDogc3RyaW5nIHwgbnVsbCkge1xuICAgIGlmICh1aWQpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgJ2FyaWEtYWN0aXZlZGVzY2VuZGFudCcsIHVpZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQXR0cmlidXRlKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgJ2FyaWEtYWN0aXZlZGVzY2VuZGFudCcpO1xuICAgIH1cbiAgfVxuXG4gIHNldFZhbHVlKHZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLnJlbmRlcmVyLnNldFByb3BlcnR5KHRoaXMuZWwubmF0aXZlRWxlbWVudCwgJ3ZhbHVlJywgdmFsdWUgIT09IG51bGwgPyB2YWx1ZSA6ICcnKTtcbiAgfVxuXG4gIGZvY3VzKCkge1xuICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snKVxuICBvbk1vdXNlSW50ZXJhY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuc2VydmljZS5jb21ib2JveC5oYXNMb29rdXBTaW5nbGVTZWxlY3Rpb24gfHwgKHRoaXMuc2VydmljZS5jb21ib2JveC5vcGVuICYmIHRoaXMuc2VydmljZS5jb21ib2JveC5pc0xvb2t1cCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5zZXJ2aWNlLmNvbWJvYm94Lm9wZW5DaGFuZ2UuZW1pdCghdGhpcy5zZXJ2aWNlLmNvbWJvYm94Lm9wZW4pO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignYmx1cicpXG4gIG9uQmx1cigpIHtcbiAgICB0aGlzLnNlcnZpY2UuY29tYm9ib3gub3BlbkNoYW5nZS5lbWl0KGZhbHNlKTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2tleWRvd24nLCBbJyRldmVudCddKVxuICBvbktleWJvYXJkKGV2dDogS2V5Ym9hcmRFdmVudCkge1xuICAgIGNvbnN0IGtleUNvZGUgPSBldnQua2V5Q29kZTtcblxuICAgIGlmIChrZXlDb2RlID09PSBFU0NBUEUpIHtcbiAgICAgIC8vIFRoaXMgaXMgaGFuZGxlZCBieSBDREssIGFuZCBkZXRhY2hlcyBvdmVybGF5XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuc2VydmljZS5jb21ib2JveC5vcGVuKSB7XG4gICAgICBzd2l0Y2ggKGtleUNvZGUpIHtcbiAgICAgICAgLy8gVXNlciBzZWxlY3RzIGN1cnJlbnRseSBhY3RpdmUgb3B0aW9uIGJ5IHByZXNzaW5nIHRoZSBgRW50ZXJgIGtleVxuICAgICAgICBjYXNlIEVOVEVSOlxuICAgICAgICAgIHRyYXBFdmVudChldnQpO1xuICAgICAgICAgIHRoaXMuc2VydmljZS5jb21ib2JveC5vbk9wdGlvblNlbGVjdGlvbigpO1xuICAgICAgICAgIHJldHVybjtcblxuICAgICAgICAvLyBQcm9wYWdhdGUgdG8ga2V5bWFuYWdlclxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHRoaXMuc2VydmljZS5jb21ib2JveC5rZXlNYW5hZ2VyLm9uS2V5ZG93bihldnQpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuXG4gICAgICAvLyBEbyBub3RoaW5nIGlmIHJlYWRvbmx5IExvb2t1cFxuICAgICAgaWYgKHRoaXMuc2VydmljZS5jb21ib2JveC5oYXNMb29rdXBTaW5nbGVTZWxlY3Rpb24pIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBQcmVzc2luZyB0aGUgYERvd25gIG9yIGBFbnRlcmAga2V5IHdpbGwgZXhwYW5kIHRoZSBjb2xsYXBzZWQgbWVudVxuICAgICAgaWYgKGtleUNvZGUgPT09IERPV05fQVJST1cgfHwga2V5Q29kZSA9PT0gRU5URVIpIHtcbiAgICAgICAgdHJhcEV2ZW50KGV2dCk7XG4gICAgICAgIHRoaXMuc2VydmljZS5jb21ib2JveC5vcGVuQ2hhbmdlLmVtaXQodHJ1ZSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gQW55IGtleSBvbiBMb29rdXAgc2hvdWxkIGV4cGFuZCB0aGUgY29sbGFwc2VkIG1lbnVcbiAgICAgIGlmICh0aGlzLnNlcnZpY2UuY29tYm9ib3guaXNMb29rdXApIHtcbiAgICAgICAgLy8gRGVsYXkgZW1pc3Npb24gc28gYWN0dWFsIHZhbHVlIG9mIHRoZSBpbnB1dCBoYXMgYmVlbiB1cGRhdGVkXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5zZXJ2aWNlLmNvbWJvYm94Lm9wZW5DaGFuZ2UuZW1pdCh0cnVlKSwgMCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbn1cbiJdfQ==
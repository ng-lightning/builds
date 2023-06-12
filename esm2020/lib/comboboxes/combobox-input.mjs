import { Directive, HostListener, HostBinding, Input } from '@angular/core';
import { uniqueId, trapEvent } from '../util/util';
import { DOWN_ARROW, ENTER, ESCAPE } from '@angular/cdk/keycodes';
import { fromEvent, BehaviorSubject } from 'rxjs';
import { buffer, debounceTime, map } from 'rxjs/operators';
import { toBoolean } from '../util/convert';
import * as i0 from "@angular/core";
import * as i1 from "./combobox.service";
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
NglComboboxInput.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglComboboxInput, deps: [{ token: i1.NglComboboxService }, { token: i0.ElementRef }, { token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Directive });
NglComboboxInput.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.2.9", type: NglComboboxInput, selector: "input[nglCombobox]", inputs: { required: "required" }, host: { listeners: { "click": "onMouseInteraction()", "blur": "onBlur()", "keydown": "onKeyboard($event)" }, properties: { "readOnly": "this.isReadonly", "attr.aria-autocomplete": "this.ariaAutocomplete", "class.slds-combobox__input-value": "this.hasReadonlyValue" } }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglComboboxInput, decorators: [{
            type: Directive,
            args: [{
                    selector: 'input[nglCombobox]',
                }]
        }], ctorParameters: function () { return [{ type: i1.NglComboboxService }, { type: i0.ElementRef }, { type: i0.Renderer2 }]; }, propDecorators: { isReadonly: [{
                type: HostBinding,
                args: ['readOnly']
            }], ariaAutocomplete: [{
                type: HostBinding,
                args: ['attr.aria-autocomplete']
            }], hasReadonlyValue: [{
                type: HostBinding,
                args: ['class.slds-combobox__input-value']
            }], required: [{
                type: Input
            }], onMouseInteraction: [{
                type: HostListener,
                args: ['click']
            }], onBlur: [{
                type: HostListener,
                args: ['blur']
            }], onKeyboard: [{
                type: HostListener,
                args: ['keydown', ['$event']]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tYm9ib3gtaW5wdXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1saWdodG5pbmcvc3JjL2xpYi9jb21ib2JveGVzL2NvbWJvYm94LWlucHV0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXlCLFlBQVksRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25HLE9BQU8sRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQ25ELE9BQU8sRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2xFLE9BQU8sRUFBYyxTQUFTLEVBQUUsZUFBZSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzlELE9BQU8sRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTNELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7O0FBRTVDLE1BQU0sK0JBQStCLEdBQUcsR0FBRyxDQUFDLENBQUMsS0FBSztBQUtsRCxNQUFNLE9BQU8sZ0JBQWdCO0lBNEIzQixZQUFvQixPQUEyQixFQUMzQixFQUFjLEVBQ2QsUUFBbUI7UUFGbkIsWUFBTyxHQUFQLE9BQU8sQ0FBb0I7UUFDM0IsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUNkLGFBQVEsR0FBUixRQUFRLENBQVc7UUEzQnZDLHFCQUFnQixHQUFHLElBQUksZUFBZSxDQUFVLEtBQUssQ0FBQyxDQUFDO1FBNEJyRCxNQUFNLEVBQUUsYUFBYSxFQUFFLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQztRQUNsQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFDcEQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsYUFBYSxF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UjtZQUVELG9FQUFvRTtZQUNwRSxJQUFJLE9BQU8sS0FBSyxVQUFVLElBQUksT0FBTyxLQUFLLEtBQUssRUFBRTtnQkFDL0MsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNmLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQzVDLE9BQU87YUFDUjtZQUVELHFEQUFxRDtZQUNyRCxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRTtnQkFDbEMsK0RBQStEO2dCQUMvRCxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQzthQUNsRTtTQUNGO0lBQ0gsQ0FBQzs7NkdBdkhVLGdCQUFnQjtpR0FBaEIsZ0JBQWdCOzJGQUFoQixnQkFBZ0I7a0JBSDVCLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjtpQkFDL0I7MEpBT0ssVUFBVTtzQkFEYixXQUFXO3VCQUFDLFVBQVU7Z0JBTW5CLGdCQUFnQjtzQkFEbkIsV0FBVzt1QkFBQyx3QkFBd0I7Z0JBTWpDLGdCQUFnQjtzQkFEbkIsV0FBVzt1QkFBQyxrQ0FBa0M7Z0JBS2xDLFFBQVE7c0JBQXBCLEtBQUs7Z0JBNkNOLGtCQUFrQjtzQkFEakIsWUFBWTt1QkFBQyxPQUFPO2dCQVNyQixNQUFNO3NCQURMLFlBQVk7dUJBQUMsTUFBTTtnQkFNcEIsVUFBVTtzQkFEVCxZQUFZO3VCQUFDLFNBQVMsRUFBRSxDQUFDLFFBQVEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgUmVuZGVyZXIyLCBIb3N0TGlzdGVuZXIsIEhvc3RCaW5kaW5nLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgdW5pcXVlSWQsIHRyYXBFdmVudCB9IGZyb20gJy4uL3V0aWwvdXRpbCc7XG5pbXBvcnQgeyBET1dOX0FSUk9XLCBFTlRFUiwgRVNDQVBFIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2tleWNvZGVzJztcbmltcG9ydCB7IE9ic2VydmFibGUsIGZyb21FdmVudCwgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBidWZmZXIsIGRlYm91bmNlVGltZSwgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgTmdsQ29tYm9ib3hTZXJ2aWNlIH0gZnJvbSAnLi9jb21ib2JveC5zZXJ2aWNlJztcbmltcG9ydCB7IHRvQm9vbGVhbiB9IGZyb20gJy4uL3V0aWwvY29udmVydCc7XG5cbmNvbnN0IE1BWF9JTlRFUlZBTF9CRVRXRUVOX0tFWVNUUk9LRVMgPSAzMDA7IC8vIG1zXG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ2lucHV0W25nbENvbWJvYm94XScsXG59KVxuZXhwb3J0IGNsYXNzIE5nbENvbWJvYm94SW5wdXQge1xuXG4gIGtleWJvYXJkQnVmZmVyJDogT2JzZXJ2YWJsZTxzdHJpbmc+O1xuICDJtVJlcXVpcmVkU3ViamVjdCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4oZmFsc2UpO1xuXG4gIEBIb3N0QmluZGluZygncmVhZE9ubHknKVxuICBnZXQgaXNSZWFkb25seSgpIHtcbiAgICByZXR1cm4gdGhpcy5zZXJ2aWNlLmNvbWJvYm94LnZhcmlhbnQgPT09ICdiYXNlJyB8fCB0aGlzLnNlcnZpY2UuY29tYm9ib3guaGFzTG9va3VwU2luZ2xlU2VsZWN0aW9uO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdhdHRyLmFyaWEtYXV0b2NvbXBsZXRlJylcbiAgZ2V0IGFyaWFBdXRvY29tcGxldGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2VydmljZS5jb21ib2JveC5pc0xvb2t1cCA/ICdsaXN0JyA6IG51bGw7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnNsZHMtY29tYm9ib3hfX2lucHV0LXZhbHVlJylcbiAgZ2V0IGhhc1JlYWRvbmx5VmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2VydmljZS5jb21ib2JveC5oYXNMb29rdXBTaW5nbGVTZWxlY3Rpb247XG4gIH1cblxuICBASW5wdXQoKSBzZXQgcmVxdWlyZWQocmVxdWlyZWQ6IGFueSkge1xuICAgIHRoaXMuybVSZXF1aXJlZFN1YmplY3QubmV4dCh0b0Jvb2xlYW4ocmVxdWlyZWQpKTtcbiAgfVxuXG4gIGdldCBpZCgpIHtcbiAgICByZXR1cm4gdGhpcy5lbC5uYXRpdmVFbGVtZW50LmlkO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzZXJ2aWNlOiBOZ2xDb21ib2JveFNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsXG4gICAgICAgICAgICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMikge1xuICAgIGNvbnN0IHsgbmF0aXZlRWxlbWVudCB9ID0gdGhpcy5lbDtcbiAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKG5hdGl2ZUVsZW1lbnQsICdzbGRzLWlucHV0Jyk7XG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyhuYXRpdmVFbGVtZW50LCAnc2xkcy1jb21ib2JveF9faW5wdXQnKTtcbiAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZShuYXRpdmVFbGVtZW50LCAnYXV0b0NvbXBsZXRlJywgJ29mZicpO1xuICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKG5hdGl2ZUVsZW1lbnQsICdyb2xlJywgJ3RleHRib3gnKTtcbiAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZShuYXRpdmVFbGVtZW50LCAnYXJpYS1jb250cm9scycsIHRoaXMuc2VydmljZS5jb21ib2JveC51aWQpO1xuICAgIGlmICghbmF0aXZlRWxlbWVudC5pZCkge1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUobmF0aXZlRWxlbWVudCwgJ2lkJywgdW5pcXVlSWQoJ2NvbWJvYm94LWlucHV0JykpO1xuICAgIH1cblxuICAgIGNvbnN0IGtleWJvYXJkRXZlbnQkID0gZnJvbUV2ZW50KG5hdGl2ZUVsZW1lbnQsICdrZXlwcmVzcycpLnBpcGUobWFwKChlOiBLZXlib2FyZEV2ZW50KSA9PiBlLmtleUNvZGUpKTtcbiAgICB0aGlzLmtleWJvYXJkQnVmZmVyJCA9IGtleWJvYXJkRXZlbnQkLnBpcGUoXG4gICAgICBidWZmZXIoa2V5Ym9hcmRFdmVudCQucGlwZShkZWJvdW5jZVRpbWUoTUFYX0lOVEVSVkFMX0JFVFdFRU5fS0VZU1RST0tFUykpKSxcbiAgICAgIG1hcCgoa2V5Q29kZXM6IG51bWJlcltdKSA9PiBrZXlDb2Rlcy5tYXAoKGMpID0+IFN0cmluZy5mcm9tQ2hhckNvZGUoYykpLmpvaW4oJycpKVxuICAgICk7XG4gIH1cblxuICBzZXRBcmlhQWN0aXZlRGVzY2VuZGFudCh1aWQ6IHN0cmluZyB8IG51bGwpIHtcbiAgICBpZiAodWlkKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZSh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsICdhcmlhLWFjdGl2ZWRlc2NlbmRhbnQnLCB1aWQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUF0dHJpYnV0ZSh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsICdhcmlhLWFjdGl2ZWRlc2NlbmRhbnQnKTtcbiAgICB9XG4gIH1cblxuICBzZXRWYWx1ZSh2YWx1ZTogYW55KTogdm9pZCB7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRQcm9wZXJ0eSh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsICd2YWx1ZScsIHZhbHVlICE9PSBudWxsID8gdmFsdWUgOiAnJyk7XG4gIH1cblxuICBmb2N1cygpIHtcbiAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJylcbiAgb25Nb3VzZUludGVyYWN0aW9uKCkge1xuICAgIGlmICh0aGlzLnNlcnZpY2UuY29tYm9ib3guaGFzTG9va3VwU2luZ2xlU2VsZWN0aW9uIHx8ICh0aGlzLnNlcnZpY2UuY29tYm9ib3gub3BlbiAmJiB0aGlzLnNlcnZpY2UuY29tYm9ib3guaXNMb29rdXApKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuc2VydmljZS5jb21ib2JveC5vcGVuQ2hhbmdlLmVtaXQoIXRoaXMuc2VydmljZS5jb21ib2JveC5vcGVuKTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2JsdXInKVxuICBvbkJsdXIoKSB7XG4gICAgdGhpcy5zZXJ2aWNlLmNvbWJvYm94Lm9wZW5DaGFuZ2UuZW1pdChmYWxzZSk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdrZXlkb3duJywgWyckZXZlbnQnXSlcbiAgb25LZXlib2FyZChldnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICBjb25zdCBrZXlDb2RlID0gZXZ0LmtleUNvZGU7XG5cbiAgICBpZiAoa2V5Q29kZSA9PT0gRVNDQVBFKSB7XG4gICAgICAvLyBUaGlzIGlzIGhhbmRsZWQgYnkgQ0RLLCBhbmQgZGV0YWNoZXMgb3ZlcmxheVxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnNlcnZpY2UuY29tYm9ib3gub3Blbikge1xuICAgICAgc3dpdGNoIChrZXlDb2RlKSB7XG4gICAgICAgIC8vIFVzZXIgc2VsZWN0cyBjdXJyZW50bHkgYWN0aXZlIG9wdGlvbiBieSBwcmVzc2luZyB0aGUgYEVudGVyYCBrZXlcbiAgICAgICAgY2FzZSBFTlRFUjpcbiAgICAgICAgICB0cmFwRXZlbnQoZXZ0KTtcbiAgICAgICAgICB0aGlzLnNlcnZpY2UuY29tYm9ib3gub25PcHRpb25TZWxlY3Rpb24oKTtcbiAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgLy8gUHJvcGFnYXRlIHRvIGtleW1hbmFnZXJcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICB0aGlzLnNlcnZpY2UuY29tYm9ib3gua2V5TWFuYWdlci5vbktleWRvd24oZXZ0KTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfSBlbHNlIHtcblxuICAgICAgLy8gRG8gbm90aGluZyBpZiByZWFkb25seSBMb29rdXBcbiAgICAgIGlmICh0aGlzLnNlcnZpY2UuY29tYm9ib3guaGFzTG9va3VwU2luZ2xlU2VsZWN0aW9uKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gUHJlc3NpbmcgdGhlIGBEb3duYCBvciBgRW50ZXJgIGtleSB3aWxsIGV4cGFuZCB0aGUgY29sbGFwc2VkIG1lbnVcbiAgICAgIGlmIChrZXlDb2RlID09PSBET1dOX0FSUk9XIHx8IGtleUNvZGUgPT09IEVOVEVSKSB7XG4gICAgICAgIHRyYXBFdmVudChldnQpO1xuICAgICAgICB0aGlzLnNlcnZpY2UuY29tYm9ib3gub3BlbkNoYW5nZS5lbWl0KHRydWUpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIEFueSBrZXkgb24gTG9va3VwIHNob3VsZCBleHBhbmQgdGhlIGNvbGxhcHNlZCBtZW51XG4gICAgICBpZiAodGhpcy5zZXJ2aWNlLmNvbWJvYm94LmlzTG9va3VwKSB7XG4gICAgICAgIC8vIERlbGF5IGVtaXNzaW9uIHNvIGFjdHVhbCB2YWx1ZSBvZiB0aGUgaW5wdXQgaGFzIGJlZW4gdXBkYXRlZFxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuc2VydmljZS5jb21ib2JveC5vcGVuQ2hhbmdlLmVtaXQodHJ1ZSksIDApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG59XG4iXX0=
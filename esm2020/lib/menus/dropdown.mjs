import { __decorate } from "tslib";
import { Directive, Input, Output, EventEmitter, HostListener, ContentChildren } from '@angular/core';
import { toBoolean, InputBoolean } from '../util/convert';
import { NglDropdownItem } from './dropdown-item';
import * as i0 from "@angular/core";
const openEventEmitter = new EventEmitter();
export class NglDropdown {
    constructor(element, renderer) {
        this.element = element;
        this.renderer = renderer;
        this.handlePageEvents = true;
        this.isOpenChange = new EventEmitter();
        this.triggerFocusEventEmitter = new EventEmitter();
        this._isOpen = false;
        this.globalClickEventUnsubscriber = null;
        this.clickEventUnsubscriber = null;
    }
    set isOpen(isOpen) {
        this._isOpen = toBoolean(isOpen);
        if (this.isOpen) {
            this.clearGlobalClickTimeout();
            this.globalClickTimeout = setTimeout(() => {
                if (this.handlePageEvents) {
                    this._subscribeToClickEvents();
                }
            });
            this.renderer.addClass(this.element.nativeElement, 'slds-is-open');
        }
        else {
            this._unsubscribeFromClickEvents();
            this.renderer.removeClass(this.element.nativeElement, 'slds-is-open');
        }
        this.renderer.setAttribute(this.element.nativeElement, 'aria-expanded', `${this.isOpen}`);
    }
    get isOpen() {
        return this._isOpen;
    }
    onKeydownClose(eventName) {
        this.toggle(false);
        if (eventName === 'esc') {
            this.triggerFocusEventEmitter.emit(null);
        }
    }
    onKeydownFocusNext($event, direction) {
        $event.preventDefault();
        this.focusItem(direction);
    }
    ngOnInit() {
        this.openEventSubscription = openEventEmitter.subscribe(this.handleDropdownOpenEvent.bind(this));
    }
    ngOnDestroy() {
        this.clearGlobalClickTimeout();
        if (this.openEventSubscription) {
            this.openEventSubscription.unsubscribe();
        }
        this._unsubscribeFromClickEvents();
    }
    toggle(toggle = !this.isOpen, focus = false) {
        if (toggle === this.isOpen) {
            return;
        }
        this.isOpenChange.emit(toggle);
        if (toggle) {
            openEventEmitter.emit(this);
            if (focus) {
                this.focusItem('next');
            }
        }
    }
    handleGlobalClickEvent($event) {
        if (!this.handlePageEvents || $event.$nglStop) {
            return;
        }
        this.toggle(false);
    }
    _subscribeToClickEvents() {
        this._unsubscribeFromClickEvents();
        // Prevent document listener to close it, since click happened inside
        this.clickEventUnsubscriber = this.renderer.listen(this.element.nativeElement, 'click', ($event) => $event.$nglStop = true);
        this.globalClickEventUnsubscriber = this.renderer.listen('document', 'click', this.handleGlobalClickEvent.bind(this));
    }
    _unsubscribeFromClickEvents() {
        if (this.clickEventUnsubscriber) {
            this.clickEventUnsubscriber();
            this.clickEventUnsubscriber = null;
        }
        if (this.globalClickEventUnsubscriber) {
            this.globalClickEventUnsubscriber();
            this.globalClickEventUnsubscriber = null;
        }
    }
    clearGlobalClickTimeout() {
        clearTimeout(this.globalClickTimeout);
    }
    focusItem(direction) {
        if (!this.items.length) {
            return;
        }
        const items = this.items.toArray();
        const activeElementIndex = items.findIndex(item => item.hasFocus()) + (direction === 'next' ? 1 : -1);
        if (activeElementIndex === items.length || activeElementIndex < 0) {
            return;
        }
        items[activeElementIndex].focus();
    }
    handleDropdownOpenEvent(dropdown) {
        if (dropdown !== this) {
            this.toggle(false);
        }
    }
}
NglDropdown.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglDropdown, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Directive });
NglDropdown.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.2.9", type: NglDropdown, selector: "[nglDropdown]", inputs: { isOpen: ["open", "isOpen"], handlePageEvents: "handlePageEvents" }, outputs: { isOpenChange: "openChange" }, host: { listeners: { "keydown.esc": "onKeydownClose(\"esc\")", "keydown.tab": "onKeydownClose(\"tab\")", "keydown.arrowdown": "onKeydownFocusNext($event,\"next\")", "keydown.arrowup": "onKeydownFocusNext($event,\"previous\")" }, properties: { "class.slds-dropdown-trigger": "true", "class.slds-dropdown-trigger_click": "true" } }, queries: [{ propertyName: "items", predicate: NglDropdownItem, descendants: true }], ngImport: i0 });
__decorate([
    InputBoolean()
], NglDropdown.prototype, "handlePageEvents", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglDropdown, decorators: [{
            type: Directive,
            args: [{
                    selector: '[nglDropdown]',
                    host: {
                        '[class.slds-dropdown-trigger]': 'true',
                        '[class.slds-dropdown-trigger_click]': 'true',
                    },
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }]; }, propDecorators: { isOpen: [{
                type: Input,
                args: ['open']
            }], handlePageEvents: [{
                type: Input
            }], items: [{
                type: ContentChildren,
                args: [NglDropdownItem, { descendants: true }]
            }], isOpenChange: [{
                type: Output,
                args: ['openChange']
            }], onKeydownClose: [{
                type: HostListener,
                args: ['keydown.esc', ['"esc"']]
            }, {
                type: HostListener,
                args: ['keydown.tab', ['"tab"']]
            }], onKeydownFocusNext: [{
                type: HostListener,
                args: ['keydown.arrowdown', ['$event', '"next"']]
            }, {
                type: HostListener,
                args: ['keydown.arrowup', ['$event', '"previous"']]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1saWdodG5pbmcvc3JjL2xpYi9tZW51cy9kcm9wZG93bi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQWlDLGVBQWUsRUFBd0IsTUFBTSxlQUFlLENBQUM7QUFDM0osT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0saUJBQWlCLENBQUM7O0FBRWxELE1BQU0sZ0JBQWdCLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztBQVNqRCxNQUFNLE9BQU8sV0FBVztJQW1EdEIsWUFBbUIsT0FBbUIsRUFBUyxRQUFtQjtRQUEvQyxZQUFPLEdBQVAsT0FBTyxDQUFZO1FBQVMsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQTNCekMscUJBQWdCLEdBQUcsSUFBSSxDQUFDO1FBRTNCLGlCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQUVqRSw2QkFBd0IsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBRXRDLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFFaEIsaUNBQTRCLEdBQWEsSUFBSSxDQUFDO1FBQzlDLDJCQUFzQixHQUFhLElBQUksQ0FBQztJQWtCcUIsQ0FBQztJQWxEdEUsSUFBbUIsTUFBTSxDQUFDLE1BQWU7UUFDdkMsSUFBSSxDQUFDLE9BQU8sR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFakMsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2YsSUFBSSxDQUFDLHVCQUF1QixFQUFFLENBQUM7WUFDL0IsSUFBSSxDQUFDLGtCQUFrQixHQUFHLFVBQVUsQ0FBQyxHQUFHLEVBQUU7Z0JBQ3hDLElBQUksSUFBSSxDQUFDLGdCQUFn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O3dHQTlIVSxXQUFXOzRGQUFYLFdBQVcsNmdCQXlCTCxlQUFlO0FBRFA7SUFBZixZQUFZLEVBQUU7cURBQXlCOzJGQXhCdEMsV0FBVztrQkFQdkIsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsZUFBZTtvQkFDekIsSUFBSSxFQUFFO3dCQUNKLCtCQUErQixFQUFFLE1BQU07d0JBQ3ZDLHFDQUFxQyxFQUFFLE1BQU07cUJBQzlDO2lCQUNGO3lIQUVvQixNQUFNO3NCQUF4QixLQUFLO3VCQUFDLE1BQU07Z0JBdUJZLGdCQUFnQjtzQkFBeEMsS0FBSztnQkFDaUQsS0FBSztzQkFBM0QsZUFBZTt1QkFBQyxlQUFlLEVBQUUsRUFBQyxXQUFXLEVBQUUsSUFBSSxFQUFDO2dCQUMvQixZQUFZO3NCQUFqQyxNQUFNO3VCQUFDLFlBQVk7Z0JBWXBCLGNBQWM7c0JBRmIsWUFBWTt1QkFBQyxhQUFhLEVBQUUsQ0FBQyxPQUFPLENBQUM7O3NCQUNyQyxZQUFZO3VCQUFDLGFBQWEsRUFBRSxDQUFDLE9BQU8sQ0FBQztnQkFTdEMsa0JBQWtCO3NCQUZqQixZQUFZO3VCQUFDLG1CQUFtQixFQUFFLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQzs7c0JBQ3RELFlBQVk7dUJBQUMsaUJBQWlCLEVBQUUsQ0FBQyxRQUFRLEVBQUUsWUFBWSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIEhvc3RMaXN0ZW5lciwgRWxlbWVudFJlZiwgT25Jbml0LCBPbkRlc3Ryb3ksIENvbnRlbnRDaGlsZHJlbiwgUXVlcnlMaXN0LCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHRvQm9vbGVhbiwgSW5wdXRCb29sZWFuIH0gZnJvbSAnLi4vdXRpbC9jb252ZXJ0JztcbmltcG9ydCB7IE5nbERyb3Bkb3duSXRlbSB9IGZyb20gJy4vZHJvcGRvd24taXRlbSc7XG5cbmNvbnN0IG9wZW5FdmVudEVtaXR0ZXIgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW25nbERyb3Bkb3duXScsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLnNsZHMtZHJvcGRvd24tdHJpZ2dlcl0nOiAndHJ1ZScsXG4gICAgJ1tjbGFzcy5zbGRzLWRyb3Bkb3duLXRyaWdnZXJfY2xpY2tdJzogJ3RydWUnLFxuICB9LFxufSlcbmV4cG9ydCBjbGFzcyBOZ2xEcm9wZG93biBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgQElucHV0KCdvcGVuJykgc2V0IGlzT3Blbihpc09wZW46IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9pc09wZW4gPSB0b0Jvb2xlYW4oaXNPcGVuKTtcblxuICAgIGlmICh0aGlzLmlzT3Blbikge1xuICAgICAgdGhpcy5jbGVhckdsb2JhbENsaWNrVGltZW91dCgpO1xuICAgICAgdGhpcy5nbG9iYWxDbGlja1RpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuaGFuZGxlUGFnZUV2ZW50cykge1xuICAgICAgICAgIHRoaXMuX3N1YnNjcmliZVRvQ2xpY2tFdmVudHMoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICdzbGRzLWlzLW9wZW4nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fdW5zdWJzY3JpYmVGcm9tQ2xpY2tFdmVudHMoKTtcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICdzbGRzLWlzLW9wZW4nKTtcbiAgICB9XG5cbiAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZSh0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ2FyaWEtZXhwYW5kZWQnLCBgJHt0aGlzLmlzT3Blbn1gKTtcbiAgfVxuICBnZXQgaXNPcGVuKCkge1xuICAgIHJldHVybiB0aGlzLl9pc09wZW47XG4gIH1cblxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgaGFuZGxlUGFnZUV2ZW50cyA9IHRydWU7XG4gIEBDb250ZW50Q2hpbGRyZW4oTmdsRHJvcGRvd25JdGVtLCB7ZGVzY2VuZGFudHM6IHRydWV9KSBpdGVtczogUXVlcnlMaXN0PE5nbERyb3Bkb3duSXRlbT47XG4gIEBPdXRwdXQoJ29wZW5DaGFuZ2UnKSBpc09wZW5DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG5cbiAgdHJpZ2dlckZvY3VzRXZlbnRFbWl0dGVyID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIHByaXZhdGUgX2lzT3BlbiA9IGZhbHNlO1xuICBwcml2YXRlIG9wZW5FdmVudFN1YnNjcmlwdGlvbjogYW55O1xuICBwcml2YXRlIGdsb2JhbENsaWNrRXZlbnRVbnN1YnNjcmliZXI6IEZ1bmN0aW9uID0gbnVsbDtcbiAgcHJpdmF0ZSBjbGlja0V2ZW50VW5zdWJzY3JpYmVyOiBGdW5jdGlvbiA9IG51bGw7XG4gIHByaXZhdGUgZ2xvYmFsQ2xpY2tUaW1lb3V0OiBudW1iZXI7XG5cbiAgQEhvc3RMaXN0ZW5lcigna2V5ZG93bi5lc2MnLCBbJ1wiZXNjXCInXSlcbiAgQEhvc3RMaXN0ZW5lcigna2V5ZG93bi50YWInLCBbJ1widGFiXCInXSlcbiAgb25LZXlkb3duQ2xvc2UoZXZlbnROYW1lOiBzdHJpbmcpIHtcbiAgICB0aGlzLnRvZ2dsZShmYWxzZSk7XG4gICAgaWYgKGV2ZW50TmFtZSA9PT0gJ2VzYycpIHtcbiAgICAgIHRoaXMudHJpZ2dlckZvY3VzRXZlbnRFbWl0dGVyLmVtaXQobnVsbCk7XG4gICAgfVxuICB9XG4gIEBIb3N0TGlzdGVuZXIoJ2tleWRvd24uYXJyb3dkb3duJywgWyckZXZlbnQnLCAnXCJuZXh0XCInXSlcbiAgQEhvc3RMaXN0ZW5lcigna2V5ZG93bi5hcnJvd3VwJywgWyckZXZlbnQnLCAnXCJwcmV2aW91c1wiJ10pXG4gIG9uS2V5ZG93bkZvY3VzTmV4dCgkZXZlbnQ6IEV2ZW50LCBkaXJlY3Rpb246ICduZXh0JyB8ICdwcmV2aW91cycpIHtcbiAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLmZvY3VzSXRlbShkaXJlY3Rpb24pO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHVibGljIGVsZW1lbnQ6IEVsZW1lbnRSZWYsIHB1YmxpYyByZW5kZXJlcjogUmVuZGVyZXIyKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMub3BlbkV2ZW50U3Vic2NyaXB0aW9uID0gb3BlbkV2ZW50RW1pdHRlci5zdWJzY3JpYmUodGhpcy5oYW5kbGVEcm9wZG93bk9wZW5FdmVudC5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuY2xlYXJHbG9iYWxDbGlja1RpbWVvdXQoKTtcbiAgICBpZiAodGhpcy5vcGVuRXZlbnRTdWJzY3JpcHRpb24pIHtcbiAgICAgIHRoaXMub3BlbkV2ZW50U3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICAgIHRoaXMuX3Vuc3Vic2NyaWJlRnJvbUNsaWNrRXZlbnRzKCk7XG4gIH1cblxuICB0b2dnbGUodG9nZ2xlOiBib29sZWFuID0gIXRoaXMuaXNPcGVuLCBmb2N1czogYm9vbGVhbiA9IGZhbHNlKSB7XG4gICAgaWYgKHRvZ2dsZSA9PT0gdGhpcy5pc09wZW4pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5pc09wZW5DaGFuZ2UuZW1pdCh0b2dnbGUpO1xuICAgIGlmICh0b2dnbGUpIHtcbiAgICAgIG9wZW5FdmVudEVtaXR0ZXIuZW1pdCh0aGlzKTtcbiAgICAgIGlmIChmb2N1cykge1xuICAgICAgICB0aGlzLmZvY3VzSXRlbSgnbmV4dCcpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlR2xvYmFsQ2xpY2tFdmVudCgkZXZlbnQ6IGFueSkge1xuICAgIGlmICghdGhpcy5oYW5kbGVQYWdlRXZlbnRzIHx8ICRldmVudC4kbmdsU3RvcCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnRvZ2dsZShmYWxzZSk7XG4gIH1cblxuICBwcml2YXRlIF9zdWJzY3JpYmVUb0NsaWNrRXZlbnRzKCkge1xuICAgIHRoaXMuX3Vuc3Vic2NyaWJlRnJvbUNsaWNrRXZlbnRzKCk7XG5cbiAgICAvLyBQcmV2ZW50IGRvY3VtZW50IGxpc3RlbmVyIHRvIGNsb3NlIGl0LCBzaW5jZSBjbGljayBoYXBwZW5lZCBpbnNpZGVcbiAgICB0aGlzLmNsaWNrRXZlbnRVbnN1YnNjcmliZXIgPSB0aGlzLnJlbmRlcmVyLmxpc3Rlbih0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ2NsaWNrJywgKCRldmVudDogYW55KSA9PiAkZXZlbnQuJG5nbFN0b3AgPSB0cnVlKTtcblxuICAgIHRoaXMuZ2xvYmFsQ2xpY2tFdmVudFVuc3Vic2NyaWJlciA9IHRoaXMucmVuZGVyZXIubGlzdGVuKCdkb2N1bWVudCcsICdjbGljaycsIHRoaXMuaGFuZGxlR2xvYmFsQ2xpY2tFdmVudC5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIHByaXZhdGUgX3Vuc3Vic2NyaWJlRnJvbUNsaWNrRXZlbnRzKCkge1xuICAgIGlmICh0aGlzLmNsaWNrRXZlbnRVbnN1YnNjcmliZXIpIHtcbiAgICAgIHRoaXMuY2xpY2tFdmVudFVuc3Vic2NyaWJlcigpO1xuICAgICAgdGhpcy5jbGlja0V2ZW50VW5zdWJzY3JpYmVyID0gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5nbG9iYWxDbGlja0V2ZW50VW5zdWJzY3JpYmVyKSB7XG4gICAgICB0aGlzLmdsb2JhbENsaWNrRXZlbnRVbnN1YnNjcmliZXIoKTtcbiAgICAgIHRoaXMuZ2xvYmFsQ2xpY2tFdmVudFVuc3Vic2NyaWJlciA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBjbGVhckdsb2JhbENsaWNrVGltZW91dCgpIHtcbiAgICBjbGVhclRpbWVvdXQodGhpcy5nbG9iYWxDbGlja1RpbWVvdXQpO1xuICB9XG5cbiAgcHJpdmF0ZSBmb2N1c0l0ZW0oZGlyZWN0aW9uOiAnbmV4dCcgfCAncHJldmlvdXMnKSB7XG4gICAgaWYgKCF0aGlzLml0ZW1zLmxlbmd0aCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBpdGVtcyA9IHRoaXMuaXRlbXMudG9BcnJheSgpO1xuICAgIGNvbnN0IGFjdGl2ZUVsZW1lbnRJbmRleCA9IGl0ZW1zLmZpbmRJbmRleChpdGVtID0+IGl0ZW0uaGFzRm9jdXMoKSkgKyAoZGlyZWN0aW9uID09PSAnbmV4dCcgPyAxIDogLTEpO1xuICAgIGlmIChhY3RpdmVFbGVtZW50SW5kZXggPT09IGl0ZW1zLmxlbmd0aCB8fCBhY3RpdmVFbGVtZW50SW5kZXggPCAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGl0ZW1zW2FjdGl2ZUVsZW1lbnRJbmRleF0uZm9jdXMoKTtcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlRHJvcGRvd25PcGVuRXZlbnQoZHJvcGRvd246IE5nbERyb3Bkb3duKSB7XG4gICAgaWYgKGRyb3Bkb3duICE9PSB0aGlzKSB7XG4gICAgICB0aGlzLnRvZ2dsZShmYWxzZSk7XG4gICAgfVxuICB9XG5cbn1cbiJdfQ==
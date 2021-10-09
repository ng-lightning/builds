import { __decorate } from "tslib";
import { Directive, Input, Output, EventEmitter, HostListener, ElementRef, ContentChildren, Renderer2 } from '@angular/core';
import { toBoolean, InputBoolean } from '../util/convert';
import { NglDropdownItem } from './dropdown-item';
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
NglDropdown.decorators = [
    { type: Directive, args: [{
                selector: '[nglDropdown]',
                host: {
                    '[class.slds-dropdown-trigger]': 'true',
                    '[class.slds-dropdown-trigger_click]': 'true',
                },
            },] }
];
NglDropdown.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
NglDropdown.propDecorators = {
    isOpen: [{ type: Input, args: ['open',] }],
    handlePageEvents: [{ type: Input }],
    items: [{ type: ContentChildren, args: [NglDropdownItem, { descendants: true },] }],
    isOpenChange: [{ type: Output, args: ['openChange',] }],
    onKeydownClose: [{ type: HostListener, args: ['keydown.esc', ['"esc"'],] }, { type: HostListener, args: ['keydown.tab', ['"tab"'],] }],
    onKeydownFocusNext: [{ type: HostListener, args: ['keydown.arrowdown', ['$event', '"next"'],] }, { type: HostListener, args: ['keydown.arrowup', ['$event', '"previous"'],] }]
};
__decorate([
    InputBoolean()
], NglDropdown.prototype, "handlePageEvents", void 0);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1saWdodG5pbmcvc3JjL2xpYi9tZW51cy9kcm9wZG93bi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFxQixlQUFlLEVBQWEsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNKLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRWxELE1BQU0sZ0JBQWdCLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztBQVNqRCxNQUFNLE9BQU8sV0FBVztJQW1EdEIsWUFBbUIsT0FBbUIsRUFBUyxRQUFtQjtRQUEvQyxZQUFPLEdBQVAsT0FBTyxDQUFZO1FBQVMsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQTNCekMscUJBQWdCLEdBQUcsSUFBSSxDQUFDO1FBRTNCLGlCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQUVqRSw2QkFBd0IsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBRXRDLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFFaEIsaUNBQTRCLEdBQWEsSUFBSSxDQUFDO1FBQzlDLDJCQUFzQixHQUFhLElBQUksQ0FBQztJQWtCcUIsQ0FBQztJQWxEdEUsSUFBbUIsTUFBTSxDQUFDLE1BQWU7UUFDdkMsSUFBSSxDQUFDLE9BQU8sR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFakMsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2YsSUFBSSxDQUFDLHVCQUF1QixFQUFFLENBQUM7WUFDL0IsSUFBSSxDQUFDLGtCQUFrQixHQUFHLFVBQVUsQ0FBQyxHQUFHLEVBQUU7Z0JBQ3hDLElB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QztTQUNwQjtJQUNILENBQUM7OztZQXJJRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGVBQWU7Z0JBQ3pCLElBQUksRUFBRTtvQkFDSiwrQkFBK0IsRUFBRSxNQUFNO29CQUN2QyxxQ0FBcUMsRUFBRSxNQUFNO2lCQUM5QzthQUNGOzs7WUFaOEQsVUFBVTtZQUFpRCxTQUFTOzs7cUJBY2hJLEtBQUssU0FBQyxNQUFNOytCQXVCWixLQUFLO29CQUNMLGVBQWUsU0FBQyxlQUFlLEVBQUUsRUFBQyxXQUFXLEVBQUUsSUFBSSxFQUFDOzJCQUNwRCxNQUFNLFNBQUMsWUFBWTs2QkFVbkIsWUFBWSxTQUFDLGFBQWEsRUFBRSxDQUFDLE9BQU8sQ0FBQyxjQUNyQyxZQUFZLFNBQUMsYUFBYSxFQUFFLENBQUMsT0FBTyxDQUFDO2lDQU9yQyxZQUFZLFNBQUMsbUJBQW1CLEVBQUUsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLGNBQ3RELFlBQVksU0FBQyxpQkFBaUIsRUFBRSxDQUFDLFFBQVEsRUFBRSxZQUFZLENBQUM7O0FBckJoQztJQUFmLFlBQVksRUFBRTtxREFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgSG9zdExpc3RlbmVyLCBFbGVtZW50UmVmLCBPbkluaXQsIE9uRGVzdHJveSwgQ29udGVudENoaWxkcmVuLCBRdWVyeUxpc3QsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgdG9Cb29sZWFuLCBJbnB1dEJvb2xlYW4gfSBmcm9tICcuLi91dGlsL2NvbnZlcnQnO1xuaW1wb3J0IHsgTmdsRHJvcGRvd25JdGVtIH0gZnJvbSAnLi9kcm9wZG93bi1pdGVtJztcblxuY29uc3Qgb3BlbkV2ZW50RW1pdHRlciA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbmdsRHJvcGRvd25dJyxcbiAgaG9zdDoge1xuICAgICdbY2xhc3Muc2xkcy1kcm9wZG93bi10cmlnZ2VyXSc6ICd0cnVlJyxcbiAgICAnW2NsYXNzLnNsZHMtZHJvcGRvd24tdHJpZ2dlcl9jbGlja10nOiAndHJ1ZScsXG4gIH0sXG59KVxuZXhwb3J0IGNsYXNzIE5nbERyb3Bkb3duIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBASW5wdXQoJ29wZW4nKSBzZXQgaXNPcGVuKGlzT3BlbjogYm9vbGVhbikge1xuICAgIHRoaXMuX2lzT3BlbiA9IHRvQm9vbGVhbihpc09wZW4pO1xuXG4gICAgaWYgKHRoaXMuaXNPcGVuKSB7XG4gICAgICB0aGlzLmNsZWFyR2xvYmFsQ2xpY2tUaW1lb3V0KCk7XG4gICAgICB0aGlzLmdsb2JhbENsaWNrVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5oYW5kbGVQYWdlRXZlbnRzKSB7XG4gICAgICAgICAgdGhpcy5fc3Vic2NyaWJlVG9DbGlja0V2ZW50cygpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ3NsZHMtaXMtb3BlbicpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl91bnN1YnNjcmliZUZyb21DbGlja0V2ZW50cygpO1xuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ3NsZHMtaXMtb3BlbicpO1xuICAgIH1cblxuICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LCAnYXJpYS1leHBhbmRlZCcsIGAke3RoaXMuaXNPcGVufWApO1xuICB9XG4gIGdldCBpc09wZW4oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lzT3BlbjtcbiAgfVxuXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBoYW5kbGVQYWdlRXZlbnRzID0gdHJ1ZTtcbiAgQENvbnRlbnRDaGlsZHJlbihOZ2xEcm9wZG93bkl0ZW0sIHtkZXNjZW5kYW50czogdHJ1ZX0pIGl0ZW1zOiBRdWVyeUxpc3Q8TmdsRHJvcGRvd25JdGVtPjtcbiAgQE91dHB1dCgnb3BlbkNoYW5nZScpIGlzT3BlbkNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcblxuICB0cmlnZ2VyRm9jdXNFdmVudEVtaXR0ZXIgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgcHJpdmF0ZSBfaXNPcGVuID0gZmFsc2U7XG4gIHByaXZhdGUgb3BlbkV2ZW50U3Vic2NyaXB0aW9uOiBhbnk7XG4gIHByaXZhdGUgZ2xvYmFsQ2xpY2tFdmVudFVuc3Vic2NyaWJlcjogRnVuY3Rpb24gPSBudWxsO1xuICBwcml2YXRlIGNsaWNrRXZlbnRVbnN1YnNjcmliZXI6IEZ1bmN0aW9uID0gbnVsbDtcbiAgcHJpdmF0ZSBnbG9iYWxDbGlja1RpbWVvdXQ6IG51bWJlcjtcblxuICBASG9zdExpc3RlbmVyKCdrZXlkb3duLmVzYycsIFsnXCJlc2NcIiddKVxuICBASG9zdExpc3RlbmVyKCdrZXlkb3duLnRhYicsIFsnXCJ0YWJcIiddKVxuICBvbktleWRvd25DbG9zZShldmVudE5hbWU6IHN0cmluZykge1xuICAgIHRoaXMudG9nZ2xlKGZhbHNlKTtcbiAgICBpZiAoZXZlbnROYW1lID09PSAnZXNjJykge1xuICAgICAgdGhpcy50cmlnZ2VyRm9jdXNFdmVudEVtaXR0ZXIuZW1pdChudWxsKTtcbiAgICB9XG4gIH1cbiAgQEhvc3RMaXN0ZW5lcigna2V5ZG93bi5hcnJvd2Rvd24nLCBbJyRldmVudCcsICdcIm5leHRcIiddKVxuICBASG9zdExpc3RlbmVyKCdrZXlkb3duLmFycm93dXAnLCBbJyRldmVudCcsICdcInByZXZpb3VzXCInXSlcbiAgb25LZXlkb3duRm9jdXNOZXh0KCRldmVudDogRXZlbnQsIGRpcmVjdGlvbjogJ25leHQnIHwgJ3ByZXZpb3VzJykge1xuICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMuZm9jdXNJdGVtKGRpcmVjdGlvbik7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZWxlbWVudDogRWxlbWVudFJlZiwgcHVibGljIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5vcGVuRXZlbnRTdWJzY3JpcHRpb24gPSBvcGVuRXZlbnRFbWl0dGVyLnN1YnNjcmliZSh0aGlzLmhhbmRsZURyb3Bkb3duT3BlbkV2ZW50LmJpbmQodGhpcykpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5jbGVhckdsb2JhbENsaWNrVGltZW91dCgpO1xuICAgIGlmICh0aGlzLm9wZW5FdmVudFN1YnNjcmlwdGlvbikge1xuICAgICAgdGhpcy5vcGVuRXZlbnRTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gICAgdGhpcy5fdW5zdWJzY3JpYmVGcm9tQ2xpY2tFdmVudHMoKTtcbiAgfVxuXG4gIHRvZ2dsZSh0b2dnbGU6IGJvb2xlYW4gPSAhdGhpcy5pc09wZW4sIGZvY3VzOiBib29sZWFuID0gZmFsc2UpIHtcbiAgICBpZiAodG9nZ2xlID09PSB0aGlzLmlzT3Blbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmlzT3BlbkNoYW5nZS5lbWl0KHRvZ2dsZSk7XG4gICAgaWYgKHRvZ2dsZSkge1xuICAgICAgb3BlbkV2ZW50RW1pdHRlci5lbWl0KHRoaXMpO1xuICAgICAgaWYgKGZvY3VzKSB7XG4gICAgICAgIHRoaXMuZm9jdXNJdGVtKCduZXh0Jyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVHbG9iYWxDbGlja0V2ZW50KCRldmVudDogYW55KSB7XG4gICAgaWYgKCF0aGlzLmhhbmRsZVBhZ2VFdmVudHMgfHwgJGV2ZW50LiRuZ2xTdG9wKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMudG9nZ2xlKGZhbHNlKTtcbiAgfVxuXG4gIHByaXZhdGUgX3N1YnNjcmliZVRvQ2xpY2tFdmVudHMoKSB7XG4gICAgdGhpcy5fdW5zdWJzY3JpYmVGcm9tQ2xpY2tFdmVudHMoKTtcblxuICAgIC8vIFByZXZlbnQgZG9jdW1lbnQgbGlzdGVuZXIgdG8gY2xvc2UgaXQsIHNpbmNlIGNsaWNrIGhhcHBlbmVkIGluc2lkZVxuICAgIHRoaXMuY2xpY2tFdmVudFVuc3Vic2NyaWJlciA9IHRoaXMucmVuZGVyZXIubGlzdGVuKHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LCAnY2xpY2snLCAoJGV2ZW50OiBhbnkpID0+ICRldmVudC4kbmdsU3RvcCA9IHRydWUpO1xuXG4gICAgdGhpcy5nbG9iYWxDbGlja0V2ZW50VW5zdWJzY3JpYmVyID0gdGhpcy5yZW5kZXJlci5saXN0ZW4oJ2RvY3VtZW50JywgJ2NsaWNrJywgdGhpcy5oYW5kbGVHbG9iYWxDbGlja0V2ZW50LmJpbmQodGhpcykpO1xuICB9XG5cbiAgcHJpdmF0ZSBfdW5zdWJzY3JpYmVGcm9tQ2xpY2tFdmVudHMoKSB7XG4gICAgaWYgKHRoaXMuY2xpY2tFdmVudFVuc3Vic2NyaWJlcikge1xuICAgICAgdGhpcy5jbGlja0V2ZW50VW5zdWJzY3JpYmVyKCk7XG4gICAgICB0aGlzLmNsaWNrRXZlbnRVbnN1YnNjcmliZXIgPSBudWxsO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmdsb2JhbENsaWNrRXZlbnRVbnN1YnNjcmliZXIpIHtcbiAgICAgIHRoaXMuZ2xvYmFsQ2xpY2tFdmVudFVuc3Vic2NyaWJlcigpO1xuICAgICAgdGhpcy5nbG9iYWxDbGlja0V2ZW50VW5zdWJzY3JpYmVyID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGNsZWFyR2xvYmFsQ2xpY2tUaW1lb3V0KCkge1xuICAgIGNsZWFyVGltZW91dCh0aGlzLmdsb2JhbENsaWNrVGltZW91dCk7XG4gIH1cblxuICBwcml2YXRlIGZvY3VzSXRlbShkaXJlY3Rpb246ICduZXh0JyB8ICdwcmV2aW91cycpIHtcbiAgICBpZiAoIXRoaXMuaXRlbXMubGVuZ3RoKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGl0ZW1zID0gdGhpcy5pdGVtcy50b0FycmF5KCk7XG4gICAgY29uc3QgYWN0aXZlRWxlbWVudEluZGV4ID0gaXRlbXMuZmluZEluZGV4KGl0ZW0gPT4gaXRlbS5oYXNGb2N1cygpKSArIChkaXJlY3Rpb24gPT09ICduZXh0JyA/IDEgOiAtMSk7XG4gICAgaWYgKGFjdGl2ZUVsZW1lbnRJbmRleCA9PT0gaXRlbXMubGVuZ3RoIHx8IGFjdGl2ZUVsZW1lbnRJbmRleCA8IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaXRlbXNbYWN0aXZlRWxlbWVudEluZGV4XS5mb2N1cygpO1xuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVEcm9wZG93bk9wZW5FdmVudChkcm9wZG93bjogTmdsRHJvcGRvd24pIHtcbiAgICBpZiAoZHJvcGRvd24gIT09IHRoaXMpIHtcbiAgICAgIHRoaXMudG9nZ2xlKGZhbHNlKTtcbiAgICB9XG4gIH1cblxufVxuIl19
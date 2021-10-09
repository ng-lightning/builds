import { Directive, Output, EventEmitter, NgZone, Self } from '@angular/core';
import { CdkConnectedOverlay, ScrollDispatcher } from '@angular/cdk/overlay';
export class NglOverlaynglOverlayScrolledOutsideViewDirective {
    constructor(cdkOverlay, ngZone, scrollDispatcher) {
        this.cdkOverlay = cdkOverlay;
        this.ngZone = ngZone;
        this.scrollDispatcher = scrollDispatcher;
        this.overlayOutside = new EventEmitter();
    }
    ngOnInit() {
        const elementRef = this.cdkOverlay.origin.elementRef;
        const scrollableAncestors = this.scrollDispatcher.getAncestorScrollContainers(elementRef).map(container => container.getElementRef());
        if (!scrollableAncestors || !scrollableAncestors.length)
            return;
        this.subscription = this.cdkOverlay.positionChange.subscribe(() => {
            const bounds = elementRef.nativeElement.getBoundingClientRect();
            for (let i = 0, n = scrollableAncestors.length; i < n; i++) {
                const ancestorsBounds = scrollableAncestors[i].nativeElement.getBoundingClientRect();
                if (isElementOutside(bounds, ancestorsBounds)) {
                    this.ngZone.run(() => this.overlayOutside.emit());
                    return;
                }
            }
        });
    }
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
            this.subscription = null;
        }
    }
}
NglOverlaynglOverlayScrolledOutsideViewDirective.decorators = [
    { type: Directive, args: [{
                selector: '[nglOverlayScrolledOutsideView]'
            },] }
];
NglOverlaynglOverlayScrolledOutsideViewDirective.ctorParameters = () => [
    { type: CdkConnectedOverlay, decorators: [{ type: Self }] },
    { type: NgZone },
    { type: ScrollDispatcher }
];
NglOverlaynglOverlayScrolledOutsideViewDirective.propDecorators = {
    overlayOutside: [{ type: Output, args: ['nglOverlayScrolledOutsideView',] }]
};
/**
 * Gets whether an element is scrolled outside of view by its parent scrolling container.
 * @param element Dimensions of the element (from getBoundingClientRect)
 * @param container Dimensions of element's scrolling container (from getBoundingClientRect)
 * @returns Whether the element is scrolled out of view
 */
export function isElementOutside(element, container) {
    return (element.bottom < container.top || element.top > container.bottom ||
        element.right < container.left || element.left > container.right);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3ZlcmxheS1vdXRzaWRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctbGlnaHRuaW5nL3NyYy9saWIvY29tbW9uL292ZXJsYXkvb3ZlcmxheS1vdXRzaWRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBcUIsTUFBTSxFQUFFLElBQUksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVqRyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUs3RSxNQUFNLE9BQU8sZ0RBQWdEO0lBTTNELFlBQTRCLFVBQStCLEVBQ3ZDLE1BQWMsRUFDZCxnQkFBa0M7UUFGMUIsZUFBVSxHQUFWLFVBQVUsQ0FBcUI7UUFDdkMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFOYixtQkFBYyxHQUF1QixJQUFJLFlBQVksRUFBRSxDQUFDO0lBTXhDLENBQUM7SUFFMUQsUUFBUTtRQUNOLE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQztRQUNyRCxNQUFNLG1CQUFtQixHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQywyQkFBMkIsQ0FBQyxVQUFVLENBQUMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQztRQUV0SSxJQUFJLENBQUMsbUJBQW1CLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxNQUFNO1lBQUUsT0FBTztRQUVoRSxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUU7WUFDaEUsTUFBTSxNQUFNLEdBQUcsVUFBVSxDQUFDLGFBQWEsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO1lBRWhFLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxtQkFBbUIsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDMUQsTUFBTSxlQUFlLEdBQUcsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLHFCQUFxQixFQUFFLENBQUM7Z0JBQ3JGLElBQUksZ0JBQWdCLENBQUMsTUFBTSxFQUFFLGVBQWUsQ0FBQyxFQUFFO29CQUM3QyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7b0JBQ2xELE9BQU87aUJBQ1I7YUFDRjtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDckIsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUNoQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztTQUMxQjtJQUNILENBQUM7OztZQXJDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGlDQUFpQzthQUM1Qzs7O1lBSlEsbUJBQW1CLHVCQVdiLElBQUk7WUFiMEMsTUFBTTtZQUVyQyxnQkFBZ0I7Ozs2QkFPM0MsTUFBTSxTQUFDLCtCQUErQjs7QUFtQ3pDOzs7OztHQUtHO0FBQ0gsTUFBTSxVQUFVLGdCQUFnQixDQUFDLE9BQW1CLEVBQUUsU0FBcUI7SUFDekUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsU0FBUyxDQUFDLEdBQUcsSUFBSSxPQUFPLENBQUMsR0FBRyxHQUFHLFNBQVMsQ0FBQyxNQUFNO1FBQ2hFLE9BQU8sQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDLElBQUksSUFBSSxPQUFPLENBQUMsSUFBSSxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUM1RSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgT25Jbml0LCBPbkRlc3Ryb3ksIE5nWm9uZSwgU2VsZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBDZGtDb25uZWN0ZWRPdmVybGF5LCBTY3JvbGxEaXNwYXRjaGVyIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbmdsT3ZlcmxheVNjcm9sbGVkT3V0c2lkZVZpZXddJ1xufSlcbmV4cG9ydCBjbGFzcyBOZ2xPdmVybGF5bmdsT3ZlcmxheVNjcm9sbGVkT3V0c2lkZVZpZXdEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cbiAgQE91dHB1dCgnbmdsT3ZlcmxheVNjcm9sbGVkT3V0c2lkZVZpZXcnKSBvdmVybGF5T3V0c2lkZTogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIHByaXZhdGUgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG5cbiAgY29uc3RydWN0b3IoQFNlbGYoKSBwcml2YXRlIGNka092ZXJsYXk6IENka0Nvbm5lY3RlZE92ZXJsYXksXG4gICAgICAgICAgICAgIHByaXZhdGUgbmdab25lOiBOZ1pvbmUsXG4gICAgICAgICAgICAgIHByaXZhdGUgc2Nyb2xsRGlzcGF0Y2hlcjogU2Nyb2xsRGlzcGF0Y2hlcikge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICBjb25zdCBlbGVtZW50UmVmID0gdGhpcy5jZGtPdmVybGF5Lm9yaWdpbi5lbGVtZW50UmVmO1xuICAgIGNvbnN0IHNjcm9sbGFibGVBbmNlc3RvcnMgPSB0aGlzLnNjcm9sbERpc3BhdGNoZXIuZ2V0QW5jZXN0b3JTY3JvbGxDb250YWluZXJzKGVsZW1lbnRSZWYpLm1hcChjb250YWluZXIgPT4gY29udGFpbmVyLmdldEVsZW1lbnRSZWYoKSk7XG5cbiAgICBpZiAoIXNjcm9sbGFibGVBbmNlc3RvcnMgfHwgIXNjcm9sbGFibGVBbmNlc3RvcnMubGVuZ3RoKSByZXR1cm47XG5cbiAgICB0aGlzLnN1YnNjcmlwdGlvbiA9IHRoaXMuY2RrT3ZlcmxheS5wb3NpdGlvbkNoYW5nZS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgY29uc3QgYm91bmRzID0gZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgICBmb3IgKGxldCBpID0gMCwgbiA9IHNjcm9sbGFibGVBbmNlc3RvcnMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGFuY2VzdG9yc0JvdW5kcyA9IHNjcm9sbGFibGVBbmNlc3RvcnNbaV0ubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgaWYgKGlzRWxlbWVudE91dHNpZGUoYm91bmRzLCBhbmNlc3RvcnNCb3VuZHMpKSB7XG4gICAgICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHRoaXMub3ZlcmxheU91dHNpZGUuZW1pdCgpKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIGlmICh0aGlzLnN1YnNjcmlwdGlvbikge1xuICAgICAgdGhpcy5zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgIHRoaXMuc3Vic2NyaXB0aW9uID0gbnVsbDtcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBHZXRzIHdoZXRoZXIgYW4gZWxlbWVudCBpcyBzY3JvbGxlZCBvdXRzaWRlIG9mIHZpZXcgYnkgaXRzIHBhcmVudCBzY3JvbGxpbmcgY29udGFpbmVyLlxuICogQHBhcmFtIGVsZW1lbnQgRGltZW5zaW9ucyBvZiB0aGUgZWxlbWVudCAoZnJvbSBnZXRCb3VuZGluZ0NsaWVudFJlY3QpXG4gKiBAcGFyYW0gY29udGFpbmVyIERpbWVuc2lvbnMgb2YgZWxlbWVudCdzIHNjcm9sbGluZyBjb250YWluZXIgKGZyb20gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KVxuICogQHJldHVybnMgV2hldGhlciB0aGUgZWxlbWVudCBpcyBzY3JvbGxlZCBvdXQgb2Ygdmlld1xuICovXG5leHBvcnQgZnVuY3Rpb24gaXNFbGVtZW50T3V0c2lkZShlbGVtZW50OiBDbGllbnRSZWN0LCBjb250YWluZXI6IENsaWVudFJlY3QpIHtcbiAgcmV0dXJuIChlbGVtZW50LmJvdHRvbSA8IGNvbnRhaW5lci50b3AgfHwgZWxlbWVudC50b3AgPiBjb250YWluZXIuYm90dG9tIHx8XG4gICAgICAgICAgZWxlbWVudC5yaWdodCA8IGNvbnRhaW5lci5sZWZ0IHx8IGVsZW1lbnQubGVmdCA+IGNvbnRhaW5lci5yaWdodCk7XG59XG4iXX0=
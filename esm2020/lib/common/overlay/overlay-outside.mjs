import { Directive, Output, EventEmitter, Self } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/overlay";
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
NglOverlaynglOverlayScrolledOutsideViewDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglOverlaynglOverlayScrolledOutsideViewDirective, deps: [{ token: i1.CdkConnectedOverlay, self: true }, { token: i0.NgZone }, { token: i1.ScrollDispatcher }], target: i0.ɵɵFactoryTarget.Directive });
NglOverlaynglOverlayScrolledOutsideViewDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.2.9", type: NglOverlaynglOverlayScrolledOutsideViewDirective, selector: "[nglOverlayScrolledOutsideView]", outputs: { overlayOutside: "nglOverlayScrolledOutsideView" }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglOverlaynglOverlayScrolledOutsideViewDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[nglOverlayScrolledOutsideView]'
                }]
        }], ctorParameters: function () { return [{ type: i1.CdkConnectedOverlay, decorators: [{
                    type: Self
                }] }, { type: i0.NgZone }, { type: i1.ScrollDispatcher }]; }, propDecorators: { overlayOutside: [{
                type: Output,
                args: ['nglOverlayScrolledOutsideView']
            }] } });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3ZlcmxheS1vdXRzaWRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctbGlnaHRuaW5nL3NyYy9saWIvY29tbW9uL292ZXJsYXkvb3ZlcmxheS1vdXRzaWRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBNkIsSUFBSSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7QUFPakcsTUFBTSxPQUFPLGdEQUFnRDtJQU0zRCxZQUE0QixVQUErQixFQUN2QyxNQUFjLEVBQ2QsZ0JBQWtDO1FBRjFCLGVBQVUsR0FBVixVQUFVLENBQXFCO1FBQ3ZDLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBTmIsbUJBQWMsR0FBdUIsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQU14QyxDQUFDO0lBRTFELFFBQVE7UUFDTixNQUFNLFVBQVUsR0FBSSxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQTJCLENBQUMsVUFBVSxDQUFDO1FBQzNFLE1BQU0sbUJBQW1CLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLDJCQUEyQixDQUFDLFVBQVUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDO1FBRXRJLElBQUksQ0FBQyxtQkFBbUIsSUFBSSxDQUFDLG1CQUFtQixDQUFDLE1BQU07WUFBRSxPQUFPO1FBRWhFLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRTtZQUNoRSxNQUFNLE1BQU0sR0FBRyxVQUFVLENBQUMsYUFBYSxDQUFDLHFCQUFxQixFQUFFLENBQUM7WUFFaEUsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLG1CQUFtQixDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUMxRCxNQUFNLGVBQWUsR0FBRyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMscUJBQXFCLEVBQUUsQ0FBQztnQkFDckYsSUFBSSxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsZUFBZSxDQUFDLEVBQUU7b0JBQzdDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztvQkFDbEQsT0FBTztpQkFDUjthQUNGO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNyQixJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQ2hDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1NBQzFCO0lBQ0gsQ0FBQzs7NklBbENVLGdEQUFnRDtpSUFBaEQsZ0RBQWdEOzJGQUFoRCxnREFBZ0Q7a0JBSDVELFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLGlDQUFpQztpQkFDNUM7OzBCQU9jLElBQUk7Z0dBSndCLGNBQWM7c0JBQXRELE1BQU07dUJBQUMsK0JBQStCOztBQW1DekM7Ozs7O0dBS0c7QUFDSCxNQUFNLFVBQVUsZ0JBQWdCLENBQUMsT0FBbUIsRUFBRSxTQUFxQjtJQUN6RSxPQUFPLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxTQUFTLENBQUMsR0FBRyxJQUFJLE9BQU8sQ0FBQyxHQUFHLEdBQUcsU0FBUyxDQUFDLE1BQU07UUFDaEUsT0FBTyxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUMsSUFBSSxJQUFJLE9BQU8sQ0FBQyxJQUFJLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQzVFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBPbkluaXQsIE9uRGVzdHJveSwgTmdab25lLCBTZWxmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IENka0Nvbm5lY3RlZE92ZXJsYXksIENka092ZXJsYXlPcmlnaW4sIFNjcm9sbERpc3BhdGNoZXIgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tuZ2xPdmVybGF5U2Nyb2xsZWRPdXRzaWRlVmlld10nXG59KVxuZXhwb3J0IGNsYXNzIE5nbE92ZXJsYXluZ2xPdmVybGF5U2Nyb2xsZWRPdXRzaWRlVmlld0RpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuICBAT3V0cHV0KCduZ2xPdmVybGF5U2Nyb2xsZWRPdXRzaWRlVmlldycpIG92ZXJsYXlPdXRzaWRlOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgcHJpdmF0ZSBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcblxuICBjb25zdHJ1Y3RvcihAU2VsZigpIHByaXZhdGUgY2RrT3ZlcmxheTogQ2RrQ29ubmVjdGVkT3ZlcmxheSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBzY3JvbGxEaXNwYXRjaGVyOiBTY3JvbGxEaXNwYXRjaGVyKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGNvbnN0IGVsZW1lbnRSZWYgPSAodGhpcy5jZGtPdmVybGF5Lm9yaWdpbiBhcyBDZGtPdmVybGF5T3JpZ2luKS5lbGVtZW50UmVmO1xuICAgIGNvbnN0IHNjcm9sbGFibGVBbmNlc3RvcnMgPSB0aGlzLnNjcm9sbERpc3BhdGNoZXIuZ2V0QW5jZXN0b3JTY3JvbGxDb250YWluZXJzKGVsZW1lbnRSZWYpLm1hcChjb250YWluZXIgPT4gY29udGFpbmVyLmdldEVsZW1lbnRSZWYoKSk7XG5cbiAgICBpZiAoIXNjcm9sbGFibGVBbmNlc3RvcnMgfHwgIXNjcm9sbGFibGVBbmNlc3RvcnMubGVuZ3RoKSByZXR1cm47XG5cbiAgICB0aGlzLnN1YnNjcmlwdGlvbiA9IHRoaXMuY2RrT3ZlcmxheS5wb3NpdGlvbkNoYW5nZS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgY29uc3QgYm91bmRzID0gZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgICBmb3IgKGxldCBpID0gMCwgbiA9IHNjcm9sbGFibGVBbmNlc3RvcnMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGFuY2VzdG9yc0JvdW5kcyA9IHNjcm9sbGFibGVBbmNlc3RvcnNbaV0ubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgaWYgKGlzRWxlbWVudE91dHNpZGUoYm91bmRzLCBhbmNlc3RvcnNCb3VuZHMpKSB7XG4gICAgICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHRoaXMub3ZlcmxheU91dHNpZGUuZW1pdCgpKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIGlmICh0aGlzLnN1YnNjcmlwdGlvbikge1xuICAgICAgdGhpcy5zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgIHRoaXMuc3Vic2NyaXB0aW9uID0gbnVsbDtcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBHZXRzIHdoZXRoZXIgYW4gZWxlbWVudCBpcyBzY3JvbGxlZCBvdXRzaWRlIG9mIHZpZXcgYnkgaXRzIHBhcmVudCBzY3JvbGxpbmcgY29udGFpbmVyLlxuICogQHBhcmFtIGVsZW1lbnQgRGltZW5zaW9ucyBvZiB0aGUgZWxlbWVudCAoZnJvbSBnZXRCb3VuZGluZ0NsaWVudFJlY3QpXG4gKiBAcGFyYW0gY29udGFpbmVyIERpbWVuc2lvbnMgb2YgZWxlbWVudCdzIHNjcm9sbGluZyBjb250YWluZXIgKGZyb20gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KVxuICogQHJldHVybnMgV2hldGhlciB0aGUgZWxlbWVudCBpcyBzY3JvbGxlZCBvdXQgb2Ygdmlld1xuICovXG5leHBvcnQgZnVuY3Rpb24gaXNFbGVtZW50T3V0c2lkZShlbGVtZW50OiBDbGllbnRSZWN0LCBjb250YWluZXI6IENsaWVudFJlY3QpIHtcbiAgcmV0dXJuIChlbGVtZW50LmJvdHRvbSA8IGNvbnRhaW5lci50b3AgfHwgZWxlbWVudC50b3AgPiBjb250YWluZXIuYm90dG9tIHx8XG4gICAgICAgICAgZWxlbWVudC5yaWdodCA8IGNvbnRhaW5lci5sZWZ0IHx8IGVsZW1lbnQubGVmdCA+IGNvbnRhaW5lci5yaWdodCk7XG59XG4iXX0=
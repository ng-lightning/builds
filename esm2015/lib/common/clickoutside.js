import { Directive, Output, EventEmitter, Inject, ElementRef, Input } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { fromEvent } from 'rxjs';
export class NglClickOutsideDirective {
    constructor(document, element) {
        this.document = document;
        this.element = element;
        this.clickOutside = new EventEmitter();
    }
    ngAfterViewInit() {
        this.subscription = fromEvent(this.document, 'click').subscribe((e) => {
            if (this.shouldClose(e)) {
                this.clickOutside.emit();
            }
        });
    }
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
            this.subscription = null;
        }
    }
    shouldClose(event) {
        const element = event.target;
        if ((event instanceof MouseEvent && event.button === 2) || isContainedIn(element, this.ignore)) {
            return false;
        }
        return !isContainedIn(element, this.element.nativeElement);
    }
}
NglClickOutsideDirective.decorators = [
    { type: Directive, args: [{
                selector: '[nglClickOutside]'
            },] }
];
NglClickOutsideDirective.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: ElementRef }
];
NglClickOutsideDirective.propDecorators = {
    clickOutside: [{ type: Output, args: ['nglClickOutside',] }],
    ignore: [{ type: Input, args: ['nglClickOutsideIgnore',] }]
};
function isContainedIn(el, container) {
    if (!container) {
        return false;
    }
    return Array.isArray(container) ? container.some(c => c.contains(el)) : container.contains(el);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpY2tvdXRzaWRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctbGlnaHRuaW5nL3NyYy9saWIvY29tbW9uL2NsaWNrb3V0c2lkZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQTRCLE1BQU0sRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3JILE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQUUsU0FBUyxFQUFnQixNQUFNLE1BQU0sQ0FBQztBQUsvQyxNQUFNLE9BQU8sd0JBQXdCO0lBUW5DLFlBQXNDLFFBQWEsRUFBVSxPQUFtQjtRQUExQyxhQUFRLEdBQVIsUUFBUSxDQUFLO1FBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQU5yRCxpQkFBWSxHQUF1QixJQUFJLFlBQVksRUFBRSxDQUFDO0lBTUUsQ0FBQztJQUVwRixlQUFlO1FBQ2IsSUFBSSxDQUFDLFlBQVksR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFhLEVBQUUsRUFBRTtZQUNoRixJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQ3ZCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLENBQUM7YUFDMUI7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3JCLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDaEMsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7U0FDMUI7SUFDSCxDQUFDO0lBRU8sV0FBVyxDQUFDLEtBQThCO1FBQ2hELE1BQU0sT0FBTyxHQUFHLEtBQUssQ0FBQyxNQUFxQixDQUFDO1FBQzVDLElBQUksQ0FBQyxLQUFLLFlBQVksVUFBVSxJQUFJLEtBQUssQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLElBQUksYUFBYSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDOUYsT0FBTyxLQUFLLENBQUM7U0FDZDtRQUNELE9BQU8sQ0FBQyxhQUFhLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDN0QsQ0FBQzs7O1lBbENGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsbUJBQW1CO2FBQzlCOzs7NENBU2MsTUFBTSxTQUFDLFFBQVE7WUFmOEMsVUFBVTs7OzJCQVNuRixNQUFNLFNBQUMsaUJBQWlCO3FCQUV4QixLQUFLLFNBQUMsdUJBQXVCOztBQThCaEMsU0FBUyxhQUFhLENBQUMsRUFBZSxFQUFFLFNBQXNDO0lBQzVFLElBQUksQ0FBQyxTQUFTLEVBQUU7UUFDZCxPQUFPLEtBQUssQ0FBQztLQUNkO0lBQ0QsT0FBTyxLQUFLLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ2pHLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3ksIEluamVjdCwgRWxlbWVudFJlZiwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IGZyb21FdmVudCwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tuZ2xDbGlja091dHNpZGVdJ1xufSlcbmV4cG9ydCBjbGFzcyBOZ2xDbGlja091dHNpZGVEaXJlY3RpdmUgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xuXG4gIEBPdXRwdXQoJ25nbENsaWNrT3V0c2lkZScpIGNsaWNrT3V0c2lkZTogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIEBJbnB1dCgnbmdsQ2xpY2tPdXRzaWRlSWdub3JlJykgaWdub3JlOiBIVE1MRWxlbWVudCB8IEhUTUxFbGVtZW50W107XG5cbiAgcHJpdmF0ZSBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcblxuICBjb25zdHJ1Y3RvcihASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvY3VtZW50OiBhbnksIHByaXZhdGUgZWxlbWVudDogRWxlbWVudFJlZikge31cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy5zdWJzY3JpcHRpb24gPSBmcm9tRXZlbnQodGhpcy5kb2N1bWVudCwgJ2NsaWNrJykuc3Vic2NyaWJlKChlOiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgICBpZiAodGhpcy5zaG91bGRDbG9zZShlKSkge1xuICAgICAgICB0aGlzLmNsaWNrT3V0c2lkZS5lbWl0KCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBpZiAodGhpcy5zdWJzY3JpcHRpb24pIHtcbiAgICAgIHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICB0aGlzLnN1YnNjcmlwdGlvbiA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzaG91bGRDbG9zZShldmVudDogTW91c2VFdmVudCB8IFRvdWNoRXZlbnQpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gZXZlbnQudGFyZ2V0IGFzIEhUTUxFbGVtZW50O1xuICAgIGlmICgoZXZlbnQgaW5zdGFuY2VvZiBNb3VzZUV2ZW50ICYmIGV2ZW50LmJ1dHRvbiA9PT0gMikgfHwgaXNDb250YWluZWRJbihlbGVtZW50LCB0aGlzLmlnbm9yZSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuICFpc0NvbnRhaW5lZEluKGVsZW1lbnQsIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpc0NvbnRhaW5lZEluKGVsOiBIVE1MRWxlbWVudCwgY29udGFpbmVyOiBIVE1MRWxlbWVudCB8IEhUTUxFbGVtZW50W10pIHtcbiAgaWYgKCFjb250YWluZXIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIEFycmF5LmlzQXJyYXkoY29udGFpbmVyKSA/IGNvbnRhaW5lci5zb21lKGMgPT4gYy5jb250YWlucyhlbCkpIDogY29udGFpbmVyLmNvbnRhaW5zKGVsKTtcbn1cbiJdfQ==
import { Directive, HostListener, ElementRef } from '@angular/core';
import { NglDropdown } from './dropdown';
export class NglDropdownTrigger {
    constructor(element, dropdown) {
        this.element = element;
        this.dropdown = dropdown;
        this.parentFocusEventSubscription = this.dropdown.triggerFocusEventEmitter.subscribe(this.focus.bind(this));
    }
    ngOnDestroy() {
        this.parentFocusEventSubscription.unsubscribe();
    }
    toggleOpen() {
        this.dropdown.toggle();
    }
    onKeyDownOpen($event) {
        $event.preventDefault();
        this.dropdown.toggle(true);
    }
    focus() {
        this.element.nativeElement.focus();
    }
}
NglDropdownTrigger.decorators = [
    { type: Directive, args: [{
                selector: '[nglDropdownTrigger]',
                host: {
                    'aria-haspopup': 'true',
                },
            },] }
];
NglDropdownTrigger.ctorParameters = () => [
    { type: ElementRef },
    { type: NglDropdown }
];
NglDropdownTrigger.propDecorators = {
    toggleOpen: [{ type: HostListener, args: ['click',] }],
    onKeyDownOpen: [{ type: HostListener, args: ['keydown.arrowdown', ['$event'],] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24tdHJpZ2dlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nLWxpZ2h0bmluZy9zcmMvbGliL21lbnVzL2Ryb3Bkb3duLXRyaWdnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBQy9FLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFRekMsTUFBTSxPQUFPLGtCQUFrQjtJQUc3QixZQUFvQixPQUFtQixFQUFVLFFBQXFCO1FBQWxELFlBQU8sR0FBUCxPQUFPLENBQVk7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFhO1FBQ3BFLElBQUksQ0FBQyw0QkFBNEIsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLHdCQUF3QixDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQzlHLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLDRCQUE0QixDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ2xELENBQUM7SUFFc0IsVUFBVTtRQUMvQixJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFHRCxhQUFhLENBQUMsTUFBYTtRQUN6QixNQUFNLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUVELEtBQUs7UUFDSCxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNyQyxDQUFDOzs7WUE3QkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxzQkFBc0I7Z0JBQ2hDLElBQUksRUFBRTtvQkFDSixlQUFlLEVBQUUsTUFBTTtpQkFDeEI7YUFDRjs7O1lBUmlDLFVBQVU7WUFDbkMsV0FBVzs7O3lCQW1CakIsWUFBWSxTQUFDLE9BQU87NEJBSXBCLFlBQVksU0FBQyxtQkFBbUIsRUFBRSxDQUFDLFFBQVEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSG9zdExpc3RlbmVyLCBFbGVtZW50UmVmLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5nbERyb3Bkb3duIH0gZnJvbSAnLi9kcm9wZG93bic7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tuZ2xEcm9wZG93blRyaWdnZXJdJyxcbiAgaG9zdDoge1xuICAgICdhcmlhLWhhc3BvcHVwJzogJ3RydWUnLFxuICB9LFxufSlcbmV4cG9ydCBjbGFzcyBOZ2xEcm9wZG93blRyaWdnZXIgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBwcml2YXRlIHBhcmVudEZvY3VzRXZlbnRTdWJzY3JpcHRpb246IGFueTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnQ6IEVsZW1lbnRSZWYsIHByaXZhdGUgZHJvcGRvd246IE5nbERyb3Bkb3duKSB7XG4gICAgdGhpcy5wYXJlbnRGb2N1c0V2ZW50U3Vic2NyaXB0aW9uID0gdGhpcy5kcm9wZG93bi50cmlnZ2VyRm9jdXNFdmVudEVtaXR0ZXIuc3Vic2NyaWJlKHRoaXMuZm9jdXMuYmluZCh0aGlzKSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLnBhcmVudEZvY3VzRXZlbnRTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJykgdG9nZ2xlT3BlbigpIHtcbiAgICB0aGlzLmRyb3Bkb3duLnRvZ2dsZSgpO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcigna2V5ZG93bi5hcnJvd2Rvd24nLCBbJyRldmVudCddKVxuICBvbktleURvd25PcGVuKCRldmVudDogRXZlbnQpIHtcbiAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLmRyb3Bkb3duLnRvZ2dsZSh0cnVlKTtcbiAgfVxuXG4gIGZvY3VzKCkge1xuICAgIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gIH1cbn1cbiJdfQ==
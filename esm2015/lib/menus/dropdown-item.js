import { Directive, ElementRef, HostListener } from '@angular/core';
export class NglDropdownItem {
    constructor(element) {
        this.element = element;
        this.isFocused = false;
    }
    onFocus() {
        this.isFocused = true;
    }
    onBlur() {
        this.isFocused = false;
    }
    hasFocus() {
        return this.isFocused;
    }
    focus() {
        this.element.nativeElement.focus();
    }
}
NglDropdownItem.decorators = [
    { type: Directive, args: [{
                selector: '[nglDropdownItem]',
                host: {
                    'tabindex': '0',
                },
            },] }
];
NglDropdownItem.ctorParameters = () => [
    { type: ElementRef }
];
NglDropdownItem.propDecorators = {
    onFocus: [{ type: HostListener, args: ['focus',] }],
    onBlur: [{ type: HostListener, args: ['blur',] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24taXRlbS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nLWxpZ2h0bmluZy9zcmMvbGliL21lbnVzL2Ryb3Bkb3duLWl0ZW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBUXBFLE1BQU0sT0FBTyxlQUFlO0lBVTFCLFlBQW9CLE9BQW1CO1FBQW5CLFlBQU8sR0FBUCxPQUFPLENBQVk7UUFUL0IsY0FBUyxHQUFHLEtBQUssQ0FBQztJQVNnQixDQUFDO0lBUHBCLE9BQU87UUFDNUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7SUFDeEIsQ0FBQztJQUNxQixNQUFNO1FBQzFCLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO0lBQ3pCLENBQUM7SUFJRCxRQUFRO1FBQ04sT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3hCLENBQUM7SUFFRCxLQUFLO1FBQ0gsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDckMsQ0FBQzs7O1lBeEJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsbUJBQW1CO2dCQUM3QixJQUFJLEVBQUU7b0JBQ0osVUFBVSxFQUFFLEdBQUc7aUJBQ2hCO2FBQ0Y7OztZQVBtQixVQUFVOzs7c0JBVzNCLFlBQVksU0FBQyxPQUFPO3FCQUdwQixZQUFZLFNBQUMsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSG9zdExpc3RlbmVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tuZ2xEcm9wZG93bkl0ZW1dJyxcbiAgaG9zdDoge1xuICAgICd0YWJpbmRleCc6ICcwJyxcbiAgfSxcbn0pXG5leHBvcnQgY2xhc3MgTmdsRHJvcGRvd25JdGVtIHtcbiAgcHJpdmF0ZSBpc0ZvY3VzZWQgPSBmYWxzZTtcblxuICBASG9zdExpc3RlbmVyKCdmb2N1cycpIG9uRm9jdXMoKSB7XG4gICAgdGhpcy5pc0ZvY3VzZWQgPSB0cnVlO1xuICB9XG4gIEBIb3N0TGlzdGVuZXIoJ2JsdXInKSBvbkJsdXIoKSB7XG4gICAgdGhpcy5pc0ZvY3VzZWQgPSBmYWxzZTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudDogRWxlbWVudFJlZikge31cblxuICBoYXNGb2N1cygpIHtcbiAgICByZXR1cm4gdGhpcy5pc0ZvY3VzZWQ7XG4gIH1cblxuICBmb2N1cygpIHtcbiAgICB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICB9XG59XG4iXX0=
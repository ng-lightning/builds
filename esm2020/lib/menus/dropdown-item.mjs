import { Directive, HostListener } from '@angular/core';
import * as i0 from "@angular/core";
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
NglDropdownItem.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglDropdownItem, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Directive });
NglDropdownItem.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.2.9", type: NglDropdownItem, selector: "[nglDropdownItem]", host: { attributes: { "tabindex": "0" }, listeners: { "focus": "onFocus()", "blur": "onBlur()" } }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglDropdownItem, decorators: [{
            type: Directive,
            args: [{
                    selector: '[nglDropdownItem]',
                    host: {
                        'tabindex': '0',
                    },
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { onFocus: [{
                type: HostListener,
                args: ['focus']
            }], onBlur: [{
                type: HostListener,
                args: ['blur']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24taXRlbS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nLWxpZ2h0bmluZy9zcmMvbGliL21lbnVzL2Ryb3Bkb3duLWl0ZW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBYyxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBUXBFLE1BQU0sT0FBTyxlQUFlO0lBVTFCLFlBQW9CLE9BQW1CO1FBQW5CLFlBQU8sR0FBUCxPQUFPLENBQVk7UUFUL0IsY0FBUyxHQUFHLEtBQUssQ0FBQztJQVNnQixDQUFDO0lBUHBCLE9BQU87UUFDNUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7SUFDeEIsQ0FBQztJQUNxQixNQUFNO1FBQzFCLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO0lBQ3pCLENBQUM7SUFJRCxRQUFRO1FBQ04sT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3hCLENBQUM7SUFFRCxLQUFLO1FBQ0gsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDckMsQ0FBQzs7NEdBbEJVLGVBQWU7Z0dBQWYsZUFBZTsyRkFBZixlQUFlO2tCQU4zQixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxtQkFBbUI7b0JBQzdCLElBQUksRUFBRTt3QkFDSixVQUFVLEVBQUUsR0FBRztxQkFDaEI7aUJBQ0Y7aUdBSXdCLE9BQU87c0JBQTdCLFlBQVk7dUJBQUMsT0FBTztnQkFHQyxNQUFNO3NCQUEzQixZQUFZO3VCQUFDLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEhvc3RMaXN0ZW5lciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbmdsRHJvcGRvd25JdGVtXScsXG4gIGhvc3Q6IHtcbiAgICAndGFiaW5kZXgnOiAnMCcsXG4gIH0sXG59KVxuZXhwb3J0IGNsYXNzIE5nbERyb3Bkb3duSXRlbSB7XG4gIHByaXZhdGUgaXNGb2N1c2VkID0gZmFsc2U7XG5cbiAgQEhvc3RMaXN0ZW5lcignZm9jdXMnKSBvbkZvY3VzKCkge1xuICAgIHRoaXMuaXNGb2N1c2VkID0gdHJ1ZTtcbiAgfVxuICBASG9zdExpc3RlbmVyKCdibHVyJykgb25CbHVyKCkge1xuICAgIHRoaXMuaXNGb2N1c2VkID0gZmFsc2U7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnQ6IEVsZW1lbnRSZWYpIHt9XG5cbiAgaGFzRm9jdXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNGb2N1c2VkO1xuICB9XG5cbiAgZm9jdXMoKSB7XG4gICAgdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgfVxufVxuIl19
import { Directive, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class NglFileCrop {
    constructor(element, renderer) {
        this.element = element;
        this.renderer = renderer;
        this.cropClass = 'slds-file__crop';
        // this.renderer.addClass(this.element.nativeElement, this.cropClass);
    }
    set nglFileCrop(ratio) {
        const nativeElement = this.element.nativeElement;
        if (this.currentRatio) {
            this.renderer.removeClass(nativeElement, `${this.cropClass}`);
            this.renderer.removeClass(nativeElement, `${this.cropClass}_${this.currentRatio}`);
        }
        if (ratio) {
            this.renderer.addClass(nativeElement, `${this.cropClass}`);
            this.renderer.addClass(nativeElement, `${this.cropClass}_${ratio}`);
        }
        this.currentRatio = ratio;
    }
}
NglFileCrop.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglFileCrop, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Directive });
NglFileCrop.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.2.9", type: NglFileCrop, selector: "[nglFileCrop]", inputs: { nglFileCrop: "nglFileCrop" }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglFileCrop, decorators: [{
            type: Directive,
            args: [{
                    selector: '[nglFileCrop]',
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }]; }, propDecorators: { nglFileCrop: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS1jcm9wLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctbGlnaHRuaW5nL3NyYy9saWIvZmlsZXMvZmlsZS1jcm9wLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXlCLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFPeEUsTUFBTSxPQUFPLFdBQVc7SUFzQnRCLFlBQW9CLE9BQW1CLEVBQVUsUUFBbUI7UUFBaEQsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQUFVLGFBQVEsR0FBUixRQUFRLENBQVc7UUFKNUQsY0FBUyxHQUFHLGlCQUFpQixDQUFDO1FBS3BDLHNFQUFzRTtJQUN4RSxDQUFDO0lBdEJELElBQWEsV0FBVyxDQUFDLEtBQXVCO1FBQzlDLE1BQU0sYUFBYSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDO1FBRWpELElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNyQixJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsR0FBRyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQztZQUM5RCxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsR0FBRyxJQUFJLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDO1NBQ3BGO1FBRUQsSUFBSSxLQUFLLEVBQUU7WUFDVCxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQUUsR0FBRyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQztZQUMzRCxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQUUsR0FBRyxJQUFJLENBQUMsU0FBUyxJQUFJLEtBQUssRUFBRSxDQUFDLENBQUM7U0FDckU7UUFFRCxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztJQUM1QixDQUFDOzt3R0FoQlUsV0FBVzs0RkFBWCxXQUFXOzJGQUFYLFdBQVc7a0JBSHZCLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLGVBQWU7aUJBQzFCO3lIQUdjLFdBQVc7c0JBQXZCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIFJlbmRlcmVyMiwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IHR5cGUgTmdsRmlsZUNyb3BWYWx1ZSA9ICcxNi1ieS05JyB8ICc0LWJ5LTMnIHwgJzEtYnktMSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tuZ2xGaWxlQ3JvcF0nLFxufSlcbmV4cG9ydCBjbGFzcyBOZ2xGaWxlQ3JvcCB7XG5cbiAgQElucHV0KCkgc2V0IG5nbEZpbGVDcm9wKHJhdGlvOiBOZ2xGaWxlQ3JvcFZhbHVlKSB7XG4gICAgY29uc3QgbmF0aXZlRWxlbWVudCA9IHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50O1xuXG4gICAgaWYgKHRoaXMuY3VycmVudFJhdGlvKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKG5hdGl2ZUVsZW1lbnQsIGAke3RoaXMuY3JvcENsYXNzfWApO1xuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyhuYXRpdmVFbGVtZW50LCBgJHt0aGlzLmNyb3BDbGFzc31fJHt0aGlzLmN1cnJlbnRSYXRpb31gKTtcbiAgICB9XG5cbiAgICBpZiAocmF0aW8pIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3MobmF0aXZlRWxlbWVudCwgYCR7dGhpcy5jcm9wQ2xhc3N9YCk7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKG5hdGl2ZUVsZW1lbnQsIGAke3RoaXMuY3JvcENsYXNzfV8ke3JhdGlvfWApO1xuICAgIH1cblxuICAgIHRoaXMuY3VycmVudFJhdGlvID0gcmF0aW87XG4gIH1cblxuICBwcml2YXRlIGNyb3BDbGFzcyA9ICdzbGRzLWZpbGVfX2Nyb3AnO1xuXG4gIHByaXZhdGUgY3VycmVudFJhdGlvOiBOZ2xGaWxlQ3JvcFZhbHVlO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudDogRWxlbWVudFJlZiwgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyKSB7XG4gICAgLy8gdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCwgdGhpcy5jcm9wQ2xhc3MpO1xuICB9XG59XG4iXX0=
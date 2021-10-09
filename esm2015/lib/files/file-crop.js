import { Directive, ElementRef, Renderer2, Input } from '@angular/core';
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
NglFileCrop.decorators = [
    { type: Directive, args: [{
                selector: '[nglFileCrop]',
            },] }
];
NglFileCrop.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
NglFileCrop.propDecorators = {
    nglFileCrop: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS1jcm9wLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctbGlnaHRuaW5nL3NyYy9saWIvZmlsZXMvZmlsZS1jcm9wLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPeEUsTUFBTSxPQUFPLFdBQVc7SUFzQnRCLFlBQW9CLE9BQW1CLEVBQVUsUUFBbUI7UUFBaEQsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQUFVLGFBQVEsR0FBUixRQUFRLENBQVc7UUFKNUQsY0FBUyxHQUFHLGlCQUFpQixDQUFDO1FBS3BDLHNFQUFzRTtJQUN4RSxDQUFDO0lBdEJELElBQWEsV0FBVyxDQUFDLEtBQXVCO1FBQzlDLE1BQU0sYUFBYSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDO1FBRWpELElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNyQixJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsR0FBRyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQztZQUM5RCxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsR0FBRyxJQUFJLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDO1NBQ3BGO1FBRUQsSUFBSSxLQUFLLEVBQUU7WUFDVCxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQUUsR0FBRyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQztZQUMzRCxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQUUsR0FBRyxJQUFJLENBQUMsU0FBUyxJQUFJLEtBQUssRUFBRSxDQUFDLENBQUM7U0FDckU7UUFFRCxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztJQUM1QixDQUFDOzs7WUFuQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxlQUFlO2FBQzFCOzs7WUFObUIsVUFBVTtZQUFFLFNBQVM7OzswQkFTdEMsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgUmVuZGVyZXIyLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgdHlwZSBOZ2xGaWxlQ3JvcFZhbHVlID0gJzE2LWJ5LTknIHwgJzQtYnktMycgfCAnMS1ieS0xJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW25nbEZpbGVDcm9wXScsXG59KVxuZXhwb3J0IGNsYXNzIE5nbEZpbGVDcm9wIHtcblxuICBASW5wdXQoKSBzZXQgbmdsRmlsZUNyb3AocmF0aW86IE5nbEZpbGVDcm9wVmFsdWUpIHtcbiAgICBjb25zdCBuYXRpdmVFbGVtZW50ID0gdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQ7XG5cbiAgICBpZiAodGhpcy5jdXJyZW50UmF0aW8pIHtcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3MobmF0aXZlRWxlbWVudCwgYCR7dGhpcy5jcm9wQ2xhc3N9YCk7XG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKG5hdGl2ZUVsZW1lbnQsIGAke3RoaXMuY3JvcENsYXNzfV8ke3RoaXMuY3VycmVudFJhdGlvfWApO1xuICAgIH1cblxuICAgIGlmIChyYXRpbykge1xuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyhuYXRpdmVFbGVtZW50LCBgJHt0aGlzLmNyb3BDbGFzc31gKTtcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3MobmF0aXZlRWxlbWVudCwgYCR7dGhpcy5jcm9wQ2xhc3N9XyR7cmF0aW99YCk7XG4gICAgfVxuXG4gICAgdGhpcy5jdXJyZW50UmF0aW8gPSByYXRpbztcbiAgfVxuXG4gIHByaXZhdGUgY3JvcENsYXNzID0gJ3NsZHMtZmlsZV9fY3JvcCc7XG5cbiAgcHJpdmF0ZSBjdXJyZW50UmF0aW86IE5nbEZpbGVDcm9wVmFsdWU7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50UmVmLCBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHtcbiAgICAvLyB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LCB0aGlzLmNyb3BDbGFzcyk7XG4gIH1cbn1cbiJdfQ==
import { __decorate } from "tslib";
import { Directive, HostBinding, Input, ElementRef } from '@angular/core';
import { InputBoolean } from '../util/convert';
import { uniqueId } from '../util/util';
export class NglCarouselIndicator {
    constructor(el) {
        this.el = el;
        this.uid = uniqueId('carousel-indicator');
    }
    get tabindex() {
        return this.isActive ? 0 : -1;
    }
    ngOnChanges(changes) {
        this.image.active = this.isActive;
        if (changes.image) {
            this.image.labelledby = this.uid;
        }
    }
    focus() {
        this.el.nativeElement.focus();
    }
}
NglCarouselIndicator.decorators = [
    { type: Directive, args: [{
                selector: '[nglCarouselIndicator]',
            },] }
];
NglCarouselIndicator.ctorParameters = () => [
    { type: ElementRef }
];
NglCarouselIndicator.propDecorators = {
    isActive: [{ type: HostBinding, args: ['class.slds-is-active',] }, { type: HostBinding, args: ['attr.aria-selected',] }, { type: Input }],
    tabindex: [{ type: HostBinding, args: ['attr.tabindex',] }],
    image: [{ type: Input }],
    uid: [{ type: HostBinding, args: ['attr.id',] }]
};
__decorate([
    InputBoolean()
], NglCarouselIndicator.prototype, "isActive", void 0);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2Fyb3VzZWwtaW5kaWNhdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctbGlnaHRuaW5nL3NyYy9saWIvY2Fyb3VzZWwvY2Fyb3VzZWwtaW5kaWNhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUE0QixNQUFNLGVBQWUsQ0FBQztBQUNwRyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUt4QyxNQUFNLE9BQU8sb0JBQW9CO0lBZ0IvQixZQUFvQixFQUFjO1FBQWQsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUZsQyxRQUFHLEdBQUcsUUFBUSxDQUFDLG9CQUFvQixDQUFDLENBQUM7SUFFQSxDQUFDO0lBVnRDLElBQ0ksUUFBUTtRQUNWLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBU0QsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7UUFFbEMsSUFBSSxPQUFPLENBQUMsS0FBSyxFQUFFO1lBQ2pCLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUM7U0FDbEM7SUFDSCxDQUFDO0lBRUQsS0FBSztRQUNILElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2hDLENBQUM7OztZQS9CRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHdCQUF3QjthQUNuQzs7O1lBUHVDLFVBQVU7Ozt1QkFVL0MsV0FBVyxTQUFDLHNCQUFzQixjQUNsQyxXQUFXLFNBQUMsb0JBQW9CLGNBQ2hDLEtBQUs7dUJBRUwsV0FBVyxTQUFDLGVBQWU7b0JBSzNCLEtBQUs7a0JBRUwsV0FBVyxTQUFDLFNBQVM7O0FBVEc7SUFBZixZQUFZLEVBQUU7c0RBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBIb3N0QmluZGluZywgSW5wdXQsIEVsZW1lbnRSZWYsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSW5wdXRCb29sZWFuIH0gZnJvbSAnLi4vdXRpbC9jb252ZXJ0JztcbmltcG9ydCB7IE5nbENhcm91c2VsSW1hZ2UgfSBmcm9tICcuL2Nhcm91c2VsLWltYWdlJztcbmltcG9ydCB7IHVuaXF1ZUlkIH0gZnJvbSAnLi4vdXRpbC91dGlsJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW25nbENhcm91c2VsSW5kaWNhdG9yXScsXG59KVxuZXhwb3J0IGNsYXNzIE5nbENhcm91c2VsSW5kaWNhdG9yIGltcGxlbWVudHMgT25DaGFuZ2VzIHtcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnNsZHMtaXMtYWN0aXZlJylcbiAgQEhvc3RCaW5kaW5nKCdhdHRyLmFyaWEtc2VsZWN0ZWQnKVxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgcmVhZG9ubHkgaXNBY3RpdmU7XG5cbiAgQEhvc3RCaW5kaW5nKCdhdHRyLnRhYmluZGV4JylcbiAgZ2V0IHRhYmluZGV4KCkge1xuICAgIHJldHVybiB0aGlzLmlzQWN0aXZlID8gMCA6IC0xO1xuICB9XG5cbiAgQElucHV0KCkgcmVhZG9ubHkgaW1hZ2U6IE5nbENhcm91c2VsSW1hZ2U7XG5cbiAgQEhvc3RCaW5kaW5nKCdhdHRyLmlkJylcbiAgdWlkID0gdW5pcXVlSWQoJ2Nhcm91c2VsLWluZGljYXRvcicpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYpIHt9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIHRoaXMuaW1hZ2UuYWN0aXZlID0gdGhpcy5pc0FjdGl2ZTtcblxuICAgIGlmIChjaGFuZ2VzLmltYWdlKSB7XG4gICAgICB0aGlzLmltYWdlLmxhYmVsbGVkYnkgPSB0aGlzLnVpZDtcbiAgICB9XG4gIH1cblxuICBmb2N1cygpIHtcbiAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgfVxufVxuIl19
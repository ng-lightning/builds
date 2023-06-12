import { __decorate } from "tslib";
import { Directive, HostBinding, Input } from '@angular/core';
import { InputBoolean } from '../util/convert';
import { uniqueId } from '../util/util';
import * as i0 from "@angular/core";
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
NglCarouselIndicator.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglCarouselIndicator, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Directive });
NglCarouselIndicator.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.2.9", type: NglCarouselIndicator, selector: "[nglCarouselIndicator]", inputs: { isActive: "isActive", image: "image" }, host: { properties: { "class.slds-is-active": "this.isActive", "attr.aria-selected": "this.isActive", "attr.tabindex": "this.tabindex", "attr.id": "this.uid" } }, usesOnChanges: true, ngImport: i0 });
__decorate([
    InputBoolean()
], NglCarouselIndicator.prototype, "isActive", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglCarouselIndicator, decorators: [{
            type: Directive,
            args: [{
                    selector: '[nglCarouselIndicator]',
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { isActive: [{
                type: HostBinding,
                args: ['class.slds-is-active']
            }, {
                type: HostBinding,
                args: ['attr.aria-selected']
            }, {
                type: Input
            }], tabindex: [{
                type: HostBinding,
                args: ['attr.tabindex']
            }], image: [{
                type: Input
            }], uid: [{
                type: HostBinding,
                args: ['attr.id']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2Fyb3VzZWwtaW5kaWNhdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctbGlnaHRuaW5nL3NyYy9saWIvY2Fyb3VzZWwvY2Fyb3VzZWwtaW5kaWNhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQXdDLE1BQU0sZUFBZSxDQUFDO0FBQ3BHLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sY0FBYyxDQUFDOztBQUt4QyxNQUFNLE9BQU8sb0JBQW9CO0lBZ0IvQixZQUFvQixFQUFjO1FBQWQsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUZsQyxRQUFHLEdBQUcsUUFBUSxDQUFDLG9CQUFvQixDQUFDLENBQUM7SUFFQSxDQUFDO0lBVnRDLElBQ0ksUUFBUTtRQUNWLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBU0QsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7UUFFbEMsSUFBSSxPQUFPLENBQUMsS0FBSyxFQUFFO1lBQ2pCLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUM7U0FDbEM7SUFDSCxDQUFDO0lBRUQsS0FBSztRQUNILElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2hDLENBQUM7O2lIQTVCVSxvQkFBb0I7cUdBQXBCLG9CQUFvQjtBQUlOO0lBQWYsWUFBWSxFQUFFO3NEQUFVOzJGQUp2QixvQkFBb0I7a0JBSGhDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLHdCQUF3QjtpQkFDbkM7aUdBSzBCLFFBQVE7c0JBRmhDLFdBQVc7dUJBQUMsc0JBQXNCOztzQkFDbEMsV0FBVzt1QkFBQyxvQkFBb0I7O3NCQUNoQyxLQUFLO2dCQUdGLFFBQVE7c0JBRFgsV0FBVzt1QkFBQyxlQUFlO2dCQUtuQixLQUFLO3NCQUFiLEtBQUs7Z0JBR04sR0FBRztzQkFERixXQUFXO3VCQUFDLFNBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEhvc3RCaW5kaW5nLCBJbnB1dCwgRWxlbWVudFJlZiwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4gfSBmcm9tICcuLi91dGlsL2NvbnZlcnQnO1xuaW1wb3J0IHsgTmdsQ2Fyb3VzZWxJbWFnZSB9IGZyb20gJy4vY2Fyb3VzZWwtaW1hZ2UnO1xuaW1wb3J0IHsgdW5pcXVlSWQgfSBmcm9tICcuLi91dGlsL3V0aWwnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbmdsQ2Fyb3VzZWxJbmRpY2F0b3JdJyxcbn0pXG5leHBvcnQgY2xhc3MgTmdsQ2Fyb3VzZWxJbmRpY2F0b3IgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3Muc2xkcy1pcy1hY3RpdmUnKVxuICBASG9zdEJpbmRpbmcoJ2F0dHIuYXJpYS1zZWxlY3RlZCcpXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBpc0FjdGl2ZTtcblxuICBASG9zdEJpbmRpbmcoJ2F0dHIudGFiaW5kZXgnKVxuICBnZXQgdGFiaW5kZXgoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNBY3RpdmUgPyAwIDogLTE7XG4gIH1cblxuICBASW5wdXQoKSBpbWFnZTogTmdsQ2Fyb3VzZWxJbWFnZTtcblxuICBASG9zdEJpbmRpbmcoJ2F0dHIuaWQnKVxuICB1aWQgPSB1bmlxdWVJZCgnY2Fyb3VzZWwtaW5kaWNhdG9yJyk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZikge31cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgdGhpcy5pbWFnZS5hY3RpdmUgPSB0aGlzLmlzQWN0aXZlO1xuXG4gICAgaWYgKGNoYW5nZXMuaW1hZ2UpIHtcbiAgICAgIHRoaXMuaW1hZ2UubGFiZWxsZWRieSA9IHRoaXMudWlkO1xuICAgIH1cbiAgfVxuXG4gIGZvY3VzKCkge1xuICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICB9XG59XG4iXX0=
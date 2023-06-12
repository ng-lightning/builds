import { Component, Input, ChangeDetectionStrategy, HostBinding } from '@angular/core';
import * as i0 from "@angular/core";
export class NglColorpickerSwatch {
    constructor(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.renderer.addClass(this.el.nativeElement, 'slds-swatch');
    }
}
NglColorpickerSwatch.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglColorpickerSwatch, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Component });
NglColorpickerSwatch.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: NglColorpickerSwatch, selector: "[nglColorpickerSwatch]", inputs: { color: "color" }, host: { properties: { "style.background": "this.color" } }, ngImport: i0, template: "<span class=\"slds-assistive-text\" aria-hidden=\"true\">{{ color }}</span>", changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglColorpickerSwatch, decorators: [{
            type: Component,
            args: [{ selector: '[nglColorpickerSwatch]', changeDetection: ChangeDetectionStrategy.OnPush, template: "<span class=\"slds-assistive-text\" aria-hidden=\"true\">{{ color }}</span>" }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }]; }, propDecorators: { color: [{
                type: HostBinding,
                args: ['style.background']
            }, {
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sb3JwaWNrZXItc3dhdGNoLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctbGlnaHRuaW5nL3NyYy9saWIvY29sb3JwaWNrZXIvc3dhdGNoL2NvbG9ycGlja2VyLXN3YXRjaC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nLWxpZ2h0bmluZy9zcmMvbGliL2NvbG9ycGlja2VyL3N3YXRjaC9jb2xvcnBpY2tlci1zd2F0Y2guaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBeUIsdUJBQXVCLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQVE5RyxNQUFNLE9BQU8sb0JBQW9CO0lBSy9CLFlBQW9CLEVBQWMsRUFBVSxRQUFtQjtRQUEzQyxPQUFFLEdBQUYsRUFBRSxDQUFZO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUM3RCxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxhQUFhLENBQUMsQ0FBQztJQUMvRCxDQUFDOztpSEFQVSxvQkFBb0I7cUdBQXBCLG9CQUFvQixzSkNSakMsNkVBQXVFOzJGRFExRCxvQkFBb0I7a0JBTmhDLFNBQVM7K0JBRUUsd0JBQXdCLG1CQUVqQix1QkFBdUIsQ0FBQyxNQUFNO3lIQUt0QyxLQUFLO3NCQURiLFdBQVc7dUJBQUMsa0JBQWtCOztzQkFDOUIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIEVsZW1lbnRSZWYsIFJlbmRlcmVyMiwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIEhvc3RCaW5kaW5nIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQGFuZ3VsYXItZXNsaW50L2NvbXBvbmVudC1zZWxlY3RvclxuICBzZWxlY3RvcjogJ1tuZ2xDb2xvcnBpY2tlclN3YXRjaF0nLFxuICB0ZW1wbGF0ZVVybDogJy4vY29sb3JwaWNrZXItc3dhdGNoLmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgTmdsQ29sb3JwaWNrZXJTd2F0Y2gge1xuXG4gIEBIb3N0QmluZGluZygnc3R5bGUuYmFja2dyb3VuZCcpXG4gIEBJbnB1dCgpIGNvbG9yOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZiwgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyKSB7XG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsICdzbGRzLXN3YXRjaCcpO1xuICB9XG5cbn1cbiIsIjxzcGFuIGNsYXNzPVwic2xkcy1hc3Npc3RpdmUtdGV4dFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPnt7IGNvbG9yIH19PC9zcGFuPiJdfQ==
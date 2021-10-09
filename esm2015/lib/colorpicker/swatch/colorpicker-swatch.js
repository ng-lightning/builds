import { Component, Input, ElementRef, Renderer2, ChangeDetectionStrategy, HostBinding } from '@angular/core';
export class NglColorpickerSwatch {
    constructor(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.renderer.addClass(this.el.nativeElement, 'slds-swatch');
    }
}
NglColorpickerSwatch.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: '[nglColorpickerSwatch]',
                template: "<span class=\"slds-assistive-text\" aria-hidden=\"true\">{{ color }}</span>",
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
NglColorpickerSwatch.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
NglColorpickerSwatch.propDecorators = {
    color: [{ type: HostBinding, args: ['style.background',] }, { type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sb3JwaWNrZXItc3dhdGNoLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctbGlnaHRuaW5nL3NyYy9saWIvY29sb3JwaWNrZXIvc3dhdGNoL2NvbG9ycGlja2VyLXN3YXRjaC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLHVCQUF1QixFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQVE5RyxNQUFNLE9BQU8sb0JBQW9CO0lBSy9CLFlBQW9CLEVBQWMsRUFBVSxRQUFtQjtRQUEzQyxPQUFFLEdBQUYsRUFBRSxDQUFZO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUM3RCxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxhQUFhLENBQUMsQ0FBQztJQUMvRCxDQUFDOzs7WUFiRixTQUFTLFNBQUM7Z0JBQ1QsOENBQThDO2dCQUM5QyxRQUFRLEVBQUUsd0JBQXdCO2dCQUNsQyx1RkFBd0M7Z0JBQ3hDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEOzs7WUFQMEIsVUFBVTtZQUFFLFNBQVM7OztvQkFVN0MsV0FBVyxTQUFDLGtCQUFrQixjQUM5QixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgRWxlbWVudFJlZiwgUmVuZGVyZXIyLCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgSG9zdEJpbmRpbmcgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICdbbmdsQ29sb3JwaWNrZXJTd2F0Y2hdJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NvbG9ycGlja2VyLXN3YXRjaC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIE5nbENvbG9ycGlja2VyU3dhdGNoIHtcblxuICBASG9zdEJpbmRpbmcoJ3N0eWxlLmJhY2tncm91bmQnKVxuICBASW5wdXQoKSBjb2xvcjogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMikge1xuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbC5uYXRpdmVFbGVtZW50LCAnc2xkcy1zd2F0Y2gnKTtcbiAgfVxuXG59XG4iXX0=
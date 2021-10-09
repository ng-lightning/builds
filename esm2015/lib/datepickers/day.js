import { Directive, Input, HostBinding, ElementRef } from '@angular/core';
export class NglDay {
    constructor(el) {
        this.el = el;
    }
    get tabindex() {
        return this.isActive ? 0 : -1;
    }
    focus() {
        this.el.nativeElement.focus();
    }
}
NglDay.decorators = [
    { type: Directive, args: [{
                selector: 'td[nglDay]',
            },] }
];
NglDay.ctorParameters = () => [
    { type: ElementRef }
];
NglDay.propDecorators = {
    date: [{ type: Input, args: ['nglDay',] }],
    nglDayDisabled: [{ type: HostBinding, args: ['class.slds-disabled-text',] }, { type: HostBinding, args: ['attr.aria-disabled',] }, { type: Input }],
    nglDaySelected: [{ type: HostBinding, args: ['class.slds-is-selected',] }, { type: HostBinding, args: ['attr.aria-selected',] }, { type: Input }],
    isActive: [{ type: Input }],
    tabindex: [{ type: HostBinding, args: ['attr.tabindex',] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctbGlnaHRuaW5nL3NyYy9saWIvZGF0ZXBpY2tlcnMvZGF5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFNMUUsTUFBTSxPQUFPLE1BQU07SUFtQmpCLFlBQW9CLEVBQWM7UUFBZCxPQUFFLEdBQUYsRUFBRSxDQUFZO0lBQUcsQ0FBQztJQUx0QyxJQUNJLFFBQVE7UUFDVixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUlELEtBQUs7UUFDSCxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNoQyxDQUFDOzs7WUExQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxZQUFZO2FBQ3ZCOzs7WUFMdUMsVUFBVTs7O21CQVEvQyxLQUFLLFNBQUMsUUFBUTs2QkFFZCxXQUFXLFNBQUMsMEJBQTBCLGNBQ3RDLFdBQVcsU0FBQyxvQkFBb0IsY0FDaEMsS0FBSzs2QkFFTCxXQUFXLFNBQUMsd0JBQXdCLGNBQ3BDLFdBQVcsU0FBQyxvQkFBb0IsY0FDaEMsS0FBSzt1QkFFTCxLQUFLO3VCQUVMLFdBQVcsU0FBQyxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgSG9zdEJpbmRpbmcsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5nbEludGVybmFsRGF0ZSB9IGZyb20gJy4vdXRpbCc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ3RkW25nbERheV0nLFxufSlcbmV4cG9ydCBjbGFzcyBOZ2xEYXkge1xuXG4gIEBJbnB1dCgnbmdsRGF5JykgcmVhZG9ubHkgZGF0ZTogTmdsSW50ZXJuYWxEYXRlO1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3Muc2xkcy1kaXNhYmxlZC10ZXh0JylcbiAgQEhvc3RCaW5kaW5nKCdhdHRyLmFyaWEtZGlzYWJsZWQnKVxuICBASW5wdXQoKSByZWFkb25seSBuZ2xEYXlEaXNhYmxlZDogYm9vbGVhbjtcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnNsZHMtaXMtc2VsZWN0ZWQnKVxuICBASG9zdEJpbmRpbmcoJ2F0dHIuYXJpYS1zZWxlY3RlZCcpXG4gIEBJbnB1dCgpIHJlYWRvbmx5IG5nbERheVNlbGVjdGVkOiBib29sZWFuO1xuXG4gIEBJbnB1dCgpIHJlYWRvbmx5IGlzQWN0aXZlO1xuXG4gIEBIb3N0QmluZGluZygnYXR0ci50YWJpbmRleCcpXG4gIGdldCB0YWJpbmRleCgpIHtcbiAgICByZXR1cm4gdGhpcy5pc0FjdGl2ZSA/IDAgOiAtMTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYpIHt9XG5cbiAgZm9jdXMoKSB7XG4gICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gIH1cbn1cbiJdfQ==
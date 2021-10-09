import { __decorate } from "tslib";
import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, ElementRef, Renderer2, ContentChildren } from '@angular/core';
import { NglAccordionSection } from './accordion-section';
import { isOptionSelected, addOptionToSelection } from '../util/util';
import { InputBoolean } from '../util/convert';
export class NglAccordion {
    constructor(element, renderer) {
        this.activeNameChange = new EventEmitter();
        /**
         * Whether we allow multiple sections open at a time.
         */
        this.multiple = false;
        renderer.addClass(element.nativeElement, 'slds-accordion');
    }
    toggle(section) {
        const active = addOptionToSelection(section.name, this.activeName, this.multiple, true);
        this.activeNameChange.emit(active);
    }
    isActive(section) {
        return isOptionSelected(section.name, this.activeName, this.multiple);
    }
}
NglAccordion.decorators = [
    { type: Component, args: [{
                selector: 'ngl-accordion,[ngl-accordion]',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: "\n<li *ngFor=\"let section of sections\" nglAccordionItem [isActive]=\"isActive(section)\" [section]=\"section\" (toggle)=\"toggle(section)\"></li>"
            },] }
];
NglAccordion.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
NglAccordion.propDecorators = {
    activeName: [{ type: Input }],
    activeNameChange: [{ type: Output }],
    multiple: [{ type: Input }],
    sections: [{ type: ContentChildren, args: [NglAccordionSection,] }]
};
__decorate([
    InputBoolean()
], NglAccordion.prototype, "multiple", void 0);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3JkaW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctbGlnaHRuaW5nL3NyYy9saWIvYWNjb3JkaW9uL2FjY29yZGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSx1QkFBdUIsRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLGVBQWUsRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUNuSixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDdEUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBTy9DLE1BQU0sT0FBTyxZQUFZO0lBZ0J2QixZQUFZLE9BQW1CLEVBQUUsUUFBbUI7UUFUMUMscUJBQWdCLEdBQUcsSUFBSSxZQUFZLEVBQXFCLENBQUM7UUFFbkU7O1dBRUc7UUFDc0IsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUt4QyxRQUFRLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBRUQsTUFBTSxDQUFDLE9BQTRCO1FBQ2pDLE1BQU0sTUFBTSxHQUFHLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3hGLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUVELFFBQVEsQ0FBQyxPQUE0QjtRQUNuQyxPQUFPLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDeEUsQ0FBQzs7O1lBaENGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsK0JBQStCO2dCQUN6QyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsK0pBQStCO2FBQ2hDOzs7WUFUeUUsVUFBVTtZQUFFLFNBQVM7Ozt5QkFlNUYsS0FBSzsrQkFFTCxNQUFNO3VCQUtOLEtBQUs7dUJBRUwsZUFBZSxTQUFDLG1CQUFtQjs7QUFGWDtJQUFmLFlBQVksRUFBRTs4Q0FBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIEVsZW1lbnRSZWYsIFJlbmRlcmVyMiwgQ29udGVudENoaWxkcmVuLCBRdWVyeUxpc3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5nbEFjY29yZGlvblNlY3Rpb24gfSBmcm9tICcuL2FjY29yZGlvbi1zZWN0aW9uJztcbmltcG9ydCB7IGlzT3B0aW9uU2VsZWN0ZWQsIGFkZE9wdGlvblRvU2VsZWN0aW9uIH0gZnJvbSAnLi4vdXRpbC91dGlsJztcbmltcG9ydCB7IElucHV0Qm9vbGVhbiB9IGZyb20gJy4uL3V0aWwvY29udmVydCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25nbC1hY2NvcmRpb24sW25nbC1hY2NvcmRpb25dJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHRlbXBsYXRlVXJsOiAnLi9hY2NvcmRpb24uaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIE5nbEFjY29yZGlvbiB7XG5cbiAgLyoqXG4gICAqIERlZmluZXMgdGhlIGV4cGFuZGVkIHNlY3Rpb24ocykuXG4gICAqL1xuICBASW5wdXQoKSBhY3RpdmVOYW1lOiBzdHJpbmcgfCBzdHJpbmdbXTtcblxuICBAT3V0cHV0KCkgYWN0aXZlTmFtZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nIHwgc3RyaW5nW10+KCk7XG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgd2UgYWxsb3cgbXVsdGlwbGUgc2VjdGlvbnMgb3BlbiBhdCBhIHRpbWUuXG4gICAqL1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbXVsdGlwbGUgPSBmYWxzZTtcblxuICBAQ29udGVudENoaWxkcmVuKE5nbEFjY29yZGlvblNlY3Rpb24pIHNlY3Rpb25zOiBRdWVyeUxpc3Q8TmdsQWNjb3JkaW9uU2VjdGlvbj47XG5cbiAgY29uc3RydWN0b3IoZWxlbWVudDogRWxlbWVudFJlZiwgcmVuZGVyZXI6IFJlbmRlcmVyMikge1xuICAgIHJlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ3NsZHMtYWNjb3JkaW9uJyk7XG4gIH1cblxuICB0b2dnbGUoc2VjdGlvbjogTmdsQWNjb3JkaW9uU2VjdGlvbikge1xuICAgIGNvbnN0IGFjdGl2ZSA9IGFkZE9wdGlvblRvU2VsZWN0aW9uKHNlY3Rpb24ubmFtZSwgdGhpcy5hY3RpdmVOYW1lLCB0aGlzLm11bHRpcGxlLCB0cnVlKTtcbiAgICB0aGlzLmFjdGl2ZU5hbWVDaGFuZ2UuZW1pdChhY3RpdmUpO1xuICB9XG5cbiAgaXNBY3RpdmUoc2VjdGlvbjogTmdsQWNjb3JkaW9uU2VjdGlvbik6IGJvb2xlYW4ge1xuICAgIHJldHVybiBpc09wdGlvblNlbGVjdGVkKHNlY3Rpb24ubmFtZSwgdGhpcy5hY3RpdmVOYW1lLCB0aGlzLm11bHRpcGxlKTtcbiAgfVxuXG59XG4iXX0=
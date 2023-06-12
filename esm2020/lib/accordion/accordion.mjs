import { __decorate } from "tslib";
import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, ContentChildren } from '@angular/core';
import { NglAccordionSection } from './accordion-section';
import { isOptionSelected, addOptionToSelection } from '../util/util';
import { InputBoolean } from '../util/convert';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "./accordion-item";
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
NglAccordion.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglAccordion, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Component });
NglAccordion.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: NglAccordion, selector: "ngl-accordion,[ngl-accordion]", inputs: { activeName: "activeName", multiple: "multiple" }, outputs: { activeNameChange: "activeNameChange" }, queries: [{ propertyName: "sections", predicate: NglAccordionSection }], ngImport: i0, template: "\n<li *ngFor=\"let section of sections\" nglAccordionItem [isActive]=\"isActive(section)\" [section]=\"section\" (toggle)=\"toggle(section)\"></li>", dependencies: [{ kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "component", type: i2.NglAccordionItem, selector: "li[nglAccordionItem]", inputs: ["isActive", "section"], outputs: ["toggle"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
__decorate([
    InputBoolean()
], NglAccordion.prototype, "multiple", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglAccordion, decorators: [{
            type: Component,
            args: [{ selector: 'ngl-accordion,[ngl-accordion]', changeDetection: ChangeDetectionStrategy.OnPush, template: "\n<li *ngFor=\"let section of sections\" nglAccordionItem [isActive]=\"isActive(section)\" [section]=\"section\" (toggle)=\"toggle(section)\"></li>" }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }]; }, propDecorators: { activeName: [{
                type: Input
            }], activeNameChange: [{
                type: Output
            }], multiple: [{
                type: Input
            }], sections: [{
                type: ContentChildren,
                args: [NglAccordionSection]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3JkaW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctbGlnaHRuaW5nL3NyYy9saWIvYWNjb3JkaW9uL2FjY29yZGlvbi50cyIsIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nLWxpZ2h0bmluZy9zcmMvbGliL2FjY29yZGlvbi9hY2NvcmRpb24uaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSx1QkFBdUIsRUFBeUIsZUFBZSxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBQ25KLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQzFELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUN0RSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7Ozs7QUFPL0MsTUFBTSxPQUFPLFlBQVk7SUFnQnZCLFlBQVksT0FBbUIsRUFBRSxRQUFtQjtRQVQxQyxxQkFBZ0IsR0FBRyxJQUFJLFlBQVksRUFBcUIsQ0FBQztRQUVuRTs7V0FFRztRQUNzQixhQUFRLEdBQUcsS0FBSyxDQUFDO1FBS3hDLFFBQVEsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO0lBQzdELENBQUM7SUFFRCxNQUFNLENBQUMsT0FBNEI7UUFDakMsTUFBTSxNQUFNLEdBQUcsb0JBQW9CLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDeEYsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRUQsUUFBUSxDQUFDLE9BQTRCO1FBQ25DLE9BQU8sZ0JBQWdCLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN4RSxDQUFDOzt5R0EzQlUsWUFBWTs2RkFBWixZQUFZLDZNQWNOLG1CQUFtQiw2QkN4QnRDLHFKQUN5STtBRHFCOUc7SUFBZixZQUFZLEVBQUU7OENBQWtCOzJGQVovQixZQUFZO2tCQUx4QixTQUFTOytCQUNFLCtCQUErQixtQkFDeEIsdUJBQXVCLENBQUMsTUFBTTt5SEFRdEMsVUFBVTtzQkFBbEIsS0FBSztnQkFFSSxnQkFBZ0I7c0JBQXpCLE1BQU07Z0JBS2tCLFFBQVE7c0JBQWhDLEtBQUs7Z0JBRWdDLFFBQVE7c0JBQTdDLGVBQWU7dUJBQUMsbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBFbGVtZW50UmVmLCBSZW5kZXJlcjIsIENvbnRlbnRDaGlsZHJlbiwgUXVlcnlMaXN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ2xBY2NvcmRpb25TZWN0aW9uIH0gZnJvbSAnLi9hY2NvcmRpb24tc2VjdGlvbic7XG5pbXBvcnQgeyBpc09wdGlvblNlbGVjdGVkLCBhZGRPcHRpb25Ub1NlbGVjdGlvbiB9IGZyb20gJy4uL3V0aWwvdXRpbCc7XG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4gfSBmcm9tICcuLi91dGlsL2NvbnZlcnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZ2wtYWNjb3JkaW9uLFtuZ2wtYWNjb3JkaW9uXScsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICB0ZW1wbGF0ZVVybDogJy4vYWNjb3JkaW9uLmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBOZ2xBY2NvcmRpb24ge1xuXG4gIC8qKlxuICAgKiBEZWZpbmVzIHRoZSBleHBhbmRlZCBzZWN0aW9uKHMpLlxuICAgKi9cbiAgQElucHV0KCkgYWN0aXZlTmFtZTogc3RyaW5nIHwgc3RyaW5nW107XG5cbiAgQE91dHB1dCgpIGFjdGl2ZU5hbWVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZyB8IHN0cmluZ1tdPigpO1xuXG4gIC8qKlxuICAgKiBXaGV0aGVyIHdlIGFsbG93IG11bHRpcGxlIHNlY3Rpb25zIG9wZW4gYXQgYSB0aW1lLlxuICAgKi9cbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG11bHRpcGxlID0gZmFsc2U7XG5cbiAgQENvbnRlbnRDaGlsZHJlbihOZ2xBY2NvcmRpb25TZWN0aW9uKSBzZWN0aW9uczogUXVlcnlMaXN0PE5nbEFjY29yZGlvblNlY3Rpb24+O1xuXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQ6IEVsZW1lbnRSZWYsIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHtcbiAgICByZW5kZXJlci5hZGRDbGFzcyhlbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICdzbGRzLWFjY29yZGlvbicpO1xuICB9XG5cbiAgdG9nZ2xlKHNlY3Rpb246IE5nbEFjY29yZGlvblNlY3Rpb24pIHtcbiAgICBjb25zdCBhY3RpdmUgPSBhZGRPcHRpb25Ub1NlbGVjdGlvbihzZWN0aW9uLm5hbWUsIHRoaXMuYWN0aXZlTmFtZSwgdGhpcy5tdWx0aXBsZSwgdHJ1ZSk7XG4gICAgdGhpcy5hY3RpdmVOYW1lQ2hhbmdlLmVtaXQoYWN0aXZlKTtcbiAgfVxuXG4gIGlzQWN0aXZlKHNlY3Rpb246IE5nbEFjY29yZGlvblNlY3Rpb24pOiBib29sZWFuIHtcbiAgICByZXR1cm4gaXNPcHRpb25TZWxlY3RlZChzZWN0aW9uLm5hbWUsIHRoaXMuYWN0aXZlTmFtZSwgdGhpcy5tdWx0aXBsZSk7XG4gIH1cblxufVxuIiwiXG48bGkgKm5nRm9yPVwibGV0IHNlY3Rpb24gb2Ygc2VjdGlvbnNcIiBuZ2xBY2NvcmRpb25JdGVtIFtpc0FjdGl2ZV09XCJpc0FjdGl2ZShzZWN0aW9uKVwiIFtzZWN0aW9uXT1cInNlY3Rpb25cIiAodG9nZ2xlKT1cInRvZ2dsZShzZWN0aW9uKVwiPjwvbGk+Il19
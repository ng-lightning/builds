import { __decorate } from "tslib";
import { Component, Input, ChangeDetectionStrategy, HostBinding, ContentChildren } from '@angular/core';
import { toBoolean, InputBoolean } from '../../util/convert';
import { uniqueId } from '../../util/util';
import { NglCheckboxOption } from './checkbox-option';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../../util/outlet";
export class NglCheckboxGroup {
    constructor() {
        this.uid = uniqueId('checkbox-group');
        this._type = 'list';
    }
    get hasError() {
        return toBoolean(this.error);
    }
    get errorId() {
        return `error_${this.uid}`;
    }
    set type(type) {
        this._type = type;
        this.updateChildrenType();
    }
    get type() {
        return this._type;
    }
    ngOnChanges(changes) {
        if (changes.error && this.options) {
            this.options.forEach((option) => {
                option.setError(this.error ? this.errorId : null);
            });
        }
    }
    ngAfterContentInit() {
        this.updateChildrenType();
    }
    updateChildrenType() {
        if (!this.options) {
            return;
        }
        this.options.forEach((option) => {
            option.type = this.type;
        });
    }
}
NglCheckboxGroup.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglCheckboxGroup, deps: [], target: i0.ɵɵFactoryTarget.Component });
NglCheckboxGroup.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: NglCheckboxGroup, selector: "ngl-checkbox-group,[ngl-checkbox-group]", inputs: { label: "label", error: "error", required: "required", type: "type" }, host: { properties: { "class.slds-form-element": "true", "class.slds-has-error": "this.hasError" } }, queries: [{ propertyName: "options", predicate: NglCheckboxOption }], usesOnChanges: true, ngImport: i0, template: "\n<legend class=\"slds-form-element__legend slds-form-element__label\"><abbr class=\"slds-required\" *ngIf=\"required\" title=\"required\">*</abbr><span [nglInternalOutlet]=\"label\"></span></legend>\n<div class=\"slds-form-element__control\">\n  <div class=\"slds-checkbox_button-group\" *ngIf=\"type === 'button'; else contentTpl\">\n    <ng-container *ngTemplateOutlet=\"contentTpl\"></ng-container>\n  </div>\n</div>\n<div class=\"slds-form-element__help\" *ngIf=\"hasError\" [id]=\"errorId\" [nglInternalOutlet]=\"error\"></div>\n<ng-template #contentTpl>\n  <ng-content></ng-content>\n</ng-template>", dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "component", type: i2.NglInternalOutlet, selector: "[nglInternalOutlet]", inputs: ["nglInternalOutlet", "nglInternalOutletContext"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
__decorate([
    InputBoolean()
], NglCheckboxGroup.prototype, "required", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglCheckboxGroup, decorators: [{
            type: Component,
            args: [{ selector: 'ngl-checkbox-group,[ngl-checkbox-group]', changeDetection: ChangeDetectionStrategy.OnPush, host: {
                        '[class.slds-form-element]': 'true',
                    }, template: "\n<legend class=\"slds-form-element__legend slds-form-element__label\"><abbr class=\"slds-required\" *ngIf=\"required\" title=\"required\">*</abbr><span [nglInternalOutlet]=\"label\"></span></legend>\n<div class=\"slds-form-element__control\">\n  <div class=\"slds-checkbox_button-group\" *ngIf=\"type === 'button'; else contentTpl\">\n    <ng-container *ngTemplateOutlet=\"contentTpl\"></ng-container>\n  </div>\n</div>\n<div class=\"slds-form-element__help\" *ngIf=\"hasError\" [id]=\"errorId\" [nglInternalOutlet]=\"error\"></div>\n<ng-template #contentTpl>\n  <ng-content></ng-content>\n</ng-template>" }]
        }], propDecorators: { options: [{
                type: ContentChildren,
                args: [NglCheckboxOption]
            }], label: [{
                type: Input
            }], error: [{
                type: Input
            }], hasError: [{
                type: HostBinding,
                args: ['class.slds-has-error']
            }], required: [{
                type: Input
            }], type: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3gtZ3JvdXAuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1saWdodG5pbmcvc3JjL2xpYi9jaGVja2JveGVzL2dyb3VwL2NoZWNrYm94LWdyb3VwLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctbGlnaHRuaW5nL3NyYy9saWIvY2hlY2tib3hlcy9ncm91cC9jaGVja2JveC1ncm91cC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSx1QkFBdUIsRUFBZSxXQUFXLEVBQ3RDLGVBQWUsRUFBNEIsTUFBTSxlQUFlLENBQUM7QUFDdkcsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUM3RCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7Ozs7QUFVdEQsTUFBTSxPQUFPLGdCQUFnQjtJQVI3QjtRQW1DVSxRQUFHLEdBQUcsUUFBUSxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFFakMsVUFBSyxHQUFzQixNQUFNLENBQUM7S0F1QjNDO0lBNUNDLElBQ0ksUUFBUTtRQUNWLE9BQU8sU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBSUQsSUFBSSxPQUFPO1FBQ1QsT0FBTyxTQUFTLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBRUQsSUFBYSxJQUFJLENBQUMsSUFBdUI7UUFDdkMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDbEIsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7SUFDNUIsQ0FBQztJQUNELElBQUksSUFBSTtRQUNOLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNwQixDQUFDO0lBTUQsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLElBQUksT0FBTyxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2pDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBeUIsRUFBRSxFQUFFO2dCQUNqRCxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3BELENBQUMsQ0FBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDO0lBRUQsa0JBQWtCO1FBQ2hCLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFFTyxrQkFBa0I7UUFDeEIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDakIsT0FBTztTQUNSO1FBRUQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUF5QixFQUFFLEVBQUU7WUFDakQsTUFBTSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQzFCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7NkdBbkRVLGdCQUFnQjtpR0FBaEIsZ0JBQWdCLDZSQUVWLGlCQUFpQixrRENoQnBDLCtsQkFVYztBRGlCYTtJQUFmLFlBQVksRUFBRTtrREFBbUI7MkZBYmhDLGdCQUFnQjtrQkFSNUIsU0FBUzsrQkFDRSx5Q0FBeUMsbUJBRWxDLHVCQUF1QixDQUFDLE1BQU0sUUFDekM7d0JBQ0osMkJBQTJCLEVBQUUsTUFBTTtxQkFDcEM7OEJBSW1DLE9BQU87c0JBQTFDLGVBQWU7dUJBQUMsaUJBQWlCO2dCQUV6QixLQUFLO3NCQUFiLEtBQUs7Z0JBRUcsS0FBSztzQkFBYixLQUFLO2dCQUdGLFFBQVE7c0JBRFgsV0FBVzt1QkFBQyxzQkFBc0I7Z0JBS1YsUUFBUTtzQkFBaEMsS0FBSztnQkFNTyxJQUFJO3NCQUFoQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIFRlbXBsYXRlUmVmLCBIb3N0QmluZGluZyxcbiAgICAgICAgIEFmdGVyQ29udGVudEluaXQsIE9uQ2hhbmdlcywgQ29udGVudENoaWxkcmVuLCBRdWVyeUxpc3QsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHRvQm9vbGVhbiwgSW5wdXRCb29sZWFuIH0gZnJvbSAnLi4vLi4vdXRpbC9jb252ZXJ0JztcbmltcG9ydCB7IHVuaXF1ZUlkIH0gZnJvbSAnLi4vLi4vdXRpbC91dGlsJztcbmltcG9ydCB7IE5nbENoZWNrYm94T3B0aW9uIH0gZnJvbSAnLi9jaGVja2JveC1vcHRpb24nO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZ2wtY2hlY2tib3gtZ3JvdXAsW25nbC1jaGVja2JveC1ncm91cF0nLFxuICB0ZW1wbGF0ZVVybDogJy4vY2hlY2tib3gtZ3JvdXAuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5zbGRzLWZvcm0tZWxlbWVudF0nOiAndHJ1ZScsXG4gIH0sXG59KVxuZXhwb3J0IGNsYXNzIE5nbENoZWNrYm94R3JvdXAgaW1wbGVtZW50cyBPbkNoYW5nZXMsIEFmdGVyQ29udGVudEluaXQge1xuXG4gIEBDb250ZW50Q2hpbGRyZW4oTmdsQ2hlY2tib3hPcHRpb24pIG9wdGlvbnM6IFF1ZXJ5TGlzdDxOZ2xDaGVja2JveE9wdGlvbj47XG5cbiAgQElucHV0KCkgbGFiZWw6IHN0cmluZyB8IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgQElucHV0KCkgZXJyb3I6IHN0cmluZyB8IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5zbGRzLWhhcy1lcnJvcicpXG4gIGdldCBoYXNFcnJvcigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdG9Cb29sZWFuKHRoaXMuZXJyb3IpO1xuICB9XG5cbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHJlcXVpcmVkOiBib29sZWFuO1xuXG4gIGdldCBlcnJvcklkKCkge1xuICAgIHJldHVybiBgZXJyb3JfJHt0aGlzLnVpZH1gO1xuICB9XG5cbiAgQElucHV0KCkgc2V0IHR5cGUodHlwZTogJ2xpc3QnIHwgJ2J1dHRvbicpIHtcbiAgICB0aGlzLl90eXBlID0gdHlwZTtcbiAgICB0aGlzLnVwZGF0ZUNoaWxkcmVuVHlwZSgpO1xuICB9XG4gIGdldCB0eXBlKCkge1xuICAgIHJldHVybiB0aGlzLl90eXBlO1xuICB9XG5cbiAgcHJpdmF0ZSB1aWQgPSB1bmlxdWVJZCgnY2hlY2tib3gtZ3JvdXAnKTtcblxuICBwcml2YXRlIF90eXBlOiAnbGlzdCcgfCAnYnV0dG9uJyA9ICdsaXN0JztcblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgaWYgKGNoYW5nZXMuZXJyb3IgJiYgdGhpcy5vcHRpb25zKSB7XG4gICAgICB0aGlzLm9wdGlvbnMuZm9yRWFjaCgob3B0aW9uOiBOZ2xDaGVja2JveE9wdGlvbikgPT4ge1xuICAgICAgICBvcHRpb24uc2V0RXJyb3IodGhpcy5lcnJvciA/IHRoaXMuZXJyb3JJZCA6IG51bGwpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAgIHRoaXMudXBkYXRlQ2hpbGRyZW5UeXBlKCk7XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZUNoaWxkcmVuVHlwZSgpIHtcbiAgICBpZiAoIXRoaXMub3B0aW9ucykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMub3B0aW9ucy5mb3JFYWNoKChvcHRpb246IE5nbENoZWNrYm94T3B0aW9uKSA9PiB7XG4gICAgICBvcHRpb24udHlwZSA9IHRoaXMudHlwZTtcbiAgICB9KTtcbiAgfVxufVxuIiwiXG48bGVnZW5kIGNsYXNzPVwic2xkcy1mb3JtLWVsZW1lbnRfX2xlZ2VuZCBzbGRzLWZvcm0tZWxlbWVudF9fbGFiZWxcIj48YWJiciBjbGFzcz1cInNsZHMtcmVxdWlyZWRcIiAqbmdJZj1cInJlcXVpcmVkXCIgdGl0bGU9XCJyZXF1aXJlZFwiPio8L2FiYnI+PHNwYW4gW25nbEludGVybmFsT3V0bGV0XT1cImxhYmVsXCI+PC9zcGFuPjwvbGVnZW5kPlxuPGRpdiBjbGFzcz1cInNsZHMtZm9ybS1lbGVtZW50X19jb250cm9sXCI+XG4gIDxkaXYgY2xhc3M9XCJzbGRzLWNoZWNrYm94X2J1dHRvbi1ncm91cFwiICpuZ0lmPVwidHlwZSA9PT0gJ2J1dHRvbic7IGVsc2UgY29udGVudFRwbFwiPlxuICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJjb250ZW50VHBsXCI+PC9uZy1jb250YWluZXI+XG4gIDwvZGl2PlxuPC9kaXY+XG48ZGl2IGNsYXNzPVwic2xkcy1mb3JtLWVsZW1lbnRfX2hlbHBcIiAqbmdJZj1cImhhc0Vycm9yXCIgW2lkXT1cImVycm9ySWRcIiBbbmdsSW50ZXJuYWxPdXRsZXRdPVwiZXJyb3JcIj48L2Rpdj5cbjxuZy10ZW1wbGF0ZSAjY29udGVudFRwbD5cbiAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuPC9uZy10ZW1wbGF0ZT4iXX0=
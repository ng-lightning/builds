import { __decorate } from "tslib";
import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter, HostBinding, } from '@angular/core';
import { InputBoolean } from '../util/convert';
import { isTemplateRef } from '../util/check';
export class NglPill {
    constructor() {
        this.isTemplateRef = isTemplateRef;
        /**
           * Applies the error style to the component.
           */
        this.hasError = false;
        /**
           * Whether or not to override the remove button's visibility, if `remove` is set.
           */
        this.removable = true;
        /**
           * Remove button title (and assistive text).
           */
        this.removeTitle = 'Remove';
        /**
           * The event emitted when the remove button is clicked.
           */
        this.remove = new EventEmitter();
        this.linked = false;
    }
    ngOnInit() {
        this.canRemove = this.remove.observers.length > 0;
    }
    onRemove(e) {
        this.remove.emit(e);
    }
    get pillIcon() {
        return this.icon || this.avatar;
    }
}
NglPill.decorators = [
    { type: Component, args: [{
                selector: 'ngl-pill',
                template: "<span class=\"slds-pill__icon_container\" *ngIf=\"pillIcon\">\n  <ng-container *ngIf=\"isTemplateRef(pillIcon); else defaultTpl\" [ngTemplateOutlet]=\"pillIcon\"></ng-container>\n  <ng-template #defaultTpl>\n    <ngl-icon *ngIf=\"icon; else avatarTpl\" [iconName]=\"icon\"></ngl-icon>\n    <ng-template #avatarTpl>\n      <ngl-avatar [src]=\"avatar\" variant=\"circle\"></ngl-avatar>\n    </ng-template>\n  </ng-template></span>\n<ng-container *ngIf=\"linked; else unlinked\">\n  <ng-content select=\"a\"></ng-content>\n</ng-container>\n<ng-template #unlinked><span class=\"slds-pill__label\">\n    <ng-content></ng-content></span></ng-template>\n<button class=\"slds-button slds-button_icon slds-pill__remove\" *ngIf=\"canRemove &amp;&amp; removable\" type=\"button\" [title]=\"removeTitle\" (click)=\"onRemove($event)\">\n  <svg class=\"slds-button__icon\" nglIconName=\"close\"></svg><span class=\"slds-assistive-text\" *ngIf=\"removeTitle\">{{removeTitle}}</span>\n</button>",
                changeDetection: ChangeDetectionStrategy.OnPush,
                host: {
                    '[class.slds-pill]': 'true',
                }
            },] }
];
NglPill.propDecorators = {
    icon: [{ type: Input }],
    avatar: [{ type: Input }],
    hasError: [{ type: Input }, { type: HostBinding, args: ['class.slds-has-error',] }],
    removable: [{ type: Input }],
    removeTitle: [{ type: Input }],
    remove: [{ type: Output }],
    linked: [{ type: HostBinding, args: ['class.slds-pill_link',] }]
};
__decorate([
    InputBoolean()
], NglPill.prototype, "hasError", void 0);
__decorate([
    InputBoolean()
], NglPill.prototype, "removable", void 0);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGlsbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nLWxpZ2h0bmluZy9zcmMvbGliL3BpbGxzL3BpbGwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsdUJBQXVCLEVBQ3ZCLEtBQUssRUFDTCxNQUFNLEVBQ04sWUFBWSxFQUdaLFdBQVcsR0FDWixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQVU5QyxNQUFNLE9BQU8sT0FBTztJQVJwQjtRQVNFLGtCQUFhLEdBQUcsYUFBYSxDQUFDO1FBVzlCOzthQUVFO1FBQzRELGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDL0U7O2FBRUU7UUFDdUIsY0FBUyxHQUFHLElBQUksQ0FBQztRQUMxQzs7YUFFRTtRQUNPLGdCQUFXLEdBQUcsUUFBUSxDQUFDO1FBQ2hDOzthQUVFO1FBQ1EsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFjLENBQUM7UUFFYixXQUFNLEdBQUcsS0FBSyxDQUFDO0lBYXRELENBQUM7SUFYQyxRQUFRO1FBQ04sSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFFRCxRQUFRLENBQUMsQ0FBYTtRQUNwQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN0QixDQUFDO0lBRUQsSUFBSSxRQUFRO1FBQ1YsT0FBTyxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDbEMsQ0FBQzs7O1lBakRGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsVUFBVTtnQkFDcEIsODlCQUEwQjtnQkFDMUIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLElBQUksRUFBRTtvQkFDSixtQkFBbUIsRUFBRSxNQUFNO2lCQUM1QjthQUNGOzs7bUJBUUUsS0FBSztxQkFJTCxLQUFLO3VCQUlMLEtBQUssWUFBb0IsV0FBVyxTQUFDLHNCQUFzQjt3QkFJM0QsS0FBSzswQkFJTCxLQUFLO3FCQUlMLE1BQU07cUJBRU4sV0FBVyxTQUFDLHNCQUFzQjs7QUFkMkI7SUFBcEQsWUFBWSxFQUFFO3lDQUF1RDtBQUl0RDtJQUFmLFlBQVksRUFBRTswQ0FBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG4gIFRlbXBsYXRlUmVmLFxuICBPbkluaXQsXG4gIEhvc3RCaW5kaW5nLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElucHV0Qm9vbGVhbiB9IGZyb20gJy4uL3V0aWwvY29udmVydCc7XG5pbXBvcnQgeyBpc1RlbXBsYXRlUmVmIH0gZnJvbSAnLi4vdXRpbC9jaGVjayc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25nbC1waWxsJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3BpbGwuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5zbGRzLXBpbGxdJzogJ3RydWUnLFxuICB9LFxufSlcbmV4cG9ydCBjbGFzcyBOZ2xQaWxsIGltcGxlbWVudHMgT25Jbml0IHtcbiAgaXNUZW1wbGF0ZVJlZiA9IGlzVGVtcGxhdGVSZWY7XG4gIGNhblJlbW92ZTogYm9vbGVhbjtcblxuICAvKipcblx0ICogTmdsSWNvbiBjb21wb25lbnQgb3IgaWNvbk5hbWUgdG8gc2hvdyBvbiB0aGUgbGVmdCBvZiB0aGUgcGlsbC5cblx0ICovXG4gIEBJbnB1dCgpIGljb246IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICAvKipcblx0ICogTmdsQXZhdGFyIGNvbXBvbmVudCBvciBzcmMgdG8gc2hvdyBvbiB0aGUgbGVmdCBvZiB0aGUgcGlsbC5cblx0ICovXG4gIEBJbnB1dCgpIGF2YXRhcjogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XG4gIC8qKlxuXHQgKiBBcHBsaWVzIHRoZSBlcnJvciBzdHlsZSB0byB0aGUgY29tcG9uZW50LlxuXHQgKi9cbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIEBIb3N0QmluZGluZygnY2xhc3Muc2xkcy1oYXMtZXJyb3InKSBoYXNFcnJvciA9IGZhbHNlO1xuICAvKipcblx0ICogV2hldGhlciBvciBub3QgdG8gb3ZlcnJpZGUgdGhlIHJlbW92ZSBidXR0b24ncyB2aXNpYmlsaXR5LCBpZiBgcmVtb3ZlYCBpcyBzZXQuXG5cdCAqL1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgcmVtb3ZhYmxlID0gdHJ1ZTtcbiAgLyoqXG5cdCAqIFJlbW92ZSBidXR0b24gdGl0bGUgKGFuZCBhc3Npc3RpdmUgdGV4dCkuXG5cdCAqL1xuICBASW5wdXQoKSByZW1vdmVUaXRsZSA9ICdSZW1vdmUnO1xuICAvKipcblx0ICogVGhlIGV2ZW50IGVtaXR0ZWQgd2hlbiB0aGUgcmVtb3ZlIGJ1dHRvbiBpcyBjbGlja2VkLlxuXHQgKi9cbiAgQE91dHB1dCgpIHJlbW92ZSA9IG5ldyBFdmVudEVtaXR0ZXI8TW91c2VFdmVudD4oKTtcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnNsZHMtcGlsbF9saW5rJykgbGlua2VkID0gZmFsc2U7XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5jYW5SZW1vdmUgPSB0aGlzLnJlbW92ZS5vYnNlcnZlcnMubGVuZ3RoID4gMDtcbiAgfVxuXG4gIG9uUmVtb3ZlKGU6IE1vdXNlRXZlbnQpIHtcbiAgICB0aGlzLnJlbW92ZS5lbWl0KGUpO1xuICB9XG5cbiAgZ2V0IHBpbGxJY29uKCkge1xuICAgIHJldHVybiB0aGlzLmljb24gfHwgdGhpcy5hdmF0YXI7XG4gIH1cbn1cbiJdfQ==
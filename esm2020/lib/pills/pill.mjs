import { __decorate } from "tslib";
import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter, HostBinding, } from '@angular/core';
import { InputBoolean } from '../util/convert';
import { isTemplateRef } from '../util/check';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../icons/icon";
import * as i3 from "../icons/svg";
import * as i4 from "../avatar/avatar";
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
NglPill.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglPill, deps: [], target: i0.ɵɵFactoryTarget.Component });
NglPill.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: NglPill, selector: "ngl-pill", inputs: { icon: "icon", avatar: "avatar", hasError: "hasError", removable: "removable", removeTitle: "removeTitle" }, outputs: { remove: "remove" }, host: { properties: { "class.slds-pill": "true", "class.slds-has-error": "this.hasError", "class.slds-pill_link": "this.linked" } }, ngImport: i0, template: "<span class=\"slds-pill__icon_container\" *ngIf=\"pillIcon\">\n  <ng-container *ngIf=\"isTemplateRef(pillIcon); else defaultTpl\" [ngTemplateOutlet]=\"pillIcon\"></ng-container>\n  <ng-template #defaultTpl>\n    <ngl-icon *ngIf=\"icon; else avatarTpl\" [iconName]=\"icon\"></ngl-icon>\n    <ng-template #avatarTpl>\n      <ngl-avatar [src]=\"avatar\" variant=\"circle\"></ngl-avatar>\n    </ng-template>\n  </ng-template></span>\n<ng-container *ngIf=\"linked; else unlinked\">\n  <ng-content select=\"a\"></ng-content>\n</ng-container>\n<ng-template #unlinked><span class=\"slds-pill__label\">\n    <ng-content></ng-content></span></ng-template>\n<button class=\"slds-button slds-button_icon slds-pill__remove\" *ngIf=\"canRemove &amp;&amp; removable\" type=\"button\" [title]=\"removeTitle\" (click)=\"onRemove($event)\">\n  <svg class=\"slds-button__icon\" nglIconName=\"close\"></svg><span class=\"slds-assistive-text\" *ngIf=\"removeTitle\">{{removeTitle}}</span>\n</button>", dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "component", type: i2.NglIcon, selector: "ngl-icon, [ngl-icon]", inputs: ["iconName", "variant", "size", "alternativeText", "svgClass"] }, { kind: "component", type: i3.NglIconSvg, selector: "svg[nglIconName]", inputs: ["nglIconName", "xPos"] }, { kind: "component", type: i4.NglAvatar, selector: "ngl-avatar", inputs: ["src", "alternativeText", "size", "variant", "initials", "fallbackIconName"], outputs: ["error"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
__decorate([
    InputBoolean()
], NglPill.prototype, "hasError", void 0);
__decorate([
    InputBoolean()
], NglPill.prototype, "removable", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglPill, decorators: [{
            type: Component,
            args: [{ selector: 'ngl-pill', changeDetection: ChangeDetectionStrategy.OnPush, host: {
                        '[class.slds-pill]': 'true',
                    }, template: "<span class=\"slds-pill__icon_container\" *ngIf=\"pillIcon\">\n  <ng-container *ngIf=\"isTemplateRef(pillIcon); else defaultTpl\" [ngTemplateOutlet]=\"pillIcon\"></ng-container>\n  <ng-template #defaultTpl>\n    <ngl-icon *ngIf=\"icon; else avatarTpl\" [iconName]=\"icon\"></ngl-icon>\n    <ng-template #avatarTpl>\n      <ngl-avatar [src]=\"avatar\" variant=\"circle\"></ngl-avatar>\n    </ng-template>\n  </ng-template></span>\n<ng-container *ngIf=\"linked; else unlinked\">\n  <ng-content select=\"a\"></ng-content>\n</ng-container>\n<ng-template #unlinked><span class=\"slds-pill__label\">\n    <ng-content></ng-content></span></ng-template>\n<button class=\"slds-button slds-button_icon slds-pill__remove\" *ngIf=\"canRemove &amp;&amp; removable\" type=\"button\" [title]=\"removeTitle\" (click)=\"onRemove($event)\">\n  <svg class=\"slds-button__icon\" nglIconName=\"close\"></svg><span class=\"slds-assistive-text\" *ngIf=\"removeTitle\">{{removeTitle}}</span>\n</button>" }]
        }], propDecorators: { icon: [{
                type: Input
            }], avatar: [{
                type: Input
            }], hasError: [{
                type: Input
            }, {
                type: HostBinding,
                args: ['class.slds-has-error']
            }], removable: [{
                type: Input
            }], removeTitle: [{
                type: Input
            }], remove: [{
                type: Output
            }], linked: [{
                type: HostBinding,
                args: ['class.slds-pill_link']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGlsbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nLWxpZ2h0bmluZy9zcmMvbGliL3BpbGxzL3BpbGwudHMiLCIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1saWdodG5pbmcvc3JjL2xpYi9waWxscy9waWxsLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsdUJBQXVCLEVBQ3ZCLEtBQUssRUFDTCxNQUFNLEVBQ04sWUFBWSxFQUdaLFdBQVcsR0FDWixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7O0FBVTlDLE1BQU0sT0FBTyxPQUFPO0lBUnBCO1FBU0Usa0JBQWEsR0FBRyxhQUFhLENBQUM7UUFXOUI7O2FBRUU7UUFDNEQsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUMvRTs7YUFFRTtRQUN1QixjQUFTLEdBQUcsSUFBSSxDQUFDO1FBQzFDOzthQUVFO1FBQ08sZ0JBQVcsR0FBRyxRQUFRLENBQUM7UUFDaEM7O2FBRUU7UUFDUSxXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQWMsQ0FBQztRQUViLFdBQU0sR0FBRyxLQUFLLENBQUM7S0FhckQ7SUFYQyxRQUFRO1FBQ04sSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFFRCxRQUFRLENBQUMsQ0FBYTtRQUNwQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN0QixDQUFDO0lBRUQsSUFBSSxRQUFRO1FBQ1YsT0FBTyxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDbEMsQ0FBQzs7b0dBekNVLE9BQU87d0ZBQVAsT0FBTywwVUNyQnBCLG85QkFlUztBRHFCa0I7SUFBZixZQUFZLEVBQUU7eUNBQXVEO0FBSXREO0lBQWYsWUFBWSxFQUFFOzBDQUFrQjsyRkFuQi9CLE9BQU87a0JBUm5CLFNBQVM7K0JBQ0UsVUFBVSxtQkFFSCx1QkFBdUIsQ0FBQyxNQUFNLFFBQ3pDO3dCQUNKLG1CQUFtQixFQUFFLE1BQU07cUJBQzVCOzhCQVNRLElBQUk7c0JBQVosS0FBSztnQkFJRyxNQUFNO3NCQUFkLEtBQUs7Z0JBSXdELFFBQVE7c0JBQXJFLEtBQUs7O3NCQUFvQixXQUFXO3VCQUFDLHNCQUFzQjtnQkFJbkMsU0FBUztzQkFBakMsS0FBSztnQkFJRyxXQUFXO3NCQUFuQixLQUFLO2dCQUlJLE1BQU07c0JBQWYsTUFBTTtnQkFFOEIsTUFBTTtzQkFBMUMsV0FBVzt1QkFBQyxzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG4gIFRlbXBsYXRlUmVmLFxuICBPbkluaXQsXG4gIEhvc3RCaW5kaW5nLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElucHV0Qm9vbGVhbiB9IGZyb20gJy4uL3V0aWwvY29udmVydCc7XG5pbXBvcnQgeyBpc1RlbXBsYXRlUmVmIH0gZnJvbSAnLi4vdXRpbC9jaGVjayc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25nbC1waWxsJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3BpbGwuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5zbGRzLXBpbGxdJzogJ3RydWUnLFxuICB9LFxufSlcbmV4cG9ydCBjbGFzcyBOZ2xQaWxsIGltcGxlbWVudHMgT25Jbml0IHtcbiAgaXNUZW1wbGF0ZVJlZiA9IGlzVGVtcGxhdGVSZWY7XG4gIGNhblJlbW92ZTogYm9vbGVhbjtcblxuICAvKipcblx0ICogTmdsSWNvbiBjb21wb25lbnQgb3IgaWNvbk5hbWUgdG8gc2hvdyBvbiB0aGUgbGVmdCBvZiB0aGUgcGlsbC5cblx0ICovXG4gIEBJbnB1dCgpIGljb246IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICAvKipcblx0ICogTmdsQXZhdGFyIGNvbXBvbmVudCBvciBzcmMgdG8gc2hvdyBvbiB0aGUgbGVmdCBvZiB0aGUgcGlsbC5cblx0ICovXG4gIEBJbnB1dCgpIGF2YXRhcjogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XG4gIC8qKlxuXHQgKiBBcHBsaWVzIHRoZSBlcnJvciBzdHlsZSB0byB0aGUgY29tcG9uZW50LlxuXHQgKi9cbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIEBIb3N0QmluZGluZygnY2xhc3Muc2xkcy1oYXMtZXJyb3InKSBoYXNFcnJvciA9IGZhbHNlO1xuICAvKipcblx0ICogV2hldGhlciBvciBub3QgdG8gb3ZlcnJpZGUgdGhlIHJlbW92ZSBidXR0b24ncyB2aXNpYmlsaXR5LCBpZiBgcmVtb3ZlYCBpcyBzZXQuXG5cdCAqL1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgcmVtb3ZhYmxlID0gdHJ1ZTtcbiAgLyoqXG5cdCAqIFJlbW92ZSBidXR0b24gdGl0bGUgKGFuZCBhc3Npc3RpdmUgdGV4dCkuXG5cdCAqL1xuICBASW5wdXQoKSByZW1vdmVUaXRsZSA9ICdSZW1vdmUnO1xuICAvKipcblx0ICogVGhlIGV2ZW50IGVtaXR0ZWQgd2hlbiB0aGUgcmVtb3ZlIGJ1dHRvbiBpcyBjbGlja2VkLlxuXHQgKi9cbiAgQE91dHB1dCgpIHJlbW92ZSA9IG5ldyBFdmVudEVtaXR0ZXI8TW91c2VFdmVudD4oKTtcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnNsZHMtcGlsbF9saW5rJykgbGlua2VkID0gZmFsc2U7XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5jYW5SZW1vdmUgPSB0aGlzLnJlbW92ZS5vYnNlcnZlcnMubGVuZ3RoID4gMDtcbiAgfVxuXG4gIG9uUmVtb3ZlKGU6IE1vdXNlRXZlbnQpIHtcbiAgICB0aGlzLnJlbW92ZS5lbWl0KGUpO1xuICB9XG5cbiAgZ2V0IHBpbGxJY29uKCkge1xuICAgIHJldHVybiB0aGlzLmljb24gfHwgdGhpcy5hdmF0YXI7XG4gIH1cbn1cbiIsIjxzcGFuIGNsYXNzPVwic2xkcy1waWxsX19pY29uX2NvbnRhaW5lclwiICpuZ0lmPVwicGlsbEljb25cIj5cbiAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImlzVGVtcGxhdGVSZWYocGlsbEljb24pOyBlbHNlIGRlZmF1bHRUcGxcIiBbbmdUZW1wbGF0ZU91dGxldF09XCJwaWxsSWNvblwiPjwvbmctY29udGFpbmVyPlxuICA8bmctdGVtcGxhdGUgI2RlZmF1bHRUcGw+XG4gICAgPG5nbC1pY29uICpuZ0lmPVwiaWNvbjsgZWxzZSBhdmF0YXJUcGxcIiBbaWNvbk5hbWVdPVwiaWNvblwiPjwvbmdsLWljb24+XG4gICAgPG5nLXRlbXBsYXRlICNhdmF0YXJUcGw+XG4gICAgICA8bmdsLWF2YXRhciBbc3JjXT1cImF2YXRhclwiIHZhcmlhbnQ9XCJjaXJjbGVcIj48L25nbC1hdmF0YXI+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgPC9uZy10ZW1wbGF0ZT48L3NwYW4+XG48bmctY29udGFpbmVyICpuZ0lmPVwibGlua2VkOyBlbHNlIHVubGlua2VkXCI+XG4gIDxuZy1jb250ZW50IHNlbGVjdD1cImFcIj48L25nLWNvbnRlbnQ+XG48L25nLWNvbnRhaW5lcj5cbjxuZy10ZW1wbGF0ZSAjdW5saW5rZWQ+PHNwYW4gY2xhc3M9XCJzbGRzLXBpbGxfX2xhYmVsXCI+XG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50Pjwvc3Bhbj48L25nLXRlbXBsYXRlPlxuPGJ1dHRvbiBjbGFzcz1cInNsZHMtYnV0dG9uIHNsZHMtYnV0dG9uX2ljb24gc2xkcy1waWxsX19yZW1vdmVcIiAqbmdJZj1cImNhblJlbW92ZSAmYW1wOyZhbXA7IHJlbW92YWJsZVwiIHR5cGU9XCJidXR0b25cIiBbdGl0bGVdPVwicmVtb3ZlVGl0bGVcIiAoY2xpY2spPVwib25SZW1vdmUoJGV2ZW50KVwiPlxuICA8c3ZnIGNsYXNzPVwic2xkcy1idXR0b25fX2ljb25cIiBuZ2xJY29uTmFtZT1cImNsb3NlXCI+PC9zdmc+PHNwYW4gY2xhc3M9XCJzbGRzLWFzc2lzdGl2ZS10ZXh0XCIgKm5nSWY9XCJyZW1vdmVUaXRsZVwiPnt7cmVtb3ZlVGl0bGV9fTwvc3Bhbj5cbjwvYnV0dG9uPiJdfQ==
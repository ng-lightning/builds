import { __decorate } from "tslib";
import { Component, Input, ChangeDetectionStrategy, HostListener, Output, EventEmitter } from '@angular/core';
import { uniqueId, trapEvent, menuItemScroll } from '../util/util';
import { InputBoolean } from '../util/convert';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../icons/svg";
export class NglComboboxOption {
    constructor(element, cd, ngZone, renderer) {
        this.element = element;
        this.cd = cd;
        this.ngZone = ngZone;
        this.disabled = false;
        this.ariaActiveDescendant = new EventEmitter();
        this.selectedOption = new EventEmitter();
        this.activeOption = new EventEmitter();
        this.uid = uniqueId('combo-option');
        this._active = false;
        // Flag to disable scrolling into view when option is activated using mouse
        this.disableNextScrollIntoView = false;
        this.destroyed = false;
        renderer.addClass(element.nativeElement, 'slds-listbox__item');
        renderer.setAttribute(element.nativeElement, 'role', 'presentation');
    }
    // Whether or not the option is currently active and ready to be selected
    set active(active) {
        if (this.active === active || this.destroyed) {
            return;
        }
        this._active = active;
        this.cd.detectChanges();
        if (active) {
            this.ariaActiveDescendant.emit(this.uid);
            this.scrollIntoView();
        }
        else {
            clearTimeout(this.scrollTimer);
        }
    }
    get active() {
        return this._active;
    }
    onSelectViaInteraction(evt) {
        trapEvent(evt);
        if (!this.disabled) {
            this.selectedOption.emit(this);
        }
    }
    hover() {
        if (!this.disabled) {
            this.disableNextScrollIntoView = true;
            this.activeOption.emit(this);
        }
    }
    setActiveStyles() {
        this.active = true;
    }
    setInactiveStyles() {
        this.active = false;
    }
    scrollIntoView() {
        if (this.disableNextScrollIntoView) {
            this.disableNextScrollIntoView = false;
            return;
        }
        this.ngZone.runOutsideAngular(() => {
            this.scrollTimer = setTimeout(() => {
                const li = this.element.nativeElement;
                menuItemScroll(li.parentElement.parentElement, li);
            }, 0);
        });
    }
    ngOnDestroy() {
        this.destroyed = true;
        clearTimeout(this.scrollTimer);
    }
}
NglComboboxOption.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglComboboxOption, deps: [{ token: i0.ElementRef }, { token: i0.ChangeDetectorRef }, { token: i0.NgZone }, { token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Component });
NglComboboxOption.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: NglComboboxOption, selector: "ngl-combobox-option, [nglComboboxOption]", inputs: { value: "value", label: "label", selected: "selected", disabled: "disabled" }, outputs: { ariaActiveDescendant: "ariaActiveDescendant", selectedOption: "selectedOption", activeOption: "activeOption" }, host: { listeners: { "mousedown": "onSelectViaInteraction($event)", "mouseenter": "hover()" } }, ngImport: i0, template: "\n<div class=\"slds-media slds-listbox__option slds-listbox__option_plain slds-media_small slds-media_center\" role=\"option\" [attr.id]=\"uid\" [class.slds-has-focus]=\"active\" [class.slds-is-selected]=\"selected\" [attr.aria-selected]=\"selected || null\" [attr.aria-disabled]=\"disabled || null\"><span class=\"slds-media__figure slds-listbox__option-icon\"><span class=\"slds-icon_container slds-icon-utility-check slds-current-color\" *ngIf=\"selected\">\n      <svg class=\"slds-icon slds-icon_x-small\" nglIconName=\"utility:check\"></svg></span></span><span class=\"slds-media__body\"><span class=\"slds-truncate\"><span class=\"slds-assistive-text\" *ngIf=\"selected\">Current Selection:</span>{{ label }}</span></span></div>", dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i2.NglIconSvg, selector: "svg[nglIconName]", inputs: ["nglIconName", "xPos"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
__decorate([
    InputBoolean()
], NglComboboxOption.prototype, "selected", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglComboboxOption, decorators: [{
            type: Component,
            args: [{ selector: 'ngl-combobox-option, [nglComboboxOption]', changeDetection: ChangeDetectionStrategy.OnPush, template: "\n<div class=\"slds-media slds-listbox__option slds-listbox__option_plain slds-media_small slds-media_center\" role=\"option\" [attr.id]=\"uid\" [class.slds-has-focus]=\"active\" [class.slds-is-selected]=\"selected\" [attr.aria-selected]=\"selected || null\" [attr.aria-disabled]=\"disabled || null\"><span class=\"slds-media__figure slds-listbox__option-icon\"><span class=\"slds-icon_container slds-icon-utility-check slds-current-color\" *ngIf=\"selected\">\n      <svg class=\"slds-icon slds-icon_x-small\" nglIconName=\"utility:check\"></svg></span></span><span class=\"slds-media__body\"><span class=\"slds-truncate\"><span class=\"slds-assistive-text\" *ngIf=\"selected\">Current Selection:</span>{{ label }}</span></span></div>" }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.ChangeDetectorRef }, { type: i0.NgZone }, { type: i0.Renderer2 }]; }, propDecorators: { value: [{
                type: Input
            }], label: [{
                type: Input
            }], selected: [{
                type: Input
            }], disabled: [{
                type: Input
            }], ariaActiveDescendant: [{
                type: Output
            }], selectedOption: [{
                type: Output
            }], activeOption: [{
                type: Output
            }], onSelectViaInteraction: [{
                type: HostListener,
                args: ['mousedown', ['$event']]
            }], hover: [{
                type: HostListener,
                args: ['mouseenter']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tYm9ib3gtb3B0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctbGlnaHRuaW5nL3NyYy9saWIvY29tYm9ib3hlcy9jb21ib2JveC1vcHRpb24udHMiLCIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1saWdodG5pbmcvc3JjL2xpYi9jb21ib2JveGVzL2NvbWJvYm94LW9wdGlvbi5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUFFLEtBQUssRUFBRSx1QkFBdUIsRUFDbEIsWUFBWSxFQUE2QixNQUFNLEVBQUUsWUFBWSxFQUNyRixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxjQUFjLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDbkUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDOzs7O0FBTy9DLE1BQU0sT0FBTyxpQkFBaUI7SUE2QzVCLFlBQW9CLE9BQW1CLEVBQ25CLEVBQXFCLEVBQ3JCLE1BQWMsRUFDdEIsUUFBbUI7UUFIWCxZQUFPLEdBQVAsT0FBTyxDQUFZO1FBQ25CLE9BQUUsR0FBRixFQUFFLENBQW1CO1FBQ3JCLFdBQU0sR0FBTixNQUFNLENBQVE7UUF2Q3pCLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFFaEIseUJBQW9CLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUNsRCxtQkFBYyxHQUFHLElBQUksWUFBWSxFQUFxQixDQUFDO1FBQ3ZELGlCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQXFCLENBQUM7UUFFL0QsUUFBRyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQXNCdkIsWUFBTyxHQUFHLEtBQUssQ0FBQztRQUl4QiwyRUFBMkU7UUFDbkUsOEJBQXlCLEdBQUcsS0FBSyxDQUFDO1FBRWxDLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFNeEIsUUFBUSxDQUFDLFFB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LEtBQUs7c0JBREosWUFBWTt1QkFBQyxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LCBJbnB1dCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIE9uRGVzdHJveSxcbiAgRWxlbWVudFJlZiwgUmVuZGVyZXIyLCBIb3N0TGlzdGVuZXIsIENoYW5nZURldGVjdG9yUmVmLCBOZ1pvbmUsIE91dHB1dCwgRXZlbnRFbWl0dGVyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSGlnaGxpZ2h0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9hMTF5JztcbmltcG9ydCB7IHVuaXF1ZUlkLCB0cmFwRXZlbnQsIG1lbnVJdGVtU2Nyb2xsIH0gZnJvbSAnLi4vdXRpbC91dGlsJztcbmltcG9ydCB7IElucHV0Qm9vbGVhbiB9IGZyb20gJy4uL3V0aWwvY29udmVydCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25nbC1jb21ib2JveC1vcHRpb24sIFtuZ2xDb21ib2JveE9wdGlvbl0nLFxuICB0ZW1wbGF0ZVVybDogJy4vY29tYm9ib3gtb3B0aW9uLmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgTmdsQ29tYm9ib3hPcHRpb24gaW1wbGVtZW50cyBIaWdobGlnaHRhYmxlLCBPbkRlc3Ryb3kge1xuXG4gIEBJbnB1dCgpIHZhbHVlOiBhbnk7XG5cbiAgQElucHV0KCkgbGFiZWw6IHN0cmluZztcblxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgc2VsZWN0ZWQ6IGJvb2xlYW47XG5cbiAgQElucHV0KCkgZGlzYWJsZWQgPSBmYWxzZTtcblxuICBAT3V0cHV0KCkgYXJpYUFjdGl2ZURlc2NlbmRhbnQgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcbiAgQE91dHB1dCgpIHNlbGVjdGVkT3B0aW9uID0gbmV3IEV2ZW50RW1pdHRlcjxOZ2xDb21ib2JveE9wdGlvbj4oKTtcbiAgQE91dHB1dCgpIGFjdGl2ZU9wdGlvbiA9IG5ldyBFdmVudEVtaXR0ZXI8TmdsQ29tYm9ib3hPcHRpb24+KCk7XG5cbiAgdWlkID0gdW5pcXVlSWQoJ2NvbWJvLW9wdGlvbicpO1xuXG4gIC8vIFdoZXRoZXIgb3Igbm90IHRoZSBvcHRpb24gaXMgY3VycmVudGx5IGFjdGl2ZSBhbmQgcmVhZHkgdG8gYmUgc2VsZWN0ZWRcbiAgc2V0IGFjdGl2ZShhY3RpdmU6IGJvb2xlYW4pIHtcbiAgICBpZiAodGhpcy5hY3RpdmUgPT09IGFjdGl2ZSB8fCB0aGlzLmRlc3Ryb3llZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX2FjdGl2ZSA9IGFjdGl2ZTtcbiAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcblxuICAgIGlmIChhY3RpdmUpIHtcbiAgICAgIHRoaXMuYXJpYUFjdGl2ZURlc2NlbmRhbnQuZW1pdCh0aGlzLnVpZCk7XG4gICAgICB0aGlzLnNjcm9sbEludG9WaWV3KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLnNjcm9sbFRpbWVyKTtcbiAgICB9XG4gIH1cbiAgZ2V0IGFjdGl2ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fYWN0aXZlO1xuICB9XG5cbiAgcHJpdmF0ZSBfYWN0aXZlID0gZmFsc2U7XG5cbiAgcHJpdmF0ZSBzY3JvbGxUaW1lcjogYW55O1xuXG4gIC8vIEZsYWcgdG8gZGlzYWJsZSBzY3JvbGxpbmcgaW50byB2aWV3IHdoZW4gb3B0aW9uIGlzIGFjdGl2YXRlZCB1c2luZyBtb3VzZVxuICBwcml2YXRlIGRpc2FibGVOZXh0U2Nyb2xsSW50b1ZpZXcgPSBmYWxzZTtcblxuICBwcml2YXRlIGRlc3Ryb3llZCA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudDogRWxlbWVudFJlZixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgICAgICAgICAgIHByaXZhdGUgbmdab25lOiBOZ1pvbmUsXG4gICAgICAgICAgICAgIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHtcbiAgICByZW5kZXJlci5hZGRDbGFzcyhlbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICdzbGRzLWxpc3Rib3hfX2l0ZW0nKTtcbiAgICByZW5kZXJlci5zZXRBdHRyaWJ1dGUoZWxlbWVudC5uYXRpdmVFbGVtZW50LCAncm9sZScsICdwcmVzZW50YXRpb24nKTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ21vdXNlZG93bicsIFsnJGV2ZW50J10pXG4gIG9uU2VsZWN0VmlhSW50ZXJhY3Rpb24oZXZ0OiBNb3VzZUV2ZW50KSB7XG4gICAgdHJhcEV2ZW50KGV2dCk7XG4gICAgaWYgKCF0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLnNlbGVjdGVkT3B0aW9uLmVtaXQodGhpcyk7XG4gICAgfVxuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignbW91c2VlbnRlcicpXG4gIGhvdmVyKCkge1xuICAgIGlmICghdGhpcy5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5kaXNhYmxlTmV4dFNjcm9sbEludG9WaWV3ID0gdHJ1ZTtcbiAgICAgIHRoaXMuYWN0aXZlT3B0aW9uLmVtaXQodGhpcyk7XG4gICAgfVxuICB9XG5cbiAgc2V0QWN0aXZlU3R5bGVzKCk6IHZvaWQge1xuICAgIHRoaXMuYWN0aXZlID0gdHJ1ZTtcbiAgfVxuXG4gIHNldEluYWN0aXZlU3R5bGVzKCk6IHZvaWQge1xuICAgIHRoaXMuYWN0aXZlID0gZmFsc2U7XG4gIH1cblxuICBzY3JvbGxJbnRvVmlldygpIHtcbiAgICBpZiAodGhpcy5kaXNhYmxlTmV4dFNjcm9sbEludG9WaWV3KSB7XG4gICAgICB0aGlzLmRpc2FibGVOZXh0U2Nyb2xsSW50b1ZpZXcgPSBmYWxzZTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICB0aGlzLnNjcm9sbFRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGxpOiBIVE1MRWxlbWVudCA9IHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50O1xuICAgICAgICBtZW51SXRlbVNjcm9sbChsaS5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQsIGxpKTtcbiAgICAgIH0sIDApO1xuICAgIH0pO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5kZXN0cm95ZWQgPSB0cnVlO1xuICAgIGNsZWFyVGltZW91dCh0aGlzLnNjcm9sbFRpbWVyKTtcbiAgfVxufVxuIiwiXG48ZGl2IGNsYXNzPVwic2xkcy1tZWRpYSBzbGRzLWxpc3Rib3hfX29wdGlvbiBzbGRzLWxpc3Rib3hfX29wdGlvbl9wbGFpbiBzbGRzLW1lZGlhX3NtYWxsIHNsZHMtbWVkaWFfY2VudGVyXCIgcm9sZT1cIm9wdGlvblwiIFthdHRyLmlkXT1cInVpZFwiIFtjbGFzcy5zbGRzLWhhcy1mb2N1c109XCJhY3RpdmVcIiBbY2xhc3Muc2xkcy1pcy1zZWxlY3RlZF09XCJzZWxlY3RlZFwiIFthdHRyLmFyaWEtc2VsZWN0ZWRdPVwic2VsZWN0ZWQgfHwgbnVsbFwiIFthdHRyLmFyaWEtZGlzYWJsZWRdPVwiZGlzYWJsZWQgfHwgbnVsbFwiPjxzcGFuIGNsYXNzPVwic2xkcy1tZWRpYV9fZmlndXJlIHNsZHMtbGlzdGJveF9fb3B0aW9uLWljb25cIj48c3BhbiBjbGFzcz1cInNsZHMtaWNvbl9jb250YWluZXIgc2xkcy1pY29uLXV0aWxpdHktY2hlY2sgc2xkcy1jdXJyZW50LWNvbG9yXCIgKm5nSWY9XCJzZWxlY3RlZFwiPlxuICAgICAgPHN2ZyBjbGFzcz1cInNsZHMtaWNvbiBzbGRzLWljb25feC1zbWFsbFwiIG5nbEljb25OYW1lPVwidXRpbGl0eTpjaGVja1wiPjwvc3ZnPjwvc3Bhbj48L3NwYW4+PHNwYW4gY2xhc3M9XCJzbGRzLW1lZGlhX19ib2R5XCI+PHNwYW4gY2xhc3M9XCJzbGRzLXRydW5jYXRlXCI+PHNwYW4gY2xhc3M9XCJzbGRzLWFzc2lzdGl2ZS10ZXh0XCIgKm5nSWY9XCJzZWxlY3RlZFwiPkN1cnJlbnQgU2VsZWN0aW9uOjwvc3Bhbj57eyBsYWJlbCB9fTwvc3Bhbj48L3NwYW4+PC9kaXY+Il19
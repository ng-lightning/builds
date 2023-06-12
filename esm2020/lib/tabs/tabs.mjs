import { __decorate } from "tslib";
import { Component, Input, ContentChildren, Output, EventEmitter } from '@angular/core';
import { isInt } from '../util/util';
import { NglTab } from './tab';
import { InputBoolean } from '../util/convert';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../util/outlet";
export class NglTabs {
    constructor(element, renderer) {
        this.element = element;
        this.renderer = renderer;
        this.selectedChange = new EventEmitter();
        /**
         * Whether every tab's content is instantiated when visible, and destroyed when hidden.
         */
        this.lazy = true;
        this.renderer.addClass(this.element.nativeElement, `slds-tabs_${this.variant}`);
    }
    set variant(variant) {
        const el = this.element.nativeElement;
        this.renderer.removeClass(el, `slds-tabs_${this.variant}`);
        this._variant = variant;
        this.renderer.addClass(el, `slds-tabs_${this.variant}`);
    }
    get variant() {
        return this._variant || 'default';
    }
    set setSelected(selected) {
        if (selected === this.selected) {
            return;
        }
        this.selected = selected;
        if (!this.tabs) {
            return;
        } // Wait for content to initialize
        this.activate();
    }
    ngAfterContentInit() {
        // Initial selection after all tabs are created
        this.activate();
        if (!this.activeTab) {
            setTimeout(() => this.select(this.tabs.first));
        }
    }
    select(tab) {
        this.selectedChange.emit(tab);
    }
    move(evt, moves) {
        evt.preventDefault();
        const tabs = this.tabs.toArray();
        const selectedIndex = tabs.indexOf(this.activeTab);
        this.select(tabs[(tabs.length + selectedIndex + moves) % tabs.length]);
    }
    tabClass(tab) {
        return `slds-tabs_${this.variant}__content slds-${tab.active ? 'show' : 'hide'}`;
    }
    trackByTab(index, tab) {
        return tab.uid;
    }
    activate() {
        if (this.activeTab) {
            this.activeTab.active = false;
        }
        this.activeTab = this.findTab();
        if (this.activeTab) {
            this.activeTab.active = true;
        }
    }
    findTab(value = this.selected) {
        if (value instanceof NglTab) {
            return value;
        }
        if (isInt(value)) {
            return this.tabs.toArray()[+value];
        }
        return this.tabs.toArray().find((t) => {
            return t.id && t.id === value;
        });
    }
}
NglTabs.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglTabs, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Component });
NglTabs.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: NglTabs, selector: "ngl-tabset", inputs: { variant: "variant", setSelected: ["selected", "setSelected"], lazy: "lazy" }, outputs: { selectedChange: "selectedChange" }, queries: [{ propertyName: "tabs", predicate: NglTab }], ngImport: i0, template: "\n<ul [ngClass]=\"'slds-tabs_' + variant + '__nav'\" role=\"tablist\" (keydown.ArrowLeft)=\"move($event, -1)\" (keydown.ArrowRight)=\"move($event, 1)\">\n  <li *ngFor=\"let tab of tabs; trackBy: trackByTab\" [ngClass]=\"'slds-tabs_' + variant + '__item'\" [class.slds-is-active]=\"tab.active\" [id]=\"tab.uid + '__item'\" [attr.aria-controls]=\"tab.uid\" (click)=\"select(tab)\" role=\"presentation\"><a [nglInternalOutlet]=\"tab.label\" [ngClass]=\"'slds-tabs_' + variant + '__link'\" role=\"tab\" [attr.aria-selected]=\"tab.active\" [attr.tabindex]=\"tab.active ? 0 : -1\"></a></li>\n</ul>\n<div *ngFor=\"let tab of tabs; trackBy: trackByTab\" [id]=\"tab.uid\" [attr.aria-labelledby]=\"tab.uid + '__item'\" [ngClass]=\"tabClass(tab)\" role=\"tabpanel\">\n  <ng-container *ngIf=\"!lazy || tab.active\">\n    <ng-template [ngTemplateOutlet]=\"tab?.templateRef\"></ng-template>\n  </ng-container>\n</div>", dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "component", type: i2.NglInternalOutlet, selector: "[nglInternalOutlet]", inputs: ["nglInternalOutlet", "nglInternalOutletContext"] }] });
__decorate([
    InputBoolean()
], NglTabs.prototype, "lazy", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglTabs, decorators: [{
            type: Component,
            args: [{ selector: 'ngl-tabset', template: "\n<ul [ngClass]=\"'slds-tabs_' + variant + '__nav'\" role=\"tablist\" (keydown.ArrowLeft)=\"move($event, -1)\" (keydown.ArrowRight)=\"move($event, 1)\">\n  <li *ngFor=\"let tab of tabs; trackBy: trackByTab\" [ngClass]=\"'slds-tabs_' + variant + '__item'\" [class.slds-is-active]=\"tab.active\" [id]=\"tab.uid + '__item'\" [attr.aria-controls]=\"tab.uid\" (click)=\"select(tab)\" role=\"presentation\"><a [nglInternalOutlet]=\"tab.label\" [ngClass]=\"'slds-tabs_' + variant + '__link'\" role=\"tab\" [attr.aria-selected]=\"tab.active\" [attr.tabindex]=\"tab.active ? 0 : -1\"></a></li>\n</ul>\n<div *ngFor=\"let tab of tabs; trackBy: trackByTab\" [id]=\"tab.uid\" [attr.aria-labelledby]=\"tab.uid + '__item'\" [ngClass]=\"tabClass(tab)\" role=\"tabpanel\">\n  <ng-container *ngIf=\"!lazy || tab.active\">\n    <ng-template [ngTemplateOutlet]=\"tab?.templateRef\"></ng-template>\n  </ng-container>\n</div>" }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }]; }, propDecorators: { variant: [{
                type: Input
            }], tabs: [{
                type: ContentChildren,
                args: [NglTab]
            }], setSelected: [{
                type: Input,
                args: ['selected']
            }], selectedChange: [{
                type: Output
            }], lazy: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFicy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nLWxpZ2h0bmluZy9zcmMvbGliL3RhYnMvdGFicy50cyIsIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nLWxpZ2h0bmluZy9zcmMvbGliL3RhYnMvdGFicy5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBYSxlQUFlLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBMkMsTUFBTSxlQUFlLENBQUM7QUFDNUksT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUNyQyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sT0FBTyxDQUFDO0FBQy9CLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7OztBQU0vQyxNQUFNLE9BQU8sT0FBTztJQW1DbEIsWUFBb0IsT0FBbUIsRUFBVSxRQUFtQjtRQUFoRCxZQUFPLEdBQVAsT0FBTyxDQUFZO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQVQxRCxtQkFBYyxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7UUFFdEQ7O1dBRUc7UUFDc0IsU0FBSSxHQUFHLElBQUksQ0FBQztRQUtuQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxhQUFhLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO0lBQ2xGLENBQUM7SUFuQ0QsSUFBYSxPQUFPLENBQUMsT0FBNkI7UUFDaEQsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUM7UUFDdEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsRUFBRSxFQUFFLGFBQWEsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7UUFDM0QsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUM7UUFD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LDhNQVlELE1BQU0sNkJDckJ6Qix5NEJBUU07QURnQ3FCO0lBQWYsWUFBWSxFQUFFO3FDQUFhOzJGQS9CMUIsT0FBTztrQkFKbkIsU0FBUzsrQkFDRSxZQUFZO3lIQUtULE9BQU87c0JBQW5CLEtBQUs7Z0JBVW1CLElBQUk7c0JBQTVCLGVBQWU7dUJBQUMsTUFBTTtnQkFJQSxXQUFXO3NCQUFqQyxLQUFLO3VCQUFDLFVBQVU7Z0JBVVAsY0FBYztzQkFBdkIsTUFBTTtnQkFLa0IsSUFBSTtzQkFBNUIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIFF1ZXJ5TGlzdCwgQ29udGVudENoaWxkcmVuLCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgRWxlbWVudFJlZiwgUmVuZGVyZXIyLCBBZnRlckNvbnRlbnRJbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBpc0ludCB9IGZyb20gJy4uL3V0aWwvdXRpbCc7XG5pbXBvcnQgeyBOZ2xUYWIgfSBmcm9tICcuL3RhYic7XG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4gfSBmcm9tICcuLi91dGlsL2NvbnZlcnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZ2wtdGFic2V0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RhYnMuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIE5nbFRhYnMgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0IHtcblxuICBASW5wdXQoKSBzZXQgdmFyaWFudCh2YXJpYW50OiAnZGVmYXVsdCcgfCAnc2NvcGVkJykge1xuICAgIGNvbnN0IGVsID0gdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQ7XG4gICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyhlbCwgYHNsZHMtdGFic18ke3RoaXMudmFyaWFudH1gKTtcbiAgICB0aGlzLl92YXJpYW50ID0gdmFyaWFudDtcbiAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKGVsLCBgc2xkcy10YWJzXyR7dGhpcy52YXJpYW50fWApO1xuICB9XG4gIGdldCB2YXJpYW50KCkge1xuICAgIHJldHVybiB0aGlzLl92YXJpYW50IHx8ICdkZWZhdWx0JztcbiAgfVxuXG4gIEBDb250ZW50Q2hpbGRyZW4oTmdsVGFiKSB0YWJzOiBRdWVyeUxpc3Q8TmdsVGFiPjtcblxuICBhY3RpdmVUYWI6IE5nbFRhYjtcbiAgc2VsZWN0ZWQ6IHN0cmluZyB8IG51bWJlciB8IE5nbFRhYjtcbiAgQElucHV0KCdzZWxlY3RlZCcpIHNldCBzZXRTZWxlY3RlZChzZWxlY3RlZDogc3RyaW5nIHwgbnVtYmVyIHwgTmdsVGFiKSB7XG4gICAgaWYgKHNlbGVjdGVkID09PSB0aGlzLnNlbGVjdGVkKSB7IHJldHVybjsgfVxuXG4gICAgdGhpcy5zZWxlY3RlZCA9IHNlbGVjdGVkO1xuXG4gICAgaWYgKCF0aGlzLnRhYnMpIHsgcmV0dXJuOyB9IC8vIFdhaXQgZm9yIGNvbnRlbnQgdG8gaW5pdGlhbGl6ZVxuXG4gICAgdGhpcy5hY3RpdmF0ZSgpO1xuICB9XG5cbiAgQE91dHB1dCgpIHNlbGVjdGVkQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxOZ2xUYWI+KCk7XG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgZXZlcnkgdGFiJ3MgY29udGVudCBpcyBpbnN0YW50aWF0ZWQgd2hlbiB2aXNpYmxlLCBhbmQgZGVzdHJveWVkIHdoZW4gaGlkZGVuLlxuICAgKi9cbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGxhenkgPSB0cnVlO1xuXG4gIHByaXZhdGUgX3ZhcmlhbnQ6ICdkZWZhdWx0JyB8ICdzY29wZWQnO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudDogRWxlbWVudFJlZiwgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyKSB7XG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCwgYHNsZHMtdGFic18ke3RoaXMudmFyaWFudH1gKTtcbiAgfVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICAvLyBJbml0aWFsIHNlbGVjdGlvbiBhZnRlciBhbGwgdGFicyBhcmUgY3JlYXRlZFxuICAgIHRoaXMuYWN0aXZhdGUoKTtcbiAgICBpZiAoIXRoaXMuYWN0aXZlVGFiKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuc2VsZWN0KHRoaXMudGFicy5maXJzdCkpO1xuICAgIH1cbiAgfVxuXG4gIHNlbGVjdCh0YWI6IE5nbFRhYikge1xuICAgIHRoaXMuc2VsZWN0ZWRDaGFuZ2UuZW1pdCh0YWIpO1xuICB9XG5cbiAgbW92ZShldnQ6IEV2ZW50LCBtb3ZlczogbnVtYmVyKSB7XG4gICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCB0YWJzID0gdGhpcy50YWJzLnRvQXJyYXkoKTtcbiAgICBjb25zdCBzZWxlY3RlZEluZGV4ID0gdGFicy5pbmRleE9mKCB0aGlzLmFjdGl2ZVRhYiApO1xuICAgIHRoaXMuc2VsZWN0KCB0YWJzWyh0YWJzLmxlbmd0aCArIHNlbGVjdGVkSW5kZXggKyBtb3ZlcykgJSB0YWJzLmxlbmd0aF0gKTtcbiAgfVxuXG4gIHRhYkNsYXNzKHRhYjogTmdsVGFiKSB7XG4gICAgcmV0dXJuIGBzbGRzLXRhYnNfJHt0aGlzLnZhcmlhbnR9X19jb250ZW50IHNsZHMtJHt0YWIuYWN0aXZlID8gJ3Nob3cnIDogJ2hpZGUnfWA7XG4gIH1cblxuICB0cmFja0J5VGFiKGluZGV4LCB0YWI6IE5nbFRhYikge1xuICAgIHJldHVybiB0YWIudWlkO1xuICB9XG5cbiAgcHJpdmF0ZSBhY3RpdmF0ZSgpIHtcbiAgICBpZiAodGhpcy5hY3RpdmVUYWIpIHtcbiAgICAgIHRoaXMuYWN0aXZlVGFiLmFjdGl2ZSA9IGZhbHNlO1xuICAgIH1cbiAgICB0aGlzLmFjdGl2ZVRhYiA9IHRoaXMuZmluZFRhYigpO1xuICAgIGlmICh0aGlzLmFjdGl2ZVRhYikge1xuICAgICAgdGhpcy5hY3RpdmVUYWIuYWN0aXZlID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGZpbmRUYWIodmFsdWU6IGFueSA9IHRoaXMuc2VsZWN0ZWQpOiBOZ2xUYWIge1xuICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIE5nbFRhYikge1xuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgICBpZiAoaXNJbnQodmFsdWUpKSB7XG4gICAgICByZXR1cm4gdGhpcy50YWJzLnRvQXJyYXkoKVsrdmFsdWVdO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy50YWJzLnRvQXJyYXkoKS5maW5kKCh0OiBOZ2xUYWIpID0+IHtcbiAgICAgIHJldHVybiB0LmlkICYmIHQuaWQgPT09IHZhbHVlO1xuICAgIH0pO1xuICB9XG59XG4iLCJcbjx1bCBbbmdDbGFzc109XCInc2xkcy10YWJzXycgKyB2YXJpYW50ICsgJ19fbmF2J1wiIHJvbGU9XCJ0YWJsaXN0XCIgKGtleWRvd24uQXJyb3dMZWZ0KT1cIm1vdmUoJGV2ZW50LCAtMSlcIiAoa2V5ZG93bi5BcnJvd1JpZ2h0KT1cIm1vdmUoJGV2ZW50LCAxKVwiPlxuICA8bGkgKm5nRm9yPVwibGV0IHRhYiBvZiB0YWJzOyB0cmFja0J5OiB0cmFja0J5VGFiXCIgW25nQ2xhc3NdPVwiJ3NsZHMtdGFic18nICsgdmFyaWFudCArICdfX2l0ZW0nXCIgW2NsYXNzLnNsZHMtaXMtYWN0aXZlXT1cInRhYi5hY3RpdmVcIiBbaWRdPVwidGFiLnVpZCArICdfX2l0ZW0nXCIgW2F0dHIuYXJpYS1jb250cm9sc109XCJ0YWIudWlkXCIgKGNsaWNrKT1cInNlbGVjdCh0YWIpXCIgcm9sZT1cInByZXNlbnRhdGlvblwiPjxhIFtuZ2xJbnRlcm5hbE91dGxldF09XCJ0YWIubGFiZWxcIiBbbmdDbGFzc109XCInc2xkcy10YWJzXycgKyB2YXJpYW50ICsgJ19fbGluaydcIiByb2xlPVwidGFiXCIgW2F0dHIuYXJpYS1zZWxlY3RlZF09XCJ0YWIuYWN0aXZlXCIgW2F0dHIudGFiaW5kZXhdPVwidGFiLmFjdGl2ZSA/IDAgOiAtMVwiPjwvYT48L2xpPlxuPC91bD5cbjxkaXYgKm5nRm9yPVwibGV0IHRhYiBvZiB0YWJzOyB0cmFja0J5OiB0cmFja0J5VGFiXCIgW2lkXT1cInRhYi51aWRcIiBbYXR0ci5hcmlhLWxhYmVsbGVkYnldPVwidGFiLnVpZCArICdfX2l0ZW0nXCIgW25nQ2xhc3NdPVwidGFiQ2xhc3ModGFiKVwiIHJvbGU9XCJ0YWJwYW5lbFwiPlxuICA8bmctY29udGFpbmVyICpuZ0lmPVwiIWxhenkgfHwgdGFiLmFjdGl2ZVwiPlxuICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJ0YWI/LnRlbXBsYXRlUmVmXCI+PC9uZy10ZW1wbGF0ZT5cbiAgPC9uZy1jb250YWluZXI+XG48L2Rpdj4iXX0=
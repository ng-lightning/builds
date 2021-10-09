import { __decorate } from "tslib";
import { Component, Input, ContentChildren, Output, EventEmitter, ElementRef, Renderer2 } from '@angular/core';
import { isInt } from '../util/util';
import { NglTab } from './tab';
import { InputBoolean } from '../util/convert';
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
NglTabs.decorators = [
    { type: Component, args: [{
                selector: 'ngl-tabset',
                template: "\n<ul [ngClass]=\"'slds-tabs_' + variant + '__nav'\" role=\"tablist\" (keydown.ArrowLeft)=\"move($event, -1)\" (keydown.ArrowRight)=\"move($event, 1)\">\n  <li *ngFor=\"let tab of tabs; trackBy: trackByTab\" [ngClass]=\"'slds-tabs_' + variant + '__item'\" [class.slds-is-active]=\"tab.active\" [id]=\"tab.uid + '__item'\" [attr.aria-controls]=\"tab.uid\" (click)=\"select(tab)\" role=\"presentation\"><a [nglInternalOutlet]=\"tab.label\" [ngClass]=\"'slds-tabs_' + variant + '__link'\" role=\"tab\" [attr.aria-selected]=\"tab.active\" [attr.tabindex]=\"tab.active ? 0 : -1\"></a></li>\n</ul>\n<div *ngFor=\"let tab of tabs; trackBy: trackByTab\" [id]=\"tab.uid\" [attr.aria-labelledby]=\"tab.uid + '__item'\" [ngClass]=\"tabClass(tab)\" role=\"tabpanel\">\n  <ng-container *ngIf=\"!lazy || tab.active\">\n    <ng-template [ngTemplateOutlet]=\"tab?.templateRef\"></ng-template>\n  </ng-container>\n</div>"
            },] }
];
NglTabs.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
NglTabs.propDecorators = {
    variant: [{ type: Input }],
    tabs: [{ type: ContentChildren, args: [NglTab,] }],
    setSelected: [{ type: Input, args: ['selected',] }],
    selectedChange: [{ type: Output }],
    lazy: [{ type: Input }]
};
__decorate([
    InputBoolean()
], NglTabs.prototype, "lazy", void 0);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFicy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nLWxpZ2h0bmluZy9zcmMvbGliL3RhYnMvdGFicy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQWEsZUFBZSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBb0IsTUFBTSxlQUFlLENBQUM7QUFDNUksT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUNyQyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sT0FBTyxDQUFDO0FBQy9CLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQU0vQyxNQUFNLE9BQU8sT0FBTztJQW1DbEIsWUFBb0IsT0FBbUIsRUFBVSxRQUFtQjtRQUFoRCxZQUFPLEdBQVAsT0FBTyxDQUFZO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQVQxRCxtQkFBYyxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7UUFFdEQ7O1dBRUc7UUFDc0IsU0FBSSxHQUFHLElBQUksQ0FBQztRQUtuQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxhQUFhLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO0lBQ2xGLENBQUM7SUFuQ0QsSUFBYSxPQUFPLENBQUMsT0FBNkI7UUFDaEQsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUM7UUFDdEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsRUFBRSxFQUFFLGFBQWEsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7UUFDM0QsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUM7UUFDeEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsRUFBRSxFQUFFLGFB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VUFBVTtZQUFFLFNBQVM7OztzQkFXL0YsS0FBSzttQkFVTCxlQUFlLFNBQUMsTUFBTTswQkFJdEIsS0FBSyxTQUFDLFVBQVU7NkJBVWhCLE1BQU07bUJBS04sS0FBSzs7QUFBbUI7SUFBZixZQUFZLEVBQUU7cUNBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBRdWVyeUxpc3QsIENvbnRlbnRDaGlsZHJlbiwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIEVsZW1lbnRSZWYsIFJlbmRlcmVyMiwgQWZ0ZXJDb250ZW50SW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgaXNJbnQgfSBmcm9tICcuLi91dGlsL3V0aWwnO1xuaW1wb3J0IHsgTmdsVGFiIH0gZnJvbSAnLi90YWInO1xuaW1wb3J0IHsgSW5wdXRCb29sZWFuIH0gZnJvbSAnLi4vdXRpbC9jb252ZXJ0JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmdsLXRhYnNldCcsXG4gIHRlbXBsYXRlVXJsOiAnLi90YWJzLmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBOZ2xUYWJzIGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCB7XG5cbiAgQElucHV0KCkgc2V0IHZhcmlhbnQodmFyaWFudDogJ2RlZmF1bHQnIHwgJ3Njb3BlZCcpIHtcbiAgICBjb25zdCBlbCA9IHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50O1xuICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3MoZWwsIGBzbGRzLXRhYnNfJHt0aGlzLnZhcmlhbnR9YCk7XG4gICAgdGhpcy5fdmFyaWFudCA9IHZhcmlhbnQ7XG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyhlbCwgYHNsZHMtdGFic18ke3RoaXMudmFyaWFudH1gKTtcbiAgfVxuICBnZXQgdmFyaWFudCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdmFyaWFudCB8fCAnZGVmYXVsdCc7XG4gIH1cblxuICBAQ29udGVudENoaWxkcmVuKE5nbFRhYikgdGFiczogUXVlcnlMaXN0PE5nbFRhYj47XG5cbiAgYWN0aXZlVGFiOiBOZ2xUYWI7XG4gIHNlbGVjdGVkOiBzdHJpbmcgfCBudW1iZXIgfCBOZ2xUYWI7XG4gIEBJbnB1dCgnc2VsZWN0ZWQnKSBzZXQgc2V0U2VsZWN0ZWQoc2VsZWN0ZWQ6IHN0cmluZyB8IG51bWJlciB8IE5nbFRhYikge1xuICAgIGlmIChzZWxlY3RlZCA9PT0gdGhpcy5zZWxlY3RlZCkgeyByZXR1cm47IH1cblxuICAgIHRoaXMuc2VsZWN0ZWQgPSBzZWxlY3RlZDtcblxuICAgIGlmICghdGhpcy50YWJzKSB7IHJldHVybjsgfSAvLyBXYWl0IGZvciBjb250ZW50IHRvIGluaXRpYWxpemVcblxuICAgIHRoaXMuYWN0aXZhdGUoKTtcbiAgfVxuXG4gIEBPdXRwdXQoKSBzZWxlY3RlZENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8TmdsVGFiPigpO1xuXG4gIC8qKlxuICAgKiBXaGV0aGVyIGV2ZXJ5IHRhYidzIGNvbnRlbnQgaXMgaW5zdGFudGlhdGVkIHdoZW4gdmlzaWJsZSwgYW5kIGRlc3Ryb3llZCB3aGVuIGhpZGRlbi5cbiAgICovXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBsYXp5ID0gdHJ1ZTtcblxuICBwcml2YXRlIF92YXJpYW50OiAnZGVmYXVsdCcgfCAnc2NvcGVkJztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnQ6IEVsZW1lbnRSZWYsIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMikge1xuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsIGBzbGRzLXRhYnNfJHt0aGlzLnZhcmlhbnR9YCk7XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgLy8gSW5pdGlhbCBzZWxlY3Rpb24gYWZ0ZXIgYWxsIHRhYnMgYXJlIGNyZWF0ZWRcbiAgICB0aGlzLmFjdGl2YXRlKCk7XG4gICAgaWYgKCF0aGlzLmFjdGl2ZVRhYikge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLnNlbGVjdCh0aGlzLnRhYnMuZmlyc3QpKTtcbiAgICB9XG4gIH1cblxuICBzZWxlY3QodGFiOiBOZ2xUYWIpIHtcbiAgICB0aGlzLnNlbGVjdGVkQ2hhbmdlLmVtaXQodGFiKTtcbiAgfVxuXG4gIG1vdmUoZXZ0OiBFdmVudCwgbW92ZXM6IG51bWJlcikge1xuICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgdGFicyA9IHRoaXMudGFicy50b0FycmF5KCk7XG4gICAgY29uc3Qgc2VsZWN0ZWRJbmRleCA9IHRhYnMuaW5kZXhPZiggdGhpcy5hY3RpdmVUYWIgKTtcbiAgICB0aGlzLnNlbGVjdCggdGFic1sodGFicy5sZW5ndGggKyBzZWxlY3RlZEluZGV4ICsgbW92ZXMpICUgdGFicy5sZW5ndGhdICk7XG4gIH1cblxuICB0YWJDbGFzcyh0YWI6IE5nbFRhYikge1xuICAgIHJldHVybiBgc2xkcy10YWJzXyR7dGhpcy52YXJpYW50fV9fY29udGVudCBzbGRzLSR7dGFiLmFjdGl2ZSA/ICdzaG93JyA6ICdoaWRlJ31gO1xuICB9XG5cbiAgdHJhY2tCeVRhYihpbmRleCwgdGFiOiBOZ2xUYWIpIHtcbiAgICByZXR1cm4gdGFiLnVpZDtcbiAgfVxuXG4gIHByaXZhdGUgYWN0aXZhdGUoKSB7XG4gICAgaWYgKHRoaXMuYWN0aXZlVGFiKSB7XG4gICAgICB0aGlzLmFjdGl2ZVRhYi5hY3RpdmUgPSBmYWxzZTtcbiAgICB9XG4gICAgdGhpcy5hY3RpdmVUYWIgPSB0aGlzLmZpbmRUYWIoKTtcbiAgICBpZiAodGhpcy5hY3RpdmVUYWIpIHtcbiAgICAgIHRoaXMuYWN0aXZlVGFiLmFjdGl2ZSA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBmaW5kVGFiKHZhbHVlOiBhbnkgPSB0aGlzLnNlbGVjdGVkKTogTmdsVGFiIHtcbiAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBOZ2xUYWIpIHtcbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gICAgaWYgKGlzSW50KHZhbHVlKSkge1xuICAgICAgcmV0dXJuIHRoaXMudGFicy50b0FycmF5KClbK3ZhbHVlXTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMudGFicy50b0FycmF5KCkuZmluZCgodDogTmdsVGFiKSA9PiB7XG4gICAgICByZXR1cm4gdC5pZCAmJiB0LmlkID09PSB2YWx1ZTtcbiAgICB9KTtcbiAgfVxufVxuIl19
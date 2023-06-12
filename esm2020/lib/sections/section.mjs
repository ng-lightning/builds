import { Component, Input, Output, EventEmitter, HostBinding, ChangeDetectionStrategy } from '@angular/core';
import { uniqueId } from '../util/util';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../icons/svg";
export class NglExpandableSection {
    constructor() {
        this.collapsable = true;
        this.open = false;
        this.openChange = new EventEmitter();
        this._uid = uniqueId('expandable-section');
    }
    get expanded() {
        return this.collapsable ? this.open : true;
    }
    get uid() {
        return this.collapsable ? this._uid : undefined;
    }
    toggle(event) {
        event.preventDefault();
        this.openChange.emit(!this.open);
    }
}
NglExpandableSection.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglExpandableSection, deps: [], target: i0.ɵɵFactoryTarget.Component });
NglExpandableSection.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: NglExpandableSection, selector: "ngl-expandable-section", inputs: { title: "title", collapsable: "collapsable", open: "open" }, outputs: { openChange: "openChange" }, host: { properties: { "class.slds-section": "true", "class.slds-is-open": "this.expanded" } }, ngImport: i0, template: "\n<h3 class=\"slds-section__title\" [class.slds-theme_shade]=\"!collapsable\">\n  <button class=\"slds-button slds-section__title-action\" *ngIf=\"collapsable; else simple_title\" [attr.aria-controls]=\"uid\" [attr.aria-expanded]=\"expanded\" type=\"button\" (click)=\"toggle($event)\">\n    <svg class=\"slds-section__title-action-icon slds-button__icon slds-button__icon_left\" nglIconName=\"switch\"></svg><span class=\"slds-truncate\" [title]=\"title\">{{title}}</span>\n  </button>\n  <ng-template #simple_title><span class=\"slds-truncate slds-p-horizontal_small\" [title]=\"title\">{{title}}</span>\n  </ng-template>\n</h3>\n<div class=\"slds-section__content\" [attr.aria-hidden]=\"!expanded\" [attr.id]=\"uid\">\n  <ng-content></ng-content>\n</div>", dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i2.NglIconSvg, selector: "svg[nglIconName]", inputs: ["nglIconName", "xPos"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglExpandableSection, decorators: [{
            type: Component,
            args: [{ selector: 'ngl-expandable-section', changeDetection: ChangeDetectionStrategy.OnPush, host: {
                        '[class.slds-section]': 'true',
                    }, template: "\n<h3 class=\"slds-section__title\" [class.slds-theme_shade]=\"!collapsable\">\n  <button class=\"slds-button slds-section__title-action\" *ngIf=\"collapsable; else simple_title\" [attr.aria-controls]=\"uid\" [attr.aria-expanded]=\"expanded\" type=\"button\" (click)=\"toggle($event)\">\n    <svg class=\"slds-section__title-action-icon slds-button__icon slds-button__icon_left\" nglIconName=\"switch\"></svg><span class=\"slds-truncate\" [title]=\"title\">{{title}}</span>\n  </button>\n  <ng-template #simple_title><span class=\"slds-truncate slds-p-horizontal_small\" [title]=\"title\">{{title}}</span>\n  </ng-template>\n</h3>\n<div class=\"slds-section__content\" [attr.aria-hidden]=\"!expanded\" [attr.id]=\"uid\">\n  <ng-content></ng-content>\n</div>" }]
        }], propDecorators: { title: [{
                type: Input
            }], collapsable: [{
                type: Input
            }], open: [{
                type: Input
            }], openChange: [{
                type: Output
            }], expanded: [{
                type: HostBinding,
                args: ['class.slds-is-open']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nLWxpZ2h0bmluZy9zcmMvbGliL3NlY3Rpb25zL3NlY3Rpb24udHMiLCIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1saWdodG5pbmcvc3JjL2xpYi9zZWN0aW9ucy9zZWN0aW9uLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxXQUFXLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0csT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGNBQWMsQ0FBQzs7OztBQVV4QyxNQUFNLE9BQU8sb0JBQW9CO0lBUmpDO1FBV1csZ0JBQVcsR0FBRyxJQUFJLENBQUM7UUFDbkIsU0FBSSxHQUFHLEtBQUssQ0FBQztRQUVaLGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBVyxDQUFDO1FBRTNDLFNBQUksR0FBRyxRQUFRLENBQUMsb0JBQW9CLENBQUMsQ0FBQztLQWUvQztJQWJDLElBQ0ksUUFBUTtRQUNWLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQzdDLENBQUM7SUFFRCxJQUFJLEdBQUc7UUFDTCxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUNsRCxDQUFDO0lBRUQsTUFBTSxDQUFDLEtBQVk7UUFDakIsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ25DLENBQUM7O2lIQXRCVSxvQkFBb0I7cUdBQXBCLG9CQUFvQiwwUUNYakMsdXZCQVVNOzJGRENPLG9CQUFvQjtrQkFSaEMsU0FBUzsrQkFDRSx3QkFBd0IsbUJBQ2pCLHVCQUF1QixDQUFDLE1BQU0sUUFFekM7d0JBQ0osc0JBQXNCLEVBQUUsTUFBTTtxQkFDL0I7OEJBSVEsS0FBSztzQkFBYixLQUFLO2dCQUNHLFdBQVc7c0JBQW5CLEtBQUs7Z0JBQ0csSUFBSTtzQkFBWixLQUFLO2dCQUVJLFVBQVU7c0JBQW5CLE1BQU07Z0JBS0gsUUFBUTtzQkFEWCxXQUFXO3VCQUFDLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBIb3N0QmluZGluZywgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHVuaXF1ZUlkIH0gZnJvbSAnLi4vdXRpbC91dGlsJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmdsLWV4cGFuZGFibGUtc2VjdGlvbicsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICB0ZW1wbGF0ZVVybDogJy4vc2VjdGlvbi5odG1sJyxcbiAgaG9zdDoge1xuICAgICdbY2xhc3Muc2xkcy1zZWN0aW9uXSc6ICd0cnVlJyxcbiAgfSxcbn0pXG5leHBvcnQgY2xhc3MgTmdsRXhwYW5kYWJsZVNlY3Rpb24ge1xuXG4gIEBJbnB1dCgpIHRpdGxlOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGNvbGxhcHNhYmxlID0gdHJ1ZTtcbiAgQElucHV0KCkgb3BlbiA9IGZhbHNlO1xuXG4gIEBPdXRwdXQoKSBvcGVuQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuXG4gIHByaXZhdGUgX3VpZCA9IHVuaXF1ZUlkKCdleHBhbmRhYmxlLXNlY3Rpb24nKTtcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnNsZHMtaXMtb3BlbicpXG4gIGdldCBleHBhbmRlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5jb2xsYXBzYWJsZSA/IHRoaXMub3BlbiA6IHRydWU7XG4gIH1cblxuICBnZXQgdWlkKCkge1xuICAgIHJldHVybiB0aGlzLmNvbGxhcHNhYmxlID8gdGhpcy5fdWlkIDogdW5kZWZpbmVkO1xuICB9XG5cbiAgdG9nZ2xlKGV2ZW50OiBFdmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5vcGVuQ2hhbmdlLmVtaXQoIXRoaXMub3Blbik7XG4gIH1cbn1cbiIsIlxuPGgzIGNsYXNzPVwic2xkcy1zZWN0aW9uX190aXRsZVwiIFtjbGFzcy5zbGRzLXRoZW1lX3NoYWRlXT1cIiFjb2xsYXBzYWJsZVwiPlxuICA8YnV0dG9uIGNsYXNzPVwic2xkcy1idXR0b24gc2xkcy1zZWN0aW9uX190aXRsZS1hY3Rpb25cIiAqbmdJZj1cImNvbGxhcHNhYmxlOyBlbHNlIHNpbXBsZV90aXRsZVwiIFthdHRyLmFyaWEtY29udHJvbHNdPVwidWlkXCIgW2F0dHIuYXJpYS1leHBhbmRlZF09XCJleHBhbmRlZFwiIHR5cGU9XCJidXR0b25cIiAoY2xpY2spPVwidG9nZ2xlKCRldmVudClcIj5cbiAgICA8c3ZnIGNsYXNzPVwic2xkcy1zZWN0aW9uX190aXRsZS1hY3Rpb24taWNvbiBzbGRzLWJ1dHRvbl9faWNvbiBzbGRzLWJ1dHRvbl9faWNvbl9sZWZ0XCIgbmdsSWNvbk5hbWU9XCJzd2l0Y2hcIj48L3N2Zz48c3BhbiBjbGFzcz1cInNsZHMtdHJ1bmNhdGVcIiBbdGl0bGVdPVwidGl0bGVcIj57e3RpdGxlfX08L3NwYW4+XG4gIDwvYnV0dG9uPlxuICA8bmctdGVtcGxhdGUgI3NpbXBsZV90aXRsZT48c3BhbiBjbGFzcz1cInNsZHMtdHJ1bmNhdGUgc2xkcy1wLWhvcml6b250YWxfc21hbGxcIiBbdGl0bGVdPVwidGl0bGVcIj57e3RpdGxlfX08L3NwYW4+XG4gIDwvbmctdGVtcGxhdGU+XG48L2gzPlxuPGRpdiBjbGFzcz1cInNsZHMtc2VjdGlvbl9fY29udGVudFwiIFthdHRyLmFyaWEtaGlkZGVuXT1cIiFleHBhbmRlZFwiIFthdHRyLmlkXT1cInVpZFwiPlxuICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG48L2Rpdj4iXX0=
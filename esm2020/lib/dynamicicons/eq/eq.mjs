import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { BaseDynamicIconComponent } from '../base-dynamic-icon';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class NglDynamicIconEq extends BaseDynamicIconComponent {
    set option(option) {
        this._option = option || 'play';
    }
    get option() {
        return this._option;
    }
    isAnimated() {
        return this.option !== 'stop';
    }
}
NglDynamicIconEq.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglDynamicIconEq, deps: null, target: i0.ɵɵFactoryTarget.Component });
NglDynamicIconEq.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: NglDynamicIconEq, selector: "ngl-dynamic-icon-eq", inputs: { option: "option" }, usesInheritance: true, ngImport: i0, template: "\n<div class=\"slds-icon-eq\" [class.slds-is-animated]=\"isAnimated()\">\n  <div class=\"slds-icon-eq__bar\"></div>\n  <div class=\"slds-icon-eq__bar\"></div>\n  <div class=\"slds-icon-eq__bar\"></div><span class=\"slds-assistive-text\" *ngIf=\"alternativeText\">{{alternativeText}}</span>\n</div>", dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglDynamicIconEq, decorators: [{
            type: Component,
            args: [{ selector: 'ngl-dynamic-icon-eq', changeDetection: ChangeDetectionStrategy.OnPush, template: "\n<div class=\"slds-icon-eq\" [class.slds-is-animated]=\"isAnimated()\">\n  <div class=\"slds-icon-eq__bar\"></div>\n  <div class=\"slds-icon-eq__bar\"></div>\n  <div class=\"slds-icon-eq__bar\"></div><span class=\"slds-assistive-text\" *ngIf=\"alternativeText\">{{alternativeText}}</span>\n</div>" }]
        }], propDecorators: { option: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1saWdodG5pbmcvc3JjL2xpYi9keW5hbWljaWNvbnMvZXEvZXEudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1saWdodG5pbmcvc3JjL2xpYi9keW5hbWljaWNvbnMvZXEvZXEuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLHVCQUF1QixFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxRSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7O0FBU2hFLE1BQU0sT0FBTyxnQkFBaUIsU0FBUSx3QkFBd0I7SUFFNUQsSUFBYSxNQUFNLENBQUMsTUFBOEI7UUFDaEQsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLElBQUksTUFBTSxDQUFDO0lBQ2xDLENBQUM7SUFDRCxJQUFJLE1BQU07UUFDUixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDdEIsQ0FBQztJQUlELFVBQVU7UUFDUixPQUFPLElBQUksQ0FBQyxNQUFNLEtBQUssTUFBTSxDQUFDO0lBQ2hDLENBQUM7OzZHQWJVLGdCQUFnQjtpR0FBaEIsZ0JBQWdCLGdIQ1Y3QiwyU0FLTTsyRkRLTyxnQkFBZ0I7a0JBTDVCLFNBQVM7K0JBQ0UscUJBQXFCLG1CQUVkLHVCQUF1QixDQUFDLE1BQU07OEJBSWxDLE1BQU07c0JBQWxCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmFzZUR5bmFtaWNJY29uQ29tcG9uZW50IH0gZnJvbSAnLi4vYmFzZS1keW5hbWljLWljb24nO1xuXG5leHBvcnQgdHlwZSBOZ2xEeW5hbWljSWNvbkVxT3B0aW9uID0gJ3BsYXknIHwgJ3N0b3AnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZ2wtZHluYW1pYy1pY29uLWVxJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2VxLmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgTmdsRHluYW1pY0ljb25FcSBleHRlbmRzIEJhc2VEeW5hbWljSWNvbkNvbXBvbmVudCB7XG5cbiAgQElucHV0KCkgc2V0IG9wdGlvbihvcHRpb246IE5nbER5bmFtaWNJY29uRXFPcHRpb24pIHtcbiAgICB0aGlzLl9vcHRpb24gPSBvcHRpb24gfHwgJ3BsYXknO1xuICB9XG4gIGdldCBvcHRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX29wdGlvbjtcbiAgfVxuXG4gIHByaXZhdGUgX29wdGlvbjogTmdsRHluYW1pY0ljb25FcU9wdGlvbjtcblxuICBpc0FuaW1hdGVkKCkge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbiAhPT0gJ3N0b3AnO1xuICB9XG5cbn1cbiIsIlxuPGRpdiBjbGFzcz1cInNsZHMtaWNvbi1lcVwiIFtjbGFzcy5zbGRzLWlzLWFuaW1hdGVkXT1cImlzQW5pbWF0ZWQoKVwiPlxuICA8ZGl2IGNsYXNzPVwic2xkcy1pY29uLWVxX19iYXJcIj48L2Rpdj5cbiAgPGRpdiBjbGFzcz1cInNsZHMtaWNvbi1lcV9fYmFyXCI+PC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJzbGRzLWljb24tZXFfX2JhclwiPjwvZGl2PjxzcGFuIGNsYXNzPVwic2xkcy1hc3Npc3RpdmUtdGV4dFwiICpuZ0lmPVwiYWx0ZXJuYXRpdmVUZXh0XCI+e3thbHRlcm5hdGl2ZVRleHR9fTwvc3Bhbj5cbjwvZGl2PiJdfQ==
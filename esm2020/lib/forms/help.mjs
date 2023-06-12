import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../icons/svg";
import * as i2 from "../tooltips/trigger";
export class NglFormHelp {
    constructor() {
        this.isOpen = false;
    }
}
NglFormHelp.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglFormHelp, deps: [], target: i0.ɵɵFactoryTarget.Component });
NglFormHelp.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: NglFormHelp, selector: "ngl-form-help", inputs: { content: "content" }, host: { properties: { "class.slds-form-element__icon": "true" } }, ngImport: i0, template: "\n<button class=\"slds-button slds-button_icon\" [nglTooltip]=\"content\" [(nglTooltipOpen)]=\"isOpen\">\n  <svg class=\"slds-button__icon\" nglIconName=\"utility:info\"></svg><span class=\"slds-assistive-text\">Help</span>\n</button>", dependencies: [{ kind: "component", type: i1.NglIconSvg, selector: "svg[nglIconName]", inputs: ["nglIconName", "xPos"] }, { kind: "directive", type: i2.NglTooltipTrigger, selector: "[nglTooltip]", inputs: ["nglTooltip", "nglTooltipPlacement", "nglTooltipDelay", "nglTooltipOpen", "nglTooltipOpenAuto", "nglTooltipInteractive", "nglTooltipClass"], outputs: ["nglTooltipOpenChange"], exportAs: ["nglTooltip"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglFormHelp, decorators: [{
            type: Component,
            args: [{ selector: 'ngl-form-help', changeDetection: ChangeDetectionStrategy.OnPush, host: {
                        '[class.slds-form-element__icon]': 'true',
                    }, template: "\n<button class=\"slds-button slds-button_icon\" [nglTooltip]=\"content\" [(nglTooltipOpen)]=\"isOpen\">\n  <svg class=\"slds-button__icon\" nglIconName=\"utility:info\"></svg><span class=\"slds-assistive-text\">Help</span>\n</button>" }]
        }], propDecorators: { content: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nLWxpZ2h0bmluZy9zcmMvbGliL2Zvcm1zL2hlbHAudHMiLCIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1saWdodG5pbmcvc3JjL2xpYi9mb3Jtcy9oZWxwLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsdUJBQXVCLEVBQWUsTUFBTSxlQUFlLENBQUM7Ozs7QUFVdkYsTUFBTSxPQUFPLFdBQVc7SUFSeEI7UUFVRSxXQUFNLEdBQUcsS0FBSyxDQUFDO0tBSWhCOzt3R0FOWSxXQUFXOzRGQUFYLFdBQVcsd0pDVnhCLDRPQUdTOzJGRE9JLFdBQVc7a0JBUnZCLFNBQVM7K0JBQ0UsZUFBZSxtQkFFUix1QkFBdUIsQ0FBQyxNQUFNLFFBQ3pDO3dCQUNKLGlDQUFpQyxFQUFFLE1BQU07cUJBQzFDOzhCQU1RLE9BQU87c0JBQWYsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZ2wtZm9ybS1oZWxwJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2hlbHAuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5zbGRzLWZvcm0tZWxlbWVudF9faWNvbl0nOiAndHJ1ZScsXG4gIH0sXG59KVxuZXhwb3J0IGNsYXNzIE5nbEZvcm1IZWxwIHtcblxuICBpc09wZW4gPSBmYWxzZTtcblxuICBASW5wdXQoKSBjb250ZW50OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjxhbnk+O1xuXG59XG4iLCJcbjxidXR0b24gY2xhc3M9XCJzbGRzLWJ1dHRvbiBzbGRzLWJ1dHRvbl9pY29uXCIgW25nbFRvb2x0aXBdPVwiY29udGVudFwiIFsobmdsVG9vbHRpcE9wZW4pXT1cImlzT3BlblwiPlxuICA8c3ZnIGNsYXNzPVwic2xkcy1idXR0b25fX2ljb25cIiBuZ2xJY29uTmFtZT1cInV0aWxpdHk6aW5mb1wiPjwvc3ZnPjxzcGFuIGNsYXNzPVwic2xkcy1hc3Npc3RpdmUtdGV4dFwiPkhlbHA8L3NwYW4+XG48L2J1dHRvbj4iXX0=
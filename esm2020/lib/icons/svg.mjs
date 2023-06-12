import { Component, Input, ChangeDetectionStrategy, Inject, Optional } from '@angular/core';
import { normalizeIconName } from './util';
import { NglIconConfig, NGL_ICON_CONFIG } from './config';
import * as i0 from "@angular/core";
import * as i1 from "./config";
export class NglIconSvg {
    constructor(defaultConfig, el, renderer) {
        this.xPos = '0';
        renderer.setAttribute(el.nativeElement, 'aria-hidden', 'true');
        const config = { ...new NglIconConfig(), ...defaultConfig };
        this.path = config.svgPath;
    }
    set iconName(iconName) {
        const [category, icon] = normalizeIconName(iconName).split(':');
        this.iconPath = `${this.path}/${category}-sprite/svg/symbols.svg#${icon}`;
    }
}
NglIconSvg.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglIconSvg, deps: [{ token: NGL_ICON_CONFIG, optional: true }, { token: i0.ElementRef }, { token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Component });
NglIconSvg.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: NglIconSvg, selector: "svg[nglIconName]", inputs: { iconName: ["nglIconName", "iconName"], xPos: "xPos" }, ngImport: i0, template: "\n<svg:use [attr.xlink:href]=\"iconPath\" [attr.x]=\"xPos\"></svg:use>", changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglIconSvg, decorators: [{
            type: Component,
            args: [{ selector: 'svg[nglIconName]', changeDetection: ChangeDetectionStrategy.OnPush, template: "\n<svg:use [attr.xlink:href]=\"iconPath\" [attr.x]=\"xPos\"></svg:use>" }]
        }], ctorParameters: function () { return [{ type: i1.NglIconConfig, decorators: [{
                    type: Optional
                }, {
                    type: Inject,
                    args: [NGL_ICON_CONFIG]
                }] }, { type: i0.ElementRef }, { type: i0.Renderer2 }]; }, propDecorators: { iconName: [{
                type: Input,
                args: ['nglIconName']
            }], xPos: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3ZnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctbGlnaHRuaW5nL3NyYy9saWIvaWNvbnMvc3ZnLnRzIiwiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctbGlnaHRuaW5nL3NyYy9saWIvaWNvbnMvc3ZnLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsdUJBQXVCLEVBQXlCLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkgsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sUUFBUSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxhQUFhLEVBQUUsZUFBZSxFQUFFLE1BQU0sVUFBVSxDQUFDOzs7QUFRMUQsTUFBTSxPQUFPLFVBQVU7SUFhckIsWUFBaUQsYUFBNEIsRUFDakUsRUFBYyxFQUNkLFFBQW1CO1FBTnRCLFNBQUksR0FBRyxHQUFHLENBQUM7UUFPbEIsUUFBUSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLGFBQWEsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUUvRCxNQUFNLE1BQU0sR0FBRyxFQUFFLEdBQUcsSUFBSSxhQUFhLEVBQUUsRUFBRSxHQUFHLGFBQWEsRUFBRSxDQUFDO1FBQzVELElBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQztJQUM3QixDQUFDO0lBaEJELElBQTBCLFFBQVEsQ0FBQyxRQUFnQjtRQUNqRCxNQUFNLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxHQUFHLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNoRSxJQUFJLENBQUMsUUFBUSxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksSUFBSSxRQUFRLDJCQUEyQixJQUFJLEVBQUUsQ0FBQztJQUM1RSxDQUFDOzt1R0FQVSxVQUFVLGtCQWFXLGVBQWU7MkZBYnBDLFVBQVUseUhDVnZCLHdFQUNnRTsyRkRTbkQsVUFBVTtrQkFOdEIsU0FBUzsrQkFFRSxrQkFBa0IsbUJBRVgsdUJBQXVCLENBQUMsTUFBTTs7MEJBZWxDLFFBQVE7OzBCQUFJLE1BQU07MkJBQUMsZUFBZTs2RkFUckIsUUFBUTtzQkFBakMsS0FBSzt1QkFBQyxhQUFhO2dCQUtYLElBQUk7c0JBQVosS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBFbGVtZW50UmVmLCBSZW5kZXJlcjIsIEluamVjdCwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IG5vcm1hbGl6ZUljb25OYW1lIH0gZnJvbSAnLi91dGlsJztcbmltcG9ydCB7IE5nbEljb25Db25maWcsIE5HTF9JQ09OX0NPTkZJRyB9IGZyb20gJy4vY29uZmlnJztcblxuQENvbXBvbmVudCh7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAYW5ndWxhci1lc2xpbnQvY29tcG9uZW50LXNlbGVjdG9yXG4gIHNlbGVjdG9yOiAnc3ZnW25nbEljb25OYW1lXScsXG4gIHRlbXBsYXRlVXJsOiAnLi9zdmcuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBOZ2xJY29uU3ZnIHtcblxuICBwYXRoOiBzdHJpbmc7XG5cbiAgQElucHV0KCduZ2xJY29uTmFtZScpIHNldCBpY29uTmFtZShpY29uTmFtZTogc3RyaW5nKSB7XG4gICAgY29uc3QgW2NhdGVnb3J5LCBpY29uXSA9IG5vcm1hbGl6ZUljb25OYW1lKGljb25OYW1lKS5zcGxpdCgnOicpO1xuICAgIHRoaXMuaWNvblBhdGggPSBgJHt0aGlzLnBhdGh9LyR7Y2F0ZWdvcnl9LXNwcml0ZS9zdmcvc3ltYm9scy5zdmcjJHtpY29ufWA7XG4gIH1cblxuICBASW5wdXQoKSB4UG9zID0gJzAnO1xuXG4gIGljb25QYXRoOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgQEluamVjdChOR0xfSUNPTl9DT05GSUcpIGRlZmF1bHRDb25maWc6IE5nbEljb25Db25maWcsXG4gICAgICAgICAgICAgIGVsOiBFbGVtZW50UmVmLFxuICAgICAgICAgICAgICByZW5kZXJlcjogUmVuZGVyZXIyKSB7XG4gICAgcmVuZGVyZXIuc2V0QXR0cmlidXRlKGVsLm5hdGl2ZUVsZW1lbnQsICdhcmlhLWhpZGRlbicsICd0cnVlJyk7XG5cbiAgICBjb25zdCBjb25maWcgPSB7IC4uLm5ldyBOZ2xJY29uQ29uZmlnKCksIC4uLmRlZmF1bHRDb25maWcgfTtcbiAgICB0aGlzLnBhdGggPSBjb25maWcuc3ZnUGF0aDtcbiAgfVxufVxuIiwiXG48c3ZnOnVzZSBbYXR0ci54bGluazpocmVmXT1cImljb25QYXRoXCIgW2F0dHIueF09XCJ4UG9zXCI+PC9zdmc6dXNlPiJdfQ==
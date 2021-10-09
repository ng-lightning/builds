import { Component, Input, ChangeDetectionStrategy, ElementRef, Renderer2, Inject, Optional } from '@angular/core';
import { normalizeIconName } from './util';
import { NglIconConfig, NGL_ICON_CONFIG } from './config';
export class NglIconSvg {
    constructor(defaultConfig, el, renderer) {
        this.xPos = '0';
        renderer.setAttribute(el.nativeElement, 'aria-hidden', 'true');
        const config = Object.assign(Object.assign({}, new NglIconConfig()), defaultConfig);
        this.path = config.svgPath;
    }
    set iconName(iconName) {
        const [category, icon] = normalizeIconName(iconName).split(':');
        this.iconPath = `${this.path}/${category}-sprite/svg/symbols.svg#${icon}`;
    }
}
NglIconSvg.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'svg[nglIconName]',
                template: "\n<svg:use [attr.xlink:href]=\"iconPath\" [attr.x]=\"xPos\"></svg:use>",
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
NglIconSvg.ctorParameters = () => [
    { type: NglIconConfig, decorators: [{ type: Optional }, { type: Inject, args: [NGL_ICON_CONFIG,] }] },
    { type: ElementRef },
    { type: Renderer2 }
];
NglIconSvg.propDecorators = {
    iconName: [{ type: Input, args: ['nglIconName',] }],
    xPos: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3ZnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctbGlnaHRuaW5nL3NyYy9saWIvaWNvbnMvc3ZnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLHVCQUF1QixFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuSCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFDM0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxlQUFlLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFRMUQsTUFBTSxPQUFPLFVBQVU7SUFhckIsWUFBaUQsYUFBNEIsRUFDakUsRUFBYyxFQUNkLFFBQW1CO1FBTnRCLFNBQUksR0FBRyxHQUFHLENBQUM7UUFPbEIsUUFBUSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLGFBQWEsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUUvRCxNQUFNLE1BQU0sbUNBQVEsSUFBSSxhQUFhLEVBQUUsR0FBSyxhQUFhLENBQUUsQ0FBQztRQUM1RCxJQUFJLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUM7SUFDN0IsQ0FBQztJQWhCRCxJQUEwQixRQUFRLENBQUMsUUFBZ0I7UUFDakQsTUFBTSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsR0FBRyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDaEUsSUFBSSxDQUFDLFFBQVEsR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLElBQUksUUFBUSwyQkFBMkIsSUFBSSxFQUFFLENBQUM7SUFDNUUsQ0FBQzs7O1lBYkYsU0FBUyxTQUFDO2dCQUNULDhDQUE4QztnQkFDOUMsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIsa0ZBQXlCO2dCQUN6QixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDs7O1lBUFEsYUFBYSx1QkFxQlAsUUFBUSxZQUFJLE1BQU0sU0FBQyxlQUFlO1lBdkJHLFVBQVU7WUFBRSxTQUFTOzs7dUJBY3RFLEtBQUssU0FBQyxhQUFhO21CQUtuQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIEVsZW1lbnRSZWYsIFJlbmRlcmVyMiwgSW5qZWN0LCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgbm9ybWFsaXplSWNvbk5hbWUgfSBmcm9tICcuL3V0aWwnO1xuaW1wb3J0IHsgTmdsSWNvbkNvbmZpZywgTkdMX0lDT05fQ09ORklHIH0gZnJvbSAnLi9jb25maWcnO1xuXG5AQ29tcG9uZW50KHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxuICBzZWxlY3RvcjogJ3N2Z1tuZ2xJY29uTmFtZV0nLFxuICB0ZW1wbGF0ZVVybDogJy4vc3ZnLmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgTmdsSWNvblN2ZyB7XG5cbiAgcGF0aDogc3RyaW5nO1xuXG4gIEBJbnB1dCgnbmdsSWNvbk5hbWUnKSBzZXQgaWNvbk5hbWUoaWNvbk5hbWU6IHN0cmluZykge1xuICAgIGNvbnN0IFtjYXRlZ29yeSwgaWNvbl0gPSBub3JtYWxpemVJY29uTmFtZShpY29uTmFtZSkuc3BsaXQoJzonKTtcbiAgICB0aGlzLmljb25QYXRoID0gYCR7dGhpcy5wYXRofS8ke2NhdGVnb3J5fS1zcHJpdGUvc3ZnL3N5bWJvbHMuc3ZnIyR7aWNvbn1gO1xuICB9XG5cbiAgQElucHV0KCkgeFBvcyA9ICcwJztcblxuICBpY29uUGF0aDogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIEBJbmplY3QoTkdMX0lDT05fQ09ORklHKSBkZWZhdWx0Q29uZmlnOiBOZ2xJY29uQ29uZmlnLFxuICAgICAgICAgICAgICBlbDogRWxlbWVudFJlZixcbiAgICAgICAgICAgICAgcmVuZGVyZXI6IFJlbmRlcmVyMikge1xuICAgIHJlbmRlcmVyLnNldEF0dHJpYnV0ZShlbC5uYXRpdmVFbGVtZW50LCAnYXJpYS1oaWRkZW4nLCAndHJ1ZScpO1xuXG4gICAgY29uc3QgY29uZmlnID0geyAuLi5uZXcgTmdsSWNvbkNvbmZpZygpLCAuLi5kZWZhdWx0Q29uZmlnIH07XG4gICAgdGhpcy5wYXRoID0gY29uZmlnLnN2Z1BhdGg7XG4gIH1cbn1cbiJdfQ==
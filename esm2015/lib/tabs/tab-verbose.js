import { Directive, TemplateRef, ContentChild } from '@angular/core';
import { NglTab } from './tab';
/*
 * <ngl-tab [label="..."]>
 *    <ng-template ngl-tab-label>...</ng-template>
 *    <ng-template ngl-tab-content>
 *       Content goes here...
 *    </ng-template>
 * </ngl-tab>
 */
// tslint:disable-next-line:directive-selector
export class NglTabLabel {
    constructor(templateRef) {
        this.templateRef = templateRef;
    }
}
NglTabLabel.decorators = [
    { type: Directive, args: [{ selector: '[ngl-tab-label]' },] }
];
NglTabLabel.ctorParameters = () => [
    { type: TemplateRef }
];
// tslint:disable-next-line:directive-selector
export class NglTabContent {
    constructor(templateRef) {
        this.templateRef = templateRef;
    }
}
NglTabContent.decorators = [
    { type: Directive, args: [{ selector: '[ngl-tab-content]' },] }
];
NglTabContent.ctorParameters = () => [
    { type: TemplateRef }
];
export class NglTabVerbose extends NglTab {
    ngAfterContentInit() {
        if (this.labelTemplate) {
            this.label = this.labelTemplate.templateRef;
        }
        this.templateRef = this.contentTemplate.templateRef;
    }
}
NglTabVerbose.decorators = [
    { type: Directive, args: [{
                // tslint:disable-next-line:directive-selector
                selector: 'ngl-tab',
                providers: [{ provide: NglTab, useExisting: NglTabVerbose }],
            },] }
];
NglTabVerbose.propDecorators = {
    contentTemplate: [{ type: ContentChild, args: [NglTabContent,] }],
    labelTemplate: [{ type: ContentChild, args: [NglTabLabel,] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLXZlcmJvc2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1saWdodG5pbmcvc3JjL2xpYi90YWJzL3RhYi12ZXJib3NlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBb0IsTUFBTSxlQUFlLENBQUM7QUFDdkYsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLE9BQU8sQ0FBQztBQUUvQjs7Ozs7OztHQU9HO0FBQ0gsOENBQThDO0FBRTlDLE1BQU0sT0FBTyxXQUFXO0lBQ3RCLFlBQW1CLFdBQTZCO1FBQTdCLGdCQUFXLEdBQVgsV0FBVyxDQUFrQjtJQUFHLENBQUM7OztZQUZyRCxTQUFTLFNBQUMsRUFBQyxRQUFRLEVBQUUsaUJBQWlCLEVBQUM7OztZQVpwQixXQUFXOztBQWlCL0IsOENBQThDO0FBRTlDLE1BQU0sT0FBTyxhQUFhO0lBQ3hCLFlBQW1CLFdBQTZCO1FBQTdCLGdCQUFXLEdBQVgsV0FBVyxDQUFrQjtJQUFHLENBQUM7OztZQUZyRCxTQUFTLFNBQUMsRUFBQyxRQUFRLEVBQUUsbUJBQW1CLEVBQUM7OztZQWxCdEIsV0FBVzs7QUE0Qi9CLE1BQU0sT0FBTyxhQUFjLFNBQVEsTUFBTTtJQUt2QyxrQkFBa0I7UUFDaEIsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ3RCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUM7U0FDN0M7UUFDRCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsV0FBVyxDQUFDO0lBQ3RELENBQUM7OztZQWZGLFNBQVMsU0FBQztnQkFDVCw4Q0FBOEM7Z0JBQzlDLFFBQVEsRUFBRSxTQUFTO2dCQUNuQixTQUFTLEVBQUUsQ0FBRSxFQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLGFBQWEsRUFBQyxDQUFFO2FBQzdEOzs7OEJBR0UsWUFBWSxTQUFDLGFBQWE7NEJBQzFCLFlBQVksU0FBQyxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBUZW1wbGF0ZVJlZiwgQ29udGVudENoaWxkLCBBZnRlckNvbnRlbnRJbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ2xUYWIgfSBmcm9tICcuL3RhYic7XG5cbi8qXG4gKiA8bmdsLXRhYiBbbGFiZWw9XCIuLi5cIl0+XG4gKiAgICA8bmctdGVtcGxhdGUgbmdsLXRhYi1sYWJlbD4uLi48L25nLXRlbXBsYXRlPlxuICogICAgPG5nLXRlbXBsYXRlIG5nbC10YWItY29udGVudD5cbiAqICAgICAgIENvbnRlbnQgZ29lcyBoZXJlLi4uXG4gKiAgICA8L25nLXRlbXBsYXRlPlxuICogPC9uZ2wtdGFiPlxuICovXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6ZGlyZWN0aXZlLXNlbGVjdG9yXG5ARGlyZWN0aXZlKHtzZWxlY3RvcjogJ1tuZ2wtdGFiLWxhYmVsXSd9KVxuZXhwb3J0IGNsYXNzIE5nbFRhYkxhYmVsIHtcbiAgY29uc3RydWN0b3IocHVibGljIHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxhbnk+KSB7fVxufVxuXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6ZGlyZWN0aXZlLXNlbGVjdG9yXG5ARGlyZWN0aXZlKHtzZWxlY3RvcjogJ1tuZ2wtdGFiLWNvbnRlbnRdJ30pXG5leHBvcnQgY2xhc3MgTmdsVGFiQ29udGVudCB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55Pikge31cbn1cblxuQERpcmVjdGl2ZSh7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpkaXJlY3RpdmUtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICduZ2wtdGFiJyxcbiAgcHJvdmlkZXJzOiBbIHtwcm92aWRlOiBOZ2xUYWIsIHVzZUV4aXN0aW5nOiBOZ2xUYWJWZXJib3NlfSBdLFxufSlcbmV4cG9ydCBjbGFzcyBOZ2xUYWJWZXJib3NlIGV4dGVuZHMgTmdsVGFiIGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCB7XG5cbiAgQENvbnRlbnRDaGlsZChOZ2xUYWJDb250ZW50KSBjb250ZW50VGVtcGxhdGU6IE5nbFRhYkNvbnRlbnQ7XG4gIEBDb250ZW50Q2hpbGQoTmdsVGFiTGFiZWwpIGxhYmVsVGVtcGxhdGU6IE5nbFRhYkxhYmVsO1xuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICBpZiAodGhpcy5sYWJlbFRlbXBsYXRlKSB7XG4gICAgICB0aGlzLmxhYmVsID0gdGhpcy5sYWJlbFRlbXBsYXRlLnRlbXBsYXRlUmVmO1xuICAgIH1cbiAgICB0aGlzLnRlbXBsYXRlUmVmID0gdGhpcy5jb250ZW50VGVtcGxhdGUudGVtcGxhdGVSZWY7XG4gIH1cbn1cbiJdfQ==
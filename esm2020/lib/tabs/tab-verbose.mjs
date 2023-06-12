import { Directive, ContentChild } from '@angular/core';
import { NglTab } from './tab';
import * as i0 from "@angular/core";
/*
 * <ngl-tab [label="..."]>
 *    <ng-template ngl-tab-label>...</ng-template>
 *    <ng-template ngl-tab-content>
 *       Content goes here...
 *    </ng-template>
 * </ngl-tab>
 */
// eslint-disable-next-line @angular-eslint/directive-selector
export class NglTabLabel {
    constructor(templateRef) {
        this.templateRef = templateRef;
    }
}
NglTabLabel.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglTabLabel, deps: [{ token: i0.TemplateRef }], target: i0.ɵɵFactoryTarget.Directive });
NglTabLabel.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.2.9", type: NglTabLabel, selector: "[ngl-tab-label]", ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglTabLabel, decorators: [{
            type: Directive,
            args: [{ selector: '[ngl-tab-label]' }]
        }], ctorParameters: function () { return [{ type: i0.TemplateRef }]; } });
// eslint-disable-next-line @angular-eslint/directive-selector
export class NglTabContent {
    constructor(templateRef) {
        this.templateRef = templateRef;
    }
}
NglTabContent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglTabContent, deps: [{ token: i0.TemplateRef }], target: i0.ɵɵFactoryTarget.Directive });
NglTabContent.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.2.9", type: NglTabContent, selector: "[ngl-tab-content]", ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglTabContent, decorators: [{
            type: Directive,
            args: [{ selector: '[ngl-tab-content]' }]
        }], ctorParameters: function () { return [{ type: i0.TemplateRef }]; } });
export class NglTabVerbose extends NglTab {
    ngAfterContentInit() {
        if (this.labelTemplate) {
            this.label = this.labelTemplate.templateRef;
        }
        this.templateRef = this.contentTemplate.templateRef;
    }
}
NglTabVerbose.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglTabVerbose, deps: null, target: i0.ɵɵFactoryTarget.Directive });
NglTabVerbose.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.2.9", type: NglTabVerbose, selector: "ngl-tab", providers: [{ provide: NglTab, useExisting: NglTabVerbose }], queries: [{ propertyName: "contentTemplate", first: true, predicate: NglTabContent, descendants: true }, { propertyName: "labelTemplate", first: true, predicate: NglTabLabel, descendants: true }], usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglTabVerbose, decorators: [{
            type: Directive,
            args: [{
                    // eslint-disable-next-line @angular-eslint/directive-selector
                    selector: 'ngl-tab',
                    providers: [{ provide: NglTab, useExisting: NglTabVerbose }],
                }]
        }], propDecorators: { contentTemplate: [{
                type: ContentChild,
                args: [NglTabContent]
            }], labelTemplate: [{
                type: ContentChild,
                args: [NglTabLabel]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLXZlcmJvc2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1saWdodG5pbmcvc3JjL2xpYi90YWJzL3RhYi12ZXJib3NlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWUsWUFBWSxFQUFvQixNQUFNLGVBQWUsQ0FBQztBQUN2RixPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sT0FBTyxDQUFDOztBQUUvQjs7Ozs7OztHQU9HO0FBQ0gsOERBQThEO0FBRTlELE1BQU0sT0FBTyxXQUFXO0lBQ3RCLFlBQW1CLFdBQTZCO1FBQTdCLGdCQUFXLEdBQVgsV0FBVyxDQUFrQjtJQUFHLENBQUM7O3dHQUR6QyxXQUFXOzRGQUFYLFdBQVc7MkZBQVgsV0FBVztrQkFEdkIsU0FBUzttQkFBQyxFQUFDLFFBQVEsRUFBRSxpQkFBaUIsRUFBQzs7QUFLeEMsOERBQThEO0FBRTlELE1BQU0sT0FBTyxhQUFhO0lBQ3hCLFlBQW1CLFdBQTZCO1FBQTdCLGdCQUFXLEdBQVgsV0FBVyxDQUFrQjtJQUFHLENBQUM7OzBHQUR6QyxhQUFhOzhGQUFiLGFBQWE7MkZBQWIsYUFBYTtrQkFEekIsU0FBUzttQkFBQyxFQUFDLFFBQVEsRUFBRSxtQkFBbUIsRUFBQzs7QUFVMUMsTUFBTSxPQUFPLGFBQWMsU0FBUSxNQUFNO0lBS3ZDLGtCQUFrQjtRQUNoQixJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDdEIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQztTQUM3QztRQUNELElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxXQUFXLENBQUM7SUFDdEQsQ0FBQzs7MEdBVlUsYUFBYTs4RkFBYixhQUFhLGtDQUZiLENBQUUsRUFBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxhQUFhLEVBQUMsQ0FBRSx1RUFJOUMsYUFBYSxnRkFDYixXQUFXOzJGQUhkLGFBQWE7a0JBTHpCLFNBQVM7bUJBQUM7b0JBQ1QsOERBQThEO29CQUM5RCxRQUFRLEVBQUUsU0FBUztvQkFDbkIsU0FBUyxFQUFFLENBQUUsRUFBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLFdBQVcsZUFBZSxFQUFDLENBQUU7aUJBQzdEOzhCQUc4QixlQUFlO3NCQUEzQyxZQUFZO3VCQUFDLGFBQWE7Z0JBQ0EsYUFBYTtzQkFBdkMsWUFBWTt1QkFBQyxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBUZW1wbGF0ZVJlZiwgQ29udGVudENoaWxkLCBBZnRlckNvbnRlbnRJbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ2xUYWIgfSBmcm9tICcuL3RhYic7XG5cbi8qXG4gKiA8bmdsLXRhYiBbbGFiZWw9XCIuLi5cIl0+XG4gKiAgICA8bmctdGVtcGxhdGUgbmdsLXRhYi1sYWJlbD4uLi48L25nLXRlbXBsYXRlPlxuICogICAgPG5nLXRlbXBsYXRlIG5nbC10YWItY29udGVudD5cbiAqICAgICAgIENvbnRlbnQgZ29lcyBoZXJlLi4uXG4gKiAgICA8L25nLXRlbXBsYXRlPlxuICogPC9uZ2wtdGFiPlxuICovXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQGFuZ3VsYXItZXNsaW50L2RpcmVjdGl2ZS1zZWxlY3RvclxuQERpcmVjdGl2ZSh7c2VsZWN0b3I6ICdbbmdsLXRhYi1sYWJlbF0nfSlcbmV4cG9ydCBjbGFzcyBOZ2xUYWJMYWJlbCB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55Pikge31cbn1cblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBhbmd1bGFyLWVzbGludC9kaXJlY3RpdmUtc2VsZWN0b3JcbkBEaXJlY3RpdmUoe3NlbGVjdG9yOiAnW25nbC10YWItY29udGVudF0nfSlcbmV4cG9ydCBjbGFzcyBOZ2xUYWJDb250ZW50IHtcbiAgY29uc3RydWN0b3IocHVibGljIHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxhbnk+KSB7fVxufVxuXG5ARGlyZWN0aXZlKHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBhbmd1bGFyLWVzbGludC9kaXJlY3RpdmUtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICduZ2wtdGFiJyxcbiAgcHJvdmlkZXJzOiBbIHtwcm92aWRlOiBOZ2xUYWIsIHVzZUV4aXN0aW5nOiBOZ2xUYWJWZXJib3NlfSBdLFxufSlcbmV4cG9ydCBjbGFzcyBOZ2xUYWJWZXJib3NlIGV4dGVuZHMgTmdsVGFiIGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCB7XG5cbiAgQENvbnRlbnRDaGlsZChOZ2xUYWJDb250ZW50KSBjb250ZW50VGVtcGxhdGU6IE5nbFRhYkNvbnRlbnQ7XG4gIEBDb250ZW50Q2hpbGQoTmdsVGFiTGFiZWwpIGxhYmVsVGVtcGxhdGU6IE5nbFRhYkxhYmVsO1xuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICBpZiAodGhpcy5sYWJlbFRlbXBsYXRlKSB7XG4gICAgICB0aGlzLmxhYmVsID0gdGhpcy5sYWJlbFRlbXBsYXRlLnRlbXBsYXRlUmVmO1xuICAgIH1cbiAgICB0aGlzLnRlbXBsYXRlUmVmID0gdGhpcy5jb250ZW50VGVtcGxhdGUudGVtcGxhdGVSZWY7XG4gIH1cbn1cbiJdfQ==
import { Component, Input, ChangeDetectionStrategy, ElementRef, Renderer2, HostBinding } from '@angular/core';
export class NglFile {
    constructor(element, renderer) {
        this.element = element;
        this.renderer = renderer;
        this.renderer.addClass(this.element.nativeElement, 'slds-file');
        this.renderer.addClass(this.element.nativeElement, 'slds-file_card');
    }
}
NglFile.decorators = [
    { type: Component, args: [{
                selector: 'ngl-file',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: "\n<figure>\n  <ng-content></ng-content>\n  <figcaption class=\"slds-file__title slds-file__title_card\" *ngIf=\"text\">\n    <div class=\"slds-media slds-media_small slds-media_center\">\n      <div class=\"slds-media__figure slds-line-height_reset\" *ngIf=\"iconName\">\n        <ngl-icon [iconName]=\"iconName\"></ngl-icon>\n      </div>\n      <div class=\"slds-media__body\"><span class=\"slds-file__text slds-truncate\" [title]=\"text\" [nglInternalOutlet]=\"text\"></span></div>\n    </div>\n  </figcaption>\n</figure>"
            },] }
];
NglFile.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
NglFile.propDecorators = {
    text: [{ type: HostBinding, args: ['class.slds-has-title',] }, { type: Input }],
    iconName: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nLWxpZ2h0bmluZy9zcmMvbGliL2ZpbGVzL2ZpbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsdUJBQXVCLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQWUsTUFBTSxlQUFlLENBQUM7QUFPM0gsTUFBTSxPQUFPLE9BQU87SUFPbEIsWUFBbUIsT0FBbUIsRUFBUyxRQUFtQjtRQUEvQyxZQUFPLEdBQVAsT0FBTyxDQUFZO1FBQVMsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNoRSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxXQUFXLENBQUMsQ0FBQztRQUNoRSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7OztZQWZGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsVUFBVTtnQkFDcEIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLHdoQkFBMEI7YUFDM0I7OztZQU5tRCxVQUFVO1lBQUUsU0FBUzs7O21CQVN0RSxXQUFXLFNBQUMsc0JBQXNCLGNBQ2xDLEtBQUs7dUJBRUwsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBFbGVtZW50UmVmLCBSZW5kZXJlcjIsIEhvc3RCaW5kaW5nLCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZ2wtZmlsZScsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICB0ZW1wbGF0ZVVybDogJy4vZmlsZS5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgTmdsRmlsZSAge1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3Muc2xkcy1oYXMtdGl0bGUnKVxuICBASW5wdXQoKSB0ZXh0OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIEBJbnB1dCgpIGljb25OYW1lOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IocHVibGljIGVsZW1lbnQ6IEVsZW1lbnRSZWYsIHB1YmxpYyByZW5kZXJlcjogUmVuZGVyZXIyKSB7XG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ3NsZHMtZmlsZScpO1xuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICdzbGRzLWZpbGVfY2FyZCcpO1xuICB9XG59XG4iXX0=
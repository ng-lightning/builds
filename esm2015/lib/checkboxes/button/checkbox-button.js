import { Component, Input, ChangeDetectionStrategy, ContentChild, ChangeDetectorRef } from '@angular/core';
import { NglCheckboxInput } from '../input/input';
export class NglCheckboxButton {
    constructor(cd) {
        this.cd = cd;
    }
    ngAfterContentInit() {
        if (!this.input) {
            throw Error(`[ng-lightning] Couldn't find an <input type="checkbox"> with [ngl] attribute inside ${this}`);
        }
        this._uid = this.input.id;
        this.cd.detectChanges();
        this.input.addClass('slds-assistive-text');
    }
}
NglCheckboxButton.decorators = [
    { type: Component, args: [{
                selector: 'ngl-checkbox-button',
                template: "\n<ng-content></ng-content>\n<label class=\"slds-checkbox_faux\" [attr.for]=\"_uid\"><span class=\"slds-assistive-text\" [nglInternalOutlet]=\"label\"></span></label>",
                changeDetection: ChangeDetectionStrategy.OnPush,
                host: {
                    '[class.slds-checkbox_add-button]': 'true',
                }
            },] }
];
NglCheckboxButton.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
NglCheckboxButton.propDecorators = {
    input: [{ type: ContentChild, args: [NglCheckboxInput, { static: true },] }],
    label: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3gtYnV0dG9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctbGlnaHRuaW5nL3NyYy9saWIvY2hlY2tib3hlcy9idXR0b24vY2hlY2tib3gtYnV0dG9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLHVCQUF1QixFQUFFLFlBQVksRUFBRSxpQkFBaUIsRUFBaUMsTUFBTSxlQUFlLENBQUM7QUFDMUksT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFVbEQsTUFBTSxPQUFPLGlCQUFpQjtJQU81QixZQUFvQixFQUFxQjtRQUFyQixPQUFFLEdBQUYsRUFBRSxDQUFtQjtJQUFHLENBQUM7SUFFN0Msa0JBQWtCO1FBQ2hCLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ2YsTUFBTSxLQUFLLENBQUMsdUZBQXVGLElBQUksRUFBRSxDQUFDLENBQUM7U0FDNUc7UUFFRCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDO1FBQzFCLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLENBQUM7UUFFeEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMscUJBQXFCLENBQUMsQ0FBQztJQUM3QyxDQUFDOzs7WUExQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxxQkFBcUI7Z0JBQy9CLGtMQUFxQztnQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLElBQUksRUFBRTtvQkFDSixrQ0FBa0MsRUFBRSxNQUFNO2lCQUMzQzthQUNGOzs7WUFWaUUsaUJBQWlCOzs7b0JBWWhGLFlBQVksU0FBQyxnQkFBZ0IsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7b0JBRS9DLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29udGVudENoaWxkLCBDaGFuZ2VEZXRlY3RvclJlZiwgQWZ0ZXJDb250ZW50SW5pdCwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5nbENoZWNrYm94SW5wdXQgfSBmcm9tICcuLi9pbnB1dC9pbnB1dCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25nbC1jaGVja2JveC1idXR0b24nLFxuICB0ZW1wbGF0ZVVybDogJy4vY2hlY2tib3gtYnV0dG9uLmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgaG9zdDoge1xuICAgICdbY2xhc3Muc2xkcy1jaGVja2JveF9hZGQtYnV0dG9uXSc6ICd0cnVlJyxcbiAgfSxcbn0pXG5leHBvcnQgY2xhc3MgTmdsQ2hlY2tib3hCdXR0b24gaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0IHtcbiAgQENvbnRlbnRDaGlsZChOZ2xDaGVja2JveElucHV0LCB7IHN0YXRpYzogdHJ1ZSB9KSBpbnB1dDogTmdsQ2hlY2tib3hJbnB1dDtcblxuICBASW5wdXQoKSBsYWJlbDogc3RyaW5nIHwgVGVtcGxhdGVSZWY8YW55PjtcblxuICBfdWlkOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYpIHt9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAgIGlmICghdGhpcy5pbnB1dCkge1xuICAgICAgdGhyb3cgRXJyb3IoYFtuZy1saWdodG5pbmddIENvdWxkbid0IGZpbmQgYW4gPGlucHV0IHR5cGU9XCJjaGVja2JveFwiPiB3aXRoIFtuZ2xdIGF0dHJpYnV0ZSBpbnNpZGUgJHt0aGlzfWApO1xuICAgIH1cblxuICAgIHRoaXMuX3VpZCA9IHRoaXMuaW5wdXQuaWQ7XG4gICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XG5cbiAgICB0aGlzLmlucHV0LmFkZENsYXNzKCdzbGRzLWFzc2lzdGl2ZS10ZXh0Jyk7XG4gIH1cbn1cbiJdfQ==
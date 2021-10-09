import { Component, Input, ContentChild, ChangeDetectionStrategy, ChangeDetectorRef, ElementRef } from '@angular/core';
import { NglCheckboxInput } from '../input/input';
import { HostService } from '../../common/host/host.service';
export class NglCheckboxOption {
    constructor(cd, element, hostService) {
        this.cd = cd;
        this.element = element;
        this.hostService = hostService;
    }
    set type(type) {
        this._type = type;
        this.setHostClass();
        this.cd.detectChanges();
    }
    get type() {
        return this._type;
    }
    setError(id) {
        this.input.describedBy = id;
    }
    setHostClass() {
        this.hostService.updateClass(this.element, {
            [`slds-checkbox`]: this.type === 'list',
            [`slds-button`]: this.type === 'button',
            [`slds-checkbox_button`]: this.type === 'button',
        });
    }
}
NglCheckboxOption.decorators = [
    { type: Component, args: [{
                selector: 'ngl-checkbox-option',
                template: "\n<ng-content></ng-content>\n<label class=\"slds-checkbox__label\" *ngIf=\"type === 'list'\" [attr.for]=\"input.id\"><span class=\"slds-checkbox_faux\"></span><span class=\"slds-form-element__label\" [nglInternalOutlet]=\"label\"></span></label>\n<label class=\"slds-checkbox_button__label\" *ngIf=\"type === 'button'\" [attr.for]=\"input.id\"><span class=\"slds-checkbox_faux\" [nglInternalOutlet]=\"label\"></span></label>",
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [HostService]
            },] }
];
NglCheckboxOption.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: HostService }
];
NglCheckboxOption.propDecorators = {
    label: [{ type: Input }],
    input: [{ type: ContentChild, args: [NglCheckboxInput, { static: true },] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3gtb3B0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctbGlnaHRuaW5nL3NyYy9saWIvY2hlY2tib3hlcy9ncm91cC9jaGVja2JveC1vcHRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBZSxLQUFLLEVBQUUsWUFBWSxFQUFFLHVCQUF1QixFQUFFLGlCQUFpQixFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNwSSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFRN0QsTUFBTSxPQUFPLGlCQUFpQjtJQUs1QixZQUFvQixFQUFxQixFQUFVLE9BQW1CLEVBQVUsV0FBd0I7UUFBcEYsT0FBRSxHQUFGLEVBQUUsQ0FBbUI7UUFBVSxZQUFPLEdBQVAsT0FBTyxDQUFZO1FBQVUsZ0JBQVcsR0FBWCxXQUFXLENBQWE7SUFBRyxDQUFDO0lBRTVHLElBQUksSUFBSSxDQUFDLElBQVk7UUFDbkIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDbEIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUNELElBQUksSUFBSTtRQUNOLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNwQixDQUFDO0lBSUQsUUFBUSxDQUFDLEVBQVU7UUFDakIsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDO0lBQzlCLENBQUM7SUFFTyxZQUFZO1FBQ2xCLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDekMsQ0FBQyxlQUFlLENBQUMsRUFBRSxJQUFJLENBQUMsSUFBSSxLQUFLLE1BQU07WUFDdkMsQ0FBQyxhQUFhLENBQUMsRUFBRSxJQUFJLENBQUMsSUFBSSxLQUFLLFFBQVE7WUFDdkMsQ0FBQyxzQkFBc0IsQ0FBQyxFQUFFLElBQUksQ0FBQyxJQUFJLEtBQUssUUFBUTtTQUNqRCxDQUFDLENBQUM7SUFDTCxDQUFDOzs7WUFsQ0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxxQkFBcUI7Z0JBQy9CLG9iQUFxQztnQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLFNBQVMsRUFBRSxDQUFDLFdBQVcsQ0FBQzthQUN6Qjs7O1lBVDhFLGlCQUFpQjtZQUFFLFVBQVU7WUFFbkcsV0FBVzs7O29CQVNqQixLQUFLO29CQUVMLFlBQVksU0FBQyxnQkFBZ0IsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFRlbXBsYXRlUmVmLCBJbnB1dCwgQ29udGVudENoaWxkLCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5nbENoZWNrYm94SW5wdXQgfSBmcm9tICcuLi9pbnB1dC9pbnB1dCc7XG5pbXBvcnQgeyBIb3N0U2VydmljZSB9IGZyb20gJy4uLy4uL2NvbW1vbi9ob3N0L2hvc3Quc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25nbC1jaGVja2JveC1vcHRpb24nLFxuICB0ZW1wbGF0ZVVybDogJy4vY2hlY2tib3gtb3B0aW9uLmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgcHJvdmlkZXJzOiBbSG9zdFNlcnZpY2VdLFxufSlcbmV4cG9ydCBjbGFzcyBOZ2xDaGVja2JveE9wdGlvbiB7XG4gIEBJbnB1dCgpIGxhYmVsOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIEBDb250ZW50Q2hpbGQoTmdsQ2hlY2tib3hJbnB1dCwgeyBzdGF0aWM6IHRydWUgfSkgaW5wdXQ6IE5nbENoZWNrYm94SW5wdXQ7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYsIHByaXZhdGUgZWxlbWVudDogRWxlbWVudFJlZiwgcHJpdmF0ZSBob3N0U2VydmljZTogSG9zdFNlcnZpY2UpIHt9XG5cbiAgc2V0IHR5cGUodHlwZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fdHlwZSA9IHR5cGU7XG4gICAgdGhpcy5zZXRIb3N0Q2xhc3MoKTtcbiAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuICBnZXQgdHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fdHlwZTtcbiAgfVxuXG4gIHByaXZhdGUgX3R5cGU6IHN0cmluZztcblxuICBzZXRFcnJvcihpZDogc3RyaW5nKSB7XG4gICAgdGhpcy5pbnB1dC5kZXNjcmliZWRCeSA9IGlkO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRIb3N0Q2xhc3MoKSB7XG4gICAgdGhpcy5ob3N0U2VydmljZS51cGRhdGVDbGFzcyh0aGlzLmVsZW1lbnQsIHtcbiAgICAgIFtgc2xkcy1jaGVja2JveGBdOiB0aGlzLnR5cGUgPT09ICdsaXN0JyxcbiAgICAgIFtgc2xkcy1idXR0b25gXTogdGhpcy50eXBlID09PSAnYnV0dG9uJyxcbiAgICAgIFtgc2xkcy1jaGVja2JveF9idXR0b25gXTogdGhpcy50eXBlID09PSAnYnV0dG9uJyxcbiAgICB9KTtcbiAgfVxuXG59XG4iXX0=
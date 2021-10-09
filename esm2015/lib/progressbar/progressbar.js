import { Component, Input, ChangeDetectionStrategy, ElementRef, Renderer2 } from '@angular/core';
import { HostService } from '../common/host/host.service';
export class NglProgressBar {
    constructor(element, renderer, hostService) {
        this.element = element;
        this.renderer = renderer;
        this.hostService = hostService;
        this.renderer.addClass(this.element.nativeElement, 'slds-progress-bar');
        this.renderer.setAttribute(this.element.nativeElement, 'role', 'progressbar');
        this.renderer.setAttribute(this.element.nativeElement, 'aria-valuemin', '0');
        this.renderer.setAttribute(this.element.nativeElement, 'aria-valuemax', '100');
    }
    /**
     * The percentage value of the progress bar.
     */
    set value(value) {
        this._value = Math.max(0, Math.min(value, 100)); // Trap on [0, 100]
        this.renderer.setAttribute(this.element.nativeElement, 'aria-valuenow', `${this.value}`);
    }
    get value() {
        return this._value;
    }
    ngOnInit() {
        this.setHostClass();
    }
    ngOnChanges() {
        this.setHostClass();
    }
    setHostClass() {
        this.hostService.updateClass(this.element, {
            [`slds-progress-bar_${this.size}`]: !!this.size,
            [`slds-progress-bar_${this.variant}`]: !!this.variant,
        });
    }
}
NglProgressBar.decorators = [
    { type: Component, args: [{
                selector: 'ngl-progress-bar',
                template: "<span class=\"slds-progress-bar__value\" [style.width.%]=\"value\"><span class=\"slds-assistive-text\">Progress: {{value}}%</span></span>",
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [HostService]
            },] }
];
NglProgressBar.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: HostService }
];
NglProgressBar.propDecorators = {
    value: [{ type: Input }],
    size: [{ type: Input }],
    variant: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZ3Jlc3NiYXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1saWdodG5pbmcvc3JjL2xpYi9wcm9ncmVzc2Jhci9wcm9ncmVzc2Jhci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSx1QkFBdUIsRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFxQixNQUFNLGVBQWUsQ0FBQztBQUNwSCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFRMUQsTUFBTSxPQUFPLGNBQWM7SUF5QnpCLFlBQW9CLE9BQW1CLEVBQVUsUUFBbUIsRUFBVSxXQUF3QjtRQUFsRixZQUFPLEdBQVAsT0FBTyxDQUFZO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3BHLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLG1CQUFtQixDQUFDLENBQUM7UUFDeEUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsTUFBTSxFQUFFLGFBQWEsQ0FBQyxDQUFDO1FBQzlFLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLGVBQWUsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUM3RSxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxlQUFlLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDakYsQ0FBQztJQTVCRDs7T0FFRztJQUNILElBQWEsS0FBSyxDQUFDLEtBQWE7UUFDOUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsbUJBQW1CO1FBQ3BFLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLGVBQWUsRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO0lBQzNGLENBQUM7SUFDRCxJQUFJLEtBQUs7UUFDUCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDckIsQ0FBQztJQXFCRCxRQUFRO1FBQ04sSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFFTyxZQUFZO1FBQ2xCLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDekMsQ0FBQyxxQkFBcUIsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJO1lBQy9DLENBQUMscUJBQXFCLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTztTQUN0RCxDQUFDLENBQUM7SUFDTCxDQUFDOzs7WUFuREYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLHFKQUFpQztnQkFDakMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLFNBQVMsRUFBRSxDQUFDLFdBQVcsQ0FBQzthQUN6Qjs7O1lBUm1ELFVBQVU7WUFBRSxTQUFTO1lBQ2hFLFdBQVc7OztvQkFhakIsS0FBSzttQkFXTCxLQUFLO3NCQUtMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgRWxlbWVudFJlZiwgUmVuZGVyZXIyLCBPbkluaXQsIE9uQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSG9zdFNlcnZpY2UgfSBmcm9tICcuLi9jb21tb24vaG9zdC9ob3N0LnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZ2wtcHJvZ3Jlc3MtYmFyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3Byb2dyZXNzYmFyLmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgcHJvdmlkZXJzOiBbSG9zdFNlcnZpY2VdLFxufSlcbmV4cG9ydCBjbGFzcyBOZ2xQcm9ncmVzc0JhciBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcblxuICAvKipcbiAgICogVGhlIHBlcmNlbnRhZ2UgdmFsdWUgb2YgdGhlIHByb2dyZXNzIGJhci5cbiAgICovXG4gIEBJbnB1dCgpIHNldCB2YWx1ZSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fdmFsdWUgPSBNYXRoLm1heCgwLCBNYXRoLm1pbih2YWx1ZSwgMTAwKSk7IC8vIFRyYXAgb24gWzAsIDEwMF1cbiAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZSh0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ2FyaWEtdmFsdWVub3cnLCBgJHt0aGlzLnZhbHVlfWApO1xuICB9XG4gIGdldCB2YWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogVGhlIHNpemUgb2YgdGhlIHByb2dyZXNzIGJhci5cbiAgICovXG4gIEBJbnB1dCgpIHNpemU6ICd4LXNtYWxsJyB8ICdzbWFsbCcgfCAnbWVkaXVtJyB8ICdsYXJnZSc7XG5cbiAgLyoqXG4gICAqIFRoZSB2YXJpYW50IG9mIHRoZSBwcm9ncmVzcyBiYXIuXG4gICAqL1xuICBASW5wdXQoKSB2YXJpYW50OiAnY2lyY3VsYXInO1xuXG4gIHByaXZhdGUgX3ZhbHVlOiBudW1iZXI7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50UmVmLCBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsIHByaXZhdGUgaG9zdFNlcnZpY2U6IEhvc3RTZXJ2aWNlKSB7XG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ3NsZHMtcHJvZ3Jlc3MtYmFyJyk7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUodGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICdyb2xlJywgJ3Byb2dyZXNzYmFyJyk7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUodGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICdhcmlhLXZhbHVlbWluJywgJzAnKTtcbiAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZSh0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ2FyaWEtdmFsdWVtYXgnLCAnMTAwJyk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnNldEhvc3RDbGFzcygpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKSB7XG4gICAgdGhpcy5zZXRIb3N0Q2xhc3MoKTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0SG9zdENsYXNzKCkge1xuICAgIHRoaXMuaG9zdFNlcnZpY2UudXBkYXRlQ2xhc3ModGhpcy5lbGVtZW50LCB7XG4gICAgICBbYHNsZHMtcHJvZ3Jlc3MtYmFyXyR7dGhpcy5zaXplfWBdOiAhIXRoaXMuc2l6ZSxcbiAgICAgIFtgc2xkcy1wcm9ncmVzcy1iYXJfJHt0aGlzLnZhcmlhbnR9YF06ICEhdGhpcy52YXJpYW50LFxuICAgIH0pO1xuICB9XG59XG4iXX0=
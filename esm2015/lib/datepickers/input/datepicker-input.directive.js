import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';
import { NglDatepickerInput } from './datepicker-input';
export class NglDatepickerInputDirective {
    constructor(element, renderer, datepickerInput) {
        this.element = element;
        this.renderer = renderer;
        this.datepickerInput = datepickerInput;
        renderer.addClass(element.nativeElement, 'slds-input');
        renderer.setAttribute(element.nativeElement, 'autocomplete', 'off');
        renderer.setAttribute(element.nativeElement, 'id', this.datepickerInput.uid);
        this.datepickerInput.inputEl = this;
    }
    onClick() {
        this.datepickerInput.onTriggerClick('input');
    }
    onKeydown(evt) {
        this.datepickerInput.onKeyboardInput(evt);
    }
    onInput() {
        setTimeout(() => this.datepickerInput.onInputChange(), 0);
    }
    onBlur() {
        this.datepickerInput.onBlur();
    }
    setPlaceholder(placeholder) {
        this.renderer.setAttribute(this.element.nativeElement, 'placeholder', placeholder);
    }
    setDisabled(disabled) {
        this.renderer.setProperty(this.element.nativeElement, 'disabled', disabled);
    }
    ngOnDestroy() {
        this.datepickerInput.inputEl = null;
    }
}
NglDatepickerInputDirective.decorators = [
    { type: Directive, args: [{
                selector: 'input[nglDatepickerInput]',
                exportAs: 'nglDatepickerInput'
            },] }
];
NglDatepickerInputDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: NglDatepickerInput }
];
NglDatepickerInputDirective.propDecorators = {
    onClick: [{ type: HostListener, args: ['click',] }],
    onKeydown: [{ type: HostListener, args: ['keydown', ['$event'],] }],
    onInput: [{ type: HostListener, args: ['input',] }],
    onBlur: [{ type: HostListener, args: ['blur',] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci1pbnB1dC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1saWdodG5pbmcvc3JjL2xpYi9kYXRlcGlja2Vycy9pbnB1dC9kYXRlcGlja2VyLWlucHV0LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBQzFGLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBT3hELE1BQU0sT0FBTywyQkFBMkI7SUFFdEMsWUFBbUIsT0FBbUIsRUFDbEIsUUFBbUIsRUFDbkIsZUFBbUM7UUFGcEMsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQUNsQixhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ25CLG9CQUFlLEdBQWYsZUFBZSxDQUFvQjtRQUNyRCxRQUFRLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFDdkQsUUFBUSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLGNBQWMsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNwRSxRQUFRLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDN0UsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO0lBQ3RDLENBQUM7SUFHRCxPQUFPO1FBQ0wsSUFBSSxDQUFDLGVBQWUsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUdELFNBQVMsQ0FBQyxHQUFHO1FBQ1gsSUFBSSxDQUFDLGVBQWUsQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUdELE9BQU87UUFDTCxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUM1RCxDQUFDO0lBR0QsTUFBTTtRQUNKLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDaEMsQ0FBQztJQUVELGNBQWMsQ0FBQyxXQUFtQjtRQUNoQyxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxhQUFhLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFDckYsQ0FBQztJQUVELFdBQVcsQ0FBQyxRQUFpQjtRQUMzQixJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxVQUFVLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDOUUsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7SUFDdEMsQ0FBQzs7O1lBN0NGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsMkJBQTJCO2dCQUNyQyxRQUFRLEVBQUUsb0JBQW9CO2FBQy9COzs7WUFQbUIsVUFBVTtZQUFFLFNBQVM7WUFDaEMsa0JBQWtCOzs7c0JBa0J4QixZQUFZLFNBQUMsT0FBTzt3QkFLcEIsWUFBWSxTQUFDLFNBQVMsRUFBRSxDQUFDLFFBQVEsQ0FBQztzQkFLbEMsWUFBWSxTQUFDLE9BQU87cUJBS3BCLFlBQVksU0FBQyxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBSZW5kZXJlcjIsIEhvc3RMaXN0ZW5lciwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ2xEYXRlcGlja2VySW5wdXQgfSBmcm9tICcuL2RhdGVwaWNrZXItaW5wdXQnO1xuaW1wb3J0IHsgSURhdGVwaWNrZXJJbnB1dCB9IGZyb20gJy4vZGF0ZXBpY2tlci1pbnB1dC5pbnRlcmZhY2UnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdpbnB1dFtuZ2xEYXRlcGlja2VySW5wdXRdJyxcbiAgZXhwb3J0QXM6ICduZ2xEYXRlcGlja2VySW5wdXQnXG59KVxuZXhwb3J0IGNsYXNzIE5nbERhdGVwaWNrZXJJbnB1dERpcmVjdGl2ZSBpbXBsZW1lbnRzIElEYXRlcGlja2VySW5wdXQsIE9uRGVzdHJveSB7XG5cbiAgY29uc3RydWN0b3IocHVibGljIGVsZW1lbnQ6IEVsZW1lbnRSZWYsXG4gICAgICAgICAgICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBkYXRlcGlja2VySW5wdXQ6IE5nbERhdGVwaWNrZXJJbnB1dCkge1xuICAgIHJlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ3NsZHMtaW5wdXQnKTtcbiAgICByZW5kZXJlci5zZXRBdHRyaWJ1dGUoZWxlbWVudC5uYXRpdmVFbGVtZW50LCAnYXV0b2NvbXBsZXRlJywgJ29mZicpO1xuICAgIHJlbmRlcmVyLnNldEF0dHJpYnV0ZShlbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICdpZCcsIHRoaXMuZGF0ZXBpY2tlcklucHV0LnVpZCk7XG4gICAgdGhpcy5kYXRlcGlja2VySW5wdXQuaW5wdXRFbCA9IHRoaXM7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdjbGljaycpXG4gIG9uQ2xpY2soKSB7XG4gICAgdGhpcy5kYXRlcGlja2VySW5wdXQub25UcmlnZ2VyQ2xpY2soJ2lucHV0Jyk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdrZXlkb3duJywgWyckZXZlbnQnXSlcbiAgb25LZXlkb3duKGV2dCkge1xuICAgIHRoaXMuZGF0ZXBpY2tlcklucHV0Lm9uS2V5Ym9hcmRJbnB1dChldnQpO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignaW5wdXQnKVxuICBvbklucHV0KCkge1xuICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5kYXRlcGlja2VySW5wdXQub25JbnB1dENoYW5nZSgpLCAwKTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2JsdXInKVxuICBvbkJsdXIoKSB7XG4gICAgdGhpcy5kYXRlcGlja2VySW5wdXQub25CbHVyKCk7XG4gIH1cblxuICBzZXRQbGFjZWhvbGRlcihwbGFjZWhvbGRlcjogc3RyaW5nKSB7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUodGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICdwbGFjZWhvbGRlcicsIHBsYWNlaG9sZGVyKTtcbiAgfVxuXG4gIHNldERpc2FibGVkKGRpc2FibGVkOiBib29sZWFuKSB7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRQcm9wZXJ0eSh0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ2Rpc2FibGVkJywgZGlzYWJsZWQpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5kYXRlcGlja2VySW5wdXQuaW5wdXRFbCA9IG51bGw7XG4gIH1cbn1cbiJdfQ==
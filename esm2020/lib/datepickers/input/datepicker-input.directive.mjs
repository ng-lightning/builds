import { Directive, HostListener } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./datepicker-input";
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
NglDatepickerInputDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglDatepickerInputDirective, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i1.NglDatepickerInput }], target: i0.ɵɵFactoryTarget.Directive });
NglDatepickerInputDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.2.9", type: NglDatepickerInputDirective, selector: "input[nglDatepickerInput]", host: { listeners: { "click": "onClick()", "keydown": "onKeydown($event)", "input": "onInput()", "blur": "onBlur()" } }, exportAs: ["nglDatepickerInput"], ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglDatepickerInputDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'input[nglDatepickerInput]',
                    exportAs: 'nglDatepickerInput'
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i1.NglDatepickerInput }]; }, propDecorators: { onClick: [{
                type: HostListener,
                args: ['click']
            }], onKeydown: [{
                type: HostListener,
                args: ['keydown', ['$event']]
            }], onInput: [{
                type: HostListener,
                args: ['input']
            }], onBlur: [{
                type: HostListener,
                args: ['blur']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci1pbnB1dC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1saWdodG5pbmcvc3JjL2xpYi9kYXRlcGlja2Vycy9pbnB1dC9kYXRlcGlja2VyLWlucHV0LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUF5QixZQUFZLEVBQWEsTUFBTSxlQUFlLENBQUM7OztBQVExRixNQUFNLE9BQU8sMkJBQTJCO0lBRXRDLFlBQW1CLE9BQW1CLEVBQ2xCLFFBQW1CLEVBQ25CLGVBQW1DO1FBRnBDLFlBQU8sR0FBUCxPQUFPLENBQVk7UUFDbEIsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNuQixvQkFBZSxHQUFmLGVBQWUsQ0FBb0I7UUFDckQsUUFBUSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLFlBQVksQ0FBQyxDQUFDO1FBQ3ZELFFBQVEsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxjQUFjLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDcEUsUUFBUSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzdFLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztJQUN0QyxDQUFDO0lBR0QsT0FBTztRQUNMLElBQUksQ0FBQyxlQUFlLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFHRCxTQUFTLENBQUMsR0FBRztRQUNYLElBQUksQ0FBQyxlQUFlLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFHRCxPQUFPO1FBQ0wsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDNUQsQ0FBQztJQUdELE1BQU07UUFDSixJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2hDLENBQUM7SUFFRCxjQUFjLENBQUMsV0FBbUI7UUFDaEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsYUFBYSxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBQ3JGLENBQUM7SUFFRCxXQUFXLENBQUMsUUFBaUI7UUFDM0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsVUFBVSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQzlFLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO0lBQ3RDLENBQUM7O3dIQXpDVSwyQkFBMkI7NEdBQTNCLDJCQUEyQjsyRkFBM0IsMkJBQTJCO2tCQUp2QyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSwyQkFBMkI7b0JBQ3JDLFFBQVEsRUFBRSxvQkFBb0I7aUJBQy9COzBKQWFDLE9BQU87c0JBRE4sWUFBWTt1QkFBQyxPQUFPO2dCQU1yQixTQUFTO3NCQURSLFlBQVk7dUJBQUMsU0FBUyxFQUFFLENBQUMsUUFBUSxDQUFDO2dCQU1uQyxPQUFPO3NCQUROLFlBQVk7dUJBQUMsT0FBTztnQkFNckIsTUFBTTtzQkFETCxZQUFZO3VCQUFDLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIFJlbmRlcmVyMiwgSG9zdExpc3RlbmVyLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5nbERhdGVwaWNrZXJJbnB1dCB9IGZyb20gJy4vZGF0ZXBpY2tlci1pbnB1dCc7XG5pbXBvcnQgeyBJRGF0ZXBpY2tlcklucHV0IH0gZnJvbSAnLi9kYXRlcGlja2VyLWlucHV0LmludGVyZmFjZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ2lucHV0W25nbERhdGVwaWNrZXJJbnB1dF0nLFxuICBleHBvcnRBczogJ25nbERhdGVwaWNrZXJJbnB1dCdcbn0pXG5leHBvcnQgY2xhc3MgTmdsRGF0ZXBpY2tlcklucHV0RGlyZWN0aXZlIGltcGxlbWVudHMgSURhdGVwaWNrZXJJbnB1dCwgT25EZXN0cm95IHtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZWxlbWVudDogRWxlbWVudFJlZixcbiAgICAgICAgICAgICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgICAgICAgICAgICBwcml2YXRlIGRhdGVwaWNrZXJJbnB1dDogTmdsRGF0ZXBpY2tlcklucHV0KSB7XG4gICAgcmVuZGVyZXIuYWRkQ2xhc3MoZWxlbWVudC5uYXRpdmVFbGVtZW50LCAnc2xkcy1pbnB1dCcpO1xuICAgIHJlbmRlcmVyLnNldEF0dHJpYnV0ZShlbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICdhdXRvY29tcGxldGUnLCAnb2ZmJyk7XG4gICAgcmVuZGVyZXIuc2V0QXR0cmlidXRlKGVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ2lkJywgdGhpcy5kYXRlcGlja2VySW5wdXQudWlkKTtcbiAgICB0aGlzLmRhdGVwaWNrZXJJbnB1dC5pbnB1dEVsID0gdGhpcztcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJylcbiAgb25DbGljaygpIHtcbiAgICB0aGlzLmRhdGVwaWNrZXJJbnB1dC5vblRyaWdnZXJDbGljaygnaW5wdXQnKTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2tleWRvd24nLCBbJyRldmVudCddKVxuICBvbktleWRvd24oZXZ0KSB7XG4gICAgdGhpcy5kYXRlcGlja2VySW5wdXQub25LZXlib2FyZElucHV0KGV2dCk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdpbnB1dCcpXG4gIG9uSW5wdXQoKSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmRhdGVwaWNrZXJJbnB1dC5vbklucHV0Q2hhbmdlKCksIDApO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignYmx1cicpXG4gIG9uQmx1cigpIHtcbiAgICB0aGlzLmRhdGVwaWNrZXJJbnB1dC5vbkJsdXIoKTtcbiAgfVxuXG4gIHNldFBsYWNlaG9sZGVyKHBsYWNlaG9sZGVyOiBzdHJpbmcpIHtcbiAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZSh0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ3BsYWNlaG9sZGVyJywgcGxhY2Vob2xkZXIpO1xuICB9XG5cbiAgc2V0RGlzYWJsZWQoZGlzYWJsZWQ6IGJvb2xlYW4pIHtcbiAgICB0aGlzLnJlbmRlcmVyLnNldFByb3BlcnR5KHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LCAnZGlzYWJsZWQnLCBkaXNhYmxlZCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLmRhdGVwaWNrZXJJbnB1dC5pbnB1dEVsID0gbnVsbDtcbiAgfVxufVxuIl19
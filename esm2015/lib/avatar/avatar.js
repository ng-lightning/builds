import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, ElementRef, Renderer2, HostBinding } from '@angular/core';
import { HostService } from '../common/host/host.service';
export class NglAvatar {
    constructor(element, renderer, hostService) {
        this.element = element;
        this.hostService = hostService;
        this.src = '';
        this.alternativeText = '';
        this.fallbackIconName = 'standard:user';
        this.error = new EventEmitter();
        this._imgError = false;
        renderer.addClass(element.nativeElement, 'slds-avatar');
    }
    fallbackIconClass() {
        const [category, icon] = this.fallbackIconName.split(':');
        return `slds-icon-${category}-${icon}`;
    }
    get shouldShowImage() {
        return this.src && !this._imgError;
    }
    onImgError() {
        this._imgError = true;
        this.error.emit();
    }
    ngOnInit() {
        this.setHostClass();
    }
    ngOnChanges() {
        this.setHostClass();
    }
    setHostClass() {
        this.hostService.updateClass(this.element, {
            [`slds-avatar_${this.size || 'medium'}`]: true,
            [`slds-avatar_${this.variant || 'rectangle'}`]: true,
        });
    }
}
NglAvatar.decorators = [
    { type: Component, args: [{
                selector: 'ngl-avatar',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: "<img *ngIf=\"shouldShowImage; else template_initials\" [src]=\"src\" [alt]=\"alternativeText\" (error)=\"onImgError()\">\n<ng-template #template_initials><abbr class=\"slds-avatar__initials\" [ngClass]=\"fallbackIconClass()\">{{ initials }}</abbr></ng-template>",
                providers: [HostService]
            },] }
];
NglAvatar.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: HostService }
];
NglAvatar.propDecorators = {
    src: [{ type: Input }],
    alternativeText: [{ type: HostBinding, args: ['attr.title',] }, { type: Input }],
    size: [{ type: Input }],
    variant: [{ type: Input }],
    initials: [{ type: Input }],
    fallbackIconName: [{ type: Input }],
    error: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXZhdGFyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctbGlnaHRuaW5nL3NyYy9saWIvYXZhdGFyL2F2YXRhci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLHVCQUF1QixFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFxQixNQUFNLGVBQWUsQ0FBQztBQUN2SixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFRMUQsTUFBTSxPQUFPLFNBQVM7SUF3QnBCLFlBQW9CLE9BQW1CLEVBQUUsUUFBbUIsRUFBVSxXQUF3QjtRQUExRSxZQUFPLEdBQVAsT0FBTyxDQUFZO1FBQStCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBdkJyRixRQUFHLEdBQUcsRUFBRSxDQUFDO1FBR1Qsb0JBQWUsR0FBRyxFQUFFLENBQUM7UUFjckIscUJBQWdCLEdBQUcsZUFBZSxDQUFDO1FBRWxDLFVBQUssR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBRTdCLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFHeEIsUUFBUSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLGFBQWEsQ0FBQyxDQUFDO0lBQzFELENBQUM7SUFFRCxpQkFBaUI7UUFDZixNQUFNLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDMUQsT0FBTyxhQUFhLFFBQVEsSUFBSSxJQUFJLEVBQUUsQ0FBQztJQUN6QyxDQUFDO0lBRUQsSUFBSSxlQUFlO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDckMsQ0FBQztJQUVELFVBQVU7UUFDUixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUN0QixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFFTyxZQUFZO1FBQ2xCLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDekMsQ0FBQyxlQUFlLElBQUksQ0FBQyxJQUFJLElBQUksUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJO1lBQzlDLENBQUMsZUFBZSxJQUFJLENBQUMsT0FBTyxJQUFJLFdBQVcsRUFBRSxDQUFDLEVBQUUsSUFBSTtTQUNyRCxDQUFDLENBQUM7SUFDTCxDQUFDOzs7WUE3REYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxZQUFZO2dCQUN0QixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsaVJBQTRCO2dCQUM1QixTQUFTLEVBQUUsQ0FBQyxXQUFXLENBQUM7YUFDekI7OztZQVJ5RSxVQUFVO1lBQUUsU0FBUztZQUN0RixXQUFXOzs7a0JBU2pCLEtBQUs7OEJBRUwsV0FBVyxTQUFDLFlBQVksY0FDeEIsS0FBSzttQkFLTCxLQUFLO3NCQUtMLEtBQUs7dUJBRUwsS0FBSzsrQkFFTCxLQUFLO29CQUVMLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIEVsZW1lbnRSZWYsIFJlbmRlcmVyMiwgSG9zdEJpbmRpbmcsIE9uSW5pdCwgT25DaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIb3N0U2VydmljZSB9IGZyb20gJy4uL2NvbW1vbi9ob3N0L2hvc3Quc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25nbC1hdmF0YXInLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgdGVtcGxhdGVVcmw6ICcuL2F2YXRhci5odG1sJyxcbiAgcHJvdmlkZXJzOiBbSG9zdFNlcnZpY2VdLFxufSlcbmV4cG9ydCBjbGFzcyBOZ2xBdmF0YXIgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgpIHNyYyA9ICcnO1xuXG4gIEBIb3N0QmluZGluZygnYXR0ci50aXRsZScpXG4gIEBJbnB1dCgpIGFsdGVybmF0aXZlVGV4dCA9ICcnO1xuXG4gIC8qXG4gICAqIFRoZSBzaXplIG9mIHRoZSBhdmF0YXIuXG4gICAqL1xuICBASW5wdXQoKSBzaXplOiBzdHJpbmc7XG5cbiAgLypcbiAgICogVGhlIHZhcmlhbnQgY2hhbmdlcyB0aGUgc2hhcGUgb2YgdGhlIGF2YXRhci5cbiAgICovXG4gIEBJbnB1dCgpIHZhcmlhbnQ6IHN0cmluZztcblxuICBASW5wdXQoKSBpbml0aWFsczogc3RyaW5nO1xuXG4gIEBJbnB1dCgpIGZhbGxiYWNrSWNvbk5hbWUgPSAnc3RhbmRhcmQ6dXNlcic7XG5cbiAgQE91dHB1dCgpIGVycm9yID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIHByaXZhdGUgX2ltZ0Vycm9yID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50UmVmLCByZW5kZXJlcjogUmVuZGVyZXIyLCBwcml2YXRlIGhvc3RTZXJ2aWNlOiBIb3N0U2VydmljZSkge1xuICAgIHJlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ3NsZHMtYXZhdGFyJyk7XG4gIH1cblxuICBmYWxsYmFja0ljb25DbGFzcygpIHtcbiAgICBjb25zdCBbY2F0ZWdvcnksIGljb25dID0gdGhpcy5mYWxsYmFja0ljb25OYW1lLnNwbGl0KCc6Jyk7XG4gICAgcmV0dXJuIGBzbGRzLWljb24tJHtjYXRlZ29yeX0tJHtpY29ufWA7XG4gIH1cblxuICBnZXQgc2hvdWxkU2hvd0ltYWdlKCkge1xuICAgIHJldHVybiB0aGlzLnNyYyAmJiAhdGhpcy5faW1nRXJyb3I7XG4gIH1cblxuICBvbkltZ0Vycm9yKCkge1xuICAgIHRoaXMuX2ltZ0Vycm9yID0gdHJ1ZTtcbiAgICB0aGlzLmVycm9yLmVtaXQoKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuc2V0SG9zdENsYXNzKCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpIHtcbiAgICB0aGlzLnNldEhvc3RDbGFzcygpO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRIb3N0Q2xhc3MoKSB7XG4gICAgdGhpcy5ob3N0U2VydmljZS51cGRhdGVDbGFzcyh0aGlzLmVsZW1lbnQsIHtcbiAgICAgIFtgc2xkcy1hdmF0YXJfJHt0aGlzLnNpemUgfHwgJ21lZGl1bSd9YF06IHRydWUsXG4gICAgICBbYHNsZHMtYXZhdGFyXyR7dGhpcy52YXJpYW50IHx8ICdyZWN0YW5nbGUnfWBdOiB0cnVlLFxuICAgIH0pO1xuICB9XG59XG4iXX0=
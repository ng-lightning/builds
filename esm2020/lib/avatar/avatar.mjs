import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, HostBinding } from '@angular/core';
import { HostService } from '../common/host/host.service';
import * as i0 from "@angular/core";
import * as i1 from "../common/host/host.service";
import * as i2 from "@angular/common";
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
NglAvatar.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglAvatar, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i1.HostService }], target: i0.ɵɵFactoryTarget.Component });
NglAvatar.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: NglAvatar, selector: "ngl-avatar", inputs: { src: "src", alternativeText: "alternativeText", size: "size", variant: "variant", initials: "initials", fallbackIconName: "fallbackIconName" }, outputs: { error: "error" }, host: { properties: { "attr.title": "this.alternativeText" } }, providers: [HostService], usesOnChanges: true, ngImport: i0, template: "<img *ngIf=\"shouldShowImage; else template_initials\" [src]=\"src\" [alt]=\"alternativeText\" (error)=\"onImgError()\">\n<ng-template #template_initials><abbr class=\"slds-avatar__initials\" [ngClass]=\"fallbackIconClass()\">{{ initials }}</abbr></ng-template>", dependencies: [{ kind: "directive", type: i2.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglAvatar, decorators: [{
            type: Component,
            args: [{ selector: 'ngl-avatar', changeDetection: ChangeDetectionStrategy.OnPush, providers: [HostService], template: "<img *ngIf=\"shouldShowImage; else template_initials\" [src]=\"src\" [alt]=\"alternativeText\" (error)=\"onImgError()\">\n<ng-template #template_initials><abbr class=\"slds-avatar__initials\" [ngClass]=\"fallbackIconClass()\">{{ initials }}</abbr></ng-template>" }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i1.HostService }]; }, propDecorators: { src: [{
                type: Input
            }], alternativeText: [{
                type: HostBinding,
                args: ['attr.title']
            }, {
                type: Input
            }], size: [{
                type: Input
            }], variant: [{
                type: Input
            }], initials: [{
                type: Input
            }], fallbackIconName: [{
                type: Input
            }], error: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXZhdGFyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctbGlnaHRuaW5nL3NyYy9saWIvYXZhdGFyL2F2YXRhci50cyIsIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nLWxpZ2h0bmluZy9zcmMvbGliL2F2YXRhci9hdmF0YXIuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLHVCQUF1QixFQUF5QixXQUFXLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZKLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQzs7OztBQVExRCxNQUFNLE9BQU8sU0FBUztJQXdCcEIsWUFBb0IsT0FBbUIsRUFBRSxRQUFtQixFQUFVLFdBQXdCO1FBQTFFLFlBQU8sR0FBUCxPQUFPLENBQVk7UUFBK0IsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUF2QnJGLFFBQUcsR0FBRyxFQUFFLENBQUM7UUFHVCxvQkFBZSxHQUFHLEVBQUUsQ0FBQztRQWNyQixxQkFBZ0IsR0FBRyxlQUFlLENBQUM7UUFFbEMsVUFBSyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFFN0IsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUd4QixRQUFRLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsYUFBYSxDQUFDLENBQUM7SUFDMUQsQ0FBQztJQUVELGlCQUFpQjtRQUNmLE1BQU0sQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUMxRCxPQUFPLGFBQWEsUUFBUSxJQUFJLElBQUksRUFBRSxDQUFDO0lBQ3pDLENBQUM7SUFFRCxJQUFJLGVBQWU7UUFDakIsT0FBTyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUNyQyxDQUFDO0lBRUQsVUFBVTtRQUNSLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUVPLFlBQVk7UUFDbEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUN6QyxDQUFDLGVBQWUsSUFBSSxDQUFDLElBQUksSUFBSSxRQUFRLEVBQUUsQ0FBQyxFQUFFLElBQUk7WUFDOUMsQ0FBQyxlQUFlLElBQUksQ0FBQyxPQUFPLElBQUksV0FBVyxFQUFFLENBQUMsRUFBRSxJQUFJO1NBQ3JELENBQUMsQ0FBQztJQUNMLENBQUM7O3NHQXZEVSxTQUFTOzBGQUFULFNBQVMsNFJBRlQsQ0FBQyxXQUFXLENBQUMsK0NDUDFCLHVRQUN1STsyRkRRMUgsU0FBUztrQkFOckIsU0FBUzsrQkFDRSxZQUFZLG1CQUNMLHVCQUF1QixDQUFDLE1BQU0sYUFFcEMsQ0FBQyxXQUFXLENBQUM7bUpBR2YsR0FBRztzQkFBWCxLQUFLO2dCQUdHLGVBQWU7c0JBRHZCLFdBQVc7dUJBQUMsWUFBWTs7c0JBQ3hCLEtBQUs7Z0JBS0csSUFBSTtzQkFBWixLQUFLO2dCQUtHLE9BQU87c0JBQWYsS0FBSztnQkFFRyxRQUFRO3NCQUFoQixLQUFLO2dCQUVHLGdCQUFnQjtzQkFBeEIsS0FBSztnQkFFSSxLQUFLO3NCQUFkLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIEVsZW1lbnRSZWYsIFJlbmRlcmVyMiwgSG9zdEJpbmRpbmcsIE9uSW5pdCwgT25DaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIb3N0U2VydmljZSB9IGZyb20gJy4uL2NvbW1vbi9ob3N0L2hvc3Quc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25nbC1hdmF0YXInLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgdGVtcGxhdGVVcmw6ICcuL2F2YXRhci5odG1sJyxcbiAgcHJvdmlkZXJzOiBbSG9zdFNlcnZpY2VdLFxufSlcbmV4cG9ydCBjbGFzcyBOZ2xBdmF0YXIgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgpIHNyYyA9ICcnO1xuXG4gIEBIb3N0QmluZGluZygnYXR0ci50aXRsZScpXG4gIEBJbnB1dCgpIGFsdGVybmF0aXZlVGV4dCA9ICcnO1xuXG4gIC8qXG4gICAqIFRoZSBzaXplIG9mIHRoZSBhdmF0YXIuXG4gICAqL1xuICBASW5wdXQoKSBzaXplOiBzdHJpbmc7XG5cbiAgLypcbiAgICogVGhlIHZhcmlhbnQgY2hhbmdlcyB0aGUgc2hhcGUgb2YgdGhlIGF2YXRhci5cbiAgICovXG4gIEBJbnB1dCgpIHZhcmlhbnQ6IHN0cmluZztcblxuICBASW5wdXQoKSBpbml0aWFsczogc3RyaW5nO1xuXG4gIEBJbnB1dCgpIGZhbGxiYWNrSWNvbk5hbWUgPSAnc3RhbmRhcmQ6dXNlcic7XG5cbiAgQE91dHB1dCgpIGVycm9yID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIHByaXZhdGUgX2ltZ0Vycm9yID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50UmVmLCByZW5kZXJlcjogUmVuZGVyZXIyLCBwcml2YXRlIGhvc3RTZXJ2aWNlOiBIb3N0U2VydmljZSkge1xuICAgIHJlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ3NsZHMtYXZhdGFyJyk7XG4gIH1cblxuICBmYWxsYmFja0ljb25DbGFzcygpIHtcbiAgICBjb25zdCBbY2F0ZWdvcnksIGljb25dID0gdGhpcy5mYWxsYmFja0ljb25OYW1lLnNwbGl0KCc6Jyk7XG4gICAgcmV0dXJuIGBzbGRzLWljb24tJHtjYXRlZ29yeX0tJHtpY29ufWA7XG4gIH1cblxuICBnZXQgc2hvdWxkU2hvd0ltYWdlKCkge1xuICAgIHJldHVybiB0aGlzLnNyYyAmJiAhdGhpcy5faW1nRXJyb3I7XG4gIH1cblxuICBvbkltZ0Vycm9yKCkge1xuICAgIHRoaXMuX2ltZ0Vycm9yID0gdHJ1ZTtcbiAgICB0aGlzLmVycm9yLmVtaXQoKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuc2V0SG9zdENsYXNzKCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpIHtcbiAgICB0aGlzLnNldEhvc3RDbGFzcygpO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRIb3N0Q2xhc3MoKSB7XG4gICAgdGhpcy5ob3N0U2VydmljZS51cGRhdGVDbGFzcyh0aGlzLmVsZW1lbnQsIHtcbiAgICAgIFtgc2xkcy1hdmF0YXJfJHt0aGlzLnNpemUgfHwgJ21lZGl1bSd9YF06IHRydWUsXG4gICAgICBbYHNsZHMtYXZhdGFyXyR7dGhpcy52YXJpYW50IHx8ICdyZWN0YW5nbGUnfWBdOiB0cnVlLFxuICAgIH0pO1xuICB9XG59XG4iLCI8aW1nICpuZ0lmPVwic2hvdWxkU2hvd0ltYWdlOyBlbHNlIHRlbXBsYXRlX2luaXRpYWxzXCIgW3NyY109XCJzcmNcIiBbYWx0XT1cImFsdGVybmF0aXZlVGV4dFwiIChlcnJvcik9XCJvbkltZ0Vycm9yKClcIj5cbjxuZy10ZW1wbGF0ZSAjdGVtcGxhdGVfaW5pdGlhbHM+PGFiYnIgY2xhc3M9XCJzbGRzLWF2YXRhcl9faW5pdGlhbHNcIiBbbmdDbGFzc109XCJmYWxsYmFja0ljb25DbGFzcygpXCI+e3sgaW5pdGlhbHMgfX08L2FiYnI+PC9uZy10ZW1wbGF0ZT4iXX0=
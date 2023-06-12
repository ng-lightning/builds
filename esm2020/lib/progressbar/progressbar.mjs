import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { HostService } from '../common/host/host.service';
import * as i0 from "@angular/core";
import * as i1 from "../common/host/host.service";
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
NglProgressBar.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglProgressBar, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i1.HostService }], target: i0.ɵɵFactoryTarget.Component });
NglProgressBar.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: NglProgressBar, selector: "ngl-progress-bar", inputs: { value: "value", size: "size", variant: "variant" }, providers: [HostService], usesOnChanges: true, ngImport: i0, template: "<span class=\"slds-progress-bar__value\" [style.width.%]=\"value\"><span class=\"slds-assistive-text\">Progress: {{value}}%</span></span>", changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglProgressBar, decorators: [{
            type: Component,
            args: [{ selector: 'ngl-progress-bar', changeDetection: ChangeDetectionStrategy.OnPush, providers: [HostService], template: "<span class=\"slds-progress-bar__value\" [style.width.%]=\"value\"><span class=\"slds-assistive-text\">Progress: {{value}}%</span></span>" }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i1.HostService }]; }, propDecorators: { value: [{
                type: Input
            }], size: [{
                type: Input
            }], variant: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZ3Jlc3NiYXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1saWdodG5pbmcvc3JjL2xpYi9wcm9ncmVzc2Jhci9wcm9ncmVzc2Jhci50cyIsIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nLWxpZ2h0bmluZy9zcmMvbGliL3Byb2dyZXNzYmFyL3Byb2dyZXNzYmFyLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsdUJBQXVCLEVBQTRDLE1BQU0sZUFBZSxDQUFDO0FBQ3BILE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQzs7O0FBUTFELE1BQU0sT0FBTyxjQUFjO0lBeUJ6QixZQUFvQixPQUFtQixFQUFVLFFBQW1CLEVBQVUsV0FBd0I7UUFBbEYsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQUFVLGFBQVEsR0FBUixRQUFRLENBQVc7UUFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUNwRyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxtQkFBbUIsQ0FBQyxDQUFDO1FBQ3hFLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLE1BQU0sRUFBRSxhQUFhLENBQUMsQ0FBQztRQUM5RSxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxlQUFlLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDN0UsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsZUFBZSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ2pGLENBQUM7SUE1QkQ7O09BRUc7SUFDSCxJQUFhLEtBQUssQ0FBQyxLQUFhO1FBQzlCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLG1CQUFtQjtRQUNwRSxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxlQUFlLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztJQUMzRixDQUFDO0lBQ0QsSUFBSSxLQUFLO1FBQ1AsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3JCLENBQUM7SUFxQkQsUUFBUTtRQUNOLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBRU8sWUFBWTtRQUNsQixJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ3pDLENBQUMscUJBQXFCLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUMvQyxDQUFDLHFCQUFxQixJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU87U0FDdEQsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7MkdBN0NVLGNBQWM7K0ZBQWQsY0FBYyx5R0FGZCxDQUFDLFdBQVcsQ0FBQywrQ0NQMUIsMklBQW1JOzJGRFN0SCxjQUFjO2tCQU4xQixTQUFTOytCQUNFLGtCQUFrQixtQkFFWCx1QkFBdUIsQ0FBQyxNQUFNLGFBQ3BDLENBQUMsV0FBVyxDQUFDO21KQU9YLEtBQUs7c0JBQWpCLEtBQUs7Z0JBV0csSUFBSTtzQkFBWixLQUFLO2dCQUtHLE9BQU87c0JBQWYsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBFbGVtZW50UmVmLCBSZW5kZXJlcjIsIE9uSW5pdCwgT25DaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIb3N0U2VydmljZSB9IGZyb20gJy4uL2NvbW1vbi9ob3N0L2hvc3Quc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25nbC1wcm9ncmVzcy1iYXInLFxuICB0ZW1wbGF0ZVVybDogJy4vcHJvZ3Jlc3NiYXIuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBwcm92aWRlcnM6IFtIb3N0U2VydmljZV0sXG59KVxuZXhwb3J0IGNsYXNzIE5nbFByb2dyZXNzQmFyIGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuXG4gIC8qKlxuICAgKiBUaGUgcGVyY2VudGFnZSB2YWx1ZSBvZiB0aGUgcHJvZ3Jlc3MgYmFyLlxuICAgKi9cbiAgQElucHV0KCkgc2V0IHZhbHVlKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl92YWx1ZSA9IE1hdGgubWF4KDAsIE1hdGgubWluKHZhbHVlLCAxMDApKTsgLy8gVHJhcCBvbiBbMCwgMTAwXVxuICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LCAnYXJpYS12YWx1ZW5vdycsIGAke3RoaXMudmFsdWV9YCk7XG4gIH1cbiAgZ2V0IHZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLl92YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgc2l6ZSBvZiB0aGUgcHJvZ3Jlc3MgYmFyLlxuICAgKi9cbiAgQElucHV0KCkgc2l6ZTogJ3gtc21hbGwnIHwgJ3NtYWxsJyB8ICdtZWRpdW0nIHwgJ2xhcmdlJztcblxuICAvKipcbiAgICogVGhlIHZhcmlhbnQgb2YgdGhlIHByb2dyZXNzIGJhci5cbiAgICovXG4gIEBJbnB1dCgpIHZhcmlhbnQ6ICdjaXJjdWxhcic7XG5cbiAgcHJpdmF0ZSBfdmFsdWU6IG51bWJlcjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnQ6IEVsZW1lbnRSZWYsIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMiwgcHJpdmF0ZSBob3N0U2VydmljZTogSG9zdFNlcnZpY2UpIHtcbiAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LCAnc2xkcy1wcm9ncmVzcy1iYXInKTtcbiAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZSh0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ3JvbGUnLCAncHJvZ3Jlc3NiYXInKTtcbiAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZSh0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ2FyaWEtdmFsdWVtaW4nLCAnMCcpO1xuICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LCAnYXJpYS12YWx1ZW1heCcsICcxMDAnKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuc2V0SG9zdENsYXNzKCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpIHtcbiAgICB0aGlzLnNldEhvc3RDbGFzcygpO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRIb3N0Q2xhc3MoKSB7XG4gICAgdGhpcy5ob3N0U2VydmljZS51cGRhdGVDbGFzcyh0aGlzLmVsZW1lbnQsIHtcbiAgICAgIFtgc2xkcy1wcm9ncmVzcy1iYXJfJHt0aGlzLnNpemV9YF06ICEhdGhpcy5zaXplLFxuICAgICAgW2BzbGRzLXByb2dyZXNzLWJhcl8ke3RoaXMudmFyaWFudH1gXTogISF0aGlzLnZhcmlhbnQsXG4gICAgfSk7XG4gIH1cbn1cbiIsIjxzcGFuIGNsYXNzPVwic2xkcy1wcm9ncmVzcy1iYXJfX3ZhbHVlXCIgW3N0eWxlLndpZHRoLiVdPVwidmFsdWVcIj48c3BhbiBjbGFzcz1cInNsZHMtYXNzaXN0aXZlLXRleHRcIj5Qcm9ncmVzczoge3t2YWx1ZX19JTwvc3Bhbj48L3NwYW4+Il19
import { __decorate } from "tslib";
import { Component, Input, ChangeDetectionStrategy, ContentChildren, Output, EventEmitter, ViewChildren, ViewChild, Optional, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { LEFT_ARROW, RIGHT_ARROW } from '@angular/cdk/keycodes';
import { InputBoolean, InputNumber } from '../util/convert';
import { NglCarouselImage } from './carousel-image';
import { NglCarouselIndicator } from './carousel-indicator';
export class NglCarousel {
    constructor(document) {
        this.document = document;
        this.activeChange = new EventEmitter();
        /**
         * The auto scroll duration in seconds. After that the next image is displayed.
         */
        this.scrollDuration = 5;
        /**
         * Whether auto scroll is enabled.
         */
        this.autoScroll = true;
        /**
         * Whether the carousel should continue looping from the beginning after the last item is displayed.
         */
        this.autoRefresh = true;
        this.labels = {
            startAutoPlay: 'Start auto-play',
            stopAutoPlay: 'Stop auto-play',
        };
        this.playing = true;
        this.nextTimer = null;
    }
    isActive(index) {
        return index === this.active;
    }
    getImage(index) {
        return this.images.toArray()[index];
    }
    ngOnChanges(changes) {
        if (changes.active) {
            // Focus correct indicator if one is already focused
            if (this.document && this.indicatorsEl.nativeElement.contains(document.activeElement)) {
                this.indicators.toArray()[this.active].focus();
            }
        }
        if (changes.active || changes.autoScroll || changes.scrollDuration) {
            // Reset timer when active changes
            this.setTimer();
        }
    }
    onIndicatorClick(index) {
        this.setActive(index, true);
    }
    onKeyboard(evt) {
        if (evt.keyCode === LEFT_ARROW || evt.keyCode === RIGHT_ARROW) {
            this.activateNext(evt.keyCode === LEFT_ARROW);
        }
    }
    setActive(index, stopPlaying = false) {
        if (stopPlaying) {
            this.playing = false;
        }
        if (this.active !== index) {
            this.activeChange.emit(index);
        }
    }
    togglePlay() {
        this.playing = !this.playing;
        this.setTimer();
    }
    playLabel() {
        return this.labels[this.playing ? 'stopAutoPlay' : 'startAutoPlay'];
    }
    activateNext(reverse = false) {
        const active = this.active + (reverse ? -1 : 1);
        if ((active < 0 || active > this.images.length - 1) && !this.autoRefresh) {
            return;
        }
        this.setActive((this.images.length + active) % this.images.length);
    }
    setTimer() {
        clearTimeout(this.nextTimer);
        if (this.autoScroll && this.playing) {
            this.nextTimer = setTimeout(() => {
                this.activateNext();
            }, this.scrollDuration * 1000);
        }
    }
}
NglCarousel.decorators = [
    { type: Component, args: [{
                selector: 'ngl-carousel',
                template: "\n<div class=\"slds-carousel__stage\"><span class=\"slds-carousel__autoplay\" *ngIf=\"autoScroll\">\n    <button class=\"slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-x-small\" [attr.aria-pressed]=\"!playing\" [title]=\"playLabel()\" (click)=\"togglePlay()\">\n      <svg class=\"slds-button__icon\" [nglIconName]=\"playing ? 'utility:pause' : 'utility:right'\"></svg><span class=\"slds-assistive-text\">{{ playLabel() }}</span>\n    </button></span>\n  <div class=\"slds-carousel__panels\" [style.transform]=\"'translateX(' + (-active * 100) + '%)'\">\n    <ng-content></ng-content>\n  </div>\n  <ul class=\"slds-carousel__indicators\" #indicatorsEl role=\"tablist\" (keydown)=\"onKeyboard($event)\">\n    <li class=\"slds-carousel__indicator\" *ngFor=\"let image of images; let i = index\" role=\"presentation\"><a class=\"slds-carousel__indicator-action\" nglCarouselIndicator href=\"javascript:void(0);\" role=\"tab\" [isActive]=\"isActive(i)\" [image]=\"getImage(i)\" [attr.aria-controls]=\"image.uid\" [title]=\"image.header\" (click)=\"onIndicatorClick(i)\"><span class=\"slds-assistive-text\">{{ image.header }}</span></a></li>\n  </ul>\n</div>",
                changeDetection: ChangeDetectionStrategy.OnPush,
                host: {
                    '[class.slds-carousel]': 'true',
                }
            },] }
];
NglCarousel.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [DOCUMENT,] }] }
];
NglCarousel.propDecorators = {
    active: [{ type: Input }],
    activeChange: [{ type: Output }],
    scrollDuration: [{ type: Input }],
    autoScroll: [{ type: Input }],
    autoRefresh: [{ type: Input }],
    images: [{ type: ContentChildren, args: [NglCarouselImage,] }],
    indicators: [{ type: ViewChildren, args: [NglCarouselIndicator,] }],
    indicatorsEl: [{ type: ViewChild, args: ['indicatorsEl', { static: true },] }],
    labels: [{ type: Input }]
};
__decorate([
    InputNumber()
], NglCarousel.prototype, "active", void 0);
__decorate([
    InputNumber()
], NglCarousel.prototype, "scrollDuration", void 0);
__decorate([
    InputBoolean()
], NglCarousel.prototype, "autoScroll", void 0);
__decorate([
    InputBoolean()
], NglCarousel.prototype, "autoRefresh", void 0);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2Fyb3VzZWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1saWdodG5pbmcvc3JjL2xpYi9jYXJvdXNlbC9jYXJvdXNlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsdUJBQXVCLEVBQUUsZUFBZSxFQUNqRSxNQUFNLEVBQUUsWUFBWSxFQUFhLFlBQVksRUFBaUIsU0FBUyxFQUFjLFFBQVEsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0gsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDaEUsT0FBTyxFQUFFLFlBQVksRUFBRSxXQUFXLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNwRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQVU1RCxNQUFNLE9BQU8sV0FBVztJQW9DdEIsWUFBa0QsUUFBYTtRQUFiLGFBQVEsR0FBUixRQUFRLENBQUs7UUFoQ3JELGlCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUVwRDs7V0FFRztRQUNxQixtQkFBYyxHQUFHLENBQUMsQ0FBQztRQUUzQzs7V0FFRztRQUNzQixlQUFVLEdBQUcsSUFBSSxDQUFDO1FBRTNDOztXQUVHO1FBQ3NCLGdCQUFXLEdBQUcsSUFBSSxDQUFDO1FBUW5DLFdBQU0sR0FBRztZQUNoQixhQUFhLEVBQUUsaUJBQWlCO1lBQ2hDLFlBQVksRUFBRSxnQkFBZ0I7U0FDL0IsQ0FBQztRQUVGLFlBQU8sR0FBRyxJQUFJLENBQUM7UUFFUCxjQUFTLEdBQUcsSUFBSSxDQUFDO0lBRXlDLENBQUM7SUFFbkUsUUFBUSxDQUFDLEtBQWE7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QyxjQUFjLEdBQUcsSUFBSSxDQUFDLENBQUM7U0FDaEM7SUFDSCxDQUFDOzs7WUFuSEYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxjQUFjO2dCQUN4QiwycUNBQThCO2dCQUM5QixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsSUFBSSxFQUFFO29CQUNKLHVCQUF1QixFQUFFLE1BQU07aUJBQ2hDO2FBQ0Y7Ozs0Q0FxQ2MsUUFBUSxZQUFJLE1BQU0sU0FBQyxRQUFROzs7cUJBbEN2QyxLQUFLOzJCQUVMLE1BQU07NkJBS04sS0FBSzt5QkFLTCxLQUFLOzBCQUtMLEtBQUs7cUJBRUwsZUFBZSxTQUFDLGdCQUFnQjt5QkFFaEMsWUFBWSxTQUFDLG9CQUFvQjsyQkFFakMsU0FBUyxTQUFDLGNBQWMsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7cUJBRTFDLEtBQUs7O0FBekJrQjtJQUFkLFdBQVcsRUFBRTsyQ0FBUTtBQU9QO0lBQWQsV0FBVyxFQUFFO21EQUFvQjtBQUtsQjtJQUFmLFlBQVksRUFBRTsrQ0FBbUI7QUFLbEI7SUFBZixZQUFZLEVBQUU7Z0RBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbnRlbnRDaGlsZHJlbiwgUXVlcnlMaXN0LFxuICBPdXRwdXQsIEV2ZW50RW1pdHRlciwgT25DaGFuZ2VzLCBWaWV3Q2hpbGRyZW4sIFNpbXBsZUNoYW5nZXMsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgT3B0aW9uYWwsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTEVGVF9BUlJPVywgUklHSFRfQVJST1cgfSBmcm9tICdAYW5ndWxhci9jZGsva2V5Y29kZXMnO1xuaW1wb3J0IHsgSW5wdXRCb29sZWFuLCBJbnB1dE51bWJlciB9IGZyb20gJy4uL3V0aWwvY29udmVydCc7XG5pbXBvcnQgeyBOZ2xDYXJvdXNlbEltYWdlIH0gZnJvbSAnLi9jYXJvdXNlbC1pbWFnZSc7XG5pbXBvcnQgeyBOZ2xDYXJvdXNlbEluZGljYXRvciB9IGZyb20gJy4vY2Fyb3VzZWwtaW5kaWNhdG9yJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmdsLWNhcm91c2VsJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2Nhcm91c2VsLmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgaG9zdDoge1xuICAgICdbY2xhc3Muc2xkcy1jYXJvdXNlbF0nOiAndHJ1ZScsXG4gIH0sXG59KVxuZXhwb3J0IGNsYXNzIE5nbENhcm91c2VsIGltcGxlbWVudHMgT25DaGFuZ2VzIHtcblxuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBhY3RpdmU7XG5cbiAgQE91dHB1dCgpIGFjdGl2ZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuXG4gIC8qKlxuICAgKiBUaGUgYXV0byBzY3JvbGwgZHVyYXRpb24gaW4gc2Vjb25kcy4gQWZ0ZXIgdGhhdCB0aGUgbmV4dCBpbWFnZSBpcyBkaXNwbGF5ZWQuXG4gICAqL1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBzY3JvbGxEdXJhdGlvbiA9IDU7XG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgYXV0byBzY3JvbGwgaXMgZW5hYmxlZC5cbiAgICovXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBhdXRvU2Nyb2xsID0gdHJ1ZTtcblxuICAvKipcbiAgICogV2hldGhlciB0aGUgY2Fyb3VzZWwgc2hvdWxkIGNvbnRpbnVlIGxvb3BpbmcgZnJvbSB0aGUgYmVnaW5uaW5nIGFmdGVyIHRoZSBsYXN0IGl0ZW0gaXMgZGlzcGxheWVkLlxuICAgKi9cbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGF1dG9SZWZyZXNoID0gdHJ1ZTtcblxuICBAQ29udGVudENoaWxkcmVuKE5nbENhcm91c2VsSW1hZ2UpIGltYWdlczogUXVlcnlMaXN0PE5nbENhcm91c2VsSW1hZ2U+O1xuXG4gIEBWaWV3Q2hpbGRyZW4oTmdsQ2Fyb3VzZWxJbmRpY2F0b3IpIGluZGljYXRvcnM6IFF1ZXJ5TGlzdDxOZ2xDYXJvdXNlbEluZGljYXRvcj47XG5cbiAgQFZpZXdDaGlsZCgnaW5kaWNhdG9yc0VsJywgeyBzdGF0aWM6IHRydWUgfSkgaW5kaWNhdG9yc0VsOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PjtcblxuICBASW5wdXQoKSBsYWJlbHMgPSB7XG4gICAgc3RhcnRBdXRvUGxheTogJ1N0YXJ0IGF1dG8tcGxheScsXG4gICAgc3RvcEF1dG9QbGF5OiAnU3RvcCBhdXRvLXBsYXknLFxuICB9O1xuXG4gIHBsYXlpbmcgPSB0cnVlO1xuXG4gIHByaXZhdGUgbmV4dFRpbWVyID0gbnVsbDtcblxuICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvY3VtZW50OiBhbnkpIHt9XG5cbiAgaXNBY3RpdmUoaW5kZXg6IG51bWJlcikge1xuICAgIHJldHVybiBpbmRleCA9PT0gdGhpcy5hY3RpdmU7XG4gIH1cblxuICBnZXRJbWFnZShpbmRleDogbnVtYmVyKSB7XG4gICAgcmV0dXJuIHRoaXMuaW1hZ2VzLnRvQXJyYXkoKVtpbmRleF07XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgaWYgKGNoYW5nZXMuYWN0aXZlKSB7XG4gICAgICAvLyBGb2N1cyBjb3JyZWN0IGluZGljYXRvciBpZiBvbmUgaXMgYWxyZWFkeSBmb2N1c2VkXG4gICAgICBpZiAodGhpcy5kb2N1bWVudCAmJiB0aGlzLmluZGljYXRvcnNFbC5uYXRpdmVFbGVtZW50LmNvbnRhaW5zKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpKSB7XG4gICAgICAgIHRoaXMuaW5kaWNhdG9ycy50b0FycmF5KClbdGhpcy5hY3RpdmVdLmZvY3VzKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGNoYW5nZXMuYWN0aXZlIHx8IGNoYW5nZXMuYXV0b1Njcm9sbCB8fCBjaGFuZ2VzLnNjcm9sbER1cmF0aW9uKSB7XG4gICAgICAvLyBSZXNldCB0aW1lciB3aGVuIGFjdGl2ZSBjaGFuZ2VzXG4gICAgICB0aGlzLnNldFRpbWVyKCk7XG4gICAgfVxuICB9XG5cbiAgb25JbmRpY2F0b3JDbGljayhpbmRleDogbnVtYmVyKSB7XG4gICAgdGhpcy5zZXRBY3RpdmUoaW5kZXgsIHRydWUpO1xuICB9XG5cbiAgb25LZXlib2FyZChldnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICBpZiAoZXZ0LmtleUNvZGUgPT09IExFRlRfQVJST1cgfHwgZXZ0LmtleUNvZGUgPT09IFJJR0hUX0FSUk9XKSB7XG4gICAgICB0aGlzLmFjdGl2YXRlTmV4dChldnQua2V5Q29kZSA9PT0gTEVGVF9BUlJPVyk7XG4gICAgfVxuICB9XG5cbiAgc2V0QWN0aXZlKGluZGV4OiBudW1iZXIsIHN0b3BQbGF5aW5nID0gZmFsc2UpIHtcbiAgICBpZiAoc3RvcFBsYXlpbmcpIHtcbiAgICAgIHRoaXMucGxheWluZyA9IGZhbHNlO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmFjdGl2ZSAhPT0gaW5kZXgpIHtcbiAgICAgIHRoaXMuYWN0aXZlQ2hhbmdlLmVtaXQoaW5kZXgpO1xuICAgIH1cbiAgfVxuXG4gIHRvZ2dsZVBsYXkoKSB7XG4gICAgdGhpcy5wbGF5aW5nID0gIXRoaXMucGxheWluZztcbiAgICB0aGlzLnNldFRpbWVyKCk7XG4gIH1cblxuICBwbGF5TGFiZWwoKSB7XG4gICAgcmV0dXJuIHRoaXMubGFiZWxzW3RoaXMucGxheWluZyA/ICdzdG9wQXV0b1BsYXknIDogJ3N0YXJ0QXV0b1BsYXknXTtcbiAgfVxuXG4gIHByaXZhdGUgYWN0aXZhdGVOZXh0KHJldmVyc2UgPSBmYWxzZSk6IHZvaWQge1xuICAgIGNvbnN0IGFjdGl2ZSA9IHRoaXMuYWN0aXZlICsgKHJldmVyc2UgPyAtMSA6IDEpO1xuXG4gICAgaWYgKChhY3RpdmUgPCAwIHx8IGFjdGl2ZSA+IHRoaXMuaW1hZ2VzLmxlbmd0aCAtIDEpICYmICF0aGlzLmF1dG9SZWZyZXNoKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5zZXRBY3RpdmUoKHRoaXMuaW1hZ2VzLmxlbmd0aCArIGFjdGl2ZSkgJSB0aGlzLmltYWdlcy5sZW5ndGgpO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRUaW1lcigpIHtcbiAgICBjbGVhclRpbWVvdXQodGhpcy5uZXh0VGltZXIpO1xuXG4gICAgaWYgKHRoaXMuYXV0b1Njcm9sbCAmJiB0aGlzLnBsYXlpbmcpIHtcbiAgICAgIHRoaXMubmV4dFRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuYWN0aXZhdGVOZXh0KCk7XG4gICAgICB9LCB0aGlzLnNjcm9sbER1cmF0aW9uICogMTAwMCk7XG4gICAgfVxuICB9XG59XG4iXX0=
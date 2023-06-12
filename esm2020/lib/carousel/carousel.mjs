import { __decorate } from "tslib";
import { Component, Input, ChangeDetectionStrategy, ContentChildren, Output, EventEmitter, ViewChildren, ViewChild, Optional, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { LEFT_ARROW, RIGHT_ARROW } from '@angular/cdk/keycodes';
import { InputBoolean, InputNumber } from '../util/convert';
import { NglCarouselImage } from './carousel-image';
import { NglCarouselIndicator } from './carousel-indicator';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../icons/svg";
import * as i3 from "./carousel-indicator";
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
NglCarousel.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglCarousel, deps: [{ token: DOCUMENT, optional: true }], target: i0.ɵɵFactoryTarget.Component });
NglCarousel.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: NglCarousel, selector: "ngl-carousel", inputs: { active: "active", scrollDuration: "scrollDuration", autoScroll: "autoScroll", autoRefresh: "autoRefresh", labels: "labels" }, outputs: { activeChange: "activeChange" }, host: { properties: { "class.slds-carousel": "true" } }, queries: [{ propertyName: "images", predicate: NglCarouselImage }], viewQueries: [{ propertyName: "indicatorsEl", first: true, predicate: ["indicatorsEl"], descendants: true, static: true }, { propertyName: "indicators", predicate: NglCarouselIndicator, descendants: true }], usesOnChanges: true, ngImport: i0, template: "\n<div class=\"slds-carousel__stage\"><span class=\"slds-carousel__autoplay\" *ngIf=\"autoScroll\">\n    <button class=\"slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-x-small\" [attr.aria-pressed]=\"!playing\" [title]=\"playLabel()\" (click)=\"togglePlay()\">\n      <svg class=\"slds-button__icon\" [nglIconName]=\"playing ? 'utility:pause' : 'utility:right'\"></svg><span class=\"slds-assistive-text\">{{ playLabel() }}</span>\n    </button></span>\n  <div class=\"slds-carousel__panels\" [style.transform]=\"'translateX(' + (-active * 100) + '%)'\">\n    <ng-content></ng-content>\n  </div>\n  <ul class=\"slds-carousel__indicators\" #indicatorsEl role=\"tablist\" (keydown)=\"onKeyboard($event)\">\n    <li class=\"slds-carousel__indicator\" *ngFor=\"let image of images; let i = index\" role=\"presentation\"><a class=\"slds-carousel__indicator-action\" nglCarouselIndicator href=\"javascript:void(0);\" role=\"tab\" [isActive]=\"isActive(i)\" [image]=\"getImage(i)\" [attr.aria-controls]=\"image.uid\" [title]=\"image.header\" (click)=\"onIndicatorClick(i)\"><span class=\"slds-assistive-text\">{{ image.header }}</span></a></li>\n  </ul>\n</div>", dependencies: [{ kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i2.NglIconSvg, selector: "svg[nglIconName]", inputs: ["nglIconName", "xPos"] }, { kind: "directive", type: i3.NglCarouselIndicator, selector: "[nglCarouselIndicator]", inputs: ["isActive", "image"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
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
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglCarousel, decorators: [{
            type: Component,
            args: [{ selector: 'ngl-carousel', changeDetection: ChangeDetectionStrategy.OnPush, host: {
                        '[class.slds-carousel]': 'true',
                    }, template: "\n<div class=\"slds-carousel__stage\"><span class=\"slds-carousel__autoplay\" *ngIf=\"autoScroll\">\n    <button class=\"slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-x-small\" [attr.aria-pressed]=\"!playing\" [title]=\"playLabel()\" (click)=\"togglePlay()\">\n      <svg class=\"slds-button__icon\" [nglIconName]=\"playing ? 'utility:pause' : 'utility:right'\"></svg><span class=\"slds-assistive-text\">{{ playLabel() }}</span>\n    </button></span>\n  <div class=\"slds-carousel__panels\" [style.transform]=\"'translateX(' + (-active * 100) + '%)'\">\n    <ng-content></ng-content>\n  </div>\n  <ul class=\"slds-carousel__indicators\" #indicatorsEl role=\"tablist\" (keydown)=\"onKeyboard($event)\">\n    <li class=\"slds-carousel__indicator\" *ngFor=\"let image of images; let i = index\" role=\"presentation\"><a class=\"slds-carousel__indicator-action\" nglCarouselIndicator href=\"javascript:void(0);\" role=\"tab\" [isActive]=\"isActive(i)\" [image]=\"getImage(i)\" [attr.aria-controls]=\"image.uid\" [title]=\"image.header\" (click)=\"onIndicatorClick(i)\"><span class=\"slds-assistive-text\">{{ image.header }}</span></a></li>\n  </ul>\n</div>" }]
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Optional
                }, {
                    type: Inject,
                    args: [DOCUMENT]
                }] }]; }, propDecorators: { active: [{
                type: Input
            }], activeChange: [{
                type: Output
            }], scrollDuration: [{
                type: Input
            }], autoScroll: [{
                type: Input
            }], autoRefresh: [{
                type: Input
            }], images: [{
                type: ContentChildren,
                args: [NglCarouselImage]
            }], indicators: [{
                type: ViewChildren,
                args: [NglCarouselIndicator]
            }], indicatorsEl: [{
                type: ViewChild,
                args: ['indicatorsEl', { static: true }]
            }], labels: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2Fyb3VzZWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1saWdodG5pbmcvc3JjL2xpYi9jYXJvdXNlbC9jYXJvdXNlbC50cyIsIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nLWxpZ2h0bmluZy9zcmMvbGliL2Nhcm91c2VsL2Nhcm91c2VsLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLHVCQUF1QixFQUFFLGVBQWUsRUFDakUsTUFBTSxFQUFFLFlBQVksRUFBYSxZQUFZLEVBQWlCLFNBQVMsRUFBYyxRQUFRLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQy9ILE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDNUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDcEQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7Ozs7O0FBVTVELE1BQU0sT0FBTyxXQUFXO0lBb0N0QixZQUFrRCxRQUFhO1FBQWIsYUFBUSxHQUFSLFFBQVEsQ0FBSztRQWhDckQsaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO1FBRXBEOztXQUVHO1FBQ3FCLG1CQUFjLEdBQUcsQ0FBQyxDQUFDO1FBRTNDOztXQUVHO1FBQ3NCLGVBQVUsR0FBRyxJQUFJLENBQUM7UUFFM0M7O1dBRUc7UUFDc0IsZ0JBQVcsR0FBRyxJQUFJLENBQUM7UUFRbkMsV0FBTSxHQUFHO1lBQ2hCLGFBQWEsRUFBRSxpQkFBaUI7WUFDaEMsWUFBWSxFQUFFLGdCQUFnQjtTQUMvQixDQUFDO1FBRUYsWUFB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QVUsQ0FBQyxHQUFHLEVBQUU7Z0JBQy9CLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUN0QixDQUFDLEVBQUUsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsQ0FBQztTQUNoQztJQUNILENBQUM7O3dHQTNHVSxXQUFXLGtCQW9DVSxRQUFROzRGQXBDN0IsV0FBVyx1VEFxQkwsZ0JBQWdCLHlLQUVuQixvQkFBb0IscUVDdkNwQyxpcUNBV007QURPb0I7SUFBZCxXQUFXLEVBQUU7MkNBQVE7QUFPUDtJQUFkLFdBQVcsRUFBRTttREFBb0I7QUFLbEI7SUFBZixZQUFZLEVBQUU7K0NBQW1CO0FBS2xCO0lBQWYsWUFBWSxFQUFFO2dEQUFvQjsyRkFuQmpDLFdBQVc7a0JBUnZCLFNBQVM7K0JBQ0UsY0FBYyxtQkFFUCx1QkFBdUIsQ0FBQyxNQUFNLFFBQ3pDO3dCQUNKLHVCQUF1QixFQUFFLE1BQU07cUJBQ2hDOzswQkFzQ1ksUUFBUTs7MEJBQUksTUFBTTsyQkFBQyxRQUFROzRDQWxDaEIsTUFBTTtzQkFBN0IsS0FBSztnQkFFSSxZQUFZO3NCQUFyQixNQUFNO2dCQUtpQixjQUFjO3NCQUFyQyxLQUFLO2dCQUttQixVQUFVO3NCQUFsQyxLQUFLO2dCQUttQixXQUFXO3NCQUFuQyxLQUFLO2dCQUU2QixNQUFNO3NCQUF4QyxlQUFlO3VCQUFDLGdCQUFnQjtnQkFFRyxVQUFVO3NCQUE3QyxZQUFZO3VCQUFDLG9CQUFvQjtnQkFFVyxZQUFZO3NCQUF4RCxTQUFTO3VCQUFDLGNBQWMsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7Z0JBRWxDLE1BQU07c0JBQWQsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb250ZW50Q2hpbGRyZW4sIFF1ZXJ5TGlzdCxcbiAgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIE9uQ2hhbmdlcywgVmlld0NoaWxkcmVuLCBTaW1wbGVDaGFuZ2VzLCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIE9wdGlvbmFsLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IExFRlRfQVJST1csIFJJR0hUX0FSUk9XIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2tleWNvZGVzJztcbmltcG9ydCB7IElucHV0Qm9vbGVhbiwgSW5wdXROdW1iZXIgfSBmcm9tICcuLi91dGlsL2NvbnZlcnQnO1xuaW1wb3J0IHsgTmdsQ2Fyb3VzZWxJbWFnZSB9IGZyb20gJy4vY2Fyb3VzZWwtaW1hZ2UnO1xuaW1wb3J0IHsgTmdsQ2Fyb3VzZWxJbmRpY2F0b3IgfSBmcm9tICcuL2Nhcm91c2VsLWluZGljYXRvcic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25nbC1jYXJvdXNlbCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9jYXJvdXNlbC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLnNsZHMtY2Fyb3VzZWxdJzogJ3RydWUnLFxuICB9LFxufSlcbmV4cG9ydCBjbGFzcyBOZ2xDYXJvdXNlbCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG5cbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgYWN0aXZlO1xuXG4gIEBPdXRwdXQoKSBhY3RpdmVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcblxuICAvKipcbiAgICogVGhlIGF1dG8gc2Nyb2xsIGR1cmF0aW9uIGluIHNlY29uZHMuIEFmdGVyIHRoYXQgdGhlIG5leHQgaW1hZ2UgaXMgZGlzcGxheWVkLlxuICAgKi9cbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgc2Nyb2xsRHVyYXRpb24gPSA1O1xuXG4gIC8qKlxuICAgKiBXaGV0aGVyIGF1dG8gc2Nyb2xsIGlzIGVuYWJsZWQuXG4gICAqL1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgYXV0b1Njcm9sbCA9IHRydWU7XG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgdGhlIGNhcm91c2VsIHNob3VsZCBjb250aW51ZSBsb29waW5nIGZyb20gdGhlIGJlZ2lubmluZyBhZnRlciB0aGUgbGFzdCBpdGVtIGlzIGRpc3BsYXllZC5cbiAgICovXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBhdXRvUmVmcmVzaCA9IHRydWU7XG5cbiAgQENvbnRlbnRDaGlsZHJlbihOZ2xDYXJvdXNlbEltYWdlKSBpbWFnZXM6IFF1ZXJ5TGlzdDxOZ2xDYXJvdXNlbEltYWdlPjtcblxuICBAVmlld0NoaWxkcmVuKE5nbENhcm91c2VsSW5kaWNhdG9yKSBpbmRpY2F0b3JzOiBRdWVyeUxpc3Q8TmdsQ2Fyb3VzZWxJbmRpY2F0b3I+O1xuXG4gIEBWaWV3Q2hpbGQoJ2luZGljYXRvcnNFbCcsIHsgc3RhdGljOiB0cnVlIH0pIGluZGljYXRvcnNFbDogRWxlbWVudFJlZjxIVE1MRWxlbWVudD47XG5cbiAgQElucHV0KCkgbGFiZWxzID0ge1xuICAgIHN0YXJ0QXV0b1BsYXk6ICdTdGFydCBhdXRvLXBsYXknLFxuICAgIHN0b3BBdXRvUGxheTogJ1N0b3AgYXV0by1wbGF5JyxcbiAgfTtcblxuICBwbGF5aW5nID0gdHJ1ZTtcblxuICBwcml2YXRlIG5leHRUaW1lciA9IG51bGw7XG5cbiAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2N1bWVudDogYW55KSB7fVxuXG4gIGlzQWN0aXZlKGluZGV4OiBudW1iZXIpIHtcbiAgICByZXR1cm4gaW5kZXggPT09IHRoaXMuYWN0aXZlO1xuICB9XG5cbiAgZ2V0SW1hZ2UoaW5kZXg6IG51bWJlcikge1xuICAgIHJldHVybiB0aGlzLmltYWdlcy50b0FycmF5KClbaW5kZXhdO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIGlmIChjaGFuZ2VzLmFjdGl2ZSkge1xuICAgICAgLy8gRm9jdXMgY29ycmVjdCBpbmRpY2F0b3IgaWYgb25lIGlzIGFscmVhZHkgZm9jdXNlZFxuICAgICAgaWYgKHRoaXMuZG9jdW1lbnQgJiYgdGhpcy5pbmRpY2F0b3JzRWwubmF0aXZlRWxlbWVudC5jb250YWlucyhkb2N1bWVudC5hY3RpdmVFbGVtZW50KSkge1xuICAgICAgICB0aGlzLmluZGljYXRvcnMudG9BcnJheSgpW3RoaXMuYWN0aXZlXS5mb2N1cygpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChjaGFuZ2VzLmFjdGl2ZSB8fCBjaGFuZ2VzLmF1dG9TY3JvbGwgfHwgY2hhbmdlcy5zY3JvbGxEdXJhdGlvbikge1xuICAgICAgLy8gUmVzZXQgdGltZXIgd2hlbiBhY3RpdmUgY2hhbmdlc1xuICAgICAgdGhpcy5zZXRUaW1lcigpO1xuICAgIH1cbiAgfVxuXG4gIG9uSW5kaWNhdG9yQ2xpY2soaW5kZXg6IG51bWJlcikge1xuICAgIHRoaXMuc2V0QWN0aXZlKGluZGV4LCB0cnVlKTtcbiAgfVxuXG4gIG9uS2V5Ym9hcmQoZXZ0OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgaWYgKGV2dC5rZXlDb2RlID09PSBMRUZUX0FSUk9XIHx8IGV2dC5rZXlDb2RlID09PSBSSUdIVF9BUlJPVykge1xuICAgICAgdGhpcy5hY3RpdmF0ZU5leHQoZXZ0LmtleUNvZGUgPT09IExFRlRfQVJST1cpO1xuICAgIH1cbiAgfVxuXG4gIHNldEFjdGl2ZShpbmRleDogbnVtYmVyLCBzdG9wUGxheWluZyA9IGZhbHNlKSB7XG4gICAgaWYgKHN0b3BQbGF5aW5nKSB7XG4gICAgICB0aGlzLnBsYXlpbmcgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5hY3RpdmUgIT09IGluZGV4KSB7XG4gICAgICB0aGlzLmFjdGl2ZUNoYW5nZS5lbWl0KGluZGV4KTtcbiAgICB9XG4gIH1cblxuICB0b2dnbGVQbGF5KCkge1xuICAgIHRoaXMucGxheWluZyA9ICF0aGlzLnBsYXlpbmc7XG4gICAgdGhpcy5zZXRUaW1lcigpO1xuICB9XG5cbiAgcGxheUxhYmVsKCkge1xuICAgIHJldHVybiB0aGlzLmxhYmVsc1t0aGlzLnBsYXlpbmcgPyAnc3RvcEF1dG9QbGF5JyA6ICdzdGFydEF1dG9QbGF5J107XG4gIH1cblxuICBwcml2YXRlIGFjdGl2YXRlTmV4dChyZXZlcnNlID0gZmFsc2UpOiB2b2lkIHtcbiAgICBjb25zdCBhY3RpdmUgPSB0aGlzLmFjdGl2ZSArIChyZXZlcnNlID8gLTEgOiAxKTtcblxuICAgIGlmICgoYWN0aXZlIDwgMCB8fCBhY3RpdmUgPiB0aGlzLmltYWdlcy5sZW5ndGggLSAxKSAmJiAhdGhpcy5hdXRvUmVmcmVzaCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuc2V0QWN0aXZlKCh0aGlzLmltYWdlcy5sZW5ndGggKyBhY3RpdmUpICUgdGhpcy5pbWFnZXMubGVuZ3RoKTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0VGltZXIoKSB7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMubmV4dFRpbWVyKTtcblxuICAgIGlmICh0aGlzLmF1dG9TY3JvbGwgJiYgdGhpcy5wbGF5aW5nKSB7XG4gICAgICB0aGlzLm5leHRUaW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLmFjdGl2YXRlTmV4dCgpO1xuICAgICAgfSwgdGhpcy5zY3JvbGxEdXJhdGlvbiAqIDEwMDApO1xuICAgIH1cbiAgfVxufVxuIiwiXG48ZGl2IGNsYXNzPVwic2xkcy1jYXJvdXNlbF9fc3RhZ2VcIj48c3BhbiBjbGFzcz1cInNsZHMtY2Fyb3VzZWxfX2F1dG9wbGF5XCIgKm5nSWY9XCJhdXRvU2Nyb2xsXCI+XG4gICAgPGJ1dHRvbiBjbGFzcz1cInNsZHMtYnV0dG9uIHNsZHMtYnV0dG9uX2ljb24gc2xkcy1idXR0b25faWNvbi1ib3JkZXItZmlsbGVkIHNsZHMtYnV0dG9uX2ljb24teC1zbWFsbFwiIFthdHRyLmFyaWEtcHJlc3NlZF09XCIhcGxheWluZ1wiIFt0aXRsZV09XCJwbGF5TGFiZWwoKVwiIChjbGljayk9XCJ0b2dnbGVQbGF5KClcIj5cbiAgICAgIDxzdmcgY2xhc3M9XCJzbGRzLWJ1dHRvbl9faWNvblwiIFtuZ2xJY29uTmFtZV09XCJwbGF5aW5nID8gJ3V0aWxpdHk6cGF1c2UnIDogJ3V0aWxpdHk6cmlnaHQnXCI+PC9zdmc+PHNwYW4gY2xhc3M9XCJzbGRzLWFzc2lzdGl2ZS10ZXh0XCI+e3sgcGxheUxhYmVsKCkgfX08L3NwYW4+XG4gICAgPC9idXR0b24+PC9zcGFuPlxuICA8ZGl2IGNsYXNzPVwic2xkcy1jYXJvdXNlbF9fcGFuZWxzXCIgW3N0eWxlLnRyYW5zZm9ybV09XCIndHJhbnNsYXRlWCgnICsgKC1hY3RpdmUgKiAxMDApICsgJyUpJ1wiPlxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgPC9kaXY+XG4gIDx1bCBjbGFzcz1cInNsZHMtY2Fyb3VzZWxfX2luZGljYXRvcnNcIiAjaW5kaWNhdG9yc0VsIHJvbGU9XCJ0YWJsaXN0XCIgKGtleWRvd24pPVwib25LZXlib2FyZCgkZXZlbnQpXCI+XG4gICAgPGxpIGNsYXNzPVwic2xkcy1jYXJvdXNlbF9faW5kaWNhdG9yXCIgKm5nRm9yPVwibGV0IGltYWdlIG9mIGltYWdlczsgbGV0IGkgPSBpbmRleFwiIHJvbGU9XCJwcmVzZW50YXRpb25cIj48YSBjbGFzcz1cInNsZHMtY2Fyb3VzZWxfX2luZGljYXRvci1hY3Rpb25cIiBuZ2xDYXJvdXNlbEluZGljYXRvciBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApO1wiIHJvbGU9XCJ0YWJcIiBbaXNBY3RpdmVdPVwiaXNBY3RpdmUoaSlcIiBbaW1hZ2VdPVwiZ2V0SW1hZ2UoaSlcIiBbYXR0ci5hcmlhLWNvbnRyb2xzXT1cImltYWdlLnVpZFwiIFt0aXRsZV09XCJpbWFnZS5oZWFkZXJcIiAoY2xpY2spPVwib25JbmRpY2F0b3JDbGljayhpKVwiPjxzcGFuIGNsYXNzPVwic2xkcy1hc3Npc3RpdmUtdGV4dFwiPnt7IGltYWdlLmhlYWRlciB9fTwvc3Bhbj48L2E+PC9saT5cbiAgPC91bD5cbjwvZGl2PiJdfQ==
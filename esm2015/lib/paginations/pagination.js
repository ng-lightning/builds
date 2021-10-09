import { __decorate } from "tslib";
import { Component, EventEmitter, Input, Output, ChangeDetectionStrategy } from '@angular/core';
import { InputBoolean } from '../util/convert';
export class NglPagination {
    constructor() {
        this.pages = [];
        this.pageChange = new EventEmitter();
        this.perPage = 10;
        this.limit = 0;
        this.boundaryNumbers = 0;
        this.firstText = 'First';
        this.previousText = 'Previous';
        this.nextText = 'Next';
        this.lastText = 'Last';
        this.boundaryLinks = false;
    }
    set page(page) {
        this.current = +page;
    }
    hasPrevious() {
        return this.current > 1;
    }
    hasNext() {
        return this.current < this.totalPages;
    }
    goto(page) {
        if (page === this.current) {
            return;
        }
        this.pageChange.emit(+page);
    }
    ngOnChanges() {
        this.totalPages = Math.ceil(+this.total / +this.perPage);
        const { start, end } = this.limits();
        this.pages = this.getPageArray(start, end);
        if (this.boundaryNumbers > 0) {
            if (start > 1) {
                const preGap = this.getPageArray(1, Math.min(start - 1, this.boundaryNumbers));
                const lastGapNumber = +preGap[preGap.length - 1].number;
                if (lastGapNumber < start - 1) {
                    this.pages.unshift(this.getGapPage(lastGapNumber, start));
                }
                this.pages.unshift(...preGap);
            }
            if (end < this.totalPages) {
                const postGap = this.getPageArray(Math.max(this.totalPages - this.boundaryNumbers + 1, end + 1), this.totalPages);
                const firstGapNumber = +postGap[0].number;
                if (firstGapNumber > end + 1) {
                    this.pages.push(this.getGapPage(end, firstGapNumber));
                }
                this.pages.push(...postGap);
            }
        }
        if (this.current > this.totalPages) {
            setTimeout(() => this.goto(this.totalPages));
        }
        else if (!this.current && this.totalPages > 0) {
            setTimeout(() => this.goto(1));
        }
    }
    pageTrackBy(index, page) {
        return page.number;
    }
    get start() {
        return Math.min(Math.max(1 + ((+this.current || 1) - 1) * +this.perPage, 0), +this.total);
    }
    get end() {
        return Math.min(this.start + (+this.perPage - 1), +this.total);
    }
    getPageArray(start, end) {
        return Array.apply(null, { length: end - start + 1 }).map((value, index) => this.getPage(start + index));
    }
    getPage(number, disabled = false) {
        return { number, disabled };
    }
    getGapPage(before, after) {
        const isConsecutive = before + 1 === after - 1;
        return this.getPage(isConsecutive ? before + 1 : '...', !isConsecutive);
    }
    /**
     * Calculate first and last visible page numbers
     */
    limits() {
        let start = 1, end = this.totalPages;
        if (this.limit < 1) {
            return { start, end };
        }
        // Current page is displayed in the middle of the visible ones
        start = Math.max(+this.current - Math.floor(+this.limit / 2), 1);
        end = start + +this.limit - 1;
        // Adjust if limit is exceeded
        if (end > this.totalPages) {
            end = this.totalPages;
            start = Math.max(end - +this.limit + 1, 1);
        }
        return { start, end };
    }
}
NglPagination.decorators = [
    { type: Component, args: [{
                selector: 'ngl-pagination',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: "\n<div class=\"slds-button-group\" role=\"group\">\n  <button class=\"slds-button slds-button_neutral\" *ngIf=\"boundaryLinks\" [disabled]=\"!hasPrevious()\" (click)=\"goto(1)\">{{firstText}}</button>\n  <button class=\"slds-button slds-button_neutral\" [disabled]=\"!hasPrevious()\" (click)=\"goto(current - 1)\">{{previousText}}</button>\n  <button class=\"slds-button\" *ngFor=\"let page of pages; trackBy:pageTrackBy\" [ngClass]=\"'slds-button_' + (page.number === current ? 'brand' : 'neutral')\" (click)=\"goto(page.number)\" [disabled]=\"page.disabled\">{{page.number}}</button>\n  <button class=\"slds-button slds-button_neutral\" [disabled]=\"!hasNext()\" (click)=\"goto(current + 1)\">{{nextText}}</button>\n  <button class=\"slds-button slds-button_neutral\" *ngIf=\"boundaryLinks\" [disabled]=\"!hasNext()\" (click)=\"goto(totalPages)\">{{lastText}}</button>\n</div>",
                exportAs: 'nglPagination'
            },] }
];
NglPagination.propDecorators = {
    page: [{ type: Input }],
    pageChange: [{ type: Output }],
    total: [{ type: Input }],
    perPage: [{ type: Input }],
    limit: [{ type: Input }],
    boundaryNumbers: [{ type: Input }],
    firstText: [{ type: Input }],
    previousText: [{ type: Input }],
    nextText: [{ type: Input }],
    lastText: [{ type: Input }],
    boundaryLinks: [{ type: Input }]
};
__decorate([
    InputBoolean()
], NglPagination.prototype, "boundaryLinks", void 0);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nLWxpZ2h0bmluZy9zcmMvbGliL3BhZ2luYXRpb25zL3BhZ2luYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQWEsdUJBQXVCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0csT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBVS9DLE1BQU0sT0FBTyxhQUFhO0lBTjFCO1FBUUUsVUFBSyxHQUFjLEVBQUUsQ0FBQztRQU1aLGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO1FBR3pDLFlBQU8sR0FBb0IsRUFBRSxDQUFDO1FBQzlCLFVBQUssR0FBb0IsQ0FBQyxDQUFDO1FBQzNCLG9CQUFlLEdBQUcsQ0FBQyxDQUFDO1FBQ3BCLGNBQVMsR0FBRyxPQUFPLENBQUM7UUFDcEIsaUJBQVksR0FBRyxVQUFVLENBQUM7UUFDMUIsYUFBUSxHQUFHLE1BQU0sQ0FBQztRQUNsQixhQUFRLEdBQUcsTUFBTSxDQUFDO1FBQ0Ysa0JBQWEsR0FBRyxLQUFLLENBQUM7SUFpR2pELENBQUM7SUE5R0MsSUFBYSxJQUFJLENBQUMsSUFBcUI7UUFDckMsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQztJQUN2QixDQUFDO0lBZUQsV0FBVztRQUNULE9BQU8sSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUVELE9BQU87UUFDTCxPQUFPLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUN4QyxDQUFDO0lBRUQsSUFBSSxDQUFDLElBQVk7UUFDZixJQUFJLElBQUksS0FBSyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQUUsT0FBTztTQUFFO1FBQ3RDLElBQUksQ0FBQyxV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QUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ2pFLEdBQUcsR0FBRyxLQUFLLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUU5Qiw4QkFBOEI7UUFDOUIsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUN6QixHQUFHLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztZQUN0QixLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUM1QztRQUVELE9BQU8sRUFBQyxLQUFLLEVBQUUsR0FBRyxFQUFDLENBQUM7SUFDdEIsQ0FBQzs7O1lBdkhGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsMDNCQUFnQztnQkFDaEMsUUFBUSxFQUFFLGVBQWU7YUFDMUI7OzttQkFNRSxLQUFLO3lCQUdMLE1BQU07b0JBRU4sS0FBSztzQkFDTCxLQUFLO29CQUNMLEtBQUs7OEJBQ0wsS0FBSzt3QkFDTCxLQUFLOzJCQUNMLEtBQUs7dUJBQ0wsS0FBSzt1QkFDTCxLQUFLOzRCQUNMLEtBQUs7O0FBQW1CO0lBQWYsWUFBWSxFQUFFO29EQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0LCBPbkNoYW5nZXMsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4gfSBmcm9tICcuLi91dGlsL2NvbnZlcnQnO1xuXG5leHBvcnQgaW50ZXJmYWNlIE5nbFBhZ2UgeyBudW1iZXI6IG51bWJlciB8IHN0cmluZzsgZGlzYWJsZWQ/OiBib29sZWFuOyB9XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25nbC1wYWdpbmF0aW9uJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHRlbXBsYXRlVXJsOiAnLi9wYWdpbmF0aW9uLmh0bWwnLFxuICBleHBvcnRBczogJ25nbFBhZ2luYXRpb24nLFxufSlcbmV4cG9ydCBjbGFzcyBOZ2xQYWdpbmF0aW9uIGltcGxlbWVudHMgT25DaGFuZ2VzIHtcblxuICBwYWdlczogTmdsUGFnZVtdID0gW107XG5cbiAgY3VycmVudDogbnVtYmVyO1xuICBASW5wdXQoKSBzZXQgcGFnZShwYWdlOiBudW1iZXIgfCBzdHJpbmcpIHtcbiAgICB0aGlzLmN1cnJlbnQgPSArcGFnZTtcbiAgfVxuICBAT3V0cHV0KCkgcGFnZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuXG4gIEBJbnB1dCgpIHRvdGFsOiBudW1iZXIgfCBzdHJpbmc7XG4gIEBJbnB1dCgpIHBlclBhZ2U6IG51bWJlciB8IHN0cmluZyA9IDEwO1xuICBASW5wdXQoKSBsaW1pdDogbnVtYmVyIHwgc3RyaW5nID0gMDtcbiAgQElucHV0KCkgYm91bmRhcnlOdW1iZXJzID0gMDtcbiAgQElucHV0KCkgZmlyc3RUZXh0ID0gJ0ZpcnN0JztcbiAgQElucHV0KCkgcHJldmlvdXNUZXh0ID0gJ1ByZXZpb3VzJztcbiAgQElucHV0KCkgbmV4dFRleHQgPSAnTmV4dCc7XG4gIEBJbnB1dCgpIGxhc3RUZXh0ID0gJ0xhc3QnO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgYm91bmRhcnlMaW5rcyA9IGZhbHNlO1xuXG4gIHRvdGFsUGFnZXM6IG51bWJlcjtcblxuICBoYXNQcmV2aW91cygpIHtcbiAgICByZXR1cm4gdGhpcy5jdXJyZW50ID4gMTtcbiAgfVxuXG4gIGhhc05leHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY3VycmVudCA8IHRoaXMudG90YWxQYWdlcztcbiAgfVxuXG4gIGdvdG8ocGFnZTogbnVtYmVyKSB7XG4gICAgaWYgKHBhZ2UgPT09IHRoaXMuY3VycmVudCkgeyByZXR1cm47IH1cbiAgICB0aGlzLnBhZ2VDaGFuZ2UuZW1pdCgrcGFnZSk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpIHtcbiAgICB0aGlzLnRvdGFsUGFnZXMgPSBNYXRoLmNlaWwoK3RoaXMudG90YWwgLyArdGhpcy5wZXJQYWdlKTtcblxuICAgIGNvbnN0IHsgc3RhcnQsIGVuZCB9ID0gdGhpcy5saW1pdHMoKTtcblxuICAgIHRoaXMucGFnZXMgPSB0aGlzLmdldFBhZ2VBcnJheShzdGFydCwgZW5kKTtcblxuICAgIGlmICh0aGlzLmJvdW5kYXJ5TnVtYmVycyA+IDApIHtcbiAgICAgIGlmIChzdGFydCA+IDEpIHtcbiAgICAgICAgY29uc3QgcHJlR2FwID0gdGhpcy5nZXRQYWdlQXJyYXkoMSwgTWF0aC5taW4oc3RhcnQgLSAxLCB0aGlzLmJvdW5kYXJ5TnVtYmVycykpO1xuICAgICAgICBjb25zdCBsYXN0R2FwTnVtYmVyID0gK3ByZUdhcFtwcmVHYXAubGVuZ3RoIC0gMV0ubnVtYmVyO1xuICAgICAgICBpZiAobGFzdEdhcE51bWJlciA8IHN0YXJ0IC0gMSkge1xuICAgICAgICAgIHRoaXMucGFnZXMudW5zaGlmdCh0aGlzLmdldEdhcFBhZ2UobGFzdEdhcE51bWJlciwgc3RhcnQpKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnBhZ2VzLnVuc2hpZnQoLi4ucHJlR2FwKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGVuZCA8IHRoaXMudG90YWxQYWdlcykge1xuICAgICAgICBjb25zdCBwb3N0R2FwID0gdGhpcy5nZXRQYWdlQXJyYXkoTWF0aC5tYXgodGhpcy50b3RhbFBhZ2VzIC0gdGhpcy5ib3VuZGFyeU51bWJlcnMgKyAxLCBlbmQgKyAxKSwgdGhpcy50b3RhbFBhZ2VzKTtcbiAgICAgICAgY29uc3QgZmlyc3RHYXBOdW1iZXIgPSArcG9zdEdhcFswXS5udW1iZXI7XG4gICAgICAgIGlmIChmaXJzdEdhcE51bWJlciA+IGVuZCArIDEpIHtcbiAgICAgICAgICB0aGlzLnBhZ2VzLnB1c2godGhpcy5nZXRHYXBQYWdlKGVuZCwgZmlyc3RHYXBOdW1iZXIpKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnBhZ2VzLnB1c2goLi4ucG9zdEdhcCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuY3VycmVudCA+IHRoaXMudG90YWxQYWdlcykge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmdvdG8odGhpcy50b3RhbFBhZ2VzKSk7XG4gICAgfSBlbHNlIGlmICghdGhpcy5jdXJyZW50ICYmIHRoaXMudG90YWxQYWdlcyA+IDApIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5nb3RvKDEpKTtcbiAgICB9XG4gIH1cblxuICBwYWdlVHJhY2tCeShpbmRleDogbnVtYmVyLCBwYWdlOiBOZ2xQYWdlKSB7XG4gICAgcmV0dXJuIHBhZ2UubnVtYmVyO1xuICB9XG5cbiAgZ2V0IHN0YXJ0KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIE1hdGgubWluKE1hdGgubWF4KDEgKyAoKCt0aGlzLmN1cnJlbnQgfHwgMSkgLSAxKSAqICt0aGlzLnBlclBhZ2UsIDApLCArdGhpcy50b3RhbCk7XG4gIH1cblxuICBnZXQgZW5kKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIE1hdGgubWluKHRoaXMuc3RhcnQgKyAoK3RoaXMucGVyUGFnZSAtIDEpLCArdGhpcy50b3RhbCk7XG4gIH1cblxuICBwcml2YXRlIGdldFBhZ2VBcnJheShzdGFydDogbnVtYmVyLCBlbmQ6IG51bWJlcikge1xuICAgIHJldHVybiBBcnJheS5hcHBseShudWxsLCB7bGVuZ3RoOiBlbmQgLSBzdGFydCArIDF9KS5tYXAoKHZhbHVlOiBhbnksIGluZGV4OiBudW1iZXIpID0+IHRoaXMuZ2V0UGFnZShzdGFydCArIGluZGV4KSk7XG4gIH1cblxuICBwcml2YXRlIGdldFBhZ2UobnVtYmVyOiBzdHJpbmcgfCBudW1iZXIsIGRpc2FibGVkID0gZmFsc2UpOiBOZ2xQYWdlIHtcbiAgICByZXR1cm4geyBudW1iZXIsIGRpc2FibGVkIH07XG4gIH1cblxuICBwcml2YXRlIGdldEdhcFBhZ2UoYmVmb3JlOiBudW1iZXIsIGFmdGVyOiBudW1iZXIpIHtcbiAgICBjb25zdCBpc0NvbnNlY3V0aXZlID0gYmVmb3JlICsgMSA9PT0gYWZ0ZXIgLSAxO1xuICAgIHJldHVybiB0aGlzLmdldFBhZ2UoaXNDb25zZWN1dGl2ZSA/IGJlZm9yZSArIDEgOiAnLi4uJywgIWlzQ29uc2VjdXRpdmUpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGN1bGF0ZSBmaXJzdCBhbmQgbGFzdCB2aXNpYmxlIHBhZ2UgbnVtYmVyc1xuICAgKi9cbiAgcHJpdmF0ZSBsaW1pdHMoKSB7XG4gICAgbGV0IHN0YXJ0ID0gMSwgZW5kID0gdGhpcy50b3RhbFBhZ2VzO1xuXG4gICAgaWYgKHRoaXMubGltaXQgPCAxKSB7IHJldHVybiB7c3RhcnQsIGVuZH07IH1cblxuICAgIC8vIEN1cnJlbnQgcGFnZSBpcyBkaXNwbGF5ZWQgaW4gdGhlIG1pZGRsZSBvZiB0aGUgdmlzaWJsZSBvbmVzXG4gICAgc3RhcnQgPSBNYXRoLm1heCgrdGhpcy5jdXJyZW50IC0gTWF0aC5mbG9vcigrdGhpcy5saW1pdCAvIDIpLCAxKTtcbiAgICBlbmQgPSBzdGFydCArICt0aGlzLmxpbWl0IC0gMTtcblxuICAgIC8vIEFkanVzdCBpZiBsaW1pdCBpcyBleGNlZWRlZFxuICAgIGlmIChlbmQgPiB0aGlzLnRvdGFsUGFnZXMpIHtcbiAgICAgIGVuZCA9IHRoaXMudG90YWxQYWdlcztcbiAgICAgIHN0YXJ0ID0gTWF0aC5tYXgoZW5kIC0gK3RoaXMubGltaXQgKyAxLCAxKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge3N0YXJ0LCBlbmR9O1xuICB9XG5cbn1cbiJdfQ==
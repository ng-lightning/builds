import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, ViewChildren } from '@angular/core';
import { take } from 'rxjs/operators';
import { split, getToday, isEqualDate, numberOfDaysInMonth, isDisabled } from './util';
import { NglDay } from './day';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "./day";
export class NglDatepickerMonth {
    constructor(ngZone) {
        this.ngZone = ngZone;
        this.dateDisabled = null;
        this.selectDate = new EventEmitter();
    }
    indexTrackBy(index) {
        return index;
    }
    dateTrackBy(index, { year, month, day }) {
        return `${day}-${month}-${year}`;
    }
    onSelect(date) {
        if (date.disabled)
            return;
        this.selectDate.emit(date);
    }
    ngOnChanges(changes) {
        if (changes.year || changes.month || changes.firstDayOfWeek) {
            this.renderView();
            return;
        }
        if (changes.day) {
            this.updateActive();
        }
        if (changes.selected) {
            this.updateSelected();
        }
        if (changes.minDate || changes.maxDate || changes.dateDisabled) {
            this.updateDisabled();
        }
    }
    focusActiveDay() {
        this.ngZone.runOutsideAngular(() => {
            this.ngZone.onStable.asObservable().pipe(take(1)).subscribe(() => {
                const active = this.days.find((d) => d.isActive);
                if (active) {
                    active.focus();
                }
            });
        });
    }
    renderView() {
        const days = this.daysInMonth(this.year, this.month);
        Array.prototype.unshift.apply(days, this.daysInPreviousMonth(this.year, this.month));
        const nextMonth = this.daysInNextMonth(this.year, this.month + 1, days.length);
        if (nextMonth) {
            Array.prototype.push.apply(days, nextMonth);
        }
        this.weeks = split(days);
    }
    daysInMonth(year, month) {
        const last = numberOfDaysInMonth(year, month);
        return this.getDayObjects(year, month, 1, last);
    }
    daysInPreviousMonth(year, month) {
        const firstIndex = (new Date(year, month, 1)).getDay();
        const last = new Date(year, month, 0).getDate();
        const numDays = (7 + firstIndex - this.firstDayOfWeek) % 7;
        return this.getDayObjects(year, month - 1, last - numDays + 1, last, false);
    }
    daysInNextMonth(year, month, numOfDays) {
        if (numOfDays % 7 === 0) {
            return [];
        }
        return this.getDayObjects(year, month, 1, 7 - (numOfDays % 7), false);
    }
    getDayObjects(year, month, from, to, isCurrentMonth = true) {
        const today = getToday();
        const days = [];
        for (let day = from; day <= to; day++) {
            const d = {
                year,
                month,
                day,
                isCurrentMonth,
                today: isEqualDate(today, { year, month, day }),
            };
            d.active = this.isActive(d);
            d.selected = this.isSelected(d);
            d.disabled = this.isDisabled(d);
            days.push(d);
        }
        return days;
    }
    updateActive() {
        this.weeks.forEach((days) => {
            days.forEach(day => {
                day.active = this.isActive(day);
            });
        });
    }
    isActive(day) {
        return day.isCurrentMonth && day.day === this.day;
    }
    updateSelected() {
        this.weeks.forEach((days) => {
            days.forEach((day) => {
                day.selected = this.isSelected(day);
            });
        });
    }
    isSelected(day) {
        return isEqualDate(this.selected, day);
    }
    updateDisabled() {
        this.weeks.forEach((days) => {
            days.forEach(day => {
                day.disabled = this.isDisabled(day);
            });
        });
    }
    /** Date filter for the month */
    isDisabled(d) {
        return !d.isCurrentMonth || isDisabled(d, this.dateDisabled, this.minDate, this.maxDate);
    }
}
NglDatepickerMonth.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglDatepickerMonth, deps: [{ token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component });
NglDatepickerMonth.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: NglDatepickerMonth, selector: "[nglDatepickerMonth]", inputs: { selected: "selected", year: "year", month: "month", day: "day", firstDayOfWeek: "firstDayOfWeek", minDate: "minDate", maxDate: "maxDate", dateDisabled: "dateDisabled" }, outputs: { selectDate: "selectDate" }, viewQueries: [{ propertyName: "days", predicate: NglDay, descendants: true }], usesOnChanges: true, ngImport: i0, template: "\n<tr *ngFor=\"let week of weeks; trackBy:indexTrackBy\">\n  <td *ngFor=\"let date of week; trackBy:dateTrackBy\" [class.slds-is-today]=\"date.today\" [isActive]=\"date.active\" [nglDay]=\"date\" [nglDaySelected]=\"date.selected\" [nglDayDisabled]=\"date.disabled\" (click)=\"onSelect(date)\" role=\"gridcell\"><span class=\"slds-day\">{{ date.day }}</span></td>\n</tr>", dependencies: [{ kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i2.NglDay, selector: "td[nglDay]", inputs: ["nglDay", "nglDayDisabled", "nglDaySelected", "isActive"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglDatepickerMonth, decorators: [{
            type: Component,
            args: [{ selector: '[nglDatepickerMonth]', changeDetection: ChangeDetectionStrategy.OnPush, template: "\n<tr *ngFor=\"let week of weeks; trackBy:indexTrackBy\">\n  <td *ngFor=\"let date of week; trackBy:dateTrackBy\" [class.slds-is-today]=\"date.today\" [isActive]=\"date.active\" [nglDay]=\"date\" [nglDaySelected]=\"date.selected\" [nglDayDisabled]=\"date.disabled\" (click)=\"onSelect(date)\" role=\"gridcell\"><span class=\"slds-day\">{{ date.day }}</span></td>\n</tr>" }]
        }], ctorParameters: function () { return [{ type: i0.NgZone }]; }, propDecorators: { selected: [{
                type: Input
            }], year: [{
                type: Input
            }], month: [{
                type: Input
            }], day: [{
                type: Input
            }], firstDayOfWeek: [{
                type: Input
            }], minDate: [{
                type: Input
            }], maxDate: [{
                type: Input
            }], dateDisabled: [{
                type: Input
            }], selectDate: [{
                type: Output
            }], days: [{
                type: ViewChildren,
                args: [NglDay]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9udGguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1saWdodG5pbmcvc3JjL2xpYi9kYXRlcGlja2Vycy9tb250aC50cyIsIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nLWxpZ2h0bmluZy9zcmMvbGliL2RhdGVwaWNrZXJzL21vbnRoLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSx1QkFBdUIsRUFBRSxZQUFZLEVBQStDLE1BQU0sZUFBZSxDQUFDO0FBQzNKLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN0QyxPQUFPLEVBQW1CLEtBQUssRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFFLFVBQVUsRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUN4RyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sT0FBTyxDQUFDOzs7O0FBZS9CLE1BQU0sT0FBTyxrQkFBa0I7SUF3QjdCLFlBQW9CLE1BQWM7UUFBZCxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBUnpCLGlCQUFZLEdBQW1DLElBQUksQ0FBQztRQUVuRCxlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQW1CLENBQUM7SUFNdEIsQ0FBQztJQUV0QyxZQUFZLENBQUMsS0FBYTtRQUN4QixPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7SUFFRCxXQUFXLENBQUMsS0FBYSxFQUFFLEVBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQWtCO1FBQzVELE9BQU8sR0FBRyxHQUFHLElBQUksS0FBSyxJQUFJLElBQUksRUFBRSxDQUFDO0lBQ25DLENBQUM7SUFFRCxRQUFRLENBQUMsSUFBcUI7UUFDNUIsSUFBSSxJQUFJLENBQUMsUUFBUTtZQUFFLE9BQU87UUFFMUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxD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RUQsZ0NBQWdDO0lBQ3hCLFVBQVUsQ0FBQyxDQUFjO1FBQy9CLE9BQU8sQ0FBQyxDQUFDLENBQUMsY0FBYyxJQUFJLFVBQVUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMzRixDQUFDOzsrR0EzSlUsa0JBQWtCO21HQUFsQixrQkFBa0IsZ1RBb0JmLE1BQU0scUVDdEN0QixtWEFHSzsyRkRlUSxrQkFBa0I7a0JBTjlCLFNBQVM7K0JBRUUsc0JBQXNCLG1CQUVmLHVCQUF1QixDQUFDLE1BQU07NkZBSXRDLFFBQVE7c0JBQWhCLEtBQUs7Z0JBRUcsSUFBSTtzQkFBWixLQUFLO2dCQUVHLEtBQUs7c0JBQWIsS0FBSztnQkFFRyxHQUFHO3NCQUFYLEtBQUs7Z0JBRUcsY0FBYztzQkFBdEIsS0FBSztnQkFFRyxPQUFPO3NCQUFmLEtBQUs7Z0JBRUcsT0FBTztzQkFBZixLQUFLO2dCQUVHLFlBQVk7c0JBQXBCLEtBQUs7Z0JBRUksVUFBVTtzQkFBbkIsTUFBTTtnQkFFZSxJQUFJO3NCQUF6QixZQUFZO3VCQUFDLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIFZpZXdDaGlsZHJlbiwgUXVlcnlMaXN0LCBOZ1pvbmUsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgdGFrZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IE5nbEludGVybmFsRGF0ZSwgc3BsaXQsIGdldFRvZGF5LCBpc0VxdWFsRGF0ZSwgbnVtYmVyT2ZEYXlzSW5Nb250aCwgaXNEaXNhYmxlZCB9IGZyb20gJy4vdXRpbCc7XG5pbXBvcnQgeyBOZ2xEYXkgfSBmcm9tICcuL2RheSc7XG5cbmludGVyZmFjZSBJTmdsRGF5Q2VsbCBleHRlbmRzIE5nbEludGVybmFsRGF0ZSB7XG4gIHRvZGF5OiBib29sZWFuO1xuICBpc0N1cnJlbnRNb250aDogYm9vbGVhbjtcbiAgc2VsZWN0ZWQ/OiBib29sZWFuO1xuICBhY3RpdmU/OiBib29sZWFuO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBhbmd1bGFyLWVzbGludC9jb21wb25lbnQtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICdbbmdsRGF0ZXBpY2tlck1vbnRoXScsXG4gIHRlbXBsYXRlVXJsOiAnLi9tb250aC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIE5nbERhdGVwaWNrZXJNb250aCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG5cbiAgQElucHV0KCkgc2VsZWN0ZWQ6IE5nbEludGVybmFsRGF0ZTtcblxuICBASW5wdXQoKSB5ZWFyOiBudW1iZXI7XG5cbiAgQElucHV0KCkgbW9udGg6IG51bWJlcjtcblxuICBASW5wdXQoKSBkYXk6IG51bWJlcjtcblxuICBASW5wdXQoKSBmaXJzdERheU9mV2VlazogbnVtYmVyO1xuXG4gIEBJbnB1dCgpIG1pbkRhdGU6IE5nbEludGVybmFsRGF0ZTtcblxuICBASW5wdXQoKSBtYXhEYXRlOiBOZ2xJbnRlcm5hbERhdGU7XG5cbiAgQElucHV0KCkgZGF0ZURpc2FibGVkOiAoZGF0ZTogRGF0ZSkgPT4gYm9vbGVhbiB8IG51bGwgPSBudWxsO1xuXG4gIEBPdXRwdXQoKSBzZWxlY3REYXRlID0gbmV3IEV2ZW50RW1pdHRlcjxOZ2xJbnRlcm5hbERhdGU+KCk7XG5cbiAgQFZpZXdDaGlsZHJlbihOZ2xEYXkpIGRheXM6IFF1ZXJ5TGlzdDxOZ2xEYXk+O1xuXG4gIHdlZWtzOiBJTmdsRGF5Q2VsbFtdW107XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZSkge31cblxuICBpbmRleFRyYWNrQnkoaW5kZXg6IG51bWJlcikge1xuICAgIHJldHVybiBpbmRleDtcbiAgfVxuXG4gIGRhdGVUcmFja0J5KGluZGV4OiBudW1iZXIsIHt5ZWFyLCBtb250aCwgZGF5fTogTmdsSW50ZXJuYWxEYXRlKSB7XG4gICAgcmV0dXJuIGAke2RheX0tJHttb250aH0tJHt5ZWFyfWA7XG4gIH1cblxuICBvblNlbGVjdChkYXRlOiBOZ2xJbnRlcm5hbERhdGUpIHtcbiAgICBpZiAoZGF0ZS5kaXNhYmxlZCkgcmV0dXJuO1xuXG4gICAgdGhpcy5zZWxlY3REYXRlLmVtaXQoZGF0ZSk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgaWYgKGNoYW5nZXMueWVhciB8fCBjaGFuZ2VzLm1vbnRoIHx8IGNoYW5nZXMuZmlyc3REYXlPZldlZWspIHtcbiAgICAgIHRoaXMucmVuZGVyVmlldygpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChjaGFuZ2VzLmRheSkge1xuICAgICAgdGhpcy51cGRhdGVBY3RpdmUoKTtcbiAgICB9XG5cbiAgICBpZiAoY2hhbmdlcy5zZWxlY3RlZCkge1xuICAgICAgdGhpcy51cGRhdGVTZWxlY3RlZCgpO1xuICAgIH1cblxuICAgIGlmIChjaGFuZ2VzLm1pbkRhdGUgfHwgY2hhbmdlcy5tYXhEYXRlIHx8IGNoYW5nZXMuZGF0ZURpc2FibGVkKSB7XG4gICAgICB0aGlzLnVwZGF0ZURpc2FibGVkKCk7XG4gICAgfVxuICB9XG5cbiAgZm9jdXNBY3RpdmVEYXkoKSB7XG4gICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgdGhpcy5uZ1pvbmUub25TdGFibGUuYXNPYnNlcnZhYmxlKCkucGlwZSh0YWtlKDEpKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICBjb25zdCBhY3RpdmUgPSB0aGlzLmRheXMuZmluZCgoZCkgPT4gZC5pc0FjdGl2ZSk7XG4gICAgICAgIGlmIChhY3RpdmUpIHtcbiAgICAgICAgICBhY3RpdmUuZm9jdXMoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIHJlbmRlclZpZXcoKSB7XG4gICAgY29uc3QgZGF5cyA9IHRoaXMuZGF5c0luTW9udGgodGhpcy55ZWFyLCB0aGlzLm1vbnRoKTtcblxuICAgIEFycmF5LnByb3RvdHlwZS51bnNoaWZ0LmFwcGx5KGRheXMsIHRoaXMuZGF5c0luUHJldmlvdXNNb250aCh0aGlzLnllYXIsIHRoaXMubW9udGgpKTtcbiAgICBjb25zdCBuZXh0TW9udGggPSB0aGlzLmRheXNJbk5leHRNb250aCh0aGlzLnllYXIsIHRoaXMubW9udGggKyAxLCBkYXlzLmxlbmd0aCk7XG4gICAgaWYgKG5leHRNb250aCkge1xuICAgICAgQXJyYXkucHJvdG90eXBlLnB1c2guYXBwbHkoZGF5cywgbmV4dE1vbnRoKTtcbiAgICB9XG5cbiAgICB0aGlzLndlZWtzID0gc3BsaXQoZGF5cyk7XG4gIH1cblxuICBwcml2YXRlIGRheXNJbk1vbnRoKHllYXI6IG51bWJlciwgbW9udGg6IG51bWJlcikge1xuICAgIGNvbnN0IGxhc3QgPSBudW1iZXJPZkRheXNJbk1vbnRoKHllYXIsIG1vbnRoKTtcbiAgICByZXR1cm4gdGhpcy5nZXREYXlPYmplY3RzKHllYXIsIG1vbnRoLCAxLCBsYXN0KTtcbiAgfVxuXG4gIHByaXZhdGUgZGF5c0luUHJldmlvdXNNb250aCh5ZWFyOiBudW1iZXIsIG1vbnRoOiBudW1iZXIpIHtcbiAgICBjb25zdCBmaXJzdEluZGV4ID0gKG5ldyBEYXRlKHllYXIsIG1vbnRoLCAxKSkuZ2V0RGF5KCk7XG4gICAgY29uc3QgbGFzdCA9IG5ldyBEYXRlKHllYXIsIG1vbnRoLCAwKS5nZXREYXRlKCk7XG4gICAgY29uc3QgbnVtRGF5cyA9ICg3ICsgZmlyc3RJbmRleCAtIHRoaXMuZmlyc3REYXlPZldlZWspICUgNztcblxuICAgIHJldHVybiB0aGlzLmdldERheU9iamVjdHMoeWVhciwgbW9udGggLSAxLCBsYXN0IC0gbnVtRGF5cyArIDEsIGxhc3QsIGZhbHNlKTtcbiAgfVxuXG4gIHByaXZhdGUgZGF5c0luTmV4dE1vbnRoKHllYXI6IG51bWJlciwgbW9udGg6IG51bWJlciwgbnVtT2ZEYXlzOiBudW1iZXIpIHtcbiAgICBpZiAobnVtT2ZEYXlzICUgNyA9PT0gMCkgeyByZXR1cm5bXTsgfVxuICAgIHJldHVybiB0aGlzLmdldERheU9iamVjdHMoeWVhciwgbW9udGgsIDEsIDcgLSAobnVtT2ZEYXlzICUgNyksIGZhbHNlKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0RGF5T2JqZWN0cyh5ZWFyOiBudW1iZXIsIG1vbnRoOiBudW1iZXIsIGZyb206IG51bWJlciwgdG86IG51bWJlciwgaXNDdXJyZW50TW9udGggPSB0cnVlKSB7XG4gICAgY29uc3QgdG9kYXkgPSBnZXRUb2RheSgpO1xuICAgIGNvbnN0IGRheXM6IElOZ2xEYXlDZWxsW10gPSBbXTtcbiAgICBmb3IgKGxldCBkYXkgPSBmcm9tOyBkYXkgPD0gdG87IGRheSsrKSB7XG4gICAgICBjb25zdCBkOiBJTmdsRGF5Q2VsbCA9IHtcbiAgICAgICAgeWVhcixcbiAgICAgICAgbW9udGgsXG4gICAgICAgIGRheSxcbiAgICAgICAgaXNDdXJyZW50TW9udGgsXG4gICAgICAgIHRvZGF5OiBpc0VxdWFsRGF0ZSh0b2RheSwgeyB5ZWFyLCBtb250aCwgZGF5IH0pLFxuICAgICAgfTtcblxuICAgICAgZC5hY3RpdmUgPSB0aGlzLmlzQWN0aXZlKGQpO1xuICAgICAgZC5zZWxlY3RlZCA9IHRoaXMuaXNTZWxlY3RlZChkKTtcbiAgICAgIGQuZGlzYWJsZWQgPSB0aGlzLmlzRGlzYWJsZWQoZCk7XG4gICAgICBkYXlzLnB1c2goZCk7XG4gICAgfVxuICAgIHJldHVybiBkYXlzO1xuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVBY3RpdmUoKSB7XG4gICAgdGhpcy53ZWVrcy5mb3JFYWNoKChkYXlzOiBJTmdsRGF5Q2VsbFtdKSA9PiB7XG4gICAgICBkYXlzLmZvckVhY2goZGF5ID0+IHtcbiAgICAgICAgZGF5LmFjdGl2ZSA9IHRoaXMuaXNBY3RpdmUoZGF5KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBpc0FjdGl2ZShkYXk6IElOZ2xEYXlDZWxsKSB7XG4gICAgcmV0dXJuIGRheS5pc0N1cnJlbnRNb250aCAmJiBkYXkuZGF5ID09PSB0aGlzLmRheTtcbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlU2VsZWN0ZWQoKSB7XG4gICAgdGhpcy53ZWVrcy5mb3JFYWNoKChkYXlzOiBJTmdsRGF5Q2VsbFtdKSA9PiB7XG4gICAgICBkYXlzLmZvckVhY2goKGRheSkgPT4ge1xuICAgICAgICBkYXkuc2VsZWN0ZWQgPSB0aGlzLmlzU2VsZWN0ZWQoZGF5KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBpc1NlbGVjdGVkKGRheTogSU5nbERheUNlbGwpIHtcbiAgICByZXR1cm4gaXNFcXVhbERhdGUodGhpcy5zZWxlY3RlZCwgZGF5KTtcbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlRGlzYWJsZWQoKSB7XG4gICAgdGhpcy53ZWVrcy5mb3JFYWNoKChkYXlzOiBJTmdsRGF5Q2VsbFtdKSA9PiB7XG4gICAgICBkYXlzLmZvckVhY2goZGF5ID0+IHtcbiAgICAgICAgZGF5LmRpc2FibGVkID0gdGhpcy5pc0Rpc2FibGVkKGRheSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKiBEYXRlIGZpbHRlciBmb3IgdGhlIG1vbnRoICovXG4gIHByaXZhdGUgaXNEaXNhYmxlZChkOiBJTmdsRGF5Q2VsbCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhZC5pc0N1cnJlbnRNb250aCB8fCBpc0Rpc2FibGVkKGQsIHRoaXMuZGF0ZURpc2FibGVkLCB0aGlzLm1pbkRhdGUsIHRoaXMubWF4RGF0ZSk7XG4gIH1cbn1cbiIsIlxuPHRyICpuZ0Zvcj1cImxldCB3ZWVrIG9mIHdlZWtzOyB0cmFja0J5OmluZGV4VHJhY2tCeVwiPlxuICA8dGQgKm5nRm9yPVwibGV0IGRhdGUgb2Ygd2VlazsgdHJhY2tCeTpkYXRlVHJhY2tCeVwiIFtjbGFzcy5zbGRzLWlzLXRvZGF5XT1cImRhdGUudG9kYXlcIiBbaXNBY3RpdmVdPVwiZGF0ZS5hY3RpdmVcIiBbbmdsRGF5XT1cImRhdGVcIiBbbmdsRGF5U2VsZWN0ZWRdPVwiZGF0ZS5zZWxlY3RlZFwiIFtuZ2xEYXlEaXNhYmxlZF09XCJkYXRlLmRpc2FibGVkXCIgKGNsaWNrKT1cIm9uU2VsZWN0KGRhdGUpXCIgcm9sZT1cImdyaWRjZWxsXCI+PHNwYW4gY2xhc3M9XCJzbGRzLWRheVwiPnt7IGRhdGUuZGF5IH19PC9zcGFuPjwvdGQ+XG48L3RyPiJdfQ==
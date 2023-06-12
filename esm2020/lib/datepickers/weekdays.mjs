import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class NglDatepickerWeekdays {
    constructor() {
        this.weekdays = [];
    }
    ngOnChanges(changes) {
        this.weekdays = [];
        for (let i = 0; i < 7; i++) {
            const offset = (this.firstDayOfWeek + i) % 7;
            this.weekdays.push({
                id: `weekday-${i}`,
                label: this.dayNamesShort[offset],
                title: this.dayNamesLong[offset],
            });
        }
    }
}
NglDatepickerWeekdays.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglDatepickerWeekdays, deps: [], target: i0.ɵɵFactoryTarget.Component });
NglDatepickerWeekdays.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: NglDatepickerWeekdays, selector: "tr[nglWeekdays]", inputs: { dayNamesShort: "dayNamesShort", dayNamesLong: "dayNamesLong", firstDayOfWeek: "firstDayOfWeek" }, usesOnChanges: true, ngImport: i0, template: "\n<th *ngFor=\"let day of weekdays\" [id]=\"day.id\" scope=\"col\"><abbr [title]=\"day.title\">{{day.label}}</abbr></th>", dependencies: [{ kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglDatepickerWeekdays, decorators: [{
            type: Component,
            args: [{ selector: 'tr[nglWeekdays]', changeDetection: ChangeDetectionStrategy.OnPush, template: "\n<th *ngFor=\"let day of weekdays\" [id]=\"day.id\" scope=\"col\"><abbr [title]=\"day.title\">{{day.label}}</abbr></th>" }]
        }], propDecorators: { dayNamesShort: [{
                type: Input
            }], dayNamesLong: [{
                type: Input
            }], firstDayOfWeek: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2Vla2RheXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1saWdodG5pbmcvc3JjL2xpYi9kYXRlcGlja2Vycy93ZWVrZGF5cy50cyIsIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nLWxpZ2h0bmluZy9zcmMvbGliL2RhdGVwaWNrZXJzL3dlZWtkYXlzLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsdUJBQXVCLEVBQWEsTUFBTSxlQUFlLENBQUM7OztBQVFyRixNQUFNLE9BQU8scUJBQXFCO0lBTmxDO1FBWUUsYUFBUSxHQUFVLEVBQUUsQ0FBQztLQWF0QjtJQVhDLFdBQVcsQ0FBQyxPQUFhO1FBQ3ZCLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ25CLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDMUIsTUFBTSxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsY0FBYyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUM3QyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztnQkFDakIsRUFBRSxFQUFFLFdBQVcsQ0FBQyxFQUFFO2dCQUNsQixLQUFLLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUM7Z0JBQ2pDLEtBQUssRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQzthQUNqQyxDQUFDLENBQUM7U0FDSjtJQUNILENBQUM7O2tIQWxCVSxxQkFBcUI7c0dBQXJCLHFCQUFxQix3TENSbEMsMEhBQzhHOzJGRE9qRyxxQkFBcUI7a0JBTmpDLFNBQVM7K0JBRUUsaUJBQWlCLG1CQUVWLHVCQUF1QixDQUFDLE1BQU07OEJBSXRDLGFBQWE7c0JBQXJCLEtBQUs7Z0JBQ0csWUFBWTtzQkFBcEIsS0FBSztnQkFDRyxjQUFjO3NCQUF0QixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIE9uQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBhbmd1bGFyLWVzbGludC9jb21wb25lbnQtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICd0cltuZ2xXZWVrZGF5c10nLFxuICB0ZW1wbGF0ZVVybDogJy4vd2Vla2RheXMuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBOZ2xEYXRlcGlja2VyV2Vla2RheXMgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuXG4gIEBJbnB1dCgpIGRheU5hbWVzU2hvcnQ6IHN0cmluZ1tdO1xuICBASW5wdXQoKSBkYXlOYW1lc0xvbmc6IHN0cmluZ1tdO1xuICBASW5wdXQoKSBmaXJzdERheU9mV2VlazogbnVtYmVyO1xuXG4gIHdlZWtkYXlzOiBhbnlbXSA9IFtdO1xuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM/OiBhbnkpIHtcbiAgICB0aGlzLndlZWtkYXlzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA3OyBpKyspIHtcbiAgICAgIGNvbnN0IG9mZnNldCA9ICh0aGlzLmZpcnN0RGF5T2ZXZWVrICsgaSkgJSA3O1xuICAgICAgdGhpcy53ZWVrZGF5cy5wdXNoKHtcbiAgICAgICAgaWQ6IGB3ZWVrZGF5LSR7aX1gLFxuICAgICAgICBsYWJlbDogdGhpcy5kYXlOYW1lc1Nob3J0W29mZnNldF0sXG4gICAgICAgIHRpdGxlOiB0aGlzLmRheU5hbWVzTG9uZ1tvZmZzZXRdLFxuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG4iLCJcbjx0aCAqbmdGb3I9XCJsZXQgZGF5IG9mIHdlZWtkYXlzXCIgW2lkXT1cImRheS5pZFwiIHNjb3BlPVwiY29sXCI+PGFiYnIgW3RpdGxlXT1cImRheS50aXRsZVwiPnt7ZGF5LmxhYmVsfX08L2FiYnI+PC90aD4iXX0=
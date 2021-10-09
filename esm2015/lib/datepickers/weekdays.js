import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
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
NglDatepickerWeekdays.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'tr[nglWeekdays]',
                template: "\n<th *ngFor=\"let day of weekdays\" [id]=\"day.id\" scope=\"col\"><abbr [title]=\"day.title\">{{day.label}}</abbr></th>",
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
NglDatepickerWeekdays.propDecorators = {
    dayNamesShort: [{ type: Input }],
    dayNamesLong: [{ type: Input }],
    firstDayOfWeek: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2Vla2RheXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1saWdodG5pbmcvc3JjL2xpYi9kYXRlcGlja2Vycy93ZWVrZGF5cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSx1QkFBdUIsRUFBYSxNQUFNLGVBQWUsQ0FBQztBQVFyRixNQUFNLE9BQU8scUJBQXFCO0lBTmxDO1FBWUUsYUFBUSxHQUFVLEVBQUUsQ0FBQztJQWF2QixDQUFDO0lBWEMsV0FBVyxDQUFDLE9BQWE7UUFDdkIsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7UUFDbkIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUMxQixNQUFNLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxjQUFjLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQzdDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO2dCQUNqQixFQUFFLEVBQUUsV0FBVyxDQUFDLEVBQUU7Z0JBQ2xCLEtBQUssRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQztnQkFDakMsS0FBSyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDO2FBQ2pDLENBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQzs7O1lBeEJGLFNBQVMsU0FBQztnQkFDVCw4Q0FBOEM7Z0JBQzlDLFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLG9JQUE4QjtnQkFDOUIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDaEQ7Ozs0QkFHRSxLQUFLOzJCQUNMLEtBQUs7NkJBQ0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBPbkNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICd0cltuZ2xXZWVrZGF5c10nLFxuICB0ZW1wbGF0ZVVybDogJy4vd2Vla2RheXMuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBOZ2xEYXRlcGlja2VyV2Vla2RheXMgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuXG4gIEBJbnB1dCgpIGRheU5hbWVzU2hvcnQ6IHN0cmluZ1tdO1xuICBASW5wdXQoKSBkYXlOYW1lc0xvbmc6IHN0cmluZ1tdO1xuICBASW5wdXQoKSBmaXJzdERheU9mV2VlazogbnVtYmVyO1xuXG4gIHdlZWtkYXlzOiBhbnlbXSA9IFtdO1xuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM/OiBhbnkpIHtcbiAgICB0aGlzLndlZWtkYXlzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA3OyBpKyspIHtcbiAgICAgIGNvbnN0IG9mZnNldCA9ICh0aGlzLmZpcnN0RGF5T2ZXZWVrICsgaSkgJSA3O1xuICAgICAgdGhpcy53ZWVrZGF5cy5wdXNoKHtcbiAgICAgICAgaWQ6IGB3ZWVrZGF5LSR7aX1gLFxuICAgICAgICBsYWJlbDogdGhpcy5kYXlOYW1lc1Nob3J0W29mZnNldF0sXG4gICAgICAgIHRpdGxlOiB0aGlzLmRheU5hbWVzTG9uZ1tvZmZzZXRdLFxuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG4iXX0=
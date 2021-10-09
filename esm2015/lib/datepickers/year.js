import { __decorate } from "tslib";
import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { uniqueId } from '../util/util';
import { InputNumber } from '../util/convert';
export class NglDatepickerYear {
    constructor() {
        this.uid = uniqueId('datepicker_year');
        this.yearChange = new EventEmitter();
    }
    change($event) {
        this.yearChange.emit($event);
    }
    ngOnChanges() {
        this.range = this.getRange();
    }
    getRange() {
        const minYear = Math.min(this.from.year, this.year);
        const maxYear = Math.max(this.to.year, this.year);
        const size = maxYear - minYear;
        return Array.apply(null, { length: size + 1 }).map((value, index) => minYear + index);
    }
}
NglDatepickerYear.decorators = [
    { type: Component, args: [{
                selector: 'ngl-date-year',
                template: "\n<label class=\"slds-assistive-text\" [attr.for]=\"uid\">Pick a Year</label>\n<div class=\"slds-select_container\">\n  <select class=\"slds-select\" [id]=\"uid\" [ngModel]=\"year\" (ngModelChange)=\"change($event)\">\n    <option *ngFor=\"let yr of range\" [value]=\"yr\">{{yr}}</option>\n  </select>\n</div>",
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
NglDatepickerYear.propDecorators = {
    from: [{ type: Input }],
    to: [{ type: Input }],
    year: [{ type: Input }],
    yearChange: [{ type: Output }]
};
__decorate([
    InputNumber()
], NglDatepickerYear.prototype, "year", void 0);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieWVhci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nLWxpZ2h0bmluZy9zcmMvbGliL2RhdGVwaWNrZXJzL3llYXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsdUJBQXVCLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFDM0csT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUN4QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFROUMsTUFBTSxPQUFPLGlCQUFpQjtJQUw5QjtRQU9FLFFBQUcsR0FBRyxRQUFRLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQU14QixlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQW1CNUMsQ0FBQztJQWZDLE1BQU0sQ0FBQyxNQUFjO1FBQ25CLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDL0IsQ0FBQztJQUVPLFFBQVE7UUFDZCxNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwRCxNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNsRCxNQUFNLElBQUksR0FBRyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQy9CLE9BQU8sS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBVSxFQUFFLEtBQWEsRUFBRSxFQUFFLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxDQUFDO0lBQ3JHLENBQUM7OztZQTlCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGVBQWU7Z0JBQ3pCLGlVQUEwQjtnQkFDMUIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDaEQ7OzttQkFLRSxLQUFLO2lCQUNMLEtBQUs7bUJBRUwsS0FBSzt5QkFDTCxNQUFNOztBQURpQjtJQUFkLFdBQVcsRUFBRTsrQ0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgT25DaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyB1bmlxdWVJZCB9IGZyb20gJy4uL3V0aWwvdXRpbCc7XG5pbXBvcnQgeyBJbnB1dE51bWJlciB9IGZyb20gJy4uL3V0aWwvY29udmVydCc7XG5pbXBvcnQgeyBOZ2xJbnRlcm5hbERhdGUgfSBmcm9tICcuL3V0aWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZ2wtZGF0ZS15ZWFyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3llYXIuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBOZ2xEYXRlcGlja2VyWWVhciBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG5cbiAgdWlkID0gdW5pcXVlSWQoJ2RhdGVwaWNrZXJfeWVhcicpO1xuXG4gIEBJbnB1dCgpIGZyb206IE5nbEludGVybmFsRGF0ZTtcbiAgQElucHV0KCkgdG86IE5nbEludGVybmFsRGF0ZTtcblxuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSB5ZWFyOiBudW1iZXI7XG4gIEBPdXRwdXQoKSB5ZWFyQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIHJhbmdlOiBudW1iZXJbXTtcblxuICBjaGFuZ2UoJGV2ZW50OiBzdHJpbmcpIHtcbiAgICB0aGlzLnllYXJDaGFuZ2UuZW1pdCgkZXZlbnQpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKSB7XG4gICAgdGhpcy5yYW5nZSA9IHRoaXMuZ2V0UmFuZ2UoKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0UmFuZ2UoKTogbnVtYmVyW10ge1xuICAgIGNvbnN0IG1pblllYXIgPSBNYXRoLm1pbih0aGlzLmZyb20ueWVhciwgdGhpcy55ZWFyKTtcbiAgICBjb25zdCBtYXhZZWFyID0gTWF0aC5tYXgodGhpcy50by55ZWFyLCB0aGlzLnllYXIpO1xuICAgIGNvbnN0IHNpemUgPSBtYXhZZWFyIC0gbWluWWVhcjtcbiAgICByZXR1cm4gQXJyYXkuYXBwbHkobnVsbCwgeyBsZW5ndGg6IHNpemUgKyAxIH0pLm1hcCgodmFsdWU6IGFueSwgaW5kZXg6IG51bWJlcikgPT4gbWluWWVhciArIGluZGV4KTtcbiAgfVxuXG59XG4iXX0=
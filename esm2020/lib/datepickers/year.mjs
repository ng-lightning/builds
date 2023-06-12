import { __decorate } from "tslib";
import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { uniqueId } from '../util/util';
import { InputNumber } from '../util/convert';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
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
NglDatepickerYear.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglDatepickerYear, deps: [], target: i0.ɵɵFactoryTarget.Component });
NglDatepickerYear.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: NglDatepickerYear, selector: "ngl-date-year", inputs: { from: "from", to: "to", year: "year" }, outputs: { yearChange: "yearChange" }, usesOnChanges: true, ngImport: i0, template: "\n<label class=\"slds-assistive-text\" [attr.for]=\"uid\">Pick a Year</label>\n<div class=\"slds-select_container\">\n  <select class=\"slds-select\" [id]=\"uid\" [ngModel]=\"year\" (ngModelChange)=\"change($event)\">\n    <option *ngFor=\"let yr of range\" [value]=\"yr\">{{yr}}</option>\n  </select>\n</div>", dependencies: [{ kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i2.NgSelectOption, selector: "option", inputs: ["ngValue", "value"] }, { kind: "directive", type: i2.ɵNgSelectMultipleOption, selector: "option", inputs: ["ngValue", "value"] }, { kind: "directive", type: i2.SelectControlValueAccessor, selector: "select:not([multiple])[formControlName],select:not([multiple])[formControl],select:not([multiple])[ngModel]", inputs: ["compareWith"] }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
__decorate([
    InputNumber()
], NglDatepickerYear.prototype, "year", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglDatepickerYear, decorators: [{
            type: Component,
            args: [{ selector: 'ngl-date-year', changeDetection: ChangeDetectionStrategy.OnPush, template: "\n<label class=\"slds-assistive-text\" [attr.for]=\"uid\">Pick a Year</label>\n<div class=\"slds-select_container\">\n  <select class=\"slds-select\" [id]=\"uid\" [ngModel]=\"year\" (ngModelChange)=\"change($event)\">\n    <option *ngFor=\"let yr of range\" [value]=\"yr\">{{yr}}</option>\n  </select>\n</div>" }]
        }], propDecorators: { from: [{
                type: Input
            }], to: [{
                type: Input
            }], year: [{
                type: Input
            }], yearChange: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieWVhci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nLWxpZ2h0bmluZy9zcmMvbGliL2RhdGVwaWNrZXJzL3llYXIudHMiLCIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1saWdodG5pbmcvc3JjL2xpYi9kYXRlcGlja2Vycy95ZWFyLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsdUJBQXVCLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFDM0csT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUN4QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0saUJBQWlCLENBQUM7Ozs7QUFROUMsTUFBTSxPQUFPLGlCQUFpQjtJQUw5QjtRQU9FLFFBQUcsR0FBRyxRQUFRLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQU14QixlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztLQW1CM0M7SUFmQyxNQUFNLENBQUMsTUFBYztRQUNuQixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQy9CLENBQUM7SUFFTyxRQUFRO1FBQ2QsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEQsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEQsTUFBTSxJQUFJLEdBQUcsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUMvQixPQUFPLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQVUsRUFBRSxLQUFhLEVBQUUsRUFBRSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsQ0FBQztJQUNyRyxDQUFDOzs4R0F6QlUsaUJBQWlCO2tHQUFqQixpQkFBaUIsbUtDVjlCLHVUQU1NO0FEV29CO0lBQWQsV0FBVyxFQUFFOytDQUFjOzJGQVAxQixpQkFBaUI7a0JBTDdCLFNBQVM7K0JBQ0UsZUFBZSxtQkFFUix1QkFBdUIsQ0FBQyxNQUFNOzhCQU10QyxJQUFJO3NCQUFaLEtBQUs7Z0JBQ0csRUFBRTtzQkFBVixLQUFLO2dCQUVrQixJQUFJO3NCQUEzQixLQUFLO2dCQUNJLFVBQVU7c0JBQW5CLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIE9uQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgdW5pcXVlSWQgfSBmcm9tICcuLi91dGlsL3V0aWwnO1xuaW1wb3J0IHsgSW5wdXROdW1iZXIgfSBmcm9tICcuLi91dGlsL2NvbnZlcnQnO1xuaW1wb3J0IHsgTmdsSW50ZXJuYWxEYXRlIH0gZnJvbSAnLi91dGlsJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmdsLWRhdGUteWVhcicsXG4gIHRlbXBsYXRlVXJsOiAnLi95ZWFyLmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgTmdsRGF0ZXBpY2tlclllYXIgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuXG4gIHVpZCA9IHVuaXF1ZUlkKCdkYXRlcGlja2VyX3llYXInKTtcblxuICBASW5wdXQoKSBmcm9tOiBOZ2xJbnRlcm5hbERhdGU7XG4gIEBJbnB1dCgpIHRvOiBOZ2xJbnRlcm5hbERhdGU7XG5cbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgeWVhcjogbnVtYmVyO1xuICBAT3V0cHV0KCkgeWVhckNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICByYW5nZTogbnVtYmVyW107XG5cbiAgY2hhbmdlKCRldmVudDogc3RyaW5nKSB7XG4gICAgdGhpcy55ZWFyQ2hhbmdlLmVtaXQoJGV2ZW50KTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCkge1xuICAgIHRoaXMucmFuZ2UgPSB0aGlzLmdldFJhbmdlKCk7XG4gIH1cblxuICBwcml2YXRlIGdldFJhbmdlKCk6IG51bWJlcltdIHtcbiAgICBjb25zdCBtaW5ZZWFyID0gTWF0aC5taW4odGhpcy5mcm9tLnllYXIsIHRoaXMueWVhcik7XG4gICAgY29uc3QgbWF4WWVhciA9IE1hdGgubWF4KHRoaXMudG8ueWVhciwgdGhpcy55ZWFyKTtcbiAgICBjb25zdCBzaXplID0gbWF4WWVhciAtIG1pblllYXI7XG4gICAgcmV0dXJuIEFycmF5LmFwcGx5KG51bGwsIHsgbGVuZ3RoOiBzaXplICsgMSB9KS5tYXAoKHZhbHVlOiBhbnksIGluZGV4OiBudW1iZXIpID0+IG1pblllYXIgKyBpbmRleCk7XG4gIH1cblxufVxuIiwiXG48bGFiZWwgY2xhc3M9XCJzbGRzLWFzc2lzdGl2ZS10ZXh0XCIgW2F0dHIuZm9yXT1cInVpZFwiPlBpY2sgYSBZZWFyPC9sYWJlbD5cbjxkaXYgY2xhc3M9XCJzbGRzLXNlbGVjdF9jb250YWluZXJcIj5cbiAgPHNlbGVjdCBjbGFzcz1cInNsZHMtc2VsZWN0XCIgW2lkXT1cInVpZFwiIFtuZ01vZGVsXT1cInllYXJcIiAobmdNb2RlbENoYW5nZSk9XCJjaGFuZ2UoJGV2ZW50KVwiPlxuICAgIDxvcHRpb24gKm5nRm9yPVwibGV0IHlyIG9mIHJhbmdlXCIgW3ZhbHVlXT1cInlyXCI+e3t5cn19PC9vcHRpb24+XG4gIDwvc2VsZWN0PlxuPC9kaXY+Il19
import { __decorate } from "tslib";
import { Directive, Input, Output, EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { InputBoolean } from '../util/convert';
import * as i0 from "@angular/core";
export class NglPick {
    constructor() {
        this.values = new BehaviorSubject(null);
        this.nglPickChange = new EventEmitter();
        this.nglOptionDestroyed = new EventEmitter();
        this.isMultiple = false;
    }
    set setSelected(selected) {
        this.selected = selected;
        this.ngAfterContentInit();
    }
    ngAfterContentInit() {
        this.values.next(this.selected);
    }
    selectOption(value) {
        let next;
        if (this.isMultiple) {
            if (Array.isArray(this.selected)) {
                // Remove if already there or add to selection
                const index = this.selected.indexOf(value);
                next = index > -1
                    ? [...this.selected.slice(0, index), ...this.selected.slice(index + 1)]
                    : [...this.selected, value];
            }
            else {
                next = Object.assign({}, this.selected, { [value]: !this.selected[value] });
            }
        }
        else {
            next = value;
        }
        this.nglPickChange.emit(next);
    }
    optionRemoved(value) {
        if (this.isMultiple && !this.selected) {
            return;
        }
        let emit;
        if (this.isMultiple) {
            emit = Array.isArray(this.selected) ? this.selected.indexOf(value) > -1 : !!this.selected[value];
        }
        else {
            emit = this.selected === value;
        }
        if (emit) {
            setTimeout(() => this.nglOptionDestroyed.emit(value));
        }
    }
}
NglPick.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglPick, deps: [], target: i0.ɵɵFactoryTarget.Directive });
NglPick.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.2.9", type: NglPick, selector: "[nglPick]", inputs: { setSelected: ["nglPick", "setSelected"], nglPickActiveClass: "nglPickActiveClass", isMultiple: ["nglPickMultiple", "isMultiple"] }, outputs: { nglPickChange: "nglPickChange", nglOptionDestroyed: "nglOptionDestroyed" }, ngImport: i0 });
__decorate([
    InputBoolean()
], NglPick.prototype, "isMultiple", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglPick, decorators: [{
            type: Directive,
            args: [{
                    selector: '[nglPick]',
                }]
        }], propDecorators: { setSelected: [{
                type: Input,
                args: ['nglPick']
            }], nglPickActiveClass: [{
                type: Input
            }], nglPickChange: [{
                type: Output
            }], nglOptionDestroyed: [{
                type: Output
            }], isMultiple: [{
                type: Input,
                args: ['nglPickMultiple']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGljay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nLWxpZ2h0bmluZy9zcmMvbGliL3BpY2svcGljay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBb0IsTUFBTSxlQUFlLENBQUM7QUFDekYsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN2QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7O0FBSy9DLE1BQU0sT0FBTyxPQUFPO0lBSHBCO1FBTUUsV0FBTSxHQUFHLElBQUksZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBU3pCLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNuQyx1QkFBa0IsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBRVIsZUFBVSxHQUFHLEtBQUssQ0FBQztLQTBDOUQ7SUFwREMsSUFBc0IsV0FBVyxDQUFDLFFBQWdCO1FBQ2hELElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFTRCxrQkFBa0I7UUFDaEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFFRCxZQUFZLENBQUMsS0FBVTtRQUNyQixJQUFJLElBQVMsQ0FBQztRQUNkLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNuQixJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFO2dCQUNoQyw4Q0FBOEM7Z0JBQzlDLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUMzQyxJQUFJLEdBQUcsS0FBSyxHQUFHLENBQUMsQ0FBQztvQkFDVCxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQztvQkFDdkUsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFDO2FBQ3JDO2lCQUFNO2dCQUNMLElBQUksR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQUMsQ0FBQyxDQUFDO2FBQzNFO1NBQ0Y7YUFBTTtZQUNMLElBQUksR0FBRyxLQUFLLENBQUM7U0FDZDtRQUVELElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFFRCxhQUFhLENBQUMsS0FBVTtRQUN0QixJQUFJLElBQUksQ0FBQyxVQUFVLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ3JDLE9BQU87U0FDUjtRQUVELElBQUksSUFBYSxDQUFDO1FBRWxCLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNuQixJQUFJLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNsRzthQUFNO1lBQ0wsSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLEtBQUssS0FBSyxDQUFDO1NBQ2hDO1FBRUQsSUFBSSxJQUFJLEVBQUU7WUFDUixVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1NBQ3ZEO0lBQ0gsQ0FBQzs7b0dBeERVLE9BQU87d0ZBQVAsT0FBTztBQWV3QjtJQUFmLFlBQVksRUFBRTsyQ0FBb0I7MkZBZmxELE9BQU87a0JBSG5CLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLFdBQVc7aUJBQ3RCOzhCQU11QixXQUFXO3NCQUFoQyxLQUFLO3VCQUFDLFNBQVM7Z0JBS1Asa0JBQWtCO3NCQUExQixLQUFLO2dCQUVJLGFBQWE7c0JBQXRCLE1BQU07Z0JBQ0csa0JBQWtCO3NCQUEzQixNQUFNO2dCQUVtQyxVQUFVO3NCQUFuRCxLQUFLO3VCQUFDLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBBZnRlckNvbnRlbnRJbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IElucHV0Qm9vbGVhbiB9IGZyb20gJy4uL3V0aWwvY29udmVydCc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tuZ2xQaWNrXScsXG59KVxuZXhwb3J0IGNsYXNzIE5nbFBpY2sgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0IHtcblxuICBzZWxlY3RlZDogYW55O1xuICB2YWx1ZXMgPSBuZXcgQmVoYXZpb3JTdWJqZWN0KG51bGwpO1xuXG4gIEBJbnB1dCgnbmdsUGljaycpIHNldCBzZXRTZWxlY3RlZChzZWxlY3RlZDogc3RyaW5nKSB7XG4gICAgdGhpcy5zZWxlY3RlZCA9IHNlbGVjdGVkO1xuICAgIHRoaXMubmdBZnRlckNvbnRlbnRJbml0KCk7XG4gIH1cblxuICBASW5wdXQoKSBuZ2xQaWNrQWN0aXZlQ2xhc3M6IHN0cmluZztcblxuICBAT3V0cHV0KCkgbmdsUGlja0NoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIG5nbE9wdGlvbkRlc3Ryb3llZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBASW5wdXQoJ25nbFBpY2tNdWx0aXBsZScpIEBJbnB1dEJvb2xlYW4oKSBpc011bHRpcGxlID0gZmFsc2U7XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAgIHRoaXMudmFsdWVzLm5leHQodGhpcy5zZWxlY3RlZCk7XG4gIH1cblxuICBzZWxlY3RPcHRpb24odmFsdWU6IGFueSkge1xuICAgIGxldCBuZXh0OiBhbnk7XG4gICAgaWYgKHRoaXMuaXNNdWx0aXBsZSkge1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkodGhpcy5zZWxlY3RlZCkpIHtcbiAgICAgICAgLy8gUmVtb3ZlIGlmIGFscmVhZHkgdGhlcmUgb3IgYWRkIHRvIHNlbGVjdGlvblxuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuc2VsZWN0ZWQuaW5kZXhPZih2YWx1ZSk7XG4gICAgICAgIG5leHQgPSBpbmRleCA+IC0xXG4gICAgICAgICAgICAgICAgPyBbLi4udGhpcy5zZWxlY3RlZC5zbGljZSgwLCBpbmRleCksIC4uLnRoaXMuc2VsZWN0ZWQuc2xpY2UoaW5kZXggKyAxKV1cbiAgICAgICAgICAgICAgICA6IFsuLi50aGlzLnNlbGVjdGVkLCB2YWx1ZV07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXh0ID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5zZWxlY3RlZCwge1t2YWx1ZV06ICF0aGlzLnNlbGVjdGVkW3ZhbHVlXX0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBuZXh0ID0gdmFsdWU7XG4gICAgfVxuXG4gICAgdGhpcy5uZ2xQaWNrQ2hhbmdlLmVtaXQobmV4dCk7XG4gIH1cblxuICBvcHRpb25SZW1vdmVkKHZhbHVlOiBhbnkpIHtcbiAgICBpZiAodGhpcy5pc011bHRpcGxlICYmICF0aGlzLnNlbGVjdGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IGVtaXQ6IGJvb2xlYW47XG5cbiAgICBpZiAodGhpcy5pc011bHRpcGxlKSB7XG4gICAgICBlbWl0ID0gQXJyYXkuaXNBcnJheSh0aGlzLnNlbGVjdGVkKSA/IHRoaXMuc2VsZWN0ZWQuaW5kZXhPZih2YWx1ZSkgPiAtMSA6ICEhdGhpcy5zZWxlY3RlZFt2YWx1ZV07XG4gICAgfSBlbHNlIHtcbiAgICAgIGVtaXQgPSB0aGlzLnNlbGVjdGVkID09PSB2YWx1ZTtcbiAgICB9XG5cbiAgICBpZiAoZW1pdCkge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLm5nbE9wdGlvbkRlc3Ryb3llZC5lbWl0KHZhbHVlKSk7XG4gICAgfVxuICB9XG59XG4iXX0=
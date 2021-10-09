import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { _isNumberValue } from '@angular/cdk/coercion';
import { getHexFromRgb, getRgbFromHex, isValidHex } from '../../util';
import { uniqueId } from '../../../util/util';
export class NglColorpickerInputs {
    constructor() {
        this.hexChange = new EventEmitter();
        this.red = 0;
        this.green = 0;
        this.blue = 0;
        this.uid = uniqueId('colorpicker-inputs');
    }
    set hex(hex) {
        if (hex) {
            this._hex = hex;
            const { red, green, blue } = getRgbFromHex(this.hex);
            this.red = red;
            this.green = green;
            this.blue = blue;
        }
    }
    get hex() {
        return this._hex;
    }
    updateHex(value) {
        const isValid = isValidHex(value);
        if (!isValid) {
            this.red = this.green = this.blue = null;
        }
        this.hexChange.emit(isValid ? value : null);
    }
    onRGB(key, value) {
        this[key] = value;
        const hex = this.isRGBValid() ? getHexFromRgb({ red: this.red, green: this.green, blue: this.blue }) : null;
        this.hexChange.emit(hex);
    }
    get isHexInvalid() {
        return this.red === null && this.green === null && this.blue === null;
    }
    isColorNumberValid(key) {
        const value = this[key];
        return _isNumberValue(value) && value >= 0 && value <= 255;
    }
    isRGBValid() {
        return ['red', 'green', 'blue'].every((prop) => this.isColorNumberValid(prop));
    }
}
NglColorpickerInputs.decorators = [
    { type: Component, args: [{
                selector: 'ngl-colorpicker-inputs',
                template: "\n<div class=\"slds-color-picker__custom-inputs\">\n  <div class=\"slds-form-element slds-color-picker__input-custom-hex\" [class.slds-has-error]=\"isHexInvalid\">\n    <label class=\"slds-form-element__label\" [attr.for]=\"uid + 'hex'\">Hex</label>\n    <div class=\"slds-form-element__control\">\n      <input class=\"slds-input\" [id]=\"uid + 'hex'\" type=\"text\" maxlength=\"7\" [value]=\"hex\" (input)=\"updateHex($event.target.value)\">\n    </div>\n  </div>\n  <div class=\"slds-form-element\" [class.slds-has-error]=\"!isColorNumberValid('red')\">\n    <label class=\"slds-form-element__label\" [attr.for]=\"uid + 'red'\"><abbr title=\"red\">R</abbr></label>\n    <div class=\"slds-form-element__control\">\n      <input class=\"slds-input\" [id]=\"uid + 'red'\" type=\"text\" maxlength=\"3\" [value]=\"red\" (input)=\"onRGB('red', $event.target.value)\">\n    </div>\n  </div>\n  <div class=\"slds-form-element\" [class.slds-has-error]=\"!isColorNumberValid('green')\">\n    <label class=\"slds-form-element__label\" [attr.for]=\"uid + 'green'\"><abbr title=\"green\">G</abbr></label>\n    <div class=\"slds-form-element__control\">\n      <input class=\"slds-input\" [id]=\"uid + 'green'\" type=\"text\" maxlength=\"3\" [value]=\"green\" (input)=\"onRGB('green', $event.target.value)\">\n    </div>\n  </div>\n  <div class=\"slds-form-element\" [class.slds-has-error]=\"!isColorNumberValid('blue')\">\n    <label class=\"slds-form-element__label\" [attr.for]=\"uid + 'blue'\"><abbr title=\"blue\">B</abbr></label>\n    <div class=\"slds-form-element__control\">\n      <input class=\"slds-input\" [id]=\"uid + 'blue'\" type=\"text\" maxlength=\"3\" [value]=\"blue\" (input)=\"onRGB('blue', $event.target.value)\">\n    </div>\n  </div>\n</div>\n<div class=\"slds-color-picker\">\n  <p class=\"slds-form-error slds-color-picker__input-custom-error\" *ngIf=\"isHexInvalid; else rgbError\">The color entered is invalid</p>\n  <ng-template #rgbError>\n    <p class=\"slds-form-error slds-color-picker__input-custom-error\" *ngIf=\"!isRGBValid()\">The value needs to be an integer from 0-255</p>\n  </ng-template>\n</div>",
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
NglColorpickerInputs.propDecorators = {
    hex: [{ type: Input }],
    hexChange: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sb3JwaWNrZXItaW5wdXRzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctbGlnaHRuaW5nL3NyYy9saWIvY29sb3JwaWNrZXIvY3VzdG9tL2lucHV0cy9jb2xvcnBpY2tlci1pbnB1dHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSx1QkFBdUIsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoRyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGFBQWEsRUFBRSxhQUFhLEVBQUUsVUFBVSxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQU85QyxNQUFNLE9BQU8sb0JBQW9CO0lBTGpDO1FBb0JZLGNBQVMsR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO1FBRWpELFFBQUcsR0FBRyxDQUFDLENBQUM7UUFFUixVQUFLLEdBQUcsQ0FBQyxDQUFDO1FBRVYsU0FBSSxHQUFHLENBQUMsQ0FBQztRQUVULFFBQUcsR0FBRyxRQUFRLENBQUMsb0JBQW9CLENBQUMsQ0FBQztJQWdDdkMsQ0FBQztJQXJEQyxJQUFhLEdBQUcsQ0FBQyxHQUFXO1FBQzFCLElBQUksR0FBRyxFQUFFO1lBQ1AsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUM7WUFDaEIsTUFBTSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsYUFBYSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNyRCxJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztZQUNmLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1lBQ25CLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1NBQ2xCO0lBQ0gsQ0FBQztJQUNELElBQUksR0FBRztRQUNMLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztJQUNuQixDQUFDO0lBY0QsU0FBUyxDQUFDLEtBQUs7UUFDYixNQUFNLE9BQU8sR0FBRyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbEMsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNaLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztTQUMxQztRQUNELElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBRUQsS0FBSyxDQUFDLEdBQVcsRUFBRSxLQUFhO1FBQzlCLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUM7UUFFbEIsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUM1RyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBRUQsSUFBSSxZQUFZO1FBQ2QsT0FBTyxJQUFJLENBQUMsR0FBRyxLQUFLLElBQUksSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLElBQUksQ0FBQztJQUN4RSxDQUFDO0lBRUQsa0JBQWtCLENBQUMsR0FBVztRQUM1QixNQUFNLEtBQUssR0FBRyxJQUFJLENBQUUsR0FBRyxDQUFFLENBQUM7UUFDMUIsT0FBTyxjQUFjLENBQUMsS0FBSyxDQUFDLElBQUksS0FBSyxJQUFJLENBQUMsSUFBSSxLQUFLLElBQUksR0FBRyxDQUFDO0lBQzdELENBQUM7SUFFRCxVQUFVO1FBQ1IsT0FBTyxDQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUNqRixDQUFDOzs7WUExREYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSx3QkFBd0I7Z0JBQ2xDLDJsRUFBd0M7Z0JBQ3hDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEOzs7a0JBR0UsS0FBSzt3QkFhTCxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBfaXNOdW1iZXJWYWx1ZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2VyY2lvbic7XG5pbXBvcnQgeyBnZXRIZXhGcm9tUmdiLCBnZXRSZ2JGcm9tSGV4LCBpc1ZhbGlkSGV4IH0gZnJvbSAnLi4vLi4vdXRpbCc7XG5pbXBvcnQgeyB1bmlxdWVJZCB9IGZyb20gJy4uLy4uLy4uL3V0aWwvdXRpbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25nbC1jb2xvcnBpY2tlci1pbnB1dHMnLFxuICB0ZW1wbGF0ZVVybDogJy4vY29sb3JwaWNrZXItaW5wdXRzLmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgTmdsQ29sb3JwaWNrZXJJbnB1dHMge1xuXG4gIEBJbnB1dCgpIHNldCBoZXgoaGV4OiBzdHJpbmcpIHtcbiAgICBpZiAoaGV4KSB7XG4gICAgICB0aGlzLl9oZXggPSBoZXg7XG4gICAgICBjb25zdCB7IHJlZCwgZ3JlZW4sIGJsdWUgfSA9IGdldFJnYkZyb21IZXgodGhpcy5oZXgpO1xuICAgICAgdGhpcy5yZWQgPSByZWQ7XG4gICAgICB0aGlzLmdyZWVuID0gZ3JlZW47XG4gICAgICB0aGlzLmJsdWUgPSBibHVlO1xuICAgIH1cbiAgfVxuICBnZXQgaGV4KCkge1xuICAgIHJldHVybiB0aGlzLl9oZXg7XG4gIH1cblxuICBAT3V0cHV0KCkgaGV4Q2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG5cbiAgcmVkID0gMDtcblxuICBncmVlbiA9IDA7XG5cbiAgYmx1ZSA9IDA7XG5cbiAgdWlkID0gdW5pcXVlSWQoJ2NvbG9ycGlja2VyLWlucHV0cycpO1xuXG4gIHByaXZhdGUgX2hleDogc3RyaW5nO1xuXG4gIHVwZGF0ZUhleCh2YWx1ZSkge1xuICAgIGNvbnN0IGlzVmFsaWQgPSBpc1ZhbGlkSGV4KHZhbHVlKTtcbiAgICBpZiAoIWlzVmFsaWQpIHtcbiAgICAgIHRoaXMucmVkID0gdGhpcy5ncmVlbiA9IHRoaXMuYmx1ZSA9IG51bGw7XG4gICAgfVxuICAgIHRoaXMuaGV4Q2hhbmdlLmVtaXQoaXNWYWxpZCA/IHZhbHVlIDogbnVsbCk7XG4gIH1cblxuICBvblJHQihrZXk6IHN0cmluZywgdmFsdWU6IG51bWJlcikge1xuICAgIHRoaXNba2V5XSA9IHZhbHVlO1xuXG4gICAgY29uc3QgaGV4ID0gdGhpcy5pc1JHQlZhbGlkKCkgPyBnZXRIZXhGcm9tUmdiKHsgcmVkOiB0aGlzLnJlZCwgZ3JlZW46IHRoaXMuZ3JlZW4sIGJsdWU6IHRoaXMuYmx1ZSB9KSA6IG51bGw7XG4gICAgdGhpcy5oZXhDaGFuZ2UuZW1pdChoZXgpO1xuICB9XG5cbiAgZ2V0IGlzSGV4SW52YWxpZCgpIHtcbiAgICByZXR1cm4gdGhpcy5yZWQgPT09IG51bGwgJiYgdGhpcy5ncmVlbiA9PT0gbnVsbCAmJiB0aGlzLmJsdWUgPT09IG51bGw7XG4gIH1cblxuICBpc0NvbG9yTnVtYmVyVmFsaWQoa2V5OiBzdHJpbmcpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXNbIGtleSBdO1xuICAgIHJldHVybiBfaXNOdW1iZXJWYWx1ZSh2YWx1ZSkgJiYgdmFsdWUgPj0gMCAmJiB2YWx1ZSA8PSAyNTU7XG4gIH1cblxuICBpc1JHQlZhbGlkKCkge1xuICAgIHJldHVybiBbJ3JlZCcsICdncmVlbicsICdibHVlJ10uZXZlcnkoKHByb3ApID0+IHRoaXMuaXNDb2xvck51bWJlclZhbGlkKHByb3ApKTtcbiAgfVxuXG59XG4iXX0=
import { __decorate } from "tslib";
import { Component, ElementRef, Renderer2, ChangeDetectionStrategy, ChangeDetectorRef, forwardRef, Input, Optional, Inject } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { getHsvFromHex, getHexFromHsv, isValidHex } from './util';
import { uniqueId } from '../util/util';
import { InputBoolean } from '../util/convert';
import { NGL_COLORPICKER_CONFIG, NglColorpickerConfig } from './config';
const NGL_COLORPICKER_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => NglColorpicker),
    multi: true
};
export class NglColorpicker {
    constructor(defaultConfig, el, renderer, cd) {
        this.el = el;
        this.renderer = renderer;
        this.cd = cd;
        /**
         * An input label as for a form.
         */
        this.label = 'Choose Color';
        /**
         * Placeholder of input box.
         */
        this.placeholder = '';
        /**
         * Text for cancel button on popover.
         */
        this.cancelButtonLabel = 'Cancel';
        /**
         * Text for submit button of popover.
         */
        this.submitButtonLabel = 'Done';
        /**
         * Highlights the input as a required field (does not perform any validation).
         */
        this.required = false;
        /**
         * Error message when hex color input is invalid.
         */
        this.invalidColorLabel = 'Please ensure value is correct';
        /**
         * Text for swatch tab of popover.
         */
        this.swatchTabLabel = 'Default';
        /**
         * Text for custom tab of popover.
         */
        this.customTabLabel = 'Custom';
        /**
         * Whether to make the hex color input readonly.
         */
        this.readonlyInput = false;
        /**
         * Determines which tab is visible when popover opens.
         */
        this.defaultSelectedTab = 'swatches';
        this.uid = uniqueId('colorpicker');
        this.hexCurrent = '#FFF';
        this.hsvCurrent = getHsvFromHex(this.hexCurrent);
        this.onChange = (_) => { };
        this.onTouched = () => { };
        this.renderer.addClass(this.el.nativeElement, 'slds-color-picker');
        const config = Object.assign(Object.assign({}, new NglColorpickerConfig()), defaultConfig);
        this.swatchColors = config.swatchColors;
        this.variant = config.variant;
    }
    writeValue(value) {
        this.color = value || '';
        if (isValidHex(value)) {
            this.hexCurrent = value;
            this.hsvCurrent = getHsvFromHex(value);
        }
        this.cd.detectChanges();
    }
    registerOnChange(fn) { this.onChange = fn; }
    registerOnTouched(fn) { this.onTouched = fn; }
    setDisabledState(isDisabled) { this.disabled = isDisabled; }
    onSwatchSelection(hex) {
        this.hsvCurrent = getHsvFromHex(hex);
        this.hexCurrent = hex;
    }
    onCustomSelection(hsv) {
        this.hsvCurrent = hsv;
        this.hexCurrent = getHexFromHsv(hsv);
    }
    openChange(open) {
        this.open = open;
    }
    cancel() {
        this.open = false;
    }
    done() {
        this.open = false;
        if (this.hexCurrent !== this.color) {
            this.color = this.hexCurrent;
            this.onChange(this.color);
        }
    }
    canApply() {
        return isValidHex(this.hexCurrent);
    }
    onInput(hex) {
        this.color = hex;
        if (isValidHex(hex)) {
            this.onSwatchSelection(hex);
            this.onChange(hex);
        }
        else {
            this.onChange(null);
        }
    }
    get isValidInput() {
        return !this.color || isValidHex(this.color);
    }
}
NglColorpicker.decorators = [
    { type: Component, args: [{
                selector: 'ngl-colorpicker',
                template: "\n<div class=\"slds-color-picker__summary slds-form-element\" [class.slds-has-error]=\"!isValidInput\">\n  <label class=\"slds-form-element__label slds-color-picker__summary-label\" [nglFormLabel]=\"label\" [attr.for]=\"uid + '-summary-input'\" [required]=\"required\">\n    <ngl-form-help class=\"slds-m-horizontal_xx-small\" *ngIf=\"fieldLevelHelpTooltip\" [content]=\"fieldLevelHelpTooltip\"></ngl-form-help>\n  </label>\n  <div class=\"slds-form-element__control\">\n    <button class=\"slds-button slds-color-picker__summary-button slds-button_icon slds-button_icon-more\" [title]=\"label\" [nglPopover]=\"tip\" nglPopoverPlacement=\"bottom-left\" [nglPopoverOpen]=\"open\" (nglPopoverOpenChange)=\"openChange($event)\" nglPopoverClass=\"slds-color-picker__selector\" [nglPopoverFooter]=\"footer\" nglPopoverCloseVisible=\"false\" [disabled]=\"disabled\"><span class=\"slds-swatch\" nglColorpickerSwatch [color]=\"isValidInput ? color : hexCurrent\"></span>\n      <svg class=\"slds-button__icon slds-button__icon_small slds-m-left_xx-small\" *ngIf=\"!disabled\" nglIconName=\"utility:down\"></svg><span class=\"slds-assistive-text\">{{ label }}: {{ color }}</span>\n    </button>\n    <div class=\"slds-color-picker__summary-input\">\n      <input class=\"slds-input\" [id]=\"uid + '-summary-input'\" type=\"text\" [value]=\"color\" (input)=\"onInput($event.target.value)\" [disabled]=\"disabled\" [readOnly]=\"readonlyInput\" maxlength=\"7\" [placeholder]=\"placeholder || ''\">\n    </div>\n    <p class=\"slds-form-error\" *ngIf=\"!isValidInput\" [nglInternalOutlet]=\"invalidColorLabel\"></p>\n  </div>\n</div>\n<ng-template #tip>\n  <ng-container [ngSwitch]=\"variant\">\n    <ng-container *ngSwitchCase=\"'swatches'\">\n      <ng-template [ngTemplateOutlet]=\"swatches\"></ng-template>\n    </ng-container>\n    <ng-container *ngSwitchCase=\"'custom'\">\n      <ng-template [ngTemplateOutlet]=\"custom\"></ng-template>\n    </ng-container>\n    <ngl-tabset *ngSwitchDefault [selected]=\"defaultSelectedTab\" (selectedChange)=\"defaultSelectedTab = $event.id\">\n      <ng-template ngl-tab id=\"swatches\" [label]=\"swatchTabLabel\">\n        <ng-template [ngTemplateOutlet]=\"swatches\"></ng-template>\n      </ng-template>\n      <ng-template ngl-tab id=\"custom\" [label]=\"customTabLabel\">\n        <ng-template [ngTemplateOutlet]=\"custom\"></ng-template>\n      </ng-template>\n    </ngl-tabset>\n  </ng-container>\n</ng-template>\n<ng-template #swatches>\n  <ngl-colorpicker-swatches [hex]=\"hexCurrent\" (hexChange)=\"onSwatchSelection($event)\" [swatchColors]=\"swatchColors\"></ngl-colorpicker-swatches>\n</ng-template>\n<ng-template #custom>\n  <ngl-colorpicker-custom [hsv]=\"hsvCurrent\" (hsvChange)=\"onCustomSelection($event)\"></ngl-colorpicker-custom>\n</ng-template>\n<ng-template #footer>\n  <div class=\"slds-color-picker__selector-footer\">\n    <button class=\"slds-button slds-button_neutral\" type=\"button\" (click)=\"cancel()\">{{ cancelButtonLabel }}</button>\n    <button class=\"slds-button slds-button_brand\" type=\"button\" (click)=\"done()\" [disabled]=\"!canApply()\">{{ submitButtonLabel }}</button>\n  </div>\n</ng-template>",
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [NGL_COLORPICKER_VALUE_ACCESSOR]
            },] }
];
NglColorpicker.ctorParameters = () => [
    { type: NglColorpickerConfig, decorators: [{ type: Optional }, { type: Inject, args: [NGL_COLORPICKER_CONFIG,] }] },
    { type: ElementRef },
    { type: Renderer2 },
    { type: ChangeDetectorRef }
];
NglColorpicker.propDecorators = {
    label: [{ type: Input }],
    placeholder: [{ type: Input }],
    cancelButtonLabel: [{ type: Input }],
    submitButtonLabel: [{ type: Input }],
    required: [{ type: Input }],
    fieldLevelHelpTooltip: [{ type: Input }],
    invalidColorLabel: [{ type: Input }],
    swatchTabLabel: [{ type: Input }],
    customTabLabel: [{ type: Input }],
    swatchColors: [{ type: Input }],
    readonlyInput: [{ type: Input }],
    defaultSelectedTab: [{ type: Input }],
    variant: [{ type: Input }]
};
__decorate([
    InputBoolean()
], NglColorpicker.prototype, "required", void 0);
__decorate([
    InputBoolean()
], NglColorpicker.prototype, "readonlyInput", void 0);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sb3JwaWNrZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1saWdodG5pbmcvc3JjL2xpYi9jb2xvcnBpY2tlci9jb2xvcnBpY2tlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLHVCQUF1QixFQUFFLGlCQUFpQixFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQWUsUUFBUSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvSixPQUFPLEVBQUUsaUJBQWlCLEVBQXdCLE1BQU0sZ0JBQWdCLENBQUM7QUFDekUsT0FBTyxFQUFRLGFBQWEsRUFBRSxhQUFhLEVBQUUsVUFBVSxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDeEMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxvQkFBb0IsRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUV4RSxNQUFNLDhCQUE4QixHQUFHO0lBQ3JDLE9BQU8sRUFBRSxpQkFBaUI7SUFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxjQUFjLENBQUM7SUFDN0MsS0FBSyxFQUFFLElBQUk7Q0FDWixDQUFDO0FBUUYsTUFBTSxPQUFPLGNBQWM7SUE4RXpCLFlBQXdELGFBQW1DLEVBQ3ZFLEVBQWMsRUFDZCxRQUFtQixFQUNuQixFQUFxQjtRQUZyQixPQUFFLEdBQUYsRUFBRSxDQUFZO1FBQ2QsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNuQixPQUFFLEdBQUYsRUFBRSxDQUFtQjtRQS9FekM7O1dBRUc7UUFDTSxVQUFLLEdBQUcsY0FBYyxDQUFDO1FBRWhDOztXQUVHO1FBQ00sZ0JBQVcsR0FBRyxFQUFFLENBQUM7UUFFMUI7O1dBRUc7UUFDTSxzQkFBaUIsR0FBRyxRQUFRLENBQUM7UUFFdEM7O1dBRUc7UUFDTSxzQkFBaUIsR0FBRyxNQUFNLENBQUM7UUFFcEM7O1dBRUc7UUFDc0IsYUFBUSxHQUFHLEtBQUssQ0FBQztRQU8xQzs7V0FFRztRQUNNLHNCQUFpQixHQUE4QixnQ0FBZ0MsQ0FBQztRQUV6Rjs7V0FFRztRQUNNLG1CQUFjLEdBQUcsU0FBUyxDQUFDO1FBRXBDOztXQUVHO1FBQ00sbUJBQWMsR0FBRyxRQUFRLENBQUM7UUFPbkM7O1dBRUc7UUFDc0Isa0JBQWEsR0FBRyxLQUFLLENBQUM7UUFFL0M7O1dBRUc7UUFDTSx1QkFBa0IsR0FBMEIsVUFBVSxDQUFDO1FBU2hFLFFBQUcsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLENBQUM7UUFNOUIsZUFBVSxHQUFHLE1BQU0sQ0FBQztRQUNwQixlQUFVLEdBQUcsYUFBYSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQWE1QyxhQUFRLEdBQUcsQ0FBQyxDQUFNLEVBQUUsRUFBRSxHQUFFLENBQUMsQ0FBQztRQUUxQixjQUFTLEdBQUcsR0FBRyxFQUFFLEdBQUUsQ0FBQyxDQUFDO1FBVG5CLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLG1CQUFtQixDQUFDLENBQUM7UUFFbkUsTUFBTSxNQUFNLG1DQUFRLElBQUksb0JBQW9CLEVBQUUsR0FBSyxhQUFhLENBQUUsQ0FBQztRQUNuRSxJQUFJLENBQUMsWUFBWSxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUM7UUFDeEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDO0lBQ2hDLENBQUM7SUFNRCxVQUFVLENBQUMsS0FBYTtRQUN0QixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssSUFBSSxFQUFFLENBQUM7UUFDekIsSUFBSSxVQUFVLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDckIsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7WUFDeEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDeEM7UUFFRCxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFRCxnQkFBZ0IsQ0FBQyxFQUF1QixJQUFVLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUV2RSxpQkFBaUIsQ0FBQyxFQUFhLElBQVUsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBRS9ELGdCQUFnQixDQUFDLFVBQW1CLElBQUksSUFBSSxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDO0lBRXJFLGlCQUFpQixDQUFDLEdBQVc7UUFDM0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDckMsSUFBSSxDQUFDLFVBQVUsR0FBRyxHQUFHLENBQUM7SUFDeEIsQ0FBQztJQUVELGlCQUFpQixDQUFDLEdBQVM7UUFDekIsSUFBSSxDQUFDLFVBQVUsR0FBRyxHQUFHLENBQUM7UUFDdEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVELFVBQVUsQ0FBQyxJQUFhO1FBQ3RCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ25CLENBQUM7SUFFRCxNQUFNO1FBQ0osSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7SUFDcEIsQ0FBQztJQUVELElBQUk7UUFDRixJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztRQUNsQixJQUFJLElBQUksQ0FBQyxVQUFVLEtBQUssSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNsQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7WUFDN0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDM0I7SUFDSCxDQUFDO0lBRUQsUUFBUTtRQUNOLE9BQU8sVUFBVSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRUQsT0FBTyxDQUFDLEdBQVc7UUFDakIsSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7UUFFakIsSUFBSSxVQUFVLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDbkIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQzVCLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDcEI7YUFBTTtZQUNMLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDckI7SUFDSCxDQUFDO0lBRUQsSUFBSSxZQUFZO1FBQ2QsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMvQyxDQUFDOzs7WUE5SkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLGduR0FBaUM7Z0JBQ2pDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxTQUFTLEVBQUUsQ0FBQyw4QkFBOEIsQ0FBQzthQUM1Qzs7O1lBYmdDLG9CQUFvQix1QkE0RnRDLFFBQVEsWUFBSSxNQUFNLFNBQUMsc0JBQXNCO1lBakdwQyxVQUFVO1lBQUUsU0FBUztZQUEyQixpQkFBaUI7OztvQkF3QmxGLEtBQUs7MEJBS0wsS0FBSztnQ0FLTCxLQUFLO2dDQUtMLEtBQUs7dUJBS0wsS0FBSztvQ0FLTCxLQUFLO2dDQUtMLEtBQUs7NkJBS0wsS0FBSzs2QkFLTCxLQUFLOzJCQUtMLEtBQUs7NEJBS0wsS0FBSztpQ0FLTCxLQUFLO3NCQUtMLEtBQUs7O0FBeENtQjtJQUFmLFlBQVksRUFBRTtnREFBa0I7QUE4QmpCO0lBQWYsWUFBWSxFQUFFO3FEQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgUmVuZGVyZXIyLCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIGZvcndhcmRSZWYsIElucHV0LCBUZW1wbGF0ZVJlZiwgT3B0aW9uYWwsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTkdfVkFMVUVfQUNDRVNTT1IsIENvbnRyb2xWYWx1ZUFjY2Vzc29yIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgSUhTViwgZ2V0SHN2RnJvbUhleCwgZ2V0SGV4RnJvbUhzdiwgaXNWYWxpZEhleCB9IGZyb20gJy4vdXRpbCc7XG5pbXBvcnQgeyB1bmlxdWVJZCB9IGZyb20gJy4uL3V0aWwvdXRpbCc7XG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4gfSBmcm9tICcuLi91dGlsL2NvbnZlcnQnO1xuaW1wb3J0IHsgTkdMX0NPTE9SUElDS0VSX0NPTkZJRywgTmdsQ29sb3JwaWNrZXJDb25maWcgfSBmcm9tICcuL2NvbmZpZyc7XG5cbmNvbnN0IE5HTF9DT0xPUlBJQ0tFUl9WQUxVRV9BQ0NFU1NPUiA9IHtcbiAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IE5nbENvbG9ycGlja2VyKSxcbiAgbXVsdGk6IHRydWVcbn07XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25nbC1jb2xvcnBpY2tlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9jb2xvcnBpY2tlci5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByb3ZpZGVyczogW05HTF9DT0xPUlBJQ0tFUl9WQUxVRV9BQ0NFU1NPUl0sXG59KVxuZXhwb3J0IGNsYXNzIE5nbENvbG9ycGlja2VyIGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuXG4gIC8qKlxuICAgKiBBbiBpbnB1dCBsYWJlbCBhcyBmb3IgYSBmb3JtLlxuICAgKi9cbiAgQElucHV0KCkgbGFiZWwgPSAnQ2hvb3NlIENvbG9yJztcblxuICAvKipcbiAgICogUGxhY2Vob2xkZXIgb2YgaW5wdXQgYm94LlxuICAgKi9cbiAgQElucHV0KCkgcGxhY2Vob2xkZXIgPSAnJztcblxuICAvKipcbiAgICogVGV4dCBmb3IgY2FuY2VsIGJ1dHRvbiBvbiBwb3BvdmVyLlxuICAgKi9cbiAgQElucHV0KCkgY2FuY2VsQnV0dG9uTGFiZWwgPSAnQ2FuY2VsJztcblxuICAvKipcbiAgICogVGV4dCBmb3Igc3VibWl0IGJ1dHRvbiBvZiBwb3BvdmVyLlxuICAgKi9cbiAgQElucHV0KCkgc3VibWl0QnV0dG9uTGFiZWwgPSAnRG9uZSc7XG5cbiAgLyoqXG4gICAqIEhpZ2hsaWdodHMgdGhlIGlucHV0IGFzIGEgcmVxdWlyZWQgZmllbGQgKGRvZXMgbm90IHBlcmZvcm0gYW55IHZhbGlkYXRpb24pLlxuICAgKi9cbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHJlcXVpcmVkID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIEEgdG9vbHRpcCB0aGF0IGlzIGRpc3BsYXllZCBuZXh0IHRvIHRoZSBsYWJlbC5cbiAgICovXG4gIEBJbnB1dCgpIGZpZWxkTGV2ZWxIZWxwVG9vbHRpcDogc3RyaW5nIHwgVGVtcGxhdGVSZWY8YW55PjtcblxuICAvKipcbiAgICogRXJyb3IgbWVzc2FnZSB3aGVuIGhleCBjb2xvciBpbnB1dCBpcyBpbnZhbGlkLlxuICAgKi9cbiAgQElucHV0KCkgaW52YWxpZENvbG9yTGFiZWw6IHN0cmluZyB8IFRlbXBsYXRlUmVmPGFueT4gPSAnUGxlYXNlIGVuc3VyZSB2YWx1ZSBpcyBjb3JyZWN0JztcblxuICAvKipcbiAgICogVGV4dCBmb3Igc3dhdGNoIHRhYiBvZiBwb3BvdmVyLlxuICAgKi9cbiAgQElucHV0KCkgc3dhdGNoVGFiTGFiZWwgPSAnRGVmYXVsdCc7XG5cbiAgLyoqXG4gICAqIFRleHQgZm9yIGN1c3RvbSB0YWIgb2YgcG9wb3Zlci5cbiAgICovXG4gIEBJbnB1dCgpIGN1c3RvbVRhYkxhYmVsID0gJ0N1c3RvbSc7XG5cbiAgLyoqXG4gICAqIEhleCBjb2xvciB2YWx1ZXMgd2hpY2ggYXJlIHVzZWQgdG8gc2V0IHRoZSBvcHRpb25zIG9mIHRoZSBzd2F0Y2ggdGFiIG9mIHRoZSBjb2xvcnBpY2tlciBwb3BvdmVyLlxuICAgKi9cbiAgQElucHV0KCkgc3dhdGNoQ29sb3JzOiBzdHJpbmdbXTtcblxuICAvKipcbiAgICogV2hldGhlciB0byBtYWtlIHRoZSBoZXggY29sb3IgaW5wdXQgcmVhZG9ubHkuXG4gICAqL1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgcmVhZG9ubHlJbnB1dCA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmVzIHdoaWNoIHRhYiBpcyB2aXNpYmxlIHdoZW4gcG9wb3ZlciBvcGVucy5cbiAgICovXG4gIEBJbnB1dCgpIGRlZmF1bHRTZWxlY3RlZFRhYjogJ3N3YXRjaGVzJyB8ICdjdXN0b20nID0gJ3N3YXRjaGVzJztcblxuICAvKipcbiAgICogQ29uZmlndXJlcyB0byBzaG93IGJvdGggb3Igd2hpY2ggb25lIG9mIHRoZSBjb2xvciBzZWxlY3Rpb24gaW50ZXJmYWNlcy5cbiAgICovXG4gIEBJbnB1dCgpIHZhcmlhbnQ6ICdiYXNlJyB8ICdzd2F0Y2hlcycgfCAnY3VzdG9tJztcblxuICBjb2xvcjogc3RyaW5nO1xuXG4gIHVpZCA9IHVuaXF1ZUlkKCdjb2xvcnBpY2tlcicpO1xuXG4gIG9wZW46IGJvb2xlYW47XG5cbiAgZGlzYWJsZWQ6IGJvb2xlYW47XG5cbiAgaGV4Q3VycmVudCA9ICcjRkZGJztcbiAgaHN2Q3VycmVudCA9IGdldEhzdkZyb21IZXgodGhpcy5oZXhDdXJyZW50KTtcblxuICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBASW5qZWN0KE5HTF9DT0xPUlBJQ0tFUl9DT05GSUcpIGRlZmF1bHRDb25maWc6IE5nbENvbG9ycGlja2VyQ29uZmlnLFxuICAgICAgICAgICAgICBwcml2YXRlIGVsOiBFbGVtZW50UmVmLFxuICAgICAgICAgICAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgICAgICAgICAgIHByaXZhdGUgY2Q6IENoYW5nZURldGVjdG9yUmVmKSB7XG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsICdzbGRzLWNvbG9yLXBpY2tlcicpO1xuXG4gICAgY29uc3QgY29uZmlnID0geyAuLi5uZXcgTmdsQ29sb3JwaWNrZXJDb25maWcoKSwgLi4uZGVmYXVsdENvbmZpZyB9O1xuICAgIHRoaXMuc3dhdGNoQ29sb3JzID0gY29uZmlnLnN3YXRjaENvbG9ycztcbiAgICB0aGlzLnZhcmlhbnQgPSBjb25maWcudmFyaWFudDtcbiAgfVxuXG4gIG9uQ2hhbmdlID0gKF86IGFueSkgPT4ge307XG5cbiAgb25Ub3VjaGVkID0gKCkgPT4ge307XG5cbiAgd3JpdGVWYWx1ZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5jb2xvciA9IHZhbHVlIHx8ICcnO1xuICAgIGlmIChpc1ZhbGlkSGV4KHZhbHVlKSkge1xuICAgICAgdGhpcy5oZXhDdXJyZW50ID0gdmFsdWU7XG4gICAgICB0aGlzLmhzdkN1cnJlbnQgPSBnZXRIc3ZGcm9tSGV4KHZhbHVlKTtcbiAgICB9XG5cbiAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46ICh2YWx1ZTogYW55KSA9PiBhbnkpOiB2b2lkIHsgdGhpcy5vbkNoYW5nZSA9IGZuOyB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IGFueSk6IHZvaWQgeyB0aGlzLm9uVG91Y2hlZCA9IGZuOyB9XG5cbiAgc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKSB7IHRoaXMuZGlzYWJsZWQgPSBpc0Rpc2FibGVkOyB9XG5cbiAgb25Td2F0Y2hTZWxlY3Rpb24oaGV4OiBzdHJpbmcpIHtcbiAgICB0aGlzLmhzdkN1cnJlbnQgPSBnZXRIc3ZGcm9tSGV4KGhleCk7XG4gICAgdGhpcy5oZXhDdXJyZW50ID0gaGV4O1xuICB9XG5cbiAgb25DdXN0b21TZWxlY3Rpb24oaHN2OiBJSFNWKSB7XG4gICAgdGhpcy5oc3ZDdXJyZW50ID0gaHN2O1xuICAgIHRoaXMuaGV4Q3VycmVudCA9IGdldEhleEZyb21Ic3YoaHN2KTtcbiAgfVxuXG4gIG9wZW5DaGFuZ2Uob3BlbjogYm9vbGVhbikge1xuICAgIHRoaXMub3BlbiA9IG9wZW47XG4gIH1cblxuICBjYW5jZWwoKSB7XG4gICAgdGhpcy5vcGVuID0gZmFsc2U7XG4gIH1cblxuICBkb25lKCkge1xuICAgIHRoaXMub3BlbiA9IGZhbHNlO1xuICAgIGlmICh0aGlzLmhleEN1cnJlbnQgIT09IHRoaXMuY29sb3IpIHtcbiAgICAgIHRoaXMuY29sb3IgPSB0aGlzLmhleEN1cnJlbnQ7XG4gICAgICB0aGlzLm9uQ2hhbmdlKHRoaXMuY29sb3IpO1xuICAgIH1cbiAgfVxuXG4gIGNhbkFwcGx5KCkge1xuICAgIHJldHVybiBpc1ZhbGlkSGV4KHRoaXMuaGV4Q3VycmVudCk7XG4gIH1cblxuICBvbklucHV0KGhleDogc3RyaW5nKSB7XG4gICAgdGhpcy5jb2xvciA9IGhleDtcblxuICAgIGlmIChpc1ZhbGlkSGV4KGhleCkpIHtcbiAgICAgIHRoaXMub25Td2F0Y2hTZWxlY3Rpb24oaGV4KTtcbiAgICAgIHRoaXMub25DaGFuZ2UoaGV4KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5vbkNoYW5nZShudWxsKTtcbiAgICB9XG4gIH1cblxuICBnZXQgaXNWYWxpZElucHV0KCkge1xuICAgIHJldHVybiAhdGhpcy5jb2xvciB8fCBpc1ZhbGlkSGV4KHRoaXMuY29sb3IpO1xuICB9XG59XG4iXX0=
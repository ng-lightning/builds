import { __decorate } from "tslib";
import { Component, ChangeDetectionStrategy, forwardRef, Input, Optional, Inject } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { getHsvFromHex, getHexFromHsv, isValidHex } from './util';
import { uniqueId } from '../util/util';
import { InputBoolean } from '../util/convert';
import { NGL_COLORPICKER_CONFIG, NglColorpickerConfig } from './config';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../icons/svg";
import * as i3 from "../tabs/tabs";
import * as i4 from "../tabs/tab";
import * as i5 from "../popovers/trigger";
import * as i6 from "../forms/label";
import * as i7 from "../forms/help";
import * as i8 from "../util/outlet";
import * as i9 from "./swatch/colorpicker-swatch";
import * as i10 from "./custom/colorpicker-custom";
import * as i11 from "./swatches/colorpicker-swatches";
import * as i12 from "./config";
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
        const config = { ...new NglColorpickerConfig(), ...defaultConfig };
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
NglColorpicker.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglColorpicker, deps: [{ token: NGL_COLORPICKER_CONFIG, optional: true }, { token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component });
NglColorpicker.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: NglColorpicker, selector: "ngl-colorpicker", inputs: { label: "label", placeholder: "placeholder", cancelButtonLabel: "cancelButtonLabel", submitButtonLabel: "submitButtonLabel", required: "required", fieldLevelHelpTooltip: "fieldLevelHelpTooltip", invalidColorLabel: "invalidColorLabel", swatchTabLabel: "swatchTabLabel", customTabLabel: "customTabLabel", swatchColors: "swatchColors", readonlyInput: "readonlyInput", defaultSelectedTab: "defaultSelectedTab", variant: "variant" }, providers: [NGL_COLORPICKER_VALUE_ACCESSOR], ngImport: i0, template: "\n<div class=\"slds-color-picker__summary slds-form-element\" [class.slds-has-error]=\"!isValidInput\">\n  <label class=\"slds-form-element__label slds-color-picker__summary-label\" [nglFormLabel]=\"label\" [attr.for]=\"uid + '-summary-input'\" [required]=\"required\">\n    <ngl-form-help class=\"slds-m-horizontal_xx-small\" *ngIf=\"fieldLevelHelpTooltip\" [content]=\"fieldLevelHelpTooltip\"></ngl-form-help>\n  </label>\n  <div class=\"slds-form-element__control\">\n    <button class=\"slds-button slds-color-picker__summary-button slds-button_icon slds-button_icon-more\" [title]=\"label\" [nglPopover]=\"tip\" nglPopoverPlacement=\"bottom-left\" [nglPopoverOpen]=\"open\" (nglPopoverOpenChange)=\"openChange($event)\" nglPopoverClass=\"slds-color-picker__selector\" [nglPopoverFooter]=\"footer\" nglPopoverCloseVisible=\"false\" [disabled]=\"disabled\"><span class=\"slds-swatch\" nglColorpickerSwatch [color]=\"isValidInput ? color : hexCurrent\"></span>\n      <svg class=\"slds-button__icon slds-button__icon_small slds-m-left_xx-small\" *ngIf=\"!disabled\" nglIconName=\"utility:down\"></svg><span class=\"slds-assistive-text\">{{ label }}: {{ color }}</span>\n    </button>\n    <div class=\"slds-color-picker__summary-input\">\n      <input class=\"slds-input\" [id]=\"uid + '-summary-input'\" type=\"text\" [value]=\"color\" (input)=\"onInput($event.target.value)\" [disabled]=\"disabled\" [readOnly]=\"readonlyInput\" maxlength=\"7\" [placeholder]=\"placeholder || ''\">\n    </div>\n    <p class=\"slds-form-error\" *ngIf=\"!isValidInput\" [nglInternalOutlet]=\"invalidColorLabel\"></p>\n  </div>\n</div>\n<ng-template #tip>\n  <ng-container [ngSwitch]=\"variant\">\n    <ng-container *ngSwitchCase=\"'swatches'\">\n      <ng-template [ngTemplateOutlet]=\"swatches\"></ng-template>\n    </ng-container>\n    <ng-container *ngSwitchCase=\"'custom'\">\n      <ng-template [ngTemplateOutlet]=\"custom\"></ng-template>\n    </ng-container>\n    <ngl-tabset *ngSwitchDefault [selected]=\"defaultSelectedTab\" (selectedChange)=\"defaultSelectedTab = $event.id\">\n      <ng-template ngl-tab id=\"swatches\" [label]=\"swatchTabLabel\">\n        <ng-template [ngTemplateOutlet]=\"swatches\"></ng-template>\n      </ng-template>\n      <ng-template ngl-tab id=\"custom\" [label]=\"customTabLabel\">\n        <ng-template [ngTemplateOutlet]=\"custom\"></ng-template>\n      </ng-template>\n    </ngl-tabset>\n  </ng-container>\n</ng-template>\n<ng-template #swatches>\n  <ngl-colorpicker-swatches [hex]=\"hexCurrent\" (hexChange)=\"onSwatchSelection($event)\" [swatchColors]=\"swatchColors\"></ngl-colorpicker-swatches>\n</ng-template>\n<ng-template #custom>\n  <ngl-colorpicker-custom [hsv]=\"hsvCurrent\" (hsvChange)=\"onCustomSelection($event)\"></ngl-colorpicker-custom>\n</ng-template>\n<ng-template #footer>\n  <div class=\"slds-color-picker__selector-footer\">\n    <button class=\"slds-button slds-button_neutral\" type=\"button\" (click)=\"cancel()\">{{ cancelButtonLabel }}</button>\n    <button class=\"slds-button slds-button_brand\" type=\"button\" (click)=\"done()\" [disabled]=\"!canApply()\">{{ submitButtonLabel }}</button>\n  </div>\n</ng-template>", dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "directive", type: i1.NgSwitch, selector: "[ngSwitch]", inputs: ["ngSwitch"] }, { kind: "directive", type: i1.NgSwitchCase, selector: "[ngSwitchCase]", inputs: ["ngSwitchCase"] }, { kind: "directive", type: i1.NgSwitchDefault, selector: "[ngSwitchDefault]" }, { kind: "component", type: i2.NglIconSvg, selector: "svg[nglIconName]", inputs: ["nglIconName", "xPos"] }, { kind: "component", type: i3.NglTabs, selector: "ngl-tabset", inputs: ["variant", "selected", "lazy"], outputs: ["selectedChange"] }, { kind: "directive", type: i4.NglTab, selector: "[ngl-tab]", inputs: ["id", "label"], outputs: ["activate", "deactivate"], exportAs: ["nglTab"] }, { kind: "directive", type: i5.NglPopoverTrigger, selector: "[nglPopover]", inputs: ["nglPopover", "nglPopoverHeader", "nglPopoverFooter", "nglPopoverVariant", "nglPopoverSize", "nglPopoverPlacement", "nglPopoverOpen", "nglPopoverCloseTitle", "nglPopoverClass", "nglPopoverCloseVisible"], outputs: ["nglPopoverOpenChange"], exportAs: ["nglPopover"] }, { kind: "component", type: i6.NglFormLabel, selector: "label[nglFormLabel]", inputs: ["nglFormLabel", "nglFormLabelClass", "required"] }, { kind: "component", type: i7.NglFormHelp, selector: "ngl-form-help", inputs: ["content"] }, { kind: "component", type: i8.NglInternalOutlet, selector: "[nglInternalOutlet]", inputs: ["nglInternalOutlet", "nglInternalOutletContext"] }, { kind: "component", type: i9.NglColorpickerSwatch, selector: "[nglColorpickerSwatch]", inputs: ["color"] }, { kind: "component", type: i10.NglColorpickerCustom, selector: "ngl-colorpicker-custom", inputs: ["hsv"], outputs: ["hsvChange"] }, { kind: "component", type: i11.NglColorpickerSwatches, selector: "ngl-colorpicker-swatches", inputs: ["hex", "swatchColors"], outputs: ["hexChange"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
__decorate([
    InputBoolean()
], NglColorpicker.prototype, "required", void 0);
__decorate([
    InputBoolean()
], NglColorpicker.prototype, "readonlyInput", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglColorpicker, decorators: [{
            type: Component,
            args: [{ selector: 'ngl-colorpicker', changeDetection: ChangeDetectionStrategy.OnPush, providers: [NGL_COLORPICKER_VALUE_ACCESSOR], template: "\n<div class=\"slds-color-picker__summary slds-form-element\" [class.slds-has-error]=\"!isValidInput\">\n  <label class=\"slds-form-element__label slds-color-picker__summary-label\" [nglFormLabel]=\"label\" [attr.for]=\"uid + '-summary-input'\" [required]=\"required\">\n    <ngl-form-help class=\"slds-m-horizontal_xx-small\" *ngIf=\"fieldLevelHelpTooltip\" [content]=\"fieldLevelHelpTooltip\"></ngl-form-help>\n  </label>\n  <div class=\"slds-form-element__control\">\n    <button class=\"slds-button slds-color-picker__summary-button slds-button_icon slds-button_icon-more\" [title]=\"label\" [nglPopover]=\"tip\" nglPopoverPlacement=\"bottom-left\" [nglPopoverOpen]=\"open\" (nglPopoverOpenChange)=\"openChange($event)\" nglPopoverClass=\"slds-color-picker__selector\" [nglPopoverFooter]=\"footer\" nglPopoverCloseVisible=\"false\" [disabled]=\"disabled\"><span class=\"slds-swatch\" nglColorpickerSwatch [color]=\"isValidInput ? color : hexCurrent\"></span>\n      <svg class=\"slds-button__icon slds-button__icon_small slds-m-left_xx-small\" *ngIf=\"!disabled\" nglIconName=\"utility:down\"></svg><span class=\"slds-assistive-text\">{{ label }}: {{ color }}</span>\n    </button>\n    <div class=\"slds-color-picker__summary-input\">\n      <input class=\"slds-input\" [id]=\"uid + '-summary-input'\" type=\"text\" [value]=\"color\" (input)=\"onInput($event.target.value)\" [disabled]=\"disabled\" [readOnly]=\"readonlyInput\" maxlength=\"7\" [placeholder]=\"placeholder || ''\">\n    </div>\n    <p class=\"slds-form-error\" *ngIf=\"!isValidInput\" [nglInternalOutlet]=\"invalidColorLabel\"></p>\n  </div>\n</div>\n<ng-template #tip>\n  <ng-container [ngSwitch]=\"variant\">\n    <ng-container *ngSwitchCase=\"'swatches'\">\n      <ng-template [ngTemplateOutlet]=\"swatches\"></ng-template>\n    </ng-container>\n    <ng-container *ngSwitchCase=\"'custom'\">\n      <ng-template [ngTemplateOutlet]=\"custom\"></ng-template>\n    </ng-container>\n    <ngl-tabset *ngSwitchDefault [selected]=\"defaultSelectedTab\" (selectedChange)=\"defaultSelectedTab = $event.id\">\n      <ng-template ngl-tab id=\"swatches\" [label]=\"swatchTabLabel\">\n        <ng-template [ngTemplateOutlet]=\"swatches\"></ng-template>\n      </ng-template>\n      <ng-template ngl-tab id=\"custom\" [label]=\"customTabLabel\">\n        <ng-template [ngTemplateOutlet]=\"custom\"></ng-template>\n      </ng-template>\n    </ngl-tabset>\n  </ng-container>\n</ng-template>\n<ng-template #swatches>\n  <ngl-colorpicker-swatches [hex]=\"hexCurrent\" (hexChange)=\"onSwatchSelection($event)\" [swatchColors]=\"swatchColors\"></ngl-colorpicker-swatches>\n</ng-template>\n<ng-template #custom>\n  <ngl-colorpicker-custom [hsv]=\"hsvCurrent\" (hsvChange)=\"onCustomSelection($event)\"></ngl-colorpicker-custom>\n</ng-template>\n<ng-template #footer>\n  <div class=\"slds-color-picker__selector-footer\">\n    <button class=\"slds-button slds-button_neutral\" type=\"button\" (click)=\"cancel()\">{{ cancelButtonLabel }}</button>\n    <button class=\"slds-button slds-button_brand\" type=\"button\" (click)=\"done()\" [disabled]=\"!canApply()\">{{ submitButtonLabel }}</button>\n  </div>\n</ng-template>" }]
        }], ctorParameters: function () { return [{ type: i12.NglColorpickerConfig, decorators: [{
                    type: Optional
                }, {
                    type: Inject,
                    args: [NGL_COLORPICKER_CONFIG]
                }] }, { type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i0.ChangeDetectorRef }]; }, propDecorators: { label: [{
                type: Input
            }], placeholder: [{
                type: Input
            }], cancelButtonLabel: [{
                type: Input
            }], submitButtonLabel: [{
                type: Input
            }], required: [{
                type: Input
            }], fieldLevelHelpTooltip: [{
                type: Input
            }], invalidColorLabel: [{
                type: Input
            }], swatchTabLabel: [{
                type: Input
            }], customTabLabel: [{
                type: Input
            }], swatchColors: [{
                type: Input
            }], readonlyInput: [{
                type: Input
            }], defaultSelectedTab: [{
                type: Input
            }], variant: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sb3JwaWNrZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1saWdodG5pbmcvc3JjL2xpYi9jb2xvcnBpY2tlci9jb2xvcnBpY2tlci50cyIsIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nLWxpZ2h0bmluZy9zcmMvbGliL2NvbG9ycGlja2VyL2NvbG9ycGlja2VyLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXlCLHVCQUF1QixFQUFxQixVQUFVLEVBQUUsS0FBSyxFQUFlLFFBQVEsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0osT0FBTyxFQUFFLGlCQUFpQixFQUF3QixNQUFNLGdCQUFnQixDQUFDO0FBQ3pFLE9BQU8sRUFBUSxhQUFhLEVBQUUsYUFBYSxFQUFFLFVBQVUsRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUN4RSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQ3hDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxVQUFVLENBQUM7Ozs7Ozs7Ozs7Ozs7O0FBRXhFLE1BQU0sOEJBQThCLEdBQUc7SUFDckMsT0FBTyxFQUFFLGlCQUFpQjtJQUMxQixXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLGNBQWMsQ0FBQztJQUM3QyxLQUFLLEVBQUUsSUFBSTtDQUNaLENBQUM7QUFRRixNQUFNLE9BQU8sY0FBYztJQThFekIsWUFBd0QsYUFBbUMsRUFDdkUsRUFBYyxFQUNkLFFBQW1CLEVBQ25CLEVBQXFCO1FBRnJCLE9BQUUsR0FBRixFQUFFLENBQVk7UUFDZCxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ25CLE9BQUUsR0FBRixFQUFFLENBQW1CO1FBL0V6Qzs7V0FFRztRQUNNLFVBQUssR0FBRyxj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QUF0QixLQUFLO2dCQUtHLGNBQWM7c0JBQXRCLEtBQUs7Z0JBS0csWUFBWTtzQkFBcEIsS0FBSztnQkFLbUIsYUFBYTtzQkFBckMsS0FBSztnQkFLRyxrQkFBa0I7c0JBQTFCLEtBQUs7Z0JBS0csT0FBTztzQkFBZixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBSZW5kZXJlcjIsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgZm9yd2FyZFJlZiwgSW5wdXQsIFRlbXBsYXRlUmVmLCBPcHRpb25hbCwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOR19WQUxVRV9BQ0NFU1NPUiwgQ29udHJvbFZhbHVlQWNjZXNzb3IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBJSFNWLCBnZXRIc3ZGcm9tSGV4LCBnZXRIZXhGcm9tSHN2LCBpc1ZhbGlkSGV4IH0gZnJvbSAnLi91dGlsJztcbmltcG9ydCB7IHVuaXF1ZUlkIH0gZnJvbSAnLi4vdXRpbC91dGlsJztcbmltcG9ydCB7IElucHV0Qm9vbGVhbiB9IGZyb20gJy4uL3V0aWwvY29udmVydCc7XG5pbXBvcnQgeyBOR0xfQ09MT1JQSUNLRVJfQ09ORklHLCBOZ2xDb2xvcnBpY2tlckNvbmZpZyB9IGZyb20gJy4vY29uZmlnJztcblxuY29uc3QgTkdMX0NPTE9SUElDS0VSX1ZBTFVFX0FDQ0VTU09SID0ge1xuICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTmdsQ29sb3JwaWNrZXIpLFxuICBtdWx0aTogdHJ1ZVxufTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmdsLWNvbG9ycGlja2VyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NvbG9ycGlja2VyLmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgcHJvdmlkZXJzOiBbTkdMX0NPTE9SUElDS0VSX1ZBTFVFX0FDQ0VTU09SXSxcbn0pXG5leHBvcnQgY2xhc3MgTmdsQ29sb3JwaWNrZXIgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciB7XG5cbiAgLyoqXG4gICAqIEFuIGlucHV0IGxhYmVsIGFzIGZvciBhIGZvcm0uXG4gICAqL1xuICBASW5wdXQoKSBsYWJlbCA9ICdDaG9vc2UgQ29sb3InO1xuXG4gIC8qKlxuICAgKiBQbGFjZWhvbGRlciBvZiBpbnB1dCBib3guXG4gICAqL1xuICBASW5wdXQoKSBwbGFjZWhvbGRlciA9ICcnO1xuXG4gIC8qKlxuICAgKiBUZXh0IGZvciBjYW5jZWwgYnV0dG9uIG9uIHBvcG92ZXIuXG4gICAqL1xuICBASW5wdXQoKSBjYW5jZWxCdXR0b25MYWJlbCA9ICdDYW5jZWwnO1xuXG4gIC8qKlxuICAgKiBUZXh0IGZvciBzdWJtaXQgYnV0dG9uIG9mIHBvcG92ZXIuXG4gICAqL1xuICBASW5wdXQoKSBzdWJtaXRCdXR0b25MYWJlbCA9ICdEb25lJztcblxuICAvKipcbiAgICogSGlnaGxpZ2h0cyB0aGUgaW5wdXQgYXMgYSByZXF1aXJlZCBmaWVsZCAoZG9lcyBub3QgcGVyZm9ybSBhbnkgdmFsaWRhdGlvbikuXG4gICAqL1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgcmVxdWlyZWQgPSBmYWxzZTtcblxuICAvKipcbiAgICogQSB0b29sdGlwIHRoYXQgaXMgZGlzcGxheWVkIG5leHQgdG8gdGhlIGxhYmVsLlxuICAgKi9cbiAgQElucHV0KCkgZmllbGRMZXZlbEhlbHBUb29sdGlwOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIC8qKlxuICAgKiBFcnJvciBtZXNzYWdlIHdoZW4gaGV4IGNvbG9yIGlucHV0IGlzIGludmFsaWQuXG4gICAqL1xuICBASW5wdXQoKSBpbnZhbGlkQ29sb3JMYWJlbDogc3RyaW5nIHwgVGVtcGxhdGVSZWY8YW55PiA9ICdQbGVhc2UgZW5zdXJlIHZhbHVlIGlzIGNvcnJlY3QnO1xuXG4gIC8qKlxuICAgKiBUZXh0IGZvciBzd2F0Y2ggdGFiIG9mIHBvcG92ZXIuXG4gICAqL1xuICBASW5wdXQoKSBzd2F0Y2hUYWJMYWJlbCA9ICdEZWZhdWx0JztcblxuICAvKipcbiAgICogVGV4dCBmb3IgY3VzdG9tIHRhYiBvZiBwb3BvdmVyLlxuICAgKi9cbiAgQElucHV0KCkgY3VzdG9tVGFiTGFiZWwgPSAnQ3VzdG9tJztcblxuICAvKipcbiAgICogSGV4IGNvbG9yIHZhbHVlcyB3aGljaCBhcmUgdXNlZCB0byBzZXQgdGhlIG9wdGlvbnMgb2YgdGhlIHN3YXRjaCB0YWIgb2YgdGhlIGNvbG9ycGlja2VyIHBvcG92ZXIuXG4gICAqL1xuICBASW5wdXQoKSBzd2F0Y2hDb2xvcnM6IHN0cmluZ1tdO1xuXG4gIC8qKlxuICAgKiBXaGV0aGVyIHRvIG1ha2UgdGhlIGhleCBjb2xvciBpbnB1dCByZWFkb25seS5cbiAgICovXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSByZWFkb25seUlucHV0ID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIERldGVybWluZXMgd2hpY2ggdGFiIGlzIHZpc2libGUgd2hlbiBwb3BvdmVyIG9wZW5zLlxuICAgKi9cbiAgQElucHV0KCkgZGVmYXVsdFNlbGVjdGVkVGFiOiAnc3dhdGNoZXMnIHwgJ2N1c3RvbScgPSAnc3dhdGNoZXMnO1xuXG4gIC8qKlxuICAgKiBDb25maWd1cmVzIHRvIHNob3cgYm90aCBvciB3aGljaCBvbmUgb2YgdGhlIGNvbG9yIHNlbGVjdGlvbiBpbnRlcmZhY2VzLlxuICAgKi9cbiAgQElucHV0KCkgdmFyaWFudDogJ2Jhc2UnIHwgJ3N3YXRjaGVzJyB8ICdjdXN0b20nO1xuXG4gIGNvbG9yOiBzdHJpbmc7XG5cbiAgdWlkID0gdW5pcXVlSWQoJ2NvbG9ycGlja2VyJyk7XG5cbiAgb3BlbjogYm9vbGVhbjtcblxuICBkaXNhYmxlZDogYm9vbGVhbjtcblxuICBoZXhDdXJyZW50ID0gJyNGRkYnO1xuICBoc3ZDdXJyZW50ID0gZ2V0SHN2RnJvbUhleCh0aGlzLmhleEN1cnJlbnQpO1xuXG4gIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIEBJbmplY3QoTkdMX0NPTE9SUElDS0VSX0NPTkZJRykgZGVmYXVsdENvbmZpZzogTmdsQ29sb3JwaWNrZXJDb25maWcsXG4gICAgICAgICAgICAgIHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsXG4gICAgICAgICAgICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgJ3NsZHMtY29sb3ItcGlja2VyJyk7XG5cbiAgICBjb25zdCBjb25maWcgPSB7IC4uLm5ldyBOZ2xDb2xvcnBpY2tlckNvbmZpZygpLCAuLi5kZWZhdWx0Q29uZmlnIH07XG4gICAgdGhpcy5zd2F0Y2hDb2xvcnMgPSBjb25maWcuc3dhdGNoQ29sb3JzO1xuICAgIHRoaXMudmFyaWFudCA9IGNvbmZpZy52YXJpYW50O1xuICB9XG5cbiAgb25DaGFuZ2UgPSAoXzogYW55KSA9PiB7fTtcblxuICBvblRvdWNoZWQgPSAoKSA9PiB7fTtcblxuICB3cml0ZVZhbHVlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLmNvbG9yID0gdmFsdWUgfHwgJyc7XG4gICAgaWYgKGlzVmFsaWRIZXgodmFsdWUpKSB7XG4gICAgICB0aGlzLmhleEN1cnJlbnQgPSB2YWx1ZTtcbiAgICAgIHRoaXMuaHN2Q3VycmVudCA9IGdldEhzdkZyb21IZXgodmFsdWUpO1xuICAgIH1cblxuICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKHZhbHVlOiBhbnkpID0+IGFueSk6IHZvaWQgeyB0aGlzLm9uQ2hhbmdlID0gZm47IH1cblxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4gYW55KTogdm9pZCB7IHRoaXMub25Ub3VjaGVkID0gZm47IH1cblxuICBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pIHsgdGhpcy5kaXNhYmxlZCA9IGlzRGlzYWJsZWQ7IH1cblxuICBvblN3YXRjaFNlbGVjdGlvbihoZXg6IHN0cmluZykge1xuICAgIHRoaXMuaHN2Q3VycmVudCA9IGdldEhzdkZyb21IZXgoaGV4KTtcbiAgICB0aGlzLmhleEN1cnJlbnQgPSBoZXg7XG4gIH1cblxuICBvbkN1c3RvbVNlbGVjdGlvbihoc3Y6IElIU1YpIHtcbiAgICB0aGlzLmhzdkN1cnJlbnQgPSBoc3Y7XG4gICAgdGhpcy5oZXhDdXJyZW50ID0gZ2V0SGV4RnJvbUhzdihoc3YpO1xuICB9XG5cbiAgb3BlbkNoYW5nZShvcGVuOiBib29sZWFuKSB7XG4gICAgdGhpcy5vcGVuID0gb3BlbjtcbiAgfVxuXG4gIGNhbmNlbCgpIHtcbiAgICB0aGlzLm9wZW4gPSBmYWxzZTtcbiAgfVxuXG4gIGRvbmUoKSB7XG4gICAgdGhpcy5vcGVuID0gZmFsc2U7XG4gICAgaWYgKHRoaXMuaGV4Q3VycmVudCAhPT0gdGhpcy5jb2xvcikge1xuICAgICAgdGhpcy5jb2xvciA9IHRoaXMuaGV4Q3VycmVudDtcbiAgICAgIHRoaXMub25DaGFuZ2UodGhpcy5jb2xvcik7XG4gICAgfVxuICB9XG5cbiAgY2FuQXBwbHkoKSB7XG4gICAgcmV0dXJuIGlzVmFsaWRIZXgodGhpcy5oZXhDdXJyZW50KTtcbiAgfVxuXG4gIG9uSW5wdXQoaGV4OiBzdHJpbmcpIHtcbiAgICB0aGlzLmNvbG9yID0gaGV4O1xuXG4gICAgaWYgKGlzVmFsaWRIZXgoaGV4KSkge1xuICAgICAgdGhpcy5vblN3YXRjaFNlbGVjdGlvbihoZXgpO1xuICAgICAgdGhpcy5vbkNoYW5nZShoZXgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm9uQ2hhbmdlKG51bGwpO1xuICAgIH1cbiAgfVxuXG4gIGdldCBpc1ZhbGlkSW5wdXQoKSB7XG4gICAgcmV0dXJuICF0aGlzLmNvbG9yIHx8IGlzVmFsaWRIZXgodGhpcy5jb2xvcik7XG4gIH1cbn1cbiIsIlxuPGRpdiBjbGFzcz1cInNsZHMtY29sb3ItcGlja2VyX19zdW1tYXJ5IHNsZHMtZm9ybS1lbGVtZW50XCIgW2NsYXNzLnNsZHMtaGFzLWVycm9yXT1cIiFpc1ZhbGlkSW5wdXRcIj5cbiAgPGxhYmVsIGNsYXNzPVwic2xkcy1mb3JtLWVsZW1lbnRfX2xhYmVsIHNsZHMtY29sb3ItcGlja2VyX19zdW1tYXJ5LWxhYmVsXCIgW25nbEZvcm1MYWJlbF09XCJsYWJlbFwiIFthdHRyLmZvcl09XCJ1aWQgKyAnLXN1bW1hcnktaW5wdXQnXCIgW3JlcXVpcmVkXT1cInJlcXVpcmVkXCI+XG4gICAgPG5nbC1mb3JtLWhlbHAgY2xhc3M9XCJzbGRzLW0taG9yaXpvbnRhbF94eC1zbWFsbFwiICpuZ0lmPVwiZmllbGRMZXZlbEhlbHBUb29sdGlwXCIgW2NvbnRlbnRdPVwiZmllbGRMZXZlbEhlbHBUb29sdGlwXCI+PC9uZ2wtZm9ybS1oZWxwPlxuICA8L2xhYmVsPlxuICA8ZGl2IGNsYXNzPVwic2xkcy1mb3JtLWVsZW1lbnRfX2NvbnRyb2xcIj5cbiAgICA8YnV0dG9uIGNsYXNzPVwic2xkcy1idXR0b24gc2xkcy1jb2xvci1waWNrZXJfX3N1bW1hcnktYnV0dG9uIHNsZHMtYnV0dG9uX2ljb24gc2xkcy1idXR0b25faWNvbi1tb3JlXCIgW3RpdGxlXT1cImxhYmVsXCIgW25nbFBvcG92ZXJdPVwidGlwXCIgbmdsUG9wb3ZlclBsYWNlbWVudD1cImJvdHRvbS1sZWZ0XCIgW25nbFBvcG92ZXJPcGVuXT1cIm9wZW5cIiAobmdsUG9wb3Zlck9wZW5DaGFuZ2UpPVwib3BlbkNoYW5nZSgkZXZlbnQpXCIgbmdsUG9wb3ZlckNsYXNzPVwic2xkcy1jb2xvci1waWNrZXJfX3NlbGVjdG9yXCIgW25nbFBvcG92ZXJGb290ZXJdPVwiZm9vdGVyXCIgbmdsUG9wb3ZlckNsb3NlVmlzaWJsZT1cImZhbHNlXCIgW2Rpc2FibGVkXT1cImRpc2FibGVkXCI+PHNwYW4gY2xhc3M9XCJzbGRzLXN3YXRjaFwiIG5nbENvbG9ycGlja2VyU3dhdGNoIFtjb2xvcl09XCJpc1ZhbGlkSW5wdXQgPyBjb2xvciA6IGhleEN1cnJlbnRcIj48L3NwYW4+XG4gICAgICA8c3ZnIGNsYXNzPVwic2xkcy1idXR0b25fX2ljb24gc2xkcy1idXR0b25fX2ljb25fc21hbGwgc2xkcy1tLWxlZnRfeHgtc21hbGxcIiAqbmdJZj1cIiFkaXNhYmxlZFwiIG5nbEljb25OYW1lPVwidXRpbGl0eTpkb3duXCI+PC9zdmc+PHNwYW4gY2xhc3M9XCJzbGRzLWFzc2lzdGl2ZS10ZXh0XCI+e3sgbGFiZWwgfX06IHt7IGNvbG9yIH19PC9zcGFuPlxuICAgIDwvYnV0dG9uPlxuICAgIDxkaXYgY2xhc3M9XCJzbGRzLWNvbG9yLXBpY2tlcl9fc3VtbWFyeS1pbnB1dFwiPlxuICAgICAgPGlucHV0IGNsYXNzPVwic2xkcy1pbnB1dFwiIFtpZF09XCJ1aWQgKyAnLXN1bW1hcnktaW5wdXQnXCIgdHlwZT1cInRleHRcIiBbdmFsdWVdPVwiY29sb3JcIiAoaW5wdXQpPVwib25JbnB1dCgkZXZlbnQudGFyZ2V0LnZhbHVlKVwiIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiIFtyZWFkT25seV09XCJyZWFkb25seUlucHV0XCIgbWF4bGVuZ3RoPVwiN1wiIFtwbGFjZWhvbGRlcl09XCJwbGFjZWhvbGRlciB8fCAnJ1wiPlxuICAgIDwvZGl2PlxuICAgIDxwIGNsYXNzPVwic2xkcy1mb3JtLWVycm9yXCIgKm5nSWY9XCIhaXNWYWxpZElucHV0XCIgW25nbEludGVybmFsT3V0bGV0XT1cImludmFsaWRDb2xvckxhYmVsXCI+PC9wPlxuICA8L2Rpdj5cbjwvZGl2PlxuPG5nLXRlbXBsYXRlICN0aXA+XG4gIDxuZy1jb250YWluZXIgW25nU3dpdGNoXT1cInZhcmlhbnRcIj5cbiAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCInc3dhdGNoZXMnXCI+XG4gICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwic3dhdGNoZXNcIj48L25nLXRlbXBsYXRlPlxuICAgIDwvbmctY29udGFpbmVyPlxuICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cIidjdXN0b20nXCI+XG4gICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwiY3VzdG9tXCI+PC9uZy10ZW1wbGF0ZT5cbiAgICA8L25nLWNvbnRhaW5lcj5cbiAgICA8bmdsLXRhYnNldCAqbmdTd2l0Y2hEZWZhdWx0IFtzZWxlY3RlZF09XCJkZWZhdWx0U2VsZWN0ZWRUYWJcIiAoc2VsZWN0ZWRDaGFuZ2UpPVwiZGVmYXVsdFNlbGVjdGVkVGFiID0gJGV2ZW50LmlkXCI+XG4gICAgICA8bmctdGVtcGxhdGUgbmdsLXRhYiBpZD1cInN3YXRjaGVzXCIgW2xhYmVsXT1cInN3YXRjaFRhYkxhYmVsXCI+XG4gICAgICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJzd2F0Y2hlc1wiPjwvbmctdGVtcGxhdGU+XG4gICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgPG5nLXRlbXBsYXRlIG5nbC10YWIgaWQ9XCJjdXN0b21cIiBbbGFiZWxdPVwiY3VzdG9tVGFiTGFiZWxcIj5cbiAgICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImN1c3RvbVwiPjwvbmctdGVtcGxhdGU+XG4gICAgICA8L25nLXRlbXBsYXRlPlxuICAgIDwvbmdsLXRhYnNldD5cbiAgPC9uZy1jb250YWluZXI+XG48L25nLXRlbXBsYXRlPlxuPG5nLXRlbXBsYXRlICNzd2F0Y2hlcz5cbiAgPG5nbC1jb2xvcnBpY2tlci1zd2F0Y2hlcyBbaGV4XT1cImhleEN1cnJlbnRcIiAoaGV4Q2hhbmdlKT1cIm9uU3dhdGNoU2VsZWN0aW9uKCRldmVudClcIiBbc3dhdGNoQ29sb3JzXT1cInN3YXRjaENvbG9yc1wiPjwvbmdsLWNvbG9ycGlja2VyLXN3YXRjaGVzPlxuPC9uZy10ZW1wbGF0ZT5cbjxuZy10ZW1wbGF0ZSAjY3VzdG9tPlxuICA8bmdsLWNvbG9ycGlja2VyLWN1c3RvbSBbaHN2XT1cImhzdkN1cnJlbnRcIiAoaHN2Q2hhbmdlKT1cIm9uQ3VzdG9tU2VsZWN0aW9uKCRldmVudClcIj48L25nbC1jb2xvcnBpY2tlci1jdXN0b20+XG48L25nLXRlbXBsYXRlPlxuPG5nLXRlbXBsYXRlICNmb290ZXI+XG4gIDxkaXYgY2xhc3M9XCJzbGRzLWNvbG9yLXBpY2tlcl9fc2VsZWN0b3ItZm9vdGVyXCI+XG4gICAgPGJ1dHRvbiBjbGFzcz1cInNsZHMtYnV0dG9uIHNsZHMtYnV0dG9uX25ldXRyYWxcIiB0eXBlPVwiYnV0dG9uXCIgKGNsaWNrKT1cImNhbmNlbCgpXCI+e3sgY2FuY2VsQnV0dG9uTGFiZWwgfX08L2J1dHRvbj5cbiAgICA8YnV0dG9uIGNsYXNzPVwic2xkcy1idXR0b24gc2xkcy1idXR0b25fYnJhbmRcIiB0eXBlPVwiYnV0dG9uXCIgKGNsaWNrKT1cImRvbmUoKVwiIFtkaXNhYmxlZF09XCIhY2FuQXBwbHkoKVwiPnt7IHN1Ym1pdEJ1dHRvbkxhYmVsIH19PC9idXR0b24+XG4gIDwvZGl2PlxuPC9uZy10ZW1wbGF0ZT4iXX0=
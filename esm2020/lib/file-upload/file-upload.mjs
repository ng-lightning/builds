import { __decorate } from "tslib";
import { Component, Input, ChangeDetectionStrategy, HostBinding } from '@angular/core';
import { NG_VALUE_ACCESSOR, NG_VALIDATORS } from '@angular/forms';
import { trapEvent, uniqueId } from '../util/util';
import { InputBoolean, InputNumber } from '../util/convert';
import { isFileTypeAccepted } from './file-upload.util';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../icons/svg";
import * as i3 from "../util/outlet";
export class NglFileUpload {
    constructor(element, renderer) {
        this.element = element;
        this.renderer = renderer;
        /**
         * File types that can be accepted. See [input accept Attribute](https://www.w3schools.com/tags/att_input_accept.asp).
         */
        this.accept = null;
        /**
         * Whether file selection is disabled.
         */
        this.disabled = false;
        /**
          * How many files can be selected simultaneously. `0` means unlimited.
          */
        this.maxFiles = 1;
        /**
         * File size limit in bytes. `0` means unlimited.
         */
        this.maxFilesize = 0;
        /**
         * Message to display when there is in an error state.
         */
        this.error = null;
        /**
         * Text for button to open file selector.
         */
        this.uploadButtonLabel = 'Upload Files';
        /**
         * Text to display inside drop zone.
         */
        this.dropZoneLabel = 'or Drop Files';
        this.uid = uniqueId('file-upload');
        this.isDragOver = false;
        this.files = [];
        this.onChange = null;
        this.onTouched = () => { };
        this.validatorChange = () => { };
        this.renderer.addClass(this.element.nativeElement, 'slds-form-element');
    }
    writeValue(value) {
        this.files = value;
    }
    registerOnChange(fn) { this.onChange = fn; }
    registerOnTouched(fn) { this.onTouched = fn; }
    registerOnValidatorChange(fn) { this.validatorChange = fn; }
    setDisabledState(isDisabled) { this.disabled = isDisabled; }
    validate(c) {
        const files = c.value;
        if (!files || files.length === 0) {
            return null;
        }
        if (this.maxFiles > 0 && files.length > this.maxFiles) {
            return { nglFileUpload: { maxFiles: files.length } };
        }
        for (let i = 0, n = files.length; i < n; i++) {
            const file = files[i];
            if (this.accept && !isFileTypeAccepted(this.accept, file)) {
                return { nglFileUpload: { invalidType: file } };
            }
            if (this.maxFilesize && file.size > this.maxFilesize) {
                return { nglFileUpload: { maxFilesize: file } };
            }
        }
        return null;
    }
    ngOnChanges(changes) {
        if (changes['maxFiles'] || changes['maxFilesize'] || changes['accept']) {
            this.validatorChange();
        }
    }
    onDropZone(evt) {
        trapEvent(evt);
        if (this.disabled) {
            return;
        }
        this.isDragOver = evt.type === 'dragover';
        if (evt.type === 'drop' && evt.dataTransfer) {
            this.select(evt.dataTransfer.files);
        }
    }
    onInputChange(files) {
        this.select(files);
    }
    select(files) {
        this.onChange(Array.from(files));
    }
}
NglFileUpload.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglFileUpload, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Component });
NglFileUpload.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: NglFileUpload, selector: "ngl-file-upload", inputs: { label: "label", accept: "accept", disabled: "disabled", maxFiles: "maxFiles", maxFilesize: "maxFilesize", error: "error", uploadButtonLabel: "uploadButtonLabel", dropZoneLabel: "dropZoneLabel" }, host: { properties: { "class.slds-has-error": "this.error" } }, providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: NglFileUpload,
            multi: true
        },
        {
            provide: NG_VALIDATORS,
            useExisting: NglFileUpload,
            multi: true
        }
    ], usesOnChanges: true, ngImport: i0, template: "<span class=\"slds-form-element__label\" *ngIf=\"label\" [id]=\"uid + '-primary-label'\" [nglInternalOutlet]=\"label\"></span>\n<div class=\"slds-form-element__control\">\n  <div class=\"slds-file-selector slds-file-selector_files\">\n    <div class=\"slds-file-selector__dropzone\" [class.slds-has-drag-over]=\"isDragOver\" (dragover)=\"onDropZone($event)\" (dragleave)=\"onDropZone($event)\" (drop)=\"onDropZone($event)\">\n      <input class=\"slds-file-selector__input slds-assistive-text\" type=\"file\" [id]=\"uid\" [attr.accept]=\"accept\" [disabled]=\"disabled\" [multiple]=\"maxFiles !== 1\" [attr.aria-describedby]=\"error ? uid + '-error' : null\" [attr.aria-labelledby]=\"uid + '-primary-label ' + uid + '-secondary-label'\" (change)=\"onInputChange($event.target.files)\">\n      <label class=\"slds-file-selector__body\" [attr.for]=\"uid\" [id]=\"uid + '-secondary-label'\"><span class=\"slds-file-selector__button slds-button slds-button_neutral\">\n          <svg class=\"slds-button__icon slds-button__icon_left\" nglIconName=\"utility:upload\"></svg>{{ uploadButtonLabel }}</span><span class=\"slds-file-selector__text slds-medium-show\">{{ dropZoneLabel }}</span></label>\n    </div>\n  </div>\n</div>\n<div class=\"slds-form-element__help\" *ngIf=\"error\" [id]=\"uid + '-error'\" [nglInternalOutlet]=\"error\"></div>", dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i2.NglIconSvg, selector: "svg[nglIconName]", inputs: ["nglIconName", "xPos"] }, { kind: "component", type: i3.NglInternalOutlet, selector: "[nglInternalOutlet]", inputs: ["nglInternalOutlet", "nglInternalOutletContext"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
__decorate([
    InputBoolean()
], NglFileUpload.prototype, "disabled", void 0);
__decorate([
    InputNumber()
], NglFileUpload.prototype, "maxFiles", void 0);
__decorate([
    InputNumber()
], NglFileUpload.prototype, "maxFilesize", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglFileUpload, decorators: [{
            type: Component,
            args: [{ selector: 'ngl-file-upload', changeDetection: ChangeDetectionStrategy.OnPush, providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: NglFileUpload,
                            multi: true
                        },
                        {
                            provide: NG_VALIDATORS,
                            useExisting: NglFileUpload,
                            multi: true
                        }
                    ], template: "<span class=\"slds-form-element__label\" *ngIf=\"label\" [id]=\"uid + '-primary-label'\" [nglInternalOutlet]=\"label\"></span>\n<div class=\"slds-form-element__control\">\n  <div class=\"slds-file-selector slds-file-selector_files\">\n    <div class=\"slds-file-selector__dropzone\" [class.slds-has-drag-over]=\"isDragOver\" (dragover)=\"onDropZone($event)\" (dragleave)=\"onDropZone($event)\" (drop)=\"onDropZone($event)\">\n      <input class=\"slds-file-selector__input slds-assistive-text\" type=\"file\" [id]=\"uid\" [attr.accept]=\"accept\" [disabled]=\"disabled\" [multiple]=\"maxFiles !== 1\" [attr.aria-describedby]=\"error ? uid + '-error' : null\" [attr.aria-labelledby]=\"uid + '-primary-label ' + uid + '-secondary-label'\" (change)=\"onInputChange($event.target.files)\">\n      <label class=\"slds-file-selector__body\" [attr.for]=\"uid\" [id]=\"uid + '-secondary-label'\"><span class=\"slds-file-selector__button slds-button slds-button_neutral\">\n          <svg class=\"slds-button__icon slds-button__icon_left\" nglIconName=\"utility:upload\"></svg>{{ uploadButtonLabel }}</span><span class=\"slds-file-selector__text slds-medium-show\">{{ dropZoneLabel }}</span></label>\n    </div>\n  </div>\n</div>\n<div class=\"slds-form-element__help\" *ngIf=\"error\" [id]=\"uid + '-error'\" [nglInternalOutlet]=\"error\"></div>" }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }]; }, propDecorators: { label: [{
                type: Input
            }], accept: [{
                type: Input
            }], disabled: [{
                type: Input
            }], maxFiles: [{
                type: Input
            }], maxFilesize: [{
                type: Input
            }], error: [{
                type: HostBinding,
                args: ['class.slds-has-error']
            }, {
                type: Input
            }], uploadButtonLabel: [{
                type: Input
            }], dropZoneLabel: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS11cGxvYWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1saWdodG5pbmcvc3JjL2xpYi9maWxlLXVwbG9hZC9maWxlLXVwbG9hZC50cyIsIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nLWxpZ2h0bmluZy9zcmMvbGliL2ZpbGUtdXBsb2FkL2ZpbGUtdXBsb2FkLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLHVCQUF1QixFQUFzQyxXQUFXLEVBQTRCLE1BQU0sZUFBZSxDQUFDO0FBQ3JKLE9BQU8sRUFBRSxpQkFBaUIsRUFBd0IsYUFBYSxFQUFnRCxNQUFNLGdCQUFnQixDQUFDO0FBQ3RJLE9BQU8sRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQ25ELE9BQU8sRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDNUQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7Ozs7O0FBbUJ4RCxNQUFNLE9BQU8sYUFBYTtJQWlEeEIsWUFBb0IsT0FBbUIsRUFBVSxRQUFtQjtRQUFoRCxZQUFPLEdBQVAsT0FBTyxDQUFZO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQTFDcEU7O1dBRUc7UUFDTSxXQUFNLEdBQXNCLElBQUksQ0FBQztRQUUxQzs7V0FFRztRQUNzQixhQUFRLEdBQUcsS0FBSyxDQUFDO1FBRTFDOztZQUVJO1FBQ29CLGFBQVEsR0FBRyxDQUFDLENBQUM7UUFFckM7O1dBRUc7UUFDcUIsZ0JBQVcsR0FBRyxDQUFDLENBQUM7UUFFeEM7O1dBRUc7UUFFTSxVQUFLLEdBQThCLElBQUksQ0FBQztRQUVqRDs7V0FFRztRQUNNLHNCQUFpQixHQUFHLGNBQWMsQ0FBQztRQUU1Qzs7V0FFRztRQUNNLGtCQUFhLEdBQUcsZUFBZSxDQUFDO1FBRXpD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S0FBSztnQkFLRyxhQUFhO3NCQUFyQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIEVsZW1lbnRSZWYsIFJlbmRlcmVyMiwgVGVtcGxhdGVSZWYsIEhvc3RCaW5kaW5nLCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5HX1ZBTFVFX0FDQ0VTU09SLCBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMSURBVE9SUywgVmFsaWRhdG9yLCBBYnN0cmFjdENvbnRyb2wsIFZhbGlkYXRpb25FcnJvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyB0cmFwRXZlbnQsIHVuaXF1ZUlkIH0gZnJvbSAnLi4vdXRpbC91dGlsJztcbmltcG9ydCB7IElucHV0Qm9vbGVhbiwgSW5wdXROdW1iZXIgfSBmcm9tICcuLi91dGlsL2NvbnZlcnQnO1xuaW1wb3J0IHsgaXNGaWxlVHlwZUFjY2VwdGVkIH0gZnJvbSAnLi9maWxlLXVwbG9hZC51dGlsJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmdsLWZpbGUtdXBsb2FkJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHRlbXBsYXRlVXJsOiAnLi9maWxlLXVwbG9hZC5odG1sJyxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICB1c2VFeGlzdGluZzogTmdsRmlsZVVwbG9hZCxcbiAgICAgIG11bHRpOiB0cnVlXG4gICAgfSxcbiAgICB7XG4gICAgICBwcm92aWRlOiBOR19WQUxJREFUT1JTLFxuICAgICAgdXNlRXhpc3Rpbmc6IE5nbEZpbGVVcGxvYWQsXG4gICAgICBtdWx0aTogdHJ1ZVxuICAgIH1cbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgTmdsRmlsZVVwbG9hZCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBWYWxpZGF0b3IsIE9uQ2hhbmdlcyB7XG5cbiAgLyoqXG4gICAqIExhYmVsIHRoYXQgYXBwZWFycyBhYm92ZSB0aGUgdXBsb2FkIGFyZWEuXG4gICAqL1xuICBASW5wdXQoKSBsYWJlbDogc3RyaW5nIHwgVGVtcGxhdGVSZWY8YW55PjtcblxuICAvKipcbiAgICogRmlsZSB0eXBlcyB0aGF0IGNhbiBiZSBhY2NlcHRlZC4gU2VlIFtpbnB1dCBhY2NlcHQgQXR0cmlidXRlXShodHRwczovL3d3dy53M3NjaG9vbHMuY29tL3RhZ3MvYXR0X2lucHV0X2FjY2VwdC5hc3ApLlxuICAgKi9cbiAgQElucHV0KCkgYWNjZXB0OiBzdHJpbmcgfCBzdHJpbmdbXSA9IG51bGw7XG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgZmlsZSBzZWxlY3Rpb24gaXMgZGlzYWJsZWQuXG4gICAqL1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgZGlzYWJsZWQgPSBmYWxzZTtcblxuICAvKipcbiAgICAqIEhvdyBtYW55IGZpbGVzIGNhbiBiZSBzZWxlY3RlZCBzaW11bHRhbmVvdXNseS4gYDBgIG1lYW5zIHVubGltaXRlZC5cbiAgICAqL1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBtYXhGaWxlcyA9IDE7XG5cbiAgLyoqXG4gICAqIEZpbGUgc2l6ZSBsaW1pdCBpbiBieXRlcy4gYDBgIG1lYW5zIHVubGltaXRlZC5cbiAgICovXG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIG1heEZpbGVzaXplID0gMDtcblxuICAvKipcbiAgICogTWVzc2FnZSB0byBkaXNwbGF5IHdoZW4gdGhlcmUgaXMgaW4gYW4gZXJyb3Igc3RhdGUuXG4gICAqL1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnNsZHMtaGFzLWVycm9yJylcbiAgQElucHV0KCkgZXJyb3I6IHN0cmluZyB8IFRlbXBsYXRlUmVmPGFueT4gPSBudWxsO1xuXG4gIC8qKlxuICAgKiBUZXh0IGZvciBidXR0b24gdG8gb3BlbiBmaWxlIHNlbGVjdG9yLlxuICAgKi9cbiAgQElucHV0KCkgdXBsb2FkQnV0dG9uTGFiZWwgPSAnVXBsb2FkIEZpbGVzJztcblxuICAvKipcbiAgICogVGV4dCB0byBkaXNwbGF5IGluc2lkZSBkcm9wIHpvbmUuXG4gICAqL1xuICBASW5wdXQoKSBkcm9wWm9uZUxhYmVsID0gJ29yIERyb3AgRmlsZXMnO1xuXG4gIHVpZCA9IHVuaXF1ZUlkKCdmaWxlLXVwbG9hZCcpO1xuXG4gIGlzRHJhZ092ZXIgPSBmYWxzZTtcblxuICBmaWxlczogRmlsZVtdID0gW107XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50UmVmLCBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHtcbiAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LCAnc2xkcy1mb3JtLWVsZW1lbnQnKTtcbiAgfVxuXG4gIG9uQ2hhbmdlOiBGdW5jdGlvbiB8IG51bGwgPSBudWxsO1xuXG4gIG9uVG91Y2hlZCA9ICgpID0+IHt9O1xuXG4gIHZhbGlkYXRvckNoYW5nZSA9ICgpID0+IHt9O1xuXG4gIHdyaXRlVmFsdWUodmFsdWU6IEZpbGVbXSkge1xuICAgIHRoaXMuZmlsZXMgPSB2YWx1ZTtcbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46ICh2YWx1ZTogYW55KSA9PiBhbnkpOiB2b2lkIHsgdGhpcy5vbkNoYW5nZSA9IGZuOyB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IGFueSk6IHZvaWQgeyB0aGlzLm9uVG91Y2hlZCA9IGZuOyB9XG5cbiAgcmVnaXN0ZXJPblZhbGlkYXRvckNoYW5nZShmbjogKCkgPT4gdm9pZCk6IHZvaWQgeyB0aGlzLnZhbGlkYXRvckNoYW5nZSA9IGZuOyB9XG5cbiAgc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKSB7IHRoaXMuZGlzYWJsZWQgPSBpc0Rpc2FibGVkOyB9XG5cbiAgdmFsaWRhdGUoYzogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwge1xuICAgIGNvbnN0IGZpbGVzID0gYy52YWx1ZSBhcyBGaWxlW107XG5cbiAgICBpZiAoIWZpbGVzIHx8IGZpbGVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMubWF4RmlsZXMgPiAwICYmIGZpbGVzLmxlbmd0aCA+IHRoaXMubWF4RmlsZXMpIHtcbiAgICAgIHJldHVybiB7IG5nbEZpbGVVcGxvYWQ6IHsgbWF4RmlsZXM6IGZpbGVzLmxlbmd0aCB9IH07XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDAsIG4gPSBmaWxlcy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgIGNvbnN0IGZpbGUgPSBmaWxlc1tpXTtcbiAgICAgIGlmICh0aGlzLmFjY2VwdCAmJiAhaXNGaWxlVHlwZUFjY2VwdGVkKHRoaXMuYWNjZXB0LCBmaWxlKSkge1xuICAgICAgICByZXR1cm4geyBuZ2xGaWxlVXBsb2FkOiB7IGludmFsaWRUeXBlOiBmaWxlIH0gfTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLm1heEZpbGVzaXplICYmIGZpbGUuc2l6ZSA+IHRoaXMubWF4RmlsZXNpemUpIHtcbiAgICAgICAgcmV0dXJuIHsgbmdsRmlsZVVwbG9hZDogeyBtYXhGaWxlc2l6ZTogZmlsZSB9IH07XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgaWYgKGNoYW5nZXNbJ21heEZpbGVzJ10gfHwgY2hhbmdlc1snbWF4RmlsZXNpemUnXSB8fCBjaGFuZ2VzWydhY2NlcHQnXSkge1xuICAgICAgdGhpcy52YWxpZGF0b3JDaGFuZ2UoKTtcbiAgICB9XG4gIH1cblxuICBvbkRyb3Bab25lKGV2dDogRHJhZ0V2ZW50KSB7XG4gICAgdHJhcEV2ZW50KGV2dCk7XG4gICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmlzRHJhZ092ZXIgPSBldnQudHlwZSA9PT0gJ2RyYWdvdmVyJztcblxuICAgIGlmIChldnQudHlwZSA9PT0gJ2Ryb3AnICYmIGV2dC5kYXRhVHJhbnNmZXIpIHtcbiAgICAgIHRoaXMuc2VsZWN0KGV2dC5kYXRhVHJhbnNmZXIuZmlsZXMpO1xuICAgIH1cbiAgfVxuXG4gIG9uSW5wdXRDaGFuZ2UoZmlsZXM6IEZpbGVMaXN0KSB7XG4gICAgdGhpcy5zZWxlY3QoZmlsZXMpO1xuICB9XG5cbiAgcHJpdmF0ZSBzZWxlY3QoZmlsZXM6IEZpbGVMaXN0KSB7XG4gICAgdGhpcy5vbkNoYW5nZShBcnJheS5mcm9tKGZpbGVzKSk7XG4gIH1cbn1cbiIsIjxzcGFuIGNsYXNzPVwic2xkcy1mb3JtLWVsZW1lbnRfX2xhYmVsXCIgKm5nSWY9XCJsYWJlbFwiIFtpZF09XCJ1aWQgKyAnLXByaW1hcnktbGFiZWwnXCIgW25nbEludGVybmFsT3V0bGV0XT1cImxhYmVsXCI+PC9zcGFuPlxuPGRpdiBjbGFzcz1cInNsZHMtZm9ybS1lbGVtZW50X19jb250cm9sXCI+XG4gIDxkaXYgY2xhc3M9XCJzbGRzLWZpbGUtc2VsZWN0b3Igc2xkcy1maWxlLXNlbGVjdG9yX2ZpbGVzXCI+XG4gICAgPGRpdiBjbGFzcz1cInNsZHMtZmlsZS1zZWxlY3Rvcl9fZHJvcHpvbmVcIiBbY2xhc3Muc2xkcy1oYXMtZHJhZy1vdmVyXT1cImlzRHJhZ092ZXJcIiAoZHJhZ292ZXIpPVwib25Ecm9wWm9uZSgkZXZlbnQpXCIgKGRyYWdsZWF2ZSk9XCJvbkRyb3Bab25lKCRldmVudClcIiAoZHJvcCk9XCJvbkRyb3Bab25lKCRldmVudClcIj5cbiAgICAgIDxpbnB1dCBjbGFzcz1cInNsZHMtZmlsZS1zZWxlY3Rvcl9faW5wdXQgc2xkcy1hc3Npc3RpdmUtdGV4dFwiIHR5cGU9XCJmaWxlXCIgW2lkXT1cInVpZFwiIFthdHRyLmFjY2VwdF09XCJhY2NlcHRcIiBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIiBbbXVsdGlwbGVdPVwibWF4RmlsZXMgIT09IDFcIiBbYXR0ci5hcmlhLWRlc2NyaWJlZGJ5XT1cImVycm9yID8gdWlkICsgJy1lcnJvcicgOiBudWxsXCIgW2F0dHIuYXJpYS1sYWJlbGxlZGJ5XT1cInVpZCArICctcHJpbWFyeS1sYWJlbCAnICsgdWlkICsgJy1zZWNvbmRhcnktbGFiZWwnXCIgKGNoYW5nZSk9XCJvbklucHV0Q2hhbmdlKCRldmVudC50YXJnZXQuZmlsZXMpXCI+XG4gICAgICA8bGFiZWwgY2xhc3M9XCJzbGRzLWZpbGUtc2VsZWN0b3JfX2JvZHlcIiBbYXR0ci5mb3JdPVwidWlkXCIgW2lkXT1cInVpZCArICctc2Vjb25kYXJ5LWxhYmVsJ1wiPjxzcGFuIGNsYXNzPVwic2xkcy1maWxlLXNlbGVjdG9yX19idXR0b24gc2xkcy1idXR0b24gc2xkcy1idXR0b25fbmV1dHJhbFwiPlxuICAgICAgICAgIDxzdmcgY2xhc3M9XCJzbGRzLWJ1dHRvbl9faWNvbiBzbGRzLWJ1dHRvbl9faWNvbl9sZWZ0XCIgbmdsSWNvbk5hbWU9XCJ1dGlsaXR5OnVwbG9hZFwiPjwvc3ZnPnt7IHVwbG9hZEJ1dHRvbkxhYmVsIH19PC9zcGFuPjxzcGFuIGNsYXNzPVwic2xkcy1maWxlLXNlbGVjdG9yX190ZXh0IHNsZHMtbWVkaXVtLXNob3dcIj57eyBkcm9wWm9uZUxhYmVsIH19PC9zcGFuPjwvbGFiZWw+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC9kaXY+XG48ZGl2IGNsYXNzPVwic2xkcy1mb3JtLWVsZW1lbnRfX2hlbHBcIiAqbmdJZj1cImVycm9yXCIgW2lkXT1cInVpZCArICctZXJyb3InXCIgW25nbEludGVybmFsT3V0bGV0XT1cImVycm9yXCI+PC9kaXY+Il19
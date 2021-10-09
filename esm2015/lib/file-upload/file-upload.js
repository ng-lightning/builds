import { __decorate } from "tslib";
import { Component, Input, ChangeDetectionStrategy, ElementRef, Renderer2, HostBinding } from '@angular/core';
import { NG_VALUE_ACCESSOR, NG_VALIDATORS } from '@angular/forms';
import { trapEvent, uniqueId } from '../util/util';
import { InputBoolean, InputNumber } from '../util/convert';
import { isFileTypeAccepted } from './file-upload.util';
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
NglFileUpload.decorators = [
    { type: Component, args: [{
                selector: 'ngl-file-upload',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: "<span class=\"slds-form-element__label\" *ngIf=\"label\" [id]=\"uid + '-primary-label'\" [nglInternalOutlet]=\"label\"></span>\n<div class=\"slds-form-element__control\">\n  <div class=\"slds-file-selector slds-file-selector_files\">\n    <div class=\"slds-file-selector__dropzone\" [class.slds-has-drag-over]=\"isDragOver\" (dragover)=\"onDropZone($event)\" (dragleave)=\"onDropZone($event)\" (drop)=\"onDropZone($event)\">\n      <input class=\"slds-file-selector__input slds-assistive-text\" type=\"file\" [id]=\"uid\" [attr.accept]=\"accept\" [disabled]=\"disabled\" [multiple]=\"maxFiles !== 1\" [attr.aria-describedby]=\"error ? uid + '-error' : null\" [attr.aria-labelledby]=\"uid + '-primary-label ' + uid + '-secondary-label'\" (change)=\"onInputChange($event.target.files)\">\n      <label class=\"slds-file-selector__body\" [attr.for]=\"uid\" [id]=\"uid + '-secondary-label'\"><span class=\"slds-file-selector__button slds-button slds-button_neutral\">\n          <svg class=\"slds-button__icon slds-button__icon_left\" nglIconName=\"utility:upload\"></svg>{{ uploadButtonLabel }}</span><span class=\"slds-file-selector__text slds-medium-show\">{{ dropZoneLabel }}</span></label>\n    </div>\n  </div>\n</div>\n<div class=\"slds-form-element__help\" *ngIf=\"error\" [id]=\"uid + '-error'\" [nglInternalOutlet]=\"error\"></div>",
                providers: [
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
                ]
            },] }
];
NglFileUpload.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
NglFileUpload.propDecorators = {
    label: [{ type: Input }],
    accept: [{ type: Input }],
    disabled: [{ type: Input }],
    maxFiles: [{ type: Input }],
    maxFilesize: [{ type: Input }],
    error: [{ type: HostBinding, args: ['class.slds-has-error',] }, { type: Input }],
    uploadButtonLabel: [{ type: Input }],
    dropZoneLabel: [{ type: Input }]
};
__decorate([
    InputBoolean()
], NglFileUpload.prototype, "disabled", void 0);
__decorate([
    InputNumber()
], NglFileUpload.prototype, "maxFiles", void 0);
__decorate([
    InputNumber()
], NglFileUpload.prototype, "maxFilesize", void 0);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS11cGxvYWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1saWdodG5pbmcvc3JjL2xpYi9maWxlLXVwbG9hZC9maWxlLXVwbG9hZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsdUJBQXVCLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBZSxXQUFXLEVBQTRCLE1BQU0sZUFBZSxDQUFDO0FBQ3JKLE9BQU8sRUFBRSxpQkFBaUIsRUFBd0IsYUFBYSxFQUFnRCxNQUFNLGdCQUFnQixDQUFDO0FBQ3RJLE9BQU8sRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQ25ELE9BQU8sRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDNUQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFtQnhELE1BQU0sT0FBTyxhQUFhO0lBaUR4QixZQUFvQixPQUFtQixFQUFVLFFBQW1CO1FBQWhELFlBQU8sR0FBUCxPQUFPLENBQVk7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBMUNwRTs7V0FFRztRQUNNLFdBQU0sR0FBc0IsSUFBSSxDQUFDO1FBRTFDOztXQUVHO1FBQ3NCLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFFMUM7O1lBRUk7UUFDb0IsYUFBUSxHQUFHLENBQUMsQ0FBQztRQUVyQzs7V0FFRztRQUNxQixnQkFBVyxHQUFHLENBQUMsQ0FBQztRQUV4Qzs7V0FFRztRQUVNLFVBQUssR0FBOEIsSUFBSSxDQUFDO1FBRWpEOztXQUVHO1FBQ00sc0JBQWlCLEdBQUcsY0FBYyxDQUFDO1FBRTVDOztXQUVHO1FBQ00sa0JBQWEsR0FBRyxlQUFlLENBQUM7UUFFekMsUUFBRyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUU5QixlQUFVLEdBQUcsS0FBSyxDQUFD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QyxLQUFlO1FBQzNCLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDckIsQ0FBQztJQUVPLE1BQU0sQ0FBQyxLQUFlO1FBQzVCLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQ25DLENBQUM7OztZQXpJRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0IsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLHEwQ0FBaUM7Z0JBQ2pDLFNBQVMsRUFBRTtvQkFDVDt3QkFDRSxPQUFPLEVBQUUsaUJBQWlCO3dCQUMxQixXQUFXLEVBQUUsYUFBYTt3QkFDMUIsS0FBSyxFQUFFLElBQUk7cUJBQ1o7b0JBQ0Q7d0JBQ0UsT0FBTyxFQUFFLGFBQWE7d0JBQ3RCLFdBQVcsRUFBRSxhQUFhO3dCQUMxQixLQUFLLEVBQUUsSUFBSTtxQkFDWjtpQkFDRjthQUNGOzs7WUF0Qm1ELFVBQVU7WUFBRSxTQUFTOzs7b0JBNEJ0RSxLQUFLO3FCQUtMLEtBQUs7dUJBS0wsS0FBSzt1QkFLTCxLQUFLOzBCQUtMLEtBQUs7b0JBS0wsV0FBVyxTQUFDLHNCQUFzQixjQUNsQyxLQUFLO2dDQUtMLEtBQUs7NEJBS0wsS0FBSzs7QUExQm1CO0lBQWYsWUFBWSxFQUFFOytDQUFrQjtBQUtsQjtJQUFkLFdBQVcsRUFBRTsrQ0FBYztBQUtiO0lBQWQsV0FBVyxFQUFFO2tEQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBFbGVtZW50UmVmLCBSZW5kZXJlcjIsIFRlbXBsYXRlUmVmLCBIb3N0QmluZGluZywgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOR19WQUxVRV9BQ0NFU1NPUiwgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTElEQVRPUlMsIFZhbGlkYXRvciwgQWJzdHJhY3RDb250cm9sLCBWYWxpZGF0aW9uRXJyb3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgdHJhcEV2ZW50LCB1bmlxdWVJZCB9IGZyb20gJy4uL3V0aWwvdXRpbCc7XG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4sIElucHV0TnVtYmVyIH0gZnJvbSAnLi4vdXRpbC9jb252ZXJ0JztcbmltcG9ydCB7IGlzRmlsZVR5cGVBY2NlcHRlZCB9IGZyb20gJy4vZmlsZS11cGxvYWQudXRpbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25nbC1maWxlLXVwbG9hZCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICB0ZW1wbGF0ZVVybDogJy4vZmlsZS11cGxvYWQuaHRtbCcsXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgdXNlRXhpc3Rpbmc6IE5nbEZpbGVVcGxvYWQsXG4gICAgICBtdWx0aTogdHJ1ZVxuICAgIH0sXG4gICAge1xuICAgICAgcHJvdmlkZTogTkdfVkFMSURBVE9SUyxcbiAgICAgIHVzZUV4aXN0aW5nOiBOZ2xGaWxlVXBsb2FkLFxuICAgICAgbXVsdGk6IHRydWVcbiAgICB9XG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIE5nbEZpbGVVcGxvYWQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgVmFsaWRhdG9yLCBPbkNoYW5nZXMge1xuXG4gIC8qKlxuICAgKiBMYWJlbCB0aGF0IGFwcGVhcnMgYWJvdmUgdGhlIHVwbG9hZCBhcmVhLlxuICAgKi9cbiAgQElucHV0KCkgbGFiZWw6IHN0cmluZyB8IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgLyoqXG4gICAqIEZpbGUgdHlwZXMgdGhhdCBjYW4gYmUgYWNjZXB0ZWQuIFNlZSBbaW5wdXQgYWNjZXB0IEF0dHJpYnV0ZV0oaHR0cHM6Ly93d3cudzNzY2hvb2xzLmNvbS90YWdzL2F0dF9pbnB1dF9hY2NlcHQuYXNwKS5cbiAgICovXG4gIEBJbnB1dCgpIGFjY2VwdDogc3RyaW5nIHwgc3RyaW5nW10gPSBudWxsO1xuXG4gIC8qKlxuICAgKiBXaGV0aGVyIGZpbGUgc2VsZWN0aW9uIGlzIGRpc2FibGVkLlxuICAgKi9cbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGRpc2FibGVkID0gZmFsc2U7XG5cbiAgLyoqXG4gICAgKiBIb3cgbWFueSBmaWxlcyBjYW4gYmUgc2VsZWN0ZWQgc2ltdWx0YW5lb3VzbHkuIGAwYCBtZWFucyB1bmxpbWl0ZWQuXG4gICAgKi9cbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgbWF4RmlsZXMgPSAxO1xuXG4gIC8qKlxuICAgKiBGaWxlIHNpemUgbGltaXQgaW4gYnl0ZXMuIGAwYCBtZWFucyB1bmxpbWl0ZWQuXG4gICAqL1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBtYXhGaWxlc2l6ZSA9IDA7XG5cbiAgLyoqXG4gICAqIE1lc3NhZ2UgdG8gZGlzcGxheSB3aGVuIHRoZXJlIGlzIGluIGFuIGVycm9yIHN0YXRlLlxuICAgKi9cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5zbGRzLWhhcy1lcnJvcicpXG4gIEBJbnB1dCgpIGVycm9yOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjxhbnk+ID0gbnVsbDtcblxuICAvKipcbiAgICogVGV4dCBmb3IgYnV0dG9uIHRvIG9wZW4gZmlsZSBzZWxlY3Rvci5cbiAgICovXG4gIEBJbnB1dCgpIHVwbG9hZEJ1dHRvbkxhYmVsID0gJ1VwbG9hZCBGaWxlcyc7XG5cbiAgLyoqXG4gICAqIFRleHQgdG8gZGlzcGxheSBpbnNpZGUgZHJvcCB6b25lLlxuICAgKi9cbiAgQElucHV0KCkgZHJvcFpvbmVMYWJlbCA9ICdvciBEcm9wIEZpbGVzJztcblxuICB1aWQgPSB1bmlxdWVJZCgnZmlsZS11cGxvYWQnKTtcblxuICBpc0RyYWdPdmVyID0gZmFsc2U7XG5cbiAgZmlsZXM6IEZpbGVbXSA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudDogRWxlbWVudFJlZiwgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyKSB7XG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ3NsZHMtZm9ybS1lbGVtZW50Jyk7XG4gIH1cblxuICBvbkNoYW5nZTogRnVuY3Rpb24gfCBudWxsID0gbnVsbDtcblxuICBvblRvdWNoZWQgPSAoKSA9PiB7fTtcblxuICB2YWxpZGF0b3JDaGFuZ2UgPSAoKSA9PiB7fTtcblxuICB3cml0ZVZhbHVlKHZhbHVlOiBGaWxlW10pIHtcbiAgICB0aGlzLmZpbGVzID0gdmFsdWU7XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAodmFsdWU6IGFueSkgPT4gYW55KTogdm9pZCB7IHRoaXMub25DaGFuZ2UgPSBmbjsgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiBhbnkpOiB2b2lkIHsgdGhpcy5vblRvdWNoZWQgPSBmbjsgfVxuXG4gIHJlZ2lzdGVyT25WYWxpZGF0b3JDaGFuZ2UoZm46ICgpID0+IHZvaWQpOiB2b2lkIHsgdGhpcy52YWxpZGF0b3JDaGFuZ2UgPSBmbjsgfVxuXG4gIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbikgeyB0aGlzLmRpc2FibGVkID0gaXNEaXNhYmxlZDsgfVxuXG4gIHZhbGlkYXRlKGM6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsIHtcbiAgICBjb25zdCBmaWxlcyA9IGMudmFsdWUgYXMgRmlsZVtdO1xuXG4gICAgaWYgKCFmaWxlcyB8fCBmaWxlcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGlmICh0aGlzLm1heEZpbGVzID4gMCAmJiBmaWxlcy5sZW5ndGggPiB0aGlzLm1heEZpbGVzKSB7XG4gICAgICByZXR1cm4geyBuZ2xGaWxlVXBsb2FkOiB7IG1heEZpbGVzOiBmaWxlcy5sZW5ndGggfSB9O1xuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSAwLCBuID0gZmlsZXMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICBjb25zdCBmaWxlID0gZmlsZXNbaV07XG4gICAgICBpZiAodGhpcy5hY2NlcHQgJiYgIWlzRmlsZVR5cGVBY2NlcHRlZCh0aGlzLmFjY2VwdCwgZmlsZSkpIHtcbiAgICAgICAgcmV0dXJuIHsgbmdsRmlsZVVwbG9hZDogeyBpbnZhbGlkVHlwZTogZmlsZSB9IH07XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5tYXhGaWxlc2l6ZSAmJiBmaWxlLnNpemUgPiB0aGlzLm1heEZpbGVzaXplKSB7XG4gICAgICAgIHJldHVybiB7IG5nbEZpbGVVcGxvYWQ6IHsgbWF4RmlsZXNpemU6IGZpbGUgfSB9O1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIGlmIChjaGFuZ2VzWydtYXhGaWxlcyddIHx8IGNoYW5nZXNbJ21heEZpbGVzaXplJ10gfHwgY2hhbmdlc1snYWNjZXB0J10pIHtcbiAgICAgIHRoaXMudmFsaWRhdG9yQ2hhbmdlKCk7XG4gICAgfVxuICB9XG5cbiAgb25Ecm9wWm9uZShldnQ6IERyYWdFdmVudCkge1xuICAgIHRyYXBFdmVudChldnQpO1xuICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5pc0RyYWdPdmVyID0gZXZ0LnR5cGUgPT09ICdkcmFnb3Zlcic7XG5cbiAgICBpZiAoZXZ0LnR5cGUgPT09ICdkcm9wJyAmJiBldnQuZGF0YVRyYW5zZmVyKSB7XG4gICAgICB0aGlzLnNlbGVjdChldnQuZGF0YVRyYW5zZmVyLmZpbGVzKTtcbiAgICB9XG4gIH1cblxuICBvbklucHV0Q2hhbmdlKGZpbGVzOiBGaWxlTGlzdCkge1xuICAgIHRoaXMuc2VsZWN0KGZpbGVzKTtcbiAgfVxuXG4gIHByaXZhdGUgc2VsZWN0KGZpbGVzOiBGaWxlTGlzdCkge1xuICAgIHRoaXMub25DaGFuZ2UoQXJyYXkuZnJvbShmaWxlcykpO1xuICB9XG59XG4iXX0=
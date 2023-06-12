import { __decorate } from "tslib";
import { Component, Input, Output, EventEmitter, HostListener, ContentChild, ChangeDetectionStrategy, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { uniqueId } from '../util/util';
import { InputBoolean } from '../util/convert';
import { NglModalHeaderTemplate, NglModalTaglineTemplate, NglModalFooterTemplate } from './templates';
import { hasObservers } from '../util/hasObservers';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/a11y";
import * as i2 from "@angular/cdk/overlay";
import * as i3 from "@angular/common";
import * as i4 from "@angular/cdk/scrolling";
import * as i5 from "../icons/svg";
export class NglModal {
    constructor(focusTrapFactory, document, overlay, element) {
        this.focusTrapFactory = focusTrapFactory;
        this.document = document;
        this.overlay = overlay;
        this.element = element;
        this.header = '';
        this.directional = false;
        this.headingId = uniqueId('modal-heading');
        this.contentId = uniqueId('modal-content');
        this.open = true;
        this.closeButtonAssistiveText = 'Close';
        this.openChange = new EventEmitter();
        this.dismissOnClickOutside = true;
        /** Element that was focused before the dialog was opened. Save this to restore upon close. */
        this.elementFocusedBeforeDialogWasOpened = null;
        this.scrollStrategy = this.overlay.scrollStrategies.block();
    }
    get hasHeader() {
        return this.header || this.headerTpl;
    }
    close(evt) {
        if (evt) {
            evt.stopPropagation();
        }
        this.openChange.emit(false);
    }
    ngOnChanges(changes) {
        if ('open' in changes) {
            this.handleOpen();
        }
    }
    ngAfterContentInit() {
        this.handleOpen();
    }
    clickOutside(evt) {
        if (!this.dismissOnClickOutside) {
            return;
        }
        const { classList } = evt.target;
        if (classList.contains('slds-modal') || classList.contains('slds-modal__container')) {
            this.close();
        }
    }
    ngOnDestroy() {
        this.handleOpen(false);
        this.scrollStrategy = null;
    }
    modalClass() {
        return {
            [`slds-modal_${this.size}`]: !!this.size,
            [`slds-fade-in-open`]: this.open,
            [`slds-modal_prompt`]: !!this.prompt,
        };
    }
    modalHeaderClass() {
        return {
            [`slds-modal__header_empty`]: !this.hasHeader,
            [`slds-theme_${this.prompt}`]: !!this.prompt,
        };
    }
    modalFooterClass() {
        return {
            [`slds-modal__footer_directional`]: !!this.directional,
            [`slds-theme_default`]: !!this.prompt,
        };
    }
    handleOpen(open = this.open) {
        if (open) {
            if (this.document) {
                this.elementFocusedBeforeDialogWasOpened = this.document.activeElement;
            }
            this.container = this.overlay.create();
            // Attach the dom to overlay, the view container is not changed
            this.container.overlayElement.appendChild(this.element.nativeElement);
            this.focusTrap = this.focusTrapFactory.create(this.element.nativeElement);
            this.focusTrap.focusInitialElementWhenReady();
            this.scrollStrategy.enable();
        }
        else {
            if (this.elementFocusedBeforeDialogWasOpened && typeof this.elementFocusedBeforeDialogWasOpened.focus === 'function') {
                this.elementFocusedBeforeDialogWasOpened.focus();
            }
            if (this.container) {
                this.container.dispose();
                this.container = null;
            }
            if (this.focusTrap) {
                this.focusTrap.destroy();
            }
            this.scrollStrategy.disable();
        }
    }
}
NglModal.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglModal, deps: [{ token: i1.FocusTrapFactory }, { token: DOCUMENT }, { token: i2.Overlay }, { token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
NglModal.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: NglModal, selector: "ngl-modal", inputs: { header: "header", size: "size", directional: "directional", open: "open", closeButtonAssistiveText: "closeButtonAssistiveText", dismissOnClickOutside: "dismissOnClickOutside", prompt: "prompt" }, outputs: { openChange: "openChange" }, host: { listeners: { "keydown.esc": "close($event)", "click": "clickOutside($event)" } }, queries: [{ propertyName: "headerTpl", first: true, predicate: NglModalHeaderTemplate, descendants: true }, { propertyName: "taglineTpl", first: true, predicate: NglModalTaglineTemplate, descendants: true }, { propertyName: "footer", first: true, predicate: NglModalFooterTemplate, descendants: true }], usesOnChanges: true, ngImport: i0, template: "\n<section class=\"slds-modal\" [ngClass]=\"modalClass()\" [attr.aria-hidden]=\"!open\" [attr.aria-labelledby]=\"headingId\" [attr.aria-describedby]=\"contentId\" aria-modal=\"true\" [attr.role]=\"prompt ? 'alertdialog' : 'dialog'\" tabindex=\"-1\">\n  <div class=\"slds-modal__container\">\n    <header class=\"slds-modal__header\" [ngClass]=\"modalHeaderClass()\">\n      <button class=\"slds-button slds-button_icon slds-button_icon-inverse slds-modal__close\" *ngIf=\"showClose\" type=\"button\" (click)=\"close()\">\n        <svg class=\"slds-button__icon slds-button__icon_large\" nglIconName=\"utility:close\"></svg><span class=\"slds-assistive-text\" *ngIf=\"closeButtonAssistiveText\">{{closeButtonAssistiveText}}</span>\n      </button>\n      <ng-template #localHeader>\n        <h2 class=\"slds-text-heading_medium slds-hyphenate\" *ngIf=\"header\" [id]=\"headingId\">{{header}}</h2>\n      </ng-template>\n      <ng-template *ngIf=\"headerTpl; else localHeader\" [ngTemplateOutlet]=\"headerTpl.templateRef\" [ngTemplateOutletContext]=\"{id: headingId}\"></ng-template>\n      <p class=\"slds-m-top_x-small\" *ngIf=\"hasHeader &amp;&amp; taglineTpl\">\n        <ng-template [ngTemplateOutlet]=\"taglineTpl.templateRef\"></ng-template>\n      </p>\n    </header>\n    <div class=\"slds-modal__content\" [id]=\"contentId\" cdkScrollable>\n      <ng-content></ng-content>\n    </div>\n    <footer class=\"slds-modal__footer\" *ngIf=\"footer\" [ngClass]=\"modalFooterClass()\">\n      <ng-template [ngTemplateOutlet]=\"footer.templateRef\"></ng-template>\n    </footer>\n  </div>\n</section>\n<div class=\"slds-backdrop\" [class.slds-backdrop_open]=\"open\"></div>", dependencies: [{ kind: "directive", type: i3.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i3.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i3.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "directive", type: i4.CdkScrollable, selector: "[cdk-scrollable], [cdkScrollable]" }, { kind: "component", type: i5.NglIconSvg, selector: "svg[nglIconName]", inputs: ["nglIconName", "xPos"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
__decorate([
    InputBoolean()
], NglModal.prototype, "directional", void 0);
__decorate([
    InputBoolean()
], NglModal.prototype, "open", void 0);
__decorate([
    InputBoolean()
], NglModal.prototype, "dismissOnClickOutside", void 0);
__decorate([
    hasObservers('openChange')
], NglModal.prototype, "showClose", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglModal, decorators: [{
            type: Component,
            args: [{ selector: 'ngl-modal', changeDetection: ChangeDetectionStrategy.OnPush, template: "\n<section class=\"slds-modal\" [ngClass]=\"modalClass()\" [attr.aria-hidden]=\"!open\" [attr.aria-labelledby]=\"headingId\" [attr.aria-describedby]=\"contentId\" aria-modal=\"true\" [attr.role]=\"prompt ? 'alertdialog' : 'dialog'\" tabindex=\"-1\">\n  <div class=\"slds-modal__container\">\n    <header class=\"slds-modal__header\" [ngClass]=\"modalHeaderClass()\">\n      <button class=\"slds-button slds-button_icon slds-button_icon-inverse slds-modal__close\" *ngIf=\"showClose\" type=\"button\" (click)=\"close()\">\n        <svg class=\"slds-button__icon slds-button__icon_large\" nglIconName=\"utility:close\"></svg><span class=\"slds-assistive-text\" *ngIf=\"closeButtonAssistiveText\">{{closeButtonAssistiveText}}</span>\n      </button>\n      <ng-template #localHeader>\n        <h2 class=\"slds-text-heading_medium slds-hyphenate\" *ngIf=\"header\" [id]=\"headingId\">{{header}}</h2>\n      </ng-template>\n      <ng-template *ngIf=\"headerTpl; else localHeader\" [ngTemplateOutlet]=\"headerTpl.templateRef\" [ngTemplateOutletContext]=\"{id: headingId}\"></ng-template>\n      <p class=\"slds-m-top_x-small\" *ngIf=\"hasHeader &amp;&amp; taglineTpl\">\n        <ng-template [ngTemplateOutlet]=\"taglineTpl.templateRef\"></ng-template>\n      </p>\n    </header>\n    <div class=\"slds-modal__content\" [id]=\"contentId\" cdkScrollable>\n      <ng-content></ng-content>\n    </div>\n    <footer class=\"slds-modal__footer\" *ngIf=\"footer\" [ngClass]=\"modalFooterClass()\">\n      <ng-template [ngTemplateOutlet]=\"footer.templateRef\"></ng-template>\n    </footer>\n  </div>\n</section>\n<div class=\"slds-backdrop\" [class.slds-backdrop_open]=\"open\"></div>" }]
        }], ctorParameters: function () { return [{ type: i1.FocusTrapFactory }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [DOCUMENT]
                }] }, { type: i2.Overlay }, { type: i0.ElementRef }]; }, propDecorators: { header: [{
                type: Input
            }], size: [{
                type: Input
            }], directional: [{
                type: Input
            }], open: [{
                type: Input
            }], closeButtonAssistiveText: [{
                type: Input
            }], openChange: [{
                type: Output
            }], headerTpl: [{
                type: ContentChild,
                args: [NglModalHeaderTemplate]
            }], taglineTpl: [{
                type: ContentChild,
                args: [NglModalTaglineTemplate]
            }], footer: [{
                type: ContentChild,
                args: [NglModalFooterTemplate]
            }], dismissOnClickOutside: [{
                type: Input
            }], prompt: [{
                type: Input
            }], showClose: [], close: [{
                type: HostListener,
                args: ['keydown.esc', ['$event']]
            }], clickOutside: [{
                type: HostListener,
                args: ['click', ['$event']]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1saWdodG5pbmcvc3JjL2xpYi9tb2RhbHMvbW9kYWwudHMiLCIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1saWdodG5pbmcvc3JjL2xpYi9tb2RhbHMvbW9kYWwuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFjLFlBQVksRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUM5RSx1QkFBdUIsRUFBRSxNQUFNLEVBQXlELE1BQU0sZUFBZSxDQUFDO0FBQ3ZILE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUczQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQ3hDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsdUJBQXVCLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDdEcsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7Ozs7O0FBT3BELE1BQU0sT0FBTyxRQUFRO0lBMkNuQixZQUFvQixnQkFBa0MsRUFDaEIsUUFBYSxFQUMvQixPQUFnQixFQUNoQixPQUFtQjtRQUhuQixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2hCLGFBQVEsR0FBUixRQUFRLENBQUs7UUFDL0IsWUFBTyxHQUFQLE9BQU8sQ0FBUztRQUNoQixZQUFPLEdBQVAsT0FBTyxDQUFZO1FBN0M5QixXQUFNLEdBQUcsRUFBRSxDQUFDO1FBSUksZ0JBQVcsR0FBRyxLQUFLLENBQUM7UUFFN0MsY0FBUyxHQUFHLFFBQVEsQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUV0QyxjQUFTLEdBQUcsUUFBUSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBRWIsU0FBSSxH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QVc7c0JBQW5DLEtBQUs7Z0JBTW1CLElBQUk7c0JBQTVCLEtBQUs7Z0JBTUcsd0JBQXdCO3NCQUFoQyxLQUFLO2dCQUVJLFVBQVU7c0JBQW5CLE1BQU07Z0JBRStCLFNBQVM7c0JBQTlDLFlBQVk7dUJBQUMsc0JBQXNCO2dCQUVHLFVBQVU7c0JBQWhELFlBQVk7dUJBQUMsdUJBQXVCO2dCQUVDLE1BQU07c0JBQTNDLFlBQVk7dUJBQUMsc0JBQXNCO2dCQUVYLHFCQUFxQjtzQkFBN0MsS0FBSztnQkFFRyxNQUFNO3NCQUFkLEtBQUs7Z0JBRXNCLFNBQVMsTUFvQnJDLEtBQUs7c0JBREosWUFBWTt1QkFBQyxhQUFhLEVBQUUsQ0FBQyxRQUFRLENBQUM7Z0JBbUJ2QyxZQUFZO3NCQURYLFlBQVk7dUJBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIEhvc3RMaXN0ZW5lciwgQ29udGVudENoaWxkLFxuICAgICAgICAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIEluamVjdCwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzLCBBZnRlckNvbnRlbnRJbml0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEZvY3VzVHJhcCwgRm9jdXNUcmFwRmFjdG9yeSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9hMTF5JztcbmltcG9ydCB7IEJsb2NrU2Nyb2xsU3RyYXRlZ3ksIE92ZXJsYXksIE92ZXJsYXlSZWYgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XG5pbXBvcnQgeyB1bmlxdWVJZCB9IGZyb20gJy4uL3V0aWwvdXRpbCc7XG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4gfSBmcm9tICcuLi91dGlsL2NvbnZlcnQnO1xuaW1wb3J0IHsgTmdsTW9kYWxIZWFkZXJUZW1wbGF0ZSwgTmdsTW9kYWxUYWdsaW5lVGVtcGxhdGUsIE5nbE1vZGFsRm9vdGVyVGVtcGxhdGUgfSBmcm9tICcuL3RlbXBsYXRlcyc7XG5pbXBvcnQgeyBoYXNPYnNlcnZlcnMgfSBmcm9tICcuLi91dGlsL2hhc09ic2VydmVycyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25nbC1tb2RhbCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9tb2RhbC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIE5nbE1vZGFsIGltcGxlbWVudHMgT25DaGFuZ2VzLCBBZnRlckNvbnRlbnRJbml0LCBPbkRlc3Ryb3kge1xuICBASW5wdXQoKSBoZWFkZXIgPSAnJztcblxuICBASW5wdXQoKSBzaXplOiBzdHJpbmc7XG5cbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGRpcmVjdGlvbmFsID0gZmFsc2U7XG5cbiAgaGVhZGluZ0lkID0gdW5pcXVlSWQoJ21vZGFsLWhlYWRpbmcnKTtcblxuICBjb250ZW50SWQgPSB1bmlxdWVJZCgnbW9kYWwtY29udGVudCcpO1xuXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBvcGVuID0gdHJ1ZTtcblxuICBnZXQgaGFzSGVhZGVyKCkge1xuICAgIHJldHVybiB0aGlzLmhlYWRlciB8fCB0aGlzLmhlYWRlclRwbDtcbiAgfVxuXG4gIEBJbnB1dCgpIGNsb3NlQnV0dG9uQXNzaXN0aXZlVGV4dCA9ICdDbG9zZSc7XG5cbiAgQE91dHB1dCgpIG9wZW5DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgQENvbnRlbnRDaGlsZChOZ2xNb2RhbEhlYWRlclRlbXBsYXRlKSBoZWFkZXJUcGw6IE5nbE1vZGFsSGVhZGVyVGVtcGxhdGU7XG5cbiAgQENvbnRlbnRDaGlsZChOZ2xNb2RhbFRhZ2xpbmVUZW1wbGF0ZSkgdGFnbGluZVRwbDogTmdsTW9kYWxUYWdsaW5lVGVtcGxhdGU7XG5cbiAgQENvbnRlbnRDaGlsZChOZ2xNb2RhbEZvb3RlclRlbXBsYXRlKSBmb290ZXI6IE5nbE1vZGFsRm9vdGVyVGVtcGxhdGU7XG5cbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGRpc21pc3NPbkNsaWNrT3V0c2lkZSA9IHRydWU7XG5cbiAgQElucHV0KCkgcHJvbXB0OiAnc3VjY2VzcycgfCAnd2FybmluZycgfCAnZXJyb3InIHwgJ3dyZW5jaCcgfCAnb2ZmbGluZScgfCAnaW5mbyc7XG5cbiAgQGhhc09ic2VydmVycygnb3BlbkNoYW5nZScpIHNob3dDbG9zZTogYm9vbGVhbjtcblxuICAvKiogVGhlIGNsYXNzIHRoYXQgdHJhcHMgYW5kIG1hbmFnZXMgZm9jdXMgd2l0aGluIHRoZSBkaWFsb2cuICovXG4gIHByaXZhdGUgZm9jdXNUcmFwOiBGb2N1c1RyYXA7XG5cbiAgcHJpdmF0ZSBjb250YWluZXI6IE92ZXJsYXlSZWY7XG5cbiAgLyoqIEVsZW1lbnQgdGhhdCB3YXMgZm9jdXNlZCBiZWZvcmUgdGhlIGRpYWxvZyB3YXMgb3BlbmVkLiBTYXZlIHRoaXMgdG8gcmVzdG9yZSB1cG9uIGNsb3NlLiAqL1xuICBwcml2YXRlIGVsZW1lbnRGb2N1c2VkQmVmb3JlRGlhbG9nV2FzT3BlbmVkOiBIVE1MRWxlbWVudCB8IG51bGwgPSBudWxsO1xuXG4gIHByaXZhdGUgc2Nyb2xsU3RyYXRlZ3k6IEJsb2NrU2Nyb2xsU3RyYXRlZ3k7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBmb2N1c1RyYXBGYWN0b3J5OiBGb2N1c1RyYXBGYWN0b3J5LFxuICAgICAgICAgICAgICBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvY3VtZW50OiBhbnksXG4gICAgICAgICAgICAgIHByaXZhdGUgb3ZlcmxheTogT3ZlcmxheSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50UmVmKSB7XG4gICAgdGhpcy5zY3JvbGxTdHJhdGVneSA9IHRoaXMub3ZlcmxheS5zY3JvbGxTdHJhdGVnaWVzLmJsb2NrKCk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdrZXlkb3duLmVzYycsIFsnJGV2ZW50J10pXG4gIGNsb3NlKGV2dD86IEV2ZW50KSB7XG4gICAgaWYgKGV2dCkge1xuICAgICAgZXZ0LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH1cbiAgICB0aGlzLm9wZW5DaGFuZ2UuZW1pdChmYWxzZSk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgaWYgKCdvcGVuJyBpbiBjaGFuZ2VzKSB7XG4gICAgICB0aGlzLmhhbmRsZU9wZW4oKTtcbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgdGhpcy5oYW5kbGVPcGVuKCk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdjbGljaycsIFsnJGV2ZW50J10pXG4gIGNsaWNrT3V0c2lkZShldnQpIHtcbiAgICBpZiAoIXRoaXMuZGlzbWlzc09uQ2xpY2tPdXRzaWRlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgeyBjbGFzc0xpc3QgfSA9IGV2dC50YXJnZXQ7XG4gICAgaWYgKGNsYXNzTGlzdC5jb250YWlucygnc2xkcy1tb2RhbCcpIHx8IGNsYXNzTGlzdC5jb250YWlucygnc2xkcy1tb2RhbF9fY29udGFpbmVyJykpIHtcbiAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLmhhbmRsZU9wZW4oZmFsc2UpO1xuICAgIHRoaXMuc2Nyb2xsU3RyYXRlZ3kgPSBudWxsO1xuICB9XG5cbiAgbW9kYWxDbGFzcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgW2BzbGRzLW1vZGFsXyR7dGhpcy5zaXplfWBdOiAhIXRoaXMuc2l6ZSxcbiAgICAgIFtgc2xkcy1mYWRlLWluLW9wZW5gXTogdGhpcy5vcGVuLFxuICAgICAgW2BzbGRzLW1vZGFsX3Byb21wdGBdOiAhIXRoaXMucHJvbXB0LFxuICAgIH07XG4gIH1cblxuICBtb2RhbEhlYWRlckNsYXNzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBbYHNsZHMtbW9kYWxfX2hlYWRlcl9lbXB0eWBdOiAhdGhpcy5oYXNIZWFkZXIsXG4gICAgICBbYHNsZHMtdGhlbWVfJHt0aGlzLnByb21wdH1gXTogISF0aGlzLnByb21wdCxcbiAgICB9O1xuICB9XG5cbiAgbW9kYWxGb290ZXJDbGFzcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgW2BzbGRzLW1vZGFsX19mb290ZXJfZGlyZWN0aW9uYWxgXTogISF0aGlzLmRpcmVjdGlvbmFsLFxuICAgICAgW2BzbGRzLXRoZW1lX2RlZmF1bHRgXTogISF0aGlzLnByb21wdCxcbiAgICB9O1xuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVPcGVuKG9wZW4gPSB0aGlzLm9wZW4pIHtcbiAgICBpZiAob3Blbikge1xuICAgICAgaWYgKHRoaXMuZG9jdW1lbnQpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50Rm9jdXNlZEJlZm9yZURpYWxvZ1dhc09wZW5lZCA9IHRoaXMuZG9jdW1lbnQuYWN0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudDtcbiAgICAgIH1cblxuICAgICAgdGhpcy5jb250YWluZXIgPSB0aGlzLm92ZXJsYXkuY3JlYXRlKCk7XG4gICAgICAvLyBBdHRhY2ggdGhlIGRvbSB0byBvdmVybGF5LCB0aGUgdmlldyBjb250YWluZXIgaXMgbm90IGNoYW5nZWRcbiAgICAgIHRoaXMuY29udGFpbmVyLm92ZXJsYXlFbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50KTtcblxuICAgICAgdGhpcy5mb2N1c1RyYXAgPSB0aGlzLmZvY3VzVHJhcEZhY3RvcnkuY3JlYXRlKHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50KTtcbiAgICAgIHRoaXMuZm9jdXNUcmFwLmZvY3VzSW5pdGlhbEVsZW1lbnRXaGVuUmVhZHkoKTtcbiAgICAgIHRoaXMuc2Nyb2xsU3RyYXRlZ3kuZW5hYmxlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLmVsZW1lbnRGb2N1c2VkQmVmb3JlRGlhbG9nV2FzT3BlbmVkICYmIHR5cGVvZiB0aGlzLmVsZW1lbnRGb2N1c2VkQmVmb3JlRGlhbG9nV2FzT3BlbmVkLmZvY3VzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudEZvY3VzZWRCZWZvcmVEaWFsb2dXYXNPcGVuZWQuZm9jdXMoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuY29udGFpbmVyKSB7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmRpc3Bvc2UoKTtcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5mb2N1c1RyYXApIHtcbiAgICAgICAgdGhpcy5mb2N1c1RyYXAuZGVzdHJveSgpO1xuICAgICAgfVxuICAgICAgdGhpcy5zY3JvbGxTdHJhdGVneS5kaXNhYmxlKCk7XG4gICAgfVxuICB9XG59XG4iLCJcbjxzZWN0aW9uIGNsYXNzPVwic2xkcy1tb2RhbFwiIFtuZ0NsYXNzXT1cIm1vZGFsQ2xhc3MoKVwiIFthdHRyLmFyaWEtaGlkZGVuXT1cIiFvcGVuXCIgW2F0dHIuYXJpYS1sYWJlbGxlZGJ5XT1cImhlYWRpbmdJZFwiIFthdHRyLmFyaWEtZGVzY3JpYmVkYnldPVwiY29udGVudElkXCIgYXJpYS1tb2RhbD1cInRydWVcIiBbYXR0ci5yb2xlXT1cInByb21wdCA/ICdhbGVydGRpYWxvZycgOiAnZGlhbG9nJ1wiIHRhYmluZGV4PVwiLTFcIj5cbiAgPGRpdiBjbGFzcz1cInNsZHMtbW9kYWxfX2NvbnRhaW5lclwiPlxuICAgIDxoZWFkZXIgY2xhc3M9XCJzbGRzLW1vZGFsX19oZWFkZXJcIiBbbmdDbGFzc109XCJtb2RhbEhlYWRlckNsYXNzKClcIj5cbiAgICAgIDxidXR0b24gY2xhc3M9XCJzbGRzLWJ1dHRvbiBzbGRzLWJ1dHRvbl9pY29uIHNsZHMtYnV0dG9uX2ljb24taW52ZXJzZSBzbGRzLW1vZGFsX19jbG9zZVwiICpuZ0lmPVwic2hvd0Nsb3NlXCIgdHlwZT1cImJ1dHRvblwiIChjbGljayk9XCJjbG9zZSgpXCI+XG4gICAgICAgIDxzdmcgY2xhc3M9XCJzbGRzLWJ1dHRvbl9faWNvbiBzbGRzLWJ1dHRvbl9faWNvbl9sYXJnZVwiIG5nbEljb25OYW1lPVwidXRpbGl0eTpjbG9zZVwiPjwvc3ZnPjxzcGFuIGNsYXNzPVwic2xkcy1hc3Npc3RpdmUtdGV4dFwiICpuZ0lmPVwiY2xvc2VCdXR0b25Bc3Npc3RpdmVUZXh0XCI+e3tjbG9zZUJ1dHRvbkFzc2lzdGl2ZVRleHR9fTwvc3Bhbj5cbiAgICAgIDwvYnV0dG9uPlxuICAgICAgPG5nLXRlbXBsYXRlICNsb2NhbEhlYWRlcj5cbiAgICAgICAgPGgyIGNsYXNzPVwic2xkcy10ZXh0LWhlYWRpbmdfbWVkaXVtIHNsZHMtaHlwaGVuYXRlXCIgKm5nSWY9XCJoZWFkZXJcIiBbaWRdPVwiaGVhZGluZ0lkXCI+e3toZWFkZXJ9fTwvaDI+XG4gICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgPG5nLXRlbXBsYXRlICpuZ0lmPVwiaGVhZGVyVHBsOyBlbHNlIGxvY2FsSGVhZGVyXCIgW25nVGVtcGxhdGVPdXRsZXRdPVwiaGVhZGVyVHBsLnRlbXBsYXRlUmVmXCIgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cIntpZDogaGVhZGluZ0lkfVwiPjwvbmctdGVtcGxhdGU+XG4gICAgICA8cCBjbGFzcz1cInNsZHMtbS10b3BfeC1zbWFsbFwiICpuZ0lmPVwiaGFzSGVhZGVyICZhbXA7JmFtcDsgdGFnbGluZVRwbFwiPlxuICAgICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwidGFnbGluZVRwbC50ZW1wbGF0ZVJlZlwiPjwvbmctdGVtcGxhdGU+XG4gICAgICA8L3A+XG4gICAgPC9oZWFkZXI+XG4gICAgPGRpdiBjbGFzcz1cInNsZHMtbW9kYWxfX2NvbnRlbnRcIiBbaWRdPVwiY29udGVudElkXCIgY2RrU2Nyb2xsYWJsZT5cbiAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICA8L2Rpdj5cbiAgICA8Zm9vdGVyIGNsYXNzPVwic2xkcy1tb2RhbF9fZm9vdGVyXCIgKm5nSWY9XCJmb290ZXJcIiBbbmdDbGFzc109XCJtb2RhbEZvb3RlckNsYXNzKClcIj5cbiAgICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJmb290ZXIudGVtcGxhdGVSZWZcIj48L25nLXRlbXBsYXRlPlxuICAgIDwvZm9vdGVyPlxuICA8L2Rpdj5cbjwvc2VjdGlvbj5cbjxkaXYgY2xhc3M9XCJzbGRzLWJhY2tkcm9wXCIgW2NsYXNzLnNsZHMtYmFja2Ryb3Bfb3Blbl09XCJvcGVuXCI+PC9kaXY+Il19
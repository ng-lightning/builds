import { __decorate } from "tslib";
import { Component, Input, Output, ElementRef, EventEmitter, HostListener, ContentChild, ChangeDetectionStrategy, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { FocusTrapFactory } from '@angular/cdk/a11y';
import { Overlay } from '@angular/cdk/overlay';
import { uniqueId } from '../util/util';
import { InputBoolean } from '../util/convert';
import { NglModalHeaderTemplate, NglModalTaglineTemplate, NglModalFooterTemplate } from './templates';
import { hasObservers } from '../util/hasObservers';
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
NglModal.decorators = [
    { type: Component, args: [{
                selector: 'ngl-modal',
                template: "\n<section class=\"slds-modal\" [ngClass]=\"modalClass()\" [attr.aria-hidden]=\"!open\" [attr.aria-labelledby]=\"headingId\" [attr.aria-describedby]=\"contentId\" aria-modal=\"true\" [attr.role]=\"prompt ? 'alertdialog' : 'dialog'\" tabindex=\"-1\">\n  <div class=\"slds-modal__container\">\n    <header class=\"slds-modal__header\" [ngClass]=\"modalHeaderClass()\">\n      <button class=\"slds-button slds-button_icon slds-button_icon-inverse slds-modal__close\" *ngIf=\"showClose\" type=\"button\" (click)=\"close()\">\n        <svg class=\"slds-button__icon slds-button__icon_large\" nglIconName=\"utility:close\"></svg><span class=\"slds-assistive-text\" *ngIf=\"closeButtonAssistiveText\">{{closeButtonAssistiveText}}</span>\n      </button>\n      <ng-template #localHeader>\n        <h2 class=\"slds-text-heading_medium slds-hyphenate\" *ngIf=\"header\" [id]=\"headingId\">{{header}}</h2>\n      </ng-template>\n      <ng-template *ngIf=\"headerTpl; else localHeader\" [ngTemplateOutlet]=\"headerTpl.templateRef\" [ngTemplateOutletContext]=\"{id: headingId}\"></ng-template>\n      <p class=\"slds-m-top_x-small\" *ngIf=\"hasHeader &amp;&amp; taglineTpl\">\n        <ng-template [ngTemplateOutlet]=\"taglineTpl.templateRef\"></ng-template>\n      </p>\n    </header>\n    <div class=\"slds-modal__content\" [id]=\"contentId\" cdkScrollable>\n      <ng-content></ng-content>\n    </div>\n    <footer class=\"slds-modal__footer\" *ngIf=\"footer\" [ngClass]=\"modalFooterClass()\">\n      <ng-template [ngTemplateOutlet]=\"footer.templateRef\"></ng-template>\n    </footer>\n  </div>\n</section>\n<div class=\"slds-backdrop\" [class.slds-backdrop_open]=\"open\"></div>",
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
NglModal.ctorParameters = () => [
    { type: FocusTrapFactory },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: Overlay },
    { type: ElementRef }
];
NglModal.propDecorators = {
    header: [{ type: Input }],
    size: [{ type: Input }],
    directional: [{ type: Input }],
    open: [{ type: Input }],
    closeButtonAssistiveText: [{ type: Input }],
    openChange: [{ type: Output }],
    headerTpl: [{ type: ContentChild, args: [NglModalHeaderTemplate,] }],
    taglineTpl: [{ type: ContentChild, args: [NglModalTaglineTemplate,] }],
    footer: [{ type: ContentChild, args: [NglModalFooterTemplate,] }],
    dismissOnClickOutside: [{ type: Input }],
    prompt: [{ type: Input }],
    close: [{ type: HostListener, args: ['keydown.esc', ['$event'],] }],
    clickOutside: [{ type: HostListener, args: ['click', ['$event'],] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1saWdodG5pbmcvc3JjL2xpYi9tb2RhbHMvbW9kYWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQzlFLHVCQUF1QixFQUFFLE1BQU0sRUFBeUQsTUFBTSxlQUFlLENBQUM7QUFDdkgsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFBYSxnQkFBZ0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ2hFLE9BQU8sRUFBdUIsT0FBTyxFQUFjLE1BQU0sc0JBQXNCLENBQUM7QUFDaEYsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUN4QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLHNCQUFzQixFQUFFLHVCQUF1QixFQUFFLHNCQUFzQixFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ3RHLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQU9wRCxNQUFNLE9BQU8sUUFBUTtJQTJDbkIsWUFBb0IsZ0JBQWtDLEVBQ2hCLFFBQWEsRUFDL0IsT0FBZ0IsRUFDaEIsT0FBbUI7UUFIbkIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNoQixhQUFRLEdBQVIsUUFBUSxDQUFLO1FBQy9CLFlBQU8sR0FBUCxPQUFPLENBQVM7UUFDaEIsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQTdDOUIsV0FBTSxHQUFHLEVBQUUsQ0FBQztRQUlJLGdCQUFXLEdBQUcsS0FBSyxDQUFDO1FBRTdDLGNBQVMsR0FBRyxRQUFRLENBQUMsZUFBZSxDQUFDLENBQUM7UUFFdEMsY0FBUyxHQUFHLFFBQVEsQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUViLFNBQUksR0FBRyxJQUFJLENBQUM7UUFNNUIsNkJBQXdCLEdBQUcsT0FBTyxDQUFDO1FBRWxDLGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBUWpCLDBCQUFxQixHQUFHLElBQUksQ0FBQztRQVd0RCw4RkFBOEY7UUFDdEYsd0NBQW1DLEdBQXVCLElBQUksQ0FBQztRQVFyRSxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDOUQsQ0FBQztJQW5DRCxJQUFJLFNBQVM7UUFDWCxPQUFPLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN2QyxDQUFDO0lBb0NELEtBQUssQ0FBQyxHQUFXO1FBQ2YsSUFBSSxHQUFHLEVBQUU7WUFDUCxHQUFHLENBQUMsZUFBZSxFQUFFLENBQUM7U0FDdkI7UUFDRCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBRUQsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLElBQUksTUFBTSxJQUFJLE9BQU8sRUFBRTtZQUNyQixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7U0FDbkI7SUFDSCxDQUFDO0lBRUQsa0JBQWtCO1FBQ2hCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBR0QsWUFBWSxDQUFDLEdBQUc7UUFDZCxJQUFJLENBQUMsSUFBSSxDQUFDLHFCQUFxQixFQUFFO1lBQy9CLE9BQU87U0FDUjtRQUVELE1BQU0sRUFBRSxTQUFTLEVBQUUsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDO1FBQ2pDLElBQUksU0FBUyxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsSUFBSSxTQUFTLENBQUMsUUFBUSxDQUFDLHVCQUF1QixDQUFDLEVBQUU7WUFDbkYsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ2Q7SUFDSCxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdkIsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7SUFDN0IsQ0FBQztJQUVELFVBQVU7UUFDUixPQUFPO1lBQ0wsQ0FBQyxjQUFjLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUN4QyxDQUFDLG1CQUFtQixDQUFDLEVBQUUsSUFBSSxDQUFDLElBQUk7WUFDaEMsQ0FBQyxtQkFBbUIsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTTtTQUNyQyxDQUFDO0lBQ0osQ0FBQztJQUVELGdCQUFnQjtRQUNkLE9BQU87WUFDTCxDQUFDLDBCQUEwQixDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUztZQUM3QyxDQUFDLGNBQWMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNO1NBQzdDLENBQUM7SUFDSixDQUFDO0lBRUQsZ0JBQWdCO1FBQ2QsT0FBTztZQUNMLENBQUMsZ0NBQWdDLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVc7WUFDdEQsQ0FBQyxvQkFBb0IsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTTtTQUN0QyxDQUFDO0lBQ0osQ0FBQztJQUVPLFVBQVUsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUk7UUFDakMsSUFBSSxJQUFJLEVBQUU7WUFDUixJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7Z0JBQ2pCLElBQUksQ0FBQyxtQ0FBbUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQTRCLENBQUM7YUFDdkY7WUFFRCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDdkMsK0RBQStEO1lBQy9ELElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBRXRFLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQzFFLElBQUksQ0FBQyxTQUFTLENBQUMsNEJBQTRCLEVBQUUsQ0FBQztZQUM5QyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxDQUFDO1NBQzlCO2FBQU07WUFDTCxJQUFJLElBQUksQ0FBQyxtQ0FBbUMsSUFBSSxPQUFPLElBQUksQ0FBQyxtQ0FBbUMsQ0FBQyxLQUFLLEtBQUssVUFBVSxFQUFFO2dCQUNwSCxJQUFJLENBQUMsbUNBQW1DLENBQUMsS0FBSyxFQUFFLENBQUM7YUFDbEQ7WUFFRCxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7Z0JBQ2xCLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLENBQUM7Z0JBQ3pCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO2FBQ3ZCO1lBRUQsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO2dCQUNsQixJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxDQUFDO2FBQzFCO1lBQ0QsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUMvQjtJQUNILENBQUM7OztZQTVJRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFdBQVc7Z0JBQ3JCLG9wREFBMkI7Z0JBQzNCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEOzs7WUFYbUIsZ0JBQWdCOzRDQXdEckIsTUFBTSxTQUFDLFFBQVE7WUF2REEsT0FBTztZQUpGLFVBQVU7OztxQkFnQjFDLEtBQUs7bUJBRUwsS0FBSzswQkFFTCxLQUFLO21CQU1MLEtBQUs7dUNBTUwsS0FBSzt5QkFFTCxNQUFNO3dCQUVOLFlBQVksU0FBQyxzQkFBc0I7eUJBRW5DLFlBQVksU0FBQyx1QkFBdUI7cUJBRXBDLFlBQVksU0FBQyxzQkFBc0I7b0NBRW5DLEtBQUs7cUJBRUwsS0FBSztvQkFxQkwsWUFBWSxTQUFDLGFBQWEsRUFBRSxDQUFDLFFBQVEsQ0FBQzsyQkFrQnRDLFlBQVksU0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUM7O0FBL0RSO0lBQWYsWUFBWSxFQUFFOzZDQUFxQjtBQU1wQjtJQUFmLFlBQVksRUFBRTtzQ0FBYTtBQWdCWjtJQUFmLFlBQVksRUFBRTt1REFBOEI7QUFJMUI7SUFBM0IsWUFBWSxDQUFDLFlBQVksQ0FBQzsyQ0FBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSG9zdExpc3RlbmVyLCBDb250ZW50Q2hpbGQsXG4gICAgICAgICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgSW5qZWN0LCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMsIEFmdGVyQ29udGVudEluaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRm9jdXNUcmFwLCBGb2N1c1RyYXBGYWN0b3J5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2ExMXknO1xuaW1wb3J0IHsgQmxvY2tTY3JvbGxTdHJhdGVneSwgT3ZlcmxheSwgT3ZlcmxheVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcbmltcG9ydCB7IHVuaXF1ZUlkIH0gZnJvbSAnLi4vdXRpbC91dGlsJztcbmltcG9ydCB7IElucHV0Qm9vbGVhbiB9IGZyb20gJy4uL3V0aWwvY29udmVydCc7XG5pbXBvcnQgeyBOZ2xNb2RhbEhlYWRlclRlbXBsYXRlLCBOZ2xNb2RhbFRhZ2xpbmVUZW1wbGF0ZSwgTmdsTW9kYWxGb290ZXJUZW1wbGF0ZSB9IGZyb20gJy4vdGVtcGxhdGVzJztcbmltcG9ydCB7IGhhc09ic2VydmVycyB9IGZyb20gJy4uL3V0aWwvaGFzT2JzZXJ2ZXJzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmdsLW1vZGFsJyxcbiAgdGVtcGxhdGVVcmw6ICcuL21vZGFsLmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgTmdsTW9kYWwgaW1wbGVtZW50cyBPbkNoYW5nZXMsIEFmdGVyQ29udGVudEluaXQsIE9uRGVzdHJveSB7XG4gIEBJbnB1dCgpIGhlYWRlciA9ICcnO1xuXG4gIEBJbnB1dCgpIHNpemU6IHN0cmluZztcblxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgZGlyZWN0aW9uYWwgPSBmYWxzZTtcblxuICBoZWFkaW5nSWQgPSB1bmlxdWVJZCgnbW9kYWwtaGVhZGluZycpO1xuXG4gIGNvbnRlbnRJZCA9IHVuaXF1ZUlkKCdtb2RhbC1jb250ZW50Jyk7XG5cbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG9wZW4gPSB0cnVlO1xuXG4gIGdldCBoYXNIZWFkZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuaGVhZGVyIHx8IHRoaXMuaGVhZGVyVHBsO1xuICB9XG5cbiAgQElucHV0KCkgY2xvc2VCdXR0b25Bc3Npc3RpdmVUZXh0ID0gJ0Nsb3NlJztcblxuICBAT3V0cHV0KCkgb3BlbkNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBAQ29udGVudENoaWxkKE5nbE1vZGFsSGVhZGVyVGVtcGxhdGUpIGhlYWRlclRwbDogTmdsTW9kYWxIZWFkZXJUZW1wbGF0ZTtcblxuICBAQ29udGVudENoaWxkKE5nbE1vZGFsVGFnbGluZVRlbXBsYXRlKSB0YWdsaW5lVHBsOiBOZ2xNb2RhbFRhZ2xpbmVUZW1wbGF0ZTtcblxuICBAQ29udGVudENoaWxkKE5nbE1vZGFsRm9vdGVyVGVtcGxhdGUpIGZvb3RlcjogTmdsTW9kYWxGb290ZXJUZW1wbGF0ZTtcblxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgZGlzbWlzc09uQ2xpY2tPdXRzaWRlID0gdHJ1ZTtcblxuICBASW5wdXQoKSBwcm9tcHQ6ICdzdWNjZXNzJyB8ICd3YXJuaW5nJyB8ICdlcnJvcicgfCAnd3JlbmNoJyB8ICdvZmZsaW5lJyB8ICdpbmZvJztcblxuICBAaGFzT2JzZXJ2ZXJzKCdvcGVuQ2hhbmdlJykgc2hvd0Nsb3NlOiBib29sZWFuO1xuXG4gIC8qKiBUaGUgY2xhc3MgdGhhdCB0cmFwcyBhbmQgbWFuYWdlcyBmb2N1cyB3aXRoaW4gdGhlIGRpYWxvZy4gKi9cbiAgcHJpdmF0ZSBmb2N1c1RyYXA6IEZvY3VzVHJhcDtcblxuICBwcml2YXRlIGNvbnRhaW5lcjogT3ZlcmxheVJlZjtcblxuICAvKiogRWxlbWVudCB0aGF0IHdhcyBmb2N1c2VkIGJlZm9yZSB0aGUgZGlhbG9nIHdhcyBvcGVuZWQuIFNhdmUgdGhpcyB0byByZXN0b3JlIHVwb24gY2xvc2UuICovXG4gIHByaXZhdGUgZWxlbWVudEZvY3VzZWRCZWZvcmVEaWFsb2dXYXNPcGVuZWQ6IEhUTUxFbGVtZW50IHwgbnVsbCA9IG51bGw7XG5cbiAgcHJpdmF0ZSBzY3JvbGxTdHJhdGVneTogQmxvY2tTY3JvbGxTdHJhdGVneTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGZvY3VzVHJhcEZhY3Rvcnk6IEZvY3VzVHJhcEZhY3RvcnksXG4gICAgICAgICAgICAgIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jdW1lbnQ6IGFueSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBvdmVybGF5OiBPdmVybGF5LFxuICAgICAgICAgICAgICBwcml2YXRlIGVsZW1lbnQ6IEVsZW1lbnRSZWYpIHtcbiAgICB0aGlzLnNjcm9sbFN0cmF0ZWd5ID0gdGhpcy5vdmVybGF5LnNjcm9sbFN0cmF0ZWdpZXMuYmxvY2soKTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2tleWRvd24uZXNjJywgWyckZXZlbnQnXSlcbiAgY2xvc2UoZXZ0PzogRXZlbnQpIHtcbiAgICBpZiAoZXZ0KSB7XG4gICAgICBldnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfVxuICAgIHRoaXMub3BlbkNoYW5nZS5lbWl0KGZhbHNlKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICBpZiAoJ29wZW4nIGluIGNoYW5nZXMpIHtcbiAgICAgIHRoaXMuaGFuZGxlT3BlbigpO1xuICAgIH1cbiAgfVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICB0aGlzLmhhbmRsZU9wZW4oKTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJywgWyckZXZlbnQnXSlcbiAgY2xpY2tPdXRzaWRlKGV2dCkge1xuICAgIGlmICghdGhpcy5kaXNtaXNzT25DbGlja091dHNpZGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCB7IGNsYXNzTGlzdCB9ID0gZXZ0LnRhcmdldDtcbiAgICBpZiAoY2xhc3NMaXN0LmNvbnRhaW5zKCdzbGRzLW1vZGFsJykgfHwgY2xhc3NMaXN0LmNvbnRhaW5zKCdzbGRzLW1vZGFsX19jb250YWluZXInKSkge1xuICAgICAgdGhpcy5jbG9zZSgpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuaGFuZGxlT3BlbihmYWxzZSk7XG4gICAgdGhpcy5zY3JvbGxTdHJhdGVneSA9IG51bGw7XG4gIH1cblxuICBtb2RhbENsYXNzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBbYHNsZHMtbW9kYWxfJHt0aGlzLnNpemV9YF06ICEhdGhpcy5zaXplLFxuICAgICAgW2BzbGRzLWZhZGUtaW4tb3BlbmBdOiB0aGlzLm9wZW4sXG4gICAgICBbYHNsZHMtbW9kYWxfcHJvbXB0YF06ICEhdGhpcy5wcm9tcHQsXG4gICAgfTtcbiAgfVxuXG4gIG1vZGFsSGVhZGVyQ2xhc3MoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFtgc2xkcy1tb2RhbF9faGVhZGVyX2VtcHR5YF06ICF0aGlzLmhhc0hlYWRlcixcbiAgICAgIFtgc2xkcy10aGVtZV8ke3RoaXMucHJvbXB0fWBdOiAhIXRoaXMucHJvbXB0LFxuICAgIH07XG4gIH1cblxuICBtb2RhbEZvb3RlckNsYXNzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBbYHNsZHMtbW9kYWxfX2Zvb3Rlcl9kaXJlY3Rpb25hbGBdOiAhIXRoaXMuZGlyZWN0aW9uYWwsXG4gICAgICBbYHNsZHMtdGhlbWVfZGVmYXVsdGBdOiAhIXRoaXMucHJvbXB0LFxuICAgIH07XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZU9wZW4ob3BlbiA9IHRoaXMub3Blbikge1xuICAgIGlmIChvcGVuKSB7XG4gICAgICBpZiAodGhpcy5kb2N1bWVudCkge1xuICAgICAgICB0aGlzLmVsZW1lbnRGb2N1c2VkQmVmb3JlRGlhbG9nV2FzT3BlbmVkID0gdGhpcy5kb2N1bWVudC5hY3RpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50O1xuICAgICAgfVxuXG4gICAgICB0aGlzLmNvbnRhaW5lciA9IHRoaXMub3ZlcmxheS5jcmVhdGUoKTtcbiAgICAgIC8vIEF0dGFjaCB0aGUgZG9tIHRvIG92ZXJsYXksIHRoZSB2aWV3IGNvbnRhaW5lciBpcyBub3QgY2hhbmdlZFxuICAgICAgdGhpcy5jb250YWluZXIub3ZlcmxheUVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQpO1xuXG4gICAgICB0aGlzLmZvY3VzVHJhcCA9IHRoaXMuZm9jdXNUcmFwRmFjdG9yeS5jcmVhdGUodGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQpO1xuICAgICAgdGhpcy5mb2N1c1RyYXAuZm9jdXNJbml0aWFsRWxlbWVudFdoZW5SZWFkeSgpO1xuICAgICAgdGhpcy5zY3JvbGxTdHJhdGVneS5lbmFibGUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMuZWxlbWVudEZvY3VzZWRCZWZvcmVEaWFsb2dXYXNPcGVuZWQgJiYgdHlwZW9mIHRoaXMuZWxlbWVudEZvY3VzZWRCZWZvcmVEaWFsb2dXYXNPcGVuZWQuZm9jdXMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50Rm9jdXNlZEJlZm9yZURpYWxvZ1dhc09wZW5lZC5mb2N1cygpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5jb250YWluZXIpIHtcbiAgICAgICAgdGhpcy5jb250YWluZXIuZGlzcG9zZSgpO1xuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmZvY3VzVHJhcCkge1xuICAgICAgICB0aGlzLmZvY3VzVHJhcC5kZXN0cm95KCk7XG4gICAgICB9XG4gICAgICB0aGlzLnNjcm9sbFN0cmF0ZWd5LmRpc2FibGUoKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==
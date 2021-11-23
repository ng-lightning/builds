import { Injectable, RendererFactory2, Component, ChangeDetectionStrategy, ElementRef, Input, InjectionToken, Optional, Inject, Renderer2, NgModule, TemplateRef, Directive, EventEmitter, Output, ContentChildren, ChangeDetectorRef, HostBinding, HostListener, ViewChildren, ViewChild, ContentChild, ViewContainerRef, forwardRef, Self, NgZone, LOCALE_ID } from '@angular/core';
import { CommonModule, DOCUMENT, getLocaleMonthNames, FormStyle, TranslationWidth, getLocaleDayNames, getLocaleFirstDayOfWeek } from '@angular/common';
import { __decorate } from 'tslib';
import { coerceBooleanProperty, _isNumberValue, coerceNumberProperty } from '@angular/cdk/coercion';
import { LEFT_ARROW, RIGHT_ARROW, ESCAPE, DOWN_ARROW, UP_ARROW, ENTER, PAGE_UP, PAGE_DOWN, HOME, END } from '@angular/cdk/keycodes';
import { BehaviorSubject, Subject, merge, fromEvent } from 'rxjs';
import { ConnectionPositionPair, Overlay, OverlayModule, CdkConnectedOverlay, ScrollDispatcher } from '@angular/cdk/overlay';
import { FocusTrapFactory, A11yModule, ActiveDescendantKeyManager } from '@angular/cdk/a11y';
import { ComponentPortal } from '@angular/cdk/portal';
import { map, distinctUntilChanged, mapTo, filter, flatMap, startWith, takeUntil, buffer, debounceTime, take } from 'rxjs/operators';
import { NG_VALUE_ACCESSOR, NG_VALIDATORS, FormsModule } from '@angular/forms';
import { parse, format } from 'date-fns';

class HostService {
    constructor(rendererFactory2) {
        this.classMap = {};
        this.styleMap = {};
        this.renderer = rendererFactory2.createRenderer(null, null);
    }
    updateClass({ nativeElement }, classMap) {
        const newClassMap = {};
        const remove = Object.assign({}, this.classMap);
        Object.keys(classMap).filter(i => classMap[i]).forEach(i => {
            newClassMap[i] = true;
            if (!this.classMap[i]) {
                this.renderer.addClass(nativeElement, i);
            }
            if (remove[i]) {
                remove[i] = false;
            }
        });
        Object.keys(remove).filter(i => remove[i]).forEach(i => this.renderer.removeClass(nativeElement, i));
        this.classMap = newClassMap;
    }
    updateStyle({ nativeElement }, styleMap) {
        const remove = Object.assign({}, this.styleMap);
        Object.keys(styleMap).filter(i => styleMap[i]).forEach(i => {
            if (styleMap[i] !== false) {
                this.renderer.setStyle(nativeElement, i, styleMap[i]);
            }
            if (remove[i]) {
                delete remove[i];
            }
        });
        Object.keys(remove).forEach(i => this.renderer.removeStyle(nativeElement, i));
        this.styleMap = styleMap;
    }
}
HostService.decorators = [
    { type: Injectable }
];
HostService.ctorParameters = () => [
    { type: RendererFactory2 }
];

// Check if given value is integer. Cast strings as potential integers as well.
// See: http://stackoverflow.com/questions/14636536/how-to-check-if-a-variable-is-an-integer-in-javascript
function isInt(value) {
    if (isNaN(value)) {
        return false;
    }
    const x = parseFloat(value);
    // tslint:disable-next-line:no-bitwise
    return (x | 0) === x;
}
// Similar to `lodash.isobject`
function isObject(value) {
    const type = typeof value;
    return !!value && (type === 'object' || type === 'function');
}
// Generate a unique id (unique within the entire client session).
// Useful for temporary DOM ids.
let idCounter = 0;
function uniqueId(prefix = 'uid') {
    return `ngl_${prefix}_${++idCounter}`;
}
function replaceClass(instance, oldClass, newClass) {
    if (oldClass && oldClass !== newClass) {
        setClass(instance, oldClass, false);
    }
    if (newClass) {
        setClass(instance, newClass, true);
    }
}
function setClass(instance, klasses, isAdd) {
    if (klasses) {
        (Array.isArray(klasses) ? klasses : [klasses]).forEach(k => {
            instance.renderer[isAdd ? 'addClass' : 'removeClass'](instance.element.nativeElement, k);
        });
    }
}
function ngClassCombine(ngClasses, customClasses) {
    if (!ngClasses) {
        return customClasses;
    }
    // Convert string and Set to array
    if (typeof ngClasses === 'string') {
        ngClasses = ngClasses.split(/\s+/);
    }
    else if (ngClasses instanceof Set) {
        const a = [];
        ngClasses.forEach(v => a.push(v));
        ngClasses = a;
    }
    // Convert array to object
    if (Array.isArray(ngClasses)) {
        ngClasses = ngClasses.reduce((o, klass) => {
            o[klass] = true;
            return o;
        }, {});
    }
    return Object.assign(Object.assign({}, ngClasses), customClasses);
}
/**
   * Check whether value is currently selected.
   *
   * @param selection The value(s) currently selected
   * @param value The value in test, whether is (part of) selection or not
   * @param multiple Whether selections can be have multiple values
   */
function isOptionSelected(value, selection, multiple) {
    // Multiple
    if (multiple) {
        if (!selection) {
            return false;
        }
        return Array.isArray(selection) ? selection.indexOf(value) > -1 : !!selection[value];
    }
    // Single
    return value === selection;
}
function addOptionToSelection(value, selection, multiple, clearable = false) {
    let next;
    if (multiple) {
        if (!selection) {
            selection = [];
        }
        if (Array.isArray(selection)) {
            // Remove if already there or add to selection
            const index = selection.indexOf(value);
            next = index > -1
                ? [...selection.slice(0, index), ...selection.slice(index + 1)]
                : [...selection, value];
        }
        else {
            next = Object.assign({}, selection, { [value]: !selection[value] });
        }
    }
    else {
        next = selection === value && clearable ? null : value;
    }
    return next;
}
function menuItemScroll(container, domItem, scrollPadding = 4) {
    if (domItem.offsetHeight - container.scrollTop + domItem.offsetTop >=
        container.offsetHeight) {
        container.scrollTop =
            domItem.offsetHeight +
                domItem.offsetTop -
                container.offsetHeight +
                scrollPadding;
    }
    else if (domItem.offsetTop <= container.scrollTop) {
        container.scrollTop = domItem.offsetTop - scrollPadding;
    }
}
function trapEvent(event) {
    if (!event) {
        return;
    }
    event.preventDefault();
    event.stopPropagation();
}

function normalizeIconName(iconName) {
    return iconName.indexOf(':') > -1 ? iconName : `utility:${iconName}`;
}

class NglIcon {
    constructor(el, hostService) {
        this.el = el;
        this.hostService = hostService;
        /**
         * The appearance of a `utility` icon.
         */
        this.variant = 'default';
    }
    set iconName(iconName) {
        this._iconName = normalizeIconName(iconName);
    }
    get iconName() {
        return this._iconName;
    }
    ngOnInit() {
        this.setHostClass();
    }
    ngOnChanges() {
        this.setHostClass();
    }
    svgClasses() {
        const [category] = this.iconName.split(':');
        const isUtility = category === 'utility';
        const isDefaultOrInverse = this.variant === 'default' || this.variant === 'inverse';
        const classes = {
            [`slds-icon_${this.size}`]: !!this.size && this.size !== 'medium',
            [`slds-icon-text-${isDefaultOrInverse ? 'default' : this.variant}`]: isDefaultOrInverse ?
                (this.variant === 'default' ? isUtility : !isUtility)
                : !!this.variant,
        };
        return ngClassCombine(this.svgClass, classes);
    }
    setHostClass() {
        const [category, icon] = this.iconName.split(':');
        const kebabCaseName = icon.replace(/_/g, '-');
        this.hostService.updateClass(this.el, {
            [`slds-icon_container`]: category !== 'utility',
            [`slds-icon_container_circle`]: category === 'action',
            [`slds-icon-${category}-${kebabCaseName}`]: category !== 'utility' && category !== 'doctype',
        });
    }
}
NglIcon.decorators = [
    { type: Component, args: [{
                selector: 'ngl-icon, [ngl-icon]',
                template: "\n<svg class=\"slds-icon\" [nglIconName]=\"iconName\" [ngClass]=\"svgClasses()\"></svg>\n<ng-content></ng-content><span class=\"slds-assistive-text\" *ngIf=\"alternativeText\">{{alternativeText}}</span>",
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [HostService]
            },] }
];
NglIcon.ctorParameters = () => [
    { type: ElementRef },
    { type: HostService }
];
NglIcon.propDecorators = {
    iconName: [{ type: Input }],
    variant: [{ type: Input }],
    size: [{ type: Input }],
    alternativeText: [{ type: Input }],
    svgClass: [{ type: Input }]
};

/** Injection token that can be used to specify default options. */
const NGL_ICON_CONFIG = new InjectionToken('ngl-icon-config');
/**
 * Configuration service for the icons components.
 */
class NglIconConfig {
    constructor() {
        /**
         * The path to LDS assets
         */
        this.svgPath = 'assets/icons';
    }
}

class NglIconSvg {
    constructor(defaultConfig, el, renderer) {
        this.xPos = '0';
        renderer.setAttribute(el.nativeElement, 'aria-hidden', 'true');
        const config = Object.assign(Object.assign({}, new NglIconConfig()), defaultConfig);
        this.path = config.svgPath;
    }
    set iconName(iconName) {
        const [category, icon] = normalizeIconName(iconName).split(':');
        this.iconPath = `${this.path}/${category}-sprite/svg/symbols.svg#${icon}`;
    }
}
NglIconSvg.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'svg[nglIconName]',
                template: "\n<svg:use [attr.xlink:href]=\"iconPath\" [attr.x]=\"xPos\"></svg:use>",
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
NglIconSvg.ctorParameters = () => [
    { type: NglIconConfig, decorators: [{ type: Optional }, { type: Inject, args: [NGL_ICON_CONFIG,] }] },
    { type: ElementRef },
    { type: Renderer2 }
];
NglIconSvg.propDecorators = {
    iconName: [{ type: Input, args: ['nglIconName',] }],
    xPos: [{ type: Input }]
};

const NGL_ICON_DIRECTIVES = [
    NglIcon,
    NglIconSvg,
];
class NglIconsModule {
}
NglIconsModule.decorators = [
    { type: NgModule, args: [{
                declarations: NGL_ICON_DIRECTIVES,
                exports: NGL_ICON_DIRECTIVES,
                imports: [CommonModule],
            },] }
];

class NglInternalOutlet {
    isTemplate() {
        return this.nglInternalOutlet instanceof TemplateRef;
    }
}
NglInternalOutlet.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: '[nglInternalOutlet]',
                template: `
    <ng-template [ngIf]="isTemplate()" [ngIfElse]="str">
      <ng-template [ngTemplateOutlet]="nglInternalOutlet" [ngTemplateOutletContext]="nglInternalOutletContext"></ng-template>
    </ng-template>
    <ng-template #str>{{nglInternalOutlet}}</ng-template>`,
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
NglInternalOutlet.propDecorators = {
    nglInternalOutlet: [{ type: Input }],
    nglInternalOutletContext: [{ type: Input }]
};

class NglInternalOutletModule {
}
NglInternalOutletModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [NglInternalOutlet],
                exports: [NglInternalOutlet],
            },] }
];

class NglAccordionSection {
    constructor(templateRef) {
        this.templateRef = templateRef;
        /**
         * The unique name to use with the `activeName` of the accordion component.
         */
        this.name = uniqueId('accordion-section');
    }
}
NglAccordionSection.decorators = [
    { type: Directive, args: [{
                selector: '[nglAccordionSection]',
            },] }
];
NglAccordionSection.ctorParameters = () => [
    { type: TemplateRef }
];
NglAccordionSection.propDecorators = {
    label: [{ type: Input }],
    labelContext: [{ type: Input }],
    name: [{ type: Input }]
};

function propDecoratorFactory(name, fallback) {
    function propDecorator(target, propName) {
        const privatePropName = `$$__${propName}`;
        if (Object.prototype.hasOwnProperty.call(target, privatePropName)) {
            console.warn(`The prop "${privatePropName}" is already exist, it will be overrided by ${name} decorator.`);
        }
        Object.defineProperty(target, privatePropName, {
            configurable: true,
            writable: true
        });
        Object.defineProperty(target, propName, {
            get() {
                return this[privatePropName];
            },
            set(value) {
                this[privatePropName] = fallback(value);
            }
        });
    }
    return propDecorator;
}
function toBoolean(value) {
    return coerceBooleanProperty(value);
}
function InputBoolean() {
    return propDecoratorFactory('InputBoolean', toBoolean);
}
function toNumber(value, fallbackValue = 0) {
    return _isNumberValue(value) ? Number(value) : fallbackValue;
}
function InputNumber() {
    return propDecoratorFactory('InputNumber', toNumber);
}

class NglAccordion {
    constructor(element, renderer) {
        this.activeNameChange = new EventEmitter();
        /**
         * Whether we allow multiple sections open at a time.
         */
        this.multiple = false;
        renderer.addClass(element.nativeElement, 'slds-accordion');
    }
    toggle(section) {
        const active = addOptionToSelection(section.name, this.activeName, this.multiple, true);
        this.activeNameChange.emit(active);
    }
    isActive(section) {
        return isOptionSelected(section.name, this.activeName, this.multiple);
    }
}
NglAccordion.decorators = [
    { type: Component, args: [{
                selector: 'ngl-accordion,[ngl-accordion]',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: "\n<li *ngFor=\"let section of sections\" nglAccordionItem [isActive]=\"isActive(section)\" [section]=\"section\" (toggle)=\"toggle(section)\"></li>"
            },] }
];
NglAccordion.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
NglAccordion.propDecorators = {
    activeName: [{ type: Input }],
    activeNameChange: [{ type: Output }],
    multiple: [{ type: Input }],
    sections: [{ type: ContentChildren, args: [NglAccordionSection,] }]
};
__decorate([
    InputBoolean()
], NglAccordion.prototype, "multiple", void 0);

class NglAccordionItem {
    constructor(element, renderer) {
        this.toggle = new EventEmitter();
        this.uid = uniqueId('accordion-item');
        renderer.addClass(element.nativeElement, 'slds-accordion__list-item');
    }
    onToggle() {
        this.toggle.emit();
    }
}
NglAccordionItem.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'li[nglAccordionItem]',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: "\n<section class=\"slds-accordion__section\" [class.slds-is-open]=\"isActive\">\n  <div class=\"slds-accordion__summary\">\n    <h3 class=\"slds-accordion__summary-heading\" (click)=\"onToggle()\">\n      <button class=\"slds-button slds-button_reset slds-accordion__summary-action\" [attr.aria-controls]=\"uid\" [attr.aria-expanded]=\"isActive\" type=\"button\">\n        <svg class=\"slds-accordion__summary-action-icon slds-button__icon slds-button__icon_left\" nglIconName=\"utility:switch\"></svg><span class=\"slds-truncate\" [nglInternalOutlet]=\"section.label\" [nglInternalOutletContext]=\"{$implicit: section.labelContext}\"></span>\n      </button>\n    </h3>\n  </div>\n  <div class=\"slds-accordion__content\" [attr.hidden]=\"isActive ? null : ''\" [id]=\"uid\">\n    <ng-container *ngIf=\"isActive\">\n      <ng-template [ngTemplateOutlet]=\"section.templateRef\"></ng-template>\n    </ng-container>\n  </div>\n</section>"
            },] }
];
NglAccordionItem.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
NglAccordionItem.propDecorators = {
    isActive: [{ type: Input }],
    section: [{ type: Input }],
    toggle: [{ type: Output }]
};

const DIRECTIVES$c = [
    NglAccordion,
    NglAccordionSection,
];
class NglAccordionModule {
}
NglAccordionModule.decorators = [
    { type: NgModule, args: [{
                declarations: [...DIRECTIVES$c, NglAccordionItem],
                exports: DIRECTIVES$c,
                imports: [CommonModule, NglIconsModule, NglInternalOutletModule],
            },] }
];

class NglCommonNotify {
    constructor(element, renderer, cd, type) {
        this.element = element;
        this.renderer = renderer;
        this.cd = cd;
        this.closeButtonAssistiveText = 'Close';
        /**
         * Triggered by close button or duration timeout.
         */
        // tslint:disable-next-line:no-output-rename
        this.closeEventEmitter = new EventEmitter();
        this.currentTimeout = null;
        this.renderer.addClass(this.element.nativeElement, 'slds-notify');
        this.renderer.addClass(this.element.nativeElement, `slds-notify_${type}`);
        this.toggleThemeClass(true, this.variant);
        this.renderer.setAttribute(this.element.nativeElement, 'role', type === 'toast' ? 'status' : 'alert');
    }
    /**
     * The type of alert.
     */
    set variant(variant) {
        this.toggleThemeClass(false, this.variant);
        this._variant = variant;
        this.toggleThemeClass(true, this.variant);
    }
    get variant() {
        return this._variant || 'info';
    }
    /**
     * The number of milliseconds after which, the close event will be triggered with an emitted reason of `'timeout'`.
     */
    set duration(duration) {
        this.clearTimeout();
        if (isInt(duration) && duration >= 0) {
            this.currentTimeout = setTimeout(() => this.close('timeout'), +duration);
        }
    }
    set dismissible(dismissible) {
        this._dismissible = dismissible;
        this.cd.markForCheck();
    }
    get dismissible() {
        return this._dismissible;
    }
    close(reason, $event) {
        this.clearTimeout();
        if ($event) {
            $event.preventDefault();
            $event.stopPropagation();
        }
        this.closeEventEmitter.emit(reason);
    }
    ngOnDestroy() {
        this.clearTimeout();
    }
    clearTimeout() {
        if (this.currentTimeout !== null) {
            clearTimeout(this.currentTimeout);
            this.currentTimeout = null;
        }
    }
    toggleThemeClass(isAdd, klass) {
        if (!klass) {
            return;
        }
        const el = this.element.nativeElement;
        this.renderer[isAdd ? 'addClass' : 'removeClass'](el, `slds-theme_${klass}`);
    }
}
NglCommonNotify.decorators = [
    { type: Directive }
];
NglCommonNotify.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: ChangeDetectorRef },
    { type: String, decorators: [{ type: Inject, args: ['type',] }] }
];
NglCommonNotify.propDecorators = {
    variant: [{ type: Input }],
    iconName: [{ type: Input }],
    assistiveText: [{ type: Input }],
    closeButtonAssistiveText: [{ type: Input }],
    duration: [{ type: Input }],
    closeEventEmitter: [{ type: Output, args: ['close',] }]
};

class NglAlert extends NglCommonNotify {
    constructor(element, renderer, cd) {
        super(element, renderer, cd, 'alert');
    }
}
NglAlert.decorators = [
    { type: Component, args: [{
                selector: 'ngl-alert',
                template: "<span class=\"slds-assistive-text\">{{assistiveText || variant}}</span>\n<ngl-icon class=\"slds-m-right_x-small\" *ngIf=\"iconName\" [iconName]=\"iconName\" size=\"x-small\" variant=\"\"></ngl-icon>\n<div class=\"slds-notify__content\">\n  <ng-content></ng-content>\n</div>\n<button class=\"slds-button slds-button_icon slds-notify__close slds-button_icon-inverse\" *ngIf=\"dismissible\" type=\"button\" (click)=\"close('button', $event)\">\n  <svg class=\"slds-button__icon\" nglIconName=\"utility:close\"></svg><span class=\"slds-assistive-text\" *ngIf=\"closeButtonAssistiveText\">{{closeButtonAssistiveText}}</span>\n</button>",
                changeDetection: ChangeDetectionStrategy.OnPush,
                exportAs: 'nglAlert'
            },] }
];
NglAlert.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: ChangeDetectorRef }
];

class NglCommonNotifyClose {
    constructor(host) {
        this.host = host;
        this.host.dismissible = true;
    }
    set dismissible(dismissible) {
        this.host.dismissible = dismissible;
    }
}
NglCommonNotifyClose.decorators = [
    { type: Directive }
];
NglCommonNotifyClose.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: ['host',] }] }
];
NglCommonNotifyClose.propDecorators = {
    dismissible: [{ type: Input }]
};

class NglAlertClose extends NglCommonNotifyClose {
    constructor(alert) {
        super(alert);
    }
}
NglAlertClose.decorators = [
    { type: Directive, args: [{
                // tslint:disable-next-line:directive-selector
                selector: 'ngl-alert[close]',
            },] }
];
NglAlertClose.ctorParameters = () => [
    { type: NglAlert }
];

const NGL_ALERT_DIRECTIVES = [
    NglAlert,
    NglAlertClose,
];
class NglAlertModule {
}
NglAlertModule.decorators = [
    { type: NgModule, args: [{
                declarations: [NGL_ALERT_DIRECTIVES],
                exports: [NGL_ALERT_DIRECTIVES],
                imports: [CommonModule, NglIconsModule],
            },] }
];

class NglAvatar {
    constructor(element, renderer, hostService) {
        this.element = element;
        this.hostService = hostService;
        this.src = '';
        this.alternativeText = '';
        this.fallbackIconName = 'standard:user';
        this.error = new EventEmitter();
        this._imgError = false;
        renderer.addClass(element.nativeElement, 'slds-avatar');
    }
    fallbackIconClass() {
        const [category, icon] = this.fallbackIconName.split(':');
        return `slds-icon-${category}-${icon}`;
    }
    get shouldShowImage() {
        return this.src && !this._imgError;
    }
    onImgError() {
        this._imgError = true;
        this.error.emit();
    }
    ngOnInit() {
        this.setHostClass();
    }
    ngOnChanges() {
        this.setHostClass();
    }
    setHostClass() {
        this.hostService.updateClass(this.element, {
            [`slds-avatar_${this.size || 'medium'}`]: true,
            [`slds-avatar_${this.variant || 'rectangle'}`]: true,
        });
    }
}
NglAvatar.decorators = [
    { type: Component, args: [{
                selector: 'ngl-avatar',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: "<img *ngIf=\"shouldShowImage; else template_initials\" [src]=\"src\" [alt]=\"alternativeText\" (error)=\"onImgError()\">\n<ng-template #template_initials><abbr class=\"slds-avatar__initials\" [ngClass]=\"fallbackIconClass()\">{{ initials }}</abbr></ng-template>",
                providers: [HostService]
            },] }
];
NglAvatar.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: HostService }
];
NglAvatar.propDecorators = {
    src: [{ type: Input }],
    alternativeText: [{ type: HostBinding, args: ['attr.title',] }, { type: Input }],
    size: [{ type: Input }],
    variant: [{ type: Input }],
    initials: [{ type: Input }],
    fallbackIconName: [{ type: Input }],
    error: [{ type: Output }]
};

class NglAvatarModule {
}
NglAvatarModule.decorators = [
    { type: NgModule, args: [{
                declarations: [NglAvatar],
                exports: [NglAvatar],
                imports: [CommonModule],
            },] }
];

class NglBadge {
}
NglBadge.decorators = [
    { type: Component, args: [{
                selector: 'ngl-badge',
                template: "<span class=\"slds-badge\" [ngClass]=\"theme ? 'slds-theme_' + theme : ''\">\n  <ng-content></ng-content></span>",
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
NglBadge.propDecorators = {
    theme: [{ type: Input }]
};

class NglBadgesModule {
}
NglBadgesModule.decorators = [
    { type: NgModule, args: [{
                declarations: [NglBadge],
                exports: [NglBadge],
                imports: [CommonModule],
            },] }
];

class NglBreadcrumb {
    constructor(templateRef) {
        this.templateRef = templateRef;
    }
}
NglBreadcrumb.decorators = [
    { type: Directive, args: [{
                selector: '[nglBreadcrumb]',
            },] }
];
NglBreadcrumb.ctorParameters = () => [
    { type: TemplateRef }
];

class NglBreadcrumbs {
}
NglBreadcrumbs.decorators = [
    { type: Component, args: [{
                selector: 'ngl-breadcrumbs',
                template: "\n<nav role=\"navigation\" [attr.aria-label]=\"assistiveText\">\n  <ol class=\"slds-breadcrumb slds-list_horizontal slds-wrap\">\n    <li class=\"slds-breadcrumb__item\" *ngFor=\"let b of breadcrumbs\">\n      <ng-template [ngTemplateOutlet]=\"b.templateRef\"></ng-template>\n    </li>\n  </ol>\n</nav>",
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
NglBreadcrumbs.propDecorators = {
    assistiveText: [{ type: Input }],
    breadcrumbs: [{ type: ContentChildren, args: [NglBreadcrumb,] }]
};

const NGL_BREADCRUMB_DIRECTIVES = [
    NglBreadcrumbs,
    NglBreadcrumb,
];
class NglBreadcrumbsModule {
}
NglBreadcrumbsModule.decorators = [
    { type: NgModule, args: [{
                declarations: [NGL_BREADCRUMB_DIRECTIVES],
                exports: [NGL_BREADCRUMB_DIRECTIVES],
                imports: [CommonModule],
            },] }
];

class NglButtonIcon {
    constructor(el, hostService, renderer) {
        this.el = el;
        this.hostService = hostService;
        /**
         * The variant changes the appearance of the button
         */
        this.variant = 'border';
        renderer.addClass(this.el.nativeElement, 'slds-button');
        renderer.addClass(this.el.nativeElement, 'slds-button_icon');
    }
    get altText() {
        return this.alternativeText || this.title;
    }
    ngOnInit() {
        this.setHostClass();
    }
    ngOnChanges() {
        this.setHostClass();
    }
    iconClass() {
        const hasVariant = this.hasVariant();
        const classes = {
            [`slds-button__icon_${this.size}`]: !hasVariant,
        };
        return ngClassCombine(this.svgClass, classes);
    }
    setHostClass() {
        const hasVariant = this.hasVariant();
        this.hostService.updateClass(this.el, {
            [`slds-button_icon-${this.variant}`]: hasVariant,
            [`slds-button_icon-${this.size}`]: this.size && hasVariant,
        });
    }
    hasVariant() {
        return this.variant && this.variant !== 'bare';
    }
}
NglButtonIcon.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: '[nglButtonIcon]',
                template: "\n<svg class=\"slds-button__icon\" *ngIf=\"iconName\" [nglIconName]=\"iconName\" [ngClass]=\"iconClass()\"></svg>\n<ng-content></ng-content><span class=\"slds-assistive-text\" *ngIf=\"altText as text\">{{ text }}</span>",
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [HostService]
            },] }
];
NglButtonIcon.ctorParameters = () => [
    { type: ElementRef },
    { type: HostService },
    { type: Renderer2 }
];
NglButtonIcon.propDecorators = {
    iconName: [{ type: Input }],
    title: [{ type: Input }],
    alternativeText: [{ type: Input }],
    variant: [{ type: Input }],
    size: [{ type: Input }],
    svgClass: [{ type: Input }]
};

const DEFAULT_VARIANT = 'border';
class NglButtonIconStateful {
    constructor(el, hostService, renderer) {
        this.el = el;
        this.hostService = hostService;
        /**
         * Specifies whether button is in selected state or not.
         */
        this.selected = false;
        this.selectedChange = new EventEmitter();
        /**
         * The variant changes the appearance of the button.
         */
        this.variant = DEFAULT_VARIANT;
        /**
         *  The size of the button.
         */
        this.size = null;
        renderer.addClass(this.el.nativeElement, 'slds-button');
        renderer.addClass(this.el.nativeElement, 'slds-button_icon');
    }
    get altText() {
        return this.alternativeText || this.title;
    }
    onclick() {
        this.selectedChange.emit(!this.selected);
    }
    ngOnInit() {
        this.setHostClass();
    }
    ngOnChanges() {
        this.setHostClass();
    }
    setHostClass() {
        this.hostService.updateClass(this.el, {
            [`slds-button_icon-${this.variant || DEFAULT_VARIANT}`]: true,
            [`slds-button_icon-${this.size}`]: !!this.size,
        });
    }
}
NglButtonIconStateful.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: '[nglButtonIconStateful]',
                template: "\n<svg class=\"slds-button__icon\" *ngIf=\"iconName\" [nglIconName]=\"iconName\"></svg>\n<ng-content></ng-content><span class=\"slds-assistive-text\" *ngIf=\"altText as text\">{{ text }}</span>",
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [HostService]
            },] }
];
NglButtonIconStateful.ctorParameters = () => [
    { type: ElementRef },
    { type: HostService },
    { type: Renderer2 }
];
NglButtonIconStateful.propDecorators = {
    selected: [{ type: HostBinding, args: ['class.slds-is-selected',] }, { type: HostBinding, args: ['attr.aria-pressed',] }, { type: Input }],
    selectedChange: [{ type: Output }],
    iconName: [{ type: Input }],
    title: [{ type: Input }],
    alternativeText: [{ type: Input }],
    variant: [{ type: Input }],
    size: [{ type: Input }],
    onclick: [{ type: HostListener, args: ['click',] }]
};
__decorate([
    InputBoolean()
], NglButtonIconStateful.prototype, "selected", void 0);

const NGL_BUTTON_ICON_DIRECTIVES = [
    NglButtonIcon,
    NglButtonIconStateful,
];
class NglButtonIconsModule {
}
NglButtonIconsModule.decorators = [
    { type: NgModule, args: [{
                declarations: NGL_BUTTON_ICON_DIRECTIVES,
                exports: NGL_BUTTON_ICON_DIRECTIVES,
                imports: [CommonModule, NglIconsModule],
            },] }
];

class NglButton {
    constructor(el, renderer, hostService) {
        this.el = el;
        this.renderer = renderer;
        this.hostService = hostService;
        /**
         * Changes the appearance of the button.
         */
        this.variant = 'neutral';
        /**
         * Describes the position of the icon with respect to ng-content.
         */
        this.iconPosition = 'left';
        this.renderer.addClass(this.el.nativeElement, 'slds-button');
    }
    ngOnInit() {
        this.setHostClass();
    }
    ngOnChanges(changes) {
        if (changes.variant) {
            this.setHostClass();
        }
    }
    hasLeftIcon() {
        return this.iconName && (!this.iconPosition || this.iconPosition === 'left');
    }
    hasRightIcon() {
        return this.iconName && this.iconPosition === 'right';
    }
    setHostClass() {
        this.hostService.updateClass(this.el, {
            [`slds-button_${this.variant}`]: this.variant && this.variant !== 'base',
        });
    }
}
NglButton.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: '[nglButton]',
                template: "\n<svg class=\"slds-button__icon slds-button__icon_left\" *ngIf=\"hasLeftIcon()\" [nglIconName]=\"iconName\"></svg>\n<ng-content></ng-content>\n<svg class=\"slds-button__icon slds-button__icon_right\" *ngIf=\"hasRightIcon()\" [nglIconName]=\"iconName\"></svg>",
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [HostService]
            },] }
];
NglButton.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: HostService }
];
NglButton.propDecorators = {
    variant: [{ type: Input }],
    iconName: [{ type: Input }],
    iconPosition: [{ type: Input }]
};

class NglButtonStateful {
    constructor(el, renderer, hostService) {
        this.el = el;
        this.renderer = renderer;
        this.hostService = hostService;
        /**
         * Triggered when the button is clicked.
         */
        this.stateChange = new EventEmitter();
        /**
         * Appearance.
         */
        this.variant = 'neutral';
        this.renderer.addClass(this.el.nativeElement, 'slds-button');
        this.renderer.addClass(this.el.nativeElement, 'slds-button_stateful');
        this.renderer.setAttribute(this.el.nativeElement, 'aria-live', 'assertive');
    }
    onSelectChange() {
        this.stateChange.emit(!this.state);
    }
    onFocusToggle(focused) {
        this.focused = !!+focused;
        if (!this.focused) {
            this.setHostClass();
        }
    }
    ngOnInit() {
        this.setHostClass();
    }
    ngOnChanges() {
        this.setHostClass();
    }
    setHostClass() {
        this.hostService.updateClass(this.el, {
            [`slds-button_${this.variant === 'text' ? 'reset' : this.variant}`]: !!this.variant,
            [`slds-is-selected-clicked`]: this.state && this.focused,
            [`slds-is-selected`]: this.state && !this.focused,
            [`slds-not-selected`]: !this.state,
        });
    }
}
NglButtonStateful.decorators = [
    { type: Directive, args: [{
                selector: '[nglButtonStateful]',
                providers: [HostService],
            },] }
];
NglButtonStateful.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: HostService }
];
NglButtonStateful.propDecorators = {
    state: [{ type: Input }],
    stateChange: [{ type: Output }],
    variant: [{ type: Input }],
    onSelectChange: [{ type: HostListener, args: ['click',] }],
    onFocusToggle: [{ type: HostListener, args: ['focus', ['1'],] }, { type: HostListener, args: ['blur', ['0'],] }]
};
__decorate([
    InputBoolean()
], NglButtonStateful.prototype, "state", void 0);

class NglButtonStateOn {
    constructor(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.renderer.addClass(this.el.nativeElement, this.getHostClass());
    }
    getHostClass() {
        return 'slds-text-selected';
    }
}
NglButtonStateOn.decorators = [
    { type: Component, args: [{
                selector: 'ngl-state-on',
                template: "\n<svg class=\"slds-button__icon slds-button__icon_small slds-button__icon_left\" *ngIf=\"iconName\" [nglIconName]=\"iconName\"></svg>\n<ng-content></ng-content>",
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
NglButtonStateOn.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
NglButtonStateOn.propDecorators = {
    iconName: [{ type: Input }]
};
class NglButtonStateOff extends NglButtonStateOn {
    getHostClass() {
        return 'slds-text-not-selected';
    }
}
NglButtonStateOff.decorators = [
    { type: Component, args: [{
                selector: 'ngl-state-off',
                template: "\n<svg class=\"slds-button__icon slds-button__icon_small slds-button__icon_left\" *ngIf=\"iconName\" [nglIconName]=\"iconName\"></svg>\n<ng-content></ng-content>",
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
class NglButtonStateHover extends NglButtonStateOn {
    getHostClass() {
        return 'slds-text-selected-focus';
    }
}
NglButtonStateHover.decorators = [
    { type: Component, args: [{
                selector: 'ngl-state-hover',
                template: "\n<svg class=\"slds-button__icon slds-button__icon_small slds-button__icon_left\" *ngIf=\"iconName\" [nglIconName]=\"iconName\"></svg>\n<ng-content></ng-content>",
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];

const NGL_BUTTON_DIRECTIVES = [
    NglButton,
    NglButtonStateful,
    NglButtonStateOn,
    NglButtonStateOff,
    NglButtonStateHover
];
class NglButtonsModule {
}
NglButtonsModule.decorators = [
    { type: NgModule, args: [{
                declarations: NGL_BUTTON_DIRECTIVES,
                exports: NGL_BUTTON_DIRECTIVES,
                imports: [CommonModule, NglIconsModule],
            },] }
];

class NglCarouselImage {
    constructor(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.uid = uniqueId('carousel-image');
        this.renderer.setAttribute(this.el.nativeElement, 'id', this.uid);
        this.renderer.addClass(this.el.nativeElement, 'slds-carousel__panel');
        this.renderer.setAttribute(this.el.nativeElement, 'role', 'tabpanel');
    }
    set labelledby(labelledby) {
        this.renderer.setAttribute(this.el.nativeElement, 'aria-labelledby', labelledby);
    }
    set active(active) {
        this.renderer.setAttribute(this.el.nativeElement, 'aria-hidden', `${!active}`);
    }
}
NglCarouselImage.decorators = [
    { type: Component, args: [{
                selector: 'ngl-carousel-image',
                template: "<a class=\"slds-carousel__panel-action slds-text-link_reset\" href=\"javascript:void(0);\" [attr.tabindex]=\"active ? 0 : -1\">\n  <div class=\"slds-carousel__image\"><img [src]=\"src\" [attr.alt]=\"alternativeText || null\"></div>\n  <div class=\"slds-carousel__content\">\n    <h2 class=\"slds-carousel__content-title\" [nglInternalOutlet]=\"header\"></h2>\n    <p [nglInternalOutlet]=\"description\"></p>\n  </div></a>",
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
NglCarouselImage.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
NglCarouselImage.propDecorators = {
    src: [{ type: Input }],
    header: [{ type: Input }],
    description: [{ type: Input }],
    alternativeText: [{ type: Input }]
};

class NglCarouselIndicator {
    constructor(el) {
        this.el = el;
        this.uid = uniqueId('carousel-indicator');
    }
    get tabindex() {
        return this.isActive ? 0 : -1;
    }
    ngOnChanges(changes) {
        this.image.active = this.isActive;
        if (changes.image) {
            this.image.labelledby = this.uid;
        }
    }
    focus() {
        this.el.nativeElement.focus();
    }
}
NglCarouselIndicator.decorators = [
    { type: Directive, args: [{
                selector: '[nglCarouselIndicator]',
            },] }
];
NglCarouselIndicator.ctorParameters = () => [
    { type: ElementRef }
];
NglCarouselIndicator.propDecorators = {
    isActive: [{ type: HostBinding, args: ['class.slds-is-active',] }, { type: HostBinding, args: ['attr.aria-selected',] }, { type: Input }],
    tabindex: [{ type: HostBinding, args: ['attr.tabindex',] }],
    image: [{ type: Input }],
    uid: [{ type: HostBinding, args: ['attr.id',] }]
};
__decorate([
    InputBoolean()
], NglCarouselIndicator.prototype, "isActive", void 0);

class NglCarousel {
    constructor(document) {
        this.document = document;
        this.activeChange = new EventEmitter();
        /**
         * The auto scroll duration in seconds. After that the next image is displayed.
         */
        this.scrollDuration = 5;
        /**
         * Whether auto scroll is enabled.
         */
        this.autoScroll = true;
        /**
         * Whether the carousel should continue looping from the beginning after the last item is displayed.
         */
        this.autoRefresh = true;
        this.labels = {
            startAutoPlay: 'Start auto-play',
            stopAutoPlay: 'Stop auto-play',
        };
        this.playing = true;
        this.nextTimer = null;
    }
    isActive(index) {
        return index === this.active;
    }
    getImage(index) {
        return this.images.toArray()[index];
    }
    ngOnChanges(changes) {
        if (changes.active) {
            // Focus correct indicator if one is already focused
            if (this.document && this.indicatorsEl.nativeElement.contains(document.activeElement)) {
                this.indicators.toArray()[this.active].focus();
            }
        }
        if (changes.active || changes.autoScroll || changes.scrollDuration) {
            // Reset timer when active changes
            this.setTimer();
        }
    }
    onIndicatorClick(index) {
        this.setActive(index, true);
    }
    onKeyboard(evt) {
        if (evt.keyCode === LEFT_ARROW || evt.keyCode === RIGHT_ARROW) {
            this.activateNext(evt.keyCode === LEFT_ARROW);
        }
    }
    setActive(index, stopPlaying = false) {
        if (stopPlaying) {
            this.playing = false;
        }
        if (this.active !== index) {
            this.activeChange.emit(index);
        }
    }
    togglePlay() {
        this.playing = !this.playing;
        this.setTimer();
    }
    playLabel() {
        return this.labels[this.playing ? 'stopAutoPlay' : 'startAutoPlay'];
    }
    activateNext(reverse = false) {
        const active = this.active + (reverse ? -1 : 1);
        if ((active < 0 || active > this.images.length - 1) && !this.autoRefresh) {
            return;
        }
        this.setActive((this.images.length + active) % this.images.length);
    }
    setTimer() {
        clearTimeout(this.nextTimer);
        if (this.autoScroll && this.playing) {
            this.nextTimer = setTimeout(() => {
                this.activateNext();
            }, this.scrollDuration * 1000);
        }
    }
}
NglCarousel.decorators = [
    { type: Component, args: [{
                selector: 'ngl-carousel',
                template: "\n<div class=\"slds-carousel__stage\"><span class=\"slds-carousel__autoplay\" *ngIf=\"autoScroll\">\n    <button class=\"slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-x-small\" [attr.aria-pressed]=\"!playing\" [title]=\"playLabel()\" (click)=\"togglePlay()\">\n      <svg class=\"slds-button__icon\" [nglIconName]=\"playing ? 'utility:pause' : 'utility:right'\"></svg><span class=\"slds-assistive-text\">{{ playLabel() }}</span>\n    </button></span>\n  <div class=\"slds-carousel__panels\" [style.transform]=\"'translateX(' + (-active * 100) + '%)'\">\n    <ng-content></ng-content>\n  </div>\n  <ul class=\"slds-carousel__indicators\" #indicatorsEl role=\"tablist\" (keydown)=\"onKeyboard($event)\">\n    <li class=\"slds-carousel__indicator\" *ngFor=\"let image of images; let i = index\" role=\"presentation\"><a class=\"slds-carousel__indicator-action\" nglCarouselIndicator href=\"javascript:void(0);\" role=\"tab\" [isActive]=\"isActive(i)\" [image]=\"getImage(i)\" [attr.aria-controls]=\"image.uid\" [title]=\"image.header\" (click)=\"onIndicatorClick(i)\"><span class=\"slds-assistive-text\">{{ image.header }}</span></a></li>\n  </ul>\n</div>",
                changeDetection: ChangeDetectionStrategy.OnPush,
                host: {
                    '[class.slds-carousel]': 'true',
                }
            },] }
];
NglCarousel.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [DOCUMENT,] }] }
];
NglCarousel.propDecorators = {
    active: [{ type: Input }],
    activeChange: [{ type: Output }],
    scrollDuration: [{ type: Input }],
    autoScroll: [{ type: Input }],
    autoRefresh: [{ type: Input }],
    images: [{ type: ContentChildren, args: [NglCarouselImage,] }],
    indicators: [{ type: ViewChildren, args: [NglCarouselIndicator,] }],
    indicatorsEl: [{ type: ViewChild, args: ['indicatorsEl', { static: true },] }],
    labels: [{ type: Input }]
};
__decorate([
    InputNumber()
], NglCarousel.prototype, "active", void 0);
__decorate([
    InputNumber()
], NglCarousel.prototype, "scrollDuration", void 0);
__decorate([
    InputBoolean()
], NglCarousel.prototype, "autoScroll", void 0);
__decorate([
    InputBoolean()
], NglCarousel.prototype, "autoRefresh", void 0);

const DIRECTIVES$b = [
    NglCarousel,
    NglCarouselImage,
];
class NglCarouselModule {
}
NglCarouselModule.decorators = [
    { type: NgModule, args: [{
                declarations: [...DIRECTIVES$b, NglCarouselIndicator],
                exports: DIRECTIVES$b,
                imports: [CommonModule, NglIconsModule, NglInternalOutletModule],
            },] }
];

class NglCheckboxInput {
    constructor(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.ɵRequiredSubject = new BehaviorSubject(false);
        if (!this.el.nativeElement.id) {
            this.renderer.setAttribute(this.el.nativeElement, 'id', uniqueId('checkbox'));
        }
    }
    set describedBy(value) {
        this.renderer.setAttribute(this.el.nativeElement, 'aria-describedby', value);
    }
    set required(required) {
        this.ɵRequiredSubject.next(toBoolean(required));
    }
    get id() {
        return this.el.nativeElement.id;
    }
    addClass(klass) {
        this.renderer.addClass(this.el.nativeElement, klass);
    }
}
NglCheckboxInput.decorators = [
    { type: Directive, args: [{
                selector: 'input[ngl][type=checkbox]',
            },] }
];
NglCheckboxInput.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
NglCheckboxInput.propDecorators = {
    required: [{ type: Input }]
};

class NglCheckboxButton {
    constructor(cd) {
        this.cd = cd;
    }
    ngAfterContentInit() {
        if (!this.input) {
            throw Error(`[ng-lightning] Couldn't find an <input type="checkbox"> with [ngl] attribute inside ${this}`);
        }
        this._uid = this.input.id;
        this.cd.detectChanges();
        this.input.addClass('slds-assistive-text');
    }
}
NglCheckboxButton.decorators = [
    { type: Component, args: [{
                selector: 'ngl-checkbox-button',
                template: "\n<ng-content></ng-content>\n<label class=\"slds-checkbox_faux\" [attr.for]=\"_uid\"><span class=\"slds-assistive-text\" [nglInternalOutlet]=\"label\"></span></label>",
                changeDetection: ChangeDetectionStrategy.OnPush,
                host: {
                    '[class.slds-checkbox_add-button]': 'true',
                }
            },] }
];
NglCheckboxButton.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
NglCheckboxButton.propDecorators = {
    input: [{ type: ContentChild, args: [NglCheckboxInput, { static: true },] }],
    label: [{ type: Input }]
};

class NglCheckbox {
    constructor(cd) {
        this.cd = cd;
    }
    get hasError() {
        return toBoolean(this.error);
    }
    get errorId() {
        return `error_${this._uid}`;
    }
    ngOnChanges() {
        this.input.describedBy = this.error ? this.errorId : null;
    }
    ngAfterContentInit() {
        if (!this.input) {
            throw Error(`[ng-lightning] Couldn't find an <input type="checkbox"> with [ngl] attribute inside NglCheckbox`);
        }
        this.ɵRequiredSubscription = this.input.ɵRequiredSubject.subscribe((required) => {
            this.required = required;
            this.cd.detectChanges();
        });
        this._uid = this.input.id;
        this.cd.detectChanges();
    }
    ngOnDestroy() {
        if (this.ɵRequiredSubscription) {
            this.ɵRequiredSubscription.unsubscribe();
            this.ɵRequiredSubscription = null;
        }
    }
}
NglCheckbox.decorators = [
    { type: Component, args: [{
                selector: 'ngl-checkbox,[ngl-checkbox]',
                template: "\n<div class=\"slds-form-element__control\">\n  <div class=\"slds-checkbox\" [class.slds-checkbox_stacked]=\"stacked\"><abbr class=\"slds-required\" *ngIf=\"required\" title=\"required\">*</abbr>\n    <ng-content></ng-content>\n    <label class=\"slds-checkbox__label\" [attr.for]=\"_uid\"><span class=\"slds-checkbox_faux\"></span><span class=\"slds-form-element__label\" [nglInternalOutlet]=\"label\"></span></label>\n  </div>\n</div>\n<div class=\"slds-form-element__help\" *ngIf=\"hasError\" [id]=\"errorId\" [nglInternalOutlet]=\"error\"></div>",
                changeDetection: ChangeDetectionStrategy.OnPush,
                host: {
                    '[class.slds-form-element]': 'true',
                }
            },] }
];
NglCheckbox.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
NglCheckbox.propDecorators = {
    input: [{ type: ContentChild, args: [NglCheckboxInput, { static: true },] }],
    label: [{ type: Input }],
    error: [{ type: Input }],
    stacked: [{ type: Input }],
    hasError: [{ type: HostBinding, args: ['class.slds-has-error',] }]
};
__decorate([
    InputBoolean()
], NglCheckbox.prototype, "stacked", void 0);

class NglCheckboxToggle {
    constructor(cd) {
        this.cd = cd;
        this.enabledText = 'Enabled';
        this.disabledText = 'Disabled';
    }
    get hasError() {
        return toBoolean(this.error);
    }
    ngAfterContentInit() {
        if (!this.input) {
            throw Error(`[ng-lightning] Couldn't find an <input type="checkbox"> with [ngl] attribute inside NglCheckboxToggle`);
        }
        this.ɵRequiredSubscription = this.input.ɵRequiredSubject.subscribe((required) => {
            this.required = required;
            this.cd.detectChanges();
        });
        this.uid = `${this.input.id}_toggle`;
        this.input.describedBy = this.uid;
        this.cd.detectChanges();
    }
    ngOnDestroy() {
        if (this.ɵRequiredSubscription) {
            this.ɵRequiredSubscription.unsubscribe();
            this.ɵRequiredSubscription = null;
        }
    }
}
NglCheckboxToggle.decorators = [
    { type: Component, args: [{
                selector: 'ngl-checkbox-toggle',
                template: "\n<label class=\"slds-checkbox_toggle slds-grid\"><abbr class=\"slds-required\" *ngIf=\"required\" title=\"required\">*</abbr><span class=\"slds-form-element__label slds-m-bottom_none\" [nglInternalOutlet]=\"label\"></span>\n  <ng-content></ng-content><span class=\"slds-checkbox_faux_container\" [id]=\"uid\" aria-live=\"assertive\"><span class=\"slds-checkbox_faux\"></span><span class=\"slds-checkbox_on\">{{enabledText}}</span><span class=\"slds-checkbox_off\">{{disabledText}}</span></span>\n</label>\n<div class=\"slds-form-element__help\" *ngIf=\"error\">{{error}}</div>",
                changeDetection: ChangeDetectionStrategy.OnPush,
                host: {
                    '[class.slds-form-element]': 'true',
                }
            },] }
];
NglCheckboxToggle.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
NglCheckboxToggle.propDecorators = {
    input: [{ type: ContentChild, args: [NglCheckboxInput, { static: true },] }],
    label: [{ type: Input }],
    error: [{ type: Input }],
    enabledText: [{ type: Input }],
    disabledText: [{ type: Input }],
    hasError: [{ type: HostBinding, args: ['class.slds-has-error',] }]
};

class NglCheckboxOption {
    constructor(cd, element, hostService) {
        this.cd = cd;
        this.element = element;
        this.hostService = hostService;
    }
    set type(type) {
        this._type = type;
        this.setHostClass();
        this.cd.detectChanges();
    }
    get type() {
        return this._type;
    }
    setError(id) {
        this.input.describedBy = id;
    }
    setHostClass() {
        this.hostService.updateClass(this.element, {
            [`slds-checkbox`]: this.type === 'list',
            [`slds-button`]: this.type === 'button',
            [`slds-checkbox_button`]: this.type === 'button',
        });
    }
}
NglCheckboxOption.decorators = [
    { type: Component, args: [{
                selector: 'ngl-checkbox-option',
                template: "\n<ng-content></ng-content>\n<label class=\"slds-checkbox__label\" *ngIf=\"type === 'list'\" [attr.for]=\"input.id\"><span class=\"slds-checkbox_faux\"></span><span class=\"slds-form-element__label\" [nglInternalOutlet]=\"label\"></span></label>\n<label class=\"slds-checkbox_button__label\" *ngIf=\"type === 'button'\" [attr.for]=\"input.id\"><span class=\"slds-checkbox_faux\" [nglInternalOutlet]=\"label\"></span></label>",
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [HostService]
            },] }
];
NglCheckboxOption.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: HostService }
];
NglCheckboxOption.propDecorators = {
    label: [{ type: Input }],
    input: [{ type: ContentChild, args: [NglCheckboxInput, { static: true },] }]
};

class NglCheckboxGroup {
    constructor() {
        this.uid = uniqueId('checkbox-group');
        this._type = 'list';
    }
    get hasError() {
        return toBoolean(this.error);
    }
    get errorId() {
        return `error_${this.uid}`;
    }
    set type(type) {
        this._type = type;
        this.updateChildrenType();
    }
    get type() {
        return this._type;
    }
    ngOnChanges(changes) {
        if (changes.error && this.options) {
            this.options.forEach((option) => {
                option.setError(this.error ? this.errorId : null);
            });
        }
    }
    ngAfterContentInit() {
        this.updateChildrenType();
    }
    updateChildrenType() {
        if (!this.options) {
            return;
        }
        this.options.forEach((option) => {
            option.type = this.type;
        });
    }
}
NglCheckboxGroup.decorators = [
    { type: Component, args: [{
                selector: 'ngl-checkbox-group,[ngl-checkbox-group]',
                template: "\n<legend class=\"slds-form-element__legend slds-form-element__label\"><abbr class=\"slds-required\" *ngIf=\"required\" title=\"required\">*</abbr><span [nglInternalOutlet]=\"label\"></span></legend>\n<div class=\"slds-form-element__control\">\n  <div class=\"slds-checkbox_button-group\" *ngIf=\"type === 'button'; else contentTpl\">\n    <ng-container *ngTemplateOutlet=\"contentTpl\"></ng-container>\n  </div>\n</div>\n<div class=\"slds-form-element__help\" *ngIf=\"hasError\" [id]=\"errorId\" [nglInternalOutlet]=\"error\"></div>\n<ng-template #contentTpl>\n  <ng-content></ng-content>\n</ng-template>",
                changeDetection: ChangeDetectionStrategy.OnPush,
                host: {
                    '[class.slds-form-element]': 'true',
                }
            },] }
];
NglCheckboxGroup.propDecorators = {
    options: [{ type: ContentChildren, args: [NglCheckboxOption,] }],
    label: [{ type: Input }],
    error: [{ type: Input }],
    hasError: [{ type: HostBinding, args: ['class.slds-has-error',] }],
    required: [{ type: Input }],
    type: [{ type: Input }]
};
__decorate([
    InputBoolean()
], NglCheckboxGroup.prototype, "required", void 0);

const DIRECTIVES$a = [
    NglCheckboxButton,
    NglCheckbox,
    NglCheckboxToggle,
    NglCheckboxInput,
    NglCheckboxGroup,
    NglCheckboxOption,
];
class NglCheckboxesModule {
}
NglCheckboxesModule.decorators = [
    { type: NgModule, args: [{
                declarations: DIRECTIVES$a,
                exports: DIRECTIVES$a,
                imports: [CommonModule, NglInternalOutletModule],
            },] }
];

/*
 * <ng-template ngl-tab label="...">
 *    Content goes here...
 * </ng-template>
 */
class NglTab {
    constructor(templateRef) {
        this.templateRef = templateRef;
        this.activate = new EventEmitter();
        this.deactivate = new EventEmitter();
        this.uid = uniqueId('tab');
        this._active = false;
    }
    set active(active) {
        if (active === this._active) {
            return;
        }
        this._active = active;
        if (active) {
            this.activate.emit(this);
        }
        else {
            this.deactivate.emit(this);
        }
    }
    get active() {
        return this._active;
    }
}
NglTab.decorators = [
    { type: Directive, args: [{
                // tslint:disable-next-line:directive-selector
                selector: '[ngl-tab]',
                exportAs: 'nglTab',
            },] }
];
NglTab.ctorParameters = () => [
    { type: TemplateRef, decorators: [{ type: Optional }] }
];
NglTab.propDecorators = {
    id: [{ type: Input }],
    label: [{ type: Input }],
    activate: [{ type: Output }],
    deactivate: [{ type: Output }]
};

class NglTabs {
    constructor(element, renderer) {
        this.element = element;
        this.renderer = renderer;
        this.selectedChange = new EventEmitter();
        /**
         * Whether every tab's content is instantiated when visible, and destroyed when hidden.
         */
        this.lazy = true;
        this.renderer.addClass(this.element.nativeElement, `slds-tabs_${this.variant}`);
    }
    set variant(variant) {
        const el = this.element.nativeElement;
        this.renderer.removeClass(el, `slds-tabs_${this.variant}`);
        this._variant = variant;
        this.renderer.addClass(el, `slds-tabs_${this.variant}`);
    }
    get variant() {
        return this._variant || 'default';
    }
    set setSelected(selected) {
        if (selected === this.selected) {
            return;
        }
        this.selected = selected;
        if (!this.tabs) {
            return;
        } // Wait for content to initialize
        this.activate();
    }
    ngAfterContentInit() {
        // Initial selection after all tabs are created
        this.activate();
        if (!this.activeTab) {
            setTimeout(() => this.select(this.tabs.first));
        }
    }
    select(tab) {
        this.selectedChange.emit(tab);
    }
    move(evt, moves) {
        evt.preventDefault();
        const tabs = this.tabs.toArray();
        const selectedIndex = tabs.indexOf(this.activeTab);
        this.select(tabs[(tabs.length + selectedIndex + moves) % tabs.length]);
    }
    tabClass(tab) {
        return `slds-tabs_${this.variant}__content slds-${tab.active ? 'show' : 'hide'}`;
    }
    trackByTab(index, tab) {
        return tab.uid;
    }
    activate() {
        if (this.activeTab) {
            this.activeTab.active = false;
        }
        this.activeTab = this.findTab();
        if (this.activeTab) {
            this.activeTab.active = true;
        }
    }
    findTab(value = this.selected) {
        if (value instanceof NglTab) {
            return value;
        }
        if (isInt(value)) {
            return this.tabs.toArray()[+value];
        }
        return this.tabs.toArray().find((t) => {
            return t.id && t.id === value;
        });
    }
}
NglTabs.decorators = [
    { type: Component, args: [{
                selector: 'ngl-tabset',
                template: "\n<ul [ngClass]=\"'slds-tabs_' + variant + '__nav'\" role=\"tablist\" (keydown.ArrowLeft)=\"move($event, -1)\" (keydown.ArrowRight)=\"move($event, 1)\">\n  <li *ngFor=\"let tab of tabs; trackBy: trackByTab\" [ngClass]=\"'slds-tabs_' + variant + '__item'\" [class.slds-is-active]=\"tab.active\" [id]=\"tab.uid + '__item'\" [attr.aria-controls]=\"tab.uid\" (click)=\"select(tab)\" role=\"presentation\"><a [nglInternalOutlet]=\"tab.label\" [ngClass]=\"'slds-tabs_' + variant + '__link'\" role=\"tab\" [attr.aria-selected]=\"tab.active\" [attr.tabindex]=\"tab.active ? 0 : -1\"></a></li>\n</ul>\n<div *ngFor=\"let tab of tabs; trackBy: trackByTab\" [id]=\"tab.uid\" [attr.aria-labelledby]=\"tab.uid + '__item'\" [ngClass]=\"tabClass(tab)\" role=\"tabpanel\">\n  <ng-container *ngIf=\"!lazy || tab.active\">\n    <ng-template [ngTemplateOutlet]=\"tab?.templateRef\"></ng-template>\n  </ng-container>\n</div>"
            },] }
];
NglTabs.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
NglTabs.propDecorators = {
    variant: [{ type: Input }],
    tabs: [{ type: ContentChildren, args: [NglTab,] }],
    setSelected: [{ type: Input, args: ['selected',] }],
    selectedChange: [{ type: Output }],
    lazy: [{ type: Input }]
};
__decorate([
    InputBoolean()
], NglTabs.prototype, "lazy", void 0);

/*
 * <ngl-tab [label="..."]>
 *    <ng-template ngl-tab-label>...</ng-template>
 *    <ng-template ngl-tab-content>
 *       Content goes here...
 *    </ng-template>
 * </ngl-tab>
 */
// tslint:disable-next-line:directive-selector
class NglTabLabel {
    constructor(templateRef) {
        this.templateRef = templateRef;
    }
}
NglTabLabel.decorators = [
    { type: Directive, args: [{ selector: '[ngl-tab-label]' },] }
];
NglTabLabel.ctorParameters = () => [
    { type: TemplateRef }
];
// tslint:disable-next-line:directive-selector
class NglTabContent {
    constructor(templateRef) {
        this.templateRef = templateRef;
    }
}
NglTabContent.decorators = [
    { type: Directive, args: [{ selector: '[ngl-tab-content]' },] }
];
NglTabContent.ctorParameters = () => [
    { type: TemplateRef }
];
class NglTabVerbose extends NglTab {
    ngAfterContentInit() {
        if (this.labelTemplate) {
            this.label = this.labelTemplate.templateRef;
        }
        this.templateRef = this.contentTemplate.templateRef;
    }
}
NglTabVerbose.decorators = [
    { type: Directive, args: [{
                // tslint:disable-next-line:directive-selector
                selector: 'ngl-tab',
                providers: [{ provide: NglTab, useExisting: NglTabVerbose }],
            },] }
];
NglTabVerbose.propDecorators = {
    contentTemplate: [{ type: ContentChild, args: [NglTabContent,] }],
    labelTemplate: [{ type: ContentChild, args: [NglTabLabel,] }]
};

const NGL_TAB_DIRECTIVES = [
    NglTabs,
    NglTab,
    NglTabVerbose, NglTabContent, NglTabLabel,
];
class NglTabsModule {
}
NglTabsModule.decorators = [
    { type: NgModule, args: [{
                declarations: [NGL_TAB_DIRECTIVES],
                exports: [NGL_TAB_DIRECTIVES],
                imports: [CommonModule, NglInternalOutletModule],
            },] }
];

const POSITION_MAP = {
    'top': {
        position: new ConnectionPositionPair({ originX: 'center', originY: 'top' }, { overlayX: 'center', overlayY: 'bottom' }),
        nubbin: 'bottom'
    },
    'top-left': {
        position: new ConnectionPositionPair({ originX: 'center', originY: 'top' }, { overlayX: 'start', overlayY: 'bottom' }),
        nubbin: 'bottom-left'
    },
    'top-left-corner': {
        position: new ConnectionPositionPair({ originX: 'center', originY: 'top' }, { overlayX: 'start', overlayY: 'bottom' }),
        nubbin: 'bottom-left-corner'
    },
    'top-right': {
        position: new ConnectionPositionPair({ originX: 'center', originY: 'top' }, { overlayX: 'end', overlayY: 'bottom' }),
        nubbin: 'bottom-right'
    },
    'top-right-corner': {
        position: new ConnectionPositionPair({ originX: 'center', originY: 'top' }, { overlayX: 'end', overlayY: 'bottom' }),
        nubbin: 'bottom-right-corner'
    },
    'right': {
        position: new ConnectionPositionPair({ originX: 'end', originY: 'center' }, { overlayX: 'start', overlayY: 'center' }),
        nubbin: 'left'
    },
    'right-top': {
        position: new ConnectionPositionPair({ originX: 'end', originY: 'center' }, { overlayX: 'start', overlayY: 'top' }),
        nubbin: 'left-top'
    },
    'right-top-corner': {
        position: new ConnectionPositionPair({ originX: 'end', originY: 'center' }, { overlayX: 'start', overlayY: 'top' }),
        nubbin: 'left-top-corner'
    },
    'right-bottom': {
        position: new ConnectionPositionPair({ originX: 'end', originY: 'center' }, { overlayX: 'start', overlayY: 'bottom' }),
        nubbin: 'left-bottom'
    },
    'right-bottom-corner': {
        position: new ConnectionPositionPair({ originX: 'end', originY: 'center' }, { overlayX: 'start', overlayY: 'bottom' }),
        nubbin: 'left-bottom-corner'
    },
    'bottom': {
        position: new ConnectionPositionPair({ originX: 'center', originY: 'bottom' }, { overlayX: 'center', overlayY: 'top' }),
        nubbin: 'top'
    },
    'bottom-left': {
        position: new ConnectionPositionPair({ originX: 'center', originY: 'bottom' }, { overlayX: 'start', overlayY: 'top' }),
        nubbin: 'top-left'
    },
    'bottom-left-corner': {
        position: new ConnectionPositionPair({ originX: 'center', originY: 'bottom' }, { overlayX: 'start', overlayY: 'top' }),
        nubbin: 'top-left-corner'
    },
    'bottom-right': {
        position: new ConnectionPositionPair({ originX: 'center', originY: 'bottom' }, { overlayX: 'end', overlayY: 'top' }),
        nubbin: 'top-right'
    },
    'bottom-right-corner': {
        position: new ConnectionPositionPair({ originX: 'center', originY: 'bottom' }, { overlayX: 'end', overlayY: 'top' }),
        nubbin: 'top-right-corner'
    },
    'left': {
        position: new ConnectionPositionPair({ originX: 'start', originY: 'center' }, { overlayX: 'end', overlayY: 'center' }),
        nubbin: 'right'
    },
    'left-top': {
        position: new ConnectionPositionPair({ originX: 'start', originY: 'center' }, { overlayX: 'end', overlayY: 'top' }),
        nubbin: 'right-top'
    },
    'left-top-corner': {
        position: new ConnectionPositionPair({ originX: 'start', originY: 'center' }, { overlayX: 'end', overlayY: 'top' }),
        nubbin: 'right-top-corner'
    },
    'left-bottom': {
        position: new ConnectionPositionPair({ originX: 'start', originY: 'center' }, { overlayX: 'end', overlayY: 'bottom' }),
        nubbin: 'right-bottom'
    },
    'left-bottom-corner': {
        position: new ConnectionPositionPair({ originX: 'start', originY: 'center' }, { overlayX: 'end', overlayY: 'bottom' }),
        nubbin: 'right-bottom-corner'
    }
};
const DROPDOWN_POSITION_MAP = {
    'top-left': {
        position: new ConnectionPositionPair({ originX: 'start', originY: 'top' }, { overlayX: 'start', overlayY: 'bottom' }),
    },
    'bottom-left': {
        position: new ConnectionPositionPair({ originX: 'start', originY: 'bottom' }, { overlayX: 'start', overlayY: 'top' }),
    },
    'bottom-right': {
        position: new ConnectionPositionPair({ originX: 'end', originY: 'bottom' }, { overlayX: 'end', overlayY: 'top' }),
    },
    'top-right': {
        position: new ConnectionPositionPair({ originX: 'end', originY: 'top' }, { overlayX: 'end', overlayY: 'bottom' }),
    },
};
const ɵ0 = (p) => DROPDOWN_POSITION_MAP[p].position, ɵ1 = (p) => DROPDOWN_POSITION_MAP[p].position;
const DEFAULT_DROPDOWN_POSITIONS = {
    left: [`bottom-left`, `top-left`].map(ɵ0),
    right: [`bottom-right`, `top-right`].map(ɵ1),
};
const ɵ2 = (placement) => POSITION_MAP[placement].position;
const DEFAULT_TOOLTIP_POSITIONS = ['top', 'right', 'bottom', 'left'].map(ɵ2);
const DEFAULT_POPOVER_POSITIONS = DEFAULT_TOOLTIP_POSITIONS;
function getPlacementName(position, initialPlacement) {
    const keyList = ['originX', 'originY', 'overlayX', 'overlayY'];
    for (const placement in POSITION_MAP) {
        if (keyList.every(key => position.connectionPair[key] === POSITION_MAP[placement]['position'][key])) {
            if (initialPlacement && initialPlacement === `${placement}-corner`) {
                return initialPlacement;
            }
            return placement;
        }
    }
    return '';
}
function getPlacementStyles(nubbin) {
    const [direction, align, corner] = nubbin.split('-');
    return {
        [direction]: '1rem',
        [align]: corner ? '-0.75rem' : (align ? '-1.5rem' : false), // space of nubbin from the edge
    };
}

function isTemplateRef(value) {
    return value instanceof TemplateRef;
}

function OnChange(callback = 'nglOnPropertyChange') {
    const cachedValueKey = Symbol();
    const isFirstChangeKey = Symbol();
    return (target, key) => {
        Object.defineProperty(target, key, {
            set: function (value) {
                // change status of "isFirstChange"
                if (this[isFirstChangeKey] === undefined) {
                    this[isFirstChangeKey] = true;
                }
                else {
                    this[isFirstChangeKey] = false;
                }
                // No operation if new value is same as old value
                if (!this[isFirstChangeKey] && this[cachedValueKey] === value) {
                    return;
                }
                const oldValue = this[cachedValueKey];
                this[cachedValueKey] = value;
                const simpleChange = {
                    firstChange: this[isFirstChangeKey],
                    previousValue: oldValue,
                    currentValue: this[cachedValueKey],
                    isFirstChange: () => this[isFirstChangeKey],
                };
                this[callback](key, this[cachedValueKey], simpleChange);
            },
            get: function () {
                return this[cachedValueKey];
            },
        });
    };
}

class NglPopover {
    constructor(hostService, element, renderer, focusTrapFactory, cd) {
        this.hostService = hostService;
        this.element = element;
        this.renderer = renderer;
        this.focusTrapFactory = focusTrapFactory;
        this.cd = cd;
        this.close = new EventEmitter();
        this.isTemplateRef = isTemplateRef;
        this.uid = uniqueId('popover');
    }
    get labelledby() {
        return this.header ? `${this.uid}-heading` : null;
    }
    get describedby() {
        return this.template ? this.uid : null;
    }
    ngOnInit() {
        this.focusTrap = this.focusTrapFactory.create(this.element.nativeElement);
        this.focusTrap.focusInitialElementWhenReady();
    }
    ngOnDestroy() {
        if (this.focusTrap) {
            this.focusTrap.destroy();
            this.focusTrap = null;
        }
    }
    nglOnPropertyChange(prop) {
        if (prop === 'size' || prop === 'popoverClass') {
            this.setHostClass();
        }
        else if (prop === 'placement') {
            this.nubbin = POSITION_MAP[this.placement].nubbin;
            this.setHostClass();
        }
        else if (prop === 'variant') {
            this.inverseCloseButton = ['walkthrough', 'feature', 'error'].indexOf(this.variant) > -1;
            this.setHostClass();
        }
    }
    markForCheck() {
        this.cd.markForCheck();
    }
    onClose() {
        this.close.emit();
    }
    setHostClass() {
        this.hostService.updateClass(this.element, ngClassCombine(this.popoverClass, {
            [`slds-nubbin_${this.nubbin}`]: true,
            [`slds-popover_${this.size}`]: !!this.size,
            [`slds-popover_walkthrough`]: this.variant === 'feature',
            [`slds-popover_${this.variant}`]: !!this.variant,
        }));
        this.hostService.updateStyle(this.element, getPlacementStyles(this.nubbin));
    }
}
NglPopover.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'section[ngl-popover]',
                template: "\n<button class=\"slds-button slds-button_icon slds-button_icon-small slds-float_right slds-popover__close\" *ngIf=\"canClose &amp;&amp; closeVisible\" [title]=\"closeTitle\" [class.slds-button_icon-inverse]=\"inverseCloseButton\" (click)=\"onClose()\">\n  <svg class=\"slds-button__icon\" nglIconName=\"close\"></svg><span class=\"slds-assistive-text\" *ngIf=\"closeTitle\">{{closeTitle}}</span>\n</button>\n<header class=\"slds-popover__header\" *ngIf=\"header\">\n  <div *ngIf=\"isTemplateRef(header); else defaultTpl\" [id]=\"labelledby\">\n    <ng-container [ngTemplateOutlet]=\"header\"></ng-container>\n  </div>\n  <ng-template #defaultTpl>\n    <h2 class=\"slds-text-heading_small\" [id]=\"labelledby\">{{header}}</h2>\n  </ng-template>\n</header>\n<div class=\"slds-popover__body\" [id]=\"uid\" [nglInternalOutlet]=\"template\"></div>\n<footer class=\"slds-popover__footer\" *ngIf=\"footer\" [nglInternalOutlet]=\"footer\"></footer>",
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [HostService],
                host: {
                    'role': 'dialog',
                    '[class.slds-popover]': 'true',
                }
            },] }
];
NglPopover.ctorParameters = () => [
    { type: HostService },
    { type: ElementRef },
    { type: Renderer2 },
    { type: FocusTrapFactory },
    { type: ChangeDetectorRef }
];
NglPopover.propDecorators = {
    labelledby: [{ type: HostBinding, args: ['attr.aria-labelledby',] }],
    describedby: [{ type: HostBinding, args: ['attr.aria-describedby',] }]
};
__decorate([
    OnChange()
], NglPopover.prototype, "popoverClass", void 0);
__decorate([
    OnChange()
], NglPopover.prototype, "size", void 0);
__decorate([
    OnChange()
], NglPopover.prototype, "variant", void 0);
__decorate([
    OnChange()
], NglPopover.prototype, "placement", void 0);

function hasObservers(output) {
    function propDecorator(target, propName) {
        const privatePropName = `$$__${propName}`;
        if (Object.prototype.hasOwnProperty.call(target, privatePropName)) {
            console.warn(`[ng-lightning]: The prop "${privatePropName}" already exists, it will be overridden by ${propName} decorator.`);
        }
        Object.defineProperty(target, privatePropName, {
            configurable: true,
            writable: true
        });
        Object.defineProperty(target, propName, {
            get() {
                if (!(this[output] instanceof EventEmitter)) {
                    throw Error(`[ng-lightning] ${target.constructor.name}: "${output}" is not an EventEmitter`);
                }
                return this[output].observers.length > 0;
            },
            set() {
                console.warn(`[ng-lightning] ${target.constructor.name}: "${propName}" is readonly and cannot be assigned a value`);
            }
        });
    }
    return propDecorator;
}

class NglPopoverTrigger {
    constructor(element, renderer, viewContainerRef, overlay) {
        this.element = element;
        this.renderer = renderer;
        this.viewContainerRef = viewContainerRef;
        this.overlay = overlay;
        /**
         * Close button title (and assistive text).
         */
        this.closeTitle = 'Close dialog';
        /**
           * Whether or not to override the close button's visibility, if `nglPopoverOpenChange` is set.
           */
        this.closeVisible = true;
        /** Emit an event when actual popover is shown or hidden */
        this.nglPopoverOpenChange = new EventEmitter();
        /** Names of properties that should be proxy to child component. */
        this.needProxyProperties = new Set([
            'template',
            'header',
            'footer',
            'placement',
            'variant',
            'size',
            'closeTitle',
            'canClose',
            'popoverClass',
            'closeVisible',
        ]);
        this._placement = 'top';
        this.backdrop = new Subject();
        this.globalClickEventUnsubscriber = null;
        this.clickEventUnsubscriber = null;
    }
    /**
     * Position relative to host element.
     */
    set placement(_placement) {
        _placement = _placement || 'top';
        if (_placement === this._placement) {
            return;
        }
        this._placement = _placement;
        if (this.overlayRef) {
            this.updatePosition();
        }
    }
    get placement() {
        return this._placement;
    }
    /**
     * Whether the floating popover is visible.
     */
    set nglOpen(_open) {
        _open = toBoolean(_open) && (['backdrop', 'x', 'escape'].indexOf(_open) === -1);
        _open ? this.create() : this.detach();
        this._open = _open;
    }
    get nglOpen() {
        return this._open;
    }
    ngOnChanges(changes) {
        if (changes.nglOpen && !changes.nglOpen.firstChange) {
            const open = changes.nglOpen.currentValue;
            if (!toBoolean(open) || open === 'x' || open === 'escape') {
                this.element.nativeElement.focus();
            }
        }
        if (this.nglOpen) {
            this.updateProxies(changes);
            Promise.resolve().then(() => {
                if (this.overlayRef) {
                    this.overlayRef.updatePosition();
                }
            });
            this.popover.markForCheck();
        }
    }
    onclick(evt) {
        evt.preventDefault();
        this.toggle();
    }
    ngOnDestroy() {
        this.detach();
        this.close();
    }
    open() {
        if (!this.nglOpen) {
            this.nglPopoverOpenChange.emit(true);
        }
    }
    close(reason = false) {
        if (this.nglOpen) {
            this.nglPopoverOpenChange.emit(reason);
        }
    }
    toggle() {
        this.nglOpen ? this.close() : this.open();
    }
    create() {
        if (this.nglOpen) {
            return;
        }
        this.detach();
        const overlayRef = this.createOverlay();
        this.portal = this.portal || new ComponentPortal(NglPopover, this.viewContainerRef);
        this.popover = overlayRef.attach(this.portal).instance;
        this.needProxyProperties.forEach(property => this.updatePopover(property, this[property]));
        this.popover.markForCheck();
        this.clearGlobalClickTimeout();
        this.globalClickTimeout = setTimeout(() => {
            this.subscribeToClickEvents();
        });
        this.closeSubscription = this.popoverClosingActions()
            .subscribe(reason => this.close(reason));
    }
    /** Detaches the currently attached popover. */
    detach() {
        if (this.overlayRef) {
            this.overlayRef.detach();
            this.overlayRef.dispose();
            this.overlayRef = null;
        }
        this.unsubscribeFromClickEvents();
        if (this.closeSubscription) {
            this.closeSubscription.unsubscribe();
            this.closeSubscription = null;
        }
        if (this.positionChangesSubscription) {
            this.positionChangesSubscription.unsubscribe();
            this.positionChangesSubscription = null;
        }
        this.popover = null;
    }
    /** Create the overlay config and position strategy */
    createOverlay() {
        if (this.overlayRef) {
            return this.overlayRef;
        }
        // Create connected position strategy that listens for scroll events to reposition.
        const strategy = this.overlay.position()
            .flexibleConnectedTo(this.element)
            .withFlexibleDimensions(false)
            .withViewportMargin(8)
            .withPush(false);
        this.positionChangesSubscription = strategy.positionChanges
            .pipe(map(change => getPlacementName(change, this.placement)), distinctUntilChanged())
            .subscribe((placement) => {
            this.updatePosition();
            this.updatePopover('placement', placement);
            this.popover.markForCheck();
        });
        this.overlayRef = this.overlay.create({
            positionStrategy: strategy,
            scrollStrategy: this.overlay.scrollStrategies.reposition(),
        });
        this.updatePosition();
        return this.overlayRef;
    }
    /** Updates the position of the current popover. */
    updatePosition() {
        const position = this.overlayRef.getConfig().positionStrategy;
        position.withPositions([
            POSITION_MAP[this.placement].position,
            ...DEFAULT_POPOVER_POSITIONS,
        ]);
    }
    updatePopover(key, value) {
        this.popover[key] = value;
    }
    /** Set inputs of child components when this component's inputs change. */
    updateProxies(changes) {
        Object.keys(changes)
            .filter(key => this.needProxyProperties.has(key))
            .forEach(key => this.updatePopover(key, this[key]));
    }
    /** Returns a stream that emits whenever an action that should close the popover occurs. */
    popoverClosingActions() {
        const backdrop = this.backdrop.pipe(mapTo('backdrop'));
        const close = this.popover.close.pipe(mapTo('x'));
        const escape = this.overlayRef.keydownEvents().pipe(filter(event => event.keyCode === ESCAPE), mapTo('escape'));
        return merge(backdrop, close, escape);
    }
    handleGlobalClickEvent($event) {
        if ($event.$nglStop) {
            return;
        }
        this.backdrop.next();
    }
    subscribeToClickEvents() {
        this.unsubscribeFromClickEvents();
        // Prevent document listener to close it, since click happened inside
        this.clickEventUnsubscriber = this.renderer.listen(this.popover.element.nativeElement, 'click', ($event) => $event.$nglStop = true);
        this.globalClickEventUnsubscriber = this.renderer.listen('document', 'click', this.handleGlobalClickEvent.bind(this));
    }
    unsubscribeFromClickEvents() {
        if (this.clickEventUnsubscriber) {
            this.clickEventUnsubscriber();
            this.clickEventUnsubscriber = null;
        }
        if (this.globalClickEventUnsubscriber) {
            this.globalClickEventUnsubscriber();
            this.globalClickEventUnsubscriber = null;
        }
    }
    clearGlobalClickTimeout() {
        clearTimeout(this.globalClickTimeout);
    }
}
NglPopoverTrigger.decorators = [
    { type: Directive, args: [{
                selector: '[nglPopover]',
                exportAs: 'nglPopover',
            },] }
];
NglPopoverTrigger.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: ViewContainerRef },
    { type: Overlay }
];
NglPopoverTrigger.propDecorators = {
    template: [{ type: Input, args: ['nglPopover',] }],
    header: [{ type: Input, args: ['nglPopoverHeader',] }],
    footer: [{ type: Input, args: ['nglPopoverFooter',] }],
    variant: [{ type: Input, args: ['nglPopoverVariant',] }],
    size: [{ type: Input, args: ['nglPopoverSize',] }],
    placement: [{ type: Input, args: ['nglPopoverPlacement',] }],
    nglOpen: [{ type: Input, args: ['nglPopoverOpen',] }],
    closeTitle: [{ type: Input, args: ['nglPopoverCloseTitle',] }],
    popoverClass: [{ type: Input, args: ['nglPopoverClass',] }],
    closeVisible: [{ type: Input, args: ['nglPopoverCloseVisible',] }],
    nglPopoverOpenChange: [{ type: Output }],
    onclick: [{ type: HostListener, args: ['click', ['$event'],] }]
};
__decorate([
    InputBoolean()
], NglPopoverTrigger.prototype, "closeVisible", void 0);
__decorate([
    hasObservers('nglPopoverOpenChange')
], NglPopoverTrigger.prototype, "canClose", void 0);

const NGL_POPOVER_DIRECTIVES = [
    NglPopover,
    NglPopoverTrigger,
];
class NglPopoversModule {
}
NglPopoversModule.decorators = [
    { type: NgModule, args: [{
                declarations: [NGL_POPOVER_DIRECTIVES],
                exports: [NGL_POPOVER_DIRECTIVES],
                imports: [CommonModule, OverlayModule, A11yModule, NglInternalOutletModule, NglIconsModule],
                entryComponents: [NglPopover],
            },] }
];

class NglTooltip {
    constructor(element, renderer, hostService, cd) {
        this.element = element;
        this.renderer = renderer;
        this.hostService = hostService;
        this.cd = cd;
        this.renderer.addClass(this.element.nativeElement, 'slds-popover');
        this.renderer.addClass(this.element.nativeElement, 'slds-popover_tooltip');
        this.renderer.setAttribute(this.element.nativeElement, 'role', 'tooltip');
    }
    nglOnPropertyChange(prop) {
        if (prop === 'uid') {
            this.renderer.setAttribute(this.element.nativeElement, 'id', this.uid);
        }
        else if (prop === 'placement') {
            this.nubbin = POSITION_MAP[this.placement].nubbin;
            this.setHostClass();
        }
        else if (prop === 'template') {
            this.cd.markForCheck();
        }
        else if (prop === 'tooltipClass') {
            this.setHostClass();
        }
    }
    setHostClass() {
        this.hostService.updateClass(this.element, ngClassCombine(this.tooltipClass, {
            [`slds-nubbin_${this.nubbin}`]: true,
        }));
        this.hostService.updateStyle(this.element, getPlacementStyles(this.nubbin));
    }
}
NglTooltip.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'div[ngl-tooltip]',
                template: "\n<div class=\"slds-popover__body\" [nglInternalOutlet]=\"template\"></div>",
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [HostService]
            },] }
];
NglTooltip.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: HostService },
    { type: ChangeDetectorRef }
];
__decorate([
    OnChange()
], NglTooltip.prototype, "template", void 0);
__decorate([
    OnChange()
], NglTooltip.prototype, "placement", void 0);
__decorate([
    OnChange()
], NglTooltip.prototype, "uid", void 0);
__decorate([
    OnChange()
], NglTooltip.prototype, "tooltipClass", void 0);

/** Injection token that can be used to specify default options. */
const NGL_TOOLTIP_CONFIG = new InjectionToken('ngl-tooltip-config');
class NglTooltipConfig {
    constructor() {
        /**
         * Default position relative to host element.
         */
        this.placement = 'top';
        /**
         * Whether you can interact with the content of the tooltip.
         */
        this.interactive = false;
        /**
         * Whether tooltip will open/close without two-way binding input.
         */
        this.openAuto = false;
        /**
         * Delay in milliseconds until it opens/closes.
         */
        this.delay = 0;
    }
}

class NglTooltipTrigger {
    constructor(defaultConfig, element, renderer, viewContainerRef, overlay) {
        this.element = element;
        this.renderer = renderer;
        this.viewContainerRef = viewContainerRef;
        this.overlay = overlay;
        /**
         * Emit an event when actual tooltip is shown or hidden.
         */
        this.nglTooltipOpenChange = new EventEmitter();
        this.uid = uniqueId('tooltip');
        /** Names of properties that should be proxy to child component. */
        this.needProxyProperties = new Set([
            'template',
            'placement',
            'uid',
            'tooltipClass',
        ]);
        this.openDelay = 0;
        this.closeDelay = 0;
        this.toggleTimeout = null;
        this.overlayListeners = new Set();
        this.config = Object.assign(Object.assign({}, new NglTooltipConfig()), defaultConfig);
        this.openAuto = this.config.openAuto;
        this.interactive = this.config.interactive;
        this.delay = this.config.delay;
        this.renderer.setAttribute(this.element.nativeElement, 'aria-describedby', this.uid);
    }
    /**
     * Position relative to host element.
     */
    set placement(placement) {
        if (placement === this.placement) {
            return;
        }
        this._placement = placement;
        if (this.overlayRef) {
            this.updatePosition();
        }
    }
    get placement() {
        return this._placement || this.config.placement;
    }
    /**
     * Delay in milliseconds until it opens/closes.
     */
    set delay(_delay) {
        const delay = Array.isArray(_delay) ? _delay : [_delay, _delay];
        [this.openDelay, this.closeDelay] = delay.map(Number);
    }
    /**
     * Whether the floating tooltip is visible.
     */
    set nglOpen(open) {
        if (open === this.nglOpen) {
            return;
        }
        open ? this.create() : this.detach();
        this._open = open;
    }
    get nglOpen() {
        return this._open;
    }
    ngOnChanges(changes) {
        if (this.nglOpen) {
            this.updateProxies(changes);
            Promise.resolve().then(() => {
                if (this.overlayRef) {
                    this.overlayRef.updatePosition();
                }
            });
        }
    }
    onMouseOver() {
        this.open();
    }
    onMouseOut() {
        this.close();
        if (this.overlayRef && !this.overlayElement && this.interactive) {
            this.overlayElement = this.overlayRef.overlayElement;
            this.overlayListeners.add(this.renderer.listen(this.overlayElement, 'mouseenter', () => this.open()));
            this.overlayListeners.add(this.renderer.listen(this.overlayElement, 'mouseleave', () => this.close()));
        }
    }
    ngOnDestroy() {
        this.detach();
        this.close(0);
    }
    // Expose open method
    open(delay = this.openDelay) {
        this.handle(true, delay);
    }
    // Expose close method
    close(delay = this.closeDelay) {
        this.handle(false, delay);
    }
    // Expose toggle method
    toggle() {
        this.nglOpen ? this.close(0) : this.open(0);
    }
    handle(open, delay) {
        if (this.toggleTimeout !== null) {
            clearTimeout(this.toggleTimeout);
            this.toggleTimeout = null;
        }
        if (open !== this.nglOpen) {
            if (delay > 0) {
                this.toggleTimeout = setTimeout(() => {
                    this.toggleTimeout = null;
                    this.emitOpen(open);
                }, delay);
            }
            else {
                this.emitOpen(open);
            }
        }
    }
    emitOpen(open) {
        if (this.openAuto) {
            this.nglOpen = open;
        }
        this.nglTooltipOpenChange.emit(open);
    }
    create() {
        if (this.nglOpen) {
            return;
        }
        this.detach();
        const overlayRef = this.createOverlay();
        this.portal = this.portal || new ComponentPortal(NglTooltip, this.viewContainerRef);
        this.tooltip = overlayRef.attach(this.portal).instance;
        this.needProxyProperties.forEach(property => this.updateTooltip(property, this[property]));
    }
    /** Detaches the currently-attached tooltip. */
    detach() {
        if (this.overlayRef) {
            this.overlayRef.detach();
            this.overlayRef.dispose();
            this.overlayRef = null;
        }
        // Clean up the event listeners
        this.overlayListeners.forEach((unlisten) => unlisten());
        this.overlayListeners.clear();
        // Clear the overlay reference used for interactive mode
        if (this.interactive) {
            this.overlayElement = null;
        }
        if (this.positionChangesSubscription) {
            this.positionChangesSubscription.unsubscribe();
            this.positionChangesSubscription = null;
        }
        this.tooltip = null;
    }
    /** Create the overlay config and position strategy */
    createOverlay() {
        if (this.overlayRef) {
            return this.overlayRef;
        }
        // Create connected position strategy that listens for scroll events to reposition.
        const strategy = this.overlay.position()
            .flexibleConnectedTo(this.element)
            .withFlexibleDimensions(false)
            .withViewportMargin(8)
            .withPush(false);
        this.positionChangesSubscription = strategy.positionChanges
            .pipe(map(change => getPlacementName(change, this.placement)), distinctUntilChanged())
            .subscribe((placement) => {
            this.updatePosition();
            this.updateTooltip('placement', placement);
        });
        this.overlayRef = this.overlay.create({
            positionStrategy: strategy,
            scrollStrategy: this.overlay.scrollStrategies.reposition(),
        });
        this.updatePosition();
        return this.overlayRef;
    }
    /** Updates the position of the current tooltip. */
    updatePosition() {
        const position = this.overlayRef.getConfig().positionStrategy;
        position.withPositions([
            POSITION_MAP[this.placement].position,
            ...DEFAULT_TOOLTIP_POSITIONS,
        ]);
    }
    updateTooltip(key, value) {
        this.tooltip[key] = value;
    }
    /**
     * Set inputs of child components when this component's inputs change.
     */
    updateProxies(changes) {
        Object.keys(changes)
            .filter(key => this.needProxyProperties.has(key))
            .forEach(key => this.updateTooltip(key, this[key]));
    }
}
NglTooltipTrigger.decorators = [
    { type: Directive, args: [{
                selector: '[nglTooltip]',
                exportAs: 'nglTooltip',
            },] }
];
NglTooltipTrigger.ctorParameters = () => [
    { type: NglTooltipConfig, decorators: [{ type: Optional }, { type: Inject, args: [NGL_TOOLTIP_CONFIG,] }] },
    { type: ElementRef },
    { type: Renderer2 },
    { type: ViewContainerRef },
    { type: Overlay }
];
NglTooltipTrigger.propDecorators = {
    template: [{ type: Input, args: ['nglTooltip',] }],
    placement: [{ type: Input, args: ['nglTooltipPlacement',] }],
    delay: [{ type: Input, args: ['nglTooltipDelay',] }],
    nglOpen: [{ type: Input, args: ['nglTooltipOpen',] }],
    openAuto: [{ type: Input, args: ['nglTooltipOpenAuto',] }],
    interactive: [{ type: Input, args: ['nglTooltipInteractive',] }],
    tooltipClass: [{ type: Input, args: ['nglTooltipClass',] }],
    nglTooltipOpenChange: [{ type: Output }],
    onMouseOver: [{ type: HostListener, args: ['mouseenter',] }, { type: HostListener, args: ['focus',] }],
    onMouseOut: [{ type: HostListener, args: ['mouseleave',] }, { type: HostListener, args: ['blur',] }]
};
__decorate([
    InputBoolean()
], NglTooltipTrigger.prototype, "openAuto", void 0);
__decorate([
    InputBoolean()
], NglTooltipTrigger.prototype, "interactive", void 0);

class NglTooltipsModule {
}
NglTooltipsModule.decorators = [
    { type: NgModule, args: [{
                declarations: [NglTooltip, NglTooltipTrigger],
                exports: [NglTooltipTrigger],
                imports: [CommonModule, OverlayModule, A11yModule, NglInternalOutletModule],
                entryComponents: [NglTooltip],
            },] }
];

class NglFormLabel {
    constructor(element, renderer) {
        this.element = element;
        this.renderer = renderer;
        this.klass = 'slds-form-element__label';
    }
    ngOnInit() {
        this.renderer.addClass(this.element.nativeElement, this.klass);
    }
}
NglFormLabel.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'label[nglFormLabel]',
                template: "<abbr class=\"slds-required\" *ngIf=\"required\" title=\"Required\">*</abbr><span [nglInternalOutlet]=\"label\"></span>\n<ng-content></ng-content>",
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
NglFormLabel.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
NglFormLabel.propDecorators = {
    label: [{ type: Input, args: ['nglFormLabel',] }],
    klass: [{ type: Input, args: ['nglFormLabelClass',] }],
    required: [{ type: Input }]
};
__decorate([
    InputBoolean()
], NglFormLabel.prototype, "required", void 0);

class NglFormHelp {
    constructor() {
        this.isOpen = false;
    }
}
NglFormHelp.decorators = [
    { type: Component, args: [{
                selector: 'ngl-form-help',
                template: "\n<button class=\"slds-button slds-button_icon\" [nglTooltip]=\"content\" [(nglTooltipOpen)]=\"isOpen\">\n  <svg class=\"slds-button__icon\" nglIconName=\"utility:info\"></svg><span class=\"slds-assistive-text\">Help</span>\n</button>",
                changeDetection: ChangeDetectionStrategy.OnPush,
                host: {
                    '[class.slds-form-element__icon]': 'true',
                }
            },] }
];
NglFormHelp.propDecorators = {
    content: [{ type: Input }]
};

const DIRECTIVES$9 = [
    NglFormLabel,
    NglFormHelp,
];
class NglFormsModule {
}
NglFormsModule.decorators = [
    { type: NgModule, args: [{
                declarations: DIRECTIVES$9,
                exports: DIRECTIVES$9,
                imports: [CommonModule, NglInternalOutletModule, NglIconsModule, NglTooltipsModule],
            },] }
];

function getHexFromHsv(hsv) {
    return hsv ? getHexFromRgb(getRgbFromHsv(hsv)) : null;
}
function getRgbFromHsv({ hue, saturation, value }) {
    const hueRatio = hue / 360;
    const satRatio = saturation / 100;
    const valRatio = value / 100;
    let red;
    let green;
    let blue;
    const i = Math.floor(hueRatio * 6);
    const f = hueRatio * 6 - i;
    const p = valRatio * (1 - satRatio);
    const q = valRatio * (1 - f * satRatio);
    const t = valRatio * (1 - (1 - f) * satRatio);
    switch (i % 6) {
        case 0:
            red = valRatio;
            green = t;
            blue = p;
            break;
        case 1:
            red = q;
            green = valRatio;
            blue = p;
            break;
        case 2:
            red = p;
            green = valRatio;
            blue = t;
            break;
        case 3:
            red = p;
            green = q;
            blue = valRatio;
            break;
        case 4:
            red = t;
            green = p;
            blue = valRatio;
            break;
        default:
            red = valRatio;
            green = p;
            blue = q;
    }
    return {
        red: Math.round(red * 255),
        blue: Math.round(blue * 255),
        green: Math.round(green * 255),
    };
}
function getHex(color) {
    return `0${Math.round(color).toString(16)}`.substr(-2);
}
function getHexFromRgb({ red, green, blue }) {
    return `#${getHex(red)}${getHex(green)}${getHex(blue)}`;
}
function getHsvFromHex(hex) {
    return hex ? getHsvFromRgb(getRgbFromHex(hex)) : null;
}
function getHsvFromRgb({ red, green, blue }) {
    const redRatio = red / 255;
    const greenRatio = green / 255;
    const blueRatio = blue / 255;
    const max = Math.max(redRatio, greenRatio, blueRatio);
    const min = Math.min(redRatio, greenRatio, blueRatio);
    const delta = max - min;
    const saturation = max === 0 ? 0 : delta / max * 100;
    const value = max * 100;
    let hue;
    if (max === min) {
        hue = 0;
    }
    else {
        if (redRatio === max) {
            hue =
                (greenRatio - blueRatio) / delta + (greenRatio < blueRatio ? 6 : 0);
        }
        else if (greenRatio === max) {
            hue = (blueRatio - redRatio) / delta + 2;
        }
        else {
            hue = (redRatio - greenRatio) / delta + 4;
        }
        hue *= 60;
    }
    return { hue, saturation, value };
}
const HEX_REGEX = /^#([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;
function getRgbFromHex(hex) {
    const result = HEX_REGEX.exec(toSixDigitHex(hex));
    return {
        red: parseInt(result[1], 16),
        green: parseInt(result[2], 16),
        blue: parseInt(result[3], 16),
    };
}
function toSixDigitHex(value) {
    const shortHandHex = /^#([a-f\d])([a-f\d])([a-f\d])$/i;
    const match = shortHandHex.exec(value);
    if (match) {
        return `#${match[1]}${match[1]}${match[2]}${match[2]}${match[3]}${match[3]}`;
    }
    return value;
}
function isValidHex(value) {
    return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(value);
}

/** Injection token that can be used to specify default options. */
const NGL_COLORPICKER_CONFIG = new InjectionToken('ngl-colorpicker-config');
class NglColorpickerConfig {
    constructor() {
        this.swatchColors = [
            '#e3abec', '#c2dbf7', '#9fd6ff', '#9de7da', '#9df0c0', '#fff099', '#fed49a',
            '#d073e0', '#86baf3', '#5ebbff', '#44d8be', '#3be282', '#ffe654', '#ffb758',
            '#bd35bd', '#5779c1', '#5679c0', '#00aea9', '#3cba4c', '#f5bc25', '#f99221',
            '#580d8c', '#001970', '#0a2399', '#0b7477', '#0b6b50', '#b67e11', '#b85d0d',
        ];
        this.variant = 'base';
    }
}

const NGL_COLORPICKER_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => NglColorpicker),
    multi: true
};
class NglColorpicker {
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

class NglColorpickerSwatch {
    constructor(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.renderer.addClass(this.el.nativeElement, 'slds-swatch');
    }
}
NglColorpickerSwatch.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: '[nglColorpickerSwatch]',
                template: "<span class=\"slds-assistive-text\" aria-hidden=\"true\">{{ color }}</span>",
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
NglColorpickerSwatch.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
NglColorpickerSwatch.propDecorators = {
    color: [{ type: HostBinding, args: ['style.background',] }, { type: Input }]
};

class NglColorpickerCustom {
    constructor(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.hsvChange = new EventEmitter();
        this.renderer.addClass(this.el.nativeElement, 'slds-color-picker__custom');
    }
    ngOnChanges(changes) {
        if (changes.hsv) {
            this.hex = getHexFromHsv(this.hsv);
        }
    }
    onHsvChange($event) {
        this.hsvChange.emit($event);
    }
    onHexChange(hex) {
        const hsv = getHsvFromHex(hex);
        this.hsvChange.emit(hsv);
    }
}
NglColorpickerCustom.decorators = [
    { type: Component, args: [{
                selector: 'ngl-colorpicker-custom',
                template: "\n<ngl-colorpicker-range [hsv]=\"hsv\" (hsvChange)=\"onHsvChange($event)\"></ngl-colorpicker-range>\n<ngl-colorpicker-inputs [hex]=\"hex\" (hexChange)=\"onHexChange($event)\"></ngl-colorpicker-inputs>",
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
NglColorpickerCustom.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
NglColorpickerCustom.propDecorators = {
    hsv: [{ type: Input }],
    hsvChange: [{ type: Output }]
};

class NglColorpickerRange {
    constructor(document) {
        this.document = document;
        this.hsvChange = new EventEmitter();
        this.uid = uniqueId('colorpicker-range');
        this._hsv = { hue: 0, saturation: 0, value: 0 };
    }
    set hsv(hsv) {
        if (hsv) {
            this._hsv = hsv;
        }
    }
    get hsv() {
        return this._hsv;
    }
    get hex() {
        return getHexFromHsv(this.hsv);
    }
    ngAfterViewInit() {
        this.dragSubscription = this.setupDrag().subscribe((mm) => this.emitChange(mm));
    }
    hueSliderChange(value) {
        this.emitChange({ hue: value });
    }
    rangeIndicatorKeyboard(evt) {
        let saturation = this.hsv.saturation;
        let value = this.hsv.value;
        switch (evt.keyCode) {
            case LEFT_ARROW:
                saturation = this.limit(saturation - 1);
                break;
            case RIGHT_ARROW:
                saturation = this.limit(saturation + 1);
                break;
            case UP_ARROW:
                value = this.limit(value + 1);
                break;
            case DOWN_ARROW:
                value = this.limit(value - 1);
                break;
            default:
                return;
        }
        trapEvent(evt);
        this.emitChange({ saturation, value });
    }
    indicatorStyle() {
        return {
            'bottom.%': this.hsv.value,
            'left.%': this.hsv.saturation,
            'background': this.hex,
        };
    }
    ngOnDestroy() {
        if (this.dragSubscription) {
            this.dragSubscription.unsubscribe();
            this.dragSubscription = null;
        }
    }
    emitChange(hsv) {
        this.hsvChange.emit(Object.assign(Object.assign({}, this.hsv), hsv));
    }
    limit(value) {
        return Math.min(Math.max(value, 0), 100);
    }
    setupDrag() {
        const dragTarget = this.rangeIndicatorContainer.nativeElement;
        const pressEnd = merge(fromEvent(this.document, 'mouseup'), fromEvent(this.document, 'touchend'));
        const pressMove = merge(fromEvent(this.document, 'mousemove'), fromEvent(this.document, 'touchmove'));
        const pressStart = merge(fromEvent(dragTarget, 'mousedown'), fromEvent(dragTarget, 'touchstart'));
        return pressStart.pipe(flatMap((md) => {
            this.rangeIndicator.nativeElement.focus();
            const rect = dragTarget.getBoundingClientRect();
            return pressMove.pipe(startWith(md), map((mm) => {
                mm.preventDefault();
                const saturation = Math.round((mm.clientX - rect.left) / rect.width * 100);
                const value = Math.round((rect.bottom - mm.clientY) / rect.height * 100);
                return { saturation: this.limit(saturation), value: this.limit(value) };
            }), takeUntil(pressEnd));
        }));
    }
}
NglColorpickerRange.decorators = [
    { type: Component, args: [{
                selector: 'ngl-colorpicker-range',
                template: "\n<p class=\"slds-assistive-text\" [attr.id]=\"uid + '-instructions'\">Use arrow keys to select a saturation and brightness, on an x and y axis.</p>\n<div class=\"slds-color-picker__custom-range\" #rangeIndicatorContainer [style.background]=\"'hsl(' + hsv.hue + ', 100%, 50%)'\"><a class=\"slds-color-picker__range-indicator\" #rangeIndicator href=\"javascript:void(0);\" aria-live=\"assertive\" aria-atomic=\"true\" [attr.aria-describedby]=\"uid + '-instructions'\" [ngStyle]=\"indicatorStyle()\" (keydown)=\"rangeIndicatorKeyboard($event)\"><span class=\"slds-assistive-text\">Saturation: {{hsv.saturation}}%. Brightness: {{hsv.value}}%.</span></a></div>\n<div class=\"slds-color-picker__hue-and-preview\">\n  <label class=\"slds-assistive-text\" [attr.for]=\"uid + '-hue'\">Select Hue</label>\n  <input class=\"slds-color-picker__hue-slider\" #hueSlider type=\"range\" min=\"0\" max=\"360\" [id]=\"uid + '-hue'\" [value]=\"hsv.hue\" (input)=\"hueSliderChange($event.target.value)\"><span nglColorpickerSwatch [color]=\"hex\"></span>\n</div>",
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
NglColorpickerRange.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
];
NglColorpickerRange.propDecorators = {
    hsv: [{ type: Input }],
    hsvChange: [{ type: Output }],
    rangeIndicator: [{ type: ViewChild, args: ['rangeIndicator',] }],
    rangeIndicatorContainer: [{ type: ViewChild, args: ['rangeIndicatorContainer',] }]
};

class NglColorpickerInputs {
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

class NglColorpickerSwatchTrigger {
    constructor(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.selectedChange = new EventEmitter();
        this.renderer.addClass(this.el.nativeElement, 'slds-color-picker__swatch-trigger');
        this.renderer.setAttribute(this.el.nativeElement, 'role', 'option');
    }
    onSelect() {
        return this.selectedChange.emit();
    }
    focus() {
        this.el.nativeElement.focus();
        this.onSelect();
    }
}
NglColorpickerSwatchTrigger.decorators = [
    { type: Directive, args: [{
                selector: '[nglColorpickerSwatchTrigger]',
            },] }
];
NglColorpickerSwatchTrigger.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
NglColorpickerSwatchTrigger.propDecorators = {
    selected: [{ type: HostBinding, args: ['class.ngl-color-picker__swatch-selected',] }, { type: Input }],
    selectedChange: [{ type: Output }],
    onSelect: [{ type: HostListener, args: ['click',] }]
};

class NglColorpickerSwatches {
    constructor(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.hexChange = new EventEmitter();
        this.swatchColors = [];
        this.renderer.addClass(this.el.nativeElement, 'slds-color-picker__swatches');
    }
    ngOnChanges() {
        this.activeIndex = Math.max(this.swatchColors.indexOf(this.hex), 0);
    }
    onSelectViaInteraction(evt) {
        let direction = 0;
        switch (evt.keyCode) {
            case LEFT_ARROW:
            case UP_ARROW:
                direction = -1;
                break;
            case RIGHT_ARROW:
            case DOWN_ARROW:
                direction = 1;
                break;
            default:
                return;
        }
        trapEvent(evt);
        const activeIndex = this.swatchColors.indexOf(this.hex);
        const index = (this.triggers.length + activeIndex + direction) % this.triggers.length;
        const trigger = this.triggers.toArray()[index];
        trigger.focus();
    }
    isSelected(hex) {
        return hex === this.hex;
    }
    onSelect(hex) {
        this.hexChange.emit(hex);
    }
}
NglColorpickerSwatches.decorators = [
    { type: Component, args: [{
                selector: 'ngl-colorpicker-swatches',
                template: "\n<li class=\"slds-color-picker__swatch\" *ngFor=\"let color of swatchColors; let i = index\" role=\"presentation\"><a nglColorpickerSwatchTrigger href=\"javascript:void(0);\" [selected]=\"isSelected(color)\" [attr.tabindex]=\"activeIndex === i ? 0 : -1\" (selectedChange)=\"onSelect(color)\"><span nglColorpickerSwatch [color]=\"color\"></span></a></li>",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [`
    .ngl-color-picker__swatch-selected {
      box-shadow: rgb(117, 112, 112) 1px 1px 1px;
    }
  `]
            },] }
];
NglColorpickerSwatches.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
NglColorpickerSwatches.propDecorators = {
    hex: [{ type: Input }],
    hexChange: [{ type: Output }],
    swatchColors: [{ type: Input }],
    triggers: [{ type: ViewChildren, args: [NglColorpickerSwatchTrigger,] }],
    onSelectViaInteraction: [{ type: HostListener, args: ['keydown', ['$event'],] }]
};

const DIRECTIVES$8 = [
    NglColorpicker,
];
class NglColorpickerModule {
}
NglColorpickerModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    ...DIRECTIVES$8,
                    NglColorpickerSwatch,
                    NglColorpickerCustom,
                    NglColorpickerRange,
                    NglColorpickerInputs,
                    NglColorpickerSwatches,
                    NglColorpickerSwatchTrigger,
                ],
                exports: DIRECTIVES$8,
                imports: [
                    CommonModule,
                    NglIconsModule,
                    NglTabsModule,
                    NglPopoversModule,
                    NglFormsModule,
                    NglInternalOutletModule,
                ],
            },] }
];

class NglOverlaynglOverlayScrolledOutsideViewDirective {
    constructor(cdkOverlay, ngZone, scrollDispatcher) {
        this.cdkOverlay = cdkOverlay;
        this.ngZone = ngZone;
        this.scrollDispatcher = scrollDispatcher;
        this.overlayOutside = new EventEmitter();
    }
    ngOnInit() {
        const elementRef = this.cdkOverlay.origin.elementRef;
        const scrollableAncestors = this.scrollDispatcher.getAncestorScrollContainers(elementRef).map(container => container.getElementRef());
        if (!scrollableAncestors || !scrollableAncestors.length)
            return;
        this.subscription = this.cdkOverlay.positionChange.subscribe(() => {
            const bounds = elementRef.nativeElement.getBoundingClientRect();
            for (let i = 0, n = scrollableAncestors.length; i < n; i++) {
                const ancestorsBounds = scrollableAncestors[i].nativeElement.getBoundingClientRect();
                if (isElementOutside(bounds, ancestorsBounds)) {
                    this.ngZone.run(() => this.overlayOutside.emit());
                    return;
                }
            }
        });
    }
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
            this.subscription = null;
        }
    }
}
NglOverlaynglOverlayScrolledOutsideViewDirective.decorators = [
    { type: Directive, args: [{
                selector: '[nglOverlayScrolledOutsideView]'
            },] }
];
NglOverlaynglOverlayScrolledOutsideViewDirective.ctorParameters = () => [
    { type: CdkConnectedOverlay, decorators: [{ type: Self }] },
    { type: NgZone },
    { type: ScrollDispatcher }
];
NglOverlaynglOverlayScrolledOutsideViewDirective.propDecorators = {
    overlayOutside: [{ type: Output, args: ['nglOverlayScrolledOutsideView',] }]
};
/**
 * Gets whether an element is scrolled outside of view by its parent scrolling container.
 * @param element Dimensions of the element (from getBoundingClientRect)
 * @param container Dimensions of element's scrolling container (from getBoundingClientRect)
 * @returns Whether the element is scrolled out of view
 */
function isElementOutside(element, container) {
    return (element.bottom < container.top || element.top > container.bottom ||
        element.right < container.left || element.left > container.right);
}

const DIRECTIVES$7 = [
    NglOverlaynglOverlayScrolledOutsideViewDirective,
];
class NglOverlayModule {
}
NglOverlayModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: DIRECTIVES$7,
                exports: DIRECTIVES$7,
            },] }
];

class NglComboboxService {
}
NglComboboxService.decorators = [
    { type: Injectable }
];

class NglComboboxOption {
    constructor(element, service, cd, ngZone, renderer) {
        this.element = element;
        this.service = service;
        this.cd = cd;
        this.ngZone = ngZone;
        this.disabled = false;
        this.uid = uniqueId('combo-option');
        this._active = false;
        // Flag to disable scrolling into view when option is activated using mouse
        this.disableNextScrollIntoView = false;
        this.destroyed = false;
        renderer.addClass(element.nativeElement, 'slds-listbox__item');
        renderer.setAttribute(element.nativeElement, 'role', 'presentation');
    }
    // Whether or not the option is currently active and ready to be selected
    set active(active) {
        if (this.active === active || this.destroyed) {
            return;
        }
        this._active = active;
        this.cd.detectChanges();
        if (active) {
            this.service.combobox.inputEl.setAriaActiveDescendant(this.uid);
            this.scrollIntoView();
        }
        else {
            clearTimeout(this.scrollTimer);
        }
    }
    get active() {
        return this._active;
    }
    onSelectViaInteraction(evt) {
        trapEvent(evt);
        if (!this.disabled) {
            this.service.combobox.onOptionSelection(this);
        }
    }
    hover() {
        if (!this.disabled) {
            this.disableNextScrollIntoView = true;
            this.service.combobox.keyManager.setActiveItem(this);
        }
    }
    setActiveStyles() {
        this.active = true;
    }
    setInactiveStyles() {
        this.active = false;
    }
    scrollIntoView() {
        if (this.disableNextScrollIntoView) {
            this.disableNextScrollIntoView = false;
            return;
        }
        this.ngZone.runOutsideAngular(() => {
            this.scrollTimer = setTimeout(() => {
                const li = this.element.nativeElement;
                menuItemScroll(li.parentElement.parentElement, li);
            }, 0);
        });
    }
    ngOnDestroy() {
        this.destroyed = true;
        clearTimeout(this.scrollTimer);
    }
}
NglComboboxOption.decorators = [
    { type: Component, args: [{
                selector: 'ngl-combobox-option, [nglComboboxOption]',
                template: "\n<div class=\"slds-media slds-listbox__option slds-listbox__option_plain slds-media_small slds-media_center\" role=\"option\" [attr.id]=\"uid\" [class.slds-has-focus]=\"active\" [class.slds-is-selected]=\"selected\" [attr.aria-selected]=\"selected || null\" [attr.aria-disabled]=\"disabled || null\"><span class=\"slds-media__figure slds-listbox__option-icon\"><span class=\"slds-icon_container slds-icon-utility-check slds-current-color\" *ngIf=\"selected\">\n      <svg class=\"slds-icon slds-icon_x-small\" nglIconName=\"utility:check\"></svg></span></span><span class=\"slds-media__body\"><span class=\"slds-truncate\"><span class=\"slds-assistive-text\" *ngIf=\"selected\">Current Selection:</span>{{ label }}</span></span></div>",
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
NglComboboxOption.ctorParameters = () => [
    { type: ElementRef },
    { type: NglComboboxService },
    { type: ChangeDetectorRef },
    { type: NgZone },
    { type: Renderer2 }
];
NglComboboxOption.propDecorators = {
    value: [{ type: Input }],
    label: [{ type: Input }],
    selected: [{ type: Input }],
    disabled: [{ type: Input }],
    onSelectViaInteraction: [{ type: HostListener, args: ['mousedown', ['$event'],] }],
    hover: [{ type: HostListener, args: ['mouseenter',] }]
};
__decorate([
    InputBoolean()
], NglComboboxOption.prototype, "selected", void 0);

const MAX_INTERVAL_BETWEEN_KEYSTROKES = 300; // ms
class NglComboboxInput {
    constructor(service, el, renderer) {
        this.service = service;
        this.el = el;
        this.renderer = renderer;
        const { nativeElement } = this.el;
        this.renderer.addClass(nativeElement, 'slds-input');
        this.renderer.addClass(nativeElement, 'slds-combobox__input');
        this.renderer.setAttribute(nativeElement, 'autoComplete', 'off');
        this.renderer.setAttribute(nativeElement, 'role', 'textbox');
        this.renderer.setAttribute(nativeElement, 'aria-controls', this.service.combobox.uid);
        if (!nativeElement.id) {
            this.renderer.setAttribute(nativeElement, 'id', uniqueId('combobox-input'));
        }
        const keyboardEvent$ = fromEvent(nativeElement, 'keypress').pipe(map((e) => e.keyCode));
        this.keyboardBuffer$ = keyboardEvent$.pipe(buffer(keyboardEvent$.pipe(debounceTime(MAX_INTERVAL_BETWEEN_KEYSTROKES))), map((keyCodes) => keyCodes.map((c) => String.fromCharCode(c)).join('')));
    }
    get isReadonly() {
        return this.service.combobox.variant === 'base' || this.service.combobox.hasLookupSingleSelection;
    }
    get ariaAutocomplete() {
        return this.service.combobox.isLookup ? 'list' : null;
    }
    get hasReadonlyValue() {
        return this.service.combobox.hasLookupSingleSelection;
    }
    get id() {
        return this.el.nativeElement.id;
    }
    setAriaActiveDescendant(uid) {
        if (uid) {
            this.renderer.setAttribute(this.el.nativeElement, 'aria-activedescendant', uid);
        }
        else {
            this.renderer.removeAttribute(this.el.nativeElement, 'aria-activedescendant');
        }
    }
    setValue(value) {
        this.renderer.setProperty(this.el.nativeElement, 'value', value !== null ? value : '');
    }
    focus() {
        this.el.nativeElement.focus();
    }
    onMouseInteraction() {
        if (this.service.combobox.hasLookupSingleSelection || (this.service.combobox.open && this.service.combobox.isLookup)) {
            return;
        }
        this.service.combobox.openChange.emit(!this.service.combobox.open);
    }
    onBlur() {
        this.service.combobox.openChange.emit(false);
    }
    onKeyboard(evt) {
        const keyCode = evt.keyCode;
        if (keyCode === ESCAPE) {
            // This is handled by CDK, and detaches overlay
            return;
        }
        if (this.service.combobox.open) {
            switch (keyCode) {
                // User selects currently active option by pressing the `Enter` key
                case ENTER:
                    trapEvent(evt);
                    this.service.combobox.onOptionSelection();
                    return;
                // Propagate to keymanager
                default:
                    this.service.combobox.keyManager.onKeydown(evt);
                    return;
            }
        }
        else {
            // Do nothing if readonly Lookup
            if (this.service.combobox.hasLookupSingleSelection) {
                return;
            }
            // Pressing the `Down` or `Enter` key will expand the collapsed menu
            if (keyCode === DOWN_ARROW || keyCode === ENTER) {
                trapEvent(evt);
                this.service.combobox.openChange.emit(true);
                return;
            }
            // Any key on Lookup should expand the collapsed menu
            if (this.service.combobox.isLookup) {
                // Delay emission so actual value of the input has been updated
                setTimeout(() => this.service.combobox.openChange.emit(true), 0);
            }
        }
    }
}
NglComboboxInput.decorators = [
    { type: Directive, args: [{
                selector: 'input[nglCombobox]',
            },] }
];
NglComboboxInput.ctorParameters = () => [
    { type: NglComboboxService },
    { type: ElementRef },
    { type: Renderer2 }
];
NglComboboxInput.propDecorators = {
    isReadonly: [{ type: HostBinding, args: ['readOnly',] }],
    ariaAutocomplete: [{ type: HostBinding, args: ['attr.aria-autocomplete',] }],
    hasReadonlyValue: [{ type: HostBinding, args: ['class.slds-combobox__input-value',] }],
    onMouseInteraction: [{ type: HostListener, args: ['click',] }],
    onBlur: [{ type: HostListener, args: ['blur',] }],
    onKeyboard: [{ type: HostListener, args: ['keydown', ['$event'],] }]
};

/** Injection token that can be used to specify default options. */
const NGL_COMBOBOX_CONFIG = new InjectionToken('ngl-combobox-config');
class NglComboboxConfig {
    constructor() {
        this.loadingLabel = 'Loading';
        this.noOptionsFound = 'No matches found.';
        this.removeSelectedLabel = 'Remove selected option';
    }
}

class NglCombobox {
    constructor(defaultConfig, ngZone, cd, service) {
        this.ngZone = ngZone;
        this.cd = cd;
        this.service = service;
        this.variant = 'base';
        this.uid = uniqueId('combobox');
        this.open = false;
        this.openChange = new EventEmitter();
        this.selectionChange = new EventEmitter();
        this.multiple = false;
        this.visibleLength = 5;
        this.closeOnSelection = true;
        this.overlayWidth = 0;
        this.overlayPositions = [...DEFAULT_DROPDOWN_POSITIONS['left']];
        this.selectionValueFn = (selection) => {
            if (selection.length > 0) {
                if (this.multiple && this.isLookup) {
                    return '';
                }
                return selection.length === 1 ? selection[0] : `${selection.length} options selected`;
            }
            return '';
        };
        const config = Object.assign(Object.assign({}, new NglComboboxConfig()), defaultConfig);
        this.loadingLabel = config.loadingLabel;
        this.noOptionsFound = config.noOptionsFound;
        this.removeSelectedLabel = config.removeSelectedLabel;
        this.service.combobox = this;
        // this.service.openChange = this.openChange;
    }
    set data(data) {
        this._data = (data || []).map((d) => {
            if (typeof d === 'string') {
                // Support array of strings as options, by mapping to NglComboboxOptionItem
                return { value: d, label: d };
            }
            else if (!d.label) {
                // Use `value` if missing `label`
                return Object.assign(Object.assign({}, d), { label: d.value });
            }
            return d;
        });
    }
    get data() {
        return this._data;
    }
    get activeOption() {
        return this.keyManager ? this.keyManager.activeItem : null;
    }
    get selectedOptions() {
        return this.data ? this.data.filter(d => this.isSelected(d.value)) : [];
    }
    get isLookup() {
        return this.variant === 'lookup';
    }
    get hasLookupSingleSelection() {
        return this.isLookup && !this.multiple && this.selectedOptions.length > 0;
    }
    ngOnChanges(changes) {
        if (changes.selection || (this.selection && changes.data)) {
            this.calculateDisplayValue();
        }
    }
    onAttach() {
        var _a, _b, _c, _d, _e;
        // Same width as the trigger element
        this.overlayWidth = (_a = this.overlayOrigin) === null || _a === void 0 ? void 0 : _a.elementRef.nativeElement.offsetWidth;
        this.cd.detectChanges();
        this.keyManager = this.options && new ActiveDescendantKeyManager(this.options).withWrap();
        // Activate selected item or first option
        const selectedOption = (_b = this.options) === null || _b === void 0 ? void 0 : _b.find(o => o.selected);
        if (selectedOption) {
            (_c = this.keyManager) === null || _c === void 0 ? void 0 : _c.setActiveItem(selectedOption);
        }
        else {
            (_d = this.keyManager) === null || _d === void 0 ? void 0 : _d.setFirstItemActive();
        }
        // Listen to button presses if picklist to activate matching option
        this.keyboardSubscribe(this.variant === 'base');
        // When it is open we listen for option changes in order to fix active option and handle scroll
        this.optionChangesSubscription = (_e = this.options) === null || _e === void 0 ? void 0 : _e.changes.subscribe(() => {
            var _a, _b;
            if (!this.activeOption || ((_a = this.options) === null || _a === void 0 ? void 0 : _a.toArray().indexOf(this.activeOption)) === -1) {
                // Activate first option if active one is destroyed
                (_b = this.keyManager) === null || _b === void 0 ? void 0 : _b.setFirstItemActive();
            }
            else {
                this.activeOption.scrollIntoView();
            }
            this.updateMenuHeight();
        });
        this.updateMenuHeight();
    }
    onDetach() {
        var _a;
        if (this.open) {
            this.close();
            return;
        }
        // Clear aria-activedescendant when menu is closed
        (_a = this.inputEl) === null || _a === void 0 ? void 0 : _a.setAriaActiveDescendant(null);
        this.detach();
    }
    trackByOption(_index, option) {
        return option.value;
    }
    dropdownClass() {
        return {
            [`slds-dropdown_length-${this.visibleLength}`]: this.visibleLength > 0,
        };
    }
    inputIconRight() {
        return this.isLookup ? 'utility:search' : 'utility:down';
    }
    hasNoMatches() {
        return this.isLookup && this.data.length === 0 && !this.loadingMore;
    }
    onOptionSelection(option = this.activeOption) {
        if (option) {
            const selection = addOptionToSelection(option.value, this.selection, this.multiple);
            this.selectionChange.emit(selection);
            if (this.closeOnSelection) {
                this.close();
            }
        }
    }
    // Trigger by clear button on Lookup
    onClearSelection() {
        this.selectionChange.emit(null);
        setTimeout(() => { var _a; return (_a = this.inputEl) === null || _a === void 0 ? void 0 : _a.focus(); }, 0);
    }
    /**
     * Check whether value is currently selected.
     *
     * @param value The value in test, whether is (part of) selection or not
     */
    isSelected(value) {
        return isOptionSelected(value, this.selection, this.multiple);
    }
    ngOnDestroy() {
        this.detach();
    }
    close() {
        this.openChange.emit(false);
    }
    detach() {
        this.keyboardSubscribe(false);
        this.keyManager = null;
        if (this.optionChangesSubscription) {
            this.optionChangesSubscription.unsubscribe();
            this.optionChangesSubscription = null;
        }
    }
    calculateDisplayValue() {
        var _a;
        const value = this.selectionValueFn(this.selectedOptions.map(option => option.label || ''));
        (_a = this.inputEl) === null || _a === void 0 ? void 0 : _a.setValue(value);
    }
    keyboardSubscribe(listen) {
        if (this.keyboardSubscription) {
            this.keyboardSubscription.unsubscribe();
            this.keyboardSubscription = null;
        }
        if (listen && this.inputEl) {
            this.keyboardSubscription = this.inputEl.keyboardBuffer$.subscribe((pattern) => {
                if (this.options && this.keyManager) {
                    pattern = pattern.toLocaleLowerCase();
                    const options = this.options.toArray();
                    const activeIndex = this.activeOption ? (this.keyManager.activeItemIndex || 0) + 1 : 0;
                    for (let i = 0, n = options.length; i < n; i++) {
                        const index = (activeIndex + i) % n;
                        const option = options[index];
                        if (!option.disabled && option.label.toLocaleLowerCase().substr(0, pattern.length) === pattern) {
                            this.keyManager.setActiveItem(option);
                            break;
                        }
                    }
                }
            });
        }
    }
    updateMenuHeight() {
        this.ngZone.onStable.asObservable().pipe(take(1)).subscribe(() => {
            if (this.cdkOverlay && this.dropdownElementRef) {
                const { overlayRef } = this.cdkOverlay;
                const height = this.dropdownElementRef.nativeElement.offsetHeight;
                overlayRef.updateSize({
                    minHeight: height + 4,
                });
                overlayRef.updatePosition();
            }
        });
    }
}
NglCombobox.decorators = [
    { type: Component, args: [{
                selector: 'ngl-combobox',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: "\n<label [nglFormLabel]=\"label\" [attr.for]=\"inputEl.id\"></label>\n<div class=\"slds-form-element__control\">\n  <div class=\"slds-combobox_container\" [class.slds-has-selection]=\"hasLookupSingleSelection\">\n    <div class=\"slds-combobox slds-dropdown-trigger slds-dropdown-trigger_click\" [attr.aria-expanded]=\"open\" aria-haspopup=\"listbox\" role=\"combobox\" [class.slds-is-open]=\"open\" [attr.aria-owns]=\"uid\">\n      <div class=\"slds-combobox__form-element slds-input-has-icon\" role=\"none\" cdkOverlayOrigin #overlayOrigin=\"cdkOverlayOrigin\" [class.slds-input-has-icon_group-right]=\"loading\" [class.slds-input-has-icon_right]=\"!loading\">\n        <ng-content select=\"input\"></ng-content>\n        <div class=\"slds-input__icon-group slds-input__icon-group_right\" *ngIf=\"loading; else iconRight\">\n          <div class=\"slds-spinner slds-spinner_brand slds-spinner_x-small slds-input__spinner\" role=\"status\"><span class=\"slds-assistive-text\">{{ loadingLabel }}</span>\n            <div class=\"slds-spinner__dot-a\"></div>\n            <div class=\"slds-spinner__dot-b\"></div>\n          </div>\n          <ng-template [ngTemplateOutlet]=\"iconRight\"></ng-template>\n        </div>\n        <ng-template #iconRight>\n          <button class=\"slds-button slds-button_icon slds-input__icon slds-input__icon_right\" *ngIf=\"hasLookupSingleSelection; else iconTpl\" type=\"button\" (click)=\"onClearSelection()\" [title]=\"removeSelectedLabel\">\n            <svg class=\"slds-button__icon\" nglIconName=\"utility:close\"></svg><span class=\"slds-assistive-text\">{{ removeSelectedLabel }}</span>\n          </button>\n        </ng-template>\n        <ng-template #iconTpl><span class=\"slds-icon_container slds-input__icon slds-input__icon_right\">\n            <svg class=\"slds-icon slds-icon_x-small slds-icon-text-default\" [nglIconName]=\"inputIconRight()\"></svg></span></ng-template>\n      </div>\n    </div>\n  </div>\n</div>\n<ng-template cdkConnectedOverlay #cdkOverlay=\"cdkConnectedOverlay\" [cdkConnectedOverlayPositions]=\"overlayPositions\" [cdkConnectedOverlayOrigin]=\"overlayOrigin\" [cdkConnectedOverlayMinWidth]=\"overlayWidth\" [cdkConnectedOverlayOpen]=\"open\" (nglOverlayScrolledOutsideView)=\"close()\" (attach)=\"onAttach()\" (detach)=\"onDetach()\">\n  <div class=\"slds-dropdown slds-dropdown_fluid\" #dropdown [attr.id]=\"uid\" role=\"listbox\" [ngClass]=\"dropdownClass()\" (mousedown)=\"$event.preventDefault()\">\n    <ul class=\"slds-listbox slds-listbox_vertical\" role=\"presentation\">\n      <li *ngFor=\"let d of data; trackBy: trackByOption\" nglComboboxOption [value]=\"d.value\" [label]=\"d.label\" [disabled]=\"d.disabled\" [selected]=\"isSelected(d.value)\"></li>\n      <li class=\"slds-listbox__item\" *ngIf=\"loadingMore\" role=\"presentation\">\n        <div class=\"slds-align_absolute-center slds-p-top_medium\">\n          <div class=\"slds-spinner slds-spinner_x-small slds-spinner_inline\" role=\"status\">\n            <div class=\"slds-assistive-text\">{{ loadingLabel }}</div>\n            <div class=\"slds-spinner__dot-a\"></div>\n            <div class=\"slds-spinner__dot-b\"></div>\n          </div>\n        </div>\n      </li>\n      <li class=\"slds-listbox__item\" *ngIf=\"hasNoMatches()\" role=\"presentation\" aria-live=\"polite\">\n        <div class=\"slds-align_absolute-center\"><span role=\"status\">{{ noOptionsFound }}</span></div>\n      </li>\n    </ul>\n  </div>\n</ng-template>",
                host: {
                    'class.slds-form-element': 'true',
                },
                providers: [NglComboboxService]
            },] }
];
NglCombobox.ctorParameters = () => [
    { type: NglComboboxConfig, decorators: [{ type: Optional }, { type: Inject, args: [NGL_COMBOBOX_CONFIG,] }] },
    { type: NgZone },
    { type: ChangeDetectorRef },
    { type: NglComboboxService }
];
NglCombobox.propDecorators = {
    variant: [{ type: Input }],
    label: [{ type: Input }],
    open: [{ type: Input }],
    openChange: [{ type: Output }],
    selection: [{ type: Input }],
    selectionChange: [{ type: Output }],
    multiple: [{ type: Input }],
    visibleLength: [{ type: Input }],
    inputEl: [{ type: ContentChild, args: [NglComboboxInput, { static: true },] }],
    loading: [{ type: Input }],
    loadingMore: [{ type: Input }],
    closeOnSelection: [{ type: Input }],
    loadingLabel: [{ type: Input }],
    noOptionsFound: [{ type: Input }],
    removeSelectedLabel: [{ type: Input }],
    options: [{ type: ViewChildren, args: [NglComboboxOption,] }],
    data: [{ type: Input, args: ['options',] }],
    overlayOrigin: [{ type: ViewChild, args: ['overlayOrigin', { static: true },] }],
    cdkOverlay: [{ type: ViewChild, args: ['cdkOverlay',] }],
    dropdownElementRef: [{ type: ViewChild, args: ['dropdown',] }],
    selectionValueFn: [{ type: Input }]
};
__decorate([
    InputBoolean()
], NglCombobox.prototype, "open", void 0);
__decorate([
    InputBoolean()
], NglCombobox.prototype, "multiple", void 0);
__decorate([
    InputNumber()
], NglCombobox.prototype, "visibleLength", void 0);
__decorate([
    InputBoolean()
], NglCombobox.prototype, "loading", void 0);
__decorate([
    InputBoolean()
], NglCombobox.prototype, "loadingMore", void 0);
__decorate([
    InputBoolean()
], NglCombobox.prototype, "closeOnSelection", void 0);

const DIRECTIVES$6 = [
    NglCombobox,
    NglComboboxOption,
    NglComboboxInput,
];
class NglComboboxesModule {
}
NglComboboxesModule.decorators = [
    { type: NgModule, args: [{
                declarations: DIRECTIVES$6,
                exports: DIRECTIVES$6,
                imports: [CommonModule, NglInternalOutletModule, NglIconsModule, NglFormsModule, OverlayModule, NglOverlayModule],
            },] }
];

class NglDatatableCell {
    constructor(templateRef) {
        this.templateRef = templateRef;
    }
}
NglDatatableCell.decorators = [
    { type: Directive, args: [{ selector: '[nglDatatableCell]' },] }
];
NglDatatableCell.ctorParameters = () => [
    { type: TemplateRef }
];

class NglDatatableHeadingTemplate {
    constructor(templateRef) {
        this.templateRef = templateRef;
    }
}
NglDatatableHeadingTemplate.decorators = [
    { type: Directive, args: [{ selector: '[nglDatatableHeading]' },] }
];
NglDatatableHeadingTemplate.ctorParameters = () => [
    { type: TemplateRef }
];

class NglDatatableColumn {
    constructor() {
        this.sortable = false;
        this.truncate = false;
    }
}
NglDatatableColumn.decorators = [
    { type: Directive, args: [{
                // tslint:disable-next-line:directive-selector
                selector: 'ngl-datatable-column',
            },] }
];
NglDatatableColumn.propDecorators = {
    heading: [{ type: Input }],
    key: [{ type: Input }],
    headClass: [{ type: Input }],
    cellClass: [{ type: Input }],
    sortable: [{ type: Input }],
    truncate: [{ type: Input }],
    cellTpl: [{ type: ContentChild, args: [NglDatatableCell,] }],
    headingTpl: [{ type: ContentChild, args: [NglDatatableHeadingTemplate,] }]
};
__decorate([
    InputBoolean()
], NglDatatableColumn.prototype, "sortable", void 0);
__decorate([
    InputBoolean()
], NglDatatableColumn.prototype, "truncate", void 0);

class NglDatatableLoadingOverlay {
    constructor(templateRef) {
        this.templateRef = templateRef;
    }
}
NglDatatableLoadingOverlay.decorators = [
    { type: Directive, args: [{ selector: '[nglLoadingOverlay]' },] }
];
NglDatatableLoadingOverlay.ctorParameters = () => [
    { type: TemplateRef }
];
class NglDatatableNoRowsOverlay {
    constructor(templateRef) {
        this.templateRef = templateRef;
    }
}
NglDatatableNoRowsOverlay.decorators = [
    { type: Directive, args: [{ selector: '[nglNoRowsOverlay]' },] }
];
NglDatatableNoRowsOverlay.ctorParameters = () => [
    { type: TemplateRef }
];

class NglDatatable {
    constructor(detector) {
        this.detector = detector;
        this.data = [];
        this.sortChange = new EventEmitter();
        this.loading = false;
        this.rowClick = new EventEmitter();
        this.dataTrackBy = (index, data) => {
            return this.trackByKey ? data[this.trackByKey] : index;
        };
    }
    get showLoading() {
        return this.loading && this.loadingOverlay;
    }
    columnTrackBy(index, column) {
        return column.key || index;
    }
    onColumnSort(column, order) {
        const key = column.key;
        if (!key) {
            throw new Error(`ng-lightning: No "key" property is set for sortable column "${column.heading}"`);
        }
        this.sortChange.emit({ key, order });
    }
    getColumnSortOrder(column) {
        return this.sort && column.key === this.sort.key ? this.sort.order : null;
    }
    onRowClick(event, data) {
        this.rowClick.emit({ event, data });
    }
    ngAfterContentInit() {
        this._columnsSubscription = this.columns.changes.subscribe(() => this.detector.markForCheck());
    }
    ngOnDestroy() {
        if (this._columnsSubscription) {
            this._columnsSubscription.unsubscribe();
            this._columnsSubscription = null;
        }
    }
}
NglDatatable.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'table[ngl-datatable]',
                template: "\n<thead>\n  <tr class=\"slds-line-height_reset\">\n    <th *ngFor=\"let col of columns; trackBy:columnTrackBy\" nglDatatableHead scope=\"col\" [heading]=\"col.heading\" [headingTpl]=\"col.headingTpl?.templateRef\" [sortable]=\"col.sortable\" [sortOrder]=\"getColumnSortOrder(col)\" (sort)=\"onColumnSort(col, $event)\" [ngClass]=\"col.headClass\"></th>\n  </tr>\n</thead>\n<tbody>\n  <ng-template #noData>\n    <tr>\n      <td [attr.colspan]=\"columns.length\">\n        <ng-template [ngTemplateOutlet]=\"noRowsOverlay?.templateRef\"></ng-template>\n      </td>\n    </tr>\n  </ng-template>\n  <ng-container *ngIf=\"data &amp;&amp; data.length &gt; 0; else noData\">\n    <tr *ngFor=\"let d of data; let i = index; trackBy:dataTrackBy\" (click)=\"onRowClick($event, d)\">\n      <td *ngFor=\"let col of columns; trackBy:columnTrackBy\" [ngClass]=\"col.cellClass\" nglDatatatableCell_ [row]=\"d\" [column]=\"col\" [index]=\"i\"></td>\n    </tr>\n  </ng-container>\n</tbody>\n<div class=\"ngl-datatable-loading slds-align_absolute-center\" *ngIf=\"showLoading\">\n  <ng-template [ngTemplateOutlet]=\"loadingOverlay.templateRef\"></ng-template>\n</div>",
                host: {
                    '[class.slds-table]': 'true',
                },
                styles: [`
    .ngl-datatable-loading {
      position: absolute;
      z-index: 1;
      top: 0; left: 0; right: 0; bottom: 0;
      background: rgba(255, 255, 255, 0.5)
    }
  `]
            },] }
];
NglDatatable.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
NglDatatable.propDecorators = {
    data: [{ type: Input }],
    trackByKey: [{ type: Input }],
    sort: [{ type: Input }],
    sortChange: [{ type: Output }],
    loading: [{ type: HostBinding, args: ['class.slds-is-relative',] }, { type: Input }],
    loadingOverlay: [{ type: ContentChild, args: [NglDatatableLoadingOverlay,] }],
    noRowsOverlay: [{ type: ContentChild, args: [NglDatatableNoRowsOverlay,] }],
    columns: [{ type: ContentChildren, args: [NglDatatableColumn,] }],
    rowClick: [{ type: Output }]
};

class NglInternalDatatableHeadCell {
    constructor() {
        this.sort = new EventEmitter();
    }
    get header() {
        return this.headingTpl || this.heading;
    }
    get attrTitle() {
        return this.heading || null;
    }
    get ariaSort() {
        return this.sortOrder ? `${this.sortOrder}ending` : 'none';
    }
    sortChange() {
        this.sort.emit(this.sortOrder === 'desc' ? 'asc' : 'desc');
    }
}
NglInternalDatatableHeadCell.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'th[nglDatatableHead]',
                template: "<a class=\"slds-th__action slds-text-link_reset\" *ngIf=\"sortable; else baseTpl\" (click)=\"sortChange()\" role=\"button\" tabindex=\"0\"><span class=\"slds-assistive-text\">Sort by:</span>\n  <div class=\"slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate\"><span class=\"slds-truncate\" [attr.title]=\"attrTitle\" [nglInternalOutlet]=\"header\"></span><span class=\"slds-icon_container slds-icon-utility-arrowdown\">\n      <svg class=\"slds-icon slds-icon-text-default slds-is-sortable__icon\" nglIconName=\"arrowdown\"></svg></span></div></a>\n<ng-template #baseTpl>\n  <div class=\"slds-truncate\" [attr.title]=\"attrTitle\" [nglInternalOutlet]=\"header\"></div>\n</ng-template>",
                changeDetection: ChangeDetectionStrategy.OnPush,
                host: {
                    '[class.slds-is-sorted_asc]': `sortOrder === 'asc'`,
                    '[class.slds-is-sorted_desc]': `sortOrder === 'desc'`,
                    '[class.slds-is-sorted]': `!!sortOrder`,
                }
            },] }
];
NglInternalDatatableHeadCell.propDecorators = {
    heading: [{ type: Input }],
    headingTpl: [{ type: Input }],
    sortable: [{ type: HostBinding, args: ['class.slds-is-sortable',] }, { type: Input }],
    sortOrder: [{ type: Input }],
    ariaSort: [{ type: HostBinding, args: ['attr.aria-sort',] }],
    sort: [{ type: Output }]
};

class NglInternalDatatableCell {
    get dataLabel() {
        return this.column.heading;
    }
    ngOnChanges() {
        this.context = {
            $implicit: this.value,
            row: this.row,
            index: this.index,
        };
    }
    get value() {
        const { key } = this.column;
        return key ? this.row[key] : null;
    }
}
NglInternalDatatableCell.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'td[nglDatatatableCell_]',
                template: "\n<div [class.slds-truncate]=\"column.truncate\" [attr.title]=\"column.truncate ? value : null\">\n  <ng-container *ngIf=\"column.cellTpl; else stringTpl\" [ngTemplateOutlet]=\"column.cellTpl.templateRef\" [ngTemplateOutletContext]=\"context\"></ng-container>\n  <ng-template #stringTpl>{{ value }}</ng-template>\n</div>",
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
NglInternalDatatableCell.propDecorators = {
    row: [{ type: Input }],
    column: [{ type: Input }],
    index: [{ type: Input }],
    dataLabel: [{ type: HostBinding, args: ['attr.data-label',] }]
};

const NGL_DATATABLE_DIRECTIVES = [
    NglDatatable,
    NglDatatableColumn,
    NglDatatableCell,
    NglDatatableHeadingTemplate,
    NglDatatableLoadingOverlay, NglDatatableNoRowsOverlay,
];
class NglDatatablesModule {
}
NglDatatablesModule.decorators = [
    { type: NgModule, args: [{
                declarations: [NGL_DATATABLE_DIRECTIVES, NglInternalDatatableHeadCell, NglInternalDatatableCell],
                exports: [NGL_DATATABLE_DIRECTIVES],
                imports: [CommonModule, NglIconsModule, NglInternalOutletModule],
            },] }
];

class NglClickOutsideDirective {
    constructor(document, element) {
        this.document = document;
        this.element = element;
        this.clickOutside = new EventEmitter();
    }
    ngAfterViewInit() {
        this.subscription = fromEvent(this.document, 'click').subscribe((e) => {
            if (this.shouldClose(e)) {
                this.clickOutside.emit();
            }
        });
    }
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
            this.subscription = null;
        }
    }
    shouldClose(event) {
        const element = event.target;
        if ((event instanceof MouseEvent && event.button === 2) || isContainedIn(element, this.ignore)) {
            return false;
        }
        return !isContainedIn(element, this.element.nativeElement);
    }
}
NglClickOutsideDirective.decorators = [
    { type: Directive, args: [{
                selector: '[nglClickOutside]'
            },] }
];
NglClickOutsideDirective.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: ElementRef }
];
NglClickOutsideDirective.propDecorators = {
    clickOutside: [{ type: Output, args: ['nglClickOutside',] }],
    ignore: [{ type: Input, args: ['nglClickOutsideIgnore',] }]
};
function isContainedIn(el, container) {
    if (!container) {
        return false;
    }
    return Array.isArray(container) ? container.some(c => c.contains(el)) : container.contains(el);
}

const DIRECTIVES$5 = [NglClickOutsideDirective];
class NglClickOutsideModule {
}
NglClickOutsideModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: DIRECTIVES$5,
                exports: DIRECTIVES$5,
            },] }
];

class NglDateAdapterBase {
}

const PATTERNS = {
    'big-endian': 'yyyy/MM/dd',
    'little-endian': 'dd/MM/yyyy',
    'middle-endian': 'MM/dd/yyyy',
};
class NglDateAdapter extends NglDateAdapterBase {
    parse(value, format) {
        const date = parse(value, format, new Date());
        return this.isValidDate(date) ? date : null;
    }
    format(date, format$1) {
        return format(date, format$1);
    }
    pattern(name, delimiter) {
        const pattern = PATTERNS[name];
        return (delimiter && delimiter !== '/') ? pattern.replace(/\//g, delimiter) : pattern;
    }
    isValidDate(value) {
        const dateWrapper = new Date(value);
        return !isNaN(dateWrapper.getDate());
    }
}
NglDateAdapter.decorators = [
    { type: Injectable }
];

/** Injection token that can be used to specify default options. */
const NGL_DATEPICKER_CONFIG = new InjectionToken('ngl-datepicker-config');
class NglDatepickerConfig {
    constructor(locale) {
        this.format = 'big-endian';
        this.delimiter = '/';
        this.dropdownAlign = 'left';
        this.showToday = true;
        this.relativeYearFrom = -100;
        this.relativeYearTo = 10;
        this.openOnInputClick = true;
        this.todayLabel = 'Today';
        this.previousMonthLabel = 'Previous Month';
        this.nextMonthLabel = 'Next Month';
        this.patternPlaceholder = false;
        this.monthNames = getLocaleMonthNames(locale, FormStyle.Standalone, TranslationWidth.Wide);
        this.dayNamesShort = getLocaleDayNames(locale, FormStyle.Standalone, TranslationWidth.Abbreviated);
        this.dayNamesLong = getLocaleDayNames(locale, FormStyle.Standalone, TranslationWidth.Wide);
        this.firstDayOfWeek = getLocaleFirstDayOfWeek(locale);
    }
}

function parseDate(date) {
    if (!date) {
        return null;
    }
    return { year: date.getFullYear(), month: date.getMonth(), day: date.getDate() };
}
function isEqualDate(d1, d2) {
    return d1 && d2 && d1.day === d2.day && d1.month === d2.month && d1.year === d2.year;
}
function getToday() {
    const today = new Date();
    return { year: today.getFullYear(), month: today.getMonth(), day: today.getDate() };
}
function numberOfDaysInMonth(year, month) {
    return new Date(year, month + 1, 0).getDate();
}
// Split array into smaller arrays
function split(arr, size = 7) {
    const arrays = [];
    while (arr.length > 0) {
        arrays.push(arr.splice(0, size));
    }
    return arrays;
}
function isDisabled(d, disabledCallback, min, max) {
    const date = new Date(d.year, d.month, d.day);
    return (disabledCallback && disabledCallback(date)) ||
        (min && compareDate(d, min) < 0) ||
        (max && compareDate(d, max) > 0);
}
function compareDate(d1, d2) {
    if (isEqualDate(d1, d2)) {
        return 0;
    }
    const keys = ['year', 'month', 'day'];
    for (let i = 0; i < 3; i++) {
        const key = keys[i];
        const diff = d1[key] - d2[key];
        if (diff !== 0) {
            return diff > 0 ? 1 : -1;
        }
    }
    return 0;
}
function isSameMonth(d1, d2) {
    return d1.year === d2.year && d1.month === d2.month;
}

const NGL_DATEPICKER_INPUT_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => NglDatepickerInput),
    multi: true
};
const NGL_DATEPICKER_INPUT_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => NglDatepickerInput),
    multi: true
};
class NglDatepickerInput {
    constructor(defaultConfig, locale, element, renderer, cd, hostService, ngZone, focusTrapFactory, adapter) {
        this.element = element;
        this.renderer = renderer;
        this.cd = cd;
        this.hostService = hostService;
        this.ngZone = ngZone;
        this.focusTrapFactory = focusTrapFactory;
        this.adapter = adapter;
        /**
         * Emits when selected date changes.
         */
        this.valueChange = new EventEmitter();
        /**
         * Text for button to open calendar.
         */
        this.selectDateLabel = 'Select a date';
        this.dateDisabled = null;
        this.uid = uniqueId('datepicker-input');
        this._open = new BehaviorSubject(false);
        this._value = null;
        this.onChange = null;
        this.onTouched = () => { };
        this.validatorChange = () => { };
        this.renderer.addClass(this.element.nativeElement, 'slds-form-element');
        this.renderer.addClass(this.element.nativeElement, 'slds-dropdown-trigger');
        this.renderer.addClass(this.element.nativeElement, 'slds-dropdown-trigger_click');
        this.config = Object.assign(Object.assign({}, new NglDatepickerConfig(locale)), defaultConfig);
        this.format = this.config.format;
        this.delimiter = this.config.delimiter;
        this.setPositions(this.config.dropdownAlign);
        this.monthNames = this.config.monthNames;
        this.dayNamesShort = this.config.dayNamesShort;
        this.dayNamesLong = this.config.dayNamesLong;
        this.firstDayOfWeek = this.config.firstDayOfWeek;
        this.showToday = this.config.showToday;
        this.relativeYearFrom = this.config.relativeYearFrom;
        this.relativeYearTo = this.config.relativeYearTo;
        this.openOnInputClick = this.config.openOnInputClick;
        this.todayLabel = this.config.todayLabel;
        this.previousMonthLabel = this.config.previousMonthLabel;
        this.nextMonthLabel = this.config.nextMonthLabel;
        this.patternPlaceholder = this.config.patternPlaceholder;
    }
    /**
     * The date value.
     */
    set value(value) {
        if (value === this._value) {
            return;
        }
        this._value = value;
        if (this.value instanceof Date) {
            this.date = this.value;
            this.formatInputValue();
        }
        else {
            this.updateInputValue(value || '');
        }
    }
    get value() {
        return this._value;
    }
    set required(required) {
        this.isRequired = toBoolean(required);
    }
    set open(open) {
        this._open.next(open);
    }
    get open() {
        return this._open.value;
    }
    validate(c) {
        const value = c.value;
        if (!value) {
            return null;
        }
        if (!(this.value instanceof Date)) {
            return { 'nglDatepickerInput': { invalid: c.value } };
        }
        const date = parseDate(value);
        if (isDisabled(date, this.dateDisabled, parseDate(this.min), parseDate(this.max))) {
            return { 'nglDatepickerInput': { disabled: c.value } };
        }
        return null;
    }
    writeValue(value) {
        this.value = value;
        this.cd.markForCheck();
    }
    registerOnChange(fn) { this.onChange = fn; }
    registerOnTouched(fn) { this.onTouched = fn; }
    registerOnValidatorChange(fn) { this.validatorChange = fn; }
    setDisabledState(disabled) { this.disabled = disabled; }
    onBlur() {
        if (this.value instanceof Date) {
            this.updateInputValue();
        }
        this.onTouched();
    }
    ngOnInit() {
        this._open.subscribe(() => {
            this.setHostClass();
            this.cd.markForCheck();
        });
    }
    ngOnChanges(changes) {
        if (changes.format || changes.delimiter) {
            this.setPattern();
            if (this.value instanceof Date) {
                this.updateInputValue();
            }
        }
        if (changes.dropdownAlign) {
            this.setPositions(this.dropdownAlign);
        }
        if (changes.min || changes.max) {
            this.validatorChange();
        }
        if ((changes.patternPlaceholder || changes.format || changes.delimiter) && this.patternPlaceholder) {
            this.inputEl.setPlaceholder(this.getPattern().toLocaleUpperCase());
        }
        if (changes.disabled) {
            this.inputEl.setDisabled(this.disabled);
        }
    }
    ngOnDestroy() {
        this.closeCalendar(false);
    }
    onKeyboardInput(evt) {
        const keyCode = evt.keyCode;
        if (!this.open && (keyCode === DOWN_ARROW || keyCode === UP_ARROW)) {
            this.openCalendar();
        }
    }
    onInputChange() {
        const value = this.inputEl.element.nativeElement.value;
        const date = this.dateParse(value);
        this.emitSelection(date || value);
    }
    openCalendar() {
        this.open = true;
    }
    onAttach() {
        this.focusTrap = this.focusTrapFactory.create(this.cdkOverlay.overlayRef.overlayElement);
    }
    onDetach() {
        if (this.open) {
            this.closeCalendar();
        }
    }
    closeCalendar(focusInput = true) {
        this.open = false;
        if (this.focusTrap) {
            this.focusTrap.destroy();
            this.focusTrap = null;
        }
        if (focusInput) {
            this.inputEl.element.nativeElement.focus();
        }
    }
    onTriggerClick(origin) {
        if (origin === 'input' && !this.openOnInputClick) {
            return;
        }
        if (!this.open) {
            this.openCalendar();
        }
        else {
            this.closeCalendar(false);
        }
    }
    pickerSelection(date) {
        this.emitSelection(date);
        this.closeCalendar();
    }
    updateDatepickerSize(width, height) {
        this.ngZone.onStable.asObservable().pipe(take(1)).subscribe(() => {
            const { overlayRef } = this.cdkOverlay;
            overlayRef.updateSize({
                minWidth: width,
                minHeight: height + 4,
            });
            overlayRef.updatePosition();
        });
    }
    setPositions(align) {
        this.overlayPositions = [...DEFAULT_DROPDOWN_POSITIONS[align]];
    }
    formatInputValue() {
        const inputValue = this.inputEl.element.nativeElement.value;
        if (!inputValue) {
            this.updateInputValue();
        }
        else {
            const date = this.value;
            const dateNow = this.dateParse(inputValue);
            if (!dateNow || dateNow.getFullYear() !== date.getFullYear() || dateNow.getMonth() !== date.getMonth() || dateNow.getDate() !== date.getDate()) {
                this.updateInputValue();
            }
        }
    }
    updateInputValue(value = this.dateFormat(this.value)) {
        this.renderer.setProperty(this.inputEl.element.nativeElement, 'value', value || '');
    }
    dateParse(value) {
        return this.adapter.parse(value, this.getPattern());
    }
    dateFormat(date) {
        return this.adapter.format(date, this.getPattern());
    }
    getPattern() {
        if (!this.pattern) {
            this.setPattern();
        }
        return this.pattern;
    }
    setPattern() {
        this.pattern = this.adapter.pattern(this.format || this.config.format, this.delimiter || this.config.delimiter);
    }
    emitSelection(value) {
        this.valueChange.emit(value);
        if (this.onChange) {
            this.value = value;
            this.onChange(value);
        }
    }
    setHostClass() {
        this.hostService.updateClass(this.element, {
            [`slds-is-open`]: this.open,
        });
    }
}
NglDatepickerInput.decorators = [
    { type: Component, args: [{
                selector: 'ngl-datepicker-input',
                template: "\n<label *ngIf=\"label\" [nglFormLabel]=\"label\" [attr.for]=\"uid\" [required]=\"isRequired\"></label>\n<div class=\"slds-form-element__control slds-input-has-icon slds-input-has-icon_right\" #formEl cdkOverlayOrigin #overlayOrigin=\"cdkOverlayOrigin\">\n  <ng-content></ng-content>\n  <button class=\"slds-button slds-button_icon slds-input__icon slds-input__icon_right\" type=\"button\" [title]=\"selectDateLabel\" [disabled]=\"disabled\" (click)=\"onTriggerClick('button')\">\n    <svg class=\"slds-button__icon\" nglIconName=\"utility:event\"></svg><span class=\"slds-assistive-text\">{{ selectDateLabel }}</span>\n  </button>\n</div>\n<ng-template cdkConnectedOverlay #cdkOverlay=\"cdkConnectedOverlay\" [cdkConnectedOverlayPositions]=\"overlayPositions\" [cdkConnectedOverlayOrigin]=\"overlayOrigin\" [cdkConnectedOverlayOpen]=\"open\" (nglOverlayScrolledOutsideView)=\"closeCalendar(false)\" (attach)=\"onAttach()\" (detach)=\"onDetach()\">\n  <ngl-datepicker class=\"slds-dropdown\" [attr.aria-hidden]=\"!open\" [date]=\"date\" [monthNames]=\"monthNames\" [dayNamesShort]=\"dayNamesShort\" [dayNamesLong]=\"dayNamesLong\" [firstDayOfWeek]=\"firstDayOfWeek\" [showToday]=\"showToday\" [min]=\"min\" [max]=\"max\" [relativeYearFrom]=\"relativeYearFrom\" [relativeYearTo]=\"relativeYearTo\" [todayLabel]=\"todayLabel\" [previousMonthLabel]=\"previousMonthLabel\" [nextMonthLabel]=\"nextMonthLabel\" [dateDisabled]=\"dateDisabled\" (dateChange)=\"pickerSelection($event)\" (nglClickOutside)=\"closeCalendar(false)\" [nglClickOutsideIgnore]=\"formEl\"></ngl-datepicker>\n</ng-template>",
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [NGL_DATEPICKER_INPUT_VALUE_ACCESSOR, NGL_DATEPICKER_INPUT_VALIDATOR, HostService]
            },] }
];
NglDatepickerInput.ctorParameters = () => [
    { type: NglDatepickerConfig, decorators: [{ type: Optional }, { type: Inject, args: [NGL_DATEPICKER_CONFIG,] }] },
    { type: String, decorators: [{ type: Inject, args: [LOCALE_ID,] }] },
    { type: ElementRef },
    { type: Renderer2 },
    { type: ChangeDetectorRef },
    { type: HostService },
    { type: NgZone },
    { type: FocusTrapFactory },
    { type: NglDateAdapter }
];
NglDatepickerInput.propDecorators = {
    label: [{ type: Input }],
    format: [{ type: Input }],
    delimiter: [{ type: Input }],
    disabled: [{ type: Input }],
    dropdownAlign: [{ type: Input }],
    value: [{ type: Input }],
    openOnInputClick: [{ type: Input }],
    valueChange: [{ type: Output }],
    cdkOverlay: [{ type: ViewChild, args: ['cdkOverlay',] }],
    min: [{ type: Input }],
    max: [{ type: Input }],
    required: [{ type: Input }],
    selectDateLabel: [{ type: Input }],
    patternPlaceholder: [{ type: Input }],
    monthNames: [{ type: Input }],
    dayNamesShort: [{ type: Input }],
    dayNamesLong: [{ type: Input }],
    firstDayOfWeek: [{ type: Input }],
    showToday: [{ type: Input }],
    dateDisabled: [{ type: Input }],
    relativeYearFrom: [{ type: Input }],
    relativeYearTo: [{ type: Input }],
    todayLabel: [{ type: Input }],
    previousMonthLabel: [{ type: Input }],
    nextMonthLabel: [{ type: Input }]
};
__decorate([
    InputBoolean()
], NglDatepickerInput.prototype, "disabled", void 0);
__decorate([
    InputBoolean()
], NglDatepickerInput.prototype, "openOnInputClick", void 0);
__decorate([
    InputBoolean()
], NglDatepickerInput.prototype, "patternPlaceholder", void 0);
__decorate([
    InputBoolean()
], NglDatepickerInput.prototype, "showToday", void 0);

class NglDay {
    constructor(el) {
        this.el = el;
    }
    get tabindex() {
        return this.isActive ? 0 : -1;
    }
    focus() {
        this.el.nativeElement.focus();
    }
}
NglDay.decorators = [
    { type: Directive, args: [{
                selector: 'td[nglDay]',
            },] }
];
NglDay.ctorParameters = () => [
    { type: ElementRef }
];
NglDay.propDecorators = {
    date: [{ type: Input, args: ['nglDay',] }],
    nglDayDisabled: [{ type: HostBinding, args: ['class.slds-disabled-text',] }, { type: HostBinding, args: ['attr.aria-disabled',] }, { type: Input }],
    nglDaySelected: [{ type: HostBinding, args: ['class.slds-is-selected',] }, { type: HostBinding, args: ['attr.aria-selected',] }, { type: Input }],
    isActive: [{ type: Input }],
    tabindex: [{ type: HostBinding, args: ['attr.tabindex',] }]
};

class NglDatepickerMonth {
    constructor(ngZone) {
        this.ngZone = ngZone;
        this.dateDisabled = null;
        this.selectDate = new EventEmitter();
    }
    indexTrackBy(index) {
        return index;
    }
    dateTrackBy(index, { year, month, day }) {
        return `${day}-${month}-${year}`;
    }
    onSelect(date) {
        if (date.disabled)
            return;
        this.selectDate.emit(date);
    }
    ngOnChanges(changes) {
        if (changes.year || changes.month || changes.firstDayOfWeek) {
            this.renderView();
            return;
        }
        if (changes.day) {
            this.updateActive();
        }
        if (changes.selected) {
            this.updateSelected();
        }
        if (changes.minDate || changes.maxDate || changes.dateDisabled) {
            this.updateDisabled();
        }
    }
    focusActiveDay() {
        this.ngZone.runOutsideAngular(() => {
            this.ngZone.onStable.asObservable().pipe(take(1)).subscribe(() => {
                const active = this.days.find((d) => d.isActive);
                if (active) {
                    active.focus();
                }
            });
        });
    }
    renderView() {
        const days = this.daysInMonth(this.year, this.month);
        Array.prototype.unshift.apply(days, this.daysInPreviousMonth(this.year, this.month));
        const nextMonth = this.daysInNextMonth(this.year, this.month + 1, days.length);
        if (nextMonth) {
            Array.prototype.push.apply(days, nextMonth);
        }
        this.weeks = split(days);
    }
    daysInMonth(year, month) {
        const last = numberOfDaysInMonth(year, month);
        return this.getDayObjects(year, month, 1, last);
    }
    daysInPreviousMonth(year, month) {
        const firstIndex = (new Date(year, month, 1)).getDay();
        const last = new Date(year, month, 0).getDate();
        const numDays = (7 + firstIndex - this.firstDayOfWeek) % 7;
        return this.getDayObjects(year, month - 1, last - numDays + 1, last, false);
    }
    daysInNextMonth(year, month, numOfDays) {
        if (numOfDays % 7 === 0) {
            return [];
        }
        return this.getDayObjects(year, month, 1, 7 - (numOfDays % 7), false);
    }
    getDayObjects(year, month, from, to, isCurrentMonth = true) {
        const today = getToday();
        const days = [];
        for (let day = from; day <= to; day++) {
            const d = {
                year,
                month,
                day,
                isCurrentMonth,
                today: isEqualDate(today, { year, month, day }),
            };
            d.active = this.isActive(d);
            d.selected = this.isSelected(d);
            d.disabled = this.isDisabled(d);
            days.push(d);
        }
        return days;
    }
    updateActive() {
        this.weeks.forEach((days) => {
            days.forEach(day => {
                day.active = this.isActive(day);
            });
        });
    }
    isActive(day) {
        return day.isCurrentMonth && day.day === this.day;
    }
    updateSelected() {
        this.weeks.forEach((days) => {
            days.forEach((day) => {
                day.selected = this.isSelected(day);
            });
        });
    }
    isSelected(day) {
        return isEqualDate(this.selected, day);
    }
    updateDisabled() {
        this.weeks.forEach((days) => {
            days.forEach(day => {
                day.disabled = this.isDisabled(day);
            });
        });
    }
    /** Date filter for the month */
    isDisabled(d) {
        return !d.isCurrentMonth || isDisabled(d, this.dateDisabled, this.minDate, this.maxDate);
    }
}
NglDatepickerMonth.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: '[nglDatepickerMonth]',
                template: "\n<tr *ngFor=\"let week of weeks; trackBy:indexTrackBy\">\n  <td *ngFor=\"let date of week; trackBy:dateTrackBy\" [class.slds-is-today]=\"date.today\" [isActive]=\"date.active\" [nglDay]=\"date\" [nglDaySelected]=\"date.selected\" [nglDayDisabled]=\"date.disabled\" (click)=\"onSelect(date)\" role=\"gridcell\"><span class=\"slds-day\">{{ date.day }}</span></td>\n</tr>",
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
NglDatepickerMonth.ctorParameters = () => [
    { type: NgZone }
];
NglDatepickerMonth.propDecorators = {
    selected: [{ type: Input }],
    year: [{ type: Input }],
    month: [{ type: Input }],
    day: [{ type: Input }],
    firstDayOfWeek: [{ type: Input }],
    minDate: [{ type: Input }],
    maxDate: [{ type: Input }],
    dateDisabled: [{ type: Input }],
    selectDate: [{ type: Output }],
    days: [{ type: ViewChildren, args: [NglDay,] }]
};

const KEYBOARD_MOVES = {
    [UP_ARROW]: ['Move', -7],
    [LEFT_ARROW]: ['Move', -1],
    [DOWN_ARROW]: ['Move', 7],
    [RIGHT_ARROW]: ['Move', 1],
    [PAGE_UP]: ['MoveMonth', -1],
    [PAGE_DOWN]: ['MoveMonth', 1],
    [HOME]: ['MoveTo', 1],
    [END]: ['MoveTo', 31],
};
class NglDatepicker {
    constructor(dtInput, defaultConfig, locale, element) {
        this.dtInput = dtInput;
        this.element = element;
        this.dateDisabled = null;
        this.dateChange = new EventEmitter();
        this.uid = uniqueId('datepicker');
        const config = Object.assign(Object.assign({}, new NglDatepickerConfig(locale)), defaultConfig);
        this.monthNames = config.monthNames;
        this.dayNamesShort = config.dayNamesShort;
        this.dayNamesLong = config.dayNamesLong;
        this.firstDayOfWeek = config.firstDayOfWeek;
        this.showToday = config.showToday;
        this.relativeYearFrom = config.relativeYearFrom;
        this.relativeYearTo = config.relativeYearTo;
        this.todayLabel = config.todayLabel;
        this.previousMonthLabel = config.previousMonthLabel;
        this.nextMonthLabel = config.nextMonthLabel;
    }
    set date(date) {
        this._date = parseDate(date);
    }
    ngOnInit() {
        this.setMinMaxDates();
        this.setCurrent(this._date || getToday());
    }
    ngOnChanges(changes) {
        if ((changes.date && changes.date.isFirstChange()) ||
            changes.relativeYearFrom || changes.relativeYearTo ||
            changes.min || changes.max) {
            this.setMinMaxDates();
        }
        if (changes.date) {
            this.setCurrent(this._date);
        }
    }
    moveYear(year) {
        this.setCurrent({ year: +year });
    }
    moveMonth(diff) {
        this.moveCalendar('MoveMonth', diff);
    }
    keyboardHandler(evt) {
        const keyCode = evt.keyCode;
        if (keyCode === ENTER) {
            trapEvent(evt);
            if (!this.isDisabledDate(this.current)) {
                this.select(this.current);
            }
            return;
        }
        const move = KEYBOARD_MOVES[keyCode];
        if (!move) {
            return;
        }
        // Handle keyboard event inside datepicker
        trapEvent(evt);
        const [code, param] = move;
        this.moveCalendar(code, param);
        this.focusActiveDay();
    }
    select(date) {
        if (date.disabled) {
            return;
        }
        const { year, month, day } = date;
        this.dateChange.emit(new Date(year, month, day));
    }
    selectToday() {
        const today = getToday();
        if (this.isDisabledDate(today)) {
            this.setCurrent(today);
        }
        else {
            this.dateChange.emit(new Date());
        }
    }
    ngAfterViewInit() {
        if (this.dtInput) {
            const el = this.element.nativeElement;
            this.dtInput.updateDatepickerSize(el.offsetWidth, el.offsetHeight);
            this.focusActiveDay();
        }
    }
    /** Whether the previous period button is disabled. */
    previousDisabled() {
        return this.minDate && isSameMonth(this.current, this.minDate);
    }
    /** Whether the next period button is disabled. */
    nextDisabled() {
        return this.maxDate && isSameMonth(this.current, this.maxDate);
    }
    focusActiveDay() {
        this.monthView.focusActiveDay();
    }
    moveCalendar(code, param) {
        const { year, month, day } = this.current;
        const date = new Date(year, month, day, 12);
        if (code === 'Move') {
            date.setDate(day + (+param));
            this.setCurrent({ year: date.getFullYear(), month: date.getMonth(), day: date.getDate() });
        }
        else if (code === 'MoveMonth') {
            date.setMonth(month + (+param), 1);
            this.setCurrent({ year: date.getFullYear(), month: date.getMonth(), day });
        }
        else if (code === 'MoveTo') {
            this.setCurrent({ day: +param });
        }
    }
    setCurrent(d, doRender = true) {
        this.current = Object.assign(Object.assign({}, this.current), d);
        // Keep current inside minimum/maximum range
        if (compareDate(this.current, this.minDate) < 0) {
            this.current = this.minDate;
        }
        else if (compareDate(this.current, this.maxDate) > 0) {
            this.current = this.maxDate;
        }
        if (doRender) {
            this.render();
        }
    }
    render() {
        const { year, month, day } = this.current;
        this.monthLabel = this.monthNames[month];
        // Keep current day inside limits of this month
        this.setCurrent({ day: Math.min(day, numberOfDaysInMonth(year, month)) }, false);
    }
    /** Date filter for the month */
    isDisabledDate(date) {
        return isDisabled(date, this.dateDisabled, this.minDate, this.maxDate);
    }
    setMinMaxDates() {
        const { year } = getToday();
        this.minDate = this.min ? parseDate(this.min) : { year: year + this.relativeYearFrom, month: 0, day: 1 };
        this.maxDate = this.max ? parseDate(this.max) : { year: year + this.relativeYearTo, month: 11, day: 31 };
    }
}
NglDatepicker.decorators = [
    { type: Component, args: [{
                selector: 'ngl-datepicker',
                template: "\n<div class=\"slds-datepicker__filter slds-grid\">\n  <div class=\"slds-datepicker__filter_month slds-grid slds-grid_align-spread slds-grow\">\n    <div class=\"slds-align-middle\">\n      <button class=\"slds-button slds-button_icon-container\" type=\"button\" (click)=\"moveMonth(-1)\" [disabled]=\"previousDisabled()\" [title]=\"previousMonthLabel\">\n        <svg class=\"slds-button__icon\" nglIconName=\"left\"></svg><span class=\"slds-assistive-text\">{{ previousMonthLabel }}</span>\n      </button>\n    </div>\n    <h2 class=\"slds-align-middle\" [id]=\"uid + '_month'\" aria-live=\"assertive\" aria-atomic=\"true\">{{ monthLabel }}</h2>\n    <div class=\"slds-align-middle\">\n      <button class=\"slds-button slds-button_icon-container\" type=\"button\" (click)=\"moveMonth(1)\" [disabled]=\"nextDisabled()\" [title]=\"nextMonthLabel\">\n        <svg class=\"slds-button__icon\" nglIconName=\"right\"></svg><span class=\"slds-assistive-text\">{{ nextMonthLabel }}</span>\n      </button>\n    </div>\n  </div>\n  <ngl-date-year class=\"slds-shrink-none\" [year]=\"current.year\" [from]=\"minDate\" [to]=\"maxDate\" (yearChange)=\"moveYear($event)\"></ngl-date-year>\n</div>\n<table class=\"datepicker__month\" role=\"grid\" [attr.aria-labelledby]=\"uid + '_month'\" (keydown)=\"keyboardHandler($event)\">\n  <thead>\n    <tr nglWeekdays [firstDayOfWeek]=\"firstDayOfWeek\" [dayNamesShort]=\"dayNamesShort\" [dayNamesLong]=\"dayNamesLong\"></tr>\n  </thead>\n  <tbody *ngIf=\"current\" nglDatepickerMonth [year]=\"current.year\" [month]=\"current.month\" [day]=\"current.day\" [selected]=\"_date\" [firstDayOfWeek]=\"firstDayOfWeek\" [minDate]=\"minDate\" [maxDate]=\"maxDate\" [dateDisabled]=\"dateDisabled\" (selectDate)=\"select($event)\"></tbody>\n</table>\n<button class=\"slds-button slds-align_absolute-center slds-text-link\" *ngIf=\"showToday\" (click)=\"selectToday()\">{{ todayLabel }}</button>",
                changeDetection: ChangeDetectionStrategy.OnPush,
                host: {
                    '[class.slds-datepicker]': 'true',
                },
                styles: [`:host { display: block; }`]
            },] }
];
NglDatepicker.ctorParameters = () => [
    { type: NglDatepickerInput, decorators: [{ type: Optional }, { type: Inject, args: [NglDatepickerInput,] }] },
    { type: NglDatepickerConfig, decorators: [{ type: Optional }, { type: Inject, args: [NGL_DATEPICKER_CONFIG,] }] },
    { type: String, decorators: [{ type: Inject, args: [LOCALE_ID,] }] },
    { type: ElementRef }
];
NglDatepicker.propDecorators = {
    monthNames: [{ type: Input }],
    dayNamesShort: [{ type: Input }],
    dayNamesLong: [{ type: Input }],
    dateDisabled: [{ type: Input }],
    date: [{ type: Input }],
    dateChange: [{ type: Output }],
    showToday: [{ type: Input }],
    firstDayOfWeek: [{ type: Input }],
    relativeYearFrom: [{ type: Input }],
    relativeYearTo: [{ type: Input }],
    min: [{ type: Input }],
    max: [{ type: Input }],
    todayLabel: [{ type: Input }],
    previousMonthLabel: [{ type: Input }],
    nextMonthLabel: [{ type: Input }],
    monthView: [{ type: ViewChild, args: [NglDatepickerMonth,] }]
};
__decorate([
    InputBoolean()
], NglDatepicker.prototype, "showToday", void 0);
__decorate([
    InputNumber()
], NglDatepicker.prototype, "firstDayOfWeek", void 0);

class NglDatepickerInputDirective {
    constructor(element, renderer, datepickerInput) {
        this.element = element;
        this.renderer = renderer;
        this.datepickerInput = datepickerInput;
        renderer.addClass(element.nativeElement, 'slds-input');
        renderer.setAttribute(element.nativeElement, 'autocomplete', 'off');
        renderer.setAttribute(element.nativeElement, 'id', this.datepickerInput.uid);
        this.datepickerInput.inputEl = this;
    }
    onClick() {
        this.datepickerInput.onTriggerClick('input');
    }
    onKeydown(evt) {
        this.datepickerInput.onKeyboardInput(evt);
    }
    onInput() {
        setTimeout(() => this.datepickerInput.onInputChange(), 0);
    }
    onBlur() {
        this.datepickerInput.onBlur();
    }
    setPlaceholder(placeholder) {
        this.renderer.setAttribute(this.element.nativeElement, 'placeholder', placeholder);
    }
    setDisabled(disabled) {
        this.renderer.setProperty(this.element.nativeElement, 'disabled', disabled);
    }
    ngOnDestroy() {
        this.datepickerInput.inputEl = null;
    }
}
NglDatepickerInputDirective.decorators = [
    { type: Directive, args: [{
                selector: 'input[nglDatepickerInput]',
                exportAs: 'nglDatepickerInput'
            },] }
];
NglDatepickerInputDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: NglDatepickerInput }
];
NglDatepickerInputDirective.propDecorators = {
    onClick: [{ type: HostListener, args: ['click',] }],
    onKeydown: [{ type: HostListener, args: ['keydown', ['$event'],] }],
    onInput: [{ type: HostListener, args: ['input',] }],
    onBlur: [{ type: HostListener, args: ['blur',] }]
};

class NglDatepickerWeekdays {
    constructor() {
        this.weekdays = [];
    }
    ngOnChanges(changes) {
        this.weekdays = [];
        for (let i = 0; i < 7; i++) {
            const offset = (this.firstDayOfWeek + i) % 7;
            this.weekdays.push({
                id: `weekday-${i}`,
                label: this.dayNamesShort[offset],
                title: this.dayNamesLong[offset],
            });
        }
    }
}
NglDatepickerWeekdays.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'tr[nglWeekdays]',
                template: "\n<th *ngFor=\"let day of weekdays\" [id]=\"day.id\" scope=\"col\"><abbr [title]=\"day.title\">{{day.label}}</abbr></th>",
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
NglDatepickerWeekdays.propDecorators = {
    dayNamesShort: [{ type: Input }],
    dayNamesLong: [{ type: Input }],
    firstDayOfWeek: [{ type: Input }]
};

class NglDatepickerYear {
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

const EXPORTS = [
    NglDatepicker, NglDatepickerInput, NglDatepickerInputDirective,
];
class NglDatepickersModule {
}
NglDatepickersModule.decorators = [
    { type: NgModule, args: [{
                declarations: [...EXPORTS, NglDay, NglDatepickerWeekdays, NglDatepickerYear, NglDatepickerMonth],
                exports: EXPORTS,
                imports: [
                    CommonModule,
                    FormsModule,
                    NglIconsModule,
                    NglInternalOutletModule,
                    OverlayModule,
                    NglClickOutsideModule,
                    NglOverlayModule,
                    NglFormsModule
                ],
                providers: [NglDateAdapter],
            },] }
];

class BaseDynamicIconComponent {
}
BaseDynamicIconComponent.decorators = [
    { type: Directive }
];
BaseDynamicIconComponent.propDecorators = {
    alternativeText: [{ type: Input }]
};

class NglDynamicIcon extends BaseDynamicIconComponent {
}
NglDynamicIcon.decorators = [
    { type: Component, args: [{
                selector: 'ngl-dynamic-icon',
                template: "\n<ng-container [ngSwitch]=\"type\">\n  <ngl-dynamic-icon-ellie *ngSwitchCase=\"'ellie'\" [alternativeText]=\"alternativeText\"></ngl-dynamic-icon-ellie>\n  <ngl-dynamic-icon-eq *ngSwitchCase=\"'eq'\" [option]=\"option\" [alternativeText]=\"alternativeText\"></ngl-dynamic-icon-eq>\n  <ngl-dynamic-icon-score *ngSwitchCase=\"'score'\" [option]=\"option\" [alternativeText]=\"alternativeText\"></ngl-dynamic-icon-score>\n  <ngl-dynamic-icon-waffle *ngSwitchCase=\"'waffle'\" [alternativeText]=\"alternativeText\"></ngl-dynamic-icon-waffle>\n</ng-container>",
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
NglDynamicIcon.propDecorators = {
    type: [{ type: Input }],
    option: [{ type: Input }]
};

class NglDynamicIconEllie extends BaseDynamicIconComponent {
}
NglDynamicIconEllie.decorators = [
    { type: Component, args: [{
                selector: 'ngl-dynamic-icon-ellie',
                template: "<span class=\"slds-icon-ellie slds-is-animated\">\n  <svg viewbox=\"0 0 280 14\" aria-hidden=\"true\">\n    <circle cx=\"7\" cy=\"7\" r=\"4\"></circle>\n    <circle cx=\"7\" cy=\"7\" r=\"3\"></circle>\n    <circle cx=\"21\" cy=\"7\" r=\"4\"></circle>\n    <circle cx=\"21\" cy=\"7\" r=\"3\"></circle>\n    <circle cx=\"35\" cy=\"7\" r=\"4\"></circle>\n    <circle cx=\"35\" cy=\"7\" r=\"3\"></circle>\n    <circle cx=\"49\" cy=\"7\" r=\"4\"></circle>\n    <circle cx=\"49\" cy=\"7\" r=\"3\"></circle>\n    <circle cx=\"63\" cy=\"7\" r=\"4\"></circle>\n    <circle cx=\"63\" cy=\"7\" r=\"3\"></circle>\n    <circle cx=\"77\" cy=\"7\" r=\"4\"></circle>\n    <circle cx=\"77\" cy=\"7\" r=\"3\"></circle>\n    <circle cx=\"91\" cy=\"7\" r=\"4\"></circle>\n    <circle cx=\"91\" cy=\"7\" r=\"3\"></circle>\n    <circle cx=\"105\" cy=\"7\" r=\"4\"></circle>\n    <circle cx=\"105\" cy=\"7\" r=\"3\"></circle>\n    <circle cx=\"119\" cy=\"7\" r=\"4\"></circle>\n    <circle cx=\"119\" cy=\"7\" r=\"3\"></circle>\n    <circle cx=\"133\" cy=\"7\" r=\"4\"></circle>\n    <circle cx=\"133\" cy=\"7\" r=\"3\"></circle>\n    <circle cx=\"147\" cy=\"7\" r=\"4\"></circle>\n    <circle cx=\"147\" cy=\"7\" r=\"3\"></circle>\n    <circle cx=\"161\" cy=\"7\" r=\"4\"></circle>\n    <circle cx=\"161\" cy=\"7\" r=\"3\"></circle>\n    <circle cx=\"175\" cy=\"7\" r=\"4\"></circle>\n    <circle cx=\"175\" cy=\"7\" r=\"3\"></circle>\n    <circle cx=\"189\" cy=\"7\" r=\"4\"></circle>\n    <circle cx=\"189\" cy=\"7\" r=\"3\"></circle>\n    <circle cx=\"203\" cy=\"7\" r=\"4\"></circle>\n    <circle cx=\"203\" cy=\"7\" r=\"3\"></circle>\n    <circle cx=\"217\" cy=\"7\" r=\"4\"></circle>\n    <circle cx=\"217\" cy=\"7\" r=\"3\"></circle>\n    <circle cx=\"231\" cy=\"7\" r=\"4\"></circle>\n    <circle cx=\"231\" cy=\"7\" r=\"3\"></circle>\n    <circle cx=\"245\" cy=\"7\" r=\"4\"></circle>\n    <circle cx=\"245\" cy=\"7\" r=\"3\"></circle>\n    <circle cx=\"259\" cy=\"7\" r=\"4\"></circle>\n    <circle cx=\"259\" cy=\"7\" r=\"3\"></circle>\n    <circle cx=\"273\" cy=\"7\" r=\"4\"></circle>\n    <circle cx=\"273\" cy=\"7\" r=\"3\"></circle>\n  </svg><span class=\"slds-assistive-text\" *ngIf=\"alternativeText\">{{alternativeText}}</span></span>",
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];

class NglDynamicIconEq extends BaseDynamicIconComponent {
    set option(option) {
        this._option = option || 'play';
    }
    get option() {
        return this._option;
    }
    isAnimated() {
        return this.option !== 'stop';
    }
}
NglDynamicIconEq.decorators = [
    { type: Component, args: [{
                selector: 'ngl-dynamic-icon-eq',
                template: "\n<div class=\"slds-icon-eq\" [class.slds-is-animated]=\"isAnimated()\">\n  <div class=\"slds-icon-eq__bar\"></div>\n  <div class=\"slds-icon-eq__bar\"></div>\n  <div class=\"slds-icon-eq__bar\"></div><span class=\"slds-assistive-text\" *ngIf=\"alternativeText\">{{alternativeText}}</span>\n</div>",
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
NglDynamicIconEq.propDecorators = {
    option: [{ type: Input }]
};

class NglDynamicIconScore extends BaseDynamicIconComponent {
    set option(option) {
        this._option = option || 'positive';
    }
    get option() {
        return this._option;
    }
}
NglDynamicIconScore.decorators = [
    { type: Component, args: [{
                selector: 'ngl-dynamic-icon-score',
                template: "<span class=\"slds-icon-score\" [attr.data-slds-state]=\"option\">\n  <svg class=\"slds-icon-score__positive\" viewBox=\"0 0 5 5\" aria-hidden=\"true\">\n    <circle cx=\"50%\" cy=\"50%\" r=\"1.875\"></circle>\n  </svg>\n  <svg class=\"slds-icon-score__negative\" viewBox=\"0 0 5 5\" aria-hidden=\"true\">\n    <circle cx=\"50%\" cy=\"50%\" r=\"1.875\"></circle>\n  </svg><span class=\"slds-assistive-text\" *ngIf=\"alternativeText\">{{alternativeText}}</span></span>",
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
NglDynamicIconScore.propDecorators = {
    option: [{ type: Input }]
};

class NglDynamicIconWaffle extends BaseDynamicIconComponent {
}
NglDynamicIconWaffle.decorators = [
    { type: Component, args: [{
                selector: 'ngl-dynamic-icon-waffle',
                template: "\n<button class=\"slds-button slds-icon-waffle_container\" type=\"button\"><span class=\"slds-icon-waffle\"><span class=\"slds-r1\"></span><span class=\"slds-r2\"></span><span class=\"slds-r3\"></span><span class=\"slds-r4\"></span><span class=\"slds-r5\"></span><span class=\"slds-r6\"></span><span class=\"slds-r7\"></span><span class=\"slds-r8\"></span><span class=\"slds-r9\"></span></span><span class=\"slds-assistive-text\" *ngIf=\"alternativeText\">{{alternativeText}}</span></button>",
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];

const NGL_DYNAMIC_ICON_DIRECTIVES = [
    NglDynamicIcon,
    NglDynamicIconEllie,
    NglDynamicIconEq,
    NglDynamicIconScore,
    NglDynamicIconWaffle,
];
class NglDynamicIconsModule {
}
NglDynamicIconsModule.decorators = [
    { type: NgModule, args: [{
                declarations: NGL_DYNAMIC_ICON_DIRECTIVES,
                exports: NGL_DYNAMIC_ICON_DIRECTIVES,
                imports: [CommonModule],
            },] }
];

class NglFile {
    constructor(element, renderer) {
        this.element = element;
        this.renderer = renderer;
        this.renderer.addClass(this.element.nativeElement, 'slds-file');
        this.renderer.addClass(this.element.nativeElement, 'slds-file_card');
    }
}
NglFile.decorators = [
    { type: Component, args: [{
                selector: 'ngl-file',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: "\n<figure>\n  <ng-content></ng-content>\n  <figcaption class=\"slds-file__title slds-file__title_card\" *ngIf=\"text\">\n    <div class=\"slds-media slds-media_small slds-media_center\">\n      <div class=\"slds-media__figure slds-line-height_reset\" *ngIf=\"iconName\">\n        <ngl-icon [iconName]=\"iconName\"></ngl-icon>\n      </div>\n      <div class=\"slds-media__body\"><span class=\"slds-file__text slds-truncate\" [title]=\"text\" [nglInternalOutlet]=\"text\"></span></div>\n    </div>\n  </figcaption>\n</figure>"
            },] }
];
NglFile.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
NglFile.propDecorators = {
    text: [{ type: HostBinding, args: ['class.slds-has-title',] }, { type: Input }],
    iconName: [{ type: Input }]
};

class NglFileCrop {
    constructor(element, renderer) {
        this.element = element;
        this.renderer = renderer;
        this.cropClass = 'slds-file__crop';
        // this.renderer.addClass(this.element.nativeElement, this.cropClass);
    }
    set nglFileCrop(ratio) {
        const nativeElement = this.element.nativeElement;
        if (this.currentRatio) {
            this.renderer.removeClass(nativeElement, `${this.cropClass}`);
            this.renderer.removeClass(nativeElement, `${this.cropClass}_${this.currentRatio}`);
        }
        if (ratio) {
            this.renderer.addClass(nativeElement, `${this.cropClass}`);
            this.renderer.addClass(nativeElement, `${this.cropClass}_${ratio}`);
        }
        this.currentRatio = ratio;
    }
}
NglFileCrop.decorators = [
    { type: Directive, args: [{
                selector: '[nglFileCrop]',
            },] }
];
NglFileCrop.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
NglFileCrop.propDecorators = {
    nglFileCrop: [{ type: Input }]
};

class NglFilesModule {
}
NglFilesModule.decorators = [
    { type: NgModule, args: [{
                declarations: [NglFile, NglFileCrop],
                exports: [NglFile, NglFileCrop],
                imports: [CommonModule, NglIconsModule, NglInternalOutletModule],
            },] }
];

const FILE_EXT_REG = /(^[.]\w*)$/m;
function isFileTypeAccepted(accept, file) {
    if (typeof accept === 'string') {
        accept = accept.split(',');
    }
    return accept.some((acc) => {
        if (FILE_EXT_REG.test(acc)) {
            return acc === `.${file.name.split('.').pop()}`;
        }
        else {
            return (new RegExp(acc.replace('*', '.\*'))).test(file.type);
        }
    });
}

class NglFileUpload {
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

class NglFileUploadModule {
}
NglFileUploadModule.decorators = [
    { type: NgModule, args: [{
                declarations: [NglFileUpload],
                exports: [NglFileUpload],
                imports: [CommonModule, NglIconsModule, NglInternalOutletModule],
            },] }
];

class NglInputElement {
    constructor(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.ɵRequiredSubject = new BehaviorSubject(false);
        if (!this.el.nativeElement.id) {
            this.renderer.setAttribute(this.el.nativeElement, 'id', uniqueId('input'));
        }
    }
    set required(required) {
        this.ɵRequiredSubject.next(toBoolean(required));
    }
    get id() {
        return this.el.nativeElement.id;
    }
}
NglInputElement.decorators = [
    { type: Directive, args: [{
                selector: 'input[ngl]:not([type=checkbox]):not([type=radio])',
                host: {
                    '[class.slds-input]': 'true',
                }
            },] }
];
NglInputElement.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
NglInputElement.propDecorators = {
    describedBy: [{ type: HostBinding, args: ['attr.aria-describedby',] }],
    required: [{ type: Input }]
};

class NglInput {
    constructor(cd) {
        this.cd = cd;
    }
    get hasError() {
        return toBoolean(this.error);
    }
    get errorId() {
        return `error_${this._uid}`;
    }
    ngOnChanges() {
        this.input.describedBy = this.error ? this.errorId : null;
    }
    ngAfterContentInit() {
        if (!this.input) {
            throw Error(`[ng-lightning] Couldn't find an <input> with [ngl] attribute inside NglInput`);
        }
        this.ɵRequiredSubscription = this.input.ɵRequiredSubject.subscribe((required) => {
            this.required = required;
            this.cd.detectChanges();
        });
        this._uid = this.input.id;
        this.cd.detectChanges();
    }
    ngOnDestroy() {
        if (this.ɵRequiredSubscription) {
            this.ɵRequiredSubscription.unsubscribe();
            this.ɵRequiredSubscription = null;
        }
    }
}
NglInput.decorators = [
    { type: Component, args: [{
                selector: 'ngl-input,[ngl-input]',
                template: "\n<label [nglFormLabel]=\"label\" [attr.for]=\"_uid\" [required]=\"required\"></label>\n<ngl-form-help *ngIf=\"fieldLevelHelpTooltip\" [content]=\"fieldLevelHelpTooltip\"></ngl-form-help>\n<div class=\"slds-form-element__control\">\n  <ng-content></ng-content>\n</div>\n<div class=\"slds-form-element__help\" *ngIf=\"hasError\" [id]=\"errorId\" [nglInternalOutlet]=\"error\"></div>",
                changeDetection: ChangeDetectionStrategy.OnPush,
                host: {
                    '[class.slds-form-element]': 'true',
                }
            },] }
];
NglInput.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
NglInput.propDecorators = {
    input: [{ type: ContentChild, args: [NglInputElement, { static: true },] }],
    label: [{ type: Input }],
    error: [{ type: Input }],
    stacked: [{ type: Input }],
    fieldLevelHelpTooltip: [{ type: Input }],
    hasError: [{ type: HostBinding, args: ['class.slds-has-error',] }]
};
__decorate([
    InputBoolean()
], NglInput.prototype, "stacked", void 0);

const DIRECTIVES$4 = [
    NglInput,
    NglInputElement,
];
class NglInputModule {
}
NglInputModule.decorators = [
    { type: NgModule, args: [{
                declarations: DIRECTIVES$4,
                exports: DIRECTIVES$4,
                imports: [CommonModule, NglFormsModule, NglInternalOutletModule],
            },] }
];

class NglDropdownItem {
    constructor(element) {
        this.element = element;
        this.isFocused = false;
    }
    onFocus() {
        this.isFocused = true;
    }
    onBlur() {
        this.isFocused = false;
    }
    hasFocus() {
        return this.isFocused;
    }
    focus() {
        this.element.nativeElement.focus();
    }
}
NglDropdownItem.decorators = [
    { type: Directive, args: [{
                selector: '[nglDropdownItem]',
                host: {
                    'tabindex': '0',
                },
            },] }
];
NglDropdownItem.ctorParameters = () => [
    { type: ElementRef }
];
NglDropdownItem.propDecorators = {
    onFocus: [{ type: HostListener, args: ['focus',] }],
    onBlur: [{ type: HostListener, args: ['blur',] }]
};

const openEventEmitter = new EventEmitter();
class NglDropdown {
    constructor(element, renderer) {
        this.element = element;
        this.renderer = renderer;
        this.handlePageEvents = true;
        this.isOpenChange = new EventEmitter();
        this.triggerFocusEventEmitter = new EventEmitter();
        this._isOpen = false;
        this.globalClickEventUnsubscriber = null;
        this.clickEventUnsubscriber = null;
    }
    set isOpen(isOpen) {
        this._isOpen = toBoolean(isOpen);
        if (this.isOpen) {
            this.clearGlobalClickTimeout();
            this.globalClickTimeout = setTimeout(() => {
                if (this.handlePageEvents) {
                    this._subscribeToClickEvents();
                }
            });
            this.renderer.addClass(this.element.nativeElement, 'slds-is-open');
        }
        else {
            this._unsubscribeFromClickEvents();
            this.renderer.removeClass(this.element.nativeElement, 'slds-is-open');
        }
        this.renderer.setAttribute(this.element.nativeElement, 'aria-expanded', `${this.isOpen}`);
    }
    get isOpen() {
        return this._isOpen;
    }
    onKeydownClose(eventName) {
        this.toggle(false);
        if (eventName === 'esc') {
            this.triggerFocusEventEmitter.emit(null);
        }
    }
    onKeydownFocusNext($event, direction) {
        $event.preventDefault();
        this.focusItem(direction);
    }
    ngOnInit() {
        this.openEventSubscription = openEventEmitter.subscribe(this.handleDropdownOpenEvent.bind(this));
    }
    ngOnDestroy() {
        this.clearGlobalClickTimeout();
        if (this.openEventSubscription) {
            this.openEventSubscription.unsubscribe();
        }
        this._unsubscribeFromClickEvents();
    }
    toggle(toggle = !this.isOpen, focus = false) {
        if (toggle === this.isOpen) {
            return;
        }
        this.isOpenChange.emit(toggle);
        if (toggle) {
            openEventEmitter.emit(this);
            if (focus) {
                this.focusItem('next');
            }
        }
    }
    handleGlobalClickEvent($event) {
        if (!this.handlePageEvents || $event.$nglStop) {
            return;
        }
        this.toggle(false);
    }
    _subscribeToClickEvents() {
        this._unsubscribeFromClickEvents();
        // Prevent document listener to close it, since click happened inside
        this.clickEventUnsubscriber = this.renderer.listen(this.element.nativeElement, 'click', ($event) => $event.$nglStop = true);
        this.globalClickEventUnsubscriber = this.renderer.listen('document', 'click', this.handleGlobalClickEvent.bind(this));
    }
    _unsubscribeFromClickEvents() {
        if (this.clickEventUnsubscriber) {
            this.clickEventUnsubscriber();
            this.clickEventUnsubscriber = null;
        }
        if (this.globalClickEventUnsubscriber) {
            this.globalClickEventUnsubscriber();
            this.globalClickEventUnsubscriber = null;
        }
    }
    clearGlobalClickTimeout() {
        clearTimeout(this.globalClickTimeout);
    }
    focusItem(direction) {
        if (!this.items.length) {
            return;
        }
        const items = this.items.toArray();
        const activeElementIndex = items.findIndex(item => item.hasFocus()) + (direction === 'next' ? 1 : -1);
        if (activeElementIndex === items.length || activeElementIndex < 0) {
            return;
        }
        items[activeElementIndex].focus();
    }
    handleDropdownOpenEvent(dropdown) {
        if (dropdown !== this) {
            this.toggle(false);
        }
    }
}
NglDropdown.decorators = [
    { type: Directive, args: [{
                selector: '[nglDropdown]',
                host: {
                    '[class.slds-dropdown-trigger]': 'true',
                    '[class.slds-dropdown-trigger_click]': 'true',
                },
            },] }
];
NglDropdown.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
NglDropdown.propDecorators = {
    isOpen: [{ type: Input, args: ['open',] }],
    handlePageEvents: [{ type: Input }],
    items: [{ type: ContentChildren, args: [NglDropdownItem, { descendants: true },] }],
    isOpenChange: [{ type: Output, args: ['openChange',] }],
    onKeydownClose: [{ type: HostListener, args: ['keydown.esc', ['"esc"'],] }, { type: HostListener, args: ['keydown.tab', ['"tab"'],] }],
    onKeydownFocusNext: [{ type: HostListener, args: ['keydown.arrowdown', ['$event', '"next"'],] }, { type: HostListener, args: ['keydown.arrowup', ['$event', '"previous"'],] }]
};
__decorate([
    InputBoolean()
], NglDropdown.prototype, "handlePageEvents", void 0);

class NglDropdownTrigger {
    constructor(element, dropdown) {
        this.element = element;
        this.dropdown = dropdown;
        this.parentFocusEventSubscription = this.dropdown.triggerFocusEventEmitter.subscribe(this.focus.bind(this));
    }
    ngOnDestroy() {
        this.parentFocusEventSubscription.unsubscribe();
    }
    toggleOpen() {
        this.dropdown.toggle();
    }
    onKeyDownOpen($event) {
        $event.preventDefault();
        this.dropdown.toggle(true);
    }
    focus() {
        this.element.nativeElement.focus();
    }
}
NglDropdownTrigger.decorators = [
    { type: Directive, args: [{
                selector: '[nglDropdownTrigger]',
                host: {
                    'aria-haspopup': 'true',
                },
            },] }
];
NglDropdownTrigger.ctorParameters = () => [
    { type: ElementRef },
    { type: NglDropdown }
];
NglDropdownTrigger.propDecorators = {
    toggleOpen: [{ type: HostListener, args: ['click',] }],
    onKeyDownOpen: [{ type: HostListener, args: ['keydown.arrowdown', ['$event'],] }]
};

const NGL_DROPDOWN_DIRECTIVES = [
    NglDropdown,
    NglDropdownTrigger,
    NglDropdownItem,
];
class NglMenusModule {
}
NglMenusModule.decorators = [
    { type: NgModule, args: [{
                declarations: [NGL_DROPDOWN_DIRECTIVES],
                exports: [NGL_DROPDOWN_DIRECTIVES],
                imports: [CommonModule],
            },] }
];

class NglModalHeaderTemplate {
    constructor(templateRef) {
        this.templateRef = templateRef;
    }
}
NglModalHeaderTemplate.decorators = [
    { type: Directive, args: [{ selector: '[nglModalHeader]' },] }
];
NglModalHeaderTemplate.ctorParameters = () => [
    { type: TemplateRef }
];
class NglModalTaglineTemplate {
    constructor(templateRef) {
        this.templateRef = templateRef;
    }
}
NglModalTaglineTemplate.decorators = [
    { type: Directive, args: [{ selector: '[nglModalTagline]' },] }
];
NglModalTaglineTemplate.ctorParameters = () => [
    { type: TemplateRef }
];
class NglModalFooterTemplate {
    constructor(templateRef) {
        this.templateRef = templateRef;
    }
}
NglModalFooterTemplate.decorators = [
    { type: Directive, args: [{ selector: '[nglModalFooter]' },] }
];
NglModalFooterTemplate.ctorParameters = () => [
    { type: TemplateRef }
];

class NglModal {
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

const NGL_MODAL_DIRECTIVES = [
    NglModal,
    NglModalFooterTemplate,
    NglModalHeaderTemplate,
    NglModalTaglineTemplate,
];
class NglModalsModule {
}
NglModalsModule.decorators = [
    { type: NgModule, args: [{
                declarations: [NGL_MODAL_DIRECTIVES],
                exports: [NGL_MODAL_DIRECTIVES],
                imports: [CommonModule, A11yModule, OverlayModule, NglIconsModule],
            },] }
];

class NglToast extends NglCommonNotify {
    constructor(element, renderer, cd) {
        super(element, renderer, cd, 'toast');
    }
}
NglToast.decorators = [
    { type: Component, args: [{
                selector: 'ngl-toast',
                template: "<span class=\"slds-assistive-text\">{{assistiveText || variant}}</span>\n<ngl-icon class=\"slds-m-right_small slds-no-flex slds-align-top\" *ngIf=\"iconName\" [iconName]=\"iconName\" size=\"small\" variant=\"\"></ngl-icon>\n<div class=\"slds-notify__content\">\n  <ng-content></ng-content>\n</div>\n<button class=\"slds-button slds-button_icon slds-notify__close slds-button_icon-inverse\" *ngIf=\"dismissible\" type=\"button\" (click)=\"close('button', $event)\">\n  <svg class=\"slds-button__icon slds-button__icon_large\" nglIconName=\"utility:close\"></svg><span class=\"slds-assistive-text\" *ngIf=\"closeButtonAssistiveText\">{{closeButtonAssistiveText}}</span>\n</button>",
                changeDetection: ChangeDetectionStrategy.OnPush,
                exportAs: 'nglToast'
            },] }
];
NglToast.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: ChangeDetectorRef }
];

class NglToastClose extends NglCommonNotifyClose {
    constructor(toast) {
        super(toast);
    }
}
NglToastClose.decorators = [
    { type: Directive, args: [{
                selector: 'ngl-toast[close],ngl-toast[nglClose]',
            },] }
];
NglToastClose.ctorParameters = () => [
    { type: NglToast }
];

const NGL_TOAST_DIRECTIVES = [
    NglToast,
    NglToastClose,
];
class NglToastModule {
}
NglToastModule.decorators = [
    { type: NgModule, args: [{
                declarations: [NGL_TOAST_DIRECTIVES],
                exports: [NGL_TOAST_DIRECTIVES],
                imports: [CommonModule, NglIconsModule],
            },] }
];

class NglPagination {
    constructor() {
        this.pages = [];
        this.pageChange = new EventEmitter();
        this.perPage = 10;
        this.limit = 0;
        this.boundaryNumbers = 0;
        this.firstText = 'First';
        this.previousText = 'Previous';
        this.nextText = 'Next';
        this.lastText = 'Last';
        this.boundaryLinks = false;
    }
    set page(page) {
        this.current = +page;
    }
    hasPrevious() {
        return this.current > 1;
    }
    hasNext() {
        return this.current < this.totalPages;
    }
    goto(page) {
        if (page === this.current) {
            return;
        }
        this.pageChange.emit(+page);
    }
    ngOnChanges() {
        this.totalPages = Math.ceil(+this.total / +this.perPage);
        const { start, end } = this.limits();
        this.pages = this.getPageArray(start, end);
        if (this.boundaryNumbers > 0) {
            if (start > 1) {
                const preGap = this.getPageArray(1, Math.min(start - 1, this.boundaryNumbers));
                const lastGapNumber = +preGap[preGap.length - 1].number;
                if (lastGapNumber < start - 1) {
                    this.pages.unshift(this.getGapPage(lastGapNumber, start));
                }
                this.pages.unshift(...preGap);
            }
            if (end < this.totalPages) {
                const postGap = this.getPageArray(Math.max(this.totalPages - this.boundaryNumbers + 1, end + 1), this.totalPages);
                const firstGapNumber = +postGap[0].number;
                if (firstGapNumber > end + 1) {
                    this.pages.push(this.getGapPage(end, firstGapNumber));
                }
                this.pages.push(...postGap);
            }
        }
        if (this.current > this.totalPages) {
            setTimeout(() => this.goto(this.totalPages));
        }
        else if (!this.current && this.totalPages > 0) {
            setTimeout(() => this.goto(1));
        }
    }
    pageTrackBy(index, page) {
        return page.number;
    }
    get start() {
        return Math.min(Math.max(1 + ((+this.current || 1) - 1) * +this.perPage, 0), +this.total);
    }
    get end() {
        return Math.min(this.start + (+this.perPage - 1), +this.total);
    }
    getPageArray(start, end) {
        return Array.apply(null, { length: end - start + 1 }).map((value, index) => this.getPage(start + index));
    }
    getPage(number, disabled = false) {
        return { number, disabled };
    }
    getGapPage(before, after) {
        const isConsecutive = before + 1 === after - 1;
        return this.getPage(isConsecutive ? before + 1 : '...', !isConsecutive);
    }
    /**
     * Calculate first and last visible page numbers
     */
    limits() {
        let start = 1, end = this.totalPages;
        if (this.limit < 1) {
            return { start, end };
        }
        // Current page is displayed in the middle of the visible ones
        start = Math.max(+this.current - Math.floor(+this.limit / 2), 1);
        end = start + +this.limit - 1;
        // Adjust if limit is exceeded
        if (end > this.totalPages) {
            end = this.totalPages;
            start = Math.max(end - +this.limit + 1, 1);
        }
        return { start, end };
    }
}
NglPagination.decorators = [
    { type: Component, args: [{
                selector: 'ngl-pagination',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: "\n<div class=\"slds-button-group\" role=\"group\">\n  <button class=\"slds-button slds-button_neutral\" *ngIf=\"boundaryLinks\" [disabled]=\"!hasPrevious()\" (click)=\"goto(1)\">{{firstText}}</button>\n  <button class=\"slds-button slds-button_neutral\" [disabled]=\"!hasPrevious()\" (click)=\"goto(current - 1)\">{{previousText}}</button>\n  <button class=\"slds-button\" *ngFor=\"let page of pages; trackBy:pageTrackBy\" [ngClass]=\"'slds-button_' + (page.number === current ? 'brand' : 'neutral')\" (click)=\"goto(page.number)\" [disabled]=\"page.disabled\">{{page.number}}</button>\n  <button class=\"slds-button slds-button_neutral\" [disabled]=\"!hasNext()\" (click)=\"goto(current + 1)\">{{nextText}}</button>\n  <button class=\"slds-button slds-button_neutral\" *ngIf=\"boundaryLinks\" [disabled]=\"!hasNext()\" (click)=\"goto(totalPages)\">{{lastText}}</button>\n</div>",
                exportAs: 'nglPagination'
            },] }
];
NglPagination.propDecorators = {
    page: [{ type: Input }],
    pageChange: [{ type: Output }],
    total: [{ type: Input }],
    perPage: [{ type: Input }],
    limit: [{ type: Input }],
    boundaryNumbers: [{ type: Input }],
    firstText: [{ type: Input }],
    previousText: [{ type: Input }],
    nextText: [{ type: Input }],
    lastText: [{ type: Input }],
    boundaryLinks: [{ type: Input }]
};
__decorate([
    InputBoolean()
], NglPagination.prototype, "boundaryLinks", void 0);

class NglPaginationsModule {
}
NglPaginationsModule.decorators = [
    { type: NgModule, args: [{
                declarations: [NglPagination],
                exports: [NglPagination],
                imports: [CommonModule],
            },] }
];

class NglPick {
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
NglPick.decorators = [
    { type: Directive, args: [{
                selector: '[nglPick]',
            },] }
];
NglPick.propDecorators = {
    setSelected: [{ type: Input, args: ['nglPick',] }],
    nglPickActiveClass: [{ type: Input }],
    nglPickChange: [{ type: Output }],
    nglOptionDestroyed: [{ type: Output }],
    isMultiple: [{ type: Input, args: ['nglPickMultiple',] }]
};
__decorate([
    InputBoolean()
], NglPick.prototype, "isMultiple", void 0);

class NglPickOption {
    constructor(element, renderer, nglPick) {
        this.element = element;
        this.renderer = renderer;
        this.nglPick = nglPick;
        this._active = false;
    }
    // Use a getter to prevent direct altering
    get active() {
        return this._active;
    }
    set setValue(value) {
        this._value = value;
    }
    pick(evt) {
        if (evt) {
            evt.preventDefault();
        }
        this.nglPick.selectOption(this._value);
    }
    ngOnInit() {
        this._subscription = this.nglPick.values.subscribe(value => {
            this._active = this._isActive(value);
            const activeClass = this.nglPickActiveClass || this.nglPick.nglPickActiveClass;
            if (activeClass) {
                if (this.active) {
                    this.renderer.addClass(this.element.nativeElement, activeClass);
                }
                else {
                    this.renderer.removeClass(this.element.nativeElement, activeClass);
                }
            }
        });
    }
    ngOnDestroy() {
        this._subscription.unsubscribe();
        this.nglPick.optionRemoved(this._value);
    }
    _isActive(value) {
        if (this.nglPick.isMultiple) {
            if (!value) {
                return false;
            }
            return Array.isArray(value) ? value.indexOf(this._value) > -1 : !!value[this._value];
        }
        else {
            return this._value === value;
        }
    }
}
NglPickOption.decorators = [
    { type: Directive, args: [{
                selector: '[nglPickOption]',
                exportAs: 'nglPickOption',
                host: {
                    'role': 'button',
                },
            },] }
];
NglPickOption.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: NglPick }
];
NglPickOption.propDecorators = {
    setValue: [{ type: Input, args: ['nglPickOption',] }],
    nglPickActiveClass: [{ type: Input }],
    pick: [{ type: HostListener, args: ['click',] }, { type: HostListener, args: ['keydown.Space', ['$event'],] }, { type: HostListener, args: ['keydown.Enter', ['$event'],] }]
};

const NGL_PICK_DIRECTIVES = [
    NglPick,
    NglPickOption,
];
class NglPickModule {
}
NglPickModule.decorators = [
    { type: NgModule, args: [{
                declarations: [NGL_PICK_DIRECTIVES],
                exports: [NGL_PICK_DIRECTIVES],
                imports: [CommonModule],
            },] }
];

class NglPill {
    constructor() {
        this.isTemplateRef = isTemplateRef;
        /**
           * Applies the error style to the component.
           */
        this.hasError = false;
        /**
           * Whether or not to override the remove button's visibility, if `remove` is set.
           */
        this.removable = true;
        /**
           * Remove button title (and assistive text).
           */
        this.removeTitle = 'Remove';
        /**
           * The event emitted when the remove button is clicked.
           */
        this.remove = new EventEmitter();
        this.linked = false;
    }
    ngOnInit() {
        this.canRemove = this.remove.observers.length > 0;
    }
    onRemove(e) {
        this.remove.emit(e);
    }
    get pillIcon() {
        return this.icon || this.avatar;
    }
}
NglPill.decorators = [
    { type: Component, args: [{
                selector: 'ngl-pill',
                template: "<span class=\"slds-pill__icon_container\" *ngIf=\"pillIcon\">\n  <ng-container *ngIf=\"isTemplateRef(pillIcon); else defaultTpl\" [ngTemplateOutlet]=\"pillIcon\"></ng-container>\n  <ng-template #defaultTpl>\n    <ngl-icon *ngIf=\"icon; else avatarTpl\" [iconName]=\"icon\"></ngl-icon>\n    <ng-template #avatarTpl>\n      <ngl-avatar [src]=\"avatar\" variant=\"circle\"></ngl-avatar>\n    </ng-template>\n  </ng-template></span>\n<ng-container *ngIf=\"linked; else unlinked\">\n  <ng-content select=\"a\"></ng-content>\n</ng-container>\n<ng-template #unlinked><span class=\"slds-pill__label\">\n    <ng-content></ng-content></span></ng-template>\n<button class=\"slds-button slds-button_icon slds-pill__remove\" *ngIf=\"canRemove &amp;&amp; removable\" type=\"button\" [title]=\"removeTitle\" (click)=\"onRemove($event)\">\n  <svg class=\"slds-button__icon\" nglIconName=\"close\"></svg><span class=\"slds-assistive-text\" *ngIf=\"removeTitle\">{{removeTitle}}</span>\n</button>",
                changeDetection: ChangeDetectionStrategy.OnPush,
                host: {
                    '[class.slds-pill]': 'true',
                }
            },] }
];
NglPill.propDecorators = {
    icon: [{ type: Input }],
    avatar: [{ type: Input }],
    hasError: [{ type: Input }, { type: HostBinding, args: ['class.slds-has-error',] }],
    removable: [{ type: Input }],
    removeTitle: [{ type: Input }],
    remove: [{ type: Output }],
    linked: [{ type: HostBinding, args: ['class.slds-pill_link',] }]
};
__decorate([
    InputBoolean()
], NglPill.prototype, "hasError", void 0);
__decorate([
    InputBoolean()
], NglPill.prototype, "removable", void 0);

class NglPillLink {
    constructor(pill) {
        pill.linked = true;
    }
}
NglPillLink.decorators = [
    { type: Component, args: [{
                //  tslint:disable-next-line:component-selector
                selector: 'a[nglPillAction]',
                template: "<span class=\"slds-pill__label\">\n  <ng-content></ng-content></span>",
                changeDetection: ChangeDetectionStrategy.OnPush,
                host: {
                    '[class.slds-pill__action]': 'true',
                }
            },] }
];
NglPillLink.ctorParameters = () => [
    { type: NglPill }
];

const NGL_PILL_DIRECTIVES = [
    NglPill,
    NglPillLink,
];
class NglPillsModule {
}
NglPillsModule.decorators = [
    { type: NgModule, args: [{
                declarations: NGL_PILL_DIRECTIVES,
                exports: NGL_PILL_DIRECTIVES,
                imports: [CommonModule, NglIconsModule, NglAvatarModule],
            },] }
];

class NglProgressBar {
    constructor(element, renderer, hostService) {
        this.element = element;
        this.renderer = renderer;
        this.hostService = hostService;
        this.renderer.addClass(this.element.nativeElement, 'slds-progress-bar');
        this.renderer.setAttribute(this.element.nativeElement, 'role', 'progressbar');
        this.renderer.setAttribute(this.element.nativeElement, 'aria-valuemin', '0');
        this.renderer.setAttribute(this.element.nativeElement, 'aria-valuemax', '100');
    }
    /**
     * The percentage value of the progress bar.
     */
    set value(value) {
        this._value = Math.max(0, Math.min(value, 100)); // Trap on [0, 100]
        this.renderer.setAttribute(this.element.nativeElement, 'aria-valuenow', `${this.value}`);
    }
    get value() {
        return this._value;
    }
    ngOnInit() {
        this.setHostClass();
    }
    ngOnChanges() {
        this.setHostClass();
    }
    setHostClass() {
        this.hostService.updateClass(this.element, {
            [`slds-progress-bar_${this.size}`]: !!this.size,
            [`slds-progress-bar_${this.variant}`]: !!this.variant,
        });
    }
}
NglProgressBar.decorators = [
    { type: Component, args: [{
                selector: 'ngl-progress-bar',
                template: "<span class=\"slds-progress-bar__value\" [style.width.%]=\"value\"><span class=\"slds-assistive-text\">Progress: {{value}}%</span></span>",
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [HostService]
            },] }
];
NglProgressBar.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: HostService }
];
NglProgressBar.propDecorators = {
    value: [{ type: Input }],
    size: [{ type: Input }],
    variant: [{ type: Input }]
};

class NglProgressBarModule {
}
NglProgressBarModule.decorators = [
    { type: NgModule, args: [{
                declarations: [NglProgressBar],
                exports: [NglProgressBar],
                imports: [CommonModule],
            },] }
];

class NglRadioGroup {
    constructor() {
        this.error = null;
        this.type = 'list';
        this.uid = uniqueId('radio-group');
        this.type$ = new BehaviorSubject(this.type);
        this.error$ = new BehaviorSubject(this.error);
    }
    get hasError() {
        return toBoolean(this.error);
    }
    get errorId() {
        return `error_${this.uid}`;
    }
    ngOnChanges(changes) {
        if (changes.type) {
            this.type$.next(this.type);
        }
        if (changes.error) {
            this.error$.next(this.hasError ? this.errorId : null);
        }
    }
}
NglRadioGroup.decorators = [
    { type: Component, args: [{
                selector: 'ngl-radio-group,[ngl-radio-group]',
                template: "\n<legend class=\"slds-form-element__legend slds-form-element__label\"><abbr class=\"slds-required\" *ngIf=\"required\" title=\"required\">*</abbr><span [nglInternalOutlet]=\"label\"></span></legend>\n<div class=\"slds-form-element__control\">\n  <div class=\"slds-radio_button-group\" *ngIf=\"type === 'button'; else contentTpl\">\n    <ng-container *ngTemplateOutlet=\"contentTpl\"></ng-container>\n  </div>\n</div>\n<div class=\"slds-form-element__help\" *ngIf=\"error\" [id]=\"errorId\">{{error}}</div>\n<ng-template #contentTpl>\n  <ng-content></ng-content>\n</ng-template>",
                changeDetection: ChangeDetectionStrategy.OnPush,
                host: {
                    '[class.slds-form-element]': 'true',
                }
            },] }
];
NglRadioGroup.propDecorators = {
    label: [{ type: Input }],
    error: [{ type: Input }],
    hasError: [{ type: HostBinding, args: ['class.slds-has-error',] }],
    required: [{ type: Input }],
    type: [{ type: Input }]
};
__decorate([
    InputBoolean()
], NglRadioGroup.prototype, "required", void 0);

class NglRadioInput {
    constructor(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        if (!this.el.nativeElement.id) {
            this.renderer.setAttribute(this.el.nativeElement, 'id', uniqueId('radio'));
        }
    }
    get id() {
        return this.el.nativeElement.id;
    }
}
NglRadioInput.decorators = [
    { type: Directive, args: [{
                selector: 'input[ngl][type=radio]',
            },] }
];
NglRadioInput.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
NglRadioInput.propDecorators = {
    name: [{ type: HostBinding, args: ['attr.name',] }],
    describedBy: [{ type: HostBinding, args: ['attr.aria-describedby',] }]
};

class NglRadioOption {
    constructor(radioGroup, cd) {
        this.radioGroup = radioGroup;
        this.cd = cd;
        this.subscriptions = [];
    }
    get isTypeList() {
        return this.type === 'list';
    }
    get isTypeButton() {
        return this.type === 'button';
    }
    ngOnInit() {
        this.subscriptions.push(this.radioGroup.type$.subscribe((type) => {
            this.type = type;
            this.cd.detectChanges();
        }), this.radioGroup.error$.subscribe((errorId) => {
            this.input.describedBy = errorId;
        }));
    }
    ngAfterContentInit() {
        this.input.name = this.radioGroup.uid;
    }
    ngOnDestroy() {
        this.subscriptions.forEach((s) => s.unsubscribe());
    }
}
NglRadioOption.decorators = [
    { type: Component, args: [{
                selector: 'ngl-radio-option',
                template: "\n<ng-content></ng-content>\n<label class=\"slds-radio__label\" *ngIf=\"type === 'list'\" [attr.for]=\"input.id\"><span class=\"slds-radio_faux\"></span><span class=\"slds-form-element__label\" [nglInternalOutlet]=\"label\"></span></label>\n<label class=\"slds-radio_button__label\" *ngIf=\"type === 'button'\" [attr.for]=\"input.id\"><span class=\"slds-radio_faux\" [nglInternalOutlet]=\"label\"></span></label>",
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
NglRadioOption.ctorParameters = () => [
    { type: NglRadioGroup },
    { type: ChangeDetectorRef }
];
NglRadioOption.propDecorators = {
    label: [{ type: Input }],
    input: [{ type: ContentChild, args: [NglRadioInput, { static: true },] }],
    isTypeList: [{ type: HostBinding, args: ['class.slds-radio',] }],
    isTypeButton: [{ type: HostBinding, args: ['class.slds-button',] }, { type: HostBinding, args: ['class.slds-radio_button',] }]
};

const DIRECTIVES$3 = [
    NglRadioGroup,
    NglRadioOption,
    NglRadioInput,
];
class NglRadiosModule {
}
NglRadiosModule.decorators = [
    { type: NgModule, args: [{
                declarations: DIRECTIVES$3,
                exports: DIRECTIVES$3,
                imports: [CommonModule, NglInternalOutletModule],
            },] }
];

class NglRatingIconTemplate {
    constructor(templateRef) {
        this.templateRef = templateRef;
    }
}
NglRatingIconTemplate.decorators = [
    { type: Directive, args: [{ selector: '[nglRatingIcon]' },] }
];
NglRatingIconTemplate.ctorParameters = () => [
    { type: TemplateRef }
];

/** Injection token that can be used to specify default options. */
const NGL_RATING_CONFIG = new InjectionToken('ngl-rating-config');
/**
 * Configuration service for the NglRating component.
 */
class NglRatingConfig {
    constructor() {
        /**
         * The color of the icon when status is "on"
         */
        this.colorOn = '#FFB75D';
        /**
         * The color of the icon when status is "off"
         */
        this.colorOff = '54698D';
    }
}

class NglRating {
    constructor(defaultConfig) {
        this.range = [];
        this.icon = 'favorite';
        this.readonly = false;
        this.rateChange = new EventEmitter();
        this.hover = new EventEmitter();
        this._max = 5;
        const config = Object.assign(Object.assign({}, new NglRatingConfig()), defaultConfig);
        this.colorOn = config.colorOn;
        this.colorOff = config.colorOff;
    }
    set rate(rate) {
        this.inputRate = rate;
        this.currentRate = rate;
    }
    set max(max) {
        this._max = +max;
        this.setRange();
    }
    get max() {
        return this._max;
    }
    ngOnInit() {
        this.setRange();
    }
    ngAfterContentInit() {
        this._template = this.iconTemplate ? this.iconTemplate.templateRef : this.defaultTemplate;
    }
    update(value) {
        if (value < 1 || value > this.max || this.readonly || value === this.inputRate) {
            return;
        }
        this.rateChange.emit(value);
    }
    enter(value) {
        if (this.readonly) {
            return;
        }
        this.currentRate = value;
        this.hover.emit(value);
    }
    getFill(value) {
        if (value <= this.currentRate) {
            return 100;
        }
        if (Math.ceil(this.currentRate) < value) {
            return 0;
        }
        return Math.round(100 * (this.currentRate % 1));
    }
    reset() {
        this.currentRate = this.inputRate;
    }
    // Keyboard interactions
    keyboardIncrease(evt) {
        evt.preventDefault();
        this.update(this.inputRate + 1);
    }
    keyboardDecrease(evt) {
        evt.preventDefault();
        this.update(this.inputRate - 1);
    }
    // ARIA
    get ariaValuenow() {
        return this.inputRate;
    }
    setRange() {
        this.range = Array.apply(null, { length: this.max }).map((value, index) => index + 1);
    }
}
NglRating.decorators = [
    { type: Component, args: [{
                selector: 'ngl-rating',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: "\n<ng-template #t let-fill=\"fill\">\n  <svg class=\"slds-icon\" [nglIconName]=\"icon\" [ngClass]=\"size ? 'slds-icon_' + size : ''\" [style.fill]=\"fill === 100 ? colorOn : colorOff\"></svg>\n  <svg class=\"slds-icon\" *ngIf=\"fill &gt; 0 &amp;&amp; fill &lt; 100\" [nglIconName]=\"icon\" [ngClass]=\"size ? 'slds-icon_' + size : ''\" [style.fill]=\"colorOn\" style=\"position:absolute; bottom:0;\" [style.left.%]=\"fill - 100\" [xPos]=\"(100 - fill) + '%'\"></svg>\n</ng-template>\n<div class=\"slds-show_inline-block\" *ngFor=\"let r of range; let i = index\" (click)=\"update(r)\" (mouseenter)=\"enter(r)\" style=\"position: relative;\">\n  <ng-template [ngTemplateOutlet]=\"_template\" [ngTemplateOutletContext]=\"{$implicit: r &lt;= currentRate, index: i, fill: getFill(r)}\"></ng-template>\n</div>",
                host: {
                    'style': 'white-space: nowrap;',
                    'tabindex': '0',
                    'aria-valuemin': '0',
                    '[attr.aria-valuemax]': 'max',
                }
            },] }
];
NglRating.ctorParameters = () => [
    { type: NglRatingConfig, decorators: [{ type: Optional }, { type: Inject, args: [NGL_RATING_CONFIG,] }] }
];
NglRating.propDecorators = {
    icon: [{ type: Input }],
    size: [{ type: Input }],
    readonly: [{ type: Input, args: ['isReadonly',] }],
    rate: [{ type: Input }],
    defaultTemplate: [{ type: ViewChild, args: ['t', { static: true },] }],
    iconTemplate: [{ type: ContentChild, args: [NglRatingIconTemplate,] }],
    max: [{ type: Input }],
    colorOn: [{ type: Input }],
    colorOff: [{ type: Input }],
    rateChange: [{ type: Output }],
    hover: [{ type: Output }],
    reset: [{ type: HostListener, args: ['mouseleave',] }],
    keyboardIncrease: [{ type: HostListener, args: ['keydown.ArrowUp', ['$event'],] }, { type: HostListener, args: ['keydown.ArrowRight', ['$event'],] }],
    keyboardDecrease: [{ type: HostListener, args: ['keydown.ArrowDown', ['$event'],] }, { type: HostListener, args: ['keydown.ArrowLeft', ['$event'],] }],
    ariaValuenow: [{ type: HostBinding, args: ['attr.aria-valuenow',] }]
};
__decorate([
    InputBoolean()
], NglRating.prototype, "readonly", void 0);

const DIRECTIVES$2 = [
    NglRating,
    NglRatingIconTemplate,
];
class NglRatingsModule {
}
NglRatingsModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, NglIconsModule],
                declarations: [...DIRECTIVES$2],
                exports: [...DIRECTIVES$2],
            },] }
];

class NglExpandableSection {
    constructor() {
        this.collapsable = true;
        this.open = false;
        this.openChange = new EventEmitter();
        this._uid = uniqueId('expandable-section');
    }
    get expanded() {
        return this.collapsable ? this.open : true;
    }
    get uid() {
        return this.collapsable ? this._uid : undefined;
    }
    toggle(event) {
        event.preventDefault();
        this.openChange.emit(!this.open);
    }
}
NglExpandableSection.decorators = [
    { type: Component, args: [{
                selector: 'ngl-expandable-section',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: "\n<h3 class=\"slds-section__title\" [class.slds-theme_shade]=\"!collapsable\">\n  <button class=\"slds-button slds-section__title-action\" *ngIf=\"collapsable; else simple_title\" [attr.aria-controls]=\"uid\" [attr.aria-expanded]=\"expanded\" type=\"button\" (click)=\"toggle($event)\">\n    <svg class=\"slds-section__title-action-icon slds-button__icon slds-button__icon_left\" nglIconName=\"switch\"></svg><span class=\"slds-truncate\" [title]=\"title\">{{title}}</span>\n  </button>\n  <ng-template #simple_title><span class=\"slds-truncate slds-p-horizontal_small\" [title]=\"title\">{{title}}</span>\n  </ng-template>\n</h3>\n<div class=\"slds-section__content\" [attr.aria-hidden]=\"!expanded\" [attr.id]=\"uid\">\n  <ng-content></ng-content>\n</div>",
                host: {
                    '[class.slds-section]': 'true',
                }
            },] }
];
NglExpandableSection.propDecorators = {
    title: [{ type: Input }],
    collapsable: [{ type: Input }],
    open: [{ type: Input }],
    openChange: [{ type: Output }],
    expanded: [{ type: HostBinding, args: ['class.slds-is-open',] }]
};

class NglSectionsModule {
}
NglSectionsModule.decorators = [
    { type: NgModule, args: [{
                declarations: [NglExpandableSection],
                exports: [NglExpandableSection],
                imports: [CommonModule, NglIconsModule],
            },] }
];

class NglSelectInput {
    constructor(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.ɵRequiredSubject = new BehaviorSubject(false);
        if (!this.el.nativeElement.id) {
            this.renderer.setAttribute(this.el.nativeElement, 'id', uniqueId('select'));
        }
    }
    set required(required) {
        this.ɵRequiredSubject.next(toBoolean(required));
    }
    get id() {
        return this.el.nativeElement.id;
    }
}
NglSelectInput.decorators = [
    { type: Directive, args: [{
                selector: 'select[ngl]',
                host: {
                    '[class.slds-select]': 'true',
                },
            },] }
];
NglSelectInput.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
NglSelectInput.propDecorators = {
    describedBy: [{ type: HostBinding, args: ['attr.aria-describedby',] }],
    required: [{ type: Input }]
};

class NglSelect {
    constructor(cd) {
        this.cd = cd;
    }
    get hasError() {
        return toBoolean(this.error);
    }
    get errorId() {
        return `error_${this._uid}`;
    }
    ngOnChanges() {
        this.input.describedBy = this.error ? this.errorId : null;
    }
    ngAfterContentInit() {
        if (!this.input) {
            throw Error(`[ng-lightning] Couldn't find an <select> with [ngl] attribute inside ngl-select`);
        }
        this.ɵRequiredSubscription = this.input.ɵRequiredSubject.subscribe((required) => {
            this.required = required;
            this.cd.detectChanges();
        });
        this._uid = this.input.id;
        this.cd.detectChanges();
    }
    ngOnDestroy() {
        if (this.ɵRequiredSubscription) {
            this.ɵRequiredSubscription.unsubscribe();
            this.ɵRequiredSubscription = null;
        }
    }
}
NglSelect.decorators = [
    { type: Component, args: [{
                selector: 'ngl-select,[ngl-select]',
                template: "\n<label [nglFormLabel]=\"label\" [attr.for]=\"_uid\" [required]=\"required\"></label>\n<ngl-form-help *ngIf=\"fieldLevelHelpTooltip\" [content]=\"fieldLevelHelpTooltip\"></ngl-form-help>\n<div class=\"slds-form-element__control\">\n  <div class=\"slds-select_container\">\n    <ng-content></ng-content>\n  </div>\n</div>\n<div class=\"slds-form-element__help\" *ngIf=\"hasError\" [id]=\"errorId\" [nglInternalOutlet]=\"error\"></div>",
                changeDetection: ChangeDetectionStrategy.OnPush,
                host: {
                    '[class.slds-form-element]': 'true',
                }
            },] }
];
NglSelect.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
NglSelect.propDecorators = {
    input: [{ type: ContentChild, args: [NglSelectInput, { static: true },] }],
    label: [{ type: Input }],
    fieldLevelHelpTooltip: [{ type: Input }],
    error: [{ type: Input }],
    hasError: [{ type: HostBinding, args: ['class.slds-has-error',] }]
};

const DIRECTIVES$1 = [
    NglSelect,
    NglSelectInput,
];
class NglSelectModule {
}
NglSelectModule.decorators = [
    { type: NgModule, args: [{
                declarations: DIRECTIVES$1,
                exports: DIRECTIVES$1,
                imports: [CommonModule, NglFormsModule, NglInternalOutletModule],
            },] }
];

const NGL_SLIDER_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => NglSlider),
    multi: true
};
class NglSlider {
    constructor(element, renderer, cd) {
        this.element = element;
        this.renderer = renderer;
        this.cd = cd;
        /**
         * The minimum value that the slider can have.
         */
        this.min = 0;
        /**
         * The maximum value that the slider can have.
         */
        this.max = 100;
        /**
         * The granularity the slider can step through values.
         */
        this.step = 1;
        /**
         * Whether the slider will be displayed vertically.
         */
        this.vertical = false;
        this.valueChange = new EventEmitter();
        this.uid = uniqueId('slider');
        this._value = null;
        this.onChange = null;
        this.onTouched = () => { };
        this.renderer.addClass(this.element.nativeElement, 'slds-form-element');
    }
    get hasError() {
        return !!this.error;
    }
    set value(value) {
        if (value !== this._value) {
            this._value = this.limit(coerceNumberProperty(value));
        }
    }
    get value() {
        // If the value needs to be read and it is still uninitialized, initialize it to the min.
        if (this._value === null) {
            this._value = this.min;
        }
        return this._value;
    }
    writeValue(value) {
        this.value = value;
        this.cd.markForCheck();
    }
    registerOnChange(fn) { this.onChange = fn; }
    registerOnTouched(fn) { this.onTouched = fn; }
    setDisabledState(isDisabled) { this.disabled = isDisabled; }
    onInput(value) {
        // Make sure we always emit number
        this.valueChange.emit(coerceNumberProperty(value));
        if (this.onChange) {
            this.value = value;
            this.onChange(this.value);
        }
    }
    sliderClass() {
        return {
            [`slds-size_${this.size}`]: !!this.size,
            [`slds-slider_vertical`]: this.vertical,
        };
    }
    limit(value) {
        return Math.min(Math.max(value, this.min), this.max);
    }
}
NglSlider.decorators = [
    { type: Component, args: [{
                selector: 'ngl-slider',
                template: "\n<label class=\"slds-form-element__label\" [attr.for]=\"uid\"><span class=\"slds-slider-label\"><span class=\"slds-slider-label__label\" *ngIf=\"label\" [nglInternalOutlet]=\"label\"></span><span class=\"slds-slider-label__range\">{{min}} - {{max}}</span></span></label>\n<div class=\"slds-form-element__control\">\n  <div class=\"slds-slider\" [ngClass]=\"sliderClass()\">\n    <input class=\"slds-slider__range\" [id]=\"uid\" type=\"range\" [value]=\"value\" [min]=\"min\" [max]=\"max\" [step]=\"step\" [disabled]=\"disabled\" [attr.aria-describedby]=\"hasError ? uid + '-error' : null\" (input)=\"onInput($event.target.value)\"><span class=\"slds-slider__value\" aria-hidden=\"true\">{{value}}</span>\n  </div>\n  <div class=\"slds-form-element__help\" *ngIf=\"hasError\" [id]=\"uid + '-error'\" [nglInternalOutlet]=\"error\"></div>\n</div>",
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [NGL_SLIDER_VALUE_ACCESSOR]
            },] }
];
NglSlider.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: ChangeDetectorRef }
];
NglSlider.propDecorators = {
    label: [{ type: Input }],
    min: [{ type: Input }],
    max: [{ type: Input }],
    step: [{ type: Input }],
    vertical: [{ type: Input }],
    size: [{ type: Input }],
    disabled: [{ type: Input }],
    error: [{ type: Input }],
    hasError: [{ type: HostBinding, args: ['class.slds-has-error',] }],
    value: [{ type: Input }],
    valueChange: [{ type: Output }]
};
__decorate([
    InputNumber()
], NglSlider.prototype, "min", void 0);
__decorate([
    InputNumber()
], NglSlider.prototype, "max", void 0);
__decorate([
    InputNumber()
], NglSlider.prototype, "step", void 0);
__decorate([
    InputBoolean()
], NglSlider.prototype, "vertical", void 0);
__decorate([
    InputBoolean()
], NglSlider.prototype, "disabled", void 0);

class NglSliderModule {
}
NglSliderModule.decorators = [
    { type: NgModule, args: [{
                declarations: [NglSlider],
                exports: [NglSlider],
                imports: [CommonModule, NglInternalOutletModule],
            },] }
];

class NglSpinner {
    constructor(element, renderer, hostService) {
        this.element = element;
        this.renderer = renderer;
        this.hostService = hostService;
        this.renderer.addClass(this.element.nativeElement, 'slds-spinner');
        this.renderer.setAttribute(this.element.nativeElement, 'role', 'status');
    }
    ngOnInit() {
        this.setHostClass();
    }
    ngOnChanges() {
        this.setHostClass();
    }
    setHostClass() {
        this.hostService.updateClass(this.element, {
            [`slds-spinner_${this.size || 'medium'}`]: true,
            [`slds-spinner_${this.variant}`]: !!this.variant,
        });
    }
}
NglSpinner.decorators = [
    { type: Component, args: [{
                selector: 'ngl-spinner',
                template: "<span class=\"slds-assistive-text\" *ngIf=\"alternativeText\">{{ alternativeText }}</span>\n<div class=\"slds-spinner__dot-a\"></div>\n<div class=\"slds-spinner__dot-b\"></div>",
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [HostService]
            },] }
];
NglSpinner.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: HostService }
];
NglSpinner.propDecorators = {
    size: [{ type: Input }],
    variant: [{ type: Input }],
    alternativeText: [{ type: Input }]
};

class NglSpinnersModule {
}
NglSpinnersModule.decorators = [
    { type: NgModule, args: [{
                declarations: [NglSpinner],
                exports: [NglSpinner],
                imports: [CommonModule],
            },] }
];

class NglTextareaInput {
    constructor(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.ɵRequiredSubject = new BehaviorSubject(false);
        if (!this.el.nativeElement.id) {
            this.renderer.setAttribute(this.el.nativeElement, 'id', uniqueId('textarea'));
        }
    }
    set required(required) {
        this.ɵRequiredSubject.next(toBoolean(required));
    }
    get id() {
        return this.el.nativeElement.id;
    }
}
NglTextareaInput.decorators = [
    { type: Directive, args: [{
                selector: 'textarea[ngl]',
                host: {
                    '[class.slds-textarea]': 'true',
                },
            },] }
];
NglTextareaInput.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
NglTextareaInput.propDecorators = {
    describedBy: [{ type: HostBinding, args: ['attr.aria-describedby',] }],
    required: [{ type: Input }]
};

class NglTextarea {
    constructor(cd) {
        this.cd = cd;
    }
    get hasError() {
        return toBoolean(this.error);
    }
    get errorId() {
        return `error_${this._uid}`;
    }
    ngOnChanges() {
        this.input.describedBy = this.error ? this.errorId : null;
    }
    ngAfterContentInit() {
        if (!this.input) {
            throw Error(`[ng-lightning] Couldn't find an <textarea> with [ngl] attribute inside ngl-textarea`);
        }
        this.ɵRequiredSubscription = this.input.ɵRequiredSubject.subscribe((required) => {
            this.required = required;
            this.cd.detectChanges();
        });
        this._uid = this.input.id;
        this.cd.detectChanges();
    }
    ngOnDestroy() {
        if (this.ɵRequiredSubscription) {
            this.ɵRequiredSubscription.unsubscribe();
            this.ɵRequiredSubscription = null;
        }
    }
}
NglTextarea.decorators = [
    { type: Component, args: [{
                selector: 'ngl-textarea,[ngl-textarea]',
                template: "\n<label [nglFormLabel]=\"label\" [attr.for]=\"_uid\" [required]=\"required\"></label>\n<ngl-form-help *ngIf=\"fieldLevelHelpTooltip\" [content]=\"fieldLevelHelpTooltip\"></ngl-form-help>\n<div class=\"slds-form-element__control\">\n  <div class=\"slds-textarea_container\">\n    <ng-content></ng-content>\n  </div>\n</div>\n<div class=\"slds-form-element__help\" *ngIf=\"error\" [id]=\"errorId\">{{error}}</div>",
                changeDetection: ChangeDetectionStrategy.OnPush,
                host: {
                    '[class.slds-form-element]': 'true',
                }
            },] }
];
NglTextarea.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
NglTextarea.propDecorators = {
    input: [{ type: ContentChild, args: [NglTextareaInput, { static: true },] }],
    label: [{ type: Input }],
    fieldLevelHelpTooltip: [{ type: Input }],
    error: [{ type: Input }],
    hasError: [{ type: HostBinding, args: ['class.slds-has-error',] }]
};

const DIRECTIVES = [
    NglTextarea,
    NglTextareaInput,
];
class NglTextareaModule {
}
NglTextareaModule.decorators = [
    { type: NgModule, args: [{
                declarations: DIRECTIVES,
                exports: DIRECTIVES,
                imports: [CommonModule, NglFormsModule],
            },] }
];

const MODULES = [
    NglAccordionModule,
    NglAlertModule,
    NglAvatarModule,
    NglBadgesModule,
    NglBreadcrumbsModule,
    NglButtonIconsModule,
    NglButtonsModule,
    NglCarouselModule,
    NglCheckboxesModule,
    NglColorpickerModule,
    NglComboboxesModule,
    NglDatatablesModule,
    NglDatepickersModule,
    NglDynamicIconsModule,
    NglFilesModule,
    NglFileUploadModule,
    NglIconsModule,
    NglInputModule,
    NglMenusModule,
    NglModalsModule,
    NglToastModule,
    NglPaginationsModule,
    NglPickModule,
    NglPillsModule,
    NglPopoversModule,
    NglProgressBarModule,
    NglRadiosModule,
    NglRatingsModule,
    NglSectionsModule,
    NglSelectModule,
    NglSliderModule,
    NglSpinnersModule,
    NglTabsModule,
    NglTextareaModule,
    NglTooltipsModule,
];
class NglModule {
}
NglModule.decorators = [
    { type: NgModule, args: [{
                exports: MODULES,
            },] }
];

/*
 * Public API Surface of ng-lightning
 */

/**
 * Generated bundle index. Do not edit.
 */

export { NGL_COLORPICKER_CONFIG, NGL_DATEPICKER_CONFIG, NGL_ICON_CONFIG, NGL_RATING_CONFIG, NGL_TOOLTIP_CONFIG, NglAccordion, NglAccordionModule, NglAccordionSection, NglAlert, NglAlertClose, NglAlertModule, NglAvatar, NglAvatarModule, NglBadge, NglBadgesModule, NglBreadcrumb, NglBreadcrumbs, NglBreadcrumbsModule, NglButton, NglButtonIcon, NglButtonIconStateful, NglButtonIconsModule, NglButtonStateHover, NglButtonStateOff, NglButtonStateOn, NglButtonStateful, NglButtonsModule, NglCarousel, NglCarouselImage, NglCarouselModule, NglCheckbox, NglCheckboxButton, NglCheckboxGroup, NglCheckboxInput, NglCheckboxOption, NglCheckboxToggle, NglCheckboxesModule, NglColorpicker, NglColorpickerConfig, NglColorpickerModule, NglCombobox, NglComboboxInput, NglComboboxOption, NglComboboxesModule, NglDatatable, NglDatatableCell, NglDatatableColumn, NglDatatableHeadingTemplate, NglDatatableLoadingOverlay, NglDatatableNoRowsOverlay, NglDatatablesModule, NglDatepicker, NglDatepickerConfig, NglDatepickerInput, NglDatepickerInputDirective, NglDatepickersModule, NglDropdown, NglDropdownItem, NglDropdownTrigger, NglDynamicIcon, NglDynamicIconEllie, NglDynamicIconEq, NglDynamicIconScore, NglDynamicIconWaffle, NglDynamicIconsModule, NglExpandableSection, NglFile, NglFileCrop, NglFileUpload, NglFileUploadModule, NglFilesModule, NglIcon, NglIconConfig, NglIconSvg, NglIconsModule, NglInput, NglInputElement, NglInputModule, NglMenusModule, NglModal, NglModalFooterTemplate, NglModalHeaderTemplate, NglModalTaglineTemplate, NglModalsModule, NglModule, NglPagination, NglPaginationsModule, NglPick, NglPickModule, NglPickOption, NglPill, NglPillLink, NglPillsModule, NglPopover, NglPopoverTrigger, NglPopoversModule, NglProgressBar, NglProgressBarModule, NglRadioGroup, NglRadioInput, NglRadioOption, NglRadiosModule, NglRating, NglRatingConfig, NglRatingIconTemplate, NglRatingsModule, NglSectionsModule, NglSelect, NglSelectInput, NglSelectModule, NglSlider, NglSliderModule, NglSpinner, NglSpinnersModule, NglTab, NglTabContent, NglTabLabel, NglTabVerbose, NglTabs, NglTabsModule, NglTextarea, NglTextareaInput, NglTextareaModule, NglToast, NglToastClose, NglToastModule, NglTooltipConfig, NglTooltipTrigger, NglTooltipsModule, InputBoolean as ɵa, InputNumber as ɵb, NglInternalDatatableHeadCell as ɵba, NglInternalDatatableCell as ɵbb, NglDatepickerMonth as ɵbc, NglDay as ɵbd, NglDateAdapter as ɵbe, NglDateAdapterBase as ɵbf, NglDatepickerWeekdays as ɵbg, NglDatepickerYear as ɵbh, NglClickOutsideModule as ɵbi, NglClickOutsideDirective as ɵbj, BaseDynamicIconComponent as ɵbk, NglAccordionItem as ɵc, HostService as ɵd, NglInternalOutletModule as ɵe, NglInternalOutlet as ɵf, NglCommonNotify as ɵg, NglCommonNotifyClose as ɵh, NglCarouselIndicator as ɵi, NglColorpickerSwatch as ɵj, NglColorpickerCustom as ɵk, NglColorpickerRange as ɵl, NglColorpickerInputs as ɵm, NglColorpickerSwatches as ɵn, NglColorpickerSwatchTrigger as ɵo, OnChange as ɵp, hasObservers as ɵq, NglFormsModule as ɵr, NglFormLabel as ɵs, NglFormHelp as ɵt, NglTooltip as ɵu, NglComboboxService as ɵv, NGL_COMBOBOX_CONFIG as ɵw, NglComboboxConfig as ɵx, NglOverlayModule as ɵy, NglOverlaynglOverlayScrolledOutsideViewDirective as ɵz };
//# sourceMappingURL=ng-lightning.js.map

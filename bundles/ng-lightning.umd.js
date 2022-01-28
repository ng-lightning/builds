(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/cdk/coercion'), require('@angular/cdk/keycodes'), require('rxjs'), require('@angular/cdk/overlay'), require('@angular/cdk/a11y'), require('@angular/cdk/portal'), require('rxjs/operators'), require('@angular/forms'), require('date-fns')) :
    typeof define === 'function' && define.amd ? define('ng-lightning', ['exports', '@angular/core', '@angular/common', '@angular/cdk/coercion', '@angular/cdk/keycodes', 'rxjs', '@angular/cdk/overlay', '@angular/cdk/a11y', '@angular/cdk/portal', 'rxjs/operators', '@angular/forms', 'date-fns'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global['ng-lightning'] = {}, global.ng.core, global.ng.common, global.ng.cdk.coercion, global.ng.cdk.keycodes, global.rxjs, global.ng.cdk.overlay, global.ng.cdk.a11y, global.ng.cdk.portal, global.rxjs.operators, global.ng.forms, global['date-fns']));
}(this, (function (exports, core, common, coercion, keycodes, rxjs, overlay, a11y, portal, operators, forms, dateFns) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (Object.prototype.hasOwnProperty.call(b, p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __rest(s, e) {
        var t = {};
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }
    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); };
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    var __createBinding = Object.create ? (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function () { return m[k]; } });
    }) : (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        o[k2] = m[k];
    });
    function __exportStar(m, o) {
        for (var p in m)
            if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
                __createBinding(o, m, p);
    }
    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
            return m.call(o);
        if (o && typeof o.length === "number")
            return {
                next: function () {
                    if (o && i >= o.length)
                        o = void 0;
                    return { value: o && o[i++], done: !o };
                }
            };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    /** @deprecated */
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }
    /** @deprecated */
    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }
    function __spreadArray(to, from) {
        for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
            to[j] = from[i];
        return to;
    }
    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n])
            i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try {
            step(g[n](v));
        }
        catch (e) {
            settle(q[0][3], e);
        } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]); }
    }
    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }
    function __asyncValues(o) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
    }
    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
        }
        else {
            cooked.raw = raw;
        }
        return cooked;
    }
    ;
    var __setModuleDefault = Object.create ? (function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function (o, v) {
        o["default"] = v;
    };
    function __importStar(mod) {
        if (mod && mod.__esModule)
            return mod;
        var result = {};
        if (mod != null)
            for (var k in mod)
                if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
                    __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    }
    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }
    function __classPrivateFieldGet(receiver, state, kind, f) {
        if (kind === "a" && !f)
            throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    }
    function __classPrivateFieldSet(receiver, state, value, kind, f) {
        if (kind === "m")
            throw new TypeError("Private method is not writable");
        if (kind === "a" && !f)
            throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
    }

    var HostService = /** @class */ (function () {
        function HostService(rendererFactory2) {
            this.classMap = {};
            this.styleMap = {};
            this.renderer = rendererFactory2.createRenderer(null, null);
        }
        HostService.prototype.updateClass = function (_a, classMap) {
            var _this = this;
            var nativeElement = _a.nativeElement;
            var newClassMap = {};
            var remove = Object.assign({}, this.classMap);
            Object.keys(classMap).filter(function (i) { return classMap[i]; }).forEach(function (i) {
                newClassMap[i] = true;
                if (!_this.classMap[i]) {
                    _this.renderer.addClass(nativeElement, i);
                }
                if (remove[i]) {
                    remove[i] = false;
                }
            });
            Object.keys(remove).filter(function (i) { return remove[i]; }).forEach(function (i) { return _this.renderer.removeClass(nativeElement, i); });
            this.classMap = newClassMap;
        };
        HostService.prototype.updateStyle = function (_a, styleMap) {
            var _this = this;
            var nativeElement = _a.nativeElement;
            var remove = Object.assign({}, this.styleMap);
            Object.keys(styleMap).filter(function (i) { return styleMap[i]; }).forEach(function (i) {
                if (styleMap[i] !== false) {
                    _this.renderer.setStyle(nativeElement, i, styleMap[i]);
                }
                if (remove[i]) {
                    delete remove[i];
                }
            });
            Object.keys(remove).forEach(function (i) { return _this.renderer.removeStyle(nativeElement, i); });
            this.styleMap = styleMap;
        };
        return HostService;
    }());
    HostService.decorators = [
        { type: core.Injectable }
    ];
    HostService.ctorParameters = function () { return [
        { type: core.RendererFactory2 }
    ]; };

    // Check if given value is integer. Cast strings as potential integers as well.
    // See: http://stackoverflow.com/questions/14636536/how-to-check-if-a-variable-is-an-integer-in-javascript
    function isInt(value) {
        if (isNaN(value)) {
            return false;
        }
        var x = parseFloat(value);
        // tslint:disable-next-line:no-bitwise
        return (x | 0) === x;
    }
    // Similar to `lodash.isobject`
    function isObject(value) {
        var type = typeof value;
        return !!value && (type === 'object' || type === 'function');
    }
    // Generate a unique id (unique within the entire client session).
    // Useful for temporary DOM ids.
    var idCounter = 0;
    function uniqueId(prefix) {
        if (prefix === void 0) { prefix = 'uid'; }
        return "ngl_" + prefix + "_" + ++idCounter;
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
            (Array.isArray(klasses) ? klasses : [klasses]).forEach(function (k) {
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
            var a_1 = [];
            ngClasses.forEach(function (v) { return a_1.push(v); });
            ngClasses = a_1;
        }
        // Convert array to object
        if (Array.isArray(ngClasses)) {
            ngClasses = ngClasses.reduce(function (o, klass) {
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
    function addOptionToSelection(value, selection, multiple, clearable) {
        var _a;
        if (clearable === void 0) { clearable = false; }
        var next;
        if (multiple) {
            if (!selection) {
                selection = [];
            }
            if (Array.isArray(selection)) {
                // Remove if already there or add to selection
                var index = selection.indexOf(value);
                next = index > -1
                    ? __spreadArray(__spreadArray([], __read(selection.slice(0, index))), __read(selection.slice(index + 1))) : __spreadArray(__spreadArray([], __read(selection)), [value]);
            }
            else {
                next = Object.assign({}, selection, (_a = {}, _a[value] = !selection[value], _a));
            }
        }
        else {
            next = selection === value && clearable ? null : value;
        }
        return next;
    }
    function menuItemScroll(container, domItem, scrollPadding) {
        if (scrollPadding === void 0) { scrollPadding = 4; }
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
        return iconName.indexOf(':') > -1 ? iconName : "utility:" + iconName;
    }

    var NglIcon = /** @class */ (function () {
        function NglIcon(el, hostService) {
            this.el = el;
            this.hostService = hostService;
            /**
             * The appearance of a `utility` icon.
             */
            this.variant = 'default';
        }
        Object.defineProperty(NglIcon.prototype, "iconName", {
            get: function () {
                return this._iconName;
            },
            set: function (iconName) {
                this._iconName = normalizeIconName(iconName);
            },
            enumerable: false,
            configurable: true
        });
        NglIcon.prototype.ngOnInit = function () {
            this.setHostClass();
        };
        NglIcon.prototype.ngOnChanges = function () {
            this.setHostClass();
        };
        NglIcon.prototype.svgClasses = function () {
            var _a;
            var _b = __read(this.iconName.split(':'), 1), category = _b[0];
            var isUtility = category === 'utility';
            var isDefaultOrInverse = this.variant === 'default' || this.variant === 'inverse';
            var classes = (_a = {},
                _a["slds-icon_" + this.size] = !!this.size && this.size !== 'medium',
                _a["slds-icon-text-" + (isDefaultOrInverse ? 'default' : this.variant)] = isDefaultOrInverse ?
                    (this.variant === 'default' ? isUtility : !isUtility)
                    : !!this.variant,
                _a);
            return ngClassCombine(this.svgClass, classes);
        };
        NglIcon.prototype.setHostClass = function () {
            var _a;
            var _b = __read(this.iconName.split(':'), 2), category = _b[0], icon = _b[1];
            var kebabCaseName = icon.replace(/_/g, '-');
            this.hostService.updateClass(this.el, (_a = {},
                _a["slds-icon_container"] = category !== 'utility',
                _a["slds-icon_container_circle"] = category === 'action',
                _a["slds-icon-" + category + "-" + kebabCaseName] = category !== 'utility' && category !== 'doctype',
                _a));
        };
        return NglIcon;
    }());
    NglIcon.decorators = [
        { type: core.Component, args: [{
                    selector: 'ngl-icon, [ngl-icon]',
                    template: "\n<svg class=\"slds-icon\" [nglIconName]=\"iconName\" [ngClass]=\"svgClasses()\"></svg>\n<ng-content></ng-content><span class=\"slds-assistive-text\" *ngIf=\"alternativeText\">{{alternativeText}}</span>",
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    providers: [HostService]
                },] }
    ];
    NglIcon.ctorParameters = function () { return [
        { type: core.ElementRef },
        { type: HostService }
    ]; };
    NglIcon.propDecorators = {
        iconName: [{ type: core.Input }],
        variant: [{ type: core.Input }],
        size: [{ type: core.Input }],
        alternativeText: [{ type: core.Input }],
        svgClass: [{ type: core.Input }]
    };

    /** Injection token that can be used to specify default options. */
    var NGL_ICON_CONFIG = new core.InjectionToken('ngl-icon-config');
    /**
     * Configuration service for the icons components.
     */
    var NglIconConfig = /** @class */ (function () {
        function NglIconConfig() {
            /**
             * The path to LDS assets
             */
            this.svgPath = 'assets/icons';
        }
        return NglIconConfig;
    }());

    var NglIconSvg = /** @class */ (function () {
        function NglIconSvg(defaultConfig, el, renderer) {
            this.xPos = '0';
            renderer.setAttribute(el.nativeElement, 'aria-hidden', 'true');
            var config = Object.assign(Object.assign({}, new NglIconConfig()), defaultConfig);
            this.path = config.svgPath;
        }
        Object.defineProperty(NglIconSvg.prototype, "iconName", {
            set: function (iconName) {
                var _a = __read(normalizeIconName(iconName).split(':'), 2), category = _a[0], icon = _a[1];
                this.iconPath = this.path + "/" + category + "-sprite/svg/symbols.svg#" + icon;
            },
            enumerable: false,
            configurable: true
        });
        return NglIconSvg;
    }());
    NglIconSvg.decorators = [
        { type: core.Component, args: [{
                    // tslint:disable-next-line:component-selector
                    selector: 'svg[nglIconName]',
                    template: "\n<svg:use [attr.xlink:href]=\"iconPath\" [attr.x]=\"xPos\"></svg:use>",
                    changeDetection: core.ChangeDetectionStrategy.OnPush
                },] }
    ];
    NglIconSvg.ctorParameters = function () { return [
        { type: NglIconConfig, decorators: [{ type: core.Optional }, { type: core.Inject, args: [NGL_ICON_CONFIG,] }] },
        { type: core.ElementRef },
        { type: core.Renderer2 }
    ]; };
    NglIconSvg.propDecorators = {
        iconName: [{ type: core.Input, args: ['nglIconName',] }],
        xPos: [{ type: core.Input }]
    };

    var NGL_ICON_DIRECTIVES = [
        NglIcon,
        NglIconSvg,
    ];
    var NglIconsModule = /** @class */ (function () {
        function NglIconsModule() {
        }
        return NglIconsModule;
    }());
    NglIconsModule.decorators = [
        { type: core.NgModule, args: [{
                    declarations: NGL_ICON_DIRECTIVES,
                    exports: NGL_ICON_DIRECTIVES,
                    imports: [common.CommonModule],
                },] }
    ];

    var NglInternalOutlet = /** @class */ (function () {
        function NglInternalOutlet() {
        }
        NglInternalOutlet.prototype.isTemplate = function () {
            return this.nglInternalOutlet instanceof core.TemplateRef;
        };
        return NglInternalOutlet;
    }());
    NglInternalOutlet.decorators = [
        { type: core.Component, args: [{
                    // tslint:disable-next-line:component-selector
                    selector: '[nglInternalOutlet]',
                    template: "\n    <ng-template [ngIf]=\"isTemplate()\" [ngIfElse]=\"str\">\n      <ng-template [ngTemplateOutlet]=\"nglInternalOutlet\" [ngTemplateOutletContext]=\"nglInternalOutletContext\"></ng-template>\n    </ng-template>\n    <ng-template #str>{{nglInternalOutlet}}</ng-template>",
                    changeDetection: core.ChangeDetectionStrategy.OnPush
                },] }
    ];
    NglInternalOutlet.propDecorators = {
        nglInternalOutlet: [{ type: core.Input }],
        nglInternalOutletContext: [{ type: core.Input }]
    };

    var NglInternalOutletModule = /** @class */ (function () {
        function NglInternalOutletModule() {
        }
        return NglInternalOutletModule;
    }());
    NglInternalOutletModule.decorators = [
        { type: core.NgModule, args: [{
                    imports: [common.CommonModule],
                    declarations: [NglInternalOutlet],
                    exports: [NglInternalOutlet],
                },] }
    ];

    var NglAccordionSection = /** @class */ (function () {
        function NglAccordionSection(templateRef) {
            this.templateRef = templateRef;
            /**
             * The unique name to use with the `activeName` of the accordion component.
             */
            this.name = uniqueId('accordion-section');
        }
        return NglAccordionSection;
    }());
    NglAccordionSection.decorators = [
        { type: core.Directive, args: [{
                    selector: '[nglAccordionSection]',
                },] }
    ];
    NglAccordionSection.ctorParameters = function () { return [
        { type: core.TemplateRef }
    ]; };
    NglAccordionSection.propDecorators = {
        label: [{ type: core.Input }],
        labelContext: [{ type: core.Input }],
        name: [{ type: core.Input }]
    };

    function propDecoratorFactory(name, fallback) {
        function propDecorator(target, propName) {
            var privatePropName = "$$__" + propName;
            if (Object.prototype.hasOwnProperty.call(target, privatePropName)) {
                console.warn("The prop \"" + privatePropName + "\" is already exist, it will be overrided by " + name + " decorator.");
            }
            Object.defineProperty(target, privatePropName, {
                configurable: true,
                writable: true
            });
            Object.defineProperty(target, propName, {
                get: function () {
                    return this[privatePropName];
                },
                set: function (value) {
                    this[privatePropName] = fallback(value);
                }
            });
        }
        return propDecorator;
    }
    function toBoolean(value) {
        return coercion.coerceBooleanProperty(value);
    }
    function InputBoolean() {
        return propDecoratorFactory('InputBoolean', toBoolean);
    }
    function toNumber(value, fallbackValue) {
        if (fallbackValue === void 0) { fallbackValue = 0; }
        return coercion._isNumberValue(value) ? Number(value) : fallbackValue;
    }
    function InputNumber() {
        return propDecoratorFactory('InputNumber', toNumber);
    }

    var NglAccordion = /** @class */ (function () {
        function NglAccordion(element, renderer) {
            this.activeNameChange = new core.EventEmitter();
            /**
             * Whether we allow multiple sections open at a time.
             */
            this.multiple = false;
            renderer.addClass(element.nativeElement, 'slds-accordion');
        }
        NglAccordion.prototype.toggle = function (section) {
            var active = addOptionToSelection(section.name, this.activeName, this.multiple, true);
            this.activeNameChange.emit(active);
        };
        NglAccordion.prototype.isActive = function (section) {
            return isOptionSelected(section.name, this.activeName, this.multiple);
        };
        return NglAccordion;
    }());
    NglAccordion.decorators = [
        { type: core.Component, args: [{
                    selector: 'ngl-accordion,[ngl-accordion]',
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    template: "\n<li *ngFor=\"let section of sections\" nglAccordionItem [isActive]=\"isActive(section)\" [section]=\"section\" (toggle)=\"toggle(section)\"></li>"
                },] }
    ];
    NglAccordion.ctorParameters = function () { return [
        { type: core.ElementRef },
        { type: core.Renderer2 }
    ]; };
    NglAccordion.propDecorators = {
        activeName: [{ type: core.Input }],
        activeNameChange: [{ type: core.Output }],
        multiple: [{ type: core.Input }],
        sections: [{ type: core.ContentChildren, args: [NglAccordionSection,] }]
    };
    __decorate([
        InputBoolean()
    ], NglAccordion.prototype, "multiple", void 0);

    var NglAccordionItem = /** @class */ (function () {
        function NglAccordionItem(element, renderer) {
            this.toggle = new core.EventEmitter();
            this.uid = uniqueId('accordion-item');
            renderer.addClass(element.nativeElement, 'slds-accordion__list-item');
        }
        NglAccordionItem.prototype.onToggle = function () {
            this.toggle.emit();
        };
        return NglAccordionItem;
    }());
    NglAccordionItem.decorators = [
        { type: core.Component, args: [{
                    // tslint:disable-next-line:component-selector
                    selector: 'li[nglAccordionItem]',
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    template: "\n<section class=\"slds-accordion__section\" [class.slds-is-open]=\"isActive\">\n  <div class=\"slds-accordion__summary\">\n    <h3 class=\"slds-accordion__summary-heading\" (click)=\"onToggle()\">\n      <button class=\"slds-button slds-button_reset slds-accordion__summary-action\" [attr.aria-controls]=\"uid\" [attr.aria-expanded]=\"isActive\" type=\"button\">\n        <svg class=\"slds-accordion__summary-action-icon slds-button__icon slds-button__icon_left\" nglIconName=\"utility:switch\"></svg><span class=\"slds-truncate\" [nglInternalOutlet]=\"section.label\" [nglInternalOutletContext]=\"{$implicit: section.labelContext}\"></span>\n      </button>\n    </h3>\n  </div>\n  <div class=\"slds-accordion__content\" [attr.hidden]=\"isActive ? null : ''\" [id]=\"uid\">\n    <ng-container *ngIf=\"isActive\">\n      <ng-template [ngTemplateOutlet]=\"section.templateRef\"></ng-template>\n    </ng-container>\n  </div>\n</section>"
                },] }
    ];
    NglAccordionItem.ctorParameters = function () { return [
        { type: core.ElementRef },
        { type: core.Renderer2 }
    ]; };
    NglAccordionItem.propDecorators = {
        isActive: [{ type: core.Input }],
        section: [{ type: core.Input }],
        toggle: [{ type: core.Output }]
    };

    var DIRECTIVES$c = [
        NglAccordion,
        NglAccordionSection,
    ];
    var NglAccordionModule = /** @class */ (function () {
        function NglAccordionModule() {
        }
        return NglAccordionModule;
    }());
    NglAccordionModule.decorators = [
        { type: core.NgModule, args: [{
                    declarations: __spreadArray(__spreadArray([], __read(DIRECTIVES$c)), [NglAccordionItem]),
                    exports: DIRECTIVES$c,
                    imports: [common.CommonModule, NglIconsModule, NglInternalOutletModule],
                },] }
    ];

    var NglCommonNotify = /** @class */ (function () {
        function NglCommonNotify(element, renderer, cd, type) {
            this.element = element;
            this.renderer = renderer;
            this.cd = cd;
            this.closeButtonAssistiveText = 'Close';
            /**
             * Triggered by close button or duration timeout.
             */
            // tslint:disable-next-line:no-output-rename
            this.closeEventEmitter = new core.EventEmitter();
            this.currentTimeout = null;
            this.renderer.addClass(this.element.nativeElement, 'slds-notify');
            this.renderer.addClass(this.element.nativeElement, "slds-notify_" + type);
            this.toggleThemeClass(true, this.variant);
            this.renderer.setAttribute(this.element.nativeElement, 'role', type === 'toast' ? 'status' : 'alert');
        }
        Object.defineProperty(NglCommonNotify.prototype, "variant", {
            get: function () {
                return this._variant || 'info';
            },
            /**
             * The type of alert.
             */
            set: function (variant) {
                this.toggleThemeClass(false, this.variant);
                this._variant = variant;
                this.toggleThemeClass(true, this.variant);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NglCommonNotify.prototype, "duration", {
            /**
             * The number of milliseconds after which, the close event will be triggered with an emitted reason of `'timeout'`.
             */
            set: function (duration) {
                var _this = this;
                this.clearTimeout();
                if (isInt(duration) && duration >= 0) {
                    this.currentTimeout = setTimeout(function () { return _this.close('timeout'); }, +duration);
                }
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NglCommonNotify.prototype, "dismissible", {
            get: function () {
                return this._dismissible;
            },
            set: function (dismissible) {
                this._dismissible = dismissible;
                this.cd.markForCheck();
            },
            enumerable: false,
            configurable: true
        });
        NglCommonNotify.prototype.close = function (reason, $event) {
            this.clearTimeout();
            if ($event) {
                $event.preventDefault();
                $event.stopPropagation();
            }
            this.closeEventEmitter.emit(reason);
        };
        NglCommonNotify.prototype.ngOnDestroy = function () {
            this.clearTimeout();
        };
        NglCommonNotify.prototype.clearTimeout = function () {
            if (this.currentTimeout !== null) {
                clearTimeout(this.currentTimeout);
                this.currentTimeout = null;
            }
        };
        NglCommonNotify.prototype.toggleThemeClass = function (isAdd, klass) {
            if (!klass) {
                return;
            }
            var el = this.element.nativeElement;
            this.renderer[isAdd ? 'addClass' : 'removeClass'](el, "slds-theme_" + klass);
        };
        return NglCommonNotify;
    }());
    NglCommonNotify.decorators = [
        { type: core.Directive }
    ];
    NglCommonNotify.ctorParameters = function () { return [
        { type: core.ElementRef },
        { type: core.Renderer2 },
        { type: core.ChangeDetectorRef },
        { type: String, decorators: [{ type: core.Inject, args: ['type',] }] }
    ]; };
    NglCommonNotify.propDecorators = {
        variant: [{ type: core.Input }],
        iconName: [{ type: core.Input }],
        assistiveText: [{ type: core.Input }],
        closeButtonAssistiveText: [{ type: core.Input }],
        duration: [{ type: core.Input }],
        closeEventEmitter: [{ type: core.Output, args: ['close',] }]
    };

    var NglAlert = /** @class */ (function (_super) {
        __extends(NglAlert, _super);
        function NglAlert(element, renderer, cd) {
            return _super.call(this, element, renderer, cd, 'alert') || this;
        }
        return NglAlert;
    }(NglCommonNotify));
    NglAlert.decorators = [
        { type: core.Component, args: [{
                    selector: 'ngl-alert',
                    template: "<span class=\"slds-assistive-text\">{{assistiveText || variant}}</span>\n<ngl-icon class=\"slds-m-right_x-small\" *ngIf=\"iconName\" [iconName]=\"iconName\" size=\"x-small\" variant=\"\"></ngl-icon>\n<div class=\"slds-notify__content\">\n  <ng-content></ng-content>\n</div>\n<button class=\"slds-button slds-button_icon slds-notify__close slds-button_icon-inverse\" *ngIf=\"dismissible\" type=\"button\" (click)=\"close('button', $event)\">\n  <svg class=\"slds-button__icon\" nglIconName=\"utility:close\"></svg><span class=\"slds-assistive-text\" *ngIf=\"closeButtonAssistiveText\">{{closeButtonAssistiveText}}</span>\n</button>",
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    exportAs: 'nglAlert'
                },] }
    ];
    NglAlert.ctorParameters = function () { return [
        { type: core.ElementRef },
        { type: core.Renderer2 },
        { type: core.ChangeDetectorRef }
    ]; };

    var NglCommonNotifyClose = /** @class */ (function () {
        function NglCommonNotifyClose(host) {
            this.host = host;
            this.host.dismissible = true;
        }
        Object.defineProperty(NglCommonNotifyClose.prototype, "dismissible", {
            set: function (dismissible) {
                this.host.dismissible = dismissible;
            },
            enumerable: false,
            configurable: true
        });
        return NglCommonNotifyClose;
    }());
    NglCommonNotifyClose.decorators = [
        { type: core.Directive }
    ];
    NglCommonNotifyClose.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: core.Inject, args: ['host',] }] }
    ]; };
    NglCommonNotifyClose.propDecorators = {
        dismissible: [{ type: core.Input }]
    };

    var NglAlertClose = /** @class */ (function (_super) {
        __extends(NglAlertClose, _super);
        function NglAlertClose(alert) {
            return _super.call(this, alert) || this;
        }
        return NglAlertClose;
    }(NglCommonNotifyClose));
    NglAlertClose.decorators = [
        { type: core.Directive, args: [{
                    // tslint:disable-next-line:directive-selector
                    selector: 'ngl-alert[close]',
                },] }
    ];
    NglAlertClose.ctorParameters = function () { return [
        { type: NglAlert }
    ]; };

    var NGL_ALERT_DIRECTIVES = [
        NglAlert,
        NglAlertClose,
    ];
    var NglAlertModule = /** @class */ (function () {
        function NglAlertModule() {
        }
        return NglAlertModule;
    }());
    NglAlertModule.decorators = [
        { type: core.NgModule, args: [{
                    declarations: [NGL_ALERT_DIRECTIVES],
                    exports: [NGL_ALERT_DIRECTIVES],
                    imports: [common.CommonModule, NglIconsModule],
                },] }
    ];

    var NglAvatar = /** @class */ (function () {
        function NglAvatar(element, renderer, hostService) {
            this.element = element;
            this.hostService = hostService;
            this.src = '';
            this.alternativeText = '';
            this.fallbackIconName = 'standard:user';
            this.error = new core.EventEmitter();
            this._imgError = false;
            renderer.addClass(element.nativeElement, 'slds-avatar');
        }
        NglAvatar.prototype.fallbackIconClass = function () {
            var _a = __read(this.fallbackIconName.split(':'), 2), category = _a[0], icon = _a[1];
            return "slds-icon-" + category + "-" + icon;
        };
        Object.defineProperty(NglAvatar.prototype, "shouldShowImage", {
            get: function () {
                return this.src && !this._imgError;
            },
            enumerable: false,
            configurable: true
        });
        NglAvatar.prototype.onImgError = function () {
            this._imgError = true;
            this.error.emit();
        };
        NglAvatar.prototype.ngOnInit = function () {
            this.setHostClass();
        };
        NglAvatar.prototype.ngOnChanges = function () {
            this.setHostClass();
        };
        NglAvatar.prototype.setHostClass = function () {
            var _a;
            this.hostService.updateClass(this.element, (_a = {},
                _a["slds-avatar_" + (this.size || 'medium')] = true,
                _a["slds-avatar_" + (this.variant || 'rectangle')] = true,
                _a));
        };
        return NglAvatar;
    }());
    NglAvatar.decorators = [
        { type: core.Component, args: [{
                    selector: 'ngl-avatar',
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    template: "<img *ngIf=\"shouldShowImage; else template_initials\" [src]=\"src\" [alt]=\"alternativeText\" (error)=\"onImgError()\">\n<ng-template #template_initials><abbr class=\"slds-avatar__initials\" [ngClass]=\"fallbackIconClass()\">{{ initials }}</abbr></ng-template>",
                    providers: [HostService]
                },] }
    ];
    NglAvatar.ctorParameters = function () { return [
        { type: core.ElementRef },
        { type: core.Renderer2 },
        { type: HostService }
    ]; };
    NglAvatar.propDecorators = {
        src: [{ type: core.Input }],
        alternativeText: [{ type: core.HostBinding, args: ['attr.title',] }, { type: core.Input }],
        size: [{ type: core.Input }],
        variant: [{ type: core.Input }],
        initials: [{ type: core.Input }],
        fallbackIconName: [{ type: core.Input }],
        error: [{ type: core.Output }]
    };

    var NglAvatarModule = /** @class */ (function () {
        function NglAvatarModule() {
        }
        return NglAvatarModule;
    }());
    NglAvatarModule.decorators = [
        { type: core.NgModule, args: [{
                    declarations: [NglAvatar],
                    exports: [NglAvatar],
                    imports: [common.CommonModule],
                },] }
    ];

    var NglBadge = /** @class */ (function () {
        function NglBadge() {
        }
        return NglBadge;
    }());
    NglBadge.decorators = [
        { type: core.Component, args: [{
                    selector: 'ngl-badge',
                    template: "<span class=\"slds-badge\" [ngClass]=\"theme ? 'slds-theme_' + theme : ''\">\n  <ng-content></ng-content></span>",
                    changeDetection: core.ChangeDetectionStrategy.OnPush
                },] }
    ];
    NglBadge.propDecorators = {
        theme: [{ type: core.Input }]
    };

    var NglBadgesModule = /** @class */ (function () {
        function NglBadgesModule() {
        }
        return NglBadgesModule;
    }());
    NglBadgesModule.decorators = [
        { type: core.NgModule, args: [{
                    declarations: [NglBadge],
                    exports: [NglBadge],
                    imports: [common.CommonModule],
                },] }
    ];

    var NglBreadcrumb = /** @class */ (function () {
        function NglBreadcrumb(templateRef) {
            this.templateRef = templateRef;
        }
        return NglBreadcrumb;
    }());
    NglBreadcrumb.decorators = [
        { type: core.Directive, args: [{
                    selector: '[nglBreadcrumb]',
                },] }
    ];
    NglBreadcrumb.ctorParameters = function () { return [
        { type: core.TemplateRef }
    ]; };

    var NglBreadcrumbs = /** @class */ (function () {
        function NglBreadcrumbs() {
        }
        return NglBreadcrumbs;
    }());
    NglBreadcrumbs.decorators = [
        { type: core.Component, args: [{
                    selector: 'ngl-breadcrumbs',
                    template: "\n<nav role=\"navigation\" [attr.aria-label]=\"assistiveText\">\n  <ol class=\"slds-breadcrumb slds-list_horizontal slds-wrap\">\n    <li class=\"slds-breadcrumb__item\" *ngFor=\"let b of breadcrumbs\">\n      <ng-template [ngTemplateOutlet]=\"b.templateRef\"></ng-template>\n    </li>\n  </ol>\n</nav>",
                    changeDetection: core.ChangeDetectionStrategy.OnPush
                },] }
    ];
    NglBreadcrumbs.propDecorators = {
        assistiveText: [{ type: core.Input }],
        breadcrumbs: [{ type: core.ContentChildren, args: [NglBreadcrumb,] }]
    };

    var NGL_BREADCRUMB_DIRECTIVES = [
        NglBreadcrumbs,
        NglBreadcrumb,
    ];
    var NglBreadcrumbsModule = /** @class */ (function () {
        function NglBreadcrumbsModule() {
        }
        return NglBreadcrumbsModule;
    }());
    NglBreadcrumbsModule.decorators = [
        { type: core.NgModule, args: [{
                    declarations: [NGL_BREADCRUMB_DIRECTIVES],
                    exports: [NGL_BREADCRUMB_DIRECTIVES],
                    imports: [common.CommonModule],
                },] }
    ];

    var NglButtonIcon = /** @class */ (function () {
        function NglButtonIcon(el, hostService, renderer) {
            this.el = el;
            this.hostService = hostService;
            /**
             * The variant changes the appearance of the button
             */
            this.variant = 'border';
            renderer.addClass(this.el.nativeElement, 'slds-button');
            renderer.addClass(this.el.nativeElement, 'slds-button_icon');
        }
        Object.defineProperty(NglButtonIcon.prototype, "altText", {
            get: function () {
                return this.alternativeText || this.title;
            },
            enumerable: false,
            configurable: true
        });
        NglButtonIcon.prototype.ngOnInit = function () {
            this.setHostClass();
        };
        NglButtonIcon.prototype.ngOnChanges = function () {
            this.setHostClass();
        };
        NglButtonIcon.prototype.iconClass = function () {
            var _a;
            var hasVariant = this.hasVariant();
            var classes = (_a = {},
                _a["slds-button__icon_" + this.size] = !hasVariant,
                _a);
            return ngClassCombine(this.svgClass, classes);
        };
        NglButtonIcon.prototype.setHostClass = function () {
            var _a;
            var hasVariant = this.hasVariant();
            this.hostService.updateClass(this.el, (_a = {},
                _a["slds-button_icon-" + this.variant] = hasVariant,
                _a["slds-button_icon-" + this.size] = this.size && hasVariant,
                _a));
        };
        NglButtonIcon.prototype.hasVariant = function () {
            return this.variant && this.variant !== 'bare';
        };
        return NglButtonIcon;
    }());
    NglButtonIcon.decorators = [
        { type: core.Component, args: [{
                    // tslint:disable-next-line:component-selector
                    selector: '[nglButtonIcon]',
                    template: "\n<svg class=\"slds-button__icon\" *ngIf=\"iconName\" [nglIconName]=\"iconName\" [ngClass]=\"iconClass()\"></svg>\n<ng-content></ng-content><span class=\"slds-assistive-text\" *ngIf=\"altText as text\">{{ text }}</span>",
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    providers: [HostService]
                },] }
    ];
    NglButtonIcon.ctorParameters = function () { return [
        { type: core.ElementRef },
        { type: HostService },
        { type: core.Renderer2 }
    ]; };
    NglButtonIcon.propDecorators = {
        iconName: [{ type: core.Input }],
        title: [{ type: core.Input }],
        alternativeText: [{ type: core.Input }],
        variant: [{ type: core.Input }],
        size: [{ type: core.Input }],
        svgClass: [{ type: core.Input }]
    };

    var DEFAULT_VARIANT = 'border';
    var NglButtonIconStateful = /** @class */ (function () {
        function NglButtonIconStateful(el, hostService, renderer) {
            this.el = el;
            this.hostService = hostService;
            /**
             * Specifies whether button is in selected state or not.
             */
            this.selected = false;
            this.selectedChange = new core.EventEmitter();
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
        Object.defineProperty(NglButtonIconStateful.prototype, "altText", {
            get: function () {
                return this.alternativeText || this.title;
            },
            enumerable: false,
            configurable: true
        });
        NglButtonIconStateful.prototype.onclick = function () {
            this.selectedChange.emit(!this.selected);
        };
        NglButtonIconStateful.prototype.ngOnInit = function () {
            this.setHostClass();
        };
        NglButtonIconStateful.prototype.ngOnChanges = function () {
            this.setHostClass();
        };
        NglButtonIconStateful.prototype.setHostClass = function () {
            var _a;
            this.hostService.updateClass(this.el, (_a = {},
                _a["slds-button_icon-" + (this.variant || DEFAULT_VARIANT)] = true,
                _a["slds-button_icon-" + this.size] = !!this.size,
                _a));
        };
        return NglButtonIconStateful;
    }());
    NglButtonIconStateful.decorators = [
        { type: core.Component, args: [{
                    // tslint:disable-next-line:component-selector
                    selector: '[nglButtonIconStateful]',
                    template: "\n<svg class=\"slds-button__icon\" *ngIf=\"iconName\" [nglIconName]=\"iconName\"></svg>\n<ng-content></ng-content><span class=\"slds-assistive-text\" *ngIf=\"altText as text\">{{ text }}</span>",
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    providers: [HostService]
                },] }
    ];
    NglButtonIconStateful.ctorParameters = function () { return [
        { type: core.ElementRef },
        { type: HostService },
        { type: core.Renderer2 }
    ]; };
    NglButtonIconStateful.propDecorators = {
        selected: [{ type: core.HostBinding, args: ['class.slds-is-selected',] }, { type: core.HostBinding, args: ['attr.aria-pressed',] }, { type: core.Input }],
        selectedChange: [{ type: core.Output }],
        iconName: [{ type: core.Input }],
        title: [{ type: core.Input }],
        alternativeText: [{ type: core.Input }],
        variant: [{ type: core.Input }],
        size: [{ type: core.Input }],
        onclick: [{ type: core.HostListener, args: ['click',] }]
    };
    __decorate([
        InputBoolean()
    ], NglButtonIconStateful.prototype, "selected", void 0);

    var NGL_BUTTON_ICON_DIRECTIVES = [
        NglButtonIcon,
        NglButtonIconStateful,
    ];
    var NglButtonIconsModule = /** @class */ (function () {
        function NglButtonIconsModule() {
        }
        return NglButtonIconsModule;
    }());
    NglButtonIconsModule.decorators = [
        { type: core.NgModule, args: [{
                    declarations: NGL_BUTTON_ICON_DIRECTIVES,
                    exports: NGL_BUTTON_ICON_DIRECTIVES,
                    imports: [common.CommonModule, NglIconsModule],
                },] }
    ];

    var NglButton = /** @class */ (function () {
        function NglButton(el, renderer, hostService) {
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
        NglButton.prototype.ngOnInit = function () {
            this.setHostClass();
        };
        NglButton.prototype.ngOnChanges = function (changes) {
            if (changes.variant) {
                this.setHostClass();
            }
        };
        NglButton.prototype.hasLeftIcon = function () {
            return this.iconName && (!this.iconPosition || this.iconPosition === 'left');
        };
        NglButton.prototype.hasRightIcon = function () {
            return this.iconName && this.iconPosition === 'right';
        };
        NglButton.prototype.setHostClass = function () {
            var _a;
            this.hostService.updateClass(this.el, (_a = {},
                _a["slds-button_" + this.variant] = this.variant && this.variant !== 'base',
                _a));
        };
        return NglButton;
    }());
    NglButton.decorators = [
        { type: core.Component, args: [{
                    // tslint:disable-next-line:component-selector
                    selector: '[nglButton]',
                    template: "\n<svg class=\"slds-button__icon slds-button__icon_left\" *ngIf=\"hasLeftIcon()\" [nglIconName]=\"iconName\"></svg>\n<ng-content></ng-content>\n<svg class=\"slds-button__icon slds-button__icon_right\" *ngIf=\"hasRightIcon()\" [nglIconName]=\"iconName\"></svg>",
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    providers: [HostService]
                },] }
    ];
    NglButton.ctorParameters = function () { return [
        { type: core.ElementRef },
        { type: core.Renderer2 },
        { type: HostService }
    ]; };
    NglButton.propDecorators = {
        variant: [{ type: core.Input }],
        iconName: [{ type: core.Input }],
        iconPosition: [{ type: core.Input }]
    };

    var NglButtonStateful = /** @class */ (function () {
        function NglButtonStateful(el, renderer, hostService) {
            this.el = el;
            this.renderer = renderer;
            this.hostService = hostService;
            /**
             * Triggered when the button is clicked.
             */
            this.stateChange = new core.EventEmitter();
            /**
             * Appearance.
             */
            this.variant = 'neutral';
            this.renderer.addClass(this.el.nativeElement, 'slds-button');
            this.renderer.addClass(this.el.nativeElement, 'slds-button_stateful');
            this.renderer.setAttribute(this.el.nativeElement, 'aria-live', 'assertive');
        }
        NglButtonStateful.prototype.onSelectChange = function () {
            this.stateChange.emit(!this.state);
        };
        NglButtonStateful.prototype.onFocusToggle = function (focused) {
            this.focused = !!+focused;
            if (!this.focused) {
                this.setHostClass();
            }
        };
        NglButtonStateful.prototype.ngOnInit = function () {
            this.setHostClass();
        };
        NglButtonStateful.prototype.ngOnChanges = function () {
            this.setHostClass();
        };
        NglButtonStateful.prototype.setHostClass = function () {
            var _a;
            this.hostService.updateClass(this.el, (_a = {},
                _a["slds-button_" + (this.variant === 'text' ? 'reset' : this.variant)] = !!this.variant,
                _a["slds-is-selected-clicked"] = this.state && this.focused,
                _a["slds-is-selected"] = this.state && !this.focused,
                _a["slds-not-selected"] = !this.state,
                _a));
        };
        return NglButtonStateful;
    }());
    NglButtonStateful.decorators = [
        { type: core.Directive, args: [{
                    selector: '[nglButtonStateful]',
                    providers: [HostService],
                },] }
    ];
    NglButtonStateful.ctorParameters = function () { return [
        { type: core.ElementRef },
        { type: core.Renderer2 },
        { type: HostService }
    ]; };
    NglButtonStateful.propDecorators = {
        state: [{ type: core.Input }],
        stateChange: [{ type: core.Output }],
        variant: [{ type: core.Input }],
        onSelectChange: [{ type: core.HostListener, args: ['click',] }],
        onFocusToggle: [{ type: core.HostListener, args: ['focus', ['1'],] }, { type: core.HostListener, args: ['blur', ['0'],] }]
    };
    __decorate([
        InputBoolean()
    ], NglButtonStateful.prototype, "state", void 0);

    var NglButtonStateOn = /** @class */ (function () {
        function NglButtonStateOn(el, renderer) {
            this.el = el;
            this.renderer = renderer;
            this.renderer.addClass(this.el.nativeElement, this.getHostClass());
        }
        NglButtonStateOn.prototype.getHostClass = function () {
            return 'slds-text-selected';
        };
        return NglButtonStateOn;
    }());
    NglButtonStateOn.decorators = [
        { type: core.Component, args: [{
                    selector: 'ngl-state-on',
                    template: "\n<svg class=\"slds-button__icon slds-button__icon_small slds-button__icon_left\" *ngIf=\"iconName\" [nglIconName]=\"iconName\"></svg>\n<ng-content></ng-content>",
                    changeDetection: core.ChangeDetectionStrategy.OnPush
                },] }
    ];
    NglButtonStateOn.ctorParameters = function () { return [
        { type: core.ElementRef },
        { type: core.Renderer2 }
    ]; };
    NglButtonStateOn.propDecorators = {
        iconName: [{ type: core.Input }]
    };
    var NglButtonStateOff = /** @class */ (function (_super) {
        __extends(NglButtonStateOff, _super);
        function NglButtonStateOff() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        NglButtonStateOff.prototype.getHostClass = function () {
            return 'slds-text-not-selected';
        };
        return NglButtonStateOff;
    }(NglButtonStateOn));
    NglButtonStateOff.decorators = [
        { type: core.Component, args: [{
                    selector: 'ngl-state-off',
                    template: "\n<svg class=\"slds-button__icon slds-button__icon_small slds-button__icon_left\" *ngIf=\"iconName\" [nglIconName]=\"iconName\"></svg>\n<ng-content></ng-content>",
                    changeDetection: core.ChangeDetectionStrategy.OnPush
                },] }
    ];
    var NglButtonStateHover = /** @class */ (function (_super) {
        __extends(NglButtonStateHover, _super);
        function NglButtonStateHover() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        NglButtonStateHover.prototype.getHostClass = function () {
            return 'slds-text-selected-focus';
        };
        return NglButtonStateHover;
    }(NglButtonStateOn));
    NglButtonStateHover.decorators = [
        { type: core.Component, args: [{
                    selector: 'ngl-state-hover',
                    template: "\n<svg class=\"slds-button__icon slds-button__icon_small slds-button__icon_left\" *ngIf=\"iconName\" [nglIconName]=\"iconName\"></svg>\n<ng-content></ng-content>",
                    changeDetection: core.ChangeDetectionStrategy.OnPush
                },] }
    ];

    var NGL_BUTTON_DIRECTIVES = [
        NglButton,
        NglButtonStateful,
        NglButtonStateOn,
        NglButtonStateOff,
        NglButtonStateHover
    ];
    var NglButtonsModule = /** @class */ (function () {
        function NglButtonsModule() {
        }
        return NglButtonsModule;
    }());
    NglButtonsModule.decorators = [
        { type: core.NgModule, args: [{
                    declarations: NGL_BUTTON_DIRECTIVES,
                    exports: NGL_BUTTON_DIRECTIVES,
                    imports: [common.CommonModule, NglIconsModule],
                },] }
    ];

    var NglCarouselImage = /** @class */ (function () {
        function NglCarouselImage(el, renderer) {
            this.el = el;
            this.renderer = renderer;
            this.uid = uniqueId('carousel-image');
            this.renderer.setAttribute(this.el.nativeElement, 'id', this.uid);
            this.renderer.addClass(this.el.nativeElement, 'slds-carousel__panel');
            this.renderer.setAttribute(this.el.nativeElement, 'role', 'tabpanel');
        }
        Object.defineProperty(NglCarouselImage.prototype, "labelledby", {
            set: function (labelledby) {
                this.renderer.setAttribute(this.el.nativeElement, 'aria-labelledby', labelledby);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NglCarouselImage.prototype, "active", {
            set: function (active) {
                this.renderer.setAttribute(this.el.nativeElement, 'aria-hidden', "" + !active);
            },
            enumerable: false,
            configurable: true
        });
        return NglCarouselImage;
    }());
    NglCarouselImage.decorators = [
        { type: core.Component, args: [{
                    selector: 'ngl-carousel-image',
                    template: "<a class=\"slds-carousel__panel-action slds-text-link_reset\" href=\"javascript:void(0);\" [attr.tabindex]=\"active ? 0 : -1\">\n  <div class=\"slds-carousel__image\"><img [src]=\"src\" [attr.alt]=\"alternativeText || null\"></div>\n  <div class=\"slds-carousel__content\">\n    <h2 class=\"slds-carousel__content-title\" [nglInternalOutlet]=\"header\"></h2>\n    <p [nglInternalOutlet]=\"description\"></p>\n  </div></a>",
                    changeDetection: core.ChangeDetectionStrategy.OnPush
                },] }
    ];
    NglCarouselImage.ctorParameters = function () { return [
        { type: core.ElementRef },
        { type: core.Renderer2 }
    ]; };
    NglCarouselImage.propDecorators = {
        src: [{ type: core.Input }],
        header: [{ type: core.Input }],
        description: [{ type: core.Input }],
        alternativeText: [{ type: core.Input }]
    };

    var NglCarouselIndicator = /** @class */ (function () {
        function NglCarouselIndicator(el) {
            this.el = el;
            this.uid = uniqueId('carousel-indicator');
        }
        Object.defineProperty(NglCarouselIndicator.prototype, "tabindex", {
            get: function () {
                return this.isActive ? 0 : -1;
            },
            enumerable: false,
            configurable: true
        });
        NglCarouselIndicator.prototype.ngOnChanges = function (changes) {
            this.image.active = this.isActive;
            if (changes.image) {
                this.image.labelledby = this.uid;
            }
        };
        NglCarouselIndicator.prototype.focus = function () {
            this.el.nativeElement.focus();
        };
        return NglCarouselIndicator;
    }());
    NglCarouselIndicator.decorators = [
        { type: core.Directive, args: [{
                    selector: '[nglCarouselIndicator]',
                },] }
    ];
    NglCarouselIndicator.ctorParameters = function () { return [
        { type: core.ElementRef }
    ]; };
    NglCarouselIndicator.propDecorators = {
        isActive: [{ type: core.HostBinding, args: ['class.slds-is-active',] }, { type: core.HostBinding, args: ['attr.aria-selected',] }, { type: core.Input }],
        tabindex: [{ type: core.HostBinding, args: ['attr.tabindex',] }],
        image: [{ type: core.Input }],
        uid: [{ type: core.HostBinding, args: ['attr.id',] }]
    };
    __decorate([
        InputBoolean()
    ], NglCarouselIndicator.prototype, "isActive", void 0);

    var NglCarousel = /** @class */ (function () {
        function NglCarousel(document) {
            this.document = document;
            this.activeChange = new core.EventEmitter();
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
        NglCarousel.prototype.isActive = function (index) {
            return index === this.active;
        };
        NglCarousel.prototype.getImage = function (index) {
            return this.images.toArray()[index];
        };
        NglCarousel.prototype.ngOnChanges = function (changes) {
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
        };
        NglCarousel.prototype.onIndicatorClick = function (index) {
            this.setActive(index, true);
        };
        NglCarousel.prototype.onKeyboard = function (evt) {
            if (evt.keyCode === keycodes.LEFT_ARROW || evt.keyCode === keycodes.RIGHT_ARROW) {
                this.activateNext(evt.keyCode === keycodes.LEFT_ARROW);
            }
        };
        NglCarousel.prototype.setActive = function (index, stopPlaying) {
            if (stopPlaying === void 0) { stopPlaying = false; }
            if (stopPlaying) {
                this.playing = false;
            }
            if (this.active !== index) {
                this.activeChange.emit(index);
            }
        };
        NglCarousel.prototype.togglePlay = function () {
            this.playing = !this.playing;
            this.setTimer();
        };
        NglCarousel.prototype.playLabel = function () {
            return this.labels[this.playing ? 'stopAutoPlay' : 'startAutoPlay'];
        };
        NglCarousel.prototype.activateNext = function (reverse) {
            if (reverse === void 0) { reverse = false; }
            var active = this.active + (reverse ? -1 : 1);
            if ((active < 0 || active > this.images.length - 1) && !this.autoRefresh) {
                return;
            }
            this.setActive((this.images.length + active) % this.images.length);
        };
        NglCarousel.prototype.setTimer = function () {
            var _this = this;
            clearTimeout(this.nextTimer);
            if (this.autoScroll && this.playing) {
                this.nextTimer = setTimeout(function () {
                    _this.activateNext();
                }, this.scrollDuration * 1000);
            }
        };
        return NglCarousel;
    }());
    NglCarousel.decorators = [
        { type: core.Component, args: [{
                    selector: 'ngl-carousel',
                    template: "\n<div class=\"slds-carousel__stage\"><span class=\"slds-carousel__autoplay\" *ngIf=\"autoScroll\">\n    <button class=\"slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-x-small\" [attr.aria-pressed]=\"!playing\" [title]=\"playLabel()\" (click)=\"togglePlay()\">\n      <svg class=\"slds-button__icon\" [nglIconName]=\"playing ? 'utility:pause' : 'utility:right'\"></svg><span class=\"slds-assistive-text\">{{ playLabel() }}</span>\n    </button></span>\n  <div class=\"slds-carousel__panels\" [style.transform]=\"'translateX(' + (-active * 100) + '%)'\">\n    <ng-content></ng-content>\n  </div>\n  <ul class=\"slds-carousel__indicators\" #indicatorsEl role=\"tablist\" (keydown)=\"onKeyboard($event)\">\n    <li class=\"slds-carousel__indicator\" *ngFor=\"let image of images; let i = index\" role=\"presentation\"><a class=\"slds-carousel__indicator-action\" nglCarouselIndicator href=\"javascript:void(0);\" role=\"tab\" [isActive]=\"isActive(i)\" [image]=\"getImage(i)\" [attr.aria-controls]=\"image.uid\" [title]=\"image.header\" (click)=\"onIndicatorClick(i)\"><span class=\"slds-assistive-text\">{{ image.header }}</span></a></li>\n  </ul>\n</div>",
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    host: {
                        '[class.slds-carousel]': 'true',
                    }
                },] }
    ];
    NglCarousel.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: core.Optional }, { type: core.Inject, args: [common.DOCUMENT,] }] }
    ]; };
    NglCarousel.propDecorators = {
        active: [{ type: core.Input }],
        activeChange: [{ type: core.Output }],
        scrollDuration: [{ type: core.Input }],
        autoScroll: [{ type: core.Input }],
        autoRefresh: [{ type: core.Input }],
        images: [{ type: core.ContentChildren, args: [NglCarouselImage,] }],
        indicators: [{ type: core.ViewChildren, args: [NglCarouselIndicator,] }],
        indicatorsEl: [{ type: core.ViewChild, args: ['indicatorsEl', { static: true },] }],
        labels: [{ type: core.Input }]
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

    var DIRECTIVES$b = [
        NglCarousel,
        NglCarouselImage,
    ];
    var NglCarouselModule = /** @class */ (function () {
        function NglCarouselModule() {
        }
        return NglCarouselModule;
    }());
    NglCarouselModule.decorators = [
        { type: core.NgModule, args: [{
                    declarations: __spreadArray(__spreadArray([], __read(DIRECTIVES$b)), [NglCarouselIndicator]),
                    exports: DIRECTIVES$b,
                    imports: [common.CommonModule, NglIconsModule, NglInternalOutletModule],
                },] }
    ];

    var NglCheckboxInput = /** @class */ (function () {
        function NglCheckboxInput(el, renderer) {
            this.el = el;
            this.renderer = renderer;
            this.ɵRequiredSubject = new rxjs.BehaviorSubject(false);
            if (!this.el.nativeElement.id) {
                this.renderer.setAttribute(this.el.nativeElement, 'id', uniqueId('checkbox'));
            }
        }
        Object.defineProperty(NglCheckboxInput.prototype, "describedBy", {
            set: function (value) {
                this.renderer.setAttribute(this.el.nativeElement, 'aria-describedby', value);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NglCheckboxInput.prototype, "required", {
            set: function (required) {
                this.ɵRequiredSubject.next(toBoolean(required));
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NglCheckboxInput.prototype, "id", {
            get: function () {
                return this.el.nativeElement.id;
            },
            enumerable: false,
            configurable: true
        });
        NglCheckboxInput.prototype.addClass = function (klass) {
            this.renderer.addClass(this.el.nativeElement, klass);
        };
        return NglCheckboxInput;
    }());
    NglCheckboxInput.decorators = [
        { type: core.Directive, args: [{
                    selector: 'input[ngl][type=checkbox]',
                },] }
    ];
    NglCheckboxInput.ctorParameters = function () { return [
        { type: core.ElementRef },
        { type: core.Renderer2 }
    ]; };
    NglCheckboxInput.propDecorators = {
        required: [{ type: core.Input }]
    };

    var NglCheckboxButton = /** @class */ (function () {
        function NglCheckboxButton(cd) {
            this.cd = cd;
        }
        NglCheckboxButton.prototype.ngAfterContentInit = function () {
            if (!this.input) {
                throw Error("[ng-lightning] Couldn't find an <input type=\"checkbox\"> with [ngl] attribute inside " + this);
            }
            this._uid = this.input.id;
            this.cd.detectChanges();
            this.input.addClass('slds-assistive-text');
        };
        return NglCheckboxButton;
    }());
    NglCheckboxButton.decorators = [
        { type: core.Component, args: [{
                    selector: 'ngl-checkbox-button',
                    template: "\n<ng-content></ng-content>\n<label class=\"slds-checkbox_faux\" [attr.for]=\"_uid\"><span class=\"slds-assistive-text\" [nglInternalOutlet]=\"label\"></span></label>",
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    host: {
                        '[class.slds-checkbox_add-button]': 'true',
                    }
                },] }
    ];
    NglCheckboxButton.ctorParameters = function () { return [
        { type: core.ChangeDetectorRef }
    ]; };
    NglCheckboxButton.propDecorators = {
        input: [{ type: core.ContentChild, args: [NglCheckboxInput, { static: true },] }],
        label: [{ type: core.Input }]
    };

    var NglCheckbox = /** @class */ (function () {
        function NglCheckbox(cd) {
            this.cd = cd;
        }
        Object.defineProperty(NglCheckbox.prototype, "hasError", {
            get: function () {
                return toBoolean(this.error);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NglCheckbox.prototype, "errorId", {
            get: function () {
                return "error_" + this._uid;
            },
            enumerable: false,
            configurable: true
        });
        NglCheckbox.prototype.ngOnChanges = function () {
            this.input.describedBy = this.error ? this.errorId : null;
        };
        NglCheckbox.prototype.ngAfterContentInit = function () {
            var _this = this;
            if (!this.input) {
                throw Error("[ng-lightning] Couldn't find an <input type=\"checkbox\"> with [ngl] attribute inside NglCheckbox");
            }
            this.ɵRequiredSubscription = this.input.ɵRequiredSubject.subscribe(function (required) {
                _this.required = required;
                _this.cd.detectChanges();
            });
            this._uid = this.input.id;
            this.cd.detectChanges();
        };
        NglCheckbox.prototype.ngOnDestroy = function () {
            if (this.ɵRequiredSubscription) {
                this.ɵRequiredSubscription.unsubscribe();
                this.ɵRequiredSubscription = null;
            }
        };
        return NglCheckbox;
    }());
    NglCheckbox.decorators = [
        { type: core.Component, args: [{
                    selector: 'ngl-checkbox,[ngl-checkbox]',
                    template: "\n<div class=\"slds-form-element__control\">\n  <div class=\"slds-checkbox\" [class.slds-checkbox_stacked]=\"stacked\"><abbr class=\"slds-required\" *ngIf=\"required\" title=\"required\">*</abbr>\n    <ng-content></ng-content>\n    <label class=\"slds-checkbox__label\" [attr.for]=\"_uid\"><span class=\"slds-checkbox_faux\"></span><span class=\"slds-form-element__label\" [nglInternalOutlet]=\"label\"></span></label>\n  </div>\n</div>\n<div class=\"slds-form-element__help\" *ngIf=\"hasError\" [id]=\"errorId\" [nglInternalOutlet]=\"error\"></div>",
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    host: {
                        '[class.slds-form-element]': 'true',
                    }
                },] }
    ];
    NglCheckbox.ctorParameters = function () { return [
        { type: core.ChangeDetectorRef }
    ]; };
    NglCheckbox.propDecorators = {
        input: [{ type: core.ContentChild, args: [NglCheckboxInput, { static: true },] }],
        label: [{ type: core.Input }],
        error: [{ type: core.Input }],
        stacked: [{ type: core.Input }],
        hasError: [{ type: core.HostBinding, args: ['class.slds-has-error',] }]
    };
    __decorate([
        InputBoolean()
    ], NglCheckbox.prototype, "stacked", void 0);

    var NglCheckboxToggle = /** @class */ (function () {
        function NglCheckboxToggle(cd) {
            this.cd = cd;
            this.enabledText = 'Enabled';
            this.disabledText = 'Disabled';
        }
        Object.defineProperty(NglCheckboxToggle.prototype, "hasError", {
            get: function () {
                return toBoolean(this.error);
            },
            enumerable: false,
            configurable: true
        });
        NglCheckboxToggle.prototype.ngAfterContentInit = function () {
            var _this = this;
            if (!this.input) {
                throw Error("[ng-lightning] Couldn't find an <input type=\"checkbox\"> with [ngl] attribute inside NglCheckboxToggle");
            }
            this.ɵRequiredSubscription = this.input.ɵRequiredSubject.subscribe(function (required) {
                _this.required = required;
                _this.cd.detectChanges();
            });
            this.uid = this.input.id + "_toggle";
            this.input.describedBy = this.uid;
            this.cd.detectChanges();
        };
        NglCheckboxToggle.prototype.ngOnDestroy = function () {
            if (this.ɵRequiredSubscription) {
                this.ɵRequiredSubscription.unsubscribe();
                this.ɵRequiredSubscription = null;
            }
        };
        return NglCheckboxToggle;
    }());
    NglCheckboxToggle.decorators = [
        { type: core.Component, args: [{
                    selector: 'ngl-checkbox-toggle',
                    template: "\n<label class=\"slds-checkbox_toggle slds-grid\"><abbr class=\"slds-required\" *ngIf=\"required\" title=\"required\">*</abbr><span class=\"slds-form-element__label slds-m-bottom_none\" [nglInternalOutlet]=\"label\"></span>\n  <ng-content></ng-content><span class=\"slds-checkbox_faux_container\" [id]=\"uid\" aria-live=\"assertive\"><span class=\"slds-checkbox_faux\"></span><span class=\"slds-checkbox_on\">{{enabledText}}</span><span class=\"slds-checkbox_off\">{{disabledText}}</span></span>\n</label>\n<div class=\"slds-form-element__help\" *ngIf=\"error\">{{error}}</div>",
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    host: {
                        '[class.slds-form-element]': 'true',
                    }
                },] }
    ];
    NglCheckboxToggle.ctorParameters = function () { return [
        { type: core.ChangeDetectorRef }
    ]; };
    NglCheckboxToggle.propDecorators = {
        input: [{ type: core.ContentChild, args: [NglCheckboxInput, { static: true },] }],
        label: [{ type: core.Input }],
        error: [{ type: core.Input }],
        enabledText: [{ type: core.Input }],
        disabledText: [{ type: core.Input }],
        hasError: [{ type: core.HostBinding, args: ['class.slds-has-error',] }]
    };

    var NglCheckboxOption = /** @class */ (function () {
        function NglCheckboxOption(cd, element, hostService) {
            this.cd = cd;
            this.element = element;
            this.hostService = hostService;
        }
        Object.defineProperty(NglCheckboxOption.prototype, "type", {
            get: function () {
                return this._type;
            },
            set: function (type) {
                this._type = type;
                this.setHostClass();
                this.cd.detectChanges();
            },
            enumerable: false,
            configurable: true
        });
        NglCheckboxOption.prototype.setError = function (id) {
            this.input.describedBy = id;
        };
        NglCheckboxOption.prototype.setHostClass = function () {
            var _a;
            this.hostService.updateClass(this.element, (_a = {},
                _a["slds-checkbox"] = this.type === 'list',
                _a["slds-button"] = this.type === 'button',
                _a["slds-checkbox_button"] = this.type === 'button',
                _a));
        };
        return NglCheckboxOption;
    }());
    NglCheckboxOption.decorators = [
        { type: core.Component, args: [{
                    selector: 'ngl-checkbox-option',
                    template: "\n<ng-content></ng-content>\n<label class=\"slds-checkbox__label\" *ngIf=\"type === 'list'\" [attr.for]=\"input.id\"><span class=\"slds-checkbox_faux\"></span><span class=\"slds-form-element__label\" [nglInternalOutlet]=\"label\"></span></label>\n<label class=\"slds-checkbox_button__label\" *ngIf=\"type === 'button'\" [attr.for]=\"input.id\"><span class=\"slds-checkbox_faux\" [nglInternalOutlet]=\"label\"></span></label>",
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    providers: [HostService]
                },] }
    ];
    NglCheckboxOption.ctorParameters = function () { return [
        { type: core.ChangeDetectorRef },
        { type: core.ElementRef },
        { type: HostService }
    ]; };
    NglCheckboxOption.propDecorators = {
        label: [{ type: core.Input }],
        input: [{ type: core.ContentChild, args: [NglCheckboxInput, { static: true },] }]
    };

    var NglCheckboxGroup = /** @class */ (function () {
        function NglCheckboxGroup() {
            this.uid = uniqueId('checkbox-group');
            this._type = 'list';
        }
        Object.defineProperty(NglCheckboxGroup.prototype, "hasError", {
            get: function () {
                return toBoolean(this.error);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NglCheckboxGroup.prototype, "errorId", {
            get: function () {
                return "error_" + this.uid;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NglCheckboxGroup.prototype, "type", {
            get: function () {
                return this._type;
            },
            set: function (type) {
                this._type = type;
                this.updateChildrenType();
            },
            enumerable: false,
            configurable: true
        });
        NglCheckboxGroup.prototype.ngOnChanges = function (changes) {
            var _this = this;
            if (changes.error && this.options) {
                this.options.forEach(function (option) {
                    option.setError(_this.error ? _this.errorId : null);
                });
            }
        };
        NglCheckboxGroup.prototype.ngAfterContentInit = function () {
            this.updateChildrenType();
        };
        NglCheckboxGroup.prototype.updateChildrenType = function () {
            var _this = this;
            if (!this.options) {
                return;
            }
            this.options.forEach(function (option) {
                option.type = _this.type;
            });
        };
        return NglCheckboxGroup;
    }());
    NglCheckboxGroup.decorators = [
        { type: core.Component, args: [{
                    selector: 'ngl-checkbox-group,[ngl-checkbox-group]',
                    template: "\n<legend class=\"slds-form-element__legend slds-form-element__label\"><abbr class=\"slds-required\" *ngIf=\"required\" title=\"required\">*</abbr><span [nglInternalOutlet]=\"label\"></span></legend>\n<div class=\"slds-form-element__control\">\n  <div class=\"slds-checkbox_button-group\" *ngIf=\"type === 'button'; else contentTpl\">\n    <ng-container *ngTemplateOutlet=\"contentTpl\"></ng-container>\n  </div>\n</div>\n<div class=\"slds-form-element__help\" *ngIf=\"hasError\" [id]=\"errorId\" [nglInternalOutlet]=\"error\"></div>\n<ng-template #contentTpl>\n  <ng-content></ng-content>\n</ng-template>",
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    host: {
                        '[class.slds-form-element]': 'true',
                    }
                },] }
    ];
    NglCheckboxGroup.propDecorators = {
        options: [{ type: core.ContentChildren, args: [NglCheckboxOption,] }],
        label: [{ type: core.Input }],
        error: [{ type: core.Input }],
        hasError: [{ type: core.HostBinding, args: ['class.slds-has-error',] }],
        required: [{ type: core.Input }],
        type: [{ type: core.Input }]
    };
    __decorate([
        InputBoolean()
    ], NglCheckboxGroup.prototype, "required", void 0);

    var DIRECTIVES$a = [
        NglCheckboxButton,
        NglCheckbox,
        NglCheckboxToggle,
        NglCheckboxInput,
        NglCheckboxGroup,
        NglCheckboxOption,
    ];
    var NglCheckboxesModule = /** @class */ (function () {
        function NglCheckboxesModule() {
        }
        return NglCheckboxesModule;
    }());
    NglCheckboxesModule.decorators = [
        { type: core.NgModule, args: [{
                    declarations: DIRECTIVES$a,
                    exports: DIRECTIVES$a,
                    imports: [common.CommonModule, NglInternalOutletModule],
                },] }
    ];

    /*
     * <ng-template ngl-tab label="...">
     *    Content goes here...
     * </ng-template>
     */
    var NglTab = /** @class */ (function () {
        function NglTab(templateRef) {
            this.templateRef = templateRef;
            this.activate = new core.EventEmitter();
            this.deactivate = new core.EventEmitter();
            this.uid = uniqueId('tab');
            this._active = false;
        }
        Object.defineProperty(NglTab.prototype, "active", {
            get: function () {
                return this._active;
            },
            set: function (active) {
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
            },
            enumerable: false,
            configurable: true
        });
        return NglTab;
    }());
    NglTab.decorators = [
        { type: core.Directive, args: [{
                    // tslint:disable-next-line:directive-selector
                    selector: '[ngl-tab]',
                    exportAs: 'nglTab',
                },] }
    ];
    NglTab.ctorParameters = function () { return [
        { type: core.TemplateRef, decorators: [{ type: core.Optional }] }
    ]; };
    NglTab.propDecorators = {
        id: [{ type: core.Input }],
        label: [{ type: core.Input }],
        activate: [{ type: core.Output }],
        deactivate: [{ type: core.Output }]
    };

    var NglTabs = /** @class */ (function () {
        function NglTabs(element, renderer) {
            this.element = element;
            this.renderer = renderer;
            this.selectedChange = new core.EventEmitter();
            /**
             * Whether every tab's content is instantiated when visible, and destroyed when hidden.
             */
            this.lazy = true;
            this.renderer.addClass(this.element.nativeElement, "slds-tabs_" + this.variant);
        }
        Object.defineProperty(NglTabs.prototype, "variant", {
            get: function () {
                return this._variant || 'default';
            },
            set: function (variant) {
                var el = this.element.nativeElement;
                this.renderer.removeClass(el, "slds-tabs_" + this.variant);
                this._variant = variant;
                this.renderer.addClass(el, "slds-tabs_" + this.variant);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NglTabs.prototype, "setSelected", {
            set: function (selected) {
                if (selected === this.selected) {
                    return;
                }
                this.selected = selected;
                if (!this.tabs) {
                    return;
                } // Wait for content to initialize
                this.activate();
            },
            enumerable: false,
            configurable: true
        });
        NglTabs.prototype.ngAfterContentInit = function () {
            var _this = this;
            // Initial selection after all tabs are created
            this.activate();
            if (!this.activeTab) {
                setTimeout(function () { return _this.select(_this.tabs.first); });
            }
        };
        NglTabs.prototype.select = function (tab) {
            this.selectedChange.emit(tab);
        };
        NglTabs.prototype.move = function (evt, moves) {
            evt.preventDefault();
            var tabs = this.tabs.toArray();
            var selectedIndex = tabs.indexOf(this.activeTab);
            this.select(tabs[(tabs.length + selectedIndex + moves) % tabs.length]);
        };
        NglTabs.prototype.tabClass = function (tab) {
            return "slds-tabs_" + this.variant + "__content slds-" + (tab.active ? 'show' : 'hide');
        };
        NglTabs.prototype.trackByTab = function (index, tab) {
            return tab.uid;
        };
        NglTabs.prototype.activate = function () {
            if (this.activeTab) {
                this.activeTab.active = false;
            }
            this.activeTab = this.findTab();
            if (this.activeTab) {
                this.activeTab.active = true;
            }
        };
        NglTabs.prototype.findTab = function (value) {
            if (value === void 0) { value = this.selected; }
            if (value instanceof NglTab) {
                return value;
            }
            if (isInt(value)) {
                return this.tabs.toArray()[+value];
            }
            return this.tabs.toArray().find(function (t) {
                return t.id && t.id === value;
            });
        };
        return NglTabs;
    }());
    NglTabs.decorators = [
        { type: core.Component, args: [{
                    selector: 'ngl-tabset',
                    template: "\n<ul [ngClass]=\"'slds-tabs_' + variant + '__nav'\" role=\"tablist\" (keydown.ArrowLeft)=\"move($event, -1)\" (keydown.ArrowRight)=\"move($event, 1)\">\n  <li *ngFor=\"let tab of tabs; trackBy: trackByTab\" [ngClass]=\"'slds-tabs_' + variant + '__item'\" [class.slds-is-active]=\"tab.active\" [id]=\"tab.uid + '__item'\" [attr.aria-controls]=\"tab.uid\" (click)=\"select(tab)\" role=\"presentation\"><a [nglInternalOutlet]=\"tab.label\" [ngClass]=\"'slds-tabs_' + variant + '__link'\" role=\"tab\" [attr.aria-selected]=\"tab.active\" [attr.tabindex]=\"tab.active ? 0 : -1\"></a></li>\n</ul>\n<div *ngFor=\"let tab of tabs; trackBy: trackByTab\" [id]=\"tab.uid\" [attr.aria-labelledby]=\"tab.uid + '__item'\" [ngClass]=\"tabClass(tab)\" role=\"tabpanel\">\n  <ng-container *ngIf=\"!lazy || tab.active\">\n    <ng-template [ngTemplateOutlet]=\"tab?.templateRef\"></ng-template>\n  </ng-container>\n</div>"
                },] }
    ];
    NglTabs.ctorParameters = function () { return [
        { type: core.ElementRef },
        { type: core.Renderer2 }
    ]; };
    NglTabs.propDecorators = {
        variant: [{ type: core.Input }],
        tabs: [{ type: core.ContentChildren, args: [NglTab,] }],
        setSelected: [{ type: core.Input, args: ['selected',] }],
        selectedChange: [{ type: core.Output }],
        lazy: [{ type: core.Input }]
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
    var NglTabLabel = /** @class */ (function () {
        function NglTabLabel(templateRef) {
            this.templateRef = templateRef;
        }
        return NglTabLabel;
    }());
    NglTabLabel.decorators = [
        { type: core.Directive, args: [{ selector: '[ngl-tab-label]' },] }
    ];
    NglTabLabel.ctorParameters = function () { return [
        { type: core.TemplateRef }
    ]; };
    // tslint:disable-next-line:directive-selector
    var NglTabContent = /** @class */ (function () {
        function NglTabContent(templateRef) {
            this.templateRef = templateRef;
        }
        return NglTabContent;
    }());
    NglTabContent.decorators = [
        { type: core.Directive, args: [{ selector: '[ngl-tab-content]' },] }
    ];
    NglTabContent.ctorParameters = function () { return [
        { type: core.TemplateRef }
    ]; };
    var NglTabVerbose = /** @class */ (function (_super) {
        __extends(NglTabVerbose, _super);
        function NglTabVerbose() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        NglTabVerbose.prototype.ngAfterContentInit = function () {
            if (this.labelTemplate) {
                this.label = this.labelTemplate.templateRef;
            }
            this.templateRef = this.contentTemplate.templateRef;
        };
        return NglTabVerbose;
    }(NglTab));
    NglTabVerbose.decorators = [
        { type: core.Directive, args: [{
                    // tslint:disable-next-line:directive-selector
                    selector: 'ngl-tab',
                    providers: [{ provide: NglTab, useExisting: NglTabVerbose }],
                },] }
    ];
    NglTabVerbose.propDecorators = {
        contentTemplate: [{ type: core.ContentChild, args: [NglTabContent,] }],
        labelTemplate: [{ type: core.ContentChild, args: [NglTabLabel,] }]
    };

    var NGL_TAB_DIRECTIVES = [
        NglTabs,
        NglTab,
        NglTabVerbose, NglTabContent, NglTabLabel,
    ];
    var NglTabsModule = /** @class */ (function () {
        function NglTabsModule() {
        }
        return NglTabsModule;
    }());
    NglTabsModule.decorators = [
        { type: core.NgModule, args: [{
                    declarations: [NGL_TAB_DIRECTIVES],
                    exports: [NGL_TAB_DIRECTIVES],
                    imports: [common.CommonModule, NglInternalOutletModule],
                },] }
    ];

    var POSITION_MAP = {
        'top': {
            position: new overlay.ConnectionPositionPair({ originX: 'center', originY: 'top' }, { overlayX: 'center', overlayY: 'bottom' }),
            nubbin: 'bottom'
        },
        'top-left': {
            position: new overlay.ConnectionPositionPair({ originX: 'center', originY: 'top' }, { overlayX: 'start', overlayY: 'bottom' }),
            nubbin: 'bottom-left'
        },
        'top-left-corner': {
            position: new overlay.ConnectionPositionPair({ originX: 'center', originY: 'top' }, { overlayX: 'start', overlayY: 'bottom' }),
            nubbin: 'bottom-left-corner'
        },
        'top-right': {
            position: new overlay.ConnectionPositionPair({ originX: 'center', originY: 'top' }, { overlayX: 'end', overlayY: 'bottom' }),
            nubbin: 'bottom-right'
        },
        'top-right-corner': {
            position: new overlay.ConnectionPositionPair({ originX: 'center', originY: 'top' }, { overlayX: 'end', overlayY: 'bottom' }),
            nubbin: 'bottom-right-corner'
        },
        'right': {
            position: new overlay.ConnectionPositionPair({ originX: 'end', originY: 'center' }, { overlayX: 'start', overlayY: 'center' }),
            nubbin: 'left'
        },
        'right-top': {
            position: new overlay.ConnectionPositionPair({ originX: 'end', originY: 'center' }, { overlayX: 'start', overlayY: 'top' }),
            nubbin: 'left-top'
        },
        'right-top-corner': {
            position: new overlay.ConnectionPositionPair({ originX: 'end', originY: 'center' }, { overlayX: 'start', overlayY: 'top' }),
            nubbin: 'left-top-corner'
        },
        'right-bottom': {
            position: new overlay.ConnectionPositionPair({ originX: 'end', originY: 'center' }, { overlayX: 'start', overlayY: 'bottom' }),
            nubbin: 'left-bottom'
        },
        'right-bottom-corner': {
            position: new overlay.ConnectionPositionPair({ originX: 'end', originY: 'center' }, { overlayX: 'start', overlayY: 'bottom' }),
            nubbin: 'left-bottom-corner'
        },
        'bottom': {
            position: new overlay.ConnectionPositionPair({ originX: 'center', originY: 'bottom' }, { overlayX: 'center', overlayY: 'top' }),
            nubbin: 'top'
        },
        'bottom-left': {
            position: new overlay.ConnectionPositionPair({ originX: 'center', originY: 'bottom' }, { overlayX: 'start', overlayY: 'top' }),
            nubbin: 'top-left'
        },
        'bottom-left-corner': {
            position: new overlay.ConnectionPositionPair({ originX: 'center', originY: 'bottom' }, { overlayX: 'start', overlayY: 'top' }),
            nubbin: 'top-left-corner'
        },
        'bottom-right': {
            position: new overlay.ConnectionPositionPair({ originX: 'center', originY: 'bottom' }, { overlayX: 'end', overlayY: 'top' }),
            nubbin: 'top-right'
        },
        'bottom-right-corner': {
            position: new overlay.ConnectionPositionPair({ originX: 'center', originY: 'bottom' }, { overlayX: 'end', overlayY: 'top' }),
            nubbin: 'top-right-corner'
        },
        'left': {
            position: new overlay.ConnectionPositionPair({ originX: 'start', originY: 'center' }, { overlayX: 'end', overlayY: 'center' }),
            nubbin: 'right'
        },
        'left-top': {
            position: new overlay.ConnectionPositionPair({ originX: 'start', originY: 'center' }, { overlayX: 'end', overlayY: 'top' }),
            nubbin: 'right-top'
        },
        'left-top-corner': {
            position: new overlay.ConnectionPositionPair({ originX: 'start', originY: 'center' }, { overlayX: 'end', overlayY: 'top' }),
            nubbin: 'right-top-corner'
        },
        'left-bottom': {
            position: new overlay.ConnectionPositionPair({ originX: 'start', originY: 'center' }, { overlayX: 'end', overlayY: 'bottom' }),
            nubbin: 'right-bottom'
        },
        'left-bottom-corner': {
            position: new overlay.ConnectionPositionPair({ originX: 'start', originY: 'center' }, { overlayX: 'end', overlayY: 'bottom' }),
            nubbin: 'right-bottom-corner'
        }
    };
    var DROPDOWN_POSITION_MAP = {
        'top-left': {
            position: new overlay.ConnectionPositionPair({ originX: 'start', originY: 'top' }, { overlayX: 'start', overlayY: 'bottom' }),
        },
        'bottom-left': {
            position: new overlay.ConnectionPositionPair({ originX: 'start', originY: 'bottom' }, { overlayX: 'start', overlayY: 'top' }),
        },
        'bottom-right': {
            position: new overlay.ConnectionPositionPair({ originX: 'end', originY: 'bottom' }, { overlayX: 'end', overlayY: 'top' }),
        },
        'top-right': {
            position: new overlay.ConnectionPositionPair({ originX: 'end', originY: 'top' }, { overlayX: 'end', overlayY: 'bottom' }),
        },
    };
    var ɵ0 = function (p) { return DROPDOWN_POSITION_MAP[p].position; }, ɵ1 = function (p) { return DROPDOWN_POSITION_MAP[p].position; };
    var DEFAULT_DROPDOWN_POSITIONS = {
        left: ["bottom-left", "top-left"].map(ɵ0),
        right: ["bottom-right", "top-right"].map(ɵ1),
    };
    var ɵ2 = function (placement) { return POSITION_MAP[placement].position; };
    var DEFAULT_TOOLTIP_POSITIONS = ['top', 'right', 'bottom', 'left'].map(ɵ2);
    var DEFAULT_POPOVER_POSITIONS = DEFAULT_TOOLTIP_POSITIONS;
    function getPlacementName(position, initialPlacement) {
        var keyList = ['originX', 'originY', 'overlayX', 'overlayY'];
        var _loop_1 = function (placement) {
            if (keyList.every(function (key) { return position.connectionPair[key] === POSITION_MAP[placement]['position'][key]; })) {
                if (initialPlacement && initialPlacement === placement + "-corner") {
                    return { value: initialPlacement };
                }
                return { value: placement };
            }
        };
        for (var placement in POSITION_MAP) {
            var state_1 = _loop_1(placement);
            if (typeof state_1 === "object")
                return state_1.value;
        }
        return '';
    }
    function getPlacementStyles(nubbin) {
        var _a;
        var _b = __read(nubbin.split('-'), 3), direction = _b[0], align = _b[1], corner = _b[2];
        return _a = {},
            _a[direction] = '1rem',
            _a[align] = corner ? '-0.75rem' : (align ? '-1.5rem' : false),
            _a;
    }

    function isTemplateRef(value) {
        return value instanceof core.TemplateRef;
    }

    function OnChange(callback) {
        if (callback === void 0) { callback = 'nglOnPropertyChange'; }
        var cachedValueKey = Symbol();
        var isFirstChangeKey = Symbol();
        return function (target, key) {
            Object.defineProperty(target, key, {
                set: function (value) {
                    var _this = this;
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
                    var oldValue = this[cachedValueKey];
                    this[cachedValueKey] = value;
                    var simpleChange = {
                        firstChange: this[isFirstChangeKey],
                        previousValue: oldValue,
                        currentValue: this[cachedValueKey],
                        isFirstChange: function () { return _this[isFirstChangeKey]; },
                    };
                    this[callback](key, this[cachedValueKey], simpleChange);
                },
                get: function () {
                    return this[cachedValueKey];
                },
            });
        };
    }

    var NglPopover = /** @class */ (function () {
        function NglPopover(hostService, element, renderer, focusTrapFactory, cd) {
            this.hostService = hostService;
            this.element = element;
            this.renderer = renderer;
            this.focusTrapFactory = focusTrapFactory;
            this.cd = cd;
            this.close = new core.EventEmitter();
            this.isTemplateRef = isTemplateRef;
            this.uid = uniqueId('popover');
        }
        Object.defineProperty(NglPopover.prototype, "labelledby", {
            get: function () {
                return this.header ? this.uid + "-heading" : null;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NglPopover.prototype, "describedby", {
            get: function () {
                return this.template ? this.uid : null;
            },
            enumerable: false,
            configurable: true
        });
        NglPopover.prototype.ngOnInit = function () {
            this.focusTrap = this.focusTrapFactory.create(this.element.nativeElement);
            this.focusTrap.focusInitialElementWhenReady();
        };
        NglPopover.prototype.ngOnDestroy = function () {
            if (this.focusTrap) {
                this.focusTrap.destroy();
                this.focusTrap = null;
            }
        };
        NglPopover.prototype.nglOnPropertyChange = function (prop) {
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
        };
        NglPopover.prototype.markForCheck = function () {
            this.cd.markForCheck();
        };
        NglPopover.prototype.onClose = function () {
            this.close.emit();
        };
        NglPopover.prototype.setHostClass = function () {
            var _a;
            this.hostService.updateClass(this.element, ngClassCombine(this.popoverClass, (_a = {},
                _a["slds-nubbin_" + this.nubbin] = true,
                _a["slds-popover_" + this.size] = !!this.size,
                _a["slds-popover_walkthrough"] = this.variant === 'feature',
                _a["slds-popover_" + this.variant] = !!this.variant,
                _a)));
            this.hostService.updateStyle(this.element, getPlacementStyles(this.nubbin));
        };
        return NglPopover;
    }());
    NglPopover.decorators = [
        { type: core.Component, args: [{
                    // tslint:disable-next-line:component-selector
                    selector: 'section[ngl-popover]',
                    template: "\n<button class=\"slds-button slds-button_icon slds-button_icon-small slds-float_right slds-popover__close\" *ngIf=\"canClose &amp;&amp; closeVisible\" [title]=\"closeTitle\" [class.slds-button_icon-inverse]=\"inverseCloseButton\" (click)=\"onClose()\">\n  <svg class=\"slds-button__icon\" nglIconName=\"close\"></svg><span class=\"slds-assistive-text\" *ngIf=\"closeTitle\">{{closeTitle}}</span>\n</button>\n<header class=\"slds-popover__header\" *ngIf=\"header\">\n  <div *ngIf=\"isTemplateRef(header); else defaultTpl\" [id]=\"labelledby\">\n    <ng-container [ngTemplateOutlet]=\"header\"></ng-container>\n  </div>\n  <ng-template #defaultTpl>\n    <h2 class=\"slds-text-heading_small\" [id]=\"labelledby\">{{header}}</h2>\n  </ng-template>\n</header>\n<div class=\"slds-popover__body\" [id]=\"uid\" [nglInternalOutlet]=\"template\"></div>\n<footer class=\"slds-popover__footer\" *ngIf=\"footer\" [nglInternalOutlet]=\"footer\"></footer>",
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    providers: [HostService],
                    host: {
                        'role': 'dialog',
                        '[class.slds-popover]': 'true',
                    }
                },] }
    ];
    NglPopover.ctorParameters = function () { return [
        { type: HostService },
        { type: core.ElementRef },
        { type: core.Renderer2 },
        { type: a11y.FocusTrapFactory },
        { type: core.ChangeDetectorRef }
    ]; };
    NglPopover.propDecorators = {
        labelledby: [{ type: core.HostBinding, args: ['attr.aria-labelledby',] }],
        describedby: [{ type: core.HostBinding, args: ['attr.aria-describedby',] }]
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
            var privatePropName = "$$__" + propName;
            if (Object.prototype.hasOwnProperty.call(target, privatePropName)) {
                console.warn("[ng-lightning]: The prop \"" + privatePropName + "\" already exists, it will be overridden by " + propName + " decorator.");
            }
            Object.defineProperty(target, privatePropName, {
                configurable: true,
                writable: true
            });
            Object.defineProperty(target, propName, {
                get: function () {
                    if (!(this[output] instanceof core.EventEmitter)) {
                        throw Error("[ng-lightning] " + target.constructor.name + ": \"" + output + "\" is not an EventEmitter");
                    }
                    return this[output].observers.length > 0;
                },
                set: function () {
                    console.warn("[ng-lightning] " + target.constructor.name + ": \"" + propName + "\" is readonly and cannot be assigned a value");
                }
            });
        }
        return propDecorator;
    }

    var NglPopoverTrigger = /** @class */ (function () {
        function NglPopoverTrigger(element, renderer, viewContainerRef, overlay) {
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
            this.nglPopoverOpenChange = new core.EventEmitter();
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
            this.backdrop = new rxjs.Subject();
            this.globalClickEventUnsubscriber = null;
            this.clickEventUnsubscriber = null;
        }
        Object.defineProperty(NglPopoverTrigger.prototype, "placement", {
            get: function () {
                return this._placement;
            },
            /**
             * Position relative to host element.
             */
            set: function (_placement) {
                _placement = _placement || 'top';
                if (_placement === this._placement) {
                    return;
                }
                this._placement = _placement;
                if (this.overlayRef) {
                    this.updatePosition();
                }
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NglPopoverTrigger.prototype, "nglOpen", {
            get: function () {
                return this._open;
            },
            /**
             * Whether the floating popover is visible.
             */
            set: function (_open) {
                _open = toBoolean(_open) && (['backdrop', 'x', 'escape'].indexOf(_open) === -1);
                _open ? this.create() : this.detach();
                this._open = _open;
            },
            enumerable: false,
            configurable: true
        });
        NglPopoverTrigger.prototype.ngOnChanges = function (changes) {
            var _this = this;
            if (changes.nglOpen && !changes.nglOpen.firstChange) {
                var open = changes.nglOpen.currentValue;
                if (!toBoolean(open) || open === 'x' || open === 'escape') {
                    this.element.nativeElement.focus();
                }
            }
            if (this.nglOpen) {
                this.updateProxies(changes);
                Promise.resolve().then(function () {
                    if (_this.overlayRef) {
                        _this.overlayRef.updatePosition();
                    }
                });
                this.popover.markForCheck();
            }
        };
        NglPopoverTrigger.prototype.onclick = function (evt) {
            evt.preventDefault();
            this.toggle();
        };
        NglPopoverTrigger.prototype.ngOnDestroy = function () {
            this.detach();
            this.close();
        };
        NglPopoverTrigger.prototype.open = function () {
            if (!this.nglOpen) {
                this.nglPopoverOpenChange.emit(true);
            }
        };
        NglPopoverTrigger.prototype.close = function (reason) {
            if (reason === void 0) { reason = false; }
            if (this.nglOpen) {
                this.nglPopoverOpenChange.emit(reason);
            }
        };
        NglPopoverTrigger.prototype.toggle = function () {
            this.nglOpen ? this.close() : this.open();
        };
        NglPopoverTrigger.prototype.create = function () {
            var _this = this;
            if (this.nglOpen) {
                return;
            }
            this.detach();
            var overlayRef = this.createOverlay();
            this.portal = this.portal || new portal.ComponentPortal(NglPopover, this.viewContainerRef);
            this.popover = overlayRef.attach(this.portal).instance;
            this.needProxyProperties.forEach(function (property) { return _this.updatePopover(property, _this[property]); });
            this.popover.markForCheck();
            this.clearGlobalClickTimeout();
            this.globalClickTimeout = setTimeout(function () {
                _this.subscribeToClickEvents();
            });
            this.closeSubscription = this.popoverClosingActions()
                .subscribe(function (reason) { return _this.close(reason); });
        };
        /** Detaches the currently attached popover. */
        NglPopoverTrigger.prototype.detach = function () {
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
        };
        /** Create the overlay config and position strategy */
        NglPopoverTrigger.prototype.createOverlay = function () {
            var _this = this;
            if (this.overlayRef) {
                return this.overlayRef;
            }
            // Create connected position strategy that listens for scroll events to reposition.
            var strategy = this.overlay.position()
                .flexibleConnectedTo(this.element)
                .withFlexibleDimensions(false)
                .withViewportMargin(8)
                .withPush(false);
            this.positionChangesSubscription = strategy.positionChanges
                .pipe(operators.map(function (change) { return getPlacementName(change, _this.placement); }), operators.distinctUntilChanged())
                .subscribe(function (placement) {
                _this.updatePosition();
                _this.updatePopover('placement', placement);
                _this.popover.markForCheck();
            });
            this.overlayRef = this.overlay.create({
                positionStrategy: strategy,
                scrollStrategy: this.overlay.scrollStrategies.reposition(),
            });
            this.updatePosition();
            return this.overlayRef;
        };
        /** Updates the position of the current popover. */
        NglPopoverTrigger.prototype.updatePosition = function () {
            var position = this.overlayRef.getConfig().positionStrategy;
            position.withPositions(__spreadArray([
                POSITION_MAP[this.placement].position
            ], __read(DEFAULT_POPOVER_POSITIONS)));
        };
        NglPopoverTrigger.prototype.updatePopover = function (key, value) {
            this.popover[key] = value;
        };
        /** Set inputs of child components when this component's inputs change. */
        NglPopoverTrigger.prototype.updateProxies = function (changes) {
            var _this = this;
            Object.keys(changes)
                .filter(function (key) { return _this.needProxyProperties.has(key); })
                .forEach(function (key) { return _this.updatePopover(key, _this[key]); });
        };
        /** Returns a stream that emits whenever an action that should close the popover occurs. */
        NglPopoverTrigger.prototype.popoverClosingActions = function () {
            var backdrop = this.backdrop.pipe(operators.mapTo('backdrop'));
            var close = this.popover.close.pipe(operators.mapTo('x'));
            var escape = this.overlayRef.keydownEvents().pipe(operators.filter(function (event) { return event.keyCode === keycodes.ESCAPE; }), operators.mapTo('escape'));
            return rxjs.merge(backdrop, close, escape);
        };
        NglPopoverTrigger.prototype.handleGlobalClickEvent = function ($event) {
            if ($event.$nglStop) {
                return;
            }
            this.backdrop.next();
        };
        NglPopoverTrigger.prototype.subscribeToClickEvents = function () {
            this.unsubscribeFromClickEvents();
            // Prevent document listener to close it, since click happened inside
            this.clickEventUnsubscriber = this.renderer.listen(this.popover.element.nativeElement, 'click', function ($event) { return $event.$nglStop = true; });
            this.globalClickEventUnsubscriber = this.renderer.listen('document', 'click', this.handleGlobalClickEvent.bind(this));
        };
        NglPopoverTrigger.prototype.unsubscribeFromClickEvents = function () {
            if (this.clickEventUnsubscriber) {
                this.clickEventUnsubscriber();
                this.clickEventUnsubscriber = null;
            }
            if (this.globalClickEventUnsubscriber) {
                this.globalClickEventUnsubscriber();
                this.globalClickEventUnsubscriber = null;
            }
        };
        NglPopoverTrigger.prototype.clearGlobalClickTimeout = function () {
            clearTimeout(this.globalClickTimeout);
        };
        return NglPopoverTrigger;
    }());
    NglPopoverTrigger.decorators = [
        { type: core.Directive, args: [{
                    selector: '[nglPopover]',
                    exportAs: 'nglPopover',
                },] }
    ];
    NglPopoverTrigger.ctorParameters = function () { return [
        { type: core.ElementRef },
        { type: core.Renderer2 },
        { type: core.ViewContainerRef },
        { type: overlay.Overlay }
    ]; };
    NglPopoverTrigger.propDecorators = {
        template: [{ type: core.Input, args: ['nglPopover',] }],
        header: [{ type: core.Input, args: ['nglPopoverHeader',] }],
        footer: [{ type: core.Input, args: ['nglPopoverFooter',] }],
        variant: [{ type: core.Input, args: ['nglPopoverVariant',] }],
        size: [{ type: core.Input, args: ['nglPopoverSize',] }],
        placement: [{ type: core.Input, args: ['nglPopoverPlacement',] }],
        nglOpen: [{ type: core.Input, args: ['nglPopoverOpen',] }],
        closeTitle: [{ type: core.Input, args: ['nglPopoverCloseTitle',] }],
        popoverClass: [{ type: core.Input, args: ['nglPopoverClass',] }],
        closeVisible: [{ type: core.Input, args: ['nglPopoverCloseVisible',] }],
        nglPopoverOpenChange: [{ type: core.Output }],
        onclick: [{ type: core.HostListener, args: ['click', ['$event'],] }]
    };
    __decorate([
        InputBoolean()
    ], NglPopoverTrigger.prototype, "closeVisible", void 0);
    __decorate([
        hasObservers('nglPopoverOpenChange')
    ], NglPopoverTrigger.prototype, "canClose", void 0);

    var NGL_POPOVER_DIRECTIVES = [
        NglPopover,
        NglPopoverTrigger,
    ];
    var NglPopoversModule = /** @class */ (function () {
        function NglPopoversModule() {
        }
        return NglPopoversModule;
    }());
    NglPopoversModule.decorators = [
        { type: core.NgModule, args: [{
                    declarations: [NGL_POPOVER_DIRECTIVES],
                    exports: [NGL_POPOVER_DIRECTIVES],
                    imports: [common.CommonModule, overlay.OverlayModule, a11y.A11yModule, NglInternalOutletModule, NglIconsModule],
                    entryComponents: [NglPopover],
                },] }
    ];

    var NglTooltip = /** @class */ (function () {
        function NglTooltip(element, renderer, hostService, cd) {
            this.element = element;
            this.renderer = renderer;
            this.hostService = hostService;
            this.cd = cd;
            this.renderer.addClass(this.element.nativeElement, 'slds-popover');
            this.renderer.addClass(this.element.nativeElement, 'slds-popover_tooltip');
            this.renderer.setAttribute(this.element.nativeElement, 'role', 'tooltip');
        }
        NglTooltip.prototype.nglOnPropertyChange = function (prop) {
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
        };
        NglTooltip.prototype.setHostClass = function () {
            var _a;
            this.hostService.updateClass(this.element, ngClassCombine(this.tooltipClass, (_a = {},
                _a["slds-nubbin_" + this.nubbin] = true,
                _a)));
            this.hostService.updateStyle(this.element, getPlacementStyles(this.nubbin));
        };
        return NglTooltip;
    }());
    NglTooltip.decorators = [
        { type: core.Component, args: [{
                    // tslint:disable-next-line:component-selector
                    selector: 'div[ngl-tooltip]',
                    template: "\n<div class=\"slds-popover__body\" [nglInternalOutlet]=\"template\"></div>",
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    providers: [HostService]
                },] }
    ];
    NglTooltip.ctorParameters = function () { return [
        { type: core.ElementRef },
        { type: core.Renderer2 },
        { type: HostService },
        { type: core.ChangeDetectorRef }
    ]; };
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
    var NGL_TOOLTIP_CONFIG = new core.InjectionToken('ngl-tooltip-config');
    var NglTooltipConfig = /** @class */ (function () {
        function NglTooltipConfig() {
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
        return NglTooltipConfig;
    }());

    var NglTooltipTrigger = /** @class */ (function () {
        function NglTooltipTrigger(defaultConfig, element, renderer, viewContainerRef, overlay) {
            this.element = element;
            this.renderer = renderer;
            this.viewContainerRef = viewContainerRef;
            this.overlay = overlay;
            /**
             * Emit an event when actual tooltip is shown or hidden.
             */
            this.nglTooltipOpenChange = new core.EventEmitter();
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
        Object.defineProperty(NglTooltipTrigger.prototype, "placement", {
            get: function () {
                return this._placement || this.config.placement;
            },
            /**
             * Position relative to host element.
             */
            set: function (placement) {
                if (placement === this.placement) {
                    return;
                }
                this._placement = placement;
                if (this.overlayRef) {
                    this.updatePosition();
                }
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NglTooltipTrigger.prototype, "delay", {
            /**
             * Delay in milliseconds until it opens/closes.
             */
            set: function (_delay) {
                var _a;
                var delay = Array.isArray(_delay) ? _delay : [_delay, _delay];
                _a = __read(delay.map(Number), 2), this.openDelay = _a[0], this.closeDelay = _a[1];
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NglTooltipTrigger.prototype, "nglOpen", {
            get: function () {
                return this._open;
            },
            /**
             * Whether the floating tooltip is visible.
             */
            set: function (open) {
                if (open === this.nglOpen) {
                    return;
                }
                open ? this.create() : this.detach();
                this._open = open;
            },
            enumerable: false,
            configurable: true
        });
        NglTooltipTrigger.prototype.ngOnChanges = function (changes) {
            var _this = this;
            if (this.nglOpen) {
                this.updateProxies(changes);
                Promise.resolve().then(function () {
                    if (_this.overlayRef) {
                        _this.overlayRef.updatePosition();
                    }
                });
            }
        };
        NglTooltipTrigger.prototype.onMouseOver = function () {
            this.open();
        };
        NglTooltipTrigger.prototype.onMouseOut = function () {
            var _this = this;
            this.close();
            if (this.overlayRef && !this.overlayElement && this.interactive) {
                this.overlayElement = this.overlayRef.overlayElement;
                this.overlayListeners.add(this.renderer.listen(this.overlayElement, 'mouseenter', function () { return _this.open(); }));
                this.overlayListeners.add(this.renderer.listen(this.overlayElement, 'mouseleave', function () { return _this.close(); }));
            }
        };
        NglTooltipTrigger.prototype.ngOnDestroy = function () {
            this.detach();
            this.close(0);
        };
        // Expose open method
        NglTooltipTrigger.prototype.open = function (delay) {
            if (delay === void 0) { delay = this.openDelay; }
            this.handle(true, delay);
        };
        // Expose close method
        NglTooltipTrigger.prototype.close = function (delay) {
            if (delay === void 0) { delay = this.closeDelay; }
            this.handle(false, delay);
        };
        // Expose toggle method
        NglTooltipTrigger.prototype.toggle = function () {
            this.nglOpen ? this.close(0) : this.open(0);
        };
        NglTooltipTrigger.prototype.handle = function (open, delay) {
            var _this = this;
            if (this.toggleTimeout !== null) {
                clearTimeout(this.toggleTimeout);
                this.toggleTimeout = null;
            }
            if (open !== this.nglOpen) {
                if (delay > 0) {
                    this.toggleTimeout = setTimeout(function () {
                        _this.toggleTimeout = null;
                        _this.emitOpen(open);
                    }, delay);
                }
                else {
                    this.emitOpen(open);
                }
            }
        };
        NglTooltipTrigger.prototype.emitOpen = function (open) {
            if (this.openAuto) {
                this.nglOpen = open;
            }
            this.nglTooltipOpenChange.emit(open);
        };
        NglTooltipTrigger.prototype.create = function () {
            var _this = this;
            if (this.nglOpen) {
                return;
            }
            this.detach();
            var overlayRef = this.createOverlay();
            this.portal = this.portal || new portal.ComponentPortal(NglTooltip, this.viewContainerRef);
            this.tooltip = overlayRef.attach(this.portal).instance;
            this.needProxyProperties.forEach(function (property) { return _this.updateTooltip(property, _this[property]); });
        };
        /** Detaches the currently-attached tooltip. */
        NglTooltipTrigger.prototype.detach = function () {
            if (this.overlayRef) {
                this.overlayRef.detach();
                this.overlayRef.dispose();
                this.overlayRef = null;
            }
            // Clean up the event listeners
            this.overlayListeners.forEach(function (unlisten) { return unlisten(); });
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
        };
        /** Create the overlay config and position strategy */
        NglTooltipTrigger.prototype.createOverlay = function () {
            var _this = this;
            if (this.overlayRef) {
                return this.overlayRef;
            }
            // Create connected position strategy that listens for scroll events to reposition.
            var strategy = this.overlay.position()
                .flexibleConnectedTo(this.element)
                .withFlexibleDimensions(false)
                .withViewportMargin(8)
                .withPush(false);
            this.positionChangesSubscription = strategy.positionChanges
                .pipe(operators.map(function (change) { return getPlacementName(change, _this.placement); }), operators.distinctUntilChanged())
                .subscribe(function (placement) {
                _this.updatePosition();
                _this.updateTooltip('placement', placement);
            });
            this.overlayRef = this.overlay.create({
                positionStrategy: strategy,
                scrollStrategy: this.overlay.scrollStrategies.reposition(),
            });
            this.updatePosition();
            return this.overlayRef;
        };
        /** Updates the position of the current tooltip. */
        NglTooltipTrigger.prototype.updatePosition = function () {
            var position = this.overlayRef.getConfig().positionStrategy;
            position.withPositions(__spreadArray([
                POSITION_MAP[this.placement].position
            ], __read(DEFAULT_TOOLTIP_POSITIONS)));
        };
        NglTooltipTrigger.prototype.updateTooltip = function (key, value) {
            this.tooltip[key] = value;
        };
        /**
         * Set inputs of child components when this component's inputs change.
         */
        NglTooltipTrigger.prototype.updateProxies = function (changes) {
            var _this = this;
            Object.keys(changes)
                .filter(function (key) { return _this.needProxyProperties.has(key); })
                .forEach(function (key) { return _this.updateTooltip(key, _this[key]); });
        };
        return NglTooltipTrigger;
    }());
    NglTooltipTrigger.decorators = [
        { type: core.Directive, args: [{
                    selector: '[nglTooltip]',
                    exportAs: 'nglTooltip',
                },] }
    ];
    NglTooltipTrigger.ctorParameters = function () { return [
        { type: NglTooltipConfig, decorators: [{ type: core.Optional }, { type: core.Inject, args: [NGL_TOOLTIP_CONFIG,] }] },
        { type: core.ElementRef },
        { type: core.Renderer2 },
        { type: core.ViewContainerRef },
        { type: overlay.Overlay }
    ]; };
    NglTooltipTrigger.propDecorators = {
        template: [{ type: core.Input, args: ['nglTooltip',] }],
        placement: [{ type: core.Input, args: ['nglTooltipPlacement',] }],
        delay: [{ type: core.Input, args: ['nglTooltipDelay',] }],
        nglOpen: [{ type: core.Input, args: ['nglTooltipOpen',] }],
        openAuto: [{ type: core.Input, args: ['nglTooltipOpenAuto',] }],
        interactive: [{ type: core.Input, args: ['nglTooltipInteractive',] }],
        tooltipClass: [{ type: core.Input, args: ['nglTooltipClass',] }],
        nglTooltipOpenChange: [{ type: core.Output }],
        onMouseOver: [{ type: core.HostListener, args: ['mouseenter',] }, { type: core.HostListener, args: ['focus',] }],
        onMouseOut: [{ type: core.HostListener, args: ['mouseleave',] }, { type: core.HostListener, args: ['blur',] }]
    };
    __decorate([
        InputBoolean()
    ], NglTooltipTrigger.prototype, "openAuto", void 0);
    __decorate([
        InputBoolean()
    ], NglTooltipTrigger.prototype, "interactive", void 0);

    var NglTooltipsModule = /** @class */ (function () {
        function NglTooltipsModule() {
        }
        return NglTooltipsModule;
    }());
    NglTooltipsModule.decorators = [
        { type: core.NgModule, args: [{
                    declarations: [NglTooltip, NglTooltipTrigger],
                    exports: [NglTooltipTrigger],
                    imports: [common.CommonModule, overlay.OverlayModule, a11y.A11yModule, NglInternalOutletModule],
                    entryComponents: [NglTooltip],
                },] }
    ];

    var NglFormLabel = /** @class */ (function () {
        function NglFormLabel(element, renderer) {
            this.element = element;
            this.renderer = renderer;
            this.klass = 'slds-form-element__label';
        }
        NglFormLabel.prototype.ngOnInit = function () {
            this.renderer.addClass(this.element.nativeElement, this.klass);
        };
        return NglFormLabel;
    }());
    NglFormLabel.decorators = [
        { type: core.Component, args: [{
                    // tslint:disable-next-line:component-selector
                    selector: 'label[nglFormLabel]',
                    template: "<abbr class=\"slds-required\" *ngIf=\"required\" title=\"Required\">*</abbr><span [nglInternalOutlet]=\"label\"></span>\n<ng-content></ng-content>",
                    changeDetection: core.ChangeDetectionStrategy.OnPush
                },] }
    ];
    NglFormLabel.ctorParameters = function () { return [
        { type: core.ElementRef },
        { type: core.Renderer2 }
    ]; };
    NglFormLabel.propDecorators = {
        label: [{ type: core.Input, args: ['nglFormLabel',] }],
        klass: [{ type: core.Input, args: ['nglFormLabelClass',] }],
        required: [{ type: core.Input }]
    };
    __decorate([
        InputBoolean()
    ], NglFormLabel.prototype, "required", void 0);

    var NglFormHelp = /** @class */ (function () {
        function NglFormHelp() {
            this.isOpen = false;
        }
        return NglFormHelp;
    }());
    NglFormHelp.decorators = [
        { type: core.Component, args: [{
                    selector: 'ngl-form-help',
                    template: "\n<button class=\"slds-button slds-button_icon\" [nglTooltip]=\"content\" [(nglTooltipOpen)]=\"isOpen\">\n  <svg class=\"slds-button__icon\" nglIconName=\"utility:info\"></svg><span class=\"slds-assistive-text\">Help</span>\n</button>",
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    host: {
                        '[class.slds-form-element__icon]': 'true',
                    }
                },] }
    ];
    NglFormHelp.propDecorators = {
        content: [{ type: core.Input }]
    };

    var DIRECTIVES$9 = [
        NglFormLabel,
        NglFormHelp,
    ];
    var NglFormsModule = /** @class */ (function () {
        function NglFormsModule() {
        }
        return NglFormsModule;
    }());
    NglFormsModule.decorators = [
        { type: core.NgModule, args: [{
                    declarations: DIRECTIVES$9,
                    exports: DIRECTIVES$9,
                    imports: [common.CommonModule, NglInternalOutletModule, NglIconsModule, NglTooltipsModule],
                },] }
    ];

    function getHexFromHsv(hsv) {
        return hsv ? getHexFromRgb(getRgbFromHsv(hsv)) : null;
    }
    function getRgbFromHsv(_a) {
        var hue = _a.hue, saturation = _a.saturation, value = _a.value;
        var hueRatio = hue / 360;
        var satRatio = saturation / 100;
        var valRatio = value / 100;
        var red;
        var green;
        var blue;
        var i = Math.floor(hueRatio * 6);
        var f = hueRatio * 6 - i;
        var p = valRatio * (1 - satRatio);
        var q = valRatio * (1 - f * satRatio);
        var t = valRatio * (1 - (1 - f) * satRatio);
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
        return ("0" + Math.round(color).toString(16)).substr(-2);
    }
    function getHexFromRgb(_a) {
        var red = _a.red, green = _a.green, blue = _a.blue;
        return "#" + getHex(red) + getHex(green) + getHex(blue);
    }
    function getHsvFromHex(hex) {
        return hex ? getHsvFromRgb(getRgbFromHex(hex)) : null;
    }
    function getHsvFromRgb(_a) {
        var red = _a.red, green = _a.green, blue = _a.blue;
        var redRatio = red / 255;
        var greenRatio = green / 255;
        var blueRatio = blue / 255;
        var max = Math.max(redRatio, greenRatio, blueRatio);
        var min = Math.min(redRatio, greenRatio, blueRatio);
        var delta = max - min;
        var saturation = max === 0 ? 0 : delta / max * 100;
        var value = max * 100;
        var hue;
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
        return { hue: hue, saturation: saturation, value: value };
    }
    var HEX_REGEX = /^#([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;
    function getRgbFromHex(hex) {
        var result = HEX_REGEX.exec(toSixDigitHex(hex));
        return {
            red: parseInt(result[1], 16),
            green: parseInt(result[2], 16),
            blue: parseInt(result[3], 16),
        };
    }
    function toSixDigitHex(value) {
        var shortHandHex = /^#([a-f\d])([a-f\d])([a-f\d])$/i;
        var match = shortHandHex.exec(value);
        if (match) {
            return "#" + match[1] + match[1] + match[2] + match[2] + match[3] + match[3];
        }
        return value;
    }
    function isValidHex(value) {
        return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(value);
    }

    /** Injection token that can be used to specify default options. */
    var NGL_COLORPICKER_CONFIG = new core.InjectionToken('ngl-colorpicker-config');
    var NglColorpickerConfig = /** @class */ (function () {
        function NglColorpickerConfig() {
            this.swatchColors = [
                '#e3abec', '#c2dbf7', '#9fd6ff', '#9de7da', '#9df0c0', '#fff099', '#fed49a',
                '#d073e0', '#86baf3', '#5ebbff', '#44d8be', '#3be282', '#ffe654', '#ffb758',
                '#bd35bd', '#5779c1', '#5679c0', '#00aea9', '#3cba4c', '#f5bc25', '#f99221',
                '#580d8c', '#001970', '#0a2399', '#0b7477', '#0b6b50', '#b67e11', '#b85d0d',
            ];
            this.variant = 'base';
        }
        return NglColorpickerConfig;
    }());

    var NGL_COLORPICKER_VALUE_ACCESSOR = {
        provide: forms.NG_VALUE_ACCESSOR,
        useExisting: core.forwardRef(function () { return NglColorpicker; }),
        multi: true
    };
    var NglColorpicker = /** @class */ (function () {
        function NglColorpicker(defaultConfig, el, renderer, cd) {
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
            this.onChange = function (_) { };
            this.onTouched = function () { };
            this.renderer.addClass(this.el.nativeElement, 'slds-color-picker');
            var config = Object.assign(Object.assign({}, new NglColorpickerConfig()), defaultConfig);
            this.swatchColors = config.swatchColors;
            this.variant = config.variant;
        }
        NglColorpicker.prototype.writeValue = function (value) {
            this.color = value || '';
            if (isValidHex(value)) {
                this.hexCurrent = value;
                this.hsvCurrent = getHsvFromHex(value);
            }
            this.cd.detectChanges();
        };
        NglColorpicker.prototype.registerOnChange = function (fn) { this.onChange = fn; };
        NglColorpicker.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
        NglColorpicker.prototype.setDisabledState = function (isDisabled) { this.disabled = isDisabled; };
        NglColorpicker.prototype.onSwatchSelection = function (hex) {
            this.hsvCurrent = getHsvFromHex(hex);
            this.hexCurrent = hex;
        };
        NglColorpicker.prototype.onCustomSelection = function (hsv) {
            this.hsvCurrent = hsv;
            this.hexCurrent = getHexFromHsv(hsv);
        };
        NglColorpicker.prototype.openChange = function (open) {
            this.open = open;
        };
        NglColorpicker.prototype.cancel = function () {
            this.open = false;
        };
        NglColorpicker.prototype.done = function () {
            this.open = false;
            if (this.hexCurrent !== this.color) {
                this.color = this.hexCurrent;
                this.onChange(this.color);
            }
        };
        NglColorpicker.prototype.canApply = function () {
            return isValidHex(this.hexCurrent);
        };
        NglColorpicker.prototype.onInput = function (hex) {
            this.color = hex;
            if (isValidHex(hex)) {
                this.onSwatchSelection(hex);
                this.onChange(hex);
            }
            else {
                this.onChange(null);
            }
        };
        Object.defineProperty(NglColorpicker.prototype, "isValidInput", {
            get: function () {
                return !this.color || isValidHex(this.color);
            },
            enumerable: false,
            configurable: true
        });
        return NglColorpicker;
    }());
    NglColorpicker.decorators = [
        { type: core.Component, args: [{
                    selector: 'ngl-colorpicker',
                    template: "\n<div class=\"slds-color-picker__summary slds-form-element\" [class.slds-has-error]=\"!isValidInput\">\n  <label class=\"slds-form-element__label slds-color-picker__summary-label\" [nglFormLabel]=\"label\" [attr.for]=\"uid + '-summary-input'\" [required]=\"required\">\n    <ngl-form-help class=\"slds-m-horizontal_xx-small\" *ngIf=\"fieldLevelHelpTooltip\" [content]=\"fieldLevelHelpTooltip\"></ngl-form-help>\n  </label>\n  <div class=\"slds-form-element__control\">\n    <button class=\"slds-button slds-color-picker__summary-button slds-button_icon slds-button_icon-more\" [title]=\"label\" [nglPopover]=\"tip\" nglPopoverPlacement=\"bottom-left\" [nglPopoverOpen]=\"open\" (nglPopoverOpenChange)=\"openChange($event)\" nglPopoverClass=\"slds-color-picker__selector\" [nglPopoverFooter]=\"footer\" nglPopoverCloseVisible=\"false\" [disabled]=\"disabled\"><span class=\"slds-swatch\" nglColorpickerSwatch [color]=\"isValidInput ? color : hexCurrent\"></span>\n      <svg class=\"slds-button__icon slds-button__icon_small slds-m-left_xx-small\" *ngIf=\"!disabled\" nglIconName=\"utility:down\"></svg><span class=\"slds-assistive-text\">{{ label }}: {{ color }}</span>\n    </button>\n    <div class=\"slds-color-picker__summary-input\">\n      <input class=\"slds-input\" [id]=\"uid + '-summary-input'\" type=\"text\" [value]=\"color\" (input)=\"onInput($event.target.value)\" [disabled]=\"disabled\" [readOnly]=\"readonlyInput\" maxlength=\"7\" [placeholder]=\"placeholder || ''\">\n    </div>\n    <p class=\"slds-form-error\" *ngIf=\"!isValidInput\" [nglInternalOutlet]=\"invalidColorLabel\"></p>\n  </div>\n</div>\n<ng-template #tip>\n  <ng-container [ngSwitch]=\"variant\">\n    <ng-container *ngSwitchCase=\"'swatches'\">\n      <ng-template [ngTemplateOutlet]=\"swatches\"></ng-template>\n    </ng-container>\n    <ng-container *ngSwitchCase=\"'custom'\">\n      <ng-template [ngTemplateOutlet]=\"custom\"></ng-template>\n    </ng-container>\n    <ngl-tabset *ngSwitchDefault [selected]=\"defaultSelectedTab\" (selectedChange)=\"defaultSelectedTab = $event.id\">\n      <ng-template ngl-tab id=\"swatches\" [label]=\"swatchTabLabel\">\n        <ng-template [ngTemplateOutlet]=\"swatches\"></ng-template>\n      </ng-template>\n      <ng-template ngl-tab id=\"custom\" [label]=\"customTabLabel\">\n        <ng-template [ngTemplateOutlet]=\"custom\"></ng-template>\n      </ng-template>\n    </ngl-tabset>\n  </ng-container>\n</ng-template>\n<ng-template #swatches>\n  <ngl-colorpicker-swatches [hex]=\"hexCurrent\" (hexChange)=\"onSwatchSelection($event)\" [swatchColors]=\"swatchColors\"></ngl-colorpicker-swatches>\n</ng-template>\n<ng-template #custom>\n  <ngl-colorpicker-custom [hsv]=\"hsvCurrent\" (hsvChange)=\"onCustomSelection($event)\"></ngl-colorpicker-custom>\n</ng-template>\n<ng-template #footer>\n  <div class=\"slds-color-picker__selector-footer\">\n    <button class=\"slds-button slds-button_neutral\" type=\"button\" (click)=\"cancel()\">{{ cancelButtonLabel }}</button>\n    <button class=\"slds-button slds-button_brand\" type=\"button\" (click)=\"done()\" [disabled]=\"!canApply()\">{{ submitButtonLabel }}</button>\n  </div>\n</ng-template>",
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    providers: [NGL_COLORPICKER_VALUE_ACCESSOR]
                },] }
    ];
    NglColorpicker.ctorParameters = function () { return [
        { type: NglColorpickerConfig, decorators: [{ type: core.Optional }, { type: core.Inject, args: [NGL_COLORPICKER_CONFIG,] }] },
        { type: core.ElementRef },
        { type: core.Renderer2 },
        { type: core.ChangeDetectorRef }
    ]; };
    NglColorpicker.propDecorators = {
        label: [{ type: core.Input }],
        placeholder: [{ type: core.Input }],
        cancelButtonLabel: [{ type: core.Input }],
        submitButtonLabel: [{ type: core.Input }],
        required: [{ type: core.Input }],
        fieldLevelHelpTooltip: [{ type: core.Input }],
        invalidColorLabel: [{ type: core.Input }],
        swatchTabLabel: [{ type: core.Input }],
        customTabLabel: [{ type: core.Input }],
        swatchColors: [{ type: core.Input }],
        readonlyInput: [{ type: core.Input }],
        defaultSelectedTab: [{ type: core.Input }],
        variant: [{ type: core.Input }]
    };
    __decorate([
        InputBoolean()
    ], NglColorpicker.prototype, "required", void 0);
    __decorate([
        InputBoolean()
    ], NglColorpicker.prototype, "readonlyInput", void 0);

    var NglColorpickerSwatch = /** @class */ (function () {
        function NglColorpickerSwatch(el, renderer) {
            this.el = el;
            this.renderer = renderer;
            this.renderer.addClass(this.el.nativeElement, 'slds-swatch');
        }
        return NglColorpickerSwatch;
    }());
    NglColorpickerSwatch.decorators = [
        { type: core.Component, args: [{
                    // tslint:disable-next-line:component-selector
                    selector: '[nglColorpickerSwatch]',
                    template: "<span class=\"slds-assistive-text\" aria-hidden=\"true\">{{ color }}</span>",
                    changeDetection: core.ChangeDetectionStrategy.OnPush
                },] }
    ];
    NglColorpickerSwatch.ctorParameters = function () { return [
        { type: core.ElementRef },
        { type: core.Renderer2 }
    ]; };
    NglColorpickerSwatch.propDecorators = {
        color: [{ type: core.HostBinding, args: ['style.background',] }, { type: core.Input }]
    };

    var NglColorpickerCustom = /** @class */ (function () {
        function NglColorpickerCustom(el, renderer) {
            this.el = el;
            this.renderer = renderer;
            this.hsvChange = new core.EventEmitter();
            this.renderer.addClass(this.el.nativeElement, 'slds-color-picker__custom');
        }
        NglColorpickerCustom.prototype.ngOnChanges = function (changes) {
            if (changes.hsv) {
                this.hex = getHexFromHsv(this.hsv);
            }
        };
        NglColorpickerCustom.prototype.onHsvChange = function ($event) {
            this.hsvChange.emit($event);
        };
        NglColorpickerCustom.prototype.onHexChange = function (hex) {
            var hsv = getHsvFromHex(hex);
            this.hsvChange.emit(hsv);
        };
        return NglColorpickerCustom;
    }());
    NglColorpickerCustom.decorators = [
        { type: core.Component, args: [{
                    selector: 'ngl-colorpicker-custom',
                    template: "\n<ngl-colorpicker-range [hsv]=\"hsv\" (hsvChange)=\"onHsvChange($event)\"></ngl-colorpicker-range>\n<ngl-colorpicker-inputs [hex]=\"hex\" (hexChange)=\"onHexChange($event)\"></ngl-colorpicker-inputs>",
                    changeDetection: core.ChangeDetectionStrategy.OnPush
                },] }
    ];
    NglColorpickerCustom.ctorParameters = function () { return [
        { type: core.ElementRef },
        { type: core.Renderer2 }
    ]; };
    NglColorpickerCustom.propDecorators = {
        hsv: [{ type: core.Input }],
        hsvChange: [{ type: core.Output }]
    };

    var NglColorpickerRange = /** @class */ (function () {
        function NglColorpickerRange(document) {
            this.document = document;
            this.hsvChange = new core.EventEmitter();
            this.uid = uniqueId('colorpicker-range');
            this._hsv = { hue: 0, saturation: 0, value: 0 };
        }
        Object.defineProperty(NglColorpickerRange.prototype, "hsv", {
            get: function () {
                return this._hsv;
            },
            set: function (hsv) {
                if (hsv) {
                    this._hsv = hsv;
                }
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NglColorpickerRange.prototype, "hex", {
            get: function () {
                return getHexFromHsv(this.hsv);
            },
            enumerable: false,
            configurable: true
        });
        NglColorpickerRange.prototype.ngAfterViewInit = function () {
            var _this = this;
            this.dragSubscription = this.setupDrag().subscribe(function (mm) { return _this.emitChange(mm); });
        };
        NglColorpickerRange.prototype.hueSliderChange = function (value) {
            this.emitChange({ hue: value });
        };
        NglColorpickerRange.prototype.rangeIndicatorKeyboard = function (evt) {
            var saturation = this.hsv.saturation;
            var value = this.hsv.value;
            switch (evt.keyCode) {
                case keycodes.LEFT_ARROW:
                    saturation = this.limit(saturation - 1);
                    break;
                case keycodes.RIGHT_ARROW:
                    saturation = this.limit(saturation + 1);
                    break;
                case keycodes.UP_ARROW:
                    value = this.limit(value + 1);
                    break;
                case keycodes.DOWN_ARROW:
                    value = this.limit(value - 1);
                    break;
                default:
                    return;
            }
            trapEvent(evt);
            this.emitChange({ saturation: saturation, value: value });
        };
        NglColorpickerRange.prototype.indicatorStyle = function () {
            return {
                'bottom.%': this.hsv.value,
                'left.%': this.hsv.saturation,
                'background': this.hex,
            };
        };
        NglColorpickerRange.prototype.ngOnDestroy = function () {
            if (this.dragSubscription) {
                this.dragSubscription.unsubscribe();
                this.dragSubscription = null;
            }
        };
        NglColorpickerRange.prototype.emitChange = function (hsv) {
            this.hsvChange.emit(Object.assign(Object.assign({}, this.hsv), hsv));
        };
        NglColorpickerRange.prototype.limit = function (value) {
            return Math.min(Math.max(value, 0), 100);
        };
        NglColorpickerRange.prototype.setupDrag = function () {
            var _this = this;
            var dragTarget = this.rangeIndicatorContainer.nativeElement;
            var pressEnd = rxjs.merge(rxjs.fromEvent(this.document, 'mouseup'), rxjs.fromEvent(this.document, 'touchend'));
            var pressMove = rxjs.merge(rxjs.fromEvent(this.document, 'mousemove'), rxjs.fromEvent(this.document, 'touchmove'));
            var pressStart = rxjs.merge(rxjs.fromEvent(dragTarget, 'mousedown'), rxjs.fromEvent(dragTarget, 'touchstart'));
            return pressStart.pipe(operators.flatMap(function (md) {
                _this.rangeIndicator.nativeElement.focus();
                var rect = dragTarget.getBoundingClientRect();
                return pressMove.pipe(operators.startWith(md), operators.map(function (mm) {
                    mm.preventDefault();
                    var saturation = Math.round((mm.clientX - rect.left) / rect.width * 100);
                    var value = Math.round((rect.bottom - mm.clientY) / rect.height * 100);
                    return { saturation: _this.limit(saturation), value: _this.limit(value) };
                }), operators.takeUntil(pressEnd));
            }));
        };
        return NglColorpickerRange;
    }());
    NglColorpickerRange.decorators = [
        { type: core.Component, args: [{
                    selector: 'ngl-colorpicker-range',
                    template: "\n<p class=\"slds-assistive-text\" [attr.id]=\"uid + '-instructions'\">Use arrow keys to select a saturation and brightness, on an x and y axis.</p>\n<div class=\"slds-color-picker__custom-range\" #rangeIndicatorContainer [style.background]=\"'hsl(' + hsv.hue + ', 100%, 50%)'\"><a class=\"slds-color-picker__range-indicator\" #rangeIndicator href=\"javascript:void(0);\" aria-live=\"assertive\" aria-atomic=\"true\" [attr.aria-describedby]=\"uid + '-instructions'\" [ngStyle]=\"indicatorStyle()\" (keydown)=\"rangeIndicatorKeyboard($event)\"><span class=\"slds-assistive-text\">Saturation: {{hsv.saturation}}%. Brightness: {{hsv.value}}%.</span></a></div>\n<div class=\"slds-color-picker__hue-and-preview\">\n  <label class=\"slds-assistive-text\" [attr.for]=\"uid + '-hue'\">Select Hue</label>\n  <input class=\"slds-color-picker__hue-slider\" #hueSlider type=\"range\" min=\"0\" max=\"360\" [id]=\"uid + '-hue'\" [value]=\"hsv.hue\" (input)=\"hueSliderChange($event.target.value)\"><span nglColorpickerSwatch [color]=\"hex\"></span>\n</div>",
                    changeDetection: core.ChangeDetectionStrategy.OnPush
                },] }
    ];
    NglColorpickerRange.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: core.Inject, args: [common.DOCUMENT,] }] }
    ]; };
    NglColorpickerRange.propDecorators = {
        hsv: [{ type: core.Input }],
        hsvChange: [{ type: core.Output }],
        rangeIndicator: [{ type: core.ViewChild, args: ['rangeIndicator',] }],
        rangeIndicatorContainer: [{ type: core.ViewChild, args: ['rangeIndicatorContainer',] }]
    };

    var NglColorpickerInputs = /** @class */ (function () {
        function NglColorpickerInputs() {
            this.hexChange = new core.EventEmitter();
            this.red = 0;
            this.green = 0;
            this.blue = 0;
            this.uid = uniqueId('colorpicker-inputs');
        }
        Object.defineProperty(NglColorpickerInputs.prototype, "hex", {
            get: function () {
                return this._hex;
            },
            set: function (hex) {
                if (hex) {
                    this._hex = hex;
                    var _a = getRgbFromHex(this.hex), red = _a.red, green = _a.green, blue = _a.blue;
                    this.red = red;
                    this.green = green;
                    this.blue = blue;
                }
            },
            enumerable: false,
            configurable: true
        });
        NglColorpickerInputs.prototype.updateHex = function (value) {
            var isValid = isValidHex(value);
            if (!isValid) {
                this.red = this.green = this.blue = null;
            }
            this.hexChange.emit(isValid ? value : null);
        };
        NglColorpickerInputs.prototype.onRGB = function (key, value) {
            this[key] = value;
            var hex = this.isRGBValid() ? getHexFromRgb({ red: this.red, green: this.green, blue: this.blue }) : null;
            this.hexChange.emit(hex);
        };
        Object.defineProperty(NglColorpickerInputs.prototype, "isHexInvalid", {
            get: function () {
                return this.red === null && this.green === null && this.blue === null;
            },
            enumerable: false,
            configurable: true
        });
        NglColorpickerInputs.prototype.isColorNumberValid = function (key) {
            var value = this[key];
            return coercion._isNumberValue(value) && value >= 0 && value <= 255;
        };
        NglColorpickerInputs.prototype.isRGBValid = function () {
            var _this = this;
            return ['red', 'green', 'blue'].every(function (prop) { return _this.isColorNumberValid(prop); });
        };
        return NglColorpickerInputs;
    }());
    NglColorpickerInputs.decorators = [
        { type: core.Component, args: [{
                    selector: 'ngl-colorpicker-inputs',
                    template: "\n<div class=\"slds-color-picker__custom-inputs\">\n  <div class=\"slds-form-element slds-color-picker__input-custom-hex\" [class.slds-has-error]=\"isHexInvalid\">\n    <label class=\"slds-form-element__label\" [attr.for]=\"uid + 'hex'\">Hex</label>\n    <div class=\"slds-form-element__control\">\n      <input class=\"slds-input\" [id]=\"uid + 'hex'\" type=\"text\" maxlength=\"7\" [value]=\"hex\" (input)=\"updateHex($event.target.value)\">\n    </div>\n  </div>\n  <div class=\"slds-form-element\" [class.slds-has-error]=\"!isColorNumberValid('red')\">\n    <label class=\"slds-form-element__label\" [attr.for]=\"uid + 'red'\"><abbr title=\"red\">R</abbr></label>\n    <div class=\"slds-form-element__control\">\n      <input class=\"slds-input\" [id]=\"uid + 'red'\" type=\"text\" maxlength=\"3\" [value]=\"red\" (input)=\"onRGB('red', $event.target.value)\">\n    </div>\n  </div>\n  <div class=\"slds-form-element\" [class.slds-has-error]=\"!isColorNumberValid('green')\">\n    <label class=\"slds-form-element__label\" [attr.for]=\"uid + 'green'\"><abbr title=\"green\">G</abbr></label>\n    <div class=\"slds-form-element__control\">\n      <input class=\"slds-input\" [id]=\"uid + 'green'\" type=\"text\" maxlength=\"3\" [value]=\"green\" (input)=\"onRGB('green', $event.target.value)\">\n    </div>\n  </div>\n  <div class=\"slds-form-element\" [class.slds-has-error]=\"!isColorNumberValid('blue')\">\n    <label class=\"slds-form-element__label\" [attr.for]=\"uid + 'blue'\"><abbr title=\"blue\">B</abbr></label>\n    <div class=\"slds-form-element__control\">\n      <input class=\"slds-input\" [id]=\"uid + 'blue'\" type=\"text\" maxlength=\"3\" [value]=\"blue\" (input)=\"onRGB('blue', $event.target.value)\">\n    </div>\n  </div>\n</div>\n<div class=\"slds-color-picker\">\n  <p class=\"slds-form-error slds-color-picker__input-custom-error\" *ngIf=\"isHexInvalid; else rgbError\">The color entered is invalid</p>\n  <ng-template #rgbError>\n    <p class=\"slds-form-error slds-color-picker__input-custom-error\" *ngIf=\"!isRGBValid()\">The value needs to be an integer from 0-255</p>\n  </ng-template>\n</div>",
                    changeDetection: core.ChangeDetectionStrategy.OnPush
                },] }
    ];
    NglColorpickerInputs.propDecorators = {
        hex: [{ type: core.Input }],
        hexChange: [{ type: core.Output }]
    };

    var NglColorpickerSwatchTrigger = /** @class */ (function () {
        function NglColorpickerSwatchTrigger(el, renderer) {
            this.el = el;
            this.renderer = renderer;
            this.selectedChange = new core.EventEmitter();
            this.renderer.addClass(this.el.nativeElement, 'slds-color-picker__swatch-trigger');
            this.renderer.setAttribute(this.el.nativeElement, 'role', 'option');
        }
        NglColorpickerSwatchTrigger.prototype.onSelect = function () {
            return this.selectedChange.emit();
        };
        NglColorpickerSwatchTrigger.prototype.focus = function () {
            this.el.nativeElement.focus();
            this.onSelect();
        };
        return NglColorpickerSwatchTrigger;
    }());
    NglColorpickerSwatchTrigger.decorators = [
        { type: core.Directive, args: [{
                    selector: '[nglColorpickerSwatchTrigger]',
                },] }
    ];
    NglColorpickerSwatchTrigger.ctorParameters = function () { return [
        { type: core.ElementRef },
        { type: core.Renderer2 }
    ]; };
    NglColorpickerSwatchTrigger.propDecorators = {
        selected: [{ type: core.HostBinding, args: ['class.ngl-color-picker__swatch-selected',] }, { type: core.Input }],
        selectedChange: [{ type: core.Output }],
        onSelect: [{ type: core.HostListener, args: ['click',] }]
    };

    var NglColorpickerSwatches = /** @class */ (function () {
        function NglColorpickerSwatches(el, renderer) {
            this.el = el;
            this.renderer = renderer;
            this.hexChange = new core.EventEmitter();
            this.swatchColors = [];
            this.renderer.addClass(this.el.nativeElement, 'slds-color-picker__swatches');
        }
        NglColorpickerSwatches.prototype.ngOnChanges = function () {
            this.activeIndex = Math.max(this.swatchColors.indexOf(this.hex), 0);
        };
        NglColorpickerSwatches.prototype.onSelectViaInteraction = function (evt) {
            var direction = 0;
            switch (evt.keyCode) {
                case keycodes.LEFT_ARROW:
                case keycodes.UP_ARROW:
                    direction = -1;
                    break;
                case keycodes.RIGHT_ARROW:
                case keycodes.DOWN_ARROW:
                    direction = 1;
                    break;
                default:
                    return;
            }
            trapEvent(evt);
            var activeIndex = this.swatchColors.indexOf(this.hex);
            var index = (this.triggers.length + activeIndex + direction) % this.triggers.length;
            var trigger = this.triggers.toArray()[index];
            trigger.focus();
        };
        NglColorpickerSwatches.prototype.isSelected = function (hex) {
            return hex === this.hex;
        };
        NglColorpickerSwatches.prototype.onSelect = function (hex) {
            this.hexChange.emit(hex);
        };
        return NglColorpickerSwatches;
    }());
    NglColorpickerSwatches.decorators = [
        { type: core.Component, args: [{
                    selector: 'ngl-colorpicker-swatches',
                    template: "\n<li class=\"slds-color-picker__swatch\" *ngFor=\"let color of swatchColors; let i = index\" role=\"presentation\"><a nglColorpickerSwatchTrigger href=\"javascript:void(0);\" [selected]=\"isSelected(color)\" [attr.tabindex]=\"activeIndex === i ? 0 : -1\" (selectedChange)=\"onSelect(color)\"><span nglColorpickerSwatch [color]=\"color\"></span></a></li>",
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    styles: ["\n    .ngl-color-picker__swatch-selected {\n      box-shadow: rgb(117, 112, 112) 1px 1px 1px;\n    }\n  "]
                },] }
    ];
    NglColorpickerSwatches.ctorParameters = function () { return [
        { type: core.ElementRef },
        { type: core.Renderer2 }
    ]; };
    NglColorpickerSwatches.propDecorators = {
        hex: [{ type: core.Input }],
        hexChange: [{ type: core.Output }],
        swatchColors: [{ type: core.Input }],
        triggers: [{ type: core.ViewChildren, args: [NglColorpickerSwatchTrigger,] }],
        onSelectViaInteraction: [{ type: core.HostListener, args: ['keydown', ['$event'],] }]
    };

    var DIRECTIVES$8 = [
        NglColorpicker,
    ];
    var NglColorpickerModule = /** @class */ (function () {
        function NglColorpickerModule() {
        }
        return NglColorpickerModule;
    }());
    NglColorpickerModule.decorators = [
        { type: core.NgModule, args: [{
                    declarations: __spreadArray(__spreadArray([], __read(DIRECTIVES$8)), [
                        NglColorpickerSwatch,
                        NglColorpickerCustom,
                        NglColorpickerRange,
                        NglColorpickerInputs,
                        NglColorpickerSwatches,
                        NglColorpickerSwatchTrigger,
                    ]),
                    exports: DIRECTIVES$8,
                    imports: [
                        common.CommonModule,
                        NglIconsModule,
                        NglTabsModule,
                        NglPopoversModule,
                        NglFormsModule,
                        NglInternalOutletModule,
                    ],
                },] }
    ];

    var NglOverlaynglOverlayScrolledOutsideViewDirective = /** @class */ (function () {
        function NglOverlaynglOverlayScrolledOutsideViewDirective(cdkOverlay, ngZone, scrollDispatcher) {
            this.cdkOverlay = cdkOverlay;
            this.ngZone = ngZone;
            this.scrollDispatcher = scrollDispatcher;
            this.overlayOutside = new core.EventEmitter();
        }
        NglOverlaynglOverlayScrolledOutsideViewDirective.prototype.ngOnInit = function () {
            var _this = this;
            var elementRef = this.cdkOverlay.origin.elementRef;
            var scrollableAncestors = this.scrollDispatcher.getAncestorScrollContainers(elementRef).map(function (container) { return container.getElementRef(); });
            if (!scrollableAncestors || !scrollableAncestors.length)
                return;
            this.subscription = this.cdkOverlay.positionChange.subscribe(function () {
                var bounds = elementRef.nativeElement.getBoundingClientRect();
                for (var i = 0, n = scrollableAncestors.length; i < n; i++) {
                    var ancestorsBounds = scrollableAncestors[i].nativeElement.getBoundingClientRect();
                    if (isElementOutside(bounds, ancestorsBounds)) {
                        _this.ngZone.run(function () { return _this.overlayOutside.emit(); });
                        return;
                    }
                }
            });
        };
        NglOverlaynglOverlayScrolledOutsideViewDirective.prototype.ngOnDestroy = function () {
            if (this.subscription) {
                this.subscription.unsubscribe();
                this.subscription = null;
            }
        };
        return NglOverlaynglOverlayScrolledOutsideViewDirective;
    }());
    NglOverlaynglOverlayScrolledOutsideViewDirective.decorators = [
        { type: core.Directive, args: [{
                    selector: '[nglOverlayScrolledOutsideView]'
                },] }
    ];
    NglOverlaynglOverlayScrolledOutsideViewDirective.ctorParameters = function () { return [
        { type: overlay.CdkConnectedOverlay, decorators: [{ type: core.Self }] },
        { type: core.NgZone },
        { type: overlay.ScrollDispatcher }
    ]; };
    NglOverlaynglOverlayScrolledOutsideViewDirective.propDecorators = {
        overlayOutside: [{ type: core.Output, args: ['nglOverlayScrolledOutsideView',] }]
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

    var DIRECTIVES$7 = [
        NglOverlaynglOverlayScrolledOutsideViewDirective,
    ];
    var NglOverlayModule = /** @class */ (function () {
        function NglOverlayModule() {
        }
        return NglOverlayModule;
    }());
    NglOverlayModule.decorators = [
        { type: core.NgModule, args: [{
                    imports: [common.CommonModule],
                    declarations: DIRECTIVES$7,
                    exports: DIRECTIVES$7,
                },] }
    ];

    var NglComboboxService = /** @class */ (function () {
        function NglComboboxService() {
        }
        return NglComboboxService;
    }());
    NglComboboxService.decorators = [
        { type: core.Injectable }
    ];

    var NglComboboxOption = /** @class */ (function () {
        function NglComboboxOption(element, service, cd, ngZone, renderer) {
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
        Object.defineProperty(NglComboboxOption.prototype, "active", {
            get: function () {
                return this._active;
            },
            // Whether or not the option is currently active and ready to be selected
            set: function (active) {
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
            },
            enumerable: false,
            configurable: true
        });
        NglComboboxOption.prototype.onSelectViaInteraction = function (evt) {
            trapEvent(evt);
            if (!this.disabled) {
                this.service.combobox.onOptionSelection(this);
            }
        };
        NglComboboxOption.prototype.hover = function () {
            if (!this.disabled) {
                this.disableNextScrollIntoView = true;
                this.service.combobox.keyManager.setActiveItem(this);
            }
        };
        NglComboboxOption.prototype.setActiveStyles = function () {
            this.active = true;
        };
        NglComboboxOption.prototype.setInactiveStyles = function () {
            this.active = false;
        };
        NglComboboxOption.prototype.scrollIntoView = function () {
            var _this = this;
            if (this.disableNextScrollIntoView) {
                this.disableNextScrollIntoView = false;
                return;
            }
            this.ngZone.runOutsideAngular(function () {
                _this.scrollTimer = setTimeout(function () {
                    var li = _this.element.nativeElement;
                    menuItemScroll(li.parentElement.parentElement, li);
                }, 0);
            });
        };
        NglComboboxOption.prototype.ngOnDestroy = function () {
            this.destroyed = true;
            clearTimeout(this.scrollTimer);
        };
        return NglComboboxOption;
    }());
    NglComboboxOption.decorators = [
        { type: core.Component, args: [{
                    selector: 'ngl-combobox-option, [nglComboboxOption]',
                    template: "\n<div class=\"slds-media slds-listbox__option slds-listbox__option_plain slds-media_small slds-media_center\" role=\"option\" [attr.id]=\"uid\" [class.slds-has-focus]=\"active\" [class.slds-is-selected]=\"selected\" [attr.aria-selected]=\"selected || null\" [attr.aria-disabled]=\"disabled || null\"><span class=\"slds-media__figure slds-listbox__option-icon\"><span class=\"slds-icon_container slds-icon-utility-check slds-current-color\" *ngIf=\"selected\">\n      <svg class=\"slds-icon slds-icon_x-small\" nglIconName=\"utility:check\"></svg></span></span><span class=\"slds-media__body\"><span class=\"slds-truncate\"><span class=\"slds-assistive-text\" *ngIf=\"selected\">Current Selection:</span>{{ label }}</span></span></div>",
                    changeDetection: core.ChangeDetectionStrategy.OnPush
                },] }
    ];
    NglComboboxOption.ctorParameters = function () { return [
        { type: core.ElementRef },
        { type: NglComboboxService },
        { type: core.ChangeDetectorRef },
        { type: core.NgZone },
        { type: core.Renderer2 }
    ]; };
    NglComboboxOption.propDecorators = {
        value: [{ type: core.Input }],
        label: [{ type: core.Input }],
        selected: [{ type: core.Input }],
        disabled: [{ type: core.Input }],
        onSelectViaInteraction: [{ type: core.HostListener, args: ['mousedown', ['$event'],] }],
        hover: [{ type: core.HostListener, args: ['mouseenter',] }]
    };
    __decorate([
        InputBoolean()
    ], NglComboboxOption.prototype, "selected", void 0);

    var MAX_INTERVAL_BETWEEN_KEYSTROKES = 300; // ms
    var NglComboboxInput = /** @class */ (function () {
        function NglComboboxInput(service, el, renderer) {
            this.service = service;
            this.el = el;
            this.renderer = renderer;
            this.ɵRequiredSubject = new rxjs.BehaviorSubject(false);
            var nativeElement = this.el.nativeElement;
            this.renderer.addClass(nativeElement, 'slds-input');
            this.renderer.addClass(nativeElement, 'slds-combobox__input');
            this.renderer.setAttribute(nativeElement, 'autoComplete', 'off');
            this.renderer.setAttribute(nativeElement, 'role', 'textbox');
            this.renderer.setAttribute(nativeElement, 'aria-controls', this.service.combobox.uid);
            if (!nativeElement.id) {
                this.renderer.setAttribute(nativeElement, 'id', uniqueId('combobox-input'));
            }
            var keyboardEvent$ = rxjs.fromEvent(nativeElement, 'keypress').pipe(operators.map(function (e) { return e.keyCode; }));
            this.keyboardBuffer$ = keyboardEvent$.pipe(operators.buffer(keyboardEvent$.pipe(operators.debounceTime(MAX_INTERVAL_BETWEEN_KEYSTROKES))), operators.map(function (keyCodes) { return keyCodes.map(function (c) { return String.fromCharCode(c); }).join(''); }));
        }
        Object.defineProperty(NglComboboxInput.prototype, "isReadonly", {
            get: function () {
                return this.service.combobox.variant === 'base' || this.service.combobox.hasLookupSingleSelection;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NglComboboxInput.prototype, "ariaAutocomplete", {
            get: function () {
                return this.service.combobox.isLookup ? 'list' : null;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NglComboboxInput.prototype, "hasReadonlyValue", {
            get: function () {
                return this.service.combobox.hasLookupSingleSelection;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NglComboboxInput.prototype, "required", {
            set: function (required) {
                this.ɵRequiredSubject.next(toBoolean(required));
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NglComboboxInput.prototype, "id", {
            get: function () {
                return this.el.nativeElement.id;
            },
            enumerable: false,
            configurable: true
        });
        NglComboboxInput.prototype.setAriaActiveDescendant = function (uid) {
            if (uid) {
                this.renderer.setAttribute(this.el.nativeElement, 'aria-activedescendant', uid);
            }
            else {
                this.renderer.removeAttribute(this.el.nativeElement, 'aria-activedescendant');
            }
        };
        NglComboboxInput.prototype.setValue = function (value) {
            this.renderer.setProperty(this.el.nativeElement, 'value', value !== null ? value : '');
        };
        NglComboboxInput.prototype.focus = function () {
            this.el.nativeElement.focus();
        };
        NglComboboxInput.prototype.onMouseInteraction = function () {
            if (this.service.combobox.hasLookupSingleSelection || (this.service.combobox.open && this.service.combobox.isLookup)) {
                return;
            }
            this.service.combobox.openChange.emit(!this.service.combobox.open);
        };
        NglComboboxInput.prototype.onBlur = function () {
            this.service.combobox.openChange.emit(false);
        };
        NglComboboxInput.prototype.onKeyboard = function (evt) {
            var _this = this;
            var keyCode = evt.keyCode;
            if (keyCode === keycodes.ESCAPE) {
                // This is handled by CDK, and detaches overlay
                return;
            }
            if (this.service.combobox.open) {
                switch (keyCode) {
                    // User selects currently active option by pressing the `Enter` key
                    case keycodes.ENTER:
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
                if (keyCode === keycodes.DOWN_ARROW || keyCode === keycodes.ENTER) {
                    trapEvent(evt);
                    this.service.combobox.openChange.emit(true);
                    return;
                }
                // Any key on Lookup should expand the collapsed menu
                if (this.service.combobox.isLookup) {
                    // Delay emission so actual value of the input has been updated
                    setTimeout(function () { return _this.service.combobox.openChange.emit(true); }, 0);
                }
            }
        };
        return NglComboboxInput;
    }());
    NglComboboxInput.decorators = [
        { type: core.Directive, args: [{
                    selector: 'input[nglCombobox]',
                },] }
    ];
    NglComboboxInput.ctorParameters = function () { return [
        { type: NglComboboxService },
        { type: core.ElementRef },
        { type: core.Renderer2 }
    ]; };
    NglComboboxInput.propDecorators = {
        isReadonly: [{ type: core.HostBinding, args: ['readOnly',] }],
        ariaAutocomplete: [{ type: core.HostBinding, args: ['attr.aria-autocomplete',] }],
        hasReadonlyValue: [{ type: core.HostBinding, args: ['class.slds-combobox__input-value',] }],
        required: [{ type: core.Input }],
        onMouseInteraction: [{ type: core.HostListener, args: ['click',] }],
        onBlur: [{ type: core.HostListener, args: ['blur',] }],
        onKeyboard: [{ type: core.HostListener, args: ['keydown', ['$event'],] }]
    };

    /** Injection token that can be used to specify default options. */
    var NGL_COMBOBOX_CONFIG = new core.InjectionToken('ngl-combobox-config');
    var NglComboboxConfig = /** @class */ (function () {
        function NglComboboxConfig() {
            this.loadingLabel = 'Loading';
            this.noOptionsFound = 'No matches found.';
            this.removeSelectedLabel = 'Remove selected option';
        }
        return NglComboboxConfig;
    }());

    var NglCombobox = /** @class */ (function () {
        function NglCombobox(defaultConfig, ngZone, cd, service) {
            var _this = this;
            this.ngZone = ngZone;
            this.cd = cd;
            this.service = service;
            this.variant = 'base';
            this.uid = uniqueId('combobox');
            this.open = false;
            this.openChange = new core.EventEmitter();
            this.selectionChange = new core.EventEmitter();
            this.multiple = false;
            this.visibleLength = 5;
            this.closeOnSelection = true;
            this.hasErrors = false;
            this.overlayWidth = 0;
            this.overlayPositions = __spreadArray([], __read(DEFAULT_DROPDOWN_POSITIONS['left']));
            this.selectionValueFn = function (selection) {
                if (selection.length > 0) {
                    if (_this.multiple && _this.isLookup) {
                        return '';
                    }
                    return selection.length === 1 ? selection[0] : selection.length + " options selected";
                }
                return '';
            };
            var config = Object.assign(Object.assign({}, new NglComboboxConfig()), defaultConfig);
            this.loadingLabel = config.loadingLabel;
            this.noOptionsFound = config.noOptionsFound;
            this.removeSelectedLabel = config.removeSelectedLabel;
            this.service.combobox = this;
            // this.service.openChange = this.openChange;
        }
        Object.defineProperty(NglCombobox.prototype, "data", {
            get: function () {
                return this._data;
            },
            set: function (data) {
                this._data = (data || []).map(function (d) {
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
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NglCombobox.prototype, "activeOption", {
            get: function () {
                return this.keyManager ? this.keyManager.activeItem : null;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NglCombobox.prototype, "selectedOptions", {
            get: function () {
                var _this = this;
                return this.data ? this.data.filter(function (d) { return _this.isSelected(d.value); }) : [];
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NglCombobox.prototype, "isLookup", {
            get: function () {
                return this.variant === 'lookup';
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NglCombobox.prototype, "hasLookupSingleSelection", {
            get: function () {
                return this.isLookup && !this.multiple && this.selectedOptions.length > 0;
            },
            enumerable: false,
            configurable: true
        });
        NglCombobox.prototype.ngAfterContentInit = function () {
            var _this = this;
            if (!this.inputEl) {
                throw Error("[ng-lightning] Couldn't find an <input> with [nglCombobox] attribute inside NglCombobox");
            }
            this.ɵRequiredSubscription = this.inputEl.ɵRequiredSubject.subscribe(function (required) {
                _this.required = required;
                _this.cd.detectChanges();
            });
            this.calculateErrors();
        };
        NglCombobox.prototype.ngOnChanges = function (changes) {
            var _this = this;
            if (changes.selection || (this.selection && changes.data)) {
                this.calculateDisplayValue();
            }
            setTimeout(function () { return _this.calculateErrors(); }, 0);
        };
        NglCombobox.prototype.onAttach = function () {
            var _this = this;
            var _a, _b, _c, _d, _e;
            // Same width as the trigger element
            this.overlayWidth = (_a = this.overlayOrigin) === null || _a === void 0 ? void 0 : _a.elementRef.nativeElement.offsetWidth;
            this.cd.detectChanges();
            this.keyManager = this.options && new a11y.ActiveDescendantKeyManager(this.options).withWrap();
            // Activate selected item or first option
            var selectedOption = (_b = this.options) === null || _b === void 0 ? void 0 : _b.find(function (o) { return o.selected; });
            if (selectedOption) {
                (_c = this.keyManager) === null || _c === void 0 ? void 0 : _c.setActiveItem(selectedOption);
            }
            else {
                (_d = this.keyManager) === null || _d === void 0 ? void 0 : _d.setFirstItemActive();
            }
            // Listen to button presses if picklist to activate matching option
            this.keyboardSubscribe(this.variant === 'base');
            // When it is open we listen for option changes in order to fix active option and handle scroll
            this.optionChangesSubscription = (_e = this.options) === null || _e === void 0 ? void 0 : _e.changes.subscribe(function () {
                var _a, _b;
                if (!_this.activeOption || ((_a = _this.options) === null || _a === void 0 ? void 0 : _a.toArray().indexOf(_this.activeOption)) === -1) {
                    // Activate first option if active one is destroyed
                    (_b = _this.keyManager) === null || _b === void 0 ? void 0 : _b.setFirstItemActive();
                }
                else {
                    _this.activeOption.scrollIntoView();
                }
                _this.updateMenuHeight();
            });
            this.updateMenuHeight();
        };
        NglCombobox.prototype.onDetach = function () {
            var _a;
            if (this.open) {
                this.close();
                return;
            }
            // Clear aria-activedescendant when menu is closed
            (_a = this.inputEl) === null || _a === void 0 ? void 0 : _a.setAriaActiveDescendant(null);
            this.detach();
        };
        NglCombobox.prototype.trackByOption = function (_index, option) {
            return option.value;
        };
        NglCombobox.prototype.dropdownClass = function () {
            var _f;
            return _f = {},
                _f["slds-dropdown_length-" + this.visibleLength] = this.visibleLength > 0,
                _f;
        };
        NglCombobox.prototype.inputIconRight = function () {
            return this.isLookup ? 'utility:search' : 'utility:down';
        };
        NglCombobox.prototype.hasNoMatches = function () {
            return this.isLookup && this.data.length === 0 && !this.loadingMore;
        };
        NglCombobox.prototype.onOptionSelection = function (option) {
            if (option === void 0) { option = this.activeOption; }
            if (option) {
                var selection = addOptionToSelection(option.value, this.selection, this.multiple);
                this.selectionChange.emit(selection);
                if (this.closeOnSelection) {
                    this.close();
                }
            }
        };
        // Trigger by clear button on Lookup
        NglCombobox.prototype.onClearSelection = function () {
            var _this = this;
            this.selectionChange.emit(null);
            setTimeout(function () { var _a; return (_a = _this.inputEl) === null || _a === void 0 ? void 0 : _a.focus(); }, 0);
        };
        /**
         * Check whether value is currently selected.
         *
         * @param value The value in test, whether is (part of) selection or not
         */
        NglCombobox.prototype.isSelected = function (value) {
            return isOptionSelected(value, this.selection, this.multiple);
        };
        NglCombobox.prototype.ngOnDestroy = function () {
            var _a;
            this.detach();
            (_a = this.ɵRequiredSubscription) === null || _a === void 0 ? void 0 : _a.unsubscribe();
        };
        NglCombobox.prototype.close = function () {
            this.openChange.emit(false);
        };
        NglCombobox.prototype.detach = function () {
            this.keyboardSubscribe(false);
            this.keyManager = null;
            if (this.optionChangesSubscription) {
                this.optionChangesSubscription.unsubscribe();
                this.optionChangesSubscription = null;
            }
        };
        NglCombobox.prototype.calculateDisplayValue = function () {
            var _a;
            var value = this.selectionValueFn(this.selectedOptions.map(function (option) { return option.label || ''; }));
            (_a = this.inputEl) === null || _a === void 0 ? void 0 : _a.setValue(value);
        };
        NglCombobox.prototype.keyboardSubscribe = function (listen) {
            var _this = this;
            if (this.keyboardSubscription) {
                this.keyboardSubscription.unsubscribe();
                this.keyboardSubscription = null;
            }
            if (listen && this.inputEl) {
                this.keyboardSubscription = this.inputEl.keyboardBuffer$.subscribe(function (pattern) {
                    if (_this.options && _this.keyManager) {
                        pattern = pattern.toLocaleLowerCase();
                        var options = _this.options.toArray();
                        var activeIndex = _this.activeOption ? (_this.keyManager.activeItemIndex || 0) + 1 : 0;
                        for (var i = 0, n = options.length; i < n; i++) {
                            var index = (activeIndex + i) % n;
                            var option = options[index];
                            if (!option.disabled && option.label.toLocaleLowerCase().substr(0, pattern.length) === pattern) {
                                _this.keyManager.setActiveItem(option);
                                break;
                            }
                        }
                    }
                });
            }
        };
        NglCombobox.prototype.updateMenuHeight = function () {
            var _this = this;
            this.ngZone.onStable.asObservable().pipe(operators.take(1)).subscribe(function () {
                if (_this.cdkOverlay && _this.dropdownElementRef) {
                    var overlayRef = _this.cdkOverlay.overlayRef;
                    var height = _this.dropdownElementRef.nativeElement.offsetHeight;
                    overlayRef.updateSize({
                        minHeight: height + 4,
                    });
                    overlayRef.updatePosition();
                }
            });
        };
        NglCombobox.prototype.calculateErrors = function () {
            if (this.required) {
                this.hasErrors = !toBoolean(this.selection);
            }
            this.cd.detectChanges();
        };
        return NglCombobox;
    }());
    NglCombobox.decorators = [
        { type: core.Component, args: [{
                    selector: 'ngl-combobox',
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    template: "\n<label [nglFormLabel]=\"label\" [attr.for]=\"inputEl.id\" [required]=\"required\"></label>\n<div class=\"slds-form-element__control\">\n  <div class=\"slds-combobox_container\" [class.slds-has-selection]=\"hasLookupSingleSelection\">\n    <div class=\"slds-combobox slds-dropdown-trigger slds-dropdown-trigger_click\" [attr.aria-expanded]=\"open\" aria-haspopup=\"listbox\" role=\"combobox\" [class.slds-is-open]=\"open\" [attr.aria-owns]=\"uid\">\n      <div class=\"slds-combobox__form-element slds-input-has-icon\" role=\"none\" cdkOverlayOrigin #overlayOrigin=\"cdkOverlayOrigin\" [class.slds-input-has-icon_group-right]=\"loading\" [class.slds-input-has-icon_right]=\"!loading\">\n        <ng-content select=\"input\"></ng-content>\n        <div class=\"slds-input__icon-group slds-input__icon-group_right\" *ngIf=\"loading; else iconRight\">\n          <div class=\"slds-spinner slds-spinner_brand slds-spinner_x-small slds-input__spinner\" role=\"status\"><span class=\"slds-assistive-text\">{{ loadingLabel }}</span>\n            <div class=\"slds-spinner__dot-a\"></div>\n            <div class=\"slds-spinner__dot-b\"></div>\n          </div>\n          <ng-template [ngTemplateOutlet]=\"iconRight\"></ng-template>\n        </div>\n        <ng-template #iconRight>\n          <button class=\"slds-button slds-button_icon slds-input__icon slds-input__icon_right\" *ngIf=\"hasLookupSingleSelection; else iconTpl\" type=\"button\" (click)=\"onClearSelection()\" [title]=\"removeSelectedLabel\">\n            <svg class=\"slds-button__icon\" nglIconName=\"utility:close\"></svg><span class=\"slds-assistive-text\">{{ removeSelectedLabel }}</span>\n          </button>\n        </ng-template>\n        <ng-template #iconTpl><span class=\"slds-icon_container slds-input__icon slds-input__icon_right\">\n            <svg class=\"slds-icon slds-icon_x-small slds-icon-text-default\" [nglIconName]=\"inputIconRight()\"></svg></span></ng-template>\n      </div>\n    </div>\n  </div>\n</div>\n<ng-template cdkConnectedOverlay #cdkOverlay=\"cdkConnectedOverlay\" [cdkConnectedOverlayPositions]=\"overlayPositions\" [cdkConnectedOverlayOrigin]=\"overlayOrigin\" [cdkConnectedOverlayMinWidth]=\"overlayWidth\" [cdkConnectedOverlayOpen]=\"open\" (nglOverlayScrolledOutsideView)=\"close()\" (attach)=\"onAttach()\" (detach)=\"onDetach()\">\n  <div class=\"slds-dropdown slds-dropdown_fluid\" #dropdown [attr.id]=\"uid\" role=\"listbox\" [ngClass]=\"dropdownClass()\" (mousedown)=\"$event.preventDefault()\">\n    <ul class=\"slds-listbox slds-listbox_vertical\" role=\"presentation\">\n      <li *ngFor=\"let d of data; trackBy: trackByOption\" nglComboboxOption [value]=\"d.value\" [label]=\"d.label\" [disabled]=\"d.disabled\" [selected]=\"isSelected(d.value)\"></li>\n      <li class=\"slds-listbox__item\" *ngIf=\"loadingMore\" role=\"presentation\">\n        <div class=\"slds-align_absolute-center slds-p-top_medium\">\n          <div class=\"slds-spinner slds-spinner_x-small slds-spinner_inline\" role=\"status\">\n            <div class=\"slds-assistive-text\">{{ loadingLabel }}</div>\n            <div class=\"slds-spinner__dot-a\"></div>\n            <div class=\"slds-spinner__dot-b\"></div>\n          </div>\n        </div>\n      </li>\n      <li class=\"slds-listbox__item\" *ngIf=\"hasNoMatches()\" role=\"presentation\" aria-live=\"polite\">\n        <div class=\"slds-align_absolute-center\"><span role=\"status\">{{ noOptionsFound }}</span></div>\n      </li>\n    </ul>\n  </div>\n</ng-template>",
                    host: {
                        'class.slds-form-element': 'true',
                    },
                    providers: [NglComboboxService]
                },] }
    ];
    NglCombobox.ctorParameters = function () { return [
        { type: NglComboboxConfig, decorators: [{ type: core.Optional }, { type: core.Inject, args: [NGL_COMBOBOX_CONFIG,] }] },
        { type: core.NgZone },
        { type: core.ChangeDetectorRef },
        { type: NglComboboxService }
    ]; };
    NglCombobox.propDecorators = {
        variant: [{ type: core.Input }],
        label: [{ type: core.Input }],
        open: [{ type: core.Input }],
        openChange: [{ type: core.Output }],
        selection: [{ type: core.Input }],
        selectionChange: [{ type: core.Output }],
        multiple: [{ type: core.Input }],
        visibleLength: [{ type: core.Input }],
        inputEl: [{ type: core.ContentChild, args: [NglComboboxInput, { static: true },] }],
        loading: [{ type: core.Input }],
        loadingMore: [{ type: core.Input }],
        closeOnSelection: [{ type: core.Input }],
        loadingLabel: [{ type: core.Input }],
        noOptionsFound: [{ type: core.Input }],
        removeSelectedLabel: [{ type: core.Input }],
        options: [{ type: core.ViewChildren, args: [NglComboboxOption,] }],
        hasErrors: [{ type: core.HostBinding, args: ['class.slds-has-error',] }],
        data: [{ type: core.Input, args: ['options',] }],
        overlayOrigin: [{ type: core.ViewChild, args: ['overlayOrigin', { static: true },] }],
        cdkOverlay: [{ type: core.ViewChild, args: ['cdkOverlay',] }],
        dropdownElementRef: [{ type: core.ViewChild, args: ['dropdown',] }],
        selectionValueFn: [{ type: core.Input }]
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

    var DIRECTIVES$6 = [
        NglCombobox,
        NglComboboxOption,
        NglComboboxInput,
    ];
    var NglComboboxesModule = /** @class */ (function () {
        function NglComboboxesModule() {
        }
        return NglComboboxesModule;
    }());
    NglComboboxesModule.decorators = [
        { type: core.NgModule, args: [{
                    declarations: DIRECTIVES$6,
                    exports: DIRECTIVES$6,
                    imports: [common.CommonModule, NglInternalOutletModule, NglIconsModule, NglFormsModule, overlay.OverlayModule, NglOverlayModule],
                },] }
    ];

    var NglDatatableCell = /** @class */ (function () {
        function NglDatatableCell(templateRef) {
            this.templateRef = templateRef;
        }
        return NglDatatableCell;
    }());
    NglDatatableCell.decorators = [
        { type: core.Directive, args: [{ selector: '[nglDatatableCell]' },] }
    ];
    NglDatatableCell.ctorParameters = function () { return [
        { type: core.TemplateRef }
    ]; };

    var NglDatatableHeadingTemplate = /** @class */ (function () {
        function NglDatatableHeadingTemplate(templateRef) {
            this.templateRef = templateRef;
        }
        return NglDatatableHeadingTemplate;
    }());
    NglDatatableHeadingTemplate.decorators = [
        { type: core.Directive, args: [{ selector: '[nglDatatableHeading]' },] }
    ];
    NglDatatableHeadingTemplate.ctorParameters = function () { return [
        { type: core.TemplateRef }
    ]; };

    var NglDatatableColumn = /** @class */ (function () {
        function NglDatatableColumn() {
            this.sortable = false;
            this.truncate = false;
        }
        return NglDatatableColumn;
    }());
    NglDatatableColumn.decorators = [
        { type: core.Directive, args: [{
                    // tslint:disable-next-line:directive-selector
                    selector: 'ngl-datatable-column',
                },] }
    ];
    NglDatatableColumn.propDecorators = {
        heading: [{ type: core.Input }],
        key: [{ type: core.Input }],
        headClass: [{ type: core.Input }],
        cellClass: [{ type: core.Input }],
        sortable: [{ type: core.Input }],
        truncate: [{ type: core.Input }],
        cellTpl: [{ type: core.ContentChild, args: [NglDatatableCell,] }],
        headingTpl: [{ type: core.ContentChild, args: [NglDatatableHeadingTemplate,] }]
    };
    __decorate([
        InputBoolean()
    ], NglDatatableColumn.prototype, "sortable", void 0);
    __decorate([
        InputBoolean()
    ], NglDatatableColumn.prototype, "truncate", void 0);

    var NglDatatableLoadingOverlay = /** @class */ (function () {
        function NglDatatableLoadingOverlay(templateRef) {
            this.templateRef = templateRef;
        }
        return NglDatatableLoadingOverlay;
    }());
    NglDatatableLoadingOverlay.decorators = [
        { type: core.Directive, args: [{ selector: '[nglLoadingOverlay]' },] }
    ];
    NglDatatableLoadingOverlay.ctorParameters = function () { return [
        { type: core.TemplateRef }
    ]; };
    var NglDatatableNoRowsOverlay = /** @class */ (function () {
        function NglDatatableNoRowsOverlay(templateRef) {
            this.templateRef = templateRef;
        }
        return NglDatatableNoRowsOverlay;
    }());
    NglDatatableNoRowsOverlay.decorators = [
        { type: core.Directive, args: [{ selector: '[nglNoRowsOverlay]' },] }
    ];
    NglDatatableNoRowsOverlay.ctorParameters = function () { return [
        { type: core.TemplateRef }
    ]; };

    var NglDatatable = /** @class */ (function () {
        function NglDatatable(detector) {
            var _this = this;
            this.detector = detector;
            this.data = [];
            this.sortChange = new core.EventEmitter();
            this.loading = false;
            this.rowClick = new core.EventEmitter();
            this.dataTrackBy = function (index, data) {
                return _this.trackByKey ? data[_this.trackByKey] : index;
            };
        }
        Object.defineProperty(NglDatatable.prototype, "showLoading", {
            get: function () {
                return this.loading && this.loadingOverlay;
            },
            enumerable: false,
            configurable: true
        });
        NglDatatable.prototype.columnTrackBy = function (index, column) {
            return column.key || index;
        };
        NglDatatable.prototype.onColumnSort = function (column, order) {
            var key = column.key;
            if (!key) {
                throw new Error("ng-lightning: No \"key\" property is set for sortable column \"" + column.heading + "\"");
            }
            this.sortChange.emit({ key: key, order: order });
        };
        NglDatatable.prototype.getColumnSortOrder = function (column) {
            return this.sort && column.key === this.sort.key ? this.sort.order : null;
        };
        NglDatatable.prototype.onRowClick = function (event, data) {
            this.rowClick.emit({ event: event, data: data });
        };
        NglDatatable.prototype.ngAfterContentInit = function () {
            var _this = this;
            this._columnsSubscription = this.columns.changes.subscribe(function () { return _this.detector.markForCheck(); });
        };
        NglDatatable.prototype.ngOnDestroy = function () {
            if (this._columnsSubscription) {
                this._columnsSubscription.unsubscribe();
                this._columnsSubscription = null;
            }
        };
        return NglDatatable;
    }());
    NglDatatable.decorators = [
        { type: core.Component, args: [{
                    // tslint:disable-next-line:component-selector
                    selector: 'table[ngl-datatable]',
                    template: "\n<thead>\n  <tr class=\"slds-line-height_reset\">\n    <th *ngFor=\"let col of columns; trackBy:columnTrackBy\" nglDatatableHead scope=\"col\" [heading]=\"col.heading\" [headingTpl]=\"col.headingTpl?.templateRef\" [sortable]=\"col.sortable\" [sortOrder]=\"getColumnSortOrder(col)\" (sort)=\"onColumnSort(col, $event)\" [ngClass]=\"col.headClass\"></th>\n  </tr>\n</thead>\n<tbody>\n  <ng-template #noData>\n    <tr>\n      <td [attr.colspan]=\"columns.length\">\n        <ng-template [ngTemplateOutlet]=\"noRowsOverlay?.templateRef\"></ng-template>\n      </td>\n    </tr>\n  </ng-template>\n  <ng-container *ngIf=\"data &amp;&amp; data.length &gt; 0; else noData\">\n    <tr *ngFor=\"let d of data; let i = index; trackBy:dataTrackBy\" (click)=\"onRowClick($event, d)\">\n      <td *ngFor=\"let col of columns; trackBy:columnTrackBy\" [ngClass]=\"col.cellClass\" nglDatatatableCell_ [row]=\"d\" [column]=\"col\" [index]=\"i\"></td>\n    </tr>\n  </ng-container>\n</tbody>\n<div class=\"ngl-datatable-loading slds-align_absolute-center\" *ngIf=\"showLoading\">\n  <ng-template [ngTemplateOutlet]=\"loadingOverlay.templateRef\"></ng-template>\n</div>",
                    host: {
                        '[class.slds-table]': 'true',
                    },
                    styles: ["\n    .ngl-datatable-loading {\n      position: absolute;\n      z-index: 1;\n      top: 0; left: 0; right: 0; bottom: 0;\n      background: rgba(255, 255, 255, 0.5)\n    }\n  "]
                },] }
    ];
    NglDatatable.ctorParameters = function () { return [
        { type: core.ChangeDetectorRef }
    ]; };
    NglDatatable.propDecorators = {
        data: [{ type: core.Input }],
        trackByKey: [{ type: core.Input }],
        sort: [{ type: core.Input }],
        sortChange: [{ type: core.Output }],
        loading: [{ type: core.HostBinding, args: ['class.slds-is-relative',] }, { type: core.Input }],
        loadingOverlay: [{ type: core.ContentChild, args: [NglDatatableLoadingOverlay,] }],
        noRowsOverlay: [{ type: core.ContentChild, args: [NglDatatableNoRowsOverlay,] }],
        columns: [{ type: core.ContentChildren, args: [NglDatatableColumn,] }],
        rowClick: [{ type: core.Output }]
    };

    var NglInternalDatatableHeadCell = /** @class */ (function () {
        function NglInternalDatatableHeadCell() {
            this.sort = new core.EventEmitter();
        }
        Object.defineProperty(NglInternalDatatableHeadCell.prototype, "header", {
            get: function () {
                return this.headingTpl || this.heading;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NglInternalDatatableHeadCell.prototype, "attrTitle", {
            get: function () {
                return this.heading || null;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NglInternalDatatableHeadCell.prototype, "ariaSort", {
            get: function () {
                return this.sortOrder ? this.sortOrder + "ending" : 'none';
            },
            enumerable: false,
            configurable: true
        });
        NglInternalDatatableHeadCell.prototype.sortChange = function () {
            this.sort.emit(this.sortOrder === 'desc' ? 'asc' : 'desc');
        };
        return NglInternalDatatableHeadCell;
    }());
    NglInternalDatatableHeadCell.decorators = [
        { type: core.Component, args: [{
                    // tslint:disable-next-line:component-selector
                    selector: 'th[nglDatatableHead]',
                    template: "<a class=\"slds-th__action slds-text-link_reset\" *ngIf=\"sortable; else baseTpl\" (click)=\"sortChange()\" role=\"button\" tabindex=\"0\"><span class=\"slds-assistive-text\">Sort by:</span>\n  <div class=\"slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate\"><span class=\"slds-truncate\" [attr.title]=\"attrTitle\" [nglInternalOutlet]=\"header\"></span><span class=\"slds-icon_container slds-icon-utility-arrowdown\">\n      <svg class=\"slds-icon slds-icon-text-default slds-is-sortable__icon\" nglIconName=\"arrowdown\"></svg></span></div></a>\n<ng-template #baseTpl>\n  <div class=\"slds-truncate\" [attr.title]=\"attrTitle\" [nglInternalOutlet]=\"header\"></div>\n</ng-template>",
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    host: {
                        '[class.slds-is-sorted_asc]': "sortOrder === 'asc'",
                        '[class.slds-is-sorted_desc]': "sortOrder === 'desc'",
                        '[class.slds-is-sorted]': "!!sortOrder",
                    }
                },] }
    ];
    NglInternalDatatableHeadCell.propDecorators = {
        heading: [{ type: core.Input }],
        headingTpl: [{ type: core.Input }],
        sortable: [{ type: core.HostBinding, args: ['class.slds-is-sortable',] }, { type: core.Input }],
        sortOrder: [{ type: core.Input }],
        ariaSort: [{ type: core.HostBinding, args: ['attr.aria-sort',] }],
        sort: [{ type: core.Output }]
    };

    var NglInternalDatatableCell = /** @class */ (function () {
        function NglInternalDatatableCell() {
        }
        Object.defineProperty(NglInternalDatatableCell.prototype, "dataLabel", {
            get: function () {
                return this.column.heading;
            },
            enumerable: false,
            configurable: true
        });
        NglInternalDatatableCell.prototype.ngOnChanges = function () {
            this.context = {
                $implicit: this.value,
                row: this.row,
                index: this.index,
            };
        };
        Object.defineProperty(NglInternalDatatableCell.prototype, "value", {
            get: function () {
                var key = this.column.key;
                return key ? this.row[key] : null;
            },
            enumerable: false,
            configurable: true
        });
        return NglInternalDatatableCell;
    }());
    NglInternalDatatableCell.decorators = [
        { type: core.Component, args: [{
                    // tslint:disable-next-line:component-selector
                    selector: 'td[nglDatatatableCell_]',
                    template: "\n<div [class.slds-truncate]=\"column.truncate\" [attr.title]=\"column.truncate ? value : null\">\n  <ng-container *ngIf=\"column.cellTpl; else stringTpl\" [ngTemplateOutlet]=\"column.cellTpl.templateRef\" [ngTemplateOutletContext]=\"context\"></ng-container>\n  <ng-template #stringTpl>{{ value }}</ng-template>\n</div>",
                    changeDetection: core.ChangeDetectionStrategy.OnPush
                },] }
    ];
    NglInternalDatatableCell.propDecorators = {
        row: [{ type: core.Input }],
        column: [{ type: core.Input }],
        index: [{ type: core.Input }],
        dataLabel: [{ type: core.HostBinding, args: ['attr.data-label',] }]
    };

    var NGL_DATATABLE_DIRECTIVES = [
        NglDatatable,
        NglDatatableColumn,
        NglDatatableCell,
        NglDatatableHeadingTemplate,
        NglDatatableLoadingOverlay, NglDatatableNoRowsOverlay,
    ];
    var NglDatatablesModule = /** @class */ (function () {
        function NglDatatablesModule() {
        }
        return NglDatatablesModule;
    }());
    NglDatatablesModule.decorators = [
        { type: core.NgModule, args: [{
                    declarations: [NGL_DATATABLE_DIRECTIVES, NglInternalDatatableHeadCell, NglInternalDatatableCell],
                    exports: [NGL_DATATABLE_DIRECTIVES],
                    imports: [common.CommonModule, NglIconsModule, NglInternalOutletModule],
                },] }
    ];

    var NglClickOutsideDirective = /** @class */ (function () {
        function NglClickOutsideDirective(document, element) {
            this.document = document;
            this.element = element;
            this.clickOutside = new core.EventEmitter();
        }
        NglClickOutsideDirective.prototype.ngAfterViewInit = function () {
            var _this = this;
            this.subscription = rxjs.fromEvent(this.document, 'click').subscribe(function (e) {
                if (_this.shouldClose(e)) {
                    _this.clickOutside.emit();
                }
            });
        };
        NglClickOutsideDirective.prototype.ngOnDestroy = function () {
            if (this.subscription) {
                this.subscription.unsubscribe();
                this.subscription = null;
            }
        };
        NglClickOutsideDirective.prototype.shouldClose = function (event) {
            var element = event.target;
            if ((event instanceof MouseEvent && event.button === 2) || isContainedIn(element, this.ignore)) {
                return false;
            }
            return !isContainedIn(element, this.element.nativeElement);
        };
        return NglClickOutsideDirective;
    }());
    NglClickOutsideDirective.decorators = [
        { type: core.Directive, args: [{
                    selector: '[nglClickOutside]'
                },] }
    ];
    NglClickOutsideDirective.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: core.Inject, args: [common.DOCUMENT,] }] },
        { type: core.ElementRef }
    ]; };
    NglClickOutsideDirective.propDecorators = {
        clickOutside: [{ type: core.Output, args: ['nglClickOutside',] }],
        ignore: [{ type: core.Input, args: ['nglClickOutsideIgnore',] }]
    };
    function isContainedIn(el, container) {
        if (!container) {
            return false;
        }
        return Array.isArray(container) ? container.some(function (c) { return c.contains(el); }) : container.contains(el);
    }

    var DIRECTIVES$5 = [NglClickOutsideDirective];
    var NglClickOutsideModule = /** @class */ (function () {
        function NglClickOutsideModule() {
        }
        return NglClickOutsideModule;
    }());
    NglClickOutsideModule.decorators = [
        { type: core.NgModule, args: [{
                    imports: [common.CommonModule],
                    declarations: DIRECTIVES$5,
                    exports: DIRECTIVES$5,
                },] }
    ];

    var NglDateAdapterBase = /** @class */ (function () {
        function NglDateAdapterBase() {
        }
        return NglDateAdapterBase;
    }());

    var PATTERNS = {
        'big-endian': 'yyyy/MM/dd',
        'little-endian': 'dd/MM/yyyy',
        'middle-endian': 'MM/dd/yyyy',
    };
    var NglDateAdapter = /** @class */ (function (_super) {
        __extends(NglDateAdapter, _super);
        function NglDateAdapter() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        NglDateAdapter.prototype.parse = function (value, format) {
            var date = dateFns.parse(value, format, new Date());
            return this.isValidDate(date) ? date : null;
        };
        NglDateAdapter.prototype.format = function (date, format) {
            return dateFns.format(date, format);
        };
        NglDateAdapter.prototype.pattern = function (name, delimiter) {
            var pattern = PATTERNS[name];
            return (delimiter && delimiter !== '/') ? pattern.replace(/\//g, delimiter) : pattern;
        };
        NglDateAdapter.prototype.isValidDate = function (value) {
            var dateWrapper = new Date(value);
            return !isNaN(dateWrapper.getDate());
        };
        return NglDateAdapter;
    }(NglDateAdapterBase));
    NglDateAdapter.decorators = [
        { type: core.Injectable }
    ];

    /** Injection token that can be used to specify default options. */
    var NGL_DATEPICKER_CONFIG = new core.InjectionToken('ngl-datepicker-config');
    var NglDatepickerConfig = /** @class */ (function () {
        function NglDatepickerConfig(locale) {
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
            this.monthNames = common.getLocaleMonthNames(locale, common.FormStyle.Standalone, common.TranslationWidth.Wide);
            this.dayNamesShort = common.getLocaleDayNames(locale, common.FormStyle.Standalone, common.TranslationWidth.Abbreviated);
            this.dayNamesLong = common.getLocaleDayNames(locale, common.FormStyle.Standalone, common.TranslationWidth.Wide);
            this.firstDayOfWeek = common.getLocaleFirstDayOfWeek(locale);
        }
        return NglDatepickerConfig;
    }());

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
        var today = new Date();
        return { year: today.getFullYear(), month: today.getMonth(), day: today.getDate() };
    }
    function numberOfDaysInMonth(year, month) {
        return new Date(year, month + 1, 0).getDate();
    }
    // Split array into smaller arrays
    function split(arr, size) {
        if (size === void 0) { size = 7; }
        var arrays = [];
        while (arr.length > 0) {
            arrays.push(arr.splice(0, size));
        }
        return arrays;
    }
    function isDisabled(d, disabledCallback, min, max) {
        var date = new Date(d.year, d.month, d.day);
        return (disabledCallback && disabledCallback(date)) ||
            (min && compareDate(d, min) < 0) ||
            (max && compareDate(d, max) > 0);
    }
    function compareDate(d1, d2) {
        if (isEqualDate(d1, d2)) {
            return 0;
        }
        var keys = ['year', 'month', 'day'];
        for (var i = 0; i < 3; i++) {
            var key = keys[i];
            var diff = d1[key] - d2[key];
            if (diff !== 0) {
                return diff > 0 ? 1 : -1;
            }
        }
        return 0;
    }
    function isSameMonth(d1, d2) {
        return d1.year === d2.year && d1.month === d2.month;
    }

    var NGL_DATEPICKER_INPUT_VALUE_ACCESSOR = {
        provide: forms.NG_VALUE_ACCESSOR,
        useExisting: core.forwardRef(function () { return NglDatepickerInput; }),
        multi: true
    };
    var NGL_DATEPICKER_INPUT_VALIDATOR = {
        provide: forms.NG_VALIDATORS,
        useExisting: core.forwardRef(function () { return NglDatepickerInput; }),
        multi: true
    };
    var NglDatepickerInput = /** @class */ (function () {
        function NglDatepickerInput(defaultConfig, locale, element, renderer, cd, hostService, ngZone, focusTrapFactory, adapter) {
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
            this.valueChange = new core.EventEmitter();
            /**
             * Text for button to open calendar.
             */
            this.selectDateLabel = 'Select a date';
            this.dateDisabled = null;
            this.uid = uniqueId('datepicker-input');
            this._open = new rxjs.BehaviorSubject(false);
            this._value = null;
            this.onChange = null;
            this.onTouched = function () { };
            this.validatorChange = function () { };
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
        Object.defineProperty(NglDatepickerInput.prototype, "value", {
            get: function () {
                return this._value;
            },
            /**
             * The date value.
             */
            set: function (value) {
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
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NglDatepickerInput.prototype, "required", {
            set: function (required) {
                this.isRequired = toBoolean(required);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NglDatepickerInput.prototype, "open", {
            get: function () {
                return this._open.value;
            },
            set: function (open) {
                this._open.next(open);
            },
            enumerable: false,
            configurable: true
        });
        NglDatepickerInput.prototype.validate = function (c) {
            var value = c.value;
            if (!value) {
                return null;
            }
            if (!(this.value instanceof Date)) {
                return { 'nglDatepickerInput': { invalid: c.value } };
            }
            var date = parseDate(value);
            if (isDisabled(date, this.dateDisabled, parseDate(this.min), parseDate(this.max))) {
                return { 'nglDatepickerInput': { disabled: c.value } };
            }
            return null;
        };
        NglDatepickerInput.prototype.writeValue = function (value) {
            this.value = value;
            this.cd.markForCheck();
        };
        NglDatepickerInput.prototype.registerOnChange = function (fn) { this.onChange = fn; };
        NglDatepickerInput.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
        NglDatepickerInput.prototype.registerOnValidatorChange = function (fn) { this.validatorChange = fn; };
        NglDatepickerInput.prototype.setDisabledState = function (disabled) { this.disabled = disabled; };
        NglDatepickerInput.prototype.onBlur = function () {
            if (this.value instanceof Date) {
                this.updateInputValue();
            }
            this.onTouched();
        };
        NglDatepickerInput.prototype.ngOnInit = function () {
            var _this = this;
            this._open.subscribe(function () {
                _this.setHostClass();
                _this.cd.markForCheck();
            });
        };
        NglDatepickerInput.prototype.ngOnChanges = function (changes) {
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
        };
        NglDatepickerInput.prototype.ngOnDestroy = function () {
            this.closeCalendar(false);
        };
        NglDatepickerInput.prototype.onKeyboardInput = function (evt) {
            var keyCode = evt.keyCode;
            if (!this.open && (keyCode === keycodes.DOWN_ARROW || keyCode === keycodes.UP_ARROW)) {
                this.openCalendar();
            }
        };
        NglDatepickerInput.prototype.onInputChange = function () {
            var value = this.inputEl.element.nativeElement.value;
            var date = this.dateParse(value);
            this.emitSelection(date || value);
        };
        NglDatepickerInput.prototype.openCalendar = function () {
            this.open = true;
        };
        NglDatepickerInput.prototype.onAttach = function () {
            this.focusTrap = this.focusTrapFactory.create(this.cdkOverlay.overlayRef.overlayElement);
        };
        NglDatepickerInput.prototype.onDetach = function () {
            if (this.open) {
                this.closeCalendar();
            }
        };
        NglDatepickerInput.prototype.closeCalendar = function (focusInput) {
            if (focusInput === void 0) { focusInput = true; }
            this.open = false;
            if (this.focusTrap) {
                this.focusTrap.destroy();
                this.focusTrap = null;
            }
            if (focusInput) {
                this.inputEl.element.nativeElement.focus();
            }
        };
        NglDatepickerInput.prototype.onTriggerClick = function (origin) {
            if (origin === 'input' && !this.openOnInputClick) {
                return;
            }
            if (!this.open) {
                this.openCalendar();
            }
            else {
                this.closeCalendar(false);
            }
        };
        NglDatepickerInput.prototype.pickerSelection = function (date) {
            this.emitSelection(date);
            this.closeCalendar();
        };
        NglDatepickerInput.prototype.updateDatepickerSize = function (width, height) {
            var _this = this;
            this.ngZone.onStable.asObservable().pipe(operators.take(1)).subscribe(function () {
                var overlayRef = _this.cdkOverlay.overlayRef;
                overlayRef.updateSize({
                    minWidth: width,
                    minHeight: height + 4,
                });
                overlayRef.updatePosition();
            });
        };
        NglDatepickerInput.prototype.setPositions = function (align) {
            this.overlayPositions = __spreadArray([], __read(DEFAULT_DROPDOWN_POSITIONS[align]));
        };
        NglDatepickerInput.prototype.formatInputValue = function () {
            var inputValue = this.inputEl.element.nativeElement.value;
            if (!inputValue) {
                this.updateInputValue();
            }
            else {
                var date = this.value;
                var dateNow = this.dateParse(inputValue);
                if (!dateNow || dateNow.getFullYear() !== date.getFullYear() || dateNow.getMonth() !== date.getMonth() || dateNow.getDate() !== date.getDate()) {
                    this.updateInputValue();
                }
            }
        };
        NglDatepickerInput.prototype.updateInputValue = function (value) {
            if (value === void 0) { value = this.dateFormat(this.value); }
            this.renderer.setProperty(this.inputEl.element.nativeElement, 'value', value || '');
        };
        NglDatepickerInput.prototype.dateParse = function (value) {
            return this.adapter.parse(value, this.getPattern());
        };
        NglDatepickerInput.prototype.dateFormat = function (date) {
            return this.adapter.format(date, this.getPattern());
        };
        NglDatepickerInput.prototype.getPattern = function () {
            if (!this.pattern) {
                this.setPattern();
            }
            return this.pattern;
        };
        NglDatepickerInput.prototype.setPattern = function () {
            this.pattern = this.adapter.pattern(this.format || this.config.format, this.delimiter || this.config.delimiter);
        };
        NglDatepickerInput.prototype.emitSelection = function (value) {
            this.valueChange.emit(value);
            if (this.onChange) {
                this.value = value;
                this.onChange(value);
            }
        };
        NglDatepickerInput.prototype.setHostClass = function () {
            var _a;
            this.hostService.updateClass(this.element, (_a = {},
                _a["slds-is-open"] = this.open,
                _a));
        };
        return NglDatepickerInput;
    }());
    NglDatepickerInput.decorators = [
        { type: core.Component, args: [{
                    selector: 'ngl-datepicker-input',
                    template: "\n<label *ngIf=\"label\" [nglFormLabel]=\"label\" [attr.for]=\"uid\" [required]=\"isRequired\"></label>\n<div class=\"slds-form-element__control slds-input-has-icon slds-input-has-icon_right\" #formEl cdkOverlayOrigin #overlayOrigin=\"cdkOverlayOrigin\">\n  <ng-content></ng-content>\n  <button class=\"slds-button slds-button_icon slds-input__icon slds-input__icon_right\" type=\"button\" [title]=\"selectDateLabel\" [disabled]=\"disabled\" (click)=\"onTriggerClick('button')\">\n    <svg class=\"slds-button__icon\" nglIconName=\"utility:event\"></svg><span class=\"slds-assistive-text\">{{ selectDateLabel }}</span>\n  </button>\n</div>\n<ng-template cdkConnectedOverlay #cdkOverlay=\"cdkConnectedOverlay\" [cdkConnectedOverlayPositions]=\"overlayPositions\" [cdkConnectedOverlayOrigin]=\"overlayOrigin\" [cdkConnectedOverlayOpen]=\"open\" (nglOverlayScrolledOutsideView)=\"closeCalendar(false)\" (attach)=\"onAttach()\" (detach)=\"onDetach()\">\n  <ngl-datepicker class=\"slds-dropdown\" [attr.aria-hidden]=\"!open\" [date]=\"date\" [monthNames]=\"monthNames\" [dayNamesShort]=\"dayNamesShort\" [dayNamesLong]=\"dayNamesLong\" [firstDayOfWeek]=\"firstDayOfWeek\" [showToday]=\"showToday\" [min]=\"min\" [max]=\"max\" [relativeYearFrom]=\"relativeYearFrom\" [relativeYearTo]=\"relativeYearTo\" [todayLabel]=\"todayLabel\" [previousMonthLabel]=\"previousMonthLabel\" [nextMonthLabel]=\"nextMonthLabel\" [dateDisabled]=\"dateDisabled\" (dateChange)=\"pickerSelection($event)\" (nglClickOutside)=\"closeCalendar(false)\" [nglClickOutsideIgnore]=\"formEl\"></ngl-datepicker>\n</ng-template>",
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    providers: [NGL_DATEPICKER_INPUT_VALUE_ACCESSOR, NGL_DATEPICKER_INPUT_VALIDATOR, HostService]
                },] }
    ];
    NglDatepickerInput.ctorParameters = function () { return [
        { type: NglDatepickerConfig, decorators: [{ type: core.Optional }, { type: core.Inject, args: [NGL_DATEPICKER_CONFIG,] }] },
        { type: String, decorators: [{ type: core.Inject, args: [core.LOCALE_ID,] }] },
        { type: core.ElementRef },
        { type: core.Renderer2 },
        { type: core.ChangeDetectorRef },
        { type: HostService },
        { type: core.NgZone },
        { type: a11y.FocusTrapFactory },
        { type: NglDateAdapter }
    ]; };
    NglDatepickerInput.propDecorators = {
        label: [{ type: core.Input }],
        format: [{ type: core.Input }],
        delimiter: [{ type: core.Input }],
        disabled: [{ type: core.Input }],
        dropdownAlign: [{ type: core.Input }],
        value: [{ type: core.Input }],
        openOnInputClick: [{ type: core.Input }],
        valueChange: [{ type: core.Output }],
        cdkOverlay: [{ type: core.ViewChild, args: ['cdkOverlay',] }],
        min: [{ type: core.Input }],
        max: [{ type: core.Input }],
        required: [{ type: core.Input }],
        selectDateLabel: [{ type: core.Input }],
        patternPlaceholder: [{ type: core.Input }],
        monthNames: [{ type: core.Input }],
        dayNamesShort: [{ type: core.Input }],
        dayNamesLong: [{ type: core.Input }],
        firstDayOfWeek: [{ type: core.Input }],
        showToday: [{ type: core.Input }],
        dateDisabled: [{ type: core.Input }],
        relativeYearFrom: [{ type: core.Input }],
        relativeYearTo: [{ type: core.Input }],
        todayLabel: [{ type: core.Input }],
        previousMonthLabel: [{ type: core.Input }],
        nextMonthLabel: [{ type: core.Input }]
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

    var NglDay = /** @class */ (function () {
        function NglDay(el) {
            this.el = el;
        }
        Object.defineProperty(NglDay.prototype, "tabindex", {
            get: function () {
                return this.isActive ? 0 : -1;
            },
            enumerable: false,
            configurable: true
        });
        NglDay.prototype.focus = function () {
            this.el.nativeElement.focus();
        };
        return NglDay;
    }());
    NglDay.decorators = [
        { type: core.Directive, args: [{
                    selector: 'td[nglDay]',
                },] }
    ];
    NglDay.ctorParameters = function () { return [
        { type: core.ElementRef }
    ]; };
    NglDay.propDecorators = {
        date: [{ type: core.Input, args: ['nglDay',] }],
        nglDayDisabled: [{ type: core.HostBinding, args: ['class.slds-disabled-text',] }, { type: core.HostBinding, args: ['attr.aria-disabled',] }, { type: core.Input }],
        nglDaySelected: [{ type: core.HostBinding, args: ['class.slds-is-selected',] }, { type: core.HostBinding, args: ['attr.aria-selected',] }, { type: core.Input }],
        isActive: [{ type: core.Input }],
        tabindex: [{ type: core.HostBinding, args: ['attr.tabindex',] }]
    };

    var NglDatepickerMonth = /** @class */ (function () {
        function NglDatepickerMonth(ngZone) {
            this.ngZone = ngZone;
            this.dateDisabled = null;
            this.selectDate = new core.EventEmitter();
        }
        NglDatepickerMonth.prototype.indexTrackBy = function (index) {
            return index;
        };
        NglDatepickerMonth.prototype.dateTrackBy = function (index, _a) {
            var year = _a.year, month = _a.month, day = _a.day;
            return day + "-" + month + "-" + year;
        };
        NglDatepickerMonth.prototype.onSelect = function (date) {
            if (date.disabled)
                return;
            this.selectDate.emit(date);
        };
        NglDatepickerMonth.prototype.ngOnChanges = function (changes) {
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
        };
        NglDatepickerMonth.prototype.focusActiveDay = function () {
            var _this = this;
            this.ngZone.runOutsideAngular(function () {
                _this.ngZone.onStable.asObservable().pipe(operators.take(1)).subscribe(function () {
                    var active = _this.days.find(function (d) { return d.isActive; });
                    if (active) {
                        active.focus();
                    }
                });
            });
        };
        NglDatepickerMonth.prototype.renderView = function () {
            var days = this.daysInMonth(this.year, this.month);
            Array.prototype.unshift.apply(days, this.daysInPreviousMonth(this.year, this.month));
            var nextMonth = this.daysInNextMonth(this.year, this.month + 1, days.length);
            if (nextMonth) {
                Array.prototype.push.apply(days, nextMonth);
            }
            this.weeks = split(days);
        };
        NglDatepickerMonth.prototype.daysInMonth = function (year, month) {
            var last = numberOfDaysInMonth(year, month);
            return this.getDayObjects(year, month, 1, last);
        };
        NglDatepickerMonth.prototype.daysInPreviousMonth = function (year, month) {
            var firstIndex = (new Date(year, month, 1)).getDay();
            var last = new Date(year, month, 0).getDate();
            var numDays = (7 + firstIndex - this.firstDayOfWeek) % 7;
            return this.getDayObjects(year, month - 1, last - numDays + 1, last, false);
        };
        NglDatepickerMonth.prototype.daysInNextMonth = function (year, month, numOfDays) {
            if (numOfDays % 7 === 0) {
                return [];
            }
            return this.getDayObjects(year, month, 1, 7 - (numOfDays % 7), false);
        };
        NglDatepickerMonth.prototype.getDayObjects = function (year, month, from, to, isCurrentMonth) {
            if (isCurrentMonth === void 0) { isCurrentMonth = true; }
            var today = getToday();
            var days = [];
            for (var day = from; day <= to; day++) {
                var d = {
                    year: year,
                    month: month,
                    day: day,
                    isCurrentMonth: isCurrentMonth,
                    today: isEqualDate(today, { year: year, month: month, day: day }),
                };
                d.active = this.isActive(d);
                d.selected = this.isSelected(d);
                d.disabled = this.isDisabled(d);
                days.push(d);
            }
            return days;
        };
        NglDatepickerMonth.prototype.updateActive = function () {
            var _this = this;
            this.weeks.forEach(function (days) {
                days.forEach(function (day) {
                    day.active = _this.isActive(day);
                });
            });
        };
        NglDatepickerMonth.prototype.isActive = function (day) {
            return day.isCurrentMonth && day.day === this.day;
        };
        NglDatepickerMonth.prototype.updateSelected = function () {
            var _this = this;
            this.weeks.forEach(function (days) {
                days.forEach(function (day) {
                    day.selected = _this.isSelected(day);
                });
            });
        };
        NglDatepickerMonth.prototype.isSelected = function (day) {
            return isEqualDate(this.selected, day);
        };
        NglDatepickerMonth.prototype.updateDisabled = function () {
            var _this = this;
            this.weeks.forEach(function (days) {
                days.forEach(function (day) {
                    day.disabled = _this.isDisabled(day);
                });
            });
        };
        /** Date filter for the month */
        NglDatepickerMonth.prototype.isDisabled = function (d) {
            return !d.isCurrentMonth || isDisabled(d, this.dateDisabled, this.minDate, this.maxDate);
        };
        return NglDatepickerMonth;
    }());
    NglDatepickerMonth.decorators = [
        { type: core.Component, args: [{
                    // tslint:disable-next-line:component-selector
                    selector: '[nglDatepickerMonth]',
                    template: "\n<tr *ngFor=\"let week of weeks; trackBy:indexTrackBy\">\n  <td *ngFor=\"let date of week; trackBy:dateTrackBy\" [class.slds-is-today]=\"date.today\" [isActive]=\"date.active\" [nglDay]=\"date\" [nglDaySelected]=\"date.selected\" [nglDayDisabled]=\"date.disabled\" (click)=\"onSelect(date)\" role=\"gridcell\"><span class=\"slds-day\">{{ date.day }}</span></td>\n</tr>",
                    changeDetection: core.ChangeDetectionStrategy.OnPush
                },] }
    ];
    NglDatepickerMonth.ctorParameters = function () { return [
        { type: core.NgZone }
    ]; };
    NglDatepickerMonth.propDecorators = {
        selected: [{ type: core.Input }],
        year: [{ type: core.Input }],
        month: [{ type: core.Input }],
        day: [{ type: core.Input }],
        firstDayOfWeek: [{ type: core.Input }],
        minDate: [{ type: core.Input }],
        maxDate: [{ type: core.Input }],
        dateDisabled: [{ type: core.Input }],
        selectDate: [{ type: core.Output }],
        days: [{ type: core.ViewChildren, args: [NglDay,] }]
    };

    var _a;
    var KEYBOARD_MOVES = (_a = {},
        _a[keycodes.UP_ARROW] = ['Move', -7],
        _a[keycodes.LEFT_ARROW] = ['Move', -1],
        _a[keycodes.DOWN_ARROW] = ['Move', 7],
        _a[keycodes.RIGHT_ARROW] = ['Move', 1],
        _a[keycodes.PAGE_UP] = ['MoveMonth', -1],
        _a[keycodes.PAGE_DOWN] = ['MoveMonth', 1],
        _a[keycodes.HOME] = ['MoveTo', 1],
        _a[keycodes.END] = ['MoveTo', 31],
        _a);
    var NglDatepicker = /** @class */ (function () {
        function NglDatepicker(dtInput, defaultConfig, locale, element) {
            this.dtInput = dtInput;
            this.element = element;
            this.dateDisabled = null;
            this.dateChange = new core.EventEmitter();
            this.uid = uniqueId('datepicker');
            var config = Object.assign(Object.assign({}, new NglDatepickerConfig(locale)), defaultConfig);
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
        Object.defineProperty(NglDatepicker.prototype, "date", {
            set: function (date) {
                this._date = parseDate(date);
            },
            enumerable: false,
            configurable: true
        });
        NglDatepicker.prototype.ngOnInit = function () {
            this.setMinMaxDates();
            this.setCurrent(this._date || getToday());
        };
        NglDatepicker.prototype.ngOnChanges = function (changes) {
            if ((changes.date && changes.date.isFirstChange()) ||
                changes.relativeYearFrom || changes.relativeYearTo ||
                changes.min || changes.max) {
                this.setMinMaxDates();
            }
            if (changes.date) {
                this.setCurrent(this._date);
            }
        };
        NglDatepicker.prototype.moveYear = function (year) {
            this.setCurrent({ year: +year });
        };
        NglDatepicker.prototype.moveMonth = function (diff) {
            this.moveCalendar('MoveMonth', diff);
        };
        NglDatepicker.prototype.keyboardHandler = function (evt) {
            var keyCode = evt.keyCode;
            if (keyCode === keycodes.ENTER) {
                trapEvent(evt);
                if (!this.isDisabledDate(this.current)) {
                    this.select(this.current);
                }
                return;
            }
            var move = KEYBOARD_MOVES[keyCode];
            if (!move) {
                return;
            }
            // Handle keyboard event inside datepicker
            trapEvent(evt);
            var _a = __read(move, 2), code = _a[0], param = _a[1];
            this.moveCalendar(code, param);
            this.focusActiveDay();
        };
        NglDatepicker.prototype.select = function (date) {
            if (date.disabled) {
                return;
            }
            var year = date.year, month = date.month, day = date.day;
            this.dateChange.emit(new Date(year, month, day));
        };
        NglDatepicker.prototype.selectToday = function () {
            var today = getToday();
            if (this.isDisabledDate(today)) {
                this.setCurrent(today);
            }
            else {
                this.dateChange.emit(new Date());
            }
        };
        NglDatepicker.prototype.ngAfterViewInit = function () {
            if (this.dtInput) {
                var el = this.element.nativeElement;
                this.dtInput.updateDatepickerSize(el.offsetWidth, el.offsetHeight);
                this.focusActiveDay();
            }
        };
        /** Whether the previous period button is disabled. */
        NglDatepicker.prototype.previousDisabled = function () {
            return this.minDate && isSameMonth(this.current, this.minDate);
        };
        /** Whether the next period button is disabled. */
        NglDatepicker.prototype.nextDisabled = function () {
            return this.maxDate && isSameMonth(this.current, this.maxDate);
        };
        NglDatepicker.prototype.focusActiveDay = function () {
            this.monthView.focusActiveDay();
        };
        NglDatepicker.prototype.moveCalendar = function (code, param) {
            var _a = this.current, year = _a.year, month = _a.month, day = _a.day;
            var date = new Date(year, month, day, 12);
            if (code === 'Move') {
                date.setDate(day + (+param));
                this.setCurrent({ year: date.getFullYear(), month: date.getMonth(), day: date.getDate() });
            }
            else if (code === 'MoveMonth') {
                date.setMonth(month + (+param), 1);
                this.setCurrent({ year: date.getFullYear(), month: date.getMonth(), day: day });
            }
            else if (code === 'MoveTo') {
                this.setCurrent({ day: +param });
            }
        };
        NglDatepicker.prototype.setCurrent = function (d, doRender) {
            if (doRender === void 0) { doRender = true; }
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
        };
        NglDatepicker.prototype.render = function () {
            var _a = this.current, year = _a.year, month = _a.month, day = _a.day;
            this.monthLabel = this.monthNames[month];
            // Keep current day inside limits of this month
            this.setCurrent({ day: Math.min(day, numberOfDaysInMonth(year, month)) }, false);
        };
        /** Date filter for the month */
        NglDatepicker.prototype.isDisabledDate = function (date) {
            return isDisabled(date, this.dateDisabled, this.minDate, this.maxDate);
        };
        NglDatepicker.prototype.setMinMaxDates = function () {
            var year = getToday().year;
            this.minDate = this.min ? parseDate(this.min) : { year: year + this.relativeYearFrom, month: 0, day: 1 };
            this.maxDate = this.max ? parseDate(this.max) : { year: year + this.relativeYearTo, month: 11, day: 31 };
        };
        return NglDatepicker;
    }());
    NglDatepicker.decorators = [
        { type: core.Component, args: [{
                    selector: 'ngl-datepicker',
                    template: "\n<div class=\"slds-datepicker__filter slds-grid\">\n  <div class=\"slds-datepicker__filter_month slds-grid slds-grid_align-spread slds-grow\">\n    <div class=\"slds-align-middle\">\n      <button class=\"slds-button slds-button_icon-container\" type=\"button\" (click)=\"moveMonth(-1)\" [disabled]=\"previousDisabled()\" [title]=\"previousMonthLabel\">\n        <svg class=\"slds-button__icon\" nglIconName=\"left\"></svg><span class=\"slds-assistive-text\">{{ previousMonthLabel }}</span>\n      </button>\n    </div>\n    <h2 class=\"slds-align-middle\" [id]=\"uid + '_month'\" aria-live=\"assertive\" aria-atomic=\"true\">{{ monthLabel }}</h2>\n    <div class=\"slds-align-middle\">\n      <button class=\"slds-button slds-button_icon-container\" type=\"button\" (click)=\"moveMonth(1)\" [disabled]=\"nextDisabled()\" [title]=\"nextMonthLabel\">\n        <svg class=\"slds-button__icon\" nglIconName=\"right\"></svg><span class=\"slds-assistive-text\">{{ nextMonthLabel }}</span>\n      </button>\n    </div>\n  </div>\n  <ngl-date-year class=\"slds-shrink-none\" [year]=\"current.year\" [from]=\"minDate\" [to]=\"maxDate\" (yearChange)=\"moveYear($event)\"></ngl-date-year>\n</div>\n<table class=\"datepicker__month\" role=\"grid\" [attr.aria-labelledby]=\"uid + '_month'\" (keydown)=\"keyboardHandler($event)\">\n  <thead>\n    <tr nglWeekdays [firstDayOfWeek]=\"firstDayOfWeek\" [dayNamesShort]=\"dayNamesShort\" [dayNamesLong]=\"dayNamesLong\"></tr>\n  </thead>\n  <tbody *ngIf=\"current\" nglDatepickerMonth [year]=\"current.year\" [month]=\"current.month\" [day]=\"current.day\" [selected]=\"_date\" [firstDayOfWeek]=\"firstDayOfWeek\" [minDate]=\"minDate\" [maxDate]=\"maxDate\" [dateDisabled]=\"dateDisabled\" (selectDate)=\"select($event)\"></tbody>\n</table>\n<button class=\"slds-button slds-align_absolute-center slds-text-link\" *ngIf=\"showToday\" (click)=\"selectToday()\">{{ todayLabel }}</button>",
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    host: {
                        '[class.slds-datepicker]': 'true',
                    },
                    styles: [":host { display: block; }"]
                },] }
    ];
    NglDatepicker.ctorParameters = function () { return [
        { type: NglDatepickerInput, decorators: [{ type: core.Optional }, { type: core.Inject, args: [NglDatepickerInput,] }] },
        { type: NglDatepickerConfig, decorators: [{ type: core.Optional }, { type: core.Inject, args: [NGL_DATEPICKER_CONFIG,] }] },
        { type: String, decorators: [{ type: core.Inject, args: [core.LOCALE_ID,] }] },
        { type: core.ElementRef }
    ]; };
    NglDatepicker.propDecorators = {
        monthNames: [{ type: core.Input }],
        dayNamesShort: [{ type: core.Input }],
        dayNamesLong: [{ type: core.Input }],
        dateDisabled: [{ type: core.Input }],
        date: [{ type: core.Input }],
        dateChange: [{ type: core.Output }],
        showToday: [{ type: core.Input }],
        firstDayOfWeek: [{ type: core.Input }],
        relativeYearFrom: [{ type: core.Input }],
        relativeYearTo: [{ type: core.Input }],
        min: [{ type: core.Input }],
        max: [{ type: core.Input }],
        todayLabel: [{ type: core.Input }],
        previousMonthLabel: [{ type: core.Input }],
        nextMonthLabel: [{ type: core.Input }],
        monthView: [{ type: core.ViewChild, args: [NglDatepickerMonth,] }]
    };
    __decorate([
        InputBoolean()
    ], NglDatepicker.prototype, "showToday", void 0);
    __decorate([
        InputNumber()
    ], NglDatepicker.prototype, "firstDayOfWeek", void 0);

    var NglDatepickerInputDirective = /** @class */ (function () {
        function NglDatepickerInputDirective(element, renderer, datepickerInput) {
            this.element = element;
            this.renderer = renderer;
            this.datepickerInput = datepickerInput;
            renderer.addClass(element.nativeElement, 'slds-input');
            renderer.setAttribute(element.nativeElement, 'autocomplete', 'off');
            renderer.setAttribute(element.nativeElement, 'id', this.datepickerInput.uid);
            this.datepickerInput.inputEl = this;
        }
        NglDatepickerInputDirective.prototype.onClick = function () {
            this.datepickerInput.onTriggerClick('input');
        };
        NglDatepickerInputDirective.prototype.onKeydown = function (evt) {
            this.datepickerInput.onKeyboardInput(evt);
        };
        NglDatepickerInputDirective.prototype.onInput = function () {
            var _this = this;
            setTimeout(function () { return _this.datepickerInput.onInputChange(); }, 0);
        };
        NglDatepickerInputDirective.prototype.onBlur = function () {
            this.datepickerInput.onBlur();
        };
        NglDatepickerInputDirective.prototype.setPlaceholder = function (placeholder) {
            this.renderer.setAttribute(this.element.nativeElement, 'placeholder', placeholder);
        };
        NglDatepickerInputDirective.prototype.setDisabled = function (disabled) {
            this.renderer.setProperty(this.element.nativeElement, 'disabled', disabled);
        };
        NglDatepickerInputDirective.prototype.ngOnDestroy = function () {
            this.datepickerInput.inputEl = null;
        };
        return NglDatepickerInputDirective;
    }());
    NglDatepickerInputDirective.decorators = [
        { type: core.Directive, args: [{
                    selector: 'input[nglDatepickerInput]',
                    exportAs: 'nglDatepickerInput'
                },] }
    ];
    NglDatepickerInputDirective.ctorParameters = function () { return [
        { type: core.ElementRef },
        { type: core.Renderer2 },
        { type: NglDatepickerInput }
    ]; };
    NglDatepickerInputDirective.propDecorators = {
        onClick: [{ type: core.HostListener, args: ['click',] }],
        onKeydown: [{ type: core.HostListener, args: ['keydown', ['$event'],] }],
        onInput: [{ type: core.HostListener, args: ['input',] }],
        onBlur: [{ type: core.HostListener, args: ['blur',] }]
    };

    var NglDatepickerWeekdays = /** @class */ (function () {
        function NglDatepickerWeekdays() {
            this.weekdays = [];
        }
        NglDatepickerWeekdays.prototype.ngOnChanges = function (changes) {
            this.weekdays = [];
            for (var i = 0; i < 7; i++) {
                var offset = (this.firstDayOfWeek + i) % 7;
                this.weekdays.push({
                    id: "weekday-" + i,
                    label: this.dayNamesShort[offset],
                    title: this.dayNamesLong[offset],
                });
            }
        };
        return NglDatepickerWeekdays;
    }());
    NglDatepickerWeekdays.decorators = [
        { type: core.Component, args: [{
                    // tslint:disable-next-line:component-selector
                    selector: 'tr[nglWeekdays]',
                    template: "\n<th *ngFor=\"let day of weekdays\" [id]=\"day.id\" scope=\"col\"><abbr [title]=\"day.title\">{{day.label}}</abbr></th>",
                    changeDetection: core.ChangeDetectionStrategy.OnPush
                },] }
    ];
    NglDatepickerWeekdays.propDecorators = {
        dayNamesShort: [{ type: core.Input }],
        dayNamesLong: [{ type: core.Input }],
        firstDayOfWeek: [{ type: core.Input }]
    };

    var NglDatepickerYear = /** @class */ (function () {
        function NglDatepickerYear() {
            this.uid = uniqueId('datepicker_year');
            this.yearChange = new core.EventEmitter();
        }
        NglDatepickerYear.prototype.change = function ($event) {
            this.yearChange.emit($event);
        };
        NglDatepickerYear.prototype.ngOnChanges = function () {
            this.range = this.getRange();
        };
        NglDatepickerYear.prototype.getRange = function () {
            var minYear = Math.min(this.from.year, this.year);
            var maxYear = Math.max(this.to.year, this.year);
            var size = maxYear - minYear;
            return Array.apply(null, { length: size + 1 }).map(function (value, index) { return minYear + index; });
        };
        return NglDatepickerYear;
    }());
    NglDatepickerYear.decorators = [
        { type: core.Component, args: [{
                    selector: 'ngl-date-year',
                    template: "\n<label class=\"slds-assistive-text\" [attr.for]=\"uid\">Pick a Year</label>\n<div class=\"slds-select_container\">\n  <select class=\"slds-select\" [id]=\"uid\" [ngModel]=\"year\" (ngModelChange)=\"change($event)\">\n    <option *ngFor=\"let yr of range\" [value]=\"yr\">{{yr}}</option>\n  </select>\n</div>",
                    changeDetection: core.ChangeDetectionStrategy.OnPush
                },] }
    ];
    NglDatepickerYear.propDecorators = {
        from: [{ type: core.Input }],
        to: [{ type: core.Input }],
        year: [{ type: core.Input }],
        yearChange: [{ type: core.Output }]
    };
    __decorate([
        InputNumber()
    ], NglDatepickerYear.prototype, "year", void 0);

    var EXPORTS = [
        NglDatepicker, NglDatepickerInput, NglDatepickerInputDirective,
    ];
    var NglDatepickersModule = /** @class */ (function () {
        function NglDatepickersModule() {
        }
        return NglDatepickersModule;
    }());
    NglDatepickersModule.decorators = [
        { type: core.NgModule, args: [{
                    declarations: __spreadArray(__spreadArray([], __read(EXPORTS)), [NglDay, NglDatepickerWeekdays, NglDatepickerYear, NglDatepickerMonth]),
                    exports: EXPORTS,
                    imports: [
                        common.CommonModule,
                        forms.FormsModule,
                        NglIconsModule,
                        NglInternalOutletModule,
                        overlay.OverlayModule,
                        NglClickOutsideModule,
                        NglOverlayModule,
                        NglFormsModule
                    ],
                    providers: [NglDateAdapter],
                },] }
    ];

    var BaseDynamicIconComponent = /** @class */ (function () {
        function BaseDynamicIconComponent() {
        }
        return BaseDynamicIconComponent;
    }());
    BaseDynamicIconComponent.decorators = [
        { type: core.Directive }
    ];
    BaseDynamicIconComponent.propDecorators = {
        alternativeText: [{ type: core.Input }]
    };

    var NglDynamicIcon = /** @class */ (function (_super) {
        __extends(NglDynamicIcon, _super);
        function NglDynamicIcon() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return NglDynamicIcon;
    }(BaseDynamicIconComponent));
    NglDynamicIcon.decorators = [
        { type: core.Component, args: [{
                    selector: 'ngl-dynamic-icon',
                    template: "\n<ng-container [ngSwitch]=\"type\">\n  <ngl-dynamic-icon-ellie *ngSwitchCase=\"'ellie'\" [alternativeText]=\"alternativeText\"></ngl-dynamic-icon-ellie>\n  <ngl-dynamic-icon-eq *ngSwitchCase=\"'eq'\" [option]=\"option\" [alternativeText]=\"alternativeText\"></ngl-dynamic-icon-eq>\n  <ngl-dynamic-icon-score *ngSwitchCase=\"'score'\" [option]=\"option\" [alternativeText]=\"alternativeText\"></ngl-dynamic-icon-score>\n  <ngl-dynamic-icon-waffle *ngSwitchCase=\"'waffle'\" [alternativeText]=\"alternativeText\"></ngl-dynamic-icon-waffle>\n</ng-container>",
                    changeDetection: core.ChangeDetectionStrategy.OnPush
                },] }
    ];
    NglDynamicIcon.propDecorators = {
        type: [{ type: core.Input }],
        option: [{ type: core.Input }]
    };

    var NglDynamicIconEllie = /** @class */ (function (_super) {
        __extends(NglDynamicIconEllie, _super);
        function NglDynamicIconEllie() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return NglDynamicIconEllie;
    }(BaseDynamicIconComponent));
    NglDynamicIconEllie.decorators = [
        { type: core.Component, args: [{
                    selector: 'ngl-dynamic-icon-ellie',
                    template: "<span class=\"slds-icon-ellie slds-is-animated\">\n  <svg viewbox=\"0 0 280 14\" aria-hidden=\"true\">\n    <circle cx=\"7\" cy=\"7\" r=\"4\"></circle>\n    <circle cx=\"7\" cy=\"7\" r=\"3\"></circle>\n    <circle cx=\"21\" cy=\"7\" r=\"4\"></circle>\n    <circle cx=\"21\" cy=\"7\" r=\"3\"></circle>\n    <circle cx=\"35\" cy=\"7\" r=\"4\"></circle>\n    <circle cx=\"35\" cy=\"7\" r=\"3\"></circle>\n    <circle cx=\"49\" cy=\"7\" r=\"4\"></circle>\n    <circle cx=\"49\" cy=\"7\" r=\"3\"></circle>\n    <circle cx=\"63\" cy=\"7\" r=\"4\"></circle>\n    <circle cx=\"63\" cy=\"7\" r=\"3\"></circle>\n    <circle cx=\"77\" cy=\"7\" r=\"4\"></circle>\n    <circle cx=\"77\" cy=\"7\" r=\"3\"></circle>\n    <circle cx=\"91\" cy=\"7\" r=\"4\"></circle>\n    <circle cx=\"91\" cy=\"7\" r=\"3\"></circle>\n    <circle cx=\"105\" cy=\"7\" r=\"4\"></circle>\n    <circle cx=\"105\" cy=\"7\" r=\"3\"></circle>\n    <circle cx=\"119\" cy=\"7\" r=\"4\"></circle>\n    <circle cx=\"119\" cy=\"7\" r=\"3\"></circle>\n    <circle cx=\"133\" cy=\"7\" r=\"4\"></circle>\n    <circle cx=\"133\" cy=\"7\" r=\"3\"></circle>\n    <circle cx=\"147\" cy=\"7\" r=\"4\"></circle>\n    <circle cx=\"147\" cy=\"7\" r=\"3\"></circle>\n    <circle cx=\"161\" cy=\"7\" r=\"4\"></circle>\n    <circle cx=\"161\" cy=\"7\" r=\"3\"></circle>\n    <circle cx=\"175\" cy=\"7\" r=\"4\"></circle>\n    <circle cx=\"175\" cy=\"7\" r=\"3\"></circle>\n    <circle cx=\"189\" cy=\"7\" r=\"4\"></circle>\n    <circle cx=\"189\" cy=\"7\" r=\"3\"></circle>\n    <circle cx=\"203\" cy=\"7\" r=\"4\"></circle>\n    <circle cx=\"203\" cy=\"7\" r=\"3\"></circle>\n    <circle cx=\"217\" cy=\"7\" r=\"4\"></circle>\n    <circle cx=\"217\" cy=\"7\" r=\"3\"></circle>\n    <circle cx=\"231\" cy=\"7\" r=\"4\"></circle>\n    <circle cx=\"231\" cy=\"7\" r=\"3\"></circle>\n    <circle cx=\"245\" cy=\"7\" r=\"4\"></circle>\n    <circle cx=\"245\" cy=\"7\" r=\"3\"></circle>\n    <circle cx=\"259\" cy=\"7\" r=\"4\"></circle>\n    <circle cx=\"259\" cy=\"7\" r=\"3\"></circle>\n    <circle cx=\"273\" cy=\"7\" r=\"4\"></circle>\n    <circle cx=\"273\" cy=\"7\" r=\"3\"></circle>\n  </svg><span class=\"slds-assistive-text\" *ngIf=\"alternativeText\">{{alternativeText}}</span></span>",
                    changeDetection: core.ChangeDetectionStrategy.OnPush
                },] }
    ];

    var NglDynamicIconEq = /** @class */ (function (_super) {
        __extends(NglDynamicIconEq, _super);
        function NglDynamicIconEq() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(NglDynamicIconEq.prototype, "option", {
            get: function () {
                return this._option;
            },
            set: function (option) {
                this._option = option || 'play';
            },
            enumerable: false,
            configurable: true
        });
        NglDynamicIconEq.prototype.isAnimated = function () {
            return this.option !== 'stop';
        };
        return NglDynamicIconEq;
    }(BaseDynamicIconComponent));
    NglDynamicIconEq.decorators = [
        { type: core.Component, args: [{
                    selector: 'ngl-dynamic-icon-eq',
                    template: "\n<div class=\"slds-icon-eq\" [class.slds-is-animated]=\"isAnimated()\">\n  <div class=\"slds-icon-eq__bar\"></div>\n  <div class=\"slds-icon-eq__bar\"></div>\n  <div class=\"slds-icon-eq__bar\"></div><span class=\"slds-assistive-text\" *ngIf=\"alternativeText\">{{alternativeText}}</span>\n</div>",
                    changeDetection: core.ChangeDetectionStrategy.OnPush
                },] }
    ];
    NglDynamicIconEq.propDecorators = {
        option: [{ type: core.Input }]
    };

    var NglDynamicIconScore = /** @class */ (function (_super) {
        __extends(NglDynamicIconScore, _super);
        function NglDynamicIconScore() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(NglDynamicIconScore.prototype, "option", {
            get: function () {
                return this._option;
            },
            set: function (option) {
                this._option = option || 'positive';
            },
            enumerable: false,
            configurable: true
        });
        return NglDynamicIconScore;
    }(BaseDynamicIconComponent));
    NglDynamicIconScore.decorators = [
        { type: core.Component, args: [{
                    selector: 'ngl-dynamic-icon-score',
                    template: "<span class=\"slds-icon-score\" [attr.data-slds-state]=\"option\">\n  <svg class=\"slds-icon-score__positive\" viewBox=\"0 0 5 5\" aria-hidden=\"true\">\n    <circle cx=\"50%\" cy=\"50%\" r=\"1.875\"></circle>\n  </svg>\n  <svg class=\"slds-icon-score__negative\" viewBox=\"0 0 5 5\" aria-hidden=\"true\">\n    <circle cx=\"50%\" cy=\"50%\" r=\"1.875\"></circle>\n  </svg><span class=\"slds-assistive-text\" *ngIf=\"alternativeText\">{{alternativeText}}</span></span>",
                    changeDetection: core.ChangeDetectionStrategy.OnPush
                },] }
    ];
    NglDynamicIconScore.propDecorators = {
        option: [{ type: core.Input }]
    };

    var NglDynamicIconWaffle = /** @class */ (function (_super) {
        __extends(NglDynamicIconWaffle, _super);
        function NglDynamicIconWaffle() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return NglDynamicIconWaffle;
    }(BaseDynamicIconComponent));
    NglDynamicIconWaffle.decorators = [
        { type: core.Component, args: [{
                    selector: 'ngl-dynamic-icon-waffle',
                    template: "\n<button class=\"slds-button slds-icon-waffle_container\" type=\"button\"><span class=\"slds-icon-waffle\"><span class=\"slds-r1\"></span><span class=\"slds-r2\"></span><span class=\"slds-r3\"></span><span class=\"slds-r4\"></span><span class=\"slds-r5\"></span><span class=\"slds-r6\"></span><span class=\"slds-r7\"></span><span class=\"slds-r8\"></span><span class=\"slds-r9\"></span></span><span class=\"slds-assistive-text\" *ngIf=\"alternativeText\">{{alternativeText}}</span></button>",
                    changeDetection: core.ChangeDetectionStrategy.OnPush
                },] }
    ];

    var NGL_DYNAMIC_ICON_DIRECTIVES = [
        NglDynamicIcon,
        NglDynamicIconEllie,
        NglDynamicIconEq,
        NglDynamicIconScore,
        NglDynamicIconWaffle,
    ];
    var NglDynamicIconsModule = /** @class */ (function () {
        function NglDynamicIconsModule() {
        }
        return NglDynamicIconsModule;
    }());
    NglDynamicIconsModule.decorators = [
        { type: core.NgModule, args: [{
                    declarations: NGL_DYNAMIC_ICON_DIRECTIVES,
                    exports: NGL_DYNAMIC_ICON_DIRECTIVES,
                    imports: [common.CommonModule],
                },] }
    ];

    var NglFile = /** @class */ (function () {
        function NglFile(element, renderer) {
            this.element = element;
            this.renderer = renderer;
            this.renderer.addClass(this.element.nativeElement, 'slds-file');
            this.renderer.addClass(this.element.nativeElement, 'slds-file_card');
        }
        return NglFile;
    }());
    NglFile.decorators = [
        { type: core.Component, args: [{
                    selector: 'ngl-file',
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    template: "\n<figure>\n  <ng-content></ng-content>\n  <figcaption class=\"slds-file__title slds-file__title_card\" *ngIf=\"text\">\n    <div class=\"slds-media slds-media_small slds-media_center\">\n      <div class=\"slds-media__figure slds-line-height_reset\" *ngIf=\"iconName\">\n        <ngl-icon [iconName]=\"iconName\"></ngl-icon>\n      </div>\n      <div class=\"slds-media__body\"><span class=\"slds-file__text slds-truncate\" [title]=\"text\" [nglInternalOutlet]=\"text\"></span></div>\n    </div>\n  </figcaption>\n</figure>"
                },] }
    ];
    NglFile.ctorParameters = function () { return [
        { type: core.ElementRef },
        { type: core.Renderer2 }
    ]; };
    NglFile.propDecorators = {
        text: [{ type: core.HostBinding, args: ['class.slds-has-title',] }, { type: core.Input }],
        iconName: [{ type: core.Input }]
    };

    var NglFileCrop = /** @class */ (function () {
        function NglFileCrop(element, renderer) {
            this.element = element;
            this.renderer = renderer;
            this.cropClass = 'slds-file__crop';
            // this.renderer.addClass(this.element.nativeElement, this.cropClass);
        }
        Object.defineProperty(NglFileCrop.prototype, "nglFileCrop", {
            set: function (ratio) {
                var nativeElement = this.element.nativeElement;
                if (this.currentRatio) {
                    this.renderer.removeClass(nativeElement, "" + this.cropClass);
                    this.renderer.removeClass(nativeElement, this.cropClass + "_" + this.currentRatio);
                }
                if (ratio) {
                    this.renderer.addClass(nativeElement, "" + this.cropClass);
                    this.renderer.addClass(nativeElement, this.cropClass + "_" + ratio);
                }
                this.currentRatio = ratio;
            },
            enumerable: false,
            configurable: true
        });
        return NglFileCrop;
    }());
    NglFileCrop.decorators = [
        { type: core.Directive, args: [{
                    selector: '[nglFileCrop]',
                },] }
    ];
    NglFileCrop.ctorParameters = function () { return [
        { type: core.ElementRef },
        { type: core.Renderer2 }
    ]; };
    NglFileCrop.propDecorators = {
        nglFileCrop: [{ type: core.Input }]
    };

    var NglFilesModule = /** @class */ (function () {
        function NglFilesModule() {
        }
        return NglFilesModule;
    }());
    NglFilesModule.decorators = [
        { type: core.NgModule, args: [{
                    declarations: [NglFile, NglFileCrop],
                    exports: [NglFile, NglFileCrop],
                    imports: [common.CommonModule, NglIconsModule, NglInternalOutletModule],
                },] }
    ];

    var FILE_EXT_REG = /(^[.]\w*)$/m;
    function isFileTypeAccepted(accept, file) {
        if (typeof accept === 'string') {
            accept = accept.split(',');
        }
        return accept.some(function (acc) {
            if (FILE_EXT_REG.test(acc)) {
                return acc === "." + file.name.split('.').pop();
            }
            else {
                return (new RegExp(acc.replace('*', '.\*'))).test(file.type);
            }
        });
    }

    var NglFileUpload = /** @class */ (function () {
        function NglFileUpload(element, renderer) {
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
            this.onTouched = function () { };
            this.validatorChange = function () { };
            this.renderer.addClass(this.element.nativeElement, 'slds-form-element');
        }
        NglFileUpload.prototype.writeValue = function (value) {
            this.files = value;
        };
        NglFileUpload.prototype.registerOnChange = function (fn) { this.onChange = fn; };
        NglFileUpload.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
        NglFileUpload.prototype.registerOnValidatorChange = function (fn) { this.validatorChange = fn; };
        NglFileUpload.prototype.setDisabledState = function (isDisabled) { this.disabled = isDisabled; };
        NglFileUpload.prototype.validate = function (c) {
            var files = c.value;
            if (!files || files.length === 0) {
                return null;
            }
            if (this.maxFiles > 0 && files.length > this.maxFiles) {
                return { nglFileUpload: { maxFiles: files.length } };
            }
            for (var i = 0, n = files.length; i < n; i++) {
                var file = files[i];
                if (this.accept && !isFileTypeAccepted(this.accept, file)) {
                    return { nglFileUpload: { invalidType: file } };
                }
                if (this.maxFilesize && file.size > this.maxFilesize) {
                    return { nglFileUpload: { maxFilesize: file } };
                }
            }
            return null;
        };
        NglFileUpload.prototype.ngOnChanges = function (changes) {
            if (changes['maxFiles'] || changes['maxFilesize'] || changes['accept']) {
                this.validatorChange();
            }
        };
        NglFileUpload.prototype.onDropZone = function (evt) {
            trapEvent(evt);
            if (this.disabled) {
                return;
            }
            this.isDragOver = evt.type === 'dragover';
            if (evt.type === 'drop' && evt.dataTransfer) {
                this.select(evt.dataTransfer.files);
            }
        };
        NglFileUpload.prototype.onInputChange = function (files) {
            this.select(files);
        };
        NglFileUpload.prototype.select = function (files) {
            this.onChange(Array.from(files));
        };
        return NglFileUpload;
    }());
    NglFileUpload.decorators = [
        { type: core.Component, args: [{
                    selector: 'ngl-file-upload',
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    template: "<span class=\"slds-form-element__label\" *ngIf=\"label\" [id]=\"uid + '-primary-label'\" [nglInternalOutlet]=\"label\"></span>\n<div class=\"slds-form-element__control\">\n  <div class=\"slds-file-selector slds-file-selector_files\">\n    <div class=\"slds-file-selector__dropzone\" [class.slds-has-drag-over]=\"isDragOver\" (dragover)=\"onDropZone($event)\" (dragleave)=\"onDropZone($event)\" (drop)=\"onDropZone($event)\">\n      <input class=\"slds-file-selector__input slds-assistive-text\" type=\"file\" [id]=\"uid\" [attr.accept]=\"accept\" [disabled]=\"disabled\" [multiple]=\"maxFiles !== 1\" [attr.aria-describedby]=\"error ? uid + '-error' : null\" [attr.aria-labelledby]=\"uid + '-primary-label ' + uid + '-secondary-label'\" (change)=\"onInputChange($event.target.files)\">\n      <label class=\"slds-file-selector__body\" [attr.for]=\"uid\" [id]=\"uid + '-secondary-label'\"><span class=\"slds-file-selector__button slds-button slds-button_neutral\">\n          <svg class=\"slds-button__icon slds-button__icon_left\" nglIconName=\"utility:upload\"></svg>{{ uploadButtonLabel }}</span><span class=\"slds-file-selector__text slds-medium-show\">{{ dropZoneLabel }}</span></label>\n    </div>\n  </div>\n</div>\n<div class=\"slds-form-element__help\" *ngIf=\"error\" [id]=\"uid + '-error'\" [nglInternalOutlet]=\"error\"></div>",
                    providers: [
                        {
                            provide: forms.NG_VALUE_ACCESSOR,
                            useExisting: NglFileUpload,
                            multi: true
                        },
                        {
                            provide: forms.NG_VALIDATORS,
                            useExisting: NglFileUpload,
                            multi: true
                        }
                    ]
                },] }
    ];
    NglFileUpload.ctorParameters = function () { return [
        { type: core.ElementRef },
        { type: core.Renderer2 }
    ]; };
    NglFileUpload.propDecorators = {
        label: [{ type: core.Input }],
        accept: [{ type: core.Input }],
        disabled: [{ type: core.Input }],
        maxFiles: [{ type: core.Input }],
        maxFilesize: [{ type: core.Input }],
        error: [{ type: core.HostBinding, args: ['class.slds-has-error',] }, { type: core.Input }],
        uploadButtonLabel: [{ type: core.Input }],
        dropZoneLabel: [{ type: core.Input }]
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

    var NglFileUploadModule = /** @class */ (function () {
        function NglFileUploadModule() {
        }
        return NglFileUploadModule;
    }());
    NglFileUploadModule.decorators = [
        { type: core.NgModule, args: [{
                    declarations: [NglFileUpload],
                    exports: [NglFileUpload],
                    imports: [common.CommonModule, NglIconsModule, NglInternalOutletModule],
                },] }
    ];

    var NglInputElement = /** @class */ (function () {
        function NglInputElement(el, renderer) {
            this.el = el;
            this.renderer = renderer;
            this.ɵRequiredSubject = new rxjs.BehaviorSubject(false);
            if (!this.el.nativeElement.id) {
                this.renderer.setAttribute(this.el.nativeElement, 'id', uniqueId('input'));
            }
        }
        Object.defineProperty(NglInputElement.prototype, "required", {
            set: function (required) {
                this.ɵRequiredSubject.next(toBoolean(required));
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NglInputElement.prototype, "id", {
            get: function () {
                return this.el.nativeElement.id;
            },
            enumerable: false,
            configurable: true
        });
        return NglInputElement;
    }());
    NglInputElement.decorators = [
        { type: core.Directive, args: [{
                    selector: 'input[ngl]:not([type=checkbox]):not([type=radio])',
                    host: {
                        '[class.slds-input]': 'true',
                    }
                },] }
    ];
    NglInputElement.ctorParameters = function () { return [
        { type: core.ElementRef },
        { type: core.Renderer2 }
    ]; };
    NglInputElement.propDecorators = {
        describedBy: [{ type: core.HostBinding, args: ['attr.aria-describedby',] }],
        required: [{ type: core.Input }]
    };

    var NglInput = /** @class */ (function () {
        function NglInput(cd) {
            this.cd = cd;
        }
        Object.defineProperty(NglInput.prototype, "hasError", {
            get: function () {
                return toBoolean(this.error);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NglInput.prototype, "errorId", {
            get: function () {
                return "error_" + this._uid;
            },
            enumerable: false,
            configurable: true
        });
        NglInput.prototype.ngOnChanges = function () {
            this.input.describedBy = this.error ? this.errorId : null;
        };
        NglInput.prototype.ngAfterContentInit = function () {
            var _this = this;
            if (!this.input) {
                throw Error("[ng-lightning] Couldn't find an <input> with [ngl] attribute inside NglInput");
            }
            this.ɵRequiredSubscription = this.input.ɵRequiredSubject.subscribe(function (required) {
                _this.required = required;
                _this.cd.detectChanges();
            });
            this._uid = this.input.id;
            this.cd.detectChanges();
        };
        NglInput.prototype.ngOnDestroy = function () {
            if (this.ɵRequiredSubscription) {
                this.ɵRequiredSubscription.unsubscribe();
                this.ɵRequiredSubscription = null;
            }
        };
        return NglInput;
    }());
    NglInput.decorators = [
        { type: core.Component, args: [{
                    selector: 'ngl-input,[ngl-input]',
                    template: "\n<label [nglFormLabel]=\"label\" [attr.for]=\"_uid\" [required]=\"required\"></label>\n<ngl-form-help *ngIf=\"fieldLevelHelpTooltip\" [content]=\"fieldLevelHelpTooltip\"></ngl-form-help>\n<div class=\"slds-form-element__control\">\n  <ng-content></ng-content>\n</div>\n<div class=\"slds-form-element__help\" *ngIf=\"hasError\" [id]=\"errorId\" [nglInternalOutlet]=\"error\"></div>",
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    host: {
                        '[class.slds-form-element]': 'true',
                    }
                },] }
    ];
    NglInput.ctorParameters = function () { return [
        { type: core.ChangeDetectorRef }
    ]; };
    NglInput.propDecorators = {
        input: [{ type: core.ContentChild, args: [NglInputElement, { static: true },] }],
        label: [{ type: core.Input }],
        error: [{ type: core.Input }],
        stacked: [{ type: core.Input }],
        fieldLevelHelpTooltip: [{ type: core.Input }],
        hasError: [{ type: core.HostBinding, args: ['class.slds-has-error',] }]
    };
    __decorate([
        InputBoolean()
    ], NglInput.prototype, "stacked", void 0);

    var DIRECTIVES$4 = [
        NglInput,
        NglInputElement,
    ];
    var NglInputModule = /** @class */ (function () {
        function NglInputModule() {
        }
        return NglInputModule;
    }());
    NglInputModule.decorators = [
        { type: core.NgModule, args: [{
                    declarations: DIRECTIVES$4,
                    exports: DIRECTIVES$4,
                    imports: [common.CommonModule, NglFormsModule, NglInternalOutletModule],
                },] }
    ];

    var NglDropdownItem = /** @class */ (function () {
        function NglDropdownItem(element) {
            this.element = element;
            this.isFocused = false;
        }
        NglDropdownItem.prototype.onFocus = function () {
            this.isFocused = true;
        };
        NglDropdownItem.prototype.onBlur = function () {
            this.isFocused = false;
        };
        NglDropdownItem.prototype.hasFocus = function () {
            return this.isFocused;
        };
        NglDropdownItem.prototype.focus = function () {
            this.element.nativeElement.focus();
        };
        return NglDropdownItem;
    }());
    NglDropdownItem.decorators = [
        { type: core.Directive, args: [{
                    selector: '[nglDropdownItem]',
                    host: {
                        'tabindex': '0',
                    },
                },] }
    ];
    NglDropdownItem.ctorParameters = function () { return [
        { type: core.ElementRef }
    ]; };
    NglDropdownItem.propDecorators = {
        onFocus: [{ type: core.HostListener, args: ['focus',] }],
        onBlur: [{ type: core.HostListener, args: ['blur',] }]
    };

    var openEventEmitter = new core.EventEmitter();
    var NglDropdown = /** @class */ (function () {
        function NglDropdown(element, renderer) {
            this.element = element;
            this.renderer = renderer;
            this.handlePageEvents = true;
            this.isOpenChange = new core.EventEmitter();
            this.triggerFocusEventEmitter = new core.EventEmitter();
            this._isOpen = false;
            this.globalClickEventUnsubscriber = null;
            this.clickEventUnsubscriber = null;
        }
        Object.defineProperty(NglDropdown.prototype, "isOpen", {
            get: function () {
                return this._isOpen;
            },
            set: function (isOpen) {
                var _this = this;
                this._isOpen = toBoolean(isOpen);
                if (this.isOpen) {
                    this.clearGlobalClickTimeout();
                    this.globalClickTimeout = setTimeout(function () {
                        if (_this.handlePageEvents) {
                            _this._subscribeToClickEvents();
                        }
                    });
                    this.renderer.addClass(this.element.nativeElement, 'slds-is-open');
                }
                else {
                    this._unsubscribeFromClickEvents();
                    this.renderer.removeClass(this.element.nativeElement, 'slds-is-open');
                }
                this.renderer.setAttribute(this.element.nativeElement, 'aria-expanded', "" + this.isOpen);
            },
            enumerable: false,
            configurable: true
        });
        NglDropdown.prototype.onKeydownClose = function (eventName) {
            this.toggle(false);
            if (eventName === 'esc') {
                this.triggerFocusEventEmitter.emit(null);
            }
        };
        NglDropdown.prototype.onKeydownFocusNext = function ($event, direction) {
            $event.preventDefault();
            this.focusItem(direction);
        };
        NglDropdown.prototype.ngOnInit = function () {
            this.openEventSubscription = openEventEmitter.subscribe(this.handleDropdownOpenEvent.bind(this));
        };
        NglDropdown.prototype.ngOnDestroy = function () {
            this.clearGlobalClickTimeout();
            if (this.openEventSubscription) {
                this.openEventSubscription.unsubscribe();
            }
            this._unsubscribeFromClickEvents();
        };
        NglDropdown.prototype.toggle = function (toggle, focus) {
            if (toggle === void 0) { toggle = !this.isOpen; }
            if (focus === void 0) { focus = false; }
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
        };
        NglDropdown.prototype.handleGlobalClickEvent = function ($event) {
            if (!this.handlePageEvents || $event.$nglStop) {
                return;
            }
            this.toggle(false);
        };
        NglDropdown.prototype._subscribeToClickEvents = function () {
            this._unsubscribeFromClickEvents();
            // Prevent document listener to close it, since click happened inside
            this.clickEventUnsubscriber = this.renderer.listen(this.element.nativeElement, 'click', function ($event) { return $event.$nglStop = true; });
            this.globalClickEventUnsubscriber = this.renderer.listen('document', 'click', this.handleGlobalClickEvent.bind(this));
        };
        NglDropdown.prototype._unsubscribeFromClickEvents = function () {
            if (this.clickEventUnsubscriber) {
                this.clickEventUnsubscriber();
                this.clickEventUnsubscriber = null;
            }
            if (this.globalClickEventUnsubscriber) {
                this.globalClickEventUnsubscriber();
                this.globalClickEventUnsubscriber = null;
            }
        };
        NglDropdown.prototype.clearGlobalClickTimeout = function () {
            clearTimeout(this.globalClickTimeout);
        };
        NglDropdown.prototype.focusItem = function (direction) {
            if (!this.items.length) {
                return;
            }
            var items = this.items.toArray();
            var activeElementIndex = items.findIndex(function (item) { return item.hasFocus(); }) + (direction === 'next' ? 1 : -1);
            if (activeElementIndex === items.length || activeElementIndex < 0) {
                return;
            }
            items[activeElementIndex].focus();
        };
        NglDropdown.prototype.handleDropdownOpenEvent = function (dropdown) {
            if (dropdown !== this) {
                this.toggle(false);
            }
        };
        return NglDropdown;
    }());
    NglDropdown.decorators = [
        { type: core.Directive, args: [{
                    selector: '[nglDropdown]',
                    host: {
                        '[class.slds-dropdown-trigger]': 'true',
                        '[class.slds-dropdown-trigger_click]': 'true',
                    },
                },] }
    ];
    NglDropdown.ctorParameters = function () { return [
        { type: core.ElementRef },
        { type: core.Renderer2 }
    ]; };
    NglDropdown.propDecorators = {
        isOpen: [{ type: core.Input, args: ['open',] }],
        handlePageEvents: [{ type: core.Input }],
        items: [{ type: core.ContentChildren, args: [NglDropdownItem, { descendants: true },] }],
        isOpenChange: [{ type: core.Output, args: ['openChange',] }],
        onKeydownClose: [{ type: core.HostListener, args: ['keydown.esc', ['"esc"'],] }, { type: core.HostListener, args: ['keydown.tab', ['"tab"'],] }],
        onKeydownFocusNext: [{ type: core.HostListener, args: ['keydown.arrowdown', ['$event', '"next"'],] }, { type: core.HostListener, args: ['keydown.arrowup', ['$event', '"previous"'],] }]
    };
    __decorate([
        InputBoolean()
    ], NglDropdown.prototype, "handlePageEvents", void 0);

    var NglDropdownTrigger = /** @class */ (function () {
        function NglDropdownTrigger(element, dropdown) {
            this.element = element;
            this.dropdown = dropdown;
            this.parentFocusEventSubscription = this.dropdown.triggerFocusEventEmitter.subscribe(this.focus.bind(this));
        }
        NglDropdownTrigger.prototype.ngOnDestroy = function () {
            this.parentFocusEventSubscription.unsubscribe();
        };
        NglDropdownTrigger.prototype.toggleOpen = function () {
            this.dropdown.toggle();
        };
        NglDropdownTrigger.prototype.onKeyDownOpen = function ($event) {
            $event.preventDefault();
            this.dropdown.toggle(true);
        };
        NglDropdownTrigger.prototype.focus = function () {
            this.element.nativeElement.focus();
        };
        return NglDropdownTrigger;
    }());
    NglDropdownTrigger.decorators = [
        { type: core.Directive, args: [{
                    selector: '[nglDropdownTrigger]',
                    host: {
                        'aria-haspopup': 'true',
                    },
                },] }
    ];
    NglDropdownTrigger.ctorParameters = function () { return [
        { type: core.ElementRef },
        { type: NglDropdown }
    ]; };
    NglDropdownTrigger.propDecorators = {
        toggleOpen: [{ type: core.HostListener, args: ['click',] }],
        onKeyDownOpen: [{ type: core.HostListener, args: ['keydown.arrowdown', ['$event'],] }]
    };

    var NGL_DROPDOWN_DIRECTIVES = [
        NglDropdown,
        NglDropdownTrigger,
        NglDropdownItem,
    ];
    var NglMenusModule = /** @class */ (function () {
        function NglMenusModule() {
        }
        return NglMenusModule;
    }());
    NglMenusModule.decorators = [
        { type: core.NgModule, args: [{
                    declarations: [NGL_DROPDOWN_DIRECTIVES],
                    exports: [NGL_DROPDOWN_DIRECTIVES],
                    imports: [common.CommonModule],
                },] }
    ];

    var NglModalHeaderTemplate = /** @class */ (function () {
        function NglModalHeaderTemplate(templateRef) {
            this.templateRef = templateRef;
        }
        return NglModalHeaderTemplate;
    }());
    NglModalHeaderTemplate.decorators = [
        { type: core.Directive, args: [{ selector: '[nglModalHeader]' },] }
    ];
    NglModalHeaderTemplate.ctorParameters = function () { return [
        { type: core.TemplateRef }
    ]; };
    var NglModalTaglineTemplate = /** @class */ (function () {
        function NglModalTaglineTemplate(templateRef) {
            this.templateRef = templateRef;
        }
        return NglModalTaglineTemplate;
    }());
    NglModalTaglineTemplate.decorators = [
        { type: core.Directive, args: [{ selector: '[nglModalTagline]' },] }
    ];
    NglModalTaglineTemplate.ctorParameters = function () { return [
        { type: core.TemplateRef }
    ]; };
    var NglModalFooterTemplate = /** @class */ (function () {
        function NglModalFooterTemplate(templateRef) {
            this.templateRef = templateRef;
        }
        return NglModalFooterTemplate;
    }());
    NglModalFooterTemplate.decorators = [
        { type: core.Directive, args: [{ selector: '[nglModalFooter]' },] }
    ];
    NglModalFooterTemplate.ctorParameters = function () { return [
        { type: core.TemplateRef }
    ]; };

    var NglModal = /** @class */ (function () {
        function NglModal(focusTrapFactory, document, overlay, element) {
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
            this.openChange = new core.EventEmitter();
            this.dismissOnClickOutside = true;
            /** Element that was focused before the dialog was opened. Save this to restore upon close. */
            this.elementFocusedBeforeDialogWasOpened = null;
            this.scrollStrategy = this.overlay.scrollStrategies.block();
        }
        Object.defineProperty(NglModal.prototype, "hasHeader", {
            get: function () {
                return this.header || this.headerTpl;
            },
            enumerable: false,
            configurable: true
        });
        NglModal.prototype.close = function (evt) {
            if (evt) {
                evt.stopPropagation();
            }
            this.openChange.emit(false);
        };
        NglModal.prototype.ngOnChanges = function (changes) {
            if ('open' in changes) {
                this.handleOpen();
            }
        };
        NglModal.prototype.ngAfterContentInit = function () {
            this.handleOpen();
        };
        NglModal.prototype.clickOutside = function (evt) {
            if (!this.dismissOnClickOutside) {
                return;
            }
            var classList = evt.target.classList;
            if (classList.contains('slds-modal') || classList.contains('slds-modal__container')) {
                this.close();
            }
        };
        NglModal.prototype.ngOnDestroy = function () {
            this.handleOpen(false);
            this.scrollStrategy = null;
        };
        NglModal.prototype.modalClass = function () {
            var _a;
            return _a = {},
                _a["slds-modal_" + this.size] = !!this.size,
                _a["slds-fade-in-open"] = this.open,
                _a["slds-modal_prompt"] = !!this.prompt,
                _a;
        };
        NglModal.prototype.modalHeaderClass = function () {
            var _a;
            return _a = {},
                _a["slds-modal__header_empty"] = !this.hasHeader,
                _a["slds-theme_" + this.prompt] = !!this.prompt,
                _a;
        };
        NglModal.prototype.modalFooterClass = function () {
            var _a;
            return _a = {},
                _a["slds-modal__footer_directional"] = !!this.directional,
                _a["slds-theme_default"] = !!this.prompt,
                _a;
        };
        NglModal.prototype.handleOpen = function (open) {
            if (open === void 0) { open = this.open; }
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
        };
        return NglModal;
    }());
    NglModal.decorators = [
        { type: core.Component, args: [{
                    selector: 'ngl-modal',
                    template: "\n<section class=\"slds-modal\" [ngClass]=\"modalClass()\" [attr.aria-hidden]=\"!open\" [attr.aria-labelledby]=\"headingId\" [attr.aria-describedby]=\"contentId\" aria-modal=\"true\" [attr.role]=\"prompt ? 'alertdialog' : 'dialog'\" tabindex=\"-1\">\n  <div class=\"slds-modal__container\">\n    <header class=\"slds-modal__header\" [ngClass]=\"modalHeaderClass()\">\n      <button class=\"slds-button slds-button_icon slds-button_icon-inverse slds-modal__close\" *ngIf=\"showClose\" type=\"button\" (click)=\"close()\">\n        <svg class=\"slds-button__icon slds-button__icon_large\" nglIconName=\"utility:close\"></svg><span class=\"slds-assistive-text\" *ngIf=\"closeButtonAssistiveText\">{{closeButtonAssistiveText}}</span>\n      </button>\n      <ng-template #localHeader>\n        <h2 class=\"slds-text-heading_medium slds-hyphenate\" *ngIf=\"header\" [id]=\"headingId\">{{header}}</h2>\n      </ng-template>\n      <ng-template *ngIf=\"headerTpl; else localHeader\" [ngTemplateOutlet]=\"headerTpl.templateRef\" [ngTemplateOutletContext]=\"{id: headingId}\"></ng-template>\n      <p class=\"slds-m-top_x-small\" *ngIf=\"hasHeader &amp;&amp; taglineTpl\">\n        <ng-template [ngTemplateOutlet]=\"taglineTpl.templateRef\"></ng-template>\n      </p>\n    </header>\n    <div class=\"slds-modal__content\" [id]=\"contentId\" cdkScrollable>\n      <ng-content></ng-content>\n    </div>\n    <footer class=\"slds-modal__footer\" *ngIf=\"footer\" [ngClass]=\"modalFooterClass()\">\n      <ng-template [ngTemplateOutlet]=\"footer.templateRef\"></ng-template>\n    </footer>\n  </div>\n</section>\n<div class=\"slds-backdrop\" [class.slds-backdrop_open]=\"open\"></div>",
                    changeDetection: core.ChangeDetectionStrategy.OnPush
                },] }
    ];
    NglModal.ctorParameters = function () { return [
        { type: a11y.FocusTrapFactory },
        { type: undefined, decorators: [{ type: core.Inject, args: [common.DOCUMENT,] }] },
        { type: overlay.Overlay },
        { type: core.ElementRef }
    ]; };
    NglModal.propDecorators = {
        header: [{ type: core.Input }],
        size: [{ type: core.Input }],
        directional: [{ type: core.Input }],
        open: [{ type: core.Input }],
        closeButtonAssistiveText: [{ type: core.Input }],
        openChange: [{ type: core.Output }],
        headerTpl: [{ type: core.ContentChild, args: [NglModalHeaderTemplate,] }],
        taglineTpl: [{ type: core.ContentChild, args: [NglModalTaglineTemplate,] }],
        footer: [{ type: core.ContentChild, args: [NglModalFooterTemplate,] }],
        dismissOnClickOutside: [{ type: core.Input }],
        prompt: [{ type: core.Input }],
        close: [{ type: core.HostListener, args: ['keydown.esc', ['$event'],] }],
        clickOutside: [{ type: core.HostListener, args: ['click', ['$event'],] }]
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

    var NGL_MODAL_DIRECTIVES = [
        NglModal,
        NglModalFooterTemplate,
        NglModalHeaderTemplate,
        NglModalTaglineTemplate,
    ];
    var NglModalsModule = /** @class */ (function () {
        function NglModalsModule() {
        }
        return NglModalsModule;
    }());
    NglModalsModule.decorators = [
        { type: core.NgModule, args: [{
                    declarations: [NGL_MODAL_DIRECTIVES],
                    exports: [NGL_MODAL_DIRECTIVES],
                    imports: [common.CommonModule, a11y.A11yModule, overlay.OverlayModule, NglIconsModule],
                },] }
    ];

    var NglToast = /** @class */ (function (_super) {
        __extends(NglToast, _super);
        function NglToast(element, renderer, cd) {
            return _super.call(this, element, renderer, cd, 'toast') || this;
        }
        return NglToast;
    }(NglCommonNotify));
    NglToast.decorators = [
        { type: core.Component, args: [{
                    selector: 'ngl-toast',
                    template: "<span class=\"slds-assistive-text\">{{assistiveText || variant}}</span>\n<ngl-icon class=\"slds-m-right_small slds-no-flex slds-align-top\" *ngIf=\"iconName\" [iconName]=\"iconName\" size=\"small\" variant=\"\"></ngl-icon>\n<div class=\"slds-notify__content\">\n  <ng-content></ng-content>\n</div>\n<button class=\"slds-button slds-button_icon slds-notify__close slds-button_icon-inverse\" *ngIf=\"dismissible\" type=\"button\" (click)=\"close('button', $event)\">\n  <svg class=\"slds-button__icon slds-button__icon_large\" nglIconName=\"utility:close\"></svg><span class=\"slds-assistive-text\" *ngIf=\"closeButtonAssistiveText\">{{closeButtonAssistiveText}}</span>\n</button>",
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    exportAs: 'nglToast'
                },] }
    ];
    NglToast.ctorParameters = function () { return [
        { type: core.ElementRef },
        { type: core.Renderer2 },
        { type: core.ChangeDetectorRef }
    ]; };

    var NglToastClose = /** @class */ (function (_super) {
        __extends(NglToastClose, _super);
        function NglToastClose(toast) {
            return _super.call(this, toast) || this;
        }
        return NglToastClose;
    }(NglCommonNotifyClose));
    NglToastClose.decorators = [
        { type: core.Directive, args: [{
                    selector: 'ngl-toast[close],ngl-toast[nglClose]',
                },] }
    ];
    NglToastClose.ctorParameters = function () { return [
        { type: NglToast }
    ]; };

    var NGL_TOAST_DIRECTIVES = [
        NglToast,
        NglToastClose,
    ];
    var NglToastModule = /** @class */ (function () {
        function NglToastModule() {
        }
        return NglToastModule;
    }());
    NglToastModule.decorators = [
        { type: core.NgModule, args: [{
                    declarations: [NGL_TOAST_DIRECTIVES],
                    exports: [NGL_TOAST_DIRECTIVES],
                    imports: [common.CommonModule, NglIconsModule],
                },] }
    ];

    var NglPagination = /** @class */ (function () {
        function NglPagination() {
            this.pages = [];
            this.pageChange = new core.EventEmitter();
            this.perPage = 10;
            this.limit = 0;
            this.boundaryNumbers = 0;
            this.firstText = 'First';
            this.previousText = 'Previous';
            this.nextText = 'Next';
            this.lastText = 'Last';
            this.boundaryLinks = false;
        }
        Object.defineProperty(NglPagination.prototype, "page", {
            set: function (page) {
                this.current = +page;
            },
            enumerable: false,
            configurable: true
        });
        NglPagination.prototype.hasPrevious = function () {
            return this.current > 1;
        };
        NglPagination.prototype.hasNext = function () {
            return this.current < this.totalPages;
        };
        NglPagination.prototype.goto = function (page) {
            if (page === this.current) {
                return;
            }
            this.pageChange.emit(+page);
        };
        NglPagination.prototype.ngOnChanges = function () {
            var _a, _b;
            var _this = this;
            this.totalPages = Math.ceil(+this.total / +this.perPage);
            var _c = this.limits(), start = _c.start, end = _c.end;
            this.pages = this.getPageArray(start, end);
            if (this.boundaryNumbers > 0) {
                if (start > 1) {
                    var preGap = this.getPageArray(1, Math.min(start - 1, this.boundaryNumbers));
                    var lastGapNumber = +preGap[preGap.length - 1].number;
                    if (lastGapNumber < start - 1) {
                        this.pages.unshift(this.getGapPage(lastGapNumber, start));
                    }
                    (_a = this.pages).unshift.apply(_a, __spreadArray([], __read(preGap)));
                }
                if (end < this.totalPages) {
                    var postGap = this.getPageArray(Math.max(this.totalPages - this.boundaryNumbers + 1, end + 1), this.totalPages);
                    var firstGapNumber = +postGap[0].number;
                    if (firstGapNumber > end + 1) {
                        this.pages.push(this.getGapPage(end, firstGapNumber));
                    }
                    (_b = this.pages).push.apply(_b, __spreadArray([], __read(postGap)));
                }
            }
            if (this.current > this.totalPages) {
                setTimeout(function () { return _this.goto(_this.totalPages); });
            }
            else if (!this.current && this.totalPages > 0) {
                setTimeout(function () { return _this.goto(1); });
            }
        };
        NglPagination.prototype.pageTrackBy = function (index, page) {
            return page.number;
        };
        Object.defineProperty(NglPagination.prototype, "start", {
            get: function () {
                return Math.min(Math.max(1 + ((+this.current || 1) - 1) * +this.perPage, 0), +this.total);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NglPagination.prototype, "end", {
            get: function () {
                return Math.min(this.start + (+this.perPage - 1), +this.total);
            },
            enumerable: false,
            configurable: true
        });
        NglPagination.prototype.getPageArray = function (start, end) {
            var _this = this;
            return Array.apply(null, { length: end - start + 1 }).map(function (value, index) { return _this.getPage(start + index); });
        };
        NglPagination.prototype.getPage = function (number, disabled) {
            if (disabled === void 0) { disabled = false; }
            return { number: number, disabled: disabled };
        };
        NglPagination.prototype.getGapPage = function (before, after) {
            var isConsecutive = before + 1 === after - 1;
            return this.getPage(isConsecutive ? before + 1 : '...', !isConsecutive);
        };
        /**
         * Calculate first and last visible page numbers
         */
        NglPagination.prototype.limits = function () {
            var start = 1, end = this.totalPages;
            if (this.limit < 1) {
                return { start: start, end: end };
            }
            // Current page is displayed in the middle of the visible ones
            start = Math.max(+this.current - Math.floor(+this.limit / 2), 1);
            end = start + +this.limit - 1;
            // Adjust if limit is exceeded
            if (end > this.totalPages) {
                end = this.totalPages;
                start = Math.max(end - +this.limit + 1, 1);
            }
            return { start: start, end: end };
        };
        return NglPagination;
    }());
    NglPagination.decorators = [
        { type: core.Component, args: [{
                    selector: 'ngl-pagination',
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    template: "\n<div class=\"slds-button-group\" role=\"group\">\n  <button class=\"slds-button slds-button_neutral\" *ngIf=\"boundaryLinks\" [disabled]=\"!hasPrevious()\" (click)=\"goto(1)\">{{firstText}}</button>\n  <button class=\"slds-button slds-button_neutral\" [disabled]=\"!hasPrevious()\" (click)=\"goto(current - 1)\">{{previousText}}</button>\n  <button class=\"slds-button\" *ngFor=\"let page of pages; trackBy:pageTrackBy\" [ngClass]=\"'slds-button_' + (page.number === current ? 'brand' : 'neutral')\" (click)=\"goto(page.number)\" [disabled]=\"page.disabled\">{{page.number}}</button>\n  <button class=\"slds-button slds-button_neutral\" [disabled]=\"!hasNext()\" (click)=\"goto(current + 1)\">{{nextText}}</button>\n  <button class=\"slds-button slds-button_neutral\" *ngIf=\"boundaryLinks\" [disabled]=\"!hasNext()\" (click)=\"goto(totalPages)\">{{lastText}}</button>\n</div>",
                    exportAs: 'nglPagination'
                },] }
    ];
    NglPagination.propDecorators = {
        page: [{ type: core.Input }],
        pageChange: [{ type: core.Output }],
        total: [{ type: core.Input }],
        perPage: [{ type: core.Input }],
        limit: [{ type: core.Input }],
        boundaryNumbers: [{ type: core.Input }],
        firstText: [{ type: core.Input }],
        previousText: [{ type: core.Input }],
        nextText: [{ type: core.Input }],
        lastText: [{ type: core.Input }],
        boundaryLinks: [{ type: core.Input }]
    };
    __decorate([
        InputBoolean()
    ], NglPagination.prototype, "boundaryLinks", void 0);

    var NglPaginationsModule = /** @class */ (function () {
        function NglPaginationsModule() {
        }
        return NglPaginationsModule;
    }());
    NglPaginationsModule.decorators = [
        { type: core.NgModule, args: [{
                    declarations: [NglPagination],
                    exports: [NglPagination],
                    imports: [common.CommonModule],
                },] }
    ];

    var NglPick = /** @class */ (function () {
        function NglPick() {
            this.values = new rxjs.BehaviorSubject(null);
            this.nglPickChange = new core.EventEmitter();
            this.nglOptionDestroyed = new core.EventEmitter();
            this.isMultiple = false;
        }
        Object.defineProperty(NglPick.prototype, "setSelected", {
            set: function (selected) {
                this.selected = selected;
                this.ngAfterContentInit();
            },
            enumerable: false,
            configurable: true
        });
        NglPick.prototype.ngAfterContentInit = function () {
            this.values.next(this.selected);
        };
        NglPick.prototype.selectOption = function (value) {
            var _a;
            var next;
            if (this.isMultiple) {
                if (Array.isArray(this.selected)) {
                    // Remove if already there or add to selection
                    var index = this.selected.indexOf(value);
                    next = index > -1
                        ? __spreadArray(__spreadArray([], __read(this.selected.slice(0, index))), __read(this.selected.slice(index + 1))) : __spreadArray(__spreadArray([], __read(this.selected)), [value]);
                }
                else {
                    next = Object.assign({}, this.selected, (_a = {}, _a[value] = !this.selected[value], _a));
                }
            }
            else {
                next = value;
            }
            this.nglPickChange.emit(next);
        };
        NglPick.prototype.optionRemoved = function (value) {
            var _this = this;
            if (this.isMultiple && !this.selected) {
                return;
            }
            var emit;
            if (this.isMultiple) {
                emit = Array.isArray(this.selected) ? this.selected.indexOf(value) > -1 : !!this.selected[value];
            }
            else {
                emit = this.selected === value;
            }
            if (emit) {
                setTimeout(function () { return _this.nglOptionDestroyed.emit(value); });
            }
        };
        return NglPick;
    }());
    NglPick.decorators = [
        { type: core.Directive, args: [{
                    selector: '[nglPick]',
                },] }
    ];
    NglPick.propDecorators = {
        setSelected: [{ type: core.Input, args: ['nglPick',] }],
        nglPickActiveClass: [{ type: core.Input }],
        nglPickChange: [{ type: core.Output }],
        nglOptionDestroyed: [{ type: core.Output }],
        isMultiple: [{ type: core.Input, args: ['nglPickMultiple',] }]
    };
    __decorate([
        InputBoolean()
    ], NglPick.prototype, "isMultiple", void 0);

    var NglPickOption = /** @class */ (function () {
        function NglPickOption(element, renderer, nglPick) {
            this.element = element;
            this.renderer = renderer;
            this.nglPick = nglPick;
            this._active = false;
        }
        Object.defineProperty(NglPickOption.prototype, "active", {
            // Use a getter to prevent direct altering
            get: function () {
                return this._active;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NglPickOption.prototype, "setValue", {
            set: function (value) {
                this._value = value;
            },
            enumerable: false,
            configurable: true
        });
        NglPickOption.prototype.pick = function (evt) {
            if (evt) {
                evt.preventDefault();
            }
            this.nglPick.selectOption(this._value);
        };
        NglPickOption.prototype.ngOnInit = function () {
            var _this = this;
            this._subscription = this.nglPick.values.subscribe(function (value) {
                _this._active = _this._isActive(value);
                var activeClass = _this.nglPickActiveClass || _this.nglPick.nglPickActiveClass;
                if (activeClass) {
                    if (_this.active) {
                        _this.renderer.addClass(_this.element.nativeElement, activeClass);
                    }
                    else {
                        _this.renderer.removeClass(_this.element.nativeElement, activeClass);
                    }
                }
            });
        };
        NglPickOption.prototype.ngOnDestroy = function () {
            this._subscription.unsubscribe();
            this.nglPick.optionRemoved(this._value);
        };
        NglPickOption.prototype._isActive = function (value) {
            if (this.nglPick.isMultiple) {
                if (!value) {
                    return false;
                }
                return Array.isArray(value) ? value.indexOf(this._value) > -1 : !!value[this._value];
            }
            else {
                return this._value === value;
            }
        };
        return NglPickOption;
    }());
    NglPickOption.decorators = [
        { type: core.Directive, args: [{
                    selector: '[nglPickOption]',
                    exportAs: 'nglPickOption',
                    host: {
                        'role': 'button',
                    },
                },] }
    ];
    NglPickOption.ctorParameters = function () { return [
        { type: core.ElementRef },
        { type: core.Renderer2 },
        { type: NglPick }
    ]; };
    NglPickOption.propDecorators = {
        setValue: [{ type: core.Input, args: ['nglPickOption',] }],
        nglPickActiveClass: [{ type: core.Input }],
        pick: [{ type: core.HostListener, args: ['click',] }, { type: core.HostListener, args: ['keydown.Space', ['$event'],] }, { type: core.HostListener, args: ['keydown.Enter', ['$event'],] }]
    };

    var NGL_PICK_DIRECTIVES = [
        NglPick,
        NglPickOption,
    ];
    var NglPickModule = /** @class */ (function () {
        function NglPickModule() {
        }
        return NglPickModule;
    }());
    NglPickModule.decorators = [
        { type: core.NgModule, args: [{
                    declarations: [NGL_PICK_DIRECTIVES],
                    exports: [NGL_PICK_DIRECTIVES],
                    imports: [common.CommonModule],
                },] }
    ];

    var NglPill = /** @class */ (function () {
        function NglPill() {
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
            this.remove = new core.EventEmitter();
            this.linked = false;
        }
        NglPill.prototype.ngOnInit = function () {
            this.canRemove = this.remove.observers.length > 0;
        };
        NglPill.prototype.onRemove = function (e) {
            this.remove.emit(e);
        };
        Object.defineProperty(NglPill.prototype, "pillIcon", {
            get: function () {
                return this.icon || this.avatar;
            },
            enumerable: false,
            configurable: true
        });
        return NglPill;
    }());
    NglPill.decorators = [
        { type: core.Component, args: [{
                    selector: 'ngl-pill',
                    template: "<span class=\"slds-pill__icon_container\" *ngIf=\"pillIcon\">\n  <ng-container *ngIf=\"isTemplateRef(pillIcon); else defaultTpl\" [ngTemplateOutlet]=\"pillIcon\"></ng-container>\n  <ng-template #defaultTpl>\n    <ngl-icon *ngIf=\"icon; else avatarTpl\" [iconName]=\"icon\"></ngl-icon>\n    <ng-template #avatarTpl>\n      <ngl-avatar [src]=\"avatar\" variant=\"circle\"></ngl-avatar>\n    </ng-template>\n  </ng-template></span>\n<ng-container *ngIf=\"linked; else unlinked\">\n  <ng-content select=\"a\"></ng-content>\n</ng-container>\n<ng-template #unlinked><span class=\"slds-pill__label\">\n    <ng-content></ng-content></span></ng-template>\n<button class=\"slds-button slds-button_icon slds-pill__remove\" *ngIf=\"canRemove &amp;&amp; removable\" type=\"button\" [title]=\"removeTitle\" (click)=\"onRemove($event)\">\n  <svg class=\"slds-button__icon\" nglIconName=\"close\"></svg><span class=\"slds-assistive-text\" *ngIf=\"removeTitle\">{{removeTitle}}</span>\n</button>",
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    host: {
                        '[class.slds-pill]': 'true',
                    }
                },] }
    ];
    NglPill.propDecorators = {
        icon: [{ type: core.Input }],
        avatar: [{ type: core.Input }],
        hasError: [{ type: core.Input }, { type: core.HostBinding, args: ['class.slds-has-error',] }],
        removable: [{ type: core.Input }],
        removeTitle: [{ type: core.Input }],
        remove: [{ type: core.Output }],
        linked: [{ type: core.HostBinding, args: ['class.slds-pill_link',] }]
    };
    __decorate([
        InputBoolean()
    ], NglPill.prototype, "hasError", void 0);
    __decorate([
        InputBoolean()
    ], NglPill.prototype, "removable", void 0);

    var NglPillLink = /** @class */ (function () {
        function NglPillLink(pill) {
            pill.linked = true;
        }
        return NglPillLink;
    }());
    NglPillLink.decorators = [
        { type: core.Component, args: [{
                    //  tslint:disable-next-line:component-selector
                    selector: 'a[nglPillAction]',
                    template: "<span class=\"slds-pill__label\">\n  <ng-content></ng-content></span>",
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    host: {
                        '[class.slds-pill__action]': 'true',
                    }
                },] }
    ];
    NglPillLink.ctorParameters = function () { return [
        { type: NglPill }
    ]; };

    var NGL_PILL_DIRECTIVES = [
        NglPill,
        NglPillLink,
    ];
    var NglPillsModule = /** @class */ (function () {
        function NglPillsModule() {
        }
        return NglPillsModule;
    }());
    NglPillsModule.decorators = [
        { type: core.NgModule, args: [{
                    declarations: NGL_PILL_DIRECTIVES,
                    exports: NGL_PILL_DIRECTIVES,
                    imports: [common.CommonModule, NglIconsModule, NglAvatarModule],
                },] }
    ];

    var NglProgressBar = /** @class */ (function () {
        function NglProgressBar(element, renderer, hostService) {
            this.element = element;
            this.renderer = renderer;
            this.hostService = hostService;
            this.renderer.addClass(this.element.nativeElement, 'slds-progress-bar');
            this.renderer.setAttribute(this.element.nativeElement, 'role', 'progressbar');
            this.renderer.setAttribute(this.element.nativeElement, 'aria-valuemin', '0');
            this.renderer.setAttribute(this.element.nativeElement, 'aria-valuemax', '100');
        }
        Object.defineProperty(NglProgressBar.prototype, "value", {
            get: function () {
                return this._value;
            },
            /**
             * The percentage value of the progress bar.
             */
            set: function (value) {
                this._value = Math.max(0, Math.min(value, 100)); // Trap on [0, 100]
                this.renderer.setAttribute(this.element.nativeElement, 'aria-valuenow', "" + this.value);
            },
            enumerable: false,
            configurable: true
        });
        NglProgressBar.prototype.ngOnInit = function () {
            this.setHostClass();
        };
        NglProgressBar.prototype.ngOnChanges = function () {
            this.setHostClass();
        };
        NglProgressBar.prototype.setHostClass = function () {
            var _a;
            this.hostService.updateClass(this.element, (_a = {},
                _a["slds-progress-bar_" + this.size] = !!this.size,
                _a["slds-progress-bar_" + this.variant] = !!this.variant,
                _a));
        };
        return NglProgressBar;
    }());
    NglProgressBar.decorators = [
        { type: core.Component, args: [{
                    selector: 'ngl-progress-bar',
                    template: "<span class=\"slds-progress-bar__value\" [style.width.%]=\"value\"><span class=\"slds-assistive-text\">Progress: {{value}}%</span></span>",
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    providers: [HostService]
                },] }
    ];
    NglProgressBar.ctorParameters = function () { return [
        { type: core.ElementRef },
        { type: core.Renderer2 },
        { type: HostService }
    ]; };
    NglProgressBar.propDecorators = {
        value: [{ type: core.Input }],
        size: [{ type: core.Input }],
        variant: [{ type: core.Input }]
    };

    var NglProgressBarModule = /** @class */ (function () {
        function NglProgressBarModule() {
        }
        return NglProgressBarModule;
    }());
    NglProgressBarModule.decorators = [
        { type: core.NgModule, args: [{
                    declarations: [NglProgressBar],
                    exports: [NglProgressBar],
                    imports: [common.CommonModule],
                },] }
    ];

    var NglRadioGroup = /** @class */ (function () {
        function NglRadioGroup() {
            this.error = null;
            this.type = 'list';
            this.uid = uniqueId('radio-group');
            this.type$ = new rxjs.BehaviorSubject(this.type);
            this.error$ = new rxjs.BehaviorSubject(this.error);
        }
        Object.defineProperty(NglRadioGroup.prototype, "hasError", {
            get: function () {
                return toBoolean(this.error);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NglRadioGroup.prototype, "errorId", {
            get: function () {
                return "error_" + this.uid;
            },
            enumerable: false,
            configurable: true
        });
        NglRadioGroup.prototype.ngOnChanges = function (changes) {
            if (changes.type) {
                this.type$.next(this.type);
            }
            if (changes.error) {
                this.error$.next(this.hasError ? this.errorId : null);
            }
        };
        return NglRadioGroup;
    }());
    NglRadioGroup.decorators = [
        { type: core.Component, args: [{
                    selector: 'ngl-radio-group,[ngl-radio-group]',
                    template: "\n<legend class=\"slds-form-element__legend slds-form-element__label\"><abbr class=\"slds-required\" *ngIf=\"required\" title=\"required\">*</abbr><span [nglInternalOutlet]=\"label\"></span></legend>\n<div class=\"slds-form-element__control\">\n  <div class=\"slds-radio_button-group\" *ngIf=\"type === 'button'; else contentTpl\">\n    <ng-container *ngTemplateOutlet=\"contentTpl\"></ng-container>\n  </div>\n</div>\n<div class=\"slds-form-element__help\" *ngIf=\"error\" [id]=\"errorId\">{{error}}</div>\n<ng-template #contentTpl>\n  <ng-content></ng-content>\n</ng-template>",
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    host: {
                        '[class.slds-form-element]': 'true',
                    }
                },] }
    ];
    NglRadioGroup.propDecorators = {
        label: [{ type: core.Input }],
        error: [{ type: core.Input }],
        hasError: [{ type: core.HostBinding, args: ['class.slds-has-error',] }],
        required: [{ type: core.Input }],
        type: [{ type: core.Input }]
    };
    __decorate([
        InputBoolean()
    ], NglRadioGroup.prototype, "required", void 0);

    var NglRadioInput = /** @class */ (function () {
        function NglRadioInput(el, renderer) {
            this.el = el;
            this.renderer = renderer;
            if (!this.el.nativeElement.id) {
                this.renderer.setAttribute(this.el.nativeElement, 'id', uniqueId('radio'));
            }
        }
        Object.defineProperty(NglRadioInput.prototype, "id", {
            get: function () {
                return this.el.nativeElement.id;
            },
            enumerable: false,
            configurable: true
        });
        return NglRadioInput;
    }());
    NglRadioInput.decorators = [
        { type: core.Directive, args: [{
                    selector: 'input[ngl][type=radio]',
                },] }
    ];
    NglRadioInput.ctorParameters = function () { return [
        { type: core.ElementRef },
        { type: core.Renderer2 }
    ]; };
    NglRadioInput.propDecorators = {
        name: [{ type: core.HostBinding, args: ['attr.name',] }],
        describedBy: [{ type: core.HostBinding, args: ['attr.aria-describedby',] }]
    };

    var NglRadioOption = /** @class */ (function () {
        function NglRadioOption(radioGroup, cd) {
            this.radioGroup = radioGroup;
            this.cd = cd;
            this.subscriptions = [];
        }
        Object.defineProperty(NglRadioOption.prototype, "isTypeList", {
            get: function () {
                return this.type === 'list';
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NglRadioOption.prototype, "isTypeButton", {
            get: function () {
                return this.type === 'button';
            },
            enumerable: false,
            configurable: true
        });
        NglRadioOption.prototype.ngOnInit = function () {
            var _this = this;
            this.subscriptions.push(this.radioGroup.type$.subscribe(function (type) {
                _this.type = type;
                _this.cd.detectChanges();
            }), this.radioGroup.error$.subscribe(function (errorId) {
                _this.input.describedBy = errorId;
            }));
        };
        NglRadioOption.prototype.ngAfterContentInit = function () {
            this.input.name = this.radioGroup.uid;
        };
        NglRadioOption.prototype.ngOnDestroy = function () {
            this.subscriptions.forEach(function (s) { return s.unsubscribe(); });
        };
        return NglRadioOption;
    }());
    NglRadioOption.decorators = [
        { type: core.Component, args: [{
                    selector: 'ngl-radio-option',
                    template: "\n<ng-content></ng-content>\n<label class=\"slds-radio__label\" *ngIf=\"type === 'list'\" [attr.for]=\"input.id\"><span class=\"slds-radio_faux\"></span><span class=\"slds-form-element__label\" [nglInternalOutlet]=\"label\"></span></label>\n<label class=\"slds-radio_button__label\" *ngIf=\"type === 'button'\" [attr.for]=\"input.id\"><span class=\"slds-radio_faux\" [nglInternalOutlet]=\"label\"></span></label>",
                    changeDetection: core.ChangeDetectionStrategy.OnPush
                },] }
    ];
    NglRadioOption.ctorParameters = function () { return [
        { type: NglRadioGroup },
        { type: core.ChangeDetectorRef }
    ]; };
    NglRadioOption.propDecorators = {
        label: [{ type: core.Input }],
        input: [{ type: core.ContentChild, args: [NglRadioInput, { static: true },] }],
        isTypeList: [{ type: core.HostBinding, args: ['class.slds-radio',] }],
        isTypeButton: [{ type: core.HostBinding, args: ['class.slds-button',] }, { type: core.HostBinding, args: ['class.slds-radio_button',] }]
    };

    var DIRECTIVES$3 = [
        NglRadioGroup,
        NglRadioOption,
        NglRadioInput,
    ];
    var NglRadiosModule = /** @class */ (function () {
        function NglRadiosModule() {
        }
        return NglRadiosModule;
    }());
    NglRadiosModule.decorators = [
        { type: core.NgModule, args: [{
                    declarations: DIRECTIVES$3,
                    exports: DIRECTIVES$3,
                    imports: [common.CommonModule, NglInternalOutletModule],
                },] }
    ];

    var NglRatingIconTemplate = /** @class */ (function () {
        function NglRatingIconTemplate(templateRef) {
            this.templateRef = templateRef;
        }
        return NglRatingIconTemplate;
    }());
    NglRatingIconTemplate.decorators = [
        { type: core.Directive, args: [{ selector: '[nglRatingIcon]' },] }
    ];
    NglRatingIconTemplate.ctorParameters = function () { return [
        { type: core.TemplateRef }
    ]; };

    /** Injection token that can be used to specify default options. */
    var NGL_RATING_CONFIG = new core.InjectionToken('ngl-rating-config');
    /**
     * Configuration service for the NglRating component.
     */
    var NglRatingConfig = /** @class */ (function () {
        function NglRatingConfig() {
            /**
             * The color of the icon when status is "on"
             */
            this.colorOn = '#FFB75D';
            /**
             * The color of the icon when status is "off"
             */
            this.colorOff = '54698D';
        }
        return NglRatingConfig;
    }());

    var NglRating = /** @class */ (function () {
        function NglRating(defaultConfig) {
            this.range = [];
            this.icon = 'favorite';
            this.readonly = false;
            this.rateChange = new core.EventEmitter();
            this.hover = new core.EventEmitter();
            this._max = 5;
            var config = Object.assign(Object.assign({}, new NglRatingConfig()), defaultConfig);
            this.colorOn = config.colorOn;
            this.colorOff = config.colorOff;
        }
        Object.defineProperty(NglRating.prototype, "rate", {
            set: function (rate) {
                this.inputRate = rate;
                this.currentRate = rate;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NglRating.prototype, "max", {
            get: function () {
                return this._max;
            },
            set: function (max) {
                this._max = +max;
                this.setRange();
            },
            enumerable: false,
            configurable: true
        });
        NglRating.prototype.ngOnInit = function () {
            this.setRange();
        };
        NglRating.prototype.ngAfterContentInit = function () {
            this._template = this.iconTemplate ? this.iconTemplate.templateRef : this.defaultTemplate;
        };
        NglRating.prototype.update = function (value) {
            if (value < 1 || value > this.max || this.readonly || value === this.inputRate) {
                return;
            }
            this.rateChange.emit(value);
        };
        NglRating.prototype.enter = function (value) {
            if (this.readonly) {
                return;
            }
            this.currentRate = value;
            this.hover.emit(value);
        };
        NglRating.prototype.getFill = function (value) {
            if (value <= this.currentRate) {
                return 100;
            }
            if (Math.ceil(this.currentRate) < value) {
                return 0;
            }
            return Math.round(100 * (this.currentRate % 1));
        };
        NglRating.prototype.reset = function () {
            this.currentRate = this.inputRate;
        };
        // Keyboard interactions
        NglRating.prototype.keyboardIncrease = function (evt) {
            evt.preventDefault();
            this.update(this.inputRate + 1);
        };
        NglRating.prototype.keyboardDecrease = function (evt) {
            evt.preventDefault();
            this.update(this.inputRate - 1);
        };
        Object.defineProperty(NglRating.prototype, "ariaValuenow", {
            // ARIA
            get: function () {
                return this.inputRate;
            },
            enumerable: false,
            configurable: true
        });
        NglRating.prototype.setRange = function () {
            this.range = Array.apply(null, { length: this.max }).map(function (value, index) { return index + 1; });
        };
        return NglRating;
    }());
    NglRating.decorators = [
        { type: core.Component, args: [{
                    selector: 'ngl-rating',
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    template: "\n<ng-template #t let-fill=\"fill\">\n  <svg class=\"slds-icon\" [nglIconName]=\"icon\" [ngClass]=\"size ? 'slds-icon_' + size : ''\" [style.fill]=\"fill === 100 ? colorOn : colorOff\"></svg>\n  <svg class=\"slds-icon\" *ngIf=\"fill &gt; 0 &amp;&amp; fill &lt; 100\" [nglIconName]=\"icon\" [ngClass]=\"size ? 'slds-icon_' + size : ''\" [style.fill]=\"colorOn\" style=\"position:absolute; bottom:0;\" [style.left.%]=\"fill - 100\" [xPos]=\"(100 - fill) + '%'\"></svg>\n</ng-template>\n<div class=\"slds-show_inline-block\" *ngFor=\"let r of range; let i = index\" (click)=\"update(r)\" (mouseenter)=\"enter(r)\" style=\"position: relative;\">\n  <ng-template [ngTemplateOutlet]=\"_template\" [ngTemplateOutletContext]=\"{$implicit: r &lt;= currentRate, index: i, fill: getFill(r)}\"></ng-template>\n</div>",
                    host: {
                        'style': 'white-space: nowrap;',
                        'tabindex': '0',
                        'aria-valuemin': '0',
                        '[attr.aria-valuemax]': 'max',
                    }
                },] }
    ];
    NglRating.ctorParameters = function () { return [
        { type: NglRatingConfig, decorators: [{ type: core.Optional }, { type: core.Inject, args: [NGL_RATING_CONFIG,] }] }
    ]; };
    NglRating.propDecorators = {
        icon: [{ type: core.Input }],
        size: [{ type: core.Input }],
        readonly: [{ type: core.Input, args: ['isReadonly',] }],
        rate: [{ type: core.Input }],
        defaultTemplate: [{ type: core.ViewChild, args: ['t', { static: true },] }],
        iconTemplate: [{ type: core.ContentChild, args: [NglRatingIconTemplate,] }],
        max: [{ type: core.Input }],
        colorOn: [{ type: core.Input }],
        colorOff: [{ type: core.Input }],
        rateChange: [{ type: core.Output }],
        hover: [{ type: core.Output }],
        reset: [{ type: core.HostListener, args: ['mouseleave',] }],
        keyboardIncrease: [{ type: core.HostListener, args: ['keydown.ArrowUp', ['$event'],] }, { type: core.HostListener, args: ['keydown.ArrowRight', ['$event'],] }],
        keyboardDecrease: [{ type: core.HostListener, args: ['keydown.ArrowDown', ['$event'],] }, { type: core.HostListener, args: ['keydown.ArrowLeft', ['$event'],] }],
        ariaValuenow: [{ type: core.HostBinding, args: ['attr.aria-valuenow',] }]
    };
    __decorate([
        InputBoolean()
    ], NglRating.prototype, "readonly", void 0);

    var DIRECTIVES$2 = [
        NglRating,
        NglRatingIconTemplate,
    ];
    var NglRatingsModule = /** @class */ (function () {
        function NglRatingsModule() {
        }
        return NglRatingsModule;
    }());
    NglRatingsModule.decorators = [
        { type: core.NgModule, args: [{
                    imports: [common.CommonModule, NglIconsModule],
                    declarations: __spreadArray([], __read(DIRECTIVES$2)),
                    exports: __spreadArray([], __read(DIRECTIVES$2)),
                },] }
    ];

    var NglExpandableSection = /** @class */ (function () {
        function NglExpandableSection() {
            this.collapsable = true;
            this.open = false;
            this.openChange = new core.EventEmitter();
            this._uid = uniqueId('expandable-section');
        }
        Object.defineProperty(NglExpandableSection.prototype, "expanded", {
            get: function () {
                return this.collapsable ? this.open : true;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NglExpandableSection.prototype, "uid", {
            get: function () {
                return this.collapsable ? this._uid : undefined;
            },
            enumerable: false,
            configurable: true
        });
        NglExpandableSection.prototype.toggle = function (event) {
            event.preventDefault();
            this.openChange.emit(!this.open);
        };
        return NglExpandableSection;
    }());
    NglExpandableSection.decorators = [
        { type: core.Component, args: [{
                    selector: 'ngl-expandable-section',
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    template: "\n<h3 class=\"slds-section__title\" [class.slds-theme_shade]=\"!collapsable\">\n  <button class=\"slds-button slds-section__title-action\" *ngIf=\"collapsable; else simple_title\" [attr.aria-controls]=\"uid\" [attr.aria-expanded]=\"expanded\" type=\"button\" (click)=\"toggle($event)\">\n    <svg class=\"slds-section__title-action-icon slds-button__icon slds-button__icon_left\" nglIconName=\"switch\"></svg><span class=\"slds-truncate\" [title]=\"title\">{{title}}</span>\n  </button>\n  <ng-template #simple_title><span class=\"slds-truncate slds-p-horizontal_small\" [title]=\"title\">{{title}}</span>\n  </ng-template>\n</h3>\n<div class=\"slds-section__content\" [attr.aria-hidden]=\"!expanded\" [attr.id]=\"uid\">\n  <ng-content></ng-content>\n</div>",
                    host: {
                        '[class.slds-section]': 'true',
                    }
                },] }
    ];
    NglExpandableSection.propDecorators = {
        title: [{ type: core.Input }],
        collapsable: [{ type: core.Input }],
        open: [{ type: core.Input }],
        openChange: [{ type: core.Output }],
        expanded: [{ type: core.HostBinding, args: ['class.slds-is-open',] }]
    };

    var NglSectionsModule = /** @class */ (function () {
        function NglSectionsModule() {
        }
        return NglSectionsModule;
    }());
    NglSectionsModule.decorators = [
        { type: core.NgModule, args: [{
                    declarations: [NglExpandableSection],
                    exports: [NglExpandableSection],
                    imports: [common.CommonModule, NglIconsModule],
                },] }
    ];

    var NglSelectInput = /** @class */ (function () {
        function NglSelectInput(el, renderer) {
            this.el = el;
            this.renderer = renderer;
            this.ɵRequiredSubject = new rxjs.BehaviorSubject(false);
            if (!this.el.nativeElement.id) {
                this.renderer.setAttribute(this.el.nativeElement, 'id', uniqueId('select'));
            }
        }
        Object.defineProperty(NglSelectInput.prototype, "required", {
            set: function (required) {
                this.ɵRequiredSubject.next(toBoolean(required));
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NglSelectInput.prototype, "id", {
            get: function () {
                return this.el.nativeElement.id;
            },
            enumerable: false,
            configurable: true
        });
        return NglSelectInput;
    }());
    NglSelectInput.decorators = [
        { type: core.Directive, args: [{
                    selector: 'select[ngl]',
                    host: {
                        '[class.slds-select]': 'true',
                    },
                },] }
    ];
    NglSelectInput.ctorParameters = function () { return [
        { type: core.ElementRef },
        { type: core.Renderer2 }
    ]; };
    NglSelectInput.propDecorators = {
        describedBy: [{ type: core.HostBinding, args: ['attr.aria-describedby',] }],
        required: [{ type: core.Input }]
    };

    var NglSelect = /** @class */ (function () {
        function NglSelect(cd) {
            this.cd = cd;
        }
        Object.defineProperty(NglSelect.prototype, "hasError", {
            get: function () {
                return toBoolean(this.error);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NglSelect.prototype, "errorId", {
            get: function () {
                return "error_" + this._uid;
            },
            enumerable: false,
            configurable: true
        });
        NglSelect.prototype.ngOnChanges = function () {
            this.input.describedBy = this.error ? this.errorId : null;
        };
        NglSelect.prototype.ngAfterContentInit = function () {
            var _this = this;
            if (!this.input) {
                throw Error("[ng-lightning] Couldn't find an <select> with [ngl] attribute inside ngl-select");
            }
            this.ɵRequiredSubscription = this.input.ɵRequiredSubject.subscribe(function (required) {
                _this.required = required;
                _this.cd.detectChanges();
            });
            this._uid = this.input.id;
            this.cd.detectChanges();
        };
        NglSelect.prototype.ngOnDestroy = function () {
            if (this.ɵRequiredSubscription) {
                this.ɵRequiredSubscription.unsubscribe();
                this.ɵRequiredSubscription = null;
            }
        };
        return NglSelect;
    }());
    NglSelect.decorators = [
        { type: core.Component, args: [{
                    selector: 'ngl-select,[ngl-select]',
                    template: "\n<label [nglFormLabel]=\"label\" [attr.for]=\"_uid\" [required]=\"required\"></label>\n<ngl-form-help *ngIf=\"fieldLevelHelpTooltip\" [content]=\"fieldLevelHelpTooltip\"></ngl-form-help>\n<div class=\"slds-form-element__control\">\n  <div class=\"slds-select_container\">\n    <ng-content></ng-content>\n  </div>\n</div>\n<div class=\"slds-form-element__help\" *ngIf=\"hasError\" [id]=\"errorId\" [nglInternalOutlet]=\"error\"></div>",
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    host: {
                        '[class.slds-form-element]': 'true',
                    }
                },] }
    ];
    NglSelect.ctorParameters = function () { return [
        { type: core.ChangeDetectorRef }
    ]; };
    NglSelect.propDecorators = {
        input: [{ type: core.ContentChild, args: [NglSelectInput, { static: true },] }],
        label: [{ type: core.Input }],
        fieldLevelHelpTooltip: [{ type: core.Input }],
        error: [{ type: core.Input }],
        hasError: [{ type: core.HostBinding, args: ['class.slds-has-error',] }]
    };

    var DIRECTIVES$1 = [
        NglSelect,
        NglSelectInput,
    ];
    var NglSelectModule = /** @class */ (function () {
        function NglSelectModule() {
        }
        return NglSelectModule;
    }());
    NglSelectModule.decorators = [
        { type: core.NgModule, args: [{
                    declarations: DIRECTIVES$1,
                    exports: DIRECTIVES$1,
                    imports: [common.CommonModule, NglFormsModule, NglInternalOutletModule],
                },] }
    ];

    var NGL_SLIDER_VALUE_ACCESSOR = {
        provide: forms.NG_VALUE_ACCESSOR,
        useExisting: core.forwardRef(function () { return NglSlider; }),
        multi: true
    };
    var NglSlider = /** @class */ (function () {
        function NglSlider(element, renderer, cd) {
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
            this.valueChange = new core.EventEmitter();
            this.uid = uniqueId('slider');
            this._value = null;
            this.onChange = null;
            this.onTouched = function () { };
            this.renderer.addClass(this.element.nativeElement, 'slds-form-element');
        }
        Object.defineProperty(NglSlider.prototype, "hasError", {
            get: function () {
                return !!this.error;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NglSlider.prototype, "value", {
            get: function () {
                // If the value needs to be read and it is still uninitialized, initialize it to the min.
                if (this._value === null) {
                    this._value = this.min;
                }
                return this._value;
            },
            set: function (value) {
                if (value !== this._value) {
                    this._value = this.limit(coercion.coerceNumberProperty(value));
                }
            },
            enumerable: false,
            configurable: true
        });
        NglSlider.prototype.writeValue = function (value) {
            this.value = value;
            this.cd.markForCheck();
        };
        NglSlider.prototype.registerOnChange = function (fn) { this.onChange = fn; };
        NglSlider.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
        NglSlider.prototype.setDisabledState = function (isDisabled) { this.disabled = isDisabled; };
        NglSlider.prototype.onInput = function (value) {
            // Make sure we always emit number
            this.valueChange.emit(coercion.coerceNumberProperty(value));
            if (this.onChange) {
                this.value = value;
                this.onChange(this.value);
            }
        };
        NglSlider.prototype.sliderClass = function () {
            var _a;
            return _a = {},
                _a["slds-size_" + this.size] = !!this.size,
                _a["slds-slider_vertical"] = this.vertical,
                _a;
        };
        NglSlider.prototype.limit = function (value) {
            return Math.min(Math.max(value, this.min), this.max);
        };
        return NglSlider;
    }());
    NglSlider.decorators = [
        { type: core.Component, args: [{
                    selector: 'ngl-slider',
                    template: "\n<label class=\"slds-form-element__label\" [attr.for]=\"uid\"><span class=\"slds-slider-label\"><span class=\"slds-slider-label__label\" *ngIf=\"label\" [nglInternalOutlet]=\"label\"></span><span class=\"slds-slider-label__range\">{{min}} - {{max}}</span></span></label>\n<div class=\"slds-form-element__control\">\n  <div class=\"slds-slider\" [ngClass]=\"sliderClass()\">\n    <input class=\"slds-slider__range\" [id]=\"uid\" type=\"range\" [value]=\"value\" [min]=\"min\" [max]=\"max\" [step]=\"step\" [disabled]=\"disabled\" [attr.aria-describedby]=\"hasError ? uid + '-error' : null\" (input)=\"onInput($event.target.value)\"><span class=\"slds-slider__value\" aria-hidden=\"true\">{{value}}</span>\n  </div>\n  <div class=\"slds-form-element__help\" *ngIf=\"hasError\" [id]=\"uid + '-error'\" [nglInternalOutlet]=\"error\"></div>\n</div>",
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    providers: [NGL_SLIDER_VALUE_ACCESSOR]
                },] }
    ];
    NglSlider.ctorParameters = function () { return [
        { type: core.ElementRef },
        { type: core.Renderer2 },
        { type: core.ChangeDetectorRef }
    ]; };
    NglSlider.propDecorators = {
        label: [{ type: core.Input }],
        min: [{ type: core.Input }],
        max: [{ type: core.Input }],
        step: [{ type: core.Input }],
        vertical: [{ type: core.Input }],
        size: [{ type: core.Input }],
        disabled: [{ type: core.Input }],
        error: [{ type: core.Input }],
        hasError: [{ type: core.HostBinding, args: ['class.slds-has-error',] }],
        value: [{ type: core.Input }],
        valueChange: [{ type: core.Output }]
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

    var NglSliderModule = /** @class */ (function () {
        function NglSliderModule() {
        }
        return NglSliderModule;
    }());
    NglSliderModule.decorators = [
        { type: core.NgModule, args: [{
                    declarations: [NglSlider],
                    exports: [NglSlider],
                    imports: [common.CommonModule, NglInternalOutletModule],
                },] }
    ];

    var NglSpinner = /** @class */ (function () {
        function NglSpinner(element, renderer, hostService) {
            this.element = element;
            this.renderer = renderer;
            this.hostService = hostService;
            this.renderer.addClass(this.element.nativeElement, 'slds-spinner');
            this.renderer.setAttribute(this.element.nativeElement, 'role', 'status');
        }
        NglSpinner.prototype.ngOnInit = function () {
            this.setHostClass();
        };
        NglSpinner.prototype.ngOnChanges = function () {
            this.setHostClass();
        };
        NglSpinner.prototype.setHostClass = function () {
            var _a;
            this.hostService.updateClass(this.element, (_a = {},
                _a["slds-spinner_" + (this.size || 'medium')] = true,
                _a["slds-spinner_" + this.variant] = !!this.variant,
                _a));
        };
        return NglSpinner;
    }());
    NglSpinner.decorators = [
        { type: core.Component, args: [{
                    selector: 'ngl-spinner',
                    template: "<span class=\"slds-assistive-text\" *ngIf=\"alternativeText\">{{ alternativeText }}</span>\n<div class=\"slds-spinner__dot-a\"></div>\n<div class=\"slds-spinner__dot-b\"></div>",
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    providers: [HostService]
                },] }
    ];
    NglSpinner.ctorParameters = function () { return [
        { type: core.ElementRef },
        { type: core.Renderer2 },
        { type: HostService }
    ]; };
    NglSpinner.propDecorators = {
        size: [{ type: core.Input }],
        variant: [{ type: core.Input }],
        alternativeText: [{ type: core.Input }]
    };

    var NglSpinnersModule = /** @class */ (function () {
        function NglSpinnersModule() {
        }
        return NglSpinnersModule;
    }());
    NglSpinnersModule.decorators = [
        { type: core.NgModule, args: [{
                    declarations: [NglSpinner],
                    exports: [NglSpinner],
                    imports: [common.CommonModule],
                },] }
    ];

    var NglTextareaInput = /** @class */ (function () {
        function NglTextareaInput(el, renderer) {
            this.el = el;
            this.renderer = renderer;
            this.ɵRequiredSubject = new rxjs.BehaviorSubject(false);
            if (!this.el.nativeElement.id) {
                this.renderer.setAttribute(this.el.nativeElement, 'id', uniqueId('textarea'));
            }
        }
        Object.defineProperty(NglTextareaInput.prototype, "required", {
            set: function (required) {
                this.ɵRequiredSubject.next(toBoolean(required));
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NglTextareaInput.prototype, "id", {
            get: function () {
                return this.el.nativeElement.id;
            },
            enumerable: false,
            configurable: true
        });
        return NglTextareaInput;
    }());
    NglTextareaInput.decorators = [
        { type: core.Directive, args: [{
                    selector: 'textarea[ngl]',
                    host: {
                        '[class.slds-textarea]': 'true',
                    },
                },] }
    ];
    NglTextareaInput.ctorParameters = function () { return [
        { type: core.ElementRef },
        { type: core.Renderer2 }
    ]; };
    NglTextareaInput.propDecorators = {
        describedBy: [{ type: core.HostBinding, args: ['attr.aria-describedby',] }],
        required: [{ type: core.Input }]
    };

    var NglTextarea = /** @class */ (function () {
        function NglTextarea(cd) {
            this.cd = cd;
        }
        Object.defineProperty(NglTextarea.prototype, "hasError", {
            get: function () {
                return toBoolean(this.error);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NglTextarea.prototype, "errorId", {
            get: function () {
                return "error_" + this._uid;
            },
            enumerable: false,
            configurable: true
        });
        NglTextarea.prototype.ngOnChanges = function () {
            this.input.describedBy = this.error ? this.errorId : null;
        };
        NglTextarea.prototype.ngAfterContentInit = function () {
            var _this = this;
            if (!this.input) {
                throw Error("[ng-lightning] Couldn't find an <textarea> with [ngl] attribute inside ngl-textarea");
            }
            this.ɵRequiredSubscription = this.input.ɵRequiredSubject.subscribe(function (required) {
                _this.required = required;
                _this.cd.detectChanges();
            });
            this._uid = this.input.id;
            this.cd.detectChanges();
        };
        NglTextarea.prototype.ngOnDestroy = function () {
            if (this.ɵRequiredSubscription) {
                this.ɵRequiredSubscription.unsubscribe();
                this.ɵRequiredSubscription = null;
            }
        };
        return NglTextarea;
    }());
    NglTextarea.decorators = [
        { type: core.Component, args: [{
                    selector: 'ngl-textarea,[ngl-textarea]',
                    template: "\n<label [nglFormLabel]=\"label\" [attr.for]=\"_uid\" [required]=\"required\"></label>\n<ngl-form-help *ngIf=\"fieldLevelHelpTooltip\" [content]=\"fieldLevelHelpTooltip\"></ngl-form-help>\n<div class=\"slds-form-element__control\">\n  <div class=\"slds-textarea_container\">\n    <ng-content></ng-content>\n  </div>\n</div>\n<div class=\"slds-form-element__help\" *ngIf=\"error\" [id]=\"errorId\">{{error}}</div>",
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    host: {
                        '[class.slds-form-element]': 'true',
                    }
                },] }
    ];
    NglTextarea.ctorParameters = function () { return [
        { type: core.ChangeDetectorRef }
    ]; };
    NglTextarea.propDecorators = {
        input: [{ type: core.ContentChild, args: [NglTextareaInput, { static: true },] }],
        label: [{ type: core.Input }],
        fieldLevelHelpTooltip: [{ type: core.Input }],
        error: [{ type: core.Input }],
        hasError: [{ type: core.HostBinding, args: ['class.slds-has-error',] }]
    };

    var DIRECTIVES = [
        NglTextarea,
        NglTextareaInput,
    ];
    var NglTextareaModule = /** @class */ (function () {
        function NglTextareaModule() {
        }
        return NglTextareaModule;
    }());
    NglTextareaModule.decorators = [
        { type: core.NgModule, args: [{
                    declarations: DIRECTIVES,
                    exports: DIRECTIVES,
                    imports: [common.CommonModule, NglFormsModule],
                },] }
    ];

    var MODULES = [
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
    var NglModule = /** @class */ (function () {
        function NglModule() {
        }
        return NglModule;
    }());
    NglModule.decorators = [
        { type: core.NgModule, args: [{
                    exports: MODULES,
                },] }
    ];

    /*
     * Public API Surface of ng-lightning
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.NGL_COLORPICKER_CONFIG = NGL_COLORPICKER_CONFIG;
    exports.NGL_DATEPICKER_CONFIG = NGL_DATEPICKER_CONFIG;
    exports.NGL_ICON_CONFIG = NGL_ICON_CONFIG;
    exports.NGL_RATING_CONFIG = NGL_RATING_CONFIG;
    exports.NGL_TOOLTIP_CONFIG = NGL_TOOLTIP_CONFIG;
    exports.NglAccordion = NglAccordion;
    exports.NglAccordionModule = NglAccordionModule;
    exports.NglAccordionSection = NglAccordionSection;
    exports.NglAlert = NglAlert;
    exports.NglAlertClose = NglAlertClose;
    exports.NglAlertModule = NglAlertModule;
    exports.NglAvatar = NglAvatar;
    exports.NglAvatarModule = NglAvatarModule;
    exports.NglBadge = NglBadge;
    exports.NglBadgesModule = NglBadgesModule;
    exports.NglBreadcrumb = NglBreadcrumb;
    exports.NglBreadcrumbs = NglBreadcrumbs;
    exports.NglBreadcrumbsModule = NglBreadcrumbsModule;
    exports.NglButton = NglButton;
    exports.NglButtonIcon = NglButtonIcon;
    exports.NglButtonIconStateful = NglButtonIconStateful;
    exports.NglButtonIconsModule = NglButtonIconsModule;
    exports.NglButtonStateHover = NglButtonStateHover;
    exports.NglButtonStateOff = NglButtonStateOff;
    exports.NglButtonStateOn = NglButtonStateOn;
    exports.NglButtonStateful = NglButtonStateful;
    exports.NglButtonsModule = NglButtonsModule;
    exports.NglCarousel = NglCarousel;
    exports.NglCarouselImage = NglCarouselImage;
    exports.NglCarouselModule = NglCarouselModule;
    exports.NglCheckbox = NglCheckbox;
    exports.NglCheckboxButton = NglCheckboxButton;
    exports.NglCheckboxGroup = NglCheckboxGroup;
    exports.NglCheckboxInput = NglCheckboxInput;
    exports.NglCheckboxOption = NglCheckboxOption;
    exports.NglCheckboxToggle = NglCheckboxToggle;
    exports.NglCheckboxesModule = NglCheckboxesModule;
    exports.NglColorpicker = NglColorpicker;
    exports.NglColorpickerConfig = NglColorpickerConfig;
    exports.NglColorpickerModule = NglColorpickerModule;
    exports.NglCombobox = NglCombobox;
    exports.NglComboboxInput = NglComboboxInput;
    exports.NglComboboxOption = NglComboboxOption;
    exports.NglComboboxesModule = NglComboboxesModule;
    exports.NglDatatable = NglDatatable;
    exports.NglDatatableCell = NglDatatableCell;
    exports.NglDatatableColumn = NglDatatableColumn;
    exports.NglDatatableHeadingTemplate = NglDatatableHeadingTemplate;
    exports.NglDatatableLoadingOverlay = NglDatatableLoadingOverlay;
    exports.NglDatatableNoRowsOverlay = NglDatatableNoRowsOverlay;
    exports.NglDatatablesModule = NglDatatablesModule;
    exports.NglDatepicker = NglDatepicker;
    exports.NglDatepickerConfig = NglDatepickerConfig;
    exports.NglDatepickerInput = NglDatepickerInput;
    exports.NglDatepickerInputDirective = NglDatepickerInputDirective;
    exports.NglDatepickersModule = NglDatepickersModule;
    exports.NglDropdown = NglDropdown;
    exports.NglDropdownItem = NglDropdownItem;
    exports.NglDropdownTrigger = NglDropdownTrigger;
    exports.NglDynamicIcon = NglDynamicIcon;
    exports.NglDynamicIconEllie = NglDynamicIconEllie;
    exports.NglDynamicIconEq = NglDynamicIconEq;
    exports.NglDynamicIconScore = NglDynamicIconScore;
    exports.NglDynamicIconWaffle = NglDynamicIconWaffle;
    exports.NglDynamicIconsModule = NglDynamicIconsModule;
    exports.NglExpandableSection = NglExpandableSection;
    exports.NglFile = NglFile;
    exports.NglFileCrop = NglFileCrop;
    exports.NglFileUpload = NglFileUpload;
    exports.NglFileUploadModule = NglFileUploadModule;
    exports.NglFilesModule = NglFilesModule;
    exports.NglIcon = NglIcon;
    exports.NglIconConfig = NglIconConfig;
    exports.NglIconSvg = NglIconSvg;
    exports.NglIconsModule = NglIconsModule;
    exports.NglInput = NglInput;
    exports.NglInputElement = NglInputElement;
    exports.NglInputModule = NglInputModule;
    exports.NglMenusModule = NglMenusModule;
    exports.NglModal = NglModal;
    exports.NglModalFooterTemplate = NglModalFooterTemplate;
    exports.NglModalHeaderTemplate = NglModalHeaderTemplate;
    exports.NglModalTaglineTemplate = NglModalTaglineTemplate;
    exports.NglModalsModule = NglModalsModule;
    exports.NglModule = NglModule;
    exports.NglPagination = NglPagination;
    exports.NglPaginationsModule = NglPaginationsModule;
    exports.NglPick = NglPick;
    exports.NglPickModule = NglPickModule;
    exports.NglPickOption = NglPickOption;
    exports.NglPill = NglPill;
    exports.NglPillLink = NglPillLink;
    exports.NglPillsModule = NglPillsModule;
    exports.NglPopover = NglPopover;
    exports.NglPopoverTrigger = NglPopoverTrigger;
    exports.NglPopoversModule = NglPopoversModule;
    exports.NglProgressBar = NglProgressBar;
    exports.NglProgressBarModule = NglProgressBarModule;
    exports.NglRadioGroup = NglRadioGroup;
    exports.NglRadioInput = NglRadioInput;
    exports.NglRadioOption = NglRadioOption;
    exports.NglRadiosModule = NglRadiosModule;
    exports.NglRating = NglRating;
    exports.NglRatingConfig = NglRatingConfig;
    exports.NglRatingIconTemplate = NglRatingIconTemplate;
    exports.NglRatingsModule = NglRatingsModule;
    exports.NglSectionsModule = NglSectionsModule;
    exports.NglSelect = NglSelect;
    exports.NglSelectInput = NglSelectInput;
    exports.NglSelectModule = NglSelectModule;
    exports.NglSlider = NglSlider;
    exports.NglSliderModule = NglSliderModule;
    exports.NglSpinner = NglSpinner;
    exports.NglSpinnersModule = NglSpinnersModule;
    exports.NglTab = NglTab;
    exports.NglTabContent = NglTabContent;
    exports.NglTabLabel = NglTabLabel;
    exports.NglTabVerbose = NglTabVerbose;
    exports.NglTabs = NglTabs;
    exports.NglTabsModule = NglTabsModule;
    exports.NglTextarea = NglTextarea;
    exports.NglTextareaInput = NglTextareaInput;
    exports.NglTextareaModule = NglTextareaModule;
    exports.NglToast = NglToast;
    exports.NglToastClose = NglToastClose;
    exports.NglToastModule = NglToastModule;
    exports.NglTooltipConfig = NglTooltipConfig;
    exports.NglTooltipTrigger = NglTooltipTrigger;
    exports.NglTooltipsModule = NglTooltipsModule;
    exports.ɵa = InputBoolean;
    exports.ɵb = InputNumber;
    exports.ɵba = NglInternalDatatableHeadCell;
    exports.ɵbb = NglInternalDatatableCell;
    exports.ɵbc = NglDatepickerMonth;
    exports.ɵbd = NglDay;
    exports.ɵbe = NglDateAdapter;
    exports.ɵbf = NglDateAdapterBase;
    exports.ɵbg = NglDatepickerWeekdays;
    exports.ɵbh = NglDatepickerYear;
    exports.ɵbi = NglClickOutsideModule;
    exports.ɵbj = NglClickOutsideDirective;
    exports.ɵbk = BaseDynamicIconComponent;
    exports.ɵc = NglAccordionItem;
    exports.ɵd = HostService;
    exports.ɵe = NglInternalOutletModule;
    exports.ɵf = NglInternalOutlet;
    exports.ɵg = NglCommonNotify;
    exports.ɵh = NglCommonNotifyClose;
    exports.ɵi = NglCarouselIndicator;
    exports.ɵj = NglColorpickerSwatch;
    exports.ɵk = NglColorpickerCustom;
    exports.ɵl = NglColorpickerRange;
    exports.ɵm = NglColorpickerInputs;
    exports.ɵn = NglColorpickerSwatches;
    exports.ɵo = NglColorpickerSwatchTrigger;
    exports.ɵp = OnChange;
    exports.ɵq = hasObservers;
    exports.ɵr = NglFormsModule;
    exports.ɵs = NglFormLabel;
    exports.ɵt = NglFormHelp;
    exports.ɵu = NglTooltip;
    exports.ɵv = NglComboboxService;
    exports.ɵw = NGL_COMBOBOX_CONFIG;
    exports.ɵx = NglComboboxConfig;
    exports.ɵy = NglOverlayModule;
    exports.ɵz = NglOverlaynglOverlayScrolledOutsideViewDirective;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ng-lightning.umd.js.map

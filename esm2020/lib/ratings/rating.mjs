import { __decorate } from "tslib";
import { Component, Input, ChangeDetectionStrategy, Output, EventEmitter, HostListener, HostBinding, ContentChild, ViewChild, Optional, Inject } from '@angular/core';
import { NglRatingIconTemplate } from './icons';
import { InputBoolean } from '../util/convert';
import { NGL_RATING_CONFIG, NglRatingConfig } from './config';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../icons/svg";
import * as i3 from "./config";
export class NglRating {
    constructor(defaultConfig) {
        this.range = [];
        this.icon = 'favorite';
        this.readonly = false;
        this.rateChange = new EventEmitter();
        this.hover = new EventEmitter();
        this._max = 5;
        const config = { ...new NglRatingConfig(), ...defaultConfig };
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
NglRating.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglRating, deps: [{ token: NGL_RATING_CONFIG, optional: true }], target: i0.ɵɵFactoryTarget.Component });
NglRating.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: NglRating, selector: "ngl-rating", inputs: { icon: "icon", size: "size", readonly: ["isReadonly", "readonly"], rate: "rate", max: "max", colorOn: "colorOn", colorOff: "colorOff" }, outputs: { rateChange: "rateChange", hover: "hover" }, host: { attributes: { "tabindex": "0", "aria-valuemin": "0" }, listeners: { "mouseleave": "reset()", "keydown.ArrowUp": "keyboardIncrease($event)", "keydown.ArrowRight": "keyboardIncrease($event)", "keydown.ArrowDown": "keyboardDecrease($event)", "keydown.ArrowLeft": "keyboardDecrease($event)" }, properties: { "attr.aria-valuemax": "max", "attr.aria-valuenow": "this.ariaValuenow" }, styleAttribute: "white-space: nowrap;" }, queries: [{ propertyName: "iconTemplate", first: true, predicate: NglRatingIconTemplate, descendants: true }], viewQueries: [{ propertyName: "defaultTemplate", first: true, predicate: ["t"], descendants: true, static: true }], ngImport: i0, template: "\n<ng-template #t let-fill=\"fill\">\n  <svg class=\"slds-icon\" [nglIconName]=\"icon\" [ngClass]=\"size ? 'slds-icon_' + size : ''\" [style.fill]=\"fill === 100 ? colorOn : colorOff\"></svg>\n  <svg class=\"slds-icon\" *ngIf=\"fill &gt; 0 &amp;&amp; fill &lt; 100\" [nglIconName]=\"icon\" [ngClass]=\"size ? 'slds-icon_' + size : ''\" [style.fill]=\"colorOn\" style=\"position:absolute; bottom:0;\" [style.left.%]=\"fill - 100\" [xPos]=\"(100 - fill) + '%'\"></svg>\n</ng-template>\n<div class=\"slds-show_inline-block\" *ngFor=\"let r of range; let i = index\" (click)=\"update(r)\" (mouseenter)=\"enter(r)\" style=\"position: relative;\">\n  <ng-template [ngTemplateOutlet]=\"_template\" [ngTemplateOutletContext]=\"{$implicit: r &lt;= currentRate, index: i, fill: getFill(r)}\"></ng-template>\n</div>", dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "component", type: i2.NglIconSvg, selector: "svg[nglIconName]", inputs: ["nglIconName", "xPos"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
__decorate([
    InputBoolean()
], NglRating.prototype, "readonly", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglRating, decorators: [{
            type: Component,
            args: [{ selector: 'ngl-rating', changeDetection: ChangeDetectionStrategy.OnPush, host: {
                        'style': 'white-space: nowrap;',
                        'tabindex': '0',
                        'aria-valuemin': '0',
                        '[attr.aria-valuemax]': 'max',
                    }, template: "\n<ng-template #t let-fill=\"fill\">\n  <svg class=\"slds-icon\" [nglIconName]=\"icon\" [ngClass]=\"size ? 'slds-icon_' + size : ''\" [style.fill]=\"fill === 100 ? colorOn : colorOff\"></svg>\n  <svg class=\"slds-icon\" *ngIf=\"fill &gt; 0 &amp;&amp; fill &lt; 100\" [nglIconName]=\"icon\" [ngClass]=\"size ? 'slds-icon_' + size : ''\" [style.fill]=\"colorOn\" style=\"position:absolute; bottom:0;\" [style.left.%]=\"fill - 100\" [xPos]=\"(100 - fill) + '%'\"></svg>\n</ng-template>\n<div class=\"slds-show_inline-block\" *ngFor=\"let r of range; let i = index\" (click)=\"update(r)\" (mouseenter)=\"enter(r)\" style=\"position: relative;\">\n  <ng-template [ngTemplateOutlet]=\"_template\" [ngTemplateOutletContext]=\"{$implicit: r &lt;= currentRate, index: i, fill: getFill(r)}\"></ng-template>\n</div>" }]
        }], ctorParameters: function () { return [{ type: i3.NglRatingConfig, decorators: [{
                    type: Optional
                }, {
                    type: Inject,
                    args: [NGL_RATING_CONFIG]
                }] }]; }, propDecorators: { icon: [{
                type: Input
            }], size: [{
                type: Input
            }], readonly: [{
                type: Input,
                args: ['isReadonly']
            }], rate: [{
                type: Input
            }], defaultTemplate: [{
                type: ViewChild,
                args: ['t', { static: true }]
            }], iconTemplate: [{
                type: ContentChild,
                args: [NglRatingIconTemplate]
            }], max: [{
                type: Input
            }], colorOn: [{
                type: Input
            }], colorOff: [{
                type: Input
            }], rateChange: [{
                type: Output
            }], hover: [{
                type: Output
            }], reset: [{
                type: HostListener,
                args: ['mouseleave']
            }], keyboardIncrease: [{
                type: HostListener,
                args: ['keydown.ArrowUp', ['$event']]
            }, {
                type: HostListener,
                args: ['keydown.ArrowRight', ['$event']]
            }], keyboardDecrease: [{
                type: HostListener,
                args: ['keydown.ArrowDown', ['$event']]
            }, {
                type: HostListener,
                args: ['keydown.ArrowLeft', ['$event']]
            }], ariaValuenow: [{
                type: HostBinding,
                args: ['attr.aria-valuenow']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmF0aW5nLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctbGlnaHRuaW5nL3NyYy9saWIvcmF0aW5ncy9yYXRpbmcudHMiLCIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1saWdodG5pbmcvc3JjL2xpYi9yYXRpbmdzL3JhdGluZy5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSx1QkFBdUIsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFDOUUsV0FBVyxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQXlDLFFBQVEsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0gsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sU0FBUyxDQUFDO0FBQ2hELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsZUFBZSxFQUFFLE1BQU0sVUFBVSxDQUFDOzs7OztBQWE5RCxNQUFNLE9BQU8sU0FBUztJQXFDcEIsWUFBbUQsYUFBOEI7UUFuQ2pGLFVBQUssR0FBYSxFQUFFLENBQUM7UUFHWixTQUFJLEdBQUcsVUFBVSxDQUFDO1FBSVUsYUFBUSxHQUFHLEtBQUssQ0FBQztRQXFCNUMsZUFBVSxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7UUFDeEMsVUFBSyxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7UUFHckMsU0FBSSxHQUFHLENBQUMsQ0FBQztRQUlmLE1BQU0sTUFBTSxHQUFHLEVBQUUsR0FBRyxJQUFJLGVBQWUsRUFBRSxFQUFFLEdBQUcsYUFBYSxFQUFFLENBQUM7UUFDOUQsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDO1FBQzlCLElBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQztJQUNsQyxDQUFDO0lBOUJELElB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LFNBQVM7a0JBWHJCLFNBQVM7K0JBQ0UsWUFBWSxtQkFDTCx1QkFBdUIsQ0FBQyxNQUFNLFFBRXpDO3dCQUNKLE9BQU8sRUFBRSxzQkFBc0I7d0JBQy9CLFVBQVUsRUFBRSxHQUFHO3dCQUNmLGVBQWUsRUFBRSxHQUFHO3dCQUNwQixzQkFBc0IsRUFBRSxLQUFLO3FCQUM5Qjs7MEJBdUNZLFFBQVE7OzBCQUFJLE1BQU07MkJBQUMsaUJBQWlCOzRDQWhDeEMsSUFBSTtzQkFBWixLQUFLO2dCQUVHLElBQUk7c0JBQVosS0FBSztnQkFFK0IsUUFBUTtzQkFBNUMsS0FBSzt1QkFBQyxZQUFZO2dCQUVOLElBQUk7c0JBQWhCLEtBQUs7Z0JBSzRCLGVBQWU7c0JBQWhELFNBQVM7dUJBQUMsR0FBRyxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTtnQkFDSyxZQUFZO3NCQUFoRCxZQUFZO3VCQUFDLHFCQUFxQjtnQkFFdEIsR0FBRztzQkFBZixLQUFLO2dCQVFHLE9BQU87c0JBQWYsS0FBSztnQkFDRyxRQUFRO3NCQUFoQixLQUFLO2dCQUVJLFVBQVU7c0JBQW5CLE1BQU07Z0JBQ0csS0FBSztzQkFBZCxNQUFNO2dCQTJDcUIsS0FBSztzQkFBaEMsWUFBWTt1QkFBQyxZQUFZO2dCQU8xQixnQkFBZ0I7c0JBRmYsWUFBWTt1QkFBQyxpQkFBaUIsRUFBRSxDQUFDLFFBQVEsQ0FBQzs7c0JBQzFDLFlBQVk7dUJBQUMsb0JBQW9CLEVBQUUsQ0FBQyxRQUFRLENBQUM7Z0JBUTlDLGdCQUFnQjtzQkFGZixZQUFZO3VCQUFDLG1CQUFtQixFQUFFLENBQUMsUUFBUSxDQUFDOztzQkFDNUMsWUFBWTt1QkFBQyxtQkFBbUIsRUFBRSxDQUFDLFFBQVEsQ0FBQztnQkFPTixZQUFZO3NCQUFsRCxXQUFXO3VCQUFDLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgSG9zdExpc3RlbmVyLFxuICAgICAgICBIb3N0QmluZGluZywgQ29udGVudENoaWxkLCBWaWV3Q2hpbGQsIFRlbXBsYXRlUmVmLCBPbkluaXQsIEFmdGVyQ29udGVudEluaXQsIE9wdGlvbmFsLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5nbFJhdGluZ0ljb25UZW1wbGF0ZSB9IGZyb20gJy4vaWNvbnMnO1xuaW1wb3J0IHsgSW5wdXRCb29sZWFuIH0gZnJvbSAnLi4vdXRpbC9jb252ZXJ0JztcbmltcG9ydCB7IE5HTF9SQVRJTkdfQ09ORklHLCBOZ2xSYXRpbmdDb25maWcgfSBmcm9tICcuL2NvbmZpZyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25nbC1yYXRpbmcnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgdGVtcGxhdGVVcmw6ICcuL3JhdGluZy5odG1sJyxcbiAgaG9zdDoge1xuICAgICdzdHlsZSc6ICd3aGl0ZS1zcGFjZTogbm93cmFwOycsXG4gICAgJ3RhYmluZGV4JzogJzAnLFxuICAgICdhcmlhLXZhbHVlbWluJzogJzAnLFxuICAgICdbYXR0ci5hcmlhLXZhbHVlbWF4XSc6ICdtYXgnLFxuICB9LFxufSlcbmV4cG9ydCBjbGFzcyBOZ2xSYXRpbmcgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyQ29udGVudEluaXQge1xuXG4gIHJhbmdlOiBudW1iZXJbXSA9IFtdO1xuICBjdXJyZW50UmF0ZTogbnVtYmVyO1xuXG4gIEBJbnB1dCgpIGljb24gPSAnZmF2b3JpdGUnO1xuXG4gIEBJbnB1dCgpIHNpemU6ICd4LXNtYWxsJyB8ICdzbWFsbCcgfCAnbGFyZ2UnO1xuXG4gIEBJbnB1dCgnaXNSZWFkb25seScpIEBJbnB1dEJvb2xlYW4oKSByZWFkb25seSA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpIHNldCByYXRlKHJhdGU6IG51bWJlcikge1xuICAgIHRoaXMuaW5wdXRSYXRlID0gcmF0ZTtcbiAgICB0aGlzLmN1cnJlbnRSYXRlID0gcmF0ZTtcbiAgfVxuXG4gIEBWaWV3Q2hpbGQoJ3QnLCB7IHN0YXRpYzogdHJ1ZSB9KSBkZWZhdWx0VGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG4gIEBDb250ZW50Q2hpbGQoTmdsUmF0aW5nSWNvblRlbXBsYXRlKSBpY29uVGVtcGxhdGU6IE5nbFJhdGluZ0ljb25UZW1wbGF0ZTtcblxuICBASW5wdXQoKSBzZXQgbWF4KG1heDogbnVtYmVyIHwgc3RyaW5nKSB7XG4gICAgdGhpcy5fbWF4ID0gK21heDtcbiAgICB0aGlzLnNldFJhbmdlKCk7XG4gIH1cbiAgZ2V0IG1heCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbWF4O1xuICB9XG5cbiAgQElucHV0KCkgY29sb3JPbjogc3RyaW5nO1xuICBASW5wdXQoKSBjb2xvck9mZjogc3RyaW5nO1xuXG4gIEBPdXRwdXQoKSByYXRlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XG4gIEBPdXRwdXQoKSBob3ZlciA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuXG4gIF90ZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcbiAgcHJpdmF0ZSBfbWF4ID0gNTtcbiAgcHJpdmF0ZSBpbnB1dFJhdGU6IG51bWJlcjtcblxuICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBASW5qZWN0KE5HTF9SQVRJTkdfQ09ORklHKSBkZWZhdWx0Q29uZmlnOiBOZ2xSYXRpbmdDb25maWcpIHtcbiAgICBjb25zdCBjb25maWcgPSB7IC4uLm5ldyBOZ2xSYXRpbmdDb25maWcoKSwgLi4uZGVmYXVsdENvbmZpZyB9O1xuICAgIHRoaXMuY29sb3JPbiA9IGNvbmZpZy5jb2xvck9uO1xuICAgIHRoaXMuY29sb3JPZmYgPSBjb25maWcuY29sb3JPZmY7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnNldFJhbmdlKCk7XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgdGhpcy5fdGVtcGxhdGUgPSB0aGlzLmljb25UZW1wbGF0ZSA/IHRoaXMuaWNvblRlbXBsYXRlLnRlbXBsYXRlUmVmIDogdGhpcy5kZWZhdWx0VGVtcGxhdGU7XG4gIH1cblxuICB1cGRhdGUodmFsdWU6IG51bWJlcikge1xuICAgIGlmICh2YWx1ZSA8IDEgfHwgdmFsdWUgPiB0aGlzLm1heCB8fCB0aGlzLnJlYWRvbmx5IHx8IHZhbHVlID09PSB0aGlzLmlucHV0UmF0ZSkgeyByZXR1cm47IH1cbiAgICB0aGlzLnJhdGVDaGFuZ2UuZW1pdCh2YWx1ZSk7XG4gIH1cblxuICBlbnRlcih2YWx1ZTogbnVtYmVyKSB7XG4gICAgaWYgKHRoaXMucmVhZG9ubHkpIHsgcmV0dXJuOyB9XG5cbiAgICB0aGlzLmN1cnJlbnRSYXRlID0gdmFsdWU7XG4gICAgdGhpcy5ob3Zlci5lbWl0KHZhbHVlKTtcbiAgfVxuXG4gIGdldEZpbGwodmFsdWU6IG51bWJlcikge1xuICAgIGlmICh2YWx1ZSA8PSB0aGlzLmN1cnJlbnRSYXRlKSB7XG4gICAgICByZXR1cm4gMTAwO1xuICAgIH1cbiAgICBpZiAoTWF0aC5jZWlsKHRoaXMuY3VycmVudFJhdGUpIDwgdmFsdWUpIHtcbiAgICAgIHJldHVybiAwO1xuICAgIH1cblxuICAgIHJldHVybiBNYXRoLnJvdW5kKDEwMCAqICh0aGlzLmN1cnJlbnRSYXRlICUgMSkpO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignbW91c2VsZWF2ZScpIHJlc2V0KCkge1xuICAgIHRoaXMuY3VycmVudFJhdGUgPSB0aGlzLmlucHV0UmF0ZTtcbiAgfVxuXG4gIC8vIEtleWJvYXJkIGludGVyYWN0aW9uc1xuICBASG9zdExpc3RlbmVyKCdrZXlkb3duLkFycm93VXAnLCBbJyRldmVudCddKVxuICBASG9zdExpc3RlbmVyKCdrZXlkb3duLkFycm93UmlnaHQnLCBbJyRldmVudCddKVxuICBrZXlib2FyZEluY3JlYXNlKGV2dDogS2V5Ym9hcmRFdmVudCkge1xuICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMudXBkYXRlKHRoaXMuaW5wdXRSYXRlICsgMSk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdrZXlkb3duLkFycm93RG93bicsIFsnJGV2ZW50J10pXG4gIEBIb3N0TGlzdGVuZXIoJ2tleWRvd24uQXJyb3dMZWZ0JywgWyckZXZlbnQnXSlcbiAga2V5Ym9hcmREZWNyZWFzZShldnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLnVwZGF0ZSh0aGlzLmlucHV0UmF0ZSAtIDEpO1xuICB9XG5cbiAgLy8gQVJJQVxuICBASG9zdEJpbmRpbmcoJ2F0dHIuYXJpYS12YWx1ZW5vdycpIGdldCBhcmlhVmFsdWVub3coKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5wdXRSYXRlO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRSYW5nZSgpIHtcbiAgICB0aGlzLnJhbmdlID0gQXJyYXkuYXBwbHkobnVsbCwge2xlbmd0aDogdGhpcy5tYXh9KS5tYXAoKHZhbHVlOiBhbnksIGluZGV4OiBudW1iZXIpID0+IGluZGV4ICsgMSk7XG4gIH1cbn1cbiIsIlxuPG5nLXRlbXBsYXRlICN0IGxldC1maWxsPVwiZmlsbFwiPlxuICA8c3ZnIGNsYXNzPVwic2xkcy1pY29uXCIgW25nbEljb25OYW1lXT1cImljb25cIiBbbmdDbGFzc109XCJzaXplID8gJ3NsZHMtaWNvbl8nICsgc2l6ZSA6ICcnXCIgW3N0eWxlLmZpbGxdPVwiZmlsbCA9PT0gMTAwID8gY29sb3JPbiA6IGNvbG9yT2ZmXCI+PC9zdmc+XG4gIDxzdmcgY2xhc3M9XCJzbGRzLWljb25cIiAqbmdJZj1cImZpbGwgJmd0OyAwICZhbXA7JmFtcDsgZmlsbCAmbHQ7IDEwMFwiIFtuZ2xJY29uTmFtZV09XCJpY29uXCIgW25nQ2xhc3NdPVwic2l6ZSA/ICdzbGRzLWljb25fJyArIHNpemUgOiAnJ1wiIFtzdHlsZS5maWxsXT1cImNvbG9yT25cIiBzdHlsZT1cInBvc2l0aW9uOmFic29sdXRlOyBib3R0b206MDtcIiBbc3R5bGUubGVmdC4lXT1cImZpbGwgLSAxMDBcIiBbeFBvc109XCIoMTAwIC0gZmlsbCkgKyAnJSdcIj48L3N2Zz5cbjwvbmctdGVtcGxhdGU+XG48ZGl2IGNsYXNzPVwic2xkcy1zaG93X2lubGluZS1ibG9ja1wiICpuZ0Zvcj1cImxldCByIG9mIHJhbmdlOyBsZXQgaSA9IGluZGV4XCIgKGNsaWNrKT1cInVwZGF0ZShyKVwiIChtb3VzZWVudGVyKT1cImVudGVyKHIpXCIgc3R5bGU9XCJwb3NpdGlvbjogcmVsYXRpdmU7XCI+XG4gIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJfdGVtcGxhdGVcIiBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwieyRpbXBsaWNpdDogciAmbHQ7PSBjdXJyZW50UmF0ZSwgaW5kZXg6IGksIGZpbGw6IGdldEZpbGwocil9XCI+PC9uZy10ZW1wbGF0ZT5cbjwvZGl2PiJdfQ==
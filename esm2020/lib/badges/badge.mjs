import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class NglBadge {
}
NglBadge.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglBadge, deps: [], target: i0.ɵɵFactoryTarget.Component });
NglBadge.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: NglBadge, selector: "ngl-badge", inputs: { theme: "theme" }, ngImport: i0, template: "<span class=\"slds-badge\" [ngClass]=\"theme ? 'slds-theme_' + theme : ''\">\n  <ng-content></ng-content></span>", dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglBadge, decorators: [{
            type: Component,
            args: [{ selector: 'ngl-badge', changeDetection: ChangeDetectionStrategy.OnPush, template: "<span class=\"slds-badge\" [ngClass]=\"theme ? 'slds-theme_' + theme : ''\">\n  <ng-content></ng-content></span>" }]
        }], propDecorators: { theme: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFkZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1saWdodG5pbmcvc3JjL2xpYi9iYWRnZXMvYmFkZ2UudHMiLCIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1saWdodG5pbmcvc3JjL2xpYi9iYWRnZXMvYmFkZ2UuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7O0FBTzFFLE1BQU0sT0FBTyxRQUFROztxR0FBUixRQUFRO3lGQUFSLFFBQVEsNkVDUHJCLGtIQUNrQzsyRkRNckIsUUFBUTtrQkFMcEIsU0FBUzsrQkFDRSxXQUFXLG1CQUVKLHVCQUF1QixDQUFDLE1BQU07OEJBR3RDLEtBQUs7c0JBQWIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25nbC1iYWRnZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9iYWRnZS5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIE5nbEJhZGdlIHtcbiAgQElucHV0KCkgdGhlbWU6IHN0cmluZztcbn1cbiIsIjxzcGFuIGNsYXNzPVwic2xkcy1iYWRnZVwiIFtuZ0NsYXNzXT1cInRoZW1lID8gJ3NsZHMtdGhlbWVfJyArIHRoZW1lIDogJydcIj5cbiAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50Pjwvc3Bhbj4iXX0=
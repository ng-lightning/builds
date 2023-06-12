import { __decorate } from "tslib";
import { Directive, Input, ContentChild } from '@angular/core';
import { NglDatatableCell } from './cell';
import { NglDatatableHeadingTemplate } from './heading';
import { InputBoolean } from '../util/convert';
import * as i0 from "@angular/core";
export class NglDatatableColumn {
    constructor() {
        this.sortable = false;
        this.truncate = false;
    }
}
NglDatatableColumn.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglDatatableColumn, deps: [], target: i0.ɵɵFactoryTarget.Directive });
NglDatatableColumn.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.2.9", type: NglDatatableColumn, selector: "ngl-datatable-column", inputs: { heading: "heading", key: "key", headClass: "headClass", cellClass: "cellClass", sortable: "sortable", truncate: "truncate" }, queries: [{ propertyName: "cellTpl", first: true, predicate: NglDatatableCell, descendants: true }, { propertyName: "headingTpl", first: true, predicate: NglDatatableHeadingTemplate, descendants: true }], ngImport: i0 });
__decorate([
    InputBoolean()
], NglDatatableColumn.prototype, "sortable", void 0);
__decorate([
    InputBoolean()
], NglDatatableColumn.prototype, "truncate", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglDatatableColumn, decorators: [{
            type: Directive,
            args: [{
                    // eslint-disable-next-line @angular-eslint/directive-selector
                    selector: 'ngl-datatable-column',
                }]
        }], propDecorators: { heading: [{
                type: Input
            }], key: [{
                type: Input
            }], headClass: [{
                type: Input
            }], cellClass: [{
                type: Input
            }], sortable: [{
                type: Input
            }], truncate: [{
                type: Input
            }], cellTpl: [{
                type: ContentChild,
                args: [NglDatatableCell]
            }], headingTpl: [{
                type: ContentChild,
                args: [NglDatatableHeadingTemplate]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sdW1uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctbGlnaHRuaW5nL3NyYy9saWIvZGF0YXRhYmxlcy9jb2x1bW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFDMUMsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQ3hELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7QUFNL0MsTUFBTSxPQUFPLGtCQUFrQjtJQUovQjtRQWEyQixhQUFRLEdBQUcsS0FBSyxDQUFDO1FBRWpCLGFBQVEsR0FBRyxLQUFLLENBQUM7S0FLM0M7OytHQWhCWSxrQkFBa0I7bUdBQWxCLGtCQUFrQix5T0FhZixnQkFBZ0IsNkVBRWhCLDJCQUEyQjtBQU5oQjtJQUFmLFlBQVksRUFBRTtvREFBa0I7QUFFakI7SUFBZixZQUFZLEVBQUU7b0RBQWtCOzJGQVgvQixrQkFBa0I7a0JBSjlCLFNBQVM7bUJBQUM7b0JBQ1QsOERBQThEO29CQUM5RCxRQUFRLEVBQUUsc0JBQXNCO2lCQUNqQzs4QkFFVSxPQUFPO3NCQUFmLEtBQUs7Z0JBRUcsR0FBRztzQkFBWCxLQUFLO2dCQUVHLFNBQVM7c0JBQWpCLEtBQUs7Z0JBRUcsU0FBUztzQkFBakIsS0FBSztnQkFFbUIsUUFBUTtzQkFBaEMsS0FBSztnQkFFbUIsUUFBUTtzQkFBaEMsS0FBSztnQkFFMEIsT0FBTztzQkFBdEMsWUFBWTt1QkFBQyxnQkFBZ0I7Z0JBRWEsVUFBVTtzQkFBcEQsWUFBWTt1QkFBQywyQkFBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBDb250ZW50Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5nbERhdGF0YWJsZUNlbGwgfSBmcm9tICcuL2NlbGwnO1xuaW1wb3J0IHsgTmdsRGF0YXRhYmxlSGVhZGluZ1RlbXBsYXRlIH0gZnJvbSAnLi9oZWFkaW5nJztcbmltcG9ydCB7IElucHV0Qm9vbGVhbiB9IGZyb20gJy4uL3V0aWwvY29udmVydCc7XG5cbkBEaXJlY3RpdmUoe1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQGFuZ3VsYXItZXNsaW50L2RpcmVjdGl2ZS1zZWxlY3RvclxuICBzZWxlY3RvcjogJ25nbC1kYXRhdGFibGUtY29sdW1uJyxcbn0pXG5leHBvcnQgY2xhc3MgTmdsRGF0YXRhYmxlQ29sdW1uIHtcbiAgQElucHV0KCkgaGVhZGluZzogc3RyaW5nO1xuXG4gIEBJbnB1dCgpIGtleTogc3RyaW5nO1xuXG4gIEBJbnB1dCgpIGhlYWRDbGFzczogYW55O1xuXG4gIEBJbnB1dCgpIGNlbGxDbGFzczogYW55O1xuXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBzb3J0YWJsZSA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSB0cnVuY2F0ZSA9IGZhbHNlO1xuXG4gIEBDb250ZW50Q2hpbGQoTmdsRGF0YXRhYmxlQ2VsbCkgY2VsbFRwbDogTmdsRGF0YXRhYmxlQ2VsbDtcblxuICBAQ29udGVudENoaWxkKE5nbERhdGF0YWJsZUhlYWRpbmdUZW1wbGF0ZSkgaGVhZGluZ1RwbDogTmdsRGF0YXRhYmxlSGVhZGluZ1RlbXBsYXRlO1xufVxuIl19
import { __decorate } from "tslib";
import { Directive, Input, ContentChild } from '@angular/core';
import { NglDatatableCell } from './cell';
import { NglDatatableHeadingTemplate } from './heading';
import { InputBoolean } from '../util/convert';
export class NglDatatableColumn {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sdW1uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctbGlnaHRuaW5nL3NyYy9saWIvZGF0YXRhYmxlcy9jb2x1bW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFDMUMsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQ3hELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQU0vQyxNQUFNLE9BQU8sa0JBQWtCO0lBSi9CO1FBYTJCLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFFakIsYUFBUSxHQUFHLEtBQUssQ0FBQztJQUs1QyxDQUFDOzs7WUFwQkEsU0FBUyxTQUFDO2dCQUNULDhDQUE4QztnQkFDOUMsUUFBUSxFQUFFLHNCQUFzQjthQUNqQzs7O3NCQUVFLEtBQUs7a0JBRUwsS0FBSzt3QkFFTCxLQUFLO3dCQUVMLEtBQUs7dUJBRUwsS0FBSzt1QkFFTCxLQUFLO3NCQUVMLFlBQVksU0FBQyxnQkFBZ0I7eUJBRTdCLFlBQVksU0FBQywyQkFBMkI7O0FBTmhCO0lBQWYsWUFBWSxFQUFFO29EQUFrQjtBQUVqQjtJQUFmLFlBQVksRUFBRTtvREFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBDb250ZW50Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5nbERhdGF0YWJsZUNlbGwgfSBmcm9tICcuL2NlbGwnO1xuaW1wb3J0IHsgTmdsRGF0YXRhYmxlSGVhZGluZ1RlbXBsYXRlIH0gZnJvbSAnLi9oZWFkaW5nJztcbmltcG9ydCB7IElucHV0Qm9vbGVhbiB9IGZyb20gJy4uL3V0aWwvY29udmVydCc7XG5cbkBEaXJlY3RpdmUoe1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6ZGlyZWN0aXZlLXNlbGVjdG9yXG4gIHNlbGVjdG9yOiAnbmdsLWRhdGF0YWJsZS1jb2x1bW4nLFxufSlcbmV4cG9ydCBjbGFzcyBOZ2xEYXRhdGFibGVDb2x1bW4ge1xuICBASW5wdXQoKSBoZWFkaW5nOiBzdHJpbmc7XG5cbiAgQElucHV0KCkga2V5OiBzdHJpbmc7XG5cbiAgQElucHV0KCkgaGVhZENsYXNzOiBhbnk7XG5cbiAgQElucHV0KCkgY2VsbENsYXNzOiBhbnk7XG5cbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHNvcnRhYmxlID0gZmFsc2U7XG5cbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHRydW5jYXRlID0gZmFsc2U7XG5cbiAgQENvbnRlbnRDaGlsZChOZ2xEYXRhdGFibGVDZWxsKSBjZWxsVHBsOiBOZ2xEYXRhdGFibGVDZWxsO1xuXG4gIEBDb250ZW50Q2hpbGQoTmdsRGF0YXRhYmxlSGVhZGluZ1RlbXBsYXRlKSBoZWFkaW5nVHBsOiBOZ2xEYXRhdGFibGVIZWFkaW5nVGVtcGxhdGU7XG59XG4iXX0=
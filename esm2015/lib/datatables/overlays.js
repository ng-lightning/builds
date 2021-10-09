import { Directive, TemplateRef } from '@angular/core';
export class NglDatatableLoadingOverlay {
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
export class NglDatatableNoRowsOverlay {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3ZlcmxheXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1saWdodG5pbmcvc3JjL2xpYi9kYXRhdGFibGVzL292ZXJsYXlzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBR3ZELE1BQU0sT0FBTywwQkFBMEI7SUFDckMsWUFBbUIsV0FBNkI7UUFBN0IsZ0JBQVcsR0FBWCxXQUFXLENBQWtCO0lBQUcsQ0FBQzs7O1lBRnJELFNBQVMsU0FBQyxFQUFDLFFBQVEsRUFBRSxxQkFBcUIsRUFBQzs7O1lBRnhCLFdBQVc7O0FBUS9CLE1BQU0sT0FBTyx5QkFBeUI7SUFDcEMsWUFBbUIsV0FBNkI7UUFBN0IsZ0JBQVcsR0FBWCxXQUFXLENBQWtCO0lBQUcsQ0FBQzs7O1lBRnJELFNBQVMsU0FBQyxFQUFDLFFBQVEsRUFBRSxvQkFBb0IsRUFBQzs7O1lBUHZCLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe3NlbGVjdG9yOiAnW25nbExvYWRpbmdPdmVybGF5XSd9KVxuZXhwb3J0IGNsYXNzIE5nbERhdGF0YWJsZUxvYWRpbmdPdmVybGF5IHtcbiAgY29uc3RydWN0b3IocHVibGljIHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxhbnk+KSB7fVxufVxuXG5ARGlyZWN0aXZlKHtzZWxlY3RvcjogJ1tuZ2xOb1Jvd3NPdmVybGF5XSd9KVxuZXhwb3J0IGNsYXNzIE5nbERhdGF0YWJsZU5vUm93c092ZXJsYXkge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPGFueT4pIHt9XG59XG4iXX0=
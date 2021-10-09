import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { A11yModule } from '@angular/cdk/a11y';
import { OverlayModule } from '@angular/cdk/overlay';
import { NglIconsModule } from '../icons/module';
import { NglModal } from './modal';
import { NglModalHeaderTemplate, NglModalTaglineTemplate, NglModalFooterTemplate } from './templates';
const NGL_MODAL_DIRECTIVES = [
    NglModal,
    NglModalFooterTemplate,
    NglModalHeaderTemplate,
    NglModalTaglineTemplate,
];
export class NglModalsModule {
}
NglModalsModule.decorators = [
    { type: NgModule, args: [{
                declarations: [NGL_MODAL_DIRECTIVES],
                exports: [NGL_MODAL_DIRECTIVES],
                imports: [CommonModule, A11yModule, OverlayModule, NglIconsModule],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctbGlnaHRuaW5nL3NyYy9saWIvbW9kYWxzL21vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDL0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUVqRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sU0FBUyxDQUFDO0FBQ25DLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSx1QkFBdUIsRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUV0RyxNQUFNLG9CQUFvQixHQUFHO0lBQzNCLFFBQVE7SUFDUixzQkFBc0I7SUFDdEIsc0JBQXNCO0lBQ3RCLHVCQUF1QjtDQUN4QixDQUFDO0FBT0YsTUFBTSxPQUFPLGVBQWU7OztZQUwzQixRQUFRLFNBQUM7Z0JBQ1IsWUFBWSxFQUFFLENBQUMsb0JBQW9CLENBQUM7Z0JBQ3BDLE9BQU8sRUFBRSxDQUFDLG9CQUFvQixDQUFDO2dCQUMvQixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsVUFBVSxFQUFFLGFBQWEsRUFBRSxjQUFjLENBQUM7YUFDbkUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEExMXlNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvYTExeSc7XG5pbXBvcnQgeyBPdmVybGF5TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xuaW1wb3J0IHsgTmdsSWNvbnNNb2R1bGUgfSBmcm9tICcuLi9pY29ucy9tb2R1bGUnO1xuXG5pbXBvcnQgeyBOZ2xNb2RhbCB9IGZyb20gJy4vbW9kYWwnO1xuaW1wb3J0IHsgTmdsTW9kYWxIZWFkZXJUZW1wbGF0ZSwgTmdsTW9kYWxUYWdsaW5lVGVtcGxhdGUsIE5nbE1vZGFsRm9vdGVyVGVtcGxhdGUgfSBmcm9tICcuL3RlbXBsYXRlcyc7XG5cbmNvbnN0IE5HTF9NT0RBTF9ESVJFQ1RJVkVTID0gW1xuICBOZ2xNb2RhbCxcbiAgTmdsTW9kYWxGb290ZXJUZW1wbGF0ZSxcbiAgTmdsTW9kYWxIZWFkZXJUZW1wbGF0ZSxcbiAgTmdsTW9kYWxUYWdsaW5lVGVtcGxhdGUsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtOR0xfTU9EQUxfRElSRUNUSVZFU10sXG4gIGV4cG9ydHM6IFtOR0xfTU9EQUxfRElSRUNUSVZFU10sXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIEExMXlNb2R1bGUsIE92ZXJsYXlNb2R1bGUsIE5nbEljb25zTW9kdWxlXSxcbn0pXG5leHBvcnQgY2xhc3MgTmdsTW9kYWxzTW9kdWxlIHt9XG4iXX0=
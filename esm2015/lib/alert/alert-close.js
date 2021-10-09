import { Directive } from '@angular/core';
import { NglAlert } from './alert';
import { NglCommonNotifyClose } from '../common/notify/close';
export class NglAlertClose extends NglCommonNotifyClose {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQtY2xvc2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1saWdodG5pbmcvc3JjL2xpYi9hbGVydC9hbGVydC1jbG9zZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFDbkMsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFNOUQsTUFBTSxPQUFPLGFBQWMsU0FBUSxvQkFBb0I7SUFFckQsWUFBWSxLQUFlO1FBQ3pCLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNmLENBQUM7OztZQVJGLFNBQVMsU0FBQztnQkFDVCw4Q0FBOEM7Z0JBQzlDLFFBQVEsRUFBRSxrQkFBa0I7YUFDN0I7OztZQU5RLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5nbEFsZXJ0IH0gZnJvbSAnLi9hbGVydCc7XG5pbXBvcnQgeyBOZ2xDb21tb25Ob3RpZnlDbG9zZSB9IGZyb20gJy4uL2NvbW1vbi9ub3RpZnkvY2xvc2UnO1xuXG5ARGlyZWN0aXZlKHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmRpcmVjdGl2ZS1zZWxlY3RvclxuICBzZWxlY3RvcjogJ25nbC1hbGVydFtjbG9zZV0nLFxufSlcbmV4cG9ydCBjbGFzcyBOZ2xBbGVydENsb3NlIGV4dGVuZHMgTmdsQ29tbW9uTm90aWZ5Q2xvc2Uge1xuXG4gIGNvbnN0cnVjdG9yKGFsZXJ0OiBOZ2xBbGVydCkge1xuICAgIHN1cGVyKGFsZXJ0KTtcbiAgfVxuXG59XG4iXX0=
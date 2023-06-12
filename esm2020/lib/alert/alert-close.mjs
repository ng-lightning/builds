import { Directive } from '@angular/core';
import { NglCommonNotifyClose } from '../common/notify/close';
import * as i0 from "@angular/core";
import * as i1 from "./alert";
export class NglAlertClose extends NglCommonNotifyClose {
    constructor(alert) {
        super(alert);
    }
}
NglAlertClose.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglAlertClose, deps: [{ token: i1.NglAlert }], target: i0.ɵɵFactoryTarget.Directive });
NglAlertClose.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.2.9", type: NglAlertClose, selector: "ngl-alert[close]", usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglAlertClose, decorators: [{
            type: Directive,
            args: [{
                    // eslint-disable-next-line @angular-eslint/directive-selector
                    selector: 'ngl-alert[close]',
                }]
        }], ctorParameters: function () { return [{ type: i1.NglAlert }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQtY2xvc2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1saWdodG5pbmcvc3JjL2xpYi9hbGVydC9hbGVydC1jbG9zZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTFDLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDOzs7QUFNOUQsTUFBTSxPQUFPLGFBQWMsU0FBUSxvQkFBb0I7SUFFckQsWUFBWSxLQUFlO1FBQ3pCLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNmLENBQUM7OzBHQUpVLGFBQWE7OEZBQWIsYUFBYTsyRkFBYixhQUFhO2tCQUp6QixTQUFTO21CQUFDO29CQUNULDhEQUE4RDtvQkFDOUQsUUFBUSxFQUFFLGtCQUFrQjtpQkFDN0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5nbEFsZXJ0IH0gZnJvbSAnLi9hbGVydCc7XG5pbXBvcnQgeyBOZ2xDb21tb25Ob3RpZnlDbG9zZSB9IGZyb20gJy4uL2NvbW1vbi9ub3RpZnkvY2xvc2UnO1xuXG5ARGlyZWN0aXZlKHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBhbmd1bGFyLWVzbGludC9kaXJlY3RpdmUtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICduZ2wtYWxlcnRbY2xvc2VdJyxcbn0pXG5leHBvcnQgY2xhc3MgTmdsQWxlcnRDbG9zZSBleHRlbmRzIE5nbENvbW1vbk5vdGlmeUNsb3NlIHtcblxuICBjb25zdHJ1Y3RvcihhbGVydDogTmdsQWxlcnQpIHtcbiAgICBzdXBlcihhbGVydCk7XG4gIH1cblxufVxuIl19
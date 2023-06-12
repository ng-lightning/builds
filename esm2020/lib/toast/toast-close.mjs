import { Directive } from '@angular/core';
import { NglCommonNotifyClose } from '../common/notify/close';
import * as i0 from "@angular/core";
import * as i1 from "./toast";
export class NglToastClose extends NglCommonNotifyClose {
    constructor(toast) {
        super(toast);
    }
}
NglToastClose.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglToastClose, deps: [{ token: i1.NglToast }], target: i0.ɵɵFactoryTarget.Directive });
NglToastClose.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.2.9", type: NglToastClose, selector: "ngl-toast[close],ngl-toast[nglClose]", usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglToastClose, decorators: [{
            type: Directive,
            args: [{
                    selector: 'ngl-toast[close],ngl-toast[nglClose]',
                }]
        }], ctorParameters: function () { return [{ type: i1.NglToast }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3QtY2xvc2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1saWdodG5pbmcvc3JjL2xpYi90b2FzdC90b2FzdC1jbG9zZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTFDLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDOzs7QUFLOUQsTUFBTSxPQUFPLGFBQWMsU0FBUSxvQkFBb0I7SUFFckQsWUFBWSxLQUFlO1FBQ3pCLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNmLENBQUM7OzBHQUpVLGFBQWE7OEZBQWIsYUFBYTsyRkFBYixhQUFhO2tCQUh6QixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxzQ0FBc0M7aUJBQ2pEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ2xUb2FzdCB9IGZyb20gJy4vdG9hc3QnO1xuaW1wb3J0IHsgTmdsQ29tbW9uTm90aWZ5Q2xvc2UgfSBmcm9tICcuLi9jb21tb24vbm90aWZ5L2Nsb3NlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnbmdsLXRvYXN0W2Nsb3NlXSxuZ2wtdG9hc3RbbmdsQ2xvc2VdJyxcbn0pXG5leHBvcnQgY2xhc3MgTmdsVG9hc3RDbG9zZSBleHRlbmRzIE5nbENvbW1vbk5vdGlmeUNsb3NlIHtcblxuICBjb25zdHJ1Y3Rvcih0b2FzdDogTmdsVG9hc3QpIHtcbiAgICBzdXBlcih0b2FzdCk7XG4gIH1cblxufVxuIl19
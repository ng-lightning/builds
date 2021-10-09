import { Directive } from '@angular/core';
import { NglToast } from './toast';
import { NglCommonNotifyClose } from '../common/notify/close';
export class NglToastClose extends NglCommonNotifyClose {
    constructor(toast) {
        super(toast);
    }
}
NglToastClose.decorators = [
    { type: Directive, args: [{
                selector: 'ngl-toast[close],ngl-toast[nglClose]',
            },] }
];
NglToastClose.ctorParameters = () => [
    { type: NglToast }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3QtY2xvc2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1saWdodG5pbmcvc3JjL2xpYi90b2FzdC90b2FzdC1jbG9zZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFDbkMsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFLOUQsTUFBTSxPQUFPLGFBQWMsU0FBUSxvQkFBb0I7SUFFckQsWUFBWSxLQUFlO1FBQ3pCLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNmLENBQUM7OztZQVBGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsc0NBQXNDO2FBQ2pEOzs7WUFMUSxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ2xUb2FzdCB9IGZyb20gJy4vdG9hc3QnO1xuaW1wb3J0IHsgTmdsQ29tbW9uTm90aWZ5Q2xvc2UgfSBmcm9tICcuLi9jb21tb24vbm90aWZ5L2Nsb3NlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnbmdsLXRvYXN0W2Nsb3NlXSxuZ2wtdG9hc3RbbmdsQ2xvc2VdJyxcbn0pXG5leHBvcnQgY2xhc3MgTmdsVG9hc3RDbG9zZSBleHRlbmRzIE5nbENvbW1vbk5vdGlmeUNsb3NlIHtcblxuICBjb25zdHJ1Y3Rvcih0b2FzdDogTmdsVG9hc3QpIHtcbiAgICBzdXBlcih0b2FzdCk7XG4gIH1cblxufVxuIl19
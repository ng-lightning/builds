import { OnChanges } from '@angular/core';
import * as i0 from "@angular/core";
export declare class NglDatepickerWeekdays implements OnChanges {
    dayNamesShort: string[];
    dayNamesLong: string[];
    firstDayOfWeek: number;
    weekdays: any[];
    ngOnChanges(changes?: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NglDatepickerWeekdays, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NglDatepickerWeekdays, "tr[nglWeekdays]", never, { "dayNamesShort": "dayNamesShort"; "dayNamesLong": "dayNamesLong"; "firstDayOfWeek": "firstDayOfWeek"; }, {}, never, never, false, never>;
}

import { Injectable } from '@angular/core';
import { format as dateFnsFormat, parse as dateFnsParse } from 'date-fns';
import { NglDateAdapterBase } from './adapter';
import * as i0 from "@angular/core";
const PATTERNS = {
    'big-endian': 'yyyy/MM/dd',
    'little-endian': 'dd/MM/yyyy',
    'middle-endian': 'MM/dd/yyyy',
};
export class NglDateAdapter extends NglDateAdapterBase {
    parse(value, format) {
        const date = dateFnsParse(value, format, new Date());
        return this.isValidDate(date) ? date : null;
    }
    format(date, format) {
        return dateFnsFormat(date, format);
    }
    pattern(name, delimiter) {
        const pattern = PATTERNS[name];
        return (delimiter && delimiter !== '/') ? pattern.replace(/\//g, delimiter) : pattern;
    }
    isValidDate(value) {
        const dateWrapper = new Date(value);
        return !isNaN(dateWrapper.getDate());
    }
}
NglDateAdapter.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglDateAdapter, deps: null, target: i0.ɵɵFactoryTarget.Injectable });
NglDateAdapter.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglDateAdapter });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NglDateAdapter, decorators: [{
            type: Injectable
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1mbnMtYWRhcHRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nLWxpZ2h0bmluZy9zcmMvbGliL2RhdGVwaWNrZXJzL2FkYXB0ZXJzL2RhdGUtZm5zLWFkYXB0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxJQUFJLGFBQWEsRUFBRSxLQUFLLElBQUksWUFBWSxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBQzFFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLFdBQVcsQ0FBQzs7QUFFL0MsTUFBTSxRQUFRLEdBQUc7SUFDZixZQUFZLEVBQUUsWUFBWTtJQUMxQixlQUFlLEVBQUUsWUFBWTtJQUM3QixlQUFlLEVBQUUsWUFBWTtDQUM5QixDQUFDO0FBR0YsTUFBTSxPQUFPLGNBQWUsU0FBUSxrQkFBa0I7SUFFcEQsS0FBSyxDQUFDLEtBQWEsRUFBRSxNQUFjO1FBQ2pDLE1BQU0sSUFBSSxHQUFHLFlBQVksQ0FBQyxLQUFLLEVBQUUsTUFBTSxFQUFFLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQztRQUNyRCxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQzlDLENBQUM7SUFFRCxNQUFNLENBQUMsSUFBVSxFQUFFLE1BQWM7UUFDL0IsT0FBTyxhQUFhLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFRCxPQUFPLENBQUMsSUFBc0QsRUFBRSxTQUFpQjtRQUMvRSxNQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDL0IsT0FBTyxDQUFDLFNBQVMsSUFBSSxTQUFTLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUM7SUFDeEYsQ0FBQztJQUVPLFdBQVcsQ0FBQyxLQUFLO1FBQ3ZCLE1BQU0sV0FBVyxHQUFHLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3BDLE9BQU8sQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7SUFDdkMsQ0FBQzs7MkdBbkJVLGNBQWM7K0dBQWQsY0FBYzsyRkFBZCxjQUFjO2tCQUQxQixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgZm9ybWF0IGFzIGRhdGVGbnNGb3JtYXQsIHBhcnNlIGFzIGRhdGVGbnNQYXJzZSB9IGZyb20gJ2RhdGUtZm5zJztcbmltcG9ydCB7IE5nbERhdGVBZGFwdGVyQmFzZSB9IGZyb20gJy4vYWRhcHRlcic7XG5cbmNvbnN0IFBBVFRFUk5TID0ge1xuICAnYmlnLWVuZGlhbic6ICd5eXl5L01NL2RkJyxcbiAgJ2xpdHRsZS1lbmRpYW4nOiAnZGQvTU0veXl5eScsXG4gICdtaWRkbGUtZW5kaWFuJzogJ01NL2RkL3l5eXknLFxufTtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE5nbERhdGVBZGFwdGVyIGV4dGVuZHMgTmdsRGF0ZUFkYXB0ZXJCYXNlIHtcblxuICBwYXJzZSh2YWx1ZTogc3RyaW5nLCBmb3JtYXQ6IHN0cmluZyk6IERhdGUgfCBudWxsIHtcbiAgICBjb25zdCBkYXRlID0gZGF0ZUZuc1BhcnNlKHZhbHVlLCBmb3JtYXQsIG5ldyBEYXRlKCkpO1xuICAgIHJldHVybiB0aGlzLmlzVmFsaWREYXRlKGRhdGUpID8gZGF0ZSA6IG51bGw7XG4gIH1cblxuICBmb3JtYXQoZGF0ZTogRGF0ZSwgZm9ybWF0OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiBkYXRlRm5zRm9ybWF0KGRhdGUsIGZvcm1hdCk7XG4gIH1cblxuICBwYXR0ZXJuKG5hbWU6ICdiaWctZW5kaWFuJyB8ICdsaXR0bGUtZW5kaWFuJyB8ICdtaWRkbGUtZW5kaWFuJywgZGVsaW1pdGVyOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGNvbnN0IHBhdHRlcm4gPSBQQVRURVJOU1tuYW1lXTtcbiAgICByZXR1cm4gKGRlbGltaXRlciAmJiBkZWxpbWl0ZXIgIT09ICcvJykgPyBwYXR0ZXJuLnJlcGxhY2UoL1xcLy9nLCBkZWxpbWl0ZXIpIDogcGF0dGVybjtcbiAgfVxuXG4gIHByaXZhdGUgaXNWYWxpZERhdGUodmFsdWUpOiBib29sZWFuIHtcbiAgICBjb25zdCBkYXRlV3JhcHBlciA9IG5ldyBEYXRlKHZhbHVlKTtcbiAgICByZXR1cm4gIWlzTmFOKGRhdGVXcmFwcGVyLmdldERhdGUoKSk7XG4gIH1cblxufVxuIl19
export function OnChange(callback = 'nglOnPropertyChange') {
    const cachedValueKey = Symbol();
    const isFirstChangeKey = Symbol();
    return (target, key) => {
        Object.defineProperty(target, key, {
            set: function (value) {
                // change status of "isFirstChange"
                if (this[isFirstChangeKey] === undefined) {
                    this[isFirstChangeKey] = true;
                }
                else {
                    this[isFirstChangeKey] = false;
                }
                // No operation if new value is same as old value
                if (!this[isFirstChangeKey] && this[cachedValueKey] === value) {
                    return;
                }
                const oldValue = this[cachedValueKey];
                this[cachedValueKey] = value;
                const simpleChange = {
                    firstChange: this[isFirstChangeKey],
                    previousValue: oldValue,
                    currentValue: this[cachedValueKey],
                    isFirstChange: () => this[isFirstChangeKey],
                };
                this[callback](key, this[cachedValueKey], simpleChange);
            },
            get: function () {
                return this[cachedValueKey];
            },
        });
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvcGVydHktd2F0Y2gtZGVjb3JhdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctbGlnaHRuaW5nL3NyYy9saWIvdXRpbC9wcm9wZXJ0eS13YXRjaC1kZWNvcmF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBT0EsTUFBTSxVQUFVLFFBQVEsQ0FBVSxRQUFRLEdBQUcscUJBQXFCO0lBQ2hFLE1BQU0sY0FBYyxHQUFHLE1BQU0sRUFBRSxDQUFDO0lBQ2hDLE1BQU0sZ0JBQWdCLEdBQUcsTUFBTSxFQUFFLENBQUM7SUFDbEMsT0FBTyxDQUFDLE1BQVcsRUFBRSxHQUFnQixFQUFFLEVBQUU7UUFDdkMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFO1lBQ2pDLEdBQUcsRUFBRSxVQUFVLEtBQUs7Z0JBQ2xCLG1DQUFtQztnQkFDbkMsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxTQUFTLEVBQUU7b0JBQ3hDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLElBQUksQ0FBQztpQkFDL0I7cUJBQU07b0JBQ0wsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsS0FBSyxDQUFDO2lCQUNoQztnQkFDRCxpREFBaUQ7Z0JBQ2pELElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssS0FBSyxFQUFFO29CQUM3RCxPQUFPO2lCQUNSO2dCQUNELE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztnQkFDdEMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLEtBQUssQ0FBQztnQkFDN0IsTUFBTSxZQUFZLEdBQW9CO29CQUNwQyxXQUFXLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDO29CQUNuQyxhQUFhLEVBQUUsUUFBUTtvQkFDdkIsWUFBWSxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUM7b0JBQ2xDLGFBQWEsRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7aUJBQzVDLENBQUM7Z0JBQ0YsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLEVBQUUsWUFBWSxDQUFDLENBQUM7WUFDMUQsQ0FBQztZQUNELEdBQUcsRUFBRTtnQkFDSCxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUM5QixDQUFDO1NBQ0YsQ0FBQyxDQUFDO0lBQ0wsQ0FBQyxDQUFDO0FBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBpbnRlcmZhY2UgU2ltcGxlQ2hhbmdlPFQ+IHtcbiAgZmlyc3RDaGFuZ2U6IGJvb2xlYW47XG4gIHByZXZpb3VzVmFsdWU6IFQ7XG4gIGN1cnJlbnRWYWx1ZTogVDtcbiAgaXNGaXJzdENoYW5nZTogKCkgPT4gYm9vbGVhbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIE9uQ2hhbmdlPFQgPSBhbnk+KGNhbGxiYWNrID0gJ25nbE9uUHJvcGVydHlDaGFuZ2UnKSB7XG4gIGNvbnN0IGNhY2hlZFZhbHVlS2V5ID0gU3ltYm9sKCk7XG4gIGNvbnN0IGlzRmlyc3RDaGFuZ2VLZXkgPSBTeW1ib2woKTtcbiAgcmV0dXJuICh0YXJnZXQ6IGFueSwga2V5OiBQcm9wZXJ0eUtleSkgPT4ge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwge1xuICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgLy8gY2hhbmdlIHN0YXR1cyBvZiBcImlzRmlyc3RDaGFuZ2VcIlxuICAgICAgICBpZiAodGhpc1tpc0ZpcnN0Q2hhbmdlS2V5XSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpc1tpc0ZpcnN0Q2hhbmdlS2V5XSA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpc1tpc0ZpcnN0Q2hhbmdlS2V5XSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIC8vIE5vIG9wZXJhdGlvbiBpZiBuZXcgdmFsdWUgaXMgc2FtZSBhcyBvbGQgdmFsdWVcbiAgICAgICAgaWYgKCF0aGlzW2lzRmlyc3RDaGFuZ2VLZXldICYmIHRoaXNbY2FjaGVkVmFsdWVLZXldID09PSB2YWx1ZSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBvbGRWYWx1ZSA9IHRoaXNbY2FjaGVkVmFsdWVLZXldO1xuICAgICAgICB0aGlzW2NhY2hlZFZhbHVlS2V5XSA9IHZhbHVlO1xuICAgICAgICBjb25zdCBzaW1wbGVDaGFuZ2U6IFNpbXBsZUNoYW5nZTxUPiA9IHtcbiAgICAgICAgICBmaXJzdENoYW5nZTogdGhpc1tpc0ZpcnN0Q2hhbmdlS2V5XSxcbiAgICAgICAgICBwcmV2aW91c1ZhbHVlOiBvbGRWYWx1ZSxcbiAgICAgICAgICBjdXJyZW50VmFsdWU6IHRoaXNbY2FjaGVkVmFsdWVLZXldLFxuICAgICAgICAgIGlzRmlyc3RDaGFuZ2U6ICgpID0+IHRoaXNbaXNGaXJzdENoYW5nZUtleV0sXG4gICAgICAgIH07XG4gICAgICAgIHRoaXNbY2FsbGJhY2tdKGtleSwgdGhpc1tjYWNoZWRWYWx1ZUtleV0sIHNpbXBsZUNoYW5nZSk7XG4gICAgICB9LFxuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzW2NhY2hlZFZhbHVlS2V5XTtcbiAgICAgIH0sXG4gICAgfSk7XG4gIH07XG59XG4iXX0=
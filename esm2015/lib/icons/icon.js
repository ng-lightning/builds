import { Component, Input, ChangeDetectionStrategy, ElementRef } from '@angular/core';
import { HostService } from '../common/host/host.service';
import { ngClassCombine } from '../util/util';
import { normalizeIconName } from './util';
export class NglIcon {
    constructor(el, hostService) {
        this.el = el;
        this.hostService = hostService;
        /**
         * The appearance of a `utility` icon.
         */
        this.variant = 'default';
    }
    set iconName(iconName) {
        this._iconName = normalizeIconName(iconName);
    }
    get iconName() {
        return this._iconName;
    }
    ngOnInit() {
        this.setHostClass();
    }
    ngOnChanges() {
        this.setHostClass();
    }
    svgClasses() {
        const [category] = this.iconName.split(':');
        const isUtility = category === 'utility';
        const isDefaultOrInverse = this.variant === 'default' || this.variant === 'inverse';
        const classes = {
            [`slds-icon_${this.size}`]: !!this.size && this.size !== 'medium',
            [`slds-icon-text-${isDefaultOrInverse ? 'default' : this.variant}`]: isDefaultOrInverse ?
                (this.variant === 'default' ? isUtility : !isUtility)
                : !!this.variant,
        };
        return ngClassCombine(this.svgClass, classes);
    }
    setHostClass() {
        const [category, icon] = this.iconName.split(':');
        const kebabCaseName = icon.replace(/_/g, '-');
        this.hostService.updateClass(this.el, {
            [`slds-icon_container`]: category !== 'utility',
            [`slds-icon_container_circle`]: category === 'action',
            [`slds-icon-${category}-${kebabCaseName}`]: category !== 'utility' && category !== 'doctype',
        });
    }
}
NglIcon.decorators = [
    { type: Component, args: [{
                selector: 'ngl-icon, [ngl-icon]',
                template: "\n<svg class=\"slds-icon\" [nglIconName]=\"iconName\" [ngClass]=\"svgClasses()\"></svg>\n<ng-content></ng-content><span class=\"slds-assistive-text\" *ngIf=\"alternativeText\">{{alternativeText}}</span>",
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [HostService]
            },] }
];
NglIcon.ctorParameters = () => [
    { type: ElementRef },
    { type: HostService }
];
NglIcon.propDecorators = {
    iconName: [{ type: Input }],
    variant: [{ type: Input }],
    size: [{ type: Input }],
    alternativeText: [{ type: Input }],
    svgClass: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nLWxpZ2h0bmluZy9zcmMvbGliL2ljb25zL2ljb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsdUJBQXVCLEVBQXFCLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6RyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUM5QyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFRM0MsTUFBTSxPQUFPLE9BQU87SUErQmxCLFlBQW9CLEVBQWMsRUFBVSxXQUF3QjtRQUFoRCxPQUFFLEdBQUYsRUFBRSxDQUFZO1FBQVUsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUF0QnBFOztXQUVHO1FBQ00sWUFBTyxHQUFpRSxTQUFTLENBQUM7SUFtQnBCLENBQUM7SUE3QnhFLElBQWEsUUFBUSxDQUFDLFFBQWdCO1FBQ3BDLElBQUksQ0FBQyxTQUFTLEdBQUcsaUJBQWlCLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUNELElBQUksUUFBUTtRQUNWLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN4QixDQUFDO0lBMEJELFFBQVE7UUFDTixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUVELFVBQVU7UUFDUixNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDNUMsTUFBTSxTQUFTLEdBQUcsUUFBUSxLQUFLLFNBQVMsQ0FBQztRQUN6QyxNQUFNLGtCQUFrQixHQUFHLElBQUksQ0FBQyxPQUFPLEtBQUssU0FBUyxJQUFJLElBQUksQ0FBQyxPQUFPLEtBQUssU0FBUyxDQUFDO1FBRXBGLE1BQU0sT0FBTyxHQUFHO1lBQ2QsQ0FBQyxhQUFhLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssUUFBUTtZQUNqRSxDQUFDLGtCQUFrQixrQkFBa0IsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO2dCQUN2RixDQUFDLElBQUksQ0FBQyxPQUFPLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO2dCQUNyRCxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPO1NBQ25CLENBQUM7UUFFRixPQUFPLGNBQWMsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFFTyxZQUFZO1FBQ2xCLE1BQU0sQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDbEQsTUFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFFOUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRTtZQUNwQyxDQUFDLHFCQUFxQixDQUFDLEVBQUUsUUFBUSxLQUFLLFNBQVM7WUFDL0MsQ0FBQyw0QkFBNEIsQ0FBQyxFQUFFLFFBQVEsS0FBSyxRQUFRO1lBQ3JELENBQUMsYUFBYSxRQUFRLElBQUksYUFBYSxFQUFFLENBQUMsRUFBRSxRQUFRLEtBQUssU0FBUyxJQUFJLFFBQVEsS0FBSyxTQUFTO1NBQzdGLENBQUMsQ0FBQztJQUNMLENBQUM7OztZQXZFRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHNCQUFzQjtnQkFDaEMsc05BQTBCO2dCQUMxQixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsU0FBUyxFQUFFLENBQUMsV0FBVyxDQUFDO2FBQ3pCOzs7WUFWc0UsVUFBVTtZQUN4RSxXQUFXOzs7dUJBWWpCLEtBQUs7c0JBVUwsS0FBSzttQkFLTCxLQUFLOzhCQUtMLEtBQUs7dUJBS0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBPbkluaXQsIE9uQ2hhbmdlcywgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSG9zdFNlcnZpY2UgfSBmcm9tICcuLi9jb21tb24vaG9zdC9ob3N0LnNlcnZpY2UnO1xuaW1wb3J0IHsgbmdDbGFzc0NvbWJpbmUgfSBmcm9tICcuLi91dGlsL3V0aWwnO1xuaW1wb3J0IHsgbm9ybWFsaXplSWNvbk5hbWUgfSBmcm9tICcuL3V0aWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZ2wtaWNvbiwgW25nbC1pY29uXScsXG4gIHRlbXBsYXRlVXJsOiAnLi9pY29uLmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgcHJvdmlkZXJzOiBbSG9zdFNlcnZpY2VdLFxufSlcbmV4cG9ydCBjbGFzcyBOZ2xJY29uIGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuXG4gIEBJbnB1dCgpIHNldCBpY29uTmFtZShpY29uTmFtZTogc3RyaW5nKSB7XG4gICAgdGhpcy5faWNvbk5hbWUgPSBub3JtYWxpemVJY29uTmFtZShpY29uTmFtZSk7XG4gIH1cbiAgZ2V0IGljb25OYW1lKCkge1xuICAgIHJldHVybiB0aGlzLl9pY29uTmFtZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgYXBwZWFyYW5jZSBvZiBhIGB1dGlsaXR5YCBpY29uLlxuICAgKi9cbiAgQElucHV0KCkgdmFyaWFudDogJ2RlZmF1bHQnIHwgJ3dhcm5pbmcnIHwgJ2Vycm9yJyB8ICdsaWdodCcgfCAnaW52ZXJzZScgfCBudWxsID0gJ2RlZmF1bHQnO1xuXG4gIC8qKlxuICAgKiBUaGUgc2l6ZSBvZiB0aGUgaWNvbi5cbiAgICovXG4gIEBJbnB1dCgpIHNpemU6ICd4eC1zbWFsbCcgfCAneC1zbWFsbCcgfCAnc21hbGwnIHwgJ21lZGl1bScgfCAnbGFyZ2UnO1xuXG4gIC8qKlxuICAgKiBUZXh0IHVzZWQgdG8gZGVzY3JpYmUgdGhlIGljb24gZm9yIGFjY2Vzc2liaWxpdHkuXG4gICAqL1xuICBASW5wdXQoKSBhbHRlcm5hdGl2ZVRleHQ6IHN0cmluZztcblxuICAvKipcbiAgICogQ1NTIGNsYXNzZXMgdGhhdCBhcmUgYXBwbGllZCB0byB0aGUgU1ZHLlxuICAgKi9cbiAgQElucHV0KCkgc3ZnQ2xhc3M6IHN0cmluZyB8IHN0cmluZ1tdIHwgU2V0PHN0cmluZz4gfCB7IFtrbGFzczogc3RyaW5nXTogYW55IH07XG5cbiAgcHJpdmF0ZSBfaWNvbk5hbWU6IHN0cmluZztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmLCBwcml2YXRlIGhvc3RTZXJ2aWNlOiBIb3N0U2VydmljZSkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnNldEhvc3RDbGFzcygpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKSB7XG4gICAgdGhpcy5zZXRIb3N0Q2xhc3MoKTtcbiAgfVxuXG4gIHN2Z0NsYXNzZXMoKSB7XG4gICAgY29uc3QgW2NhdGVnb3J5XSA9IHRoaXMuaWNvbk5hbWUuc3BsaXQoJzonKTtcbiAgICBjb25zdCBpc1V0aWxpdHkgPSBjYXRlZ29yeSA9PT0gJ3V0aWxpdHknO1xuICAgIGNvbnN0IGlzRGVmYXVsdE9ySW52ZXJzZSA9IHRoaXMudmFyaWFudCA9PT0gJ2RlZmF1bHQnIHx8IHRoaXMudmFyaWFudCA9PT0gJ2ludmVyc2UnO1xuXG4gICAgY29uc3QgY2xhc3NlcyA9IHtcbiAgICAgIFtgc2xkcy1pY29uXyR7dGhpcy5zaXplfWBdOiAhIXRoaXMuc2l6ZSAmJiB0aGlzLnNpemUgIT09ICdtZWRpdW0nLFxuICAgICAgW2BzbGRzLWljb24tdGV4dC0ke2lzRGVmYXVsdE9ySW52ZXJzZSA/ICdkZWZhdWx0JyA6IHRoaXMudmFyaWFudH1gXTogaXNEZWZhdWx0T3JJbnZlcnNlID9cbiAgICAgICAgKHRoaXMudmFyaWFudCA9PT0gJ2RlZmF1bHQnID8gaXNVdGlsaXR5IDogIWlzVXRpbGl0eSlcbiAgICAgICAgOiAhIXRoaXMudmFyaWFudCxcbiAgICB9O1xuXG4gICAgcmV0dXJuIG5nQ2xhc3NDb21iaW5lKHRoaXMuc3ZnQ2xhc3MsIGNsYXNzZXMpO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRIb3N0Q2xhc3MoKSB7XG4gICAgY29uc3QgW2NhdGVnb3J5LCBpY29uXSA9IHRoaXMuaWNvbk5hbWUuc3BsaXQoJzonKTtcbiAgICBjb25zdCBrZWJhYkNhc2VOYW1lID0gaWNvbi5yZXBsYWNlKC9fL2csICctJyk7XG5cbiAgICB0aGlzLmhvc3RTZXJ2aWNlLnVwZGF0ZUNsYXNzKHRoaXMuZWwsIHtcbiAgICAgIFtgc2xkcy1pY29uX2NvbnRhaW5lcmBdOiBjYXRlZ29yeSAhPT0gJ3V0aWxpdHknLFxuICAgICAgW2BzbGRzLWljb25fY29udGFpbmVyX2NpcmNsZWBdOiBjYXRlZ29yeSA9PT0gJ2FjdGlvbicsXG4gICAgICBbYHNsZHMtaWNvbi0ke2NhdGVnb3J5fS0ke2tlYmFiQ2FzZU5hbWV9YF06IGNhdGVnb3J5ICE9PSAndXRpbGl0eScgJiYgY2F0ZWdvcnkgIT09ICdkb2N0eXBlJyxcbiAgICB9KTtcbiAgfVxuXG59XG4iXX0=
import { Directive, Inject, Input } from '@angular/core';
export class NglCommonNotifyClose {
    constructor(host) {
        this.host = host;
        this.host.dismissible = true;
    }
    set dismissible(dismissible) {
        this.host.dismissible = dismissible;
    }
}
NglCommonNotifyClose.decorators = [
    { type: Directive }
];
NglCommonNotifyClose.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: ['host',] }] }
];
NglCommonNotifyClose.propDecorators = {
    dismissible: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xvc2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1saWdodG5pbmcvc3JjL2xpYi9jb21tb24vbm90aWZ5L2Nsb3NlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6RCxNQUFNLE9BQWdCLG9CQUFvQjtJQU14QyxZQUFvQyxJQUFTO1FBQVQsU0FBSSxHQUFKLElBQUksQ0FBSztRQUMzQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7SUFDL0IsQ0FBQztJQU5ELElBQWEsV0FBVyxDQUFDLFdBQW9CO1FBQzNDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztJQUN0QyxDQUFDOzs7WUFMRixTQUFTOzs7NENBT0ssTUFBTSxTQUFDLE1BQU07OzswQkFKekIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSW5qZWN0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuQERpcmVjdGl2ZSgpXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgTmdsQ29tbW9uTm90aWZ5Q2xvc2Uge1xuXG4gIEBJbnB1dCgpIHNldCBkaXNtaXNzaWJsZShkaXNtaXNzaWJsZTogYm9vbGVhbikge1xuICAgIHRoaXMuaG9zdC5kaXNtaXNzaWJsZSA9IGRpc21pc3NpYmxlO1xuICB9XG5cbiAgY29uc3RydWN0b3IoQEluamVjdCgnaG9zdCcpIHByaXZhdGUgaG9zdDogYW55KSB7XG4gICAgdGhpcy5ob3N0LmRpc21pc3NpYmxlID0gdHJ1ZTtcbiAgfVxuXG59XG4iXX0=
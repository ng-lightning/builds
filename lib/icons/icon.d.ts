import { OnInit, OnChanges, ElementRef } from '@angular/core';
import { HostService } from '../common/host/host.service';
export declare class NglIcon implements OnInit, OnChanges {
    private el;
    private hostService;
    set iconName(iconName: string);
    get iconName(): string;
    /**
     * The appearance of a `utility` icon.
     */
    variant: 'default' | 'warning' | 'error' | 'light' | 'inverse' | null;
    /**
     * The size of the icon.
     */
    size: 'xx-small' | 'x-small' | 'small' | 'medium' | 'large';
    /**
     * Text used to describe the icon for accessibility.
     */
    alternativeText: string;
    /**
     * CSS classes that are applied to the SVG.
     */
    svgClass: string | string[] | Set<string> | {
        [klass: string]: any;
    };
    private _iconName;
    constructor(el: ElementRef, hostService: HostService);
    ngOnInit(): void;
    ngOnChanges(): void;
    svgClasses(): {
        [klass: string]: any;
    };
    private setHostClass;
}

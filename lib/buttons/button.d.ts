import { ElementRef, Renderer2, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { HostService } from '../common/host/host.service';
export declare class NglButton implements OnInit, OnChanges {
    private el;
    private renderer;
    private hostService;
    /**
     * Changes the appearance of the button.
     */
    variant: 'base' | 'neutral' | 'brand' | 'outline-brand' | 'destructive' | 'text-destructive' | 'inverse' | 'success';
    /**
     * LDS name of the icon.
     * Names are written in the format 'utility:down' where 'utility' is the category, and 'down' is the specific icon to be displayed.
     */
    iconName: string;
    /**
     * Describes the position of the icon with respect to ng-content.
     */
    iconPosition: 'left' | 'right';
    constructor(el: ElementRef, renderer: Renderer2, hostService: HostService);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    hasLeftIcon(): boolean;
    hasRightIcon(): boolean;
    private setHostClass;
}

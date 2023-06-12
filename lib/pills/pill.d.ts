import { EventEmitter, TemplateRef, OnInit } from '@angular/core';
import { isTemplateRef } from '../util/check';
import * as i0 from "@angular/core";
export declare class NglPill implements OnInit {
    isTemplateRef: typeof isTemplateRef;
    canRemove: boolean;
    /**
       * NglIcon component or iconName to show on the left of the pill.
       */
    icon: string | TemplateRef<void>;
    /**
       * NglAvatar component or src to show on the left of the pill.
       */
    avatar: string | TemplateRef<void>;
    /**
       * Applies the error style to the component.
       */
    hasError: boolean;
    /**
       * Whether or not to override the remove button's visibility, if `remove` is set.
       */
    removable: boolean;
    /**
       * Remove button title (and assistive text).
       */
    removeTitle: string;
    /**
       * The event emitted when the remove button is clicked.
       */
    remove: EventEmitter<MouseEvent>;
    linked: boolean;
    ngOnInit(): void;
    onRemove(e: MouseEvent): void;
    get pillIcon(): string | TemplateRef<void>;
    static ɵfac: i0.ɵɵFactoryDeclaration<NglPill, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NglPill, "ngl-pill", never, { "icon": "icon"; "avatar": "avatar"; "hasError": "hasError"; "removable": "removable"; "removeTitle": "removeTitle"; }, { "remove": "remove"; }, never, ["a", "*"], false, never>;
}

import { Directive, Input, Output, HostBinding, HostListener, EventEmitter } from '@angular/core';
import {isNil} from "../utils";


@Directive({
               selector: '[ngxDropdown]',
               exportAs: 'ngxDropdown'
           })
export class DropdownDirective {
    toggleElement: any;
    @Input('open') internalOpen = false;
    @Output() openChange = new EventEmitter<boolean>();

    @HostBinding('class.show') get isOpen(): boolean {
        return this.internalOpen;
    }

    @HostListener('keyup.esc')
    onKeyupEsc(): void {
        this.close();
    }

    @HostListener('document:click', ['$event'])
    onDocumentClick(event: MouseEvent): void {
        if (event.button !== 2 && !this.isDocumentEventFromToggle(event)) {
            this.close();
        }
    }

    open(): void {
        if (!this.internalOpen) {
            this.internalOpen = true;
            this.openChange.emit(true);
        }
    }

    close(): void {
        if (this.internalOpen) {
            this.internalOpen = false;
            this.openChange.emit(false);
        }
    }

    toggle(): void {
        if (this.isOpen) {
            this.close();
        } else {
            this.open();
        }
    }

    private isDocumentEventFromToggle(event: MouseEvent): boolean {
        return !isNil(this.toggleElement) && this.toggleElement.contains(event.target) ||
               event.composedPath && event.composedPath().length > 0 && event.composedPath()[0] === this.toggleElement;
    }
}

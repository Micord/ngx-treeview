import { Directive, HostListener } from '@angular/core';
import { DropdownDirective } from './dropdown.directive';

@Directive({
               selector: '[ngxDropdownMenu]',
               host: {
                   '[class.dropdown-menu]': 'true',
                   '[class.show]': 'dropdown.isOpen'
               }
           })
export class DropdownMenuDirective {
    constructor(public dropdown: DropdownDirective) {
    }

    @HostListener('click', ['$event'])
    onClick(event: MouseEvent): void {
      if (event.button !== 2 && event.srcElement.attributes[0]
          && event.srcElement.attributes[0].nodeValue === 'form-check-label') {
        this.dropdown.close();
      }
    }
}

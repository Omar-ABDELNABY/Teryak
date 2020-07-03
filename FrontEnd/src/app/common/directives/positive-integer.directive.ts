import { Directive, ElementRef, HostListener, Input } from '@angular/core';

// applied to inputs lowercase only
@Directive({
	selector: '[appNumber]'
})
export class NumberInputDirective {

	constructor(private elementRef: ElementRef) { }

	@HostListener('keydown', ['$event'])

	onkeyDown(event: KeyboardEvent): void {
		if (!this.isControlKey(event) && event.ctrlKey === false) {
			if (!this.isAllowed(event)) {
				event.preventDefault();
			}
		}
	}
	isControlKey(event: KeyboardEvent): boolean {
		return event.key.length > 1;
	}
	isAllowed(event: KeyboardEvent): boolean {
		const allowedCharachters = '[0-9.]';
		return event.key.match(allowedCharachters) !== null;
	}

}

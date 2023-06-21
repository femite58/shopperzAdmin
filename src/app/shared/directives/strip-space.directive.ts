import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
    selector: '[appStripSpace]',
})
export class StripSpaceDirective {
    @Input() appStripSpace;
    constructor(private el: ElementRef) {}

    @HostListener('input') onInput() {
        this.el.nativeElement.value = this.el.nativeElement.value.trim();
        this.appStripSpace.setValue(this.appStripSpace.value.trim());
    }
}

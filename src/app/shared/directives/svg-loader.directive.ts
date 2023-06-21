import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
    selector: '[appSvgLoader]'
})
export class SvgLoaderDirective {

    constructor(private el: ElementRef) { }

    @HostListener('load') onLoad() {
        const parEl = this.el.nativeElement.parentElement;
        const svg = this.el.nativeElement.contentDocument.querySelector('svg');
        parEl.insertBefore(svg, this.el.nativeElement);
        this.el.nativeElement.remove();
    }

}

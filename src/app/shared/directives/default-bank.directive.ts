import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appDefaultBank]'
})
export class DefaultBankDirective {

  constructor(private el: ElementRef) { }

  @HostListener('error') onError() {
    this.el.nativeElement.src = 'assets/images/default-bank.png';
  }

}

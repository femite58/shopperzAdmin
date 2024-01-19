import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appAllowNum]',
})
export class AllowNumDirective {
  @Input() appAllowNum;
  constructor() {}

  // @HostListener('keydown', ['$event']) onKeydown(e) {
  //   if (isNaN(+e.key)) {
  //     if (e.key.length < 2) {
  //       // e.preventDefault();
  //     }
  //   }
  // }

  @HostListener('beforeinput', ['$event']) onInput(e) {
    if (isNaN(+e.data)) {
      if (e.data?.length < 2) {
        e.preventDefault();
      }
    }
    if (this.appAllowNum) {
      setTimeout(() => {
        this.appAllowNum.setValue(e.target.value.replace(/[^\d+\s/]/g, ''));
      });
    }
  }
}

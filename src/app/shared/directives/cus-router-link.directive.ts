import { Directive, HostListener, Input } from '@angular/core';
import { Router } from '@angular/router';

@Directive({
  selector: '[cusRouterLink]'
})
export class CusRouterLinkDirective {
  @Input() cusRouterLink;
  constructor(
    private router: Router
  ) { }

  @HostListener('click') onClick() {
    this.router.navigateByUrl(this.cusRouterLink);
  }

}

import { isPlatformBrowser } from '@angular/common';
import { Directive, ElementRef, Inject, PLATFORM_ID } from '@angular/core';

@Directive({
  selector: '[appAltImgLoader]',
})
export class AltImgLoaderDirective {
  constructor(
    private el: ElementRef,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    if (!isPlatformBrowser(platformId)) return;
    setTimeout(() => {
      let img = el.nativeElement.firstChild;
      if (img) {
        let imgs =
          img.parentElement.parentElement.parentElement.parentElement.querySelectorAll(
            'img'
          );
        imgs.forEach((img) => {
          let prevUrl = img.src;
          img.onerror = () => {
            if (img.src.match(/(\.webp$)|\/f_webp\//)) {
              // img.src = 'assets/freelancers/profile-default.png';
              img.onerror = null;
              return;
            }
            if (prevUrl.match(/\.[a-z]+$/i)) {
              img.src = prevUrl.replace(/\.[a-z]+$/i, '.webp');
            } else if (prevUrl.match(/\/f_avif\//)) {
              img.src = prevUrl.replace(/\/f_avif\//, '/f_webp/');
            }
          };
        });
      }
    });
  }
}

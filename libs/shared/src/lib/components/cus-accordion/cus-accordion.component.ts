import { isPlatformBrowser } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Inject,
  OnInit,
  Output,
  PLATFORM_ID,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-cus-accordion',
  templateUrl: './cus-accordion.component.html',
  styleUrls: ['./cus-accordion.component.scss'],
})
export class CusAccordionComponent implements OnInit, AfterViewInit {
  @ViewChild('acc') cusAcc: ElementRef;
  @Output() openEv = new EventEmitter();

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    if (!isPlatformBrowser(this.platformId)) return;
    const accHead = this.cusAcc.nativeElement.children[0];
    const accToggle = accHead.querySelector('.accToggle');
    (accToggle || accHead).addEventListener('click', () => {
      const items = accHead.nextElementSibling.children;
      if (
        accHead.classList.contains('cusCollapsed') ||
        !accHead.nextElementSibling.classList.contains('cusShow')
      ) {
        let totalH = 0;
        this.openEv.emit();
        for (let i = 0; i < items.length; i++) {
          let eachH = +getComputedStyle(items[i]).height.replace('px', '');
          let mt = +getComputedStyle(items[i]).marginTop.replace('px', '');
          let mb = +getComputedStyle(items[i]).marginBottom.replace('px', '');
          totalH += eachH + mt + mb;
        }
        accHead.nextElementSibling.style.height = `${totalH}px`;
        accHead.nextElementSibling.classList.add('cusShow');
        accHead.classList.remove('cusCollapsed');
        setTimeout(() => {
          accHead.nextElementSibling.style.height = 'auto';
        }, 300);
      } else {
        let initial = accHead.nextElementSibling.clientHeight;
        accHead.nextElementSibling.style.height = `${initial}px`;
        accHead.nextElementSibling.classList.remove('cusShow');
        accHead.classList.add('cusCollapsed');
        setTimeout(() => {
          accHead.nextElementSibling.style.height = '';
        });
      }
    });
  }
}

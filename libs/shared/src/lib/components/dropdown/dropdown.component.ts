import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  Output,
  ViewChild,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
})
export class DropdownComponent implements OnInit, AfterViewInit {
  @ViewChild('cusDropdown') cusDropdown: ElementRef;
  clickable: HTMLElement;
  @Output() closeEv = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.clickable = this.cusDropdown.nativeElement.querySelector('.clickable');
    this.clickable.onclick = () => {
      this.dropFunc();
    };
  }

  dropFunc() {
    const me = this;
    this.clickable.nextElementSibling.classList.toggle('cusShow');
    if (!document.onclick) {
      setTimeout(() => {
        document.onclick = auxClick;
      });
    }
    function auxClick(e) {
      const path = e.path || e.composedPath();
      for (let i = 0; i < path.length - 2; i++) {
        if (path[i] == me.clickable) {
          return;
        }
        document.onclick = null;
        me.clickable.nextElementSibling.classList.remove('cusShow');
        me.closeEv.emit();
      }
    }
  }
}

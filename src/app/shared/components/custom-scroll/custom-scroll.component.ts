import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-custom-scroll',
  templateUrl: './custom-scroll.component.html',
  styleUrls: ['./custom-scroll.component.scss'],
})
export class CustomScrollComponent implements AfterViewInit, OnDestroy {
  @ViewChild('scrollCont') scrollPar: ElementRef;
  scrollCont: HTMLElement;
  scrollThumb: HTMLElement;
  scrlH = 0;
  viewH = 0;
  thumbH = 0;
  maxScrl = 0;
  maxTop = 0;
  top = 0;
  contactY = 0;
  initPosY = 0;
  bcTop = 0;
  constTop = 0;
  dragging = false;

  ngOnDestroy(): void {
    window.removeEventListener('resize', this.initiateVar);
  }

  ngAfterViewInit(): void {
    this.scrollCont = this.scrollPar.nativeElement.querySelector(
      ':scope>.scrollInnerCont'
    );
    this.scrollThumb = this.scrollCont.nextElementSibling
      .firstElementChild as HTMLElement;
    let obs = new MutationObserver(() => {
      this.initiateVar();
    });
    obs.observe(this.scrollCont, { childList: true });
    setTimeout(() => {
      this.initiateVar();
    }, 50);
    window.addEventListener('resize', this.initiateVar);
  }

  initiateVar = () => {
    this.scrlH = this.scrollCont.scrollHeight;
    this.viewH = this.scrollCont.clientHeight;
    this.scrollThumb.style.display =
      this.viewH == this.scrlH ? 'none' : 'block';
    this.maxScrl = this.scrlH - this.viewH;
    this.thumbH = (this.viewH * this.viewH) / this.scrlH;
    this.maxTop = this.viewH - this.thumbH;
    this.scrollThumb.style.height = `${this.thumbH}px`;
    this.setTop();
  };

  setTop() {
    this.top = (this.scrollCont.scrollTop * this.maxTop) / this.maxScrl;
    this.scrollThumb.style.top = `${this.top}px`;
  }

  dragStart(e) {
    this.contactY = e.y - this.scrollThumb.getBoundingClientRect().top;
    this.initPosY = e.y;
    this.constTop = this.scrollThumb.getBoundingClientRect().top - this.top;
    e.preventDefault();
    this.dragging = true;
    document.addEventListener('mousemove', this.drag);
    document.addEventListener('mouseup', this.stopDrag);
  }

  drag = (e) => {
    let diff = e.y - this.initPosY;
    this.initPosY = e.y;
    let finalTop = this.top + diff;
    let finalBcTop = finalTop + this.constTop;
    finalTop =
      finalTop < 0 ? 0 : finalTop > this.maxTop ? this.maxTop : finalTop;
    if (this.contactY != e.y - finalBcTop) {
      finalTop = e.y - this.contactY - this.constTop;
      finalTop =
        finalTop < 0 ? 0 : finalTop > this.maxTop ? this.maxTop : finalTop;
    }
    this.top = finalTop;
    this.scrollThumb.style.top = `${this.top}px`;
    let scrlTop = (this.top * this.maxScrl) / this.maxTop;
    this.scrollCont.scrollTop = scrlTop;
  };

  stopDrag = (e) => {
    document.removeEventListener('mousemove', this.drag);
    document.removeEventListener('mouseup', this.stopDrag);
    this.dragging = false;
  };
}

import { isPlatformBrowser } from '@angular/common';
import {
    AfterViewInit,
    Component,
    ElementRef,
    EventEmitter,
    Inject,
    Input,
    OnDestroy,
    OnInit,
    Output,
    PLATFORM_ID,
    ViewChild,
} from '@angular/core';

@Component({
    selector: 'app-banner-carousel',
    templateUrl: './banner-carousel.component.html',
    styleUrls: ['./banner-carousel.component.scss'],
})
export class BannerCarouselComponent
    implements OnInit, AfterViewInit, OnDestroy
{
    @ViewChild('carouselParent') carouselParent: ElementRef;
    flexCont: HTMLElement;
    carouselItems: NodeListOf<HTMLElement>;
    prev: HTMLElement;
    next: HTMLElement;
    carouselIndicators: NodeListOf<HTMLElement>;

    initialSlidePos;
    initialXPos;
    draggingPos;
    slideExt;
    flexW;
    floorExt = 0;
    parW;
    draggable = false;

    extMark = 0.2;

    @Input() autoSlide = true;
    @Input() infiniteSlide = true;
    @Input() delay = 10;
    @Output() indEv = new EventEmitter();

    dragMovHandler;
    dragEndHandler;

    autoSlideVar;

    sliding = false;

    activeInd = 0;

    constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

    ngOnInit(): void {}

    ngOnDestroy() {
        if (isPlatformBrowser(this.platformId)) {
            this.windowResponsive(false);
        }
    }

    ngAfterViewInit() {
        setTimeout(() => {
            if (isPlatformBrowser(this.platformId)) {
                this.flexCont =
                    this.carouselParent.nativeElement.querySelector(
                        '.flexCont'
                    );
                this.carouselItems =
                    this.flexCont.querySelectorAll('.carouselItem');
                this.prev =
                    this.carouselParent.nativeElement.querySelector(
                        '.carouselCtrlPrev'
                    );
                this.next =
                    this.carouselParent.nativeElement.querySelector(
                        '.carouselCtrlNext'
                    );
                this.carouselIndicators =
                    this.carouselParent.nativeElement.querySelectorAll(
                        '.indicatorItem'
                    );
                if (isPlatformBrowser(this.platformId)) {
                    if (this.carouselItems.length > 1) {
                        this.initiateCarousel();
                    }
                }
            }
        }, this.delay);
    }

    private windowResponsive(add) {
        const me = this;
        if (add) {
            window.addEventListener('resize', resize);
            document.addEventListener('visibilitychange', visibilityCheck);
        } else {
            window.removeEventListener('resize', resize);
            document.removeEventListener('visibilitychange', visibilityCheck);
        }
        function resize() {
            me.responsive();
        }
        function visibilityCheck() {
            if (this.autoSlide) {
                document.visibilityState == 'hidden'
                    ? me.stopAutoSlide()
                    : me.startAutoSlide();
            }
        }
    }

    private initiateCarousel() {
        this.indEv.emit(this.activeInd);
        if (this.infiniteSlide) {
            this.carouselItems.forEach((carouselItem) => {
                let cloned = carouselItem.cloneNode(true);
                this.flexCont.appendChild(cloned);
            });
        }
        this.windowResponsive(true);
        this.responsive();
        this.initiateEventBinding();
    }

    private responsive() {
        this.parW = +getComputedStyle(
            this.carouselParent.nativeElement
        ).width.replace('px', '');
        let pl = +getComputedStyle(
            this.carouselParent.nativeElement
        ).paddingLeft.replace('px', '');
        let pr = +getComputedStyle(
            this.carouselParent.nativeElement
        ).paddingRight.replace('px', '');
        this.parW = this.parW - pl - pr;
        this.carouselItems = this.flexCont.querySelectorAll('.carouselItem');
        this.carouselItems.forEach((carouselItem) => {
            let img = carouselItem.querySelector('img');
            if (img) {
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
                    img.onerror = null;
                };
            }
            carouselItem.style.width = `${this.parW}px`;
        });
        this.slideExt = +this.carouselItems[0].style.width.replace('px', '');
        this.flexW = this.carouselItems.length * this.parW;
        this.flexCont.style.width = `${this.flexW}px`;
        this.initialSlidePos = this.parW * this.activeInd * -1;
        this.draggingPos = this.initialSlidePos;
        this.flexCont.style.transition = '0s';
        this.flexCont.style.left = `${this.initialSlidePos}px`;
    }

    private initiateEventBinding() {
        const me = this;
        function slide() {
            me.slide(1);
        }
        function negSlide() {
            me.slide(-1);
        }

        function indSelect(e, i) {
            me.indicatorSelect(e, i);
        }

        this.next.addEventListener('click', slide);
        this.prev.addEventListener('click', negSlide);

        this.draggable = true;
        if (this.autoSlide) {
            this.startAutoSlide();
        }
        if (this.carouselIndicators) {
            this.carouselIndicators.forEach((indicator, i) => {
                indicator.onclick = (e) => {
                    indSelect(e, i);
                };
                indicator.ontouchstart = (e) => {
                    indSelect(e, i);
                };
            });
        }
    }

    startAutoSlide() {
        this.stopAutoSlide();
        this.autoSlideVar = setInterval(() => this.slide(1), 5000);
    }

    stopAutoSlide() {
        clearInterval(this.autoSlideVar);
    }

    private indicatorSelect(e, I) {
        e.stopPropagation();
        if (I == this.activeInd) return;
        this.flexCont.style.transition = '0s';
        this.initialSlidePos = this.parW * this.activeInd * -1;
        this.flexCont.style.left = `${this.initialSlidePos}px`;
        this.activeInd = I;
        this.indEv.emit(this.activeInd);
        this.initialSlidePos = this.parW * this.activeInd * -1;
        this.draggingPos = this.initialSlidePos;
        this.checkIndicators();
        setTimeout(() => {
            this.flexCont.style.transition = '0.6s ease';
            this.flexCont.style.left = `${this.initialSlidePos}px`;
        });
    }

    private slide(n) {
        if (this.sliding) return;
        this.sliding = true;
        this.stopAutoSlide();
        let finalPos = +(this.initialSlidePos - n * this.slideExt);
        let middlePos = (this.flexW / 2) * -1;
        if (!this.infiniteSlide) {
            if (
                (+finalPos.toFixed(0) > 0 && n == -1) ||
                (+finalPos.toFixed(0) <
                    +(
                        this.slideExt *
                        (this.carouselItems.length - 1) *
                        -1
                    ).toFixed(0) &&
                    n == 1)
            )
                return;
        }
        if (
            (+finalPos.toFixed(0) > 0 && n == -1) ||
            (+finalPos.toFixed(0) <
                +(this.slideExt * (this.carouselItems.length - 1) * -1).toFixed(
                    0
                ) &&
                n == 1)
        ) {
            this.flexCont.style.transition = '0s';
            let resetPos;
            if (finalPos > 0 && n == -1) {
                resetPos = middlePos;
            }
            if (
                finalPos <
                this.slideExt * (this.carouselItems.length - 1) * -1
            ) {
                resetPos = middlePos + this.slideExt;
            }
            this.flexCont.style.left = `${resetPos}px`;
            finalPos = resetPos - n * this.slideExt;
        }
        this.initialSlidePos = finalPos;
        this.draggingPos = this.initialSlidePos;
        this.activeInd += n;
        if (this.activeInd > this.carouselItems.length / 2 - 1) {
            this.activeInd = 0;
        }
        if (this.activeInd < 0) {
            this.activeInd = this.carouselItems.length / 2 - 1;
        }
        this.indEv.emit(this.activeInd);
        if (this.carouselIndicators) {
            this.setIndicators();
        }
        setTimeout(() => {
            this.flexCont.style.transition = '0.6s ease';
            this.flexCont.style.left = `${finalPos}px`;
            this.sliding = false;
            this.startAutoSlide();
        }, 10);
    }

    private setIndicators() {
        this.carouselIndicators.forEach((indicator, i) => {
            if (i != this.activeInd) {
                indicator.classList.remove('cusActive');
            } else {
                indicator.classList.add('cusActive');
            }
        });
    }

    dragStart(e) {
        const me = this;
        if (e.type == 'mousedown') {
            e.stopImmediatePropagation();
            e.stopPropagation();
            e.preventDefault();
        }
        if (e.type == 'touchstart') {
            this.extMark = 0.08;
        } else {
            this.extMark = 0.2;
        }
        this.carouselParent.nativeElement.style.cursor = 'grab';
        this.initialXPos = e.type == 'mousedown' ? e.x : e.touches[0].clientX;
        this.dragMovHandler = drag;
        this.dragEndHandler = dragStop;

        document.addEventListener('mousemove', drag);
        document.addEventListener('touchmove', drag);
        document.addEventListener('mouseup', dragStop);
        document.addEventListener('touchend', dragStop);

        if (e.type == 'touchstart') {
            this.stopAutoSlide();
        }
        function drag(e) {
            me.drag(e);
        }
        function dragStop(e) {
            me.dragStop(e);
        }
    }

    private drag(e) {
        let curXPos = e.type == 'mousemove' ? e.x : e.touches[0].clientX;
        let diff = curXPos - this.initialXPos;
        this.flexCont.style.transition = '0s';
        this.initialXPos = curXPos;
        let middlePos = (this.flexW / 2) * -1;
        let finalPos = this.draggingPos + diff;
        let slideExt;
        if (this.initialSlidePos > this.draggingPos) {
            slideExt = this.initialSlidePos - this.draggingPos;
            if (
                Math.floor(slideExt / this.slideExt) >= 1 &&
                this.floorExt != Math.floor(slideExt / this.slideExt)
            ) {
                this.activeInd +=
                    Math.floor(slideExt / this.slideExt) - this.floorExt;
                this.floorExt = Math.floor(slideExt / this.slideExt);
            }
        } else if (this.initialSlidePos < this.draggingPos) {
            slideExt = this.draggingPos - this.initialSlidePos;
            if (
                Math.floor(slideExt / this.slideExt) >= 1 &&
                this.floorExt != Math.floor(slideExt / this.slideExt)
            ) {
                this.activeInd -=
                    Math.floor(slideExt / this.slideExt) - this.floorExt;
                this.floorExt = Math.floor(slideExt / this.slideExt);
            }
        }
        this.indEv.emit(this.activeInd);
        if (slideExt) {
            this.checkIndicators();
        }
        if (
            (finalPos > 0 && diff > 0) ||
            (finalPos < this.slideExt * (this.carouselItems.length - 1) * -1 &&
                diff < 0)
        ) {
            let resetPos;
            if (finalPos > 0 && diff > 0) {
                resetPos = middlePos;
            }
            if (
                finalPos <
                    this.slideExt * (this.carouselItems.length - 1) * -1 &&
                diff < 0
            ) {
                resetPos = middlePos + this.slideExt;
            }
            if (this.infiniteSlide) {
                this.flexCont.style.left = `${resetPos}px`;
                finalPos = resetPos + diff;
                this.initialSlidePos = resetPos;
                this.floorExt = 0;
            } else {
                finalPos = this.draggingPos + diff * 0.1;
            }
        }
        this.draggingPos = finalPos;
        this.flexCont.style.left = `${finalPos}px`;
    }

    private dragStop(e) {
        // e.stopImmediatePropagation();
        // e.stopPropagation();
        // e.preventDefault();
        const me = this;
        this.carouselParent.nativeElement.style.cursor = 'default';
        document.removeEventListener('mousemove', me.dragMovHandler);
        document.removeEventListener('touchmove', me.dragMovHandler);
        document.removeEventListener('mouseup', me.dragEndHandler);
        document.removeEventListener('touchend', me.dragEndHandler);

        let rawDiff =
            this.initialSlidePos > this.draggingPos
                ? this.initialSlidePos - this.draggingPos
                : this.draggingPos - this.initialSlidePos;
        let realDiff = rawDiff % this.slideExt;
        let slideRem = this.slideExt - realDiff;
        let isA = false;
        let path = e.path || e.composedPath();
        for (let i = 0; i < path.length - 2; i++) {
            if (
                path[i].tagName == 'A' &&
                path[i].href != 'javascript:void(0)'
            ) {
                isA = true;
            }
        }
        let curInd = this.activeInd;
        if (this.initialSlidePos > this.draggingPos) {
            if (isA) {
                e.target.onclick = (s) => {
                    s.preventDefault();
                    s.stopPropagation();
                };
            }
            let finalPos;
            if (realDiff > this.extMark * this.slideExt) {
                this.flexCont.style.transition = '0.3s ease';
                finalPos = this.draggingPos - slideRem;
                this.activeInd++;
            } else {
                finalPos = this.draggingPos + realDiff;
                this.flexCont.style.transition = '0.1s ease';
            }
            if (!this.infiniteSlide) {
                if (
                    this.draggingPos <
                    this.slideExt * (this.carouselItems.length - 1) * -1
                ) {
                    this.flexCont.style.transition = '0.3s ease';
                    finalPos =
                        this.slideExt * (this.carouselItems.length - 1) * -1;
                    this.activeInd =
                        curInd != this.activeInd ? curInd : this.activeInd;
                }
            }
            this.flexCont.style.left = `${finalPos}px`;
            this.draggingPos = finalPos;
            this.initialSlidePos = finalPos;
            this.floorExt = 0; //reset floorExt
        } else if (this.initialSlidePos < this.draggingPos) {
            if (isA) {
                e.target.onclick = (s) => {
                    s.preventDefault();
                    s.stopPropagation();
                };
            }
            let finalPos;
            if (realDiff > this.extMark * this.slideExt) {
                this.flexCont.style.transition = '0.3s ease';
                finalPos = this.draggingPos + slideRem;
                this.activeInd--;
            } else {
                finalPos = this.draggingPos - realDiff;
                this.flexCont.style.transition = '0.1s ease';
            }
            if (!this.infiniteSlide) {
                if (this.draggingPos > 0) {
                    this.flexCont.style.transition = '0.3s ease';
                    finalPos = 0;
                    this.activeInd =
                        curInd != this.activeInd ? curInd : this.activeInd;
                }
            }
            this.flexCont.style.left = `${finalPos}px`;
            this.draggingPos = finalPos;
            this.initialSlidePos = finalPos;
            this.floorExt = 0; //reset floorExt
        } else {
            if (isA) {
                e.target.onclick = null;
            }
        }
        this.indEv.emit(this.activeInd);
        this.checkIndicators();
        if (e.type == 'touchend' && this.autoSlide) {
            this.startAutoSlide();
        }
    }

    private checkIndicators() {
        if (
            this.activeInd >
            this.carouselItems.length / (this.infiniteSlide ? 2 : 1) - 1
        ) {
            this.activeInd = 0;
        }
        if (this.activeInd < 0) {
            this.activeInd =
                this.carouselItems.length / (this.infiniteSlide ? 2 : 1) - 1;
        }
        this.indEv.emit(this.activeInd);
        if (this.carouselIndicators) {
            this.setIndicators();
        }
    }
}

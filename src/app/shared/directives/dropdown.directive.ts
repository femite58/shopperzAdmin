import {
    AfterViewInit,
    Directive,
    ElementRef,
    EventEmitter,
    HostListener,
    Input,
    Output,
} from '@angular/core';

@Directive({
    selector: '[appDropdown]',
})
export class DropdownDirective implements AfterViewInit {
    @Input() innerClose = '';
    @Input() closeDropdown;
    @Output() onDropChng = new EventEmitter();

    constructor(private el: ElementRef) {}

    ngAfterViewInit(): void {
        if (this.closeDropdown) {
            this.closeDropdown.subscribe((close) => {
                if (close) {
                    this.auxClick({ path: [1, 1] });
                }
            });
        }
    }

    dropped: HTMLElement;
    cloned: HTMLElement;
    scrollPar: HTMLElement;
    cloneDrop: HTMLElement;
    style: HTMLStyleElement;

    @HostListener('click', ['$event']) onClick(e) {
        let parent = this.el.nativeElement.parentElement;
        if (parent.classList.contains('shown')) {
            this.auxClick(e);
            return;
        }
        this.dropped = this.el.nativeElement.nextElementSibling;
        this.dropped.style.transition = '0s';
        this.cloned = this.el.nativeElement.parentElement.cloneNode(true);
        let bc = this.el.nativeElement.getBoundingClientRect();
        this.cloned.style.cssText = `position: fixed; transition: 0s; top: ${bc.top}px; left: ${bc.left}px; width: ${bc.width}px; height: ${bc.height}px; z-index: 50000;`;
        (this.cloned.querySelector('.clickable') as HTMLElement).style.cssText =
            'opacity: 0; pointer-events: none;';
        this.cloneDrop = this.cloned.querySelector('.dropped');
        document.body.appendChild(this.cloned);
        this.cloneDrop.remove();
        this.cloned.appendChild(this.dropped);
        // this.el.nativeElement.parentElement.appendChild(this.cloneDrop);
        this.dropped.style.transition = '0s';
        if (
            window.innerHeight - bc.top > this.dropped.clientHeight ||
            window.innerHeight - bc.top > bc.top
        ) {
            this.dropped.classList.remove('top');
            if (window.innerHeight - bc.top < this.dropped.clientHeight) {
                this.dropped.style.height = `${
                    window.innerHeight - bc.bottom
                }px`;
                this.dropped.classList.add('vScrlB');
            }
        } else {
            this.dropped.classList.add('top');
            if (bc.top < this.dropped.clientHeight) {
                this.dropped.style.height = `${bc.top}px`;
                this.dropped.classList.add('vScrlB');
            }
        }
        if (document.body.clientWidth - bc.left > this.dropped.clientWidth) {
            this.dropped.classList.remove('right');
        } else {
            this.dropped.classList.add('right');
        }
        let path = e.path || e.composedPath();
        for (let i = 0; i < path.length - 2; i++) {
            let ovf = getComputedStyle(path[i]).overflow;
            if (
                path[i].clientHeight < path[i].scrollHeight &&
                ovf.match(/auto|scroll/)
            ) {
                this.scrollPar = path[i];
                (this.scrollPar?.tagName == 'HTML'
                    ? window
                    : this.scrollPar
                )?.addEventListener('scroll', this.onScroll);
                break;
            }
        }
        setTimeout(() => {
            this.dropped.style.transition = '';
            this.dropped.classList.toggle('dropShow');
            this.onDropChng.emit(this.dropped.classList.contains('dropShow'));
            this.el.nativeElement.parentElement.classList.toggle('shown');
            document.addEventListener('click', this.auxClick);
        });
    }
    auxClick = (e) => {
        const path = e.path || e.composedPath();
        for (let i = 0; i < path.length - 2; i++) {
            if (!path[i].classList) continue;
            if (!this.innerClose) {
                // if (path[i] == this.el.nativeElement) {
                //     return;
                // }
            } else {
                if (path[i]?.classList.contains(this.innerClose)) return;
            }
        }
        if (this.dropped) {
            this.dropped.classList.remove('dropShow');
            let dur = +getComputedStyle(this.dropped).transition.match(
                /\d+(\.\d+)?/
            )[0];
            this.dropped.style.height = '';
            (this.scrollPar?.tagName == 'HTML'
                ? window
                : this.scrollPar
            )?.removeEventListener('scroll', this.onScroll);
            setTimeout(() => {
                // this.cloneDrop.remove();
                this.el.nativeElement.parentElement.appendChild(this.dropped);
                this.cloned.remove();
            }, dur * 1000);
        }
        this.onDropChng.emit(false);
        this.el.nativeElement.parentElement.classList.remove('shown');
        document.removeEventListener('click', this.auxClick);
    };

    onScroll = () => {
        let bc = this.el.nativeElement.getBoundingClientRect();
        this.cloned.style.top = `${bc.top}px`;
        this.cloned.style.left = `${bc.left}px`;
    };
}

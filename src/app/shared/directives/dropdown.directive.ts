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
                    this.auxClick({ path: [] });
                }
            });
        }
    }

    @HostListener('click') onClick() {
        this.el.nativeElement.nextElementSibling.classList.toggle('dropShow');
        this.onDropChng.emit(
            this.el.nativeElement.nextElementSibling.classList.contains(
                'dropShow'
            )
        );
        this.el.nativeElement.parentElement.classList.toggle('shown');
        setTimeout(() => {
            document.addEventListener('click', this.auxClick);
        });
    }
    auxClick = (e) => {
        const path = e.path || e.composedPath();
        for (let i = 0; i < path.length - 2; i++) {
            if (!this.innerClose) {
                if (path[i] == this.el.nativeElement) {
                    return;
                }
            } else {
                if (path[i].classList.contains(this.innerClose)) return;
            }
        }
        this.el.nativeElement.nextElementSibling.classList.remove('dropShow');
        this.onDropChng.emit(false);
        this.el.nativeElement.parentElement.classList.remove('shown');
        document.removeEventListener('click', this.auxClick);
    };
}

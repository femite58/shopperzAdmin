import { isPlatformBrowser } from '@angular/common';
import {
    AfterViewInit,
    Component,
    ElementRef,
    Inject,
    Input,
    OnDestroy,
    OnInit,
    PLATFORM_ID,
    ViewChild,
} from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';

@Component({
    selector: 'app-group-accordion',
    templateUrl: './group-accordion.component.html',
    styleUrls: ['./group-accordion.component.scss'],
})
export class GroupAccordionComponent
    implements OnInit, AfterViewInit, OnDestroy
{
    @Input() listener: BehaviorSubject<number>;
    @ViewChild('accGroup') accGroup: ElementRef;

    listenerSub: Subscription;

    constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

    ngOnInit(): void {}

    ngOnDestroy(): void {
        this.listenerSub?.unsubscribe();
    }

    ngAfterViewInit(): void {
        if (!isPlatformBrowser(this.platformId)) return;
        const accHeads =
            this.accGroup.nativeElement.querySelectorAll('.accHead');
        this.listenerSub = this.listener.subscribe((accInd) => {
            if (accInd > -1) {
                accHeads.forEach((acc, i) => {
                    if (
                        i != accInd &&
                        !acc.classList.contains('cusCollapsed')
                    ) {
                        acc.click();
                    }
                });
            }
        });
    }
}

import { isPlatformBrowser } from '@angular/common';
import {
    Component,
    EventEmitter,
    Inject,
    Input,
    OnDestroy,
    OnInit,
    Output,
    PLATFORM_ID,
} from '@angular/core';

@Component({
    selector: 'app-timer',
    templateUrl: './timer.component.html',
    styleUrls: ['./timer.component.scss'],
})
export class TimerComponent implements OnInit, OnDestroy {
    @Input() timeTo;
    @Input() startTime;
    @Input() status;
    @Input() serverTime;
    @Input() completedTime;
    @Input() sellerDelivered;
    @Output() onExpired = new EventEmitter();
    d = 0;
    h = 0;
    m = 0;
    s = 0;

    timeIntH;

    initServTime;

    warning = false;
    stopped = false;
    count = 0;

    @Output() buyerTimeEv = new EventEmitter();

    constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

    ngOnDestroy(): void {
        clearInterval(this.timeIntH);
    }

    ngOnInit(): void {
        if (!isPlatformBrowser(this.platformId)) return;
        this.timeIntH = setInterval(() => {
            if (this.initServTime != this.serverTime) {
                this.count = 0;
                this.initServTime = this.serverTime;
            }
            this.count++;
            this.beginCount();
        }, 1000);
    }

    private beginCount() {
        let dateDif;
        if (this.status == 'Active') {
            dateDif =
                Date.parse(this.timeTo) -
                (Date.parse(this.serverTime) + 1000 * this.count);
        } else {
            dateDif = Date.parse(this.timeTo) - Date.parse(this.completedTime);
        }
        let orignDif = Date.parse(this.timeTo) - Date.parse(this.startTime);
        this.d = Math.floor(dateDif / (1000 * 60 * 60 * 24));
        this.h = Math.floor(
            (dateDif % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        this.m = Math.floor((dateDif % (1000 * 60 * 60)) / (1000 * 60));
        this.s = Math.floor((dateDif % (1000 * 60)) / 1000);
        this.d = this.d < 0 ? 0 : this.d;
        this.h = this.h < 0 ? 0 : this.h;
        this.m = this.m < 0 ? 0 : this.m;
        this.s = this.s < 0 ? 0 : this.s;
        if (dateDif <= orignDif * 0.1 && this.status == 'Active') {
            this.warning = true;
        } else {
            this.warning = false;
        }
        if (this.status == 'Completed' || this.status == 'Review') {
            clearInterval(this.timeIntH);
        }
        if (!this.d && !this.h && !this.m && !this.s) {
            this.stopped = true;
            if (this.sellerDelivered) {
                this.buyerTimeEv.emit();
            }
            if (this.status == 'Active' || this.sellerDelivered) {
                setTimeout(() => {
                    this.onExpired.emit();
                }, 1000);
            }
            clearInterval(this.timeIntH);
        }
    }
}

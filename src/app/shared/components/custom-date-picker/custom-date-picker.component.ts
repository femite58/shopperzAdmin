import {
    Component,
    EventEmitter,
    Input,
    OnDestroy,
    OnInit,
    Output,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { DateService } from 'src/app/data/helpers/date.service';

@Component({
    selector: 'custom-date-picker',
    templateUrl: './custom-date-picker.component.html',
    styleUrls: ['./custom-date-picker.component.scss'],
})
export class CustomDatePickerComponent implements OnInit, OnDestroy {
    @Input() uid;
    now = Date.now();
    @Input() fc: FormControl;
    selected = Date.now();
    weekDays = [this.now];
    monthDays = [];
    view = 'day';
    months = [];
    viewDate = this.selected;
    closeDropdwn = new BehaviorSubject(false);
    @Output() onSelect = new EventEmitter();
    years = [];
    valSub;

    constructor(private dateS: DateService) {}

    ngOnDestroy(): void {
        this.valSub.unsubscribe();
    }

    ngOnInit(): void {
        this.selected = this.fc.value
            ? Date.parse(this.fc.value)
            : this.selected;
        this.valSub = this.fc.valueChanges.subscribe((val) => {
            this.selected = val ? Date.parse(val) : this.selected;
            this.viewDate = this.selected;
            this.genDaysMonth(new Date(this.viewDate));
        });
        this.genWeekDays();
        this.genMonths();
        this.genDaysMonth(new Date(this.now));
    }

    ctrl(n) {
        let d = new Date(this.viewDate);
        if (this.view == 'day') {
            let y = d.getFullYear(),
                m = d.getMonth(),
                da = d.getDate();
            let date = new Date(
                m + n < 0 ? y + n : m + n > 11 ? y + n : y,
                m + n < 0 ? 11 : m + n > 11 ? 0 : m + n,
                1
            );
            this.genDaysMonth(date);
        } else if (this.view == 'year') {
            let date = new Date(
                d.getFullYear() + 16 * n,
                d.getMonth(),
                d.getDate()
            );
            this.genYears(date);
        }
    }

    genYears(date = null) {
        this.years = [];
        let d = date ?? new Date(this.viewDate);
        this.years.push(
            new Date(d.getFullYear() - 10, d.getMonth(), d.getDate()).getTime()
        );
        this.viewDate = d.getTime();
        for (let i = 1; i <= 15; i++) {
            let last = new Date(this.years.slice(-1)[0]);
            this.years.push(
                new Date(
                    last.getFullYear() + 1,
                    last.getMonth(),
                    last.getDate()
                ).getTime()
            );
        }
    }

    genMonths() {
        this.months = [];
        let d = new Date(this.viewDate);
        for (let i = 0; i < 12; i++) {
            let tempD = new Date(d.getFullYear(), i, d.getDate());
            let chk = new Date(d.getFullYear(), i + 1, 0);
            this.months.push(
                new Date(
                    d.getFullYear(),
                    i,
                    tempD.getMonth() == chk.getMonth()
                        ? d.getDate()
                        : chk.getDate()
                ).getTime()
            );
        }
    }

    setDate(m) {
        this.viewDate = m;
        this.genDaysMonth(new Date(this.viewDate));
        this.view = 'day';
    }

    setDay(d) {
        if (new Date(d).getMonth() != new Date(this.viewDate).getMonth())
            return;
        this.selected = d;
        this.fc.setValue(new Date(this.selected).toISOString());
        this.onSelect.emit(this.selected);
        this.closeDropdwn.next(true);
    }

    setCurrent() {
        this.selected = this.now;
        this.viewDate = this.selected;
        this.genDaysMonth(new Date(this.viewDate));
        this.fc.setValue(new Date(this.selected).toISOString());
        this.onSelect.emit(this.selected);
        this.closeDropdwn.next(true);
    }

    genDaysMonth(date) {
        this.monthDays = [];
        let numDays = new Date(
            date.getFullYear(),
            date.getMonth() + 1,
            0
        ).getDate();
        this.viewDate = date.getTime();
        for (let i = 1; i <= numDays; i++) {
            this.monthDays.push(
                new Date(date.getFullYear(), date.getMonth(), i).getTime()
            );
        }
        while (this.dateS.getWeekDay(new Date(this.monthDays[0])) != 'Sunday') {
            this.monthDays.unshift(this.monthDays[0] - 24 * 60 * 60 * 1000);
        }
        while (
            this.dateS.getWeekDay(new Date(this.monthDays.slice(-1)[0])) !=
            'Saturday'
        ) {
            this.monthDays.push(
                this.monthDays.slice(-1)[0] + 24 * 60 * 60 * 1000
            );
        }
    }

    genWeekDays() {
        while (this.dateS.getWeekDay(new Date(this.weekDays[0])) != 'Sunday') {
            this.weekDays.unshift(this.weekDays[0] - 24 * 60 * 60 * 1000);
        }
        while (
            this.dateS.getWeekDay(new Date(this.weekDays.slice(-1)[0])) !=
            'Saturday'
        ) {
            this.weekDays.push(
                this.weekDays.slice(-1)[0] + 24 * 60 * 60 * 1000
            );
        }
    }
}

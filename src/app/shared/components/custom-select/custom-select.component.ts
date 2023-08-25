import {
    AfterViewInit,
    Component,
    ElementRef,
    EventEmitter,
    Input,
    OnChanges,
    Output,
    SimpleChanges,
    ViewChild,
} from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
    selector: 'custom-select',
    templateUrl: './custom-select.component.html',
    styleUrls: ['./custom-select.component.scss'],
})
export class CustomSelectComponent implements AfterViewInit, OnChanges {
    @Input() placeholder;
    @Input() fc: AbstractControl;
    @Input() options: { value: any; txt: any }[];
    curOptions;
    @Output() onSelect = new EventEmitter();
    @Input() valueTxt;

    selectedOption = -1;

    @ViewChild('customSelect') customSelect: ElementRef;

    ngOnChanges(changes: SimpleChanges): void {
        if (
            !this.customSelect ||
            JSON.stringify(this.options) == this.curOptions
        )
            return;
        this.init();
    }

    init() {
        setTimeout(() => {
            let options =
                this.customSelect.nativeElement.querySelectorAll('.option');
            for (let o of this.options) {
                if (o.value == this.fc.value) {
                    this.selectedOption = this.options.indexOf(o);
                    break;
                }
            }
            options.forEach((o, i) => {
                // console.log(o);
                o.onclick = () => {
                    this.selectedOption = i;
                    this.fc.setValue(this.options[i].value);
                    this.onSelect.emit(this.options[i]);
                };
            });
            this.curOptions = JSON.stringify(this.options);
        });
    }

    ngAfterViewInit(): void {
        this.init();
    }
}

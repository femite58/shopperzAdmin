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
export class CustomSelectComponent implements AfterViewInit {
    @Input() placeholder;
    @Input() fc?: AbstractControl;
    @Input() options: { value: any; txt: any }[];
    curOptions;
    @Output() onSelect = new EventEmitter();
    @Input() valueTxt;
    @Input() readonly;
    @Output() onDropChng = new EventEmitter();

    selectedOption = -1;

    @ViewChild('customSelect') customSelect: ElementRef;

    init() {
        setTimeout(() => {
            let options =
                this.customSelect.nativeElement.querySelectorAll('.option');
            for (let o of this.options) {
                if (o.value == this.fc?.value) {
                    this.selectedOption = this.options.indexOf(o);
                    break;
                }
            }
        });
    }

    dropClick(e) {
        let clicked = e.target.closest('.option');
        if (!clicked) return;
        let options = [
            ...this.customSelect.nativeElement.querySelectorAll('.option'),
        ];
        for (let o of options) {
            let i = options.indexOf(o);
            if (o.innerHTML.includes(this.options[i].txt)) {
                if (clicked.innerHTML == o.innerHTML) {
                    this.selectedOption = i;
                    this.fc?.setValue(this.options[i].value);
                    this.onSelect.emit(this.options[i]);
                    break;
                }
            }
        }
    }

    ngAfterViewInit(): void {
        this.init();
    }
}

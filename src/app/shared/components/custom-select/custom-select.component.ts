import {
    AfterViewInit,
    Component,
    ElementRef,
    EventEmitter,
    Input,
    OnChanges,
    OnDestroy,
    Output,
    SimpleChanges,
    ViewChild,
} from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

@Component({
    selector: 'custom-select',
    templateUrl: './custom-select.component.html',
    styleUrls: ['./custom-select.component.scss'],
})
export class CustomSelectComponent
    implements AfterViewInit, OnDestroy, OnChanges
{
    @Input() placeholder;
    @Input() fc?: AbstractControl;
    @Input() options: { value: any; txt: any }[];
    @Input() innerClose: string;
    curOptions;
    @Output() onSelect = new EventEmitter();
    @Input() valueTxt;
    @Input() readonly;
    @Input() uniqueId;
    @Output() onDropChng = new EventEmitter();

    selectedOption = -1;
    valSub;
    closeDropdwn = new BehaviorSubject(false);

    @ViewChild('customSelect') customSelect: ElementRef;

    ngOnDestroy(): void {
        this.valSub.unsubscribe();
    }

    ngOnChanges(changes: SimpleChanges): void {
        for (let o of this.options) {
            if (o.value == this.fc.value) {
                this.selectedOption = this.options.indexOf(o);
                break;
            }
        }
    }

    dropClick(e) {
        console.log(e);
        let clicked = e.target.closest('.option');
        if (!clicked) return;
        let options = [].slice.call(
            document.querySelectorAll(
                'body>.cusDropdown:last-child .option'
            ) as NodeListOf<HTMLElement>
        );
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
        for (let o of this.options) {
            if (o.value == this.fc.value) {
                this.selectedOption = this.options.indexOf(o);
                break;
            }
        }
        this.valSub = this.fc.valueChanges.subscribe((val) => {
            if (this.valueTxt) return;
            for (let o of this.options) {
                if (o.value == val) {
                    this.selectedOption = this.options.indexOf(o);
                    break;
                }
            }
        });
    }
}

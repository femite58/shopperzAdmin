import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnChanges,
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
  @Input() options;
  curOptions;

  selectedOption = -1;

  @ViewChild('customSelect') customSelect: ElementRef;

  ngOnChanges(changes: SimpleChanges): void {
    if (!this.customSelect || JSON.stringify(this.options) == this.curOptions)
      return;
    this.init();
  }

  init() {
    setTimeout(() => {
      let options = this.customSelect.nativeElement.querySelectorAll('.option');
      options.forEach((o, i) => {
        o.onclick = () => {
          this.selectedOption = i;
          this.fc.setValue(this.options[i].value);
        };
      });
      this.curOptions = JSON.stringify(this.options);
    });
  }

  ngAfterViewInit(): void {
    this.init();
  }
}

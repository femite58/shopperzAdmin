import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'cus-checkbox',
  templateUrl: './cus-checkbox.component.html',
  styleUrls: ['./cus-checkbox.component.scss'],
})
export class CusCheckboxComponent {
  @Input() txt;
  @Input() checked = false;
  @Input() fcn;
  @Input() idn;
  @Input() type = 'checkbox';
  @Input() val;
  @Input() disabled = false;
  @Output() onChange = new EventEmitter();

  change(inp) {
    this.onChange.emit(inp.checked);
  }
}

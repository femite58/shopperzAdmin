import { Component, Input } from '@angular/core';

@Component({
  selector: 'submit-btn',
  templateUrl: './submit-btn.component.html',
  styleUrls: ['./submit-btn.component.scss'],
})
export class SubmitBtnComponent {
  @Input() btnTxt: string;
  @Input() clss: string = 'primBtn';
  @Input() loading = false;
  @Input() disabled = true;
}

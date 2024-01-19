import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-inner-cont-phone',
  templateUrl: './inner-cont-phone.component.html',
  styleUrls: ['./inner-cont-phone.component.scss'],
})
export class InnerContPhoneComponent implements OnInit {
  @Input() focused = false;
  @Input() error = false;

  constructor() {}

  ngOnInit(): void {}
}

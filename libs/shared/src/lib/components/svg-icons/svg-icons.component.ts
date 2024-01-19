import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'svg-icons',
  templateUrl: './svg-icons.component.html',
  styleUrls: ['./svg-icons.component.scss'],
})
export class SvgIconsComponent implements OnInit {
  @Input() name;
  constructor() {}

  ngOnInit(): void {}
}

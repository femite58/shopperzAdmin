import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-page-head',
  templateUrl: './page-head.component.html',
  styleUrls: ['./page-head.component.scss'],
})
export class PageHeadComponent {
  @Input() pageTitle;
  @Input() backAct;
}

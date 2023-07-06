import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-empty-items',
  templateUrl: './empty-items.component.html',
  styleUrls: ['./empty-items.component.scss'],
})
export class EmptyItemsComponent {
  @Input() title;
  @Input() body;
}

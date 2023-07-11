import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pagination-parent',
  templateUrl: './pagination-parent.component.html',
  styleUrls: ['./pagination-parent.component.scss']
})
export class PaginationParentComponent {
  @Input() count;
  @Input() limit;
}

import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pagination-parent',
  templateUrl: './pagination-parent.component.html',
  styleUrls: ['./pagination-parent.component.scss'],
})
export class PaginationParentComponent {
  @Input() count;
  @Input() limit;
  @Input() page;
  @Output() onLimitChange = new EventEmitter();
  @Output() setPage = new EventEmitter();
  onSetPage(page) {
    this.setPage.emit(page);
  }
}

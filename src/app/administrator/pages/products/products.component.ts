import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  closeModal = new BehaviorSubject(false);
  constructor() {}

  ngOnInit(): void {}

  onClose() {}
}

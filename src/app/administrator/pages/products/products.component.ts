import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  closeModal = new BehaviorSubject(false);
  count = 2;
  page = 1;
  products = [
    {
      id: 1,
      name: 'Oculus VR',
      image: 'assets/images/products/image_sm1.png',
      stores: ['Shopperz-Ikeja', 'Ojota-branch'],
      category: 'Electronics',
      qty: 376,
      available_qty: 50,
      selling_price: 503.67,
      discount_price: 500,
      average_rating: 4,
      flash_price: 100,
    },
    {
      id: 2,
      name: 'Wall Modern Clock',
      image: 'assets/images/products/image_sm2.png',
      stores: ['Shopperz-Ikeja', 'Ojota-branch'],
      category: 'Home accessories',
      qty: 291,
      available_qty: 32,
      selling_price: 157.62,
      discount_price: 199,
      average_rating: 0,
      flash_price: 0,
    },
  ];
  constructor() {}

  ngOnInit(): void {}

  onClose() {}
}

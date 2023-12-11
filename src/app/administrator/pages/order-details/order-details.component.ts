import { Component } from '@angular/core';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss'],
})
export class OrderDetailsComponent {
  orderStatus = 'Pending';
  product = [
    {
      id: 1,
      sku: 'SHI-65483',
      product_name: 'Oculus VR',
      price: 999.29,
      qty: 1,
      disc: 5,
    },
    {
      id: 2,
      sku: 'SHI-65483',
      product_name: 'Note Diaries',
      price: 999.29,
      qty: 2,
      disc: 5,
    },
    {
      id: 3,
      sku: 'SHI-65483',
      product_name: 'Apple iPhone 13',
      price: 999.29,
      qty: 3,
      disc: 5,
    },
  ];
}

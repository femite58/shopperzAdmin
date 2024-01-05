import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-products-form',
  templateUrl: './products-form.component.html',
  styleUrls: ['./products-form.component.scss'],
})
export class ProductsFormComponent {
  form = new FormGroup({
    name: new FormControl('', Validators.required),
    category: new FormControl('', Validators.required),
    overview: new FormControl('', Validators.required),
    regular_price: new FormControl('', Validators.required),
    discount_price: new FormControl(''),
    sku: new FormControl(''),
    warranty: new FormControl(''),
    warranty_unit: new FormControl('Years'),
    stores: new FormArray([
      new FormGroup({
        store: new FormControl(''),
        quantity: new FormControl(''),
      }),
    ]),
  });

  stores = [];
  categories = [];

  warranties = [
    { txt: 'Years', value: 'Years' },
    { txt: 'Months', value: 'Months' },
    { txt: 'Days', value: 'Days' },
  ];

  f(n): any {
    return this.form.get(n);
  }

  constructor() {}
}

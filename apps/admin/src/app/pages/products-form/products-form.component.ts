import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { FileUploadService } from 'libs/shared/src/lib/services/api/file-upload.service';

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
    images: new FormControl([]),
    stores: new FormArray([
      new FormGroup({
        store: new FormControl(''),
        quantity: new FormControl(''),
      }),
    ]),
    brand: new FormControl(''),
    size: new FormControl(''),
    weight: new FormControl(''),
    color: new FormControl(''),
    barcode: new FormControl(''),
  });
  submitting = false;

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

  constructor(private fileS: FileUploadService) {}

  delImg(i, e) {
    e.stopPropagation();
    let imgs = this.f('images').value;
    imgs.splice(i, 1);
    this.f('images').setValue(imgs);
  }

  addStore() {
    this.f('stores').push(
      new FormGroup({
        store: new FormControl('', Validators.required),
        quantity: new FormControl('', Validators.required),
      })
    );
  }

  delStore(i) {
    this.f('stores').removeAt(i);
  }

  pickImg(i) {
    this.fileS.cropInfo.next({
      aspectRatio: 1,
      callback: (info) => {
        let imgs = this.f('images').value;
        imgs.splice(i, 1, info.url);
        this.f('images').setValue(imgs);
      },
    });
  }
}

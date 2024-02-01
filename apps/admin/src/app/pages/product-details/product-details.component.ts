import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConfirmActionService } from 'libs/shared/src/lib/services/api/confirm-action.service';
import { ProductService } from 'libs/shared/src/lib/services/api/user/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  product;
  pid;
  totalQty = 0;
  actInd = 0;
  constructor(
    private prodS: ProductService,
    private route: ActivatedRoute,
    private confS: ConfirmActionService
  ) {}
  ngOnInit(): void {
    this.route.params.subscribe((p) => {
      this.pid = p.id;
      this.getProduct();
    });
  }

  get rating() {
    return !this.product ? 0 : +this.product?.avg_rating?.toFixed(0);
  }

  numArr(n) {
    return Array(n).fill(0);
  }

  private getProduct() {
    this.product = {
      id: this.pid,
      name: 'Xerox iphone 13 pro max',
      category: 'Electronics',
      sub_category: 'Electronics',
      subsub_category: 'Electronics',
      overview:
        'Lorem Ipsum is simply dummy text of the printing and typesetting',
      quantity: 325,
      stores: [
        { id: 1, name: 'Shopperz - Ikeja', quantity: 100 },
        { id: 1, name: 'Ojo', quantity: 200 },
        { id: 1, name: 'Festac', quantity: 3 },
        { id: 1, name: 'Lekki', quantity: 1 },
        { id: 1, name: 'Alimosho', quantity: 11 },
      ],
      regular_price: 5300,
      discount_price: 4500,
      sku: '25662102',
      barcode: '11233352',
      brand: 'Teslar',
      warranty: '3',
      warranty_unit: 'Years',
      size: 'XXL',
      color: '#ff0000',
      description:
        'Direction has strangers now believing. Respect enjoyed gay far exposed parlors towards. Enjoyment use tolerably dependent listening men. No peculiar in handsome together unlocked do by. Article concern joy anxious did picture sir her. Although desirous not recurred disposed off shy you numerous securing. Knowledge nay estimable questions repulsive daughters boy. Solicitude gay way unaffected expression for.',
      avg_rating: 4,
      rating_count: 449,
      images: [
        'assets/images/products/prodImg1.png',
        'assets/images/products/prodImg2.png',
        'assets/images/products/prodImg3.png',
      ],
    };
    this.totalQty = this.product.stores
      .map((q) => q.quantity)
      .reduce((a, b) => a + b);
  }

  deleteProd() {
    this.confS.actionObj.next({
      title: 'Delete Product',
      body: 'Are you sure you want to delete product from store?',
      confirmTxt: 'Delete',
      confirm: () => {},
    });
  }
}

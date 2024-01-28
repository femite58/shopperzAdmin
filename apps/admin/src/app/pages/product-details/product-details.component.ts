import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'libs/shared/src/lib/services/api/user/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  product;
  pid;
  constructor(private prodS: ProductService, private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.route.params.subscribe((p) => {
      this.pid = p.id;
      this.getProduct();
    });
  }

  private getProduct() {
    this.product = {
      id: this.pid,
      name: 'Xerox iphone 13 pro max',
      category: 'Electronics'
    };
  }
}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { ConfirmActionService } from 'src/app/data/services/confirm-action.service';
import { InformationService } from 'src/app/data/services/information.service';

@Component({
  selector: 'app-sales-promo',
  templateUrl: './sales-promo.component.html',
  styleUrls: ['./sales-promo.component.scss'],
})
export class SalesPromoComponent implements OnInit {
  constructor(
    private infoService: InformationService,
    private confS: ConfirmActionService,
    private route: ActivatedRoute
  ) {}
  customerData = this.infoService.customerData;
  couponData = this.infoService.couponData;
  products = this.infoService.products;
  tab = 'coupons';
  count = 5;
  limit = 3;
  page = 1;
  submitting = false;
  form = new FormGroup({
    selectProd: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
    discountPrice: new FormControl('', Validators.required),
    flsPrice: new FormControl('', Validators.required),
    limitSet: new FormControl('', Validators.required),
  });
  currentId;
  deleting;
  filteredVal = new FormControl('All');
  selectedTab = 1;
  closeModal = new BehaviorSubject(false);

  filterOpts = [
    { txt: 'All', value: 'All' },
    { txt: 'Active', value: 'Active' },
    { txt: 'Inactive', value: 'Inactive' },
  ];
  filterOpts2 = [
    { txt: 'All', value: 'All' },
    { txt: 'Active', value: 'Active' },
    { txt: 'Inactive', value: 'Inactive' },
  ];
  prods = this.products;

  get couponFiltered() {
    return this.couponData.filter((item) => {
      if (this.filteredVal.value == 'All') return true;
      return this.filteredVal.value == item.status;
    });
  }
  get fSalesFiltered() {
    return this.couponData.filter((item) => {
      if (this.filteredVal.value == 'All') return true;
      return this.filteredVal.value == item.status;
    });
  }
  deleteCustomer() {
    // this.currentId;
    this.deleting = this.currentId;
    setTimeout(() => {
      this.customerData = this.customerData.filter(
        (c) => c.id != this.currentId
      );
      this.deleting = null;
    }, 1000);
    this.closeModal.next(true);
  }

  ngOnInit(): void {
    this.route.params.subscribe((p) => {
      this.tab = p.tab;
    });
  }
  onSetPage(page) {
    this.page = page;
  }
  deleteConf(id) {
    this.currentId = id;
    this.confS.actionObj.next({
      title: 'Delete Customer',
      body: 'Are you sure you want to delete customer data?',
      confirm: () => {
        this.deleting = this.currentId;
        setTimeout(() => {
          this.customerData = this.customerData.filter(
            (c) => c.id != this.currentId
          );
          this.deleting = null;
        }, 1000);
        this.closeModal.next(true);
      },
      confirmTxt: 'Delete',
    });
  }
  submit() {}
}

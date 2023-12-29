import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { ConfirmActionService } from 'src/app/data/services/confirm-action.service';
import { InformationService } from 'src/app/data/services/information.service';

@Component({
  selector: 'app-coupon',
  templateUrl: './coupon.component.html',
  styleUrls: ['./coupon.component.scss'],
})
export class CouponComponent {
  constructor(
    private infoService: InformationService,
    private confS: ConfirmActionService
  ) {}
  customerData = this.infoService.customerData;
  couponData = this.infoService.couponData;
  products = this.infoService.products;
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

  get couponFiltered() {
    return this.couponData.filter((item) => {
      if (this.filteredVal.value == 'All') return true;
      return this.filteredVal.value == item.status;
    });
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
  
  selectTab(tabNumber: number) {
    this.selectedTab = tabNumber;
    this.filteredVal = new FormControl('All');
    document.documentElement.style.setProperty('--active-tab', `${tabNumber}`);
  }
}

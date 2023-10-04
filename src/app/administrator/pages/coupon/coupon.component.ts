import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { ConfirmActionService } from 'src/app/data/services/confirm-action.service';
import { InformationService } from 'src/app/data/services/information.service';

@Component({
  selector: 'app-coupon',
  templateUrl: './coupon.component.html',
  styleUrls: ['./coupon.component.scss']
})
export class CouponComponent {
  constructor (private infoService: InformationService, private confS: ConfirmActionService) {}
  customerData = this.infoService.customerData;
  count = 5;
  limit = 3;
  page = 1;
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

  selectTab(tabNumber: number) {
    this.selectedTab = tabNumber;
  }
  get objectFiltered() {
    return this.customerData.filter((item) => {
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

}

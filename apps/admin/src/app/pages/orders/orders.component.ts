import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { CountryService } from 'libs/shared/src/lib/services/localData/country.service';
import { ConfirmActionService } from 'libs/shared/src/lib/services/api/confirm-action.service';
import { InformationService } from 'libs/shared/src/lib/services/api/information.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent implements OnInit {
  submitting = false;
  closeModal = new BehaviorSubject(false);
  accListener = new BehaviorSubject(-1);
  stores = [];
  count = 5;
  limit = 3;
  page = 1;
  currentStat;
  deactivate;
  selectedOrder: any;
  orderData = this.infoService.orderData;
  orderDetails = [
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

  filteredVal = new FormControl('All');
  filterOpts = [
    { txt: 'All', value: 'All' },
    { txt: 'Complete', value: 'Complete' },
    { txt: 'Pending', value: 'Pending' },
    { txt: 'Shipped', value: 'Shipped' },
    { txt: 'Canceled', value: 'Canceled' },
  ];
  constructor(
    private route: ActivatedRoute,
    private locS: CountryService,
    private confS: ConfirmActionService,
    private infoService: InformationService
  ) {}
  ngOnInit(): void {
    console.log(this.orderDetails);
  }

  get objectFiltered() {
    return this.orderData.filter((item) => {
      if (this.filteredVal.value === 'All') return true;
      return this.filteredVal.value === item.status;
    });
  }
  onClose() {}
  openDeactivateModal(store: any) {
    this.selectedOrder = store;
  }
  onSetPage(page) {
    this.page = page;
  }
  toggleAccordion(ord: any) {
    ord.isAccordionOpen = !ord.isAccordionOpen;
  }

  stopPropagation(e) {
    e.preventDefault();
    e.stopPropagation();
  }
}

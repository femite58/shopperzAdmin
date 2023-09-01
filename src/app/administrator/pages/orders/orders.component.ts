import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { CountryService } from 'src/app/data/localData/country.service';
import { ConfirmActionService } from 'src/app/data/services/confirm-action.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent implements OnInit {
  submitting = false;
  closeModal = new BehaviorSubject(false);
  stores = [];
  count = 5;
  limit = 3;
  page = 1;
  currentStat;
  deactivate;
  selectedOrder: any;
  storesData = [
    
    {
      id: '1',
      date_created: Date.now(),
      order_id: 'SHI-23571',
      item: 'Oculus VR, Soap, Speaker, T-shirt',
      amount: 503.7,
      str_name: 'Zcross - Lekki',
      order_type: 'Mathew',
      status: 'Complete',
    },
    {
      id: '2',
      date_created: Date.now(),
      order_id: 'SHI-23571',
      item: 'DJI MAcvic Quadcopter, Premier',
      amount: 503.7,
      str_name: 'Shopperz-Festac',
      order_type: 'In Store',
      status: 'Pending',
    },
    {
      id: '3',
      date_created: Date.now(),
      order_id: 'SHI-23571',
      item: 'Oculus VR, Soap, Speaker, T-shirt',
      amount: 503.7,
      str_name: 'Shopperz-Badagry',
      order_type: 'Home Delivery',
      status: 'Complete',
    },
    {
      id: '4',
      date_created: Date.now(),
      order_id: 'SHI-23571',
      item: 'DJI MAcvic Quadcopter, Premier',
      amount: 503.7,
      str_name: 'Shopperz-Sango',
      order_type: 'Scanning',
      status: 'Pending',
    },
    {
      id: '5',
      date_created: Date.now(),
      order_id: 'SHI-23571',
      item: 'Oculus VR, Soap, Speaker, T-shirt',
      amount: 503.7,
      str_name: 'Shopperz-Ojo',
      order_type: 'Booking',
      status: 'Shipped',
    },
    {
      id: '6',
      date_created: Date.now(),
      order_id: 'SHI-23571',
      item: 'Oculus VR, Soap, Speaker, T-shirt',
      amount: 503.7,
      str_name: 'Shopperz-Lekki',
      order_type: 'Booking',
      status: 'Canceled',
    },
  ];
  orderDetails: [
    {
      sku: 'SHI-65483', product_name: 'Oculus VR', price: 999.29, qty: 1, disc: 5
    },
    {
      sku: 'SHI-65483', product_name: 'Note Diaries', price: 999.29, qty: 2, disc: 5
    },
    {
      sku: 'SHI-65483', product_name: 'Apple iPhone 13', price: 999.29, qty: 3, disc: 5
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
    private confS: ConfirmActionService
  ) {}
  ngOnInit(): void {
    console.log(this.orderDetails);
    
  }

   
  get objectFiltered() {
    return this.storesData.filter((item) => {
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
  
}

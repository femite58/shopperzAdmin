import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { ConfirmActionService } from 'src/app/data/services/confirm-action.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss'],
})
export class CustomersComponent implements OnInit {
  count = 5;
  limit = 3;
  page = 1;
  constructor(private confS: ConfirmActionService) {}
  customerData = [
    {
      id: '1',
      firstname: 'Hawawu',
      lastname: 'Shittu',
      email: 'ishaqhawawu66@gmail.com',
      created_at: Date.now(),
      phone: '07066091112',
      rank: 'Loyalty',
      order_count: 523,
      status: 'Active',
    },
    {
      id: '2',
      firstname: '-',
      lastname: '',
      email: 'tijanialiy@gmail.com',
      created_at: Date.now(),
      phone: '-',
      rank: '-',
      order_count: '-',
      status: 'Inactive',
    },
    {
      id: '3',
      firstname: 'Aliu',
      lastname: 'Tijani',
      email: 'rasmusjoeelm@gmail.com',
      created_at: Date.now(),
      phone: '08095577527',
      rank: 'Loyalty',
      order_count: 205,
      status: 'Active',
    },
    {
      id: '4',
      firstname: 'Henry',
      lastname: 'Essien',
      email: 'henryvictor161@gmail.com',
      created_at: Date.now(),
      phone: '+2348060240322',
      rank: 'Loyalty',
      order_count: 112,
      status: 'Active',
    },
    {
      id: '5',
      firstname: 'Benneth',
      lastname: 'Akintolure',
      email: 'bennettanderson8@gmail.com',
      created_at: Date.now(),
      phone: '07063012438',
      rank: 'Loyalty',
      order_count: '-',
      status: 'Inactive',
    },
  ];
  currentId;
  deleting;
  filteredVal = new FormControl('All');

  form = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
    rank: new FormControl('', Validators.required),
  });
  submitting = false;

  options = [{ txt: 'Loyalty member', value: 'Loyalty member' }];

  get objectFiltered() {
    return this.customerData.filter((item) => {
      if (this.filteredVal.value == 'All') return true;
      return this.filteredVal.value == item.status;
    });
  }

  filterOpts = [
    { txt: 'All', value: 'All' },
    { txt: 'Active', value: 'Active' },
    { txt: 'Inactive', value: 'Inactive' },
  ];
  f(n) {
    return this.form.get(n);
  }
  submit() {
    this.closeModal.next(true);
  }
  closeModal = new BehaviorSubject(false);

  ngOnInit(): void {}
  onClose() {}
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

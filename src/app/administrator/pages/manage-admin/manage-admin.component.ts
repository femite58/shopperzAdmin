import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { ConfirmActionService } from 'src/app/data/services/confirm-action.service';

@Component({
  selector: 'app-manage-admin',
  templateUrl: './manage-admin.component.html',
  styleUrls: ['./manage-admin.component.scss']
})
export class ManageAdminComponent {
  count = 5;
  limit = 3;
  page = 1;
  constructor (private confS: ConfirmActionService) {

  }
  managerData = [
    {
      id: '1',
      firstname: 'Hawawu',
      lastname: 'Shittu',
      role: 'Manager',
      store: 'Shopperz-Ikeja,Festac',
      email: 'ishaqhawawu66@gmail.com',
      phone: '07066091112',
      status: 'Online',
    },
    {
      id: '2',
      firstname: 'Hawawu',
      lastname: 'Shittu',
      role: 'Manager',
      store: 'Shopperz-Ikeja,Festac',
      email: 'ishaqhawawu66@gmail.com',
      phone: '07066091112',
      status: 'Offline',
    },
    {
      id: '3',
      firstname: 'Hawawu',
      lastname: 'Shittu',
      role: 'Manager',
      store: 'Shopperz-Ikeja,Festac',
      email: 'ishaqhawawu66@gmail.com',
      phone: '07066091112',
      status: 'Online',
    },
    {
      id: '4',
      firstname: 'Hawawu',
      lastname: 'Shittu',
      role: 'Manager',
      store: 'Shopperz-Ikeja,Festac',
      email: 'ishaqhawawu66@gmail.com',
      phone: '07066091112',
      status: 'Offline',
    },
    {
      id: '5',
      firstname: 'Hawawu',
      lastname: 'Shittu',
      role: 'Manager',
      store: 'Shopperz-Ikeja,Festac',
      email: 'ishaqhawawu66@gmail.com',
      phone: '07066091112',
      status: 'Online',
    },
  ];
  currentId;
  deleting;
  filteredVal = new FormControl('All');
  closeModal = new BehaviorSubject(false);

  form = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
    rank: new FormControl('', Validators.required),
  });
  f(n) {
    return this.form.get(n);
  }
  submit() {
    this.closeModal.next(true);
  }
  submitting = false;

  options = [{ txt: 'Loyalty member', value: 'Loyalty member' }];

  get objectFiltered() {
    return this.managerData.filter((item) => {
      if (this.filteredVal.value == 'All') return true;
      return this.filteredVal.value == item.status;
    });
  }

  filterOpts = [
    { txt: 'All', value: 'All' },
    { txt: 'Active', value: 'Active' },
    { txt: 'Inactive', value: 'Inactive' },
  ];
  deleteCustomer() {
    // this.currentId;
    this.deleting = this.currentId;
    setTimeout(() => {
      this.managerData = this.managerData.filter(
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
          this.managerData = this.managerData.filter(
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

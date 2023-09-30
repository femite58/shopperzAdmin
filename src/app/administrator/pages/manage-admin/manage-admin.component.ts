import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { ConfirmActionService } from 'src/app/data/services/confirm-action.service';
import { InformationService } from 'src/app/data/services/information.service';

@Component({
  selector: 'app-manage-admin',
  templateUrl: './manage-admin.component.html',
  styleUrls: ['./manage-admin.component.scss']
})
export class ManageAdminComponent {
  count = 5;
  limit = 3;
  page = 1;
  constructor (private confS: ConfirmActionService, private infoService: InformationService) {

  }
  managerData = this.infoService.managerData;
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

  store = [{ txt: 'Shopperz-Ikeja', value: 'Shopperz-Ikeja' }];
  role = [{ txt: 'Manager', value: 'Manager' }];

  get objectFiltered() {
    return this.managerData.filter((item) => {
      if (this.filteredVal.value == 'All') return true;
      return this.filteredVal.value == item.status;
    });
  }

  filterOpts = [
    { txt: 'All', value: 'All' },
    { txt: 'Online', value: 'Online' },
    { txt: 'Offline', value: 'Offline' },
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
      title: 'Delete Manager',
      body: 'Are you sure you want to delete manager data?',
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

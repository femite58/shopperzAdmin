import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { ConfirmActionService } from 'src/app/data/services/confirm-action.service';
import { InformationService } from 'src/app/data/services/information.service';

@Component({
  selector: 'app-admin-details',
  templateUrl: './admin-details.component.html',
  styleUrls: ['./admin-details.component.scss'],
})
export class AdminDetailsComponent implements OnInit {
  count = 5;
  limit = 3;
  page = 1;
  cancelVisible = false;
  updateVisible = false;
  currentId: any;
  constructor(
    private confS: ConfirmActionService,
    private infoService: InformationService
  ) {}
  ngOnInit(): void {
    this.cancelVisible = false;
    this.updateVisible = false;
  }
  submitting = false;
  form = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
    role: new FormControl('', Validators.required),
    store: new FormControl('', Validators.required),
  });
  options = [
    { txt: 'Manager', value: 'Manager' },
    { txt: 'Manager', value: 'Manager' },
  ];
  storeOpts = [
    { txt: 'Shopperz-Ikeja', value: 'Shopperz-Ikeja' },
    { txt: 'Shopperz-Egbeda', value: 'Shopperz-Egbeda' },
  ];
  mngData = this.infoService.managerData;
  deleting;
  closeModal = new BehaviorSubject(false);

  // ngOnit():void {

  // }

  f(n) {
    return this.form.get(n);
  }
  submit() {}
  deleteCustomer() {
    // this.currentId;
    this.deleting = this.currentId;
    setTimeout(() => {
      this.mngData = this.mngData.filter((c) => c.id != this.currentId);
      this.deleting = null;
    }, 1000);
    this.closeModal.next(true);
  }
  deleteConf(id) {
    this.currentId = id;
    this.confS.actionObj.next({
      title: 'Delete Customer',
      body: 'Are you sure you want to delete customer data?',
      confirm: () => {
        this.deleting = this.currentId;
        setTimeout(() => {
          this.mngData = this.mngData.filter((c) => c.id != this.currentId);
          this.deleting = null;
        }, 1000);
        this.closeModal.next(true);
      },
      confirmTxt: 'Delete',
    });
  }
  editUser() {
    this.cancelVisible = !this.cancelVisible;
    this.updateVisible = !this.updateVisible;
    console.log('You can now update your profile...');
  }
}

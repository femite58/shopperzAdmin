import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-details',
  templateUrl: './admin-details.component.html',
  styleUrls: ['./admin-details.component.scss'],
})
export class AdminDetailsComponent {
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
  ]

  f(n) {
    return this.form.get(n);
  }
  submit() {}
  // deleteCustomer() {
  //   // this.currentId;
  //   this.deleting = this.currentId;
  //   setTimeout(() => {
  //     this.man = this.man.filter(
  //       (c) => c.id != this.currentId
  //     );
  //     this.deleting = null;
  //   }, 1000);
  //   this.closeModal.next(true);
  // }
  // deleteConf(id) {
  //   this.currentId = id;
  //   this.confS.actionObj.next({
  //     title: 'Delete Customer',
  //     body: 'Are you sure you want to delete customer data?',
  //     confirm: () => {
  //       this.deleting = this.currentId;
  //       setTimeout(() => {
  //         this.man = this.man.filter(
  //           (c) => c.id != this.currentId
  //         );
  //         this.deleting = null;
  //       }, 1000);
  //       this.closeModal.next(true);
  //     },
  //     confirmTxt: 'Delete',
      
  //   });
  // }
}

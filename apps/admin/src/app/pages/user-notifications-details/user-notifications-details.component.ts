import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { InformationService } from 'libs/shared/src/lib/services/api/information.service';

@Component({
  selector: 'app-user-notifications-details',
  templateUrl: './user-notifications-details.component.html',
  styleUrls: ['./user-notifications-details.component.scss'],
})
export class UserNotificationsDetailsComponent {
  constructor(private infoS: InformationService) {}
  selectedTab = 1;
  selectTab(tabNumber: number) {
    this.selectedTab = tabNumber;
  }
  form = new FormGroup({
    title: new FormControl('', Validators.required),
    message: new FormControl('', Validators.required),
    admin: new FormControl('', Validators.required),
    location: new FormControl('', Validators.required),
  });
  submitting = false;

  adminOpts = [
    { txt: 'All', value: 'All' },
    { txt: 'Manager', value: 'Manager' },
    { txt: 'Cashier', value: 'Cashier' },
  ];
  storeOpts = [
    { txt: 'All', value: 'All' },
    { txt: 'Shopperz-Ikeja', value: 'Shopperz-Ikeja' },
    { txt: 'Shopperz-Badagry', value: 'Shopperz-Badagry' },
  ];

  adminNotifications = this.infoS.adminNotifications;
  submit() {}
  closeModal = new BehaviorSubject(false);
  f(n) {
    return this.form.get(n);
  }
}

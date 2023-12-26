import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-acc-settings',
  templateUrl: './acc-settings.component.html',
  styleUrls: ['./acc-settings.component.scss']
})
export class AccSettingsComponent {
  filteredVal = new FormControl('All');
  selectedTab = 1;
  options = [
    { txt: 'Manager', value: 'Manager' },
    { txt: 'Manager', value: 'Manager' },
  ];
  form = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
    role: new FormControl('', Validators.required),
    store: new FormControl('', Validators.required),
  });
  selectTab(tabNumber: number) {
    this.selectedTab = tabNumber;
    this.filteredVal = new FormControl('All');
    document.documentElement.style.setProperty('--active-tab', `${tabNumber}`);
  }
  f(n) {
    return this.form.get(n);
  }
  submit() {}

}

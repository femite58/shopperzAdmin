import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-app-settings',
  templateUrl: './app-settings.component.html',
  styleUrls: ['./app-settings.component.scss'],
})
export class AppSettingsComponent implements OnInit {
  form = new FormGroup({
    app_name: new FormControl('Shopperz', Validators.required),
    app_icon: new FormControl(
      'assets/images/app_icons/app_icon3.svg',
      Validators.required
    ),
    splash_screens: new FormArray([
      new FormGroup({
        title: new FormControl('', Validators.required),
        description: new FormControl('', Validators.required),
        image: new FormControl('', Validators.required),
      }),
    ]),
  });

  sc(i, n) {
    return this.f('splash_screens').at(i).get(n);
  }

  f(n): any {
    return this.form.get(n);
  }

  constructor() {}

  ngOnInit(): void {}

  submit() {}
}

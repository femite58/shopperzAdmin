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
    app_icon: new FormControl(''),
    onboarding_screen: new FormArray([
      new FormGroup({
        title: new FormControl('Welcome to Shopperz', Validators.required),
        description: new FormControl(
          'Your number one application for everything shopping, marketplace & more',
          Validators.required
        ),
        image: new FormControl(''),
      }),
    ]),
  });

  submitting = false;

  actInd = 0;

  sc(i, n) {
    return this.f('onboarding_screen').at(i).get(n);
  }

  f(n): any {
    return this.form.get(n);
  }

  showSlide = true;

  constructor() {}

  addMore() {
    (this.f('onboarding_screen') as FormArray).push(
      new FormGroup({
        title: new FormControl('', Validators.required),
        description: new FormControl('', Validators.required),
        image: new FormControl(''),
      })
    );
    this.sc(
      this.f('onboarding_screen').length - 1,
      'image'
    ).valueChanges.subscribe(this.rebuildSlide);
    this.rebuildSlide();
  }

  rebuildSlide = (arg = null) => {
    this.showSlide = false;
    setTimeout(() => {
      this.showSlide = true;
    });
  };

  delSlide(i) {
    this.f('onboarding_screen').removeAt(i);
    this.rebuildSlide();
  }

  ngOnInit(): void {
    this.sc(0, 'image').valueChanges.subscribe(this.rebuildSlide);
  }

  submit() {}
}

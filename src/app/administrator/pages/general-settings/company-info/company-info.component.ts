import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-company-info',
  templateUrl: './company-info.component.html',
  styleUrls: ['./company-info.component.scss'],
})
export class CompanyInfoComponent implements OnInit {
  submitting = false;
  form = new FormGroup({
    name: new FormControl('', Validators.required),
    owner: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    facebook_url: new FormControl(''),
    twitter_url: new FormControl(''),
    instagram_url: new FormControl(''),
    linkedin_url: new FormControl(''),
    terms_and_condition: new FormControl(''),
    privacy_policy: new FormControl(''),
  });

  f(n) {
    return this.form.get(n);
  }

  constructor() {}

  ngOnInit(): void {}

  submit() {}
}

import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-banners',
  templateUrl: './banners.component.html',
  styleUrls: ['./banners.component.scss'],
})
export class BannersComponent implements OnInit {
  form = new FormGroup({
    banners: new FormArray([new FormControl('')]),
  });
  submitting = false;
  get banners() {
    return this.form.get('banners') as FormArray;
  }

  constructor() {}

  ngOnInit(): void {}

  addMore() {
    this.banners.push(new FormControl(''));
  }

  submit() {}
}

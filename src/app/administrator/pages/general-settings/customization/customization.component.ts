import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-customization',
  templateUrl: './customization.component.html',
  styleUrls: ['./customization.component.scss'],
})
export class CustomizationComponent implements OnInit {
  form = new FormGroup({
    primary_color: new FormControl('#F8253A', Validators.required),
    secondary_color: new FormControl('#292931', Validators.required),
    logo: new FormControl('', Validators.required),
    favicon: new FormControl('', Validators.required),
  });
  submitting = false;
  f(n) {
    return this.form.get(n);
  }

  constructor() {}

  ngOnInit(): void {}

  submit() {}
}

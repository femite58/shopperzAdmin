import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss'],
})
export class PasswordComponent {
  submitting = false;

  passForm = new FormGroup({
    current_password: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    confnewpass: new FormControl('', Validators.required),
  });
  submit() {}
}

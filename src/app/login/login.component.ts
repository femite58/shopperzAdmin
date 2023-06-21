import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form = new FormGroup({
    user: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });
  submitting = false;
  f(n) {
    return this.form.get(n);
  }
  constructor(private router: Router) {}
  ngOnInit(): void {}

  submit() {
    this.router.navigateByUrl('/administrator/dashboard');
  }
}

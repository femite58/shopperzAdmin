import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DashboardGuard } from 'src/app/data/guard/dashboard.guard';
import { GuestAuthGuard } from 'src/app/data/guard/guest-auth.guard';

@Component({
  selector: 'app-auth-layout',
  templateUrl: './auth-layout.component.html',
  styleUrls: ['./auth-layout.component.scss'],
})
export class AuthLayoutComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

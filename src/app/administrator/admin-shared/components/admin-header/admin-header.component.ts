import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.scss'],
})
export class AdminHeaderComponent implements OnInit {
  isDashboard = false;
  constructor(private router: Router) {}
  ngOnInit(): void {
    this.isDashboard = !!this.router.url.match(/dashboard/);
  }
}

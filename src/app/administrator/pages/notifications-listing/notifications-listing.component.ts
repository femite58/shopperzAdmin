import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InformationService } from 'src/app/data/services/information.service';

@Component({
  selector: 'app-notifications-listing',
  templateUrl: './notifications-listing.component.html',
  styleUrls: ['./notifications-listing.component.scss']
})
export class NotificationsListingComponent implements OnInit{
  tab = 'admin';
  notifications = [];
  constructor(
    private adminNotiS: InformationService,
    private route: ActivatedRoute
  ){}
  ngOnInit() {
    this.route.params.subscribe(p =>{
      this.tab = p.tab;
      this.getNotis();
    })
  }
  getNotis() {
    this.notifications = this.adminNotiS.adminNotifications;
  }
}

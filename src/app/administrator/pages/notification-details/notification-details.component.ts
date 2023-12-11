import { Component } from '@angular/core';
import { InformationService } from 'src/app/data/services/information.service';

@Component({
  selector: 'app-notification-details',
  templateUrl: './notification-details.component.html',
  styleUrls: ['./notification-details.component.scss']
})
export class NotificationDetailsComponent {
  constructor(
    private infoS: InformationService
  ){}
  selectedTab = 1;
  adminNotifications = this.infoS.adminNotifications;

  selectTab(tabNumber: number) {
    this.selectedTab = tabNumber;
  }
  

}

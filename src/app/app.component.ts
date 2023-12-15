import { Component, OnInit } from '@angular/core';
import { ViewControllerService } from './data/services/view-controller.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Shopperz';

  constructor(private viewCS: ViewControllerService) {}

  ngOnInit(): void {
    this.viewCS.getScrlTop();
    document.documentElement.style.setProperty(
      '--scrollBW',
      `${window.innerWidth - document.body.clientWidth}px`
    );
  }
}

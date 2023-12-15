import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ViewControllerService } from 'src/app/data/services/view-controller.service';

@Component({
  selector: 'sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss'],
})
export class SidemenuComponent implements OnInit {
  scrlListner = new BehaviorSubject(0);
  constructor(private viewCS: ViewControllerService) {}

  onScroll(top) {
    this.viewCS.setScrlTop(top);
  }

  ngOnInit(): void {
    this.scrlListner.next(this.viewCS.scrlTop);
  }
}

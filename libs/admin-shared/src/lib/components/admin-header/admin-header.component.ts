import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { ConfirmActionService } from 'libs/shared/src/lib/services/api/confirm-action.service';

@Component({
  selector: 'admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.scss'],
})
export class AdminHeaderComponent implements OnInit, AfterViewInit {
  isDashboard = false;
  closeModal = new BehaviorSubject(false);
  confirmModalInf;
  @ViewChild('confirmModalOpener') confirmModalOpener: ElementRef;
  constructor(private router: Router, private confS: ConfirmActionService) {}
  ngOnInit(): void {
    this.isDashboard = !!this.router.url.match(/dashboard/);
  }
  ngAfterViewInit(): void {
    this.confS.actionObj.subscribe((info) => {
      if (info) {
        this.confirmModalInf = info;
        this.confirmModalOpener.nativeElement.click();
        this.confS.actionObj.next(null);
      }
    });
  }
  onClose() {}
  confirmAction() {
    this.closeModal.next(true);
    this.confirmModalInf.confirm();
  }
}

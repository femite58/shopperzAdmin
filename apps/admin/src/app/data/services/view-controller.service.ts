import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ViewControllerService {
  loading = new BehaviorSubject(false);
  scrlTop = 0;

  constructor() {}

  getScrlTop() {
    this.scrlTop = +localStorage.getItem('sideBarScrlTop');
  }

  setScrlTop(top) {
    this.scrlTop = top;
    localStorage.setItem('sideBarScrlTop', top.toString());
  }
}

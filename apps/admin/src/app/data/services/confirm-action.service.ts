import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ConfirmActionService {
  actionObj = new BehaviorSubject<{
    title: string;
    body: string;
    confirm: Function;
    cancelTxt?: string;
    confirmTxt?: string;
  }>(null);

  constructor() {}
}

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VerifyModalService {
  openModal = new BehaviorSubject(false);

  constructor() {}
}

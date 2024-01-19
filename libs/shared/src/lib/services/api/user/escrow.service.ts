import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { tap } from 'rxjs/operators';
import { io } from 'socket.io-client';
import { AuthService } from '../auth.service';
import { ConfigService } from '../config.service';
import { NotificationService } from './notification.service';
import { SocketService } from './socket.service';

@Injectable({
  providedIn: 'root',
})
export class EscrowService {
  private baseUrl;
  private auth;
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private http: HttpClient,
    config: ConfigService,
    authS: AuthService,
    private notifS: NotificationService,
    socketS: SocketService
  ) {
    this.socket = socketS.socket;
    authS.user.subscribe((auth) => {
      this.auth = auth;
    });
    this.baseUrl = config.baseUrl;
  }

  createEscrowRes = new BehaviorSubject(null);
  escActionRes = new BehaviorSubject(null);
  moreTimeRes = new BehaviorSubject(null);
  cancelTimeRes = new BehaviorSubject(null);
  acceptTimeRes = new BehaviorSubject(null);
  declineTimeRes = new BehaviorSubject(null);
  escDeliveryResp = new BehaviorSubject(null);

  socket;

  escSingle = new BehaviorSubject(null);

  getReceiverInfo(username): Observable<any> {
    return this.http.get<any>(
      `${this.baseUrl}user/escrow/receiver/${username}`
    );
  }

  createEscrow(data) {
    this.socket.once('escrow', (data) => {
      this.createEscrowRes.next(data);
    });
    this.socket.emit('createEscrow', data, this.auth);
  }

  moreTime(data) {
    // this.socket.once('moreTimeRes', (res) => {
    //   this.moreTimeRes.next(res);
    // });
    this.socket.emit('moreTime', data, this.auth);
  }

  cancelTime(id) {
    // this.socket.once('cancelTimeRes', (res) => {
    //   this.cancelTimeRes.next(res);
    // });
    this.socket.emit('cancelTime', id, this.auth);
  }

  acceptTime(id) {
    // this.socket.once('acceptTimeRes', (res) => {
    //   this.acceptTimeRes.next(res);
    // });
    this.socket.emit('acceptTime', id, this.auth, 'accept');
  }

  declineTime(id) {
    // this.socket.once('acceptTimeRes', (res) => {
    //   this.acceptTimeRes.next(res);
    // });
    this.socket.emit('acceptTime', id, this.auth, 'decline');
  }

  escAction(escrow, role) {
    this.socket.once('escActionRes', (res) => {
      this.escActionRes.next(res);
    });
    this.socket.emit('escAction', escrow, role, this.auth);
  }

  getEscrows(limit, page, role, date) {
    return this.http.get<any>(
      `${this.baseUrl}user/escrow/${limit}/${page}/${role}/${date}`
    );
  }

  confirmDelivery(data) {
    this.socket.once('escDeliveryResp', (res) => {
      this.escDeliveryResp.next(res);
    });
    this.socket.emit('confirmDelivery', data, this.auth);
  }

  leaveEsc(id) {
    if (!isPlatformBrowser(this.platformId)) return;
    this.socket.emit('leaveEscSingle', id);
    this.escSingle.next(null);
  }

  removeListeners() {
    if (!isPlatformBrowser(this.platformId)) return;
    this.socket.removeAllListeners('escrowSingle');
  }

  escTimerCall(id) {
    return this.http.get<any>(`${this.baseUrl}user/escrow/single/${id}`).pipe(
      tap((res) => {
        this.escSingle.next(res.data);
        this.notifS.notifications.next(res.data.notifications);
      })
    );
  }

  listenEscSingle() {
    if (!isPlatformBrowser(this.platformId)) return;
    this.socket.on('escrowSingle', (res) => {
      this.escSingle.next(res);
    });
  }

  getEscrow(id) {
    if (!isPlatformBrowser(this.platformId)) return;
    this.socket.emit('escrowSingle', this.auth, id);
  }
}

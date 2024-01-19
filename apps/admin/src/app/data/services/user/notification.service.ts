import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { io } from 'socket.io-client';
import { AuthService } from '../auth.service';
import { ConfigService } from '../config.service';
import { SocketService } from './socket.service';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  auth;
  private baseUrl;

  notifSub;
  sideMenuSub;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    authS: AuthService,
    private configS: ConfigService,
    private http: HttpClient,
    socketS: SocketService
  ) {
    if (isPlatformBrowser(this.platformId)) {
      this.socket = socketS.socket;
    }
    this.baseUrl = this.configS.baseUrl;
    authS.user.subscribe((auth) => {
      this.auth = auth;
    });
  }

  notifications = new BehaviorSubject(null);

  socket;

  getNotifs() {
    if (!isPlatformBrowser(this.platformId)) return;
    this.socket.on('notifications', (notifs) => {
      this.notifications.next(notifs);
    });
    this.socket.emit('notifications', this.auth);
  }

  leaveNotif() {
    if (!isPlatformBrowser(this.platformId)) return;
    this.socket.emit('leaveNotif', this.auth);
  }

  getAllNotifs(limit, page) {
    return this.http.get<any>(
      `${this.baseUrl}user/all-notification/${limit}/${page}`
    );
  }

  readNotif(id) {
    return this.http
      .get<any>(`${this.baseUrl}user/notification/read/${id}`)
      .pipe(
        tap((res) => {
          this.notifications.next(res.data);
        })
      );
  }

  readAll(limit, page) {
    return this.http
      .get<any>(`${this.baseUrl}user/notification/read-all/${limit}/${page}`)
      .pipe(
        tap((res) => {
          this.notifications.next([]);
        })
      );
  }
}

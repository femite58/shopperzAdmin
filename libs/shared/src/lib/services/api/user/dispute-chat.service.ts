import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { io, Socket } from 'socket.io-client';
import { AuthService } from '../auth.service';
import { ConfigService } from '../config.service';
import { SocketService } from './socket.service';

@Injectable({
  providedIn: 'root',
})
export class DisputeChatService {
  private auth;
  private baseUrl;
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private authS: AuthService,
    private http: HttpClient,
    private configS: ConfigService,
    private socketS: SocketService
  ) {
    this.socket = socketS.socket;
    this.authS.user.subscribe((auth) => {
      this.auth = auth;
    });
    this.baseUrl = this.configS.baseUrl;
  }
  messages = new BehaviorSubject(null);
  closeDispRes = new BehaviorSubject(null);
  isTyping = new BehaviorSubject({ user: null, typing: false });
  sentMsg = new BehaviorSubject(null);

  socket: Socket;

  sendMsg(msg) {
    this.socket.emit('message', msg, this.auth);
  }

  getSentMsg() {
    if (!isPlatformBrowser(this.platformId)) return;
    this.socket.on('sentMsg', (msg) => {
      this.sentMsg.next(msg);
    });
  }

  removeListeners() {
    if (!isPlatformBrowser(this.platformId)) return;
    this.socket.removeAllListeners('sentMsg');
    this.socket.removeAllListeners('isTyping');
    this.socket.removeAllListeners('messages');
    this.socket.removeAllListeners('closeDispResp');
  }

  getTypingUser() {
    if (!isPlatformBrowser(this.platformId)) return;
    this.socket.on('isTyping', (typingObj) => {
      this.isTyping.next(typingObj);
    });
  }

  triggerTyping(dispId, msg) {
    this.socket.emit('typingTrigger', dispId, msg, this.auth.username);
  }

  listenMsgs() {
    if (!isPlatformBrowser(this.platformId)) return;
    this.socket.on('messages', (msgs) => {
      this.messages.next(msgs);
    });
  }

  getMsgs(dispId) {
    if (!isPlatformBrowser(this.platformId)) return;
    this.socket.emit('messages', dispId, this.auth);
  }

  getMoreMsgs(dispId, limit, page) {
    return this.http.get<any>(
      `${this.baseUrl}user/disputes/single/${dispId}/${limit}/${page}`
    );
  }

  leaveDisp(dispId) {
    if (!isPlatformBrowser(this.platformId)) return;
    this.socket.emit('leaveroom', dispId, this.auth);
    this.messages.next(null);
    // this.socket.emit('disconnect');
  }

  listenCloseDisp() {
    if (!isPlatformBrowser(this.platformId)) return;
    this.socket.on('closeDispResp', (res) => {
      this.closeDispRes.next(res);
    });
  }

  closeDisp(dispId) {
    if (!isPlatformBrowser(this.platformId)) return;
    this.socket.emit('closeDispute', dispId, this.auth);
  }

  getDisputes(role, limit, page) {
    return this.http.get<any>(
      `${this.baseUrl}user/disputes/${role}/${limit}/${page}`
    );
  }
}

import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { io } from 'socket.io-client';

@Injectable({
  providedIn: 'root',
})
export class SocketService {
  socket;
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      // this.socket = this.socket || io('http://localhost:3000');
      this.socket =
        this.socket ||
        io('https://socket.pavypay.com', {
          transports: ['websocket'],
        });
      // this.socket = this.socket || io('http://185.237.146.179:3000');
    }
  }
}

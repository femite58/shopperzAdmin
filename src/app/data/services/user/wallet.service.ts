import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';
import { ConfigService } from '../config.service';
import { SocketService } from './socket.service';

@Injectable({
    providedIn: 'root',
})
export class WalletService {
    private baseUrl;
    constructor(
        @Inject(PLATFORM_ID) private platformId: Object,
        private http: HttpClient,
        private config: ConfigService,
        socketS: SocketService
    ) {
        this.baseUrl = config.baseUrl;
        if (!isPlatformBrowser(this.platformId)) return;
        this.socket = socketS.socket;
    }

    savedCards = new BehaviorSubject(null);

    socket;

    depositRes = new BehaviorSubject(null);

    deposit(data) {
        return this.http.post<any>(
            `${this.baseUrl}user/wallet/credit-wallet`,
            data
        );
    }

    depositListen() {
        if (!isPlatformBrowser(this.platformId)) return;
        this.socket.on('deposit', (amnt) => {
            this.depositRes.next(amnt);
        });
    }

    withdraw(data) {
        return this.http.post<any>(
            `${this.baseUrl}user/withdrawal/request`,
            data
        );
    }

    deleteCard(id) {
        return this.http.delete<any>(
            `${this.baseUrl}user/all-cards/delete/${id}`
        );
    }

    validateOtp(data) {
        return this.http.post<any>(
            `${this.baseUrl}user/wallet/validateotp`,
            data
        );
    }

    getSavedCards() {
        return this.http.get<any>(`${this.baseUrl}user/all-cards`).pipe(
            tap(({ data }) => {
                this.savedCards.next(data);
            })
        );
    }
}

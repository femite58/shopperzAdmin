import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ConfigService } from '../config.service';

@Injectable({
    providedIn: 'root',
})
export class DashboardService {
    private baseUrl;

    sideInfo = new BehaviorSubject(null);
    dashInfo = new BehaviorSubject(null);

    constructor(private http: HttpClient, private config: ConfigService) {
        this.baseUrl = config.baseUrl;
    }

    getDashboardInfo() {
        return this.http.get<any>(`${this.baseUrl}user/dashboard`).pipe(
            tap((res) => {
                this.sideInfo.next({
                    usdBal: res.data.usdBal,
                    ngnBal: res.data.ngnBal,
                    topTransaction: res.data.topTransaction,
                });
                this.dashInfo.next(res);
            })
        );
    }
}

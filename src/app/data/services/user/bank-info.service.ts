import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';
import { ConfigService } from '../config.service';

@Injectable({
    providedIn: 'root',
})
export class BankInfoService {
    private baseUrl;
    accInfo = new BehaviorSubject(null);

    constructor(private http: HttpClient, private config: ConfigService) {
        this.baseUrl = config.baseUrl;
    }

    addBank(data) {
        return this.http.post<any>(
            `${this.baseUrl}user/account-settings/add-bank`,
            data
        );
    }

    deleteBank(id) {
        return this.http.delete<any>(
            `${this.baseUrl}user/account-settings/delete-bank/${id}`
        );
    }

    getBankAccs() {
        return this.http
            .get<any>(`${this.baseUrl}user/account-settings/bank`)
            .pipe(
                tap(({ data }) => {
                    this.accInfo.next(data);
                })
            );
    }
}

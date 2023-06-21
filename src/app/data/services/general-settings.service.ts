import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { StorageService } from '../helpers/storage.service';
import { ConfigService } from './config.service';

@Injectable({
    providedIn: 'root',
})
export class GeneralSettingsService {
    private baseUrl;
    private _settings = new BehaviorSubject(null);

    get settings() {
        return this._settings.asObservable();
    }

    constructor(
        private http: HttpClient,
        config: ConfigService,
        private storageService: StorageService
    ) {
        this.baseUrl = config.baseUrl;
    }

    getSettings() {
        // this.http
        //     .post<any>(
        //         'https://socket.bluescrow.com/payment',
        //         JSON.stringify({
        //             username: 'femite58',
        //             data: { amount: 1000 },
        //         }),
        //         {
        //             headers: {
        //                 'Content-Type': 'application/json',
        //                 Accept: 'application/json',
        //             },
        //         }
        //     )
        //     .subscribe();
        return this.http.get<any>(`${this.baseUrl}general-settings`).pipe(
            tap((res) => {
                this._settings.next(res.data);
            })
        );
    }
}

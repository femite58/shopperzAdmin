import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { StorageService } from '../helpers/storage.service';
import { ConfigService } from './config.service';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { DashboardService } from './user/dashboard.service';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    private baseUrl;
    private _user = new BehaviorSubject(null);
    checking = new BehaviorSubject(true);

    constructor(
        @Inject(PLATFORM_ID) private platformId: Object,
        private http: HttpClient,
        config: ConfigService,
        private storageService: StorageService,
        private router: Router,
        private dashbS: DashboardService
    ) {
        this.baseUrl = config.baseUrl;
    }

    get user() {
        return this._user.asObservable();
    }

    signup(data) {
        return this.http.post<any>(`${this.baseUrl}register`, data).pipe(
            tap((res) => {
                this.storeAuth(res.data);
                if (res.data.type == 'business') {
                    this.router.navigate(['/business'], { replaceUrl: true });
                    return;
                }
                this.router.navigate(['/user'], { replaceUrl: true });
            })
        );
        let convData = JSON.parse(data);
        convData.email_verify = 1;
        convData.token = '1234k2aslkdfasdl';
        convData.two_authentication = 0;
        return of(convData).pipe(
            tap((auth) => {
                this.storeAuth(auth);
            })
        );
    }

    verifyBvn(data) {
        return this.http
            .post<any>(`${this.baseUrl}user/account-settings/post-bvn`, data)
            .pipe(
                tap(({ data }) => {
                    this.storeAuth(data);
                })
            );
    }

    activateBiz(data) {
        // return this.http.post<any>(
        //     `${this.baseUrl}activate-business`, data
        // ).pipe(tap(({data}) => {
        //     this.updateAuth(data);
        // }))
        return of(JSON.parse(data)).pipe(
            tap((res) => {
                this.storeAuth({
                    ...this._user.value,
                    biz_type: res.biz_type,
                    biz_activated: 1,
                });
            })
        );
    }

    checkEmail(data) {
        return this.http.post<any>(`${this.baseUrl}forgot-password`, data);
    }

    verifyCode(data) {
        return this.http.post<any>(
            `${this.baseUrl}forgot-password/submit-token`,
            data
        );
    }

    twoAuth(data) {
        return this.http.post<any>(`${this.baseUrl}login/verify`, data).pipe(
            tap((res) => {
                this.storeAuth(res.data);
            })
        );
    }

    changePass(data) {
        return this.http.post<any>(
            `${this.baseUrl}user/account-settings/change-password`,
            data
        );
    }

    forgotPassResetPassword(data) {
        return this.http.post<any>(
            `${this.baseUrl}forgot-password/reset-password`,
            data
        );
    }

    twoFactorSet(data) {
        return this.http
            .post<any>(
                `${this.baseUrl}user/account-settings/set-two-factor`,
                data
            )
            .pipe(
                tap((res) => {
                    this.storeAuth(res.data);
                })
            );
    }

    login(data) {
        return this.http.post<any>(`${this.baseUrl}login`, data).pipe(
            tap(({ data }) => {
                this.storeAuth(data);
                if (data.type == 'personal') {
                    this.router.navigate(['/user'], { replaceUrl: true });
                    return;
                }
                this.router.navigate(['/business'], { replaceUrl: true });
            })
        );
        let convData = JSON.parse(data);
        convData.email_verify = 1;
        convData.token = '1234k2aslkdfasdl';
        convData.two_authentication = 0;
        return of(convData).pipe(
            tap((auth) => {
                this.storeAuth(auth);
            })
        );
    }

    resendCode() {
        return this.http.get<any>(
            `${this.baseUrl}user/account-settings/resend-token`
        );
    }

    forgotPassResendCode(data) {
        return this.http.post<any>(
            `${this.baseUrl}forgot-password/resend`,
            data
        );
    }

    updateProfile(data) {
        return this.http
            .post<any>(`${this.baseUrl}user/account-settings/profile`, data)
            .pipe(
                tap((res) => {
                    this.storeAuth(res.data);
                })
            );
    }

    verifyEmail(data) {
        return this.http
            .post<any>(
                `${this.baseUrl}user/account-settings/email-verify`,
                data
            )
            .pipe(
                tap((res) => {
                    this.storeAuth(res.data);
                })
            );
        let convData = this._user.value;
        convData.email_verify = 1;
        return of(convData).pipe(
            tap((auth) => {
                this.storeAuth(auth);
            })
        );
    }

    updateAuth(data) {
        //  return this.http.post<any>(
        //    `${this.baseUrl}login`, data
        //  )
        let convData = { ...this._user.value, ...JSON.parse(data) };
        return of(convData).pipe(
            tap((auth) => {
                this.storeAuth(auth);
            })
        );
    }

    storeAuth(auth) {
        this._user.next(auth);
        this.storageService.storeData('userData', auth);
        localStorage.setItem('loggedin', 'true');
    }

    async autoLogin() {
        let storedAuth = <Object>await this.storageService.getData('userData');
        if (storedAuth) {
            this._user.next(storedAuth);
        }
        this.checking.next(false);
    }

    logout() {
        this._user.next(null);
        this.storageService.removeData('userData');
        this.router.navigateByUrl('/login');
        this.dashbS.dashInfo.next(null);
        if (!isPlatformBrowser(this.platformId)) return;
        localStorage.removeItem('loggedin');
    }
}

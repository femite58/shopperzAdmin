import { Injectable } from '@angular/core';
import {
    ActivatedRouteSnapshot,
    CanActivate,
    Router,
    RouterStateSnapshot,
    UrlTree,
} from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
    providedIn: 'root',
})
export class DashboardGuard implements CanActivate {
    constructor(private authService: AuthService, private router: Router) {}
    checkSub: Subscription;

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ):
        | Observable<boolean | UrlTree>
        | Promise<boolean | UrlTree>
        | boolean
        | UrlTree {
        this.authService.autoLogin();
        return new Promise((resolve) => {
            this.checkSub = this.authService.checking.subscribe((checking) => {
                if (!checking) {
                    this.checkSub?.unsubscribe();
                    const authSub = this.authService.user.subscribe((auth) => {
                        if (auth) {
                            let owner =
                                auth.type == 'personal' ? 'user' : 'business';
                            if (!+auth.email_verify) {
                                resolve(
                                    this.router.parseUrl(
                                        `/${owner}/verify-email`
                                    )
                                );
                            } else if (+auth.two_authenticate && !auth.token) {
                                resolve(
                                    this.router.parseUrl(`/${owner}/two-auth`)
                                );
                            } else if (
                                owner == 'user' &&
                                !state.url.includes('/user')
                            ) {
                                resolve(
                                    this.router.parseUrl(
                                        state.url.replace('business', 'user')
                                    )
                                );
                            } else if (
                                owner == 'business' &&
                                !state.url.includes('/business')
                            ) {
                                resolve(
                                    this.router.parseUrl(
                                        state.url.replace('user', 'business')
                                    )
                                );
                            } else {
                                resolve(true);
                            }
                        } else {
                            resolve(this.router.parseUrl('/login'));
                        }
                    });
                    authSub.unsubscribe();
                }
            });
        });
    }
}

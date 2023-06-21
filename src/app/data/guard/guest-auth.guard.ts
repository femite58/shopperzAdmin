import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
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
export class GuestAuthGuard implements CanActivate {
    constructor(
        @Inject(PLATFORM_ID) private platformId: Object,
        private authService: AuthService,
        private router: Router
    ) {}

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
                        if (auth && +auth.email_verify && auth.token) {
                            let url =
                                auth.type == 'personal' ? 'user' : 'business';
                            resolve(this.router.parseUrl(`/${url}`));
                        } else {
                            resolve(true);
                        }
                    });
                    authSub.unsubscribe();
                }
            });
        });
    }
}

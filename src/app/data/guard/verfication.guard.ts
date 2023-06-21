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
export class VerficationGuard implements CanActivate {
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
                            if (!auth?.phone) {
                                resolve(this.router.parseUrl('/user'));
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

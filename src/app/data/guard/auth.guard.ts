import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
    providedIn: 'root',
})
export class AuthGuard implements CanLoad {
    constructor(private authService: AuthService, private router: Router) {}
    checkSub: Subscription;
    canLoad(
        route: Route,
        segments: UrlSegment[]
    ):
        | Observable<boolean | UrlTree>
        | Promise<boolean | UrlTree>
        | boolean
        | UrlTree {
        this.authService.autoLogin();
        return new Promise((resolve) => {
            this.checkSub = this.authService.checking.subscribe((chking) => {
                if (!chking) {
                    this.checkSub?.unsubscribe();
                    const authSub = this.authService.user.subscribe((auth) => {
                        if (!auth) {
                            resolve(this.router.parseUrl('/login'));
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

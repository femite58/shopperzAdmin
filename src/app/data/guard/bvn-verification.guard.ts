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
import { VerifyModalService } from '../services/user/verify-modal.service';
import { ViewControllerService } from '../services/view-controller.service';

@Injectable({
    providedIn: 'root',
})
export class BvnVerificationGuard implements CanActivate {
    constructor(
        private authS: AuthService,
        private router: Router,
        private verifMS: VerifyModalService
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
        return new Promise((resolve) => {
            this.checkSub = this.authS.checking.subscribe((chking) => {
                if (!chking) {
                    this.checkSub?.unsubscribe();
                    const authSub = this.authS.user.subscribe((auth) => {
                        if (auth) {
                            if (auth.wallet_no) {
                                resolve(true);
                            } else {
                                resolve(
                                    this.router.parseUrl('/user/dashboard')
                                );
                                this.verifMS.openModal.next(true);
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

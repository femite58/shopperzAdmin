import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs';
import { DashboardGuard } from '../guard/dashboard.guard';
import { GuestAuthGuard } from '../guard/guest-auth.guard';
import { VerficationGuard } from '../guard/verfication.guard';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class CustomGuardService {
  constructor(
    private guestG: GuestAuthGuard,
    private dashG: DashboardGuard,
    private verifG: VerficationGuard,
    private route: ActivatedRoute,
    private router: Router,
    private authS: AuthService
  ) {}

  authGuard() {
    return true;
    let actsnap = this.route.snapshot;
    let state = this.router.routerState.snapshot;
    let gres = this.dashG.canActivate(actsnap, state);
    let vgres = this.verifG.canActivate(actsnap, state);
    if (
      typeof gres['__zone_symbol__value'] == 'object' ||
      vgres['__zone_symbol__value'] == 'object'
    ) {
      return false;
    }
    return true;
  }

  guestGuard() {
    return true;
    let actsnap = this.route.snapshot;
    let state = this.router.routerState.snapshot;
    let gres = this.guestG.canActivate(actsnap, state);
    if (typeof gres['__zone_symbol__value'] == 'object') {
      return false;
    }
    return true;
  }
}

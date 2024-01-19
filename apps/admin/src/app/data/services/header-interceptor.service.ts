import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { NotificationService } from './user/notification.service';

@Injectable({
  providedIn: 'root',
})
export class HeaderInterceptorService implements HttpInterceptor {
  private token;
  private auth;

  constructor(
    private authService: AuthService,
    private notifS: NotificationService
  ) {
    this.authService.user.subscribe((auth) => {
      this.auth = auth;
      this.token = auth?.token;
    });
  }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (this.token && !req.url.match(/api.cloudinary.com/)) {
      return next
        .handle(
          // req.clone({
          //     headers: req.headers.set('Api-Token', `${this.token}`),
          // })
          req.clone({
            headers: req.headers.set('Authorization', `Bearer ${this.token}`),
          })
        )
        .pipe(
          tap(
            (_) => {},
            (err: HttpErrorResponse) => {
              if (err.status == 401) {
                this.notifS.leaveNotif();
                this.authService.logout();
              }
            }
          )
        );
    }
    return next.handle(req);
  }
}

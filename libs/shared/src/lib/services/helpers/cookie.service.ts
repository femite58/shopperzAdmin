import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie';

@Injectable({
  providedIn: 'root',
})
export class CusCookieService {
  constructor(private cookieS: CookieService) {}

  getCookie(key) {
    return this.cookieS.get(key);
  }

  setCookie(key, val) {
    this.cookieS.put(key, val);
  }

  setCookieObj(key, val) {
    this.cookieS.putObject(key, val);
  }

  getCookieObj(key) {
    return this.cookieS.getObject(key);
  }

  removeKey(key) {
    this.cookieS.remove(key);
  }
}

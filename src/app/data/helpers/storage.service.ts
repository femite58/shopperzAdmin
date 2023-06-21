import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import * as localforage from 'localforage';
import { CusCookieService } from './cookie.service';

@Injectable({
    providedIn: 'root',
})
export class StorageService {
    constructor(
        @Inject(PLATFORM_ID) private platformId: Object,
        private cookieS: CusCookieService
    ) {}

    storeData(key, value) {
        localforage.setItem(key, value);
        if (key == 'userData') {
            this.cookieS.setCookieObj(key, value);
        }
    }

    async getData(key) {
        if (!isPlatformBrowser(this.platformId))
            return this.cookieS.getCookieObj(key);
        return await localforage.getItem(key);
    }

    removeData(key) {
        localforage.removeItem(key);
        this.cookieS.removeKey(key);
    }
}

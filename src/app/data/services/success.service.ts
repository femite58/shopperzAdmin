import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class SuccessService {
    msg = new BehaviorSubject<{
        title: string;
        body: string;
        btnTxt?: string;
        callBack?: any;
    }>(null);
    constructor() { }
}

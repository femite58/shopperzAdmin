import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class ViewControllerService {
    loading = new BehaviorSubject(false);

    constructor() {}
}

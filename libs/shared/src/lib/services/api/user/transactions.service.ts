import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '../auth.service';
import { ConfigService } from '../config.service';

@Injectable({
  providedIn: 'root',
})
export class TransactionsService {
  private baseUrl;
  constructor(private http: HttpClient, config: ConfigService) {
    this.baseUrl = config.baseUrl;
  }

  getTrans(limit, page, role, date = 'all') {
    return this.http.get<any>(
      `${this.baseUrl}user/transactions/${limit}/${page}/${role}/${date}`
    );
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private baseUrl;

  constructor(
    private http: HttpClient,
    private config: ConfigService
  ) { 
    this.baseUrl = config.baseUrl;
  }

  join(data) {
    return this.http.post<any>(
      `${this.baseUrl}newsletter`, data
    );
  }
}

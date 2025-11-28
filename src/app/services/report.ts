import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API = 'http://localhost:3000/reports';

@Injectable({
  providedIn: 'root'
})
export class ReportsService {

  constructor(private http: HttpClient) {}

  daily(): Observable<any> {
    return this.http.get(`${API}/sales/daily`);
  }

  monthly(): Observable<any> {
    return this.http.get(`${API}/sales/monthly`);
  }

  topProducts(): Observable<any> {
    return this.http.get(`${API}/top-products`);
  }
}

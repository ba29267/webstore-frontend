import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API = 'http://localhost:3000/orders';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) {}

  createOrder(data: any): Observable<any> {
    return this.http.post(API, data);
  }

  getAll(): Observable<any> {
    return this.http.get(API);
  }

  getMyOrders(): Observable<any> {
    return this.http.get(`${API}/my`);
  }

  getById(id: number): Observable<any> {
    return this.http.get(`${API}/${id}`);
  }

  updateStatus(id: number, data: any): Observable<any> {
    return this.http.put(`${API}/${id}/status`, data);
  }

  deleteOrder(id: number): Observable<any> {
    return this.http.delete(`${API}/${id}`);
  }
}

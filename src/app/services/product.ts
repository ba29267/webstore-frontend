import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API = 'http://localhost:3000/products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {}

  getAll(): Observable<any> {
    return this.http.get(API);
  }

  search(params: any): Observable<any> {
    return this.http.get(`${API}/search`, { params });
  }

  getById(id: number): Observable<any> {
    return this.http.get(`${API}/${id}`);
  }

  getQuantity(id: number): Observable<any> {
    return this.http.get(`${API}/${id}/quantity`);
  }

  create(data: any): Observable<any> {
    return this.http.post(API, data);
  }

  update(id: number, data: any): Observable<any> {
    return this.http.put(`${API}/${id}`, data);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${API}/${id}`);
  }

  applyDiscount(id: number, data: any): Observable<any> {
    return this.http.post(`${API}/${id}/discount`, data);
  }

  filter(params: any): Observable<any> {
    return this.http.get(`${API}/filter`, { params });
  }

  sort(params: any): Observable<any> {
    return this.http.get(`${API}/sort`, { params });
  }
}

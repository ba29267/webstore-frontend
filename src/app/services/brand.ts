import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class BrandService {

  api = "http://localhost:3000";

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<any[]>(`${this.api}/brands`);
  }

  getById(id: number) {
    return this.http.get(`${this.api}/brands/${id}`);
  }

  create(data: any) {
    return this.http.post(`${this.api}/brands`, data);
  }

  update(id: number, data: any) {
    return this.http.put(`${this.api}/brands/${id}`, data);
  }

  delete(id: number) {
    return this.http.delete(`${this.api}/brands/${id}`);
  }

}

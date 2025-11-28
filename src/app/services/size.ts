import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class SizeService {

  api = "http://localhost:3000/admin";

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<any[]>(`${this.api}/sizes`);
  }

  getById(id: number) {
    return this.http.get(`${this.api}/sizes/${id}`);
  }

  create(data: any) {
    return this.http.post(`${this.api}/sizes`, data);
  }

  update(id: number, data: any) {
    return this.http.put(`${this.api}/sizes/${id}`, data);
  }

  delete(id: number) {
    return this.http.delete(`${this.api}/sizes/${id}`);
  }

}

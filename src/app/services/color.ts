import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class ColorService {

  api = "http://localhost:3000";

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<any[]>(`${this.api}/colors`);
  }

  getById(id: number) {
    return this.http.get(`${this.api}/colors/${id}`);
  }

  create(data: any) {
    return this.http.post(`${this.api}/colors`, data);
  }

  update(id: number, data: any) {
    return this.http.put(`${this.api}/colors/${id}`, data);
  }

  delete(id: number) {
    return this.http.delete(`${this.api}/colors/${id}`);
  }

}

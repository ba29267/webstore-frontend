import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class GenderService {

  api = "http://localhost:3000/admin";

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<any[]>(`${this.api}/genders`);
  }

  getById(id: number) {
    return this.http.get(`${this.api}/genders/${id}`);
  }

  create(data: any) {
    return this.http.post(`${this.api}/genders`, data);
  }

  update(id: number, data: any) {
    return this.http.put(`${this.api}/genders/${id}`, data);
  }

  delete(id: number) {
    return this.http.delete(`${this.api}/genders/${id}`);
  }

}

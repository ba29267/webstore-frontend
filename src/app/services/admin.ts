import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API = 'http://localhost:3000/admin';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) {}

  // Categories
  createCategory(d:any){ return this.http.post(`${API}/categories`, d); }
  getCategories(){ return this.http.get(`${API}/categories`); }
  updateCategory(id:number,d:any){ return this.http.put(`${API}/categories/${id}`, d); }
  deleteCategory(id:number){ return this.http.delete(`${API}/categories/${id}`); }

  // Brands
  createBrand(d:any){ return this.http.post(`${API}/brands`, d); }
  getBrands(){ return this.http.get(`${API}/brands`); }
  updateBrand(id:number,d:any){ return this.http.put(`${API}/brands/${id}`, d); }
  deleteBrand(id:number){ return this.http.delete(`${API}/brands/${id}`); }

  // Sizes
  createSize(d:any){ return this.http.post(`${API}/sizes`, d); }
  getSizes(){ return this.http.get(`${API}/sizes`); }
  updateSize(id:number,d:any){ return this.http.put(`${API}/sizes/${id}`, d); }
  deleteSize(id:number){ return this.http.delete(`${API}/sizes/${id}`); }

  // Colors
  createColor(d:any){ return this.http.post(`${API}/colors`, d); }
  getColors(){ return this.http.get(`${API}/colors`); }
  updateColor(id:number,d:any){ return this.http.put(`${API}/colors/${id}`, d); }
  deleteColor(id:number){ return this.http.delete(`${API}/colors/${id}`); }

  // Genders
  createGender(d:any){ return this.http.post(`${API}/genders`, d); }
  getGenders(){ return this.http.get(`${API}/genders`); }
  updateGender(id:number,d:any){ return this.http.put(`${API}/genders/${id}`, d); }
  deleteGender(id:number){ return this.http.delete(`${API}/genders/${id}`); }
}

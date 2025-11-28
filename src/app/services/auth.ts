import { Injectable } from '@angular/core'; 
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { Observable } from 'rxjs'; 
import { tap } from 'rxjs/operators';
 
const API = 'http://localhost:3000/auth'; 
 
@Injectable({ 
  providedIn: 'root' 
}) 
export class AuthService { 
 
  constructor(private http: HttpClient) {} 
 
  register(data: any): Observable<any> { 
    return this.http.post(`${API}/register`, data); 
  } 
 
  login(data: any): Observable<any> { 
    return this.http.post(`${API}/login`, data).pipe(
      tap((response: any) => {
        if (response.token) {
          localStorage.setItem('token', response.token);
        }
      })
    );
  }

  logout(): void {
    localStorage.removeItem('token');
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isAuthenticated(): boolean {
    const token = this.getToken();
    if (!token) return false;

    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      const expiry = payload.exp * 1000; // convert to milliseconds
      return Date.now() < expiry;
    } catch (e) {
      return false;
    }
  }

  getUserRole(): string | null {
    const token = this.getToken();
    if (!token) return null;

    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      return payload.role || null;
    } catch (e) {
      return null;
    }
  }

  getUserId(): number | null {
    const token = this.getToken();
    if (!token) return null;

    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      return payload.id || null;
    } catch (e) {
      return null;
    }
  }

  // Optional: Method to get user info from backend
  getMe(): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.getToken()}`
    });
    return this.http.get(`${API}/me`, { headers });
  }
}
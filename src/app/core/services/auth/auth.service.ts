import { Injectable, inject } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = environment.apiUrl;
  private endpoint = 'auth';
  private router = inject(Router);

  constructor(private http: HttpClient) {}

  createNewUser(username: string, password: string): Observable<any> {
    const url = `${this.apiUrl}/${this.endpoint}/signup`;
    const body = { username, password };
    return this.http.post(url, body);
  }

  login(
    username: string,
    password: string
  ): Observable<{ access_token: string }> {
    const url = `${this.apiUrl}/${this.endpoint}/login`;
    const body = { username, password };
    return this.http.post<{ access_token: string }>(url, body).pipe(
      tap(response => {
        localStorage.setItem('token', response.access_token);
      })
    );
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    this.router.navigate(['/login']);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }
}

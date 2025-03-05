import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Profile } from '../../../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = environment.apiUrl;
  private endpoint = 'user';

  private userIdSubject = new BehaviorSubject<string | null>(localStorage.getItem('userId'));
  userId$ = this.userIdSubject.asObservable();

  constructor(private http: HttpClient) {}

  getUserProfile(): Observable<Profile> {
    const url = `${this.apiUrl}/${this.endpoint}/profile`;
    return this.http.get<Profile>(url).pipe(
      tap(response => {
        this.setUserId(response._id);
      })
    );
  }
  
  private setUserId(userId: string): void {
    localStorage.setItem('userId', userId);
    this.userIdSubject.next(userId);
  }

  getUserId(): string | null {
    return this.userIdSubject.value;
  }
}

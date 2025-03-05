import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Profile } from '../../../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = environment.apiUrl;
  private endpoint = 'user';
  constructor(private http: HttpClient) {}


  getUserProfile() : Observable<Profile>{
    const url = `${this.apiUrl}/${this.endpoint}/profile`;
    return this.http.get<Profile>(url).pipe(
          tap(response => {
            localStorage.setItem('userId', response._id);
          })
        );
  }

  

}

import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../../../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private apiUrl = environment.apiUrl;
  private endpoint = 'post';

  constructor(private http: HttpClient) {}

  getposts(): Observable<Post[]>{
    const url = `${this.apiUrl}/${this.endpoint}`;
    return this.http.get<Post[]>(url);
  }

}

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

  createPost(text: string, author: string): Observable<any>{
    const url = `${this.apiUrl}/${this.endpoint}`;
    const body = { text, author };
    return this.http.post(url,body);
  }

  updatePost(postId: string, text: string, author: string): Observable<any> {
    const url = `${this.apiUrl}/${this.endpoint}/${postId}`;
    const body = { text, author };
    return this.http.patch(url, body);
  }

  deletePost(postId: string): Observable<any>{
    const url = `${this.apiUrl}/${this.endpoint}/${postId}`;
    return this.http.delete(url);
  }

}

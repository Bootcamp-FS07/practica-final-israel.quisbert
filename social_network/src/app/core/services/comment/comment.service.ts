import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Comment } from '../../../models/comment.model';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private apiUrl = environment.apiUrl;
  private endpoint = 'comment';

  constructor(private http: HttpClient) {}

  addComment(text: string, author: string, post: string): Observable<any>{
    const url = `${this.apiUrl}/${this.endpoint}`;
    const body = { text, author, post };
    return this.http.post(url, body);
  }

  getPostComments(postId: string): Observable<Comment[]>{
    const params = new HttpParams().set('postId', postId);
    const url = `${this.apiUrl}/${this.endpoint}?postId=${postId}`;
    return this.http.get<Comment[]>(url, {params});
  }

}

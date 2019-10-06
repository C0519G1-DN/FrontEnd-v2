import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  , 'Access-Control-Allow-Origin': 'http://localhost:4200'
};
@Injectable({
  providedIn: 'root'
})
export class SocialService {
  private URL = "http://localhost:8080"
  constructor(private http: HttpClient) { }

  postComment(data): Observable<any> {
    return this.http.post<any>(`${this.URL}/postCommentPlaylist`, data, httpOptions);
  }

  postLike(data): Observable<any> {
    return this.http.post<any>(`${this.URL}/postLikePlaylist`, data, httpOptions);
  }

  getLike(idUser:number,idPlaylist: number): Observable<any> {
    return this.http.get<any>(`${this.URL}/getLikesPlaylist/${idUser}/${idPlaylist}`);
  }

  getToMostLikePlaylist(): Observable<any> {
    return this.http.get<any>(`${this.URL}/getToMostLikePlaylist`);
  }

  getComment(idPlaylist: number): Observable<any> {
    return this.http.get<any>(`${this.URL}/getCommentsPlaylist/${idPlaylist}`);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SingerComment } from '../model/singger/singerComments';

@Injectable({
  providedIn: 'root'
})
export class SingerCommentService {


private API = 'http://localhost:8080';


  constructor(private http: HttpClient) { }

  getAllComment(id: number) {
    return this.http.get(`${this.API}/getCommentSinger/${id}`);
  }

  postComment(singerComment: SingerComment) {
    return this.http.post(`${this.API}/postCommentSinger`, singerComment);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  , 'Access-Control-Allow-Origin': 'http://localhost:4200'
};
@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private URL = 'http://localhost:8080/comment';

  constructor(private http: HttpClient) { }

  addComment(value:Comment){
    return this.http.post(`${this.URL}/saveCmt`, value);
  }

  getAllComment(id:number){
    return this.http.get(`${this.URL}/getAll/${id}`)
  }


}

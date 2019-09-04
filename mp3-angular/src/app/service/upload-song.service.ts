import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  ,'Access-Control-Allow-Origin': 'http://localhost:4200'
};

@Injectable({
  providedIn: 'root'
})
export class UploadSongService {
  private URL = "http://localhost:8080"
  constructor(private http: HttpClient) { }

  upSong(data): Observable<any>{
    return this.http.post(`${this.URL}/upsong`, data);
  }
}

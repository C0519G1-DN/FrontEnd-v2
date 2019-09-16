import { Injectable } from '@angular/core';
import { Singgers } from '../model/singger/singgers';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  ,'Access-Control-Allow-Origin': 'http://localhost:4200'
};

@Injectable({
  providedIn: 'root'
})
export class SinggerServiceService {
  public singger: Singgers[];
  public API : string ='http://localhost:8080';
  constructor(private http : HttpClient) { }

  upSinger(data): Observable<any>{
    return this.http.post(`${this.API}/upsinger`, data);
  }

  getAllSinger(): Observable<Singgers[]>{
    return this.http.get<Singgers[]>(`${this.API}/getsingers`);
  }
  getSinger(id: number) {
    return this.http.get(`${this.API}/singer/${id}`);
  }
  addSinger(artist:Singgers): Observable<Singgers>{
    return this.http.post<Singgers>(`${this.API}`,artist);
  }
  editSinger(artist:Singgers):Observable<Singgers>{
    return this.http.put<Singgers>(`${this.API}/${artist.id}`,artist)
  }
  deleteSinger(id:number){
    return this.http.put(`${this.API}/deleteSinger/${id}`,id);
  }
}

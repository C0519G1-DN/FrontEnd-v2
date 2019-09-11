import { Injectable } from '@angular/core';
import { Singgers } from '../model/singger/singgers';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SinggerServiceService {
  public singger: Singgers[];
  public API : string ='http://localhost:3000/singger';
  private URL = "http://localhost:8080"
  constructor(private http : HttpClient) { }

  upSinger(data): Observable<any>{
    return this.http.post(`${this.URL}/upsinger`, data);
  }

  getAllArtist(): Observable<Singgers[]>{
    return this.http.get<Singgers[]>(`${this.API}`);
  }
  getArtist(id: number) : Observable<Singgers>{
    return this.http.get<Singgers>(`${this.API}/${id}`);
  }
  addArtist(artist:Singgers): Observable<Singgers>{
    return this.http.post<Singgers>(`${this.API}`,artist);
  }
  editArtist(artist:Singgers):Observable<Singgers>{
    return this.http.put<Singgers>(`${this.API}/${artist.id}`,artist)
  }
  deleteArtist(id: number): Observable<Singgers>{
    return this.http.delete<Singgers>(`${this.API}/${id}`);
  }
}

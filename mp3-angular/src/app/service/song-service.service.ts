import { Injectable } from '@angular/core';
import { Songs } from '../model/song/songs';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SongServiceService {

  public songs: Songs[];
  public API : string ='http://localhost:3000/songs';

  constructor(private http : HttpClient) { }

  getAllSong(): Observable<Songs[]>{
    return this.http.get<Songs[]>(`${this.API}`);
  }
  getSong(id: number) : Observable<Songs>{
    return this.http.get<Songs>(`${this.API}/${id}`);
  }
  addSong(song:Songs): Observable<Songs>{
    return this.http.post<Songs>(`${this.API}`,song);
  }
  editSong(song:Songs):Observable<Songs>{
    return this.http.put<Songs>(`${this.API}/${song.id}`,song)
  }
  deleteSong(id: number): Observable<Songs>{
    return this.http.delete<Songs>(`${this.API}/${id}`);
  }
}

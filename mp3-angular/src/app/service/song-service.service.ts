import { Injectable } from '@angular/core';
import { Songs } from '../model/song/songs';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { Song2 } from '../model/song/song2';

@Injectable({
  providedIn: 'root'
})
export class SongServiceService {

  public songs: Songs[];

  API = 'http://localhost:8080/getsongs';
 // public API : string ='http://localhost:8080/';

  URL = 'http://localhost:8080/getsongs';


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

  // addSong2(song:Song2):Observable<Song2>{
  //   return this.http.post<Song2>(`${this.API}/createSong`, song);
  // }

  // editSong2(song:Song2):Observable<Song2>{
  //   return this.http.put<Song2>(`${this.API}/editSong`,song);

  // }
}

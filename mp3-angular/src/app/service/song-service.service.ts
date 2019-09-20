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

//   API = 'http://localhost:8080/getsongs';
//  public API : string ='http://localhost:8080/';

  URL = 'http://localhost:8080';


  constructor(private http: HttpClient) { }

  // getAllSong(): Observable<Songs[]> {
  //   return this.http.get<Songs[]>(`${this.URL}`);
  // }
  // getSong(id: number): Observable<Songs> {
  //   return this.http.get<Songs>(`${this.URL}/${id}`);
  // }
  // addSong(song: Songs): Observable<Songs> {
  //   return this.http.post<Songs>(`${this.URL}`, song);
  // }
  // editSong(song: Songs): Observable<Songs> {
  //   return this.http.put<Songs>(`${this.URL}`, song);
  // }
  // deleteSong(song: Songs): Observable<Songs> {
  //   return this.http.put<Songs>(`${this.URL}/deleteSong`, song);
  // }

  // addSong2(song:Song2):Observable<Song2>{
  //   return this.http.post<Song2>(`${this.API}/createSong`, song);
  // }

  // editSong2(song:Song2):Observable<Song2>{
  //   return this.http.put<Song2>(`${this.API}/editSong`,song);

  // }
}

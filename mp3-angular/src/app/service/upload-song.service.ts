import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Songs } from '../model/song/songs';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  , 'Access-Control-Allow-Origin': 'http://localhost:4200'
};

@Injectable({
  providedIn: 'root'
})
export class UploadSongService {
  private URL = 'http://localhost:8080';
  constructor(private http: HttpClient) { }

  getAllSong(): Observable<Songs[]> {
    return this.http.get<Songs[]>(`${this.URL}/getsongs`);
  }

  upSong(data): Observable<any> {
    return this.http.post(`${this.URL}/upsong`, data);
  }

  getSongNew(data): Observable<any> {
    return this.http.get(`${this.URL}/getsongnew`, data);
  }

  // getSongView(data): Observable<any> {
  //   return this.http.get(`${this.URL}/getsongview`, data);
  // }

  getSongLike(data): Observable<any> {
    return this.http.get(`${this.URL}/getsonglike`, data);
  }

  editSong2(song: Songs): Observable<Songs> {
    return this.http.put<Songs>(`${this.URL}/editSong`, song);
  }

  getSongById(id: number) {
    return this.http.get(`${this.URL}/getIdSong/${id}`);
  }

  updateSong(song: Songs) {
    return this.http.put(`${this.URL}/updateSong`, song);
  }

  deleteSong(id: number) {
    return this.http.put(`${this.URL}/deleteSong`, id);
  }

  addSingerToSong(value) {
    return this.http.post(`${this.URL}/addSingerToSong`, value);
  }

  likeSong(value) {
    return this.http.put(`${this.URL}/likesong`,value);
  }

  getLike(value) {
    return this.http.post(`${this.URL}/getLike`,value);
  }

  getTopLike(){
    return this.http.get(`${this.URL}/getTopLike`);
  }

  searchSongName(nameSong: string){
    return this.http.post(`${this.URL}/searchSongName`, nameSong);
  }

  // getTotalLike(){
  //   return this.http.get(`${this.URL}/totalLikeSong`);
  // }

  getViewSong(idSong: number){
    return this.http.post(`${this.URL}/getViewSong`,idSong);
  }

  getTopViewSong(){
    return this.http.get(`${this.URL}/getTopViewSong`);
  }

  getLikeOfSong(idSong: number){
    return this.http.post(`${this.URL}/getLikeOfSong`,idSong);
  }
}

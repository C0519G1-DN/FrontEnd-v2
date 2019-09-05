import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Playlists } from '../model/playlist/playlists';

@Injectable({
  providedIn: 'root'
})
export class PlaylistServiceService {

  public playlist:PlaylistServiceService[];
  public urlAPI: string = 'http://localhost:8080/playlist';

  constructor(private http: HttpClient) { }

  getAllPlaylist(): Observable<Playlists[]>{
    return this.http.get<Playlists[]>(`${this.urlAPI}`);
  }
  getPlaylist(id: number) : Observable<Playlists>{
    return this.http.get<Playlists>(`${this.urlAPI}/${id}`);
  }
  addPlaylist(playlist:Playlists): Observable<Playlists>{
    return this.http.post<Playlists>(`${this.urlAPI}`,playlist);
  }
  editPlaylist(playlist:Playlists):Observable<Playlists>{
    return this.http.put<Playlists>(`${this.urlAPI}/${playlist.id}`,playlist)
  }
  deletePlaylist(id: number): Observable<Playlists>{
    return this.http.delete<Playlists>(`${this.urlAPI}/${id}`);
  }
}

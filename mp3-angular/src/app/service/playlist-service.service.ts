import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Playlists } from '../model/playlist/playlists';

@Injectable({
  providedIn: 'root'
})
export class PlaylistServiceService {

  // public playlist:PlaylistServiceService[];
  private URL = "http://localhost:8080/playlists"

  constructor(private http: HttpClient) { }

  getAllPlaylist() {
    return this.http.get(`${this.URL}`);
  }

  getPlaylistById(id: number) {
    return this.http.get(`${this.URL}/getoneplaylist/${id}`);
  }

  updatePlaylist(playlist: Playlists) {
    return this.http.put(`${this.URL}/updateplaylist/${playlist.id}`, playlist);
  }

  createPlaylist(playlist: Playlists) {
    return this.http.post(`${this.URL}/createplaylist`, playlist);
  }

  deletePlaylist(id: number) {
    return this.http.delete(`${this.URL}/deleteplaylist/${id}`);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Playlists } from '../model/playlist/playlists';

@Injectable({
  providedIn: 'root'
})
export class PlaylistServiceService {

  // public playlist:PlaylistServiceService[];
  private URL = 'http://localhost:8080/playlists';

  constructor(private http: HttpClient) { }

  getAllPlaylist() {
    return this.http.get(`${this.URL}`);
  }

  getPlaylistById(id: number) {
    return this.http.get(`${this.URL}/getoneplaylist/${id}`);
  }

  getPlaylistByIdToListen(id: number) {
    return this.http.get(`${this.URL}/getPlaylistToListen/${id}`);
  }

  updatePlaylist(playlist: Playlists) {
    return this.http.put(`${this.URL}/updateplaylist`, playlist);
  }

  createPlaylist(playlist: Playlists) {
    return this.http.post(`${this.URL}/createplaylist`, playlist);
  }

  deletePlaylist(id: number) {
    return this.http.put(`${this.URL}/deleteplaylist`,id);
  }

  getSongOfPlaylist(id: number){
    return this.http.post(`${this.URL}/songOfPlaylist`,id);
  }

  addsong(value){
    return this.http.post(`${this.URL}/addsong`, value)
  }

  deletesong(value){
    return this.http.post(`${this.URL}/deletesonginplaylist`,value);
  }

  addViewPlaylist(idPlaylist){
    return this.http.post(`${this.URL}/addViewPlaylist`,idPlaylist);
  }

  getMostViewPlaylist() {
    return this.http.get(`${this.URL}/getMostViewPlaylist/`);

  }
  searchPlaylistName(playlistName:string){
    return this.http.post(`${this.URL}/searchPlaylistByName`, playlistName);

  }
}

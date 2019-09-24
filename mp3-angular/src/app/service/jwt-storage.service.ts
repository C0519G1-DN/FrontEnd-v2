import { Injectable } from '@angular/core';

const TOKEN_KEY = 'AuthToken';
const ID_KEY = 'MyID';
const USERNAME_KEY = 'AuthUsername';
const PLAYLIST_KEY = 'PlaylistID';
const SONG_KEY = 'SongID';

@Injectable({
  providedIn: 'root'
})
export class JwtStorageService {

  constructor() { }
  public logOut() {
    window.localStorage.clear();
    window.sessionStorage.clear();
  }

  public saveUsername(username: string) {
    window.localStorage.removeItem(USERNAME_KEY);
    window.localStorage.setItem(USERNAME_KEY, username);
  }

  public saveID(id: string) {
    window.localStorage.removeItem(ID_KEY);
    window.localStorage.setItem(ID_KEY, id);
  }

  public savePlaylist(id: string) {
    window.sessionStorage.removeItem(PLAYLIST_KEY);
    window.sessionStorage.setItem(PLAYLIST_KEY, id);
  }
  public getPlaylist(): string {
    return sessionStorage.getItem(PLAYLIST_KEY);
  }
  public saveSong(id: string) {
    window.sessionStorage.removeItem(SONG_KEY);
    window.sessionStorage.setItem(SONG_KEY, id);
  }
  public getSong(): string {
    return sessionStorage.getItem(SONG_KEY);
  }

  public getID(): string {
    return localStorage.getItem(ID_KEY);
  }

  public getUsername(): string {
    return localStorage.getItem(USERNAME_KEY);
  }

  public saveToken(token: string) {
    window.localStorage.removeItem(TOKEN_KEY);
    window.localStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string {
    return localStorage.getItem(TOKEN_KEY);
  }
}

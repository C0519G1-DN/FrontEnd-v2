import { Injectable } from '@angular/core';

const TOKEN_KEY = 'AuthToken';
const ID_KEY = 'MyID';
const USERNAME_KEY = 'AuthUsername';

@Injectable({
  providedIn: 'root'
})
export class JwtStorageService {

  constructor() { }
  public logOut(){
    window.localStorage.clear();
  }

  public saveUsername(username: string) {
    window.localStorage.removeItem(USERNAME_KEY);
    window.localStorage.setItem(USERNAME_KEY, username);
  }

  public saveID(id: string) {
    window.localStorage.removeItem(ID_KEY);
    window.localStorage.setItem(ID_KEY, id);
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
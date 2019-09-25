import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { JwtStorageService } from './jwt-storage.service';

@Injectable({
  providedIn: 'root'
})
export class FeatureService {
  private url = "http://localhost:8080"
  constructor(private http: HttpClient, private jwtStorage: JwtStorageService) { }
  
  login(data): Observable<any> {
    return this.http.post<any>(`${this.url}/login`, data);
  }

  user = this.jwtStorage.getUsername();
  isLogin(): boolean {
    return !!this.user
  };
  
  islogin = false;
  private state$ = new BehaviorSubject<Boolean>(false);
  status = this.state$.asObservable();

  changeState(myChange) {
    console.log("change to:", myChange);
    this.state$.next(myChange);
  }
}

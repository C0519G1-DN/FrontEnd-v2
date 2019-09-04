import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUser } from '../model/user/user.model';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  ,'Access-Control-Allow-Origin': 'http://localhost:4200'
};

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private URL = "http://localhost:8080"
  constructor(private http: HttpClient) { }

  register(data:IUser): Observable<any>{
    return this.http.post<any>(`${this.URL}/register`, data, httpOptions);
  }
  getUserById(id: number): Observable<any> {
    return this.http.get<any>(`${this.URL}/myprofile/${id}`);
}
  updateProfile(myInfor: any): Observable<any> {
  return this.http.put<any>(`${this.URL}/myprofile/${myInfor.id}`, myInfor, httpOptions);
}
}

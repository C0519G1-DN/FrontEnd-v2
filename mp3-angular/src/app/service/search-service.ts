import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SearchService {
  search: any;
  
  public API = 'http://localhost:8080';
  constructor(private http: HttpClient) { }



  searchName(){
    return this.http.post(`${this.API}/searchName`, this.search);
  }

 

}

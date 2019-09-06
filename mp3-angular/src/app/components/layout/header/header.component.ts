import { Component, OnInit } from '@angular/core';
import { JwtStorageService } from 'src/app/service/jwt-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor( private jwtStorage: JwtStorageService) { }
  myuser: string = "Hi my Dear !! ";
  ngOnInit() {
    // this.myuser= this.jwtStorage.getUsername
    
  }
  
  logged = true;
  
  // login() {
  //   this.logged = !this.logged;
  // }

}

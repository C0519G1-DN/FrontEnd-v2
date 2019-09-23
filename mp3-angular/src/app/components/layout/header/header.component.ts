import { Component, OnInit } from '@angular/core';
import { JwtStorageService } from 'src/app/service/jwt-storage.service';
import { FeatureService } from 'src/app/service/feature.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private feature: FeatureService, private jwtStorage: JwtStorageService, private router: Router) { }
  myuser: string;
  ngOnInit() {
    this.myuser= this.jwtStorage.getUsername();
  
  }
  logout(){
    this.jwtStorage.logOut();
    this.router.navigate(['/logout'])
    
    
    
  }
}

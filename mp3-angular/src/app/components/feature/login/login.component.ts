import { Component, OnInit } from '@angular/core';
import { JwtStorageService } from 'src/app/service/jwt-storage.service';
import { FeatureService } from 'src/app/service/feature.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(  private feature: FeatureService, private jwtStorage: JwtStorageService) { }

  ngOnInit() {
  }

  // login() {
  //   this.userInfo = new Login(
  //     this.id,
  //     this.username,
  //     this.age=1,
  //     this.password,
  //   );
  //   this.loginService.createUser(this.userInfo).subscribe(
  //     next=>{ 
  //       // console.log(next)
  //       this.jwtStorage.saveToken(next.accessToken);
  //       this.jwtStorage.saveID(next.id);
  //       this.jwtStorage.saveUsername(next.username);
  //       console.log(next.id);
  //       // this.loginService.getUserById(next.id).subscribe(a=>{this.that=a})
  //   }
  //   )
  // }

}

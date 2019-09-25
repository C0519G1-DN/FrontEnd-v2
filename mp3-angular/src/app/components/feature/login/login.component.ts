import { Component, OnInit, OnDestroy } from '@angular/core';
import { JwtStorageService } from 'src/app/service/jwt-storage.service';
import { FeatureService } from 'src/app/service/feature.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { HeaderComponent } from '../../layout/header/header.component';
import { AuthService, FacebookLoginProvider } from 'angular-6-social-login';
import { UserService } from 'src/app/service/user.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  
  constructor(  private socialAuthService: AuthService,public header: HeaderComponent,private formBuilder: FormBuilder, private jwtStorage: JwtStorageService, private featureService: FeatureService, private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: [''],
      password: [''],
     
  })}
  
  
  login(value) {
    
    
    this.featureService.login(value).subscribe(
      next=>{ 
        this.jwtStorage.saveToken(next.accessToken);
        this.jwtStorage.saveID(next.id);
        this.jwtStorage.saveUsername(next.username);
        this.featureService.islogin = true;
        this.header.myuser= this.jwtStorage.getUsername();
        location.reload();
    }
    )
  }
  nomalLogin(){
    const { value } = this.loginForm;
    this.login(value)
  }

  socialLogin(){
    this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID).then((userData)=>{
    
    this.loginForm = this.formBuilder.group({
      username: [userData.id],
      password: [userData.token.substring(0, 5)+'npt'],
      name: [userData.name],
      
     
  });
  const { value } = this.loginForm;
  this.userService.register(value).subscribe(
  next => this.login(value),
  error => this.login(value));
  });
    
  }
}

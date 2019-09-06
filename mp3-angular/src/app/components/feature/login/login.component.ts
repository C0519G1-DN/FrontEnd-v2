import { Component, OnInit } from '@angular/core';
import { JwtStorageService } from 'src/app/service/jwt-storage.service';
import { FeatureService } from 'src/app/service/feature.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { HeaderComponent } from '../../layout/header/header.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  
  constructor( public header: HeaderComponent,private formBuilder: FormBuilder, private feature: FeatureService, private jwtStorage: JwtStorageService, private featureService: FeatureService, private router: Router) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: [''],
      password: [''],
  })}

  login() {
    
    const { value } = this.loginForm;
    // console.log(value);
    this.featureService.login(value).subscribe(
      
      next=>{ 
        this.header.logged = !this.header.logged;
        this.jwtStorage.saveToken(next.accessToken);
        this.jwtStorage.saveID(next.id);
        this.jwtStorage.saveUsername(next.username);
        console.log(next.username);

        this.router.navigate(['/']);
    }
    )
  }

}

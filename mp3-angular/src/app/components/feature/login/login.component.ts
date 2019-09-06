import { Component, OnInit, OnDestroy } from '@angular/core';
import { JwtStorageService } from 'src/app/service/jwt-storage.service';
import { FeatureService } from 'src/app/service/feature.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { HeaderComponent } from '../../layout/header/header.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  
  constructor( public header: HeaderComponent,private formBuilder: FormBuilder, private jwtStorage: JwtStorageService, private featureService: FeatureService, private router: Router) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: [''],
      password: [''],
     
  })}

  
  login() {
    const { value } = this.loginForm;
    this.featureService.login(value).subscribe(
      next=>{ 
        this.jwtStorage.saveToken(next.accessToken);
        this.jwtStorage.saveID(next.id);
        this.jwtStorage.saveUsername(next.username);
        window.location.reload();
    }
    )
  }

}

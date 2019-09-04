import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { FormGroup, Validators, AbstractControl, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/service/register.service';
import { IUser } from 'src/app/model/user/user.model';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
  registerForm: FormGroup;
  errorMessage:any;
  isRegisterFailed = false;
  constructor(private registerService: RegisterService, private activatedRoute: ActivatedRoute, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      id: [''],
      name: [''],
      age: ['',],
      gender: [''],
      phone: ['', [Validators.required, Validators.pattern(/^\+84\d{9,10}$/)]],
      email: ['', [Validators.required, Validators.email]],
      username: ['', [Validators.required, Validators.minLength(6)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      delected: [false]
    });
  }
  get username(): AbstractControl {
    return this.registerForm.get('username');
  };

  get password(): AbstractControl {
    return this.registerForm.get('password');
  };
  get email(): AbstractControl {
    return this.registerForm.get('email');
  };
  get phone(): AbstractControl {
    return this.registerForm.get('phone');
  }
  createForm() {
    if (this.registerForm.valid) {
      const { value } = this.registerForm;
      this.registerService.register(value).subscribe(
        next => {
          alert("Successful");
          this.router.navigate(['/']);

        },
        error => {
          this.errorMessage = error.error;
          console.log(this.errorMessage);
          this.isRegisterFailed = true;
        }
      );
    }
  }
}



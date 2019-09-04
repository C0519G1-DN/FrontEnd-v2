import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { FormGroup, Validators, AbstractControl, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/service/register.service';
@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {
  inforForm : FormGroup;
  errorMessage:any;
  isRegisterFailed = false;
  constructor(private registerService: RegisterService, private activatedRoute: ActivatedRoute, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.inforForm = this.formBuilder.group({
      id: [''],
      name: [''],
      age: ['',],
      gender: [''],
      phone: ['', [Validators.required, Validators.pattern(/^\+84\d{9,10}$/)]],
      email: ['', [Validators.required, Validators.email]],
      username: ['', [Validators.required, Validators.minLength(6)]],
      delected: [true],
    });
    const id = +this.activatedRoute.snapshot.paramMap.get('id');
    this.registerService.getUserById(id).subscribe(
      next => {
        this.inforForm.patchValue(next);
      },
      error => {
        console.log(error);
      }
    );
  }

  
    get username(): AbstractControl {
      return this.inforForm.get('username');
    };
    get email(): AbstractControl {
      return this.inforForm.get('email');
    };
    get phone(): AbstractControl {
      return this.inforForm.get('phone');
    }
    

  updateForm() {
    const { value } = this.inforForm;
    this.registerService.updateProfile(value).subscribe(
      next => {
        this.router.navigate(['/']);
      },
      error => {this.errorMessage = error.error;
        console.log(this.errorMessage);
        this.isRegisterFailed = true;}
    );
  }

  }


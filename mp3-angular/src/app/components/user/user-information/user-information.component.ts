import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { FormGroup, Validators, AbstractControl, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
import { JwtStorageService } from 'src/app/service/jwt-storage.service';
@Component({
  selector: 'app-user-information',
  templateUrl: './user-information.component.html',
  styleUrls: ['./user-information.component.css']
})
export class UserInformationComponent implements OnInit {

  profile : any
 
  constructor(private jwtStorage: JwtStorageService, private userService: UserService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    const id= parseInt(this.jwtStorage.getID());
    this.userService.getUserById(id).subscribe(
      next => {
        this.profile= next;
      },
      error => {
        console.log(error);
      }
    );
  }
  updateForm() {
    const id= parseInt(this.jwtStorage.getID());
        // this.router.navigate(['/update/'+id]);
        this.router.navigate(['/update/']);
      
  }

  }

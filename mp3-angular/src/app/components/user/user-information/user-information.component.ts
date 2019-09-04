import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { FormGroup, Validators, AbstractControl, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/service/register.service';
@Component({
  selector: 'app-user-information',
  templateUrl: './user-information.component.html',
  styleUrls: ['./user-information.component.css']
})
export class UserInformationComponent implements OnInit {

  profile : any
 
  constructor(private registerService: RegisterService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    
    const id = +this.activatedRoute.snapshot.paramMap.get('id');
    this.registerService.getUserById(id).subscribe(
      next => {
        this.profile= next;
      },
      error => {
        console.log(error);
      }
    );
  }

  
    

  updateForm() {
    const id = +this.activatedRoute.snapshot.paramMap.get('id');
        // this.router.navigate(['/update/'+id]);
        this.router.navigate(['/update/']);
      
  }

  }

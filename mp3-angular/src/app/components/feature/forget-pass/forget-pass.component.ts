import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { UserService } from 'src/app/service/user.service';


@Component({
  selector: 'app-forget-pass',
  templateUrl: './forget-pass.component.html',
  styleUrls: ['./forget-pass.component.css']
})
export class ForgetPassComponent implements OnInit {

  searchForm: FormGroup;

  constructor(private router: Router,
    private formBuilder: FormBuilder,
    private userService: UserService) { }

  ngOnInit() {
    this.searchForm = this.formBuilder.group({
      email: ['']
    })
  }

  findOldEmail() {
    const { value } = this.searchForm;
    if(confirm("Is your email ? ")){
      this.userService.postEmail(value.email).subscribe(next => {
        alert("Your Password is resetted, please check your email.")
      },
      error =>{ alert("Wrong email, please recheck")
      })
      alert("Server is loading, wait...")
    }
    
  }


  cancel() {
    if (confirm('Are you sure?')) {
      this.router.navigate(['/']);
    }

  }
}

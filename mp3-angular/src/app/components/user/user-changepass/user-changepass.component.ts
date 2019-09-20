import { Component, OnInit, Input } from '@angular/core';
import { Validators, FormBuilder, FormGroup, AbstractControl } from '@angular/forms';
import { UserService } from 'src/app/service/user.service';
import { JwtStorageService } from 'src/app/service/jwt-storage.service';

@Component({
  selector: 'app-user-changepass',
  templateUrl: './user-changepass.component.html',
  styleUrls: ['./user-changepass.component.css']
})
export class UserChangepassComponent implements OnInit {

  @Input() childMessage: string;
  registerForm: FormGroup;
  newPassword: String;
  currentPassword: String;
  message: String;
  id: number;
  loginStatus: Boolean = false;

  constructor(private formBuilder: FormBuilder, private accountService: UserService,
    private token: JwtStorageService) { }

  comparePassword(c: AbstractControl) {
    const v = c.value;
    return (v.newPassword === v.confirmPassword) ? null : {
      passwordnotmatch: true
    };
  }
  validatePass() {

  }
  ngOnInit() {
    this.id = parseInt(this.token.getID());
    const token = this.token.getUsername();
    
    this.registerForm = this.formBuilder.group({
      currentPassword: ['', Validators.required],
      password: this.formBuilder.group({
        newPassword: ['', [Validators.minLength(6), Validators.required]],
        confirmPassword: ['', Validators.required]
      }, {
        validator: this.comparePassword,

      })
    });
  }
  public hasError = (controlName: string, errorName: string) => {
    console.log("aasd")
    return this.registerForm.controls[controlName].hasError(errorName);
  }

  onSubmit() {
    if (confirm("Bạn có muốn cập nhật password này hay không?")) {
      if (this.registerForm.valid) {
        this.currentPassword = this.registerForm.get("currentPassword").value;
        this.newPassword = this.registerForm.value.password.newPassword;
        if (this.currentPassword == this.newPassword) {
          alert("Same old password");
        } else {
          this.accountService.updatePassword(this.id, this.newPassword, this.currentPassword)
            .subscribe(res => {
              if (res.text == "Successful") {
                alert("Success");
              } else if (res.text == "NotCompare") {
                alert("Wrong Password");
              } else {
                alert("Wrong Account");
              }
            })
        }
      } else {
        alert("Please enter full information");
      }
    }
  }

}

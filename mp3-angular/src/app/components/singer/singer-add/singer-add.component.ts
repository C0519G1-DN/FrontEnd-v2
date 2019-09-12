import { Component, OnInit } from '@angular/core';
import { Singgers } from 'src/app/model/singger/singgers';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { SinggerServiceService } from 'src/app/service/singger-service.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { JwtStorageService } from 'src/app/service/jwt-storage.service';

@Component({
  selector: 'app-singer-add',
  templateUrl: './singer-add.component.html',
  styleUrls: ['./singer-add.component.css']
})
export class SingerAddComponent implements OnInit{
  upsingerForm: FormGroup;


  constructor(public singgerService: SinggerServiceService,
     private activatedRoute: ActivatedRoute, private formBuilder: FormBuilder, private router: Router, private jwtStorageService: JwtStorageService) { }

  ngOnInit() {
    const id = parseInt(this.jwtStorageService.getID());
    this.upsingerForm = this.formBuilder.group({
      name: [''],
      des: [''],
      img_singer: [''],
      user_create: [id],
    });
  }

 
  onSelectImg(event) {
    // console.log(event);
    if (event.target.files.length > 0) {
      
      const img = event.target.files[0];
      this.upsingerForm.get('img_singer').setValue(img);

    }
  }
  
  createForm() {

    const formData = new FormData();
    formData.append('name', this.upsingerForm.get('name').value);
    formData.append('des', this.upsingerForm.get('des').value);
    formData.append('img_singer', this.upsingerForm.get('img_singer').value);
    formData.append('user_create', this.upsingerForm.get('user_create').value);
    this.singgerService.upSinger(formData).subscribe(
      next => {
        // if (confirm("Upload completed. Do you want more ?")) {
        //   this.upsingerForm.get('name').setValue('');
        //   this.upsingerForm.get('des').setValue('');
        //   this.upsingerForm.get('img_singer').setValue('');
        // }
        this.router.navigate(["/singer-list"])
      }
      ,
      error => {
        alert("Plz fill full content")
      },
      
    );
   

    // this.subscription = this.singgerService.addArtist(this.singger).subscribe(data => {
    //   if (data.id && data) {
    //     this.routerService.navigate(['/my-contribution']);
    //   }
    // });

  }

}

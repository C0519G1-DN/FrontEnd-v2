import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { FormGroup, Validators, AbstractControl, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UploadSongService } from 'src/app/service/upload-song.service';
import { error } from 'util';

@Component({
  selector: 'app-song-upload',
  templateUrl: './song-upload.component.html',
  styleUrls: ['./song-upload.component.css']
})
export class SongUploadComponent implements OnInit {
  upsongForm: FormGroup;
  constructor(private upsong: UploadSongService, private activatedRoute: ActivatedRoute, private formBuilder: FormBuilder, private router: Router) { }
  ngOnInit() {
    this.upsongForm = this.formBuilder.group({
      name: [''],
      des: [''],
      file_song: [''],
      author: [''],
      img_song: ['']

    });
  }
  onSelectSong(event) {
    console.log(event);
    if (event.target.files.length > 0) {
      console.log('111');
      const file = event.target.files[0];
      this.upsongForm.get('file_song').setValue(file);

    }
  }
  onSelectImg(event) {
    // console.log(event);
    if (event.target.files.length > 0) {
      console.log('111');
      const img = event.target.files[0];
      this.upsongForm.get('img_song').setValue(img);

    }
  }
  createForm() {
    const formData = new FormData();
    formData.append('name', this.upsongForm.get('name').value);
    formData.append('des', this.upsongForm.get('des').value);
    formData.append('file_song', this.upsongForm.get('file_song').value);
    formData.append('author', this.upsongForm.get('author').value);
    formData.append('img_song', this.upsongForm.get('img_song').value);
    this.upsong.upSong(formData).subscribe(
      next => {
        if (confirm("Upload completed. Do you want more ?")) {
          this.upsongForm.get('name').setValue('');
          this.upsongForm.get('des').setValue('');
          this.upsongForm.get('file_song').setValue('');
          this.upsongForm.get('author').setValue('');
          this.upsongForm.get('img_song').setValue('');
        }
        else {
          this.router.navigate(['/']);
        }
        console.log(next);
      },
      error => {
        alert("Plz fill full content")
      }
    );

  }

}

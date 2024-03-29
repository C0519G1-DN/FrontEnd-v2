import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UploadSongService } from 'src/app/service/upload-song.service';
import { JwtStorageService } from 'src/app/service/jwt-storage.service';
import { SinggerServiceService } from 'src/app/service/singger-service.service';
import { ReqAddSinger } from 'src/app/model/song/reqAddSinger';

@Component({
  selector: 'app-song-edit',
  templateUrl: './song-edit.component.html',
  styleUrls: ['./song-edit.component.css']
})
export class SongEditComponent implements OnInit {
  [x: string]: any;
  listSinger: any;
  search: string;
  private informationFormSong: FormGroup;
  private myID = parseInt(this.jwtStorage.getSong());

  constructor(
    private jwtStorage: JwtStorageService,
    private songService: UploadSongService,
    private singerService: SinggerServiceService,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit() {


    this.informationFormSong = this.formBuilder.group({
      id: [this.myID],
      name: [''],
      des: [''],
      author: [''],
    })
    this.songService.getSongById(this.myID).subscribe(data => {


      this.informationFormSong.patchValue(data);
  });
  }
  editSong() {
    const { value } = this.informationFormSong;
    this.songService.updateSong(value).subscribe(data => {
      console.log(data);
      alert('Edited Successfully');
      this.router.navigate(['/my-contribution']);
    });
  }

  deleteSong() {

    if (confirm("Do you really want to delete this song ? ")) {
        this.songService.deleteSong(this.myID).subscribe(data => {
          alert("Deleted Sucessfully");
          this.router.navigate(['/my-contribution']);

      })

    }
  }

  searchSinger() {
    this.singerService.searchSinger(this.search).subscribe(
      data => {
       this.listSinger = data;
      });
  }

  addSinger(singerId) {
    // tslint:disable-next-line: radix
    const idSong = parseInt(this.jwtStorage.getSong());
    const idSinger = singerId;
    console.log(idSong);
    console.log(idSinger);

    const reqAddSinger = new ReqAddSinger(idSinger, idSong);
    console.log(reqAddSinger);
    this.songService.addSingerToSong(reqAddSinger).subscribe(
      next => { console.log('ok');
     });
  }
}

import { Component, OnInit } from '@angular/core';
import { UploadSongService } from 'src/app/service/upload-song.service';
import { JwtStorageService } from 'src/app/service/jwt-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-song-like',
  templateUrl: './song-like.component.html',
  styleUrls: ['./song-like.component.css']
})
export class SongLikeComponent implements OnInit {

  totalLikes: any;
  songs: any;

  constructor(
    private uploadSongService: UploadSongService,
    private jwtStorageService: JwtStorageService,
    private router: Router
  ) { }

  ngOnInit() {
    // this.getAllSong();
    this.getTopSong();
  }

  getAllSong(){
    this.uploadSongService.getAllSong().subscribe(data => {
      this.songs = data;
    })
  }

  playsong(idSong: number) {
    const idSongStr = String(idSong);
    this.jwtStorageService.saveSong(idSongStr);
    this.router.navigate(['/song-listening']);
  }

  getTopSong(){
    this.uploadSongService.getTopLike().subscribe(data3 => {
      this.totalLikes = data3;
      console.log(data3);
    })
  }
}

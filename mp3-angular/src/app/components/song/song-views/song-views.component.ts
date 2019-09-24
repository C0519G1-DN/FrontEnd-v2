import { Component, OnInit } from '@angular/core';
import { SongServiceService } from 'src/app/service/song-service.service';
import { UploadSongService } from 'src/app/service/upload-song.service';
import { JwtStorageService } from 'src/app/service/jwt-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-song-views',
  templateUrl: './song-views.component.html',
  styleUrls: ['./song-views.component.css']
})
export class SongViewsComponent implements OnInit {
songs: any;
  constructor(
    private uploadSongService: UploadSongService,
    private jwtStorageService: JwtStorageService,
    private router : Router
    ) { }

  ngOnInit() {
    this.uploadSongService.getAllSong().subscribe(next=>this.songs=next)
  }

  playsong(idSong: number){
    const idSongStr = String(idSong);
    this.jwtStorageService.saveSong(idSongStr);
    this.router.navigate(['/song-listening']);
  }

}

import { Component, OnInit } from '@angular/core';
import { UploadSongService } from 'src/app/service/upload-song.service';
import { JwtStorageService } from 'src/app/service/jwt-storage.service';
import { likeSong } from 'src/app/model/song/likeSong';
import { SourceListMap } from 'source-list-map';

@Component({
  selector: 'app-song-block',
  templateUrl: './song-block.component.html',
  styleUrls: ['./song-block.component.css']
})
export class SongBlockComponent implements OnInit {
  isLike: any;
  private idSong = parseInt(this.jwtStorageService.getSong());
  private mySong: any;

  constructor(
    private songService: UploadSongService,
    private jwtStorageService: JwtStorageService,
  ) { }

  ngOnInit() {
    this.songService.getSongById(this.idSong).subscribe(data => {
      this.mySong = data;
    })
    var username = this.jwtStorageService.getUsername();
    var idSong = parseInt(this.jwtStorageService.getSong());
    var getLikeSong = new likeSong(username, idSong, false);
    this.songService.getLike(getLikeSong).subscribe(data => {
      this.isLike = data;
      console.log(data)
    })
  }

  like() {
    this.isLike = !this.isLike;
    var username = this.jwtStorageService.getUsername();
    var idSong = parseInt(this.jwtStorageService.getSong());
    console.log(username);
    console.log("-------" + idSong);
    console.log(!(this.isLike))
    var addLikeSong = new likeSong(username, idSong, this.isLike);
    this.songService.likeSong(addLikeSong).subscribe(data => {
      console.log(data);
    })
  }
}

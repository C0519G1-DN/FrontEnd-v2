import { Component, OnInit } from '@angular/core';
import {Songs} from 'src/app/model/song/songs'
import { SongServiceService } from 'src/app/service/song-service.service';
import { Router } from '@angular/router';
import { JwtStorageService } from 'src/app/service/jwt-storage.service';
import { PlaylistServiceService } from 'src/app/service/playlist-service.service';
import { ReqAddSong } from 'src/app/model/playlist/reqAddSong';

@Component({
  selector: 'app-playlist-add-song',
  templateUrl: './playlist-add-song.component.html',
  styleUrls: ['./playlist-add-song.component.css']
})
export class PlaylistAddSongComponent implements OnInit {
songs: Songs[];
search: String;

  constructor( private songService: SongServiceService, private router: Router, private jwtStorageService: JwtStorageService, private playlistService: PlaylistServiceService) { }

  ngOnInit() {
    this.songService.getAllSong().subscribe(next => {this.songs= next});
    
  }
  addTheSong(songId: number){
    const idPlaylist= parseInt(this.jwtStorageService.getPlaylist());
    const idSong= songId;
console.log(idPlaylist);
console.log(idSong);

    const reqAddSong= new ReqAddSong(idPlaylist , idSong);
    console.log(reqAddSong);
    this.playlistService.addsong(reqAddSong).subscribe(
      next => {console.log("ok")})
  }

}

import { Component, OnInit } from '@angular/core';
import {Songs} from 'src/app/model/song/songs'
import { SongServiceService } from 'src/app/service/song-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-playlist-add-song',
  templateUrl: './playlist-add-song.component.html',
  styleUrls: ['./playlist-add-song.component.css']
})
export class PlaylistAddSongComponent implements OnInit {
songs: Songs[];
search: String;

  constructor( private songService: SongServiceService, private router: Router) { }

  ngOnInit() {
    this.songService.getAllSong().subscribe(next => {this.songs= next});
    
  }
  addTheSong(songId: number){
    // this.router.navigate
    console.log(songId);
  }

}

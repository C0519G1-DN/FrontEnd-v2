import { Component, OnInit } from '@angular/core';
// import { ISong } from 'src/app/model/song.module';
// import { IPlaylist } from 'src/app/model/playlist.module';
// import { SongService } from 'src/app/service/song.service';
// import { PlaylistService } from 'src/app/service/playlist.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  // public songs: ISong[];
  // public playlists: IPlaylist[];

  constructor(
    // private songService: SongService,
    // public playService: PlaylistService,
    public routerService: Router,
    public routerActivatedService: ActivatedRoute) { }

  ngOnInit() {
    // this.songService.getAllSong().subscribe(data => {
    //   console.log(data);
    //   this.songs = data;
    // }),
    //   this.playService.getAllPlaylist().subscribe(data1 => {
    //     this.playlists = data1;
    //   })
  }



}

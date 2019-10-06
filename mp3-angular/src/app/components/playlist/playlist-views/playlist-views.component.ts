import { Component, OnInit } from '@angular/core';
import { PlaylistServiceService } from 'src/app/service/playlist-service.service';
import { FeatureService } from 'src/app/service/feature.service';
import { JwtStorageService } from 'src/app/service/jwt-storage.service';
import { Router } from '@angular/router';
declare var $: any;
@Component({
  selector: 'app-playlist-views',
  templateUrl: './playlist-views.component.html',
  styleUrls: ['./playlist-views.component.css']
})
export class PlaylistViewsComponent implements OnInit {

  constructor(private playlistService: PlaylistServiceService, private jwtStorage: JwtStorageService, private router: Router) { }
  Playlists: any
  ngOnInit() {
    this.playlistService.getMostViewPlaylist().subscribe(next => this.Playlists = next)
  }
  goToListenning(id:number){
    const myID= String(id);
    this.jwtStorage.savePlaylist(myID);
    this.router.navigate(['/playlist-listening']);
  }

  audioPlayer() {
    $("#audioPlayer")[0].src = "assets/aaa.mp3";
    $("#audioPlayer")[0].play();
  }
}

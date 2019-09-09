import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Songs } from 'src/app/model/song/songs';
import { Playlists } from 'src/app/model/playlist/playlists';
import { SongServiceService } from 'src/app/service/song-service.service';
import { PlaylistServiceService } from 'src/app/service/playlist-service.service';
import { Subscription } from 'rxjs';
import { JwtStorageService } from 'src/app/service/jwt-storage.service';
import { FeatureService } from 'src/app/service/feature.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  public songs: Songs[];
  public subscription: Subscription;
  public subscriptionplaylist: Subscription;
  public playlists: Playlists[];

  constructor(

    private songService: SongServiceService,
    public playService: PlaylistServiceService,
    public routerService: Router,
    public routerActivatedService: ActivatedRoute,
    public jwtStorage: JwtStorageService,
    public feature: FeatureService,
    
    private playlistService: PlaylistServiceService
    
    ) { } 

  ngOnInit() {
    this.viewListPlaylist();
    // this.subscription = this.songService.getAllSong().subscribe(data => {
    //   this.songs = data;
    // })
    // this.subscriptionplaylist = this.playService.getAllPlaylist().subscribe(data => {
    //   this.playlist = data;
    // })
  }

  viewListPlaylist() {
    this.playlistService.getAllPlaylist().subscribe((data: Playlists[]) => {
      this.playlists = data;
    })
  }

  ngOnDestroy() {

    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    if (this.subscriptionplaylist) {
      this.subscriptionplaylist.unsubscribe();
    }

  }

}

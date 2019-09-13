import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Songs } from 'src/app/model/song/songs';
import { Playlists } from 'src/app/model/playlist/playlists';
import { SongServiceService } from 'src/app/service/song-service.service';
import { PlaylistServiceService } from 'src/app/service/playlist-service.service';
import { Subscription } from 'rxjs';
import { JwtStorageService } from 'src/app/service/jwt-storage.service';
import { FeatureService } from 'src/app/service/feature.service';
import { UploadSongService } from 'src/app/service/upload-song.service';

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
    private uploadSong: UploadSongService,
    public playService: PlaylistServiceService,
    public routerService: Router,
    public routerActivatedService: ActivatedRoute,
    public jwtStorage: JwtStorageService,
    public feature: FeatureService,
    
    private playlistService: PlaylistServiceService
    
    ) { } 

  ngOnInit() {
    this.viewListPlaylist();
    this.viewListSong();
    
  }

  viewListSong(){
    this.uploadSong.getAllSong().subscribe((data)=>{
      console.log(data);
      this.songs = data;
    })
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

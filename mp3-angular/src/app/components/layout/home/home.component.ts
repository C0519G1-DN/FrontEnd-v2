import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Songs } from 'src/app/model/song/songs';
import { Playlists } from 'src/app/model/playlist/playlists';
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
  private totalLikes: any;

  constructor(
    private uploadSong: UploadSongService,
    public playService: PlaylistServiceService,
    public routerService: Router,
    public routerActivatedService: ActivatedRoute,
    public jwtStorage: JwtStorageService,
    public feature: FeatureService,
    private router: Router,
    private playlistService: PlaylistServiceService
    
    ) { } 

  ngOnInit() {
    this.viewListPlaylist();
    this.viewListSong();
    this.getTopSong();
    // window.location.reload();
  }

  viewListSong(){
    this.uploadSong.getAllSong().subscribe((data)=>{
      // console.log(data);
      this.songs = data;
    })
  }

  viewListPlaylist() {
    this.playlistService.getAllPlaylist().subscribe((data: Playlists[]) => {
      this.playlists = data;
    })
  }

  playsong(idSong: number) {
    const idSongStr = String(idSong);
    this.jwtStorage.saveSong(idSongStr);
    this.router.navigate(['/song-listening']);
  }

  getTopSong(){
    this.uploadSong.getTopLike().subscribe(data3 => {
      this.totalLikes = data3;
      console.log(data3);
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

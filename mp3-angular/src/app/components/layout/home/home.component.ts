import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Songs } from 'src/app/model/song/songs';
import { Playlists } from 'src/app/model/playlist/playlists';
import { SongServiceService } from 'src/app/service/song-service.service';
import { PlaylistServiceService } from 'src/app/service/playlist-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {


  public songs: Songs[];
  public playlist: Playlists[];
  public subscription: Subscription;
  public subscriptionplaylist: Subscription;

  constructor(
    private songService: SongServiceService,
    public playService: PlaylistServiceService,
    public routerService: Router,
    public routerActivatedService: ActivatedRoute) { }

  ngOnInit() {
    this.subscription = this.songService.getAllSong().subscribe(data => {
      this.songs = data;
    })
    this.subscriptionplaylist = this.playService.getAllPlaylist().subscribe(data => {
      this.playlist = data;
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

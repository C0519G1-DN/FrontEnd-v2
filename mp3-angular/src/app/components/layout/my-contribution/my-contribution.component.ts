import { Component, OnInit, OnDestroy } from '@angular/core';
import { Songs } from 'src/app/model/song/songs';
import { Singgers } from 'src/app/model/singger/singgers';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { SinggerServiceService } from 'src/app/service/singger-service.service';
import { SongServiceService } from 'src/app/service/song-service.service';
import { PlaylistServiceService } from 'src/app/service/playlist-service.service';
import { Playlists } from 'src/app/model/playlist/playlists';

@Component({
  selector: 'app-my-contribution',
  templateUrl: './my-contribution.component.html',
  styleUrls: ['./my-contribution.component.css']
})
export class MyContributionComponent implements OnInit {

  public songs: Songs[];
  public singger: Singgers[];
  public subscription: Subscription;
  public subscriptionSingger: Subscription;
  playlists: Playlists[];

  constructor(
    public songService: SongServiceService,
    public routerService: Router,
    public routerActivatedService: ActivatedRoute,
    public singerService: SinggerServiceService,
    private playlistService: PlaylistServiceService,
    ) { }


    ngOnInit() {
      this.viewListPlaylist();
      // this.subscription = this.songService.getAllSong().subscribe(data => {
      //   this.songs = data;
      // })
      // this.subscriptionSingger = this.singerService.getAllArtist().subscribe(data => {
      //   this.singger = data;
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
      if (this.subscriptionSingger) {
        this.subscriptionSingger.unsubscribe();
      }
    }
}

import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Playlists } from 'src/app/model/playlist/playlists';
import { PlaylistServiceService } from 'src/app/service/playlist-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-playlist-add',
  templateUrl: './playlist-add.component.html',
  styleUrls: ['./playlist-add.component.css']
})
export class PlaylistAddComponent implements OnInit, OnDestroy{

  public playlist: Playlists;
  public subscription:Subscription;

  constructor(public playlistService: PlaylistServiceService,
    public routerService: Router) { }

  ngOnInit() {
    this.playlist = new Playlists();
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  onAddPlaylist() {

    this.subscription = this.playlistService.addPlaylist(this.playlist).subscribe(data => {
      if (data.id && data) {
        this.routerService.navigate(['/melon.mp3.vn/playlist']);
      }
    });

  }

}

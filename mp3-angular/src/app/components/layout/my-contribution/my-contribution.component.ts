import { Component, OnInit, OnDestroy } from '@angular/core';
import { Songs } from 'src/app/model/song/songs';
import { Singgers } from 'src/app/model/singger/singgers';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { SinggerServiceService } from 'src/app/service/singger-service.service';
import { SongServiceService } from 'src/app/service/song-service.service';
import { PlaylistServiceService } from 'src/app/service/playlist-service.service';
import { Playlists } from 'src/app/model/playlist/playlists';
import { JwtStorageService } from 'src/app/service/jwt-storage.service';
import { UploadSongService } from 'src/app/service/upload-song.service';

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
    public uploadSong: UploadSongService,
    public routerService: Router,
    public routerActivatedService: ActivatedRoute,
    public singerService: SinggerServiceService,
    private playlistService: PlaylistServiceService,
    private jwtStorageService: JwtStorageService,
  ) { }


  ngOnInit() {
    this.viewListPlaylist();
    this.viewListSong();
  }


  viewListPlaylist() {
    this.playlistService.getAllPlaylist().subscribe((data: Playlists[]) => {
      this.playlists = data;
    })
  }
  editPlaylist(idPlaylist: number) {
    const idPlaylistStr = String(idPlaylist);
    console.log("number" + idPlaylist);
    this.jwtStorageService.savePlaylist(idPlaylistStr);
    console.log("string" + idPlaylistStr);
    this.routerService.navigate(['/playlist-edit']);
  }


  viewListSong() {
    this.uploadSong.getAllSong().subscribe((data) => {
      console.log(data);
      this.songs = data;
    })
  }
  addSong(id: number) {
    const a = String(id);
    this.jwtStorageService.savePlaylist(a);
    this.routerService.navigate(['/playlist-edit']);
  }
  editSong(id: number) {
    const myId = String(id);
    this.jwtStorageService.saveSong(myId);
    this.routerService.navigate(['/song-edit']);
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

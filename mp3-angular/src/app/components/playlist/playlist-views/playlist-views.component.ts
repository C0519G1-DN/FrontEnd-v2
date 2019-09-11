import { Component, OnInit } from '@angular/core';
import { PlaylistServiceService } from 'src/app/service/playlist-service.service';

@Component({
  selector: 'app-playlist-views',
  templateUrl: './playlist-views.component.html',
  styleUrls: ['./playlist-views.component.css']
})
export class PlaylistViewsComponent implements OnInit {

  constructor(private playlistService:PlaylistServiceService) { }
a: any
  ngOnInit() {
this.playlistService.getAllPlaylist().subscribe(next => this.a=next)
  }

}

import { Component, OnInit } from '@angular/core';
import { SongServiceService } from 'src/app/service/song-service.service';

@Component({
  selector: 'app-song-views',
  templateUrl: './song-views.component.html',
  styleUrls: ['./song-views.component.css']
})
export class SongViewsComponent implements OnInit {
songs: any;
  constructor( private songService: SongServiceService) { }

  ngOnInit() {
    this.songService.getAllSong().subscribe(next=>this.songs=next)
  }

}

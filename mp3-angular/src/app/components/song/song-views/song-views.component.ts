import { Component, OnInit } from '@angular/core';
import { SongServiceService } from 'src/app/service/song-service.service';
import { UploadSongService } from 'src/app/service/upload-song.service';

@Component({
  selector: 'app-song-views',
  templateUrl: './song-views.component.html',
  styleUrls: ['./song-views.component.css']
})
export class SongViewsComponent implements OnInit {
songs: any;
  constructor( private uploadSongService: UploadSongService) { }

  ngOnInit() {
    this.uploadSongService.getAllSong().subscribe(next=>this.songs=next)
  }

}

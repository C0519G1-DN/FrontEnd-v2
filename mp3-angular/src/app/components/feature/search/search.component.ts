import { Component, OnInit, OnDestroy } from '@angular/core';
import { SinggerServiceService } from 'src/app/service/singger-service.service';
import { Router } from '@angular/router';
import { SearchService } from 'src/app/service/search-service';
import { UploadSongService } from 'src/app/service/upload-song.service';
import { PlaylistServiceService } from 'src/app/service/playlist-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, OnDestroy {
  ngOnDestroy(): void {
  }
 
  
  listSinger: any;
  listSong: any;
  listPlaylist: any;
    constructor(private router: Router,
      private singerService: SinggerServiceService,
      private songService:UploadSongService,
      private playlistService: PlaylistServiceService,
      private searchService: SearchService) { }
  
    ngOnInit() {

      if(this.searchService.search){
        this.searchService.searchName().subscribe( 
            data => {
             this.listSinger = data[0];
             this.listSong = data[1];
             this.listPlaylist = data[2];
            });
          }
    
    }
  }

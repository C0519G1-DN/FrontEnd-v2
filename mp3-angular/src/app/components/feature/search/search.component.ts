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
    // this.searchService.search = null;
    // this.listSinger = null;
    // this.listSong = null;
    // this.listPlaylist = null;
  }
 
  aaa = "as";
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
      this.singerService.searchSinger(this.searchService.search).subscribe( 
        data => {
         this.listSinger = data;
         console.log(this.searchService.search)
        });

        this.songService.searchSongName(this.searchService.search).subscribe( 
          data => {
           this.listSong = data;
           console.log(this.searchService.search)
          });
  
          this.playlistService.searchPlaylistName(this.searchService.search).subscribe( 
            data => {
             this.listPlaylist = data;
             console.log(this.searchService.search)
            });
          }
    
    }
  }

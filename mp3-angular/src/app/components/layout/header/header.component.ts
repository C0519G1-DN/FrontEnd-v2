import { Component, OnInit } from '@angular/core';
import { JwtStorageService } from 'src/app/service/jwt-storage.service';
import { FeatureService } from 'src/app/service/feature.service';
import { Router } from '@angular/router';
import { SearchComponent } from '../../feature/search/search.component';
import { SearchService } from 'src/app/service/search-service';
import { SinggerServiceService } from 'src/app/service/singger-service.service';
import { UploadSongService } from 'src/app/service/upload-song.service';
import { PlaylistServiceService } from 'src/app/service/playlist-service.service';

@Component({
  providers: [SearchComponent],
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  searchData: string;
  constructor(private feature: FeatureService,
    private jwtStorage: JwtStorageService,
    private router: Router,
    private searchService: SearchService,
    private searchComponent: SearchComponent,
    private singerService: SinggerServiceService,
    private songService: UploadSongService,
    private playlistService: PlaylistServiceService
  ) { }
  myuser: string;
  listSinger: any;
  listSong: any;
  listPlaylist: any;
  ngOnInit() {
    this.myuser = this.jwtStorage.getUsername();

  }
  logout() {
    this.jwtStorage.logOut();
    this.router.navigate(['/logout'])
  }

  search() {
    this.searchService.search = this.searchData;
    this.router.navigate(['/temp'])
    // this.searchService.search = this.searchData;
    // this.router.navigateByUrl('/search');
    // this.searchComponent.ngOnInit();
  //   this.singerService.searchSinger(this.searchService.search).subscribe(
  //     data => {
  //       this.listSinger = data;
  //       console.log(this.searchService.search)
  //     });

  //   this.songService.searchSongName(this.searchService.search).subscribe(
  //     data => {
  //       this.listSong = data;
  //       console.log(this.searchService.search)
  //     });

  //   this.playlistService.searchPlaylistName(this.searchService.search).subscribe(
  //     data => {
  //       this.listPlaylist = data;
  //       console.log(this.searchService.search)
  //     });
     
  // }
  }
}

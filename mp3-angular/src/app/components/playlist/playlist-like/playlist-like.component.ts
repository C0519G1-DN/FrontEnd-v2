import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtStorageService } from 'src/app/service/jwt-storage.service';
import { SocialService } from 'src/app/service/social.service';

@Component({
  selector: 'app-playlist-like',
  templateUrl: './playlist-like.component.html',
  styleUrls: ['./playlist-like.component.css']
})
export class PlaylistLikeComponent implements OnInit {
Playlists:any = [];
totalLike: any;
data: any;
  constructor(private router: Router,
    private jwtStorageService: JwtStorageService,
    private socialService: SocialService) { }

  ngOnInit() {
    this.socialService.getToMostLikePlaylist().subscribe(
      next => {
        this.data = next;
        next.forEach(element => {
          this.Playlists.push(element.playlist)
          
        });
       
            }
    )
  }
  goToListenning(id:number){
    const myID= String(id);
    this.jwtStorageService.savePlaylist(myID);
    this.router.navigate(['/playlist-listening']);
  }

}

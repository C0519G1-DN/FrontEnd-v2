import { Component, OnInit } from '@angular/core';
import { PlaylistServiceService } from 'src/app/service/playlist-service.service';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { JwtStorageService } from 'src/app/service/jwt-storage.service';

@Component({
  selector: 'app-playlist-block',
  templateUrl: './playlist-block.component.html',
  styleUrls: ['./playlist-block.component.css']
})
export class PlaylistBlockComponent implements OnInit {

  private idPlaylist = parseInt(this.jwtStorageService.getPlaylist());
   myPlaylist: any;
  constructor(private playlistService: PlaylistServiceService,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private jwtStorageService: JwtStorageService) { }

  ngOnInit() {
    this.playlistService.getPlaylistByIdToListen(this.idPlaylist).subscribe(data => {
      this.myPlaylist = data;
      console.log(data)
    })
  }

}

import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Playlists } from 'src/app/model/playlist/playlists';
import { PlaylistServiceService } from 'src/app/service/playlist-service.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { JwtStorageService } from 'src/app/service/jwt-storage.service';

@Component({
  selector: 'app-playlist-add',
  templateUrl: './playlist-add.component.html',
  styleUrls: ['./playlist-add.component.css']
})
export class PlaylistAddComponent implements OnInit{

  newPlaylistForm: FormGroup;

  constructor(
    private playlistService : PlaylistServiceService,
    private formBuilder : FormBuilder,
    private router : Router, 
    private jwtStorageService: JwtStorageService
    ) { }

  ngOnInit() {
    const userId = parseInt(this.jwtStorageService.getID())
    this.newPlaylistForm = this.formBuilder.group({
      id: [''],
      name: [''],
      des: [''],
      username_create: [userId]
    })
  }

  createPlaylist(){
    const{value} = this.newPlaylistForm;
    this.playlistService.createPlaylist(value).subscribe(data => {
      console.log(data);
      alert("The new playlist is created sucessfully !");
      this.router.navigate(['/my-contribution']);
    })
  }

}

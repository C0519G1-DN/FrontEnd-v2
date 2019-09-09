import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Playlists } from 'src/app/model/playlist/playlists';
import { PlaylistServiceService } from 'src/app/service/playlist-service.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-playlist-add',
  templateUrl: './playlist-add.component.html',
  styleUrls: ['./playlist-add.component.css']
})
export class PlaylistAddComponent implements OnInit{

  // public playlist: Playlists;
  // public subscription:Subscription;
  newPlaylistForm: FormGroup;

  constructor(private playlistService : PlaylistServiceService,
    private formBuilder : FormBuilder,
    private router : Router) { }

  ngOnInit() {
    this.newPlaylistForm = this.formBuilder.group({
      id: [''],
      name: [''],
      des: [''],
      username_create: [''],
      day_create : ['']
    })
  }

  // ngOnDestroy() {
  //   if (this.subscription) {
  //     this.subscription.unsubscribe();
  //   }
  // }

  createPlaylist(){
    const{value} = this.newPlaylistForm;
    this.playlistService.createPlaylist(value).subscribe(data => {
      console.log(data);
      alert("The new playlist is created sucessfully !");
      this.router.navigate(['/my-contribution']);
    })
  }

}

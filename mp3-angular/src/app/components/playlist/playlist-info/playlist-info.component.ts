import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { PlaylistServiceService } from 'src/app/service/playlist-service.service';
import { JwtStorageService } from 'src/app/service/jwt-storage.service';

@Component({
  selector: 'app-playlist-info',
  templateUrl: './playlist-info.component.html',
  styleUrls: ['./playlist-info.component.css']
})
export class PlaylistInfoComponent implements OnInit {

  private infoPlaylist: FormGroup;
  private songsOfPlaylist: any;
  private idPlaylist = parseInt(this.jwtStorageService.getPlaylist());
  
  constructor(
    private playlistService: PlaylistServiceService,
    private formBuilder: FormBuilder,
    private router: Router,
    private jwtStorageService: JwtStorageService
  ) { }

  ngOnInit() {
    this.infoPlaylist = this.formBuilder.group({
      id: [this.idPlaylist],
      name: [''],
      des: [''],
      songs: [''],
    })

    this.playlistService.getPlaylistById(this.idPlaylist).subscribe(data => {
      this.infoPlaylist.patchValue(data);
    })
  }

  editPlaylist() {
    const { value } = this.infoPlaylist;
    this.playlistService.updatePlaylist(value).subscribe(data => {
      console.log(data);
      alert("Edited Successfully");
      this.router.navigate(['/my-contribution']);
    })
  }

  deletePlaylist() {
    if (confirm("Do you really want to delete this playlist ? ")) {
      this.playlistService.deletePlaylist(this.idPlaylist).subscribe(data => {
        alert("Deleted Sucessfully");
        this.router.navigate(['/my-contribution']);
      })
    }
  }
}

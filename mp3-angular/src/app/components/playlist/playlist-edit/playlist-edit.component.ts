import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Playlists } from 'src/app/model/playlist/playlists';
import { ActivatedRoute, Router } from '@angular/router';
import { PlaylistServiceService } from 'src/app/service/playlist-service.service';
import { JwtStorageService } from 'src/app/service/jwt-storage.service';
import { ReqAddSong } from 'src/app/model/playlist/reqAddSong';

@Component({
  selector: 'app-playlist-edit',
  templateUrl: './playlist-edit.component.html',
  styleUrls: ['./playlist-edit.component.css']
})
export class PlaylistEditComponent implements OnInit {

  private infoPlaylist: FormGroup;
  private songsOfPlaylist: any;
  private idPlaylist = parseInt(this.jwtStorageService.getPlaylist());


  constructor(
    private playlistService: PlaylistServiceService,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
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
    console.log(this.infoPlaylist);
    this.loadSongOfPlaylist(this.idPlaylist);
    console.log(this.idPlaylist);
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

  deleteSongInPlaylist(idSong: number) {
    if (confirm("Do you want to delete this song?")) {
      var idPlaylist = parseInt(this.jwtStorageService.getPlaylist());
      console.log("SOng" + idSong);
      console.log(idPlaylist);
      var reqAddSong = new ReqAddSong(idPlaylist, idSong);
      this.playlistService.deletesong(reqAddSong).subscribe(data => {
        alert("Delete sucessfully !");
        location.reload();
      })
    }
  }

  loadSongOfPlaylist(id: number) {
    this.playlistService.getSongOfPlaylist(id).subscribe(data => {
      console.log(data);
      this.songsOfPlaylist = data;
    })
  }

}

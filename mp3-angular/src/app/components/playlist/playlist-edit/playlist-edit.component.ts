import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Playlists } from 'src/app/model/playlist/playlists';
import { ActivatedRoute, Router } from '@angular/router';
import { PlaylistServiceService } from 'src/app/service/playlist-service.service';

@Component({
  selector: 'app-playlist-edit',
  templateUrl: './playlist-edit.component.html',
  styleUrls: ['./playlist-edit.component.css']
})
export class PlaylistEditComponent implements OnInit {

  private infoPlaylist: FormGroup;
  private newPlaylist: Playlists;

  constructor(
    private playlistService: PlaylistServiceService,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.infoPlaylist = this.formBuilder.group({
      id: [''],
      name: [''],
      des: [''],
      username_create: [''],
      createDay: [''],
      delected: [''],
      songs:[''],
      
    })

    this.loadData();
    console.log(this.infoPlaylist);
  }

  loadData() {
    this.activatedRoute.params.subscribe(ID => {
      console.log(ID);
      let id = ID.id;
      this.playlistService.getPlaylistById(id).subscribe(data => {
        this.infoPlaylist.patchValue(data);
      })
    })
  }

  editPlaylist() {
    const { value } = this.infoPlaylist;
    this.playlistService.updatePlaylist(value).subscribe(data => {
      console.log(data);
      alert("Edited Successfully");
      // this.router.navigate(['/my-contribution']);
    })
  }

  deletePlaylist() {
    if (confirm("Do you really want to delete this playlist ? ")) {
      this.activatedRoute.params.subscribe(ID => {
        console.log(ID);
        let id = ID.id;
        // const { value } = this.infoPlaylist;
        this.playlistService.deletePlaylist(id).subscribe(data => {
          alert("Deleted Sucessfully");
          this.router.navigate(['/my-contribution']);
        })
      })
    }
  }
}

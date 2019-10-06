import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { PlaylistServiceService } from 'src/app/service/playlist-service.service';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { JwtStorageService } from 'src/app/service/jwt-storage.service';
import { SocialService } from 'src/app/service/social.service';
import { ReqCommentPlaylist } from 'src/app/model/socials/reqCommentPlaylist';
import { ReqLikePlaylist } from 'src/app/model/socials/reqLikePlaylist';
declare var $: any;
@Component({
  selector: 'app-playlist-block',
  templateUrl: './playlist-block.component.html',
  styleUrls: ['./playlist-block.component.css']
})
export class PlaylistBlockComponent implements OnInit {
  isTheFirst = false;
  private idPlaylist = parseInt(this.jwtStorageService.getPlaylist());
  myPlaylist: any;
  theComment: string;
  private idUser = parseInt(this.jwtStorageService.getID());
  totalLike: any;
  isLiked: boolean;
  resComment: any;
  totalView: any;
  private myUsername = this.jwtStorageService.getUsername();
  constructor(private playlistService: PlaylistServiceService,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private jwtStorageService: JwtStorageService,
    private socialService: SocialService,
    private elementRef:ElementRef) {
      // $("#huhu").addEventListener(alert("huhu"))
     }

  currentSong = 0;
  

  ngOnInit() {
    
    this.playlistService.addViewPlaylist(this.idPlaylist).subscribe(next => this.totalView = next)
    if (!!!this.idUser) {
      this.idUser = 0
    }
    this.playlistService.getPlaylistByIdToListen(this.idPlaylist).subscribe(data => {
      this.myPlaylist = data;
    });

    this.social();
    // $("#audioPlayer")[0].src = this.myPlaylist.songs[this.currentSong].link_song;
    // $("#image img").attr("src", this.myPlaylist.songs[this.currentSong].link_img_song);
    // $("#audioPlayer")[0].play();
  }
  social() {
    this.socialService.getLike(this.idUser, this.idPlaylist).subscribe(
      next => {
        this.totalLike = next.totalLike;
        this.isLiked = next.liked;
      })


    this.socialService.getComment(this.idPlaylist).subscribe(
      next => {
        this.resComment = next;
      }
    )
  }
  postComment() {
    const req = new ReqCommentPlaylist(this.idPlaylist, this.idUser, this.theComment)
    this.socialService.postComment(req).subscribe(
      next => {
        this.social();
        this.theComment = "";
      }
    );
  }

  dolike() {
    if (!!this.idUser) {
      if (!this.isLiked) {
        this.totalLike = this.totalLike + 1;
        this.isLiked = !this.isLiked;
      } else {
        this.totalLike = this.totalLike - 1;
        this.isLiked = !this.isLiked;
      }

      const req = new ReqLikePlaylist(this.idPlaylist, this.idUser, this.isLiked);
      this.socialService.postLike(req).subscribe(
      )
    }
    else {
      alert("Login and like")
    }
  }

  // begin() {
  //   this.isTheFirst = true;
  //   // $("#audioPlayer")[0].src = this.myPlaylist.songs[this.currentSong].link_song;
  //   $("#audioPlayer")[0].src = "assets/aaa.mp3";
  //   $("#image img").attr("src", this.myPlaylist.songs[this.currentSong].link_img_song);
  //   $("#audioPlayer")[0].play();
  // }
  // playOrPauseSong() {
  //   if ($("#audioPlayer")[0].paused) {
  //     $("#audioPlayer")[0].play();
  //     $("#play img").attr("src", "assets/pause.jpg");
  //   } else {
  //     $("#audioPlayer")[0].pause();
  //     $("#play img").attr("src", "assets/play.jpg");
  //   }
  // }

  gogo(i) {
    // $("#play img").attr("src", "assets/pause.jpg");
    this.currentSong = i;
    $("#audioPlayer")[0].src = this.myPlaylist.songs[this.currentSong].link_song;
    $("#image img").attr("src", this.myPlaylist.songs[this.currentSong].link_img_song);
    $("#audioPlayer")[0].play();
  };

  next() {
    this.isTheFirst = true;
    this.currentSong++;
    if (this.currentSong >= this.myPlaylist.songs.length) {
      this.currentSong = 0;
    }
    $("#play img").attr("src", "assets/pause.jpg");
    $("#image img").attr("src", this.myPlaylist.songs[this.currentSong].link_img_song);
    console.log(this.myPlaylist.songs[this.currentSong].link_img_song);

    $("#audioPlayer")[0].src = this.myPlaylist.songs[this.currentSong].link_song;
    $("#audioPlayer")[0].play();

  }
  pre() {
    this.isTheFirst = true;
    this.currentSong--;
    if (this.currentSong < 0) {
      this.currentSong = this.myPlaylist.songs.length - 1;
    }
    $("#play img").attr("src", "assets/pause.jpg");
    $("#image img").attr("src", this.myPlaylist.songs[this.currentSong].link_img_song);
    $("#audioPlayer")[0].src = this.myPlaylist.songs[this.currentSong].link_song;
    $("#audioPlayer")[0].play();
  }

   // this.song.addEventListener('timeupdate', function () {
  //   var position = this.song.currentTime / this.song.duration;
  //   this.fillBar.style.width = position * 100 + '%';
  // });
     // this.song.addEventListener('timeupdate', function () {
  //   var position = this.song.currentTime / this.song.duration;
  //   this.fillBar.style.width = position * 100 + '%';
  // });
//   hihi(){
//     let a = $("#audioPlayer")[0].currentTime;
//     let b = $("#audioPlayer")[0].duration;

//     let position = a / b;
//     $("#fill")[0].style.width = position * 100 + '%';
//     console.log(a)

//   }
//   haha(){
//   $("#audioPlayer")[0].addEventListener('timeupdate',this.hihi())
// }
// ngAfterViewInit() {
//   this.elementRef.nativeElement.querySelector(".huhu")
//                                 .addEventListener('click', console.log("aaa"));
// }
}

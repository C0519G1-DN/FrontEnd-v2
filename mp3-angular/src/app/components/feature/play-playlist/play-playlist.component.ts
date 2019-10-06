import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-play-playlist',
  templateUrl: './play-playlist.component.html',
  styleUrls: ['./play-playlist.component.css']
})
export class PlayPlaylistComponent implements OnInit {

  songs = ["assets/AnhDechCanGiNhieuNgoaiEm.mp3","assets/aaa.mp3", "ConTraiCung-Bray.mp3", "ExsHateMe-BRayMasewAMee.mp3", "ExsHateMe-BRayMasewAMee.mp3", "NenVaHoa-Rhymastic.mp3", "SaoCungDuocGuitarVersion-Binz.mp3", "TheySaid-TouliverBinz.mp3"];
  poster = ["assets/pic-1.jpg", "assets/pic-2.jpg", "assets/pic-3.jpg", "assets/pic-4.png", "assets/pic-5.jpg", "assets/pic-6.jpg", "assets/pic-7.png"];
  songTitle = document.getElementById("songTitle");
  fillBar;
  hande;
  song = new Audio();
  currentSong = 0;


  constructor() { }

  ngOnInit() {

    this.playSong();
    

   

    
  }
  // audioPlayer() {
  //   $("#audioPlayer")[0].src = "assets/AnhDechCanGiNhieuNgoaiEm.mp3";
  //   $("#audioPlayer")[0].play();
  // }


  playSong() {
    this.song.src = this.songs[this.currentSong];
    this.songTitle.textContent = this.songs[this.currentSong];
    const promise = this.song.play();
  }
  playOrPauseSong() {
    if (this.song.paused) {
      this.song.play();
      $("#play img").attr("src", "assets/pause.jpg");
    } else {
      this.song.pause();
      $("#play img").attr("src", "assets/play.jpg");
    }
  }
  
  // this.song.addEventListener('timeupdate', function () {
  //   var position = this.song.currentTime / this.song.duration;
  //   this.fillBar.style.width = position * 100 + '%';
  // });
  next() {
    this.currentSong++;
    if (this.currentSong > 6) {
      this.currentSong = 0;
    }
    $("#play img").attr("src", "assets/pause.jpg");
    $("#image img").attr("src", this.poster[this.currentSong]);
    $("#bg img").attr("src", this.poster[this.currentSong]);

    this.playSong()
    // .then(next => console.log("ok"));
    
  }
  pre() {
    this.currentSong--;
    if (this.currentSong < 0) {
      this.currentSong = 6;
    }
    this.playSong();
    $("#play img").attr("src", "pause.jpg");
    $("#image img").attr("src", this.poster[this.currentSong]);
    $("#bg img").attr("src", this.poster[this.currentSong]);
  }


}


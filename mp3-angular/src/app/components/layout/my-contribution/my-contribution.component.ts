import { Component, OnInit, OnDestroy } from '@angular/core';
import { Songs } from 'src/app/model/song/songs';
import { Singgers } from 'src/app/model/singger/singgers';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { SinggerServiceService } from 'src/app/service/singger-service.service';
import { SongServiceService } from 'src/app/service/song-service.service';

@Component({
  selector: 'app-my-contribution',
  templateUrl: './my-contribution.component.html',
  styleUrls: ['./my-contribution.component.css']
})
export class MyContributionComponent implements OnInit {

  public songs: Songs[];
  public singger: Singgers[];
  public subscription: Subscription;
  public subscriptionSingger: Subscription;

  constructor(
    public songService: SongServiceService,
    public routerService: Router,
    public routerActivatedService: ActivatedRoute,
    public singerService: SinggerServiceService,
    ) { }


    ngOnInit() {
      this.subscription = this.songService.getAllSong().subscribe(data => {
        this.songs = data;
      })
      this.subscriptionSingger = this.singerService.getAllArtist().subscribe(data => {
        this.singger = data;
      })
    }
    ngOnDestroy() {
      if (this.subscription) {
        this.subscription.unsubscribe();
      }
      if (this.subscriptionSingger) {
        this.subscriptionSingger.unsubscribe();
      }
    }
}

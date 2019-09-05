import { Component, OnInit, OnDestroy } from '@angular/core';
import { Singgers } from 'src/app/model/singger/singgers';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { SinggerServiceService } from 'src/app/service/singger-service.service';

@Component({
  selector: 'app-singer-add',
  templateUrl: './singer-add.component.html',
  styleUrls: ['./singer-add.component.css']
})
export class SingerAddComponent implements OnInit, OnDestroy {

  public singger: Singgers;
  public subscription: Subscription;

  constructor(public singgerService: SinggerServiceService,
    public routerService: Router) { }

  ngOnInit() {
    this.singger = new Singgers();
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  onAddSingger() {

    this.subscription = this.singgerService.addArtist(this.singger).subscribe(data => {
      if (data.id && data) {
        this.routerService.navigate(['/my-contribution']);
      }
    });

  }

}

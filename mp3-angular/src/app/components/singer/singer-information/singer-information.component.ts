import { Component, OnInit } from '@angular/core';
import { SinggerServiceService } from 'src/app/service/singger-service.service';
import { Singgers } from 'src/app/model/singger/singgers';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-singer-information',
  templateUrl: './singer-information.component.html',
  styleUrls: ['./singer-information.component.css']
})
export class SingerInformationComponent implements OnInit {

  singer: any;
  public subscriptionParams: Subscription;
  constructor(
    private singerService: SinggerServiceService,
    private activeRouterService: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.activeRouterService.params.subscribe((data: Params) => {
      let id = data.id;
      this.singerService.getSinger(id).subscribe(
        next => {
          this.singer = next;
        }
      )
    })
  }

  delete(){
    this.activeRouterService.params.subscribe((pama:Params)=>{
      let id = pama.id;
      this.singerService.deleteSinger(id).subscribe(()=>{
        this.router.navigate(['/singer-list'])
      })
    })
  }
}

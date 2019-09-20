import { Component, OnInit } from '@angular/core';
import { SinggerServiceService } from 'src/app/service/singger-service.service';
import { Singgers } from 'src/app/model/singger/singgers';

@Component({
  selector: 'app-singer-list',
  templateUrl: './singer-list.component.html',
  styleUrls: ['./singer-list.component.css']
})
export class SingerListComponent implements OnInit {

  imagePath: string;
  singers: Singgers[];
  constructor(private singerService: SinggerServiceService) { }

  ngOnInit() {
    this.singerService.getAllSinger().subscribe(data => {
      this.singers = data;
      console.log(this.singers);
    });

  }

  singerInfo(id: number) {

  }
}

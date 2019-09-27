import { Component, OnInit } from '@angular/core';
import { SinggerServiceService } from 'src/app/service/singger-service.service';
import { Singgers } from 'src/app/model/singger/singgers';
import { JwtStorageService } from 'src/app/service/jwt-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-singer-list',
  templateUrl: './singer-list.component.html',
  styleUrls: ['./singer-list.component.css']
})
export class SingerListComponent implements OnInit {

  imagePath: string;
  singers: Singgers[];
  constructor(private singerService: SinggerServiceService,
              private storage: JwtStorageService,
              private router: Router) { }

  ngOnInit() {
    this.singerService.getAllSinger().subscribe(data => {
      this.singers = data;
    });

  }

  singerInfor(id: number) {
   const myId = id.toString();
   this.storage.saveSinger(myId);
   this.router.navigate(['/singer-infor']);
  }
}

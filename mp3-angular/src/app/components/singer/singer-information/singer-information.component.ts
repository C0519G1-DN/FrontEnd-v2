import { Component, OnInit } from '@angular/core';
import { SinggerServiceService } from 'src/app/service/singger-service.service';
import { Singgers } from 'src/app/model/singger/singgers';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { SingerCommentService } from 'src/app/service/singer-comment.service';
import { SingerComment } from 'src/app/model/singger/singerComments';
import { JwtStorageService } from 'src/app/service/jwt-storage.service';

@Component({
  selector: 'app-singer-information',
  templateUrl: './singer-information.component.html',
  styleUrls: ['./singer-information.component.css']
})
export class SingerInformationComponent implements OnInit {
  idUser = parseInt(this.storage.getID());
  idSinger = parseInt(this.storage.getSinger())
  singer: any;
  public subscriptionParams: Subscription;
  comment: any;
  comments: any;
  singerComment: SingerComment;
  constructor(
    private singerService: SinggerServiceService,
    private activeRouterService: ActivatedRoute,
    private router: Router,
    private singerCommentService: SingerCommentService,
    private storage: JwtStorageService
  ) { }
  ngOnInit() {
    this.showInforsinger();
    this.showAllCommentOfSinger(this.idSinger);
   }

   showInforsinger() {
     this.singerService.getSinger(this.idSinger).subscribe(
      data => {
        console.log(data);
        this.singer = data;
      }
     );
   }

    showAllCommentOfSinger(idSinger) {
    this.singerCommentService.getAllComment(idSinger).subscribe(
      data => {
        this.comment = data;
      }
    );
  }
  postComment() {
      const newComment = new SingerComment(this.idSinger, this.idUser,  this.comments);
      this.singerCommentService.postComment(newComment).subscribe(
        data => {
          window.location.reload();
        }
      );
    }

   delete() {
      if (confirm('Xóa nhé')) {
        this.singerService.deleteSinger(this.idSinger).subscribe(() => {
          this.router.navigate(['/singer-list']);
        });
    }
  }
  }

  // ngOnInit() {
  //   this.activeRouterService.params.subscribe((data: Params) => {
  //     let id = data.id;
  //     this.singerService.getSinger(id).subscribe(
  //       next => {
  //         this.singer = next;
  //       }
  //     );
  //     this.showAllCommentOfSinger(id);
  //   });
  // }


  // delete() {
  //   if (confirm('Xóa nhé')) {
  //   // this.activeRouterService.params.subscribe((pama: Params) => {
  //   //   let id = pama.id;
  //     this.singerService.deleteSinger(this.idSinger).subscribe(() => {
  //       this.router.navigate(['/singer-list']);
  //     });
  //   // });
  // }
  // }
  // showAllCommentOfSinger(id: number) {
  //   this.singerCommentService.getAllComment(id).subscribe(
  //     data => {
  //       this.comment = data;
  //     }
  //   );
  // }

  // postComment() {
  //   this.comments;
  //   let idSinger: number;
  //   this.activeRouterService.params.subscribe((data: Params) => {
  //     idSinger = data.id;
  //   })
  //   this.idUser;
  //   // tslint:disable-next-line: one-variable-per-declaration
  //   const aaaa = new SingerComment(idSinger, this.idUser,  this.comments);

  //   this.singerCommentService.postComment(aaaa).subscribe(
  //     data => {
  //       // this.ngOnInit();
  //       window.location.reload();
  //     }
  //   );
  // }


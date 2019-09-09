import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-song-cell-i-p',
  templateUrl: './song-cell-i-p.component.html',
  styleUrls: ['./song-cell-i-p.component.css']
})
export class SongCellIPComponent implements OnInit {
  @Input() name: string;
  @Input() img: string;
  @Input() singer: string;
  @Input() author: string;
  constructor() { }

  ngOnInit() {
  }

}

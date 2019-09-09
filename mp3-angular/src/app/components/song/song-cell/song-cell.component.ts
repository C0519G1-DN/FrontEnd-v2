import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-song-cell',
  templateUrl: './song-cell.component.html',
  styleUrls: ['./song-cell.component.css']
})
export class SongCellComponent implements OnInit {
  @Input() name: string;
  // @Input() img: string;
  @Input() singer: string;
  
  constructor() { }

  ngOnInit() {
  }

}

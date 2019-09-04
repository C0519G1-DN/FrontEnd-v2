import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SongCellComponent } from './song-cell.component';

describe('SongCellComponent', () => {
  let component: SongCellComponent;
  let fixture: ComponentFixture<SongCellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SongCellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SongCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

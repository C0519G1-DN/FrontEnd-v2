import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SongCellIPComponent } from './song-cell-i-p.component';

describe('SongCellIPComponent', () => {
  let component: SongCellIPComponent;
  let fixture: ComponentFixture<SongCellIPComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SongCellIPComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SongCellIPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

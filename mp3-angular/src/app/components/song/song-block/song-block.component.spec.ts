import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SongBlockComponent } from './song-block.component';

describe('SongBlockComponent', () => {
  let component: SongBlockComponent;
  let fixture: ComponentFixture<SongBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SongBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SongBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

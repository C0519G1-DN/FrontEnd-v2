import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayPlaylistComponent } from './play-playlist.component';

describe('PlayPlaylistComponent', () => {
  let component: PlayPlaylistComponent;
  let fixture: ComponentFixture<PlayPlaylistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayPlaylistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayPlaylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

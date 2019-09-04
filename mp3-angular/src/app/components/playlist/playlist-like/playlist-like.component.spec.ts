import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistLikeComponent } from './playlist-like.component';

describe('PlaylistLikeComponent', () => {
  let component: PlaylistLikeComponent;
  let fixture: ComponentFixture<PlaylistLikeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaylistLikeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaylistLikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

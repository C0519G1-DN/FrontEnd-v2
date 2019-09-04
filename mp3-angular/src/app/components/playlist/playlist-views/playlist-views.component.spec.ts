import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistViewsComponent } from './playlist-views.component';

describe('PlaylistViewsComponent', () => {
  let component: PlaylistViewsComponent;
  let fixture: ComponentFixture<PlaylistViewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaylistViewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaylistViewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

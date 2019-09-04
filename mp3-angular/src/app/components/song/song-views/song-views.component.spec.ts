import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SongViewsComponent } from './song-views.component';

describe('SongViewsComponent', () => {
  let component: SongViewsComponent;
  let fixture: ComponentFixture<SongViewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SongViewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SongViewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

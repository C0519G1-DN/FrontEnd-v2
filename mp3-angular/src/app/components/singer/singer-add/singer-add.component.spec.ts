import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingerAddComponent } from './singer-add.component';

describe('SingerAddComponent', () => {
  let component: SingerAddComponent;
  let fixture: ComponentFixture<SingerAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingerAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingerAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

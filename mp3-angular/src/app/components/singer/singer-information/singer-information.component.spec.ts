import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingerInformationComponent } from './singer-information.component';

describe('SingerInformationComponent', () => {
  let component: SingerInformationComponent;
  let fixture: ComponentFixture<SingerInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingerInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingerInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

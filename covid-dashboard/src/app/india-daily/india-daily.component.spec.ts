import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndiaDailyComponent } from './india-daily.component';

describe('IndiaDailyComponent', () => {
  let component: IndiaDailyComponent;
  let fixture: ComponentFixture<IndiaDailyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndiaDailyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndiaDailyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

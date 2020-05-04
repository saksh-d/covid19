import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndiaTrendComponent } from './india-trend.component';

describe('IndiaTrendComponent', () => {
  let component: IndiaTrendComponent;
  let fixture: ComponentFixture<IndiaTrendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndiaTrendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndiaTrendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

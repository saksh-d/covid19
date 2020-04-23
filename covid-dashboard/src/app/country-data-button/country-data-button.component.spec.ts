import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryDataButtonComponent } from './country-data-button.component';

describe('CountryDataButtonComponent', () => {
  let component: CountryDataButtonComponent;
  let fixture: ComponentFixture<CountryDataButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountryDataButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryDataButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

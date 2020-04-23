import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndiaComponentComponent } from './india-component.component';

describe('IndiaComponentComponent', () => {
  let component: IndiaComponentComponent;
  let fixture: ComponentFixture<IndiaComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndiaComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndiaComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

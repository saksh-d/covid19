import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorldTrendComponent } from './world-trend.component';

describe('WorldTrendComponent', () => {
  let component: WorldTrendComponent;
  let fixture: ComponentFixture<WorldTrendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorldTrendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorldTrendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

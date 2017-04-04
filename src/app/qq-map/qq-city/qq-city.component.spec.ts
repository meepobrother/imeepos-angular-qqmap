import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QqCityComponent } from './qq-city.component';

describe('QqCityComponent', () => {
  let component: QqCityComponent;
  let fixture: ComponentFixture<QqCityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QqCityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QqCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

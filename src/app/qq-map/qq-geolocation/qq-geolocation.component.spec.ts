import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QqGeolocationComponent } from './qq-geolocation.component';

describe('QqGeolocationComponent', () => {
  let component: QqGeolocationComponent;
  let fixture: ComponentFixture<QqGeolocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QqGeolocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QqGeolocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
